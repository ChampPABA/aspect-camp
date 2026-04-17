"use client";

import { useState } from "react";
import { SPEAKERS } from "@/lib/constants";

export default function SpeakerRow() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto pb-2 -mx-1 px-1">
      <div className="flex gap-4" style={{ minWidth: "max-content" }}>
        {SPEAKERS.map((speaker, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[180px] min-w-[180px]"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`rounded-[16px] p-5 flex flex-col items-center text-center transition-all duration-200 ${
                speaker.isPlaceholder
                  ? "border border-dashed border-black/15 bg-gray-50"
                  : "border border-black/8 bg-white hover:border-navy/25 hover:shadow-md"
              }`}
            >
              {/* Avatar / initials */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-bold mb-3 font-[var(--font-hook)] ${
                  speaker.isPlaceholder
                    ? "bg-gray-100 text-gray-muted border border-dashed border-gray-300"
                    : "bg-navy text-cream"
                }`}
              >
                {speaker.initials}
              </div>

              {/* Name */}
              <div
                className={`text-[13px] font-semibold mb-1 leading-snug ${
                  speaker.isPlaceholder ? "text-gray-muted" : "text-gray-text"
                }`}
              >
                {speaker.name}
              </div>

              {/* Role */}
              <div
                className="text-[11px] text-gray-muted leading-snug whitespace-pre-line break-words"
              >
                {speaker.role}
              </div>

              {/* Institution badge */}
              <div className="mt-3">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${
                    speaker.isPlaceholder
                      ? "bg-gray-100 text-gray-muted"
                      : "bg-navy/8 text-navy"
                  }`}
                >
                  {speaker.institution}
                </span>
              </div>
            </div>

            {/* Tooltip overlay */}
            {hoveredIndex === i && !speaker.isPlaceholder && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-[220px]">
                <div className="bg-navy border border-white/15 rounded-[12px] p-4 shadow-lg">
                  <div className="text-[13px] font-semibold text-cream mb-1">
                    {speaker.name}
                  </div>
                  <div className="text-[12px] text-white/60 leading-snug whitespace-pre-line mb-2">
                    {speaker.role}
                  </div>
                  <div className="text-[11px] text-gold">{speaker.institution}</div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-navy border-r border-b border-white/15 rotate-45" />
                </div>
              </div>
            )}

            {/* Coming soon overlay for placeholders */}
            {hoveredIndex === i && speaker.isPlaceholder && (
              <div className="absolute inset-0 rounded-[16px] bg-navy/5 flex items-center justify-center">
                <span className="text-[11px] text-gray-muted italic">ประกาศเร็วๆ นี้</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
