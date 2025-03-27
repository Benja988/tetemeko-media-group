import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Users, Radio, Mic, FileText } from "lucide-react";

const stats = [
  { title: "Total Users", value: "12,345", icon: Users, color: "border-blue-500", bg: "bg-blue-100", text: "text-blue-500" },
  { title: "Active Listeners", value: "1,230", icon: Radio, color: "border-red-500", bg: "bg-red-100", text: "text-red-500" },
  { title: "Live Shows Now", value: "5", icon: Mic, color: "border-orange-500", bg: "bg-orange-100", text: "text-orange-500" },
  { title: "Published Articles", value: "320", icon: FileText, color: "border-green-500", bg: "bg-green-100", text: "text-green-500" },
];

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ title, value, icon: Icon, color, bg, text }, index) => (
        <Card
          key={index}
          className={`shadow-md rounded-lg flex flex-col h-24 border-b-4 ${color} transition-transform duration-300 hover:scale-105`}
        >
          <div className="flex flex-row items-center justify-between p-3">
            <div className={`p-2 rounded-md ${bg}`}>
              <Icon size={22} className={text} />
            </div>
            <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
            <CardContent className="p-3 pt-0">
            <p className="text-xl font-bold text-gray-900">{value}</p>
          </CardContent>
          </div>
          
        </Card>
      ))}
    </div>
  );
}
