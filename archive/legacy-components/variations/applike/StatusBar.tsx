"use client";

import { STATS, EARLY_BIRD_DEADLINE } from "@/lib/constants";

export default function StatusBar() {
  return (
    <div className="w-full bg-navy-deep py-4 px-[5%] border-b border-white/8">
      <div className="mx-auto max-w-[1100px] flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
        {/* Live indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-result-green animate-pulse inline-block" />
          <span className="text-white/70 font-[var(--font-hook)]">รับสมัครอยู่</span>
        </div>

        <span className="text-white/20 hidden sm:inline">|</span>

        {/* Stats */}
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-x-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-white font-semibold font-[var(--font-hook)]">
                {stat.value}
              </span>
              <span className="text-white/50">{stat.label}</span>
            </div>
            {i < STATS.length - 1 && (
              <span className="text-white/20 hidden sm:inline">|</span>
            )}
          </div>
        ))}

        <span className="text-white/20 hidden sm:inline">|</span>

        {/* Early Bird */}
        <div className="flex items-center gap-1.5">
          <span className="text-white/50">Early Bird ถึง</span>
          <span className="text-gold font-semibold font-[var(--font-hook)]">
            {EARLY_BIRD_DEADLINE}
          </span>
        </div>
      </div>
    </div>
  );
}
