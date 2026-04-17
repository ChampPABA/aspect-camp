"use client";

import { motion } from "framer-motion";
import { HOOKS } from "@/lib/constants";

const BG_CLASSES = ["bg-cream", "bg-navy", "bg-navy-deep"] as const;

export default function EditorialHookBlock() {
  return (
    <>
      {HOOKS.map((hook, i) => {
        const isLight = i % 2 === 0;
        const isEven = i % 2 === 1;
        const bgClass = BG_CLASSES[i] ?? BG_CLASSES[0];

        return (
          <section
            key={hook.num}
            className={`py-28 px-[5%] relative overflow-hidden ${bgClass}`}
          >
            <div className="mx-auto max-w-[1100px] relative">
              {/* Giant watermark number — bleeds off screen edge */}
              <div
                className="absolute top-1/2 -translate-y-1/2 select-none pointer-events-none font-[var(--font-heading)] font-bold leading-none"
                style={{
                  fontSize: "clamp(140px, 22vw, 260px)",
                  opacity: isLight ? 0.06 : 0.08,
                  color: isLight ? "#0F2A4A" : "#F1F1E8",
                  right: isEven ? "auto" : "-2rem",
                  left: isEven ? "-2rem" : "auto",
                }}
                aria-hidden="true"
              >
                {hook.num}
              </div>

              {/* Content — left or right aligned based on index */}
              <motion.div
                className={`relative z-10 max-w-[580px] ${isEven ? "ml-auto" : ""}`}
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.15em] font-[var(--font-hook)] mb-4 text-gold`}
                >
                  {hook.num} — ทำไมต้องค่ายนี้
                </div>
                <h2
                  className={`font-[var(--font-heading)] font-bold leading-[1.1] mb-6 ${
                    isLight ? "text-navy" : "text-cream"
                  }`}
                  style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
                >
                  {hook.title}
                </h2>
                {/* Gold divider line */}
                <div className="w-16 h-[3px] bg-gradient-to-r from-gold-from to-gold-to mb-6" />
                <p
                  className={`text-[17px] leading-[1.8] mb-8 ${
                    isLight ? "text-gray-text" : "text-cream/70"
                  }`}
                >
                  {hook.desc}
                </p>
                <span
                  className={`inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 rounded-full border ${
                    isLight
                      ? "bg-result-green/8 text-[#085041] border-result-green/20"
                      : "bg-gold/10 text-gold border-gold/25"
                  }`}
                >
                  {hook.usp}
                </span>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
