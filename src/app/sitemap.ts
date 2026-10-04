import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";
import { getBlogsList } from "@/lib/db";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nexa-solutions.de"
).replace(/\/$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/web-development`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/mobile-app-development`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-automation`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/our-work`,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  let posts: any[] = [];

  try {
    const dbResult = await getBlogsList();

    posts =
      dbResult?.blogs &&
      Array.isArray(dbResult.blogs) &&
      dbResult.blogs.length > 0
        ? dbResult.blogs
        : blogPosts;
  } catch {
    posts = blogPosts;
  }

  const postRoutes: MetadataRoute.Sitemap = posts
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      ...(post.updated_at
        ? {
            lastModified: new Date(post.updated_at),
          }
        : {}),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));

  const allRoutes = [...staticRoutes, ...postRoutes];

  return Array.from(
    new Map(allRoutes.map((route) => [route.url, route])).values()
  );
}
