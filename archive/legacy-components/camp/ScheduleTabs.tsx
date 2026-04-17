"use client";

import { useState } from "react";
import { SCHEDULE, SCHEDULE_TABS } from "@/lib/constants";

const badgeColors = {
  w: "bg-result-green/10 text-[#085041]",
  l: "bg-cream-muted text-gray-muted",
  p: "bg-gold-from/10 text-[#633806]",
};

export default function ScheduleTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-1 mb-7 bg-cream-muted rounded-[12px] p-1">
        {SCHEDULE_TABS.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 py-2.5 px-3 rounded-[8px] text-[14px] font-medium cursor-pointer transition-all duration-150 ${
              active === i
                ? "bg-white text-gray-text shadow-sm"
                : "bg-transparent text-gray-subtle"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        {SCHEDULE[active].map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[100px_1fr] gap-4 py-3.5 border-b border-black/8 items-start last:border-b-0 ${
              item.isBreak ? "bg-cream-muted rounded-[8px] px-3" : ""
            }`}
          >
            <div className="text-[13px] text-gray-muted pt-0.5">
              {item.time}
            </div>
            <div>
              <div
                className={`text-[14px] font-medium ${
                  item.isBreak ? "text-gray-muted font-normal" : "text-gray-text"
                }`}
              >
                {item.event}
                {item.badge && (
                  <span
                    className={`inline-block text-[11px] px-2 py-0.5 rounded-full ml-2 ${
                      badgeColors[item.badge.type]
                    }`}
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
  );
}
