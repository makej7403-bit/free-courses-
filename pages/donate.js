// pages/donate.js

export default function Donate() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-xl w-full">

        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          💝 Support The Creator
        </h1>

        <p className="text-gray-700 text-lg mb-8 text-center">
          Your donation helps us provide free courses, books, scholarships,
          and AI education to students worldwide.
        </p>

        {/* Donation Options */}
        <div className="space-y-6">

          {/* Mobile Money Section */}
          <div className="bg-blue-100 p-5 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">
              📱 Mobile Money (MTN / Orange)
            </h2>
            <p className="text-gray-700 text-xl mb-2">
              <strong>Number:</strong> +231889183557
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Name:</strong> Akin Sokpah
            </p>

            <button
              onClick={() => copyText("+231889183557")}
              className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-900"
            >
              Copy Number
            </button>
          </div>

          {/* Bank Section */}
          <div className="bg-green-100 p-5 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">
              🏦 Bank Transfer (United Bank of Africa - USD)
            </h2>
            <p className="text-gray-700 text-xl mb-2">
              <strong>Account Number:</strong> 53020710015394
            </p>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Account Name:</strong> Akin Sokpah
            </p>

            <button
              onClick={() => copyText("53020710015394")}
              className="bg-green-700 text-white px-6 py-2 rounded-xl hover:bg-green-900"
            >
              Copy Account Number
            </button>
          </div>

          {/* Facebook Section */}
          <div className="bg-purple-100 p-5 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-purple-900 mb-2">
              🌍 Facebook Profile (For verification)
            </h2>
            <a
              href="https://www.facebook.com/profile.php?id=61583456361691"
              target="_blank"
              className="text-purple-800 text-xl underline"
            >
              Tap here to open creator’s Facebook
            </a>
          </div>

          {/* Email for sending confirmation screenshots */}
          <div className="bg-yellow-100 p-5 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              📩 Send Donation Confirmation Screenshot
            </h2>
            <p className="text-gray-900 text-xl mb-2">
              <strong>Email:</strong> sokpahakinsaye@gmail.com
            </p>

            <button
              onClick={() => copyText("sokpahakinsaye@gmail.com")}
              className="bg-yellow-600 text-white px-6 py-2 rounded-xl hover:bg-yellow-700"
            >
              Copy Email
            </button>
          </div>

        </div>

        {/* Thank You */}
        <p className="text-center text-gray-700 mt-10 text-lg">
          ❤️ Thank you for supporting education and helping students worldwide.
        </p>
      </div>
    </div>
  );
}
