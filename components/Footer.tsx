"use client";

import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026); // default year, will be updated on mount
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-center text-slate-400 p-10">
      © {currentYear} 中華基督教禮賢會上水堂
    </div>
  );
}
