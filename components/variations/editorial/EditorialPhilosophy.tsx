"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/constants";

export default function EditorialPhilosophy() {
  return (
    <section
      className="bg-navy py-24 px-[5%] relative overflow-hidden"
      id="about"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(212,185,120,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        {/* Oversized quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-[var(--font-heading)] italic text-cream leading-[1.2] mb-20"
          style={{
            fontSize: "clamp(32px, 5.5vw, 72px)",
          }}
        >
          &ldquo;เราเชื่อว่าการเรียนรู้ที่แท้จริงเกิดจากการลงมือทำจริง&rdquo;
        </motion.blockquote>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border-l-4 border-gold pl-6"
            >
              <h3 className="font-[var(--font-heading)] text-[22px] font-semibold text-cream mb-3">
                {pillar.name}
              </h3>
              <p className="text-[15px] text-cream/65 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
