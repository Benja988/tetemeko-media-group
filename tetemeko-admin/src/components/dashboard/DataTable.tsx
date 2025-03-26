import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const recentUsers = [
  { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com", joined: "2025-03-20" },
  { id: 2, name: "Bob Smith", role: "Manager", email: "bob@example.com", joined: "2025-03-18" },
  { id: 3, name: "Charlie Brown", role: "User", email: "charlie@example.com", joined: "2025-03-15" },
];

export function DataTable() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
