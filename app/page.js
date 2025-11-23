"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="brand">FreeCourses by Akin</div>
        <nav>
          <Link href="/courses">Courses</Link>
          <Link href="/chat">AI Tutor</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/about">About</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>

      <section className="container" style={{ marginTop: "40px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "#003b72" }}>
          Free Global Courses & AI Learning Powered by OpenAI
        </h1>

        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          Learn anything—Nursing, Engineering, IT, Computer Science, Business, and more.
          Fully powered by OpenAI and created by <b>Akin S. Sokpah</b>.
        </p>

        <Link href="/courses">
          <button className="btn" style={{ marginTop: "25px" }}>Start Learning</button>
        </Link>
      </section>

      <section className="container" style={{ marginTop: "40px" }}>
        <div className="card">
          <h2>AI Chat Assistant</h2>
          <p>Ask anything. The AI will reply instantly with accurate, updated information.</p>
          <Link href="/chat">
            <button className="btn" style={{ marginTop: "15px" }}>Chat Now</button>
          </Link>
        </div>

        <div className="card">
          <h2>Global Donations</h2>
          <p>Support Akin’s mission to give free education to the world.</p>
          <Link href="/donate">
            <button className="btn" style={{ marginTop: "15px" }}>Donate</button>
          </Link>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} FreeCourses by Akin — Powered by OpenAI
      </footer>
    </div>
  );
}
