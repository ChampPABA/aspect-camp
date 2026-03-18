import type { Metadata } from "next";
import { ibmPlexSansThai, cormorantGaramond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Path to Med Camp — ค่าย Healthcare Innovation สำหรับ ม.4–ม.6 | AspectCareer",
  description:
    "ค่าย Healthcare Innovation 3 วัน 2 คืน เชียงใหม่ สำหรับ ม.4–ม.6 ที่สนใจเส้นทางแพทย์ ได้ MicroCredential KMUTT + Certificate SET ใส่พอร์ต TCAS ได้ทันที",
  keywords: [
    "ค่ายแพทย์",
    "Path to Med",
    "TCAS",
    "พอร์ต",
    "Healthcare Innovation",
    "MicroCredential",
    "KMUTT",
    "AspectCareer",
  ],
  openGraph: {
    title: "Path to Med Camp — 3 วันที่อาจเปลี่ยนทิศทางชีวิต",
    description:
      "ค่าย Healthcare Innovation 3 วัน สำหรับ ม.4–ม.6 · MicroCredential KMUTT · Certificate SET · AI Healthcare",
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
    <html
      lang="th"
      className={`${ibmPlexSansThai.variable} ${cormorantGaramond.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
