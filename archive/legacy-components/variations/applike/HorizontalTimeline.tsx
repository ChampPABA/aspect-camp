"use client";

import { useState } from "react";
import { TIMELINE_ITEMS } from "@/lib/constants";

export default function HorizontalTimeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = TIMELINE_ITEMS[selectedIndex];

  return (
    <div>
      {/* Timeline bar — vertical on mobile, horizontal scroll on md+ */}
      {/* Mobile: vertical */}
      <div className="flex flex-col gap-0 md:hidden">
        {TIMELINE_ITEMS.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            {/* Dot + vertical line */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setSelectedIndex(i)}
                className="flex-shrink-0"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    i === selectedIndex
                      ? "scale-125 border-gold bg-gold shadow-gold"
                      : item.dotType === "gold"
                      ? "border-gold bg-gold/30"
                      : item.dotType === "active"
                      ? "border-result-green bg-result-green animate-pulse"
                      : "border-white/20 bg-white/10"
                  }`}
                />
              </button>
              {i < TIMELINE_ITEMS.length - 1 && (
                <div
                  className="w-[2px] flex-1 min-h-[32px]"
                  style={{
                    backgroundColor:
                      i < selectedIndex ? "#D4B978" : "rgba(255,255,255,0.12)",
                  }}
                />
              )}
            </div>
            {/* Date + event */}
            <button
              onClick={() => setSelectedIndex(i)}
              className="text-left pb-4"
            >
              <div
                className={`text-[11px] leading-snug transition-colors duration-200 ${
                  i === selectedIndex ? "text-cream font-semibold" : "text-white/50"
                }`}
              >
                {item.date}
              </div>
              <div
                className={`text-[13px] leading-snug ${
                  i === selectedIndex ? "text-cream" : "text-white/40"
                }`}
              >
                {item.event}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal scroll */}
      <div className="hidden md:block overflow-x-auto pb-4 -mx-1 px-1">
        <div className="flex items-center" style={{ minWidth: "max-content" }}>
          {TIMELINE_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center">
              {/* Dot + label */}
              <button
                onClick={() => setSelectedIndex(i)}
                className="flex flex-col items-center gap-2 group"
                style={{ width: "160px" }}
              >
                {/* Dot */}
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                    i === selectedIndex
                      ? "scale-125 border-gold bg-gold shadow-gold"
                      : item.dotType === "gold"
                      ? "border-gold bg-gold/30"
                      : item.dotType === "active"
                      ? "border-result-green bg-result-green animate-pulse"
                      : "border-white/20 bg-white/10"
                  }`}
                />

                {/* Date label */}
                <div
                  className={`text-[11px] text-center leading-snug px-1 transition-colors duration-200 ${
                    i === selectedIndex
                      ? "text-cream font-semibold"
                      : "text-white/50"
                  }`}
                >
                  {item.date}
                </div>
              </button>

              {/* Connecting line */}
              {i < TIMELINE_ITEMS.length - 1 && (
                <div
                  className="h-[2px] flex-shrink-0"
                  style={{
                    width: "48px",
                    backgroundColor:
                      i < selectedIndex
                        ? "#D4B978"
                        : "rgba(255,255,255,0.12)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-[16px] p-5 transition-all duration-200">
        <div className="flex items-start gap-3">
          <div
            className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${
              selected.dotType === "active"
                ? "bg-result-green"
                : selected.dotType === "gold"
                ? "bg-gold"
                : "bg-white/30"
            }`}
          />
          <div>
            <div className="text-[12px] text-white/50 mb-1">{selected.date}</div>
            <div className="text-[16px] font-semibold text-cream mb-1">
              {selected.event}
            </div>
            {"note" in selected && selected.note && (
              <div className="text-[13px] text-white/50">{selected.note}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
