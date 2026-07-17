import Image from "next/image";
import Link from "next/link";

/**
 * Klinikens riktiga logga. Originalfilen hade en vit bakgrundsruta bakom
 * emblemet som är borttagen, och undertexten är #1D1D1B — därför finns en
 * variant med vit text för mörka ytor (footern).
 *
 * Loggan är 350x100 (3.5:1).
 */
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
        src={variant === "ljus" ? "/gynrama-logo-vit.svg" : "/gynrama-logo.svg"}
        alt="GynRaMa AB – Gynekologisk mottagning med akademisk profil"
        width={Math.round(height * 3.5)}
        height={height}
        priority
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
