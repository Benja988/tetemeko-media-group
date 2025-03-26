"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Radio, Newspaper, Mic, ShoppingCart, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Stations", href: "/dashboard/stations", icon: Radio },
  { name: "News", href: "/dashboard/news", icon: Newspaper },
  { name: "Podcasts", href: "/dashboard/podcasts", icon: Mic },
  { name: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingCart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const pathname = usePathname();

  return (
    <aside className={`fixed top-0 left-0 w-60 h-screen bg-gray-900 text-white shadow-lg transition-all ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
      <div className="p-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button onClick={toggle} className="md:hidden">✖</button>
      </div>

      <nav className="mt-4">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link key={name} href={href} className={`flex items-center gap-3 p-3 hover:bg-gray-700 ${pathname === href ? "bg-gray-800" : ""}`}>
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
