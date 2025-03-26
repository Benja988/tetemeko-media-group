"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function RegisterAdmin() {
  const { registerAdmin } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", adminSecret: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerAdmin(form.name, form.email, form.password, form.adminSecret);
      toast.success("Admin registered successfully! Redirecting to login...");
    } catch (err) {
      toast.error("Failed to register admin. Please check the admin secret and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-darkblue-500">Register Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            <Input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <Input type="text" name="adminSecret" placeholder="Admin Secret" value={form.adminSecret} onChange={handleChange} required />
            <Button type="submit" disabled={loading}>{loading ? "Registering..." : "Register Admin"}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
