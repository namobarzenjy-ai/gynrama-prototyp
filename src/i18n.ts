/**
 * Flerspråkighet — ett språk per BYGGE, inte per request.
 *
 * Sajten är statisk (GitHub Pages, ingen server), så språket väljs vid
 * byggtid via NEXT_PUBLIC_SPRAK. Deployen bygger tre gånger:
 *
 *   (tomt)/sv -> svenska till rotens /          (standard)
 *   en        -> engelska till /en/
 *   ar        -> arabiska till /ar/  (dir="rtl" — hela layouten speglas)
 *
 * All text går genom t(sv, en, ar). Svenskan är källa och fallback: saknas
 * en översättning visas svenska istället för tomt. Eftersom värdet väljs
 * vid byggtid kostar de bortvalda språken ingenting i klientbundeln för
 * strängar som ligger i serverkomponenter.
 *
 * Lokalt: `npm run dev` är svenska; `NEXT_PUBLIC_SPRAK=en npm run dev`
 * visar engelska på rot-URL:en. Språkväxlarens länkar pekar på /en//ar
 * som bara finns i det ihopsatta Pages-bygget — lokalt växlar man via env.
 *
 * ÖVERSÄTTNINGARNA ÄR UTKAST (2026-08-30) och måste granskas av kliniken
 * innan skarp drift — medicinsk text, se README.
 */

export type Sprak = "sv" | "en" | "ar";

const env = process.env.NEXT_PUBLIC_SPRAK;
export const SPRAK: Sprak = env === "en" ? "en" : env === "ar" ? "ar" : "sv";

/** Arabiska skrivs höger till vänster. */
export const RTL = SPRAK === "ar";

/** Välj text för byggets språk. Svenska är källa och fallback. */
export function t(sv: string, en?: string, ar?: string): string {
  if (SPRAK === "en") return en ?? sv;
  if (SPRAK === "ar") return ar ?? en ?? sv;
  return sv;
}

/** Som t() men för hela värden (listor, objekt). */
export function tv<T>(sv: T, en?: T, ar?: T): T {
  if (SPRAK === "en") return en ?? sv;
  if (SPRAK === "ar") return ar ?? en ?? sv;
  return sv;
}

export const SPRAKVAL: { kod: Sprak; flagga: string; namn: string }[] = [
  { kod: "sv", flagga: "🇸🇪", namn: "Svenska" },
  { kod: "en", flagga: "🇬🇧", namn: "English" },
  // Arabiskan har ingen egen flagga (talas i 25+ länder) — saudiska flaggan
  // är konventionen på svenska sajter. Lätt att byta här om kunden vill.
  { kod: "ar", flagga: "🇸🇦", namn: "العربية" },
];
