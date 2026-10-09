import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Referenzen & Case Studies | Nexa Solutions",
  description:
    "Entdecken Sie erfolgreiche Kundenprojekte: High-Performance Webentwicklung, mobile Apps und n8n KI-Automatisierung in der Praxis. Jetzt ansehen!",
  path: "/projects",
});

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
      name: "Referenzen",
      item: `${SITE_URL}/projects`,
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
