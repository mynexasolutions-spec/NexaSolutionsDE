import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/our-work",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "nexa-solutions.de",
          },
        ],
        destination: "https://www.nexa-solutions.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
