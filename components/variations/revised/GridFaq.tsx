"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function GridFaq() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => FAQ_ITEMS.filter(
    (item) =>
      item.q.toLowerCase().includes(query.toLowerCase()) ||
      item.a.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  return (
    <section id="faq" className="bg-navy-deep py-20 px-[5%]">
      <div className="max-w-[var(--container-max)] mx-auto">
        {/* Heading */}
        <motion.p
          className="text-gold text-[12px] tracking-[0.25em] uppercase text-center mb-4 font-sans font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          คำถามที่พบบ่อย
        </motion.p>

        <motion.h2
          className="font-sans font-bold text-3xl md:text-5xl text-cream text-center mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ตอบทุกข้อสงสัย
        </motion.h2>

        {/* Search bar */}
        <motion.div
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              type="text"
              placeholder="ค้นหาคำถาม..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenIndex(null);
              }}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-cream text-[14px] placeholder:text-white/25 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>
        </motion.div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: isOpen
                    ? "1px solid rgba(212,185,120,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start gap-3 px-5 py-4 text-left cursor-pointer hover:bg-white/3 transition-colors"
                >
                  <HelpCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="flex-1 text-cream/80 text-[14px] font-medium leading-snug">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-0.5"
                  >
                    <ChevronDown size={16} className="text-white/30" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 pl-11 text-[13px] text-cream/50 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-cream/30 text-[14px] mt-8">
            ไม่พบคำถามที่ตรงกับ &quot;{query}&quot;
          </p>
        )}
      </div>
    </section>
  );
}
