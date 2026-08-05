import Image from "next/image";
import { Pill } from "../ui";
import { bilder, kontakt } from "@/content/gynrama";

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      {/*
        Receptionsbilden ligger bakom rubriken.

        Desktop: bilden ligger i flödet och sätter sektionens höjd, så hela
        panoramat (2100x891) syns oskuret. Texten läggs absolut ovanpå.

        Mobil: samma bild blir bara ~145px hög i full bredd — där ryms ingen
        rubrik. Under lg beskärs den därför med object-cover och höjden kommer
        istället från texten.
      */}
      <Image
        src={bilder.hero}
        alt="Receptionen på GynRaMa i Göteborg, där en patient tas emot i disken"
        width={2100}
        height={891}
        priority
        className="max-lg:absolute max-lg:inset-0 max-lg:size-full max-lg:object-cover lg:h-auto lg:w-full"
      />

      {/*
        Rubriken är vit och bilden är ljus (vita väggar) — utan detta blir
        texten oläslig.

        Desktop: toningen är tyngst till vänster där texten ligger och klingar
        av mot höger, så receptionsdisken och personerna syns.

        Mobil: texten går över hela bredden, så en sidled-toning räcker inte —
        där ligger istället en jämn dämpning över hela bilden.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-ink/65 lg:bg-transparent lg:bg-linear-to-r lg:from-ink/85 lg:via-ink/60 lg:to-ink/20"
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col justify-center px-6 py-20 lg:absolute lg:inset-0 lg:left-1/2 lg:-translate-x-1/2 lg:py-0">
        {/* Två rader, andra raden indragen med tankstreck — mallens grepp */}
        <h1 className="max-w-[15ch] text-white text-[clamp(3rem,7.5vw,7.5rem)]">
          Din hälsa
          <span className="mt-1 flex items-center gap-5 pl-2 lg:pl-16">
            <span
              aria-hidden
              className="hidden h-[3px] w-[clamp(2rem,5vw,5.5rem)] shrink-0 bg-white/90 sm:block"
            />
            utan väntetid.
          </span>
        </h1>

        <div className="mt-10 max-w-[46ch]">
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
    </section>
  );
}
