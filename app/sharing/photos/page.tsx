"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Lock } from 'lucide-react';

interface Album {
  id: string;
  title: string;
  date: string;
  year: string;
  category: string;
  coverImage: string;
  description: string;
  photos: string[];
}

const generatePhotoPaths = (folderName: string, count: number): string[] => {
  return Array.from({ length: count }, (_, i) => {
    const photoNumber = String(i + 1).padStart(2, '0');
    return `/images/ActivityPhoto/${folderName}/image-${photoNumber}.jpg`;
  });
};

const albumData: Album[] = [
  {
    id: 'album-1',
    title: '主日學夏令營 2026',
    date: '2026年8月',
    year: '2026',
    category: '夏令營',
    coverImage: '/images/ActivityPhoto/album-1/cover1.png',
    description: '為期三天兩夜的主日學夏令營，記錄導師與學員的學習與歡笑時刻。',
    photos: generatePhotoPaths('album-1', 12),
  },
  {
    id: 'album-2',
    title: '教會堂慶暨愛宴',
    date: '2026年6月',
    year: '2026',
    category: '堂慶',
    coverImage: '/images/ActivityPhoto/album-2/cover2.png',
    description: '慶祝建堂週年感恩崇拜及弟兄姊妹共享的豐盛愛宴。',
    photos: generatePhotoPaths('album-2', 10),
  },
  {
    id: 'album-3',
    title: '青年部戶外日',
    date: '2026年4月',
    year: '2026',
    category: '團契活動',
    coverImage: '/images/ActivityPhoto/album-3/cover3.png',
    description: '青年團契遠足與郊遊活動，建立更深厚的團契肢體關係。',
    photos: generatePhotoPaths('album-3', 14),
  },
  {
    id: 'album-4',
    title: '聖誕節燭光崇拜 2025',
    date: '2025年12月',
    year: '2025',
    category: '特別崇拜',
    coverImage: '/images/ActivityPhoto/album-4/cover4.png',
    description: '平安夜燭光歌詩與特別崇拜，同心慶賀主基督降生。',
    photos: generatePhotoPaths('album-4', 10),
  },
  {
    id: 'album-5',
    title: '秋季長者秋遊傳福音',
    date: '2025年10月',
    year: '2025',
    category: '團契活動',
    coverImage: '/images/ActivityPhoto/album-5/cover5.png',
    description: '長者事工戶外野餐與福音分享，享受戶外陽光與團契交通。',
    photos: generatePhotoPaths('album-5', 8),
  },
];

function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isUnlocked, openAuthModal } = useAuth();

  const activeAlbumId = searchParams.get('album');

  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const years = useMemo(() => {
    const sortedYears = Array.from(new Set(albumData.map((a) => a.year))).sort((a, b) => Number(b) - Number(a));
    return ['all', ...sortedYears];
  }, []);

  const categories = useMemo(() => {
    return ['all', ...Array.from(new Set(albumData.map((a) => a.category)))];
  }, []);

  const filteredAlbums = useMemo(() => {
    return albumData.filter((album) => {
      const matchYear = selectedYear === 'all' || album.year === selectedYear;
      const matchCategory = selectedCategory === 'all' || album.category === selectedCategory;
      return matchYear && matchCategory;
    });
  }, [selectedYear, selectedCategory]);

  const currentAlbum = albumData.find((a) => a.id === activeAlbumId);

  const handleAlbumClick = (id: string) => {
    if (isUnlocked) {
      router.push(`?album=${id}`, { scroll: false });
    } else {
      openAuthModal();
    }
  };

  const closeAlbum = () => {
    router.push('?', { scroll: false });
    setLightboxIndex(null);
  };

  useEffect(() => {
    if (lightboxIndex === null || !currentAlbum) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : currentAlbum.photos.length - 1
        );
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null && prev < currentAlbum.photos.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, currentAlbum]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      {!currentAlbum ? (
        <div>
          {/* Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs md:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat === 'all' ? '全部活動' : cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <label htmlFor="year-select" className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md shrink-0">
                📅 年份
              </label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-800 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer"
              >
                <option value="all">所有年份</option>
                {years.filter((y) => y !== 'all').map((year) => (
                  <option key={year} value={year}>
                    {year} 年
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Album Directory Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                onClick={() => handleAlbumClick(album.id)}
                className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Cover Image with clean privacy blur when locked */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                      !isUnlocked ? 'blur-lg scale-105 brightness-95' : ''
                    }`}
                  />

                  {/* Subtle welcoming hover hint when locked instead of a harsh lock box */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="rounded-full bg-slate-900/80 text-white px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-lg">
                        🔑 點擊輸入密碼解鎖相簿
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                      {album.date}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                    📷 {album.photos.length} 張
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {album.category}
                  </div>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {album.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {album.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-semibold text-slate-900 group-hover:translate-x-1 transition-transform">
                    {isUnlocked ? '瀏覽相簿 →' : '會友專用（點擊解鎖） →'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* LEVEL 2: SELECTED ALBUM DRILLDOWN */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <button
                onClick={closeAlbum}
                className="mb-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
              >
                ← 返回所有相簿
              </button>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {currentAlbum.title}
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {currentAlbum.date}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                {currentAlbum.description}
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {currentAlbum.photos.map((photoSrc, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-slate-200 shadow-sm"
              >
                <Image
                  src={photoSrc}
                  alt={`${currentAlbum.title} 相片 ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium">
                  🔍 點擊放大
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL WITH KEYBOARD NAV */}
      {currentAlbum && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors"
          >
            ✕ 關閉 (Esc)
          </button>

          <button
            onClick={() =>
              setLightboxIndex((lightboxIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length)
            }
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            ❮
          </button>

          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={currentAlbum.photos[lightboxIndex]}
              alt={`相片 ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-xs text-white backdrop-blur-md">
              {lightboxIndex + 1} / {currentAlbum.photos.length} (可以使用 ◄ ► 鍵切換)
            </div>
          </div>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % currentAlbum.photos.length)}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
}

export default function ActivityGallery() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-16">
      <section className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden py-14">
        <Image
          src="/images/natures-01.jpg"
          alt="活動花絮背景"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            活動花絮
          </h1>
          <p className="mt-2 text-sm text-slate-200 md:text-base">
            記錄教會生活與聚會的精采時刻
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="mx-auto max-w-6xl px-4 py-12 text-center text-slate-500">
          載入相簿中...
        </div>
      }>
        <GalleryContent />
      </Suspense>
    </div>
  );
}