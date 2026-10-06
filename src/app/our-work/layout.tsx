import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digitale Projekte & Case Studies | Nexa Solutions",
  description:
    "Digitale Projekte & Case Studies: Sehen Sie, wie wir individuelle Webanwendungen, Apps und KI-Pipelines für Unternehmen umsetzen. Portfolio ansehen!",
  path: "/our-work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
