"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sokposter, type SokPost } from "@/content/sokindex";

/**
 * Sökrutan i headern. Helt klientbaserad — sajten är statisk (GitHub Pages)
 * så indexet (content-filerna via sokindex.ts) bundlas in och söks i
 * webbläsaren. Ingen server, inga anrop.
 *
 * Panelen positioneras mot <header> (närmast positionerade förälder via
 * sticky) — flyttas komponenten utanför headern tappar panelen sin bredd.
 */

type Traff = { post: SokPost; utdrag: string };

function sok(fraga: string): Traff[] {
  const q = fraga.trim().toLowerCase();
  if (q.length < 2) return [];
  const ord = q.split(/\s+/);

  const traffar: { post: SokPost; poang: number }[] = [];
  for (const post of sokposter) {
    const titel = post.titel.toLowerCase();
    const text = post.text.toLowerCase();
    let poang = 0;
    let alla = true;
    for (const o of ord) {
      // Alla sökord måste träffa — titelträff väger tyngre än textträff
      if (titel.includes(o)) poang += titel.startsWith(o) ? 3 : 2;
      else if (text.includes(o)) poang += 1;
      else {
        alla = false;
        break;
      }
    }
    if (alla) traffar.push({ post, poang });
  }

  return traffar
    .sort((a, b) => b.poang - a.poang)
    .slice(0, 8)
    .map(({ post }) => {
      const i = post.text.toLowerCase().indexOf(ord[0]);
      const utdrag =
        i >= 0
          ? (i > 30 ? "…" : "") +
            post.text.slice(Math.max(0, i - 30), i + 70).trim() +
            "…"
          : post.text.slice(0, 90);
      return { post, utdrag };
    });
}

export function Sok() {
  const [oppen, setOppen] = useState(false);
  const [fraga, setFraga] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const traffar = useMemo(() => sok(fraga), [fraga]);

  // Esc stänger; klick utanför stänger
  useEffect(() => {
    if (!oppen) return;
    const tangent = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOppen(false);
    };
    const klick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOppen(false);
    };
    document.addEventListener("keydown", tangent);
    document.addEventListener("mousedown", klick);
    return () => {
      document.removeEventListener("keydown", tangent);
      document.removeEventListener("mousedown", klick);
    };
  }, [oppen]);

  const stang = () => {
    setOppen(false);
    setFraga("");
  };

  return (
    <div ref={ref}>
      <button
        type="button"
        aria-label={oppen ? "Stäng sök" : "Sök på sidan"}
        aria-expanded={oppen}
        onClick={() => setOppen(!oppen)}
        className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-lavender/60"
      >
        {oppen ? (
          // Kryss
          <svg viewBox="0 0 16 16" className="size-[18px]" aria-hidden>
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          // Förstoringsglas
          <svg viewBox="0 0 16 16" className="size-[18px]" fill="none" aria-hidden>
            <circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M10.6 10.6L14 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {oppen && (
        <div className="absolute inset-x-0 top-full border-t border-ink/10 bg-paper shadow-[0_24px_48px_-24px_rgba(31,31,40,0.35)]">
          <div className="mx-auto max-w-[1240px] px-6 py-5">
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                // Enter går till bästa träffen
                if (traffar[0]) {
                  router.push(traffar[0].post.href);
                  stang();
                }
              }}
            >
              <input
                type="search"
                autoFocus
                value={fraga}
                onChange={(e) => setFraga(e.target.value)}
                placeholder="Sök behandling, pris, produkt …"
                aria-label="Sök på sidan"
                className="w-full rounded-pill border border-ink/15 bg-white px-6 py-3.5 text-[17px] text-ink outline-none placeholder:text-ink/40 focus:border-lila"
              />
            </form>

            {traffar.length > 0 && (
              <ul className="mt-3 max-h-[55vh] divide-y divide-ink/8 overflow-y-auto">
                {traffar.map(({ post, utdrag }) => (
                  <li key={`${post.href}-${post.titel}`}>
                    <Link
                      href={post.href}
                      onClick={stang}
                      className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-3"
                    >
                      <span className="w-fit shrink-0 rounded-pill bg-lavender px-2.5 py-1 text-[11px] leading-none text-ink/70 sm:w-[92px] sm:text-center">
                        {post.typ}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[16px] text-ink group-hover:underline">
                          {post.titel}
                        </span>
                        <span className="block truncate text-[13px] text-ink/55">
                          {utdrag}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {fraga.trim().length >= 2 && traffar.length === 0 && (
              <p className="mt-3 py-2 text-[15px] text-ink/60">
                Inga träffar på ”{fraga.trim()}”. Prova ett annat ord, eller{" "}
                <Link href="/boka-tid" onClick={stang} className="underline underline-offset-4 hover:text-lila">
                  kontakta oss
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
