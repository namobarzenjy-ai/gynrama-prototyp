import Image from "next/image";
import { Pill } from "../ui";
import { bilder, kontakt } from "@/content/gynrama";
import { t } from "@/i18n";

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
        alt={t("Receptionen på GynRaMa i Göteborg, där en patient tas emot i disken", "The reception at GynRaMa in Gothenburg, where a patient is being welcomed at the desk", "الاستقبال في عيادة GynRaMa في يوتيبوري حيث تُستقبل مريضة عند المكتب")}
        width={2100}
        height={891}
        priority
        className="max-lg:absolute max-lg:inset-0 max-lg:size-full max-lg:object-cover lg:h-auto lg:w-full"
      />

      {/*
        Rubriken är vit och bilden är ljus (vita väggar) — utan detta blir
        texten oläslig.

        Desktop: toningen är tyngst på textsidan och klingar av mot bildens
        motiv, så receptionsdisken och personerna syns. I RTL (arabiska) ligger
        texten till höger — därför vänds gradienten med rtl:-varianten.

        Mobil: texten går över hela bredden, så en sidled-toning räcker inte —
        där ligger istället en jämn dämpning över hela bilden.
      */}
      <div
        aria-hidden
        className="absolute inset-0 bg-ink/65 lg:bg-transparent lg:bg-linear-to-r lg:from-ink/85 lg:via-ink/60 lg:to-ink/20 lg:rtl:bg-linear-to-l"
      />

      {/* Centreras med inset-0 + mx-auto — INTE left-1/2/-translate-x-1/2:
          det tricket bryter i RTL, där webbläsaren ignorerar left (inte
          right) vid överbestämd absolut positionering och boxen hamnar
          420px utanför skärmen. inset+auto-marginaler är riktningsoberoende. */}
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col justify-center px-6 py-20 lg:absolute lg:inset-0 lg:py-0">
        {/* Två rader, andra raden indragen med tankstreck — mallens grepp */}
        <h1 className="max-w-[15ch] text-white text-[clamp(3rem,7.5vw,7.5rem)]">
          {t("Din hälsa", "Your health", "صحتكِ")}
          <span className="mt-1 flex items-center gap-5 ps-2 lg:ps-16">
            <span
              aria-hidden
              className="hidden h-[3px] w-[clamp(2rem,5vw,5.5rem)] shrink-0 bg-white/90 sm:block"
            />
            {t("utan väntetid.", "without the wait.", "دون انتظار.")}
          </span>
        </h1>

        <div className="mt-10 max-w-[46ch]">
          <p className="text-[17px] leading-relaxed text-white/85">
            {t(
              "På GynRaMa får du högkvalitativ vård av professionella läkare med ett personligt bemötande – alltid med fokus på att främja hälsa, fertilitet och välbefinnande.",
              "At GynRaMa you receive high-quality care from experienced doctors with a personal touch – always focused on promoting health, fertility and well-being.",
              "في GynRaMa تحصلين على رعاية عالية الجودة من أطباء ذوي خبرة مع اهتمام شخصي – وتركيز دائم على تعزيز الصحة والخصوبة والرفاهية.",
            )}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Pill href="/boka-tid" tone="lila" withArrow>
              {t("Boka tid", "Book now", "احجزي موعداً")}
            </Pill>
            <Pill href="#behandlingar" tone="ghost">
              {t("Behandlingar", "Treatments", "العلاجات")}
            </Pill>
          </div>

          <p className="mt-8 text-[15px] text-white/60">
            {t(
              "Din privata klinik för gynekologisk hälsa",
              "Your private clinic for gynaecological health",
              "عيادتكِ الخاصة لصحة المرأة",
            )}{" "}
            · {kontakt.oppet} · {kontakt.oppetLordag}
          </p>
        </div>
      </div>
    </section>
  );
}
