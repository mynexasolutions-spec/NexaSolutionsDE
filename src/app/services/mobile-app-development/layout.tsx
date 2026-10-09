import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "App entwickeln lassen - iOS & Android | Nexa Solutions",
  description:
    "Individuelle App entwickeln lassen für iOS & Android mit React Native. Schneller Launch, Store-Garantie & transparente Festpreise. Erstberatung!",
  path: "/services/mobile-app-development",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App entwickeln lassen für iOS & Android - Mobile App Agentur",
  serviceType: "Mobile Application Development & React Native Apps",
  provider: {
    "@type": "Organization",
    name: "Nexa Solutions",
    url: SITE_URL,
  },
  areaServed: ["DE", "AT", "CH"],
  description:
    "Individuelle mobile App-Entwicklung für iOS und Android mit React Native und Flutter: MVP-Entwicklung, Store-Zulassungsgarantie und skalierbare Backend-Systeme.",
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
      name: "Mobile App-Entwicklung",
      item: `${SITE_URL}/services/mobile-app-development`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Lohnt sich Cross-Platform (React Native / Flutter) wirklich gegenüber nativer Entwicklung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, absolut. Über 80% aller Top-Apps setzen auf Cross-Platform. Sie erhalten eine einzige Codebasis für iOS und Android, halbieren die Entwicklungskosten und haben trotzdem vollen Zugriff auf alle Smartphone-Sensoren und flüssige 60 FPS Animationen.",
      },
    },
    {
      "@type": "Question",
      name: "Was passiert, wenn Apple oder Google die App im Store ablehnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir geben Ihnen eine 100%ige Zulassungsgarantie. Sollte das Review-Team von Apple oder Google Beanstandungen haben, beheben wir diese sofort auf unsere Kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Wer besitzt den Quellcode und die Urheberrechte nach Fertigstellung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sie besitzen zu 100% alle Rechte am Quellcode, an den Designs und an den Store-Accounts. Wir übergeben Ihnen nach Projektabschluss das vollständige Git-Repository.",
      },
    },
    {
      "@type": "Question",
      name: "Können wir die App mit unserer bestehenden Website oder unserem CRM verbinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir bauen standardisierte REST- oder GraphQL-APIs, über die Ihre mobile App in Echtzeit mit Ihrer Webentwicklung, Ihrem Onlineshop oder mit KI-Automatisierung kommuniziert.",
      },
    },
    {
      "@type": "Question",
      name: "Was geschieht bei neuen iOS- und Android-Versionen im Herbst?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In unseren monatlichen Wartungspaketen prüfen und aktualisieren wir Ihre App vorab in den Beta-Phasen, damit Ihre Nutzer am Release-Tag keine Abstürze oder Inkompatibilitäten erleben.",
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
