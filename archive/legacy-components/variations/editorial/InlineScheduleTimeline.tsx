"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TIMELINE_ITEMS, SCHEDULE, SCHEDULE_TABS } from "@/lib/constants";

const badgeStyle: Record<string, { bg: string; text: string }> = {
  w: { bg: "rgba(59,130,246,0.12)", text: "#1d4ed8" },
  l: { bg: "rgba(109,40,217,0.1)", text: "#6d28d9" },
  p: { bg: "rgba(212,185,120,0.18)", text: "#8a6e2a" },
};

export default function InlineScheduleTimeline() {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 px-[5%]" id="schedule">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            Timeline & กำหนดการ
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(26px, 4vw, 44px)" }}
          >
            เส้นทางสู่ค่าย
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-20">
          {/* Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-navy/10" />

          <div className="flex flex-col gap-8">
            {TIMELINE_ITEMS.map((item, i) => (
              <div key={i} className="flex gap-6 pl-10 relative">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    item.dotType === "active"
                      ? "bg-gold border-gold"
                      : item.dotType === "gold"
                        ? "bg-white border-gold"
                        : "bg-white border-navy/20"
                  }`}
                >
                  {item.dotType === "active" && (
                    <div className="w-2 h-2 rounded-full bg-navy" />
                  )}
                  {item.dotType === "gold" && (
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  )}
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-gold font-medium mb-0.5">
                    {item.date}
                  </div>
                  <div className="font-[var(--font-heading)] text-[18px] font-semibold text-navy">
                    {item.event}
                  </div>
                  {"note" in item && item.note && (
                    <div className="text-[13px] text-gray-muted mt-0.5">
                      {item.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Accordions */}
        <div className="mb-6">
          <div className="text-[12px] uppercase tracking-[0.12em] text-gold font-medium mb-2">
            กำหนดการค่าย
          </div>
          <h3
            className="font-[var(--font-heading)] font-bold text-navy mb-8"
            style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
          >
            20–22 เมษายน 2568
          </h3>
        </div>

        <div className="space-y-3">
          {SCHEDULE_TABS.map((tabLabel, dayIndex) => {
            const isOpen = openDay === dayIndex;
            return (
              <div
                key={dayIndex}
                className="border border-navy/10 rounded-[16px] overflow-hidden bg-white"
              >
                {/* Accordion header */}
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer hover:bg-navy/2 transition-colors"
                  onClick={() =>
                    setOpenDay(isOpen ? null : dayIndex)
                  }
                >
                  <span className="font-[var(--font-heading)] text-[18px] font-semibold text-navy">
                    {tabLabel}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-navy/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Accordion body */}
                {isOpen && (
                  <div className="px-7 pb-6 border-t border-navy/6">
                    <div className="mt-4 space-y-3">
                      {SCHEDULE[dayIndex].map((item, j) => (
                        <div
                          key={j}
                          className={`flex gap-4 py-3 ${
                            item.isBreak
                              ? "opacity-50"
                              : ""
                          } ${j < SCHEDULE[dayIndex].length - 1 ? "border-b border-navy/5" : ""}`}
                        >
                          <div className="text-[12px] text-gray-muted whitespace-nowrap pt-0.5 min-w-[110px]">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start gap-2 flex-wrap">
                              <span className="text-[14px] font-medium text-navy">
                                {item.event}
                              </span>
                              {item.badge && (
                                <span
                                  className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                                  style={{
                                    background:
                                      badgeStyle[item.badge.type]?.bg ??
                                      "rgba(0,0,0,0.06)",
                                    color:
                                      badgeStyle[item.badge.type]?.text ??
                                      "#333",
                                  }}
                                >
                                  {item.badge.label}
                                </span>
                              )}
                            </div>
                            {item.desc && (
                              <div className="text-[13px] text-gray-muted mt-0.5">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
