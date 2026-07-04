// this file contains the column definitions

"use client"

import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
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
  type: "lunch" | "third" | "christmas"
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
  },
  {
    accessorKey: "speaker",
    header: () => <div className="">講員</div>,
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
  },
  {
    accessorKey: "verse",
    header: () => <div className="">經文</div>,
  },
  {
    accessorKey: "powerpoint",
    header: () => <div className="">簡報 (PPT)</div>,
    cell: ({ row }) => {
      return row.getValue("powerpoint")
        ? <div className="text-brand-orange hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("powerpoint") }</div>
        : <div className="">N/A</div>
    },
  },
  {
    accessorKey: "mp3",
    header: () => <div className="">講道錄音 (MP3)</div>,
    cell: ({ row }) => {
      return row.getValue("mp3")
        ? <div className="text-brand-orange hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("mp3") }</div>
        : <div className="">因應講員要求而未能提供錄音，請見諒！</div>
    },
  },
  /*{
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.date)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },*/
]