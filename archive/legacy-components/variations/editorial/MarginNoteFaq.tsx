"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export default function MarginNoteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream py-20 px-[5%]" id="faq">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14">
          <div className="text-[11px] uppercase tracking-[0.15em] text-gold font-medium mb-3">
            FAQ
          </div>
          <h2
            className="font-[var(--font-heading)] font-bold text-navy"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            คำถามที่พบบ่อย
          </h2>
        </div>

        <div className="divide-y divide-navy/8">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  className="w-full text-left cursor-pointer py-6"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {/* Two-column layout: question (40%) | answer (60%) | chevron */}
                  <div className="flex items-start gap-6">
                    <div className="flex-1 grid md:grid-cols-[2fr_3fr] gap-6">
                      {/* Question — left col ~40% */}
                      <div
                        className="font-[var(--font-heading)] text-[18px] font-semibold text-navy leading-snug pt-0.5"
                      >
                        {item.q}
                      </div>

                      {/* Answer — right col ~60%, collapsed on mobile unless open */}
                      <div
                        className={`text-[14px] text-gray-text leading-relaxed max-w-[520px] ${
                          isOpen ? "block" : "hidden md:block"
                        } ${!isOpen ? "line-clamp-1 text-gray-muted" : ""}`}
                      >
                        {item.a}
                      </div>
                    </div>

                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-navy/30 mt-1.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Mobile expanded answer */}
                {isOpen && (
                  <div className="md:hidden pb-5 text-[14px] text-gray-text leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
