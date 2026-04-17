import type { Metadata } from "next";
import { ibmPlexSansThai } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aspect Med Camp 2025 — Healthcare Innovation Camp เชียงใหม่",
  description:
    "ค่าย Healthcare Innovation 3 วัน 2 คืน เชียงใหม่ สำหรับ ม.4–ม.6 ที่สนใจเส้นทางแพทย์ · Design Thinking · MicroCredential KMUTT · Certificate SET ใส่พอร์ต TCAS ได้ทันที",
  keywords: [
    "ค่ายแพทย์",
    "Aspect Med Camp",
    "Healthcare Innovation",
    "TCAS",
    "พอร์ต",
    "MicroCredential",
    "KMUTT",
    "AspectCareer",
    "เชียงใหม่",
  ],
  openGraph: {
    title: "Aspect Med Camp — 3 วันที่จะเปลี่ยนเส้นทางชีวิต",
    description:
      "3 วัน 2 คืน เชียงใหม่ · สร้าง Healthcare Innovation จริง ตัดสินโดยหมอจริง · MicroCredential KMUTT · SET · AI in Healthcare",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
