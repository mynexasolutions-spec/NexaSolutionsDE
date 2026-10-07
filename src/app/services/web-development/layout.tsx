import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Webentwicklung & Next.js Agentur | Nexa Solutions",
  description:
    "High-Performance Business Websites & Web-Apps mit Next.js. Schnell, DSGVO-konform und SEO-optimiert. Jetzt kostenfrei beraten lassen!",
  path: "/services/web-development",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webentwicklung & Next.js Entwicklung",
  serviceType: "Web Development & Custom Web Applications",
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
      <JsonLd data={serviceJsonLd} />
      {children}
    </>
  );
}

