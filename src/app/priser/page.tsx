import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Check, Pill } from "@/components/ui";
import { priser, prisIngress, prisNoter, prisHamtat } from "@/content/priser";

export const metadata: Metadata = {
  title: "Priser – GynRaMa",
  description:
    "Priser för privat gynekologisk vård i Göteborg: gynekologbesök 1 600 kr, videobesök 1 000 kr, telefonkonsultation 500 kr. Vi erbjuder även landstingsfinansierad vård.",
};

export default function Priser() {
  return (
    <>
      <Header aktiv="/priser" />
      <main>
        <SidHero
          titel="Priser"
          ingress={prisIngress}
          ankare={priser.map((p) => ({
            label: p.rubrik,
            href: `#${p.rubrik.toLowerCase().replace(/[^a-zåäö]+/g, "-")}`,
          }))}
        />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
            {/* Villkoren först — de påverkar vad man faktiskt betalar */}
            <div className="grid gap-4 pt-16 sm:grid-cols-3">
              {prisNoter.map((n) => (
                <p
                  key={n}
                  className="flex items-start gap-2.5 rounded-[18px] bg-lavender p-5 text-[14px] leading-relaxed text-ink/80"
                >
                  <Check className="mt-[5px] size-[13px] shrink-0 text-ink/50" />
                  {n}
                </p>
              ))}
            </div>

            {priser.map((kat) => (
              <div
                key={kat.rubrik}
                id={kat.rubrik.toLowerCase().replace(/[^a-zåäö]+/g, "-")}
                className="scroll-mt-32 pt-16"
              >
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                  {kat.rubrik}
                </h2>

                <dl className="mt-7 border-t border-ink/20">
                  {kat.rader.map((r) => (
                    <div
                      key={r.tjanst}
                      className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-5"
                    >
                      <dt className="max-w-[60ch]">
                        <span className="text-[16px] text-ink">{r.tjanst}</span>
                        {r.not && (
                          <span className="mt-1 block text-[13px] leading-snug text-ink/50">
                            {r.not}
                          </span>
                        )}
                      </dt>
                      <dd className="shrink-0 font-serif text-[20px] whitespace-nowrap text-ink">
                        {r.pris}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <div className="mt-16 flex flex-wrap items-center gap-5">
              <Pill href="/boka-tid" tone="lime" withArrow>
                Boka tid
              </Pill>
              <p className="text-[13px] text-ink/50">
                Prislistan hämtad {prisHamtat}. Med reservation för ändringar –
                kontakta oss om något är oklart.
              </p>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
