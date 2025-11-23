"use client";

import { useState } from "react";

export default function CoursePage({ params }) {
  const { id } = params;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const courseNames = {
    nursing: "Nursing Fundamentals",
    "cs-basics": "Computer Science Basics",
    "software-eng": "Software Engineering",
    cyber: "Cybersecurity Essentials",
    business: "Business Administration",
    "me-eng": "Mechanical Engineering",
    civil: "Civil Engineering",
    "med-lab": "Medical Laboratory Science",
  };

  async function askAI() {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const aiMessage = { role: "assistant", content: data.reply };
    setMessages((prev) => [...prev, aiMessage]);
  }

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h1 style={{ fontSize: "34px", color: "#003b72" }}>
        {courseNames[id] || "Course"}
      </h1>

      <p style={{ marginTop: "10px" }}>
        Ask any question below. The AI tutor will guide your entire learning.
      </p>

      <div
        style={{
          marginTop: "25px",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index} style={{ marginBottom: "12px" }}>
            <b>{msg.role === "user" ? "You:" : "AI:"}</b> {msg.content}
          </p>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Ask the AI tutor anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" style={{ marginTop: "10px" }} onClick={askAI}>
          Send
        </button>
      </div>
    </div>
  );
}
