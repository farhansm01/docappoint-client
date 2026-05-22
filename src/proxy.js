import { NextResponse } from "next/server";

export function proxy(request) {
  const session = request.cookies.get("better-auth.session_token");
  const { pathname } = request.nextUrl;

  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};