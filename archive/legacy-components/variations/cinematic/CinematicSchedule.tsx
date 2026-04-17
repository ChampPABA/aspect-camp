"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCHEDULE, SCHEDULE_TABS } from "@/lib/constants";

const badgeColors = {
  w: "bg-navy text-cream",
  l: "bg-luminous-blue/20 text-luminous-blue",
  p: "bg-gradient-to-r from-gold-from to-gold-to text-navy",
};

export default function CinematicSchedule() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleTabChange(index: number) {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  }

  const tabs = Array.from(SCHEDULE_TABS);

  return (
    <section className="min-h-screen bg-cream-muted flex flex-col py-20 px-[5%]">
      <div className="max-w-3xl mx-auto w-full flex-1 flex flex-col">
        {/* Heading */}
        <motion.p
          className="text-navy/50 text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-[var(--font-hook)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ตารางกิจกรรม
        </motion.p>

        <motion.h2
          className="font-[var(--font-heading)] text-4xl md:text-5xl text-navy text-center mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          3 วันที่เปลี่ยนชีวิต
        </motion.h2>

        {/* Tabs */}
        <div className="flex gap-1 bg-navy/8 rounded-full p-1 mb-8 relative">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => handleTabChange(i)}
              className={`relative flex-1 py-2.5 px-3 rounded-full text-[13px] font-[var(--font-hook)] font-medium transition-colors duration-200 z-10 cursor-pointer ${
                activeTab === i ? "text-navy" : "text-navy/50 hover:text-navy/80"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-3"
            >
              {SCHEDULE[activeTab]?.map((item, j) => (
                <div
                  key={j}
                  className={`flex items-start gap-4 rounded-xl px-5 py-4 ${
                    item.isBreak
                      ? "bg-navy/5 border border-dashed border-navy/15"
                      : "bg-white border border-black/6 shadow-sm"
                  }`}
                >
                  {/* Time */}
                  <span className="text-[12px] text-navy/50 font-[var(--font-hook)] whitespace-nowrap pt-0.5 min-w-[100px]">
                    {item.time}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-[var(--font-hook)] text-[15px] font-medium leading-snug ${
                        item.isBreak ? "text-navy/50" : "text-navy"
                      }`}
                    >
                      {item.event}
                    </p>
                    {"desc" in item && item.desc && (
                      <p className="text-navy/60 text-[13px] mt-0.5">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {/* Badge */}
                  {"badge" in item && item.badge && (
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                        badgeColors[item.badge.type] ?? "bg-navy/10 text-navy"
                      }`}
                    >
                      {item.badge.label}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
