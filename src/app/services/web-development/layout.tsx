import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Webentwicklung mit Next.js & React",
  description:
    "Moderne, schnelle und SEO-freundliche Websites, Webshops und Web-Applikationen – von der Idee bis zum Go-Live.",
  path: "/services/web-development",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
