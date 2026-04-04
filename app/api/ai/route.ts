import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Return ONLY valid JSON. No explanation.

Format:
{
  "category": "",
  "budget": number,
  "keywords": []
}
`,
        },
        {
          role: "user",
          content: query,
        },
      ],
    });

    const text = response.choices[0].message.content || "";

    console.log("AI RAW:", text); // 👈 DEBUG

    // 🧠 Extract JSON safely
    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      return NextResponse.json({
        category: "",
        budget: 100000,
        keywords: [],
      });
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return NextResponse.json(parsed);

  } catch (error) {
    console.error("AI ERROR:", error);

    return NextResponse.json({
      category: "",
      budget: 100000,
      keywords: [],
    });
  }
}