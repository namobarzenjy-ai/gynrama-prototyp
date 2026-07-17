/**
 * Webshop — 17 produkter hämtade ordagrant från gynrama.se/produkt/ 2026-07-17.
 * Namn, priser och beskrivningar är oförändrade. Bild-URL:erna är verifierade 200.
 *
 * OBS: Detta är en PRODUKTKATALOG, inte en fungerande butik. Kliniken kör
 * WooCommerce; "Köp"-knapparna länkar till deras skarpa produktsidor.
 * Ingen varukorg eller kassa är byggd.
 */

export type Produkt = {
  slug: string;
  namn: string;
  pris: string;
  beskrivning: string;
  ce: "Självtest" | "Professionellt bruk" | "Okänt";
  kategori: Kategori;
  bild: string;
};

export type Kategori = "Fertilitet" | "Könssjukdomar" | "Hälsotest" | "Drogtest";

export const kategorier: Kategori[] = [
  "Fertilitet",
  "Könssjukdomar",
  "Hälsotest",
  "Drogtest",
];

const U = "https://gynrama.se/wp-content/uploads/2025/11";
const kop = (slug: string) => `https://gynrama.se/produkt/${slug}/`;
export const kopUrl = kop;

export const webshopIngress = `Alla våra tester är CE-märkta antingen som självtest eller för professionellt bruk. Är testet CE-godkänt som självtest kan det utföras hemma utan särskild utbildning. Är det godkänt för professionellt bruk är det avsett att användas inom hälso- och sjukvården av personer med formell utbildning.`;

export const webshopFakta = [
  "Kortbetalning & direkt banköverföring",
  "Leverans 1–2 dagar",
  "Diskret leverans",
];

export const produkter: Produkt[] = [
  // Fertilitet
  {
    slug: "graviditetstest-sticka",
    namn: "Graviditetstest-sticka (12st)",
    pris: "149,00 kr",
    beskrivning:
      "Självtest för att upptäcka graviditet\n- Enkelt att utföra\n- Resultat efter 30 sekunder",
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1366.webp`,
  },
  {
    slug: "graviditetstest-stav",
    namn: "Graviditetstest-Stav (4st)",
    pris: "149,00 kr",
    beskrivning:
      "Självtest för att upptäcka graviditet\n- Enkelt att utföra\n- Svar efter 30 sekunder",
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1376.webp`,
  },
  {
    slug: "agglossningstest-sticka",
    namn: "Ägglossningstest-sticka (10st)",
    pris: "179,00 kr",
    beskrivning:
      "Självtest för ägglossning\n- Enkelt att utföra\n- Svar efter 30 sekunder",
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1369.webp`,
  },
  {
    slug: "agglossningstest-stav",
    namn: "Ägglossningstest-Stav (7st)",
    pris: "199,00 kr",
    beskrivning:
      "Självtest för ägglossning\n- Enkelt att utföra\n- Svar efter 30 sekunder",
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1373.webp`,
  },
  {
    slug: "spermatest-2-st",
    namn: "Spermatest (2st)",
    pris: "399,00 kr",
    beskrivning:
      "Testa dig hemma helt anonymt. Mäter spermakoncentration. Visar om koncentrationen är under 5 miljoner eller under/över 15 miljoner/ml. Svar inom 15 minuter. Testet har en noggrannhet på 99,1 %. Diskret leverans.",
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_0184-e1763388278330.webp`,
  },

  // Könssjukdomar
  {
    slug: "klamydia-test",
    namn: "Klamydia Test",
    pris: "189,00 kr",
    beskrivning:
      "Klamydiatest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0145.webp`,
  },
  {
    slug: "hiv-snabbtest",
    namn: "HIV snabbtest",
    pris: "399,00 kr",
    beskrivning:
      "Snabbtest för HIV1/HIV2\n- Svar inom 10 minuter\n- För män & kvinnor\n- CE-godkänt självtest för hemmabruk\n- 99,6 % noggrannhet\nDet rekommenderas att du testar 3 gånger. Första testet ca 2–3 veckor efter infektionsrisk, andra testet ca 6–8 veckor efter infektion.",
    ce: "Självtest",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0149.webp`,
  },
  {
    slug: "gonorretest",
    namn: "Gonorrétest",
    pris: "189,00 kr",
    beskrivning:
      "Gonorrétest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0152.webp`,
  },
  {
    slug: "syfilistest",
    namn: "Syfilistest",
    pris: "219,00 kr",
    beskrivning:
      "Syfilistest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0155-1.webp`,
  },
  {
    slug: "herpes-typ-2-test",
    namn: "Herpes typ 2 test",
    pris: "229,00 kr",
    beskrivning:
      "Testet visar om du har Herpes Simplexvirus Typ 2 (HSV-2), ”könsherpes”.\n- Snabbtest\n- Svar inom 15 minuter\n- 99 % noggrannhet",
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0151.webp`,
  },

  // Hälsotest
  {
    slug: "bakteriell-vaginos-slidkatarr-6-kombo-kit",
    namn: "Bakteriell vaginos (Slidkatarr) – 6 kombo kit",
    pris: "349,00 kr",
    beskrivning:
      "Bakteriell vaginos (Slidkatarr) test för kvinnor – 6 kombo kit.\nTestet mäter 6 parametrar:\n- Laktobaciller (H2O2)\n- Bakteriell vaginos\n- Vaginal inflammation\n- Svampinfektion (candida)\n- Trikomonasinfektion\n- pH",
    ce: "Professionellt bruk",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0158.webp`,
  },
  {
    slug: "2525",
    namn: "Urinvägsinfektion test (2st)",
    pris: "199,00 kr",
    beskrivning:
      "Självtest för urinvägsinfektion\n- 2 st folieförpackningar\n- Testa dig snabbt hemma\n- Svar inom 2 minuter\n- Enkel procedur",
    ce: "Självtest",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0161.webp`,
  },
  {
    slug: "strep-a-test-halsfluss",
    namn: "Strep A Test (Halsfluss)",
    pris: "239,00 kr",
    beskrivning:
      "- Självtest\n- Svar på 5 minuter\n- Skickas samma dag\n- Diskret leverans\n- För män och kvinnor\n- CE-godkänd för hemmabruk",
    ce: "Självtest",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0162.webp`,
  },
  {
    slug: "prostata-test-psa",
    namn: "Prostata test (PSA)",
    pris: "169,00 kr",
    beskrivning:
      "PSA-test\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
    ce: "Professionellt bruk",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0166.webp`,
  },

  // Drogtest
  {
    slug: "urin-drogtest-multi-12-panel",
    namn: "Urin Drogtest Multi 12-Panel",
    pris: "239,00 kr",
    beskrivning:
      "Ett drogtest som upptäcker spår av 12 ämnen i urinen. Speciellt utvecklat för att detektera vissa pillerpreparat, men också för att kunna spåra de vanligaste drogerna. Lätt att använda och man får svar inom några minuter.",
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0170.webp`,
  },
  {
    slug: "saliv-drogtest-multi-12-panel",
    namn: "Saliv Drogtest Multi 12-Panel",
    pris: "289,00 kr",
    beskrivning:
      "Ett drogtest som upptäcker spår av 12 ämnen i saliven. Speciellt utvecklat för att detektera vissa pillerpreparat, men också för att kunna spåra de vanligaste drogerna. Salivtestet fungerar på det sättet att man stoppar en tops i munnen som sedan placeras tillbaka i en tub.",
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0172.webp`,
  },
  {
    slug: "alkoholtest-fran-saliv-02-30-promille-5-pack",
    namn: "Alkoholtest från saliv 0,2–3,0 promille (5-pack)",
    pris: "289,00 kr",
    beskrivning:
      "Snabbt alkoholtest som man gör själv från lite saliv.\n- 5 st test\n- 39 kr/test\n- Mäter alkoholhalt från 0,2 till 3,0 ‰",
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0185.webp`,
  },
];
