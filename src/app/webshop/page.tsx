import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { ArrowUpRight, Check } from "@/components/ui";
import {
  produkter,
  kategorier,
  webshopIngress,
  webshopFakta,
  kopUrl,
} from "@/content/webshop";

export const metadata: Metadata = {
  title: "Webshop – CE-märkta snabbtester – GynRaMa",
  description:
    "Beställ CE-märkta snabbtester hem: graviditetstest, ägglossningstest, spermatest, klamydia, HIV och fler. Kortbetalning och leverans 1–2 dagar.",
};

export default function Webshop() {
  return (
    <>
      <Header aktiv="/webshop" />
      <main>
        <SidHero
          titel="Webshop"
          ingress={webshopIngress}
          ankare={kategorier.map((k) => ({
            label: k,
            href: `#${k.toLowerCase()}`,
          }))}
        />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-28 lg:pb-36">
            <div className="grid gap-4 sm:grid-cols-3">
              {webshopFakta.map((f) => (
                <p
                  key={f}
                  className="flex items-center gap-2.5 rounded-[18px] bg-lavender p-5 text-[14px] text-ink/80"
                >
                  <Check className="size-[13px] shrink-0 text-ink/50" />
                  {f}
                </p>
              ))}
            </div>

            {kategorier.map((kat) => {
              const iKat = produkter.filter((p) => p.kategori === kat);
              return (
                <div
                  key={kat}
                  id={kat.toLowerCase()}
                  className="pt-16"
                >
                  <div className="flex items-end justify-between gap-6 border-b border-ink/20 pb-5">
                    <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                      {kat}
                    </h2>
                    <span className="pb-1 text-[14px] text-ink/50">
                      {iKat.length} {iKat.length === 1 ? "produkt" : "produkter"}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {iKat.map((p) => (
                      <article
                        key={p.slug}
                        className="flex flex-col overflow-hidden rounded-card bg-white"
                      >
                        <div className="relative bg-paper">
                          <Image
                            src={p.bild}
                            alt={p.namn}
                            width={520}
                            height={520}
                            className="h-[220px] w-full object-contain p-4"
                          />
                          <span
                            className={`absolute top-4 left-4 rounded-pill px-3 py-1.5 text-[11px] leading-none ${
                              p.ce === "Självtest"
                                ? "bg-lila text-white"
                                : "bg-lavender text-ink"
                            }`}
                          >
                            {p.ce === "Okänt" ? "CE-märkt" : p.ce}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="text-[18px] leading-snug text-ink">
                              {p.namn}
                            </h3>
                            <span className="shrink-0 font-serif text-[19px] whitespace-nowrap text-ink">
                              {p.pris}
                            </span>
                          </div>

                          <ul className="mt-4 flex-1 space-y-1.5">
                            {p.beskrivning
                              .split("\n")
                              .filter(Boolean)
                              .slice(0, 5)
                              .map((rad, i) => {
                                const t = rad.replace(/^[-–]\s*/, "");
                                return (
                                  <li
                                    key={i}
                                    className="text-[13px] leading-relaxed text-ink/65"
                                  >
                                    {t}
                                  </li>
                                );
                              })}
                          </ul>

                          {/* Köp sker i klinikens WooCommerce — inte här */}
                          <Link
                            href={kopUrl(p.slug)}
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-pill bg-slate-deep px-[22px] py-[13px] text-[15px] leading-none text-white transition-colors hover:bg-ink"
                          >
                            Till produkten
                            <ArrowUpRight className="size-[12px]" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}

            <p className="mt-16 max-w-[70ch] text-[13px] leading-relaxed text-ink/50">
              Är testet CE-godkänt som självtest kan det utföras av privatpersoner
              i hemmiljö utan särskild utbildning. Är det CE-godkänt för
              professionellt bruk är det avsett att användas inom hälso- och
              sjukvården av personer med formell utbildning och expertis.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
