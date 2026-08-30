import Link from "next/link";

/**
 * Mobilmeny byggd på <details> — ingen klient-JS, precis som dragspelen.
 * Fungerar även om JS inte laddar.
 *
 * Hela komponenten är lg:hidden, så den är display:none på desktop och
 * påverkar varken flex-layouten eller något annat där.
 */
export function MobilMeny({
  lankar,
  aktiv,
}: {
  lankar: { label: string; href: string }[];
  aktiv: string;
}) {
  return (
    <details className="group relative lg:hidden">
      <summary
        aria-label="Öppna menyn"
        className="grid size-11 cursor-pointer list-none place-items-center rounded-full text-ink transition-colors hover:bg-lavender/60 [&::-webkit-details-marker]:hidden"
      >
        {/* Tre streck som blir ett kryss när menyn är öppen */}
        <span aria-hidden className="relative block h-4 w-5">
          <span className="absolute top-0 left-0 h-[2px] w-5 rounded bg-current transition-transform duration-200 group-open:top-[7px] group-open:rotate-45" />
          <span className="absolute top-[7px] left-0 h-[2px] w-5 rounded bg-current transition-opacity duration-200 group-open:opacity-0" />
          <span className="absolute top-[14px] left-0 h-[2px] w-5 rounded bg-current transition-transform duration-200 group-open:top-[7px] group-open:-rotate-45" />
        </span>
      </summary>

      <nav className="absolute right-0 z-50 mt-3 w-[240px] rounded-card bg-white p-3 shadow-[0_18px_50px_rgba(31,31,40,0.22)]">
        {lankar.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            aria-current={l.href === aktiv ? "page" : undefined}
            className={`flex min-h-11 items-center rounded-[14px] px-4 text-[17px] transition-colors ${
              l.href === aktiv
                ? "bg-slate-deep text-white"
                : "text-ink hover:bg-lavender/60"
            }`}
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/boka-tid"
          className="mt-2 flex min-h-12 items-center justify-center rounded-pill bg-lila px-4 text-[17px] font-medium text-white transition-colors hover:bg-lila-deep"
        >
          Boka tid
        </Link>
      </nav>
    </details>
  );
}
