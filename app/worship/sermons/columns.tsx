// this file contains the column definitions

"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  date: string
  speaker: string
  type: "lunch" | "third" | "christmas"
  topic: string
  verse: string
  powerpoint: string
  mp3: string
}

export const columns: ColumnDef<Payment>[] = [
    {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          主日
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
    accessorKey: "verse",
    header: () => <div className="">經文</div>,
  },
  {
    accessorKey: "powerpoint",
    header: () => <div className="">投影片</div>,
    cell: ({ row }) => {
      return <div className="hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("powerpoint") }</div>
    },
  },
  {
    accessorKey: "mp3",
    header: () => <div className="">MP3</div>,
    cell: ({ row }) => {
      return <div className="hover:underline cursor-pointer" onClick={() => toast.info("Coming Soon!", { position: "top-center" })}>{ row.getValue("mp3") }</div>
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