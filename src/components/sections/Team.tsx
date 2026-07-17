import Image from "next/image";
import { Check } from "../ui";
import { lakare, personal, teamAvslutning, type Person } from "@/content/omoss";

function PersonKort({ p }: { p: Person }) {
  // Första stycket syns alltid; resten av biografin och meriterna fälls ut.
  // Utan detta blir korten olika höga och väggen av text oläsbar.
  const [ingress, ...restBio] = p.bio;
  const harMer = restBio.length > 0 || !!p.meriter?.length;

  return (
    <article
      id={p.slug}
      className="flex flex-col overflow-hidden rounded-card bg-white"
    >
      {/*
        Porträttformat 4:5. Källbilderna är stående (0.82–1.03) — i en
        bred, låg ruta klipptes 38–53% bort och personerna blev inzoomade.
      */}
      <Image
        src={p.bild}
        alt={`${p.namn}, ${p.titel.toLowerCase()}`}
        width={640}
        height={800}
        className="aspect-[4/5] w-full bg-lavender-mist object-cover object-top"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[23px] text-ink">{p.namn}</h3>
        <p className="mt-1.5 text-[13px] leading-snug text-ink/55">{p.titel}</p>

        <p className="mt-4 text-[14px] leading-relaxed text-ink/75">{ingress}</p>

        {harMer && (
          <details className="group mt-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-[14px] text-ink/60 transition-colors hover:text-ink max-lg:min-h-11 [&::-webkit-details-marker]:hidden">
              <span
                aria-hidden
                className="relative size-3.5 shrink-0 text-ink/60"
              >
                <span className="absolute top-1/2 left-0 h-px w-3.5 -translate-y-1/2 bg-current" />
                <span className="absolute top-0 left-1/2 h-3.5 w-px -translate-x-1/2 bg-current transition-opacity group-open:opacity-0" />
              </span>
              <span className="group-open:hidden">Läs mer</span>
              <span className="hidden group-open:inline">Visa mindre</span>
            </summary>

            <div className="mt-4 space-y-3">
              {restBio.map((stycke, i) => (
                <p key={i} className="text-[14px] leading-relaxed text-ink/75">
                  {stycke}
                </p>
              ))}
            </div>

            {p.meriter && (
              <ul className="mt-4 space-y-2.5">
                {p.meriter.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink/70"
                  >
                    <Check className="mt-[5px] size-[12px] shrink-0 text-ink/40" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            )}
          </details>
        )}

        {p.not && (
          <p className="mt-auto pt-5 text-[13px] leading-snug text-ink/50 italic">
            {p.not}
          </p>
        )}
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-lavender-mist">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        <h2 className="mx-auto max-w-[16ch] pt-4 text-center text-[clamp(2rem,3.6vw,3.1rem)] text-ink">
          Våra specialistläkare
        </h2>
        <p className="mx-auto mt-6 max-w-[58ch] text-center text-[16px] leading-relaxed text-ink/70">
          {teamAvslutning}
        </p>

        {/* Enhetliga kort — grundarna får sin framtoning i sektionen ovanför */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lakare.map((p) => (
            <PersonKort key={p.slug} p={p} />
          ))}
        </div>

        <h3 className="mt-20 text-center text-[clamp(1.6rem,2.6vw,2.2rem)] text-ink">
          Övrig personal
        </h3>
        <div className="mx-auto mt-10 grid max-w-[810px] gap-5 sm:grid-cols-2">
          {personal.map((p) => (
            <PersonKort key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
