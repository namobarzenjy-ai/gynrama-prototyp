import Image from "next/image";
import { Check, Pill } from "../ui";
import { bilder, fordelar, ivfPunkter } from "@/content/gynrama";

export function CtaBand() {
  return (
    <section id="boka" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        <div className="relative overflow-hidden rounded-card bg-tan">
          <Image
            src={bilder.ctaBakgrund}
            alt=""
            aria-hidden
            width={2048}
            height={1365}
            className="absolute inset-0 size-full object-cover"
          />

          <div className="relative grid gap-8 p-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-6">
            {/* Lavendelkortet som ligger på bilden. Rubriken "Din hälsa
                förtjänar tid..." togs bort på kundens begäran 2026-08-30 —
                kortet är nu ett rent bokningskort. */}
            <div className="max-w-[420px] self-center rounded-[20px] bg-lavender p-8 lg:p-10">
              <Pill href="/boka-tid" tone="lime" withArrow>
                Boka tid
              </Pill>
              <p className="mt-6 text-[14px] text-ink/60">
                Ingen remiss eller egenremiss krävs.
              </p>
            </div>

            {/* Mörka fördelskortet */}
            <div className="self-center rounded-[20px] bg-ink p-6">
              <h3 className="text-[21px] text-white">Därför GynRaMa</h3>
              <ul className="mt-4 space-y-2">
                {[...fordelar, ...ivfPunkter.slice(0, 2)].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[14px] leading-snug text-white/85"
                  >
                    <Check className="mt-1 size-[13px] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Image
                src={bilder.ctaKort}
                alt="Specialistläkare på GynRaMa"
                width={1600}
                height={1066}
                className="mt-5 h-[130px] w-full rounded-[14px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
