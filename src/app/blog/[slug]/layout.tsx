import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { getBlogsList } from "@/lib/db";
import { pageMetadata, SITE_URL, trimMetaDescription } from "@/lib/seo";

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

  try {
    const dbResult = await getBlogsList();
    const found = dbResult?.blogs?.find((b) => b.slug === slug);
    if (found) {
      const foundAny = found as any;
      post = {
        ...(post || {}),
        slug: found.slug,
        titleDe: found.title_de || post?.titleDe || "Blog",
        titleEn: found.title_en || post?.titleEn || "Blog",
        // Explicit admin SEO title > curated file SEO title > plain DB title
        seoTitleDe: foundAny.seo_title_de || post?.seoTitleDe || found.title_de || "Blog",
        // Posts defined in src/data win over DB copies (the DB holds stale seeded
        // excerpts, e.g. with "Stuttgart"/old claims). DB-only posts use the DB excerpt.
        excerptDe: post?.excerptDe || found.excerpt_de || "",
        excerptEn: post?.excerptEn || found.excerpt_en || "",
      } as any;
    }
  } catch {}

  if (!post) notFound();

  // Strip any brand suffix ("| Nexa" or "| Nexa Solutions") before re-adding it once
  const rawTitle = (post.seoTitleDe || post.titleDe).replace(/\s*\|\s*Nexa(?: Solutions)?\s*$/i, "").trim();
  const brandSuffix = " | Nexa Solutions";
  const MAX = 60;
  const cutAtWord = (s: string) => {
    if (s.length <= MAX) return s;
    const cut = s.slice(0, MAX);
    const lastSpace = cut.lastIndexOf(" ");
    return (lastSpace > 30 ? cut.slice(0, lastSpace) : cut).replace(/[\s:,&–-]+$/, "");
  };
  const title = (rawTitle.length + brandSuffix.length <= MAX)
    ? `${rawTitle}${brandSuffix}`
    : cutAtWord(rawTitle);

  const deUrl = `${SITE_URL}/blog/${post.slug}`;
  const enUrl = `${SITE_URL}/en/blog/${post.slug}`;

  const metadata = pageMetadata({
    title,
    description: trimMetaDescription(post.excerptDe),
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    languages: {
      "de-DE": deUrl,
      "en-US": enUrl,
      "x-default": deUrl,
    },
    locale: "de_DE",
    alternateLocale: ["en_US"],
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
