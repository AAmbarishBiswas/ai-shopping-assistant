import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { product, query } = await req.json();

    try {
      // 🤖 Try AI first
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
User wants: ${query}

Product:
${product.name}
Price: ₹${product.price}
Rating: ${product.rating}

Explain:
- Why it's good
- Pros
- Cons
`,
          },
        ],
      });

      return NextResponse.json({
        explanation:
          response.choices?.[0]?.message?.content ||
          "No explanation available",
      });

    } catch (aiError: any) {
      console.error("AI FAILED:", aiError.message);

      // 🧠 Fallback logic
      let explanation = `📦 ${product.name}

`;

      if (product.rating >= 4.5) {
        explanation += "⭐ Excellent rating. Very reliable choice.\n";
      } else if (product.rating >= 4.0) {
        explanation += "👍 Good rating. Solid performance.\n";
      } else {
        explanation += "⚠️ Average rating. Consider alternatives.\n";
      }

      if (product.price < 50000) {
        explanation += "💰 Budget-friendly option.\n";
      } else if (product.price < 80000) {
        explanation += "💰 Mid-range pricing.\n";
      } else {
        explanation += "💰 Premium product.\n";
      }

      explanation += "\n(Using fallback mode — AI unavailable)";

      return NextResponse.json({ explanation });
    }

  } catch (error) {
    console.error("EXPLAIN ERROR:", error);

    return NextResponse.json({
      explanation: "Failed to generate explanation",
    });
  }
}