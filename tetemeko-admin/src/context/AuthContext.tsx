"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  isManager: boolean;
  registerUser: (name: string, email: string, password: string) => Promise<void>;
  registerAdmin: (name: string, email: string, password: string, adminSecret: string) => Promise<void>;
  registerManager: (name: string, email: string, password: string, invitationCode: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch user profile if token exists
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
  
      try {
        const data = await apiRequest("/auth/profile", "GET", null, token);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data)); // ✅ Ensure user persists
      } catch (error) {
        toast.error("Session expired. Please log in again.");
        logout();
      } finally {
        setLoading(false);
      }
    };
  
    fetchProfile();
  }, []);
  

  // Persist user session
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
  
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`; // ✅ Restore token globally
    }
  }, []);
  

  // Redirect if user (not admin) is unverified
  useEffect(() => {
    if (user && !user.isVerified && user.role !== "admin") {
      router.push(`/auth/verify-email?token=${localStorage.getItem("token")}`);
    }
  }, [user, router]);
  

  const registerUser = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      await apiRequest("/auth/register-user", "POST", { name, email, password });
      toast.success("User registered successfully! Please verify your email.");
      router.push("/auth/verify");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to register user.");
    } finally {
      setLoading(false);
    }
  };

  const registerAdmin = async (name: string, email: string, password: string, adminSecret: string) => {
    try {
      setLoading(true);
      await apiRequest("/auth/register-admin", "POST", { name, email, password, adminSecret });
      toast.success("Admin registered successfully! Redirecting to login...");
      router.push("/auth/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to register admin.");
    } finally {
      setLoading(false);
    }
  };

  const registerManager = async (name: string, email: string, password: string, invitationCode: string) => {
    try {
      setLoading(true);
      const response = await apiRequest("/auth/register-manager", "POST", { name, email, password, invitationCode });
  
      if (response.verificationUrl) {
        toast.success("Manager registered successfully! Please verify your email.");
        router.push(response.verificationUrl); // ✅ Redirect to verification page
      } else {
        toast.error("Registration successful, but verification URL missing.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to register manager.");
    } finally {
      setLoading(false);
    }
  };
  

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const data = await apiRequest("/auth/login", "POST", { email, password });
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  
      setUser(data.user);
  
      if (!data.user.isVerified) {
        toast.warning("Please verify your email before accessing the dashboard.");
        router.push(`/auth/verify-email?token=${data.token}`);
      } else {
        toast.success("Login successful! Redirecting...");
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };
  
  

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ Remove user from localStorage
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    toast.info("Logged out successfully.");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin: user?.role === "admin", isManager: user?.role === "manager", registerUser, registerAdmin, registerManager, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
