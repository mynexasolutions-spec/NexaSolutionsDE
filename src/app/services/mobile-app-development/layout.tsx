import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "App entwickeln lassen: iOS, Android & React Native | Application Development | Nexa Solutions",
  description:
    "Mobile Application Development für Unternehmen: Native & Cross-Platform Apps für iOS und Android mit React Native entwickeln lassen. MVP, SaaS & skalierbare Apps.",
  path: "/services/mobile-app-development",
  keywords: [
    "app entwickeln lassen",
    "mobile application development",
    "application development",
    "ios und android app entwicklung",
    "react native agentur",
    "custom mobile app development",
    "cross platform app entwicklung",
    "app entwicklung kosten",
    "was kostet eine app entwickeln",
    "app idee umsetzen",
    "mvp entwicklung agentur",
    "mvp erstellen",
    "enterprise application development",
    "web app entwickeln lassen",
    "saas entwickeln lassen",
    "flutter oder react native",
  ],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile Application Development",
  serviceType: "Mobile & Web Application Development",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Cross-platform Mobile Application Development für iOS und Android mit React Native, MVP-Entwicklung und Backend-Architektur.",
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
