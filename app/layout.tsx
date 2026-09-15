import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import StructuredData from "@/components/StructuredData";

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
  title: "Atomic Learner - Cambridge & Edexcel Tutor in Kalubowila, Colombo",
  description:
    "Personalized Cambridge and Edexcel O/L & A/L tutoring near Kalubowila, Dehiwala, Mount Lavinia, Wellawatte and Nugegoda. One dedicated teacher, diagnostic assessments, structured learning plans and monthly parent progress updates.",
  verification: {
    google: "1rnftlxNeddtg0hl6rX5rKW95GqqklpIUcWIFqPYwcE",
  },
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
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
