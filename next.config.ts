import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Enable type checking during the build process
    ignoreBuildErrors: false,
  },
  eslint: {
    // Enable linting during the build process
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
