"use client";

import { motion } from "framer-motion";
import { TARGET_AUDIENCES, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

function renderSolution(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-navy font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function EditorialAudience() {
  return (
    <section className="bg-cream py-24 px-[5%]" id="audience">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            สำหรับใคร
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            ค่ายนี้ออกแบบมาสำหรับน้อง
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TARGET_AUDIENCES.map((audience, i) => {
            const isGold = audience.borderColor === "gold";
            return (
              <motion.div
                key={audience.badge}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className={`rounded-[24px] p-8 flex flex-col gap-6 border-2 ${
                  isGold ? "border-gold bg-navy" : "border-navy/20 bg-cream-muted"
                }`}
              >
                {/* Badge */}
                <span
                  className={`self-start text-[13px] font-semibold px-4 py-1.5 rounded-full ${
                    isGold
                      ? "bg-gold/20 text-gold border border-gold/30"
                      : "bg-navy/10 text-navy border border-navy/20"
                  }`}
                >
                  {audience.badge}
                </span>

                {/* Pain quote */}
                <blockquote
                  className={`font-[var(--font-heading)] italic leading-[1.4] ${
                    isGold ? "text-cream" : "text-navy"
                  }`}
                  style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
                >
                  {audience.pain}
                </blockquote>
                <p
                  className={`text-[13px] ${isGold ? "text-cream/50" : "text-gray-muted"}`}
                >
                  {audience.source}
                </p>

                {/* Solution */}
                <p
                  className={`text-[15px] leading-relaxed ${
                    isGold ? "text-cream/80" : "text-gray-text"
                  }`}
                >
                  {renderSolution(audience.solution)}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <Button
                    href={LINE_URL}
                    variant={audience.ctaVariant}
                    size="sm"
                  >
                    {audience.ctaText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
