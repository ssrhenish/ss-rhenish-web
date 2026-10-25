"use client"

import React, { useState, useEffect } from "react"
import { getColumns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { Video, ExternalLink } from "lucide-react"
import { SermonDetails } from "./columns"


// sample data for testing 
/*const SAMPLE_DATA: SermonDetails[] = [
  {
    date: "2025-10-26",
    speaker: "黃天相博士",
    session: "lunch",
    topic: "事奉者的約",
    verse: "瑪拉基書2章1-9節",
    powerpoint: null,
    mp3: null
  },
  {
    date: "2025-10-19",
    speaker: "關卓凌傳道",
    session: "third",
    topic: "若然未報，時辰未到？",
    verse: "路加福音 18章1-8節",
    powerpoint: "251019",
    mp3: "251019",
  },
  {
    date: "2025-10-12",
    speaker: "廖小茵牧師",
    session: "lunch",
    topic: "喜樂與感恩—神心意",
    verse: "帖撒羅尼迦前書5章16-18節",
    powerpoint: "251012",
    mp3: "251012",
  },
  {
    date: "2025-10-12",
    speaker: "黄美君傳道",
    session: "third",
    topic: "刻在祢心底的名字",
    verse: "以斯拉記1章1-11節",
    powerpoint: null,
    mp3: null,
  },
  {
    date: "2025-10-05",
    speaker: "吳佩詩姑娘",
    session: "lunch",
    topic: "忠心的服侍",
    verse: "路加福音17章5-10節",
    powerpoint: "251005",
    mp3: "251005",
  },
  {
    date: "2025-10-05",
    speaker: "廖小茵牧師",
    session: "lunch",
    topic: "樂於接待",
    verse: "希伯來書13章1-3節",
    powerpoint: "251005_3rd",
    mp3: "251005_3rd",
  },
  {
    date: "2025-09-28",
    speaker: "林雪文博士",
    session: "lunch",
    topic: "幸福之家",
    verse: "詩篇84篇1-12節",
    powerpoint: null,
    mp3: "250928",
  },
  {
    date: "2025-09-21",
    speaker: "李就强宣教師",
    session: "lunch",
    topic: "以禱告...",
    verse: "提摩太前書2章1-7節",
    powerpoint: "250921",
    mp3: "250921",
  },
  {
    date: "2025-09-21",
    speaker: "陳芷華姑娘",
    session: "third",
    topic: "拆完之後",
    verse: "耶利米書18章1-11節",
    powerpoint: "250921_3rd",
    mp3: "250921_3rd",
  },
  {
    date: "2025-09-14",
    speaker: "李就强宣教師",
    session: "third",
    topic: "恩典與憐憫",
    verse: "提摩太前書1章12-17節",
    powerpoint: "250914_3rd",
    mp3: "250914_3rd",
  }
]*/

export default function TimetablePage() {
  
  const columns = getColumns()

  const [sermonData, setSermonData] = useState<any>(null);

  useEffect(() => {
    const fetchSermonData = async () => {
      try {
        const res = await fetch('/api/sharepoint/sermons');
        const result = await res.json();
        setSermonData(result.data);
        //console.log('SharePoint API Response:', result);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchSermonData();
  }, []);

  return (
    <div className="container mx-auto py-10 px-4 space-y-6">
      
      {/* FACEBOOK LIVE STREAMING PROMO BANNER */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 text-white shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200 border border-blue-400/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              每週線上崇拜直播
            </div>
            <h2 className="text-2xl font-bold tracking-tight">
              主日崇拜直播 · 每週日上午 11:00
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              歡迎未能親臨現場的弟兄姊妹與朋友，透過我們的 Facebook 專頁參與直播與同心敬拜。
            </p>
          </div>

          <a
            href="https://www.facebook.com/ss.rhenish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-blue-500 transition-all shrink-0"
          >
            <Video className="w-4 h-4" />
            前往 Facebook 直播專頁
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* HEADER TITLE */}
      <div className="pt-2">
        <h1 className="text-3xl font-bold tracking-tight">講道錄音與簡報</h1>
        <p className="text-sm text-muted-foreground mt-1">
          查閱過往主日崇拜講題、經文及相關資源。
        </p>
      </div>

      {/* DATA TABLE */}
      {/* <DataTable columns={columns} data={SAMPLE_DATA} /> */}
      <DataTable columns={columns} data={sermonData} />

    </div>
  )
}