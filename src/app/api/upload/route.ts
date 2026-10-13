import { NextResponse } from "next/server";
import { uploadToImageKit } from "@/lib/imagekit";
import fs from "fs";
import path from "path";

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

      const rawName = file.name || `image_${Date.now()}.png`;
      const cleanName = rawName.replace(/[^a-zA-Z0-9._-]/g, "_");
      const fileName = cleanName.length > 0 ? cleanName : `image_${Date.now()}.png`;

      // 1. Try ImageKit CDN (with 10-second timeout to prevent UI hanging)
      try {
        const ikPromise = uploadToImageKit(buffer, fileName, "/nexa-solutions/blogs");
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("ImageKit upload timeout after 10s")), 10000)
        );
        const result = (await Promise.race([ikPromise, timeoutPromise])) as any;
        if (result && result.url) {
          return NextResponse.json({
            success: true,
            url: result.url,
            fileId: result.fileId,
            name: result.name,
            thumbnailUrl: result.thumbnailUrl,
          });
        }
      } catch (ikErr: any) {
        console.warn("ImageKit upload failed/timed out, falling back to local storage:", ikErr?.message || ikErr);
      }

      // 2. Fallback to local storage in public/images/uploads
      const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const uniqueFileName = `${Date.now()}_${fileName}`;
      const localFilePath = path.join(uploadsDir, uniqueFileName);
      fs.writeFileSync(localFilePath, buffer);

      const localUrl = `/images/uploads/${uniqueFileName}`;
      return NextResponse.json({
        success: true,
        url: localUrl,
        name: uniqueFileName,
      });
    } else {
      // JSON body with base64 or URL
      const body = await req.json();
      const { file, fileName, folder } = body;

      if (!file) {
        return NextResponse.json({ error: "No file content provided" }, { status: 400 });
      }

      try {
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
      } catch (ikErr) {
        if (typeof file === "string" && file.includes(";base64,")) {
          const base64Data = file.split(";base64,").pop();
          if (base64Data) {
            const buffer = Buffer.from(base64Data, "base64");
            const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
            if (!fs.existsSync(uploadsDir)) {
              fs.mkdirSync(uploadsDir, { recursive: true });
            }
            const uniqueFileName = `${Date.now()}_${fileName || "upload.png"}`;
            fs.writeFileSync(path.join(uploadsDir, uniqueFileName), buffer);
            return NextResponse.json({
              success: true,
              url: `/images/uploads/${uniqueFileName}`,
            });
          }
        }
        throw ikErr;
      }
    }
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Image upload failed" },
      { status: 500 }
    );
  }
}
