import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-6 px-[5%] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logos/Aspect B.png"
          alt="Aspect"
          width={80}
          height={22}
          className="h-5 w-auto opacity-40"
        />
        <span className="text-[13px] text-white/20 hidden sm:inline">
          PathtoMed by AspectCareer
        </span>
      </div>
      <div className="text-[12px] text-white/20">
        © 2025 AspectCareer. All rights reserved.
      </div>
    </footer>
  );
}
