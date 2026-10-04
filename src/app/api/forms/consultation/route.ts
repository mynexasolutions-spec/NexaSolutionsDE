import { NextResponse } from "next/server";
import { createConsultationRecord } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, callType, callDuration, dateSlot, timeSlot } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    const result = await createConsultationRecord({
      name,
      email,
      company: company || null,
      call_type: `${callType || "Discovery"} (${callDuration || "15 Min"})`,
      call_duration: callDuration || "15 Min",
      date_slot: dateSlot || null,
      time_slot: timeSlot || null,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully",
      record: result.record,
      supabase: result.supabase,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Booking failed" },
      { status: 500 }
    );
  }
}
