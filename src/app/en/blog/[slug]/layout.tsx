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

  const rawTitle = (post.titleEn || "").replace(/\s*\|\s*Nexa(?: Solutions)?\s*$/i, "").trim();
  const brandSuffix = " | Nexa Solutions";
  const MAX = 60;
  // Cut at a word boundary (a plain slice left titles ending mid-word)
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
    description: trimMetaDescription(post.excerptEn || post.excerptDe),
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
