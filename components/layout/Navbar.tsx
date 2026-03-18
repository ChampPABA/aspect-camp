"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] border-b border-white/12 transition-all duration-300 ${
        scrolled
          ? "h-14 bg-[rgba(15,42,74,0.97)] backdrop-blur-[12px]"
          : "h-16 bg-navy"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <Image
          src="/images/logos/Aspect.png"
          alt="Aspect"
          width={100}
          height={28}
          className="h-7 w-auto"
        />
        <span className="text-[13px] text-white/30 font-normal">
          PathtoMed
        </span>
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/70 text-[14px] hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button href={LINE_URL} size="sm" className="hidden sm:inline-flex">
          สมัครเลย →
        </Button>
        <button
          className="md:hidden text-white p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy border-t border-white/10 md:hidden">
          <div className="flex flex-col p-5 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 text-[15px] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={LINE_URL} size="sm" className="mt-2 justify-center">
              สมัครเลย →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
