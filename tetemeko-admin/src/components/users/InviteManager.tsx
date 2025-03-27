"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InviteManager() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendInvite = async () => {
    if (!isValidEmail(email)) {
      setMessage("❌ Please enter a valid email.");
      return;
    }

    try {
      // Simulate sending invite (replace with API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage(`✅ Invitation sent to ${email}!`);
      setEmail(""); // Clear input after sending
    } catch (error) {
      setMessage("❌ Failed to send invitation. Try again.");
    }
  };

  return (
    <Card className="p-6 shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Invite a Manager</h2>
      <Input 
        type="email" 
        placeholder="Enter email address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Button onClick={handleSendInvite} className="mt-4 w-full">Send Invitation</Button>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </Card>
  );
}
