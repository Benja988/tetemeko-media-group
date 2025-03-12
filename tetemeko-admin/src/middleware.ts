// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const res = await fetch("http://localhost:5000/api/auth/verify", {
//     method: "GET",
//     credentials: "include",
//   });

//   if (!res.ok) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
