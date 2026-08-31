import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Caveat } from "next/font/google";
import { RTL, SPRAK, t } from "@/i18n";
import { StruktureradData } from "@/components/StruktureradData";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: t(
    "GynRaMa – Gynekolog & fertilitet i Göteborg",
    "GynRaMa – Gynaecology & fertility in Gothenburg",
    "GynRaMa – عيادة نسائية وخصوبة في يوتيبوري",
  ),
  description: t(
    "Högkvalitativ gynekologisk vård och fertilitetsutredning med personligt bemötande. Boka fysiskt besök, videobesök eller telefonkonsultation – ingen remiss krävs.",
    "High-quality gynaecological care and fertility investigation with a personal touch. Book an in-person visit, video consultation or phone consultation – no referral needed.",
    "رعاية نسائية عالية الجودة وفحوصات خصوبة مع اهتمام شخصي. احجزي زيارة في العيادة أو استشارة بالفيديو أو الهاتف – دون الحاجة إلى إحالة.",
  ),
  // Detta är en designprototyp, inte klinikens riktiga sida. Den får inte
  // indexeras — en patient som hittade den via sökning kunde tro att den
  // är GynRaMas verkliga mottagning och agera på priser och telefonnummer.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SPRAK}
      dir={RTL ? "rtl" : "ltr"}
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        {children}
        <StruktureradData />
      </body>
    </html>
  );
}
