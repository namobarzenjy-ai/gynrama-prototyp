import type { Metadata } from "next";
import { seoMeta } from "@/seo";
import { Header } from "@/components/Header";
import { t } from "@/i18n";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { Praktiskt } from "@/components/sections/Praktiskt";
import { Varldskanda } from "@/components/sections/Varldskanda";
import { Team } from "@/components/sections/Team";
import { CtaBand } from "@/components/sections/CtaBand";
import { intro, introRubrik } from "@/content/omoss";

export const metadata: Metadata = seoMeta({
  titel: t("Om oss – GynRaMa", "About us – GynRaMa", "من نحن – GynRaMa"),
  beskrivning: t(
    "GynRaMa är en privat gynekologklinik i Göteborg, grundad 2022 av docent Randa Akouri och professor Mats Brännström – forskarna bakom världens första barn efter livmodertransplantation.",
    "GynRaMa is a private gynaecology clinic in Gothenburg, founded in 2022 by associate professor Randa Akouri and professor Mats Brännström – the researchers behind the world's first baby born after uterus transplantation.",
    "GynRaMa عيادة نسائية خاصة في يوتيبوري أسسها عام 2022 الدكتورة رندة عكوري والبروفيسور ماتس برينستروم – الباحثان وراء أول طفل في العالم يولد بعد زرع رحم.",
  ),
  sokvag: "/om-oss/",
});

export default function OmOss() {
  return (
    <>
      <Header aktiv="/om-oss" />
      <main>
        <SidHero titel={introRubrik} ingress={intro.join("\n")} />
        <Praktiskt />
        <Varldskanda />
        <Team />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
