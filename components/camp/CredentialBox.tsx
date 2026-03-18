import { CREDENTIALS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

const tagColors = {
  teal: "bg-result-green/20 text-[#4ECBA0] border-result-green/30",
  gold: "bg-gold-from/20 text-gold-to border-gold-from/30",
  purple: "bg-[#7F77DD]/20 text-[#AFA9EC] border-[#7F77DD]/30",
};

export default function CredentialBox() {
  return (
    <div className="bg-white/4 border border-white/10 rounded-[20px] p-7 overflow-hidden">
      <div className="text-[13px] text-white/45 uppercase tracking-[0.1em] mb-5">
        หลังจบค่าย น้องได้รับ
      </div>
      {CREDENTIALS.map((cred, i) => (
        <div
          key={i}
          className="flex items-center gap-3.5 py-3.5 border-b border-white/7 last:border-b-0"
        >
          <div className="w-11 h-11 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/70 text-[11px] font-semibold text-center leading-tight shrink-0 whitespace-pre-line">
            {cred.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-medium text-white">{cred.name}</div>
            <div className="text-[12px] text-white/40 mt-0.5">{cred.org}</div>
          </div>
          <span
            className={`text-[10px] px-2.5 py-0.5 rounded-full border shrink-0 ${tagColors[cred.tagColor]}`}
          >
            {cred.tag}
          </span>
        </div>
      ))}
      <div className="mt-4 p-3 bg-result-green/8 border border-result-green/20 rounded-[8px] text-[12px] text-white/55 leading-[1.6]">
        <strong className="text-[#4ECBA0] font-medium">ทำไมถึง matter?</strong>{" "}
        KMUTT Badge ตรวจสอบได้ผ่านลิงก์ดิจิทัล — กรรมการ TCAS
        กดลิงก์ดูได้ทันที ต่างจากเกียรติบัตรกระดาษที่ verify ไม่ได้
      </div>
      <div className="mt-5 text-center">
        <Button
          href={LINE_URL}
          variant="teal"
          className="w-full justify-center !bg-navy-hover !text-cream"
        >
          สมัครเลย — ก่อนที่นั่งเต็ม →
        </Button>
      </div>
    </div>
  );
}
