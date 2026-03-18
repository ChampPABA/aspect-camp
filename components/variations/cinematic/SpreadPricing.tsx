"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function SpreadPricing() {
  return (
    <section className="min-h-screen bg-navy py-20 px-[5%] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-[var(--font-hook)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ทุนและราคา
        </motion.p>

        <motion.h2
          className="font-[var(--font-heading)] text-4xl md:text-6xl text-cream text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          เลือกแผนที่ใช่สำหรับคุณ
        </motion.h2>

        <motion.p
          className="text-cream/50 text-center text-[15px] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          มีทุนสนับสนุนรวม 13 ทุน
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.tier}
              className={`rounded-2xl p-6 flex flex-col ${
                tier.tierClass === "early"
                  ? "bg-navy border-2 border-gold shadow-[0_0_20px_rgba(212,185,120,0.3)]"
                  : "bg-white/5 border border-white/12"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              {/* Tier name */}
              <div className="mb-4">
                <p
                  className={`text-[14px] font-[var(--font-hook)] font-bold leading-tight mb-2 ${
                    tier.tierClass === "early" ? "text-gold" : "text-cream"
                  }`}
                >
                  {tier.tier}
                </p>
                <p className="text-cream/50 text-[12px] leading-relaxed">
                  {tier.condition}
                </p>
              </div>

              {/* Price */}
              <div className="mb-5">
                {tier.originalPrice && (
                  <p className="text-cream/35 text-[12px] line-through mb-0.5">
                    ฿{tier.originalPrice}
                  </p>
                )}
                <p
                  className={`font-[var(--font-hook)] font-black text-3xl ${
                    tier.priceColor || "text-cream"
                  }`}
                >
                  {tier.price === "ฟรี" ? "ฟรี" : `฿${tier.price}`}
                </p>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6 flex-1">
                {tier.benefits.map((b) => (
                  <li
                    key={b}
                    className="text-cream/65 text-[13px] flex items-start gap-2"
                  >
                    <span className="text-gold mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                href={LINE_URL}
                variant={tier.ctaVariant}
                size="sm"
                className="justify-center text-center w-full"
              >
                สมัครเลย
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
