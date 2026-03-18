# Button Patterns

## Variants

### 1. Gold CTA (Primary)
The most important action button. Uses Prestige Gold gradient.

```tsx
<button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
  bg-gradient-to-r from-[#c3a456] to-[#f0cb46] text-[#0F2A4A]
  font-[IBM_Plex_Sans_Thai] text-[15px] font-medium
  shadow-[0_2px_12px_rgba(212,146,10,0.35)]
  hover:shadow-[0_4px_20px_rgba(212,146,10,0.45)]
  hover:-translate-y-0.5
  transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
  cursor-pointer border-none whitespace-nowrap">
  สมัครเข้าร่วมค่าย →
</button>
```

**States:**
- Default: Gold gradient bg, navy text, gold glow shadow
- Hover: Brighter gold (`#FFBA30`), translateY(-1px), stronger glow
- Active: translateY(0), slightly reduced shadow
- Disabled: opacity 0.5, cursor not-allowed

### 2. Outline White (on dark bg)
Secondary action on navy backgrounds.

```tsx
<button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
  bg-transparent text-white
  border border-white/50
  font-[IBM_Plex_Sans_Thai] text-[15px] font-medium
  hover:bg-white/8 hover:border-white
  transition-all duration-200
  cursor-pointer whitespace-nowrap">
  ดูรายละเอียด
</button>
```

### 3. Teal Action (on light bg)
Action button on cream/white backgrounds.

```tsx
<button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
  bg-[#0F2A4A] text-[#F1F1E8]
  font-[IBM_Plex_Sans_Thai] text-[15px] font-medium
  hover:bg-[#0A1F38] hover:-translate-y-0.5
  shadow-sm hover:shadow-md
  transition-all duration-200
  cursor-pointer border-none whitespace-nowrap">
  สมัครเลย →
</button>
```

### 4. Outline Navy (on light bg)
Secondary action on cream backgrounds.

```tsx
<button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
  bg-transparent text-[#0F2A4A]
  border-[1.5px] border-[#0F2A4A]
  font-[IBM_Plex_Sans_Thai] text-[15px] font-medium
  hover:bg-[#0F2A4A]/5
  transition-all duration-200
  cursor-pointer whitespace-nowrap">
  ดูรายละเอียด
</button>
```

## Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| sm | `9px 20px` | `13px` |
| md (default) | `13px 28px` | `15px` |
| lg | `16px 36px` | `17px` |

## Shared Properties

- `border-radius: 9999px` (pill shape)
- `font-family: IBM Plex Sans Thai`
- `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
- `white-space: nowrap`
- `cursor: pointer`
