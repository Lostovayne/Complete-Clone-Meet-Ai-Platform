import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  typedRoutes: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    browserDebugInfoInTerminal: true,
  },
  reactCompiler: true,
  // output: "standalone",
};

export default nextConfig;
