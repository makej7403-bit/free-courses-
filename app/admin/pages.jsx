"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const adminData = localStorage.getItem("admin_account");
    if (adminData) {
      setAdmin(JSON.parse(adminData));
    }
  }, []);

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <p>Access Denied. Admin Only.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4 text-lg">Welcome, {admin.name}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Link href="/admin/users" className="block bg-white p-6 shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-2xl font-semibold">Manage Users</h2>
          <p>View all registered users</p>
        </Link>

        <Link href="/admin/courses" className="block bg-white p-6 shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
          <p>Add, edit or remove courses</p>
        </Link>

        <Link href="/admin/scholarships" className="block bg-white p-6 shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-2xl font-semibold">Manage Scholarships</h2>
          <p>Add or update scholarship information</p>
        </Link>

        <Link href="/admin/donations" className="block bg-white p-6 shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-2xl font-semibold">Manage Donations</h2>
          <p>View all donation history</p>
        </Link>

        <Link href="/admin/ai" className="block bg-white p-6 shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-2xl font-semibold">AI Settings</h2>
          <p>Update AI chat preferences</p>
        </Link>

      </div>
    </div>
  );
}
