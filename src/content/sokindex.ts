/**
 * Sökindex för sökrutan i headern. Byggs vid bygget ur innehållsfilerna —
 * sajten är statisk (GitHub Pages) så sökningen sker helt i webbläsaren,
 * ingen server. Lägger du till innehåll i en content-fil kommer det med
 * här automatiskt; lägger du till en NY content-fil måste den in nedan.
 */
import { behandlingar, ingress as behandlingsIngress } from "./behandlingar";
import { priser, prisIngress } from "./priser";
import { besokstyper, bokaIngress } from "./bokatid";
import { lakare, personal, intro as omossIntro } from "./omoss";
import { produkter, webshopIngress } from "./webshop";
import { formular, formularIngress } from "./formular";
import { ivfIngress } from "./ivf";

export type SokPost = {
  titel: string;
  /** Visas som liten etikett i träfflistan. */
  typ: string;
  href: string;
  text: string;
};

/** Samma id-transform som priser-sidan använder för sina kategorirubriker. */
const prisAnkare = (rubrik: string) =>
  rubrik.toLowerCase().replace(/[^a-zåäö]+/g, "-");

export const sokposter: SokPost[] = [
  // Sidorna
  { titel: "Behandlingar", typ: "Sida", href: "/behandlingar", text: behandlingsIngress },
  { titel: "GynRaMa IVF", typ: "Sida", href: "/gynrama-ivf", text: ivfIngress.join(" ") },
  { titel: "Priser", typ: "Sida", href: "/priser", text: prisIngress },
  { titel: "Boka tid", typ: "Sida", href: "/boka-tid", text: bokaIngress },
  { titel: "Om oss", typ: "Sida", href: "/om-oss", text: omossIntro.join(" ") },
  { titel: "Formulär & länkar", typ: "Sida", href: "/formular-och-lankar", text: formularIngress },
  { titel: "Webshop", typ: "Sida", href: "/webshop", text: webshopIngress },

  // Behandlingarna — länkar till raden i dragspelet
  ...behandlingar.map((b) => ({
    titel: b.namn,
    typ: "Behandling",
    href: `/behandlingar#${b.slug}`,
    text: b.text,
  })),

  // Prisraderna — länkar till kategorin på prissidan
  ...priser.flatMap((kat) =>
    kat.rader.map((r) => ({
      titel: r.tjanst,
      typ: "Pris",
      href: `/priser#${prisAnkare(kat.rubrik)}`,
      text: `${r.pris}${r.not ? ` · ${r.not}` : ""} · ${kat.rubrik}`,
    })),
  ),

  // Besökstyperna
  ...besokstyper.map((b) => ({
    titel: b.titel,
    typ: "Boka tid",
    href: "/boka-tid",
    text: `${b.pris} · ${b.text}`,
  })),

  // Teamet — länkar till personkortet
  ...[...lakare, ...personal].map((p) => ({
    titel: p.namn,
    typ: "Team",
    href: `/om-oss#${p.slug}`,
    text: `${p.titel}. ${p.bio[0]}`,
  })),

  // Webshopens produkter — länkar till kategorin
  ...produkter.map((p) => ({
    titel: p.namn,
    typ: "Webshop",
    href: `/webshop#${p.kategori.toLowerCase()}`,
    text: `${p.pris} · ${p.beskrivning}`,
  })),

  // Formulären
  ...formular.map((f) => ({
    titel: f.titel,
    typ: "Formulär",
    href: "/formular-och-lankar",
    text: f.text,
  })),
];
