import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "Softwareentwicklung & KI Blog | Ratgeber & Kostenanalysen | Nexa Solutions",
  description:
    "Expertenwissen zu Webentwicklung, App-Kosten, KI-Automatisierung und DSGVO: Praktische Leitfäden zu Next.js, n8n-Workflows, BFSG und digitaler Skalierung.",
  path: "/blog",
  keywords: [
    "was kostet eine website",
    "website kosten",
    "was kostet eine app entwickeln",
    "app entwickeln kosten",
    "n8n vs zapier",
    "bfsg barrierefreiheit website",
    "bfsg checkliste",
    "chatgpt unternehmen datenschutz",
    "dsgvo ki unternehmen",
    "softwareentwicklung blog",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
