import Image from "next/image";
import { Pill } from "../ui";
import { bilder, kontakt } from "@/content/gynrama";

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="relative">
          {/* Bilden ligger till höger och överlappas av rubriken — som i mallen */}
          <div className="pointer-events-none absolute -top-2 right-0 hidden w-[38%] lg:block">
            <Image
              src={bilder.hero}
              alt="Receptionen på GynRaMa i Göteborg"
              width={1066}
              height={1600}
              priority
              className="h-[500px] w-full rounded-card object-cover"
            />
          </div>

          {/* Två rader, andra raden indragen med tankstreck — mallens grepp */}
          <h1 className="relative z-10 max-w-[15ch] text-white text-[clamp(3.5rem,10.5vw,10.5rem)]">
            Din hälsa
            <span className="mt-1 flex items-center gap-5 pl-2 lg:pl-16">
              <span
                aria-hidden
                className="hidden h-[3px] w-[clamp(2rem,5vw,5.5rem)] shrink-0 bg-white/90 sm:block"
              />
              utan väntetid.
            </span>
          </h1>

          <div className="mt-10 max-w-[46ch] lg:mt-14">
            <p className="text-[17px] leading-relaxed text-white/85">
              På GynRaMa får du högkvalitativ vård av professionella läkare med
              ett personligt bemötande – alltid med fokus på att främja hälsa,
              fertilitet och välbefinnande.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Pill href="/boka-tid" tone="lime" withArrow>
                Boka tid
              </Pill>
              <Pill href="#behandlingar" tone="ghost">
                Behandlingar
              </Pill>
            </div>

            <p className="mt-8 text-[15px] text-white/60">
              Din privata klinik för gynekologisk hälsa · {kontakt.oppet}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
