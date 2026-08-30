import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "../ui";
import { omraden } from "@/content/gynrama";
import { t } from "@/i18n";

export function Omraden() {
  return (
    <section
      id="behandlingar"
      className="bg-gradient-to-b from-lavender-mist to-lavender-soft"
    >
      <div className="mx-auto max-w-[1240px] px-6 pb-28 lg:pb-36">
        <h2 className="mx-auto max-w-[18ch] text-center text-[clamp(2rem,3.6vw,3.1rem)] text-ink">
          {t("Specialistvård med kvalitet i fokus", "Specialist care with quality in focus", "رعاية تخصصية جودتها في المقام الأول")}
        </h2>
        <p className="mt-8 text-center">
          {/* max-lg: tryckyta bara på mobil — desktop-layouten rörs inte */}
          <Link
            href="/behandlingar"
            className="inline-flex items-center gap-2 text-[16px] text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline max-lg:min-h-11 max-lg:px-4"
          >
            {t("Se alla behandlingar", "See all treatments", "عرض جميع العلاجات")}
            <ArrowUpRight className="size-[13px]" />
          </Link>
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {omraden.map((o) => (
            <article key={o.titel} className="relative">
              <Image
                src={o.bild}
                alt={o.alt}
                width={640}
                height={640}
                className="h-[330px] w-full rounded-card object-cover"
              />

              {/* Mörkt kort som ligger inuti bilden — mallens kortmönster */}
              <div className="absolute inset-x-4 bottom-4 rounded-[20px] bg-slate-deep/95 p-5 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[22px] text-white">{o.titel}</h3>
                  <Link
                    href={o.href}
                    aria-label={`${t("Läs mer om", "Read more about", "اقرئي المزيد عن")} ${o.titel}`}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-lila text-white transition-colors hover:bg-lila-deep max-lg:size-11"
                  >
                    <ArrowUpRight className="size-[14px]" />
                  </Link>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-white/80">
                  {o.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
