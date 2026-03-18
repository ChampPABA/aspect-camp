export const LINE_URL = "https://lin.ee/AspectCareer";
export const LINE_ID = "@AspectCareer";
export const EMAIL = "hello@aspectcareer.com";
export const PHONE = "08X-XXX-XXXX";
export const CAMP_DEADLINE = new Date("2025-04-10T23:59:59+07:00");
export const EARLY_BIRD_DEADLINE = "31 มีนาคม 2568";
export const SEATS_LEFT = 38;

export const NAV_LINKS = [
  { label: "เกี่ยวกับค่าย", href: "#about" },
  { label: "ตาราง", href: "#schedule" },
  { label: "วิทยากร", href: "#speakers" },
  { label: "ทุน", href: "#scholarship" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_BULLETS = [
  'เลิก "เดาสุ่ม" ว่าอยากเดินเส้นทางแพทย์หรือเปล่า',
  "สร้าง Healthcare Innovation จริง ตัดสินโดยหมอจริง",
  "ได้ MicroCredential KMUTT + Certificate SET ใส่พอร์ต TCAS ได้ทันที",
] as const;

export const STATS = [
  { value: 3, label: "วัน เต็ม" },
  { value: 60, label: "ที่นั่ง (จำกัด)" },
  { value: 3, label: "Credentials" },
  { value: "ม.4–6", label: "ระดับชั้น", isText: true },
] as const;

export const HOOKS = [
  {
    num: "01",
    title: "ลงมือทำจริง",
    desc: "สร้าง Healthcare Innovation Project แก้ปัญหาสุขภาพด้วย Design Thinking — กระบวนการที่ Stanford, IDEO ใช้จริง ไม่ใช่แค่นั่งฟัง",
    usp: "✓ ต่างจากค่ายอื่นที่เน้นดูงานอย่างเดียว",
  },
  {
    num: "02",
    title: "Credential ที่ verify ได้",
    desc: "MicroCredential จาก KMUTT + Pitching Certificate จาก SET กรรมการ TCAS กดลิงก์ดูได้ทันที — ต่างจากเกียรติบัตรกระดาษทั่วไป",
    usp: "✓ ไม่มีค่ายเอกชนรายใดมี credential ระดับนี้",
  },
  {
    num: "03",
    title: "ค้นพบตัวเอง",
    desc: 'ออกไปพร้อมคำตอบที่ชัดเจนว่า "เส้นทางแพทย์คือเส้นทางของฉัน" — เพราะได้ลองจริง ไม่ใช่แค่ฟังบรรยาย',
    usp: "✓ ออกแบบมาสำหรับคนที่ยังไม่แน่ใจ",
  },
] as const;

export const TARGET_AUDIENCES = [
  {
    badge: "นักเรียน ม.4–ม.5",
    borderColor: "navy",
    pain: '"ไม่รู้จะเริ่มเก็บพอร์ตยังไง และไม่รู้ว่าต้องหากิจกรรมแบบไหนถึงจะเข้าตากรรมการ"',
    source: "— เสียงจริงจาก Pantip",
    solution:
      "ค่ายนี้คือ **จุดเริ่มต้นที่ถูกทาง** — น้องจะได้ทั้ง Innovation Project สำหรับพอร์ต, ความรู้ว่าแพทย์ต้องเตรียมอะไร และ credential จากสถาบันจริงที่ใส่พอร์ตได้เลย ยังมีเวลาเหลืออีก 2–3 ปีให้ต่อยอด",
    ctaText: "เริ่มต้นที่นี่ →",
    ctaVariant: "outline-navy" as const,
  },
  {
    badge: "นักเรียน ม.6",
    borderColor: "gold",
    pain: '"พอร์ตเราธรรมดา ไม่ใช่เด็กกิจกรรม จะเตรียมใจล่วงหน้า"',
    source: "— เสียงจริงจาก Pantip",
    solution:
      'ยังทัน — 3 วันนี้น้องจะมี **Innovation Project + credential 3 ชิ้น** ที่พิสูจน์ว่าคิดแบบหมอได้จริง กรรมการ TCAS รอบ 1 อยากเห็น "กระบวนการคิด" ไม่ใช่แค่ตัวเลข',
    ctaText: "สมัครก่อนเต็ม →",
    ctaVariant: "gold" as const,
  },
] as const;

export const PILLARS = [
  {
    name: "Hands-on Learning",
    desc: "ทุก session ลงมือทำจริง — Empathy, Prototype, Pitch ครบในค่ายเดียว",
    icon: "plus" as const,
  },
  {
    name: "Design Thinking",
    desc: "กระบวนการที่ Stanford d.school และ IDEO ใช้จริงในการแก้ปัญหาระดับโลก",
    icon: "clock" as const,
  },
  {
    name: "Individual Coaching",
    desc: "Mentor ดูแลรายทีม ไม่ใช่สอนแบบ one-size-fits-all",
    icon: "chart" as const,
  },
] as const;

export const CREDENTIALS = [
  {
    logo: "KMUTT",
    name: "MicroCredential Digital Badge",
    org: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
    tag: "Verifiable",
    tagColor: "teal" as const,
  },
  {
    logo: "SET",
    name: "Pitching Certificate",
    org: "ตลาดหลักทรัพย์แห่งประเทศไทย",
    tag: "Official",
    tagColor: "gold" as const,
  },
  {
    logo: "AI\nSkill",
    name: "AI in Healthcare Certificate",
    org: "ทักษะ AI สำหรับวงการแพทย์ยุคใหม่",
    tag: "New",
    tagColor: "purple" as const,
  },
  {
    logo: "PORT\nFOLIO",
    name: "Innovation Project + Pitch Video",
    org: "ผลงานจริงสำหรับพอร์ต TCAS รอบ 1",
    tag: "TCAS Ready",
    tagColor: "teal" as const,
  },
] as const;

export const TIMELINE_ITEMS = [
  {
    date: "บัดนี้",
    event: "เปิดรับสมัคร — Early Bird",
    note: "ราคาพิเศษ 3,900 บาท (ปกติ 5,500)",
    dotType: "active" as const,
  },
  {
    date: "31 มีนาคม 2568",
    event: "ปิด Early Bird",
    note: "หลังจากนี้ราคาปกติ",
    dotType: "gold" as const,
  },
  {
    date: "10 เมษายน 2568",
    event: "ปิดรับสมัคร",
    note: "หรือเมื่อครบ 60 ที่ แล้วแต่อย่างใดถึงก่อน",
    dotType: "default" as const,
  },
  {
    date: "12 เมษายน 2568",
    event: "ประกาศรายชื่อผู้เข้าร่วม",
    dotType: "default" as const,
  },
  {
    date: "20–22 เมษายน 2568",
    event: "วันค่าย Path to Med",
    note: "เชียงใหม่ — 3 วัน 2 คืน",
    dotType: "gold" as const,
  },
] as const;

type ScheduleItem = {
  time: string;
  event: string;
  desc?: string;
  badge?: { label: string; type: "w" | "l" | "p" };
  isBreak?: boolean;
};

export const SCHEDULE: ScheduleItem[][] = [
  // Day 1
  [
    { time: "08.00–09.00", event: "ลงทะเบียน" },
    {
      time: "09.00–09.30",
      event: "เปิดค่าย + แนะนำตัว",
      badge: { label: "Lecture", type: "l" },
    },
    {
      time: "09.30–10.00",
      event: "Hacking Health",
      desc: "Team forming + Innovation Method",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "10.00–11.30",
      event: "Session 1: Empathize",
      desc: "ค้นหา Pain Points ผู้ป่วยจริง — ลงพื้นที่เก็บข้อมูล",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "11.30–12.00",
      event: "พักรับประทานอาหารเที่ยง",
      isBreak: true,
    },
    {
      time: "13.00–14.30",
      event: "Session 2: Define",
      desc: "POV Statement + HMW Questions",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "14.30–16.00",
      event: "Session 3: Healthcare Innovation Intro",
      desc: "โดยแพทย์ผู้เชี่ยวชาญ",
      badge: { label: "Lecture", type: "l" },
    },
    {
      time: "16.00–17.30",
      event: "Team Consultation",
      desc: "ปรึกษา Mentor รายทีม",
      badge: { label: "Workshop", type: "w" },
    },
  ],
  // Day 2
  [
    {
      time: "09.00–10.30",
      event: "Session 4: Ideate",
      desc: "Crazy 8s + Idea Voting",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "10.30–12.00",
      event: "Session 5: AI in Healthcare",
      desc: "เรียนรู้ AI Tools สำหรับวงการแพทย์",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "12.00–13.00",
      event: "พักรับประทานอาหารเที่ยง",
      isBreak: true,
    },
    {
      time: "13.00–15.00",
      event: "Session 6: Prototype",
      desc: "สร้าง Low-fi Prototype จาก concept",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "15.00–16.30",
      event: "Session 7: Business Model",
      desc: "จาก Solution สู่ Impact จริง",
      badge: { label: "Lecture", type: "l" },
    },
    {
      time: "16.30–18.00",
      event: "Mentor Office Hours",
      badge: { label: "Workshop", type: "w" },
    },
  ],
  // Day 3
  [
    {
      time: "09.00–10.00",
      event: "เตรียม Pitch Final",
      badge: { label: "Workshop", type: "w" },
    },
    {
      time: "10.00–12.00",
      event: "Pitching Challenge",
      desc: "นำเสนอต่อกรรมการแพทย์ + นักลงทุน",
      badge: { label: "Pitch", type: "p" },
    },
    {
      time: "12.00–13.00",
      event: "พักรับประทานอาหารเที่ยง",
      isBreak: true,
    },
    {
      time: "13.00–13.30",
      event: "ประกาศผลรางวัล",
      badge: { label: "Award", type: "p" },
    },
    {
      time: "13.30–14.00",
      event: "พิธีมอบ Certificate + Digital Badge",
      badge: { label: "Ceremony", type: "p" },
    },
    { time: "14.00–15.00", event: "รับประทานอาหารกลางวันร่วมกัน + ปิดค่าย" },
  ],
];

export const SCHEDULE_TABS = [
  "Day 1 — 20 เม.ย.",
  "Day 2 — 21 เม.ย.",
  "Day 3 — 22 เม.ย.",
] as const;

export const SPEAKERS = [
  {
    initials: "นพ.",
    name: "ผศ.นพ. [ชื่อ]",
    role: "ภาควิชาแพทย์\nคณะแพทยศาสตร์",
    institution: "CMU / MEDCHIC",
    isPlaceholder: false,
  },
  {
    initials: "พญ.",
    name: "พญ. [ชื่อ]",
    role: "Healthcare Innovation\nSpecialist",
    institution: "KMUTT",
    isPlaceholder: false,
  },
  {
    initials: "?",
    name: "กรรมการรับเชิญ",
    role: "Coming Soon",
    institution: "— ประกาศเร็วๆ นี้ —",
    isPlaceholder: true,
  },
  {
    initials: "?",
    name: "กรรมการรับเชิญ",
    role: "Coming Soon",
    institution: "— ประกาศเร็วๆ นี้ —",
    isPlaceholder: true,
  },
] as const;

export const PRICING_TIERS = [
  {
    tier: "🥇 Full Scholarship",
    tierClass: "full" as const,
    condition: "คะแนนสูงสุดในการคัดเลือก + สัมภาษณ์ผ่าน — มีเพียง 3 ทุน",
    benefits: ["เข้าค่ายฟรี 100%", "Letter of Rec จากแพทย์"],
    price: "ฟรี",
    priceColor: "text-result-green",
    originalPrice: "5,500",
    ctaVariant: "gold" as const,
  },
  {
    tier: "🥈 Half Scholarship",
    tierClass: "half" as const,
    condition: "Essay สมัคร + แสดง motivation ชัดเจน — 10 ทุน",
    benefits: ["ลด 50%", "Portfolio Review 1 ครั้ง"],
    price: "2,750",
    priceColor: "",
    originalPrice: "5,500",
    ctaVariant: "outline-navy" as const,
  },
  {
    tier: "🐦 Early Bird",
    tierClass: "early" as const,
    condition: "สมัครก่อน 31 มีนาคม 2568",
    benefits: ["ลด 29%"],
    price: "3,900",
    priceColor: "",
    originalPrice: "5,500",
    ctaVariant: "gold" as const,
  },
  {
    tier: "ราคาปกติ",
    tierClass: "regular" as const,
    condition: "สมัครหลัง 31 มีนาคม 2568",
    benefits: ["Credential ครบ 3 ชิ้น"],
    price: "5,500",
    priceColor: "",
    originalPrice: "",
    ctaVariant: "outline-navy" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    text: '"ไม่รู้จะเริ่มเก็บ port ยังไงดี และไม่รู้ว่าต้องหากิจกรรมแบบไหนถึงจะเข้าตากรรมการ — ค่ายนี้ตอบทุกข้อ"',
    avatar: "ม.4",
    name: "นักเรียน ม.4",
    detail: "โรงเรียนเตรียมอุดมฯ · Pantip",
  },
  {
    text: '"พอร์ตธรรมดา ไม่ใช่เด็กกิจกรรม... 3 วันนี้ทำให้รู้ว่าตัวเองยังทันและมีพอร์ตที่แตกต่างจริงๆ"',
    avatar: "ม.6",
    name: "นักเรียน ม.6",
    detail: "· Dek-D",
  },
  {
    text: '"ลงทุน 3 วัน ให้ลูกรู้ว่า 6 ปีข้างหน้าจะเป็นหมอใช่ไหม — คุ้มกว่าเสียเวลาเรียนผิดทาง"',
    avatar: "พ่อ",
    name: "ผู้ปกครอง",
    detail: "· Pantip",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "เกียรติบัตรใส่พอร์ต TCAS รอบ 1 ได้จริงไหม?",
    a: "ได้จริง — MicroCredential จาก KMUTT เป็น verifiable digital badge ที่มี metadata ครบ (สมรรถนะที่ผ่าน, ผู้ประเมิน, หลักฐาน) กรรมการกดลิงก์ดูได้ทันที ต่างจากเกียรติบัตรกระดาษทั่วไปที่ verify ไม่ได้",
  },
  {
    q: "ต้องมีพื้นฐานอะไรบ้าง?",
    a: 'ไม่จำเป็นต้องมีพื้นฐานด้านแพทย์หรือวิทยาศาสตร์ขั้นสูง — ค่ายออกแบบมาสำหรับน้องที่ "สนใจ" เส้นทางสายสุขภาพ ไม่ใช่คนที่ "พร้อมแล้ว" ทุก session มี facilitator ดูแล',
  },
  {
    q: "ค่าใช้จ่ายรวมอะไรบ้าง?",
    a: "ราคาค่าสมัครรวมทุกอย่าง: ที่พัก 2 คืน อาหารทุกมื้อ วัสดุ workshop ทั้งหมด MicroCredential KMUTT SET Certificate AI Skill Certificate และ Portfolio Package ไม่มีค่าใช้จ่ายเพิ่มเติมระหว่างค่าย",
  },
  {
    q: "ถ้าสมัครแล้วยกเลิกได้ไหม?",
    a: "ยกเลิกได้ก่อน 14 เมษายน 2568 รับเงินคืน 80% หากยกเลิกหลังจากนั้นจะได้รับ credit สำหรับรุ่นถัดไปแทน",
  },
  {
    q: "ต่างจากค่ายอยากเป็นหมอ/ค่าย MEDCHIC อย่างไร?",
    a: "ค่ายอยากเป็นหมอ (จุฬา) เน้นสัมผัสชีวิตหมอและ cadaver lab แต่ต้องผ่านการคัดเลือกแข่งขันสูง MEDCHIC เน้น hackathon สร้าง solution ส่วน Path to Med เน้น \"career clarity\" — น้องที่ยังไม่แน่ใจสมัครได้เลย ไม่ต้องผ่านการคัดเลือกแข่งขัน",
  },
  {
    q: "สมัครคู่กับเพื่อนได้ไหม?",
    a: "ได้เลย! สมัครคู่กับเพื่อน ลดเพิ่มอีก 300 บาท/คน ระบุชื่อเพื่อนในฟอร์มสมัคร",
  },
] as const;

export const PARTNER_NAMES = [
  "KMUTT",
  "SET",
  "STEP CMU",
  "AspectCareer",
  "AI Skill Training",
] as const;
