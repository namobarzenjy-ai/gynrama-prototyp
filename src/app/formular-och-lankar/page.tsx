import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { ArrowUpRight } from "@/components/ui";
import { formular, formularIngress, gdprPdf } from "@/content/formular";
import { kontakt } from "@/content/gynrama";

export const metadata: Metadata = {
  title: "Formulär & länkar – GynRaMa",
  description:
    "Ladda ner hälsodeklaration, miktionslista och frågeformulär för klimakteriebesvär inför ditt besök hos GynRaMa i Göteborg.",
};

export default function FormularOchLankar() {
  return (
    <>
      <Header aktiv="/formular-och-lankar" />
      <main>
        <SidHero titel="Formulär & länkar" ingress={formularIngress} />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-28 lg:pb-36">
            <div className="grid gap-5 sm:grid-cols-2">
              {formular.map((f) => (
                <Link
                  key={f.pdf}
                  href={f.pdf}
                  className="group flex flex-col rounded-card bg-white p-7 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-[22px] text-ink">{f.titel}</h2>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime text-ink transition-colors group-hover:bg-lime-deep">
                      <ArrowUpRight className="size-[14px]" />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">
                    {f.text}
                  </p>
                  <span className="mt-6 text-[13px] text-ink/45">
                    PDF · öppnas i ny flik
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-16 grid gap-6 rounded-card bg-slate-deep p-8 text-white sm:grid-cols-2 lg:p-10">
              <div>
                <h2 className="text-[24px]">Integritet</h2>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/75">
                  Vi hanterar dina personuppgifter enligt GDPR. Läs vår
                  personuppgiftspolicy för att se hur vi samlar in, använder och
                  skyddar din information.
                </p>
                <Link
                  href={gdprPdf}
                  className="mt-5 inline-flex items-center gap-2 text-[15px] transition-colors hover:text-lime max-lg:min-h-11"
                >
                  Personuppgiftspolicy (PDF)
                  <ArrowUpRight className="size-[12px]" />
                </Link>
              </div>

              <div>
                <h2 className="text-[24px]">Frågor?</h2>
                <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-white/75">
                  Hittar du inte det du söker, eller undrar du vilket formulär
                  som gäller för ditt besök? Hör av dig.
                </p>
                <div className="mt-5 space-y-1.5">
                  <Link
                    href={kontakt.telefonHref}
                    className="block text-[15px] transition-colors hover:text-lime max-lg:flex max-lg:min-h-11 max-lg:items-center"
                  >
                    {kontakt.telefon}
                  </Link>
                  <Link
                    href={`mailto:${kontakt.epost}`}
                    className="block text-[15px] transition-colors hover:text-lime max-lg:flex max-lg:min-h-11 max-lg:items-center"
                  >
                    {kontakt.epost}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
