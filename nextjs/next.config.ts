import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ea854xr24n6.exactdn.com",
      },
    ],
  },
};

export default nextConfig;
