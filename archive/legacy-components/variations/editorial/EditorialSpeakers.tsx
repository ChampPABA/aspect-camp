"use client";

import { motion } from "framer-motion";
import { SPEAKERS } from "@/lib/constants";

export default function EditorialSpeakers() {
  return (
    <section className="bg-cream-muted py-20 px-[5%]" id="speakers">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14">
          <div className="text-[11px] uppercase tracking-[0.15em] text-gold font-medium mb-3">
            วิทยากร
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
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
              className={`bg-white border rounded-[24px] overflow-hidden flex flex-col ${
                speaker.isPlaceholder
                  ? "border-dashed border-black/20"
                  : "border-black/6"
              }`}
              style={{ height: "280px" }}
            >
              {/* Top half — navy bg with huge initials */}
              <div className="flex-1 bg-navy relative flex items-center justify-center overflow-hidden">
                <div
                  className="select-none pointer-events-none font-[var(--font-heading)] font-bold text-white/20 leading-none absolute"
                  style={{ fontSize: "80px" }}
                  aria-hidden="true"
                >
                  {speaker.initials}
                </div>
              </div>

              {/* Bottom half — cream bg with name/role */}
              <div className="bg-cream px-5 py-4 flex flex-col justify-center" style={{ minHeight: "110px" }}>
                <div className="font-[var(--font-heading)] text-[18px] font-semibold text-navy leading-tight mb-1">
                  {speaker.name}
                </div>
                <div className="text-[12px] text-gray-muted leading-snug mb-2 whitespace-pre-line">
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
