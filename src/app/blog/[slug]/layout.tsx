import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { getBlogsList } from "@/lib/db";
import { pageMetadata } from "@/lib/seo";

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
          titleDe: found.title_de,
          seoTitleDe: foundAny.seo_title_de || found.title_de || "Blog",
          excerptDe: found.excerpt_de,
        } as any;
      }
    } catch {}
  }

  if (!post) notFound();

  const title = `${post.seoTitleDe || post.titleDe} | Nexa Solutions`;
  const metadata = pageMetadata({
    title,
    description: post.excerptDe,
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
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
