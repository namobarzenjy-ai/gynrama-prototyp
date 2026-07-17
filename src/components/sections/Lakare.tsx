import { lakare } from "@/content/gynrama";

function initialer(namn: string) {
  return namn
    .split(" ")
    .map((n) => n[0])
    .join("");
}

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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lakare.map((l) => (
            <article
              key={l.namn}
              className="flex flex-col rounded-card bg-white p-6"
            >
              <p className="flex-1 text-[14px] leading-relaxed text-ink/75">
                {l.text}
              </p>

              <div className="mt-7 flex items-center gap-3">
                {/* Initialer istället för porträtt — vi har inga riktiga foton */}
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-lavender font-serif text-[15px] text-ink">
                  {initialer(l.namn)}
                </span>
                <span>
                  <p className="text-[15px] text-ink">{l.namn}</p>
                  <p className="text-[12px] leading-snug text-ink/55">
                    {l.titel}
                  </p>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
