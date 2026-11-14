import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const protocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim() || request.nextUrl.protocol.replace(":", "");
  if (host === "www.footfalliq.in" || (host === "footfalliq.in" && protocol === "http")) {
    return NextResponse.redirect(new URL(request.nextUrl.pathname + request.nextUrl.search, "https://footfalliq.in"), 301);
  }
  const response = NextResponse.next();
  if (process.env.SEO_INDEXING_ENABLED === "false" || (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production")) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}
