"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE_ITEMS } from "@/lib/constants";

export default function ScrollProgressTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const dotColors = {
    active: "bg-gold border-gold",
    gold: "bg-gold border-gold",
    default: "bg-navy/20 border-navy/30",
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white py-20 px-[5%] flex items-center"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Heading */}
        <motion.p
          className="text-navy/50 text-[12px] tracking-[0.25em] uppercase mb-4 font-[var(--font-hook)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ไทม์ไลน์
        </motion.p>

        <motion.h2
          className="font-[var(--font-heading)] text-4xl md:text-5xl text-navy mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          กำหนดการสำคัญ
        </motion.h2>

        <div className="relative">
          {/* Background track */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-navy/10" />

          {/* Animated gold progress line */}
          <motion.div
            className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-from to-gold-to origin-top"
            style={{ scaleY }}
          />

          {/* Timeline items */}
          <div className="space-y-10">
            {TIMELINE_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                {/* Dot */}
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 relative z-10 ${
                    dotColors[item.dotType]
                  }`}
                >
                  {item.dotType === "active" && (
                    <div className="w-2.5 h-2.5 rounded-full bg-navy" />
                  )}
                  {item.dotType === "gold" && (
                    <div className="w-2.5 h-2.5 rounded-full bg-navy" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 pt-1.5">
                  <p className="text-gold text-[12px] font-[var(--font-hook)] font-semibold mb-1">
                    {item.date}
                  </p>
                  <p className="text-navy text-[16px] font-[var(--font-hook)] font-semibold leading-snug">
                    {item.event}
                  </p>
                  {"note" in item && item.note && (
                    <p className="text-navy/55 text-[13px] mt-1">{item.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
