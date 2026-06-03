import Link from "next/link";
import Image from "next/image";
import ListItem from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
                    <ul className="w-50">
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
          <Button variant="ghost">登入</Button>
          <Button>開始使用</Button>
        </div> */}

        {/* mobile header (hamburger) */}
        {/* <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">切換選單</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-60 sm:w-75">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-2" />
                <Button variant="ghost" className="w-full justify-start">
                  登入
                </Button>
                <Button className="w-full">開始使用</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
}
