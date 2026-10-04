import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Unsere Arbeit",
  description:
    "Ausgewählte Web-, App- und KI-Projekte von Nexa Solutions für Unternehmen und Gründer.",
  path: "/our-work",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
