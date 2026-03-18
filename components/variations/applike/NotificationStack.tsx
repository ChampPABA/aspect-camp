"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function NotificationStack() {
  return (
    <motion.div
      className="relative flex flex-col gap-4 max-w-[640px] mx-auto"
      initial="rest"
      whileHover="hover"
    >
      {/* Stacked visual hint at rest — only shown when more than 1 card */}
      {TESTIMONIALS.map((testimonial, i) => (
        <motion.div
          key={i}
          className="bg-white border border-black/8 rounded-[16px] p-5 shadow-md relative"
          variants={{
            rest: {
              y: i === 0 ? 0 : i * 8,
              scale: i === 0 ? 1 : 1 - i * 0.02,
              zIndex: TESTIMONIALS.length - i,
              opacity: i === 0 ? 1 : 1 - i * 0.15,
            },
            hover: {
              y: 0,
              scale: 1,
              zIndex: TESTIMONIALS.length - i,
              opacity: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ position: i === 0 ? "relative" : "absolute", top: 0, left: 0, right: 0 }}
        >
          {/* Avatar + name row */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-[12px] font-bold text-cream font-[var(--font-hook)] flex-shrink-0">
              {testimonial.avatar}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-gray-text">
                {testimonial.name}
              </div>
              <div className="text-[11px] text-gray-muted">{testimonial.detail}</div>
            </div>
          </div>

          {/* Quote */}
          <p className="text-[14px] text-gray-text leading-relaxed italic">
            {testimonial.text}
          </p>
        </motion.div>
      ))}

      {/* Spacer to reserve height for the stacked cards */}
      <div style={{ height: `${(TESTIMONIALS.length - 1) * 8}px` }} className="pointer-events-none" />
    </motion.div>
  );
}
