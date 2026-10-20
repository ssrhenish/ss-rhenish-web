import React from "react";
import { TIMELINE_EVENTS } from "./data";

export default function HistoryPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Header Intro Section ─── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 pt-20 pb-12">
        <div className="bg-[var(--ast-global-color-4,#fff)] border-l-4 border-[var(--ast-global-color-2,#222)] pl-6 py-6 shadow-sm rounded-r-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
            中華基督教禮賢會上水堂歷史及大事回顧
          </h2>
          <p className="text-base md:text-lg leading-[1.8] text-[var(--ast-global-color-3,#555)]">
            上水堂的歷史可追溯至1938年抗戰初期，當時中國受到日本侵略，有部份禮賢會深圳堂會友逃難到香港。當時深圳堂的堂主任龔子謙牧師（即現時上水堂會友龔蓮愛姊妹的父親）把握時機在上水區繼續牧養信徒和傳揚福音，聚會地點就是現時上水馬會道中華基督教會的前身 —— 世光園；1946年龔牧師重返深圳堂，上水區的工作便停頓了。直至1972年，區會決定承接香港宣教會的福音工作及招集本會會友，在上水新成路六號二樓開辦佈道基址，禮賢會上水堂就是這成立了。五十年來在上水堂發生大小事情實在多不勝數，讓我們從下列所記的一些事項，走看上水堂的五十年恩典歲月。
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" aria-hidden="true"></div>

      {/* ─── 2. Vertical Timeline Section ─── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
        <div className="relative border-l-2 border-[var(--ast-global-color-1,#8c2525)] ml-4 md:ml-32 space-y-12">
          {TIMELINE_EVENTS.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--ast-global-color-1,#8c2525)] border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Date Badge (positioned on the left for desktop view matching classic timelines) */}
              <div className="md:absolute md:-left-36 md:top-1 text-sm font-bold text-[var(--ast-global-color-1,#8c2525)] mb-1 md:mb-0">
                {item.date}
              </div>

              {/* Content Card */}
              <div className="bg-[var(--ast-global-color-5,#f9f9f9)] border border-slate-200/80 p-6 rounded-xl shadow-sm space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[var(--ast-global-color-2,#222)]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. Bottom Call-to-Action Card ─── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div className="bg-[var(--ast-global-color-5,#f9f9f9)] border border-[var(--ast-global-color-6,#e2e8f0)] rounded-xl p-8 md:p-12 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-lg md:text-xl font-bold text-[var(--ast-global-color-7,#333)] leading-relaxed">
              上帝所愛的教會上水堂，天天都經歷神的愛。對上水堂的會友來說，每天都有值得他們回顧的大小事情，因為它們都是上帝恩典的足跡。你亦可以回顧上水堂的詳細歷史，重溫與主同在的恩典歲月。
            </h3>
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1w_oihGfdaMo8JWFdw-VKtIkqlIkfRHLO?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--ast-global-color-0,#8c2525)] hover:bg-[var(--ast-global-color-1,#6d1a1a)] text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow transition-colors whitespace-nowrap"
            >
              <span>詳細歷史</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                aria-hidden="true"
                className="w-4 h-4 fill-current"
              >
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}