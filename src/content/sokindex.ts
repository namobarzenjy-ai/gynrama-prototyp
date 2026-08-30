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
import { kategorier, produkter, webshopIngress } from "./webshop";
import { formular, formularIngress } from "./formular";
import { ivfIngress } from "./ivf";
import { t } from "@/i18n";

export type SokPost = {
  titel: string;
  /** Visas som liten etikett i träfflistan. */
  typ: string;
  href: string;
  text: string;
};

export const sokposter: SokPost[] = [
  // Sidorna
  { titel: "Behandlingar", typ: t("Sida", "Page", "صفحة"), href: "/behandlingar", text: behandlingsIngress },
  { titel: "GynRaMa IVF", typ: t("Sida", "Page", "صفحة"), href: "/gynrama-ivf", text: ivfIngress.join(" ") },
  { titel: "Priser", typ: t("Sida", "Page", "صفحة"), href: "/priser", text: prisIngress },
  { titel: "Boka tid", typ: t("Sida", "Page", "صفحة"), href: "/boka-tid", text: bokaIngress },
  { titel: "Om oss", typ: t("Sida", "Page", "صفحة"), href: "/om-oss", text: omossIntro.join(" ") },
  { titel: "Formulär & länkar", typ: t("Sida", "Page", "صفحة"), href: "/formular-och-lankar", text: formularIngress },
  { titel: "Webshop", typ: t("Sida", "Page", "صفحة"), href: "/webshop", text: webshopIngress },

  // Behandlingarna — länkar till raden i dragspelet
  ...behandlingar.map((b) => ({
    titel: b.namn,
    typ: t("Behandling", "Treatment", "علاج"),
    href: `/behandlingar#${b.slug}`,
    text: b.text,
  })),

  // Prisraderna — länkar till kategorin på prissidan
  ...priser.flatMap((kat) =>
    kat.rader.map((r) => ({
      titel: r.tjanst,
      typ: t("Pris", "Price", "سعر"),
      href: `/priser#${kat.slug}`,
      text: `${r.pris}${r.not ? ` · ${r.not}` : ""} · ${kat.rubrik}`,
    })),
  ),

  // Besökstyperna
  ...besokstyper.map((b) => ({
    titel: b.titel,
    typ: t("Boka tid", "Booking", "حجز"),
    href: "/boka-tid",
    text: `${b.pris} · ${b.text}`,
  })),

  // Teamet — länkar till personkortet
  ...[...lakare, ...personal].map((p) => ({
    titel: p.namn,
    typ: t("Team", "Team", "الفريق"),
    href: `/om-oss#${p.slug}`,
    text: `${p.titel}. ${p.bio[0]}`,
  })),

  // Webshopens produkter — länkar till kategorin (stabil slug, ej rubriken)
  ...produkter.map((p) => ({
    titel: p.namn,
    typ: t("Webshop", "Shop", "المتجر"),
    href: `/webshop#${kategorier.find((k) => k.kategori === p.kategori)!.slug}`,
    text: `${p.pris} · ${p.beskrivning}`,
  })),

  // Formulären
  ...formular.map((f) => ({
    titel: f.titel,
    typ: t("Formulär", "Form", "نموذج"),
    href: "/formular-och-lankar",
    text: f.text,
  })),
];
