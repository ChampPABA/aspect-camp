"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CREDENTIALS } from "@/lib/constants";

const tagStyles: Record<string, { bg: string; text: string; border: string }> = {
  teal: {
    bg: "rgba(94,234,212,0.1)",
    text: "#5eead4",
    border: "rgba(94,234,212,0.25)",
  },
  gold: {
    bg: "rgba(212,185,120,0.15)",
    text: "#D4B978",
    border: "rgba(212,185,120,0.35)",
  },
  purple: {
    bg: "rgba(192,132,252,0.12)",
    text: "#c084fc",
    border: "rgba(192,132,252,0.3)",
  },
};

const partnerLogos = [
  { name: "KMUTT", src: "/images/logos/1.avif" },
  { name: "SET", src: "/images/logos/2.avif" },
];

export default function TrustBarCredentials() {
  return (
    <section className="bg-navy py-20 px-[5%]">
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Trust bar */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cream/50 text-sm tracking-wide">ร่วมกับ</span>
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="relative h-12 w-24 sm:h-14 sm:w-28 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-sans font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          Credential ที่ verify ได้
        </motion.p>

        <motion.h2
          className="font-sans font-bold text-3xl md:text-5xl text-cream text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ใส่พอร์ต TCAS ได้ทันที
        </motion.h2>

        {/* Credential cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {CREDENTIALS.map((cred, i) => {
            const style = tagStyles[cred.tagColor] ?? tagStyles.teal;
            return (
              <motion.div
                key={i}
                className="rounded-2xl p-8 flex flex-col gap-5 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(212,185,120,0.4)",
                  boxShadow: "0 8px 32px rgba(212,185,120,0.12)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Logo text */}
                <div
                  className="text-[32px] font-bold font-hook leading-tight whitespace-pre-line"
                  style={{ color: style.text }}
                >
                  {cred.logo}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-sans text-lg font-semibold text-cream mt-1 mb-1">
                    {cred.name}
                  </h3>
                  <p className="text-sm text-white/50">{cred.org}</p>
                </div>

                {/* Tag */}
                <span
                  className="inline-flex items-center self-start px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border"
                  style={{
                    backgroundColor: style.bg,
                    color: style.text,
                    borderColor: style.border,
                  }}
                >
                  {cred.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
