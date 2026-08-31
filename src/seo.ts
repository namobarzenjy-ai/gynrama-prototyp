/**
 * SEO-hjälpare: canonical, hreflang-alternates och Open Graph för varje sida.
 *
 * VIKTIGT: sajten är fortfarande noindex (se layout.tsx) — allt här ligger
 * redo men är verkningslöst tills noindex tas bort vid skarp lansering.
 *
 * SAJT_URL är prototypens GitHub Pages-adress. Vid flytt till gynrama.se
 * sätts NEXT_PUBLIC_SAJT_URL=https://gynrama.se i deploy-workflowet — inget
 * annat behöver ändras: canonical, hreflang, sitemap, robots och JSON-LD
 * bygger alla på samma konstant.
 */
import type { Metadata } from "next";
import { SPRAK, type Sprak } from "@/i18n";

export const SAJT_URL =
  process.env.NEXT_PUBLIC_SAJT_URL ??
  "https://namobarzenjy-ai.github.io/gynrama-prototyp";

/** Alla indexerbara sidor, utan språkprefix. Trailing slash — se next.config. */
export const SIDOR = [
  "/",
  "/behandlingar/",
  "/gynrama-ivf/",
  "/priser/",
  "/boka-tid/",
  "/om-oss/",
  "/formular-och-lankar/",
  "/webshop/",
] as const;

const PREFIX: Record<Sprak, string> = { sv: "", en: "/en", ar: "/ar" };

const OG_LOCALE: Record<Sprak, string> = {
  sv: "sv_SE",
  en: "en_GB",
  ar: "ar_AR",
};

/** Absolut URL för en sida i ett givet språk. */
export function sidUrl(sprak: Sprak, sokvag: string): string {
  return `${SAJT_URL}${PREFIX[sprak]}${sokvag}`;
}

/** hreflang-kartan för en sida — samma innehåll på tre språk plus x-default. */
export function sprakAlternates(sokvag: string) {
  return {
    sv: sidUrl("sv", sokvag),
    en: sidUrl("en", sokvag),
    ar: sidUrl("ar", sokvag),
    // Svenska är sajtens huvudspråk och tar hand om alla ospecificerade besökare
    "x-default": sidUrl("sv", sokvag),
  };
}

/**
 * Komplett sid-metadata: title/description plus canonical, hreflang och
 * Open Graph/Twitter. Används av VARJE sida — då kan ingen sida ärva fel
 * canonical från layouten.
 */
export function seoMeta(opts: {
  titel: string;
  beskrivning: string;
  /** Sidans sökväg utan språkprefix, t.ex. "/behandlingar/". */
  sokvag: string;
}): Metadata {
  const url = sidUrl(SPRAK, opts.sokvag);
  return {
    title: opts.titel,
    description: opts.beskrivning,
    alternates: {
      canonical: url,
      languages: sprakAlternates(opts.sokvag),
    },
    openGraph: {
      title: opts.titel,
      description: opts.beskrivning,
      url,
      siteName: "GynRaMa",
      type: "website",
      locale: OG_LOCALE[SPRAK],
      // Delningsbilden delas av alla språk och ligger bara i rotbygget —
      // därför alltid utan språkprefix.
      images: [
        {
          url: `${SAJT_URL}/og-bild.jpg`,
          width: 1200,
          height: 630,
          alt: "GynRaMa – Gynekologisk mottagning i Göteborg",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}
