// 頂部快速錨點目錄
export const NAVIGATION_ANCHORS = [
  { id: "pastoral", title: "教牧同工", icon: "✝️" },
  { id: "fellowship", title: "團契小組活動", icon: "👥" },
  { id: "interviews", title: "訪談及專輯", icon: "🎙️" },
  { id: "documents", title: "教會資料", icon: "📖" },
  { id: "members", title: "教會會友", icon: "🤝" },
  { id: "precious-moments", title: "珍貴時刻", icon: "📸" },
];

export interface AnniversaryItem {
  id: number;
  title: string;
  author?: string;
  category: "教牧同工" | "團契小組活動" | "訪談及專輯" | "教會資料"| "教會會友";
  subSection?: string;
  videoId?: string;
  driveUrl?: string;
  imageSrc?: string;
  imageSize?: number;
  rounded?: boolean;
}

export const ANNIVERSARY_ISSUES: AnniversaryItem[] = [
  // ==================== 1. 教牧同工 / 牧長執事 ====================
  { id: 101, title: "廖小茵牧師 五十週年勉勵分享", author: "廖小茵牧師", category: "教牧同工", videoId: "WAlJ-kGuD5Q" },
  { id: 102, title: "李就強宣教師 勉勵與祝福", author: "李就強宣教師", category: "教牧同工", videoId: "qasCoZyCwwE" },
  { id: 103, title: "王醒材傳道 金禧感恩分享", author: "王醒材傳道", category: "教牧同工", videoId: "xkh1OkZ_42s" },
  { id: 104, title: "鄧鳳彩傳道 感恩見證", author: "鄧鳳彩傳道", category: "教牧同工", videoId: "epYGS2IeXUg" },
  { id: 105, title: "陳桂梅傳道 牧養心路歷程", author: "陳桂梅傳道", category: "教牧同工", videoId: "HPEVwYHKEJo" },
  { id: 106, title: "周美容傳道 金禧祝福", author: "周美容傳道", category: "教牧同工", videoId: "rQ8TY8Bz4Ug" },
  { id: 107, title: "牧長賀詞及執事分享", author: "眾牧長及執事", category: "教牧同工", videoId: "eBsWXXT-JT0" },
  //{ id: 108, title: "黃錦明長老", author: "黃錦明長老", category: "教牧同工", videoId: "S9L3G2-C-Xk" },
  //{ id: 109, title: "陳尚希長老", author: "陳尚希長老", category: "教牧同工", videoId: "qLiGaWpPG7k" },
  //{ id: 110, title: "黃永敏長老", author: "黃永敏長老", category: "教牧同工", videoId: "qN8lrWhybe8" },

  // ==================== 2. 團契小組活動 ====================
  { id: 201, title: "提摩太團", author: "提摩太團", category: "團契小組活動", videoId: "ZraiXun176Q" },
  { id: 202, title: "以諾團", author: "以諾團", category: "團契小組活動", videoId: "IkHf7f_Un3o" },
  { id: 203, title: "七仁組", author: "七仁組", category: "團契小組活動", videoId: "wOTWmD5_Gdc" },

  // ==================== 3. 訪談及專輯 ====================
  // 趙氏訪談
  { id: 301, title: "趙氏訪談（01）- 我們的少男少女時代", author: "趙氏", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "m2pSSGNdQcY" },
  { id: 302, title: "趙氏訪談（02）- 家", author: "趙氏", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "LNpGAlsLztM" },
  { id: 303, title: "趙氏訪談（03）- 光影留情", author: "趙氏", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "_6GSo8E08BQ" },
  { id: 304, title: "趙氏訪談（04）- 文生與我", author: "趙氏", category: "訪談及專輯", subSection: "趙氏訪談", videoId: "v3dkoMtbbMk" },

  // 蘇家三代專輯
  { id: 310, title: "蘇家三代", author: "蘇家", category: "訪談及專輯", subSection: "蘇家三代", videoId: "UwyDJLeFYOI" },

  // 陳氏專訪
  { id: 320, title: "陳氏專訪（1）- 桂鈿與桂梅", author: "陳氏", category: "訪談及專輯", subSection: "陳氏專訪", videoId: "cj5Jhf4A_PA" },
  { id: 321, title: "陳氏專訪（2）- 尚希&廣熙", author: "陳氏", category: "訪談及專輯", subSection: "陳氏專訪", videoId: "e32yNh9UH_c" },

  // 李家專訪
  { id: 330, title: "李家專訪（1）- 蓉妹點滴", author: "李家", category: "訪談及專輯", subSection: "李家專訪", videoId: "o82yON2vEDw" },
  { id: 331, title: "李家專訪（2）- 芳妹自白", author: "李家", category: "訪談及專輯", subSection: "李家專訪", videoId: "YV52VygFeXM" },
  { id: 332, title: "李家專訪（3）- 姐夫歸主", author: "李家", category: "訪談及專輯", subSection: "李家專訪", videoId: "v9ePdtAC8Ic" },

  // 學生團契專題
  { id: 340, title: "學生團契（前傳）", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "EFZjSM_OxsU" },
  { id: 341, title: "學生團契（1）- 陳佩芝、廖慧穎、余偉民、陳尚希、莊健中、丘文煥、李均龍", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "GU73uuNh6mE" },
  { id: 342, title: "學生團契（2）- 袁文偉、陳煥淇、吳家宏", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "OPnCj2Qptz8" },
  { id: 343, title: "學生團契（3）- 李甘寶、朱婉君、謝偉棠", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "0c2-suElDOE" },
  { id: 344, title: "學生團契（4）- 高淑儀、李靜雯", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "Bb5se06KYdg" },
  { id: 345, title: "學生團契（5）- 張淑賢、陳智榮", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "oK7A_UK_97A" },
  { id: 346, title: "學生團契（6）- 莊健中、余偉民", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "cJqWYbkeJG8" },
  { id: 347, title: "學生團契後記", author: "學生團契", category: "訪談及專輯", subSection: "學生團契", videoId: "OETJUJmK6iU" },

  // ==================== 4. 教會會友 (Team Member Cards) ====================
  { id: 401, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 100, rounded: false },
  { id: 402, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 100, rounded: false },
  { id: 403, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 100, rounded: false },
  { id: 404, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 100, rounded: false },
  { id: 405, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 100, rounded: false },
  { id: 406, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 64, rounded: false },
  { id: 407, title: "李素音分享", author: "李素音", category: "教會會友", videoId: "L_gsgveKjLo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/Carol-Lee.png", imageSize: 64, rounded: false },
  { id: 408, title: "李就強宣教師分享", author: "李就強宣教師", category: "教會會友", videoId: "qasCoZyCwwE", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-06.jpg", imageSize: 64, rounded: true },
  { id: 409, title: "李就強宣教師分享", author: "李就強宣教師", category: "教會會友", videoId: "qasCoZyCwwE", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-06.jpg", imageSize: 64, rounded: true },
  { id: 410, title: "王醒材傳道分享", author: "王醒材傳道", category: "教會會友", videoId: "xkh1OkZ_42s", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-27.jpg", imageSize: 64, rounded: true },
  { id: 411, title: "鄧鳳彩傳道分享", author: "鄧鳳彩傳道", category: "教會會友", videoId: "epYGS2IeXUg", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-15.jpg", imageSize: 64, rounded: true },
  { id: 412, title: "陳桂梅傳道分享", author: "陳桂梅傳道", category: "教會會友", videoId: "HPEVwYHKEJo", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-16.jpg", imageSize: 64, rounded: true },
  { id: 413, title: "周美容傳道分享", author: "周美容傳道", category: "教會會友", videoId: "rQ8TY8Bz4Ug", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-22.jpg", imageSize: 64, rounded: true },
  { id: 414, title: "牧長賀詞及執事分享", author: "牧長賀詞及執事分享", category: "教會會友", videoId: "eBsWXXT-JT0", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-04.jpg", imageSize: 64, rounded: true },
  { id: 415, title: "黃錦明長老分享", author: "黃錦明長老", category: "教會會友", videoId: "HFDeDn3ItPM", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-04.jpg", imageSize: 64, rounded: true },
  { id: 416, title: "陳尚希長老分享", author: "陳尚希長老", category: "教會會友", videoId: "qLiGaWpPG7k", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-04.jpg", imageSize: 64, rounded: true },
  { id: 417, title: "黃永敏長老分享", author: "黃永敏長老", category: "教會會友", videoId: "qN8lrWhybe8", imageSrc: "http://34.92.250.101/wp-content/uploads/2025/01/team-skip-04.jpg", imageSize: 64, rounded: true },

  // ==================== 5. 教會資料 ====================
  { id: 501, title: "01 十年大事表", category: "教會資料", driveUrl: "https://drive.google.com/file/d/1fZ02ebELEKtMkzJMk8RLDd-8-vj5hjS0/view?usp=sharing" },
  { id: 502, title: "02 歷年行事曆一覽", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/1O2CcNeA7-0QfX9r0PH9Z41MpmhKQFsk3?usp=drive_link" },
  { id: 503, title: "03 歷年洗禮得救見證集", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/19Gf2niBnRo55E4jJLztp64_ax9hMmqZd?usp=drive_link" },
  { id: 504, title: "04 歷代教會通訊全集", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/1gSes-4st2UXowJsvNIBLOMegTPBl7rr7?usp=drive_link" },
  { id: 505, title: "05 歷屆事奉同工、領袖就職禮名單", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/1saQsmdDSH4jHIlMbkcwznpr3EX7My0w2?usp=drive_link" },
  { id: 506, title: "06 歷年財政收支報告總覽", category: "教會資料", driveUrl: "https://drive.google.com/file/d/1kB-Cyn6nrtqqBPlRp-V0B-S-Bo8rhQsy/view?usp=sharing" },
  { id: 507, title: "07 歷年洗禮人數統計圖表", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/1gSes-4st2UXowJsvNIBLOMegTPBl7rr7?usp=drive_link" },
  { id: 508, title: "08 歷年堂董名冊與事奉紀錄", category: "教會資料", driveUrl: "https://drive.google.com/drive/folders/1saQsmdDSH4jHIlMbkcwznpr3EX7My0w2?usp=drive_link" },
  { id: 509, title: "09 歷年教牧同工、幹事服事一覽表", category: "教會資料", driveUrl: "https://drive.google.com/file/d/1kB-Cyn6nrtqqBPlRp-V0B-S-Bo8rhQsy/view?usp=sharing" },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  heightClass: string;
  marginClass: string;
}

export const PRECIOUS_MOMENTS_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/images/50thAnniversary/50th-desserts.jpg",
    alt: "Desserts",
    heightClass: "h-[250px] sm:h-[300px] lg:h-[370px]",
    marginClass: "lg:my-[25px]",
  },
  {
    id: "2",
    src: "/images/50thAnniversary/50th-natures.jpg",
    alt: "Nature",
    heightClass: "h-[250px] sm:h-[300px] lg:h-[420px]",
    marginClass: "my-0",
  },
  {
    id: "3",
    src: "/images/50thAnniversary/50th-snow-mountains.jpg",
    alt: "Snow Mountains",
    heightClass: "h-[250px] sm:h-[300px] lg:h-[370px]",
    marginClass: "lg:my-[25px]",
  },
  {
    id: "4",
    src: "/images/50thAnniversary/50th-mountains.jpg",
    alt: "Mountains",
    heightClass: "h-[250px] sm:h-[300px] lg:h-[420px]",
    marginClass: "my-0",
  },
];
