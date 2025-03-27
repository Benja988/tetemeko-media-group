"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  Users,
  Radio,
  Newspaper,
  Mic,
  ShoppingCart,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { sidebarMenuItems } from "@/data/sidebarMenuItems";

export function Sidebar({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside
      className={`fixed top-0 left-0 w-60 h-screen bg-gray-900 text-white shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      <div className="p-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button onClick={toggle} className="md:hidden">
          ✖
        </button>
      </div>

      <nav className="mt-4">
        {sidebarMenuItems.map(({ name, href, icon: Icon, subcategories }) => (
          <div key={name}>
            <div
              className={`flex items-center justify-between p-3 cursor-pointer hover:bg-gray-700 ${
                pathname.startsWith(href) ? "bg-gray-800" : ""
              }`}
              onClick={() => subcategories && toggleMenu(name)}
            >
              <Link href={href} className="flex items-center gap-3">
                <Icon size={18} />
                <span>{name}</span>
              </Link>
              {subcategories &&
                (openMenus[name] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                ))}
            </div>

            {/* Subcategories */}
            {subcategories && openMenus[name] && (
              <div className="ml-6 border-l border-gray-700">
                {subcategories.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className={`block p-2 pl-4 hover:bg-gray-700 ${
                      pathname === href ? "bg-gray-800" : ""
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
