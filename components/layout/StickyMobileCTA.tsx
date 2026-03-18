"use client";

import { useState, useEffect } from "react";
import { SEATS_LEFT, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy border-t border-white/10 px-[5%] py-3 z-40 flex items-center justify-between gap-3 md:hidden">
      <div className="text-[13px] text-white/60">
        เหลือ <strong className="text-gold">{SEATS_LEFT} ที่นั่ง</strong> เท่านั้น
      </div>
      <Button href={LINE_URL} size="sm">
        สมัครเลย →
      </Button>
    </div>
  );
}
