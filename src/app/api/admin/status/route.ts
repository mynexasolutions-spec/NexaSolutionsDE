import { NextResponse } from "next/server";
import { checkSupabaseStatus } from "@/lib/db";
import { getImageKitClient } from "@/lib/imagekit";

export async function GET() {
  const dbStatus = await checkSupabaseStatus();

  let imageKitOk = false;
  try {
    const ik = getImageKitClient();
    imageKitOk = !!ik;
  } catch {
    imageKitOk = false;
  }

  return NextResponse.json({
    supabase: dbStatus,
    imagekit: {
      configured: imageKitOk,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "",
    },
  });
}
