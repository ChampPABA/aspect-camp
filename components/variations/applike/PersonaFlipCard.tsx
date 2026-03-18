"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TARGET_AUDIENCES, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

function parseBold(text: string) {
  return text.split("**").map((p, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-navy">{p}</strong> : p
  );
}

function FlipCard({ audience }: { audience: (typeof TARGET_AUDIENCES)[number] }) {
  const [flipped, setFlipped] = useState(false);
  const isGold = audience.borderColor === "gold";

  return (
    <div
      className="relative cursor-pointer"
      style={{ height: 340, perspective: 1200 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-[20px] bg-navy-hover border border-white/10 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <span
              className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-4 ${
                isGold
                  ? "bg-gold/20 text-gold border border-gold/30"
                  : "bg-white/10 text-white/70 border border-white/15"
              }`}
            >
              {audience.badge}
            </span>
            <div className="text-[10px] text-white/30 uppercase tracking-[0.12em] font-[var(--font-hook)] mb-3">
              Pain Point
            </div>
            <blockquote className="font-[var(--font-heading)] text-[20px] text-cream/90 leading-[1.45] italic">
              {audience.pain}
            </blockquote>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-white/35">{audience.source}</span>
            <span className="text-[11px] text-white/20">hover →</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-[20px] bg-cream p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="text-[10px] text-gray-muted uppercase tracking-[0.12em] font-[var(--font-hook)] mb-3">
              วิธีแก้ปัญหา
            </div>
            <p className="text-[14px] text-gray-text leading-[1.75]">
              {parseBold(audience.solution)}
            </p>
          </div>
          <Button href={LINE_URL} variant={audience.ctaVariant} size="sm">
            {audience.ctaText}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function PersonaFlipCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {TARGET_AUDIENCES.map((a, i) => (
        <FlipCard key={i} audience={a} />
      ))}
    </div>
  );
}
