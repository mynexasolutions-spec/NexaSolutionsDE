import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "App Entwicklung für iOS & Android | Nexa Solutions",
  description:
    "Individuelle App-Entwicklung mit React Native & Flutter: Von MVP bis Enterprise-App. Store-Zulassung garantiert. Angebot anfordern!",
  path: "/services/mobile-app-development",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App-Entwicklung für iOS & Android",
  serviceType: "Mobile Application Development",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Cross-platform Mobile Application Development für iOS und Android mit React Native und Flutter, MVP-Entwicklung und Backend-Architektur.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      {children}
    </>
  );
}

