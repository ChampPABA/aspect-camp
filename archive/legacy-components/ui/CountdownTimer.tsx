"use client";

import { useState, useEffect } from "react";
import { CAMP_DEADLINE, SEATS_LEFT, LINE_URL } from "@/lib/constants";
import Button from "./Button";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    function update() {
      const diff = CAMP_DEADLINE.getTime() - Date.now();
      if (diff <= 0) {
        setExpired(true);
        return;
      }
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (expired) return null;

  const units = [
    { value: timeLeft.d, label: "วัน" },
    { value: timeLeft.h, label: "ชั่วโมง" },
    { value: timeLeft.m, label: "นาที" },
    { value: timeLeft.s, label: "วินาที" },
  ];

  return (
    <section className="bg-[#0E1F3A] py-9 px-[5%]">
      <div className="text-center">
        <p className="text-[13px] text-white/50 uppercase tracking-[0.12em] mb-5">
          ⏳ ปิดรับสมัครใน
        </p>
        <div className="flex items-center gap-1.5 justify-center mb-4">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-1.5">
              <div className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 min-w-[80px] text-center">
                <div className="font-[var(--font-heading)] text-[42px] font-bold text-gold-to leading-none">
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="text-[11px] text-white/35 mt-1">{u.label}</div>
              </div>
              {i < 3 && (
                <span className="text-[32px] text-white/15 font-light pb-5">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="inline-flex items-center gap-1.5 bg-risk-red/10 border border-risk-red/20 rounded-full px-3.5 py-1.5 text-[13px] text-[#F09595] mb-4">
          <span className="w-1.5 h-1.5 bg-risk-red rounded-full animate-pulse-dot" />
          เหลือเพียง {SEATS_LEFT} ที่นั่ง — เต็มแล้วปิดทันที
        </div>
        <div>
          <Button href={LINE_URL}>สมัครก่อนเต็ม →</Button>
        </div>
      </div>
    </section>
  );
}
