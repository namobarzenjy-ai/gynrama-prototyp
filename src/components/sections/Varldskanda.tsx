import Image from "next/image";
import { Pill } from "../ui";
import { sverigesRadio, varldskanda, lakare } from "@/content/omoss";

/** Klinikens starkaste innehåll — livmodertransplantationen. */
export function Varldskanda() {
  const grundare = lakare.slice(0, 2);

  return (
    <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <div className="rounded-card bg-lavender p-6 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
            <div>
              <h2 className="max-w-[11ch] text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink">
                {varldskanda.rubrik}
              </h2>
              <p className="mt-7 max-w-[58ch] text-[16px] leading-relaxed text-ink/75">
                {varldskanda.text}
              </p>
              <p className="mt-4 max-w-[58ch] text-[16px] leading-relaxed text-ink/75">
                {varldskanda.avslut}
              </p>

              <div className="mt-9 grid max-w-[440px] gap-4 sm:grid-cols-2">
                {varldskanda.statistik.map((s, i) => (
                  <div
                    key={s.varde}
                    className={`rounded-[18px] p-5 ${i === 0 ? "bg-lila" : "bg-paper"}`}
                  >
                    <p className={`text-[13px] ${i === 0 ? "text-white/70" : "text-ink/60"}`}>
                      {s.etikett}
                    </p>
                    <p className={`mt-6 font-serif text-[34px] leading-none ${i === 0 ? "text-white" : "text-ink"}`}>
                      {s.varde}
                    </p>
                    <p className={`mt-1 text-[13px] ${i === 0 ? "text-white/80" : "text-ink/70"}`}>
                      {s.beskrivning}
                    </p>
                  </div>
                ))}
              </div>

              {/*
                Radioinslaget från gamla hemsidans Om oss. Ljudet ÄR Sveriges
                Radios — vi länkar till deras spelare istället för att kopiera
                filen (upphovsrätt). Kortet ser ut som en spelare så det är
                tydligt att det är ljud, men uppspelningen sker hos SR.
              */}
              <a
                href={sverigesRadio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex max-w-[440px] items-center gap-4 rounded-[18px] bg-paper p-4 transition-shadow hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-slate-deep text-white transition-colors group-hover:bg-ink"
                >
                  {/* Play-triangel */}
                  <svg viewBox="0 0 16 16" className="ml-0.5 size-4 fill-current">
                    <path d="M4 2.5v11l9-5.5-9-5.5Z" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] tracking-wide text-ink/50 uppercase">
                    {sverigesRadio.etikett} · {sverigesRadio.datum} · {sverigesRadio.langd}
                  </span>
                  <span className="mt-0.5 block font-serif text-[19px] leading-snug text-ink">
                    Hör inslaget: {sverigesRadio.rubrik}
                  </span>
                  <span className="mt-1 block text-[13px] leading-snug text-ink/60">
                    {sverigesRadio.beskrivning} Öppnas hos Sveriges Radio.
                  </span>
                </span>
              </a>

              <div className="mt-7">
                <Pill href="#team" tone="lila" withArrow>
                  Möt teamet
                </Pill>
              </div>
            </div>

            {/* Grundarna — klinikens egna foton */}
            <div className="flex gap-4 lg:flex-col">
              {grundare.map((p) => (
                <figure key={p.slug} className="relative w-full lg:w-[220px]">
                  <Image
                    src={p.bild}
                    alt={`${p.namn}, ${p.titel.toLowerCase()}`}
                    width={440}
                    height={550}
                    className="aspect-[4/5] w-full rounded-[18px] bg-lavender-mist object-cover object-top"
                  />
                  <figcaption className="mt-2 text-[13px] leading-snug text-ink/70">
                    {p.namn}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
