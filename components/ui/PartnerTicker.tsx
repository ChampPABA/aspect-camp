"use client";

import Image from "next/image";

const logos = [
  { src: "/images/logos/1.avif", alt: "KMUTT" },
  { src: "/images/logos/2.avif", alt: "SET" },
  { src: "/images/logos/3.avif", alt: "STEP CMU" },
  { src: "/images/logos/4.avif", alt: "AspectCareer" },
  { src: "/images/logos/5.avif", alt: "AI Skill Training" },
];

export default function PartnerTicker() {
  const doubled = [...logos, ...logos];

  return (
    <div className="bg-navy py-6 overflow-hidden group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
