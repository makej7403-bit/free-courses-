"use client";

import { useEffect } from "react";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const existing = JSON.parse(localStorage.getItem("users_db")) || [];

      existing.push({
        name: result.user.displayName,
        email: result.user.email,
        date: new Date().toLocaleString(),
      });

      localStorage.setItem("users_db", JSON.stringify(existing));

      router.push("/dashboard");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/dashboard");
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Login To Your Account
        </h1>

        <button
          onClick={loginWithGoogle}
          className="bg-blue-700 text-white py-3 px-6 rounded-xl"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
