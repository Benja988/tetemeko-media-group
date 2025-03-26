"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiRequest } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      handleVerification();
    } else {
      setError("Invalid verification link.");
    }
  }, [token]);

  const handleVerification = async () => {
    if (!token) return;
    setLoading(true);
    setError("");

    try {
      await apiRequest(`/auth/verify-email?token=${token}`, "GET");
      setVerified(true);
      toast.success("Email verified successfully! Redirecting...");
      setTimeout(() => router.push("/auth/login"), 2000);
    } catch (error) {
      setError("Invalid or expired verification link.");
      toast.error("Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendRedirect = () => {
    router.push("/auth/resend-verification");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-darkblue-500">
            Email Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {loading ? (
            <p className="text-gray-400">Processing...</p>
          ) : verified ? (
            <p className="text-green-400">✅ Email verified! Redirecting...</p>
          ) : (
            <p className="text-red-400">❌ {error || "Verification failed."}</p>
          )}

          {!verified && !loading && (
            <Button
              onClick={handleResendRedirect}
              className="w-full bg-gray-600 hover:bg-gray-700"
            >
              Resend Verification Email
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
