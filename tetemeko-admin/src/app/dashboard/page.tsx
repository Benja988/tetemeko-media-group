"use client";
import { useAuth } from "@/context/AuthContext";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { DataTable } from "@/components/dashboard/DataTable";
import { DashboardSocialStats } from "@/components/dashboard/DashboardSocialStats";
import { DashboardCopyright } from "@/components/dashboard/DashboardCopyright";
import { useState, useEffect } from "react";

export default function Dashboard() {
  useAuthGuard(); // Ensure protected routes

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
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
          <p className="mt-2 text-gray-600">Role: {user.role}</p>
          <button
            onClick={logout}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Sections */}
        <DashboardCards />
        <DashboardCharts />
        <DashboardSocialStats />

        <DataTable />
      </main>

      {/* Copyright Section at the Bottom */}
      <DashboardCopyright />
    </div>
  );
}
