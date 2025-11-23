// pages/dashboard.js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7cAN-mrE2PvmlQ11zLKAdHBhN7nUFjHw",
  authDomain: "fir-u-c-students-web.firebaseapp.com",
  databaseURL: "https://fir-u-c-students-web-default-rtdb.firebaseio.com",
  projectId: "fir-u-c-students-web",
  storageBucket: "fir-u-c-students-web.firebasestorage.app",
  messagingSenderId: "113569186739",
  appId: "1:113569186739:web:d8daf21059f43a79e841c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth"); // Redirect if logged out
      } else {
        setUser(currentUser);
      }
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
    router.push("/auth");
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-16 h-16 rounded-full shadow border"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-800">
              Welcome, {user.displayName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <button
            onClick={() => router.push("/courses")}
            className="bg-blue-700 text-white p-6 rounded-xl shadow hover:bg-blue-900"
          >
            📘 View Courses
          </button>

          <button
            onClick={() => router.push("/books")}
            className="bg-green-600 text-white p-6 rounded-xl shadow hover:bg-green-700"
          >
            📚 Online Books
          </button>

          <button
            onClick={() => router.push("/scholarships")}
            className="bg-purple-700 text-white p-6 rounded-xl shadow hover:bg-purple-900"
          >
            🎓 Scholarships
          </button>

          <button
            onClick={() => router.push("/ai")}
            className="bg-orange-600 text-white p-6 rounded-xl shadow hover:bg-orange-700"
          >
            🤖 AI Assistant
          </button>

          <button
            onClick={() => router.push("/donate")}
            className="bg-yellow-600 text-black p-6 rounded-xl shadow hover:bg-yellow-700"
          >
            💝 Donation Center
          </button>

        </div>

        {/* Sign Out */}
        <button
          onClick={logout}
          className="mt-10 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
