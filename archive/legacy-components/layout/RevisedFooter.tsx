import Image from "next/image";
import { MessageCircle, Facebook, Instagram } from "lucide-react";
import { LINE_URL } from "@/lib/constants";

const socials = [
  { icon: MessageCircle, label: "LINE", href: LINE_URL },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/AspectCareer" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/AspectCareer" },
] as const;

export default function RevisedFooter() {
  return (
    <footer className="bg-navy-deep py-10 px-[5%] pb-24 sm:pb-10">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logos/Aspect B.png"
            alt="Aspect"
            width={80}
            height={22}
            className="h-5 w-auto opacity-40"
          />
          <span className="text-[13px] text-white/20 hidden sm:inline">
            Aspect Med Camp by AspectCareer
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/30 hover:text-gold transition-colors duration-200 hover:scale-110 transform"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[12px] text-white/20">
          &copy; {new Date().getFullYear()} AspectCareer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
