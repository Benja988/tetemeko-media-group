"use client";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed w-full bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      <h2 className="text-lg font-semibold">Admin Dashboard</h2>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}
