import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/data/blogData";
import { solutionsData } from "@/data/solutions";
import { servicesData } from "@/data/servicesData";
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
  const lastModDate = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services/web-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/mobile-app-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/ai-automation`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/mvp-development`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/custom-crm-systems`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: lastModDate,
      changeFrequency: "yearly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/website-kosten`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/app-entwickeln-lassen-kosten`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/loesungen`,
      lastModified: lastModDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: lastModDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Solution routes from Phase 2
  const solutionRoutes: MetadataRoute.Sitemap = solutionsData.map((solution) => {
    const lastModified = toValidDate(solution.updatedAt);
    return {
      url: `${SITE_URL}/loesungen/${solution.slug}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "weekly" as const,
      priority: 0.85,
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
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    }
  );

  // All 20 Localized Service detail routes (20 German + 20 English = 40 pages)
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.flatMap((service) => [
    {
      url: `${SITE_URL}/de/services/${service.slugDe}`,
      lastModified: lastModDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/en/services/${service.slugEn}`,
      lastModified: lastModDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
  ]);

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...postRoutes,
  ];

  return Array.from(
    new Map(allRoutes.map((route) => [route.url, route])).values()
  );
}
