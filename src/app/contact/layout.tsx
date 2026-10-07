import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt & Kostenlose Erstberatung | Nexa Solutions",
  description:
    "Starten Sie Ihr Softwareprojekt: Kostenlose Erstberatung zu Webentwicklung, Apps und KI-Workflows. Antwort in unter 24h erhalten!",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

