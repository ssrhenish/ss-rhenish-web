import Link from "next/link";
import Image from "next/image"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// 導航連結資料
const navItems = [
  { label: "主頁", href: "/" },
  { label: "關於本堂", href: "/about" },
  { label: "主日崇拜", href: "/worship" },
  { label: "團契", href: "/fellowship" },
  { label: "分享", href: "/sharing" },
  { label: "五十週年紀念待刊", href: "/50th-anniversary" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* logo */}
        <Link
          href="/"
          className="flex h-14 items-center space-x-2 font-bold text-xl"
        >
          <Image src="/main-logo.png" alt="Logo" width={768} height={256} className="h-full w-auto object-contain" />
        </Link>

        {/* desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                {/* 用 asChild 代表將 Link 嘅功能套用落子元素，並且直接將樣式寫喺 Link 度 */}
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* 右側功能按鈕 (桌面版) */}
        {/* <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost">登入</Button>
          <Button>開始使用</Button>
        </div> */}

        {/* mobile */}
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
