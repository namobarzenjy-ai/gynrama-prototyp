import Image from "next/image";
import Link from "next/link";
import { t } from "@/i18n";
import {
  ceEtikett,
  delaBeskrivning,
  produktUrl,
  type Produkt,
} from "@/content/webshop";
import { LaggIKorgen } from "./LaggIKorgen";

/** Produktkortet i katalogen och under "Fler tester" på produktsidan. */
export function ProduktKort({ p }: { p: Produkt }) {
  const { text, punkter } = delaBeskrivning(p.beskrivning);
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white">
      <Link href={produktUrl(p.slug)} className="relative block bg-paper">
        <Image
          src={p.bild}
          alt={p.namn}
          width={520}
          height={520}
          className="h-[220px] w-full object-contain p-4"
        />
        <span
          className={`absolute top-4 start-4 rounded-pill px-3 py-1.5 text-[11px] leading-none ${
            p.ce === "Självtest" ? "bg-lila text-white" : "bg-lavender text-ink"
          }`}
        >
          {ceEtikett(p.ce)}
        </span>
        {!p.kanKopas && (
          <span className="absolute top-4 end-4 px-3 py-1.5 text-[11px] rounded-pill bg-ink leading-none text-white">
            {t("Slut i lager", "Out of stock", "نفد من المخزون")}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[18px] leading-snug text-ink">
            <Link href={produktUrl(p.slug)} className="hover:underline">
              {p.namn}
            </Link>
          </h3>
          <span className="shrink-0 font-serif text-[19px] whitespace-nowrap text-ink">
            {p.pris}
          </span>
        </div>

        <ul className="mt-4 flex-1 space-y-1.5">
          {[...text, ...punkter].slice(0, 5).map((rad, i) => (
            <li key={i} className="text-[13px] leading-relaxed text-ink/65">
              {rad}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2">
          <Link
            href={produktUrl(p.slug)}
            className="inline-flex shrink-0 items-center rounded-pill border border-ink/20 px-[18px] py-[12px] text-[15px] leading-none text-ink transition-colors hover:bg-lavender/60"
          >
            {t("Läs mer", "Details", "التفاصيل")}
          </Link>
          <LaggIKorgen slug={p.slug} namn={p.namn} kanKopas={p.kanKopas} />
        </div>
      </div>
    </article>
  );
}
