import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import HeroWrapper from "@/components/hero/HeroWrapper";
import ReadingProgress from "@/components/variations/editorial/ReadingProgress";
import EditorialPhilosophy from "@/components/variations/editorial/EditorialPhilosophy";
import EditorialHookBlock from "@/components/variations/editorial/EditorialHookBlock";
import HorizontalCredentialScroll from "@/components/variations/editorial/HorizontalCredentialScroll";
import EditorialAudience from "@/components/variations/editorial/EditorialAudience";
import EditorialSpeakers from "@/components/variations/editorial/EditorialSpeakers";
import PullQuoteCarousel from "@/components/variations/editorial/PullQuoteCarousel";
import InlineScheduleTimeline from "@/components/variations/editorial/InlineScheduleTimeline";
import EditorialPricing from "@/components/variations/editorial/EditorialPricing";
import MarginNoteFaq from "@/components/variations/editorial/MarginNoteFaq";
import PartnerTicker from "@/components/ui/PartnerTicker";
import { SEATS_LEFT, LINE_URL } from "@/lib/constants";

export default function Ex1Page() {
  return (
    <>
      <ReadingProgress />
      <Navbar />
      <HeroWrapper />
      <EditorialPhilosophy />
      <EditorialHookBlock />
      <HorizontalCredentialScroll />
      <EditorialAudience />
      <EditorialSpeakers />
      <PullQuoteCarousel />
      <InlineScheduleTimeline />
      <EditorialPricing />
      <MarginNoteFaq />
      <PartnerTicker />
      {/* Final CTA */}
      <section className="bg-navy py-28 px-[5%] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(212,185,120,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1100px] text-center">
          <div
            className="font-[var(--font-heading)] font-bold text-white/5 leading-none select-none mb-[-40px] relative z-0"
            style={{ fontSize: "clamp(80px, 15vw, 180px)" }}
          >
            MED.
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 text-[12px] text-gold uppercase tracking-[0.1em] mb-5">
              เปิดรับสมัครแล้ววันนี้
            </div>
            <h2
              className="font-[var(--font-heading)] font-bold text-white leading-[1.15] mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
            >
              อย่าให้ความลังเลเป็นเหตุผลที่พลาด
              <br />
              <span className="text-gold italic">
                3 วันที่อาจเปลี่ยนทิศทางชีวิต
              </span>
            </h2>
            <p className="text-[16px] text-white/55 mb-8">
              เหลือ {SEATS_LEFT} ที่นั่ง · Early Bird ถึง 31 มีนาคม ·
              สมัครคู่ลด 300 บาท
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={LINE_URL}
                className="inline-flex items-center gap-2 rounded-full font-medium bg-gradient-to-r from-gold-from to-gold-to text-navy px-9 py-4 text-[17px] transition-all duration-200 hover:-translate-y-0.5"
              >
                สมัครเข้าร่วมค่าย →
              </a>
              <a
                href={LINE_URL}
                className="inline-flex items-center gap-2 rounded-full font-medium bg-transparent text-white border border-white/50 hover:bg-white/8 px-7 py-3.5 text-[15px] transition-all duration-200"
              >
                ทัก LINE @AspectCareer
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
