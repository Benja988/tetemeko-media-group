import { Home, Users, Radio, Newspaper, Mic, ShoppingCart, Settings } from "lucide-react";

export const sidebarMenuItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
    subcategories: [
      { name: "All Users", href: "/dashboard/users/all-users" },
      { name: "Manage Users", href: "/dashboard/users/manage-users" },
      { name: "Invite Managers", href: "/dashboard/users/invite-manager" },
    ],
  },
  {
    name: "Stations",
    href: "/dashboard/stations",
    icon: Radio,
    subcategories: [
      { name: "All Stations", href: "/dashboard/stations/all" },
      { name: "Live Stations", href: "/dashboard/stations/live" },
      { name: "Streaming Management", href: "/dashboard/stations/streaming" },
      { name: "Now Playing", href: "/dashboard/stations/now-playing" },
      { name: "Schedule Management", href: "/dashboard/stations/schedule" },
    ],
  },
  {
    name: "News",
    href: "/dashboard/news",
    icon: Newspaper,
    subcategories: [
      { name: "All News", href: "/dashboard/news/all" },
      { name: "Categories", href: "/dashboard/news/categories" },
    ],
  },
  { name: "Podcasts", href: "/dashboard/podcasts", icon: Mic },
  { name: "Marketplace", href: "/dashboard/marketplace", icon: ShoppingCart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];
