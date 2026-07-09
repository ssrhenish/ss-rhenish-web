import Image from "next/image";
import PhotoCard from "@/components/PhotoCard";

const galleryItems = [
  { id: 1, src: '/images/homepage/inside.jpg', alt: '相片 1', url: '/worship/timetable', title: '崇拜時間', desc: '瀏覽崇拜、兒童崇拜、聖餐、祈禱會等聚會時間。' },
  { id: 2, src: '/images/homepage/activity.jpg', alt: '相片 2', url: '/sharing/photos', title: '活動照片', desc: '查看教會活動照片。' },
  { id: 3, src: '/images/homepage/inside.jpg', alt: '相片 3', url: '/worship/sermons', title: '講道錄音', desc: '重溫講道内容。' },
  { id: 4, src: '/images/homepage/activity.jpg', alt: '相片 4', url: '/worship/bulletin', title: '崇拜週刊', desc: '查看過往崇拜週刊。' },
  { id: 5, src: '/images/homepage/inside.jpg', alt: '相片 5', url: '/fellowship/introduction', title: '團契簡介', desc: '聚會時間' },
  { id: 6, src: '/images/homepage/activity.jpg', alt: '相片 6', url: '/fellowship/calendar', title: '聚會時間', desc: '了解團契 / 小組和其他活動的聚會時間。' }
];

export default function Home() {
  return (
    <div className="container flex-col flex-1 items-center justify-center font-sans dark:bg-black">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 pt-40 max-w-6xl w-full">
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
