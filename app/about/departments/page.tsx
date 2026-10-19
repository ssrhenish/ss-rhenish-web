import React from "react";

export default function MinistriesPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Top Hero Header (Matching UAGB Container with background image) ─── */}
      <div
        className="alignfull relative bg-cover bg-center text-white text-center py-[112px] px-6 sm:px-12 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('http://34.92.250.101/wp-content/uploads/2024/10/natures-01.jpg')`,
        }}
      >
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white">各部事工</h1>
        </div>
      </div>

      {/* Spacer matching WordPress block */}
      <div className="h-[60px] md:h-[100px]" aria-hidden="true"></div>

      {/* ─── 2. Main Content Sections ─── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-10 space-y-16">
        
        {/* Section 1: 成人長者部 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--ast-global-color-2,#222)] border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            成人長者部
          </h2>
          <p className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)]">
            為配合教會分區牧養，成人長者部在2009年1月正式成立。顧名思義，成人長者部是負責牧養成人長者區（簡稱成長區），即教會內或所接觸到的成人和長者，年齡約為25歲以上。而當中包括了迦勒、路加、約瑟、保羅、以諾、約書亞、大衛、提摩太八個團契及各功能小組，從人數上來看，成長區是現時教會三區之首。因在分區牧養下，表面上傳統的功能部門（如傳道部、培育訓練部）都取消了，但實際上各區都需要承擔自己的牧養工作，包括傳道、培育訓練、關顧工作。而成長區的牧養工作是由成人長者部負責推動，通常每季舉行一次核心職員會，而每年亦會召開兩次全區團組領袖交流會，成員包括各團的代表，藉以維繫及關顧每團組的需要，並提升愛主愛人及見證生命為目標。
          </p>
        </div>

        {/* Separator Dots */}
        <div className="flex justify-center items-center space-x-2 py-8">
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
        </div>

        {/* Section 2: 青少年部 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--ast-global-color-2,#222)] border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            青少年部
          </h2>
          <p className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)] space-y-4">
            每一個人生的階段我們都有不同的學習，需要面對的挑戰困難都不同。如何在生活經歷上帝活出信仰？人生的價值排位？上帝在生命中擔當什麼角色？這些都是青少年在成長面對的課題。青少年牧養分為對內和對外。對內加強他們各個小組的建立，讓他們在小組中能夠分享對信仰的疑問困惑，分享自己內心面對的艱難與挑戰。對外藉著邀請不同堂會宗派的兄姊分享交流（真人圖書館、合堂營會BBQ…），讓兄姊在交流中擴闊視野，反思自己所信靠的神是一個怎樣的神。盼望我們所愛錫的青年人能夠如經文所說：<br /><br />
            <strong className="text-slate-900">
              在這彎曲悖謬的世代作神無瑕疵的兒女；你們要在這世代中像明光照耀，將生命的道顯明出來，使我在基督的日子得以跨耀我沒有白跑也沒有徒勞。（腓2:15 下-16）
            </strong>
          </p>
        </div>

        {/* Separator Dots */}
        <div className="flex justify-center items-center space-x-2 py-8">
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-[var(--ast-global-color-1,#8c2525)] rounded-full"></span>
        </div>

        {/* Section 3: 兒童部 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[var(--ast-global-color-2,#222)] border-l-4 border-[var(--ast-global-color-2,#222)] pl-4">
            兒童部
          </h2>
          <div className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)] space-y-4">
            <p>
              兒童牧養以兒童崇拜為主，除了經文信息分享外，我們加入不同的體驗活動，讓孩子們親身去經歷體驗信仰，從小在生活中思考上帝。在不同的節期活動（復活節，母親節，父親節，登燈行動…）與孩子一同製作小禮物，為兄姊街坊送上祝福，分享主愛。崇拜後也有分組時間讓導師和孩子們一同去分享代禱，彼此支持。我們深信上帝的話語會植入在他們的生命中生根建造，保守他們成長的每一步。
            </p>
            <p className="font-bold text-slate-900">
              教養孩童走當行的道，就是到老他也不偏離。（箴言 22:6）
            </p>
            
            {/* Worship Information Box */}
            <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-bold text-base text-[var(--ast-global-color-2,#222)]">兒童崇拜</h3>
              <p><strong>時間：</strong>逢星期日上午11：00</p>
              <p><strong>地點：</strong>教會廿五號二樓</p>
              <p><strong>對象：</strong>歡迎2歲幼兒至小六學生</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}