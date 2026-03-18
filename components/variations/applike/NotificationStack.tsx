"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function NotificationStack() {
  return (
    <div className="flex flex-col gap-4 max-w-[640px] mx-auto">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="bg-navy-hover border border-white/10 rounded-[20px] p-6"
          style={{ marginLeft: `${i * 16}px` }}
        >
          <p className="text-[15px] text-cream/85 leading-relaxed italic mb-4 font-[var(--font-heading)]">
            {t.text}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-[12px] font-bold text-gold">
              {t.avatar}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-cream">{t.name}</div>
              <div className="text-[11px] text-white/35">{t.detail}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
