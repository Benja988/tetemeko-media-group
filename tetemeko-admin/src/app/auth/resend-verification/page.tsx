"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ResendVerificationPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResendVerification = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      await apiRequest("/auth/resend-verification", "POST", { email });
      toast.success("Verification email resent successfully! Check your inbox.");
      router.push("/auth/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to resend verification email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-darkblue-500">
            Resend Verification Email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white border-none rounded-lg focus:ring-2 focus:ring-darkblue-500"
          />
          <Button
            onClick={handleResendVerification}
            className="w-full bg-darkblue-500 hover:bg-darkblue-600"
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Verification"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
