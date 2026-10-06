import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "App entwickeln lassen: iOS & Android | Nexa Solutions",
  description:
    "App entwickeln lassen für iOS & Android: Performante Cross-Platform Apps mit React Native. Bis zu 50% geringere Kosten bei nativer Performance. Jetzt anfragen!",
  path: "/services/mobile-app-development",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
