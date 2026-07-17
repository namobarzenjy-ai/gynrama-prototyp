/**
 * Prislista — hämtad ordagrant från https://gynrama.se/priser/ 2026-07-17.
 * Källan använder <caption> per kategori; namn och belopp är oförändrade.
 *
 * VERIFIERA MOT KLINIKEN INNAN SKARP DRIFT. Priser ändras.
 */

export type Prisrad = { tjanst: string; pris: string; not?: string };
export type Priskategori = { rubrik: string; rader: Prisrad[] };

export const prisHamtat = "2026-07-17";

export const priser: Priskategori[] = [
  {
    rubrik: "Konsultationer & besök",
    rader: [
      {
        tjanst: "Gynekolog besök inkl. ultraljud",
        pris: "1 600 kr",
        not: "Laboratorieprover tillkommer enligt separat prislista",
      },
      { tjanst: "Telefonkonsultation / medicinsk rådgivning", pris: "500 kr" },
      { tjanst: "Videobesök konsultation med specialist", pris: "1 000 kr" },
      { tjanst: "Receptförskrivning utanför läkarbesök", pris: "500 kr" },
      { tjanst: "Akut besök inom 24 timmar", pris: "2 600 kr" },
      {
        tjanst:
          "Akut besök utanför ordinarie öppettider samt akut besök inom 3 timmar",
        pris: "3 900 kr",
      },
      { tjanst: "Remiss i samband med besöket", pris: "500 kr" },
    ],
  },
  {
    rubrik: "Graviditetsrelaterade tjänster",
    rader: [
      { tjanst: "Tidigt graviditetsultraljud (från v 6+)", pris: "1 600 kr" },
      { tjanst: "Abdominellt graviditetsultraljud", pris: "1 900 kr" },
      {
        tjanst:
          "Foster (NIPT) inklusive ultraljud, provtagning och tillval av kromosomavvikelser samt könsbestämning",
        pris: "7 200 kr",
        not: "Från graviditetsvecka 10+0",
      },
      {
        tjanst:
          "Tillval av mikrodeletioner 22q11.2 som orsakar DiGeorges syndrom",
        pris: "3 100 kr",
      },
    ],
  },
  {
    rubrik: "Fertilitetsutredningar & behandlingar",
    rader: [
      { tjanst: "Fertilitetskonsultation", pris: "2 000 kr" },
      {
        tjanst: "Komplett fertilitetsutredning inför ev. IVF-remiss",
        pris: "11 500 kr",
      },
      {
        tjanst: "Missfallsutredning",
        pris: "9 800 kr",
        not: "Exklusive kromosomanalys",
      },
      {
        tjanst:
          "Ägglossningsstimulering med hormontabletter / Letrozol-behandling inklusive en uppföljning med ultraljud",
        pris: "4 000 kr",
      },
      {
        tjanst:
          "Ägglossningsstimulering med hormonsprutor inklusive uppföljning med ultraljud",
        pris: "9 000 kr",
        not: "Exklusive läkemedelskostnad",
      },
      {
        tjanst: "Undersökning av livmoder och äggledare – HyCoSy/HSSG",
        pris: "4 000 kr",
      },
      {
        tjanst: "Undersökning av livmoder – hydrosonografi (KAVUS)",
        pris: "2 000 kr",
      },
      { tjanst: "Spermieprov", pris: "2 000 kr" },
      { tjanst: "Kolposkopi inklusive biopsi och cellprov", pris: "8 000 kr" },
      { tjanst: "Kolposkopi exklusive biopsi och cellprov", pris: "3 500 kr" },
    ],
  },
  {
    rubrik: "Gynekologiska tjänster",
    rader: [
      {
        tjanst: "Spiraluttag (inklusive läkarbesök och ultraljud)",
        pris: "1 700 kr",
        not: "Extra kostnad tillkommer vid bedövning",
      },
      {
        tjanst: "Spiralinsättning (inklusive läkarbesök och ultraljud)",
        pris: "2 000 kr",
        not: "600 kr tillkommer för kopparspiralen. 200 kr tillkommer för samtidigt spiraluttag",
      },
      {
        tjanst: "Spiraluttag + spiralinsättning",
        pris: "2 500 kr",
        not: "Extra kostnad tillkommer vid bedövning",
      },
      {
        tjanst:
          "Gynekologisk undersökning vid IVF-behandling på annan klinik eller utomlands",
        pris: "1 600 kr",
        not: "För gynekologisk undersökning inklusive ultraljud. Kostnad för laboratorie tillkommer enligt prislista. Receptförskrivning 500 kr per recept, exklusive förmån. 200 kr tillkommer för kopia av journalanteckning i samband med besöket",
      },
      {
        tjanst: "Cellprov (HPV + cytologi)",
        pris: "1 800 kr",
        not: "Exklusive läkarbesök",
      },
      { tjanst: "HPV-analys", pris: "900 kr", not: "Exklusive läkarbesök" },
      {
        tjanst: "Utredning/provtagning av postmenopausal blödning",
        pris: "Från 3 000 kr",
        not: "Exklusive läkarkostnad",
      },
      { tjanst: "Uttag av P-stav inklusive bedövning", pris: "1 800 kr" },
      { tjanst: "Insättning av P-stav inklusive bedövning", pris: "1 800 kr" },
      { tjanst: "3D/4D-ultraljud", pris: "2 500 kr" },
    ],
  },
  {
    rubrik: "Psykiatri",
    rader: [
      {
        tjanst: "Psykiatrisk konsultation – fysiskt besök (60 min)",
        pris: "2 000 kr",
        not: "Inklusive PMDS, utmattningssyndrom och postpartum depression",
      },
      {
        tjanst: "Psykiatrisk konsultation – videobesök (45 min)",
        pris: "1 500 kr",
      },
      { tjanst: "Psykiatrisk telefonkonsultation (20 min)", pris: "1 000 kr" },
    ],
  },
  {
    rubrik: "Kirurgiska ingrepp",
    rader: [
      { tjanst: "Hysteroskopi diagnostisk", pris: "18 000 kr" },
      { tjanst: "Hysteroskopi med biopsi/polypborttagning", pris: "25 000 kr" },
    ],
  },
  {
    rubrik: "Övriga tjänster",
    rader: [
      {
        tjanst: "Kopia av journalanteckning i samband med besöket",
        pris: "200 kr",
      },
      {
        tjanst:
          "Utskick av kopia på labbprover/journalkopior utanför besökstiden",
        pris: "300 kr",
      },
      { tjanst: "Enstaka blodprover", pris: "Från 900 kr" },
      { tjanst: "Läkarintyg", pris: "Från 1 000 kr" },
      {
        tjanst:
          "Endometrial microbiome test vid RIF eller upprepade missfall",
        pris: "8 600 kr",
      },
    ],
  },
];

export const prisIngress = `Nedan hittar du våra priser för privat vård. Vi erbjuder även landstingsfinansierad vård, där patientavgift tas ut enligt Västra Götalandsregionens gällande regiontaxa.`;

export const prisNoter = [
  "Vi tar endast emot betalning via kort eller Swish.",
  "Ingen remiss eller egenremiss krävs för privat vård.",
  "Avboka senast 24 timmar innan planerad tid. Vid sen avbokning eller uteblivet besök debiteras hela besökskostnaden.",
];
