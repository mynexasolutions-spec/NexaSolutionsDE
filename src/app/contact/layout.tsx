import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Softwareprojekt anfragen | Erstberatung | Nexa Solutions",
  description:
    "Softwareprojekt anfragen bei Nexa Solutions: Kostenlose Erstberatung für Webentwicklung, Apps und KI-Automatisierung. Erhalten Sie Ihr unverbindliches Konzept!",
  path: "/contact",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
