import { arUnderrubrik } from "@/content/behandlingssidor";
import { Check } from "./ui";

/**
 * Renderar GynRaMas ordagranna behandlingstext på behandlingssidorna.
 * "• " -> punktlista, underrubriker enligt arUnderrubrik().
 *
 * Texterna har två rubriknivåer utan att det syns i källan: en rubrik som
 * följs direkt av en annan rubrik är ett avsnitt ("Orsaker som kräver
 * utredning" → "Missfall", "Vad ingår …?" → "1. Anamnes"). Avsnitten blir
 * h2 och rubrikerna inuti h3; finns inga avsnitt blir alla rubriker h2.
 * Sidans h1 är behandlingens namn — rubrikstrukturen är det Google läser
 * sidans disposition ur.
 */
export function Brodtext({ text }: { text: string }) {
  const rader = text.split("\n").filter((r) => r.trim());
  const block: React.ReactNode[] = [];
  let punkter: string[] = [];

  const tomPunkter = (key: string) => {
    if (!punkter.length) return;
    block.push(
      <ul key={key} className="mt-2 mb-6 space-y-2.5">
        {punkter.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-[17px] leading-relaxed text-ink/80">
            <span className="mt-[7px] grid size-[18px] shrink-0 place-items-center rounded-full bg-lavender">
              <Check className="size-[10px] text-ink/70" />
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>,
    );
    punkter = [];
  };

  const rubrik = rader.map((r) => arUnderrubrik(r));
  let iAvsnitt = false;

  rader.forEach((rad, i) => {
    const r = rad.trim();
    if (r.startsWith("•")) {
      punkter.push(r.replace(/^•\s*/, ""));
      return;
    }
    tomPunkter(`ul-${i}`);

    if (!rubrik[i]) {
      block.push(
        <p key={i} className="mb-5 text-[17px] leading-relaxed text-ink/80">
          {r}
        </p>,
      );
      return;
    }

    const avsnitt = rubrik[i + 1] === true;
    if (avsnitt) iAvsnitt = true;
    block.push(
      avsnitt || !iAvsnitt ? (
        <h2 key={i} className="mt-14 mb-4 text-[clamp(1.6rem,2.6vw,2.1rem)] text-ink first:mt-0">
          {r}
        </h2>
      ) : (
        <h3 key={i} className="mt-8 mb-2 text-[22px] text-ink">
          {r}
        </h3>
      ),
    );
  });
  tomPunkter("ul-slut");

  return <div className="max-w-[68ch]">{block}</div>;
}
