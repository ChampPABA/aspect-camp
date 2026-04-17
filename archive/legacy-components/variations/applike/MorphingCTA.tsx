"use client";

import { motion } from "framer-motion";
import { SEATS_LEFT, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function MorphingCTA() {
  return (
    <section className="bg-navy py-28 px-[5%] relative overflow-hidden">
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(212,185,120,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        {/* Seats counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/12 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-result-green animate-pulse" />
            <span className="text-white/60 text-[13px]">ที่นั่งที่เหลือ</span>
            <span className="text-[24px] font-bold text-cream font-[var(--font-hook)] leading-none">
              {SEATS_LEFT}
            </span>
            <span className="text-white/40 text-[13px]">/ 60</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-[var(--font-heading)] font-bold text-white leading-[1.15] mb-4"
          style={{ fontSize: "clamp(32px,5vw,60px)" }}
        >
          อย่าให้ความลังเลเป็นเหตุผล
          <br />
          <span className="text-gold italic">ที่พลาดค่ายนี้</span>
        </motion.h2>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-[16px] text-white/50 mb-10"
        >
          3 วัน · Credential 3 ชิ้น · ค้นพบทิศทางชีวิตจริงๆ
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Button href={LINE_URL} variant="gold" size="lg">
            สมัครเข้าร่วมค่าย →
          </Button>
          <Button href={LINE_URL} variant="outline-white" size="md">
            ทัก LINE @AspectCareer
          </Button>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-[12px] text-white/25"
        >
          สมัครคู่กับเพื่อน ลดเพิ่มอีก 300 บาท/คน · ยกเลิกได้ก่อน 14 เมษายน
        </motion.p>
      </div>
    </section>
  );
}
