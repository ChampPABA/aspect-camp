"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function BentoPricing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {PRICING_TIERS.map((tier, i) => {
        const isEarlyBird = tier.tierClass === "early";
        const isFullScholarship = tier.tierClass === "full";

        return (
          <motion.div
            key={i}
            className={`rounded-[20px] p-6 flex flex-col gap-4 border relative overflow-hidden transition-all duration-200 ${
              isEarlyBird
                ? "bg-gradient-to-br from-gold/15 to-transparent border-gold/50"
                : "bg-navy-hover border-white/10"
            }`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Early Bird top gradient accent */}
            {isEarlyBird && (
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
                style={{
                  background: "linear-gradient(to right, #c3a456, #f0cb46)",
                }}
              />
            )}

            {/* Tier label */}
            <div>
              <div className="text-[15px] font-semibold text-cream mb-1">
                {tier.tier}
              </div>
              <div className="text-[12px] text-white/40 leading-relaxed">
                {tier.condition}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span
                className={`text-[36px] font-bold font-[var(--font-hook)] ${
                  isFullScholarship ? "text-result-green" : "text-cream"
                }`}
              >
                {tier.price === "ฟรี" ? tier.price : `฿${tier.price}`}
              </span>
              {tier.originalPrice && (
                <span className="text-[14px] text-white/30 line-through">
                  ฿{tier.originalPrice}
                </span>
              )}
            </div>

            {/* Benefits */}
            <ul className="space-y-1.5">
              {tier.benefits.map((benefit, j) => (
                <li key={j} className="flex items-center gap-2 text-[13px] text-cream/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-2">
              <Button
                href={LINE_URL}
                variant={
                  tier.ctaVariant === "outline-navy" ? "outline-white" : tier.ctaVariant
                }
                size="sm"
                className="w-full justify-center"
              >
                สมัครเลย
              </Button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
