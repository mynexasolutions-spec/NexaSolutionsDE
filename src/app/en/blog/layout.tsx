import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tech Blog: n8n, Next.js & Mobile Apps | Nexa Solutions",
  description:
    "Engineering insights & practical guides on n8n automation, Next.js web development, mobile apps, and enterprise AI systems. Explore expert articles!",
  path: "/en/blog",
  languages: {
    "de-DE": `${SITE_URL}/blog`,
    "en-US": `${SITE_URL}/en/blog`,
    "x-default": `${SITE_URL}/blog`,
  },
  locale: "en_US",
  alternateLocale: ["de_DE"],
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tech Blog: n8n, Next.js & Mobile Apps - Nexa Solutions",
  description:
    "Engineering insights and technical guides on web development, cross-platform mobile apps, and n8n AI workflow automation.",
  url: `${SITE_URL}/en/blog`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE_URL}/en/blog`,
    },
  ],
};

export default function EnBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />
      {children}
    </>
  );
}
