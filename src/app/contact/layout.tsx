import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt & Erstberatung | Nexa Solutions",
  description:
    "Kostenlose Erstberatung für Webentwicklung, Apps & n8n Automatisierung anfragen. Transparente Festpreise und Antwort in unter 24 Stunden erhalten!",
  path: "/contact",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kontakt & Erstberatung - Nexa Solutions",
  description:
    "Treten Sie in Kontakt mit Nexa Solutions für Webentwicklung, mobile Apps und KI-Automatisierung mit n8n.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
    email: "contact@nexa-solutions.de",
    telephone: "+91 8077 313 241",
  },
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
      name: "Kontakt",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[contactJsonLd, breadcrumbJsonLd]} />
      {children}
    </>
  );
}
