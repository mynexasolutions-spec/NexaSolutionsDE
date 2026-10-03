import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projekte & Referenzen",
  description:
    "Ausgewählte Web-, App- und KI-Projekte von Nexa Solutions für Unternehmen und Gründer.",
  path: "/projects",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
