import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import HeroWrapper from "@/components/hero/HeroWrapper";
import StatusBar from "@/components/variations/applike/StatusBar";
import BentoGrid from "@/components/variations/applike/BentoGrid";
import PersonaFlipCard from "@/components/variations/applike/PersonaFlipCard";
import GlassCredentialCards from "@/components/variations/applike/GlassCredentialCards";
import ParallelSchedule from "@/components/variations/applike/ParallelSchedule";
import SpeakerRow from "@/components/variations/applike/SpeakerRow";
import BentoPricing from "@/components/variations/applike/BentoPricing";
import HorizontalTimeline from "@/components/variations/applike/HorizontalTimeline";
import NotificationStack from "@/components/variations/applike/NotificationStack";
import SearchableFaq from "@/components/variations/applike/SearchableFaq";
import MorphingCTA from "@/components/variations/applike/MorphingCTA";

export default function Ex2Page() {
  return (
    <>
      <Navbar />
      <HeroWrapper />
      <StatusBar />
      <section className="bg-navy py-16 px-[5%]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-white/40 uppercase tracking-[0.15em] mb-4 font-[var(--font-hook)]">
            ทำไมต้องค่ายนี้
          </div>
          <BentoGrid />
        </div>
      </section>
      <section className="bg-cream-muted py-16 px-[5%]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            ค่ายนี้เหมาะกับใคร
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            เราออกแบบมาเพื่อ 2 กลุ่มนี้
          </h2>
          <PersonaFlipCard />
        </div>
      </section>
      <section className="bg-navy py-16 px-[5%]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-white/40 uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            Credentials
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-white mb-10">
            หลักฐานที่ verify ได้จริง
          </h2>
          <GlassCredentialCards />
        </div>
      </section>
      <section className="bg-cream-muted py-16 px-[5%]" id="schedule">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            ตารางค่าย
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            Workshop Program — 3 วันเต็ม
          </h2>
          <ParallelSchedule />
        </div>
      </section>
      <section className="bg-white py-16 px-[5%]" id="speakers">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            วิทยากร
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            Medical Faculty &amp; Judges
          </h2>
          <SpeakerRow />
        </div>
      </section>
      <section className="bg-cream-muted py-16 px-[5%]" id="scholarship">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            ค่าใช้จ่าย
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            ทุนและราคาค่าเข้าร่วม
          </h2>
          <BentoPricing />
        </div>
      </section>
      <section className="bg-white py-16 px-[5%]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            กำหนดการ
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            Timeline สำคัญ
          </h2>
          <HorizontalTimeline />
        </div>
      </section>
      <section className="bg-cream-muted py-16 px-[5%]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            เสียงจากน้องๆ
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            เพราะนี่คือสิ่งที่น้องบอกว่าต้องการ
          </h2>
          <NotificationStack />
        </div>
      </section>
      <section className="bg-white py-16 px-[5%]" id="faq">
        <div className="mx-auto max-w-[700px]">
          <div className="text-[11px] text-gray-muted uppercase tracking-[0.15em] mb-2 font-[var(--font-hook)]">
            FAQ
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-gray-text mb-10">
            คำถามที่พบบ่อย
          </h2>
          <SearchableFaq />
        </div>
      </section>
      <MorphingCTA />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
