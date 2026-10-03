import { NextResponse } from "next/server";
import { uploadToImageKit } from "@/lib/imagekit";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json({ error: "No file provided" }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = file.name || `image_${Date.now()}.png`;
      const result = await uploadToImageKit(buffer, fileName, "/nexa-solutions/blogs");

      return NextResponse.json({
        success: true,
        url: result.url,
        fileId: result.fileId,
        name: result.name,
        thumbnailUrl: result.thumbnailUrl,
      });
    } else {
      // JSON body with base64
      const body = await req.json();
      const { file, fileName, folder } = body;

      if (!file) {
        return NextResponse.json({ error: "No file content provided" }, { status: 400 });
      }

      const result = await uploadToImageKit(
        file,
        fileName || `upload_${Date.now()}.png`,
        folder || "/nexa-solutions/blogs"
      );

      return NextResponse.json({
        success: true,
        url: result.url,
        fileId: result.fileId,
        name: result.name,
        thumbnailUrl: result.thumbnailUrl,
      });
    }
  } catch (error: any) {
    console.error("ImageKit upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Image upload failed" },
      { status: 500 }
    );
  }
}
