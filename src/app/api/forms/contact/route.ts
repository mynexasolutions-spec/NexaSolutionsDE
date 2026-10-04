import { NextResponse } from "next/server";
import { createContactRecord } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    const result = await createContactRecord({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || "Website-Entwicklung",
      message: message || "Kontaktformular übermittelt.",
    });

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
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
