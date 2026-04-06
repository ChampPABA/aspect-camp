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

  const tabs = Array.from(SCHEDULE_TABS);

  return (
    <section id="schedule" className="bg-cream-muted py-20 px-[5%]">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.p
          className="text-navy/50 text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-hook"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          ตารางกิจกรรม
        </motion.p>

        <motion.h2
          className="font-heading text-3xl md:text-5xl text-navy text-center mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          3 วันที่เปลี่ยนชีวิต
        </motion.h2>

        {/* Segmented control */}
        <div className="flex gap-1 bg-navy/8 rounded-full p-1 mb-10 relative">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => handleTabChange(i)}
              className={`relative flex-1 py-2.5 px-3 rounded-full text-[13px] font-hook font-medium transition-colors duration-200 z-10 cursor-pointer ${
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
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-navy/10" />

                <div className="space-y-1">
                  {SCHEDULE[activeTab].map((item, i) => {
                    const Icon = item.isBreak
                      ? Coffee
                      : item.badge
                        ? badgeIcons[item.badge.type]
                        : null;
                    return (
                      <div key={i} className="flex items-start gap-4 relative pl-10 py-3">
                        {/* Timeline dot */}
                        <div
                          className={`absolute left-3 top-4.5 w-3 h-3 rounded-full border-2 ${
                            item.isBreak
                              ? "bg-cream-muted border-navy/20"
                              : "bg-gold border-gold"
                          }`}
                        />

                        {/* Time */}
                        <span className="text-[13px] text-navy/40 font-mono w-[100px] shrink-0 pt-0.5">
                          {item.time}
                        </span>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            {Icon && (
                              <Icon
                                size={14}
                                className={item.isBreak ? "text-navy/30" : "text-gold"}
                              />
                            )}
                            <span
                              className={`text-[15px] font-medium ${
                                item.isBreak ? "text-navy/40 italic" : "text-navy"
                              }`}
                            >
                              {item.event}
                            </span>
                            {item.badge && (
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                  badgeColors[item.badge.type]
                                }`}
                              >
                                {item.badge.label}
                              </span>
                            )}
                          </div>
                          {item.desc && (
                            <p className="text-[13px] text-navy/50 mt-1">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
