import { NextResponse } from "next/server";
import { getBlogsList, saveBlogRecord, deleteBlogRecord } from "@/lib/db";

export async function GET() {
  try {
    const result = await getBlogsList();
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to load blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title_de && !body.title_en) {
      return NextResponse.json(
        { error: "At least one title (DE or EN) is required" },
        { status: 400 }
      );
    }

    const result = await saveBlogRecord(body);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to save blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing id or slug" }, { status: 400 });
    }

    const result = await deleteBlogRecord(id);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to delete blog" },
      { status: 500 }
    );
  }
}
