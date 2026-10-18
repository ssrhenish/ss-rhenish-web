"use client"

import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown, Lock, FileText, Music } from "lucide-react"
import { DataTableColumnFilter } from "@/components/DataTableColumnFilter"
import { useAuth } from "@/context/AuthContext"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

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

// Helper Cell component using global Auth Context
function ProtectedAssetCell({ 
  value, 
  type
}: { 
  value: string | null
  type: "ppt" | "mp3"
}) {
  const { isUnlocked, handleAssetAccess } = useAuth()

  if (!value) {
    if (type === "mp3") {
      return <span className="text-xs text-muted-foreground">因應講員要求未能提供</span>
    }
    return <span className="text-muted-foreground">N/A</span>
  }

  const handleAccess = () => {
    handleAssetAccess({ 
      name: value, 
      type: type === "ppt" ? "簡報 (PPT)" : "錄音 (MP3)" 
    })
  }

  return (
    <button
      onClick={handleAccess}
      className="inline-flex items-center gap-1.5 font-medium text-brand-orange hover:underline focus:outline-none cursor-pointer text-left"
    >
      {type === "ppt" ? <FileText className="h-3.5 w-3.5" /> : <Music className="h-3.5 w-3.5" />}
      <span>{value}</span>
      {!isUnlocked && <Lock className="h-3 w-3 text-muted-foreground" />}
    </button>
  )
}

export const getColumns = (): ColumnDef<SermonDetails>[] => [
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
    header: ({ column }) => (
      <DataTableColumnFilter column={column} title="崇拜堂次" />
    ),
    filterFn: "arrIncludesSome",
    meta: { className: "w-[10%]" },
    cell: ({ row }) => {
      switch (row.getValue("session")) {
        case 'lunch': return <Badge className="w-15 bg-blue-50 text-blue-700 hover:bg-blue-100">午堂</Badge>
        case 'third': return <Badge className="w-15 bg-green-50 text-green-700 hover:bg-green-100">第三堂</Badge>
        case 'christmas': return <Badge className="w-15 bg-red-50 text-red-700 hover:bg-red-100">聖誕崇拜</Badge>
        default: return null
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
  },
  {
    accessorKey: "topic",
    header: () => <div>講題</div>,
  },
  {
    accessorKey: "verse",
    header: () => <div>經文</div>,
  },
  {
    accessorKey: "powerpoint",
    header: () => <div>簡報 (PPT)</div>,
    meta: { className: "w-[12%]" },
    cell: ({ row }) => (
      <ProtectedAssetCell 
        value={row.getValue("powerpoint")} 
        type="ppt" 
      />
    ),
  },
  {
    accessorKey: "mp3",
    header: () => <div>講道錄音 (MP3)</div>,
    meta: { className: "w-[16%]" },
    cell: ({ row }) => (
      <ProtectedAssetCell 
        value={row.getValue("mp3")} 
        type="mp3" 
      />
    ),
  }
]