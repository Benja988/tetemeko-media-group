"use client";

import { useState } from "react";
import { User, users, UserRole } from "@/data/user";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const USERS_PER_PAGE = 10;

export default function AllUsers() {
  const [filterRole, setFilterRole] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter users based on selected role
  const filteredUsers = filterRole === "all" ? users : users.filter((user) => user.role === filterRole);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + USERS_PER_PAGE);

  return (
    <Card className="p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Users</h2>
        <Select onValueChange={setFilterRole} defaultValue="all">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
            <SelectItem value={UserRole.MANAGER}>Manager</SelectItem>
            <SelectItem value={UserRole.WEB_USER}>Web User</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Email</th>
              <th className="border p-3 text-left">Role</th>
              <th className="border p-3 text-left">Status</th>
              <th className="border p-3 text-left">Verified</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user: User) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3 capitalize">{user.role}</td>
                <td className="border p-3">
                  <span className={`px-2 py-1 text-sm rounded ${user.isActive ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="border p-3">{user.isVerified ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <Button 
          onClick={() => setCurrentPage(prev => prev - 1)} 
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
        <Button 
          onClick={() => setCurrentPage(prev => prev + 1)} 
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
