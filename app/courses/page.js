"use client";

import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    { title: "Nursing Fundamentals", id: "nursing" },
    { title: "Computer Science Basics", id: "cs-basics" },
    { title: "Software Engineering", id: "software-eng" },
    { title: "Cybersecurity Essentials", id: "cyber" },
    { title: "Business Administration", id: "business" },
    { title: "Mechanical Engineering", id: "me-eng" },
    { title: "Civil Engineering", id: "civil" },
    { title: "Medical Laboratory Science", id: "med-lab" },
  ];

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#003b72" }}>
        Available Free Courses
      </h1>
      <p style={{ marginTop: "10px" }}>
        Select a course below. The AI Tutor will teach you everything step-by-step.
      </p>

      <div style={{ marginTop: "30px" }}>
        {courses.map((course) => (
          <div key={course.id} className="card" style={{ marginBottom: "20px" }}>
            <h2>{course.title}</h2>
            <Link href={`/courses/${course.id}`}>
              <button className="btn" style={{ marginTop: "10px" }}>
                Start Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
