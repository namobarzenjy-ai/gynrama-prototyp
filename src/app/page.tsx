import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Omraden } from "@/components/sections/Omraden";
import { Besok } from "@/components/sections/Besok";
import { CtaBand } from "@/components/sections/CtaBand";
import { Lakare } from "@/components/sections/Lakare";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifest />
        <Omraden />
        <Besok />
        <CtaBand />
        <Lakare />
      </main>
      <Footer />
    </>
  );
}
