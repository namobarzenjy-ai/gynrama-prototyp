import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { Praktiskt } from "@/components/sections/Praktiskt";
import { Varldskanda } from "@/components/sections/Varldskanda";
import { Team } from "@/components/sections/Team";
import { CtaBand } from "@/components/sections/CtaBand";
import { intro, introRubrik } from "@/content/omoss";

export const metadata: Metadata = {
  title: "Om oss – GynRaMa",
  description:
    "GynRaMa är en privat gynekologklinik i Göteborg, grundad 2022 av docent Randa Akouri och professor Mats Brännström – forskarna bakom världens första barn efter livmodertransplantation.",
};

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
