"use client";

import { motion } from "framer-motion";
import { SPEAKERS } from "@/lib/constants";

const featured = SPEAKERS.find((s) => !s.isPlaceholder);
const others = SPEAKERS.filter((s) => s !== featured);

export default function GlassSpeakers() {

  return (
    <section id="speakers" className="bg-navy py-20 px-[5%]">
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-hook"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          วิทยากร
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl text-cream text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          เรียนรู้จากผู้เชี่ยวชาญตัวจริง
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured speaker — spans 2 columns */}
          {featured && (
            <motion.div
              className="sm:col-span-2 rounded-[20px] p-8 flex flex-col sm:flex-row items-center gap-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(212,185,120,0.3)",
                boxShadow: "0 4px 24px rgba(212,185,120,0.08)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-from to-gold-to flex items-center justify-center shrink-0">
                <span className="text-navy text-2xl font-heading font-bold">
                  {featured.initials}
                </span>
              </div>
              <div>
                <div className="inline-block px-3 py-0.5 rounded-full bg-gold/15 text-gold text-[11px] font-semibold tracking-wide mb-2">
                  FEATURED
                </div>
                <h3 className="font-heading text-xl text-cream font-semibold mb-1">
                  {featured.name}
                </h3>
                <p className="text-cream/50 text-[14px] whitespace-pre-line leading-relaxed">
                  {featured.role}
                </p>
                <p className="text-gold/70 text-[13px] mt-1">
                  {featured.institution}
                </p>
              </div>
            </motion.div>
          )}

          {/* Other speakers */}
          {others.map((speaker, i) => (
            <motion.div
              key={i}
              className="rounded-[20px] p-6 flex flex-col items-center text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(255,255,255,0.25)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  speaker.isPlaceholder
                    ? "bg-white/8 border border-white/15"
                    : "bg-gradient-to-br from-gold-from to-gold-to"
                }`}
              >
                <span
                  className={`text-lg font-heading font-bold ${
                    speaker.isPlaceholder ? "text-white/30" : "text-navy"
                  }`}
                >
                  {speaker.initials}
                </span>
              </div>

              <h3
                className={`font-heading text-[16px] font-semibold mb-1 ${
                  speaker.isPlaceholder ? "text-cream/40" : "text-cream"
                }`}
              >
                {speaker.name}
              </h3>
              <p
                className={`text-[13px] whitespace-pre-line leading-relaxed ${
                  speaker.isPlaceholder ? "text-white/20" : "text-cream/50"
                }`}
              >
                {speaker.role}
              </p>
              <p
                className={`text-[12px] mt-1 ${
                  speaker.isPlaceholder ? "text-white/15" : "text-gold/60"
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
