"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function PullQuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }

  const current = TESTIMONIALS[index];

  return (
    <section className="bg-navy py-24 px-[5%] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,185,120,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[800px] text-center">
        {/* Large quote mark */}
        <div
          className="font-[var(--font-heading)] text-gold leading-none mb-[-20px] select-none"
          style={{ fontSize: "120px", opacity: 0.5 }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Testimonial text */}
        <div className="min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="font-[var(--font-heading)] italic text-cream leading-[1.5]"
              style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
            >
              {current.text}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Attribution */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attr-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-8 flex flex-col items-center gap-1"
          >
            {/* Avatar badge */}
            <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center font-semibold text-gold text-[13px] mb-2">
              {current.avatar}
            </div>
            <div className="text-[15px] font-semibold text-cream">
              {current.name}
            </div>
            <div className="text-[13px] text-cream/50">{current.detail}</div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === index
                    ? "w-5 h-1.5 bg-gold"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-white/50 hover:text-white transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
