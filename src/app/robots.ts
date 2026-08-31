import type { MetadataRoute } from "next";
import { SAJT_URL } from "@/seo";

/**
 * robots.txt TILLÅTER crawlning trots att sajten är noindex — med flit:
 * blockerar man i robots.txt kan Google aldrig läsa noindex-taggen, och
 * URL:er kan dyka upp i sökresultat ändå (utan innehåll). Metataggen är
 * rätt verktyg för att hålla prototypen borta; robots.txt är redo för
 * lanseringen som den är.
 *
 * OBS: på GitHub Pages hamnar filen under /gynrama-prototyp/robots.txt,
 * vilket crawlers ignorerar (robots.txt måste ligga i domänroten). Den
 * blir verksam först på gynrama.se.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SAJT_URL}/sitemap.xml`,
  };
}
