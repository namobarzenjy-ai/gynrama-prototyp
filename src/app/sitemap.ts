import type { MetadataRoute } from "next";
import { SIDOR, sidUrl, sprakAlternates } from "@/seo";

/**
 * Trespråkig sitemap. Varje språkbygge genererar en egen fil (out/sitemap.xml
 * hamnar även under /en/ och /ar/), men alla tre listar SAMTLIGA sidor på
 * SAMTLIGA språk med hreflang-alternates — så det spelar ingen roll vilken
 * Google läser. robots.txt pekar på rotens.
 *
 * lastModified utelämnas medvetet: ett byggdatum vore en lögn om när
 * innehållet faktiskt ändrades.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return (["sv", "en", "ar"] as const).flatMap((sprak) =>
    SIDOR.map((sokvag) => ({
      url: sidUrl(sprak, sokvag),
      alternates: { languages: sprakAlternates(sokvag) },
    })),
  );
}
