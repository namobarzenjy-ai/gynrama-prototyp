/**
 * Egna sidor per behandling (/behandlingar/<slug>/) — SEO-uppgifterna.
 *
 * Ligger i en egen fil med flit: behandlingar.ts är klinikens ORDAGRANNA
 * medicinska text och ska inte blandas med sökordsanpassade titlar. Här
 * finns bara sådant som inte är medicinsk information — <title>, vilken
 * schema.org-typ sidan handlar om och vilket prisavsnitt "Se priser" pekar
 * på. Meta-beskrivningen och ingressen i översikten tas ur klinikens egen
 * text (första meningarna), aldrig omskrivna.
 *
 * IVF har ingen egen behandlingssida: texten är densamma som på
 * /gynrama-ivf/ (samma källa, se behandlingar.ts) och två sidor med samma
 * innehåll skulle konkurrera om samma sökningar. Raden i översikten pekar
 * dit istället.
 */
import { t } from "@/i18n";
import { behandlingar, type Behandling } from "./behandlingar";

type SchemaTyp =
  | "MedicalCondition"
  | "MedicalSignOrSymptom"
  | "MedicalProcedure"
  | "MedicalTest"
  | "ImagingTest"
  | "MedicalTherapy";

type SidUppgifter = {
  /** <title> — sökordsanpassad. Behandlingens namn är fortfarande sidans h1. */
  titel: string;
  /** Vad sidan handlar om, för JSON-LD (MedicalWebPage.about). */
  schema: SchemaTyp;
  /** Priskategoriernas slug på /priser. Saknas = hela prissidan, null = ingen prislänk. */
  prisAnkare?: string | null;
  /**
   * Medicinsk granskning. Fyll i FÖRST när kliniken bekräftat att en namngiven
   * läkare granskat texten — då visas raden på sidan och i JSON-LD
   * (reviewedBy/lastReviewed). Sätt aldrig ett namn här utan klinikens besked.
   */
  granskad?: { av: string; datum: string };
};

/** Behandlingar som visas på en annan, redan befintlig sida. */
const HANVISNING: Record<string, string> = { ivf: "/gynrama-ivf" };

const UPPGIFTER: Record<string, SidUppgifter> = {
  "gynekologisk-halsokontroll": {
    titel: t(
      "Gynekologisk hälsokontroll i Göteborg – GynRaMa",
      "Gynaecological health check-up in Gothenburg – GynRaMa",
      "الفحص النسائي الدوري في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalProcedure",
    prisAnkare: "konsultationer-besok",
  },
  ultraljudsundersokning: {
    titel: t(
      "Gynekologiskt ultraljud i Göteborg – GynRaMa",
      "Gynaecological ultrasound in Gothenburg – GynRaMa",
      "الموجات فوق الصوتية النسائية في يوتيبوري – GynRaMa",
    ),
    schema: "ImagingTest",
    prisAnkare: "konsultationer-besok",
  },
  cellforandringar: {
    titel: t(
      "Cellförändringar & kolposkopi i Göteborg – GynRaMa",
      "Cervical cell changes & colposcopy in Gothenburg – GynRaMa",
      "التغيّرات الخلوية وتنظير عنق الرحم في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    // Kolposkopi och cellprov ligger i olika priskategorier — hela listan
  },
  myom: {
    titel: t(
      "Myom – gynekolog i Göteborg – GynRaMa",
      "Fibroids – gynaecologist in Gothenburg – GynRaMa",
      "الأورام الليفية – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    prisAnkare: "konsultationer-besok",
  },
  flytningar: {
    titel: t(
      "Flytningar från underlivet – gynekolog i Göteborg – GynRaMa",
      "Vaginal discharge – gynaecologist in Gothenburg – GynRaMa",
      "الإفرازات المهبلية – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalSignOrSymptom",
    prisAnkare: "konsultationer-besok",
  },
  preventivmedel: {
    titel: t(
      "Preventivmedel, spiral & p-stav i Göteborg – GynRaMa",
      "Contraception, coil & implant in Gothenburg – GynRaMa",
      "وسائل منع الحمل واللولب والغرسة في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalProcedure",
    // Spiral och p-stav ligger under Gynekologi i prislistan
    prisAnkare: "gynekologi",
  },
  klimakteriebesvar: {
    titel: t(
      "Klimakteriebesvär – gynekolog i Göteborg – GynRaMa",
      "Menopause symptoms – gynaecologist in Gothenburg – GynRaMa",
      "أعراض سن اليأس – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    prisAnkare: "konsultationer-besok",
  },
  framfall: {
    titel: t(
      "Framfall – gynekolog i Göteborg – GynRaMa",
      "Prolapse – gynaecologist in Gothenburg – GynRaMa",
      "الهبوط التناسلي – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    prisAnkare: "konsultationer-besok",
  },
  urininkontinens: {
    titel: t(
      "Urininkontinens – gynekolog i Göteborg – GynRaMa",
      "Urinary incontinence – gynaecologist in Gothenburg – GynRaMa",
      "سلس البول – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    prisAnkare: "konsultationer-besok",
  },
  "tidig-graviditet": {
    titel: t(
      "Tidigt graviditetsultraljud i Göteborg – GynRaMa",
      "Early pregnancy scan in Gothenburg – GynRaMa",
      "تصوير الحمل المبكر بالموجات فوق الصوتية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalProcedure",
    prisAnkare: "graviditet",
  },
  "blodning-graviditet": {
    titel: t(
      "Blödning under graviditet – gynekolog i Göteborg – GynRaMa",
      "Bleeding in pregnancy – gynaecologist in Gothenburg – GynRaMa",
      "النزيف أثناء الحمل – عيادة نسائية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalSignOrSymptom",
    prisAnkare: "graviditet",
  },
  "ofrivillig-barnloshet": {
    titel: t(
      "Ofrivillig barnlöshet – fertilitetsutredning i Göteborg – GynRaMa",
      "Infertility – fertility investigation in Gothenburg – GynRaMa",
      "العقم – فحوصات الخصوبة في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalCondition",
    prisAnkare: "fertilitet",
  },
  "stimulerad-agglossning": {
    titel: t(
      "Stimulerad ägglossning i Göteborg – GynRaMa",
      "Ovulation induction in Gothenburg – GynRaMa",
      "تحفيز الإباضة في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalTherapy",
    prisAnkare: "fertilitet",
  },
  spermaprov: {
    titel: t(
      "Spermaprov i Göteborg – GynRaMa",
      "Semen analysis in Gothenburg – GynRaMa",
      "فحص الحيوانات المنوية في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalTest",
    prisAnkare: "fertilitet",
  },
  abort: {
    titel: t(
      "Medicinsk abort i Göteborg – GynRaMa",
      "Medical abortion in Gothenburg – GynRaMa",
      "الإجهاض الدوائي في يوتيبوري – GynRaMa",
    ),
    schema: "MedicalProcedure",
    // Landstingsfinansierad — inget privat pris att visa
    prisAnkare: null,
  },
};

/** Har behandlingen en egen sida (och inte en hänvisning till en annan)? */
export function harEgenSida(b: Behandling): boolean {
  return !(b.slug in HANVISNING);
}

/** Adressen en behandling länkas till — egen sida eller hänvisningen. */
export function behandlingUrl(b: Behandling): string {
  return HANVISNING[b.slug] ?? `/behandlingar/${b.slug}`;
}

export const behandlingarMedSida = behandlingar.filter(harEgenSida);

export function hittaBehandling(slug: string): Behandling | undefined {
  return behandlingarMedSida.find((b) => b.slug === slug);
}

/** SEO-uppgifterna, med reservtitel om en ny behandling saknar post här. */
export function sidUppgifter(b: Behandling): SidUppgifter {
  return UPPGIFTER[b.slug] ?? { titel: `${b.namn} – GynRaMa`, schema: "MedicalProcedure" };
}

/**
 * Är raden en underrubrik i klinikens text? Kort rad utan avslutande
 * skiljetecken ("1. Anamnes", "Hormonella preventivmedel"), eller en kort
 * fråga ("När görs ultraljud?") — frågorna är rubriker i källan.
 * Arabiskans frågetecken är ؟.
 */
export function arUnderrubrik(rad: string): boolean {
  const r = rad.trim();
  if (r.startsWith("•")) return false;
  if (/[?؟]$/.test(r)) return r.length < 90;
  return r.length < 60 && !/[.!:]$/.test(r);
}

const MENINGSGRANS = /(?<=[.!?؟])\s+(?=[\p{Lu}\p{Script=Arabic}\d])/u;

/** Första stycket i klinikens text, som meningar. */
function forstaStycketsMeningar(text: string): string[] {
  const stycke =
    text
      .split("\n")
      .map((r) => r.trim())
      .find((r) => r && !r.startsWith("•") && !arUnderrubrik(r)) ?? "";
  return stycke.split(MENINGSGRANS).filter(Boolean);
}

/** Ingressen i översikten: första meningen, och nästa om den första är kort. */
export function ingressUr(text: string): string {
  const [forsta = "", andra] = forstaStycketsMeningar(text);
  return forsta.length < 50 && andra ? `${forsta} ${andra}` : forsta;
}

/**
 * Meta-beskrivning ur klinikens egen text: hela meningar så länge de ryms
 * i ~155 tecken (Googles ungefärliga gräns), sedan klinikens "ingen remiss"
 * om det får plats.
 */
export function beskrivningUr(text: string): string {
  let ut = "";
  for (const m of forstaStycketsMeningar(text)) {
    const nasta = ut ? `${ut} ${m}` : m;
    if (nasta.length > 155) break;
    ut = nasta;
  }
  if (!ut) {
    const forsta = forstaStycketsMeningar(text)[0] ?? "";
    ut = `${forsta.slice(0, 150).replace(/\s+\S*$/, "")} …`;
  }
  const remiss = t("Ingen remiss krävs.", "No referral needed.", "لا حاجة إلى إحالة.");
  return ut.length + remiss.length < 160 ? `${ut} ${remiss}` : ut;
}
