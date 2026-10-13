import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return new Response("Not found", { status: 404 });

  let base64 = "";
  let mime = "image/png";

  try {
    if (post.coverImage && (post.coverImage.startsWith("http://") || post.coverImage.startsWith("https://"))) {
      const imgRes = await fetch(post.coverImage);
      if (imgRes.ok) {
        const arr = await imgRes.arrayBuffer();
        base64 = Buffer.from(arr).toString("base64");
        mime = post.coverImage.endsWith(".jpg") || post.coverImage.endsWith(".jpeg") ? "image/jpeg" : "image/png";
      }
    } else if (post.coverImage) {
      const cleanPath = post.coverImage.startsWith("/") ? post.coverImage.slice(1) : post.coverImage;
      const cover = await readFile(path.join(process.cwd(), "public", cleanPath));
      base64 = cover.toString("base64");
      mime = post.coverImage.endsWith(".jpg") || post.coverImage.endsWith(".jpeg") ? "image/jpeg" : "image/png";
    }
  } catch {
    try {
      const fallback = await readFile(path.join(process.cwd(), "public", "images", "ai-robot.png"));
      base64 = fallback.toString("base64");
    } catch {}
  }

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        <img
          src={`data:${mime};base64,${base64}`}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "60px",
            background:
              "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.4) 55%, rgba(15,23,42,0) 100%)",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "#93c5fd" }}>Nexa Solutions Blog</div>
          <div style={{ fontSize: 60, fontWeight: 800, color: "#ffffff", lineHeight: 1.15, marginTop: 16 }}>
            {post.seoTitleDe}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
