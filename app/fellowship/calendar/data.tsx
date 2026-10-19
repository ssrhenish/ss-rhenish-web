export interface MeetingItem {
  id: number;
  groupName: string;
  time: string;
  target: string;
  location: string;
}

export const MEETING_SCHEDULES: MeetingItem[] = [
  { id: 1, groupName: "迦勒團", time: "每月第二、四週六下午二時正", target: "長者", location: "地下禮堂" },
  { id: 2, groupName: "路加團", time: "每月第二主日上午九時正", target: "婦女", location: "閣樓" },
  { id: 3, groupName: "約瑟團", time: "每月第一、三主日下午二時正", target: "成人", location: "27號二樓" },
  { id: 4, groupName: "保羅團", time: "每月第一、三週六晚上七時半", target: "成人", location: "二樓" },
  { id: 5, groupName: "以諾團", time: "每月第一主日下午一時十五分", target: "成人", location: "一樓" },
  { id: 6, groupName: "約書亞團", time: "每月第一、三週六下午四時半", target: "成人", location: "一樓" },
  { id: 7, groupName: "大衞團", time: "每月第一、三主日下午三時半", target: "成人", location: "二樓" },
  { id: 8, groupName: "提摩太團", time: "每月第四主日晚上六時正", target: "成人", location: "ZOOM" },
  { id: 9, groupName: "約拿單小組", time: "每月第四主日下午二時正", target: "職青", location: "自家人" },
  { id: 10, groupName: "七仁組", time: "逢星期五晚上八時正", target: "職青", location: "自家人" },
  { id: 11, groupName: "恩澤小組", time: "逢星期日下午三時半", target: "大專 / 初職", location: "自家人" },
  { id: 12, groupName: "以馬內利小組", time: "逢星期日上午十一時正", target: "初中 / 高中", location: "自家人" },
  { id: 13, groupName: "正面管教生命小組", time: "每月第二、四週六下午三時半", target: "成人", location: "27號二樓" },
  { id: 14, groupName: "讚美操小組", time: "每月第二、四週五晚上七時正", target: "成人", location: "二樓 / 地下禮堂" },
  { id: 15, groupName: "週四小聚", time: "每月第四週四上午十一時正", target: "慕道者", location: "地下禮堂" },
  { id: 16, groupName: "長者查經班", time: "每月第三週二上午十時正", target: "長者", location: "地下禮堂" },
];