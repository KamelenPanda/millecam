import { NextRequest, NextResponse } from "next/server";

/**
 * Detects the locale from the URL path (NL unprefixed, /en and /fr
 * prefixed) and forwards it as a request header so the root layout — a
 * Server Component with no direct access to the pathname — can pick the
 * right <html lang>, Nav/Footer copy, without restructuring the existing
 * NL routes into a route group.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : pathname === "/fr" || pathname.startsWith("/fr/")
      ? "fr"
      : "nl";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|opengraph-image).*)"],
};
