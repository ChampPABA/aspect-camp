"use client";

import { useState } from "react";
import { SCHEDULE } from "@/lib/constants";

export default function ScheduleTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const day = SCHEDULE[activeIdx];

  return (
    <section
      id="schedule"
      className="schedule-section sec-wrap bg-cream-muted text-navy-deep"
    >
      <div className="sec-head">
        <div className="eyebrow" style={{ color: "var(--color-navy)" }}>
          ตารางค่าย
        </div>
        <h2 className="text-navy-deep">3 วันที่จะเปลี่ยนมุมมองของน้อง</h2>
        <p className="text-navy-deep/60">1–3 พฤษภาคม 2569 · Uniserv มช.</p>
      </div>

      <div
        className="flex gap-2 justify-center mb-12 flex-wrap"
        role="tablist"
        aria-label="Schedule days"
      >
        {SCHEDULE.map((d, i) => (
          <button
            key={d.tabLabel}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            onClick={() => setActiveIdx(i)}
            className={`px-7 py-3 rounded-full text-[15px] font-semibold cursor-pointer border-2 transition-all ${
              i === activeIdx
                ? "bg-navy-deep text-cream border-navy-deep"
                : "border-transparent text-navy-deep/50 bg-navy-deep/5 hover:bg-navy-deep/10"
            }`}
          >
            {d.tabLabel}
          </button>
        ))}
      </div>

      <div className="max-w-[780px] mx-auto">
        <h3
          key={day.heading}
          className="text-2xl font-bold text-navy-deep mb-7 pb-4 border-b-2 border-navy-deep/15"
        >
          {day.heading}
        </h3>
        {day.items.map((item) => (
          <div
            key={`${day.heading}-${item.time}-${item.title}`}
            className="flex gap-6 py-[22px] border-b border-navy-deep/10 items-start"
          >
            <div className="text-[16px] font-bold text-navy min-w-[120px] shrink-0 pt-0.5 font-variant-numeric tabular-nums">
              {item.time}
            </div>
            <div>
              <h4 className="text-[20px] font-bold text-navy-deep mb-1.5 leading-snug">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-[17px] text-navy-deep/60 leading-[1.65]">
                  {item.desc}
                </p>
              )}
              {item.badge && (
                <span className={`sched-badge ${item.badge.kind}`}>
                  {item.badge.label}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
