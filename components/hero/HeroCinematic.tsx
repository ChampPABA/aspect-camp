"use client";

import { useEffect, useRef, useState } from "react";
import {
  HERO_BENEFITS,
  HERO_BENEFITS_TITLE,
  HERO_CTA,
  HERO_FRAME_BASE,
  HERO_FRAME_COUNT,
  HERO_INTRO,
  HERO_STATS,
  HERO_STATS_SUB,
  LINE_URL,
} from "@/lib/constants";

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const fi = (p: number, s: number, d: number) => clamp((p - s) / d, 0, 1);
const fo = (p: number, s: number, d: number) => clamp(1 - (p - s) / d, 0, 1);
const fw = (p: number, is: number, id: number, os: number, od: number) =>
  Math.min(fi(p, is, id), fo(p, os, od));
const lr = (a: number, b: number, t: number) => a + (b - a) * clamp(t, 0, 1);

const frameSrc = (i: number) =>
  `${HERO_FRAME_BASE}/frame_${String(i).padStart(3, "0")}.webp`;

export default function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef(0);
  const inViewRef = useRef(true);
  const dprRef = useRef(1);

  // Refs for slide elements to mutate opacity/transform without state-triggered renders
  const labelRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Preload frames (eager 1–10, lazy rest)
  useEffect(() => {
    // Eager: first 10 frames for LCP. Rest: chunk-loaded to avoid saturating HTTP/2.
    const frames: HTMLImageElement[] = [];
    const eagerCount = 10;
    const chunkSize = 8;
    let cancelled = false;

    const loadOne = (i: number) => {
      const img = new Image();
      img.src = frameSrc(i + 1);
      frames.push(img);
      return img;
    };

    for (let i = 0; i < eagerCount && i < HERO_FRAME_COUNT; i++) loadOne(i);
    framesRef.current = frames;

    const idle =
      (window as unknown as {
        requestIdleCallback?: (cb: () => void) => number;
      }).requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));

    const loadChunk = (start: number) => {
      if (cancelled || start >= HERO_FRAME_COUNT) return;
      const end = Math.min(start + chunkSize, HERO_FRAME_COUNT);
      for (let i = start; i < end; i++) loadOne(i);
      idle(() => loadChunk(end));
    };
    idle(() => loadChunk(eagerCount));

    return () => {
      cancelled = true;
      // Drop references so GC can reclaim; in-flight loads will resolve and be discarded.
      framesRef.current = [];
    };
  }, []);

  // Canvas sizing (DPR-aware)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastFrameRef.current = -1;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // IntersectionObserver gate
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        // Force a re-draw on re-entry so the current frame isn't skipped by the dedupe guard.
        if (entry.isIntersecting) lastFrameRef.current = -1;
      },
      { rootMargin: "0px" }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  // Main scroll loop
  useEffect(() => {
    if (reducedMotion) {
      // Show middle frame as static hero; set all slide elements visible-ish
      drawFrame(Math.floor(HERO_FRAME_COUNT / 2));
      setSlide("label", 1, 0);
      setSlide("h1", 1, 0);
      setSlide("sub", 1, 0);
      setSlide("stats", 0, 0);
      setSlide("benefits", 0, 0);
      setSlide("cta", 0, 0);
      return;
    }

    function update() {
      rafRef.current = 0;
      const section = sectionRef.current;
      if (!section || !inViewRef.current) return;

      const maxScroll = section.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const p = clamp(window.scrollY / maxScroll, 0, 1);

      drawFrame(Math.floor(p * (HERO_FRAME_COUNT - 1)));

      const s1 = fw(p, 0.02, 0.08, 0.26, 0.07);
      setSlide("label", s1, lr(20, 0, fi(p, 0.02, 0.1)));
      setSlide("h1", s1, lr(32, 0, fi(p, 0.02, 0.12)));
      setSlide("sub", s1, 0);

      const s2 = fw(p, 0.3, 0.08, 0.58, 0.07);
      setSlide("stats", s2, lr(28, 0, fi(p, 0.3, 0.1)));

      const s3 = fw(p, 0.63, 0.08, 0.8, 0.06);
      setSlide("benefits", s3, lr(28, 0, fi(p, 0.63, 0.1)));

      const s4 = fw(p, 0.82, 0.09, 0.97, 0.03);
      setSlide("cta", s4, lr(28, 0, fi(p, 0.82, 0.1)));
      if (ctaRef.current) {
        ctaRef.current.style.pointerEvents = s4 > 0.5 ? "all" : "none";
      }

      if (cueRef.current) cueRef.current.style.opacity = String(fo(p, 0.04, 0.06));
    }

    function schedule() {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  function drawFrame(idx: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const bounded = Math.min(idx, HERO_FRAME_COUNT - 1);
    const img = framesRef.current[bounded];
    if (!img || !img.complete || !img.naturalWidth) return;
    if (lastFrameRef.current === bounded) return;
    lastFrameRef.current = bounded;

    const dpr = dprRef.current;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    // drawImage with cover-scale fills the canvas — no clearRect needed.
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }

  function setSlide(key: SlideKey, opacity: number, ty: number) {
    const el = slideEl(key);
    if (!el) return;
    el.style.opacity = String(opacity);
    el.style.transform = `translateY(${ty}px)`;
  }

  type SlideKey = "label" | "h1" | "sub" | "stats" | "benefits" | "cta";
  function slideEl(key: SlideKey): HTMLElement | null {
    switch (key) {
      case "label": return labelRef.current;
      case "h1": return h1Ref.current;
      case "sub": return subRef.current;
      case "stats": return statsRef.current;
      case "benefits": return benefitsRef.current;
      case "cta": return ctaRef.current;
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ height: reducedMotion ? "100vh" : "500vh" }}
    >
      <div ref={pinRef} className="sticky top-0 h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-navy-deep/45 pointer-events-none" />

        {/* Slide 1: Intro */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 flex-col text-center">
          <div
            ref={labelRef}
            className="text-[14px] uppercase tracking-[0.18em] text-gold mb-[26px] flex items-center justify-center gap-3 before:content-[''] before:w-8 before:h-px before:bg-gold before:opacity-50 after:content-[''] after:w-8 after:h-px after:bg-gold after:opacity-50"
            style={{ opacity: 0 }}
          >
            {HERO_INTRO.label}
          </div>
          <h1
            ref={h1Ref}
            className="font-extrabold leading-none tracking-[-0.02em]"
            style={{
              fontSize: "clamp(56px, 9vw, 96px)",
              opacity: 0,
            }}
          >
            {HERO_INTRO.headline.map((line, i) => (
              <span
                key={i}
                className={line.tone === "accent" ? "block text-red" : "block"}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p
            ref={subRef}
            className="mt-6 text-[22px] text-cream/70 leading-[1.65] max-w-[44ch]"
            style={{ opacity: 0 }}
          >
            {HERO_INTRO.sub}
          </p>
        </div>

        {/* Slide 2: Stats */}
        <div
          ref={statsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 flex-col text-center"
          style={{ opacity: 0 }}
        >
          <div className="flex gap-[60px] justify-center flex-wrap">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-extrabold text-gold leading-none"
                  style={{ fontSize: "clamp(60px, 9vw, 88px)" }}
                >
                  {s.value}
                </div>
                <div className="text-[16px] text-cream/55 tracking-[0.12em] uppercase mt-2.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[20px] text-cream/40 tracking-[0.06em]">
            {HERO_STATS_SUB}
          </p>
        </div>

        {/* Slide 3: Benefits */}
        <div
          ref={benefitsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 flex-col text-center mx-auto"
          style={{ maxWidth: 700, opacity: 0 }}
        >
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "clamp(30px, 4vw, 46px)" }}
          >
            {HERO_BENEFITS_TITLE}
          </h2>
          <ul className="list-none text-left w-full">
            {HERO_BENEFITS.map((b) => (
              <li
                key={b}
                className="text-[21px] py-[18px] border-b border-white/7 flex gap-4 items-start text-cream/85 leading-[1.6] before:content-['—'] before:text-gold before:font-bold before:shrink-0 before:mt-0.5"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Slide 4: CTA */}
        <div
          ref={ctaRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none px-6 flex-col text-center"
          style={{ opacity: 0 }}
        >
          <div className="text-[18px] text-gold tracking-[0.08em] mb-[22px]">
            {HERO_CTA.date}
          </div>
          <h2
            className="font-extrabold leading-[1.1] mb-9"
            style={{ fontSize: "clamp(36px, 5.5vw, 58px)" }}
          >
            {HERO_CTA.title[0]}
            <br />
            {HERO_CTA.title[1]}
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={LINE_URL} className="btn-main">
              สมัครเข้าร่วมค่าย →
            </a>
            <a href="#schedule" className="btn-outline">
              ดูตารางกิจกรรม
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={cueRef} className="scroll-cue">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
