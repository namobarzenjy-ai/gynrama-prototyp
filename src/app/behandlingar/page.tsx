import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SidHero } from "@/components/sections/SidHero";
import { BehandlingsLista } from "@/components/sections/BehandlingsLista";
import { CtaBand } from "@/components/sections/CtaBand";
import { ingress, kategorier } from "@/content/behandlingar";

export const metadata: Metadata = {
  title: "Alla behandlingar – GynRaMa",
  description:
    "Gynekologiska undersökningar och behandlingar i Göteborg: hälsokontroll, ultraljud, cellförändringar, myom, klimakteriebesvär, fertilitetsutredning och mer. Ingen remiss krävs.",
};

export default function Behandlingar() {
  return (
    <>
      <Header aktiv="/behandlingar" />
      <main>
        <SidHero
          titel="Alla behandlingar"
          ingress={ingress}
          ankare={kategorier.map((k) => ({
            label: k,
            href: `#kat-${k.toLowerCase()}`,
          }))}
        />
        <BehandlingsLista />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
