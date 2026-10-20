export interface ChoirHymnItem {
  id: number;
  date: string;
  hymnName: string;
  choirGroup: string;
  conductorOrAccompanist?: string;
}

export const CHOIR_HYMNS_DATA: ChoirHymnItem[] = [
  // You can add rows dynamically here
  { id: 1, date: "2025年1月1日", hymnName: "主恩頌", choirGroup: "成年詩班", conductorOrAccompanist: "指揮：陳導師 / 伴奏：林同工" },
  { id: 2, date: "2025年2月14日", hymnName: "十架愛", choirGroup: "恩典詩班", conductorOrAccompanist: "指揮：張導師" },
  { id: 3, date: "2025年3月20日", hymnName: "復活的盼望", choirGroup: "以馬內利詩班", conductorOrAccompanist: "伴奏：黃同工" },
];