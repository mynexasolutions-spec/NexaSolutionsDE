import { NextResponse } from "next/server";
import { createQueryRecord } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    const result = await createQueryRecord({
      type: "project",
      name,
      email,
      service: service || "Web Development",
      budget: budget || "$2k - $5k",
      message: message || "Neue Projektanfrage gestartet.",
    });

    return NextResponse.json({
      success: true,
      message: "Project request submitted successfully",
      record: result.record,
      supabase: result.supabase,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Submission failed" },
      { status: 500 }
    );
  }
}
