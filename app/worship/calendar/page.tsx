"use client";

import React, { useState } from "react";

// You can expand this array as you add more years (e.g., 2024, 2025, 2026)
const CALENDAR_YEARS = [
  { year: "2025", title: "2025年行事曆", pdfUrl: "http://34.92.250.101/wp-content/uploads/2025/01/2025年行事曆.pdf" },
  { year: "2026", title: "2026年行事曆", pdfUrl: "http://34.92.250.101/wp-content/uploads/2026/01/2025年行事曆.pdf" },
  // Example for future years:
  // { year: "2026", title: "2026年行事曆", pdfUrl: "..." }
];

export default function CalendarPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  // Find the active calendar data based on the selected year
  const activeCalendar = CALENDAR_YEARS.find((c) => c.year === selectedYear) || CALENDAR_YEARS[0];

  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden min-h-[80vh] flex flex-col justify-between">
      {/* ─── Main Content Section ─── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-16 w-full space-y-8">
        
        {/* ─── CONSTANT ON TOP: Year Selection Switcher ─── */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-6">
          <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
              {activeCalendar.title}
            </h2>
          </div>

          {/* Year Buttons Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-2">選擇年份：</span>
            {CALENDAR_YEARS.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  selectedYear === item.year
                    ? "bg-[var(--ast-global-color-0,#8c2525)] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item.year}年
              </button>
            ))}
          </div>
        </div>

        {/* Top Action Bar for active PDF */}
        <div className="flex justify-end">
          <a
            href={activeCalendar.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--ast-global-color-0,#8c2525)] hover:bg-[var(--ast-global-color-1,#6d1a1a)] text-white text-xs font-bold px-4 py-2 rounded-lg shadow transition-colors"
          >
            <span>在新視窗開啟 PDF ↗</span>
          </a>
        </div>

        {/* PDF Embed Block */}
        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
          <object
            key={activeCalendar.pdfUrl} // Forces re-render when switching years
            className="w-full h-[600px] rounded-lg border border-slate-200 bg-white"
            data={activeCalendar.pdfUrl}
            type="application/pdf"
            aria-label={activeCalendar.title}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <p className="text-sm text-slate-600">
                您的瀏覽器不支援直接內嵌預覽 PDF 檔案。
              </p>
              <a
                href={activeCalendar.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--ast-global-color-2,#222)] text-white text-xs font-bold px-6 py-3 rounded-lg shadow"
              >
                點擊此處下載或檢視 {activeCalendar.title}.pdf
              </a>
            </div>
          </object>

          {/* Direct Link text below object */}
          <div className="text-center pt-2">
            <a
              href={activeCalendar.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              📄 {activeCalendar.title} (PDF)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}