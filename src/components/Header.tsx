import Link from "next/link";
import { Logo } from "./Logo";
import { MobilMeny } from "./MobilMeny";
import { Sok } from "./Sok";

const NAV = [
  { label: "Hem", href: "/" },
  { label: "Behandlingar", href: "/behandlingar" },
  { label: "IVF", href: "/gynrama-ivf" },
  { label: "Priser", href: "/priser" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Webshop", href: "/webshop" },
];

export function Header({ aktiv = "/" }: { aktiv?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      {/*
        Allt mobilspecifikt sitter bakom max-lg / lg-prefix. Desktop (lg+)
        behåller exakt 106px höjd, 68px logga och pill-navigationen.
      */}
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-6 lg:h-[106px]">
        <Logo className="h-[40px] lg:h-[68px]" />

        {/* Desktop-navigation. Aktiv sida markeras med mörk pill — som i mallen */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.href === aktiv ? "page" : undefined}
              className={`rounded-pill px-[25px] py-[10px] text-[18px] leading-none transition-colors ${
                item.href === aktiv
                  ? "bg-slate-deep text-white"
                  : "text-ink hover:bg-lavender/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/*
          Sök + Boka tid + hamburgare i en grupp så att justify-between inte
          sprider ut dem. Sökikonen syns på alla bredder; Boka tid bara på
          desktop — på mobil ligger den i menyn, headern rymmer inte både
          logga, sök, knapp och hamburgare på 375px.
        */}
        <div className="flex items-center gap-1 lg:gap-2">
          <Sok />
          <Link
            href="/boka-tid"
            className="hidden rounded-pill bg-lavender px-[25px] py-[17px] text-[18px] leading-none font-medium text-ink transition-colors hover:bg-lavender/80 lg:inline-flex lg:items-center"
          >
            Boka tid
          </Link>
          <MobilMeny lankar={NAV} aktiv={aktiv} />
        </div>
      </div>
    </header>
  );
}
