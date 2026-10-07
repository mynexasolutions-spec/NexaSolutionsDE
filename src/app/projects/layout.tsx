import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Referenzen & Case Studies | Nexa Solutions",
  description:
    "Entdecken Sie unsere Projekte: Moderne Next.js Web-Apps, mobile Applikationen und automatisierte Business-Systeme. Case Studies ansehen!",
  path: "/projects",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

