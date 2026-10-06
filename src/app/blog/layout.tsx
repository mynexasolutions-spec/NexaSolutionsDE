import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Softwareentwicklung & KI Blog für KMU | Nexa Solutions",
  description:
    "Softwareentwicklung & KI Blog: Fachartikel zu Next.js, React Native, n8n-Workflows und DSGVO-konformer Cloud-Infrastruktur für Unternehmen. Jetzt lesen!",
  path: "/blog",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
