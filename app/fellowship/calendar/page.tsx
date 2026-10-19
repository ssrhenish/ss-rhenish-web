import React from "react";
import { MEETING_SCHEDULES } from "./data";

export default function MeetingTimePage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Header Title Section (Matching UAGB Container) ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pt-16 md:pt-20 pb-12 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
              <strong>聚會時間</strong>
            </h2>
          </div>
        </div>
      </div>

      {/* ─── 2. Schedule Table Section (Matching WordPress Striped Table) ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pb-24 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse bg-[var(--ast-global-color-5,#f9f9f9)] shadow-sm rounded-lg overflow-hidden text-sm md:text-base leading-[1.8]">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-center py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)]"><strong>各團契</strong></th>
                <th className="text-center py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)]">聚會時間</th>
                <th className="text-center py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)]"><strong>對象</strong></th>
                <th className="text-center py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)]"><strong>聚會地方</strong></th>
              </tr>
            </thead>
            <tbody>
              {MEETING_SCHEDULES.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={`border-b border-slate-200/60 transition-colors ${
                    index % 2 === 1 ? "bg-black/[0.02]" : "bg-transparent"
                  }`}
                >
                  <td className="text-center py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)]">
                    {item.groupName}
                  </td>
                  <td className="text-center py-4 px-4 text-[var(--ast-global-color-3,#555)]">
                    <strong>{item.time}</strong>
                  </td>
                  <td className="text-center py-4 px-4 text-[var(--ast-global-color-3,#555)]">
                    <strong>{item.target}</strong>
                  </td>
                  <td className="text-center py-4 px-4 text-[var(--ast-global-color-3,#555)]">
                    <strong>{item.location}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}