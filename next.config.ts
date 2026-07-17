import type { NextConfig } from "next";

/**
 * GITHUB_PAGES=true används av deploy-workflowet. Lokalt körs vanlig
 * dev-server utan basePath och med bildoptimering påslagen.
 */
const pages = process.env.GITHUB_PAGES === "true";
/* BASE_PATH kan sättas för att bygga två versioner sida vid sida under
   samma origin — används av desktop-regressionstestet, se scripts/. */
const repo = process.env.BASE_PATH?.replace(/^\//, "") || "gynrama-prototyp";

const nextConfig: NextConfig = {
  /*
    next/image med unoptimized:true skickar src oförändrad och lägger INTE
    på basePath. Lokala bilder måste därför prefixas manuellt — annars 404:ar
    de på GitHub Pages men fungerar lokalt. Se components/Logo.tsx.
  */
  env: { NEXT_PUBLIC_BASE_PATH: pages ? `/${repo}` : "" },
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
