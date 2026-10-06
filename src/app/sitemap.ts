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

  // Dynamic blog routes: Merge static blogPosts with published database blogs
  const blogMap = new Map<string, any>();

  // 1. Seed with curated static blog posts
  for (const post of blogPosts) {
    if (post?.slug) {
      blogMap.set(post.slug, {
        slug: post.slug,
        date: post.date,
        updated_at: undefined,
      });
    }
  }

  // 2. Fetch newly added or updated blogs from database / CMS
  try {
    const dbResult = await getBlogsList();
    if (dbResult?.blogs && Array.isArray(dbResult.blogs)) {
      for (const blog of dbResult.blogs) {
        if (!blog?.slug) continue;
        // Exclude unpublished / draft / non-indexable posts
        const blogAny = blog as any;
        if (blogAny.status && blogAny.status !== "published") continue;

        blogMap.set(blog.slug, {
          slug: blog.slug,
          date: blog.date,
          updated_at: blog.updated_at,
        });
      }
    }
  } catch (err) {
    console.warn("Sitemap: Failed to load database blogs, falling back to static posts:", err);
  }

  const postRoutes: MetadataRoute.Sitemap = Array.from(blogMap.values()).map(
    (post) => {
      let lastModified: Date | undefined;
      if (post.updated_at) {
        lastModified = new Date(post.updated_at);
      } else if (post.date && !isNaN(Date.parse(post.date))) {
        lastModified = new Date(post.date);
      }

      return {
        url: `${baseUrl}/blog/${post.slug}`,
        ...(lastModified ? { lastModified } : {}),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      };
    }
  );

  const allRoutes = [...staticRoutes, ...postRoutes];

  return Array.from(
    new Map(allRoutes.map((route) => [route.url, route])).values()
  );
}
