import type { NextConfig } from "next";

/**
 * GITHUB_PAGES=true används av deploy-workflowet. Lokalt körs vanlig
 * dev-server utan basePath och med bildoptimering påslagen.
 */
const pages = process.env.GITHUB_PAGES === "true";
const repo = "gynrama-prototyp";

const nextConfig: NextConfig = {
  ...(pages && {
    output: "export",
    basePath: `/${repo}`,
    // GitHub Pages har ingen bildoptimeringsserver
    images: { unoptimized: true },
  }),
  images: {
    ...(pages && { unoptimized: true }),
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
