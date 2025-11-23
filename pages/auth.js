"use client";

import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC7cAN-mrE2PvmlQ11zLKAdHBhN7nUFjHw",
  authDomain: "fir-u-c-students-web.firebaseapp.com",
  databaseURL: "https://fir-u-c-students-web-default-rtdb.firebaseio.com",
  projectId: "fir-u-c-students-web",
  storageBucket: "fir-u-c-students-web.firebasestorage.app",
  messagingSenderId: "113569186739",
  appId: "1:113569186739:web:d8daf21059f43a79e841c6",
};

// Initialize Firebase only ONCE
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const provider = new GoogleAuthProvider();
const auth = getAuth();

export default function AuthPage() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const name = user.displayName;
      const email = user.email;

      // SAVE USER TO LOCAL STORAGE DB
      const existing = JSON.parse(localStorage.getItem("users_db")) || [];

      existing.push({
        name,
        email,
        date: new Date().toLocaleString(),
      });

      localStorage.setItem("users_db", JSON.stringify(existing));

      // Admin detection
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

      if (email === adminEmail) {
        localStorage.setItem(
          "admin_account",
          JSON.stringify({ name: "Akin S. Sokpah", email })
        );

        alert("Welcome Admin Akin! Redirecting to admin panel...");
        router.push("/admin");
        return;
      }

      // Normal user login redirect
      alert("Login successful! Redirecting...");
      router.push("/dashboard");

    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;

      // Auto login redirect for logged-in users
      if (user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Login To Your Account
        </h1>

        <p className="text-gray-600 mb-6">
          Sign in to access all courses, books, scholarships, and AI assistant.
        </p>

        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center gap-3 bg-blue-700 text-white w-full py-3 rounded-xl text-lg hover:bg-blue-900"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
