import { LINE_URL, PRICING_NOTE, PRICING_TIERS } from "@/lib/constants";

const ctaClass: Record<"navy" | "outline" | "gold", string> = {
  navy: "bg-navy-deep text-cream hover:bg-navy",
  outline:
    "border-[1.5px] border-navy-deep/25 text-navy hover:border-navy",
  gold: "bg-gradient-to-br from-gold-from to-gold-to text-navy-deep shadow-gold hover:shadow-gold-hover",
};

export default function Pricing() {
  const [bold, rest] = PRICING_NOTE.split(/\*\*(.+?)\*\*/);

  return (
    <section
      id="pricing"
      className="pricing-section sec-wrap bg-cream text-navy-deep"
    >
      <div className="sec-head">
        <div className="eyebrow" style={{ color: "var(--color-navy)" }}>
          ค่าใช้จ่ายและทุน
        </div>
        <h2 className="text-navy-deep">เลือก tier ที่เหมาะกับน้อง</h2>
        <p className="text-navy-deep/60">
          ราคารวมทุกอย่าง — ที่พัก อาหาร วัสดุ workshop และ Credentials ครบ 3 ชิ้น
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-[1080px] mx-auto">
        {PRICING_TIERS.map((t) => (
          <div
            key={t.tier}
            className={`relative bg-white border rounded-[18px] p-[30px_22px] text-center flex flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)] ${
              t.featured
                ? "border-gold shadow-[0_4px_20px_rgba(212,146,10,0.2)]"
                : "border-navy-deep/12"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-gold-from to-gold-to text-navy-deep text-[11px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap">
                แนะนำ
              </span>
            )}
            <div className="text-[15px] font-bold mb-3.5 text-navy-deep">
              {t.tier}
            </div>
            <div
              className={`text-[42px] font-extrabold leading-none mb-1 ${
                t.amountKind === "free" ? "text-[#16a34a]" : "text-gold"
              }`}
            >
              {t.amount}
            </div>
            <div
              className={`text-[13px] text-navy-deep/35 line-through mb-2 min-h-[18px] ${
                t.original ? "" : "invisible"
              }`}
            >
              {t.original ?? "—"}
            </div>
            <div
              className={`text-[13px] font-semibold mb-3 ${
                t.slotsMuted ? "text-navy-deep/40" : "text-red"
              }`}
            >
              {t.slots}
            </div>
            <p className="text-[14px] text-navy-deep/55 leading-[1.6] mb-[22px] flex-1">
              {t.condition}
            </p>
            <a
              href={LINE_URL}
              className={`block px-4 py-3 rounded-full text-[14px] font-bold transition-all hover:-translate-y-0.5 ${ctaClass[t.ctaVariant]}`}
            >
              {t.ctaLabel}
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-7 text-[15px] text-navy-deep/50">
        {bold}
        <strong className="text-navy-deep">{rest}</strong>
        {PRICING_NOTE.split("**").slice(2).join("**")}
      </div>
    </section>
  );
}
