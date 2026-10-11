import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { t } from "@/i18n";
import { seoMeta } from "@/seo";
import { Footer } from "@/components/Footer";
import { ProduktKort } from "@/components/ProduktKort";
import { SidHero } from "@/components/sections/SidHero";
import { Check } from "@/components/ui";
import {
  produkter,
  kategorier,
  webshopIngress,
  webshopFakta,
} from "@/content/webshop";

export const metadata: Metadata = seoMeta({
  titel: t(
    "Webshop – CE-märkta snabbtester – GynRaMa",
    "Web shop – CE-marked rapid tests – GynRaMa",
    "المتجر – فحوصات سريعة معتمدة CE – GynRaMa",
  ),
  beskrivning: t(
    "Beställ CE-märkta snabbtester hem: graviditetstest, ägglossningstest, spermatest, klamydia, HIV och fler. Kortbetalning och leverans 1–2 dagar.",
    "Order CE-marked rapid tests to your home: pregnancy tests, ovulation tests, sperm tests, chlamydia, HIV and more. Card payment and delivery in 1–2 days.",
    "اطلبي فحوصات سريعة معتمدة CE إلى منزلك: اختبار الحمل، الإباضة، الحيوانات المنوية، الكلاميديا، فيروس نقص المناعة والمزيد. دفع بالبطاقة وتوصيل خلال يوم إلى يومين.",
  ),
  sokvag: "/webshop/",
});

export default function Webshop() {
  return (
    <>
      <Header aktiv="/webshop" />
      <main>
        <SidHero
          titel={t("Webshop", "Web shop", "المتجر")}
          ingress={webshopIngress}
          ankare={kategorier.map((k) => ({
            label: k.rubrik,
            href: `#${k.slug}`,
          }))}
        />

        <section className="bg-gradient-to-b from-lavender-soft to-lavender-mist">
          <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-28 lg:pb-36">
            <div className="grid gap-4 sm:grid-cols-3">
              {webshopFakta.map((f) => (
                <p
                  key={f}
                  className="flex items-center gap-2.5 rounded-[18px] bg-lavender p-5 text-[14px] text-ink/80"
                >
                  <Check className="size-[13px] shrink-0 text-ink/50" />
                  {f}
                </p>
              ))}
            </div>

            {kategorier.map((kat) => {
              const iKat = produkter.filter((p) => p.kategori === kat.kategori);
              return (
                <div
                  key={kat.slug}
                  id={kat.slug}
                  className="pt-16"
                >
                  <div className="flex items-end justify-between gap-6 border-b border-ink/20 pb-5">
                    <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-ink">
                      {kat.rubrik}
                    </h2>
                    <span className="pb-1 text-[14px] text-ink/50">
                      {iKat.length}{" "}
                      {iKat.length === 1
                        ? t("produkt", "product", "منتج")
                        : t("produkter", "products", "منتجات")}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {iKat.map((p) => (
                      <ProduktKort key={p.slug} p={p} />
                    ))}
                  </div>
                </div>
              );
            })}

            <p className="mt-16 max-w-[70ch] text-[13px] leading-relaxed text-ink/50">
              {t(
                "Är testet CE-godkänt som självtest kan det utföras av privatpersoner i hemmiljö utan särskild utbildning. Är det CE-godkänt för professionellt bruk är det avsett att användas inom hälso- och sjukvården av personer med formell utbildning och expertis.",
                "If a test is CE-approved as a self-test, it can be carried out by private individuals at home without special training. If it is CE-approved for professional use, it is intended for use in healthcare by people with formal training and expertise.",
                "إذا كان الفحص معتمداً CE كفحص ذاتي، فيمكن للأفراد إجراؤه في المنزل دون تدريب خاص. أما إذا كان معتمداً CE للاستخدام المهني، فهو مخصص للاستخدام في الرعاية الصحية من قِبل أشخاص ذوي تدريب رسمي وخبرة.",
              )}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
