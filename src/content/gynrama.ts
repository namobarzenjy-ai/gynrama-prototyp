/**
 * Allt innehåll är hämtat från gynrama.se (befintlig sida) — inget är påhittat.
 * Rubriker och brödtext följer klinikens egna formuleringar så nära som möjligt.
 */

export const kontakt = {
  telefon: "031-232 122",
  telefonHref: "tel:+4631232122",
  telefonAlt: "073-740 80 64",
  telefonAltHref: "tel:+46737408064",
  epost: "info@gynrama.se",
  adress: "Anders Personsgatan 12, Plan 4",
  postort: "416 64 Göteborg",
  karta: "https://www.google.com/maps?q=Anders+Personsgatan+12,+41664+Göteborg",
  oppet: "Mån–lör: 8:30–17:00",
  oppetNot: "Söndagar: endast akuta tider",
  orgnr: "559368-8111",
  facebook: "https://m.facebook.com/100086003392370/",
  instagram: "https://www.instagram.com/gynrama",
  allabolag:
    "https://www.allabolag.se/foretag/gynrama-ab/göteborg/hälsotjänster/2KIC5DBI63IHB",
  gdpr: "https://gynrama.se/wp-content/uploads/2023/09/Personuppgiftspolicy-GynRaMa-AB-Ref.-23002A.pdf",
  verksamhetschef: "Randa Akouri, Verksamhetschef",
};

/* Bilder: fria stockfoton (Unsplash/Pexels-licens — fri kommersiell
   användning, ingen attribution krävs). Varje URL är verifierad HTTP 200. */
export const bilder = {
  hero: "https://images.unsplash.com/photo-1651507225850-4721bd4b537e?w=1200&q=80",
  omOss:
    "https://images.unsplash.com/photo-1706565029539-d09af5896340?w=1200&q=80",
  kort1:
    "https://images.unsplash.com/photo-1612662227564-982c079252bb?w=1200&h=1200&fit=crop&q=80",
  kort2:
    "https://images.pexels.com/photos/5852906/pexels-photo-5852906.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1000&fit=crop",
  kort3:
    "https://images.unsplash.com/photo-1561652970-807773cc928c?w=1200&h=1200&fit=crop&q=80",
  cta: "https://images.unsplash.com/photo-1762007175856-68d237957842?w=1200&q=80",
};

export const omraden = [
  {
    titel: "Gynekologi",
    text: "Regelbundna kontroller, ultraljud, cellförändringar, myom och klimakteriebesvär.",
    bild: bilder.kort1,
    alt: "Mjuka pionblad i varma toner",
    href: "/behandlingar#kat-gynekologi",
  },
  {
    titel: "Fertilitet & IVF",
    text: "Utredning, rådgivning och IVF i nära samarbete med Nordic IVF.",
    bild: bilder.kort2,
    alt: "Kvinna med slutna ögon i mjukt ljus",
    href: "/behandlingar#kat-fertilitet",
  },
  {
    titel: "Graviditet",
    text: "Bedömning i tidig graviditet och ultraljud med 3D- och 4D-teknik.",
    bild: bilder.kort3,
    alt: "Hand som håller en kvist över vatten",
    href: "/behandlingar#kat-graviditet",
  },
];

/* Besökstyperna och priserna kommer från gynrama.se/priser/ och /boka-tid/ */
export const besok = [
  {
    titel: "Gynekologiskt besök",
    pris: "1 600 kr",
    text: "Ett fysiskt besök hos specialistläkare inklusive ultraljud. Ingen remiss eller egenremiss krävs — du bokar direkt via bokningssystemet.",
    punkt: "Inklusive ultraljud",
  },
  {
    titel: "Videobesök",
    pris: "1 000 kr",
    text: "Konsultation med specialistläkare via video, var du än befinner dig i landet eller världen.",
    punkt: "Digitalt, samma specialist",
  },
  {
    titel: "Telefonkonsultation",
    pris: "500 kr",
    text: "Medicinsk rådgivning per telefon när du har frågor som inte kräver en undersökning.",
    punkt: "Medicinsk rådgivning",
  },
  {
    titel: "Akut besök inom 24 timmar",
    pris: "2 600 kr",
    text: "När det inte kan vänta. Akut besök utanför ordinarie öppettider eller inom 3 timmar kostar 3 900 kr.",
    punkt: "Inga väntetider",
  },
  {
    titel: "Landstingsfinansierad vård",
    pris: "Ring oss",
    text: "Vi erbjuder även landstingsfinansierad vård. För att boka dessa tider behöver du ringa oss direkt.",
    punkt: "Via regionavtal",
  },
];

export const fordelar = [
  "Ingen remiss krävs",
  "Inga väntetider",
  "Samma specialistteam hela vägen",
  "Privat och landstingsfinansierat",
];

/* Från gynrama.se/om-oss/ */
export const lakare = [
  {
    namn: "Randa Akouri",
    titel: "Docent, specialistläkare i kvinnosjukdomar",
    text: "Reproduktionsmedicin, reproduktionsfysiologi och benigna gynekologiska besvär. Verksamhetschef på GynRaMa.",
  },
  {
    namn: "Mats Brännström",
    titel: "Professor, specialistläkare i kvinnosjukdomar",
    text: "Gynekologisk cancerkirurgi, reproduktionsmedicin, IVF och öppenvårdsgynekologi.",
  },
  {
    namn: "Sofia Ganidou",
    titel: "Överläkare i gynekologi och obstetrik",
    text: "Cellförändringar i livmoderhalsen, klimakteriebesvär, blödningsrubbningar och gynekologiskt ultraljud.",
  },
  {
    namn: "Asha Kalra",
    titel: "Överläkare i gynekologi",
    text: "Obstetrik, gynekologi, klimakteriebesvär, inkontinens, infertilitet och cellförändringar.",
  },
];

/* Från gynrama.se/gynrama-ivf/ — "Därför väljer patienter GynRaMa IVF" */
export const ivfPunkter = [
  "IVF i nära samarbete med Nordic IVF",
  "Individanpassade behandlingsplaner",
  "Kontinuitet — samma läkare hela vägen",
  "Evidensbaserad vård med akademisk profil",
];
