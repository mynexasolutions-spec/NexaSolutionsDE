import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const expectedEmail = process.env.ADMIN_EMAIL || "";
    const expectedPassword = process.env.ADMIN_PASSWORD || "";

    if (
      email?.trim().toLowerCase() === expectedEmail.toLowerCase() &&
      password === expectedPassword
    ) {
      const token = Buffer.from(`${email}:${Date.now()}:nexa-auth-secret`).toString("base64");
      
      const cookieStore = await cookies();
      cookieStore.set("nexa_admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({
        success: true,
        user: {
          name: "Sadiq Ali",
          email: expectedEmail,
          role: "Admin",
          avatar: "/favicon.ico",
        },
      });
    }

    return NextResponse.json(
      { success: false, message: "Ungültige E-Mail-Adresse oder Passwort" },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Login failed" },
      { status: 500 }
    );
  }
}
