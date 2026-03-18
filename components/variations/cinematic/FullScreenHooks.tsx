"use client";

import { motion } from "framer-motion";
import { HOOKS } from "@/lib/constants";

const backgrounds = ["bg-navy", "bg-navy-deep", "bg-navy"];

export default function FullScreenHooks() {
  return (
    <section>
      {HOOKS.map((hook, i) => (
        <div
          key={hook.num}
          className={`min-h-screen ${backgrounds[i % backgrounds.length]} flex items-center justify-center relative overflow-hidden`}
        >
          {/* Large background number */}
          <span
            className="absolute select-none font-[var(--font-hook)] font-black text-white pointer-events-none leading-none"
            style={{
              fontSize: "clamp(120px, 25vw, 280px)",
              opacity: 0.04,
              right: "5%",
              bottom: "-5%",
            }}
          >
            {hook.num}
          </span>

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-[5%] w-full">
            {/* Wipe reveal overlay */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-gold z-20 pointer-events-none"
                style={{ willChange: "transform" }}
              />
            </div>

            <motion.p
              className="text-gold text-[12px] tracking-[0.3em] uppercase mb-4 font-[var(--font-hook)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {hook.num}
            </motion.p>

            <motion.h2
              className="font-[var(--font-heading)] text-5xl md:text-7xl text-cream leading-tight mb-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              {hook.title}
            </motion.h2>

            <motion.p
              className="text-cream/70 text-[17px] md:text-xl leading-relaxed mb-6 max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              {hook.desc}
            </motion.p>

            <motion.p
              className="text-gold/80 text-[14px] font-[var(--font-hook)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {hook.usp}
            </motion.p>
          </div>

          {/* Bottom divider line */}
          {i < HOOKS.length - 1 && (
            <div className="absolute bottom-0 left-[5%] right-[5%] h-px bg-white/8" />
          )}
        </div>
      ))}
    </section>
  );
}
