import { SITE_URL } from "@/lib/site";

/** FAQPage schema for the homepage only (other pages render their own FAQPage). */
export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie setzen sich die Kosten und Projektlaufzeiten zusammen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir arbeiten nach transparenten Festpreisen auf Basis eines vorab definierten Anforderungskatalogs – ohne unerwartete Nachforderungen. Kleinere Webauftritte dauern typischerweise 2 bis 4 Wochen, mobile Apps 4 bis 8 Wochen und umfangreiche Unternehmenssysteme 6 bis 10 Wochen.",
      },
    },
    {
      "@type": "Question",
      name: "Sind die entwickelten Websites und Apps barrierefrei nach dem BFSG-Gesetz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Seit Juni 2025 gilt in Deutschland das Barrierefreiheitsstärkungsgesetz (BFSG). Wir bauen Anwendungen nach den WCAG 2.1 AA Standards mit semantischer Struktur, Screenreader-Unterstützung und ausreichenden Kontrasten.",
      },
    },
    {
      "@type": "Question",
      name: "Für welche Regionen arbeitet Ihre Webentwicklung Agentur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir betreuen als Webentwicklung und Webdesign Agentur Kunden in ganz Deutschland, Österreich und der Schweiz. Projekte laufen remote mit festen Ansprechpartnern, Video-Calls und transparenten Meilensteinen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie stellen Sie DSGVO-Konformität und Datensicherheit sicher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle von uns gehosteten Systeme liegen in ISO-27001-zertifizierten Rechenzentren in Deutschland (Frankfurt am Main). Wir implementieren standardmäßig SSL-Verschlüsselung, Auftragsverarbeitungsverträge (AVV), Cookie-freie Analytics und GoBD-konforme Archivierung.",
      },
    },
  ],
};
