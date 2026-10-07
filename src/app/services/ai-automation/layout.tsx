import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KI-Automatisierung & n8n Workflows | Nexa Solutions",
  description:
    "Geschäftsprozesse automatisieren mit n8n & KI-Agenten: Bis zu 80% manuelle Arbeit sparen. DSGVO-konform gehostet. Erstberatung sichern!",
  path: "/services/ai-automation",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI-Automatisierung & n8n Workflow-Entwicklung",
  serviceType: "Business Process Automation & AI Integration",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Automatisierung von Geschäftsprozessen mit n8n-Workflows, autonomen KI-Agenten, Chatbots und DSGVO-konformer Cloud-Infrastruktur.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      {children}
    </>
  );
}

