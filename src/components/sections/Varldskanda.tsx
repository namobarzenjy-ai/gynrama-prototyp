import Image from "next/image";
import { Pill } from "../ui";
import { varldskanda, lakare } from "@/content/omoss";

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
                    className={`rounded-[18px] p-5 ${i === 0 ? "bg-lime" : "bg-paper"}`}
                  >
                    <p className="text-[13px] text-ink/60">{s.etikett}</p>
                    <p className="mt-6 font-serif text-[34px] leading-none text-ink">
                      {s.varde}
                    </p>
                    <p className="mt-1 text-[13px] text-ink/70">
                      {s.beskrivning}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Pill href="#team" tone="lime" withArrow>
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
                    height={480}
                    className="h-[190px] w-full rounded-[18px] object-cover object-top lg:h-[210px]"
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
