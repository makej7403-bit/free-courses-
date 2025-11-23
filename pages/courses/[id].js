// pages/courses/[id].js

import { useRouter } from "next/router";

export default function CourseDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Static course data for now (you will replace with real data)
  const courseList = {
    1: {
      title: "Nursing Fundamentals (Beginner)",
      description:
        "Learn the basics of nursing, patient care, medical terminology, and clinical skills.",
    },
    2: {
      title: "Advanced Human Anatomy",
      description:
        "Deep dive into the human anatomy, body systems, advanced biology, and physiology.",
    },
    3: {
      title: "Computer Science Basics",
      description:
        "Introduction to programming, algorithms, and core CS fundamentals.",
    },
    4: {
      title: "Web Development Bootcamp",
      description:
        "Learn HTML, CSS, JavaScript, Next.js, APIs, and build modern websites.",
    },
    5: {
      title: "Civil Engineering Introduction",
      description:
        "Understand structures, materials, construction principles, and engineering basics.",
    },
    6: {
      title: "Mechanical Engineering Basics",
      description:
        "Learn machine systems, thermal dynamics, mechanical principles, and tools.",
    },
  };

  const course = courseList[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-red-600">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl w-full">

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="bg-gray-700 text-white px-5 py-2 rounded-xl mb-5 hover:bg-gray-900"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-blue-900 mb-4">{course.title}</h1>

        <p className="text-gray-700 text-lg mb-8">{course.description}</p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          📘 Course Lessons
        </h2>

        <p className="text-gray-600 mb-8">
          Lessons for this course will be added here.  
          (You can upload text, videos, AI lessons, or PDF content later.)
        </p>

        {/* AI Ask Button */}
        <button
          onClick={() => alert("AI feature will be added after full integration.")}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-900"
        >
          🤖 Ask AI about this course
        </button>
      </div>
    </div>
  );
}
