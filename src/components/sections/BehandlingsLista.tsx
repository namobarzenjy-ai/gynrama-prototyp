import Link from "next/link";
import { ArrowUpRight } from "../ui";
import { behandlingar, kategorier } from "@/content/behandlingar";
import { behandlingUrl, ingressUr } from "@/content/behandlingssidor";
import { t } from "@/i18n";

/**
 * Översikten på /behandlingar. Varje behandling har en egen sida
 * (/behandlingar/<slug>/) med klinikens hela text — här står bara namnet
 * och första meningen, så att översikten inte konkurrerar med
 * behandlingssidorna om samma sökningar.
 *
 * Raderna behåller id={slug}, så gamla djuplänkar (/behandlingar#myom)
 * landar fortfarande på rätt rad. IVF pekar på /gynrama-ivf, se
 * behandlingssidor.ts.
 */
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
                  {iKat.length === 1
                    ? t("behandling", "treatment", "علاج")
                    : t("behandlingar", "treatments", "علاجات")}
                </span>
              </div>

              <ul>
                {iKat.map((b) => (
                  <li key={b.slug} id={b.slug} className="border-b border-ink/20">
                    <Link
                      href={behandlingUrl(b)}
                      className="group flex items-center justify-between gap-6 py-6"
                    >
                      {/* div, inte span: h3 får inte ligga i ett frasinnehåll */}
                      <div className="min-w-0">
                        <h3 className="text-[21px] text-ink transition-opacity group-hover:opacity-70">
                          {b.namn}
                        </h3>
                        <p className="mt-1.5 max-w-[78ch] text-[15px] leading-relaxed text-ink/60">
                          {ingressUr(b.text)}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="grid size-11 shrink-0 place-items-center rounded-full bg-white/60 text-ink transition-colors group-hover:bg-lila group-hover:text-white"
                      >
                        <ArrowUpRight className="size-[13px]" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
