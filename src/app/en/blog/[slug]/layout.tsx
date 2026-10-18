import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { getBlogsList } from "@/lib/db";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const dynamicParams = true;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let post = getBlogPostBySlug(slug);

  if (!post) {
    try {
      const dbResult = await getBlogsList();
      const found = dbResult?.blogs?.find((b) => b.slug === slug);
      if (found) {
        const foundAny = found as any;
        post = {
          slug: found.slug,
          titleEn: foundAny.title_en || foundAny.titleEn || "Blog",
          excerptEn: foundAny.excerpt_en || foundAny.excerptEn || "",
        } as any;
      }
    } catch {}
  }

  if (!post) notFound();

  const rawTitle = (post.titleEn || "").replace(/\s*\|\s*Nexa Solutions$/i, "").trim();
  const brandSuffix = " | Nexa Solutions";
  const title = (rawTitle.length + brandSuffix.length <= 55)
    ? `${rawTitle}${brandSuffix}`
    : (rawTitle.length <= 55 ? rawTitle : rawTitle.slice(0, 55));

  const deUrl = `${SITE_URL}/blog/${post.slug}`;
  const enUrl = `${SITE_URL}/en/blog/${post.slug}`;

  const metadata = pageMetadata({
    title,
    description: post.excerptEn || post.excerptDe,
    path: `/en/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    languages: {
      "en-US": enUrl,
      "de-DE": deUrl,
      "x-default": deUrl,
    },
    locale: "en_US",
    alternateLocale: ["de_DE"],
  });

  return {
    ...metadata,
    title: { absolute: title },
    openGraph: { ...metadata.openGraph, type: "article" },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
