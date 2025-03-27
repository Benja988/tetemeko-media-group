"use client";

export function DashboardCopyright() {
  return (
    <footer className="w-full bg-gray-100 text-gray-400 text-sm text-center py-4">
      <p>
        &copy; {new Date().getFullYear()} Tetemeko Media Group. All rights reserved.
      </p>
    </footer>
  );
}
