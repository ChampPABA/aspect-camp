"use client";

import { motion } from "framer-motion";
import { HOOKS, PILLARS, CREDENTIALS, SEATS_LEFT, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

const tileBase =
  "bg-navy-hover border border-white/8 rounded-[16px] p-5 hover:scale-[1.02] hover:border-white/20 transition-all duration-200 relative overflow-hidden";

function tileMotion(i: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.4, delay: i * 0.07 },
  };
}

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[minmax(140px,auto)]">
      {/* Tile 1 — HOOKS[0], col-span-2, tall */}
      <motion.div
        className={`${tileBase} sm:col-span-2 lg:col-span-2 flex flex-col justify-between min-h-[200px]`}
        {...tileMotion(0)}
      >
        <div className="text-[80px] font-bold text-white/5 absolute top-2 right-4 leading-none font-[var(--font-hook)] select-none">
          {HOOKS[0].num}
        </div>
        <div className="relative z-10">
          <div className="text-[11px] text-white/40 uppercase tracking-[0.12em] mb-2 font-[var(--font-hook)]">
            Why us — 01
          </div>
          <h3 className="font-[var(--font-heading)] text-[22px] font-semibold text-cream mb-3">
            {HOOKS[0].title}
          </h3>
          <p className="text-[13px] text-white/60 leading-relaxed">
            {HOOKS[0].desc}
          </p>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-result-green font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-result-green inline-block" />
          {HOOKS[0].usp}
        </div>
      </motion.div>

      {/* Tile 2 — HOOKS[1] */}
      <motion.div
        className={`${tileBase} flex flex-col justify-between`}
        {...tileMotion(1)}
      >
        <div className="text-[60px] font-bold text-white/5 absolute top-1 right-3 leading-none font-[var(--font-hook)] select-none">
          {HOOKS[1].num}
        </div>
        <div className="relative z-10">
          <div className="text-[11px] text-white/40 uppercase tracking-[0.12em] mb-2 font-[var(--font-hook)]">
            02
          </div>
          <h3 className="font-[var(--font-heading)] text-[18px] font-semibold text-cream mb-2">
            {HOOKS[1].title}
          </h3>
          <p className="text-[12px] text-white/55 leading-relaxed">
            {HOOKS[1].desc}
          </p>
        </div>
        <div className="mt-3 text-[11px] text-gold/80">{HOOKS[1].usp}</div>
      </motion.div>

      {/* Tile 3 — HOOKS[2] */}
      <motion.div
        className={`${tileBase} flex flex-col justify-between`}
        {...tileMotion(2)}
      >
        <div className="text-[60px] font-bold text-white/5 absolute top-1 right-3 leading-none font-[var(--font-hook)] select-none">
          {HOOKS[2].num}
        </div>
        <div className="relative z-10">
          <div className="text-[11px] text-white/40 uppercase tracking-[0.12em] mb-2 font-[var(--font-hook)]">
            03
          </div>
          <h3 className="font-[var(--font-heading)] text-[18px] font-semibold text-cream mb-2">
            {HOOKS[2].title}
          </h3>
          <p className="text-[12px] text-white/55 leading-relaxed">
            {HOOKS[2].desc}
          </p>
        </div>
        <div className="mt-3 text-[11px] text-gold/80">{HOOKS[2].usp}</div>
      </motion.div>

      {/* Tile 4 — Philosophy + PILLARS */}
      <motion.div
        className={`${tileBase} sm:col-span-2 lg:col-span-2 flex flex-col justify-between min-h-[160px]`}
        {...tileMotion(3)}
      >
        <div>
          <div className="text-[11px] text-white/40 uppercase tracking-[0.12em] mb-2 font-[var(--font-hook)]">
            Philosophy
          </div>
          <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-cream mb-4">
            3 เสาหลักของค่าย
          </h3>
        </div>
        <ul className="space-y-2.5">
          {PILLARS.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
              <div>
                <span className="text-[13px] font-semibold text-cream/90">
                  {p.name}
                </span>
                <span className="text-[12px] text-white/45 ml-2">{p.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tile 5 — CREDENTIALS[0] */}
      <motion.div
        className={`${tileBase} flex flex-col justify-between`}
        {...tileMotion(4)}
      >
        <div>
          <div className="text-[28px] font-bold text-gold/80 font-[var(--font-hook)] mb-1 leading-tight">
            {CREDENTIALS[0].logo}
          </div>
          <div className="text-[13px] font-semibold text-cream mb-1">
            {CREDENTIALS[0].name}
          </div>
          <div className="text-[11px] text-white/45">{CREDENTIALS[0].org}</div>
        </div>
        <div className="mt-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border uppercase tracking-wide"
            style={{ backgroundColor: "rgba(94,234,212,0.1)", color: "#5eead4", borderColor: "rgba(94,234,212,0.25)" }}
          >
            {CREDENTIALS[0].tag}
          </span>
        </div>
      </motion.div>

      {/* Tile 6 — CREDENTIALS[1] */}
      <motion.div
        className={`${tileBase} flex flex-col justify-between`}
        {...tileMotion(5)}
      >
        <div>
          <div className="text-[28px] font-bold text-gold/80 font-[var(--font-hook)] mb-1 leading-tight">
            {CREDENTIALS[1].logo}
          </div>
          <div className="text-[13px] font-semibold text-cream mb-1">
            {CREDENTIALS[1].name}
          </div>
          <div className="text-[11px] text-white/45">{CREDENTIALS[1].org}</div>
        </div>
        <div className="mt-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border uppercase tracking-wide"
            style={{ backgroundColor: "rgba(212,185,120,0.15)", color: "#D4B978", borderColor: "rgba(212,185,120,0.3)" }}
          >
            {CREDENTIALS[1].tag}
          </span>
        </div>
      </motion.div>

      {/* Tile 7 — Seats left */}
      <motion.div
        className={`${tileBase} flex flex-col justify-center items-center text-center`}
        {...tileMotion(6)}
      >
        <div className="text-[60px] font-bold text-cream font-[var(--font-hook)] leading-none">
          {SEATS_LEFT}
        </div>
        <div className="text-[12px] text-white/50 mt-2">ที่นั่งที่เหลืออยู่</div>
        <div className="mt-2 w-full bg-white/8 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-gold-from to-gold-to"
            style={{ width: `${(SEATS_LEFT / 60) * 100}%` }}
          />
        </div>
        <div className="text-[11px] text-white/30 mt-1.5">จาก 60 ที่นั่ง</div>
      </motion.div>

      {/* Tile 8 — CTA */}
      <motion.div
        className={`${tileBase} flex flex-col justify-center items-center text-center`}
        {...tileMotion(7)}
      >
        <div className="text-[13px] text-white/50 mb-3">พร้อมแล้วใช่ไหม?</div>
        <Button href={LINE_URL} variant="gold" size="sm">
          สมัครเลย →
        </Button>
        <div className="text-[11px] text-white/30 mt-2">Early Bird ลด 29%</div>
      </motion.div>
    </div>
  );
}
