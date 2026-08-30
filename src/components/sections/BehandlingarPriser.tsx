import { Pill } from "../ui";

/**
 * "Behandlingar & priser" — tydlig brygga mellan de två sidorna, på kundens
 * begäran 2026-08-30. Ligger på både /behandlingar och /priser; `visa` styr
 * vilken motpart som lyfts fram.
 */
export function BehandlingarPriser({ visa }: { visa: "priser" | "behandlingar" }) {
  const tillPriser = visa === "priser";
  return (
    <section className="bg-lavender-mist">
      <div className="mx-auto max-w-[1240px] px-6 pb-24 lg:pb-32">
        <div className="rounded-card bg-slate-deep px-8 py-12 text-center lg:px-16 lg:py-16">
          <h2 className="mx-auto max-w-[16ch] text-[clamp(1.9rem,3.2vw,2.7rem)] text-white">
            Behandlingar &amp; priser
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[16px] leading-relaxed text-white/75">
            {tillPriser
              ? "Alla priser för privat vård finns samlade på prissidan, kategori för kategori. Vi erbjuder även landstingsfinansierad vård."
              : "Varje behandling beskrivs i detalj på behandlingssidan — vad som ingår, när du bör söka vård och hur undersökningen går till."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Pill href={tillPriser ? "/priser" : "/behandlingar"} tone="lila" withArrow>
              {tillPriser ? "Se alla priser" : "Se alla behandlingar"}
            </Pill>
            <Pill href="/boka-tid" tone="ghost">
              Boka tid
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
