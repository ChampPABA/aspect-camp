import {
  FINAL_CTA,
  INSTAGRAM_HANDLE,
  LINE_ID,
  LINE_URL,
} from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="relative text-center bg-navy-deep py-[140px] px-[5%]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,185,120,0.06) 0%, transparent 65%)",
        }}
      />
      <h2
        className="font-extrabold leading-[1.15] mb-5 relative"
        style={{ fontSize: "clamp(32px, 5.5vw, 58px)" }}
      >
        {FINAL_CTA.titleHead}
        <br />
        {FINAL_CTA.titleHigh}
        <span className="text-gold">{FINAL_CTA.titleAccent}</span>
        {FINAL_CTA.titleTail}
      </h2>
      <p className="text-[20px] text-cream/55 mb-10 relative">{FINAL_CTA.sub}</p>
      <div className="flex gap-4 justify-center flex-wrap relative">
        <a href={LINE_URL} className="btn-main">
          สมัครเข้าร่วมค่าย →
        </a>
        <a href="#faq" className="btn-outline">
          ดูคำถามที่พบบ่อย
        </a>
      </div>
      <div className="mt-8 flex gap-7 justify-center flex-wrap text-[16px] text-muted-dark relative">
        <span>
          สอบถาม <strong className="text-cream/80">LINE: {LINE_ID}</strong>
        </span>
        <span>
          IG: <strong className="text-cream/80">{INSTAGRAM_HANDLE}</strong>
        </span>
      </div>
    </section>
  );
}
