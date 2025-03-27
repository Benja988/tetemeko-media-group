"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resendVerification } from "@/services/auth/resendVerification"; // ✅ Import service
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ResendVerificationPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResendVerification = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      await resendVerification(email);
      toast.success("Verification email sent! Redirecting to login...");
      setTimeout(() => router.push("/auth/login"), 3000); // ✅ Redirect after 3 seconds
    } catch (error) {
      console.error("Resend verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <Card className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-400">
            Resend Verification Email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <Button
            onClick={handleResendVerification}
            disabled={loading}
            className={`w-full text-lg py-2 rounded-md transition duration-300 ${
              loading ? "opacity-75 cursor-not-allowed" : "cursor-pointer hover:bg-blue-600"
            }`}
          >
            {loading ? "Sending..." : "Resend Verification"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
