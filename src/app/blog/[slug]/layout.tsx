import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/data/blogData";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const title = `${post.seoTitleDe} | Nexa Solutions`;
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
