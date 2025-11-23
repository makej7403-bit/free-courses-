// pages/courses.js

import { useEffect, useState } from "react";

export default function Courses() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Free Online Courses
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading courses...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-2 min-h-[80px]">{course.description}</p>

              <p className="text-gray-600 mt-2">
                <strong>Category:</strong> {course.category}
              </p>

              <p className="text-gray-600">
                <strong>Difficulty:</strong> {course.level}
              </p>

              <button
                onClick={() => alert(`Starting course: ${course.title}`)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Start Course
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
