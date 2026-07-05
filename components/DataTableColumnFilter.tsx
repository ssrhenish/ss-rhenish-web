"use client"

import * as React from "react"
import { Column } from "@tanstack/react-table"
import { Check, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface DataTableColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnFilter<TData, TValue>({
  column,
  title,
}: DataTableColumnFilterProps<TData, TValue>) {

  const facets = column.getFacetedUniqueValues()
  const options = React.useMemo(() => {
    return Array.from(facets.keys()).filter(Boolean).map((value) => ({
      label: String(value),
      value: String(value),
    }))
  }, [facets])

  const selectedValues = new Set(column.getFilterValue() as string[])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="-ml-3 h-8 data-[state=open]:bg-accent cursor-pointer">
          <span>{title}</span>
          <Filter className="ml-2 h-4 w-4 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`搜尋 ${title}...`} />
          <CommandList>
            <CommandEmpty>找不到結果</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value)
                      } else {
                        selectedValues.add(option.value)
                      }
                      const filterValues = Array.from(selectedValues)
                      column.setFilterValue(
                        filterValues.length ? filterValues : undefined
                      )
                    }}
                    className="cursor-pointer"
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-brand-orange border-brand-orange hover:bg-brand-orange"
                          : "opacity-50 [&_svg]:hidden"
                      )}
                    >
                      <Check className={cn("h-4 w-4 !text-white")} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}