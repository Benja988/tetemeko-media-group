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

      {/* Main Content */}
      <div className="flex flex-col w-full min-h-screen">
        {/* Navbar */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main
          className={`
            p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16 
            transition-all duration-300 
            ${sidebarOpen ? "ml-60" : "ml-0"} 
            md:ml-60
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
