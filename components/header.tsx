"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, Lock, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
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

const navItems = [
  { label: "主頁", href: "/" },
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
  { label: "五十週年紀念待刊", href: "/50th-anniversary" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { isUnlocked, openAuthModal } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-3 lg:px-6">
        
        {/* Logo & Church Name */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex h-14 items-center">
            <Image
              src="/main-logo.png"
              alt="Logo"
              width={768}
              height={256}
              className="h-full w-auto object-contain"
            />
          </Link>
          <div className="font-bold text-xl tracking-tight hidden xl:block text-slate-900">
            中華基督教禮賢會上水堂
          </div>
        </div>

        {/* Desktop Header Nav + Top Right Unlock Button */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0.5">
              {navItems.map((item, index) =>
                item.items ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="h-12 px-3 py-2 text-base font-bold cursor-pointer">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-44 p-2 bg-white shadow-xl rounded-xl border border-slate-100 flex flex-col gap-1">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink
                            key={subItem.href}
                            href={subItem.href}
                            className="hover:text-brand-orange hover:bg-amber-50/80 text-base font-semibold py-2 px-3 rounded-lg block transition-colors"
                          >
                            {subItem.label}
                          </NavigationMenuLink>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Top Rightmost Unlock Button */}
          <div className="pl-2 shrink-0">
            {isUnlocked ? (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1.5 text-sm font-bold text-emerald-800 border border-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>已解鎖</span>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => openAuthModal()}
                className="gap-2 border-slate-300 bg-amber-50/60 hover:bg-amber-100 text-slate-900 font-bold text-base h-11 px-4 shadow-sm cursor-pointer"
              >
                <Lock className="w-4 h-4 text-brand-orange" />
                <span>會友解鎖</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile / Tablet Viewport Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          {isUnlocked ? (
            <span className="p-2 text-emerald-600" title="資源已解鎖">
              <ShieldCheck className="w-6 h-6" />
            </span>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => openAuthModal()}
              className="gap-1.5 text-sm font-bold h-10 px-3 border-slate-300"
            >
              <Lock className="w-4 h-4 text-brand-orange" />
              <span>會友解鎖</span>
            </Button>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-(--color-brand-orange) text-white h-10 w-10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">切換選單</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80 pr-0">
              <SheetHeader className="sr-only">
                <SheetTitle>導航選單</SheetTitle>
                <SheetDescription>手提電話版導航選單</SheetDescription>
              </SheetHeader>

              <div className="h-full overflow-y-auto pr-6 py-6 flex flex-col justify-between">
                <nav className="flex flex-col gap-3">
                  {navItems.map((item, index) => {
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className="pl-4 text-lg font-bold text-slate-900 py-2 transition-colors hover:text-brand-orange"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    }

                    return (
                      <Collapsible key={index} className="group">
                        <CollapsibleTrigger className="pl-4 flex w-full items-center justify-between text-lg font-bold text-slate-900 py-2 transition-colors hover:text-brand-orange [&[data-state=open]>svg]:rotate-180">
                          {item.label}
                          <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 text-slate-500" />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
                          <div className="flex flex-col gap-2 pl-4 border-l-2 ml-2 mt-1 border-slate-200">
                            {item.items?.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="text-base font-semibold text-slate-700 py-1.5 transition-colors hover:text-brand-orange"
                                onClick={() => setOpen(false)}
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

                <div className="pt-6 border-t mt-auto">
                  {isUnlocked ? (
                    <div className="flex items-center gap-2 text-base text-emerald-800 font-bold px-3 py-2.5 bg-emerald-50 rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                      <span>資源已解鎖</span>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full gap-2 text-base font-bold justify-center h-12 bg-amber-50 border-slate-300"
                      onClick={() => {
                        setOpen(false);
                        openAuthModal();
                      }}
                    >
                      <Lock className="w-4 h-4 text-brand-orange" />
                      輸入會友密碼解鎖
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}