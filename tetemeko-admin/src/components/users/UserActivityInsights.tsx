"use client";

import React, { useEffect, useState } from "react";
import { User, users } from "@/data/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { UserCheck, UserX, Users } from "lucide-react";

const UserActivityInsights: React.FC = () => {
  const [roleCounts, setRoleCounts] = useState<Record<string, number>>({});
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);

  useEffect(() => {
    // Count roles
    const roles = users.reduce((acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    setRoleCounts(roles);

    // Count active/inactive users
    const active = users.filter(user => user.isActive).length;
    setActiveCount(active);
    setInactiveCount(users.length - active);
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">User Activity Insights</h2>

      {/* User Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-blue-500" />
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{users.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-2">
            <UserCheck className="w-6 h-6 text-green-500" />
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">{activeCount}</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardHeader className="flex items-center space-x-2">
            <UserX className="w-6 h-6 text-red-500" />
            <CardTitle>Inactive Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-500">{inactiveCount}</p>
          </CardContent>
        </Card>
      </div>

      {/* Active vs Inactive Progress Bar */}
      <Card className="bg-white shadow-md mb-6">
        <CardHeader>
          <CardTitle>Active vs Inactive Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm font-medium mb-2">
            <span>Active Users ({activeCount})</span>
            <span>Inactive Users ({inactiveCount})</span>
          </div>
          <Progress value={(activeCount / users.length) * 100} className="h-3" />
        </CardContent>
      </Card>

      {/* Role Distribution */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle>Role Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {Object.entries(roleCounts).map(([role, count]) => (
              <Badge key={role} variant="outline" className="px-3 py-2 text-md">
                {role.charAt(0).toUpperCase() + role.slice(1)}: <strong>{count}</strong>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserActivityInsights;
