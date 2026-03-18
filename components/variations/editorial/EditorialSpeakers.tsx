"use client";

import { motion } from "framer-motion";
import { SPEAKERS } from "@/lib/constants";

export default function EditorialSpeakers() {
  return (
    <section className="bg-cream-muted py-24 px-[5%]" id="speakers">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            วิทยากร
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            พบกับวิทยากรระดับประเทศ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SPEAKERS.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-[20px] overflow-hidden flex flex-col justify-end p-6 ${
                speaker.isPlaceholder
                  ? "border-2 border-dashed border-navy/20 bg-cream min-h-[280px]"
                  : "bg-cream-muted border border-black/5 min-h-[280px]"
              }`}
            >
              {/* Large initials watermark */}
              <div
                className="absolute top-4 left-4 font-[var(--font-heading)] font-bold text-navy select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(60px, 8vw, 100px)",
                  opacity: speaker.isPlaceholder ? 0.04 : 0.08,
                }}
                aria-hidden="true"
              >
                {speaker.initials}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="font-[var(--font-heading)] text-[20px] font-semibold text-navy leading-tight mb-1">
                  {speaker.name}
                </div>
                <div
                  className="text-[12px] text-gray-muted leading-snug mb-2 whitespace-pre-line"
                >
                  {speaker.role}
                </div>
                <div
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full self-start inline-block ${
                    speaker.isPlaceholder
                      ? "bg-navy/5 text-gray-muted"
                      : "bg-navy/10 text-navy"
                  }`}
                >
                  {speaker.institution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
