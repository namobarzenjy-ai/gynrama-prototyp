import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "../ui";
import { lakare } from "@/content/omoss";

export function Lakare() {
  return (
    <section className="bg-gradient-to-b from-paper to-lavender-mist">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        <h2 className="mx-auto max-w-[20ch] text-center text-[clamp(2rem,3.6vw,3.1rem)] text-ink">
          Några av Sveriges mest erfarna specialister
        </h2>
        <p className="mx-auto mt-6 max-w-[62ch] text-center text-[16px] leading-relaxed text-ink/70">
          Våra läkare kombinerar mångårig klinisk expertis med ledande forskning
          för att ge varje patient trygg, modern och individanpassad vård.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {lakare.map((l) => (
            <Link
              key={l.slug}
              href={`/om-oss#${l.slug}`}
              className="group flex flex-col overflow-hidden rounded-card bg-white transition-transform hover:-translate-y-1"
            >
              {/* Porträttformat — källbilderna är stående, se Team.tsx */}
              <Image
                src={l.bild}
                alt={`${l.namn}, ${l.titel.toLowerCase()}`}
                width={440}
                height={550}
                className="aspect-[4/5] w-full bg-lavender-mist object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[16px] text-ink">{l.namn}</p>
                <p className="mt-1 text-[12px] leading-snug text-ink/55">
                  {l.titel}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-ink/50 transition-colors group-hover:text-ink">
                  Läs mer
                  <ArrowUpRight className="size-[11px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center">
          {/* max-lg: tryckyta bara på mobil — desktop-layouten rörs inte */}
          <Link
            href="/om-oss"
            className="inline-flex items-center gap-2 text-[16px] text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline max-lg:min-h-11 max-lg:px-4"
          >
            Om GynRaMa och hela teamet
            <ArrowUpRight className="size-[13px]" />
          </Link>
        </p>
      </div>
    </section>
  );
}
