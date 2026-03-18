"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SEATS_LEFT, LINE_URL, EARLY_BIRD_DEADLINE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ParallaxCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgTextY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-navy relative overflow-hidden flex flex-col items-center justify-center px-[5%]"
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,185,120,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Background enormous "MED." text */}
      <motion.div
        style={{ y: bgTextY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-[var(--font-hook)] font-black text-white leading-none"
          style={{ fontSize: "clamp(120px, 25vw, 300px)", opacity: 0.035 }}
        >
          MED.
        </span>
      </motion.div>

      {/* Middle layer — heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Urgency badge */}
        <motion.div
          className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-[13px] font-[var(--font-hook)]">
            เหลือ {SEATS_LEFT} ที่นั่ง — Early Bird ถึง {EARLY_BIRD_DEADLINE}
          </span>
        </motion.div>

        <motion.h2
          className="font-[var(--font-heading)] text-5xl md:text-7xl text-cream leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          พร้อมเดินบน
          <br />
          <span className="bg-gradient-to-r from-gold-from to-gold-to bg-clip-text text-transparent">
            เส้นทางแพทย์
          </span>
          <br />
          ของคุณแล้วหรือยัง?
        </motion.h2>

        <motion.p
          className="text-cream/60 text-[17px] leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          3 วัน ค้นพบตัวเอง สร้าง credential สำหรับพอร์ต TCAS
          และออกไปพร้อมคำตอบที่ชัดเจน
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button href={LINE_URL} variant="gold" size="lg">
            สมัครเลย — Early Bird ฿3,900 →
          </Button>
          <Button href={LINE_URL} variant="outline-white" size="lg">
            สอบถามทาง LINE
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          className="text-cream/30 text-[13px] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          จาก 60 ที่นั่ง · MicroCredential KMUTT + SET Certificate ·
          เชียงใหม่ 20–22 เม.ย.
        </motion.p>
      </div>
    </section>
  );
}
