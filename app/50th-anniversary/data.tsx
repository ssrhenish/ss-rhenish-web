export interface AnniversaryItem {
  id: number;
  title: string;
  author?: string;
  category:
    | "教牧同工"
    | "團契小組活動"
    | "訪談及專輯"
    | "珍貴時刻"
    | "教會資料";
  subSection?: string;
  videoId?: string;
  driveUrl?: string;
  content?: string;
}

// 頂部快速錨點目錄
export const NAVIGATION_ANCHORS = [
  { id: "pastoral", title: "教牧同工", icon: "✝️" },
  { id: "fellowship", title: "團契小組活動", icon: "👥" },
  { id: "interviews", title: "訪談及專輯", icon: "🎙️" },
  { id: "documents", title: "教會資料", icon: "📖" },
];

export const ANNIVERSARY_ISSUES: AnniversaryItem[] = [
  // ==================== 1. 教牧同工 ====================
  { id: 101, title: "廖小茵牧師 五十週年勉勵分享", author: "廖小茵牧師", category: "教牧同工" },
  { id: 102, title: "李就強宣教師 勉勵與祝福", author: "李就強宣教師", category: "教牧同工" },
  { id: 103, title: "王醒材傳道 金禧感恩分享", author: "王醒材傳道", category: "教牧同工" },
  { id: 104, title: "鄧鳳彩傳道 感恩見證", author: "鄧鳳彩傳道", category: "教牧同工" },
  { id: 105, title: "陳桂梅傳道 牧養心路歷程", author: "陳桂梅傳道", category: "教牧同工" },
  { id: 106, title: "周美容傳道 金禧祝福", author: "周美容傳道", category: "教牧同工" },
  { id: 107, title: "黃錦明長老、陳尚希長老、黃永敏長老 長執影片分享", author: "長執會", category: "教牧同工", videoId: "v3dkoMtbbMk" },

  // ==================== 2. 團契小組活動 ====================
  { id: 201, title: "提摩太團", category: "團契小組活動" },
  { id: 202, title: "以諾團", category: "團契小組活動" },
  { id: 203, title: "七仁組", category: "團契小組活動" },
  // 原網站預留的 32 個團契小組展位
  ...Array.from({ length: 29 }, (_, i) => ({
    id: 204 + i,
    title: `團契小組見證分享系列 (${i + 4})`,
    category: "團契小組活動" as const,
  })),

  // ==================== 3. 訪談及專輯 (原 Tabs 區塊影片全面收錄) ====================
  // 趙氏訪談
  { id: 301, title: "趙氏訪談 01 - 少年時代", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "dQw4w9WgXcQ" },
{ id: 302, title: "趙氏訪談 02 - 家", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "L_LUpnjgPso" },
  { id: 303, title: "趙氏訪談 03 - 光影留情", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "v3dkoMtbbMk" },
  { id: 304, title: "趙氏訪談 04 - 文生與我", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "v3dkoMtbbMk" },
  
  // 蘇家三代專輯
{ id: 310, title: "蘇家三代專輯 - 信仰傳承見證錄", category: "訪談及專輯", subSection: "蘇家三代專輯", videoId: "v3dkoMtbbMk" },
  
  // 陳氏專訪
  { id: 320, title: "陳氏專訪 - 桂鈿與桂梅", category: "訪談及專輯", subSection: "陳氏專訪", videoId: "v3dkoMtbbMk" },
  { id: 321, title: "陳氏專訪 - 尚希與廣熙", category: "訪談及專輯", subSection: "陳氏專訪", videoId: "v3dkoMtbbMk" },
  
  // 李家專訪
  { id: 330, title: "李家專訪 - 蓉妹點滴", category: "訪談及專輯", subSection: "李家專訪", videoId: "v3dkoMtbbMk" },
  { id: 331, title: "李家專訪 - 芳妹自白", category: "訪談及專輯", subSection: "李家專訪", videoId: "v3dkoMtbbMk" },
  { id: 332, title: "李家專訪 - 姐夫歸主記", category: "訪談及專輯", subSection: "李家專訪", videoId: "v3dkoMtbbMk" },
  
  // 學生團契專題 (完整 8 集)
  { id: 340, title: "學生團契專題 - 前傳", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 341, title: "學生團契專題 - 正傳第1集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 342, title: "學生團契專題 - 正傳第2集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 343, title: "學生團契專題 - 正傳第3集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 344, title: "學生團契專題 - 正傳第4集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 345, title: "學生團契專題 - 正傳第5集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 346, title: "學生團契專題 - 正傳第6集", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },
  { id: 347, title: "學生團契專題 - 後記", category: "訪談及專輯", subSection: "學生團契專題", videoId: "v3dkoMtbbMk" },

  // ==================== 4. 教會資料 (完整的 9 大文獻庫庫) ====================
  { id: 501, title: "01 十年大事表", category: "教會資料", driveUrl: "https://google.com" },
  { id: 502, title: "02 歷年行事曆一覽", category: "教會資料", driveUrl: "https://google.com" },
  { id: 503, title: "03 歷年洗禮得救見證集", category: "教會資料", driveUrl: "https://google.com" },
  { id: 504, title: "04 歷代教會通訊全集", category: "教會資料", driveUrl: "https://google.com" },
  { id: 505, title: "05 歷屆事奉同工、領袖就職禮名單", category: "教會資料", driveUrl: "https://google.com" },
  { id: 506, title: "06 歷年財政收支報告總覽", category: "教會資料", driveUrl: "https://google.com" },
  { id: 507, title: "07 歷年洗禮人數統計圖表", category: "教會資料", driveUrl: "https://google.com" },
  { id: 508, title: "08 歷年堂董名冊與事奉紀錄", category: "教會資料", driveUrl: "https://google.com" },
  { id: 509, title: "09 歷年教牧同工、幹事服事一覽表", category: "教會資料", driveUrl: "https://google.com" },
];