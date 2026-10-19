import React from "react";
import { CORE_VALUES_DATA } from "./data";

export default function AboutPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Introduction Section (Matching UAGB Container) ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] py-16 md:py-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
              <strong>本堂簡介</strong>
            </h2>
          </div>
          <p className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)]">
            上水堂成立於1972年。2006年，教會成功購置新堂，不但增強了教友對教會的歸屬感，亦展現教會對未來發展的信心。2009年，教會著重培訓領袖團隊，配合推行分區牧養，目的是使教友的需要在分區中得到更大的照顧和滿足，在小組中，分享生活及信仰經驗，發掘和使用自己最強的恩賜，大家一起同心為主作工，使教會興旺，上帝得榮耀。現時經常參加教會崇拜人數約二百人，教會主日崇拜著重會眾和詩班的詩歌讚美、講道及聖餐。
          </p>
        </div>
      </div>

      {/* ─── 2. Core Values Section with Color Accents ─── */}
      <div className="alignfull bg-[var(--ast-global-color-4,#fff)] py-16 md:py-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Heading */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--ast-global-color-2,#222)]">
              禮賢會上水堂核心價值：
            </h2>
          </div>

          {/* Core Values Grid (4 Columns Layout with Color Borders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES_DATA.map((item, index) => (
              <div
                key={index}
                className={`bg-[var(--ast-global-color-5,#f9f9f9)] border border-[var(--ast-global-color-6,#e2e8f0)] border-t-4 ${item.accentColor} rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all`}
              >
                <div className="space-y-4">
                  {/* Number Prefix with matching tone */}
                  <p className="text-2xl md:text-3xl font-bold opacity-80">
                    {item.number}
                  </p>
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[var(--ast-global-color-2,#222)]">
                    {item.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-sm md:text-base text-[var(--ast-global-color-3,#555)] pt-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}