import Image from "next/image";
import { SPEAKERS } from "@/lib/constants";

export default function SpeakersGrid() {
  return (
    <section id="speakers" className="speakers-section sec-wrap bg-navy-deep">
      <div className="sec-head">
        <div className="eyebrow">วิทยากรและกรรมการ</div>
        <h2>ตัดสินโดยแพทย์จริง</h2>
        <p className="text-cream/60">
          กรรมการจากสถาบันชั้นนำ พร้อมให้ feedback ตรงจุดทุกทีม
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {SPEAKERS.map((s) => (
          <article
            key={s.name}
            className="bg-white/4 border border-border-dark rounded-[20px] overflow-hidden transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/30"
          >
            <Image
              src={s.photo}
              alt={s.alt}
              width={900}
              height={280}
              className="w-full h-[280px] object-cover object-top block"
            />
            <div className="p-7">
              <div className="text-[13px] font-semibold tracking-[0.12em] uppercase text-gold mb-2.5">
                {s.role}
              </div>
              <h3 className="text-[22px] font-bold mb-2 leading-snug">{s.name}</h3>
              <p className="text-[15px] text-muted-dark leading-[1.6] mb-4 whitespace-pre-line">
                {s.affiliation}
              </p>
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/25 rounded-md text-[13px] text-gold">
                {s.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
