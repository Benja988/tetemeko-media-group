import { User } from "@/data/user";
import { Button } from "@/components/ui/button";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3 text-left">Name</th>
            <th className="border p-3 text-left">Email</th>
            <th className="border p-3 text-left">Role</th>
            <th className="border p-3 text-left">Status</th>
            <th className="border p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="border p-3">{user.name}</td>
              <td className="border p-3">{user.email}</td>
              <td className="border p-3 capitalize">{user.role}</td>
              <td className="border p-3">
                <span className={`px-2 py-1 text-sm rounded ${user.isActive ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="border p-3 flex gap-2">
                <Button onClick={() => onEdit(user)} size="sm">Edit</Button>
                <Button onClick={() => onDelete(user)} size="sm" variant="destructive">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
