import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://nexa-solutions.de"
  ).replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
<<<<<<< HEAD
        disallow: ["/admin", "/api/", "/private/"],
=======
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/*",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/api/",
          "/api/*",
        ],
>>>>>>> main
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
