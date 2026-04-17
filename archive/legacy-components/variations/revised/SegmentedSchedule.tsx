"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, BookOpen, Presentation, Coffee } from "lucide-react";
import { SCHEDULE, SCHEDULE_TABS } from "@/lib/constants";

const badgeColors = {
  w: "bg-navy text-cream",
  l: "bg-luminous-blue/20 text-luminous-blue",
  p: "bg-gradient-to-r from-gold-from to-gold-to text-navy",
};

const badgeIcons: Record<string, React.ElementType> = {
  w: Wrench,
  l: BookOpen,
  p: Presentation,
};

export default function SegmentedSchedule() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleTabChange(index: number) {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  }

  return (
    <section id="schedule" className="bg-cream-muted py-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-gold text-xs tracking-[0.25em] uppercase text-center mb-4 font-sans font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          ตารางกิจกรรม
        </motion.p>

        <motion.h2
          className="font-sans font-bold text-3xl md:text-5xl text-navy text-center mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          3 วันที่เปลี่ยนชีวิต
        </motion.h2>

        {/* Segmented control — font-sans for Thai labels */}
        <div className="flex gap-1 bg-navy/8 rounded-full p-1.5 mb-10 relative">
          {SCHEDULE_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => handleTabChange(i)}
              className={`relative flex-1 py-3 px-4 rounded-full text-sm font-sans font-semibold transition-colors duration-200 z-10 cursor-pointer ${
                activeTab === i ? "text-navy" : "text-navy/50 hover:text-navy/80"
              }`}
            >
              {activeTab === i && (
                <motion.div
                  layoutId="schedule-tab"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="space-y-0">
                {SCHEDULE[activeTab].map((item, i) => {
                  const Icon = item.isBreak
                    ? Coffee
                    : item.badge
                      ? badgeIcons[item.badge.type]
                      : null;
                  return (
                    <div
                      key={i}
                      className={`flex items-start gap-4 px-5 py-4 rounded-xl ${
                        item.isBreak
                          ? "bg-navy/3"
                          : i % 2 === 0
                            ? "bg-white/40"
                            : ""
                      }`}
                    >
                      {/* Time */}
                      <div className="w-[120px] shrink-0 pt-0.5">
                        <span className="text-sm font-sans font-medium text-navy/60">
                          {item.time}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          {Icon && (
                            <Icon
                              size={16}
                              className={item.isBreak ? "text-navy/30" : "text-gold"}
                            />
                          )}
                          <span
                            className={`text-base font-sans ${
                              item.isBreak
                                ? "text-navy/40 font-normal italic"
                                : "text-navy font-semibold"
                            }`}
                          >
                            {item.event}
                          </span>
                          {item.badge && (
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                badgeColors[item.badge.type]
                              }`}
                            >
                              {item.badge.label}
                            </span>
                          )}
                        </div>
                        {item.desc && (
                          <p className="text-sm text-navy/50 mt-1.5 leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
