"use client";

import React, { useState, useEffect } from "react";
import { ANNIVERSARY_ISSUES, NAVIGATION_ANCHORS, AnniversaryItem } from "./data";

const cleanYouTubeId = (input?: string): string | null => {
  if (!input) return null;
  const trimmed = input.trim();

  // 1. If it's already an 11-char YouTube ID (supports letters, numbers, hyphens, underscores)
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // 2. Flexible extraction for all YouTube URL variants (watch, embed, short link, shorts)
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = trimmed.match(regExp);

  return match && match[1] ? match[1] : null;
};

export default function AnniversaryPage() {
  const [activeTab, setActiveTab] = useState<string>("趙氏訪談");
  const [activeVideo, setActiveVideo] = useState<AnniversaryItem | null>(null);
  const [origin, setOrigin] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);
  // 1. 按大分類篩選陣列
  const pastoralStaff = ANNIVERSARY_ISSUES.filter(item => item.category === "教牧同工");
  const fellowships = ANNIVERSARY_ISSUES.filter(item => item.category === "團契小組活動");
  const documents = ANNIVERSARY_ISSUES.filter(item => item.category === "教會資料");
  
  const tabsList = ["趙氏訪談", "蘇家三代專輯", "陳氏專訪", "李家專訪", "學生團契專題"];
  const currentTabItems = ANNIVERSARY_ISSUES.filter(
    item => item.category === "訪談及專輯" && item.subSection === activeTab
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
    useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideo]);

  // 監聽 Esc 鍵
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

// 點擊黑色遮罩背景關閉
<div 
  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
  onClick={() => setActiveVideo(null)}
>
  <div 
    className="bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-800 cursor-default"
    onClick={(e) => e.stopPropagation()} // 阻止冒泡，避免點擊影片內部時關閉
  >
    {/* 影片 content */}
  </div>
</div>
  return (
    <div className="bg-[#faf7f2] min-h-screen font-sans text-slate-800 antialiased">
      
      {/* ─── 大標題 ─── */}
      <header className="bg-gradient-to-b from-[#8c2525] to-[#591414] text-white py-24 px-4 text-center border-b-8 border-yellow-600 shadow-xl">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500 rounded-full mx-auto flex items-center justify-center text-2xl mb-4">👑</div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-yellow-500 mb-4">五十週年紀念特刊</h1>
          <p className="text-xs tracking-widest text-yellow-200/80 uppercase font-semibold mb-6">金禧感恩多媒體專頁</p>
          <button onClick={() => scrollToSection("interviews")} className="bg-yellow-600 hover:bg-yellow-500 text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow transition-colors cursor-pointer">
            🎬 前往影音專訪與紀錄片
          </button>
        </div>
      </header>

      {/* ─── 快速目錄 ─── */}
      <nav className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white border border-yellow-600/20 rounded-2xl shadow-xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {NAVIGATION_ANCHORS.map((anchor) => (
            <button key={anchor.id} onClick={() => scrollToSection(anchor.id)} className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdf9] border border-slate-100 hover:border-yellow-600/40 hover:bg-yellow-50/20 text-left transition-all shadow-sm cursor-pointer">
              <span className="text-2xl">{anchor.icon}</span>
              <div>
                <h4 className="font-bold text-xs text-slate-900">{anchor.title}</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">點擊跳轉</p>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* ─── 主體長滾動線性內容 ─── */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* ─── 教牧同工 ─── */}
        <section id="pastoral" className="scroll-mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60">
          <div className="border-l-4 border-[#8c2525] pl-4 mb-8">
            <h2 className="text-lg font-bold text-slate-900">教牧同工與長執分享</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pastoralStaff.map((staff) => {
              const videoId = staff.videoId;
              return (
                <div key={staff.id} className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center flex flex-col justify-between items-center group">
                  <div className="w-14 h-14 bg-amber-100 rounded-full mb-3 flex items-center justify-center text-lg text-amber-800 font-bold overflow-hidden shadow-inner relative">
                    {videoId ? (
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={staff.author?.charAt(0)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl">{staff.author?.charAt(0)}</span>
                    )}
                  </div>
                  <h4 className="font-bold text-xs text-slate-800 mb-1">{staff.author}</h4>
                  <p className="text-[10px] text-slate-400 mb-4 line-clamp-1">{staff.title}</p>
                  {videoId ? (
                    <button onClick={() => setActiveVideo(staff)} className="w-full bg-[#8c2525] hover:bg-[#731d1d] text-white text-[10px] font-bold py-1.5 rounded-lg transition-colors cursor-pointer">
                      🎬 觀看感恩影音
                    </button>
                  ) : (
                    <span className="text-[9px] text-slate-400 italic">感言整理中</span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 團契小組活動 ─── */}
        <section id="fellowship" className="scroll-mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60">
          <div className="border-l-4 border-emerald-600 pl-4 mb-8">
            <h2 className="text-lg font-bold text-slate-900">團契小組活動見證牆</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fellowships.map((fellow) => (
              <div key={fellow.id} className="border border-slate-200/80 rounded-xl p-4 bg-[#fffdfa] flex flex-col justify-between hover:border-emerald-600/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-emerald-600 text-sm">👥</span>
                  <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{fellow.title}</h4>
                </div>
                {fellow.videoId ? (
                  <button onClick={() => setActiveVideo(fellow)} className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded text-center mt-2 hover:bg-emerald-100 transition-colors cursor-pointer">
                    🎬 播放回顧短片
                  </button>
                ) : (
                  <span className="text-[9px] text-slate-400 mt-2 block italic">精彩圖集整理中</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── 訪談及專輯 ─── */}
        <section id="interviews" className="scroll-mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60">
          <div className="border-l-4 border-yellow-600 pl-4 mb-8">
            <h2 className="text-lg font-bold text-slate-900">影音多媒體訪談專輯專區</h2>
            <p className="text-xs text-slate-400 mt-1">點擊下方分頁標籤切換，影片封面皆為自動即時抓取</p>
          </div>

          <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3 mb-6">
            {tabsList.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer ${activeTab === tab ? "bg-yellow-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTabItems.map((video) => {
              const videoId = video.videoId;
              const thumbUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "https://placehold.co/800x450";

              return (
                <div key={video.id} onClick={() => {
                  if (video.videoId) {
                    setActiveVideo(video);
                  }
                }} className="cursor-pointer group bg-slate-900 rounded-xl overflow-hidden shadow-md relative aspect-video transition-transform hover:-translate-y-0.5">
                  <img src={thumbUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 flex flex-col justify-end p-4">
                    <span className="text-[9px] bg-yellow-600 text-white px-1.5 py-0.5 rounded w-max font-bold mb-1 uppercase">{video.subSection}</span>
                    <h4 className="text-white font-bold text-xs line-clamp-1 group-hover:text-yellow-400 transition-colors">{video.title}</h4>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center text-xs shadow-lg transform group-hover:scale-110 transition-all">▶</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 教會資料文獻 ─── */}
        <section id="documents" className="scroll-mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/60">
          <div className="border-l-4 border-blue-600 pl-4 mb-8">
            <h2 className="text-lg font-bold text-slate-900">歷史文獻庫 (9大篇章)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <a key={doc.id} href={doc.driveUrl} target="_blank" rel="noopener noreferrer" className="block p-5 bg-[#fafbfc] border border-slate-200 rounded-xl hover:border-blue-600 hover:bg-blue-50/10 transition-all group">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">📄</div>
                  <span className="text-[10px] text-blue-600 font-bold border border-blue-200 rounded px-1.5 py-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">打開文獻 ↗</span>
                </div>
                <h4 className="font-bold text-xs text-slate-900 mt-4 group-hover:text-blue-700 transition-colors">{doc.title}</h4>
                <p className="text-[10px] text-slate-400 mt-1">完整收錄禮賢會五十週年典藏資料</p>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* ─── 底部聲明 ─── */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-20 border-t-4 border-yellow-600 text-center space-y-2">
        <h3 className="text-white font-bold text-sm">聲明</h3>
        <p className="text-xs max-w-xl mx-auto leading-relaxed">
          編輯有權對來稿作出合當修改（但不會改動作者意思）、有權決定是否刊登和刊登日期。版權所有，翻印必究。
        </p>
        <div className="text-[10px] text-slate-600 pt-4 border-t border-slate-800">
          &copy; {new Date().getFullYear()} 教會金禧五十週年紀念委員會. All Rights Reserved.
        </div>
      </footer>

{/* ─── 多媒體播放器彈窗 ─── */}
{activeVideo && (
  <div 
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    onClick={() => setActiveVideo(null)}
  >
    <div 
      className="bg-slate-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-800 animate-in fade-in zoom-in-95 duration-150"
      onClick={(e) => e.stopPropagation()}
    >
      {(() => {
        const videoId = cleanYouTubeId(activeVideo.videoId);
        if (videoId) {
          const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`;
          return (
            <div className="relative w-full pb-[56.25%] h-0 bg-black">
              <iframe 
                src={embedUrl}
                title={activeVideo.title} 
                className="absolute top-0 left-0 w-full h-full border-0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          );
        } else {
          return (
            <div className="p-12 text-center text-red-400 text-xs font-semibold bg-slate-950">
              ⚠️ 影片網址或 ID 解析失敗 (輸入值: "{activeVideo.videoId}")
            </div>
          );
        }
      })()}

      <div className="p-4 bg-slate-950 flex items-center justify-between text-white">
        <div className="text-left">
          <span className="text-[9px] font-bold text-yellow-500 block uppercase">
            {activeVideo.category} {activeVideo.subSection ? `• ${activeVideo.subSection}` : ""}
          </span>
          <h3 className="font-bold text-xs mt-0.5">{activeVideo.title}</h3>
        </div>
        <button 
          onClick={() => setActiveVideo(null)} 
          className="bg-slate-800 hover:bg-slate-700 font-bold text-xs px-4 py-1.5 rounded-lg cursor-pointer transition-colors"
        >
          關閉播放
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}