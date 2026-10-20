export interface CoreValue {
  number: string;
  title: string;
  description: string;
  accentColor: string; // Tailwind color classes for border and badge
}

export const CORE_VALUES_DATA: CoreValue[] = [
  {
    number: "01",
    title: "與上帝建立關係",
    description: "認識、愛上帝、真理教導",
    accentColor: "border-t-blue-500 text-blue-600",
  },
  {
    number: "02",
    title: "家與愛",
    description: "愛身邊人、弟兄姊妹、鄰舍",
    accentColor: "border-t-rose-500 text-rose-600",
  },
  {
    number: "03",
    title: "發揮恩賜",
    description: "建立教會",
    accentColor: "border-t-amber-500 text-amber-600",
  },
  {
    number: "04",
    title: "服事社區",
    description: "領人與主建立關係 / 作光作鹽",
    accentColor: "border-t-emerald-500 text-emerald-600",
  },
];