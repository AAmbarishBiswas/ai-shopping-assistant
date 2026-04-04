import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { products, query } = await req.json();

    if (!products || products.length < 2) {
      return NextResponse.json({
        result: "Select at least 2 products",
      });
    }

    const formatted = products
      .map((p: any) => `${p.name} - ₹${p.price} - ⭐${p.rating}`)
      .join("\n");

    try {
      // 🤖 Try AI first
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
User wants: ${query}

Compare:
${formatted}
`,
          },
        ],
      });

      return NextResponse.json({
        result:
          response.choices?.[0]?.message?.content ||
          "No result",
      });

    } catch (aiError: any) {
      console.error("AI FAILED:", aiError.message);

      // 🧠 Fallback logic (manual comparison)
      const best = products.reduce((a: any, b: any) =>
        a.rating > b.rating ? a : b
      );

      return NextResponse.json({
        result: `⭐ Best Choice: ${best.name}

Reason:
- Highest rating (${best.rating})
- Good value for price

(Using fallback mode — AI quota exceeded)`,
      });
    }

  } catch (error) {
    console.error("COMPARE ERROR:", error);

    return NextResponse.json({
      result: "Comparison failed",
    });
  }
}