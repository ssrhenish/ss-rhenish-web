import React from "react";
import { FELLOWSHIP_DATA } from "./data";

export default function FellowshipsWordPressStyle() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Top Hero Header ─── */}
      <div 
        className="alignfull relative bg-cover bg-center text-white text-center py-[112px] px-6 sm:px-12 md:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('http://34.92.250.101/wp-content/uploads/2024/10/natures-01.jpg')`
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">團契簡介</h1>
          <p className="text-base md:text-lg text-white leading-relaxed">
            <strong>教會兄弟姐妹組成不同的團契或小組，</strong><br />
            <strong>歡迎你了解並加入我們。</strong>
          </p>
        </div>
      </div>

      {/* ─── 2. Main Sections (Removed the placeholder button area & added safe horizontal padding) ─── */}
      {FELLOWSHIP_DATA.map((section) => (
        <React.Fragment key={section.id}>
          {/* Category Heading with safe padding */}
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-4">
            <h2 className="text-2xl font-bold text-[var(--ast-global-color-2,#222)] border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
              {section.categoryTitle}
            </h2>
          </div>

          {/* Category Container with responsive side padding to prevent edge-cutting */}
          <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] py-20 px-6 sm:px-12 lg:px-16">
            <div className="max-w-6xl mx-auto space-y-16">
              {section.groups.map((group, gIndex) => (
                <React.Fragment key={gIndex}>
                  {/* Grid row: Image + Info Box */}
                  <div className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-8 lg:gap-12 items-center">
                    {/* Image block */}
                    <div className="w-full">
                      <img
                        src={group.imageSrc}
                        alt={group.name}
                        width={group.imageWidth}
                        height={group.imageHeight}
                        className="w-full h-[250px] md:h-[300px] object-cover rounded-[6px]"
                      />
                    </div>

                    {/* Info Box text block with safe spacing */}
                    <div className="space-y-3 text-left">
                      <p className="text-xs uppercase font-medium tracking-[2px] text-[var(--ast-global-color-2,#222)]">
                        {group.prefix}
                      </p>
                      <h3 className="text-xl font-bold text-[var(--ast-global-color-2,#222)]">
                        {group.name}
                      </h3>
                      <p className="text-sm text-[var(--ast-global-color-3,#555)] leading-relaxed whitespace-pre-line">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Separator Line */}
                  {gIndex < section.groups.length - 1 && (
                    <hr className="border-t border-[var(--ast-global-color-6,#e5e7eb)] my-12" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}