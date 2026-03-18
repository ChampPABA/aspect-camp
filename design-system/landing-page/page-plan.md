# Page Plan: PathToMed Camp Landing Page

---

## 1. Page Strategy

### Goal
Convert visitors (parents + students) to **register for the camp** — either directly or via LINE/brochure download as secondary action.

### Target Audience

**Primary — Parents (decision-makers, pay)**
- High-Vision Parents, age 35-55
- Fear: ลูกเลือกคณะผิด, เสียเวลา+เงิน 6 ปี
- Want: หลักประกันว่าลูกเลือกถูก + credential ใส่พอร์ต TCAS
- Objections: "ค่ายเอกชนเชื่อถือได้ไหม?", "credential ใช้ได้จริงไหม?", "แพงไปไหม?"

**Secondary — Students (users, influence)**
- ม.4-6, age 15-18
- Pain: ไม่รู้จะเก็บพอร์ตยังไง, ไม่แน่ใจว่าอยากเป็นหมอ
- Want: กิจกรรมจริง (ไม่ใช่แค่ฟัง), credential เด่น, ค้นพบตัวเอง

### Approach
**PAS + Social Proof + Urgency** — เปิดด้วย aspirational hero → กระแทก pain → โชว์ solution + credential → proof → urgency → convert

---

## 2. Section Plan (top → bottom)

### S0: Navigation Bar
**Purpose:** Brand identity + quick access to key sections + persistent CTA

**Contains:**
- Aspect logo (left) — `materials/logo/aspect/Aspect.png`
- "PathtoMed" text mark next to logo
- Nav links: เกี่ยวกับค่าย · ตาราง · วิทยากร · ทุน · FAQ
- Gold CTA button: "สมัครเลย →" (right)
- Scrolled state: navy bg with `backdrop-filter: blur(12px)`, height shrinks 64→56px
- Mobile: hamburger menu, sticky gold CTA at bottom

---

### S1: Hero — Scroll Morph (Full Viewport)
**Purpose:** WOW moment + core message + immediate interest

**Approach: Adapted scroll-morph-hero from 21st.dev**

**Background layer:**
- Full viewport navy (#0F2A4A) background
- Subtle radial gradient glow (gold, opacity 0.08) at center-right

**Morph elements (replacing the 20 image cards):**
- 12-16 **medical equipment icons/images** (transparent bg):
  - Stethoscope, syringe, heart monitor, DNA helix, microscope, brain scan, pill capsule, first aid kit, lab flask, clipboard, graduation cap, lightbulb
- Icons are **cream/gold colored** on navy bg, opacity varies
- Scroll-driven morph phases:
  1. **Scatter** (initial): Icons floating randomly, low opacity — abstract medical atmosphere
  2. **Converge** (scroll 0-300px): Icons align into a pattern
  3. **Arc** (scroll 300-600px): Icons form an arc, hero text fades in at center
  4. **Settle** (scroll 600+): Icons settle to edges, content fully visible

**Hero text (appears at morph progress > 0.8):**
```
[Eyebrow badge] รับสมัครแล้ววันนี้ · เชียงใหม่ · 20–22 เมษายน 2568

[Hook - Garet Bold]
Path to MED.

[Tagline - Outfit uppercase, white/55]
Explore · Discover · Decide

[Headline - IBM Plex Sans Thai, semibold]
ไม่แน่ใจว่าอยากเป็นหมอ?
3 วันนี้จะตอบคำถามนั้น

[Sub - IBM Plex Sans Thai, white/55]
ค่าย Healthcare Innovation สำหรับ ม.4–ม.6
ที่รู้ว่าชอบวิทยาศาสตร์ — แต่ยังไม่แน่ใจว่าแพทย์ใช่ไหม

[Bullets]
✦ เลิก "เดาสุ่ม" ว่าอยากเดินเส้นทางแพทย์หรือเปล่า
✦ สร้าง Healthcare Innovation จริง ตัดสินโดยหมอจริง
✦ ได้ MicroCredential KMUTT + Certificate SET ใส่พอร์ต TCAS ได้ทันที

[CTAs]
[Gold CTA] สมัครเข้าร่วมค่าย →
[Outline White] ดูรายละเอียด
[Outline White] 📄 Download Brochure
```

**Note:** ถ้า scroll-morph-hero ซับซ้อนเกินไปสำหรับ phase แรก สามารถ fallback เป็น **parallax hero** ที่มี medical icons floating + fade-in text ได้

---

### S2: Partner Ticker + Stat Bar
**Purpose:** Instant credibility + key numbers at a glance

**Layout:** Full-width bar, navy background, 2 rows

**Row 1 — Partner Logo Slider (auto-scroll, pause on hover):**
- Infinite horizontal scroll (like medchic)
- Logos: KMUTT · SET · STEP CMU · AspectCareer · AI Skill Training
- Logos in cream/white on navy bg, opacity 0.7 → 1.0 on hover
- Speed: ~30px/s, pause on hover
- CSS `@keyframes` marquee animation (no JS library needed)

**Row 2 — Stat Bar (counter animation on viewport enter):**
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│      3      │     60      │      3      │   ม.4–6     │
│  วัน เต็ม    │ ที่นั่ง (จำกัด) │ Credentials │  ระดับชั้น    │
└─────────────┴─────────────┴─────────────┴─────────────┘
```
- Numbers: `Cormorant Garamond` (or Garet), 32px, bold, white
- Labels: `IBM Plex Sans Thai`, 12px, white/45
- Numbers use **counter animation** (count up from 0 when scrolled into view)
- Dividers: subtle `white/10` vertical lines

---

### S3: Countdown Bar
**Purpose:** Create urgency — limited seats, deadline approaching

**Layout:** Navy-mid background, centered content

```
⏳ ปิดรับสมัครใน
[DD] : [HH] : [MM] : [SS]
🔴 เหลือเพียง 38 ที่นั่ง — เต็มแล้วปิดทันที
[Gold CTA] สมัครก่อนเต็ม →
```

- Countdown numbers: `Cormorant Garamond`, 42px, gold (#f0cb46)
- Unit cards: `bg-white/5`, `border-white/10`, rounded-lg
- Red dot pulse animation for seats warning
- Target date: April 10, 2568

---

### S4: Value Hooks — "ทำไมต้องค่ายนี้"
**Purpose:** Address "Why this camp?" — 3 core differentiators

**Layout:** Cream bg, 3-column grid (stack on mobile)
**Animation:** Fade-up + stagger (0.1s per card)

```
[Eyebrow] ทำไมต้องค่ายนี้
[Title] ค่ายเดียวในไทยที่ทำทั้ง 3 อย่างนี้
[Desc] ไม่ใช่แค่เกียรติบัตรเข้าร่วม — แต่เป็นประสบการณ์ที่พิสูจน์ว่าคุณ "คิดแบบหมอ" ได้จริง

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 01           │ │ 02           │ │ 03           │
│ ลงมือทำจริง    │ │ Credential   │ │ ค้นพบตัวเอง    │
│              │ │ ที่ verify ได้  │ │              │
│ ✓ ต่างจากค่าย  │ │ ✓ ไม่มีค่าย    │ │ ✓ ออกแบบมา   │
│   อื่นที่เน้น   │ │   เอกชนรายใด  │ │   สำหรับคนที่  │
│   ดูงานอย่าง   │ │   มี credential│ │   ยังไม่แน่ใจ   │
│   เดียว       │ │   ระดับนี้     │ │              │
└──────────────┘ └──────────────┘ └──────────────┘

[CTA] สมัครเลย — รับเพียง 60 ที่ →
```

- Hook Card pattern (from design system) with navy top accent line
- Large number (01/02/03) in Cormorant Garamond, gray-100
- USP callout: teal-pale bg badge at bottom of each card

---

### S5: Target Audience — "ค่ายนี้เหมาะกับใคร"
**Purpose:** Visitors self-identify → "นี่คือค่ายสำหรับฉัน"

**Layout:** Gray bg, 2-column grid (stack on mobile)
**Animation:** Fade-up + stagger

```
[Eyebrow] ค่ายนี้เหมาะกับใคร
[Title] เราออกแบบมาเพื่อ 2 กลุ่มนี้

┌─────────────────────┐ ┌─────────────────────┐
│ [Navy top border]   │ │ [Gold top border]   │
│ 🏷️ นักเรียน ม.4–ม.5 │ │ 🏷️ นักเรียน ม.6     │
│                     │ │                     │
│ "ไม่รู้จะเริ่มเก็บ    │ │ "พอร์ตเราธรรมดา     │
│  พอร์ตยังไง..."     │ │  ไม่ใช่เด็กกิจกรรม" │
│ — เสียงจริงจาก      │ │ — เสียงจริงจาก      │
│   Pantip           │ │   Pantip           │
│                     │ │                     │
│ ค่ายนี้คือจุดเริ่มต้น  │ │ ยังทัน — 3 วันนี้    │
│ ที่ถูกทาง...        │ │ น้องจะมี credential │
│                     │ │ 3 ชิ้น...           │
│ [Outline Navy CTA]  │ │ [Gold CTA]         │
│ เริ่มต้นที่นี่ →      │ │ สมัครก่อนเต็ม →     │
└─────────────────────┘ └─────────────────────┘
```

- Target Card pattern from design system
- Pain quotes in italic, lighter color
- Bold solution keywords in navy/teal

---

### S6: Philosophy + Credentials — "แนวทางของเรา"
**Purpose:** Build deep trust — methodology + proof of credential value

**Layout:** Navy bg, 2-column (pillars left, credential box right)
**Animation:** Fade-up, stagger pillars

**Left column:**
```
[Eyebrow - gold] แนวทางของเรา
[Headline]
เราเชื่อว่าการเรียนรู้
ที่แท้จริงเกิดจาก
การลงมือทำจริง

[3 Pillar items with left gold border]
➕ Hands-on Learning
⏱ Design Thinking
📈 Individual Coaching
```

**Right column — Credential Box:**
```
┌──────────────────────────────┐
│ หลังจบค่าย น้องได้รับ         │
│                              │
│ [KMUTT] MicroCredential      │  ✅ Verifiable
│ [SET]   Pitching Certificate │  ✅ Official
│ [AI]    AI in Healthcare     │  🆕 New
│ [PORT]  Innovation Project   │  ✅ TCAS Ready
│                              │
│ 💡 ทำไมถึง matter?           │
│ KMUTT Badge ตรวจสอบได้ผ่าน    │
│ ลิงก์ดิจิทัล...              │
│                              │
│ [Full-width Gold CTA]        │
│ สมัครเลย — ก่อนที่นั่งเต็ม →   │
└──────────────────────────────┘
```

- Credential Card pattern from design system
- Tags: teal (Verifiable), gold (Official), purple (New)

---

### S7: Timeline + Schedule Tabs
**Purpose:** Show "what happens when" — timeline for registration, tabs for camp program

**Layout:** White bg, 2-column (timeline left, schedule tabs right)
**Animation:** Fade-up

**Left — Timeline:**
```
[Eyebrow] กำหนดการ
[Title] Timeline สำคัญ

● บัดนี้ — เปิดรับสมัคร Early Bird (3,900 บาท)
◉ 31 มี.ค. — ปิด Early Bird
● 10 เม.ย. — ปิดรับสมัคร
● 12 เม.ย. — ประกาศรายชื่อ
◉ 20–22 เม.ย. — วันค่าย Path to Med

[CTA] สมัครก่อนเต็ม →
```

**Right — Schedule Tabs:**
```
[Eyebrow] ตารางค่าย
[Title] Workshop Program

[Day 1 — 20 เม.ย.] [Day 2 — 21 เม.ย.] [Day 3 — 22 เม.ย.]

08.00  ลงทะเบียน
09.00  เปิดค่าย + แนะนำตัว          [Lecture]
09.30  Hacking Health               [Workshop]
10.00  Session 1: Empathize          [Workshop]
...
```

- Timeline: vertical line with gradient (navy → gold → navy), dot indicators
- Tabs: rounded pill tabs, active = white bg + shadow, inactive = gray text
- Schedule rows: grid layout, time | event + badge

---

### S8: Speakers
**Purpose:** Authority — "ตัดสินโดยแพทย์จริงจากสถาบันชั้นนำ"

**Layout:** Gray bg, 4-column grid (2-col on mobile)
**Animation:** Fade-up + stagger

```
[Eyebrow] วิทยากรและกรรมการ
[Title] Medical Faculty & Judges
[Desc] ตัดสินโดยแพทย์จริงจากสถาบันชั้นนำ   [CTA] สมัครเลย →

┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  (นพ.)  │ │  (พญ.)  │ │   (?)   │ │   (?)   │
│ ผศ.นพ.  │ │  พญ.    │ │ กรรมการ  │ │ กรรมการ  │
│ [ชื่อ]   │ │ [ชื่อ]   │ │ รับเชิญ  │ │ รับเชิญ  │
│ CMU     │ │ KMUTT   │ │ Soon    │ │ Soon    │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

- Speaker cards: white, rounded-lg, centered text, avatar circle
- Placeholder speakers: gray palette, "?" avatar
- Avatar: gradient bg (navy-light to cream), initials

---

### S9: Pricing / Scholarship Table
**Purpose:** Convert — show pricing tiers, create urgency with Early Bird

**Layout:** White bg, full-width table (responsive → cards on mobile)
**Animation:** Fade-up

```
[Eyebrow] ค่าใช้จ่าย
[Title] ทุนและราคาค่าเข้าร่วม
[Desc] เลือก tier ที่เหมาะกับน้อง — ยิ่งสมัครเร็ว ยิ่งได้ราคาดีกว่า

| ประเภท              | เงื่อนไข           | สิ่งที่ได้รับเพิ่ม      | ราคา          |     |
|---------------------|--------------------|-----------------------|---------------|-----|
| 🥇 Full Scholarship | คะแนนสูงสุด (3 ทุน) | เข้าค่ายฟรี + LoR     | ฟรี (̶5̶,̶5̶0̶0̶) | [→] |
| 🥈 Half Scholarship | Essay + motivation | ลด 50% + Port Review | 2,750         | [→] |
| 🐦 Early Bird       | สมัครก่อน 31 มี.ค.  | ลด 29%              | 3,900         | [→] |
| ราคาปกติ            | หลัง 31 มี.ค.      | Credential ครบ 3 ชิ้น  | 5,500         | [→] |

[Note box - gold-pale bg, gold-left border]
ราคารวม: ที่พัก 2 คืน · อาหารทุกมื้อ · วัสดุ workshop · credentials ทั้งหมด
สมัครคู่กับเพื่อน ลดเพิ่มอีก 300 บาท/คน
```

- Table: navy header, hover rows
- Tier badges: gradient/colored pills
- Price: Cormorant Garamond, 22px, bold
- Mobile: each tier becomes a card with all info stacked

---

### S10: Social Proof
**Purpose:** Overcome objection "ค่ายนี้ดีจริงไหม?" with real voices

**Layout:** White bg, 3-column quote grid (stack on mobile)
**Animation:** Fade-up + stagger

```
[Eyebrow] เสียงจากน้องๆ
[Title] เพราะนี่คือสิ่งที่น้องบอกเราว่าต้องการ

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ "            │ │ "            │ │ "            │
│ ไม่รู้จะเริ่ม │ │ พอร์ตธรรมดา  │ │ ลงทุน 3 วัน  │
│ เก็บ port... │ │ ไม่ใช่เด็ก   │ │ ให้ลูกรู้ว่า  │
│              │ │ กิจกรรม...  │ │ 6 ปีข้างหน้า │
│ ───────────  │ │ ───────────  │ │ ───────────  │
│ (ม.4) ม.4    │ │ (ม.6) ม.6    │ │ (พ่อ) ผู้ปกครอง│
│ เตรียมอุดมฯ  │ │ Dek-D       │ │ Pantip      │
└──────────────┘ └──────────────┘ └──────────────┘

[CTA] เป็นส่วนหนึ่งของค่ายนี้ →
```

- Proof Card pattern: big quote mark (Cormorant Garamond), author with avatar circle

---

### S11: FAQ
**Purpose:** Handle remaining objections before conversion

**Layout:** Gray bg, centered column (max-width 700px), accordion
**Animation:** Fade-up

```
[Eyebrow] คำถามที่พบบ่อย
[Title] FAQ

[+] เกียรติบัตรใส่พอร์ต TCAS รอบ 1 ได้จริงไหม?
[+] ต้องมีพื้นฐานอะไรบ้าง?
[+] ค่าใช้จ่ายรวมอะไรบ้าง?
[+] ถ้าสมัครแล้วยกเลิกได้ไหม?
[+] ต่างจากค่ายอยากเป็นหมอ/MEDCHIC อย่างไร?
[+] สมัครคู่กับเพื่อนได้ไหม?
```

- Accordion: click to expand, +/× icon rotates
- Open state: teal text color, gold left border
- Smooth height transition

---

### S12: Final CTA — "ปิดการขาย"
**Purpose:** Last push to convert — emotional + urgency

**Layout:** Navy bg, centered, generous padding
**Animation:** Fade-up

```
[Badge] เปิดรับสมัครแล้ววันนี้

[Headline - large]
อย่าให้ความลังเล
เป็นเหตุผลที่พลาด
3 วันที่อาจเปลี่ยนทิศทางชีวิต    ← gold color

[Sub] เหลือ 38 ที่นั่ง · Early Bird ถึง 31 มีนาคม · สมัครคู่ลด 300 บาท

[Gold CTA - large] สมัครเข้าร่วมค่าย →
[Outline White] 📄 Download Brochure
[Outline White] ทัก LINE @AspectCareer

──────────────────────
LINE: @AspectCareer
Email: hello@aspectcareer.com
Tel: 08X-XXX-XXXX
```

---

### S13: Footer
**Purpose:** Legal, brand closure

**Layout:** Dark navy (#050D1A), minimal
```
[Aspect Logo - faded]  PathtoMed by AspectCareer    © 2025 AspectCareer
```

---

### S14: Sticky Mobile CTA (mobile only)
**Purpose:** Persistent conversion on mobile — always visible

```
┌─────────────────────────────────────────┐
│  เหลือ 38 ที่นั่ง เท่านั้น   [สมัครเลย →] │
└─────────────────────────────────────────┘
```

- Fixed bottom, navy bg, gold CTA button
- Shows only on mobile (< 768px)
- Body padding-bottom to prevent content overlap

---

## 3. Content Direction

### Headline Approach by Section

| Section | Approach | Why |
|---------|----------|-----|
| Hero | **Aspirational question** → "ไม่แน่ใจว่าอยากเป็นหมอ?" | Opens with the exact thought in target's head |
| Value Hooks | **Differentiation** → "ค่ายเดียวในไทยที่ทำทั้ง 3 อย่างนี้" | Positions against competitors immediately |
| Target | **Self-identification** → "เราออกแบบมาเพื่อ 2 กลุ่มนี้" | Visitor sees themselves |
| Philosophy | **Belief statement** → "เราเชื่อว่าการเรียนรู้ที่แท้จริง..." | Builds ideological alignment |
| Pricing | **Value framing** → "ทุนและราคาค่าเข้าร่วม" | Scholarship-first, not price-first |
| Final CTA | **Loss aversion** → "อย่าให้ความลังเลเป็นเหตุผลที่พลาด" | FOMO + emotional close |

### CTA Copy Direction

| Location | Copy | Action |
|----------|------|--------|
| Nav | "สมัครเลย →" | Jump to register section |
| Hero | "สมัครเข้าร่วมค่าย →" | Primary conversion |
| Value hooks | "สมัครเลย — รับเพียง 60 ที่ →" | Scarcity |
| Target M.4-5 | "เริ่มต้นที่นี่ →" | Softer, encouraging |
| Target M.6 | "สมัครก่อนเต็ม →" | Urgency (they have less time) |
| Credential box | "สมัครเลย — ก่อนที่นั่งเต็ม →" | Full-width, unavoidable |
| Final | "สมัครเข้าร่วมค่าย →" | Largest button on page |

### Tone
- Thai body text: IBM Plex Sans Thai, warm but professional
- English hooks: Garet Bold, punchy and premium
- Pain points: empathetic, use real quotes from Pantip/Dek-D
- Credentials: systematic language (verify, audit, digital badge)
- Urgency: factual scarcity (38 seats left), not hypey

---

## 4. User Flow

### Desktop Flow
```
[Land on page]
    ↓
[Hero morph animation plays — medical icons converge]
    ↓ (scroll)
[See partners + stats → "น่าเชื่อถือ"]
    ↓ (scroll)
[Countdown → "เวลาจำกัด!"]
    ↓ (scroll)
[Value hooks → "ค่ายนี้ต่างจากที่อื่น"]
    ↓ (scroll)
[Target cards → "นี่คือค่ายสำหรับฉัน/ลูกฉัน"]
    ↓ (scroll)
[Credentials → "credential ดีจริง verify ได้"]
    ↓ (scroll or click CTA)
[Timeline + Schedule → "เข้าใจแล้วว่าจะได้อะไร"]
    ↓ (scroll)
[Speakers → "มีหมอจริงมาสอน"]
    ↓ (scroll)
[Pricing → "ราคาเท่าไหร่ มีทุนด้วย"]
    ↓ (scroll)
[Social proof → "คนอื่นก็ชอบ"]
    ↓ (scroll)
[FAQ → "คำถามที่สงสัยตอบหมดแล้ว"]
    ↓ (scroll)
[Final CTA → CONVERT]
```

### Secondary Paths
- **Download Brochure** → captures interest for parents who want to discuss with spouse
- **LINE @AspectCareer** → captures leads who aren't ready to commit
- **Any gold CTA** → smooth scrolls to #register (Final CTA section)

### Mobile-Specific
- Sticky bottom CTA always visible after scrolling past hero
- Schedule tabs swipeable
- Pricing table → stacked cards
- Speakers → 2-column grid

---

## 5. Layout Wireframe

### Desktop (≥1280px)
```
┌──────────────────────────────────────────────────────┐
│ [NAV] Logo        Links...              [Gold CTA]   │ 64px fixed
├──────────────────────────────────────────────────────┤
│                                                      │
│               🩺 ⚕️ 🧬 💊 🔬 🫀                      │ 100vh
│                  (morph animation)                    │
│                                                      │
│              Path to MED.                            │
│     ไม่แน่ใจว่าอยากเป็นหมอ?                           │
│     3 วันนี้จะตอบคำถามนั้น                            │
│                                                      │
│     [Gold CTA] [Outline] [Outline]                   │
│                                                      │
│     3 วัน     60 ที่นั่ง    3 Cred     ม.4–6          │
├──────────────────────────────────────────────────────┤
│  ← KMUTT  SET  STEP CMU  AspectCareer  AI Skill →   │ Partner
│  ─── 3 ──── 60 ──── 3 ──── ม.4–6 ───                │ Stats
├──────────────────────────────────────────────────────┤
│            ⏳ ปิดรับสมัครใน                            │
│           [DD] : [HH] : [MM] : [SS]                 │ Countdown
│        🔴 เหลือเพียง 38 ที่นั่ง                        │
│              [Gold CTA]                              │
├──────────────────────────────────────────────────────┤
│  ทำไมต้องค่ายนี้                                      │ cream bg
│  ┌──────┐  ┌──────┐  ┌──────┐                        │
│  │  01  │  │  02  │  │  03  │                        │ 3-col grid
│  │ card │  │ card │  │ card │                        │
│  └──────┘  └──────┘  └──────┘                        │
│              [CTA]                                   │
├──────────────────────────────────────────────────────┤
│  ค่ายนี้เหมาะกับใคร                                   │ gray bg
│  ┌────────────┐  ┌────────────┐                      │
│  │  ม.4–ม.5   │  │   ม.6      │                      │ 2-col grid
│  └────────────┘  └────────────┘                      │
├──────────────────────────────────────────────────────┤
│  ┌────────────────┬────────────────┐                 │ navy bg
│  │ แนวทางของเรา    │  Credential    │                 │
│  │ 3 Pillars      │  Box           │                 │ 2-col
│  └────────────────┴────────────────┘                 │
├──────────────────────────────────────────────────────┤
│  ┌────────────────┬────────────────┐                 │ white bg
│  │ Timeline       │  Schedule Tabs │                 │
│  │ สำคัญ          │  Day 1/2/3     │                 │ 2-col
│  └────────────────┴────────────────┘                 │
├──────────────────────────────────────────────────────┤
│  วิทยากร                                             │ gray bg
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐                            │ 4-col
│  └───┘ └───┘ └───┘ └───┘                            │
├──────────────────────────────────────────────────────┤
│  ทุนและราคา                                          │ white bg
│  ┌──────────────────────────────┐                    │
│  │        Table / Cards         │                    │
│  └──────────────────────────────┘                    │
├──────────────────────────────────────────────────────┤
│  เสียงจากน้องๆ                                       │ white bg
│  ┌──────┐  ┌──────┐  ┌──────┐                        │ 3-col
│  │quote │  │quote │  │quote │                        │
│  └──────┘  └──────┘  └──────┘                        │
├──────────────────────────────────────────────────────┤
│  FAQ (centered, max-w-700)                           │ gray bg
│  [+] Question 1                                      │
│  [+] Question 2                                      │
│  ...                                                 │
├──────────────────────────────────────────────────────┤
│        อย่าให้ความลังเลเป็นเหตุผลที่พลาด              │ navy bg
│        3 วันที่อาจเปลี่ยนทิศทางชีวิต                   │
│        [Gold CTA] [Outline] [Outline]                │
│        LINE · Email · Tel                            │
├──────────────────────────────────────────────────────┤
│  [Footer] Logo                      © AspectCareer   │
└──────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌────────────────────┐
│ [Logo]    [☰] [CTA]│ Nav (hamburger)
├────────────────────┤
│                    │
│  (morph animation) │ 100vh
│  Path to MED.      │
│  ไม่แน่ใจว่า...     │
│  [Gold CTA]        │
│  [Outline]         │
│                    │
│  3   60   3  ม.4–6 │ Stats (2x2 grid)
├────────────────────┤
│ ← Partners →       │ Slider
├────────────────────┤
│ ⏳ Countdown       │
│ [DD]:[HH]:[MM]:[SS]│
│ [Gold CTA]         │
├────────────────────┤
│ ┌────────────────┐ │
│ │ Card 01        │ │ Stack 1-col
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │ Card 02        │ │
│ └────────────────┘ │
│ ┌────────────────┐ │
│ │ Card 03        │ │
│ └────────────────┘ │
├────────────────────┤
│ Target ม.4-5 card  │ Stack
│ Target ม.6 card    │
├────────────────────┤
│ Philosophy         │ Stack
│ Credential box     │
├────────────────────┤
│ Timeline           │ Stack
│ Schedule tabs      │ (swipeable)
├────────────────────┤
│ ┌───┐ ┌───┐       │
│ │Spk│ │Spk│       │ 2-col
│ └───┘ └───┘       │
│ ┌───┐ ┌───┐       │
│ │Spk│ │Spk│       │
│ └───┘ └───┘       │
├────────────────────┤
│ Pricing cards      │ Stack
│ (1 per tier)       │
├────────────────────┤
│ Quote cards        │ Stack
├────────────────────┤
│ FAQ accordion      │
├────────────────────┤
│ Final CTA          │
├────────────────────┤
│ Footer             │
├────────────────────┤
│ [Sticky CTA bar]   │ Fixed bottom
└────────────────────┘
```

---

## 6. Component Plan

### Reuse (from design-system/patterns/)
| Component | Source | Used In |
|-----------|--------|---------|
| Gold CTA Button | `patterns/buttons.md` | Nav, Hero, Countdown, Value, Credential, Timeline, Final CTA |
| Outline Button | `patterns/buttons.md` | Hero, Target, Pricing |
| Hook Card | `patterns/cards.md` | S4 Value Hooks |
| Target Card | `patterns/cards.md` | S5 Target Audience |
| Credential Card | `patterns/cards.md` | S6 Credential Box |
| Form Input | `patterns/forms.md` | (if registration form added later) |
| Fade-Up Animation | `patterns/scroll-animations.md` | All content sections |
| Stagger Animation | `patterns/scroll-animations.md` | Card grids |
| Counter Animation | `patterns/scroll-animations.md` | Stat bar |
| Gold Accent Line | `patterns/decorations.md` | Section dividers |
| Badge/Pill | `patterns/decorations.md` | Tier badges, credential tags, hero badge |
| Eyebrow Label | `patterns/decorations.md` | All section headers |
| Stat Block | `patterns/decorations.md` | Stat bar |

### New Components to Create
| Component | Path (suggested) | Purpose |
|-----------|-----------------|---------|
| `ScrollMorphHero` | `src/components/hero/ScrollMorphHero.tsx` | Adapted 21st.dev scroll-morph-hero with medical icons |
| `PartnerSlider` | `src/components/ui/PartnerSlider.tsx` | Auto-scrolling infinite logo ticker (CSS marquee) |
| `CountdownTimer` | `src/components/ui/CountdownTimer.tsx` | Live countdown to registration deadline |
| `ScheduleTabs` | `src/components/camp/ScheduleTabs.tsx` | Day 1/2/3 tab switcher with schedule grid |
| `SpeakerCard` | `src/components/camp/SpeakerCard.tsx` | Speaker with avatar, name, role, institution |
| `PricingTable` | `src/components/camp/PricingTable.tsx` | Desktop table → mobile cards responsive |
| `ProofCard` | `src/components/camp/ProofCard.tsx` | Testimonial with big quote mark and author |
| `FaqAccordion` | `src/components/ui/FaqAccordion.tsx` | Collapsible Q&A with smooth animation |
| `StickyMobileCTA` | `src/components/ui/StickyMobileCTA.tsx` | Fixed bottom bar (mobile only) |
| `Navbar` | `src/components/layout/Navbar.tsx` | Fixed nav with scroll state |
| `Footer` | `src/components/layout/Footer.tsx` | Minimal footer |
| `SectionWrapper` | `src/components/layout/SectionWrapper.tsx` | Section with fade-up, bg variant, container |

### Tech Stack (for new project)
| Layer | Tool |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion (for scroll-morph-hero), CSS for the rest |
| Icons | Lucide React |
| Font | Google Fonts (IBM Plex Sans Thai) + local (Garet, Times NR Condensed) |
| Toast | Sonner |

---

## Notes

- **Hero reference:** https://21st.dev/community/components/prashantsom75/scroll-morph-hero/default — adapt to use medical icons instead of image cards
- **Content source:** `materials/pathtomedcamp.html` — keep messaging close, refine UX language for Aspect brand tone
- **Partner slider:** CSS-only marquee animation (like medchic), no JS library needed
- **All scroll animations:** trigger once only, use Intersection Observer
- **Responsive priority:** Design mobile-first, the sticky CTA is critical for mobile conversion
