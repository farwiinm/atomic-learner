import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

const display = localFont({
  src: "../public/fonts/PlusJakartaSans-Variable.ttf",
  variable: "--font-display-src",
  weight: "200 800",
  display: "swap",
});

const body = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  variable: "--font-body-src",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atomic Learner - Personalized Cambridge & Edexcel Tutoring",
  description:
    "Personalized Cambridge and Edexcel O/L & A/L tutoring in Mathematics, ICT and Sciences, with diagnostic assessments, structured learning plans and regular parent progress updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      style={
        {
          "--font-display-src": display.style.fontFamily,
          "--font-body-src": body.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <body className="antialiased pb-[74px] md:pb-0">
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
