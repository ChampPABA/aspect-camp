import Image from "next/image";
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
            <div className="mb-5 bg-white rounded-2xl w-[220px] h-[96px] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
              <Image
                src={c.logo}
                alt={c.logoAlt}
                width={200}
                height={80}
                className="max-h-[60px] max-w-[180px] w-auto h-auto object-contain"
              />
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
