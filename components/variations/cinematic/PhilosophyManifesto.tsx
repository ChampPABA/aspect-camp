"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { PILLARS } from "@/lib/constants";

const pillarsIcons: Record<string, string> = {
  plus: "+",
  clock: "◷",
  chart: "◈",
};

const quoteText =
  "เราเชื่อว่าการเรียนรู้ที่แท้จริง เกิดจากการลงมือทำจริง ไม่ใช่แค่การฟัง";
const words = quoteText.split(" ");

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const pillarContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } },
};

const pillarItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function PhilosophyManifesto() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-navy flex flex-col items-center justify-center py-24 px-[5%]"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section label */}
        <motion.p
          className="text-gold text-[13px] tracking-[0.2em] uppercase mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ปรัชญาของเรา
        </motion.p>

        {/* "เราเชื่อว่า" heading */}
        <motion.h2
          className="font-[var(--font-heading)] text-5xl md:text-7xl text-cream text-center mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          เราเชื่อว่า
        </motion.h2>

        {/* Word-by-word quote */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-16"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              className="font-[var(--font-heading)] text-2xl md:text-4xl text-cream/90 italic leading-snug"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Philosophy pillars */}
        <motion.div
          variants={pillarContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.name}
              variants={pillarItem}
              className="border border-white/10 rounded-2xl p-6 bg-white/4 backdrop-blur-sm"
            >
              <div className="text-gold text-2xl mb-3 font-bold">
                {pillarsIcons[pillar.icon] ?? "+"}
              </div>
              <h3 className="font-[var(--font-hook)] text-cream text-[17px] font-semibold mb-2">
                {pillar.name}
              </h3>
              <p className="text-cream/60 text-[14px] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
