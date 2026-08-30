import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { t } from "@/i18n";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { ArrowUpRight, Check, Pill } from "@/components/ui";
import {
  besokstyper,
  bokaIngress,
  bokaFakta,
  bokningsregler,
  regionavtal,
  betalning,
  provtagning,
} from "@/content/bokatid";
import { kontakt } from "@/content/gynrama";

export const metadata: Metadata = {
  title: t("Boka tid – GynRaMa", "Book an appointment – GynRaMa", "حجز موعد – GynRaMa"),
  description:
    "Boka gynekologbesök, videobesök eller telefonkonsultation hos GynRaMa i Göteborg. Ingen remiss krävs. Videobesök tillgängligt över hela världen.",
};

export default function BokaTid() {
  return (
    <>
      <Header aktiv="/boka-tid" />
      <main>
        <SidHero titel={t("Boka tid", "Book an appointment", "حجز موعد")} ingress={bokaIngress} />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-28 lg:pb-36">
            <div className="grid gap-4 sm:grid-cols-3">
              {bokaFakta.map((f) => (
                <div key={f.etikett} className="rounded-[18px] bg-lavender p-5">
                  <p className="text-[13px] text-ink/60">{f.etikett}</p>
                  <p className="mt-4 font-serif text-[24px] leading-none text-ink">
                    {f.varde}
                  </p>
                </div>
              ))}
            </div>

            {/* Besökstyperna länkar till klinikens skarpa bokningssystem */}
            <h2 className="mt-20 text-[clamp(2rem,3.6vw,3rem)] text-ink">
              Boka tid för privat vård
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {besokstyper.map((b) => (
                <article
                  key={b.titel}
                  className="flex flex-col rounded-card bg-white p-7"
                >
                  {/*
                    max-lg: stapla rubrik och pris. På samma rad blir kortets
                    min-content bredare än behållaren (lång rubrik + nowrap-pris)
                    och sidan får horisontell scroll på mobil.
                  */}
                  <div className="flex items-baseline justify-between gap-5 max-lg:flex-col max-lg:items-start max-lg:gap-1.5">
                    <h3 className="text-[22px] text-ink">{b.titel}</h3>
                    <span className="shrink-0 font-serif text-[20px] whitespace-nowrap text-ink">
                      {b.pris}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">
                    {b.text}
                  </p>
                  <div className="mt-6">
                    <Pill href={b.bokningsUrl} tone="lila" withArrow>
                      {t("Boka", "Book", "احجزي")}
                    </Pill>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 rounded-[18px] bg-lila p-5 text-[15px] text-white">
              {betalning}
            </p>

            {/* Regionavtal kräver telefon — kan inte bokas online */}
            <div className="mt-8 grid gap-8 rounded-card bg-slate-deep p-8 text-white lg:grid-cols-[1fr_auto] lg:p-10">
              <div>
                <h2 className="text-[26px]">{regionavtal.rubrik}</h2>
                {regionavtal.text.map((t) => (
                  <p
                    key={t}
                    className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-white/75"
                  >
                    {t}
                  </p>
                ))}
              </div>
              <div className="lg:text-end">
                <p className="text-[13px] text-white/50">{t("Ring oss", "Call us", "اتصلي بنا")}</p>
                <Link
                  href={kontakt.telefonHref}
                  className="mt-1 block font-serif text-[26px] transition-colors hover:text-lila-ljus"
                >
                  {kontakt.telefon}
                </Link>
                <Link
                  href={kontakt.telefonAltHref}
                  className="mt-1 block text-[15px] text-white/70 transition-colors hover:text-lila-ljus max-lg:flex max-lg:min-h-11 max-lg:items-center"
                >
                  {kontakt.telefonAlt}
                </Link>
                <p className="mt-2 text-[13px] text-white/50">
                  Mån–fre 8:30–17:00
                </p>
              </div>
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-ink">
                  Gällande bokning och avbokning
                </h2>
                <ul className="mt-7 space-y-3">
                  {bokningsregler.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75"
                    >
                      <Check className="mt-[6px] size-[13px] shrink-0 text-ink/40" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] text-ink">
                  {provtagning.rubrik}
                </h2>
                <div className="mt-7 rounded-card bg-white p-7">
                  <p className="text-[18px] text-ink">{provtagning.namn}</p>
                  <p className="mt-2 text-[15px] text-ink/70">
                    {provtagning.adress}
                  </p>
                  <div className="mt-5 space-y-1">
                    {provtagning.oppet.map((o) => (
                      <p key={o} className="text-[14px] text-ink/60">
                        {o}
                      </p>
                    ))}
                  </div>
                </div>

                <Link
                  href="/priser"
                  className="mt-7 inline-flex items-center gap-2 text-[15px] text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline max-lg:min-h-11"
                >
                  Se hela prislistan
                  <ArrowUpRight className="size-[12px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
