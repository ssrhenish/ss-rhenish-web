"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ScheduleItem {
  id: string;
  event: string;
  time: string;
  target: string;
  location: string;
  type: 'worship' | 'prayer' | 'children';
  specialNote?: string;
  communionNote?: string;
}

const scheduleData: ScheduleItem[] = [
  {
    id: 'noon-worship',
    event: '午堂崇拜',
    time: '逢星期日 上午 11:00',
    target: '任何人士',
    location: '禮堂 / 閣樓 / 二樓',
    type: 'worship',
    communionNote: '每月第二主日設聖餐',
    specialNote: '每月第四主日為兩堂聯合崇拜',
  },
  {
    id: 'third-worship',
    event: '第三堂崇拜',
    time: '逢星期日 下午 02:00',
    target: '年青人',
    location: '禮堂',
    type: 'worship',
    communionNote: '每月第一主日設聖餐',
    specialNote: '⚠️ 每月第四主日暫停（改為參加上午11時聯合崇拜）',
  },
  {
    id: 'kids-worship',
    event: '兒童崇拜',
    time: '逢星期日 上午 11:00',
    target: '2歲幼兒至小六學生',
    location: '二樓',
    type: 'children',
  },
  {
    id: 'prayer-room',
    event: '祈禱關顧室',
    time: '逢星期日 午堂聚會後',
    target: '任何人士',
    location: '禮堂',
    type: 'prayer',
  },
  {
    id: 'prayer-monthly',
    event: '祈禱月會',
    time: '每月第四主日 上午 09:00 - 10:00',
    target: '任何人士',
    location: '一樓',
    type: 'prayer',
  },
];

/**
 * Checks if current date is between Day 15 and end-of-month 
 * (covers the 3rd and 4th/last week of the month)
 */
function isFourthSundayWindow(): boolean {
  const date = new Date().getDate();
  return date >= 1;
}

export default function WorshipSchedule() {
  const [showNotice, setShowNotice] = useState<boolean>(false);

  useEffect(() => {
    // Determine whether to display the banner on client mount
    setShowNotice(isFourthSundayWindow());
  }, []);

  return (
    <div className="w-full">
      {/* Hero Header Section */}
      <section className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden py-16 md:py-24">
        <Image
          src="/images/natures-01.jpg"
          alt="崇拜時間背景"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            崇拜時間
          </h1>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        
        {/* Dynamic Highlight Banner: Displays ONLY between the 3rd and 4th week */}
        {showNotice && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 shadow-sm flex items-start gap-3 transition-all animate-fadeIn">
            <span className="text-xl shrink-0">📌</span>
            <div className="text-sm leading-relaxed">
              <strong className="font-semibold text-amber-950">第四主日特別安排提醒：</strong>
              <p className="mt-0.5 text-amber-800">
                第四個主日將舉行<strong>兩堂聯合崇拜（上午 11:00）</strong>，當天下午 02:00 之「第三堂崇拜」將暫停一次。
              </p>
            </div>
          </div>
        )}

        {/* Desktop Table View (md and above) */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left text-base">
            <thead className="bg-gray-100 border-b border-gray-200 text-gray-900 font-semibold">
              <tr>
                <th scope="col" className="px-6 py-4 text-center whitespace-nowrap">聚會</th>
                <th scope="col" className="px-6 py-4 text-center whitespace-nowrap">時間</th>
                <th scope="col" className="px-6 py-4 text-center whitespace-nowrap">對象</th>
                <th scope="col" className="px-6 py-4 text-center whitespace-nowrap">地點</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {scheduleData.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}
                >
                  <td className="px-6 py-4 text-center whitespace-nowrap align-middle">
                    <div className="font-bold text-gray-900">{item.event}</div>
                    {item.communionNote && (
                      <div className="mt-1 text-xs text-emerald-700 font-medium">
                        {item.communionNote}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center align-middle text-gray-800">
                    <div>{item.time}</div>
                    {item.specialNote && (
                      <div className={`mt-1 text-xs ${item.specialNote.includes('⚠️') ? 'font-medium text-amber-800' : 'text-gray-500'}`}>
                        {item.specialNote}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 font-medium text-center text-gray-800 whitespace-nowrap align-middle">
                    {item.target}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap align-middle">
                    <span className="inline-block rounded bg-gray-100 px-2.5 py-1 text-sm font-semibold text-gray-800 border border-gray-200">
                      {item.location}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (sm and below) - Clean & Simplified */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          {scheduleData.map((item) => (
            <div 
              key={item.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-2.5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="font-bold text-gray-900 text-base">{item.event}</div>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700 border border-gray-200">
                  {item.location}
                </span>
              </div>

              {/* Card Body */}
              <div className="text-sm text-gray-800 space-y-1">
                <div className="font-medium text-slate-900">{item.time}</div>
                <div className="text-xs text-gray-500">對象：{item.target}</div>

                {item.communionNote && (
                  <div className="text-xs font-medium text-emerald-700 pt-0.5">
                    💡 {item.communionNote}
                  </div>
                )}

                {item.specialNote && (
                  <div className={`mt-1.5 rounded p-2 text-xs leading-relaxed ${
                    item.specialNote.includes('⚠️️') 
                      ? 'bg-amber-50 text-amber-900 font-medium border border-amber-200' 
                      : 'bg-gray-50 text-gray-600'
                  }`}>
                    {item.specialNote}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}