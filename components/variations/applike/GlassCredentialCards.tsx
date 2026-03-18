"use client";

import { motion } from "framer-motion";
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

export default function GlassCredentialCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {CREDENTIALS.map((cred, i) => {
        const style = tagStyles[cred.tagColor] ?? tagStyles.teal;
        return (
          <motion.div
            key={i}
            className="rounded-[20px] p-6 flex flex-col gap-4 cursor-default transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 12px 28px rgba(255,255,255,0.05)",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            {/* Logo */}
            <div
              className="text-[32px] font-bold font-[var(--font-hook)] leading-tight whitespace-pre-line"
              style={{ color: style.text }}
            >
              {cred.logo}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-cream mb-1">
                {cred.name}
              </h3>
              <p className="text-[13px] text-white/50">{cred.org}</p>
            </div>

            {/* Tag */}
            <div>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  borderColor: style.border,
                }}
              >
                {cred.tag}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
