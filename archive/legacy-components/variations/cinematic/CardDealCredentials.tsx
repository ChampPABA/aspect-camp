"use client";

import { motion } from "framer-motion";
import { CREDENTIALS } from "@/lib/constants";

const tagColorMap: Record<string, string> = {
  teal: "bg-navy text-cream",
  gold: "bg-gradient-to-r from-gold-from to-gold-to text-navy",
  purple: "bg-[#6B5B95] text-white",
};

export default function CardDealCredentials() {
  return (
    <section className="min-h-screen bg-cream flex flex-col items-center justify-center py-20 px-[5%]">
      <div className="max-w-4xl mx-auto w-full">
        {/* Heading */}
        <motion.p
          className="text-navy/50 text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-[var(--font-hook)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ได้รับจากค่ายนี้
        </motion.p>

        <motion.h2
          className="font-[var(--font-heading)] text-4xl md:text-6xl text-navy text-center mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          3 Credentials ที่ Verify ได้จริง
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.name}
              className="bg-white border border-black/8 rounded-[20px] p-8 shadow-md"
              initial={{ opacity: 0, y: 60, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.2,
              }}
            >
              {/* Logo badge */}
              <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mb-5">
                <span className="text-cream font-[var(--font-hook)] font-black text-[11px] text-center leading-tight whitespace-pre-line">
                  {cred.logo}
                </span>
              </div>

              {/* Tag */}
              <span
                className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-3 ${tagColorMap[cred.tagColor] ?? "bg-navy text-cream"}`}
              >
                {cred.tag}
              </span>

              {/* Name */}
              <h3 className="font-[var(--font-hook)] text-navy text-[17px] font-bold leading-snug mb-1">
                {cred.name}
              </h3>

              {/* Org */}
              <p className="text-gray-text/70 text-[13px] leading-snug">
                {cred.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
