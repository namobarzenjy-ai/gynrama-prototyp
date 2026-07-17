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
    // Ger behandlingar/index.html istället för behandlingar.html, så att
    // både /behandlingar och /behandlingar/ svarar på GitHub Pages
    trailingSlash: true,
    // GitHub Pages har ingen bildoptimeringsserver
    images: { unoptimized: true },
  }),
  images: {
    ...(pages && { unoptimized: true }),
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      // Klinikens egna personalporträtt, från deras befintliga sida
      { protocol: "https", hostname: "gynrama.se" },
    ],
  },
};

export default nextConfig;
