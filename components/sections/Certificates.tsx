import { CERTIFICATES } from "@/lib/constants";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="sec-wrap bg-navy-deep text-cream"
    >
      <div className="sec-head">
        <div className="eyebrow">การรับรองจากหน่วยงานรัฐ</div>
        <h2>เกียรติบัตรครบทุกด้าน</h2>
        <p className="text-cream/65">
          AI · English Presentation · Pitching · Innovation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[880px] mx-auto">
        {CERTIFICATES.map((c) => (
          <article
            key={c.title}
            className="bg-white/[0.04] border border-white/10 rounded-[20px] p-7 flex flex-col items-center text-center transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[0.06]"
          >
            <div className="h-24 w-full flex items-center justify-center mb-5">
              <div className="inline-flex flex-col items-center justify-center px-7 py-4 border-[1.5px] border-gold/55 rounded-md">
                <span className="text-gold font-extrabold tracking-[0.12em] text-[26px] leading-none">
                  {c.badgeMain}
                </span>
                <span className="text-cream/70 text-[11px] tracking-[0.22em] mt-2">
                  {c.badgeSub}
                </span>
              </div>
            </div>
            <h3 className="text-[17px] font-bold mb-2 leading-snug">
              {c.title}
            </h3>
            <p className="text-[14px] text-cream/60 leading-[1.6]">
              {c.source}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
