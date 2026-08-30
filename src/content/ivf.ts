/**
 * GynRaMa IVF — hämtat ordagrant från https://gynrama.se/gynrama-ivf/ 2026-07-17.
 *
 * Två stavfel i källan är rättade här eftersom de gäller klinikens eget namn:
 * "GynRaM Fertilitet" -> "GynRaMa Fertilitet", och "På GynRaMA" -> "På GynRaMa".
 * Övriga språkfel i källtexterna rättades 2026-08-30 på kundens begäran —
 * se noten längst ned i omoss.ts.
 *
 * Notera: källsidan saknar helt CTA-knappar — enda vägen vidare är menyn.
 * Här finns bokningslänkar, vilket är en medveten avvikelse.
 */

export const ivfUnderrubrik =
  "GynRaMa Fertilitet & IVF i samarbete med Nordic IVF";

export const ivfIngress = [
  `Drömmen om ett barn är unik och det är även din fertilitetsresa. På GynRaMa erbjuder vi individanpassade IVF-behandlingar i nära samarbete med Nordic IVF. Tillsammans kombinerar vi hög medicinsk kompetens, modern laboratorieverksamhet och ett personligt omhändertagande för att ge dig de bästa förutsättningarna.`,
  `Vi följer dig genom hela processen från den första fertilitetsutredningen och behandlingsplaneringen till IVF-behandling, embryoåterföring och uppföljning. Hos oss möter du samma specialistteam genom hela din resa, vilket skapar kontinuitet, trygghet och ett personligt bemötande.`,
  `Varje behandling utformas utifrån dina eller era individuella förutsättningar. Oavsett om du kommer som par eller ensamstående får du en tydlig plan, nära uppföljning och tillgång till den senaste kunskapen inom reproduktionsmedicin.`,
];

/** Från rubriken "Därför väljer patienter GynRaMa IVF". */
export const ivfDarfor = {
  rubrik: "Därför väljer patienter GynRaMa IVF",
  punkter: [
    "IVF i nära samarbete med Nordic IVF",
    "Specialistläkare i gynekologi och reproduktionsmedicin",
    "Individanpassade behandlingsplaner",
    "Kontinuitet, samma läkare genom hela behandlingen",
    "Korta väntetider och hög tillgänglighet",
    "Trygg uppföljning från första besöket till avslutad behandling",
    "Evidensbaserad vård med akademisk profil",
  ],
};

export const ivfFilosofi = {
  rubrik: "Vår filosofi",
  text: `På GynRaMa ser vi fertilitetsbehandling som mer än en medicinsk process. Vi vill att du ska känna dig välinformerad, delaktig och trygg genom hela behandlingen. Med hög medicinsk kvalitet och ett personligt bemötande finns vi vid din sida från det första samtalet till målet – att ge dig bästa möjliga förutsättningar att bli förälder.`,
};

/** Relevanta rader ur prislistan, för snabb överblick på IVF-sidan. */
export const ivfPriser = [
  { tjanst: "Fertilitetskonsultation", pris: "2 000 kr" },
  { tjanst: "Komplett fertilitetsutredning inför ev. IVF-remiss", pris: "11 500 kr" },
  { tjanst: "Ägglossningsstimulering med hormontabletter", pris: "4 000 kr" },
  { tjanst: "Spermieprov", pris: "2 000 kr" },
];
