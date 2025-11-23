// pages/auth.js

import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/router";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC7cAN-mrE2PvmlQ11zLKAdHBhN7nUFjHw",
  authDomain: "fir-u-c-students-web.firebaseapp.com",
  databaseURL: "https://fir-u-c-students-web-default-rtdb.firebaseio.com",
  projectId: "fir-u-c-students-web",
  storageBucket: "fir-u-c-students-web.firebasestorage.app",
  messagingSenderId: "113569186739",
  appId: "1:113569186739:web:d8daf21059f43a79e841c6"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function AuthPage() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login successful! Redirecting...");
      router.push("/dashboard");
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard"); // Redirect if already logged in
      }
    });
  }, []);

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
