// pages/assistant.js

import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am Akin AI Assistant — created by Akin S. Sokpah from Liberia. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl w-full p-6 flex flex-col">

        <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
          🤖 Akin Global AI Assistant
        </h1>

        {/* Chat box */}
        <div className="flex-1 overflow-y-auto mb-4 p-3 bg-gray-100 rounded-xl">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 my-2 rounded-xl max-w-xl ${
                msg.role === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-300 text-gray-900 mr-auto"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="p-3 bg-gray-300 text-gray-900 rounded-xl w-32 animate-pulse">
              Typing...
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            className="flex-1 border border-gray-400 rounded-xl p-3"
            placeholder="Ask anything..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-700 text-white px-6 rounded-xl hover:bg-blue-900"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
