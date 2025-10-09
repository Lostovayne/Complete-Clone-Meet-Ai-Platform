import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    // ignore
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
