import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog – KI, Webentwicklung & Digitalisierung",
  description:
    "Fachartikel zu KI-Automatisierung, Next.js, React Native, DSGVO-konformer Infrastruktur und MVP-Entwicklung.",
  path: "/blog",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
