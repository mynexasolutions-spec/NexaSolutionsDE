import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "Softwareprojekt anfragen | Erstberatung & Angebot | Nexa Solutions",
  description:
    "Kostenlose Erstberatung für Ihr Projekt: Unverbindliche Einschätzung zu Website erstellen lassen, App-Entwicklung & KI-Automatisierung. Antwort innerhalb von 24 Stunden.",
  path: "/contact",
  keywords: [
    "softwareprojekt anfragen",
    "website erstellen lassen kosten",
    "was kostet eine website",
    "app entwickeln lassen kosten",
    "webentwicklung angebot anfordern",
    "homepage erstellen lassen preis",
    "it beratung kmu",
    "erstberatung softwareentwicklung",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
