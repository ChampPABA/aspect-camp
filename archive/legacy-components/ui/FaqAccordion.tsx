"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-black/8 rounded-[12px] overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={`flex items-center justify-between w-full px-5 py-[18px] text-left text-[15px] font-medium bg-white hover:bg-cream-muted transition-colors cursor-pointer ${
                isOpen ? "text-navy" : "text-gray-text"
              }`}
            >
              {item.q}
              <Plus
                size={16}
                className={`shrink-0 ml-3 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-250 ease-in-out ${
                isOpen ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <div
                className={`px-5 text-[14px] text-gray-muted leading-[1.75] border-t border-black/8 ${
                  isOpen ? "py-4" : "py-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
