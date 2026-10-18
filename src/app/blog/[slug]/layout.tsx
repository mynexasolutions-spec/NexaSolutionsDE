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
        seoTitleDe: foundAny.seo_title_de || found.title_de || post?.seoTitleDe || "Blog",
        excerptDe: found.excerpt_de || post?.excerptDe || "",
        excerptEn: found.excerpt_en || post?.excerptEn || "",
      } as any;
    }
  } catch {}

  if (!post) notFound();

  const rawTitle = (post.seoTitleDe || post.titleDe).replace(/\s*\|\s*Nexa Solutions$/i, "").trim();
  const brandSuffix = " | Nexa Solutions";
  const title = (rawTitle.length + brandSuffix.length <= 55)
    ? `${rawTitle}${brandSuffix}`
    : (rawTitle.length <= 55 ? rawTitle : rawTitle.slice(0, 55));

  const deUrl = `${SITE_URL}/blog/${post.slug}`;
  const enUrl = `${SITE_URL}/en/blog/${post.slug}`;

  const metadata = pageMetadata({
    title,
    description: post.excerptDe,
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
