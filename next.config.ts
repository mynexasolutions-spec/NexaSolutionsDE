import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
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
