import React from "react";
import { WORSHIP_SONGS_DATA } from "./data";

export default function WorshipHymnsPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden min-h-[80vh] flex flex-col justify-between">
      <div>
        {/* ─── 1. Header Section (Matching UAGB Container) ─── */}
        <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pt-16 md:pt-20 pb-12 px-6 sm:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
                <strong>詩歌敬拜</strong>
              </h2>
            </div>
          </div>
        </div>

        {/* ─── 2. Table Section (Replicating Ninja Tables [ninja_tables id="1731"]) ─── */}
        <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] pb-24 px-6 sm:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base leading-[1.8]">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100/60">
                  <th className="py-4 px-6 font-bold text-[var(--ast-global-color-2,#222)]">日期</th>
                  <th className="py-4 px-6 font-bold text-[var(--ast-global-color-2,#222)]">敬拜主題 / 詩歌</th>
                  <th className="py-4 px-6 font-bold text-[var(--ast-global-color-2,#222)]">領詩 / 團隊</th>
                  <th className="py-4 px-6 font-bold text-[var(--ast-global-color-2,#222)]">備註</th>
                </tr>
              </thead>
              <tbody>
                {WORSHIP_SONGS_DATA.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-slate-200/60 transition-colors ${
                      index % 2 === 1 ? "bg-slate-50" : "bg-transparent"
                    }`}
                  >
                    <td className="py-4 px-6 text-[var(--ast-global-color-3,#555)] font-medium">
                      {item.date}
                    </td>
                    <td className="py-4 px-6 font-bold text-[var(--ast-global-color-2,#222)]">
                      {item.themeOrTitle}
                    </td>
                    <td className="py-4 px-6 text-[var(--ast-global-color-3,#555)]">
                      {item.leaderOrTeam}
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-xs">
                      {item.remarks || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}