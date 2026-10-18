import { NextResponse } from "next/server";
import {
  getQueriesList,
  createQueryRecord,
  updateQueryStatusRecord,
  deleteQueryRecord,
  deleteQueriesBatch,
} from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const noCacheHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || undefined;
    const status = searchParams.get("status") || undefined;
    const type = searchParams.get("type") || undefined;

    const result = await getQueriesList({ search, status, type });
    return NextResponse.json(result, { headers: noCacheHeaders });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to load queries" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400, headers: noCacheHeaders }
      );
    }

    const result = await createQueryRecord({
      type: body.type || "contact",
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      budget: body.budget,
      topic: body.topic,
      call_type: body.call_type,
      date_slot: body.date_slot,
      time_slot: body.time_slot,
      message: body.message || "",
    });

    return NextResponse.json(result, { headers: noCacheHeaders });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create query" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing id or status" },
        { status: 400, headers: noCacheHeaders }
      );
    }

    if (!["pending", "in_progress", "resolved"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400, headers: noCacheHeaders }
      );
    }

    const result = await updateQueryStatusRecord(id, status);
    return NextResponse.json(result, { headers: noCacheHeaders });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to update query status" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");
    let ids: string[] = [];

    // Support both URL searchParams AND JSON body (for single or batch delete)
    try {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const body = await req.json();
        if (body?.ids && Array.isArray(body.ids)) {
          ids = body.ids.filter((x: any) => typeof x === "string" && x.trim().length > 0);
        } else if (body?.id) {
          id = body.id;
        }
      }
    } catch {
      // Body parsing optional
    }

    if (!id && ids.length === 0) {
      return NextResponse.json(
        { error: "Missing id or ids parameter" },
        { status: 400, headers: noCacheHeaders }
      );
    }

    if (ids.length > 0) {
      const result = await deleteQueriesBatch(ids);
      return NextResponse.json(result, { headers: noCacheHeaders });
    }

    const result = await deleteQueryRecord(id!);
    return NextResponse.json(result, { headers: noCacheHeaders });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to delete query" },
      { status: 500, headers: noCacheHeaders }
    );
  }
}
