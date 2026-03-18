# PathToMed Camp — Design System

**Brand:** Aspect Education — "The Double Assurance Partner"
**Style:** Elite Academic
**Source:** Aspect Brand Guidelines + medchic + solutionsimpact-automation extracts

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Heritage Navy | `#0F2A4A` | Hero bg, nav, footer, dark sections |
| Academic Cream | `#F1F1E8` | Content bg, light sections |
| Intellectual Gray | `#474747` | Body text on cream |
| Prestige Gold | `#c3a456 → #f0cb46` | CTA buttons, accent borders, bullet icons |
| Risk Red | `#950606` | Pain points, urgency, countdown |
| Result Green | `#07592c` | Success, credentials verified |
| Luminous Blue | `#738cb0` | Tech/AI elements, data icons |

**Rules:**
- Pair Navy + Cream **always**
- Use Gold **sparingly** — only CTAs and the most important accents
- Never use pure black `#000000` on cream backgrounds
- Use `#474747` (Intellectual Gray) for body text instead

---

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Hook / Header (ENG) | **Garet** | Bold | Hero headlines, attention hooks |
| Primary Topic (ENG) | **Times New Roman MT Condensed** | Regular | Section titles |
| Secondary Topic (ENG) | **Times New Roman MT Condensed** | Italic | Subtitles, labels |
| Body (Thai + ENG) | **IBM Plex Sans Thai** | Regular | All body text, descriptions |

**Fallback:** If Garet is unavailable, use `Cormorant Garamond` as serif fallback.

**Line heights:**
- Headings: `1.15–1.4`
- Body: `1.5` (let it breathe)
- Thai text: `1.6–1.75` for readability

---

## Spacing

Base unit: `8px`. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 128.

- Section padding: `80px` vertical
- Container: `max-width: 1100px`
- Card padding: `24–32px`
- Component gaps: `8–16px`

---

## Shadows & Borders

| Level | Value |
|-------|-------|
| sm | `0 1px 3px rgba(0,0,0,0.08)` |
| md | `0 4px 16px rgba(0,0,0,0.10)` |
| lg | `0 12px 28px rgba(0,0,0,0.12)` |
| gold-glow | `0 2px 12px rgba(212,146,10,0.35)` |

Border radius: `8px` (sm), `12px` (md), `20px` (lg), `9999px` (pill/full).
Borders on dark: `rgba(255,255,255,0.12)`. On light: `rgba(0,0,0,0.08)`.

---

## Theme Direction: "Elite Academic Gateway"

**USE:** Graduation cap motif, gold gradient accents, prism/facet decorations, professional photography
**AVOID:** Cartoon graphics, childish fonts, Sale/Discount aesthetics, pure black on cream

**Icons:** Lucide — GraduationCap, Stethoscope, Lightbulb, Shield, Trophy, Clock, Users, CheckCircle

---

## Animations

| Token | Value |
|-------|-------|
| Fast | `0.15s` |
| Normal | `0.3s` |
| Slow | `0.5s` |
| Easing | `cubic-bezier(0.4, 0, 0.2, 1)` |

Scroll animations enabled: fade-up, stagger-children, counter animation.

---

## Critical Rules

**DO:**
- Use `data.yaml` tokens for all values — never hardcode hex
- Use Gold gradient for CTA buttons: `linear-gradient(90deg, #c3a456, #f0cb46)`
- Line height 1.5 for body text
- Test contrast ratios — cream text on navy passes AAA

**DON'T:**
- Use `#000000` on cream backgrounds
- Use childish fonts or cartoon graphics
- Use "Sale" or "Discount" language — say "Exclusive Access"
- Hardcode colors outside the brand palette

---

## Next Steps

```bash
/pageplan    # Plan page structure and sections (hero, schedule, pricing, etc.)
```
