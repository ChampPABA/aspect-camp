"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

export default function PremiumPricing() {
  const { time, expired } = useCountdown(CAMP_DEADLINE);

  return (
    <section id="scholarship" className="bg-navy py-20 px-[5%]">
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-sans font-semibold"
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
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
          >
            <p className="text-cream/40 text-[13px] mb-4">
              Early Bird ถึง {EARLY_BIRD_DEADLINE} &middot; ปิดรับสมัครใน
            </p>
            <div className="flex items-center gap-1.5">
              {countdownUnits.map((u, i) => (
                <div key={u.key} className="flex items-center gap-1.5">
                  <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 min-w-[60px] text-center">
                    <div className="font-heading text-2xl font-bold text-gold leading-none">
                      {String(time[u.key]).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] text-white/30 mt-0.5">{u.label}</div>
                  </div>
                  {i < 3 && <span className="text-xl text-white/15 pb-4">:</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 bg-risk-red/10 border border-risk-red/20 rounded-full px-3.5 py-1.5 text-[12px] text-[#F09595]">
              <span className="w-1.5 h-1.5 bg-risk-red rounded-full animate-pulse-dot" />
              เหลือเพียง {SEATS_LEFT} ที่นั่ง
            </div>
          </motion.div>
        )}

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRICING_TIERS.map((tier, i) => {
            const isEarlyBird = tier.tierClass === "early";
            return (
              <motion.div
                key={i}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  isEarlyBird ? "ring-2 ring-gold/50 scale-[1.02]" : ""
                }`}
                style={{
                  background: isEarlyBird
                    ? "rgba(212,185,120,0.08)"
                    : "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                  border: isEarlyBird
                    ? "1px solid rgba(212,185,120,0.3)"
                    : "1px solid rgba(255,255,255,0.12)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {isEarlyBird && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-gold-from to-gold-to rounded-full text-navy text-[11px] font-bold tracking-wide">
                    แนะนำ
                  </div>
                )}

                {/* Tier name */}
                <h3 className="font-hook text-base text-cream mb-2">{tier.tier}</h3>

                {/* Condition */}
                <p className="text-sm text-cream/40 mb-4 leading-relaxed">
                  {tier.condition}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className={`font-heading text-3xl font-bold ${tier.priceColor || "text-cream"}`}>
                    {tier.price === "ฟรี" ? "ฟรี" : `฿${tier.price}`}
                  </span>
                  {tier.originalPrice && (
                    <span className="text-[13px] text-cream/30 line-through ml-2">
                      ฿{tier.originalPrice}
                    </span>
                  )}
                </div>

                {/* Benefits */}
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-cream/70">
                      <Check size={14} className="text-gold shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ShineButton
                  href={LINE_URL}
                  variant={tier.ctaVariant}
                  size="sm"
                  className="justify-center w-full"
                >
                  สมัครเลย →
                </ShineButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
