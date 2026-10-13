import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: "Tandem Learner | Cambridge & Edexcel Tuition in Colombo",
  description:
    "One-to-one Cambridge and Edexcel (London) tuition for Grades 10 to 13. Online or in person at Kalubowila, Colombo. Book a free trial class.",
  openGraph: {
    siteName: "Tandem Learner",
    type: "website",
    locale: "en_LK",
  },
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
        <Analytics />
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
