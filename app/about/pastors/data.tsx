export interface StaffMember {
  id: string;
  name: string;
  title: string;
  nickname: string;
  imageSrc: string; // Used for both grid and detail view
  sectionId: string;
  bioHtml: string;
}

export const PASTORAL_STAFF_DATA: StaffMember[] = [
  {
    id: "siuyan",
    name: "廖小茵牧師",
    title: "堂主任",
    nickname: "小茵",
    imageSrc: "/images/about/siuyan_photo.jpg",
    sectionId: "Section_Siuyan",
    bioHtml: `能事奉，是莫大的恩典。<br /><br />
我懷著感激、感恩的心，去回應上帝的呼召。<br />
從2000年事奉至今，感謝恩主的愛與恩典，接納我的本相，感謝教會兄姊的支持與包容。我往自己裡面看，我看到軟弱、不足、破碎 —— 我也只是個罪人，我也不配…<br /><br />
但主說：不是你揀選了我，是我揀選了你。<br />
「上帝卻揀選了世上愚拙的，叫有智慧的羞愧；又揀選了世上軟弱的，叫那強壯的羞愧。」林前1 : 27<br />
  感恩，上帝會揀選我 —— 愚拙與軟弱。<br /><br />
在這由聖徒結合的教會中，縱然我有軟弱及不配，但因著從上帝而來的召命，我願順服主，盡力讓福音宣講得正當，聖禮施行得正當，好帶領人到耶穌面前，生命得更新、長大成熟，發揮恩賜，參與大使命，一同建立教會。<br />
這一切全賴主恩典！<br /><br />
每當我想起自己的不足時，我記得聽過這句話：<br />
<strong><em>God doesn't call the qualified, He qualifies the called.</em></strong><br />
<strong><em>上帝並非呼召那合資格的人，祂讓被呼召的人合資格</em></strong>。<br /><br />
我90年受洗加入禮賢會上水堂，以此為我第二個家，在此被牧養、栽培，得以成長。雖曾在加拿大留學，但仍以此為自己屬靈的家。從初加入教會，渴望認識上帝，到被祂的愛所激勵，讀神學裝備，好以生命服事主。讀神學時原沒想過會回到自己的母會服事，但有主的帶領，有牧者、同工及長執的配搭，在上水堂服事了超過十年，沒料到會成為教會的堂主任，遇上好多新挑戰，要去學習，但感恩有長執、同工及兄姊一起同心事奉，建立教會；2012年4月29日被按立為禮賢會的牧師，得教會公開肯定及授命，我只感到，一切全是主恩典！<br /><br />
我知道，牧師的召命是去牧養上帝的羊群，宣講聖道 —— 教導聖經與福音，施行聖禮 —— 洗禮與聖餐乃可見之聖道，成為上帝聖道的僕人。這是上帝所賦予的職份，去教導真理，讓人明白上帝在聖經上所啟示的聖潔、祂的心意及要求。誡命讓人得知自己的軟弱，但藉著上帝的道（聖道與聖禮），聖靈運行在人心賜下信心，相信耶穌基督帶來赦罪的福音，叫人順服上帝，使生命得更新改變，得真正的自由，能愛上帝，愛人，叫榮耀歸於上帝。<br /><br />
成為牧師，代表耶穌基督施行聖禮，如此恩典職份，我心充滿著感激！願去承擔這培育及建立的職份，願為上帝而顛狂，願為兄姊而謹守，只因基督的愛激勵我（林後5：14）。我相信，每個人也有上帝的召命vocation，在不同的身份與崗位上發揮所長，無論是在教會內或外，在家庭、社區、學校、工作場所、或在世界中，上帝都賜下恩賜與才幹，來服事主服事人，叫人得益。願我心被上帝的愛所充滿，成為祂合用的器皿，把人帶到主面前，經歷主愛。在教會內培育並協助兄姊發揮恩賜，服事基督，建立上帝的家，在社區鄰舍中分享主愛，引領人認識主。願人與上帝和好、與人和好，亦與上帝所創造的大自然和好！願所有被造之物一同讚頌、榮耀上帝！<br /><br />
「主耶和華賜我受教者的舌頭，使我知道怎樣用言語扶助疲乏的人，主每早晨提醒，提醒我的耳朵，使我能聽，像受教者一樣。」賽50：4`
  },
  {
    id: "suba",
    name: "李就強宣教師",
    title: "宣教師",
    nickname: "Suba",
    imageSrc: "/images/about/suba_photo.jpg",
    sectionId: "Section_Suba",
    bioHtml: `「敬畏耶和華是智慧的開端，認識至聖者便是聰明。」<br />（箴言九章10節）`
  },
  {
    id: "singchoi",
    name: "王醒材傳道",
    title: "傳道",
    nickname: "醒材",
    imageSrc: "/images/about/singchoi_photo.jpg",
    sectionId: "Section_Singchoi",
    bioHtml: `盼望在主的帶領下，與弟兄姊妹一同在真道上建立自己，彼此相愛，榮神益人。`
  },
  {
    id: "tszwa",
    name: "陳芷華姑娘",
    title: "姑娘",
    nickname: "芷華",
    imageSrc: "/images/about/tszwa_photo.jpg",
    sectionId: "Section_Tszwa",
    bioHtml: `服事主是服事人的契機，願在不同的崗位上與大家一同奔走天路歷程。`
  }
];