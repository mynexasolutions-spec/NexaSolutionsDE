import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("nexa_admin_session");

    if (session?.value) {
      return NextResponse.json({
        authenticated: true,
        user: {
          name: "Sadiq Ali",
          email: process.env.ADMIN_EMAIL || "contact@nexa-solutions.de",
          role: "Super Admin",
          avatar: "/favicon.ico",
        },
      });
    }

    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
