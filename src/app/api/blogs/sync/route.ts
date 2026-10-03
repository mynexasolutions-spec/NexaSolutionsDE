import { NextResponse } from "next/server";
import { syncBlogsToSupabase } from "@/lib/db";

export async function POST() {
  try {
    const result = await syncBlogsToSupabase();
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Sync failed" },
      { status: 500 }
    );
  }
}
