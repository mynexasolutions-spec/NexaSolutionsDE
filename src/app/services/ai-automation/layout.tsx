import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KI Automatisierung für Unternehmen | n8n | Nexa Solutions",
  description:
    "KI Automatisierung für Unternehmen: Zeit sparen mit maßgeschneiderten n8n-Workflows und smarten KI-Agenten. DSGVO-konform gehostet. Jetzt Beratung anfordern!",
  path: "/services/ai-automation",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
