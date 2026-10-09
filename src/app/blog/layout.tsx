import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tech Blog: n8n, Next.js & Apps | Nexa Solutions",
  description:
    "Praxis-Guides zu n8n Automatisierung, Next.js Webentwicklung, App-Kosten und DSGVO-konformer KI-Infrastruktur. Jetzt Expertenwissen entdecken!",
  path: "/blog",
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tech Blog: n8n, Next.js & Apps - Nexa Solutions",
  description:
    "Praxiswissen und Anleitungen zu Webentwicklung, mobilen Apps und n8n KI-Automatisierung.",
  url: `${SITE_URL}/blog`,
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
      item: `${SITE_URL}/blog`,
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd]} />
      {children}
    </>
  );
}
