"use client";

import { usePathname } from "next/navigation";
import { SPRAK, SPRAKVAL } from "@/i18n";

/**
 * Flaggorna i headerns hörn. Varje språk är ett EGET statiskt bygge
 * (se i18n.ts), så växlaren är vanliga <a>-länkar mellan byggena — inte
 * next/link, som skulle försöka klientnavigera till routes som inte finns
 * i det egna bygget.
 *
 * Målet räknas ut från NEXT_PUBLIC_BASE_PATH: "/gynrama-prototyp/en" på
 * en-bygget ger roten "/gynrama-prototyp", och usePathname (utan basePath)
 * ger sidan man står på — så växlingen behåller aktuell sida.
 *
 * Desktop: tre flaggor i rad. Mobil: aktuell flagga som <details>-dropdown
 * (samma JS-fria mönster som MobilMeny) — tre flaggor ryms inte på 375px
 * bredvid logga, sök och hamburgare.
 */
export function SprakVal() {
  const pathname = usePathname();
  const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const rot = bas.replace(/\/(en|ar)$/, "");
  const mal = (kod: string) => `${rot}${kod === "sv" ? "" : `/${kod}`}${pathname}`;
  const aktuell = SPRAKVAL.find((s) => s.kod === SPRAK)!;

  return (
    <>
      {/* Desktop: alla tre synliga */}
      <div className="hidden items-center gap-0.5 lg:flex">
        {SPRAKVAL.map((s) => (
          <a
            key={s.kod}
            href={mal(s.kod)}
            aria-current={s.kod === SPRAK ? "true" : undefined}
            aria-label={s.namn}
            title={s.namn}
            className={`grid size-9 place-items-center rounded-full text-[17px] leading-none transition-colors ${
              s.kod === SPRAK
                ? "bg-lavender"
                : "opacity-55 hover:bg-lavender/60 hover:opacity-100"
            }`}
          >
            <span aria-hidden>{s.flagga}</span>
          </a>
        ))}
      </div>

      {/* Mobil: aktuell flagga öppnar en liten lista */}
      <details className="group relative lg:hidden">
        <summary
          aria-label={aktuell.namn}
          className="grid size-11 cursor-pointer list-none place-items-center rounded-full text-[18px] leading-none transition-colors hover:bg-lavender/60 [&::-webkit-details-marker]:hidden"
        >
          <span aria-hidden>{aktuell.flagga}</span>
        </summary>
        <div className="absolute end-0 z-50 mt-3 w-[160px] rounded-card bg-white p-2 shadow-[0_18px_50px_rgba(31,31,40,0.22)]">
          {SPRAKVAL.map((s) => (
            <a
              key={s.kod}
              href={mal(s.kod)}
              aria-current={s.kod === SPRAK ? "true" : undefined}
              className={`flex min-h-11 items-center gap-2.5 rounded-[14px] px-3 text-[15px] transition-colors ${
                s.kod === SPRAK
                  ? "bg-lavender text-ink"
                  : "text-ink hover:bg-lavender/60"
              }`}
            >
              <span aria-hidden className="text-[17px]">{s.flagga}</span>
              {s.namn}
            </a>
          ))}
        </div>
      </details>
    </>
  );
}
