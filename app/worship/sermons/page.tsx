export default async function TimetablePage() {
  
  const data = await getData()
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-4">講道錄音</h1>
      {/* <p className="text-muted-foreground text-lg">
        Coming Soon!
      </p> */}

      <DataTable columns={columns} data={data} />
    </div>
  )
}

import { columns, SermonDetails } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<SermonDetails[]> {
  // Fetch data from your API here.
  return [
    {
      date: "2025-10-26",
      speaker: "黃天相博士",
      type: "lunch",
      topic: "事奉者的約",
      verse: "瑪拉基書2章1-9節",
      powerpoint: null,
      mp3: null
    },
    {
      date: "2025-10-19",
      speaker: "關卓凌傳道",
      type: "third",
      topic: "若然未報，時辰未到？",
      verse: "路加福音 18章1-8節",
      powerpoint: "251019",
      mp3: "251019",
    },
    {
      date: "2025-10-12",
      speaker: "廖小茵牧師",
      type: "lunch",
      topic: "喜樂與感恩—神心意",
      verse: "帖撒羅尼迦前書5章16-18節	",
      powerpoint: "251012",
      mp3: "251012",
    },
    {
      date: "2025-10-12",
      speaker: "黄美君傳道",
      type: "third",
      topic: "刻在祢心底的名字",
      verse: "以斯拉記1章1-11節",
      powerpoint: null,
      mp3: null,
    },
    {
      date: "2025-10-05	",
      speaker: "吳佩詩姑娘",
      type: "lunch",
      topic: "忠心的服侍",
      verse: "路加福音17章5-10節",
      powerpoint: "251005",
      mp3: "251005",
    },
    {
      date: "2025-10-05",
      speaker: "廖小茵牧師",
      type: "lunch",
      topic: "樂於接待",
      verse: "希伯來書13章1-3節",
      powerpoint: "251005_3rd",
      mp3: "251005_3rd",
    },
    {
      date: "2025-09-28",
      speaker: "林雪文博士",
      type: "lunch",
      topic: "幸福之家",
      verse: "詩篇84篇1-12節",
      powerpoint: null,
      mp3: "250928",
    },
    {
      date: "2025-09-21",
      speaker: "李就强宣教師",
      type: "lunch",
      topic: "以禱告...",
      verse: "提摩太前書2章1-7節	",
      powerpoint: "250921",
      mp3: "250921",
    },
    {
      date: "2025-09-21",
      speaker: "陳芷華姑娘",
      type: "third",
      topic: "拆完之後",
      verse: "耶利米書18章1-11節",
      powerpoint: "250921_3rd",
      mp3: "250921_3rd",
    },
    {
      date: "2025-09-14",
      speaker: "李就强宣教師",
      type: "third",
      topic: "恩典與憐憫",
      verse: "提摩太前書1章12-17節",
      powerpoint: "250914_3rd",
      mp3: "250914_3rd",
    }
  ]
}