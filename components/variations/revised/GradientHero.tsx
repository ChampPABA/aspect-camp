"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  GraduationCap,
  Download,
} from "lucide-react";
import { HERO_BULLETS, STATS, LINE_URL } from "@/lib/constants";
import TypewriterText from "@/components/ui/TypewriterText";
import ShineButton from "@/components/ui/ShineButton";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const bulletIcons = [CheckCircle, Award, GraduationCap] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GradientHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift opacity-80"
        style={{
          background:
            "linear-gradient(-45deg, #0F2A4A, #050D1A, #0F2A4A, rgba(212,185,120,0.12))",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[var(--container-max)] mx-auto px-[5%] py-32 md:py-40"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-[13px] tracking-wide font-medium">
            Healthcare Innovation Camp &middot; ม.4–6
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.15] mb-4 max-w-4xl font-bold"
        >
          <TypewriterText
            text="ไม่แน่ใจว่าอยากเป็นหมอ?"
            speed={0.06}
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-sans text-2xl sm:text-3xl md:text-4xl text-gold leading-tight mb-3 font-semibold"
        >
          3 วันนี้จะตอบคำถามนั้น
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-cream/60 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          ค่าย Healthcare Innovation สำหรับนักเรียน ม.4-6 ที่รู้ว่าชอบวิทยาศาสตร์
          — แต่ยังไม่แน่ใจว่าแพทย์ใช่ไหม
        </motion.p>

        {/* Icon bullet list */}
        <motion.ul variants={stagger} className="space-y-3 mb-10">
          {HERO_BULLETS.map((text, i) => {
            const Icon = bulletIcons[i];
            return (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 text-cream/80"
              >
                <Icon size={22} className="text-gold mt-0.5 shrink-0" />
                <span className="text-base sm:text-lg">{text}</span>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-14">
          <MagneticWrapper>
            <ShineButton href={LINE_URL} size="lg">
              สมัครเข้าร่วมค่าย →
            </ShineButton>
          </MagneticWrapper>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-white border border-white/30 hover:bg-white/8 hover:border-white/60 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
          >
            ดูรายละเอียด
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[14px] text-cream/50 hover:text-cream/80 transition-colors"
          >
            <Download size={16} />
            Download Brochure
          </a>
        </motion.div>

        {/* Stats cards */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-6 py-5 text-center"
            >
              <div className="text-3xl font-heading text-gold mb-1">
{"isText" in stat ? (
                  stat.value
                ) : (
                  <AnimatedCounter
                    target={stat.value}
                    duration={1200}
                  />
                )}
              </div>
              <div className="text-cream/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
