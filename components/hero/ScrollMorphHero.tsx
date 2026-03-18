"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Dna,
  Microscope,
  Brain,
  Pill,
  Cross,
  FlaskConical,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  Activity,
  Thermometer,
  Eye,
  Bone,
  Scan,
  TestTubes,
  Hospital,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { HERO_BULLETS, LINE_URL } from "@/lib/constants";

// --- Types ---
type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

// --- Constants ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const TOTAL_CARDS = 20;
const MAX_SCROLL = 3000;

const ICON_CARDS: { icon: LucideIcon; label: string }[] = [
  { icon: Stethoscope, label: "Explore" },
  { icon: Microscope, label: "Discover" },
  { icon: Dna, label: "Innovate" },
  { icon: HeartPulse, label: "Care" },
  { icon: Brain, label: "Insight" },
  { icon: FlaskConical, label: "Research" },
  { icon: GraduationCap, label: "Excel" },
  { icon: Lightbulb, label: "Inspire" },
  { icon: Syringe, label: "Precise" },
  { icon: Activity, label: "Impact" },
  { icon: Pill, label: "Heal" },
  { icon: ClipboardList, label: "Certify" },
  { icon: Thermometer, label: "Assess" },
  { icon: Eye, label: "Vision" },
  { icon: Bone, label: "Anatomy" },
  { icon: Scan, label: "Analyze" },
  { icon: TestTubes, label: "Test" },
  { icon: Hospital, label: "Serve" },
  { icon: Cross, label: "Assurance" },
  { icon: UserRoundCheck, label: "Decide" },
];

// Background camp photos for hero
const HERO_PHOTOS = [
  "/images/camp/_DSC0055.webp",
  "/images/camp/P1010350.webp",
  "/images/camp/P1010534.webp",
];

// --- Helpers ---
const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

// --- FlipCard Component ---
function FlipCard({
  icon: Icon,
  label,
  x,
  y,
  rotation,
  opacity,
  scale,
}: {
  icon: LucideIcon;
  label: string;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  scale: number;
}) {
  return (
    <motion.div
      animate={{ x, y, rotate: rotation, scale, opacity }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face — Medical Icon */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-lg shadow-lg bg-navy/80 border border-gold/30 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Icon className="w-8 h-8 text-cream group-hover:text-gold transition-colors" strokeWidth={1.5} />
        </div>

        {/* Back Face — Brand Keyword */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-lg shadow-lg bg-navy flex flex-col items-center justify-center p-2 border border-gold/40"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-[8px] font-bold text-gold uppercase tracking-wider text-center leading-tight break-all">
            {label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- Position Functions ---
function getScatterPositions(count: number) {
  // Seeded pseudo-random for SSR consistency
  const positions: { x: number; y: number; r: number }[] = [];
  for (let i = 0; i < count; i++) {
    const seed = ((i * 137 + 73) % 100) / 100; // deterministic 0-1
    const seed2 = ((i * 251 + 41) % 100) / 100;
    const seed3 = ((i * 89 + 17) % 100) / 100;
    positions.push({
      x: (seed - 0.5) * 1500,
      y: (seed2 - 0.5) * 1000,
      r: (seed3 - 0.5) * 180,
    });
  }
  return positions;
}

function getLinePositions(count: number) {
  const spacing = 70;
  const totalWidth = count * spacing;
  return Array.from({ length: count }, (_, i) => ({
    x: i * spacing - totalWidth / 2,
    y: 0,
    r: 0,
  }));
}

function getCirclePositions(count: number, radius: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360;
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
      r: angle + 90,
    };
  });
}

function getArcPositions(
  count: number,
  containerWidth: number,
  containerHeight: number
) {
  const isMobile = containerWidth < 768;
  const baseRadius = Math.min(containerWidth, containerHeight * 1.5);
  const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
  const arcApexY = containerHeight * (isMobile ? 0.35 : 0.25);
  const arcCenterY = arcApexY + arcRadius;
  const spreadAngle = isMobile ? 100 : 130;
  const startAngle = -90 - spreadAngle / 2;
  const step = spreadAngle / (count - 1);

  return Array.from({ length: count }, (_, i) => {
    const angleDeg = startAngle + i * step;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: Math.cos(angleRad) * arcRadius,
      y: Math.sin(angleRad) * arcRadius + arcCenterY,
      r: angleDeg + 90,
      scale: isMobile ? 1.4 : 1.8,
    };
  });
}

// --- Main Component ---
export default function ScrollMorphHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const virtualScroll = useMotionValue(0);
  const virtualScrollRef = useRef(0);
  const [unlocked, setUnlocked] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // Intro phase state
  const [phase, setPhase] = useState<AnimationPhase>("scatter");
  const [introComplete, setIntroComplete] = useState(false);

  // Container size for responsive arc
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Morph values from scroll
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  // --- Container Size ---
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const update = () => {
      setContainerSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    update();

    const observer = new ResizeObserver(() => update());
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // --- Timed Intro Sequence ---
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 500);
    const t2 = setTimeout(() => setPhase("circle"), 2500);
    const t3 = setTimeout(() => {
      setIntroComplete(true);
      setPhase("bottom-strip");
    }, 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // --- Virtual Scroll ---
  const smoothVirtual = useSpring(virtualScroll, { stiffness: 60, damping: 25 });

  // Morph: circle → arc (scroll 0-600)
  const morphProgress = useTransform(smoothVirtual, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  // Rotation: shuffle arc (scroll 600-3000)
  const scrollRotate = useTransform(smoothVirtual, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  // Subscribe to motion values
  useEffect(() => {
    const unsub1 = smoothMorph.on("change", setMorphValue);
    const unsub2 = smoothScrollRotate.on("change", setRotateValue);
    const unsub3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  // Text opacity — fades in as arc forms
  const textOpacity = useTransform(smoothVirtual, [0, 480, 600], [0.5, 0.8, 1]);

  // --- Mouse Parallax Handler ---
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // --- Wheel Handler ---
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Block scroll during intro
      if (!introComplete) {
        e.preventDefault();
        return;
      }

      if (unlocked) {
        // Re-lock when user scrolls back to top
        if (window.scrollY === 0 && e.deltaY < 0) {
          if (virtualScrollRef.current > 0) {
            e.preventDefault();
            const newVal = Math.max(virtualScrollRef.current + e.deltaY * 1.5, 0);
            virtualScrollRef.current = newVal;
            virtualScroll.set(newVal);
            if (newVal < MAX_SCROLL * 0.95) {
              setUnlocked(false);
            }
          }
        }
        return;
      }

      e.preventDefault();
      const newVal = Math.min(
        Math.max(virtualScrollRef.current + e.deltaY * 1.5, 0),
        MAX_SCROLL
      );
      virtualScrollRef.current = newVal;
      virtualScroll.set(newVal);

      if (newVal >= MAX_SCROLL) {
        setUnlocked(true);
      }
    },
    [introComplete, unlocked, virtualScroll]
  );

  // --- Touch Handlers ---
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!introComplete) {
        e.preventDefault();
        return;
      }

      if (unlocked) {
        if (window.scrollY === 0) {
          const deltaY = touchStartY.current - e.touches[0].clientY;
          if (deltaY < 0 && virtualScrollRef.current > 0) {
            e.preventDefault();
            const newVal = Math.max(virtualScrollRef.current + deltaY * 2, 0);
            virtualScrollRef.current = newVal;
            virtualScroll.set(newVal);
            if (newVal < MAX_SCROLL * 0.95) {
              setUnlocked(false);
            }
          }
        }
        touchStartY.current = e.touches[0].clientY;
        return;
      }

      e.preventDefault();
      const deltaY = touchStartY.current - e.touches[0].clientY;
      touchStartY.current = e.touches[0].clientY;
      const newVal = Math.min(
        Math.max(virtualScrollRef.current + deltaY * 2, 0),
        MAX_SCROLL
      );
      virtualScrollRef.current = newVal;
      virtualScroll.set(newVal);

      if (newVal >= MAX_SCROLL) {
        setUnlocked(true);
      }
    },
    [introComplete, unlocked, virtualScroll]
  );

  // Attach listeners
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  // --- Background Photo Rotation ---
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % HERO_PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- Pre-compute Positions ---
  const scatterPositions = useMemo(() => getScatterPositions(TOTAL_CARDS), []);
  const linePositions = useMemo(() => getLinePositions(TOTAL_CARDS), []);

  const circleRadius = useMemo(() => {
    if (containerSize.w === 0) return 200;
    const minDim = Math.min(containerSize.w, containerSize.h);
    return Math.min(minDim * 0.35, 350);
  }, [containerSize]);

  const circlePositions = useMemo(
    () => getCirclePositions(TOTAL_CARDS, circleRadius),
    [circleRadius]
  );

  const arcPositions = useMemo(
    () =>
      containerSize.w > 0
        ? getArcPositions(TOTAL_CARDS, containerSize.w, containerSize.h)
        : null,
    [containerSize]
  );

  // --- Compute Card Position ---
  function getCardTarget(i: number) {
    // During intro phases
    if (phase === "scatter") {
      return {
        x: scatterPositions[i].x,
        y: scatterPositions[i].y,
        rotation: scatterPositions[i].r,
        scale: 0.6,
        opacity: 0,
      };
    }

    if (phase === "line") {
      return {
        x: linePositions[i].x,
        y: linePositions[i].y,
        rotation: 0,
        scale: 1,
        opacity: 1,
      };
    }

    if (phase === "circle" || !arcPositions) {
      return {
        x: circlePositions[i].x,
        y: circlePositions[i].y,
        rotation: circlePositions[i].r,
        scale: 1,
        opacity: 1,
      };
    }

    // bottom-strip: morph from circle → arc, then shuffle
    const isMobile = containerSize.w < 768;
    const spreadAngle = isMobile ? 100 : 130;

    // Scroll rotation progress
    const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
    const maxRotation = spreadAngle * 0.8;
    const boundedRotation = -scrollProgress * maxRotation;

    // Recalculate arc position with scroll rotation applied
    const baseRadius = Math.min(containerSize.w, containerSize.h * 1.5);
    const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
    const arcApexY = containerSize.h * (isMobile ? 0.35 : 0.25);
    const arcCenterY = arcApexY + arcRadius;
    const startAngle = -90 - spreadAngle / 2;
    const step = spreadAngle / (TOTAL_CARDS - 1);

    const currentArcAngle = startAngle + i * step + boundedRotation;
    const arcRad = (currentArcAngle * Math.PI) / 180;

    const arcX = Math.cos(arcRad) * arcRadius + parallaxValue;
    const arcY = Math.sin(arcRad) * arcRadius + arcCenterY;
    const arcR = currentArcAngle + 90;
    const arcScale = isMobile ? 1.4 : 1.8;

    // Interpolate circle → arc based on morphValue
    return {
      x: lerp(circlePositions[i].x, arcX, morphValue),
      y: lerp(circlePositions[i].y, arcY, morphValue),
      rotation: lerp(circlePositions[i].r, arcR, morphValue),
      scale: lerp(1, arcScale, morphValue),
      opacity: 1,
    };
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-navy overflow-hidden"
    >
      {/* Background camp photos — subtle crossfade */}
      {HERO_PHOTOS.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === bgIndex ? 0.45 : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Navy overlay — reduced for better photo visibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,42,74,0.40) 0%, rgba(15,42,74,0.55) 50%, rgba(15,42,74,0.70) 100%)",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(212,185,120,0.08) 0%, transparent 70%)",
        }}
      />

      {/* FlipCards — centered morph container */}
      <div className="absolute inset-0 flex items-center justify-center z-[1]">
        {ICON_CARDS.map((card, i) => {
          const target = getCardTarget(i);
          return (
            <FlipCard
              key={i}
              icon={card.icon}
              label={card.label}
              x={target.x}
              y={target.y}
              rotation={target.rotation}
              opacity={target.opacity}
              scale={target.scale}
            />
          );
        })}
      </div>

      {/* Bottom gradient to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-cream pointer-events-none z-10" />

      {/* Hero content */}
      <motion.div
        className="relative z-20 min-h-screen flex flex-col justify-center px-[5%] pointer-events-none"
        style={{ opacity: textOpacity }}
      >
        <div className="max-w-[860px] pt-24 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/35 text-gold rounded-full px-4 py-1.5 text-[13px] mb-7">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse-dot" />
            รับสมัครแล้ววันนี้ · เชียงใหม่ · 20–22 เมษายน 2568
          </div>

          {/* Title */}
          <h1 className="font-[var(--font-hook)] text-[clamp(52px,8vw,96px)] font-bold text-white leading-[0.95] tracking-[-0.035em] mb-2.5">
            <span className="block text-[clamp(20px,3vw,36px)] font-normal tracking-[0.18em] text-white/55 mb-2 uppercase">
              Path to
            </span>
            MED<span className="text-gold">.</span>
          </h1>

          {/* Partner pills */}
          <div className="flex items-center gap-2.5 my-4">
            <span className="text-[11px] text-white/40 uppercase tracking-[0.1em]">
              ร่วมกับ
            </span>
            {["KMUTT", "SET", "AI Skill Training"].map((p) => (
              <span
                key={p}
                className="bg-white/8 border border-white/15 rounded-full px-3 py-1 text-[12px] font-medium text-white/75"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-[clamp(13px,1.8vw,16px)] text-white/50 tracking-[0.2em] uppercase mb-5">
            Explore <span className="mx-3 opacity-30">·</span> Discover{" "}
            <span className="mx-3 opacity-30">·</span> Decide
          </p>

          {/* Headline */}
          <h2 className="text-[clamp(24px,4vw,44px)] font-semibold text-white leading-[1.25] mb-2">
            ไม่แน่ใจว่าอยากเป็นหมอ?
            <br />
            <span className="text-gold">3 วันนี้จะตอบคำถามนั้น</span>
          </h2>

          {/* Sub */}
          <p className="text-[clamp(14px,1.8vw,17px)] text-white/55 leading-[1.7] mb-7 max-w-[600px]">
            ค่าย Healthcare Innovation สำหรับนักเรียน ม.4–ม.6
            <br />
            ที่รู้ว่าชอบวิทยาศาสตร์ — แต่ยังไม่แน่ใจว่าแพทย์ใช่ไหม
          </p>

          {/* Bullets */}
          <div className="flex flex-col gap-2 mb-9">
            {HERO_BULLETS.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-[15px] text-white/70"
              >
                <span className="w-[18px] h-[18px] rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                </span>
                {b}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap pointer-events-auto">
            <Button href={LINE_URL} size="lg">
              สมัครเข้าร่วมค่าย →
            </Button>
            <Button href="#about" variant="outline-white">
              ดูรายละเอียด
            </Button>
            <Button href="#" variant="outline-white">
              Download Brochure
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-white/10 flex gap-9 flex-wrap">
            {[
              { value: "3", label: "วัน เต็ม" },
              { value: "60", label: "ที่นั่ง (จำกัด)" },
              { value: "3", label: "Credentials หลังจบ" },
              { value: "ม.4–6", label: "ระดับชั้น" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[var(--font-heading)] text-[32px] font-bold text-white leading-none">
                  {s.value}
                </div>
                <div className="text-xs text-white/45 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — shows after intro, before unlock */}
      {introComplete && !unlocked && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center">
          <div className="text-white/30 text-[12px] mb-2">Scroll to explore</div>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gold/60 rounded-full mt-1.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
