import Image from "next/image";
import Link from "next/link";

/**
 * Klinikens riktiga logga. Originalfilen hade en vit bakgrundsruta bakom
 * emblemet som är borttagen, och undertexten är #1D1D1B — därför finns en
 * variant med vit text för mörka ytor (footern).
 *
 * Loggan är 350x100 (3.5:1).
 */
/*
  Måste prefixas manuellt: next/image med unoptimized:true (som Pages-bygget
  använder) lägger inte på basePath åt oss. Utan detta 404:ar loggan på
  GitHub Pages men fungerar lokalt.
*/
const bas = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Logo({
  variant = "mork",
  height = 52,
  className = "",
}: {
  /** "mork" = mörk text för ljus bakgrund. "ljus" = vit text för mörk bakgrund. */
  variant?: "mork" | "ljus";
  height?: number;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="GynRaMa – till startsidan"
      className={`inline-block ${className}`}
    >
      <Image
        src={`${bas}/gynrama-logo${variant === "ljus" ? "-vit" : ""}.svg`}
        alt="GynRaMa AB – Gynekologisk mottagning med akademisk profil"
        width={Math.round(height * 3.5)}
        height={height}
        priority
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
