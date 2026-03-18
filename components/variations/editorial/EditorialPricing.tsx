"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function EditorialPricing() {
  type PricingTier = (typeof PRICING_TIERS)[number];
  const earlyBird = PRICING_TIERS.find((t) => t.tierClass === "early") as PricingTier | undefined;
  const otherTiers = PRICING_TIERS.filter((t) => t.tierClass !== "early") as PricingTier[];

  return (
    <section className="bg-navy py-20 px-[5%]" id="scholarship">
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-[0.15em] text-gold font-medium mb-3">
            ราคาและทุน
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-cream leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            ทุกระดับมีทางเข้าร่วม
          </h2>
        </div>

        {/* Early Bird — hero tier, full-width top row */}
        {earlyBird && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[24px] p-8 mb-5 bg-gradient-to-br from-gold-from to-gold-to text-navy"
          >
            <div className="absolute -top-3 left-8 bg-navy text-gold text-[11px] font-bold uppercase tracking-[0.08em] px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <div className="text-[14px] font-semibold text-navy/70 mb-1">
                  {earlyBird.tier}
                </div>
                <div className="text-[13px] text-navy/60 mb-4">
                  {earlyBird.condition}
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {earlyBird.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-[13px] text-navy/80">
                      <span className="text-navy text-[16px] leading-none">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3">
                <div>
                  <div
                    className="font-[var(--font-heading)] font-bold leading-none text-navy"
                    style={{ fontSize: "clamp(40px, 5vw, 56px)" }}
                  >
                    ฿{earlyBird.price}
                  </div>
                  {earlyBird.originalPrice && (
                    <div className="text-[13px] text-navy/50 line-through mt-1">
                      ฿{earlyBird.originalPrice}
                    </div>
                  )}
                </div>
                <Button
                  href={LINE_URL}
                  variant={earlyBird.ctaVariant}
                  size="sm"
                  className="justify-center text-center"
                >
                  สมัครเลย
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other 3 tiers — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherTiers.map((tier, i) => {
            const isScholarship = tier.tierClass === "full";
            return (
              <motion.div
                key={tier.tierClass}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-[20px] p-6 flex flex-col gap-4 bg-white/5 border border-white/10"
              >
                {/* Tier name */}
                <div className="text-[14px] font-semibold text-cream">
                  {tier.tier}
                </div>

                {/* Condition */}
                <div className="text-[12px] leading-snug text-cream/50">
                  {tier.condition}
                </div>

                {/* Price */}
                <div>
                  <div
                    className={`font-[var(--font-heading)] leading-none font-bold ${
                      isScholarship
                        ? "text-result-green"
                        : ("priceColor" in tier && tier.priceColor)
                          ? (tier as { priceColor: string }).priceColor
                          : "text-cream"
                    }`}
                    style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                  >
                    {tier.price === "ฟรี" ? "ฟรี" : `฿${tier.price}`}
                  </div>
                  {tier.originalPrice && (
                    <div className="text-[12px] mt-1 line-through text-cream/30">
                      ฿{tier.originalPrice}
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.benefits.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[13px] text-cream/70"
                    >
                      <span className="text-gold text-[16px] leading-none">✓</span>
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
