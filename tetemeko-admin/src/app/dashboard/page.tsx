"use client";
import { useAuth } from "@/context/AuthContext";
import { useAuthGuard } from "@/hooks/useAuthGuard";

import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DataTable } from "@/components/dashboard/DataTable";
import { useState, useEffect } from "react";

export default function Dashboard() {
  useAuthGuard(); // ✅ Call hook at the top level, not inside useEffect

  const { user, logout } = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(true);
  }, []);

  if (!user || !isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
      <p className="mt-2">Role: {user.role}</p>
      <button
        onClick={logout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        aria-label="Logout"
      >
        Logout
      </button>
      <DashboardCards />
      <DashboardCharts />
      <DataTable />
    </div>
  );
}
