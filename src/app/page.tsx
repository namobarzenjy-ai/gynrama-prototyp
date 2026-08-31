import type { Metadata } from "next";
import { t } from "@/i18n";
import { seoMeta } from "@/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifest } from "@/components/sections/Manifest";
import { Omraden } from "@/components/sections/Omraden";
import { Besok } from "@/components/sections/Besok";
import { CtaBand } from "@/components/sections/CtaBand";
import { Lakare } from "@/components/sections/Lakare";

export const metadata: Metadata = seoMeta({
  titel: t(
    "GynRaMa – Gynekolog & fertilitet i Göteborg",
    "GynRaMa – Gynaecology & fertility in Gothenburg",
    "GynRaMa – عيادة نسائية وخصوبة في يوتيبوري",
  ),
  beskrivning: t(
    "Högkvalitativ gynekologisk vård och fertilitetsutredning med personligt bemötande. Boka fysiskt besök, videobesök eller telefonkonsultation – ingen remiss krävs.",
    "High-quality gynaecological care and fertility investigation with a personal touch. Book an in-person visit, video consultation or phone consultation – no referral needed.",
    "رعاية نسائية عالية الجودة وفحوصات خصوبة مع اهتمام شخصي. احجزي زيارة في العيادة أو استشارة بالفيديو أو الهاتف – دون الحاجة إلى إحالة.",
  ),
  sokvag: "/",
});

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
