import { PRICING_TIERS, LINE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

const tierBadgeClasses = {
  full: "bg-gradient-to-r from-gold-from/20 to-gold-to/20 text-[#633806] border border-gold",
  half: "bg-result-green/10 text-[#085041] border border-result-green/30",
  early: "bg-[#534AB7]/10 text-[#3C3489] border border-[#AFA9EC]",
  regular: "bg-cream-muted text-gray-text border border-cream-hover",
};

export default function PricingTable() {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {["ประเภท", "เงื่อนไข", "สิ่งที่ได้รับเพิ่ม", "ราคา", ""].map(
                (h) => (
                  <th
                    key={h}
                    className="bg-navy text-white/60 text-[12px] font-medium uppercase tracking-[0.08em] py-3.5 px-5 text-left border-b-2 border-gold"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {PRICING_TIERS.map((tier) => (
              <tr key={tier.tier} className="hover:bg-cream-muted transition-colors">
                <td className="py-[18px] px-5 border-b border-black/8">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold ${tierBadgeClasses[tier.tierClass]}`}
                  >
                    {tier.tier}
                  </span>
                </td>
                <td className="py-[18px] px-5 border-b border-black/8 text-[14px] text-gray-text">
                  {tier.condition}
                </td>
                <td className="py-[18px] px-5 border-b border-black/8">
                  <div className="flex flex-col gap-1">
                    {tier.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-1.5 text-[13px]"
                      >
                        <span className="text-result-green font-bold">✓</span>
                        {b}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-[18px] px-5 border-b border-black/8">
                  <span
                    className={`font-[var(--font-heading)] text-[22px] font-bold ${
                      tier.priceColor || "text-gray-text"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span className="text-[13px] text-gray-muted line-through ml-1.5">
                      {tier.originalPrice}
                    </span>
                  )}
                </td>
                <td className="py-[18px] px-5 border-b border-black/8">
                  <Button href={LINE_URL} variant={tier.ctaVariant} size="sm">
                    สมัครเลย →
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-4">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.tier}
            className="bg-white border border-black/8 rounded-[20px] p-6"
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold mb-3 ${tierBadgeClasses[tier.tierClass]}`}
            >
              {tier.tier}
            </span>
            <p className="text-[14px] text-gray-muted mb-3">{tier.condition}</p>
            <div className="flex flex-col gap-1 mb-4">
              {tier.benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 text-[13px]"
                >
                  <span className="text-result-green font-bold">✓</span>
                  {b}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`font-[var(--font-heading)] text-[22px] font-bold ${
                    tier.priceColor || "text-gray-text"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.originalPrice && (
                  <span className="text-[13px] text-gray-muted line-through ml-1.5">
                    {tier.originalPrice}
                  </span>
                )}
              </div>
              <Button href={LINE_URL} variant={tier.ctaVariant} size="sm">
                สมัครเลย →
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-5 p-4 bg-gold-from/10 border-l-[3px] border-gold rounded-[12px] text-[13px] text-[#633806] leading-[1.6]">
        ราคาข้างต้นรวม: ที่พัก 2 คืน · อาหารทุกมื้อ · วัสดุ workshop ทั้งหมด ·
        MicroCredential KMUTT · SET Certificate · AI Skill Certificate ·
        Portfolio Package
        <br />
        <strong>สมัครคู่กับเพื่อน ลดเพิ่มอีก 300 บาท/คน</strong>
      </div>
    </>
  );
}
