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

import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      date: "2025-10-26",
      speaker: "黃天相博士",
      type: "lunch",
      topic: "事奉者的約",
      verse: "瑪拉基書2章1-9節",
      powerpoint: "N/A",
      mp3: "因應講員要求而未能提供錄音，請見諒！"
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
    // ...
  ]
}