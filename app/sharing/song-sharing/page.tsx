import React from "react";

export default function TestimonySharingPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden min-h-[80vh] flex flex-col justify-center">
      {/* ─── Root Container with Background Image & Dark Overlay (matching UAGB container) ─── */}
      <div
        className="alignfull relative bg-cover bg-center py-[112px] px-6 sm:px-10 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/natures-01.jpg')`,
        }}
      >
        <div className="max-w-6xl mx-auto flex justify-center">
          {/* ─── Inner Info Box Card Container (50% desktop width style) ─── */}
          <div className="w-full md:w-[50%] bg-[var(--ast-global-color-5,#f9f9f9)] p-6 sm:p-8 md:p-12 rounded-[6px] shadow-xl space-y-8">
            
            {/* Title & Description Info Box */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--ast-global-color-2,#222)]">
                詩歌見證分享會
              </h2>
              <p className="text-sm md:text-base font-bold text-[var(--ast-global-color-3,#555)] leading-relaxed">
                2023年7月9日 <br />
                愛．激勵詩歌見證分享會
              </p>
            </div>

            {/* Action Button */}
            <div>
              <a
                href="https://www.youtube.com/playlist?list=PLIPlJIAC8iu417xdqGByspKTtChNFnweV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--ast-global-color-0,#8c2525)] hover:bg-[var(--ast-global-color-1,#6d1a1a)] text-white text-xs md:text-sm font-bold px-6 py-3 rounded-[4px] shadow transition-colors"
              >
                <span>按此觀看</span>
                {/* Right Arrow Icon */}
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
    </div>
  );
}