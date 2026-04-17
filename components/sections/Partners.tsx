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
              <div
                key={p.alt}
                className="relative w-[200px] transition-[opacity,transform] hover:opacity-100 hover:scale-105 opacity-85"
                style={{ height: h }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
