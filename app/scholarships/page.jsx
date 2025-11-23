"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ScholarshipsPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Protect page
  useEffect(() => {
    const db = localStorage.getItem("users_db");
    if (!db) {
      router.push("/auth");
      return;
    }

    const parsed = JSON.parse(db);
    setUser(parsed[parsed.length - 1]);
  }, []);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );

  // Scholarships Data – you can add unlimited
  const scholarships = [
    {
      title: "DAAD Scholarships (Germany)",
      level: "Masters, PhD",
      country: "Germany",
      link: "https://www.daad.de/en/",
    },
    {
      title: "Chevening Scholarships (UK Government)",
      level: "Masters",
      country: "United Kingdom",
      link: "https://www.chevening.org/",
    },
    {
      title: "Mastercard Foundation Scholarships",
      level: "Bachelor, Masters",
      country: "Africa & Global",
      link: "https://mastercardfdn.org/",
    },
    {
      title: "Fulbright Foreign Student Program (USA)",
      level: "Masters, PhD",
      country: "USA",
      link: "https://foreign.fulbrightonline.org/",
    },
    {
      title: "Australian Awards Scholarships",
      level: "Masters, PhD",
      country: "Australia",
      link: "https://www.dfat.gov.au/",
    },
    {
      title: "Rotary Peace Fellowship",
      level: "Masters",
      country: "Global",
      link: "https://www.rotary.org/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-blue-100">

        <h1 className="text-4xl font-bold text-blue-700">
          Global Scholarships
        </h1>
        <p className="text-gray-700 mt-2">
          Browse international scholarship opportunities for Bachelor, Masters,
          and PhD students worldwide.
        </p>

        {/* Scholarships Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarships.map((sch, index) => (
            <div
              key={index}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => window.open(sch.link, "_blank")}
            >
              <h2 className="text-2xl font-bold text-blue-900">{sch.title}</h2>
              <p className="text-gray-700 mt-2">
                <strong>Level:</strong> {sch.level}
              </p>
              <p className="text-gray-700">
                <strong>Country:</strong> {sch.country}
              </p>

              <p className="text-blue-600 mt-4 underline">Visit Website</p>
            </div>
          ))}
        </div>

        {/* Back button */}
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
