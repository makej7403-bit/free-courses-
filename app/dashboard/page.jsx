"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase"; // make sure firebase.js is created

export default function Dashboard() {
  const auth = getAuth(app);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("users_db");
    if (!data) {
      router.push("/auth"); // Not logged in
      return;
    }

    const parsed = JSON.parse(data);
    setUser(parsed[parsed.length - 1]); // last added user
  }, []);

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("users_db");
    router.push("/auth");
  };

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow rounded-xl">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">
          Welcome, {user.name}
        </h1>

        <p className="text-gray-700 mb-6">
          Email: <span className="font-semibold">{user.email}</span>
        </p>

        <p className="text-sm text-gray-500 mb-10">
          Login Date: {user.date}
        </p>

        {/* Links to other pages */}
        <div className="flex flex-col gap-3">
          <a href="/courses" className="bg-blue-600 text-white py-3 rounded-lg text-center">
            View Courses
          </a>
          <a href="/books" className="bg-green-600 text-white py-3 rounded-lg text-center">
            Browse Books
          </a>
          <a href="/scholarships" className="bg-purple-600 text-white py-3 rounded-lg text-center">
            Scholarship Updates
          </a>
          <a href="/ai" className="bg-orange-600 text-white py-3 rounded-lg text-center">
            AI Assistant
          </a>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-10 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
