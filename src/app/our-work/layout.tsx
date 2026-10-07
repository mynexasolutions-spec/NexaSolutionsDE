import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Digitale Projekte & Referenzen | Nexa Solutions",
  description:
    "Erfolgreiche digitale Projekte und Softwarelösungen: Webentwicklung, mobile Apps und smarte KI-Pipelines. Portfolio entdecken!",
  path: "/our-work",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
