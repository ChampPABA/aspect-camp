"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function SearchableFaq() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = FAQ_ITEMS.filter((item) => {
    const q = query.toLowerCase();
    return item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q);
  });

  return (
    <div>
      {/* Search input */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="ค้นหาคำถาม..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpenIndex(null);
          }}
          className="w-full bg-white border border-black/8 rounded-full px-5 py-3 text-[14px] text-gray-text placeholder:text-gray-muted outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/8 transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-muted hover:text-gray-text transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10 text-gray-muted text-[14px] italic"
          >
            ไม่พบคำถามที่ตรงกัน
          </motion.div>
        ) : (
          <div className="space-y-2">
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="border border-black/8 rounded-[12px] overflow-hidden bg-white"
                >
                  {/* Question */}
                  <button
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-black/2 transition-colors duration-150"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-[14px] font-semibold text-gray-text">
                      {item.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full border border-black/10 text-[11px] text-gray-muted transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 text-[14px] text-gray-muted leading-relaxed border-t border-black/5 pt-3">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
