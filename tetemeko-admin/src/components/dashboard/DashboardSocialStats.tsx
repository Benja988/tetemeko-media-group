"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample Social Media Data
const socialStats = [
  {
    platform: "Twitter",
    icon: <FaTwitter size={20} className="text-blue-400" />,
    followers: "12.5K",
    growth: "+5.3%",
    positive: true,
  },
  {
    platform: "Facebook",
    icon: <FaFacebook size={20} className="text-blue-600" />,
    followers: "34.8K",
    growth: "+3.1%",
    positive: true,
  },
  {
    platform: "Instagram",
    icon: <FaInstagram size={20} className="text-pink-500" />,
    followers: "28.2K",
    growth: "-1.8%",
    positive: false,
  },
  {
    platform: "YouTube",
    icon: <FaYoutube size={20} className="text-red-500" />,
    followers: "19.4K",
    growth: "+6.2%",
    positive: true,
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin size={20} className="text-blue-700" />,
    followers: "7.3K",
    growth: "+2.5%",
    positive: true,
  },
];

export function DashboardSocialStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
      {socialStats.map((stat) => (
        <Card key={stat.platform} className="bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-md font-semibold text-gray-700 dark:text-gray-200">
              {stat.platform}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-gray-800 dark:text-gray-200">{stat.followers}</span>
            <div className={`flex items-center text-sm font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
              {stat.growth}
              {stat.positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
