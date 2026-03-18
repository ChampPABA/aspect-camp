import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import HeroWrapper from "@/components/hero/HeroWrapper";
import PartnerTicker from "@/components/ui/PartnerTicker";
import CountdownTimer from "@/components/ui/CountdownTimer";
import FadeUp from "@/components/ui/FadeUp";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScheduleTabs from "@/components/camp/ScheduleTabs";
import SpeakerCard from "@/components/camp/SpeakerCard";
import PricingTable from "@/components/camp/PricingTable";
import ProofCard from "@/components/camp/ProofCard";
import CredentialBox from "@/components/camp/CredentialBox";
import {
  HOOKS,
  TARGET_AUDIENCES,
  PILLARS,
  TIMELINE_ITEMS,
  SPEAKERS,
  TESTIMONIALS,
  STATS,
  LINE_URL,
  SEATS_LEFT,
} from "@/lib/constants";
import { HandMetal, Clock, TrendingUp } from "lucide-react";

const pillarIcons = [HandMetal, Clock, TrendingUp];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* S1: Hero */}
      <HeroWrapper />

      {/* S2: Partner Ticker + Stat Bar */}
      <PartnerTicker />
      <div className="bg-navy py-6 px-[5%]">
        <div className="mx-auto max-w-[1100px] flex justify-center gap-9 flex-wrap">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-[var(--font-heading)] text-[32px] font-bold text-white leading-none">
                {"isText" in s ? (
                  String(s.value)
                ) : (
                  <AnimatedCounter target={s.value as number} />
                )}
              </div>
              <div className="text-xs text-white/45 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* S3: Countdown */}
      <CountdownTimer />

      {/* S4: Value Hooks */}
      <SectionWrapper bg="white" id="about">
        <FadeUp className="mb-12">
          <Eyebrow>ทำไมต้องค่ายนี้</Eyebrow>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3 mb-3.5">
            ค่ายเดียวในไทยที่ทำทั้ง 3 อย่างนี้
          </h2>
          <p className="text-[16px] text-gray-muted leading-[1.75] max-w-[560px]">
            ไม่ใช่แค่เกียรติบัตรเข้าร่วม — แต่เป็นประสบการณ์ที่พิสูจน์ว่าคุณ
            &ldquo;คิดแบบหมอ&rdquo; ได้จริง
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HOOKS.map((hook, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="relative bg-white border border-black/8 rounded-[20px] p-7 overflow-hidden hover:shadow-md hover:-translate-y-[3px] transition-all duration-200">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-navy" />
                <div className="font-[var(--font-heading)] text-5xl font-bold text-cream-hover leading-none mb-3.5">
                  {hook.num}
                </div>
                <h3 className="text-lg font-semibold text-gray-text mb-2.5">
                  {hook.title}
                </h3>
                <p className="text-sm text-gray-muted leading-[1.7]">
                  {hook.desc}
                </p>
                <div className="mt-3.5 py-2 px-3 bg-result-green/8 rounded-[8px] text-[12px] text-[#085041] font-medium">
                  {hook.usp}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="text-center mt-9">
          <Button href={LINE_URL} variant="teal">
            สมัครเลย — รับเพียง 60 ที่ →
          </Button>
        </div>
      </SectionWrapper>

      {/* S5: Target Audience */}
      <SectionWrapper bg="gray">
        <FadeUp className="mb-12">
          <Eyebrow>ค่ายนี้เหมาะกับใคร</Eyebrow>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3">
            เราออกแบบมาเพื่อ 2 กลุ่มนี้
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TARGET_AUDIENCES.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className={`bg-white border border-black/8 rounded-[20px] p-8 overflow-hidden relative border-t-[3px] ${
                  t.borderColor === "gold"
                    ? "border-t-gold"
                    : "border-t-navy"
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    t.borderColor === "gold"
                      ? "bg-gold/10 text-[#633806]"
                      : "bg-navy/10 text-navy"
                  }`}
                >
                  {t.badge}
                </span>
                <p className="text-base font-medium text-gray-text mb-2.5">
                  {t.pain}
                </p>
                <p className="text-sm text-gray-muted italic mb-2.5">
                  {t.source}
                </p>
                <p className="text-sm text-gray-muted leading-[1.7]">
                  {t.solution
                    .split("**")
                    .map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-navy font-semibold">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                </p>
                <div className="mt-5">
                  <Button href={LINE_URL} variant={t.ctaVariant} size="sm">
                    {t.ctaText}
                  </Button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>

      {/* S6: Philosophy + Credentials */}
      <SectionWrapper bg="navy" hasGlow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          <FadeUp>
            <Eyebrow variant="gold">แนวทางของเรา</Eyebrow>
            <h2 className="font-[var(--font-heading)] text-[clamp(26px,3.5vw,40px)] font-semibold text-white leading-[1.2] mt-3 mb-4">
              เราเชื่อว่าการเรียนรู้
              <br />
              ที่แท้จริงเกิดจาก
              <br />
              <span className="text-gold">การลงมือทำจริง</span>
            </h2>
            <p className="text-[15px] text-white/60 leading-[1.8] mb-8">
              ผสานกับ Design Thinking และการโค้ชแบบรายบุคคล
              เพื่อสร้างเยาวชนที่พร้อมสู่โลกอนาคต — ไม่ใช่แค่ฟัง แต่ต้องลงมือ
              คิด และพิสูจน์ตัวเอง
            </p>
            <div className="flex flex-col gap-4">
              {PILLARS.map((p, i) => {
                const Icon = pillarIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white/4 border border-white/8 border-l-2 border-l-gold rounded-r-[12px] p-[18px]"
                  >
                    <div className="w-9 h-9 rounded-[8px] bg-gold/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-white mb-1">
                        {p.name}
                      </div>
                      <div className="text-[13px] text-white/50 leading-[1.5]">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <CredentialBox />
          </FadeUp>
        </div>
      </SectionWrapper>

      {/* S7: Timeline + Schedule */}
      <SectionWrapper bg="white" id="schedule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          <FadeUp>
            <Eyebrow>กำหนดการ</Eyebrow>
            <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3 mb-3.5">
              Timeline สำคัญ
            </h2>
            <p className="text-[16px] text-gray-muted leading-[1.75] mb-9 max-w-[560px]">
              อย่าพลาดทุก deadline — ที่นั่งจำกัดและปิดรับทันทีเมื่อเต็ม
            </p>
            {/* Timeline */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-navy via-gold to-navy rounded-full" />
              {TIMELINE_ITEMS.map((item, i) => (
                <div key={i} className="relative mb-7 last:mb-0">
                  <div
                    className={`absolute w-3 h-3 rounded-full border-2 border-white ${
                      item.dotType === "active"
                        ? "bg-gold-to w-4 h-4 -left-[31px] top-0.5 shadow-[0_0_0_4px_rgba(212,146,10,0.25)]"
                        : item.dotType === "gold"
                          ? "bg-gold-to -left-[29px] top-1 shadow-[0_0_0_3px_rgba(212,146,10,0.2)]"
                          : "bg-navy -left-[29px] top-1 shadow-[0_0_0_3px_rgba(15,42,74,0.2)]"
                    }`}
                  />
                  <div className="text-[12px] text-navy font-medium mb-1">
                    {item.date}
                  </div>
                  <div className="text-[15px] font-medium text-gray-text">
                    {item.event}
                  </div>
                  {"note" in item && item.note && (
                    <div className="text-[13px] text-gray-muted mt-0.5">
                      {item.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href={LINE_URL} variant="teal">
                สมัครก่อนเต็ม →
              </Button>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Eyebrow>ตารางค่าย</Eyebrow>
            <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3 mb-5">
              Workshop Program
            </h2>
            <ScheduleTabs />
          </FadeUp>
        </div>
      </SectionWrapper>

      {/* S8: Speakers */}
      <SectionWrapper bg="gray" id="speakers">
        <FadeUp className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <div>
            <Eyebrow>วิทยากรและกรรมการ</Eyebrow>
            <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3 mb-3.5">
              Medical Faculty & Judges
            </h2>
            <p className="text-[16px] text-gray-muted leading-[1.75] max-w-[560px]">
              ตัดสินโดยแพทย์จริงจากสถาบันชั้นนำ
            </p>
          </div>
          <Button href={LINE_URL} variant="teal" size="sm">
            สมัครเลย →
          </Button>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SPEAKERS.map((s, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <SpeakerCard {...s} />
            </FadeUp>
          ))}
        </div>
      </SectionWrapper>

      {/* S9: Pricing */}
      <SectionWrapper bg="white" id="scholarship">
        <FadeUp className="mb-12">
          <Eyebrow>ค่าใช้จ่าย</Eyebrow>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3 mb-3.5">
            ทุนและราคาค่าเข้าร่วม
          </h2>
          <p className="text-[16px] text-gray-muted leading-[1.75] max-w-[560px]">
            เลือก tier ที่เหมาะกับน้อง — ยิ่งสมัครเร็ว ยิ่งได้ราคาดีกว่า
          </p>
        </FadeUp>
        <FadeUp>
          <PricingTable />
        </FadeUp>
      </SectionWrapper>

      {/* S10: Social Proof */}
      <SectionWrapper bg="white">
        <FadeUp className="mb-12">
          <Eyebrow>เสียงจากน้องๆ</Eyebrow>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3">
            เพราะนี่คือสิ่งที่น้องบอกเราว่าต้องการ
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <ProofCard {...t} />
            </FadeUp>
          ))}
        </div>
        <div className="text-center mt-9">
          <Button href={LINE_URL} variant="teal">
            เป็นส่วนหนึ่งของค่ายนี้ →
          </Button>
        </div>
      </SectionWrapper>

      {/* S11: FAQ */}
      <SectionWrapper bg="gray" id="faq">
        <div className="max-w-[700px] mx-auto">
          <FadeUp className="text-center mb-12">
            <Eyebrow>คำถามที่พบบ่อย</Eyebrow>
            <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text leading-[1.2] mt-3">
              FAQ
            </h2>
          </FadeUp>
          <FadeUp>
            <FaqAccordion />
          </FadeUp>
        </div>
      </SectionWrapper>

      {/* S12: Final CTA */}
      <SectionWrapper bg="navy" id="register" hasGlow>
        <FadeUp className="text-center">
          <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 text-[12px] text-gold uppercase tracking-[0.1em] mb-5">
            เปิดรับสมัครแล้ววันนี้
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,5vw,52px)] font-bold text-white leading-[1.15] mb-3.5">
            อย่าให้ความลังเล
            <br />
            เป็นเหตุผลที่พลาด
            <br />
            <span className="text-gold">3 วันที่อาจเปลี่ยนทิศทางชีวิต</span>
          </h2>
          <p className="text-[16px] text-white/55 mb-8">
            เหลือ {SEATS_LEFT} ที่นั่ง · Early Bird ถึง 31 มีนาคม · สมัครคู่ลด
            300 บาท
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button href={LINE_URL} size="lg">
              สมัครเข้าร่วมค่าย →
            </Button>
            <Button href={LINE_URL} variant="outline-white">
              📄 Download Brochure
            </Button>
            <Button href={LINE_URL} variant="outline-white">
              ทัก LINE @AspectCareer
            </Button>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 flex gap-7 justify-center flex-wrap">
            <div className="text-[14px] text-white/50">
              LINE: <strong className="text-white/75">@AspectCareer</strong>
            </div>
            <div className="text-[14px] text-white/50">
              Email:{" "}
              <strong className="text-white/75">hello@aspectcareer.com</strong>
            </div>
            <div className="text-[14px] text-white/50">
              Tel: <strong className="text-white/75">08X-XXX-XXXX</strong>
            </div>
          </div>
        </FadeUp>
      </SectionWrapper>

      {/* S13: Footer */}
      <Footer />

      {/* S14: Sticky Mobile CTA */}
      <StickyMobileCTA />
    </>
  );
}
