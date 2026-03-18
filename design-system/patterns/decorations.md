# Decorative Patterns

## Theme: Elite Academic Gateway

### 1. Gold Gradient Accent Line
Used as section dividers or card top accents.

```tsx
{/* Full-width section divider */}
<div className="h-[2px] bg-gradient-to-r from-[#c3a456] to-[#f0cb46]" />

{/* Card top accent — 3px */}
<div className="absolute top-0 left-0 right-0 h-[3px]
  bg-gradient-to-r from-[#c3a456] to-[#f0cb46]" />

{/* Timeline line — vertical gradient */}
<div className="absolute left-0 top-2 bottom-2 w-[2px]
  bg-gradient-to-b from-[#0F2A4A] via-[#D4B978] to-[#0F2A4A]
  rounded-full" />
```

### 2. Navy Section with Radial Glow
Subtle teal/gold glow on dark sections for depth.

```tsx
<section className="relative bg-[#0F2A4A] overflow-hidden">
  {/* Subtle radial glow */}
  <div className="absolute inset-0 pointer-events-none"
    style={{
      background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(212,185,120,0.08) 0%, transparent 70%)'
    }}
  />
  {/* Bottom fade to next section */}
  <div className="absolute bottom-0 left-0 right-0 h-[120px]
    bg-gradient-to-b from-transparent to-[#F1F1E8]
    pointer-events-none" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</section>
```

### 3. Badge / Pill Tag
Small status indicators used throughout.

```tsx
{/* Teal/Green badge — for credentials */}
<span className="inline-flex items-center gap-1.5
  px-3 py-1 rounded-full text-xs font-medium
  bg-[#07592c]/10 text-[#07592c] border border-[#07592c]/20">
  ✓ Verifiable
</span>

{/* Gold badge — for premium/important */}
<span className="inline-flex items-center gap-1.5
  px-3 py-1 rounded-full text-xs font-medium
  bg-gradient-to-r from-[#c3a456]/10 to-[#f0cb46]/10
  text-[#8B6914] border border-[#D4B978]/30">
  🥇 Full Scholarship
</span>

{/* Red badge — for urgency */}
<span className="inline-flex items-center gap-1.5
  px-3 py-1 rounded-full text-xs font-medium
  bg-[#950606]/10 text-[#950606] border border-[#950606]/20">
  <span className="w-1.5 h-1.5 bg-[#950606] rounded-full animate-pulse" />
  เหลือ 38 ที่นั่ง
</span>
```

### 4. Eyebrow Label
Section label above titles.

```tsx
<span className="text-[11px] font-medium uppercase tracking-[0.12em]
  text-[#D4B978] font-[Outfit]">
  ทำไมต้องค่ายนี้
</span>
{/* Light variant (on dark bg) */}
<span className="... text-[#D4B978]">ทำไมต้องค่ายนี้</span>
{/* Dark variant (on light bg) */}
<span className="... text-[#0F2A4A]">ทำไมต้องค่ายนี้</span>
```

### 5. Stat Counter Block
Key numbers display.

```tsx
<div className="text-center">
  <div className="font-[Cormorant_Garamond] text-[32px] font-bold text-white leading-none">
    60
  </div>
  <div className="text-xs text-white/45 font-[Outfit] mt-0.5">
    ที่นั่ง (จำกัด)
  </div>
</div>
```

## DO / DON'T

**DO:**
- Use gold gradient for CTAs and important accent lines only
- Use subtle radial glows (opacity 0.08) — not solid color blocks
- Keep decorative elements understated — let content be the star

**DON'T:**
- Use gold on everything — it loses its premium feel
- Use animated decorations that distract from content
- Add decorative elements that don't serve the content hierarchy
