"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

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

  return (
    <div className="min-h-screen bg-[#fefbf4] p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-700 mt-2">Email: {user.email}</p>
        <p className="text-gray-600 mt-1 text-sm">
          Joined: {user.date}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Courses */}
          <div
            className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/courses")}
          >
            <h2 className="text-2xl font-bold text-blue-800">Courses</h2>
            <p className="text-gray-600 mt-2">
              Explore free global courses across all fields.
            </p>
          </div>

          {/* AI Chat */}
          <div
            className="p-6 bg-blue-100 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/chat")}
          >
            <h2 className="text-2xl font-bold text-blue-900">AI Tutor</h2>
            <p className="text-gray-700 mt-2">
              Ask anything — study, books, assignments, research.
            </p>
          </div>

          {/* Books */}
          <div
            className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/books")}
          >
            <h2 className="text-2xl font-bold text-blue-800">Books</h2>
            <p className="text-gray-600 mt-2">
              Free online books across Nursing, Engineering, IT & more.
            </p>
          </div>

          {/* Scholarships */}
          <div
            className="p-6 bg-blue-100 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/scholarships")}
          >
            <h2 className="text-2xl font-bold text-blue-900">Scholarships</h2>
            <p className="text-gray-700 mt-2">
              Global scholarships updated regularly.
            </p>
          </div>

          {/* Donate */}
          <div
            className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/donate")}
          >
            <h2 className="text-2xl font-bold text-blue-800">Donate</h2>
            <p className="text-gray-600 mt-2">
              Support Akin’s mission to help people around the world.
            </p>
          </div>

          {/* About */}
          <div
            className="p-6 bg-blue-100 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => router.push("/about")}
          >
            <h2 className="text-2xl font-bold text-blue-900">About</h2>
            <p className="text-gray-700 mt-2">
              Learn more about this platform and its creator.
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("users_db");
            window.location.href = "/auth";
          }}
          className="mt-12 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
