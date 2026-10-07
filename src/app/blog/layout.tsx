import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tech Blog & IT-Ratgeber | Nexa Solutions",
  description:
    "Praxiswissen zu Webentwicklung, App-Kosten, KI-Automatisierung und DSGVO-konformem n8n Hosting. Jetzt wertvolle Guides lesen!",
  path: "/blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

