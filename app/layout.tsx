import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

// Note: this project is set up to use next/font/google (Plus Jakarta Sans +
// Inter) — see globals.css for the @font-face fallback used in sandboxed
// build environments without internet access. On Vercel, swap back to
// next/font/google for automatic self-hosting and zero layout shift:
//
//   import { Plus_Jakarta_Sans, Inter } from "next/font/google";
//   const display = Plus_Jakarta_Sans({ variable: "--font-display", subsets: ["latin"], weight: ["500","600","700","800"] });
//   const body = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600"] });
// then add `${display.variable} ${body.variable}` to the body className below.

export const metadata: Metadata = {
  title: "Atomic Learner — Personalized Cambridge & Edexcel Tutoring",
  description:
    "Personalized Cambridge and Edexcel O/L & A/L tutoring in Mathematics, ICT and Sciences — with diagnostic assessments, structured learning plans and regular parent progress updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased pb-[74px] md:pb-0">
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
