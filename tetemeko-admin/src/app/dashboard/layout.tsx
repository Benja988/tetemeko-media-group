"use client";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/dashboard/Navbar";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-col w-full min-h-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main Content */}
        <main className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16 ml-60">
          {children}
        </main>
      </div>
    </div>
  );
}
