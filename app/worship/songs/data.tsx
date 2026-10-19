export interface WorshipSongItem {
  id: number;
  date: string;
  themeOrTitle: string;
  leaderOrTeam: string;
  remarks?: string;
}

export const WORSHIP_SONGS_DATA: WorshipSongItem[] = [
  // You can easily add or map your actual worship schedule rows here
  { id: 1, date: "2025年1月5日", themeOrTitle: "主日敬拜：恩典之路", leaderOrTeam: "敬拜隊 A組", remarks: "司琴：同工A" },
  { id: 2, date: "2025年1月12日", themeOrTitle: "主日敬拜：全因為你", leaderOrTeam: "敬拜隊 B組", remarks: "司琴：同工B" },
  { id: 3, date: "2025年1月19日", themeOrTitle: "主日敬拜：你是唯一", leaderOrTeam: "敬拜隊 C組", remarks: "司琴：同工C" },
];