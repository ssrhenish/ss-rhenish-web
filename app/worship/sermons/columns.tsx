// this file contains the column definitions

"use client"

import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { DataTableColumnFilter } from "@/components/DataTableColumnFilter"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export type SermonDetails = {
  date: string
  speaker: string
  session: "lunch" | "third" | "christmas"
  topic: string
  verse: string
  powerpoint: string | null
  mp3: string | null
}

type ColumnSortState = false | SortDirection

type SortIconProps = {
  sorted: ColumnSortState
}

function SortIcon({ sorted }: SortIconProps) {
  const className = cn(
    "ml-2 h-4 w-4",
    sorted ? "text-brand-orange" : "text-muted-foreground"
  )

  if (sorted === "asc") {
    return <ArrowUp className={className} />
  }

  if (sorted === "desc") {
    return <ArrowDown className={className} />
  }

  return <ArrowUpDown className={className} />
}

export const columns: ColumnDef<SermonDetails>[] = [
    {
    accessorKey: "date",
    header: ({ column }) => {
      const sorted: ColumnSortState = column.getIsSorted()

      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(sorted === "asc")}
        >
          主日
          <SortIcon sorted={sorted} />
        </Button>
      )
    },
    meta: { className: "md:w-[12%]" }
  },
  {
    accessorKey: "session",
    //header: () => <div className="">崇拜堂次</div>,
    header: ({ column }) => (
      <DataTableColumnFilter column={column} title="崇拜堂次" />
    ),
    filterFn: "arrIncludesSome",
    meta: { className: "w-[10%]" },
    cell: ({ row }) => {
      switch (row.getValue("session")) {
        case 'lunch': return <Badge className="w-15 bg-blue-50 text-blue-700 ">午堂</Badge>
        case 'third': return <Badge className="w-15 bg-green-50 text-green-700">第三堂</Badge>
        case 'christmas': return <Badge className="w-15 bg-red-50 text-red-700">聖誕崇拜</Badge>
      }
    },
  },
  {
    accessorKey: "speaker",
    header: ({ column }) => (
      <DataTableColumnFilter column={column} title="講員" />
    ),
    filterFn: "arrIncludesSome",
    meta: { className: "w-[12%]" }
    /*cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },*/
  },
  {
    accessorKey: "topic",
    header: () => <div className="">講題</div>,
    //meta: { className: "w-[10%]" }
  },
  {
    accessorKey: "verse",
    header: () => <div className="">經文</div>,
    //meta: { className: "w-[10%]" }
  },
  {
    accessorKey: "powerpoint",
    header: () => <div className="">簡報 (PPT)</div>,
    meta: { className: "w-[12%]" },
    cell: ({ row }) => {
      return row.getValue("powerpoint")
        ? <div className="text-brand-orange hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("powerpoint") }</div>
        : <div className="">N/A</div>
    },
  },
  {
    accessorKey: "mp3",
    header: () => <div className="">講道錄音 (MP3)</div>,
    //meta: { className: "w-[10%]" },
    cell: ({ row }) => {
      return row.getValue("mp3")
        ? <div className="text-brand-orange hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("mp3") }</div>
        : <div className="">因應講員要求而未能提供錄音，請見諒！</div>
    },
  }
]