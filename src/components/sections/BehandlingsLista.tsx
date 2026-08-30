import { Check, Pill } from "../ui";
import { behandlingar, kategorier } from "@/content/behandlingar";

/**
 * Renderar GynRaMas ordagranna behandlingstext.
 * "• " -> punktlista. Kort rad utan avslutande skiljetecken -> underrubrik.
 */
function Brodtext({ text }: { text: string }) {
  const rader = text.split("\n").filter((r) => r.trim());
  const block: React.ReactNode[] = [];
  let punkter: string[] = [];

  const tomPunkter = (key: string) => {
    if (!punkter.length) return;
    block.push(
      <ul key={key} className="my-3 space-y-1.5">
        {punkter.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[15px] text-ink/75">
            <Check className="mt-[6px] size-[13px] shrink-0 text-ink/40" />
            <span>{p}</span>
          </li>
        ))}
      </ul>,
    );
    punkter = [];
  };

  rader.forEach((rad, i) => {
    const r = rad.trim();
    if (r.startsWith("•")) {
      punkter.push(r.replace(/^•\s*/, ""));
      return;
    }
    tomPunkter(`ul-${i}`);

    const arUnderrubrik = r.length < 60 && !/[.!?:]$/.test(r);
    block.push(
      arUnderrubrik ? (
        <h4 key={i} className="mt-6 mb-2 font-serif text-[19px] text-ink">
          {r}
        </h4>
      ) : (
        <p key={i} className="mb-3 text-[15px] leading-relaxed text-ink/75">
          {r}
        </p>
      ),
    );
  });
  tomPunkter("ul-slut");

  return <div className="max-w-[68ch]">{block}</div>;
}

export function BehandlingsLista() {
  return (
    <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        {kategorier.map((kat) => {
          const iKat = behandlingar.filter((b) => b.kategori === kat.kategori);
          return (
            // "kat-"-prefix: kategorin Abort och behandlingen Abort
            // skulle annars få samma id
            <div key={kat.slug} id={`kat-${kat.slug}`} className="pt-20">
              <div className="flex items-end justify-between gap-6 border-b border-ink/20 pb-5">
                <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] text-ink">
                  {kat.rubrik}
                </h2>
                <span className="pb-1 text-[14px] text-ink/50">
                  {iKat.length}{" "}
                  {iKat.length === 1 ? "behandling" : "behandlingar"}
                </span>
              </div>

              {iKat.map((b) => (
                <details
                  key={b.slug}
                  id={b.slug}
                  className="group border-b border-ink/20"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[21px] text-ink transition-opacity group-hover:opacity-70">
                      {b.namn}
                    </h3>
                    <span
                      aria-hidden
                      className="relative size-4 shrink-0 text-ink"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-opacity group-open:opacity-0" />
                    </span>
                  </summary>

                  <div className="pb-8">
                    {b.bild && (
                      <img
                        src={b.bild}
                        alt={b.bildAlt ?? ""}
                        width={2560}
                        height={1707}
                        loading="lazy"
                        className="mb-6 h-[280px] w-full max-w-[560px] rounded-card object-cover"
                      />
                    )}
                    <Brodtext text={b.text} />
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Pill href="/boka-tid" tone="lime">
                        Boka tid
                      </Pill>
                      {b.mer && (
                        <Pill href={b.mer.href} tone="slate">
                          {b.mer.label}
                        </Pill>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
