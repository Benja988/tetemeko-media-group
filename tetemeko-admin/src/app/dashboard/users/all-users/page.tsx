import AllUsers from "@/components/users/AllUsers";
import UserActivityInsights from "@/components/users/UserActivityInsights";

export default function allUsersPage() {
  return (
    <div>
        <UserActivityInsights />
        <AllUsers />
    </div>
  );
}