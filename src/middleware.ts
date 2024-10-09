import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/user-info", "/change-password"];
const authPaths = ["/login", "/forget-password"];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("user_info")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    return NextResponse.redirect(new URL("/user-info", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [...privatePaths, ...authPaths],
};
