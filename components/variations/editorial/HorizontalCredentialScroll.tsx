"use client";

import { CREDENTIALS } from "@/lib/constants";

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
  teal: {
    bg: "rgba(15,42,74,0.08)",
    text: "#0F2A4A",
    border: "rgba(15,42,74,0.2)",
  },
  gold: {
    bg: "rgba(212,185,120,0.15)",
    text: "#8a6e2a",
    border: "rgba(212,185,120,0.4)",
  },
  purple: {
    bg: "rgba(109,40,217,0.08)",
    text: "#6d28d9",
    border: "rgba(109,40,217,0.2)",
  },
};

export default function HorizontalCredentialScroll() {
  return (
    <section className="bg-cream-muted py-20 px-[5%]" id="credentials">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            Credentials
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy leading-tight"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)" }}
          >
            3 Credentials ที่ Verify ได้จริง
          </h2>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {CREDENTIALS.map((cred, i) => {
            const tagColors =
              tagColorMap[cred.tagColor] ?? tagColorMap["teal"];
            return (
              <div
                key={i}
                className="flex-shrink-0 bg-white border border-black/8 rounded-[20px] p-7 flex flex-col justify-between"
                style={{
                  width: "clamp(260px, 30vw, 320px)",
                  minHeight: "200px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Top row: logo badge + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="bg-navy text-cream text-[11px] font-bold uppercase leading-none rounded-[8px] px-2.5 py-2 whitespace-pre-line text-center"
                    style={{ minWidth: "40px" }}
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

                {/* Credential name */}
                <div>
                  <div className="font-[var(--font-heading)] text-[18px] font-semibold text-navy leading-tight mb-1.5">
                    {cred.name}
                  </div>
                  <div className="text-[13px] text-gray-muted leading-snug">
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
