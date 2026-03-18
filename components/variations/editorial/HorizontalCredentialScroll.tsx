"use client";

import { CREDENTIALS } from "@/lib/constants";

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
  teal: {
    bg: "rgba(241,241,232,0.12)",
    text: "#F1F1E8",
    border: "rgba(241,241,232,0.25)",
  },
  gold: {
    bg: "rgba(212,185,120,0.15)",
    text: "#D4B978",
    border: "rgba(212,185,120,0.4)",
  },
  purple: {
    bg: "rgba(180,140,220,0.12)",
    text: "#C4A8E8",
    border: "rgba(180,140,220,0.3)",
  },
};

export default function HorizontalCredentialScroll() {
  return (
    <section className="bg-navy py-20 px-[5%]" id="credentials">
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <div className="mb-10">
          <div className="text-[11px] uppercase tracking-[0.15em] text-gold font-medium mb-3">
            Credentials
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-cream leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            หลักฐานที่ verify ได้
          </h2>
        </div>

        {/* 2×2 grid on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CREDENTIALS.map((cred, i) => {
            const tagColors = tagColorMap[cred.tagColor] ?? tagColorMap["teal"];
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[20px] p-6 flex flex-col justify-between min-h-[180px]"
              >
                {/* Top row: logo + tag */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="font-[var(--font-hook)] text-[28px] font-bold text-gold leading-none whitespace-pre-line"
                  >
                    {cred.logo}
                  </div>
                  <span
                    className="text-[11px] font-medium px-3 py-1 rounded-full border"
                    style={{
                      background: tagColors.bg,
                      color: tagColors.text,
                      borderColor: tagColors.border,
                    }}
                  >
                    {cred.tag}
                  </span>
                </div>

                {/* Name + org */}
                <div>
                  <div className="text-cream text-[15px] font-semibold leading-tight mb-1">
                    {cred.name}
                  </div>
                  <div className="text-cream/50 text-[12px] leading-snug">
                    {cred.org}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
