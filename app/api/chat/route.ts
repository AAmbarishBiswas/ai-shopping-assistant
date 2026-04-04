import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    try {
      // 🤖 AI response
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful shopping assistant. Suggest products based on user needs.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      return NextResponse.json({
        reply:
          response.choices?.[0]?.message?.content ||
          "No response",
      });

    } catch (aiError) {
      console.error("AI FAILED");

      // 🔁 Fallback (no AI)
      return NextResponse.json({
        reply:
          "🤖 AI unavailable. Try searching products directly.",
      });
    }

  } catch (error) {
    return NextResponse.json({
      reply: "Something went wrong",
    });
  }
}