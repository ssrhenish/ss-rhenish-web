import React from "react";

export default function BadWeatherPage() {
  return (
    <div className="bg-white text-[#555] font-sans antialiased overflow-x-hidden">
      {/* ─── 1. Top Hero Header (Matching UAGB Container with background image) ─── */}
      <div
        className="alignfull relative bg-cover bg-center text-white text-center py-[112px] px-6 sm:px-12 lg:px-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/natures-01.jpg')`,
        }}
      >
        <div className="max-w-[800px] mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">惡劣天氣安排</h1>
          <p className="text-lg md:text-xl font-bold text-white tracking-wide">
            颱風 / 暴雨
          </p>
        </div>
      </div>

      {/* ─── 2. Main Content Section (Matching UAGB container with background color) ─── */}
      <div className="alignfull bg-[var(--ast-global-color-5,#f9f9f9)] py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Guideline Box */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--ast-global-color-2,#222)]">
              颱風或黑色暴雨指引：
            </h2>
            <p className="text-sm md:text-base leading-[1.8] text-[var(--ast-global-color-3,#555)]">
              若當日教會聚會兩小時前，天文台懸掛八號或以上颱風訊號或黑色暴雨警告，所有教會聚會將會取消。
            </p>
          </div>

          {/* Details Heading */}
          <div className="pt-4">
            <h2 className="text-lg font-bold text-[var(--ast-global-color-2,#222)]">
              詳細如下：
            </h2>
          </div>

          {/* Table 1: 主日崇拜 */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base leading-[1.8]">
              <tbody>
                <tr className="border-b border-slate-200/80">
                  <td className="py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)] w-[20%] align-top whitespace-nowrap">
                    主日崇拜
                  </td>
                  <td className="py-4 px-4 text-[var(--ast-global-color-3,#555)] w-[55%] align-top">
                    上午 <strong>9：00</strong> 或之後 <strong>八號或以上颱風訊號</strong> 或{" "}
                    <strong>黑色暴雨警告 </strong>生效
                  </td>
                  <td className="py-4 px-4 font-bold text-red-600 w-[25%] align-top whitespace-nowrap">
                    午堂或合堂崇拜取消
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 align-top"></td>
                  <td className="py-4 px-4 text-[var(--ast-global-color-3,#555)] align-top">
                    中午 <strong>12：00</strong> 或之後{" "}
                    <strong>八號或以上颱風訊號</strong> 或{" "}
                    <strong>黑色暴雨警告</strong> 生效
                  </td>
                  <td className="py-4 px-4 font-bold text-red-600 align-top whitespace-nowrap">
                    第三堂取消
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: 兒童主日學 */}
          <div className="overflow-x-auto space-y-4">
            <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden text-sm md:text-base leading-[1.8]">
              <tbody>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--ast-global-color-2,#222)] w-[20%] align-top whitespace-nowrap">
                    兒童主日學
                  </td>
                  <td className="py-4 px-4 text-[var(--ast-global-color-3,#555)] w-[55%] align-top">
                    上午 <strong>9：00</strong> 或之後{" "}
                    <strong>三號或以上颱風訊號</strong> 或{" "}
                    <strong>紅色、黑色暴雨警告</strong> 生效
                  </td>
                  <td className="py-4 px-4 font-bold text-red-600 w-[25%] align-top whitespace-nowrap">
                    兒童主日學取消（註）
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Clear, High-Visibility Footnote Box */}
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-sm md:text-base text-slate-800 leading-relaxed font-medium">
              <span className="font-bold text-amber-900">註：</span>
              若午堂或合堂崇拜照常聚會，教會將設護幼服務，家長可按安全情況作出衡量。
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}