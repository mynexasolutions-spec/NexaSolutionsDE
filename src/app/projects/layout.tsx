import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Webentwicklung Referenzen & Projekte | Nexa Solutions",
  description:
    "Unsere Webentwicklung Referenzen: Entdecken Sie ausgewählte Web-, App- und KI-Projekte für Unternehmen und Gründer. Praxiserprobte Lösungen ansehen!",
  path: "/projects",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
