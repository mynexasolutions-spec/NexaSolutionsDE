import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website erstellen lassen - Festpreis | Nexa Solutions",
  description:
    "Professionelle Website erstellen lassen zum Festpreis: High-Performance Next.js Webentwicklung, DSGVO-konform & SEO-optimiert. Jetzt anfragen!",
  path: "/services/web-development",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website erstellen lassen zum Festpreis - Webentwicklung Agentur",
  serviceType: "Web Development & Next.js Websites",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Professionelle Webentwicklung zum Festpreis: High-Performance Business Websites, Next.js Web-Applikationen und Headless CMS.",
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
      name: "Webentwicklung",
      item: `${SITE_URL}/services/web-development`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Warum setzt Nexa Solutions auf Next.js statt herkömmlichem WordPress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js bietet überlegene Ladezeiten (oft unter 0.5 Sekunden), unschlagbare Sicherheit (keine fehleranfälligen PHP-Plugins) und makellose Google-Rankings durch Server-Side-Rendering.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich Texte und Bilder nach dem Launch selbstständig bearbeiten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, absolut. Wir integrieren ein intuitives, visuelles Headless-CMS (wie Sanity oder Contentful). Damit können Sie Texte, Bilder, Blogbeiträge und Preise in Sekunden ändern.",
      },
    },
    {
      "@type": "Question",
      name: "Entwickeln Sie neben Websites auch mobile Apps und KI-Workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, genau das ist unser Vorteil: Wir kombinieren Ihre Website nahtlos mit unserer mobilen App Entwicklung für iOS & Android sowie intelligenter KI-Automatisierung mit n8n.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert ein typisches Web-Projekt von Beginn bis zum Go-Live?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine fokussierte Unternehmens-Website ist in der Regel in 2 bis 4 Wochen schlüsselfertig fertiggestellt. Größere Web-Applikationen oder E-Commerce-Systeme benötigen etwa 4 bis 8 Wochen.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Website zu 100% DSGVO-konform für den deutschen/europäischen Markt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, ausnahmslos. Wir implementieren datenschutzkonforme Lösungen: Lokales Font-Hosting, rechtssichere Cookie-Consent-Banner, Server-Hosting in der EU (Frankfurt) und verschlüsselte SSL-Übertragung nach deutschem Standard.",
      },
    },
    {
      "@type": "Question",
      name: "Bieten Sie auch laufende Wartung, Updates und technischen Support an?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selbstverständlich. Neben der initialen Übergabe und Teamschulung bieten wir flexible monatliche Betreuungspakete an mit Sicherheits-Monitoring, Backups und reservierten Entwickler-Stunden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie läuft die Zusammenarbeit ab, wenn wir starten möchten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In einem 20-minütigen unverbindlichen Erstgespräch klären wir Ihre Anforderungen und Sie erhalten innerhalb von 24 Stunden einen verbindlichen Festpreis-Kostenvoranschlag und Zeitplan.",
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
