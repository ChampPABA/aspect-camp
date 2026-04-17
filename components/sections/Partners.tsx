import Image from "next/image";
import { PARTNERS } from "@/lib/constants";

export default function Partners() {
  return (
    <div className="bg-cream border-t border-b border-navy-deep/10">
      <div className="max-w-[900px] mx-auto px-[5%] py-[60px] text-center">
        <div className="text-[14px] tracking-[0.22em] uppercase text-navy mb-10">
          พาร์ตเนอร์ร่วมมือทางวิชาการ
        </div>
        <div className="flex items-center justify-center gap-10 sm:gap-14 flex-wrap">
          {PARTNERS.map((p) => {
            const h = p.isSvg ? 52 : 56;
            return (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={200}
                height={h}
                sizes="200px"
                style={{ height: h }}
                className="w-auto object-contain opacity-85 transition hover:opacity-100 hover:scale-105"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
