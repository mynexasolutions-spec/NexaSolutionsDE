import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KI-Automatisierung & n8n Workflows",
  description:
    "Prozesse mit KI und n8n automatisieren: Zeit sparen, Kosten senken und DSGVO-konform wachsen.",
  path: "/services/ai-automation",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
