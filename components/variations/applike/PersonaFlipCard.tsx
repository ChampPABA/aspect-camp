"use client";

import { TARGET_AUDIENCES, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

function parseBold(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function FlipCard({
  audience,
}: {
  audience: (typeof TARGET_AUDIENCES)[number];
}) {
  return (
    <div
      className="relative w-full"
      style={{ height: "320px", perspective: "1000px" }}
    >
      <div
        className="w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transformStyle: "preserve-3d" }}
        // Use CSS group hover via a parent wrapper
      >
        {/* This wrapper handles the flip on hover */}
        <style>{`
          .flip-card:hover .flip-inner {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>

      {/* Actual flip card using class */}
      <div className="flip-card absolute inset-0" style={{ perspective: "1000px" }}>
        <div
          className="flip-inner w-full h-full relative transition-transform duration-500 ease-in-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-[20px] bg-navy border border-white/10 p-6 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Badge */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor:
                    audience.borderColor === "gold"
                      ? "rgba(212,185,120,0.2)"
                      : "rgba(15,42,74,0.5)",
                  color:
                    audience.borderColor === "gold" ? "#D4B978" : "#738cb0",
                  border: `1px solid ${audience.borderColor === "gold" ? "rgba(212,185,120,0.4)" : "rgba(115,140,176,0.3)"}`,
                }}
              >
                {audience.badge}
              </span>
              <span className="text-[11px] text-white/30 italic">hover เพื่อดูวิธีแก้</span>
            </div>

            {/* Pain quote */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-[13px] text-white/30 mb-2 font-[var(--font-hook)] uppercase tracking-wide">
                Pain Point
              </div>
              <blockquote className="font-[var(--font-heading)] text-[18px] text-cream/90 leading-relaxed italic">
                {audience.pain}
              </blockquote>
            </div>

            {/* Source */}
            <div className="text-[12px] text-white/35 mt-4">{audience.source}</div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-[20px] bg-cream border border-black/8 p-6 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <div className="text-[11px] text-gray-muted font-[var(--font-hook)] uppercase tracking-wide mb-3">
                วิธีแก้ปัญหา
              </div>
              <p className="text-[14px] text-gray-text leading-relaxed">
                {parseBold(audience.solution)}
              </p>
            </div>
            <div className="mt-4">
              <Button href={LINE_URL} variant={audience.ctaVariant} size="sm">
                {audience.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PersonaFlipCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TARGET_AUDIENCES.map((audience, i) => (
        <FlipCard key={i} audience={audience} />
      ))}
    </div>
  );
}
