import Image from "next/image";
import { NoteTag, Pill } from "../ui";
import { bilder } from "@/content/gynrama";
import { lakare } from "@/content/omoss";
import { t } from "@/i18n";

export function Manifest() {
  return (
    <section
      id="om-oss"
      className="bg-gradient-to-b from-lavender-soft to-lavender-mist"
    >
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-[17ch] text-[clamp(2.2rem,4.2vw,3.6rem)] text-ink">
              {t(
                "Vi vet att gynekologiska besök kan väcka både frågor och oro.",
                "We know a gynaecological visit can bring both questions and worry.",
                "نعلم أن زيارة طبيبة النساء قد تحمل معها أسئلة وقلقاً.",
              )}
            </h2>
            <p className="mt-7 max-w-[42ch] text-[17px] leading-relaxed text-ink/75">
              {t(
                "Därför lägger vi stor vikt vid att du ska känna dig trygg, sedd och lyssnad på – från första kontakt till avslutat besök.",
                "That is why we make sure you feel safe, seen and listened to – from first contact to the end of your visit.",
                "لذلك نحرص على أن تشعري بالأمان والاهتمام والإصغاء – من أول تواصل حتى نهاية الزيارة.",
              )}
            </p>
            <div className="mt-8">
              <Pill href="/boka-tid" tone="lila">
                {t("Boka tid", "Book now", "احجزي موعداً")}
              </Pill>
            </div>
          </div>

          <div className="relative lg:w-[360px]">
            {/* Klinikens eget foto på sin verksamhetschef — inte stock */}
            <Image
              src={lakare[0].bild}
              alt={`${lakare[0].namn}, ${lakare[0].titel.toLowerCase()}`}
              width={720}
              height={960}
              className="h-[440px] w-full rounded-card object-cover object-top"
            />
            <NoteTag className="-bottom-4 start-6">{t("Docent Randa Akouri, verksamhetschef", "Assoc. Prof. Randa Akouri, clinic director", "د. رندة عكوري، مديرة العيادة")}</NoteTag>
          </div>
        </div>

        {/* Lavendelkortet — mallens "Hi. I'm Anna."-block */}
        <div className="mt-16 grid gap-6 rounded-card bg-lavender p-6 lg:mt-20 lg:grid-cols-[280px_1fr] lg:p-8">
          <Image
            src={bilder.manifest}
            alt={t("Reception med orkidé på GynRaMa i Göteborg", "Reception with an orchid at GynRaMa in Gothenburg", "استقبال العيادة مع زهرة أوركيد في GynRaMa")}
            width={933}
            height={1400}
            className="h-full min-h-[240px] w-full rounded-[18px] object-cover"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-[clamp(1.8rem,2.6vw,2.4rem)] text-ink">
              {t("Världskända doktorer.", "World-renowned doctors.", "أطباء مشهورون عالمياً.")}
            </h3>
            <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-ink/75">
              {t(
                "Docent Randa Akouri och professor Mats Brännström ligger bakom livmodertransplantationen som ledde till att världens första barn föddes 2014. GynRaMa är en privat gynekologklinik i Göteborg som startade hösten 2022.",
                "Associate professor Randa Akouri and professor Mats Brännström are behind the uterus transplantation that led to the world's first baby being born in 2014. GynRaMa is a private gynaecology clinic in Gothenburg, opened in autumn 2022.",
                "الدكتورة رندة عكوري والبروفيسور ماتس برينستروم هما من قادا عملية زرع الرحم التي أدت إلى ولادة أول طفل في العالم عام 2014. GynRaMa عيادة نسائية خاصة في يوتيبوري افتُتحت خريف 2022.",
              )}
            </p>

            <div className="mt-7 h-px w-full max-w-[420px] bg-ink/20" />

            {/* Statistikkorten från Dribbble-varianten — med riktiga siffror */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:max-w-[420px]">
              <div className="rounded-[18px] bg-lila p-5">
                <p className="text-[13px] text-white/70">{t("Världens första", "World\u2019s first", "الأول في العالم")}</p>
                <p className="mt-6 font-serif text-[34px] leading-none text-white">
                  2014
                </p>
                <p className="mt-1 text-[13px] text-white/80">
                  {t("barn efter livmodertransplantation", "baby born after uterus transplantation", "طفل وُلد بعد زرع رحم")}
                </p>
              </div>
              <div className="rounded-[18px] bg-paper p-5">
                <p className="text-[13px] text-ink/60">{t("Ingen remiss", "No referral", "بدون إحالة")}</p>
                <p className="mt-6 font-serif text-[34px] leading-none text-ink">
                  0
                </p>
                <p className="mt-1 text-[13px] text-ink/70">{t("väntetid till besök", "waiting time for a visit", "وقت انتظار للزيارة")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
