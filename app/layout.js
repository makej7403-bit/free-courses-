export const metadata = {
  title: "FreeCourses by Akin",
  description:
    "A global platform providing free courses, AI learning support, and advanced knowledge powered by OpenAI.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(135deg, #f5e9d3, #c7e6ff)",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
