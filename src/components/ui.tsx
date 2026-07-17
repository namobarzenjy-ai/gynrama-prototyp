import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "lime" | "lavender" | "ghost" | "slate";

const TONES: Record<Tone, string> = {
  lime: "bg-lime text-ink hover:bg-lime-deep",
  lavender: "bg-lavender text-ink hover:bg-lavender/80",
  ghost: "bg-transparent text-white hover:text-lime",
  slate: "bg-slate-deep text-white hover:bg-ink",
};

/**
 * Pill-knapp. Mallen kör 17px/25px padding, 18px text, vikt 500, helrund.
 * `withArrow` lägger till den separata cirkel-pilen som sitter till vänster
 * om knappen i heron och CTA-bandet.
 */
export function Pill({
  href,
  children,
  tone = "lime",
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  withArrow?: boolean;
  className?: string;
}) {
  const button = (
    <Link
      href={href}
      className={`inline-flex items-center rounded-pill px-[25px] py-[17px] text-[18px] font-medium leading-none transition-colors ${TONES[tone]} ${withArrow ? "" : className}`}
    >
      {children}
    </Link>
  );

  if (!withArrow) return button;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Link
        href={href}
        aria-hidden
        tabIndex={-1}
        className={`grid size-[46px] shrink-0 place-items-center rounded-full transition-colors ${TONES[tone]}`}
      >
        <ArrowUpRight className="size-4" />
      </Link>
      {button}
    </span>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m3 8.5 3.2 3.2L13 5" />
    </svg>
  );
}

/** Den lilla handskrivna lappen som ligger klistrad på bilderna i mallen. */
export function NoteTag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`note-tag absolute z-10 px-5 py-2 text-[19px] text-ink ${className}`}
    >
      {children}
    </span>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-1" aria-label={`${count} av 5 i betyg`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-[13px] fill-tan-deep"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}
