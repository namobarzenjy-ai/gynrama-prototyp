import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Caveat } from "next/font/google";
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
  title: "GynRaMa – Gynekolog & fertilitet i Göteborg",
  description:
    "Högkvalitativ gynekologisk vård och fertilitetsutredning med personligt bemötande. Boka fysiskt besök, videobesök eller telefonkonsultation – ingen remiss krävs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${dmSans.variable} ${dmSerif.variable} ${caveat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
