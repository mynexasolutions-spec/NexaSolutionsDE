import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "Website Development Services | Business Website erstellen lassen | Next.js Agentur",
  description:
    "Professionelle Website Development Services: Individuelle Business Websites erstellen lassen, custom coded Web-Apps & Next.js Entwicklung. Schnell, DSGVO-konform & SEO-optimiert.",
  path: "/services/web-development",
  keywords: [
    "website development services",
    "business website erstellen lassen",
    "business website erstellen",
    "service website development",
    "website design and development services",
    "website design & development services",
    "custom website development services",
    "custom coded website",
    "custom coding website",
    "custom website coding services",
    "startup business websites",
    "small business website design services",
    "business website design",
    "website for business",
    "full service website development",
    "ecommerce website development services",
    "affordable website development services",
    "website erstellen lassen",
    "webentwicklung agentur",
    "homepage erstellen lassen",
    "firmenwebsite erstellen lassen",
    "next.js agentur",
    "individuelle website erstellen lassen",
    "was kostet eine website",
    "website kosten",
  ],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
  serviceType: "Custom Website Development & Business Websites",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Full-Service Webentwicklung: Business Websites, Custom Coded Web Applications, Next.js Development und E-Commerce.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
