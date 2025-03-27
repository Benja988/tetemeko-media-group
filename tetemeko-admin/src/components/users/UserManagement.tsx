"use client";

import { useState } from "react";
import { User, users, UserRole } from "@/data/user";
import { Card } from "@/components/ui/card";
import UserTable from "@/components/users/UserTable";
import UserPagination from "@/components/users/UserPagination";
import UserEditDialog from "@/components/users/UserEditDialog";
import UserDeleteDialog from "@/components/users/UserDeleteDialog";

const USERS_PER_PAGE = 10;

export default function UserManagement() {
  const [userList, setUserList] = useState<User[]>(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);
  const totalPages = Math.ceil(userList.length / USERS_PER_PAGE);

  const updateUser = (userId: string, role: UserRole, status: boolean) => {
    setUserList((prev) =>
      prev.map((user) =>
        user._id === userId ? { ...user, role: role as UserRole, isActive: status } : user
      )
    );
    setEditUser(null);
  };

  const deleteUserHandler = () => {
    setUserList((prev) => prev.filter((user) => user._id !== deleteUser?._id));
    setDeleteUser(null);
  };

  return (
    <Card className="p-6 shadow-md">
      <UserTable 
        users={userList.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE)} 
        onEdit={setEditUser} 
        onDelete={setDeleteUser} 
      />
      <UserPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      
      <UserEditDialog 
        user={editUser} 
        onSave={updateUser} 
        onClose={() => setEditUser(null)} 
      />

      <UserDeleteDialog 
        user={deleteUser} 
        onDelete={deleteUserHandler} 
        onClose={() => setDeleteUser(null)} 
      />
    </Card>
  );
}
