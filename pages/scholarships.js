// pages/scholarships.js

import { useEffect, useState } from "react";

export default function Scholarships() {
  const [loading, setLoading] = useState(true);
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/scholarships");
        const data = await res.json();
        setScholarships(data.data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Available Scholarships
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading scholarships...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scholarships.map((sch) => (
            <div
              key={sch.id}
              className="bg-white shadow-lg p-6 rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {sch.title}
              </h2>
              <p className="text-gray-600 mt-2">
                <strong>Country:</strong> {sch.country}
              </p>
              <p className="text-gray-600">
                <strong>Level:</strong> {sch.level}
              </p>
              <p className="text-gray-600">
                <strong>Deadline:</strong> {sch.deadline}
              </p>

              <a
                href={sch.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
