/**
 * Webshop — 17 produkter hämtade ordagrant från gynrama.se/produkt/ 2026-07-17.
 * Namn, priser och beskrivningar är oförändrade. Bild-URL:erna är verifierade 200.
 *
 * Butiken (2026-10-11): egna produktsidor (/produkt/<slug>/) och egen
 * varukorg i den här designen — betalningen sker i klinikens WooCommerce-
 * kassa via en checkout-länk (se varukorg.ts). Lagerstatus, pris och
 * WooCommerce-id kommer från butik-lager.json, som hämtas ur Store API vid
 * varje bygge (scripts/hamta-butik.mjs). Se README "Webshoppen".
 *
 * slug är WooCommerce-slugen och får inte ändras: den kopplar produkten
 * till butiken, och produktsidorna ligger på samma adress som i WooCommerce.
 * En ny produkt i WooCommerce syns inte här förrän den läggs till nedan.
 */

import { SPRAK, t } from "@/i18n";
import lager from "./butik-lager.json";

/** Klinikens WooCommerce — kassan, köpvillkoren. */
export const BUTIK_URL = "https://gynrama.se";

type Lagerpost = { id: number; iLager: boolean; kopbar: boolean; belopp: number };
const butik: Record<string, Lagerpost | undefined> = lager.produkter;

/** När lagret senast hämtades från WooCommerce (ISO-datum). */
export const lagerHamtat = lager.hamtad;

export type Produkt = {
  slug: string;
  namn: string;
  /** Formaterat pris i byggets språk, t.ex. "149,00 kr". */
  pris: string;
  /** Kronor. WooCommerce-priset när det finns, annars det sparade nedan. */
  belopp: number;
  /** Produkt-id i WooCommerce — behövs för checkout-länken. */
  wcId?: number;
  /** I lager och köpbar enligt WooCommerce vid senaste bygget. */
  kanKopas: boolean;
  beskrivning: string;
  ce: "Självtest" | "Professionellt bruk" | "Okänt";
  kategori: Kategori;
  bild: string;
};

export type Kategori = "Fertilitet" | "Könssjukdomar" | "Hälsotest" | "Drogtest";

/**
 * rubrik visas på sidan; slug bygger ankaret och får INTE översättas —
 * sökindexet och kategorilänkarna pekar på det.
 */
export const kategorier: { kategori: Kategori; rubrik: string; slug: string }[] = [
  { kategori: "Fertilitet", rubrik: t("Fertilitet", "Fertility", "الخصوبة"), slug: "fertilitet" },
  { kategori: "Könssjukdomar", rubrik: t("Könssjukdomar", "STIs", "الأمراض المنقولة جنسياً"), slug: "konssjukdomar" },
  { kategori: "Hälsotest", rubrik: t("Hälsotest", "Health tests", "فحوصات صحية"), slug: "halsotest" },
  { kategori: "Drogtest", rubrik: t("Drogtest", "Drug tests", "فحوصات المخدرات"), slug: "drogtest" },
];

const U = "https://gynrama.se/wp-content/uploads/2025/11";

export const webshopIngress = t(
  `Alla våra tester är CE-märkta antingen som självtest eller för professionellt bruk. Är testet CE-godkänt som självtest kan det utföras hemma utan särskild utbildning. Är det godkänt för professionellt bruk är det avsett att användas inom hälso- och sjukvården av personer med formell utbildning.`,
  `All our tests are CE-marked either as self-tests or for professional use. A test CE-approved as a self-test can be done at home without special training. Tests approved for professional use are intended for healthcare settings and formally trained staff.`,
  `جميع فحوصاتنا معتمدة CE إما كفحوصات ذاتية أو للاستخدام المهني. الفحص المعتمد كفحص ذاتي يمكن إجراؤه في المنزل دون تدريب خاص، أما المعتمد للاستخدام المهني فمخصص للرعاية الصحية وللعاملين المدربين.`,
);

export const webshopFakta = [
  t("Kortbetalning & direkt banköverföring", "Card payment & instant bank transfer", "دفع بالبطاقة وتحويل بنكي مباشر"),
  t("Leverans 1–2 dagar", "Delivery in 1–2 days", "توصيل خلال 1–2 يوم"),
  t("Diskret leverans", "Discreet delivery", "توصيل بسرية تامة"),
];

/**
 * Pris i byggets språk — samma format som WooCommerce visar på svenska
 * ("1 298,00 kr"). Engelska och arabiska följer formatet produkterna alltid
 * haft här ("SEK 149", "149 كرونا").
 */
export function formateraPris(belopp: number): string {
  if (SPRAK === "en") return `SEK ${belopp.toLocaleString("en-GB")}`;
  if (SPRAK === "ar") return `${belopp} كرونا`;
  return `${belopp.toLocaleString("sv-SE", { minimumFractionDigits: 2 })} kr`;
}

const produktdata: Omit<Produkt, "pris" | "wcId" | "kanKopas">[] = [
  // Fertilitet
  {
    slug: "graviditetstest-sticka",
    namn: t("Graviditetstest-sticka (12st)", "Pregnancy test strips (12 pcs)", "شرائط اختبار الحمل (12 قطعة)"),
    belopp: 149,
    beskrivning: t(
      "Självtest för att upptäcka graviditet\n- Enkelt att utföra\n- Resultat efter 30 sekunder",
      "Self-test for detecting pregnancy\n- Easy to use\n- Result after 30 seconds",
      "فحص ذاتي للكشف عن الحمل\n- سهل الاستخدام\n- النتيجة بعد 30 ثانية",
    ),
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1366.webp`,
  },
  {
    slug: "graviditetstest-stav",
    namn: t("Graviditetstest-Stav (4st)", "Pregnancy test sticks (4 pcs)", "أعواد اختبار الحمل (4 قطع)"),
    belopp: 149,
    beskrivning: t(
      "Självtest för att upptäcka graviditet\n- Enkelt att utföra\n- Svar efter 30 sekunder",
      "Self-test for detecting pregnancy\n- Easy to use\n- Result after 30 seconds",
      "فحص ذاتي للكشف عن الحمل\n- سهل الاستخدام\n- النتيجة بعد 30 ثانية",
    ),
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1376.webp`,
  },
  {
    slug: "agglossningstest-sticka",
    namn: t("Ägglossningstest-sticka (10st)", "Ovulation test strips (10 pcs)", "شرائط اختبار الإباضة (10 قطع)"),
    belopp: 179,
    beskrivning: t(
      "Självtest för ägglossning\n- Enkelt att utföra\n- Svar efter 30 sekunder",
      "Self-test for ovulation\n- Easy to use\n- Result after 30 seconds",
      "فحص ذاتي للإباضة\n- سهل الاستخدام\n- النتيجة بعد 30 ثانية",
    ),
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1369.webp`,
  },
  {
    slug: "agglossningstest-stav",
    namn: t("Ägglossningstest-Stav (7st)", "Ovulation test sticks (7 pcs)", "أعواد اختبار الإباضة (7 قطع)"),
    belopp: 199,
    beskrivning: t(
      "Självtest för ägglossning\n- Enkelt att utföra\n- Svar efter 30 sekunder",
      "Self-test for ovulation\n- Easy to use\n- Result after 30 seconds",
      "فحص ذاتي للإباضة\n- سهل الاستخدام\n- النتيجة بعد 30 ثانية",
    ),
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_1373.webp`,
  },
  {
    slug: "spermatest-2-st",
    namn: t("Spermatest (2st)", "Sperm test (2 pcs)", "فحص الحيوانات المنوية (قطعتان)"),
    belopp: 399,
    beskrivning: t(
      "Testa dig hemma helt anonymt. Mäter spermakoncentration. Visar om koncentrationen är under 5 miljoner eller under/över 15 miljoner/ml. Svar inom 15 minuter. Testet har en noggrannhet på 99,1 %. Diskret leverans.",
      "Test at home completely anonymously. Measures sperm concentration and shows whether it is below 5 million or below/above 15 million/ml. Result within 15 minutes. 99.1% accuracy. Discreet delivery.",
      "افحص في المنزل بسرية تامة. يقيس تركيز الحيوانات المنوية ويبيّن إن كان أقل من 5 ملايين أو أقل/أكثر من 15 مليون/مل. النتيجة خلال 15 دقيقة. دقة 99.1%. توصيل بسرية.",
    ),
    ce: "Självtest",
    kategori: "Fertilitet",
    bild: `${U}/IMG_0184-e1763388278330.webp`,
  },

  // Könssjukdomar
  {
    slug: "klamydia-test",
    namn: t("Klamydia Test", "Chlamydia test", "فحص الكلاميديا"),
    belopp: 189,
    beskrivning: t(
      "Klamydiatest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
      "Chlamydia test for men and women\n- Rapid test\n- Result within 10 minutes\n- High clinical accuracy",
      "فحص الكلاميديا للرجال والنساء\n- فحص سريع\n- النتيجة خلال 10 دقائق\n- دقة سريرية عالية",
    ),
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0145.webp`,
  },
  {
    slug: "hiv-snabbtest",
    namn: t("HIV snabbtest", "HIV rapid test", "فحص سريع لفيروس نقص المناعة HIV"),
    belopp: 399,
    beskrivning: t(
      "Snabbtest för HIV1/HIV2\n- Svar inom 10 minuter\n- För män & kvinnor\n- CE-godkänt självtest för hemmabruk\n- 99,6 % noggrannhet\nDet rekommenderas att du testar 3 gånger. Första testet ca 2–3 veckor efter infektionsrisk, andra testet ca 6–8 veckor efter infektion.",
      "Rapid test for HIV1/HIV2\n- Result within 10 minutes\n- For men & women\n- CE-approved self-test for home use\n- 99.6% accuracy\nTesting 3 times is recommended: the first about 2–3 weeks after possible exposure, the second about 6–8 weeks after.",
      "فحص سريع لفيروس HIV1/HIV2\n- النتيجة خلال 10 دقائق\n- للرجال والنساء\n- فحص ذاتي معتمد CE للاستخدام المنزلي\n- دقة 99.6%\nيُنصح بالفحص 3 مرات: الأولى بعد 2–3 أسابيع من احتمال العدوى، والثانية بعد 6–8 أسابيع.",
    ),
    ce: "Självtest",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0149.webp`,
  },
  {
    slug: "gonorretest",
    namn: t("Gonorrétest", "Gonorrhoea test", "فحص السيلان"),
    belopp: 189,
    beskrivning: t(
      "Gonorrétest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
      "Gonorrhoea test for men and women\n- Rapid test\n- Result within 10 minutes\n- High clinical accuracy",
      "فحص السيلان للرجال والنساء\n- فحص سريع\n- النتيجة خلال 10 دقائق\n- دقة سريرية عالية",
    ),
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0152.webp`,
  },
  {
    slug: "syfilistest",
    namn: t("Syfilistest", "Syphilis test", "فحص الزهري"),
    belopp: 219,
    beskrivning: t(
      "Syfilistest för män och kvinnor\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
      "Syphilis test for men and women\n- Rapid test\n- Result within 10 minutes\n- High clinical accuracy",
      "فحص الزهري للرجال والنساء\n- فحص سريع\n- النتيجة خلال 10 دقائق\n- دقة سريرية عالية",
    ),
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0155-1.webp`,
  },
  {
    slug: "herpes-typ-2-test",
    namn: t("Herpes typ 2 test", "Herpes type 2 test", "فحص الهربس من النوع الثاني"),
    belopp: 229,
    beskrivning: t(
      "Testet visar om du har Herpes Simplexvirus Typ 2 (HSV-2), ”könsherpes”.\n- Snabbtest\n- Svar inom 15 minuter\n- 99 % noggrannhet",
      "Shows whether you carry herpes simplex virus type 2 (HSV-2), \u201Dgenital herpes\u201D.\n- Rapid test\n- Result within 15 minutes\n- 99% accuracy",
      "يبيّن إن كنت تحملين فيروس الهربس البسيط من النوع الثاني (HSV-2)، «الهربس التناسلي».\n- فحص سريع\n- النتيجة خلال 15 دقيقة\n- دقة 99%",
    ),
    ce: "Professionellt bruk",
    kategori: "Könssjukdomar",
    bild: `${U}/IMG_0151.webp`,
  },

  // Hälsotest
  {
    slug: "bakteriell-vaginos-slidkatarr-6-kombo-kit",
    namn: t("Bakteriell vaginos (Slidkatarr) – 6 kombo kit", "Bacterial vaginosis – 6-in-1 combo kit", "التهاب المهبل البكتيري – عدة فحص 6 في 1"),
    belopp: 349,
    beskrivning: t(
      "Bakteriell vaginos (Slidkatarr) test för kvinnor – 6 kombo kit.\nTestet mäter 6 parametrar:\n- Laktobaciller (H2O2)\n- Bakteriell vaginos\n- Vaginal inflammation\n- Svampinfektion (candida)\n- Trikomonasinfektion\n- pH",
      "Bacterial vaginosis test for women – 6-in-1 combo kit.\nMeasures 6 parameters:\n- Lactobacilli (H2O2)\n- Bacterial vaginosis\n- Vaginal inflammation\n- Yeast infection (candida)\n- Trichomonas infection\n- pH",
      "فحص التهاب المهبل البكتيري للنساء – عدة 6 في 1.\nيقيس 6 مؤشرات:\n- العصيات اللبنية (H2O2)\n- التهاب المهبل البكتيري\n- الالتهاب المهبلي\n- عدوى الفطريات (المبيضات)\n- عدوى المشعرات\n- درجة الحموضة pH",
    ),
    ce: "Professionellt bruk",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0158.webp`,
  },
  {
    slug: "2525",
    namn: t("Urinvägsinfektion test (2st)", "Urinary tract infection test (2 pcs)", "فحص التهاب المسالك البولية (قطعتان)"),
    belopp: 199,
    beskrivning: t(
      "Självtest för urinvägsinfektion\n- 2 st folieförpackningar\n- Testa dig snabbt hemma\n- Svar inom 2 minuter\n- Enkel procedur",
      "Self-test for urinary tract infection\n- 2 foil packs\n- Quick testing at home\n- Result within 2 minutes\n- Simple procedure",
      "فحص ذاتي لالتهاب المسالك البولية\n- عبوتان محكمتا الإغلاق\n- فحص سريع في المنزل\n- النتيجة خلال دقيقتين\n- إجراء بسيط",
    ),
    ce: "Självtest",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0161.webp`,
  },
  {
    slug: "strep-a-test-halsfluss",
    namn: t("Strep A Test (Halsfluss)", "Strep A test (strep throat)", "فحص المكورات العقدية A (التهاب الحلق)"),
    belopp: 239,
    beskrivning: t(
      "- Självtest\n- Svar på 5 minuter\n- Skickas samma dag\n- Diskret leverans\n- För män och kvinnor\n- CE-godkänd för hemmabruk",
      "- Self-test\n- Result in 5 minutes\n- Ships the same day\n- Discreet delivery\n- For men and women\n- CE-approved for home use",
      "- فحص ذاتي\n- النتيجة خلال 5 دقائق\n- يُشحن في نفس اليوم\n- توصيل بسرية\n- للرجال والنساء\n- معتمد CE للاستخدام المنزلي",
    ),
    ce: "Självtest",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0162.webp`,
  },
  {
    slug: "prostata-test-psa",
    namn: t("Prostata test (PSA)", "Prostate test (PSA)", "فحص البروستاتا (PSA)"),
    belopp: 169,
    beskrivning: t(
      "PSA-test\n- Snabbtest\n- Svar inom 10 minuter\n- Hög klinisk noggrannhet",
      "PSA test\n- Rapid test\n- Result within 10 minutes\n- High clinical accuracy",
      "فحص PSA\n- فحص سريع\n- النتيجة خلال 10 دقائق\n- دقة سريرية عالية",
    ),
    ce: "Professionellt bruk",
    kategori: "Hälsotest",
    bild: `${U}/IMG_0166.webp`,
  },

  // Drogtest
  {
    slug: "urin-drogtest-multi-12-panel",
    namn: t("Urin Drogtest Multi 12-Panel", "Urine drug test Multi 12-panel", "فحص المخدرات في البول – 12 مادة"),
    belopp: 239,
    beskrivning: t(
      "Ett drogtest som upptäcker spår av 12 ämnen i urinen. Speciellt utvecklat för att detektera vissa pillerpreparat, men också för att kunna spåra de vanligaste drogerna. Lätt att använda och man får svar inom några minuter.",
      "A drug test that detects traces of 12 substances in urine. Developed especially to detect certain pill-based preparations as well as the most common drugs. Easy to use, with a result within minutes.",
      "فحص يكشف آثار 12 مادة في البول. طُوّر خصيصاً للكشف عن بعض المستحضرات الدوائية إضافة إلى أكثر المخدرات شيوعاً. سهل الاستخدام والنتيجة خلال دقائق.",
    ),
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0170.webp`,
  },
  {
    slug: "saliv-drogtest-multi-12-panel",
    namn: t("Saliv Drogtest Multi 12-Panel", "Saliva drug test Multi 12-panel", "فحص المخدرات في اللعاب – 12 مادة"),
    belopp: 289,
    beskrivning: t(
      "Ett drogtest som upptäcker spår av 12 ämnen i saliven. Speciellt utvecklat för att detektera vissa pillerpreparat, men också för att kunna spåra de vanligaste drogerna. Salivtestet fungerar på det sättet att man stoppar en tops i munnen som sedan placeras tillbaka i en tub.",
      "A drug test that detects traces of 12 substances in saliva. Developed especially to detect certain pill-based preparations as well as the most common drugs. A swab is placed in the mouth and then returned to a tube.",
      "فحص يكشف آثار 12 مادة في اللعاب. طُوّر خصيصاً للكشف عن بعض المستحضرات الدوائية وأكثر المخدرات شيوعاً. توضع ماسحة قطنية في الفم ثم تُعاد إلى الأنبوب.",
    ),
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0172.webp`,
  },
  {
    slug: "alkoholtest-fran-saliv-02-30-promille-5-pack",
    namn: t("Alkoholtest från saliv 0,2–3,0 promille (5-pack)", "Saliva alcohol test 0.2–3.0 per mille (5-pack)", "فحص الكحول من اللعاب 0.2–3.0 بالألف (5 قطع)"),
    belopp: 289,
    beskrivning: t(
      "Snabbt alkoholtest som man gör själv från lite saliv.\n- 5 st test\n- 39 kr/test\n- Mäter alkoholhalt från 0,2 till 3,0 ‰",
      "A quick alcohol self-test using a little saliva.\n- 5 tests\n- SEK 39/test\n- Measures alcohol levels from 0.2 to 3.0 \u2030",
      "فحص كحول سريع تجرينه بنفسك من قليل من اللعاب.\n- 5 فحوصات\n- 39 كرونا للفحص\n- يقيس نسبة الكحول من 0.2 إلى 3.0 بالألف",
    ),
    ce: "Okänt",
    kategori: "Drogtest",
    bild: `${U}/IMG_0185.webp`,
  },
];

export const produkter: Produkt[] = produktdata.map((p) => {
  const w = butik[p.slug];
  // WooCommerce är facit — det är det priset kassan tar betalt
  const belopp = w?.belopp ?? p.belopp;
  return {
    ...p,
    belopp,
    pris: formateraPris(belopp),
    wcId: w?.id,
    // Saknas produkten i WooCommerce går den inte att köpa
    kanKopas: Boolean(w?.iLager && w.kopbar),
  };
});

export const produktUrl = (slug: string) => `/produkt/${slug}`;

export function hittaProdukt(slug: string): Produkt | undefined {
  return produkter.find((p) => p.slug === slug);
}

/** Märkningen på bild-etiketten. */
export function ceEtikett(ce: Produkt["ce"]): string {
  if (ce === "Självtest") return t("Självtest", "Self-test", "فحص ذاتي");
  if (ce === "Professionellt bruk") return t("Professionellt bruk", "Professional use", "استخدام مهني");
  return t("CE-märkt", "CE-marked", "معتمد CE");
}

/**
 * Vad märkningen betyder — meningarna är klinikens egna ur webshopIngress,
 * delade per märkning. "Okänt" (drogtesterna) saknar uppgift hos kliniken
 * och får bara den allmänna uppmaningen att läsa bruksanvisningen.
 */
export function ceForklaring(ce: Produkt["ce"]): { titel: string; text: string } {
  if (ce === "Självtest")
    return {
      titel: t("Testa hemma", "Test at home", "افحصي في المنزل"),
      text: t(
        "CE-godkänt som självtest – kan utföras hemma utan särskild utbildning.",
        "CE-approved as a self-test – can be done at home without special training.",
        "معتمد CE كفحص ذاتي – يمكن إجراؤه في المنزل دون تدريب خاص.",
      ),
    };
  if (ce === "Professionellt bruk")
    return {
      titel: t("Professionellt bruk", "Professional use", "استخدام مهني"),
      text: t(
        "CE-godkänt för professionellt bruk – avsett att användas inom hälso- och sjukvården av personer med formell utbildning.",
        "CE-approved for professional use – intended for healthcare settings and formally trained staff.",
        "معتمد CE للاستخدام المهني – مخصص للرعاية الصحية وللعاملين المدربين.",
      ),
    };
  return {
    titel: t("CE-märkt", "CE-marked", "معتمد CE"),
    text: t(
      "Läs bruksanvisningen i förpackningen innan du gör testet.",
      "Read the instructions in the pack before taking the test.",
      "اقرئي التعليمات الموجودة في العبوة قبل إجراء الفحص.",
    ),
  };
}

/** Beskrivningen delad i löptext och punkter ("- "-raderna). */
export function delaBeskrivning(beskrivning: string) {
  const rader = beskrivning.split("\n").map((r) => r.trim()).filter(Boolean);
  const arPunkt = (r: string) => /^[-–]\s*/.test(r);
  return {
    text: rader.filter((r) => !arPunkt(r)),
    punkter: rader.filter(arPunkt).map((r) => r.replace(/^[-–]\s*/, "")),
  };
}
