import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "n8n Automatisierung & KI-Agenten | Nexa Solutions",
  description:
    "n8n Automatisierung & autonome KI-Agenten für Unternehmen: Bis zu 80% manuelle Routine sparen. 100% DSGVO-konform in Deutschland gehostet. Jetzt anfragen!",
  path: "/services/ai-automation",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "n8n Automatisierung & KI-Agenten Entwicklung",
  serviceType: "Business Process Automation & n8n Workflows",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Automatisierung von Unternehmensprozessen mit n8n Workflows, autonomen KI-Agenten, Chatbots und DSGVO-konformem Hosting in Deutschland.",
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
      name: "Services",
      item: `${SITE_URL}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "KI-Automatisierung & n8n",
      item: `${SITE_URL}/services/ai-automation`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie sicher sind unsere vertraulichen Kundendaten bei KI-Automatisierungen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sicherheit steht bei uns an erster Stelle. Wir nutzen ausschließlich Schnittstellen mit verbindlicher Zero-Data-Retention und hosten auf ISO-zertifizierten deutschen Servern.",
      },
    },
    {
      "@type": "Question",
      name: "Warum n8n statt Zapier oder Make.com?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier und Make werden bei vielen Ausführungen extrem teuer. n8n ist Open-Source und kann auf eigenen Servern betrieben werden: Das bedeutet unbegrenzte Workflows ohne steigende Monatsgebühren und volle Datenkontrolle in Deutschland.",
      },
    },
    {
      "@type": "Question",
      name: "Braucht unser Team technisches Vorwissen, um die Automatisierungen zu nutzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir bauen die Automatisierungen so auf, dass sie nahtlos im Hintergrund Ihrer gewohnten Programme (E-Mail, WhatsApp, Slack, CRM) laufen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie schnell amortisiert sich die Investition in KI-Workflows (ROI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In den meisten mittelständischen Unternehmen amortisiert sich ein Quick-Win-Workflow in unter 30 Tagen.",
      },
    },
    {
      "@type": "Question",
      name: "Können bestehende Systeme wie DATEV, SAP oder eigene SQL-Datenbanken angebunden werden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. n8n unterstützt über 400 native Integrationen und universelle Webhooks/REST-APIs.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      {children}
    </>
  );
}
