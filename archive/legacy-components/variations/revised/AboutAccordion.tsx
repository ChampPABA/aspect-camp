"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Wrench, Award, Compass, Lightbulb, Brain, Users } from "lucide-react";
import Image from "next/image";
import { HOOKS, PILLARS } from "@/lib/constants";

const hookIcons = [Wrench, Award, Compass] as const;
const pillarIcons = [Lightbulb, Brain, Users] as const;

const campImages = [
  "/images/camp/P1010350.webp",
  "/images/camp/P1010220.webp",
  "/images/camp/P1010465.webp",
  "/images/camp/P1010534.webp",
  "/images/camp/P1010734.webp",
  "/images/camp/P1010838.webp",
  "/images/camp/_DSC0055.webp",
  "/images/camp/_DSC0132.webp",
];

type AccordionEntry = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const items: AccordionEntry[] = [
  ...HOOKS.map((h, i) => ({
    title: h.title,
    desc: `${h.desc}\n${h.usp}`,
    icon: hookIcons[i],
  })),
  ...PILLARS.map((p, i) => ({
    title: p.name,
    desc: p.desc,
    icon: pillarIcons[i],
  })),
];

export default function AboutAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % campImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-cream py-20 px-[5%]">
      <div className="max-w-[var(--container-max)] mx-auto">
        <motion.p
          className="text-gold text-xs tracking-[0.25em] uppercase mb-4 font-sans font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          เกี่ยวกับค่าย
        </motion.p>

        <motion.h2
          className="font-sans font-bold text-3xl md:text-5xl text-navy mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          ทำไมต้องค่ายนี้?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image slideshow */}
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={campImages[currentImage]}
                  alt={`Camp activity ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {campImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === currentImage ? "bg-gold" : "bg-white/40"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-2">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  className="border border-navy/10 rounded-xl overflow-hidden bg-white/60"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer hover:bg-navy/3 transition-colors"
                  >
                    <Icon size={20} className="text-gold shrink-0" />
                    <span className="flex-1 font-semibold text-navy text-base">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className="text-navy/40" />
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
                        <p className="px-5 pb-4 text-base text-gray-text leading-relaxed whitespace-pre-line">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
