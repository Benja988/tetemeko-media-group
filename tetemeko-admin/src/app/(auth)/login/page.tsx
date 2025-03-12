// "use client";

// import { useState } from "react";
// import { loginUser } from "@/lib/auth";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const response = await loginUser(email, password);

//     if (response.message === "Login successful") {
//       router.push("/dashboard");
//     } else {
//       setError(response.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }
