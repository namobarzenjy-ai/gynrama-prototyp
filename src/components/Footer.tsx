import Link from "next/link";
import { kontakt } from "@/content/gynrama";
import { Logo } from "./Logo";

// Absoluta vägar — footern renderas även på undersidor där
// startsidans ankare inte finns
const SNABBLANKAR = [
  { label: "Boka tid", href: "/boka-tid" },
  { label: "Behandlingar", href: "/behandlingar" },
  { label: "GynRaMa IVF", href: "/gynrama-ivf" },
  { label: "Priser", href: "/priser" },
  { label: "Formulär & länkar", href: "/formular-och-lankar" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Webshop", href: "/webshop" },
];

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid size-8 place-items-center rounded-full bg-ink text-white/80 transition-colors hover:text-lila-ljus max-lg:size-11"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-slate-deep text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="ljus" className="h-[48px] lg:h-[56px]" />
            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-white/70">
              Till oss är alla välkomna, både par och ensamstående, och ni kan
              söka er till oss oavsett var i landet eller världen ni bor. Ingen
              remiss behövs och vi har inga väntetider.
            </p>

            <div className="mt-6 flex gap-2">
              <Social href={kontakt.facebook} label="GynRaMa på Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.29-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.21v2.22H7.4V14h2.74v8h3.36Z" />
                </svg>
              </Social>
              <Social href={kontakt.instagram} label="GynRaMa på Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.25a2.85 2.85 0 1 1 0-5.7 2.85 2.85 0 0 1 0 5.7Zm5.6-7.43a1.03 1.03 0 1 1-2.05 0 1.03 1.03 0 0 1 2.05 0ZM20.5 8.9c-.06-1.37-.37-2.58-1.37-3.58-1-1-2.21-1.31-3.58-1.38-1.4-.08-5.6-.08-7 0-1.37.06-2.58.37-3.58 1.37-1 1-1.31 2.21-1.38 3.58-.08 1.4-.08 5.6 0 7 .06 1.37.37 2.58 1.38 3.58 1 1 2.2 1.31 3.58 1.38 1.4.08 5.6.08 7 0 1.37-.07 2.58-.38 3.58-1.38 1-1 1.31-2.21 1.37-3.58.08-1.4.08-5.6 0-7Zm-1.84 8.5c-.3.75-.87 1.32-1.62 1.62-1.12.44-3.79.34-5.04.34-1.25 0-3.92.1-5.04-.34a2.89 2.89 0 0 1-1.62-1.62c-.44-1.12-.34-3.79-.34-5.04 0-1.25-.1-3.92.34-5.04.3-.75.87-1.32 1.62-1.62 1.12-.44 3.79-.34 5.04-.34 1.25 0 3.92-.1 5.04.34.75.3 1.32.87 1.62 1.62.44 1.12.34 3.79.34 5.04 0 1.25.1 3.92-.34 5.04Z" />
                </svg>
              </Social>
            </div>
          </div>

          <div>
            <h2 className="text-[21px]">Kontakt</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                <span className="block text-white/50">Telefon</span>
                <Link href={kontakt.telefonHref} className="hover:text-lila-ljus max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
                  {kontakt.telefon}
                </Link>
              </li>
              <li>
                <span className="block text-white/50">E-post</span>
                <Link
                  href={`mailto:${kontakt.epost}`}
                  className="hover:text-lila-ljus max-lg:inline-flex max-lg:min-h-11 max-lg:items-center"
                >
                  {kontakt.epost}
                </Link>
              </li>
              <li>
                <span className="block text-white/50">Adress</span>
                <Link href={kontakt.karta} className="hover:text-lila-ljus max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
                  {kontakt.adress}
                  <br />
                  {kontakt.postort}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[21px]">Snabblänkar</h2>
            <ul className="mt-5 space-y-2 text-[15px] text-white/70">
              {SNABBLANKAR.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-lila-ljus max-lg:flex max-lg:min-h-11 max-lg:items-center"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[21px]">Öppettider</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-white/70">
              <li>
                {kontakt.oppet}
                <span className="block text-[13px] text-white/50">
                  {kontakt.oppetNot}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*
        Juridikblocket. Krav från kunden 2026-08-30: integritetspolicy,
        företagsinformation (Allabolag), kontaktperson, klagomålsväg och
        e-post ska finnas på VARJE sida. Footern renderas på alla sidor,
        så allt samlas här — flytta inte in delar i enskilda sidor.
      */}
      <div className="border-t border-white/12">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-2 px-6 py-8 text-center text-[14px] text-white/55">
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href={kontakt.gdpr} className="underline-offset-4 hover:text-lila-ljus hover:underline max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
              Integritetspolicy (GDPR)
            </Link>
            {/* Punkt bara när länkarna får plats på samma rad — på mobil
                staplas de och punkten skulle hänga ensam */}
            <span aria-hidden className="max-lg:hidden">·</span>
            <Link href={kontakt.allabolag} className="underline-offset-4 hover:text-lila-ljus hover:underline max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
              Företagsinformation via Allabolag
            </Link>
          </p>
          <p>
            GynRaMa AB · Org.nr {kontakt.orgnr} · Kontaktperson:{" "}
            {kontakt.verksamhetschef}
          </p>
          <p>
            Vid klagomål, kontakta oss via e-post{" "}
            <Link href={`mailto:${kontakt.epost}`} className="underline-offset-4 hover:text-lila-ljus hover:underline max-lg:inline-flex max-lg:min-h-11 max-lg:items-center">
              {kontakt.epost}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
