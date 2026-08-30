/**
 * Om oss — hämtat ordagrant från https://gynrama.se/om-oss/ 2026-07-17.
 *
 * Porträtten är GynRaMas egna publicerade foton på sin egen personal.
 * Kopplingen bild→person är verifierad: varje bild ligger exakt 51 px under
 * sin rubrik på källsidan (samma offset för alla sju), och filnamnet
 * mats-brannstrom.jpg landar precis där mönstret förutsäger.
 *
 * Sätt ALDRIG ett annat foto under ett av de här namnen — det är verkliga,
 * identifierbara personer.
 *
 * Texten följde källan ordagrant fram till 2026-08-30, då kunden begärde
 * språkrättningar och innehållsändringar — se noten längst ned.
 */

export type Person = {
  slug: string;
  namn: string;
  titel: string;
  bild: string;
  bio: string[];
  meriter?: string[];
  not?: string;
};

const UPLOADS = "https://gynrama.se/wp-content/uploads";

export const introRubrik = "Om oss";

export const intro = [
  `GynRaMa är en privat gynekologklinik i Göteborg, som startade hösten 2022. Grundare och doktorer i verksamheten är överläkare/docent Randa Akouri och överläkare/professor Mats Brännström. Våra doktorer har mycket lång erfarenhet av obstetrik, gynekologi och reproduktionsmedicin, både avseende klinisk handläggning och forskning.`,
  `Vi har mycket bred kompetens och baserar vår diagnostik samt behandling på nationella riktlinjer och på senaste forskningsresultat.`,
];

export const praktiskt = [
  {
    rubrik: "Mottagningen",
    text: `GynRaMa är en gynekologimottagning i Göteborg som har öppet vardagar samt kvälls- och helgöppet. Vår utrustning är modern och lokalerna är nyupprustade.`,
  },
  {
    rubrik: "Hitta hit",
    text: `Betalparkering finns i direkt anslutning till kliniken. Vid transport med kommunala färdmedel så åker du enklast buss till hållplatsen Vagnhallen Gårda eller spårvagn till Svingeln, varifrån det är några minuters promenad till mottagningen.`,
  },
  {
    rubrik: "Boka besök",
    text: `Du kan boka besök hos oss via bokningssystemet på hemsidan för privat vård. Du har även möjlighet att boka landstingsfinansierat besök via vår telefonrådgivning som är öppen Mån–Fre kl. 8:30–17:00. Du behöver ingen remiss eller egenremiss för att komma på besök.`,
  },
  {
    rubrik: "Vad vi tar emot",
    text: `För privat vård tar vi emot besök för alla möjliga gynekologiska, obstetriska, andrologiska och infertilitetsbesvär inför vård i Sverige eller i utlandet. Vi utför även 3D/4D ultraljud samt mindre kirurgiska ingrepp.`,
  },
];

/** Från rubriken "Världskända doktorer" på källsidan. */
export const varldskanda = {
  rubrik: "Världskända doktorer",
  text: `Docent Randa Akouri & Professor Mats Brännström, som jobbar på GynRaMa, är världskända doktorer som ligger bakom livmodertransplantation som ledde till första barnet som föddes år 2014. Kvinnor som saknar livmoder av olika orsaker har nu fått möjlighet att få egna biologiska barn tack vare dem och deras framgångar. De har rest världen runt för att sprida sin banbrytande forskning som idag har lett till att över 70 barn är födda i världen.`,
  avslut: `Nu finns GynRaMa efter många års patientefterfrågan.`,
  statistik: [
    { etikett: "Världens första", varde: "2014", beskrivning: "barn efter livmodertransplantation" },
    { etikett: "Globalt hittills", varde: "70+", beskrivning: "barn födda tack vare forskningen" },
  ],
};

/**
 * Radioinslaget som gamla hemsidan länkade under "Om oss". Ljudet ligger hos
 * Sveriges Radio och är deras upphovsrättsskyddade material — vi länkar/bäddar
 * in, vi kopierar ALDRIG ljudfilen till sajten.
 */
export const sverigesRadio = {
  etikett: "Sveriges Radio",
  rubrik: "Livmodertransplantation",
  beskrivning:
    "Hör inslaget om forskningen bakom livmodertransplantationerna vid Sahlgrenska, med intervjuer med forskarteamet.",
  datum: "30 april 2012",
  langd: "9:31",
  url: "https://www.sverigesradio.se/artikel/5087318",
};

export const lakare: Person[] = [
  {
    slug: "randa-akouri",
    namn: "Randa Akouri",
    titel:
      "Specialistläkare i kvinnosjukdomar och docent i ämnesområdet Obstetrik och Gynekologi",
    bild: `${UPLOADS}/2026/04/IMG_0509-941x1024.jpeg`,
    bio: [
      `Randa Akouri har en lång karriär inom forskning och klinik inom området kvinnosjukdomar, fr.a. reproduktionsfysiologi och reproduktionsmedicin. Hon har stor erfarenhet av diagnostik och behandling av benigna gynekologiska besvär och sjukdomar samt infertilitet.`,
    ],
    meriter: [
      `År 2001 var Randa Akouri den första i världen som visade lyckade livmodertransplantationer i en djurmodell. Detta var forskningsgrunden till att första barnet i världen, efter lyckad livmodertransplantation, föddes 2014 senare i Göteborg.`,
      `Docent Akouri har varit författare och medförfattare till ett flertal vetenskapliga forskningsartiklar och översiktsartiklar inom uterustransplantation och reproduktionsmedicin, samt skrivit bokkapitel.`,
      `Docent Akouri har lett arbete bakom introduktion av livmodertransplantation utomlands, vilket bl.a. gav den första lyckade livmodertransplantationen i MENAT (Mellanöstern, Turkiet och Nordafrika), där första barnet föddes år 2019.`,
      `Docent Akouri har varit föredragshållare inom gynekologi och reproduktionsmedicin vid ett flertal tillfällen nationellt och internationellt.`,
      `Docent Akouri har tilldelats Göteborgs Stads förtjänsttecken 2025.`,
    ],
  },
  {
    slug: "mats-brannstrom",
    namn: "Mats Brännström",
    titel:
      "Specialistläkare i kvinnosjukdomar och professor i ämnesområdet Obstetrik och Gynekologi",
    bild: `${UPLOADS}/2022/10/mats-brannstrom.jpg`,
    bio: [
      `Professor Brännström är en av världens mest kända gynekologer efter en lång karriär inom forskning och klinik inom området kvinnosjukdomar. Han har mer än 30 års klinisk erfarenhet inom området gynekologisk cancerkirurgi och mer än 10 års erfarenhet av reproduktionsmedicin och IVF. Professor Brännström har också en mycket lång erfarenhet av öppenvårdsgynekologi avseende benigna gynekologiska besvär och sjukdomar.`,
    ],
    meriter: [
      `Författare till över 400 vetenskapliga forskningsartiklar inom gynekologi och reproduktionsmedicin.`,
      `Författare till läroböcker inom gynekologi, obstetrik och reproduktionsmedicin.`,
      `Professor i obstetrik och gynekologi sedan 2001.`,
      `Forskningsledare och kirurg bakom det svenska livmodertransplantationsprojektet, med världens första livmodertransplantationsbarn, fött 2014.`,
      `Tidigare gästprofessor vid Harvard Medical School, USA.`,
      `Tidigare gästprofessor vid Mayo Clinic, USA.`,
      `Internationellt mycket anlitad föreläsare i obstetrik och gynekologi.`,
      `Mottagare av ett flertal större forskningspris, senast från Franska Vetenskapsakademin.`,
      `Past-president i International Society of Uterus Transplantation (ISUTx).`,
      `Ordförande i Swedish Society of Reproductive Medicine (SSRM).`,
    ],
  },
  {
    slug: "sofia-ganidou",
    namn: "Sofia Ganidou",
    titel: "Överläkare i gynekologi och obstetrik",
    bild: `${UPLOADS}/2026/04/IMG_0507-1024x992.jpeg`,
    bio: [
      `Sofia Ganidou är överläkare i gynekologi och obstetrik med mångårig erfarenhet från både öppenvård och slutenvård.`,
      `Hon har en särskild kompetens inom utredning och behandling av cellförändringar i livmoderhalsen och är certifierad handledare i Sverige för utbildning av gynekologer inom detta område. Hon har även lång erfarenhet av att behandla klimakteriebesvär, blödningsrubbningar samt andra gynekologiska tillstånd. Sofia är IOTA-certifierad inom gynekologiskt ultraljud, vilket möjliggör noggrann diagnostik och individualiserade behandlingsplaner.`,
    ],
    not: `För närvarande arbetar hon inom den offentliga sjukvården och tar därför endast emot privatbetalande patienter.`,
  },
  {
    slug: "asha-kalra",
    namn: "Asha Kalra",
    titel: "Överläkare i gynekologi",
    bild: `${UPLOADS}/2026/04/IMG_0601-838x1024.webp`,
    bio: [
      `Asha Kalra är överläkare i gynekologi med över 30 års erfarenhet inom både obstetrik och gynekologi. Hon tog sin läkarexamen vid Köpenhamns universitet och genomförde sin specialistutbildning i Norrbotten.`,
      `Efter sin specialistutbildning arbetade hon under många år inom slutenvården, där hon handlade både gynekologiska och obstetriska patienter, och var under en period ansvarig för specialistmödravården vid sin klinik.`,
      `Sedan 2001 är Asha Kalra verksam inom öppenvården i Göteborg, där hon utreder och behandlar ett brett spektrum av gynekologiska tillstånd, såsom klimakteriebesvär, inkontinens, infertilitet samt preventivmedelsrådgivning.`,
      `På senare år har hon haft ett särskilt fokus på utredning och behandling av cellförändringar i livmoderhalsen och är dysplasiansvarig inom sitt verksamhetsområde.`,
    ],
  },
  {
    slug: "mikael-helou",
    namn: "Mikael Helou",
    titel: "Överläkare i psykiatri",
    bild: `${UPLOADS}/2026/04/IMG_0508-836x1024.jpeg`,
    bio: [
      `Mikael Helou är överläkare i psykiatri med lång och omfattande erfarenhet av psykiatrisk specialistvård. Han har arbetat i både psykiatrisk öppenvård och slutenvård och har därigenom fördjupat sin kompetens i att utreda, diagnostisera och behandla ett brett spektrum av psykiska tillstånd – från akuta och komplexa symtombilder till mer långvariga och återkommande besvär.`,
      `Genom sin kliniska bredd har Mikael utvecklat en stark förmåga att möta patienter i olika faser av sjukdomsförloppet. Hans erfarenhet sträcker sig över flera stora psykiatriska kliniker i landet, vilket har gett honom en gedigen förståelse för hur psykiatrisk vård bedrivs i olika regioner och miljöer.`,
      `Mikael arbetar utifrån evidensbaserade metoder och lägger stor vikt vid ett personcentrerat förhållningssätt. Han strävar alltid efter att skapa trygghet, struktur och delaktighet i behandlingen, och han är mån om att integrera medicinsk expertis med respekt för patientens livssituation, mål och värderingar.`,
    ],
    not: `För närvarande arbetar han inom den offentliga sjukvården och tar därför endast emot privatbetalande patienter.`,
  },
];

export const personal: Person[] = [
  {
    slug: "therese-larsson",
    namn: "Therese Larsson",
    titel: "Undersköterska",
    bild: `${UPLOADS}/2026/04/IMG_0505-864x1024.jpeg`,
    bio: [
      `Therese Larsson är undersköterska med över 30 års erfarenhet inom obstetrik, gynekologi samt förlossningssjukvård. Hon har flera ansvarsområden på kliniken och ansvarar bland annat för patientomhändertagande, provtagning, assistering vid undersökningar och ingrepp samt att säkerställa att våra patientflöden fungerar smidigt och tryggt.`,
    ],
  },
];

export const teamAvslutning = `Vi som arbetar på GynRaMa är läkare, psykiatriker, sjuksköterskor, undersköterskor och receptionister.`;

/**
 * Källans stavfel var länge medvetet bevarade ("återge ordagrant"). Kunden
 * gav 2026-08-30 klartecken att rätta språkfel — följande är RÄTTADE ovan
 * och texten är därmed inte längre ordagrann mot källan:
 *  - "forskning ock klinik" -> "och" (Mats bio)
 *  - "för sprida" -> "för att sprida" (Världskända)
 *  - "livmodertransplantation i MENAT" -> "livmodertransplantationen" (merit)
 *  - "Nord Afrika" -> "Nordafrika" (merit)
 * Samma besked ändrade "över 45 barn"/"45+" till 70, bytte ordningen till
 * Randa & Mats i Världskända-texten, och tog bort Louise Haag ur personal.
 */
export const rattadeStavfel = true;
