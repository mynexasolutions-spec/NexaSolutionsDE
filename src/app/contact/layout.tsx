import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt & Beratung Stuttgart | Nexa Solutions",
  description:
    "Kostenlose Erstberatung in Stuttgart für Webentwicklung, Apps & n8n Automatisierung anfragen. Transparente Festpreise & Antwort in unter 24h!",
  path: "/contact",
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ContactPage", "LocalBusiness", "ProfessionalService"],
  name: "Kontakt & Beratung Stuttgart - Nexa Solutions",
  description:
    "Treten Sie in Kontakt mit Nexa Solutions in Stuttgart für Webentwicklung, mobile Apps und KI-Automatisierung mit n8n.",
  url: `${SITE_URL}/contact`,
  telephone: "+91 8077 313 241",
  email: "contact@nexa-solutions.de",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[STRASSE HIER EINTRAGEN: z. B. Königstraße XX]",
    postalCode: "[PLZ HIER EINTRAGEN: z. B. 70173]",
    addressLocality: "Stuttgart",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "[LATITUDE HIER EINTRAGEN: z. B. 48.7758]",
    longitude: "[LONGITUDE HIER EINTRAGEN: z. B. 9.1829]",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
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
