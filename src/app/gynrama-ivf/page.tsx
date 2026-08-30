import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowUpRight, Check, NoteTag, Pill } from "@/components/ui";
import {
  ivfUnderrubrik,
  ivfIngress,
  ivfDarfor,
  ivfFilosofi,
  ivfPriser,
} from "@/content/ivf";
import { bilder } from "@/content/gynrama";
import { t } from "@/i18n";
import { lakare } from "@/content/omoss";

export const metadata: Metadata = {
  title: t(
    "GynRaMa IVF – Fertilitet & IVF i samarbete med Nordic IVF",
    "GynRaMa IVF – Fertility & IVF in partnership with Nordic IVF",
    "GynRaMa IVF – الخصوبة وأطفال الأنابيب بالتعاون مع Nordic IVF",
  ),
  description: t(
    "Individanpassade IVF-behandlingar i Göteborg i nära samarbete med Nordic IVF. Samma specialistteam hela vägen, korta väntetider och evidensbaserad vård med akademisk profil.",
    "Individualised IVF treatment in Gothenburg in close partnership with Nordic IVF. The same specialist team throughout, short waiting times and evidence-based care with an academic profile.",
    "علاج أطفال الأنابيب مصمم لكل حالة في يوتيبوري بالتعاون الوثيق مع Nordic IVF. نفس الفريق المتخصص طوال الرحلة، أوقات انتظار قصيرة ورعاية قائمة على الأدلة.",
  ),
};

export default function Ivf() {
  return (
    <>
      <Header aktiv="/gynrama-ivf" />
      <main>
        <SidHero titel="GynRaMa IVF" ingress={ivfUnderrubrik} />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-28 lg:pb-36">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
              <div className="max-w-[64ch] space-y-5">
                {ivfIngress.map((t) => (
                  <p key={t} className="text-[16px] leading-relaxed text-ink/75">
                    {t}
                  </p>
                ))}
                <div className="pt-3">
                  <Pill href="/boka-tid" tone="lila" withArrow>
                    {t("Boka fertilitetskonsultation", "Book a fertility consultation", "احجزي استشارة خصوبة")}
                  </Pill>
                </div>
              </div>

              <div className="relative lg:w-[320px]">
                <Image
                  src={bilder.ivf}
                  alt={t("Nyfödd hand som håller om en vuxens finger", "A newborn hand holding an adult\u2019s finger", "يد مولود جديد تمسك بإصبع شخص بالغ")}
                  width={800}
                  height={953}
                  className="h-[380px] w-full rounded-card object-cover"
                />
                <NoteTag className="-bottom-4 start-6">{t("Med Nordic IVF", "With Nordic IVF", "مع Nordic IVF")}</NoteTag>
              </div>
            </div>

            {/* Därför-punkterna i lavendelkortet */}
            <div className="mt-20 grid gap-10 rounded-card bg-lavender p-8 lg:grid-cols-[1fr_320px] lg:p-10">
              <div>
                <h2 className="max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.7rem)] text-ink">
                  {ivfDarfor.rubrik}
                </h2>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {ivfDarfor.punkter.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/80"
                    >
                      <Check className="mt-[6px] size-[13px] shrink-0 text-ink/50" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevanta priser direkt på sidan */}
              <div className="self-start rounded-[20px] bg-ink p-6 text-white">
                <h3 className="text-[20px]">{t("Priser", "Prices", "الأسعار")}</h3>
                <dl className="mt-4 space-y-3">
                  {ivfPriser.map((p) => (
                    <div key={p.tjanst} className="border-b border-white/12 pb-3">
                      <dt className="text-[13px] leading-snug text-white/70">
                        {p.tjanst}
                      </dt>
                      <dd className="mt-1 font-serif text-[19px]">{p.pris}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/priser"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-white/60 transition-colors hover:text-lila-ljus max-lg:min-h-11"
                >
                  {t("Hela prislistan", "Full price list", "قائمة الأسعار الكاملة")}
                  <ArrowUpRight className="size-[11px]" />
                </Link>
              </div>
            </div>

            {/* Filosofin — centrerad, som mallens värdesektion */}
            <div className="mt-24 text-center">
              <h2 className="mx-auto max-w-[10ch] text-[clamp(1.9rem,3.2vw,2.7rem)] text-ink">
                {ivfFilosofi.rubrik}
              </h2>
              <p className="mx-auto mt-7 max-w-[64ch] text-[17px] leading-relaxed text-ink/75">
                {ivfFilosofi.text}
              </p>
            </div>

            {/* Grundarna — den akademiska profilen är hela poängen här */}
            <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-[820px]">
              {lakare.slice(0, 2).map((l) => (
                <Link
                  key={l.slug}
                  href={`/om-oss#${l.slug}`}
                  className="group flex gap-5 rounded-card bg-white p-5 transition-transform hover:-translate-y-1"
                >
                  <Image
                    src={l.bild}
                    alt={`${l.namn}, ${l.titel.toLowerCase()}`}
                    width={220}
                    height={275}
                    className="h-[108px] w-[86px] shrink-0 rounded-[14px] bg-lavender-mist object-cover object-top"
                  />
                  <div>
                    <p className="text-[17px] text-ink">{l.namn}</p>
                    <p className="mt-1 text-[12px] leading-snug text-ink/55">
                      {l.titel}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-ink/50 transition-colors group-hover:text-ink">
                      {t("Läs mer", "Read more", "اقرئي المزيد")}
                      <ArrowUpRight className="size-[11px]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
