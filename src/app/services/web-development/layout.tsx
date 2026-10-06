import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Webentwicklung für Unternehmen | Nexa Solutions",
  description:
    "Webentwicklung für Unternehmen: Schnelle Firmenwebsites, Portale & Web-Apps mit Next.js. Höchste Performance, modernes UI & SEO-optimiert. Jetzt anfragen!",
  path: "/services/web-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
