import Image from "next/image";
import { LINE_URL, LOGO_SRC } from "@/lib/constants";

export default function CinematicFooter() {
  return (
    <footer className="bg-navy-deep px-[5%] py-10 border-t border-white/6">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
        <Image
          src={LOGO_SRC}
          alt="Aspect"
          width={100}
          height={22}
          sizes="100px"
          className="h-[22px] w-auto object-contain opacity-35"
        />
        <div className="flex gap-5">
          <a
            href={LINE_URL}
            className="text-[14px] text-white/30 transition-colors hover:text-gold"
          >
            LINE
          </a>
          <a
            href="#"
            className="text-[14px] text-white/30 transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[14px] text-white/30 transition-colors hover:text-gold"
          >
            Facebook
          </a>
        </div>
        <div className="text-[13px] text-white/20">
          © 2025 Aspect Career. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
