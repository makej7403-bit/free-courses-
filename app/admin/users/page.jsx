"use client";

import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const adminData = localStorage.getItem("admin_account");
    if (!adminData) return;
    setAdmin(JSON.parse(adminData));

    const savedUsers = JSON.parse(localStorage.getItem("users_db")) || [];
    setUsers(savedUsers);
  }, []);

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        <p>Access Denied. Admin Only.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Manage Users</h1>

      {users.length === 0 ? (
        <p>No registered users found.</p>
      ) : (
        <table className="w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Signup Date</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
