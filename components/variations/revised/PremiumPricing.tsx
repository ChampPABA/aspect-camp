"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Star, Zap } from "lucide-react";
import {
  PRICING_TIERS,
  CAMP_DEADLINE,
  SEATS_LEFT,
  LINE_URL,
  EARLY_BIRD_DEADLINE,
} from "@/lib/constants";
import ShineButton from "@/components/ui/ShineButton";

function useCountdown(deadline: Date) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    function update() {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) { setExpired(true); return; }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return { time, expired };
}

const countdownUnits = [
  { key: "d" as const, label: "วัน" },
  { key: "h" as const, label: "ชม." },
  { key: "m" as const, label: "นาที" },
  { key: "s" as const, label: "วินาที" },
];

const tierIcons = {
  full: Sparkles,
  half: Star,
  early: Zap,
  regular: Check,
} as const;

const tierAccentColors = {
  full: { border: "rgba(7,89,44,0.5)", bg: "rgba(7,89,44,0.08)", icon: "text-result-green" },
  half: { border: "rgba(115,140,176,0.4)", bg: "rgba(115,140,176,0.08)", icon: "text-luminous-blue" },
  early: { border: "rgba(212,185,120,0.5)", bg: "rgba(212,185,120,0.10)", icon: "text-gold" },
  regular: { border: "rgba(255,255,255,0.15)", bg: "rgba(255,255,255,0.05)", icon: "text-cream/40" },
} as const;

export default function PremiumPricing() {
  const { time, expired } = useCountdown(CAMP_DEADLINE);

  return (
    <section id="scholarship" className="bg-navy py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          className="text-gold text-xs tracking-[0.25em] uppercase text-center mb-4 font-sans font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          ทุนการศึกษา &amp; ค่าใช้จ่าย
        </motion.p>

        <motion.h2
          className="font-sans font-bold text-3xl md:text-5xl text-cream text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ลงทุน 3 วัน เปลี่ยนอนาคต
        </motion.h2>

        {/* Countdown */}
        {!expired && (
          <motion.div
            className="flex flex-col items-center mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <p className="text-cream/40 text-sm mb-4">
              Early Bird ถึง {EARLY_BIRD_DEADLINE} &middot; ปิดรับสมัครใน
            </p>
            <div className="flex items-center gap-2">
              {countdownUnits.map((u, i) => (
                <div key={u.key} className="flex items-center gap-2">
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-w-[64px] text-center">
                    <div className="font-sans text-2xl font-bold text-gold tabular-nums leading-none">
                      {String(time[u.key]).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-white/35 mt-1">{u.label}</div>
                  </div>
                  {i < 3 && <span className="text-lg text-white/20 pb-4">:</span>}
                </div>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 bg-risk-red/10 border border-risk-red/20 rounded-full px-4 py-2 text-sm text-[#F09595]">
              <span className="w-2 h-2 bg-risk-red rounded-full animate-pulse-dot" />
              เหลือเพียง {SEATS_LEFT} ที่นั่ง
            </div>
          </motion.div>
        )}

        {/* 4 Pricing cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PRICING_TIERS.map((tier, i) => {
            const isEarlyBird = tier.tierClass === "early";
            const accent = tierAccentColors[tier.tierClass];
            const TierIcon = tierIcons[tier.tierClass];

            return (
              <motion.div
                key={i}
                className={`relative rounded-2xl flex flex-col ${
                  isEarlyBird ? "lg:-mt-4 lg:mb-[-16px]" : ""
                }`}
                style={{
                  background: accent.bg,
                  backdropFilter: "blur(16px)",
                  border: `1.5px solid ${accent.border}`,
                  boxShadow: isEarlyBird
                    ? "0 8px 40px rgba(212,185,120,0.15)"
                    : "none",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Recommended badge */}
                {isEarlyBird && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold-from to-gold-to rounded-full text-navy text-xs font-bold tracking-wide whitespace-nowrap">
                    แนะนำ
                  </div>
                )}

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Tier name */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isEarlyBird ? "bg-gold/15" : "bg-white/8"
                    }`}>
                      <TierIcon size={18} className={accent.icon} />
                    </div>
                    <h3 className="font-sans font-bold text-base text-cream">
                      {tier.tier.replace(/^[^\s]+\s/, "")}
                    </h3>
                  </div>

                  {/* Price — prominent */}
                  <div className="mb-3">
                    <span className={`font-sans text-3xl font-bold ${tier.priceColor || "text-cream"}`}>
                      {tier.price === "ฟรี" ? "ฟรี" : `฿${tier.price}`}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-sm text-cream/25 line-through ml-2">
                        ฿{tier.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Condition */}
                  <p className="text-sm text-cream/45 mb-5 leading-relaxed min-h-[40px]">
                    {tier.condition}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/8 mb-5" />

                  {/* Benefits */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-cream/70">
                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <ShineButton
                    href={LINE_URL}
                    variant={tier.ctaVariant}
                    size="sm"
                    className="justify-center w-full text-center"
                  >
                    สมัครเลย →
                  </ShineButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
