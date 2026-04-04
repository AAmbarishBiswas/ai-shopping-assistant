"use client";

import { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {
      const res = await axios.post("/api/chat", {
        message: input,
      });

      const botMessage = {
        role: "bot",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error occurred" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-xl rounded-xl border">
      <div className="p-3 font-bold border-b">
        🤖 AI Assistant
      </div>

      <div className="h-60 overflow-y-auto p-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 ${
              m.role === "user"
                ? "text-right"
                : "text-left text-gray-700"
            }`}
          >
            <span className="bg-gray-100 px-2 py-1 rounded">
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex border-t">
        <input
          className="flex-1 p-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-3"
        >
          Send
        </button>
      </div>
    </div>
  );
}