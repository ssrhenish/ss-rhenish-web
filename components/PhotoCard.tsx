// components/PhotoCard.tsx
import Link from 'next/link';
import Image from 'next/image';

// 定義組件接收嘅 Data 格式
interface PhotoCardProps {
  src: string;
  alt: string;
  url: string;
  title: string;
  description?: string; 
  priority?: boolean;
}

export default function PhotoCard({ src, alt, url, title, description, priority = false }: PhotoCardProps) {
  return (
    <Link 
      href={url}
      className="block group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105"
    >
      {/* 圖片容器：16:9 比例 */}
      <div className="relative w-full h-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          priority={priority}
        />
        
        <h3 className="absolute inset-0 flex items-center justify-center z-10 text-white text-6xl text-center font-bold tracking-wide transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{title}</h3>
        
        {/* 黑色漸變遮罩：滑鼠 hover 時先會顯現 (opacity-100) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6" >
          
          {/* <h3 className="text-white text-6xl text-center font-bold tracking-wide opacity-100">{title}</h3> */}
          {/* 文字動畫：hover 時由下而上稍微升起 */}
          <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 text-white">
            {/* <h3 className="text-xl font-bold tracking-wide">{title}</h3> */}
            {description && <p className="text-xl text-gray-200 mt-1">{description}</p>}
          </div>

        </div>
      </div>
    </Link>
  );
}