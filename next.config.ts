import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactCompiler: true,
  allowedDevOrigins: ["http://localhost:3000"],
  output: "standalone",
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
