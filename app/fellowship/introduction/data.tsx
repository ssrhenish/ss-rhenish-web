export interface FellowshipSection {
  id: string;
  categoryTitle: string;
  groups: {
    name: string;
    prefix: string;
    description: string;
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
  }[];
}

export const FELLOWSHIP_DATA: FellowshipSection[] = [
  {
    id: "elderly",
    categoryTitle: "長者團契",
    groups: [
      {
        name: "迦勒團",
        prefix: "團訓與目標",
        description: `「他們年老的時候仍要結果子，要滿了汁漿而常發青。」（詩92：14）\n這是我們的團訓，亦是目標及指引。我們每個人年齡雖然超過半佰，卻仍然活力充沛，不單積極參予教會、團契各項活動，亦樂於學習聖經而不怕艱苦，正如昔日的探子迦勒，對神充滿信心和依靠，滿有幹勁而永不言敗。\n「看哪、現今我八十五歲了，我還是強壯，像摩西打發我去的那天一樣。無論是爭戰，是出入，我的力量那時如何，現在還是如何。（書14：11-12） 」\n這正是我們的寫照：玩得、食得、做得，都是迦勒團團友的特色。\n歡迎您們逢每月第二、四週六下午二時至四時來到教會禮堂加入我們團契，成為我們的一份子，一齊唱詩、一齊祈禱、一齊分享、開開心心渡過一個溫情的下午。`,
        imageSrc: "/images/Fellowship/迦勒團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "路加團",
        prefix: "婦女團契",
        description: `現今的婦女能入得廚房亦能出得廳堂，內外美德兼備，為家庭的工程師，在神眼中職責重大，而路加團就是為這班重要的人物而設。\n我們的聚會內容多元化，上至屬天的培育，如聖經講座、查經，祈禱及唱詩等，下至屬世的生活分享，探訪及茶聚等。\n歡迎重要的妳，於每月第二個主日上午九時至十時半，參加我們這個大家庭。`,
        imageSrc: "/images/Fellowship/路加團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "約瑟團",
        prefix: "伉儷與長者團契",
        description: `約瑟團最初是夫婦聚會的團契， 原青年團成員結婚後， 在主暦1990年9月組成伉儷團， 團契生活可以追朔到教會成個立初期， 後來團契不斷發展， 加入許多單身的團友， 感覺團契名稱不合適， 到主曆2000年正式由伉儷團改名約瑟團， 現在團友大多已經成為退休或者半退休的長者， 2024年起約瑟團契歸入長者團契， 現時保持聯絡的大約有45人， 經常聚會大約10-15人， 活動形式以靜態為主， 有查經，分享，户外活動，相交等等， 宗旨： 在基督裏彼此相愛。`,
        imageSrc: "/images/Fellowship/約瑟團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
    ],
  },
  {
    id: "adult",
    categoryTitle: "成人團契",
    groups: [
      {
        name: "保羅團",
        prefix: "聚會資訊與宗旨",
        description: `聚會時間：\n每月第2及第4週，星期六晚上7:30至9:15\n聚會地點：\n新成路27號2樓\n團友：\n大多數團友為中年人，部份團友已步入退休之年\n宗旨：\n團友透過團契的生活，以基督的愛聯繫，彼此關心和互勵互勉，希望每個團友都活出喜樂和豐盛的生命。\n週會內容：\n週會多元化，有分享、查經、唱詩、專題講座、戶外活動等等\n（註：聚會時間和地點可能會有變，請向傳道同工或保羅團職員了解）`,
        imageSrc: "/images/Fellowship/保羅團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "以諾團",
        prefix: "職青家庭",
        description: `「以諾」是一位與神同行、蒙神所喜悅的聖經舊約人物。能與神同行是蒙福的，也是我們生命的方向。\n以諾團團友以職青為主，富有社會經驗、有不少已組織了小家庭，氣氛熱鬧，充滿朝氣。我們當中有熱心侍奉的資深團友，也陸續有新力軍加入這大家庭。\n我們每月都有聚會。內容多元化，主要讓團友與神建立關係、透過生活分享彼此支持，建立互愛的關係，當然也會以禱告彼此守望，實踐與神同行。\n歡迎您來加入，與我們一起「以諾」喇！\n以諾精神：Be the FIRST！ Be the BEST！與神同行，走在最前，做到最好！`,
        imageSrc: "/images/Fellowship/以諾團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "約書亞團",
        prefix: "職青團契",
        description: `你知道上水堂自開堂以來，那一個團契是最早成立呢？\n答案就是少年團，即現在的約書亞團。\n約書亞團的團友主要為職青。為配合各團友的時間，團契定於每月第一及第三個星期六下午五時正在教會二樓舉行。\n在團契的生活裡，期望彼此能建立與相顧，學習神所教的真理，裝備自己，為主作光作鹽，成為神所喜悅的人。`,
        imageSrc: "/images/Fellowship/約書亞團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "提摩太團",
        prefix: "大專與網上團契",
        description: `提摩太團於2002年10月成立，由一班大專生所組成，約十五人參與，最初團契時間為每週日第三堂崇拜後於教會一樓舉行。\n近年因部分團友移居海外及配合團友家庭需要，團契改為每月第四主日晚上舉行網上聚會一小時，聚會內容包括查經、分享、專題討論等等。\n我們歡迎你隨時加入我們的團契！`,
        imageSrc: "/images/Fellowship/提摩太團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "大衞團",
        prefix: "青年團契",
        description: `大衞團適合青年參加。\n團契的週會有查經、靈修、代禱、户外活動等等。\n每次團契除了有特定的主題外，還一定有互相分享近況的時間，目的是讓各團友多了解，從而有更深的認識，並在靈命上和日常生活上互相支持、鼓勵及一同成長，見證神的愛。\n為配合團友需要，會靈活安排聚會時間，希望適合而有興趣的你加入我們的大家庭，等緊你丫！`,
        imageSrc: "/images/Fellowship/大衞團.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
    ],
  },
  {
    id: "youth",
    categoryTitle: "青少年團契",
    groups: [
      {
        name: "約拿單小組",
        prefix: "青年小組",
        description: `約拿單小組適合青年參加。\n團契的週會有查經、靈修、代禱、户外活動等等。\n每次團契除了有特定的主題外，還一定有互相分享近況的時間，目的是讓各團友多了解，從而有更深的認識，並在靈命上和日常生活上互相支持、鼓勵及一同成長，見證神的愛。\n為配合團友需要，會靈活安排聚會時間，希望適合而有興趣的你加入我們的大家庭，等緊你丫！`,
        imageSrc: "/images/Fellowship/約拿單小組.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
      {
        name: "七仁組",
        prefix: "職青小組",
        description: `七仁組組員是年輕的職青，主打氣氛輕鬆的週會。我們每星期都會小聚一次，有信仰探討、亦有互動的時間，每個組員性格不同，可以碰撞岀不同信仰的想法，一起在主愛內同行。`,
        imageSrc: "/images/Fellowship/七仁組.jpg",
        imageWidth: 396,
        imageHeight: 300,
      },
    ],
  },
];