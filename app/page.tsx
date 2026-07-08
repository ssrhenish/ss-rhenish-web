import Image from "next/image";
import PhotoCard from "@/components/PhotoCard";

const galleryItems = [
  { id: 1, src: '/images/風獅.png', alt: '相片 1', url: '/page-1', title: '東京街頭', desc: '日本旅遊回憶' },
  { id: 2, src: '/images/風獅.png', alt: '相片 2', url: '/page-2', title: '維港夜景', desc: '香港璀璨之夜' },
  { id: 3, src: '/images/風獅.png', alt: '相片 3', url: '/page-3', title: '阿爾卑斯山', desc: '瑞士雪景遠足' },
  { id: 4, src: '/images/風獅.png', alt: '相片 4', url: '/page-4', title: '悉尼歌劇院', desc: '澳洲跨年倒數' },
];

export default function Home() {
  return (
    <div className="flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-16 bg-white dark:bg-black">
        <div className="text-center">
          <h2 className="text-4xl font-bold">中華基督教禮賢會上水堂</h2>
          <h2 className="text-3xl pt-4">The Chinese Rhenish Church Sheung Shui</h2>
        </div>
        <div className="pt-30 text-center font-bold">
          <h2 className="text-3xl">2026年教會主題：</h2>
          <h1 className="text-6xl pt-10">更新・豐盛</h1>
          <h3 className="text-2xl pt-10">主題金句：「(耶穌)我來了，是要叫人得生命，並且得的更豐盛。」</h3>
          <h3 className="text-2xl pt-4">(約翰福音10章10節下)</h3>
        </div>

        {/* 2 欄 / 1 欄 網格排版 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <PhotoCard
              key={item.id}
              src={item.src}
              alt={item.alt}
              url={item.url}
              title={item.title}
              description={item.desc}
              priority={index < 2} // 前兩張相自動優化載入速度
            />
          ))}
        </div>
      </main>
    </div>
  );
}
