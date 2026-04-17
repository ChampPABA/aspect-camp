"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LINE_URL, LOGO_SRC, NAV_LINKS } from "@/lib/constants";

function CtaButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a href={LINE_URL} onClick={onClick} className={`shine-btn ${className}`}>
      สมัครเข้าร่วมค่าย →
    </a>
  );
}

export default function CinematicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[5%] bg-navy-deep/90 backdrop-blur-md border-b border-white/8 transition-[height] duration-300"
      style={{ height: scrolled ? 56 : 64 }}
    >
      <a href="#" className="flex items-center">
        <Image
          src={LOGO_SRC}
          alt="Aspect"
          width={140}
          height={32}
          priority
          sizes="140px"
          className="h-8 w-auto object-contain"
        />
      </a>

      <div className="hidden md:flex gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative text-sm text-white/65 py-1 transition-colors hover:text-white"
          >
            {link.label}
            <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-sm bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <CtaButton className="hidden md:inline-flex" />
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden bg-transparent border-none text-white cursor-pointer p-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-navy border-t border-white/10 px-[5%] py-5 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 text-[15px] py-3 border-b border-white/6"
            >
              {link.label}
            </a>
          ))}
          <CtaButton
            className="mt-3 block text-center"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}
