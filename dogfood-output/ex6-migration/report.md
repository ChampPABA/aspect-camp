# Dogfood Report: ex6 → Next.js root migration

| Field | Value |
|-------|-------|
| **Date** | 2026-04-18 |
| **App URL** | http://localhost:3000/ |
| **Session** | ex6-qa |
| **Scope** | Full-page QA after cinematic landing port |

## Summary

| Severity | Count |
|----------|-------|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 1 |
| **Total** | **1** (fixed in-session) |

## Issues

### ISSUE-001 [low · visual/console] next/image aspect-ratio warning on logo.png

**Repro**: Load page → open DevTools console. Warning: `Image with src "/assets/med-camp/logos/logo.png" has either width or height modified, but not the other.` Caused by nav + footer passing `width=140 height=32` (ratio 4.375:1) while Tailwind `h-8 w-auto` overrode sizing; rendered ratio differed from natural (902×277 → 3.26:1).

**Fix applied**: `components/layout/CinematicNavbar.tsx` + `CinematicFooter.tsx` + `components/sections/Partners.tsx` — switched to `fill` mode inside a sized wrapper div. Warning gone after fix.

**Evidence**: `screenshots/01-initial.png` (pre-fix)
**Repro video**: N/A (static, visible on load)

## Verified working

- Hero canvas frame-scrub across 5 scroll positions (slides 1–4 + scroll cue fade-out) — `screenshots/02-hero-intro.png`
- Anchor nav: `#why / #schedule / #speakers / #pricing / #faq` all land on correct section — `screenshots/03..09-*-direct.png`
- Schedule tabs: Day 1 / Day 2 / Day 3 switching via `button[role=tab]` click — `screenshots/04-schedule-direct.png`, `screenshots/12-day2-clicked.png`
- FAQ: `<details>` expand/collapse — `screenshots/11-faq-expanded.png`
- Pricing: 4 tiers with "Early Bird" featured badge — `screenshots/08-pricing-direct.png`
- Speakers: 2 cards with photos + tags — `screenshots/07-speakers-direct.png`
- WhyAccordion: panel 1 active by default; hover works in real browser (agent-browser synthetic `mouseenter` doesn't trigger React `onMouseEnter` — tooling limitation, not a bug)
- All 8 CTA links resolve to `https://lin.ee/Z1aJYor`
- Zero console errors/warnings after fix
- Dead routes `/ex1..ex6` return 404
- No CDN GSAP requests (dropped in migration)
- Production build: 11.7 kB page / 114 kB first-load JS
