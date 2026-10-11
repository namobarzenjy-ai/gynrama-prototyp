import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brodtext } from "@/components/Brodtext";
import { CtaBand } from "@/components/sections/CtaBand";
import { Lakare } from "@/components/sections/Lakare";
import { ArrowUpRight, Check, Pill } from "@/components/ui";
import { SPRAK, t } from "@/i18n";
import { SAJT_URL, seoMeta, sidUrl } from "@/seo";
import { behandlingar, kategorier } from "@/content/behandlingar";
import {
  behandlingUrl,
  behandlingarMedSida,
  beskrivningUr,
  hittaBehandling,
  ingressUr,
  sidUppgifter,
} from "@/content/behandlingssidor";
import { fordelar, kontakt } from "@/content/gynrama";

/**
 * En sida per behandling. Texten är klinikens ordagranna (behandlingar.ts) —
 * sidan lägger bara till rubrikstruktur, bokning, relaterade behandlingar
 * och läkarna. SEO-uppgifterna ligger i behandlingssidor.ts.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return behandlingarMedSida.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = hittaBehandling((await params).slug);
  if (!b) return {};
  return seoMeta({
    titel: sidUppgifter(b).titel,
    beskrivning: beskrivningUr(b.text),
    sokvag: `/behandlingar/${b.slug}/`,
  });
}

export default async function BehandlingSida({ params }: Props) {
  const b = hittaBehandling((await params).slug);
  if (!b) notFound();

  const kat = kategorier.find((k) => k.kategori === b.kategori)!;
  const uppgifter = sidUppgifter(b);
  const prisHref =
    uppgifter.prisAnkare === null
      ? null
      : `/priser${uppgifter.prisAnkare ? `#${uppgifter.prisAnkare}` : ""}`;
  const fler = behandlingar.filter(
    (x) => x.kategori === b.kategori && x.slug !== b.slug,
  );

  const url = sidUrl(SPRAK, `/behandlingar/${b.slug}/`);
  const hubb = sidUrl(SPRAK, "/behandlingar/");
  const strukturerad = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#sida`,
        url,
        name: uppgifter.titel,
        description: beskrivningUr(b.text),
        inLanguage: SPRAK,
        about: { "@type": uppgifter.schema, name: b.namn },
        specialty: b.kategori === "Graviditet" ? "Obstetric" : "Gynecologic",
        publisher: { "@id": `${SAJT_URL}/#klinik` },
        breadcrumb: { "@id": `${url}#brodsmulor` },
        ...(uppgifter.granskad && {
          reviewedBy: { "@type": "Physician", name: uppgifter.granskad.av },
          lastReviewed: uppgifter.granskad.datum,
        }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#brodsmulor`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("Behandlingar", "Treatments", "العلاجات"), item: hubb },
          { "@type": "ListItem", position: 2, name: kat.rubrik, item: `${hubb}#kat-${kat.slug}` },
          { "@type": "ListItem", position: 3, name: b.namn },
        ],
      },
    ],
  };

  // Långa namn ("Preventivmedelsrådgivning – …") får mindre rubrik, annars
  // blir sammansättningen bredare än mobilskärmen
  const langtNamn = b.namn.length > 30;

  return (
    <>
      <Header aktiv="/behandlingar" />
      <main>
        <section className="hero-mesh">
          <div className="mx-auto max-w-[1240px] px-6 pt-10 pb-20 lg:pt-14 lg:pb-24">
            <nav aria-label={t("Du är här", "Breadcrumb", "مسار التنقل")}>
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-white/65">
                <li>
                  <Link href="/behandlingar" className="hover:text-white hover:underline">
                    {t("Behandlingar", "Treatments", "العلاجات")}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={`/behandlingar#kat-${kat.slug}`} className="hover:text-white hover:underline">
                    {kat.rubrik}
                  </Link>
                </li>
              </ol>
            </nav>

            <h1
              className={`mt-8 max-w-[20ch] hyphens-auto text-white wrap-break-word ${
                langtNamn
                  ? "text-[clamp(2.1rem,5vw,4.2rem)]"
                  : "text-[clamp(2.6rem,6.5vw,5.5rem)]"
              }`}
            >
              {b.namn}
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Pill href="/boka-tid" tone="lila" withArrow>
                {t("Boka tid", "Book now", "احجزي موعداً")}
              </Pill>
              {prisHref && (
                <Pill href={prisHref} tone="ghost">
                  {t("Se priser", "See prices", "عرض الأسعار")}
                </Pill>
              )}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 pt-16 pb-24 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:pt-20 lg:pb-28">
            <article>
              {b.bild && (
                <Image
                  src={b.bild}
                  alt={b.bildAlt ?? ""}
                  width={2560}
                  height={1707}
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="mb-12 h-auto w-full rounded-card"
                />
              )}
              <Brodtext text={b.text} />
              {b.mer && (
                <div className="mt-8">
                  <Pill href={b.mer.href} tone="slate">
                    {b.mer.label}
                  </Pill>
                </div>
              )}
              {uppgifter.granskad && (
                <p className="mt-12 border-t border-ink/15 pt-5 text-[14px] text-ink/60">
                  {t("Medicinskt granskad av", "Medically reviewed by", "راجعه طبياً")}{" "}
                  {uppgifter.granskad.av}, {uppgifter.granskad.datum}
                </p>
              )}
            </article>

            <aside className="self-start rounded-card bg-white p-7 lg:sticky lg:top-[130px]">
              <h2 className="text-[28px] text-ink">{t("Boka tid", "Book now", "احجزي موعداً")}</h2>
              <ul className="mt-5 space-y-2.5">
                {fordelar.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink/75">
                    <Check className="mt-[4px] size-[13px] shrink-0 text-lila" />
                    {f}
                  </li>
                ))}
              </ul>
              <Pill href="/boka-tid" tone="lila" className="mt-7 w-full justify-center">
                {t("Boka tid", "Book now", "احجزي موعداً")}
              </Pill>
              <p className="mt-5 text-[15px] text-ink/70">
                {t("Eller ring", "Or call", "أو اتصلي على")}{" "}
                <a href={kontakt.telefonHref} className="whitespace-nowrap text-ink underline underline-offset-4 hover:text-lila">
                  <span dir="ltr">{kontakt.telefon}</span>
                </a>
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/50">
                {kontakt.oppet} · {kontakt.oppetLordag}
              </p>
            </aside>
          </div>
        </section>

        {fler.length > 0 && (
          <section className="bg-lavender-mist">
            <div className="mx-auto max-w-[1240px] px-6 pb-24 lg:pb-28">
              <div className="flex items-end justify-between gap-6 border-b border-ink/20 pb-5">
                <div>
                  <p className="text-[14px] text-ink/55">{kat.rubrik}</p>
                  <h2 className="mt-1 text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                    {t("Fler behandlingar", "More treatments", "علاجات أخرى")}
                  </h2>
                </div>
                <Link
                  href="/behandlingar"
                  className="shrink-0 pb-1 text-[15px] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
                >
                  {t("Alla behandlingar", "All treatments", "جميع العلاجات")}
                </Link>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {fler.map((x) => (
                  <Link
                    key={x.slug}
                    href={behandlingUrl(x)}
                    className="group flex flex-col rounded-card bg-white p-7 transition-transform hover:-translate-y-1"
                  >
                    <h3 className="text-[22px] leading-tight text-ink">{x.namn}</h3>
                    <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink/65">
                      {ingressUr(x.text)}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] text-ink/55 transition-colors group-hover:text-ink">
                      {t("Läs mer", "Read more", "اقرئي المزيد")}
                      <ArrowUpRight className="size-[11px]" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand />
        <Lakare />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // < escapas så att ingen text kan stänga script-taggen
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(strukturerad).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
