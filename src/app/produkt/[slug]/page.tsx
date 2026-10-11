import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LaggIKorgen } from "@/components/LaggIKorgen";
import { ProduktKort } from "@/components/ProduktKort";
import { Check } from "@/components/ui";
import { SPRAK, t } from "@/i18n";
import { SAJT_URL, seoMeta, sidUrl } from "@/seo";
import {
  ceEtikett,
  ceForklaring,
  delaBeskrivning,
  hittaProdukt,
  kategorier,
  produkter,
  webshopFakta,
} from "@/content/webshop";

/**
 * Produktsida — en per test, på SAMMA adress som i WooCommerce
 * (/produkt/<slug>/). Det är medvetet: läggs sajten bredvid WordPress hos
 * Loopia ersätter de här sidorna WooCommerce-sidorna utan att Google tappar
 * en enda adress. Köpet går via varukorgen till WooCommerce-kassan.
 */

export const dynamicParams = false;

/** Raderna som meningar — vissa slutar redan med punkt i källtexten. */
const somMeningar = (rader: string[]) =>
  rader.map((r) => r.replace(/[.\s]+$/, "")).join(". ") + ".";

export function generateStaticParams() {
  return produkter.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = hittaProdukt((await params).slug);
  if (!p) return {};
  const { text, punkter } = delaBeskrivning(p.beskrivning);
  return seoMeta({
    titel: `${p.namn} – ${p.pris} – GynRaMa`,
    beskrivning: somMeningar([...text, ...punkter, webshopFakta[1], webshopFakta[2]]),
    sokvag: `/produkt/${p.slug}/`,
    bild: { url: p.bild, alt: p.namn },
  });
}

export default async function ProduktSida({ params }: Props) {
  const p = hittaProdukt((await params).slug);
  if (!p) notFound();

  const kat = kategorier.find((k) => k.kategori === p.kategori)!;
  const { text, punkter } = delaBeskrivning(p.beskrivning);
  const ce = ceForklaring(p.ce);
  const fler = produkter
    .filter((x) => x.kategori === p.kategori && x.slug !== p.slug)
    .slice(0, 3);

  const steg = [
    {
      titel: t("Beställ", "Order", "اطلبي"),
      text: somMeningar([webshopFakta[1], webshopFakta[2]]),
    },
    ce,
    {
      titel: t("Frågor?", "Questions?", "لديكِ أسئلة؟"),
      text: t(
        "Undrar du något om testet eller ditt resultat är du välkommen att kontakta mottagningen.",
        "If you have questions about the test or your result, you are welcome to contact the clinic.",
        "إذا كانت لديكِ أسئلة حول الفحص أو نتيجتكِ، يسعدنا تواصلكِ مع العيادة.",
      ),
      lank: { href: "/boka-tid", label: t("Kontakt & bokning", "Contact & booking", "التواصل والحجز") },
    },
  ];

  const url = sidUrl(SPRAK, `/produkt/${p.slug}/`);
  const strukturerad = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#produkt`,
        name: p.namn,
        image: [p.bild],
        description: somMeningar([...text, ...punkter]),
        category: kat.rubrik,
        url,
        offers: {
          "@type": "Offer",
          url,
          price: p.belopp.toFixed(2),
          priceCurrency: "SEK",
          // Lagret hämtas från WooCommerce vid varje bygge (och varje natt)
          availability: p.kanKopas
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          seller: { "@id": `${SAJT_URL}/#klinik` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Webshop", "Web shop", "المتجر"), item: sidUrl(SPRAK, "/webshop/") },
          { "@type": "ListItem", position: 2, name: kat.rubrik, item: `${sidUrl(SPRAK, "/webshop/")}#${kat.slug}` },
          { "@type": "ListItem", position: 3, name: p.namn },
        ],
      },
    ],
  };

  return (
    <>
      <Header aktiv="/webshop" />
      <main className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
        <div className="mx-auto max-w-[1240px] px-6 pt-8 pb-20 lg:pt-10 lg:pb-28">
          <nav aria-label={t("Du är här", "Breadcrumb", "مسار التنقل")}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-ink/55">
              <li>
                <Link href="/webshop" className="hover:text-ink hover:underline">
                  {t("Webshop", "Web shop", "المتجر")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/webshop#${kat.slug}`} className="hover:text-ink hover:underline">
                  {kat.rubrik}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink/80">
                {p.namn}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="relative self-start rounded-card bg-white">
              <Image
                src={p.bild}
                alt={p.namn}
                width={900}
                height={900}
                priority
                className="aspect-square w-full object-contain p-10 lg:p-14"
              />
              <span
                className={`absolute top-5 start-5 rounded-pill px-3.5 py-2 text-[12px] leading-none ${
                  p.ce === "Självtest" ? "bg-lila text-white" : "bg-lavender text-ink"
                }`}
              >
                {ceEtikett(p.ce)}
              </span>
              {!p.kanKopas && (
                <span className="absolute top-5 end-5 px-3.5 py-2 text-[12px] rounded-pill bg-ink leading-none text-white">
                  {t("Slut i lager", "Out of stock", "نفد من المخزون")}
                </span>
              )}
            </div>

            <div className="lg:pt-4">
              <h1 className="text-[clamp(2.2rem,4.2vw,3.5rem)] text-ink">{p.namn}</h1>
              <p className="mt-5 font-serif text-[32px] leading-none text-ink">{p.pris}</p>

              {text.map((r) => (
                <p key={r} className="mt-7 max-w-[52ch] text-[18px] leading-relaxed text-ink/80">
                  {r}
                </p>
              ))}

              {punkter.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {punkter.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[16px] text-ink/80">
                      <span className="mt-[5px] grid size-[18px] shrink-0 place-items-center rounded-full bg-lavender">
                        <Check className="size-[10px] text-ink/70" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-9">
                <LaggIKorgen slug={p.slug} namn={p.namn} kanKopas={p.kanKopas} variant="sida" />
              </div>

              <ul className="mt-8 grid gap-2 rounded-[18px] bg-lavender p-5 sm:grid-cols-3 sm:gap-4">
                {webshopFakta.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px] leading-snug text-ink/80">
                    <Check className="size-[13px] shrink-0 text-ink/50" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="mt-20 lg:mt-24">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
              {t("Så går det till", "How it works", "كيف تتم العملية")}
            </h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-3">
              {steg.map((s, i) => (
                <li key={s.titel} className="flex flex-col rounded-card bg-white p-7">
                  <span className="grid size-10 place-items-center rounded-full bg-lila font-serif text-[19px] text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[22px] text-ink">{s.titel}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{s.text}</p>
                  {"lank" in s && s.lank && (
                    <Link
                      href={s.lank.href}
                      className="mt-4 w-fit text-[15px] text-lila underline underline-offset-4 hover:text-lila-deep"
                    >
                      {s.lank.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {fler.length > 0 && (
            <section className="mt-20 lg:mt-24">
              <div className="flex items-end justify-between gap-6 border-b border-ink/20 pb-5">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                  {t(
                    `Fler inom ${kat.rubrik.toLowerCase()}`,
                    `More in ${kat.rubrik}`,
                    `المزيد في ${kat.rubrik}`,
                  )}
                </h2>
                <Link
                  href={`/webshop#${kat.slug}`}
                  className="shrink-0 pb-1 text-[15px] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
                >
                  {t("Visa alla", "View all", "عرض الكل")}
                </Link>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {fler.map((x) => (
                  <ProduktKort key={x.slug} p={x} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // < escapas så att en produkttext aldrig kan stänga script-taggen
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(strukturerad).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
