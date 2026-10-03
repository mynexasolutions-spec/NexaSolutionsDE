import { NextResponse } from "next/server";
import { createQueryRecord } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, topic, callType, callDuration, dateSlot, timeSlot } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    const message = topic || `Erstgespräch (${callType || "Discovery"}, ${callDuration || "15 Min"}) gebucht für ${dateSlot || "Slot"} um ${timeSlot || "10:00"} CET.`;

    const result = await createQueryRecord({
      type: "consultation",
      name,
      email,
      company: company || null,
      topic: topic || null,
      call_type: `${callType || "Discovery"} (${callDuration || "15 Min"})`,
      date_slot: dateSlot || null,
      time_slot: timeSlot || null,
      message,
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
