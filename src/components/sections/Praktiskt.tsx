import Link from "next/link";
import { ArrowUpRight } from "../ui";
import { praktiskt } from "@/content/omoss";
import { kontakt } from "@/content/gynrama";
import { t } from "@/i18n";

export function Praktiskt() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-28">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {praktiskt.map((p) => (
            <div key={p.rubrik}>
              <h2 className="text-[24px] text-ink">{p.rubrik}</h2>
              <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink/75">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Praktiska uppgifter i ett mörkt kort — mallens kortmönster */}
        <div className="mt-14 grid gap-6 rounded-card bg-slate-deep p-8 text-white sm:grid-cols-3 lg:p-10">
          <div>
            <p className="text-[13px] text-white/50">{t("Adress", "Address", "العنوان")}</p>
            <Link
              href={kontakt.karta}
              className="mt-2 inline-flex items-start gap-1.5 text-[16px] leading-snug transition-colors hover:text-lila-ljus max-lg:min-h-11"
            >
              <span>
                {kontakt.adress}
                <br />
                {kontakt.postort}
              </span>
              <ArrowUpRight className="mt-1 size-[12px] shrink-0" />
            </Link>
          </div>
          <div>
            <p className="text-[13px] text-white/50">{t("Öppettider", "Opening hours", "ساعات العمل")}</p>
            <p className="mt-2 text-[16px]">{kontakt.oppet}</p>
            <p className="text-[13px] text-white/50">{kontakt.oppetNot}</p>
          </div>
          <div>
            <p className="text-[13px] text-white/50">{t("Telefonrådgivning", "Phone advice line", "الاستشارة الهاتفية")}</p>
            <Link
              href={kontakt.telefonHref}
              className="mt-2 inline-flex items-center text-[16px] transition-colors hover:text-lila-ljus max-lg:min-h-11"
            >
              {kontakt.telefon}
            </Link>
            <p className="text-[13px] text-white/50">{t("Mån–Fre 8:30–17:00", "Mon–Fri 8:30–17:00", "الإثنين–الجمعة 8:30–17:00")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
