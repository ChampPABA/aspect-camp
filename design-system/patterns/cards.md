# Card Patterns

## Variants

### 1. Hook Card (Value proposition on light bg)
White card with top accent border. Used for "ทำไมต้องค่ายนี้" section.

```tsx
<div className="relative bg-white border border-black/8 rounded-[20px]
  p-7 overflow-hidden
  hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]
  hover:-translate-y-[3px]
  transition-all duration-200">
  {/* Top accent line */}
  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0F2A4A]" />
  <div className="font-[Cormorant_Garamond] text-5xl font-bold text-[#E8E6E1] leading-none mb-3.5">
    01
  </div>
  <h3 className="font-[IBM_Plex_Sans_Thai] text-lg font-semibold text-[#1A1917] mb-2.5">
    ลงมือทำจริง
  </h3>
  <p className="font-[IBM_Plex_Sans_Thai] text-sm text-[#4A4845] leading-[1.7]">
    สร้าง Healthcare Innovation Project...
  </p>
</div>
```

### 2. Target Card (Audience card with color-coded border)
Card for target audience sections. Top border color indicates audience type.

```tsx
<div className="bg-white border border-black/8 rounded-[20px]
  p-8 overflow-hidden relative
  border-t-[3px] border-t-[#0F2A4A]">
  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
    bg-[#0F2A4A]/10 text-[#0F2A4A] mb-4">
    นักเรียน ม.4–ม.5
  </span>
  <p className="font-[IBM_Plex_Sans_Thai] text-base font-medium text-[#1A1917] mb-2.5">
    "ไม่รู้จะเริ่มเก็บพอร์ตยังไง..."
  </p>
  <p className="font-[IBM_Plex_Sans_Thai] text-sm text-[#4A4845] leading-[1.7]">
    ค่ายนี้คือจุดเริ่มต้นที่ถูกทาง...
  </p>
</div>
```

Gold variant: use `border-t-[#D4B978]` and `bg-[#D4B978]/10` for the badge.

### 3. Credential Card (on dark bg)
For displaying credentials/certificates. Semi-transparent on navy.

```tsx
<div className="bg-white/4 border border-white/10 rounded-[20px]
  p-7 overflow-hidden">
  <div className="flex items-center gap-3.5 py-3.5 border-b border-white/7">
    <div className="w-11 h-11 rounded-lg bg-white/8 border border-white/12
      flex items-center justify-center text-white/70 text-xs font-semibold">
      KMUTT
    </div>
    <div className="flex-1">
      <div className="text-sm font-medium text-white">MicroCredential Digital Badge</div>
      <div className="text-xs text-white/40 mt-0.5">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</div>
    </div>
    <span className="text-[10px] px-2.5 py-0.5 rounded-full
      bg-[#07592c]/20 text-[#4ECBA0] border border-[#07592c]/30">
      Verifiable
    </span>
  </div>
</div>
```

## Shared Properties

- `border-radius: 20px` (lg)
- `transition: all 0.2s` for hover states
- Card hover on light: `translateY(-3px)` + `shadow-md`
- Card hover on dark: `border-color` brightens to `white/20`
- Padding: `24-32px`
