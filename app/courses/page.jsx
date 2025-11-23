"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("users_db");
    if (!data) {
      router.push("/auth"); // Redirect if not logged in
      return;
    }

    const parsed = JSON.parse(data);
    setUser(parsed[parsed.length - 1]);
  }, []);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );

  // Example course data — you can expand later
  const courses = [
    { id: 1, title: "Nursing Essentials", category: "Nursing", level: "Beginner" },
    { id: 2, title: "Civil Engineering Basics", category: "Engineering", level: "Intermediate" },
    { id: 3, title: "Fullstack Web Development", category: "Computer Science", level: "Advanced" },
    { id: 4, title: "Business Management", category: "Business", level: "Beginner" },
    { id: 5, title: "Software Engineering", category: "Computer Science", level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-[#fefcf5] p-10">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-2xl border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Explore Courses
        </h1>

        <p className="text-gray-700 mb-6">
          Below is a list of curated courses available for you.
        </p>

        {/* Courses List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-5 bg-blue-50 border rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-xl font-bold text-blue-800">{course.title}</h2>
              <p className="text-gray-600 mt-2">
                Category: <span className="font-semibold">{course.category}</span>
              </p>
              <p className="text-gray-600">
                Level: <span className="font-semibold">{course.level}</span>
              </p>

              <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-900">
                View Course
              </button>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-10 w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
