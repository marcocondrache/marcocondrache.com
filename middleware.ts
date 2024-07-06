import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware(req: NextRequest) {
  const isMaintenanceMode = await get("isMaintenanceMode");

  if (isMaintenanceMode) {
    req.nextUrl.pathname = "/maintenance";
    return NextResponse.rewrite(req.nextUrl);
  }
}
