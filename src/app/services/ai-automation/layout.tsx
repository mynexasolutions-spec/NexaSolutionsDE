import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "KI Automatisierung & n8n Workflows für Unternehmen | Nexa Solutions",
  description:
    "KI Automatisierung für Unternehmen: Zeit sparen & manuelle Arbeit reduzieren mit maßgeschneiderten n8n-Workflows, autonomen KI-Agenten & DSGVO-konformer Integration.",
  path: "/services/ai-automation",
  keywords: [
    "ki automatisierung",
    "ki automatisierung unternehmen",
    "n8n agentur",
    "n8n automatisierung unternehmen",
    "prozessautomatisierung unternehmen",
    "ki agenten",
    "chatbot erstellen lassen",
    "n8n workflow automatisierung",
    "chatgpt im unternehmen datenschutz",
    "dsgvo ki unternehmen",
    "ki automatisierung kmu",
    "n8n vs zapier",
  ],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI Automatisierung & n8n Workflows",
  serviceType: "Business Process Automation & AI Integration",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Automatisierung von Geschäftsprozessen mit n8n-Workflows, KI-Agenten, Chatbots und sicherer europäischer Cloud-Infrastruktur.",
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
