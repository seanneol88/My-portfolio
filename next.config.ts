import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // slim server.js output consumed by the Dockerfile
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
