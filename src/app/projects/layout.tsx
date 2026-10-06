import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "Webentwicklung Referenzen & Projekte | Custom Coded Websites | Nexa Solutions",
  description:
    "Ausgewählte Web- und App-Projekte: Entdecken Sie performante Next.js Business Websites, mobile Apps und individuelle Softwarelösungen für Unternehmen & Startups.",
  path: "/projects",
  keywords: [
    "webentwicklung referenzen",
    "custom coded website portfolio",
    "startup business websites",
    "business websites referenzen",
    "app entwicklung projekte",
    "softwareentwicklung portfolio",
    "next.js projekte",
    "e-commerce referenzen",
  ],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
