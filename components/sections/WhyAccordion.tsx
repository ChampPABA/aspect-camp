"use client";

import { useState } from "react";
import { WHY_PILLARS } from "@/lib/constants";

export default function WhyAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="why"
      className="why-section sec-wrap bg-cream text-navy-deep"
    >
      <div className="sec-head">
        <div className="eyebrow" style={{ color: "var(--color-navy)" }}>
          ทำไมต้องค่ายนี้
        </div>
        <h2 className="text-navy-deep">ค่ายเดียวที่ทำทั้ง 3 อย่างนี้</h2>
        <p className="text-navy-deep/65">
          ไม่ใช่แค่เกียรติบัตรเข้าร่วม แต่เป็นประสบการณ์ที่พิสูจน์ว่าคุณคิดแบบหมอได้จริง
        </p>
      </div>

      <div
        className="accordion"
        onMouseLeave={() => setActiveIdx(0)}
      >
        {WHY_PILLARS.map((pillar, idx) => (
          <div
            key={pillar.num}
            className={`acc-p ${activeIdx === idx ? "active" : ""}`}
            onMouseEnter={() => setActiveIdx(idx)}
          >
            <div
              className="abg"
              style={{ backgroundImage: `url('${pillar.image}')` }}
            />
            <div className="agr" />
            <div className="anum">{pillar.num}</div>
            <div className="ainfo">
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
