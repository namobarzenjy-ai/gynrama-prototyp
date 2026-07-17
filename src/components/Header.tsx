import Link from "next/link";
import { Pill } from "./ui";

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
      <div className="mx-auto flex h-[106px] max-w-[1240px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-[30px] leading-none tracking-tight text-ink"
        >
          GynRaMa
        </Link>

        {/* Aktiv sida markeras med mörk pill — precis som i mallen */}
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

        <Pill href="/boka-tid" tone="lavender" className="hidden sm:inline-flex">
          Boka tid
        </Pill>
      </div>
    </header>
  );
}
