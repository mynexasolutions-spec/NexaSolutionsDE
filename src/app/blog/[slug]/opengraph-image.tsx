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

  const cover = await readFile(path.join(process.cwd(), "public", post.coverImage));
  const mime = post.coverImage.endsWith(".png") ? "image/png" : "image/jpeg";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        <img
          src={`data:${mime};base64,${cover.toString("base64")}`}
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
