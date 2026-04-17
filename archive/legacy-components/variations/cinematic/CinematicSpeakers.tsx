"use client";

import { motion } from "framer-motion";
import { SPEAKERS } from "@/lib/constants";

export default function CinematicSpeakers() {
  return (
    <section className="min-h-screen bg-navy py-20 px-[5%] flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-[var(--font-hook)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ผู้เชี่ยวชาญ
        </motion.p>

        <motion.h2
          className="font-[var(--font-heading)] text-4xl md:text-6xl text-cream text-center mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          วิทยากรและกรรมการ
        </motion.h2>

        {/* Speakers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={`${speaker.name}-${i}`}
              className={`border rounded-2xl p-8 relative overflow-hidden ${
                speaker.isPlaceholder
                  ? "border-white/10 bg-white/5"
                  : "border-white/15 bg-white/5"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.15,
              }}
            >
              {/* Large initials background */}
              <motion.div
                className="absolute top-0 right-0 font-[var(--font-hook)] font-black text-white/5 leading-none pointer-events-none select-none"
                style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
                initial={{ scale: 2.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 + 0.1 }}
              >
                {speaker.initials}
              </motion.div>

              {/* Initials badge */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 font-[var(--font-hook)] font-bold text-[14px] ${
                  speaker.isPlaceholder
                    ? "bg-white/10 text-white/50"
                    : "bg-gradient-to-br from-gold-from to-gold-to text-navy"
                }`}
              >
                {speaker.initials}
              </div>

              <h3
                className={`font-[var(--font-hook)] text-[17px] font-bold mb-1 ${
                  speaker.isPlaceholder ? "text-cream/50" : "text-cream"
                }`}
              >
                {speaker.name}
              </h3>

              <p
                className={`text-[13px] leading-snug mb-2 whitespace-pre-line ${
                  speaker.isPlaceholder ? "text-cream/40" : "text-cream/60"
                }`}
              >
                {speaker.role}
              </p>

              <p
                className={`text-[12px] font-[var(--font-hook)] ${
                  speaker.isPlaceholder ? "text-cream/35" : "text-gold/70"
                }`}
              >
                {speaker.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
