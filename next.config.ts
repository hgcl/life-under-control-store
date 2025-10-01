import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/7fmniv4c/production/**"),
    ],
  },
};

export default nextConfig;
