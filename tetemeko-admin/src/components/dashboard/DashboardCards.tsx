import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Radio, DollarSign, ShoppingCart } from "lucide-react";

const stats = [
  { title: "Total Users", value: "12,345", icon: Users },
  { title: "Active Stations", value: "87", icon: Radio },
  { title: "Revenue", value: "$54,321", icon: DollarSign },
  { title: "Marketplace Orders", value: "2,347", icon: ShoppingCart },
];

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ title, value, icon: Icon }, index) => (
        <Card key={index} className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon size={20} className="text-gray-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
