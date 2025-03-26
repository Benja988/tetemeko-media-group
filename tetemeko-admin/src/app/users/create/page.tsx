"use client";
import { useState } from "react";
import { createUser } from "@/services/users";

export default function CreateUser() {
  const [form, setForm] = useState({ email: "", role: "admin" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(form);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Create New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="User Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border mb-2"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-2 border mb-4"
        >
          <option value="admin">Admin</option>
          <option value="content_manager">Content Manager</option>
          <option value="vendor">Vendor</option>
          <option value="advertiser">Advertiser</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white w-full py-2">Create User</button>
      </form>
    </div>
  );
}
