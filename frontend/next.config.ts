import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
      },
      {
        protocol: "https",
        hostname: "a3.espncdn.com",
      },
      {
        protocol: "https",
        hostname: "nypost.com",
      },
      {
        protocol: "https",
        hostname: "*", 
      },
    ],
  },
};

export default nextConfig;
