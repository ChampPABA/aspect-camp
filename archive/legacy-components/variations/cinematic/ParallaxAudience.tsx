"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TARGET_AUDIENCES, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ParallaxAudience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const left = TARGET_AUDIENCES[0];
  const right = TARGET_AUDIENCES[1];

  return (
    <section
      ref={ref}
      className="min-h-screen relative overflow-hidden flex flex-col md:flex-row"
    >
      {/* Left half — navy */}
      <div className="flex-1 min-h-[50vh] md:min-h-screen bg-navy flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y: leftY }}
          className="px-10 py-16 md:py-0 max-w-md w-full"
        >
          <span className="inline-block text-[12px] tracking-[0.2em] uppercase border border-gold/50 text-gold px-3 py-1 rounded-full mb-6">
            {left.badge}
          </span>

          <blockquote className="font-[var(--font-heading)] text-2xl md:text-3xl text-cream/90 italic leading-snug mb-3">
            {left.pain}
          </blockquote>

          <p className="text-cream/40 text-[13px] mb-8">{left.source}</p>

          <p className="text-cream/75 text-[15px] leading-relaxed mb-8">
            {left.solution.replace(/\*\*/g, "")}
          </p>

          <Button href={LINE_URL} variant="outline-white" size="md">
            {left.ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-white/10 self-stretch" />

      {/* Right half — cream */}
      <div className="flex-1 min-h-[50vh] md:min-h-screen bg-cream flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y: rightY }}
          className="px-10 py-16 md:py-0 max-w-md w-full"
        >
          <span className="inline-block text-[12px] tracking-[0.2em] uppercase border border-navy/40 text-navy px-3 py-1 rounded-full mb-6">
            {right.badge}
          </span>

          <blockquote className="font-[var(--font-heading)] text-2xl md:text-3xl text-navy/90 italic leading-snug mb-3">
            {right.pain}
          </blockquote>

          <p className="text-navy/40 text-[13px] mb-8">{right.source}</p>

          <p className="text-navy/75 text-[15px] leading-relaxed mb-8">
            {right.solution.replace(/\*\*/g, "")}
          </p>

          <Button href={LINE_URL} variant="gold" size="md">
            {right.ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
