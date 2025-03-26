import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  
  // If trying to access a protected route and no token is found, redirect to login
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
  matcher: ["/dashboard/:path*"], // Protect all routes inside `/dashboard`
};
