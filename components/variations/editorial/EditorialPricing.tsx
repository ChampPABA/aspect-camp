"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function EditorialPricing() {
  return (
    <section className="bg-cream-muted py-24 px-[5%]" id="scholarship">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            ราคาและทุน
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            ทุกระดับมีทางเข้าร่วม
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_TIERS.map((tier, i) => {
            const isEarlyBird = tier.tierClass === "early";
            return (
              <motion.div
                key={tier.tierClass}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-[20px] p-7 flex flex-col gap-5 ${
                  isEarlyBird
                    ? "bg-navy border-2 border-gold"
                    : "bg-white border border-black/8"
                }`}
                style={
                  isEarlyBird
                    ? { transform: "scale(1.03)" }
                    : undefined
                }
              >
                {isEarlyBird && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-from to-gold-to text-navy text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                {/* Tier name */}
                <div
                  className={`text-[14px] font-semibold ${isEarlyBird ? "text-cream" : "text-navy"}`}
                >
                  {tier.tier}
                </div>

                {/* Condition */}
                <div
                  className={`text-[12px] leading-snug ${isEarlyBird ? "text-cream/60" : "text-gray-muted"}`}
                >
                  {tier.condition}
                </div>

                {/* Price */}
                <div>
                  <div
                    className={`font-[var(--font-heading)] leading-none font-bold ${
                      tier.priceColor
                        ? tier.priceColor
                        : isEarlyBird
                          ? "text-gold"
                          : "text-navy"
                    }`}
                    style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                  >
                    {tier.price === "ฟรี" ? "ฟรี" : `฿${tier.price}`}
                  </div>
                  {tier.originalPrice && (
                    <div
                      className={`text-[12px] mt-1 line-through ${isEarlyBird ? "text-cream/40" : "text-gray-muted"}`}
                    >
                      ฿{tier.originalPrice}
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.benefits.map((b, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 text-[13px] ${isEarlyBird ? "text-cream/75" : "text-gray-text"}`}
                    >
                      <span className="text-gold text-[16px] leading-none">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={LINE_URL}
                  variant={tier.ctaVariant}
                  size="sm"
                  className="justify-center text-center"
                >
                  สมัครเลย
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
