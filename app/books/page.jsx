"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BooksPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Protect the page — only logged-in users can access
  useEffect(() => {
    const data = localStorage.getItem("users_db");
    if (!data) {
      router.push("/auth");
      return;
    }
    const parsed = JSON.parse(data);
    setUser(parsed[parsed.length - 1]);
  }, []);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  // Sample Books — you can add unlimited
  const books = [
    {
      title: "Introduction to Nursing",
      field: "Nursing",
      link: "https://example.com/nursing-book",
    },
    {
      title: "Software Engineering Basics",
      field: "Computer Science",
      link: "https://example.com/software-engineering",
    },
    {
      title: "Electric Circuits 101",
      field: "Electrical Engineering",
      link: "https://example.com/electrical",
    },
    {
      title: "Business Management Foundation",
      field: "Business",
      link: "https://example.com/business",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">Online Books</h1>
        <p className="text-gray-700 mt-2">
          Study with free, high-quality online textbooks across all fields.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => window.open(book.link, "_blank")}
            >
              <h2 className="text-2xl font-bold text-blue-900">{book.title}</h2>
              <p className="text-gray-700 mt-2">{book.field}</p>
              <p className="text-blue-600 mt-3 underline">Open Book</p>
            </div>
          ))}
        </div>

        {/* Back to Dashboard Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-10 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-800"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
