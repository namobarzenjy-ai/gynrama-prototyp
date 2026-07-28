import Image from "next/image";
import { Check, NoteTag, Pill } from "../ui";
import { besok, bilder } from "@/content/gynrama";

export function Besok() {
  return (
    <section id="priser" className="bg-lavender-soft">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="max-w-[12ch] text-[clamp(2.2rem,4.4vw,3.8rem)] text-ink">
              Så bokar du ditt besök
            </h2>
            <div className="mt-8">
              <Pill href="/boka-tid" tone="lime">
                Boka tid
              </Pill>
            </div>

            <div className="relative mt-14 max-w-[360px]">
              <Image
                src={bilder.bokaBesok}
                alt="Specialistläkare vid arbete på GynRaMa"
                width={960}
                height={1400}
                className="h-[340px] w-full rounded-card object-cover object-top"
              />
              <NoteTag className="-bottom-3 left-5">Ingen remiss!</NoteTag>
            </div>
          </div>

          {/* Numrerat dragspel — mallens mönster, öppet på första posten */}
          <div className="lg:pt-4">
            <div className="h-px w-full bg-ink/20" />
            {besok.map((b, i) => (
              <details
                key={b.titel}
                open={i === 0}
                className="group border-b border-ink/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[22px] text-ink">
                    {i + 1}. {b.titel}
                  </h3>
                  <span className="flex items-center gap-4">
                    <span className="text-[15px] whitespace-nowrap text-ink/60">
                      {b.pris}
                    </span>
                    <span
                      aria-hidden
                      className="relative size-4 shrink-0 text-ink"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-opacity group-open:opacity-0" />
                    </span>
                  </span>
                </summary>

                <div className="grid gap-5 pb-7 sm:grid-cols-[190px_1fr]">
                  {i === 0 && (
                    <Image
                      src={bilder.graviditet}
                      alt="Ultraljudsundersökning av gravid mage"
                      width={933}
                      height={1400}
                      className="h-[150px] w-full rounded-[18px] object-cover"
                    />
                  )}
                  <div className={i === 0 ? "" : "sm:col-span-2"}>
                    <p className="text-[15px] leading-relaxed text-ink/75">
                      {b.text}
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-[14px] text-ink/70">
                      <Check className="size-[15px]" />
                      {b.punkt}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
