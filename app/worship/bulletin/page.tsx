import React from "react";

export default function WorshipBulletinPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden min-h-[70vh] flex flex-col justify-between">
      {/* ─── Main Content Container (Matching UAGB Container) ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] py-20 md:py-28 px-6 sm:px-12 lg:px-16 w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Info Box Section */}
          <div className="space-y-4">
            <div className="border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--ast-global-color-2,#222)]">
                <strong>崇拜週刊</strong>
              </h2>
            </div>
            <p className="text-base md:text-lg text-[var(--ast-global-color-3,#555)] leading-[1.8] pt-2">
              請向同工索取或瀏覽我們的Facebook網頁。
            </p>
          </div>

          {/* Facebook Link Button */}
          <div className="pt-2">
            <a
              href="https://www.facebook.com/ss.rhenish?locale=zh_HK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white text-sm font-bold px-6 py-3 rounded-lg shadow transition-colors"
            >
              <span>📘</span> 瀏覽我們的 Facebook 專頁 ↗
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}