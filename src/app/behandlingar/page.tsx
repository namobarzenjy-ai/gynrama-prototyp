import type { Metadata } from "next";
import { seoMeta } from "@/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { BehandlingsLista } from "@/components/sections/BehandlingsLista";
import { BehandlingarPriser } from "@/components/sections/BehandlingarPriser";
import { CtaBand } from "@/components/sections/CtaBand";
import { ingress, kategorier } from "@/content/behandlingar";
import { t } from "@/i18n";

export const metadata: Metadata = seoMeta({
  titel: t("Alla behandlingar – GynRaMa", "All treatments – GynRaMa", "جميع العلاجات – GynRaMa"),
  beskrivning: t(
    "Gynekologiska undersökningar och behandlingar i Göteborg: hälsokontroll, ultraljud, cellförändringar, myom, klimakteriebesvär, fertilitetsutredning och mer. Ingen remiss krävs.",
    "Gynaecological examinations and treatments in Gothenburg: health check-ups, ultrasound, cell changes, fibroids, menopause symptoms, fertility investigation and more. No referral needed.",
    "فحوصات وعلاجات نسائية في يوتيبوري: فحوصات دورية، موجات فوق صوتية، تغيّرات خلوية، أورام ليفية، أعراض سن اليأس، فحوصات خصوبة والمزيد. دون إحالة.",
  ),
  sokvag: "/behandlingar/",
});

export default function Behandlingar() {
  return (
    <>
      <Header aktiv="/behandlingar" />
      <main>
        <SidHero
          titel={t("Alla behandlingar", "All treatments", "جميع العلاجات")}
          ingress={ingress}
          ankare={kategorier.map((k) => ({
            label: k.rubrik,
            href: `#kat-${k.slug}`,
          }))}
        />
        <BehandlingsLista />
        <BehandlingarPriser visa="priser" />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
