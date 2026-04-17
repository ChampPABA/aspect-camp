"use client";

import dynamic from "next/dynamic";

const ScrollMorphHero = dynamic(
  () => import("@/components/hero/ScrollMorphHero"),
  {
    ssr: false,
    loading: () => (
      <section className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-cream/50 text-lg">Loading...</div>
      </section>
    ),
  }
);

export default function HeroWrapper() {
  return <ScrollMorphHero />;
}
