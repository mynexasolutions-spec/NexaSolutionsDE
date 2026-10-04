import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt",
  description:
    "Kostenlose Erstberatung anfordern – wir melden uns zeitnah mit einem Lösungsvorschlag für Ihr Projekt.",
  path: "/contact",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
