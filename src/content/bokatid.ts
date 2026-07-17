/**
 * Boka tid — hämtat ordagrant från https://gynrama.se/boka-tid/ 2026-07-17.
 *
 * bokningsUrl pekar på klinikens SKARPA bokningssystem (patient.nu).
 * Länkarna är hämtade från deras egen sida, inte gissade.
 */

export type Besokstyp = {
  titel: string;
  pris: string;
  text: string;
  bokningsUrl: string;
};

/** Klinikens riktiga bokningskalendrar. */
export const besokstyper: Besokstyp[] = [
  {
    titel: "Gynekologisk eller obstetrisk undersökning",
    pris: "1 600 kr",
    text: "Fysiskt besök hos specialistläkare på kliniken i Göteborg, inklusive ultraljud.",
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/aaa9725c-aace-41ba-8cba-8fcf67a9eca1",
  },
  {
    titel: "Videobesök med specialistläkare",
    pris: "1 000 kr",
    text: "Tillgängligt över hela världen – du behöver inte vara i Göteborg.",
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/b3604bfd-5515-482f-a96c-3d079c392c4c",
  },
  {
    titel: "Telefonkonsultation med specialistläkare",
    pris: "500 kr",
    text: "Medicinsk rådgivning per telefon när du har frågor som inte kräver undersökning.",
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/6b81a651-4dc3-4afb-9536-8515edd083db",
  },
  {
    titel: "Psykiatrisk konsultation med specialistläkare",
    pris: "Från 1 000 kr",
    text: "Fysiskt besök, videobesök eller telefon. Inklusive PMDS, utmattningssyndrom och postpartum depression.",
    bokningsUrl:
      "https://patient.nu/portal/public/calendar/d8c2a45d-c04a-4e7b-93e2-db81dcd130ec",
  },
];

export const bokaIngress = `Hos GynRaMa kan du boka både fysiska och digitala besök hos våra erfarna gynekologer med specialkompetens inom obstetrik, gynekologi, andrologi, reproduktionsmedicin och psykiatri.
Du behöver ingen remiss eller egenremiss för att komma på besök.`;

export const bokaFakta = [
  { etikett: "Videobesök", varde: "Hela världen" },
  { etikett: "Fysiska besök", varde: "Göteborg" },
  { etikett: "Öppet", varde: "Mån–lör 8:30–17:00" },
];

/** Från rubriken "Gällande bokning/avbokning". */
export const bokningsregler = [
  "Avboka ditt besök senast 24 timmar innan planerad tid.",
  "Vid sen avbokning eller uteblivet besök debiteras hela besökskostnaden.",
  "Bokar du tid samma dag, välj akutbesök inom 24 timmar eller akutbesök inom 8 timmar. Gäller oavsett besökstyp.",
  "Behöver du tolk kan vi ordna det. Vid privat besök betalar du själv tolkkostnaden.",
  "Frikort gäller inte vid uteblivet besök.",
  "Regionavtal gäller endast måndag–fredag. Privat vård kan bokas alla dagar.",
];

export const regionavtal = {
  rubrik: "Boka tid via regionavtal",
  text: [
    `Besöket är regionfinansierat och patientavgift tas ut enligt Västra Götalandsregionens (VGR) gällande regiontaxa.`,
    `För att boka dessa tider behöver du kontakta oss via telefon, då särskild tidsbokning krävs.`,
  ],
};

export const betalning = `OBS! Vi tar endast emot betalning via kort eller Swish.`;

/** Provtagning sker hos extern partner. */
export const provtagning = {
  rubrik: "Provtagning",
  namn: "Unilabs Carlanderska provtagning",
  adress: "Carlandersparken 1, 412 55 Göteborg",
  oppet: ["Drop-in mån–tor: 07.15–16.00", "Fre: 07.15–15.00"],
};
