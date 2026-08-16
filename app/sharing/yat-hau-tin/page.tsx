import React from "react";
import NewsletterInteractive from "./NewsletterInteractive";

// SEO Metadata for Next.js
export const metadata = {
  title: "一口田 - 教會家訊",
  description: "分享靈修心聲，紀錄信仰歷程",
};

// Initial Data (In production, this can come from a database, CMS, or local JSON)
const ISSUES_DATA = [
  {
    id: 1,
    vol: "001",
    title: "信仰的起點",
    date: "2024年1月",
    category: "牧者隨筆",
    content: "內文...",
    image: "/images/yht/yht-001.png"
  },
  {
    id: 2,
    vol: "002",
    title: "感恩的心",
    date: "2024年2月",
    category: "會友園地",
    content: "這是第 002 期家訊的完整內文...",
    image: "/images/yht/yht-002.png"
  },
  {
    id: 3,
    vol: "003",
    title: "主內平安",
    date: "2024年3月",
    category: "小徑靈光",
    content: "這是第 003 期家訊的完整內文...",
    image: "/images/yht/yht-003.png"
  },
  {
    id: 4,
    vol: "004",
    title: "靈修筆記",
    date: "2024年4月",
    category: "靈命札記",
    content: "這是第 004 期家訊的完整內文...",
    image: "/images/yht/yht-004.png"
  },
  {
    id: 5,
    vol: "005",
    title: "同行成長",
    date: "2024年5月",
    category: "會友園地",
    content: "這是第 005 期家訊的完整內文...",
    image: "/images/yht/yht-005.png"
  },
  {
    id: 6,
    vol: "006",
    title: "主愛永恆",
    date: "2024年6月",
    category: "牧者隨筆",
    content: "這是第 006 期家訊的完整內文...",
    image: "/images/yht/yht-006.png"
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Banner (Server Rendered) */}
      <header 
        className="relative bg-slate-900 text-white py-24 px-4 text-center bg-cover bg-center" 
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/natures-01.jpg')" }}
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-4">一口田</h1>
          <p className="text-lg md:text-xl text-slate-200">
            教會家訊 — 分享靈修心聲，紀錄信仰歷程
          </p>
        </div>
      </header>

      {/* Intro Section (Server Rendered) */}
      <section className="bg-white py-12 px-4 border-b border-slate-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">「一口田」的含義</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            「一口田」象徵著心田的耕耘。我們盼望透過這個家訊平台，聚集弟兄姊妹在文字中的事奉與分享。
          </p>
        </div>
      </section>

      {/* Client-side Interactive Area */}
      <NewsletterInteractive issues={ISSUES_DATA} />

      {/* Footer Disclaimer (Server Rendered) */}
      <footer 
        className="relative py-12 px-4 bg-cover bg-center flex justify-center items-center" 
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/natures-01.jpg')" }}
      >
        <div className="max-w-xl w-full bg-white/95 rounded-lg border-l-4 border-blue-600 p-6 shadow-xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">聲明</h3>
          <p className="text-slate-600 text-sm">編輯有權在不改變原意的情況下修改稿件，並保留決定是否刊登及刊登時間的權利。</p>
        </div>
      </footer>
    </main>
  );
}