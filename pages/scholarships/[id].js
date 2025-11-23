// pages/scholarships/[id].js

import { useRouter } from "next/router";

export default function ScholarshipDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Temporary data (you will replace with real data later)
  const scholarships = {
    1: {
      title: "DAAD Germany Fully Funded Scholarship",
      country: "Germany",
      level: "Masters / PhD",
      benefits: "Full tuition, monthly stipend, travel allowance, health insurance.",
      requirements:
        "Bachelor degree, strong academic records, motivation letter, CV, recommendation letters.",
      deadline: "December 15, 2025",
      link: "https://daad.de",
    },
    2: {
      title: "Chevening UK Government Scholarship",
      country: "United Kingdom",
      level: "Masters",
      benefits: "Full tuition, flight tickets, monthly allowance, research support.",
      requirements:
        "Undergraduate degree, leadership experience, work experience, English proficiency.",
      deadline: "November 1, 2025",
      link: "https://chevening.org",
    },
    3: {
      title: "Fulbright Scholarship USA",
      country: "USA",
      level: "Masters / PhD",
      benefits: "Full funding, accommodation, living stipend, textbooks.",
      requirements:
        "Academic excellence, statement of purpose, recommendation letters.",
      deadline: "October 10, 2025",
      link: "https://fulbrightprogram.org",
    },
  };

  const data = scholarships[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-red-600">
        Scholarship not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl w-full">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="bg-gray-700 text-white px-5 py-2 rounded-xl mb-5 hover:bg-gray-900"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-blue-900 mb-3">{data.title}</h1>

        <p className="text-gray-700 text-lg mb-2">
          🌍 <strong>Country:</strong> {data.country}
        </p>

        <p className="text-gray-700 text-lg mb-2">
          🎓 <strong>Level:</strong> {data.level}
        </p>

        <p className="text-gray-700 text-lg mb-2">
          💰 <strong>Benefits:</strong> {data.benefits}
        </p>

        <p className="text-gray-700 text-lg mb-2">
          📌 <strong>Requirements:</strong> {data.requirements}
        </p>

        <p className="text-gray-700 text-lg mb-4">
          ⏳ <strong>Deadline:</strong> {data.deadline}
        </p>

        {/* Apply Button */}
        <a
          href={data.link}
          target="_blank"
          className="bg-green-700 text-white px-6 py-3 rounded-xl hover:bg-green-900 block text-center mb-6"
        >
          Apply Now
        </a>

        {/* AI Helper Button */}
        <button
          onClick={() => alert("AI assistance will be fully connected after OpenAI key setup.")}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-900 w-full"
        >
          🤖 Ask AI About This Scholarship
        </button>
      </div>
    </div>
  );
}
