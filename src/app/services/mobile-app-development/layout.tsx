import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mobile App Entwicklung für iOS & Android",
  description:
    "Performante Cross-Platform-Apps mit React Native: ein Code, zwei Plattformen, skalierbar und wartbar.",
  path: "/services/mobile-app-development",});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
