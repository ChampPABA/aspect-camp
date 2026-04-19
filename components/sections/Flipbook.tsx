"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FLIPBOOK_COVER, FLIPBOOK_URL } from "@/lib/constants";

export default function Flipbook() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <section
        id="flipbook"
        className="sec-wrap bg-cream text-navy-deep"
      >
        <div className="sec-head">
          <div className="eyebrow" style={{ color: "var(--color-navy)" }}>
            คู่มือค่ายแบบเต็ม
          </div>
          <h2 className="text-navy-deep">เห็นภาพรวมก่อนตัดสินใจ</h2>
          <p className="text-navy-deep/60">
            รายละเอียดค่าย · รูปจากค่ายจริง · รีวิวจากรุ่นพี่
          </p>
        </div>

        <div className="max-w-[560px] mx-auto">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="เปิดดูคู่มือ Aspect Med Camp"
            className="group block w-full overflow-hidden rounded-[18px] bg-white border border-navy-deep/12 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={FLIPBOOK_COVER}
                alt="คู่มือ Aspect Med Camp"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white text-navy-deep px-5 py-2.5 rounded-full font-bold text-[15px] shadow-lg whitespace-nowrap">
                📖 เปิดดูคู่มือ
              </div>
            </div>
          </button>
          <p className="text-center text-[13px] text-navy-deep/50 mt-4">
            เปิดในโหมดเต็มจอ · กด ESC เพื่อปิด ·{" "}
            <a
              href={FLIPBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy"
            >
              เปิดในแท็บใหม่
            </a>
          </p>
        </div>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="คู่มือ Aspect Med Camp"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-0 sm:p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="ปิด"
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white text-xl font-bold grid place-items-center transition"
          >
            ✕
          </button>
          <div
            className="relative w-full h-[100dvh] sm:max-w-6xl sm:h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={FLIPBOOK_URL}
              title="Aspect Med Camp Flipbook"
              allow="fullscreen"
              className="w-full h-full sm:rounded-lg bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
}
