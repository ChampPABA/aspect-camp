export const LINE_URL = "https://lin.ee/Z1aJYor";
export const LINE_ID = "@AspectCareer";
export const INSTAGRAM_HANDLE = "@aspectcareer";

export const NAV_LINKS = [
  { label: "ทำไมต้องค่ายนี้", href: "#why" },
  { label: "ตาราง", href: "#schedule" },
  { label: "วิทยากร", href: "#speakers" },
  { label: "ราคา", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_INTRO = {
  label: "Aspect Med Camp · 1–3 พฤษภาคม 2568",
  headline: [
    { text: "ทุกจังหวะ", tone: "default" as const },
    { text: "หัวใจ", tone: "accent" as const },
    { text: "มีเรื่องเล่า", tone: "default" as const },
  ],
  sub: "จากนักเรียนที่ยังไม่แน่ใจ สู่ผู้สร้าง Healthcare Innovation — ด้วยมือของน้องเอง",
};

export const HERO_STATS = [
  { value: "3", label: "วันเต็ม" },
  { value: "60", label: "ที่นั่งจำกัด" },
  { value: "3", label: "ทุนการศึกษา" },
];
export const HERO_STATS_SUB = "สำหรับนักเรียน ม.4 – ม.6 ที่สนใจเส้นทางแพทย์";

export const HERO_BENEFITS_TITLE = "3 วันนี้จะได้อะไร";
export const HERO_BENEFITS = [
  'เลิก "เดาสุ่ม" ว่าอยากเดินเส้นทางแพทย์หรือเปล่า',
  "สร้าง Healthcare Innovation จริง ตัดสินโดยหมอจริง",
  "MicroCredential KMUTT + Certificate SET ใส่ portfolio TCAS ได้ทันที",
];

export const HERO_CTA = {
  date: "เชียงใหม่ · 1–3 พฤษภาคม 2568",
  title: ["พร้อมก้าวแรก", "สู่เส้นทางแพทย์?"],
};

export const WHY_PILLARS = [
  {
    num: "01",
    image: "/assets/med-camp/why/why-1.webp",
    title: "Medical Innovation & Research Poster",
    desc: "สร้าง Healthcare Innovation Project แก้ปัญหาสุขภาพจริง ด้วย Design Thinking — กระบวนการที่ Stanford, IDEO ใช้จริง พร้อม Research Poster คุณภาพระดับวิชาการ",
    usp: "✓ พอร์ต TCAS รอบ 1 ที่กรรมการอยากเห็น",
  },
  {
    num: "02",
    image: "/assets/med-camp/why/why-2.webp",
    title: "Lab & Workshop Hands-on",
    desc: "ลงมือทำจริงในสภาพแวดล้อมทางการแพทย์ — Prototype, ทดสอบ, ปรับแก้ ทุก session ออกแบบโดยผู้เชี่ยวชาญ ไม่ใช่แค่นั่งฟัง",
    usp: "✓ ต่างจากค่ายอื่นที่เน้นดูงานอย่างเดียว",
  },
  {
    num: "03",
    image: "/assets/med-camp/why/why-3.webp",
    title: "Private 1-on-1 Consultation",
    desc: "ปรึกษาส่วนตัวกับอาจารย์แพทย์และ mentor รายทีม — ได้ feedback ตรงจุด พร้อม Letter of Recommendation สำหรับผู้รับทุน",
    usp: "✓ ไม่มีค่ายเอกชนรายใดทำแบบนี้",
  },
];

export const PARTNERS = [
  { src: "/assets/med-camp/logos/logo-set.png", alt: "SET", isSvg: false },
  { src: "/assets/med-camp/logos/logo-step.png", alt: "STEP CMU", isSvg: false },
  { src: "/assets/med-camp/logos/logo-ai.svg", alt: "AI Skill Training", isSvg: true },
  { src: "/assets/med-camp/logos/logo-4life.svg", alt: "4Life", isSvg: true },
];

export type ScheduleBadge = "ws" | "lec" | "pitch" | "award";

export type ScheduleItem = {
  time: string;
  title: string;
  desc?: string;
  badge?: { label: string; kind: ScheduleBadge };
};

export type ScheduleDay = {
  tabLabel: string;
  heading: string;
  items: ScheduleItem[];
};

export const SCHEDULE: ScheduleDay[] = [
  {
    tabLabel: "Day 1 — 1 พ.ค.",
    heading: "Day 1 — Discover & Empathize",
    items: [
      { time: "08:00–09:00", title: "ลงทะเบียน & เปิดค่าย" },
      {
        time: "09:00–10:00",
        title: "Hacking Health: Innovation Method",
        desc: "แนะนำ Design Thinking + Team Forming",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "10:00–11:30",
        title: "Session 1: Empathize",
        desc: "ค้นหา Pain Points จากผู้ป่วยจริง ลงพื้นที่เก็บข้อมูล",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "13:00–14:30",
        title: "Session 2: Define",
        desc: "POV Statement + HMW Questions",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "14:30–16:00",
        title: "Healthcare Innovation Intro",
        desc: "โดยแพทย์ผู้เชี่ยวชาญ",
        badge: { label: "Lecture", kind: "lec" },
      },
      {
        time: "16:00–17:30",
        title: "Team Consultation",
        desc: "ปรึกษา Mentor รายทีม",
        badge: { label: "Workshop", kind: "ws" },
      },
    ],
  },
  {
    tabLabel: "Day 2 — 2 พ.ค.",
    heading: "Day 2 — Innovate & Build",
    items: [
      {
        time: "09:00–10:30",
        title: "Session 3: Ideate",
        desc: "Crazy 8s + Idea Voting",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "10:30–12:00",
        title: "Session 4: AI in Healthcare",
        desc: "เรียนรู้ AI Tools สำหรับวงการแพทย์",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "13:00–15:00",
        title: "Session 5: Prototype",
        desc: "สร้าง Low-fi Prototype จาก Concept",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "15:00–16:30",
        title: "Business Model",
        desc: "จาก Solution สู่ Impact จริง",
        badge: { label: "Lecture", kind: "lec" },
      },
      {
        time: "16:30–18:00",
        title: "Mentor Office Hours",
        desc: "1-on-1 Consultation กับอาจารย์แพทย์",
        badge: { label: "Workshop", kind: "ws" },
      },
    ],
  },
  {
    tabLabel: "Day 3 — 3 พ.ค.",
    heading: "Day 3 — Pitch & Win",
    items: [
      {
        time: "09:00–10:00",
        title: "เตรียม Pitch Final",
        badge: { label: "Workshop", kind: "ws" },
      },
      {
        time: "10:00–12:00",
        title: "Pitching Challenge",
        desc: "นำเสนอต่อกรรมการแพทย์และนักลงทุนจริง",
        badge: { label: "Pitch", kind: "pitch" },
      },
      {
        time: "13:00–13:30",
        title: "ประกาศผลรางวัล",
        badge: { label: "Award", kind: "award" },
      },
      {
        time: "13:30–14:00",
        title: "พิธีมอบ Certificate + Digital Badge",
        desc: "MicroCredential KMUTT · SET Certificate · AI Skill Certificate",
        badge: { label: "Ceremony", kind: "award" },
      },
    ],
  },
];

export type Speaker = {
  photo: string;
  alt: string;
  role: string;
  name: string;
  affiliation: string;
  tag: string;
};

export const SPEAKERS: Speaker[] = [
  {
    photo: "/assets/med-camp/speakers/speaker-1.jpg",
    alt: "ผศ.นพ.สุรัตน์ ตันประเวช",
    role: "กรรมการหลัก",
    name: "ผศ.นพ.สุรัตน์ ตันประเวช",
    affiliation: "ภาควิชาแพทย์ คณะแพทยศาสตร์\nHealthcare Innovation Specialist",
    tag: "🩺 Clinical Expert",
  },
  {
    photo: "/assets/med-camp/speakers/speaker-2.jpg",
    alt: "วรพรหม พัสธรธัชกร",
    role: "Research Mentor",
    name: "นางสาววรพรหม พัสธรธัชกร",
    affiliation:
      "นักศึกษาปริญญาเอก สาขา Perovskite PV\nBest Poster Presentation Award — PhD School, Germany",
    tag: "🔬 Research Excellence",
  },
];

export type PricingTier = {
  tier: string;
  amount: string;
  amountKind: "free" | "paid";
  original?: string;
  slots: string;
  slotsMuted?: boolean;
  condition: string;
  ctaLabel: string;
  ctaVariant: "navy" | "outline" | "gold";
  featured?: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "Full Scholarship",
    amount: "ฟรี",
    amountKind: "free",
    original: "ปกติ 5,500 บาท",
    slots: "เหลือ 3 ทุน",
    condition:
      "คะแนนสูงสุดจากการคัดเลือก + สัมภาษณ์ผ่าน — เข้าค่ายฟรี 100% พร้อม Letter of Recommendation จากแพทย์",
    ctaLabel: "สมัครทุน →",
    ctaVariant: "navy",
  },
  {
    tier: "Half Scholarship",
    amount: "2,750",
    amountKind: "paid",
    original: "ปกติ 5,500 บาท",
    slots: "10 ทุน",
    condition: "เขียน Essay + แสดง motivation ชัดเจน ลด 50% + Portfolio Review 1 ครั้ง",
    ctaLabel: "สมัครทุน →",
    ctaVariant: "outline",
  },
  {
    tier: "Early Bird",
    amount: "3,900",
    amountKind: "paid",
    original: "ปกติ 5,500 บาท",
    slots: "ราคาพิเศษ",
    slotsMuted: true,
    condition: "สมัครก่อนปิด Early Bird — ลด 29% จากราคาปกติ Credentials ครบ 3 ชิ้น",
    ctaLabel: "สมัคร Early Bird →",
    ctaVariant: "gold",
    featured: true,
  },
  {
    tier: "ราคาปกติ",
    amount: "5,500",
    amountKind: "paid",
    slots: "ราคาเต็ม",
    slotsMuted: true,
    condition: "สมัครหลังปิด Early Bird — Credentials ครบ 3 ชิ้น + ที่พัก อาหาร ทุกมื้อ",
    ctaLabel: "สมัครเลย →",
    ctaVariant: "outline",
  },
];

export const PRICING_NOTE = {
  prefix: "สมัครคู่กับเพื่อน ",
  bold: "ลดเพิ่มอีก 300 บาท/คน",
  suffix: " · ราคารวมที่พัก อาหาร วัสดุ workshop และ Credentials ทั้งหมด",
};

export const FAQ_ITEMS = [
  {
    q: "เกียรติบัตรใส่พอร์ต TCAS รอบ 1 ได้จริงไหม?",
    a: "ได้จริง — MicroCredential จาก KMUTT เป็น verifiable digital badge ที่มี metadata ครบ กรรมการ TCAS กดลิงก์ดูได้ทันที ต่างจากเกียรติบัตรกระดาษที่ verify ไม่ได้",
  },
  {
    q: "ต้องมีพื้นฐานอะไรบ้าง?",
    a: 'ไม่จำเป็นต้องมีพื้นฐานด้านแพทย์หรือวิทยาศาสตร์ขั้นสูง — ค่ายออกแบบมาสำหรับน้องที่ "สนใจ" เส้นทางสายสุขภาพ ทุก session มี facilitator ดูแล',
  },
  {
    q: "ค่าใช้จ่ายรวมอะไรบ้าง?",
    a: "ราคาค่าสมัครรวมทุกอย่าง: ที่พัก 2 คืน อาหารทุกมื้อ วัสดุ workshop ทั้งหมด MicroCredential KMUTT, SET Certificate, AI Skill Certificate และ Portfolio Package ไม่มีค่าใช้จ่ายเพิ่มเติม",
  },
  {
    q: "รับนักเรียนระดับชั้นไหนบ้าง?",
    a: "เปิดรับนักเรียนระดับ ม.4–ม.6 ที่สนใจเส้นทางแพทย์หรือ Healthcare ไม่จำกัดสายการเรียน",
  },
  {
    q: "ถ้าสมัครทุนแต่ไม่ผ่าน จะเสียสิทธิ์หรือเปล่า?",
    a: "ไม่เสียสิทธิ์ — น้องสามารถสมัครในราคา Early Bird หรือราคาปกติได้ต่อ ทีมงานจะติดต่อแจ้งผลการคัดเลือกทุนก่อนปิด Early Bird",
  },
];

export const FINAL_CTA = {
  titleHead: "พร้อมก้าวแรก",
  titleHigh: "สู่เส้นทาง",
  titleAccent: "แพทย์",
  titleTail: "?",
  sub: "60 ที่นั่ง · 1–3 พฤษภาคม 2568 · เชียงใหม่",
};

export const HERO_FRAME_COUNT = 91;
export const HERO_FRAME_BASE = "/assets/med-camp/hero-frames";
export const LOGO_SRC = "/assets/med-camp/logos/logo.png";
