import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/data/blogData";
import { solutionsData } from "@/data/solutions";
import { getBlogsList } from "@/lib/db";

export const revalidate = 3600;

function toValidDate(val: unknown): Date | undefined {
  if (!val) return undefined;
  if (val instanceof Date) {
    return isNaN(val.getTime()) ? undefined : val;
  }
  if (typeof val === "string" || typeof val === "number") {
    const d = new Date(val);
    return isNaN(d.getTime()) ? undefined : d;
  }
  return undefined;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/services/web-development`,
    },
    {
      url: `${SITE_URL}/services/mobile-app-development`,
    },
    {
      url: `${SITE_URL}/services/ai-automation`,
    },
    {
      url: `${SITE_URL}/projects`,
    },
    {
      url: `${SITE_URL}/blog`,
    },
    {
      url: `${SITE_URL}/contact`,
    },
    {
      url: `${SITE_URL}/loesungen`,
    },
    {
      url: `${SITE_URL}/website-kosten`,
    },
    {
      url: `${SITE_URL}/app-entwickeln-lassen-kosten`,
    },
  ];

  // Solution routes from Phase 2
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((solution) => {
    const lastModified = toValidDate(solution.updatedAt);
    return {
      url: `${SITE_URL}/loesungen/${solution.slug}`,
      ...(lastModified ? { lastModified } : {}),
    };
  });

  // Dynamic blog routes: Merge static blogPosts with published database blogs
  const blogMap = new Map<
    string,
    { slug: string; date?: string; publishedAt?: string; updated_at?: string }
  >();

  // 1. Seed with curated static blog posts
  for (const post of blogPosts) {
    if (post?.slug) {
      blogMap.set(post.slug, {
        slug: post.slug,
        date: post.date,
        publishedAt: post.publishedAt,
        updated_at: post.updatedAt,
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

        const existing = blogMap.get(blog.slug);
        blogMap.set(blog.slug, {
          slug: blog.slug,
          date: blog.date || existing?.date,
          publishedAt: existing?.publishedAt,
          updated_at: blog.updated_at || existing?.updated_at,
        });
      }
    }
  } catch (err) {
    console.warn("Sitemap: Failed to load database blogs, falling back to static posts:", err);
  }

  const postRoutes: MetadataRoute.Sitemap = Array.from(blogMap.values()).map(
    (post) => {
      const lastModified =
        toValidDate(post.updated_at) ||
        toValidDate(post.publishedAt) ||
        toValidDate(post.date);

      return {
        url: `${SITE_URL}/blog/${post.slug}`,
        ...(lastModified ? { lastModified } : {}),
      };
    }
  );

  const allRoutes = [...staticRoutes, ...solutionRoutes, ...postRoutes];

  return Array.from(
    new Map(allRoutes.map((route) => [route.url, route])).values()
  );
}
