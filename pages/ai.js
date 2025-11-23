// pages/ai.js

import { useState } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { sender: "user", text: input };
    setMessages((old) => [...old, userMsg]);

    const userInput = input;
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      // Add AI response
      const botMsg = { sender: "bot", text: data.reply };
      setMessages((old) => [...old, botMsg]);
    } catch (error) {
      const errorMsg = {
        sender: "bot",
        text: "⚠️ Error communicating with AI assistant.",
      };
      setMessages((old) => [...old, errorMsg]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">AI Assistant</h1>

      {/* Chat Area */}
      <div className="bg-white border border-gray-300 rounded-xl shadow-xl p-4 h-[500px] overflow-y-scroll">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">
            Start chatting with your AI assistant 👇
          </p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`my-3 p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="mt-4 flex gap-3">
        <input
          type="text"
          className="flex-1 border border-gray-400 rounded-xl px-4 py-2"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
