import type { Metadata } from "next";
import { Hanken_Grotesk, Caveat, Gulzar } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import AnalyticsTracker from "./components/AnalyticsTracker";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

// Urdu font — Gulzar (Nastaliq). Single weight; see .urdu-type in globals.css
// for the line-height/letter-spacing tuning Nastaliq needs.
const gulzar = Gulzar({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maveshi Farms — From Code to Care",
  description: "A computer scientist's journey to build a smarter, healthier future for goat farming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${caveat.variable} ${gulzar.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          <AnalyticsTracker />
        </>
      )}
    </html>
  );
}
