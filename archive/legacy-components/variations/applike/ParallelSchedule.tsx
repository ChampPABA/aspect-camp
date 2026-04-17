"use client";

import { SCHEDULE, SCHEDULE_TABS } from "@/lib/constants";

type BadgeType = "w" | "l" | "p";

const badgeStyles: Record<BadgeType, { bg: string; text: string }> = {
  w: { bg: "rgba(96,165,250,0.15)", text: "#60a5fa" },   // blue — Workshop
  l: { bg: "rgba(192,132,252,0.15)", text: "#c084fc" },   // purple — Lecture
  p: { bg: "rgba(212,185,120,0.18)", text: "#D4B978" },   // gold — Pitch/Award
};

export default function ParallelSchedule() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {SCHEDULE_TABS.map((dayLabel, dayIndex) => (
        <div
          key={dayIndex}
          className="bg-white border border-black/8 rounded-[16px] overflow-hidden"
        >
          {/* Day header */}
          <div className="bg-navy px-5 py-3 border-b border-white/10">
            <div className="text-[11px] text-white/40 uppercase tracking-[0.12em] font-[var(--font-hook)]">
              Day {dayIndex + 1}
            </div>
            <div className="text-[14px] font-semibold text-cream">
              {dayLabel}
            </div>
          </div>

          {/* Items */}
          <ul className="divide-y divide-black/5">
            {SCHEDULE[dayIndex].map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`px-4 py-3 ${item.isBreak ? "opacity-40" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-gray-muted font-mono mb-0.5">
                      {item.time}
                    </div>
                    <div
                      className={`text-[13px] font-medium ${item.isBreak ? "text-gray-muted" : "text-gray-text"}`}
                    >
                      {item.event}
                    </div>
                    {item.desc && (
                      <div className="text-[12px] text-gray-muted mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    )}
                  </div>
                  {item.badge && (
                    <span
                      className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase"
                      style={{
                        backgroundColor:
                          badgeStyles[item.badge.type]?.bg ?? "rgba(0,0,0,0.06)",
                        color:
                          badgeStyles[item.badge.type]?.text ?? "#6b6b6b",
                      }}
                    >
                      {item.badge.label}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
