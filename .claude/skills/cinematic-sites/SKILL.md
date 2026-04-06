---
name: cinematic-sites
description: |
  Build cinematic, scroll-driven landing pages for the Aspect Camp project.
  Use when asked to create a cinematic page, generate hero animations,
  build scroll-driven video sections, or redesign a landing page with
  cinematic effects. Triggers on: "cinematic", "hero video", "scroll animation",
  "scene generation", "nano banana", "kling", "/cinematic-sites".
  
  Three-step pipeline: Brand Analysis (verify/supplement) → Scene Generation
  (Nano Banana 2 + Kling O3 via WaveSpeed) → Website Build (Next.js + Framer Motion).
metadata:
  author: aspect-camp
  version: "1.0.0"
---

# Cinematic Sites — Aspect Camp

Build cinematic, scroll-driven landing pages with AI-generated hero videos. This skill orchestrates a 3-step pipeline: verify the brand → generate cinematic scenes → build the page.

## Prerequisites

| Key | Env Variable | Where to get |
|-----|-------------|--------------|
| Google Gemini (Nano Banana 2) | `GEMINI_API_KEY` | https://aistudio.google.com/apikey |
| WaveSpeed (Kling O3) | `WAVESPEED_API_KEY` | https://wavespeed.ai/settings/api-keys |

Check keys exist before starting:
```bash
echo "Gemini: ${GEMINI_API_KEY:+set}" && echo "WaveSpeed: ${WAVESPEED_API_KEY:+set}"
```

---

## STEP 1 — Brand Analysis

The project already has a strong brand foundation. Read and verify these files before proceeding:

1. **Read existing brand assets:**
   - `app/globals.css` — color palette, typography, shadows, radius
   - `lib/constants.ts` — messaging, hooks, taglines, content data
   - `lib/fonts.ts` — font configuration (IBM Plex Sans Thai, Cormorant Garamond, Garet)
   - `docs/Aspect brand guidelines.pdf` — full brand strategy, tone of voice, ASPECT values
   - `public/images/logos/` — Aspect.png, Aspect B.png

2. **Compile a Brand Card** with these fields:
   - Industry & company name
   - Color palette (hex codes from globals.css)
   - Typography stack
   - Headline, tagline, hero line (from constants.ts HERO section)
   - Theme direction & tone of voice (from brand guidelines)
   - Available visual assets (list camp photos in public/images/)

3. **Generate an HTML brand card** at `public/brand-card.html` for user approval.
   Use the actual brand colors as the card's styling. Include a color swatch grid.

4. **Pause and present the brand card to the user.** Do not proceed until approved.

If the brand is for a different client (not Aspect Camp), run a full brand analysis:
- Fetch the client's website using WebFetch or agent-browser
- Extract: logo, colors, fonts, messaging, industry, tone
- Generate the brand card for approval

---

## STEP 2 — Scene Generation

Generate a cinematic hero video using two AI services in sequence:
**Nano Banana 2** (image) → **Kling O3** (video animation)

### 2A. Concept Ideation

Suggest **3 hero animation concepts** based on the brand. Each concept should describe:
- The visual scene (what the viewer sees)
- The camera movement (pan, zoom, tilt, aerial)
- The mood/atmosphere (lighting, color temperature)
- How it connects to the brand story

Present concepts to user. Wait for selection before generating.

### 2B. Image Generation (Nano Banana 2)

Generate the hero image using Gemini's image generation.
See `references/nanobanana2-api.md` for full API docs.

```bash
curl -s -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"parts": [{"text": "PROMPT_HERE"}]}],
    "generationConfig": {
      "responseModalities": ["TEXT", "IMAGE"],
      "imageConfig": {"aspectRatio": "16:9", "imageSize": "2K"}
    }
  }'
```

The response contains base64-encoded image in `candidates[0].content.parts[].inlineData.data`.
Decode and save to `public/images/hero-scene.png`.

**Prompt guidelines for cinematic images:**
- Specify lighting: "dramatic side lighting", "golden hour", "moody cinematic"
- Include depth: foreground subject, midground context, background atmosphere
- Match brand colors: reference the navy/gold/cream palette explicitly
- Use 16:9 aspect ratio for hero sections

Generate 2 images for optionality. Present both to user for selection.

### 2C. Video Animation (Kling O3 via WaveSpeed)

Animate the selected image into a 5-second cinematic video.
See `references/wavespeed-kling-api.md` for full API docs.

First, upload the hero image to a public URL (use the Vercel deployment or a temporary host).

```bash
# Submit generation job
curl -X POST "https://api.wavespeed.ai/api/v3/kwaivgi/kling-video-o3-pro/image-to-video" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -d '{
    "image": "PUBLIC_IMAGE_URL",
    "prompt": "MOTION_PROMPT_HERE",
    "duration": 5,
    "sound": false,
    "shot_type": "customize"
  }'

# Poll for result (returns MP4 URL when done)
curl -X GET "https://api.wavespeed.ai/api/v3/predictions/PREDICTION_ID/result" \
  -H "Authorization: Bearer $WAVESPEED_API_KEY"
```

**Motion prompt guidelines:**
- Describe camera movement: "slow cinematic zoom in", "gentle pan left to right"
- Describe element motion: "steam rising", "ingredients settling", "particles floating"
- Keep it natural: "subtle movement with natural physics"
- Avoid rapid or jarring movement for hero sections

Download the MP4 to `public/videos/hero-scene.mp4`.

Generate 2 videos for optionality. Present both to user for selection.

### 2D. Frame Extraction

Extract individual frames from the hero video for scroll-driven animation:

```bash
# Extract frames at 30fps into sequential PNGs
ffmpeg -i public/videos/hero-scene.mp4 -vf "fps=30" public/images/hero-frames/frame_%04d.png

# Or for WebP (smaller files, better for web):
ffmpeg -i public/videos/hero-scene.mp4 -vf "fps=30" -c:v libwebp -quality 85 public/images/hero-frames/frame_%04d.webp
```

This creates ~150 frames for a 5-second video, mapped to scroll position.

---

## STEP 3 — Website Build

Build the cinematic page using the project's existing tech stack:
**Next.js 15 + React 19 + Framer Motion + Tailwind CSS 4**

### 3A. Scroll-Driven Hero Video

Create a component that maps scroll position to video frames:

```tsx
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function ScrollVideo({ frameCount, framePath }: { 
  frameCount: number; 
  framePath: string; // e.g. "/images/hero-frames/frame_" 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Preload all frames
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  useEffect(() => {
    const loaded: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${framePath}${String(i).padStart(4, "0")}.webp`;
      loaded.push(img);
    }
    setImages(loaded);
  }, [frameCount, framePath]);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const frameIndex = Math.min(Math.floor(v * (images.length - 1)), images.length - 1);
      const img = images[frameIndex];
      if (img.complete) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
      }
    });
    return unsubscribe;
  }, [images, scrollYProgress]);
  
  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
```

### 3B. Cinematic Modules

The project already has 11 cinematic components in `components/variations/cinematic/`. Reuse and compose them:

| Module | File | Effect |
|--------|------|--------|
| PhilosophyManifesto | `cinematic/PhilosophyManifesto.tsx` | Word-by-word stagger reveal + pillar cards |
| FullScreenHooks | `cinematic/FullScreenHooks.tsx` | Gold wipe-reveal overlay sections |
| CardDealCredentials | `cinematic/CardDealCredentials.tsx` | Card dealing animation |
| ParallaxAudience | `cinematic/ParallaxAudience.tsx` | Split-screen Y-axis parallax |
| CinematicSpeakers | `cinematic/CinematicSpeakers.tsx` | Speaker showcase |
| CinematicSchedule | `cinematic/CinematicSchedule.tsx` | Tabbed schedule with slide transitions |
| ScrollProgressTimeline | `cinematic/ScrollProgressTimeline.tsx` | Vertical scroll-driven progress bar |
| SpreadPricing | `cinematic/SpreadPricing.tsx` | Staggered pricing cards |
| FullScreenTestimonials | `cinematic/FullScreenTestimonials.tsx` | Full-bleed testimonial sections |
| CurtainFaq | `cinematic/CurtainFaq.tsx` | FAQ with curtain-reveal |
| ParallaxCTA | `cinematic/ParallaxCTA.tsx` | CTA with parallax effects |

### 3C. New Cinematic Modules

When creating new interactive modules, follow these patterns:

**Framer Motion best practices for this project:**
- Always use `viewport={{ once: true, amount: 0 }}` for whileInView triggers (prevents blank on fast scroll)
- Use `useScroll` + `useTransform` for scroll-driven animations
- Use `AnimatePresence` with `mode="wait"` for mount/unmount transitions
- Spring animations for interactive elements: `transition={{ type: "spring", stiffness: 300, damping: 30 }}`
- Stagger children with container variants: `staggerChildren: 0.1`

**Design system tokens (from globals.css):**
- Primary: `bg-navy` (#0F2A4A), `text-cream` (#F1F1E8), `text-gold` (#D4B978)
- Gradient: `from-gold-from to-gold-to` (#c3a456 → #f0cb46)
- Shadows: `shadow-gold`, `shadow-gold-hover`
- Radius: `rounded-sm` (8px), `rounded-md` (12px), `rounded-lg` (20px), `rounded-2xl` (16px) for cards
- Fonts: `font-heading` (Cormorant Garamond), `font-hook` (Garet), `font-sans` (IBM Plex Sans Thai)

**Font rules (critical for Thai language):**
- Thai text (headings, body, labels): always use `font-sans` (IBM Plex Sans Thai)
- `font-heading` (Cormorant Garamond): English text and numbers only — does NOT support Thai, falls back to Times New Roman
- `font-hook` (Garet): English labels only (tab labels, badge text) — renders Thai characters poorly
- Section eyebrow labels: use `font-sans font-semibold tracking-[0.25em] uppercase`
- Section h2 headings: use `font-sans font-bold text-3xl md:text-5xl`

**Typography scale (minimum sizes for readability):**
- Body text: `text-base` (16px) minimum, `text-sm` (14px) for secondary
- Hero sub-copy: `text-lg sm:text-xl` with `leading-relaxed`
- Bullet/list items: `text-base sm:text-lg`
- Card labels/metadata: `text-sm` (14px) minimum — never use `text-[12px]` or `text-[13px]`
- Eyebrow labels: `text-xs` (12px) is acceptable only with `tracking-[0.25em] uppercase`

**Card design standards:**
- Glassmorphism: `bg-white/10 backdrop-blur-[16px] border border-white/18` (stronger than default)
- Card padding: `p-7` minimum for small cards, `p-8` to `p-10` for featured/large cards
- Card radius: `rounded-2xl` (16px)
- Hover: `scale: 1.02-1.03`, gold border glow for premium feel
- Featured cards: `ring-2 ring-gold/50` + scale bump + "แนะนำ" badge

**Additional cinematic modules to consider building:**
- Accordion Slider — hover-expand image cards (horizontal or vertical)
- Reveal Text — text that reveals on scroll with mask animation
- Kinetic Typography — animated text with physics-based movement
- Image Trail — cursor following with image trail effect
- SVG Draw — path animation that draws shapes on scroll
- Glitch Effect — text/image glitch transition
- Typewriter — character-by-character text reveal

### 3D. Page Assembly

Create a new page at `app/[route]/page.tsx`:

```tsx
import { ScrollVideo } from "@/components/cinematic/ScrollVideo";
// Import cinematic modules as needed
import { PhilosophyManifesto } from "@/components/variations/cinematic/PhilosophyManifesto";
// ... more imports

export default function CinematicPage() {
  return (
    <main>
      {/* Hero: Scroll-driven video */}
      <ScrollVideo frameCount={150} framePath="/images/hero-frames/frame_" />
      
      {/* Compose cinematic sections below */}
      <PhilosophyManifesto />
      {/* ... */}
    </main>
  );
}
```

### 3E. Animation Rules

Follow these rules for all animations:
1. Every `whileInView` must have `viewport={{ once: true, amount: 0 }}`
2. Hero video section needs `h-[300vh]` to `h-[500vh]` for comfortable scroll range
3. Use `sticky top-0` for scroll-locked sections
4. Preload hero frames on mount, not on scroll
5. Add `will-change: transform` on parallax elements for GPU compositing
6. Test on mobile — reduce frame count or use video element with `playbackRate` control
7. Respect `prefers-reduced-motion` — provide static fallback

### 3F. Accessibility Rules

1. All interactive elements need `focus-visible:ring-2 focus-visible:ring-gold`
2. Icon-only buttons need `aria-label`
3. Ghost buttons: always add visible focus ring with ring-offset
4. Search inputs: add `focus:ring-1 focus:ring-gold/20`
5. Never use `transition-all` — list properties explicitly (`transition-colors`, `transition-transform`)
6. Form inputs need `<label>` or `aria-label`

---

## Workflow Summary

```
User request
    ↓
STEP 1: Brand Analysis
    → Read existing brand files
    → Generate brand card HTML
    → [PAUSE] User approves brand card
    ↓
STEP 2: Scene Generation
    → Suggest 3 hero concepts
    → [PAUSE] User picks concept
    → Generate images (Nano Banana 2)
    → [PAUSE] User picks image
    → Animate to video (Kling O3)
    → [PAUSE] User picks video
    → Extract frames (ffmpeg)
    ↓
STEP 3: Website Build
    → Create ScrollVideo component
    → Compose page with cinematic modules
    → Build any new modules needed
    → Wire up content from constants.ts
    ↓
Done — push to development branch for Vercel auto-deploy
```
