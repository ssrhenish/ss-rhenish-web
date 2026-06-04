"use client";

import Link from "next/link";
import Image from "next/image";
import ListItem from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

// content for header navigation menu
const navItems = [
  {
    label: "主頁",
    href: "/",
  },
  {
    label: "關於本堂",
    items: [
      { label: "本堂簡介", href: "/about" },
      { label: "本堂歷史", href: "/about/history" },
      { label: "本堂架構", href: "/about/structure" },
      { label: "教牧同工", href: "/about/pastors" },
      { label: "各部事工", href: "/about/departments" },
    ],
  },
  {
    label: "主日崇拜",
    items: [
      { label: "崇拜時間", href: "/worship/timetable" },
      { label: "崇拜週刊", href: "/worship/bulletin" },
      { label: "詩歌敬拜", href: "/worship/songs" },
      { label: "詩班獻詩", href: "/worship/choir" },
      { label: "講道錄音", href: "/worship/sermons" },
      { label: "行事曆", href: "/worship/calendar" },
      { label: "惡劣天氣安排", href: "/worship/bad-weather" },
    ],
  },
  {
    label: "團契",
    items: [
      { label: "團契簡介", href: "/fellowship/introduction" },
      { label: "團契職員", href: "/fellowship/pastors" },
      { label: "聚會時間", href: "/fellowship/calendar" },
    ],
  },
  {
    label: "分享",
    items: [
      { label: "活動照片", href: "/sharing/photos" },
      { label: "一口田", href: "/sharing/yat-hau-tin" },
      { label: "詩歌見證分享會", href: "/sharing/sermons" },
    ],
  },
  {
    label: "五十週年紀念待刊",
    href: "/50th-anniversary",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4">
        {/* logo */}
        <Link
          href="/"
          className="flex h-14 items-center space-x-2 font-bold text-xl"
        >
          <Image
            src="/main-logo.png"
            alt="Logo"
            width={768}
            height={256}
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* desktop header */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            {navItems.map((item, index) =>
              item.items ? (
                // items with dropdown
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-30">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.href}
                          href={subItem.href}
                          title={subItem.label}
                          className="hover:text-brand-orange"
                        >
                          {subItem.label}
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                // items without dropdown
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 右側功能按鈕 (桌面版) */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost">Login</Button>
          <Button>Sing up</Button>
        </div> */}

        {/* mobile header (hamburger) */}
        <div className="flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-(--color-brand-orange)"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">切換選單</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-75 pr-0">
              <SheetHeader className="sr-only">
                <SheetTitle>導航選單</SheetTitle>
                <SheetDescription>
                  這是本堂網站的手提電話版導航選單
                </SheetDescription>
              </SheetHeader>

              <div className="h-full overflow-y-auto pr-6 py-6">
                <nav className="flex flex-col gap-3">
                  {navItems.map((item, index) => {
                    // items without dropdown
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className="pl-5 text-base font-medium py-1.5 transition-colors hover:text-primary"
                          onClick={() => setOpen(false)} // to close the sidebar when clicking a menu item
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    // iuse Collapsible for mobile dropdown menu
                    return (
                      <Collapsible key={index} className="group">
                        <CollapsibleTrigger className="pl-5 flex w-full items-center justify-between text-base font-medium py-1.5 transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180">
                          {item.label}
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
                          <div className="flex flex-col gap-2 pl-4 border-l ml-1.5 mt-1 border-muted">
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="text-sm text-muted-foreground py-1 transition-colors hover:text-primary"
                                onClick={() => setOpen(false)} // to close the sidebar when clicking a menu item
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
