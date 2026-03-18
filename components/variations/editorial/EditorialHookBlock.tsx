"use client";

import { motion } from "framer-motion";
import { HOOKS } from "@/lib/constants";

export default function EditorialHookBlock() {
  return (
    <section className="bg-cream py-24 px-[5%]">
      <div className="mx-auto max-w-[1100px] space-y-24">
        {HOOKS.map((hook, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={hook.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}
            >
              {/* Watermark number */}
              <div
                className={`absolute ${isEven ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 select-none pointer-events-none font-[var(--font-heading)] font-bold text-navy leading-none`}
                style={{ fontSize: "clamp(80px, 14vw, 160px)", opacity: 0.05 }}
                aria-hidden="true"
              >
                {hook.num}
              </div>

              {/* Text block */}
              <div className="relative z-10 flex-1">
                <div className="text-[13px] uppercase tracking-[0.12em] text-gold font-medium mb-3">
                  {hook.num}
                </div>
                <h2
                  className="font-[var(--font-heading)] font-bold text-navy leading-[1.15] mb-5"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
                >
                  {hook.title}
                </h2>
                <p className="text-[16px] text-gray-text leading-relaxed mb-6 max-w-[480px]">
                  {hook.desc}
                </p>
                {/* USP badge */}
                <span
                  className="inline-block text-[13px] font-medium px-4 py-2 rounded-full border"
                  style={{
                    background: "rgba(7,89,44,0.08)",
                    color: "#07592c",
                    borderColor: "rgba(7,89,44,0.2)",
                  }}
                >
                  {hook.usp}
                </span>
              </div>

              {/* Visual spacer */}
              <div className="hidden md:block flex-shrink-0 w-[200px]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
