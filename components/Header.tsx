"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { SITE_PAGES } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-line/80 backdrop-blur-md transition-all duration-200 ${
          open ? "bg-bg" : scrolled ? "bg-bg/90" : "bg-bg/70"
        }`}
      >
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-[19px] text-navy">
            <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <circle cx="15" cy="15" r="2.6" fill="#0B1F3A" />
              <ellipse cx="15" cy="15" rx="13" ry="6" stroke="#0B1F3A" strokeWidth="1.3" opacity="0.9" />
              <ellipse cx="15" cy="15" rx="13" ry="6" stroke="#0B1F3A" strokeWidth="1.3" opacity="0.55" transform="rotate(60 15 15)" />
              <ellipse cx="15" cy="15" rx="13" ry="6" stroke="#0B1F3A" strokeWidth="1.3" opacity="0.3" transform="rotate(120 15 15)" />
            </svg>
            Tandem Learner
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-medium">
            {SITE_PAGES.map((link) => (
              <Link key={link.href} href={link.href} className="text-navy/75 hover:text-navy transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/book-free-trial" className="!py-2.5 !px-6 !text-[14.5px]">
              Book Free Trial
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Outside <header>: backdrop-blur on the header would trap this fixed panel inside it. */}
      {open && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-[65px] z-40 bg-bg overflow-y-auto">
          <nav className="container-page flex flex-col gap-1 pt-6 pb-10">
            {SITE_PAGES.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-[17px] font-medium text-navy border-b border-line"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Button href="/book-free-trial" full onClick={() => setOpen(false)}>
                Book Free Trial
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
