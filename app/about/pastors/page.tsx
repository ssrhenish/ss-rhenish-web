import React from "react";
import { PASTORAL_STAFF_DATA } from "./data";

export default function PastoralStaffPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Header Title Section ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pt-16 md:pt-20 pb-8 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
              <strong>教牧同工</strong>
            </h2>
          </div>
        </div>
      </div>

      {/* ─── 2. Staff Cards Grid ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pb-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASTORAL_STAFF_DATA.map((staff) => (
            <a
              key={staff.id}
              href={`#${staff.sectionId}`}
              className="bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col"
            >
              <div className="overflow-hidden aspect-square bg-slate-100">
                <img
                  src={staff.imageSrc}
                  alt={staff.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1">
                <p className="text-lg font-bold text-[var(--ast-global-color-3,#333)]">
                  {staff.nickname}
                </p>
                <p className="text-sm font-medium text-[var(--ast-global-color-2,#222)]">
                  {staff.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── 3. Detailed Biographies Sections ─── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-12 space-y-24">
        {PASTORAL_STAFF_DATA.map((staff) => (
          <div key={staff.id} id={staff.sectionId} className="scroll-mt-20 space-y-8 pt-8">
            <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
                <strong>{staff.name}</strong>
              </h2>
            </div>

            <div className="flex justify-center py-4">
              <img
                src={staff.imageSrc}
                alt={staff.name}
                className="max-h-[450px] object-contain rounded-xl shadow-sm border border-slate-200"
              />
            </div>

            <div
              className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)] space-y-4 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: staff.bioHtml }}
            />

            <hr className="border-t border-slate-200 pt-8" />
          </div>
        ))}
      </div>
    </div>
  );
}