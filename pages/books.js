// pages/books.js

import { useEffect, useState } from "react";

export default function Books() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setBooks(data.data);
      } catch (error) {
        console.error("Error loading books:", error);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Online Books Library
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading books...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {book.title}
              </h2>

              <p className="text-gray-700 mt-1">
                <strong>Author:</strong> {book.author}
              </p>

              <p className="text-gray-600 mt-2 min-h-[80px]">
                {book.description}
              </p>

              <a
                href={book.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Read / Download
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
