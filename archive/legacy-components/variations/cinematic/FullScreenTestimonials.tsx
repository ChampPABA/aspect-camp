"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const backgrounds = ["bg-navy", "bg-navy-deep", "bg-navy"];

export default function FullScreenTestimonials() {
  return (
    <section>
      {TESTIMONIALS.map((testimonial, i) => (
        <div
          key={i}
          className={`min-h-screen ${backgrounds[i % backgrounds.length]} flex flex-col items-center justify-center px-[5%] relative overflow-hidden`}
        >
          {/* Decorative quote mark */}
          <div
            className="absolute font-[var(--font-heading)] text-white/3 leading-none pointer-events-none select-none"
            style={{ fontSize: "clamp(200px, 30vw, 400px)", top: "-5%", left: "5%" }}
          >
            "
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Avatar badge */}
            <motion.div
              className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-from to-gold-to flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-[var(--font-hook)] font-black text-navy text-[13px]">
                {testimonial.avatar}
              </span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="font-[var(--font-heading)] text-3xl md:text-5xl text-cream/90 italic leading-snug mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              {testimonial.text}
            </motion.blockquote>

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-cream font-[var(--font-hook)] font-semibold text-[15px]">
                {testimonial.name}
              </p>
              <p className="text-cream/40 text-[13px] mt-1">{testimonial.detail}</p>
            </motion.div>
          </div>

          {/* Bottom divider */}
          {i < TESTIMONIALS.length - 1 && (
            <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-white/8" />
          )}
        </div>
      ))}
    </section>
  );
}
