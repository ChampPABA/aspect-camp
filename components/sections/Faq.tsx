import { FAQ_ITEMS } from "@/lib/constants";

export default function Faq() {
  return (
    <section id="faq" className="faq-section sec-wrap bg-navy">
      <div className="sec-head">
        <div className="eyebrow">FAQ</div>
        <h2 className="text-cream">คำถามที่พบบ่อย</h2>
      </div>

      <div className="max-w-[740px] mx-auto">
        {FAQ_ITEMS.map((item, i) => (
          <details
            key={item.q}
            className="group border-b border-border-dark"
            open={i === 0}
          >
            <summary className="list-none py-[22px] text-[18px] font-medium cursor-pointer flex justify-between items-center gap-4 text-cream transition-colors hover:text-gold">
              <span>{item.q}</span>
              <span className="text-[22px] text-muted-dark shrink-0 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="pb-[22px] text-[17px] text-muted-dark leading-[1.75]">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
