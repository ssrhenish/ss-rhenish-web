import Image from "next/image";
import PhotoCard from "@/components/PhotoCard";

import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator";

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
          <h2 className="text-3xl pt-4 font-light">The Chinese Rhenish Church Sheung Shui</h2>
        </div>

        {/* window that shows background image */}
        <div className="text-center font-bold text-white">
          <div className="relative w-screen h-120 my-20 overflow-hidden border border-white/10">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
              style={{ 
                backgroundImage: "url('/images/homepage/frontdoor.jpg')",
                clipPath: "inset(0 0 0 0)" 
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-3xl">2026年教會主題：</h2>
              <h1 className="text-6xl pt-10">更新・豐盛</h1>
              <h3 className="text-2xl pt-10">主題金句：「(耶穌)我來了，是要叫人得生命，並且得的更豐盛。」</h3>
              <h3 className="text-2xl pt-4">(約翰福音10章10節下)</h3>
            </div>
          </div>
        </div>

        {/* grid layout that displays photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 pt-10 max-w-6xl w-full">
          {galleryItems.map((item, index) => (
            <PhotoCard
              key={item.id}
              src={item.src}
              alt={item.alt}
              url={item.url}
              title={item.title}
              description={item.desc}
              priority={index < 2} // set priority for the first two images
            />
          ))}
        </div>

        {/* grid layout for contact information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 pt-40 max-w-6xl w-full text-2xl">
          <div>
            <h2 className="text-5xl font-bold">聯絡我們</h2>
            <p className="pt-10 leading-10">
              <MapPin className="inline-block w-6 h-6 mr-2 mb-2" />
              <br />
              堂址：新界上水新成路廿五號
              <br />
              辦事處：新界上水新成路六號二樓
            </p>
            <Separator className="my-4" />
            <p className="leading-10">
              <Phone className="inline-block w-6 h-6 mr-2 mb-2" />
              <br />
              電話：(852) 2670 5364
              <br />
              傳真：(852) 2670 5346
            </p>
            <Separator className="my-4" />
            <p className="leading-10">
              <Image src="/images/homepage/facebook.svg" alt="Facebook Icon" width={24} height={24} className="inline-block mr-2 mb-2" />
              <br />
              教會 FB專頁 ：
              <br />
              <a href="https://www.facebook.com/ssrhenish" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                https://www.facebook.com/ssrhenish
              </a>
            </p>
            <Separator className="my-4" />
            <p className="leading-10">
              <Mail className="inline-block w-6 h-6 mr-2 mb-2" />
              <br />
              電郵：
              <br />
              <a href="mailto:info@ssrhenish.org" 
                className="text-blue-500 hover:underline"
              >
                info@ssrhenish.org
              </a>
            </p>
          </div>
          <div>google map</div>
        </div>
      </main>
    </div>
  );
}
