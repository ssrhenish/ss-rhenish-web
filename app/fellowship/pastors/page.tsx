import React from "react";

export default function FellowshipOfficersPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden min-h-[60vh] flex flex-col justify-between">
      {/* ─── Main Content Section ─── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-20 w-full space-y-8">
        {/* Heading */}
        <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
            團契職員
          </h2>
        </div>

        {/* Paragraph Description */}
        <div className="space-y-6 text-base md:text-lg leading-[1.8] text-[var(--ast-global-color-3,#555)]">
          <p>請向同工了解或瀏覽我們的Facebook網頁。</p>

          {/* Facebook Link Button */}
          <div>
            <a
              href="https://www.facebook.com/ss.rhenish?locale=zh_HK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white text-sm font-bold px-5 py-3 rounded-lg shadow transition-colors"
            >
              <span>📘</span> 訪問我們的 Facebook 專頁 ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}