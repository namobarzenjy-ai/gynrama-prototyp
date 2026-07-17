import Link from "next/link";
import type { ReactNode } from "react";

/** Kompakt hero för undersidor — samma mesh-gradient som startsidan, lägre. */
export function SidHero({
  titel,
  ingress,
  ankare = [],
}: {
  titel: string;
  ingress: string;
  ankare?: { label: string; href: string }[];
}) {
  return (
    <section className="hero-mesh">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <h1 className="max-w-[13ch] text-white text-[clamp(2.8rem,7vw,6rem)]">
          {titel}
        </h1>

        <div className="mt-8 max-w-[62ch] space-y-4">
          {ingress.split("\n").map((r, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-white/85">
              {r}
            </p>
          ))}
        </div>

        {ankare.length > 0 && (
          <nav className="mt-10 flex flex-wrap gap-2">
            {ankare.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="rounded-pill bg-white/12 px-[22px] py-[13px] text-[16px] leading-none text-white backdrop-blur-sm transition-colors hover:bg-lime hover:text-ink"
              >
                {a.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}

export function SidLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
