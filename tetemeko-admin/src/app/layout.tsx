"use client";

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner"; // ✅ Import Toaster

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <Toaster richColors position="top-center" /> {/* ✅ Add this for toast support */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
