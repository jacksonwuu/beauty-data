import posterManifest from "./posterManifest.json";

export interface Movie {
  id: string;
  sourceId: string;
  title: string;
  countryCode: string;
  countryName: string;
  year: number;
  posterUrl: string;
  summary: string;
  genres: string[];
  originalGenres: string[];
  originalRegions: string[];
  rating: number;
  ratingRank: number | null;
  votes: number;
  runtime: string;
  releaseDate: string;
}

const REGION_TO_COUNTRY_CODE: Record<string, string> = {
  "美国": "US",
  "中国大陆": "CN",
  "中国": "CN",
  "中国香港": "CN",
  "香港": "CN",
  "中国台湾": "CN",
  "台湾": "CN",
  "日本": "JP",
  "法国": "FR",
  "英国": "GB",
  "意大利": "IT",
  "德国": "DE",
  "西德": "DE",
  "韩国": "KR",
  "加拿大": "CA",
  "加拿大 Canada": "CA",
  "印度": "IN",
  "印度 India": "IN",
  "西班牙": "ES",
  "巴西": "BR",
  "瑞典": "SE",
  "澳大利亚": "AU",
  "俄罗斯": "RU",
  "丹麦": "DK",
  "泰国": "TH",
  "比利时": "BE",
  "伊朗": "IR",
  "爱尔兰": "IE",
  "瑞士": "CH",
  "阿根廷": "AR",
  "墨西哥": "MX",
  "奥地利": "AT",
  "荷兰": "NL",
  "葡萄牙": "PT",
  "挪威": "NO",
  "波兰": "PL",
  "芬兰": "FI",
  "埃及": "EG",
  "南非": "ZA",
  "土耳其": "TR",
  "新西兰": "NZ",
  "希腊": "GR",
  "智利": "CL",
  "哥伦比亚": "CO",
  "古巴": "CU",
  "摩洛哥": "MA",
  "菲律宾": "PH",
  "马来西亚": "MY",
  "越南": "VN",
  "印度尼西亚": "ID",
  "尼日利亚": "NG",
  "肯尼亚": "KE",
  "埃塞俄比亚": "ET",
  "孟加拉国": "BD",
  "巴基斯坦": "PK",
  "沙特阿拉伯": "SA",
  "乌克兰": "UA"
};

const COUNTRY_NAMES: Record<string, string> = {
  "AR": "Argentina",
  "AT": "Austria",
  "AU": "Australia",
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BR": "Brazil",
  "CA": "Canada",
  "CH": "Switzerland",
  "CL": "Chile",
  "CN": "China",
  "CO": "Colombia",
  "CU": "Cuba",
  "DE": "Germany",
  "DK": "Denmark",
  "EG": "Egypt",
  "ES": "Spain",
  "ET": "Ethiopia",
  "FI": "Finland",
  "FR": "France",
  "GB": "United Kingdom",
  "GR": "Greece",
  "ID": "Indonesia",
  "IE": "Ireland",
  "IN": "India",
  "IR": "Iran",
  "IT": "Italy",
  "JP": "Japan",
  "KE": "Kenya",
  "KR": "South Korea",
  "MA": "Morocco",
  "MX": "Mexico",
  "MY": "Malaysia",
  "NG": "Nigeria",
  "NL": "Netherlands",
  "NO": "Norway",
  "NZ": "New Zealand",
  "PH": "Philippines",
  "PK": "Pakistan",
  "PL": "Poland",
  "PT": "Portugal",
  "RU": "Russia",
  "SA": "Saudi Arabia",
  "SE": "Sweden",
  "TH": "Thailand",
  "TR": "Turkey",
  "UA": "Ukraine",
  "US": "United States",
  "VN": "Vietnam",
  "ZA": "South Africa"
};

const GENRE_TRANSLATIONS: Record<string, string> = {
  "剧情": "Drama",
  "劇情 Drama": "Drama",
  "喜剧": "Comedy",
  "爱情": "Romance",
  "动作": "Action",
  "惊悚": "Thriller",
  "惊栗": "Thriller",
  "恐怖": "Horror",
  "犯罪": "Crime",
  "悬疑": "Mystery",
  "悬念": "Mystery",
  "动画": "Animation",
  "動畫 Animation": "Animation",
  "科幻": "Sci-Fi",
  "冒险": "Adventure",
  "奇幻": "Fantasy",
  "歌舞": "Musical",
  "家庭": "Family",
  "音乐": "Music",
  "战争": "War",
  "传记": "Biography",
  "历史": "History",
  "西部": "Western",
  "同性": "LGBTQ+",
  "古装": "Costume",
  "情色": "Erotic",
  "运动": "Sports",
  "儿童": "Children",
  "武侠": "Wuxia",
  "黑色电影": "Noir",
  "戏曲": "Opera",
  "灾难": "Disaster",
  "纪录片": "Documentary",
  "短片": "Short",
  "Adult": "Adult"
};

const rawMovies = [
  {
    "sourceId": "1291546",
    "title": "霸王别姬",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1488213971.jpg",
    "summary": "段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同，段小楼深知戏非人生，程蝶衣则是人戏不分。",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 9.6,
    "votes": 1167141,
    "runtime": "171 min",
    "releaseDate": "1993-01-01",
    "ratingRank": 1,
    "id": "movie-1291546"
  },
  {
    "sourceId": "1295124",
    "title": "辛德勒的名单",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg",
    "summary": "1939年，波兰在纳粹德国的统治下，党卫军对犹太人进行了隔离统治。德国商人奥斯卡·辛德勒（连姆·尼森 Liam Neeson 饰）来到德军统治下的克拉科夫，开设了一间搪瓷厂，生产军需用品。凭着出众的社交能力和大量的金钱，辛德勒和德军建立了良好的关系，他的工厂雇用犹太人工作，大发战争财。",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.5,
    "votes": 637119,
    "runtime": "195 min",
    "releaseDate": "1993-11-30",
    "ratingRank": 2,
    "id": "movie-1295124"
  },
  {
    "sourceId": "1293182",
    "title": "十二怒汉",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1957,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg",
    "summary": "一个在贫民窟长大的18岁少年因为涉嫌杀害自己的父亲被告上法庭，证人言之凿凿，各方面的证据都对他极为不利。十二个不同职业的人组成了这个案件的陪审团，他们要在休息室达成一致的意见，裁定少年是否有罪，如果罪名成立，少年将会被判处死刑。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 261934,
    "runtime": "96 min",
    "releaseDate": "1957-04-13",
    "ratingRank": 3,
    "id": "movie-1293182"
  },
  {
    "sourceId": "1291831",
    "title": "灿烂人生",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1161132422.jpg",
    "summary": "马里奥（阿莱西奥•博尼 Alessio Boni 饰）和尼古拉（卢伊吉洛•肖卡 Luigi Lo Cascio 饰）是亲密无间的两兄弟，但是酷爱诗歌的马里奥却在考试中因为与教授意见相左而不及格，相反尼古拉投其所好的表现赢得了医学教授的好评拿到了高分。他们几个朋友相约去毕 业旅行，但是马里奥却带来了另外一个不速之客——他从精神病院搭救出来受伤的女孩佐珍（杰丝敏•特丽卡 Jasmine Trinca 饰）。于是，兄弟俩决定陪她寻找亲人。在一片革命洪流之中，马里奥弃笔从戎，选择做警察，而尼古拉则漂泊异乡成为了精神科医生。佛罗伦萨的大水，让兄弟俩重逢，此时尼古拉已经和钢琴师朱莉安成为伉俪。而马里奥则对摄影师米雷拉一见钟情。他们的感情同样经受着社会动荡的考验……",
    "genres": [
      "Drama",
      "Romance",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "家庭"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 9.4,
    "votes": 34451,
    "runtime": "366 min",
    "releaseDate": "2003-06-22",
    "ratingRank": 4,
    "id": "movie-1291831"
  },
  {
    "sourceId": "1461403",
    "title": "茶馆",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1982,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2262122096.jpg",
    "summary": "世纪之交，古老的中国正迎来前所未有的巨大变革。老态龙钟的大清王朝摇摇欲坠，六君子的鲜血无法阻止历史车轮的滚动，老北京城的上空风云变幻，波谲云诡。王利发（于是之 饰），北京城内裕泰茶馆的年轻掌柜。他谨记父亲的教诲，体面周全地迎送四方宾客。小小的茶馆内，三教九流各色人等穿梭 于此：提笼架鸟哀叹时运的松二爷（黄宗洛 饰）；慨叹国之将亡的刚毅满人常四爷（郑榕 饰）；一心谋求实业救国的秦仲义（蓝天野 饰）；丧尽天良买卖人口的刘麻子（英若诚 饰）；打算娶老婆的庞太监（童超 饰）……你方唱罢我登场，小小茶馆之内演尽世间的沧桑与凄凉……",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.4,
    "votes": 33529,
    "runtime": "118 min",
    "releaseDate": "",
    "ratingRank": 5,
    "id": "movie-1461403"
  },
  {
    "sourceId": "3249999",
    "title": "林肯公园：革命之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2193776724.jpg",
    "summary": "01.One Step Closer",
    "genres": [
      "Musical"
    ],
    "originalGenres": [
      "歌舞"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 1563,
    "runtime": "86 min",
    "releaseDate": "2008-11-25",
    "ratingRank": 6,
    "id": "movie-3249999"
  },
  {
    "sourceId": "1293908",
    "title": "城市之光",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1931,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2170238828.jpg",
    "summary": "他是一个流浪汉（查理·卓别林 Charles Chaplin 饰），身无分文，遇上了双目失明的卖花女，却不忍袖手旁观。他想尽办法去凑够费用，供卖花女治病。一天，他搭救了一个富翁，富翁当晚和他称兄道弟，第二天却翻脸不认人。本来打算向他求助的主意行不通了。流浪汉去参加拳击比 赛，以图获得奖金，却输得一败涂地。谁知这时重遇富翁，二人不计前嫌，富翁答应出钱资助卖花女。在交给流浪汉1000元后，富翁遭到偷袭，身上剩下的钱被强盗抢走。流浪汉奋不顾身去追赶，却因为误会被警察押回警局坐牢。另一方面，流浪女凭借流浪汉的资助重获光明，开了一家体面的花店。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.3,
    "votes": 66339,
    "runtime": "87 min",
    "releaseDate": "1931-01-30",
    "ratingRank": 7,
    "id": "movie-1293908"
  },
  {
    "sourceId": "2352020",
    "title": "攻壳机动队SAC 2nd GIG：个别的十一人",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531981961.jpg",
    "summary": "间指向了2030年，自从爆发第四次世界大战以来，各国的政治力量发生了根本性的变化，由于战乱不断，激增的难民终于获准进入日本，以填补因经济不断发展造成的劳动力短缺。而就在此时，一个自称“个别的十一人”的恐怖组织展开了一系列极端袭击事件，难民营、外国领事馆、甚至是总理都遭到了恐怖袭击……",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.3,
    "votes": 3565,
    "runtime": "162 min",
    "releaseDate": "2006-01-27",
    "ratingRank": 8,
    "id": "movie-2352020"
  },
  {
    "sourceId": "1303913",
    "title": "南海十三郎",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2328424489.jpg",
    "summary": "开片是说书人因聚众滋事，被警察（黄霑 饰）带到了警局问话，借说书人之口讲述了粤剧金牌编剧——南海十三郎艺海浮沉的一生。作为粤剧名家江太史公的十三子，江誉镠（谢君豪 饰）自由顽皮，出入名流场所。一次偶然的舞会，他遇到了上海的千金小姐莉莉（吴绮莉 饰），然而双方有缘相逢，无份结亲。后来，他跟随她来到上海，竟落得穷困潦倒。",
    "genres": [
      "Drama",
      "Romance",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "传记"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 9.2,
    "votes": 19421,
    "runtime": "110 min",
    "releaseDate": "1997-05-15",
    "ratingRank": 9,
    "id": "movie-1303913"
  },
  {
    "sourceId": "1393471",
    "title": "欢乐树的朋友们：第二发球",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2559163201.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 4164,
    "runtime": "60 min",
    "releaseDate": "",
    "ratingRank": 10,
    "id": "movie-1393471"
  },
  {
    "sourceId": "1291583",
    "title": "天空之城",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1986,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1446261379.jpg",
    "summary": "古老帝国拉比达是一座漂浮在空中的巨大的机器岛，传说那里已经无人居住，蕴藏着巨大的财富。因此，无论军方还是海盗，都在找寻着这座传说中的飞行岛。",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 515096,
    "runtime": "125 min",
    "releaseDate": "",
    "ratingRank": 11,
    "id": "movie-1291583"
  },
  {
    "sourceId": "1293350",
    "title": "两杆大烟枪",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.jpg",
    "summary": "艾迪（尼克·莫伦）思维敏捷，是个玩牌高手。在三个好友的支持下，艾迪携巨资参加了黑社会的高额赌局，不想落入圈套，欠下50万的赌债。为了还清赌债，艾迪和朋友们绞尽脑汁，最终算计到一群毒贩身上，并为打劫购买了两杆老式烟枪。",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 374270,
    "runtime": "107 min",
    "releaseDate": "1998-08-28",
    "ratingRank": 12,
    "id": "movie-1293350"
  },
  {
    "sourceId": "1299361",
    "title": "爱·回家",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2107418134.jpg",
    "summary": "为了方便找工作，妈领着7岁的相宇（俞承浩饰）去乡下的外婆家，想把他暂时留在那里。外婆（金亦芬饰）年事已高，不能说话也不识字。而一直生活在城市里的孙子相宇，刚开始无法适应连游戏机、电池都没得卖的乡下生活。他开始蛮横地流露出不满，抱怨这个抱怨那。为了买电池，偷走外婆的银头簪拿去卖；外婆得知孙子想吃炸鸡，却只理解到鸡肉，炖了只鸡给孙子吃，却被生气的相宇踢翻了。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 9.1,
    "votes": 57635,
    "runtime": "80 min",
    "releaseDate": "2002-04-05",
    "ratingRank": 13,
    "id": "movie-1299361"
  },
  {
    "sourceId": "1769507",
    "title": "沉静如海",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531484208.jpg",
    "summary": "法国人André（迈克尔·加拉布鲁 Michel Galabru 饰）和她的孙女Jeanne（朱莉·德拉姆 Julie Delarme 饰）原本平静的生活因二战的到来和德军对法国的侵占被打破，更让他们无法接受的是，他们家里的一个房间竟被征用作为一个德国军官Werner（托马斯·儒阿特 Thomas Jouannet 饰）的起居室。他们对这个敌方的军官一直保持着一种冷漠，尤其是Jeanne，她从来不和军官说话，即使是在他向他们问好的时候。让人意想不到的是，这个年轻的军官在多日的相处后，竟和他们谈论起自己的生活、音乐和法国文化，透露出他纳粹军服下隐秘的内心世界。同时，Jeanne也在积极的参与法国地下反抗德军的组织活动。渐渐地，两个来自敌对双方的年轻男女间产生了一种奇异的情感。这种情感在他们离别的时候，化成了Jeanne口中的一句话，她和他说的第一句话，也是唯一的一句话......",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "战争"
    ],
    "originalRegions": [
      "法国",
      "比利时"
    ],
    "rating": 9.1,
    "votes": 38096,
    "runtime": "93 min",
    "releaseDate": "2004-10-25",
    "ratingRank": 14,
    "id": "movie-1769507"
  },
  {
    "sourceId": "4122194",
    "title": "银魂剧场版：新译红樱篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p612363092.jpg",
    "summary": "故事发生在日本的江户时代，一名神秘的男子出现在了武士桂小太郎（石田彰 配音）的面前，他手握妖刀“红樱”，要求试刀，这个夜晚之后，桂便下落不明。桂的宠物伊丽莎白（高松信司 配音）找到万事屋的神乐（钉宫理惠 配音）和新八（坂口大助 配音），委托他们寻找主人的下落。同时，银时（杉田智和）也受到委托，寻找四处作恶的红樱的下落。三人的线索汇聚到了一艘空中飞艇上，由于远离警察的管辖范围，飞艇里的恶势力一手遮天。在那里，银时遇见了曾经的战友现在的对手高杉晋助（子安武人 配音），高杉正带领着自己的鬼兵队企图毁灭江户。一面是穷凶极恶的恐怖分子，一边是暴虐嗜血的妖刀红樱，身受重伤的银时能够平安脱险拯救江户吗？",
    "genres": [
      "Comedy",
      "Action",
      "Animation",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "动画",
      "古装"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 24161,
    "runtime": "96 min",
    "releaseDate": "2010-04-24",
    "ratingRank": 15,
    "id": "movie-4122194"
  },
  {
    "sourceId": "1300334",
    "title": "熊的故事",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2454268056.jpg",
    "summary": "宁静的原始森林，熊妈妈正带着自己的孩子约克寻找蜂蜜。正当母子享受这顿美餐时，灾难不期而至。熊妈妈被一块巨石砸死，约克伤心备至，不得已踏上了独自生存的艰险之路。它路遇被猎人伤害的成年灰熊，灰熊一心报复伤害它的人类，对待约克分外冷淡。但随着一段时间的相处，它和约克慢慢成为了好朋友。它们一路遭到猎人的追踪，也遇到了各种各样的险情，在这个危机重重的原始丛林中寻找属于自己的一片天地……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "美国"
    ],
    "rating": 9.1,
    "votes": 20990,
    "runtime": "94 min",
    "releaseDate": "1988-10-19",
    "ratingRank": 16,
    "id": "movie-1300334"
  },
  {
    "sourceId": "1293847",
    "title": "生之欲",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1952,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2079076441.jpg",
    "summary": "市政府市民科科长渡边勘治（志村乔饰）是名近三十年全勤的模范公务员，然而他和同事们每天忙碌却人浮于事，不知道自己在忙些什么。一帮妇女联合到市政府申请填平社区附近的臭水池，在上面建造个小公园。市民科的接待人员告诉她们要把问题反映到土木课，公园课把她们推到建设科……，申请书转 了一圈后，又被踢回市民科。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 16805,
    "runtime": "143 min",
    "releaseDate": "1952-10-09",
    "ratingRank": 17,
    "id": "movie-1293847"
  },
  {
    "sourceId": "1418076",
    "title": "天堂回信",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1090024531.jpg",
    "summary": "1990年代，北京。晨晨（石晨 饰）的爸妈在国外工作，他平日与爷爷（李丁 饰）一起生活。爷爷干了一辈子邮政工作，退休后与孙儿相依为命。一天，祖孙俩把一封已故去的收信人的信件系在风筝上放飞天空，爷爷告诉晨晨：他在天堂会收到的。不久，妈妈（肖雄 饰）从国外回来了，她看不惯公公对晨晨的放任，每天给晨晨布置了英语、钢琴等课程，原有的平静不见了，爷爷搬回了自己的旧居。晨晨日夜思念爷爷，他恨透了什么英语钢琴，整天哭闹不休，妈妈见此若有所思。爷爷的生日到了，晨晨与好伙伴琳琳送来生日贺卡祝福，爷爷带他们外出放风筝，劳累一天后，在孩子们的欢笑声中，爷爷竟然永远“睡”去了......",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.1,
    "votes": 15737,
    "runtime": "88 min",
    "releaseDate": "1992-02-01",
    "ratingRank": 18,
    "id": "movie-1418076"
  },
  {
    "sourceId": "1301811",
    "title": "鳄鱼波鞋走天涯",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2188484411.jpg",
    "summary": "故事发生在一个宁静的小镇里，德斯特（约瑟夫·梅泽罗 Joseph Mazzello 饰）和艾瑞克（布拉德·兰弗洛 Brad Renfro 饰）是一对毗邻而居的同龄人。一场医疗事故打破了德斯特的平静生活，由于医疗设备的污染，德斯特在输血的过程中感染了可怕的艾滋病。尽管不幸从天而降，并非谁的过错，但德斯特一家还是遭到了居民们的孤立和排挤。",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.1,
    "votes": 10377,
    "runtime": "97 min",
    "releaseDate": "1995-04-21",
    "ratingRank": 19,
    "id": "movie-1301811"
  },
  {
    "sourceId": "1419479",
    "title": "女人步上楼梯时",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1960,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1676504317.jpg",
    "summary": "妈妈桑keiko（高峰秀子 饰）是银座Club的老板娘，年届三十，正值人生转折期，面对着再婚与事业的抉择犹豫不决。Keiko早年丧夫，婚姻一直没有起色，事业方面生意也日渐冷清，心境萧条的她只将生活重心放在照顾年轻一代的公关小姐junko、yukiko们身上。Club年轻的经理（仲达代矢 饰）暗恋keiko，但以事业为重的他不愿表白，则通过与yukiko的肉体关系来淡化心里对keiko的情愫。然而，难以控制的情感让他最终鼓起勇气表白，心境苍凉的keiko会接受吗？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 8905,
    "runtime": "111 min",
    "releaseDate": "1960-01-15",
    "ratingRank": 20,
    "id": "movie-1419479"
  },
  {
    "sourceId": "1422091",
    "title": "情迷意乱",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1964,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1449763371.jpg",
    "summary": "小镇里，一家超级市场的宣传车四处开动，正在播放着周年庆大减价的消息，森田屋的礼子（高峰秀子 饰）却很苦恼。这家家庭式百货商店是礼子婆家的店，结婚不久后，丈夫于战场战死，家里只剩下上了年纪的婆婆（三益爱子 饰）和年纪尚幼的小叔幸司（加山雄三 饰）。礼子一人扛下经营的重担，一晃十八年，而现在却遭到超级市场的大冲击。礼子的小姑们——久子（草笛光子 饰）和隆子（白川由美 饰）想要借森田屋这块地皮改造成超级市场，而改建计划里却没有礼子的位置。知晓实情后的礼子借再婚之名决定离开森田屋。",
    "genres": [
      "Drama",
      "Romance",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "家庭"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 6067,
    "runtime": "98 min",
    "releaseDate": "1964-01-15",
    "ratingRank": 21,
    "id": "movie-1422091"
  },
  {
    "sourceId": "4181031",
    "title": "欢乐树的朋友们",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533709702.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.1,
    "votes": 4756,
    "runtime": "74 min",
    "releaseDate": "2006-05-03",
    "ratingRank": 22,
    "id": "movie-4181031"
  },
  {
    "sourceId": "1292589",
    "title": "纽伦堡的审判",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1961,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p922207281.jpg",
    "summary": "讲述二战后在纽伦堡提审德国纳粹计划的法律关系者，三个被告提审的原因是给犹太人施行断种手术。担任主审判长的是美国人赫鲁特，他主张其中两个被告无罪；而德国司法部长亚林克竟对此事保持沉默，但检查官罗森上校却激烈的指责被告，因此三个人展开激烈的辩论。审讯继续进行下去。而美国的高级官员们希望能在审判中获提德国所犯罪行的良好证明，因此对审判施以极大的压力，但赫鲁特坚守法律的正义立场，给予了最公正的判决。在宣布判决结果时，只有亚林对赫鲁特审判长的态度表示赞赏。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.1,
    "votes": 4517,
    "runtime": "186 min",
    "releaseDate": "1961-12-14",
    "ratingRank": 23,
    "id": "movie-1292589"
  },
  {
    "sourceId": "1303927",
    "title": "数码宝贝大电影一：滚球兽的诞生",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525457080.jpg",
    "summary": "三年前，一颗数码蛋从数码世界掉进了现实世界，滚球兽出生了……这与三年后被选召的孩子们的故事有什么联系呢？本故事情节跌荡起伏，滚球兽进化为亚古兽，为了能打败强大的对手鹦鹉兽，它进化为暴龙兽，而另有六个孩子看到了战斗过程，他们就是……",
    "genres": [
      "Action",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 3614,
    "runtime": "20 min",
    "releaseDate": "1999-03-06",
    "ratingRank": 24,
    "id": "movie-1303927"
  },
  {
    "sourceId": "1466243",
    "title": "罗马11时",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1952,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2230837721.jpg",
    "summary": "意大利新现实主义的代表作，但因其反应现实的力度致使当时的意大利政府采取了全面封杀的态度，结果使这部片子的知名度大幅度降低，但本片无论从表现手法，还是演员表演，到对社会，人性的刻画揭露，无不表现出深厚的功力和艺术水准，其成就足以使它超越《偷自行车的人》成为新现实主义的巅峰之作",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 9.1,
    "votes": 2003,
    "runtime": "107 min",
    "releaseDate": "1952-02-27",
    "ratingRank": 25,
    "id": "movie-1466243"
  },
  {
    "sourceId": "3075092",
    "title": "欢乐树的朋友们：滑雪巡逻救生队",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3622650.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.1,
    "votes": 1509,
    "runtime": "74 min",
    "releaseDate": "2006-04-12",
    "ratingRank": 26,
    "id": "movie-3075092"
  },
  {
    "sourceId": "2129039",
    "title": "飞屋环游记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p485887754.jpg",
    "summary": "小男孩卡尔（Carl Fredricksen）怀揣着对于冒险的热爱偶遇假小子艾丽（Ellie），而艾丽把整个屋子当成一艘大飞船游戏居然使他对这个女孩子有些着迷，相同的爱好最终使两个人成为了一生的爱侣。",
    "genres": [
      "Drama",
      "Comedy",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 789525,
    "runtime": "96 min",
    "releaseDate": "2009-08-04",
    "ratingRank": 27,
    "id": "movie-2129039"
  },
  {
    "sourceId": "1293839",
    "title": "罗马假日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1953,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",
    "summary": "欧洲某国的安妮公主（奥黛丽·赫本 Audrey Hepburn 饰）到访罗马，国务烦身，但她又厌倦繁文缛节。一天晚上，身心俱疲的她偷偷来到民间欣赏夜景，巧遇报社记者乔（格里高利·派克 Gregory Peck 饰）。二人把手同游，相当快乐。公主更是到乔的家中作客并在那过夜。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 586672,
    "runtime": "118 min",
    "releaseDate": "1953-08-20",
    "ratingRank": 28,
    "id": "movie-1293839"
  },
  {
    "sourceId": "1301753",
    "title": "狮子王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p726659067.jpg",
    "summary": "辛巴是狮子王国的小王子，他的父亲穆法沙是一个威严的国王。然而叔叔刀疤却对穆法沙的王位觊觎已久。",
    "genres": [
      "Animation",
      "Musical",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "歌舞",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 450450,
    "runtime": "89 min",
    "releaseDate": "1995-07-15",
    "ratingRank": 29,
    "id": "movie-1301753"
  },
  {
    "sourceId": "1865703",
    "title": "红辣椒",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p672363704.jpg",
    "summary": "近未来，为了治疗现代人类越来越多、越来越严重的精神疾病，位于东京的精神医疗综合研究所开发出一种可以反映他人梦境的机器。通过微型DC的帮助，梦境在显示器上呈现出来，更方便找到一个人焦虑的症结。",
    "genres": [
      "Sci-Fi",
      "Animation",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "科幻",
      "动画",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 216028,
    "runtime": "90 min",
    "releaseDate": "2006-09-02",
    "ratingRank": 30,
    "id": "movie-1865703"
  },
  {
    "sourceId": "1307315",
    "title": "哪吒闹海",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1979,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516566783.jpg",
    "summary": "商末时期，陈塘关总兵李靖的夫人怀胎3年6个月，最终生下一个肉球，肉球中跳出一个伶俐可爱的男孩。李靖原当他是妖孽欲杀之而后快，幸太乙真人前来收之为徒，赐名哪吒，并赐以乾坤圈和混天绫两件宝贝。某年，天下大旱，甘露未降。哪吒和家将到东海洗澡玩耍。他用混天绫搅动海水，撼动龙宫，惹出巡海夜叉李艮和龙王三太子敖丙。几番言语不和，哪吒杀此二人，由此闯下通天大祸。四海龙王齐聚陈塘关索命，为救一方百姓，哪吒决定交出生命……",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.0,
    "votes": 133807,
    "runtime": "65 min",
    "releaseDate": "1979-05-19",
    "ratingRank": 31,
    "id": "movie-1307315"
  },
  {
    "sourceId": "1295646",
    "title": "大独裁者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1940,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1960167314.jpg",
    "summary": "影片讲述第一次世界大战，托曼尼亚王国独裁者辛格尔（查理·卓别林饰）上台。他的大肆扩张导致战乱不断民不聊生。并且他大搞阴谋政策，煽动民众对犹太人的敌对与仇恨，让犹太人民陷入水深火热的灾难之中。被征入伍的犹太人理发师查理（查理·卓别林饰）更是在这样的高压政策下难逃一劫。当查理逃出边境时，被驻守在这里的军队误认为是独裁者辛格尔，他趁机做了一场“为自由而战斗”的大演说。",
    "genres": [
      "Drama",
      "Comedy",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 40329,
    "runtime": "125 min",
    "releaseDate": "1940-10-15",
    "ratingRank": 32,
    "id": "movie-1295646"
  },
  {
    "sourceId": "1303067",
    "title": "影武者",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1980,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p997945263.jpg",
    "summary": "日本战国时代三雄之首的武田信玄（仲代达矢饰），号称“甲斐之虎”。他的信条是“疾如风，徐如林，侵略如火，不动如山”。当武田信玄包围德川军的野田城，即将直取京都完成霸业时，他被敌人的狙击冷枪打中，重伤濒死。临死前，他留下遗言要部下隐瞒自己死讯三年。先前弟弟武田信廉（山崎努饰）找到的替身（仲代达矢饰），原为窃贼的他面貌和信玄酷似，即日本人所说的“影子武士”，担当起了重任。",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "日本",
      "美国"
    ],
    "rating": 9.0,
    "votes": 34230,
    "runtime": "180 min",
    "releaseDate": "1980-04-26",
    "ratingRank": 33,
    "id": "movie-1303067"
  },
  {
    "sourceId": "1292969",
    "title": "光荣之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1957,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p955392372.jpg",
    "summary": "1916年，第一次世界大战期间的法国，德法两军的战争如火如荼。值此关键时刻，法国陆军将军布洛拉德（Adolphe Menjou 饰）向陆军上尉达克斯（柯克·道格拉斯 Kirk Douglas 饰）率领的部队下了一道命令：不惜一切代价攻下德军占领的安特山。军令如山，即使前方刀山火海，战士们仍拼死向前冲去。结局可想而知，在敌人密集的炮火下，法军冲锋失败，伤亡惨重。为了掩盖自己的指挥失误，布洛拉德抓捕三名无辜士兵作代罪羔羊，以临阵脱逃等罪名将他们判处死刑。为了士兵的利益，达克斯上尉奋力争取，却在这一过程中渐渐看清军官和战争的丑恶……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "美国",
      "西德"
    ],
    "rating": 9.0,
    "votes": 20867,
    "runtime": "88 min",
    "releaseDate": "1957-10-25",
    "ratingRank": 34,
    "id": "movie-1292969"
  },
  {
    "sourceId": "1293455",
    "title": "永恒和一日",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1391839595.jpg",
    "summary": "患有癌症晚期的诗人亚历山大（Bruno Ganz）在进医院等待死亡的前一天，想将一直陪伴其左右的狗交托自己的亲生女儿，遭到对方拒绝。女儿对自己处境的不了解，以及女婿打算将自己的祖屋卖掉，令亚历山大神伤不已黯然离开。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "希腊",
      "德国"
    ],
    "rating": 9.0,
    "votes": 17368,
    "runtime": "137 min",
    "releaseDate": "1998-05-23",
    "ratingRank": 35,
    "id": "movie-1293455"
  },
  {
    "sourceId": "1302210",
    "title": "神女",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1934,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2028929312.jpg",
    "summary": "上海1930年代，贫苦女人（阮玲玉）为养活儿子沦为暗娼，并不幸被一流氓看中霸占，她几次试图逃脱流氓的控制，均告失败，儿子到了入学的年龄，她不想因为没钱使儿子失去受教育的机会，便继续拿身体挣钱，为此，她要瞒着流氓从有限的收入里偷偷取出一些攒下。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.0,
    "votes": 14780,
    "runtime": "76 min",
    "releaseDate": "",
    "ratingRank": 36,
    "id": "movie-1302210"
  },
  {
    "sourceId": "1292778",
    "title": "将军号",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1926,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2248676081.jpg",
    "summary": "1861年，Johnnie Gray（巴斯特·基顿 Buster Keaton 饰）是西部大西洋火车公司的一名员工，深爱着他的火车“将军号”，还有他的未婚妻（Marion Mack 饰）。南北战争爆发了，他的未婚妻让他去从军，军方却拒绝了他，认为让他开火车更有价值。他的未婚妻很生气，发誓除非看见他穿军装的样子，不然再也不和他说话。北军正在计划一个阴谋，准备劫走“将军号”，给南军来一次突袭。Johnnie发现了北军的诡计，更意外的在北军的阵营里解救了他的未婚妻。他必须将北军要突袭的情报带回南军的阵地，他一路上驾驶着“将军号”，遭遇重重追击。南北军大战一触即发......",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "War",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "战争",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 12769,
    "runtime": "67 min",
    "releaseDate": "1926-12-31",
    "ratingRank": 37,
    "id": "movie-1292778"
  },
  {
    "sourceId": "1464526",
    "title": "横空出世",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p672536444.jpg",
    "summary": "1949年新中国建立以来，虽然人民当家做主人，但是新政权还随时面临被海外敌对势力所颠覆的严峻现状。惨烈的抗美援朝战争结束后，曾经立下赫赫战功的冯石将军（李雪健 饰）接到中央委派的重要使命，那就是主持原子弹的研发工作。虽然对原子弹一窍不通，但是军人出身的冯石只有服从上级的命令，带着一支经过烈火淬炼的英雄部队挺近荒凉的戈壁滩。在此之后，以美国留学归来的陆光达（李幼斌 饰）等科学界的精英人才从四面八方调到了西北荒漠。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.0,
    "votes": 8377,
    "runtime": "110 min",
    "releaseDate": "1999-12-12",
    "ratingRank": 38,
    "id": "movie-1464526"
  },
  {
    "sourceId": "1292981",
    "title": "婚姻生活",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1973,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2037298187.jpg",
    "summary": "律师玛丽安（丽芙•乌曼Liv Ullmann 饰）与精神学讲师约翰（厄兰•约瑟夫森Erland Josephson 饰）结婚十余载，育有两名女儿，生活幸福平稳。朋友皮特（金•玛思索Jan Malmsjö饰）与卡特里娜（毕比•安德森Bibi Andersson 饰）的婚姻生活却濒于解体。感慨万千的玛丽安发现自己怀孕，没曾想约翰竟倾向于打胎。有一天约翰突然向玛丽安提出自己爱上了一名叫宝拉的女子，二人痛苦分居。在协议离婚的过程中，二人的愤懑不满纷纷爆发，直到多年后，玛丽安与约翰才终于体会到爱情是什么。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "瑞典"
    ],
    "rating": 9.0,
    "votes": 7924,
    "runtime": "169 min",
    "releaseDate": "1973-04-11",
    "ratingRank": 39,
    "id": "movie-1292981"
  },
  {
    "sourceId": "1393470",
    "title": "欢乐树的朋友们：第一滴血",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s1806727.jpg",
    "summary": "They're cute, they're happy, they're cuddly, they love life, and they die in the most gruesome ways - every single episode. Meet Cuddles the rabbit, Flakey the dandruff-ridden porcupine, Sniffles the brainy anteater, Lumpy the moose, Toothy the beaver, Giggles the Chipmunk, Handy the handless carpenter beaver, Petunia the sweet-smelling skunk, Nutty the glass-eyed sweets-loving squirrel, Splendid the flying super-squirrel, Russell the pirate, the ever-dancing Disco Bear, Flippy the war veteran bear with constant flashbacks, Pop the pipe-smoking father bear and his cub Cub, Lifty the kleptomaic raccoon, Shifty, his partner in crime and of course the Mole - also blind as one. Together, they experience life at its worst in their cute little world. And they teach us all a lesson of what can go wrong, no matter how cute you are or how hard you try.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 9.0,
    "votes": 7064,
    "runtime": "110 min",
    "releaseDate": "2002-02-18",
    "ratingRank": 40,
    "id": "movie-1393470"
  },
  {
    "sourceId": "3091208",
    "title": "樱桃小丸子",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2380703550.jpg",
    "summary": "正在上小学三年级的樱桃小丸子（Tarako 配音），因班长丸尾末夫（飞田展男 配音）提出了抽签换座位的要求，抽到了她不喜欢的调皮同学大野健一（山口胜平 配音）跟彬山聪（真山亚子 配音）同桌。而且和最好的同学小玉（渡辺菜生子 配音）分了桌。大野和彬山是一对好朋友，他们虽然总是抄袭作业欺负同学，可他们参加劳动时非常能干，学校有活动配合的也很默契。学校要开运动会，小丸子和上六年级的姐姐樱杏子(水谷优子 配音)都要参加，在运动会开始时爸爸樱宏志（屋良有作 配音）妈妈小林堇（一龙斋贞友 配音）也来给她们加油，小丸子参加的借物竟赛时多亏大野和杉山的帮助取得了第二名。男生骑马打仗比赛，因大野没发挥好以至最后输了比赛，大野和彬山这对最要好的朋友因此友谊出现了裂痕。赌气不说话的两人，转眼来到了平安夜的合唱比赛。一场大野的危机即将降临，这是否是二人关系的转捩点呢？",
    "genres": [
      "Animation",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 5463,
    "runtime": "93 min",
    "releaseDate": "1990-12-15",
    "ratingRank": 41,
    "id": "movie-3091208"
  },
  {
    "sourceId": "4144683",
    "title": "神秘博士：火星之水",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151616662.jpg",
    "summary": "《火星鬼水》是《神秘博士》2009特别篇第二弹，于11月15日在BBC1播出。制作人Russell T Davies透露，这集会和接下来的2集关系密切，但并不是三部曲的第一部分。本集献给2009年10月过世的前\"神秘博士\"编剧兼制作人Barry letts。",
    "genres": [
      "Sci-Fi"
    ],
    "originalGenres": [
      "科幻"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.0,
    "votes": 5128,
    "runtime": "62 min",
    "releaseDate": "2009-11-15",
    "ratingRank": 42,
    "id": "movie-4144683"
  },
  {
    "sourceId": "1394410",
    "title": "南特的雅克·德米",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552495254.jpg",
    "summary": "法国1991年有”法国电影新浪潮祖母“之称的艾格尼丝.瓦达(《拾穗者与我》)执导的人物记录片，是对其丈夫、法国著名导演雅克德米(《秋水伊人》《柳眉花娇》)的一次生平记录。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 9.0,
    "votes": 2943,
    "runtime": "118 min",
    "releaseDate": "1991-05-15",
    "ratingRank": 43,
    "id": "movie-1394410"
  },
  {
    "sourceId": "1294132",
    "title": "阿德曼动画精选：超级无敌掌门狗",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s1480000.jpg",
    "summary": "本片为“超级无敌掌门狗”三个经典故事的合集。",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.0,
    "votes": 2606,
    "runtime": "75 min",
    "releaseDate": "1996-06-14",
    "ratingRank": 44,
    "id": "movie-1294132"
  },
  {
    "sourceId": "1957937",
    "title": "小不列颠：现场版",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s2752947.jpg",
    "summary": "Matt Lucas 和 David Walliams 极为成功的舞台喜剧演出。这部舞台喜剧二人转是两人风靡全英的巡回演出中所有耐人寻味的表演中最为著名的一部。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.0,
    "votes": 2564,
    "runtime": "79 min",
    "releaseDate": "2006-11-13",
    "ratingRank": 45,
    "id": "movie-1957937"
  },
  {
    "sourceId": "4824996",
    "title": "钢之炼金术师：师傅的故事",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190442216.jpg",
    "summary": "18岁的主妇当年一人在北部要塞混乱且彪悍的拜师生活经历，以及与其老公银他妈式的纯情邂逅。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 2320,
    "runtime": "13 min",
    "releaseDate": "2010-04-29",
    "ratingRank": 46,
    "id": "movie-4824996"
  },
  {
    "sourceId": "2085511",
    "title": "日本之形",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558662745.jpg",
    "summary": "《日本之形》是Japan Culture Lab于2006年推出的一部幽默日本传统的系列片。这部片子的特点是用一本正经的语气做坑爹解说，认真您就输了。本片曾参加2007柏林电影节。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 1536,
    "runtime": "60 min",
    "releaseDate": "2007-02-10",
    "ratingRank": 47,
    "id": "movie-2085511"
  },
  {
    "sourceId": "3130431",
    "title": "四签名",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511444258.jpg",
    "summary": "Miss Mary Morstan contacts Sherlock Holmes for his help regarding her father, captain Morstan, who disappeared 10 years ago. Since his disappearance she annually receives a valuable pearl by post from an unknown person. The mystery leads Holmes and doctor Watson into an intricate plot regarding a lost treasure belonging to four convicts on the Andaman Islands",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.0,
    "votes": 1011,
    "runtime": "103 min",
    "releaseDate": "1987-12-29",
    "ratingRank": 48,
    "id": "movie-3130431"
  },
  {
    "sourceId": "1292679",
    "title": "春光乍泄",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465939041.jpg",
    "summary": "黎耀辉（梁朝伟）与何宝荣（张国荣）是一对同性恋人，为了有新的开始，他们怀着美丽的梦想（去看南美洲大瀑布）离开香港来到阿根廷，却在布宜诺斯艾利斯迷了路。黎耀辉想安下心来过日子，无奈何宝荣于夜夜笙歌中放纵着自己的生命，以期找寻更多的刺激，只当黎耀辉是他受伤后的港湾，两人分歧 、争吵越来越多，心的距离越来越远。",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "中国香港",
      "日本",
      "韩国"
    ],
    "rating": 8.9,
    "votes": 374525,
    "runtime": "96 min",
    "releaseDate": "1997-05-30",
    "ratingRank": 49,
    "id": "movie-1292679"
  },
  {
    "sourceId": "3072124",
    "title": "玛丽和马克思",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1820615077.jpg",
    "summary": "1976年，8岁的玛丽·黛西·丁格尔（贝丝妮·惠特摩尔 Bethany Whitmore 配音）是澳大利亚墨尔本的一个小女孩，喜欢动画片“诺布利特”、甜炼乳和巧克力。玛丽的妈妈是个酒鬼，而在茶叶包装厂工作的父亲平日只喜欢制作鸟标本。孤独的玛丽没有朋友，某一天心血来潮给美国纽约市的马克思·杰瑞·霍罗威茨（菲利普·塞默·霍夫曼 Philip Seymour Hoffman 配音）写了一封信询问美国小孩从哪里来，并附上一根樱桃巧克力棒。44岁的马克思患有自闭症及肥胖，碰巧也喜欢看“诺布利特”动画片及吃巧克力。二人的笔友关系从1976年维持到1994年，期间各自经历了许多人生起伏，直到成年的玛丽（托妮·科莱特 Toni Collette 配音）终于来到纽约看望马克思……",
    "genres": [
      "Drama",
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.9,
    "votes": 293141,
    "runtime": "92 min",
    "releaseDate": "2009-01-15",
    "ratingRank": 50,
    "id": "movie-3072124"
  },
  {
    "sourceId": "1295873",
    "title": "偷自行车的人",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1948,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p759707912.jpg",
    "summary": "二战过后，罗马同许多城市一样，充斥失业和贫困，人们常常为一个工作机会争得头破血流。已失业多时的里奇（Lamberto Maggiorani）费劲千辛万苦获得一份海报张贴的工作后，却为这份工作需要一辆自行车犯愁，为了以后的日子好过，他用妻子的嫁妆--床单从换回已经当掉的自行车，不想，他的自行车在上班第一天就被盗。里奇同儿子布鲁诺（Enzo Staiola）寻遍罗马大街小巷，也没能找到他赖以活命的自行车，眼见无指望的日子又要降临，里奇决定以牙还牙，可是他的运气却没有别的小偷好。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.9,
    "votes": 54376,
    "runtime": "89 min",
    "releaseDate": "1948-11-24",
    "ratingRank": 51,
    "id": "movie-1295873"
  },
  {
    "sourceId": "1292515",
    "title": "用心棒",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1961,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163659004.jpg",
    "summary": "外表落魄邋遢的浪人武士三十郎（三船敏郎 饰）来到一个小镇，清兵卫（河津清三郎 饰）和新田丑寅（山茶花究 饰）两家恶霸在那里为争夺地盘，招兵买马经常争斗，弄得民不聊生。三十郎决定从中设计，引诱双方雇佣自己，再加入不同方造成两边拼斗，由此坐收渔利，消灭对方。 但随着丑寅弟弟卯之助（仲代达矢 饰）的加入，情况又发生了不同，他手里握有短枪，占得优势，清兵卫的势力被打败，三十郎甚至也受伤不轻。但是决战在所难免，椿三十郎独对丑寅、亥之吉等众人，身处劣势的他如何能剿灭对方呢？",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 20686,
    "runtime": "110 min",
    "releaseDate": "1961-04-25",
    "ratingRank": 52,
    "id": "movie-1292515"
  },
  {
    "sourceId": "1297268",
    "title": "秋日奏鸣曲",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1978,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2034707962.jpg",
    "summary": "夏洛特（英格丽·褒曼）是某乐团杰出的钢琴演奏员，她的女儿伊娃（丽芙·乌尔曼）是一名在农村社区工作的牧师的妻子，两人之间有一道深深的感情鸿沟，七年来不曾有过任何交流。在得知夏洛特的第二任丈夫去世后，伊娃写信邀请夏洛特来同住，两人都试着友好相处，却不免又将往事重提。伊娃怨恨夏洛特没在她童年时给予她足够的爱护，只把重心放在自己的事业上，疏远了自己和另一个有高度残疾、只能发不清晰的音来与人交流的女儿海琳（莱娜·尼曼）。而夏洛特因为海琳与伊娃住在一起，加上丈夫的去世给自己造成很大打击，也是心情闷闷紧锁眉头。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "瑞典",
      "法国",
      "西德",
      "英国"
    ],
    "rating": 8.9,
    "votes": 11484,
    "runtime": "99 min",
    "releaseDate": "1978-10-08",
    "ratingRank": 53,
    "id": "movie-1297268"
  },
  {
    "sourceId": "1310179",
    "title": "幻想曲",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1940,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1833100312.jpg",
    "summary": "1940年，迪士尼公司制作了第三部长片动画《幻想曲》，为动画史贡献了一部迄今仍难以企及的经典名作。本片由8部音乐短片组成，最早诞生的《魔法师的学徒》讲述了在魔法师严西（Yensid，迪士尼Disney倒写）手下学徒的米老鼠偷戴师傅的帽子，利用魔法指挥扫帚挑水并惹下大祸的 有趣故事。该片原打算收入“糊涂交响曲（Silly Symphonies）”系列，但因严重超支，入不敷出，故迪士尼决定另外结合几支经典名曲拍成一部音乐短片合集，一并发行。只是因过于艺术化以及二战等方面的原因，《幻想曲》并未取得预期的收益。除杜卡的《魔法师的学徒》外，本片收录曲目还有巴赫《D小调托卡塔与赋格》、柴科夫斯基《胡桃夹子》、斯特拉文斯基《春之祭》、贝多芬《田园交响曲》、蓬基耶利《时间舞曲》、穆索尔斯基《荒山之夜》和舒伯特的《万福玛丽亚》。",
    "genres": [
      "Animation",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.9,
    "votes": 11160,
    "runtime": "125 min",
    "releaseDate": "1940-11-13",
    "ratingRank": 54,
    "id": "movie-1310179"
  },
  {
    "sourceId": "1301777",
    "title": "幻想曲2000",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p643090411.jpg",
    "summary": "2000年，早已荣登动画殿堂的迪斯尼经典作品《幻想曲》以全新的面貌重现世人面前，主要曲目为：1）贝多芬：第五号交响曲（Symphony No.5）（命运）、2）雷斯庇基：罗马之松（Pines of Rome）、3）格什温：蓝色狂想曲（Rhapsody in Blue）、4）肖斯塔科维奇：第二号钢琴协奏曲——快版（Piano Concerto No. 2，Allegro，Opus 102）、5）圣桑：动物狂欢节（Carnival of the Animals）、6）杜卡：《魔法师的学徒》（The Sorcerer's Apprentice）、7）艾尔加：威风凛凛进行曲（Pomp & Circumstance）、8）斯特拉文斯基：火鸟组曲（Firebird Suite）。除《魔法师的学徒》直接取自旧版外，其他曲目均为全新收录。",
    "genres": [
      "Animation",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.9,
    "votes": 9249,
    "runtime": "74 min",
    "releaseDate": "1999-12-17",
    "ratingRank": 55,
    "id": "movie-1301777"
  },
  {
    "sourceId": "3117778",
    "title": "魔卡少女樱剧场版：被封印的卡片",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453989041.jpg",
    "summary": "自从艾力欧走后，友枝町又恢复了宁静。无法目睹到小樱（丹下樱 配音）收复卡片英姿的知世（岩男润子 配音）找来了DV，自己弄起了特摄剧。在看录像带的过程中，小樱看到了小狼（熊井素子 配音）的影像，不经红了脸。小狼回到香港已经四个月了，距离小狼告白也有四个月了。这期间小樱一直模拟着告白，希望下次再见到小狼时，当面告诉他。",
    "genres": [
      "Comedy",
      "Romance",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 8423,
    "runtime": "79 min",
    "releaseDate": "2000-07-15",
    "ratingRank": 56,
    "id": "movie-3117778"
  },
  {
    "sourceId": "1293989",
    "title": "十二怒汉",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2337734157.jpg",
    "summary": "根据1957年同名黑白电影改编而成的电影。名气不大，口碑也不如旧版。在1957年由悉尼．卢曼特执导的《十二怒汉》是探讨美国陪审员制度和法律正义的经典作，本片则是由威廉．弗里德金重新拍摄的电视版，由杰克．莱蒙取代亨利．方达演男主角，其他合演者包括金像奖影帝乔治．C．斯科 特。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.9,
    "votes": 7566,
    "runtime": "117 min",
    "releaseDate": "1997-08-17",
    "ratingRank": 57,
    "id": "movie-1293989"
  },
  {
    "sourceId": "1299227",
    "title": "魔法阿妈",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2464404648.jpg",
    "summary": "台北小孩豆豆（庄博文 配音）因为爸爸出车祸，妈妈要处理后世因此不得不先搬去台南和外表可怕的阿妈（文英 配音）同住。但是不久豆豆就惊奇地发现阿妈其实是拥有制服妖怪法力的驱魔师，鬼怪都很怕她。有一天，由于豆豆的贪玩，一个鬼怪（许杰辉 配音）被放了出来，鬼怪为了对付阿妈，利用豆豆做出了一些伤害阿妈的事情以增强自身的魔力。而在朝夕相处下，豆豆对阿妈的感情也起了变化，阿妈会不会被击败，就在最后关头了，豆豆能否成功帮助阿妈战胜魔鬼就看最后时刻了。",
    "genres": [
      "Comedy",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.9,
    "votes": 5447,
    "runtime": "80 min",
    "releaseDate": "1998-04-03",
    "ratingRank": 58,
    "id": "movie-1299227"
  },
  {
    "sourceId": "1427266",
    "title": "超时空要塞：可曾记得爱",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1984,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2287771379.jpg",
    "summary": "在1999年，一艘外星宇宙战舰坠落到了地球，人们用了了十年的时间修复并取名为\"MACROSS\"。2009年，MACROSS要塞正在举办一场偶像歌星林明美（饭岛真理 配音）的演唱会，突然空袭警报响起，要塞开始了变形。战斗中，一条辉（长谷有洋 配音）驾驶着变形战斗救下一名少女，战机却由于速度过快撞进外层舱室。安定后，辉发现救得是林明美。俩人相识后，为使明美高兴，辉偷开教练机带着明美去兜风。敌人趁机出现，好在朋友这时挺身相救，经过一场混战，辉和早濑未沙（土井美加 配音）醒过来，发现在一个荒芜的星球上。他们了解到，五十万年前，一个叫\"普罗多\"的古代文明发展到顶盛时，已经可以借遗传密码无性繁殖后代，于是国家分裂为由男性组成的\"杰特拉帝\"和由女性组成的\"赫而特兰帝\"开始了长达数万年的战争。在战争中文明急剧衰退了，曾经伟大的文化被遗忘殆尽，退化成了只会战斗的种族，为了维护和平，他们将会采取怎样的行动……",
    "genres": [
      "Romance",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "爱情",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 5354,
    "runtime": "114 min",
    "releaseDate": "1984-07-21",
    "ratingRank": 59,
    "id": "movie-1427266"
  },
  {
    "sourceId": "1300738",
    "title": "夺命剑",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1967,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2204699929.jpg",
    "summary": "德川幕府时代，会津藩马回队武士笹原伊三郎（三船敏郎 饰）剑术高超，为人则恪守职责，忍辱负重。某日，藩主松平政容（松村达雄 饰）将爱妾阿市（司叶子 饰）以大不敬的罪名赶出藩邸，并命其下嫁伊三郎的长子与五郎（加藤刚 饰）。迫于对藩主的忠诚，笹原家最终接受了这门婚事。婚后与五郎和阿市相亲相爱，婚姻美满。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 4712,
    "runtime": "128 min",
    "releaseDate": "1967-05-27",
    "ratingRank": 60,
    "id": "movie-1300738"
  },
  {
    "sourceId": "1306019",
    "title": "大地之歌",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1955,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2263825780.jpg",
    "summary": "在20世纪初印度孟加拉的一个小村庄里。生活的艰辛使得村里穷苦人家充满了苦闷、忧虑与不和。哈里哈尔写了一首首诗，一个个剧本，但到处碰壁，无法出版。六年过去了，哈里哈尔家的房子更加破败不堪，贫穷一步不舍地伴随着他们。无穷无尽的烦恼，纠缠着他们。富人丢了东西，就赖杜尔加偷走了，尽管妻子萨尔博加娅不愿忍受这种侮辱，却也只能拿孩子撒气。哈里哈尔希望通过一举成名来重振早已破落的“门第”，可是，他每月八个卢比的微薄收入，以及沉重的家庭负担，致使他始终无法实现其各种美好的计划，就连维持家里人填饱肚子也做不到。他只好去异地他乡寻找一条出路，进城去赚了一笔血汗钱，谁料回到家时，等待他的却是巨大的灾难：暴风雨把房子冲塌了，十二岁的女儿杜尔加也病死了，萨尔博加娅痛哭起来。见此凄惨情景，哈里哈尔只好带领着妻儿离开故乡，去另谋生路，只有杜尔加长眠在这里。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.9,
    "votes": 4537,
    "runtime": "122 min",
    "releaseDate": "1955-08-26",
    "ratingRank": 61,
    "id": "movie-1306019"
  },
  {
    "sourceId": "2310047",
    "title": "可玛猫",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1990883116.jpg",
    "summary": "主人公可玛猫在山间小屋的阁楼上、摆弄着她最喜欢的布偶、孜孜不倦地尝试着定格动画的创作。那些布偶原本是不会动的、但制作成影像之后、这些布偶可以自由走动、面部表情乃至尾巴的动作都很自然地表现出来、宛若有了生命一样。",
    "genres": [
      "Drama",
      "Animation",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 3069,
    "runtime": "59 min",
    "releaseDate": "2009-05-26",
    "ratingRank": 62,
    "id": "movie-2310047"
  },
  {
    "sourceId": "4928750",
    "title": "灌篮高手 剧场版4",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2221506369.jpg",
    "summary": "正值炎炎夏日，地处海滨的湘北也被全国大赛的热情所点燃。与海南的艰苦鏖战，让曾经不甚起眼的湘北高中篮球部一战成名。在众多现场观众中，流川枫在富丘中学的学弟水泽一郎也见证了这激动人心的一刻。自从流川毕业后，水泽已经成为富中的顶梁柱，他不断磨练自己的球技，期待早日考入湘北和前辈流川一同称霸全国。而就在此刻，水泽遭遇人生最大的打击。他被诊断患上关节结核，剧烈的疼痛让他面临放弃篮球的命运。为了让水泽毫无遗憾的离开球场，走上手术台，他的姐姐茜找到晴子，希望能安排弟弟和流川共同打一场练习赛以了心愿……",
    "genres": [
      "Drama",
      "Animation",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "运动"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 2752,
    "runtime": "40 min",
    "releaseDate": "1995-07-15",
    "ratingRank": 63,
    "id": "movie-4928750"
  },
  {
    "sourceId": "3136375",
    "title": "反叛的鲁路修特别篇：暗黑的背叛",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2200283334.jpg",
    "summary": "06年10月起在MBS、TBS系電視台放送的TVA動畫《叛逆的魯路修》，因其衝擊性的內容以及超高的人氣，而決定制作續篇。續篇將會制作成DVD版的動畫，發售日確定為08年2月22日，續篇名為《Code Geass 叛逆的魯路修特別篇暗黑的反叛》。特別篇的故事內容以TV全25話為主，以魯路修的視點重新領略TV版的內容，總時長為120分鐘。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 2316,
    "runtime": "117 min",
    "releaseDate": "2008-02-22",
    "ratingRank": 64,
    "id": "movie-3136375"
  },
  {
    "sourceId": "1303637",
    "title": "红柿子",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538697684.jpg",
    "summary": "从大陆撤到台湾的一批将士及其亲属中，有一个来自河南的大家庭。除了将军的跟班福顺和姥姥（陶述 饰）中意的那副齐白石的柿子图意外走散，家里人口总算齐全的到达了台湾。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.9,
    "votes": 2303,
    "runtime": "168 min",
    "releaseDate": "1997-04-13",
    "ratingRank": 65,
    "id": "movie-1303637"
  },
  {
    "sourceId": "3264731",
    "title": "棒球英豪 没有背号的王牌投手",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534284371.jpg",
    "summary": "在美好的季节里，上杉达也（三ツ矢雄二 配音）、和也（难波圭一 配音）和浅仓南（日高のり子 配音）这三个青梅竹马的好友顺利升入明青学园高中部。与另外两人相比，达也似乎心不在焉，他闲逛校园各个角落，迟迟未曾决定加入哪一个社团，而他对棒球部仿佛完全不做考虑。当他好不容易下定决心，却发现小南作为加入棒球部担当经理。充满万千情愫的达也，稀里糊涂被相貌凶恶的原田正平（银河万丈 配音）拉入全然没有任何概念的拳击部。落英缤纷的季节，少男少女百味心绪随风飘散……",
    "genres": [
      "Drama",
      "Romance",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 1752,
    "runtime": "94 min",
    "releaseDate": "1986-04-12",
    "ratingRank": 66,
    "id": "movie-3264731"
  },
  {
    "sourceId": "3230452",
    "title": "波希米亚丑闻",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511404366.jpg",
    "summary": "Sherlock Holmes is hired by the King of Bohemia to retrieve a compromising photograph from a certain lady. The King has tried to purchase the photo and even hired burglars to retrieve it, but without success. The woman in question is the very beautiful Irene Adler, an opera singer. She has made no demands of the King so it does not seem that blackmail is her intent. Using various disguises, Holmes learns as much about the woman as he can and is surprised when, after following her to a church, finds that she has married a barrister. Holmes stages a bit of theatre to get her to divulge the location of the photo but he finds he has met his match in both daring and intellect.",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.9,
    "votes": 1440,
    "runtime": "50 min",
    "releaseDate": "1984-04-24",
    "ratingRank": 67,
    "id": "movie-3230452"
  },
  {
    "sourceId": "3103037",
    "title": "棒球英豪 在你离开之后",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2518583068.jpg",
    "summary": "明青学园高中部迎来新的学年，上杉达也（三ツ矢雄二 配音）和浅仓南（日高のり子 配音）顺利升入高三。在这新的征程伊始，棒球部的各位却迎来不大不小的风波。西尾教练突然病倒，之前的女经理推部。小南自然不会放任不管，她强烈要求校长让她重新担任棒球部的经理。与此同时，西尾教练也拜托早年毕业于明青学园柏叶英二郎担任代理教练。英二郎严肃冷峻，言语尖刻，被队员们称作魔鬼教练。伴随每一天艰苦严苛的训练，大赛的日子终于临近。通往甲子园的路上，达也和新田明男（井上和彦 饰）宿命的决战即将到来……",
    "genres": [
      "Drama",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 1162,
    "runtime": "82 min",
    "releaseDate": "1987-04-11",
    "ratingRank": 68,
    "id": "movie-3103037"
  },
  {
    "sourceId": "3231168",
    "title": "孤身骑车人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1984,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511442307.jpg",
    "summary": "A strange man on a bicycle follows a young music teacher as she bicycles on a lonely road to and from the city.",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.9,
    "votes": 1092,
    "runtime": "50 min",
    "releaseDate": "1984-05-15",
    "ratingRank": 69,
    "id": "movie-3231168"
  },
  {
    "sourceId": "3231169",
    "title": "福尔摩斯：驼背人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1984,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s3278158.jpg",
    "summary": "陆军上校巴克利在一个风雨交加的夜晚神秘死去。案发现场房门紧锁，钥匙不翼而飞，房内的地板、房外的草坪上发现离奇爪印：5个很长的爪指、很长的爪尖，形状如同吃点心时用的题子…",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.9,
    "votes": 1035,
    "runtime": "50 min",
    "releaseDate": "1984-05-22",
    "ratingRank": 70,
    "id": "movie-3231169"
  },
  {
    "sourceId": "1293359",
    "title": "菊次郎的夏天",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p751835224.jpg",
    "summary": "暑假到来，自幼丧父的小学三年级学生正男（关口雄介饰），如今和奶奶生活在一起，暑假特别无聊。他拿出母亲从外地寄回的信，准备自己一个人去爱知县丰桥市看望母亲。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 290895,
    "runtime": "121 min",
    "releaseDate": "1999-05-20",
    "ratingRank": 71,
    "id": "movie-1293359"
  },
  {
    "sourceId": "1578507",
    "title": "谍影重重3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792223507.jpg",
    "summary": "失去了心爱的女人，波恩（马特•戴蒙 饰）面临更为艰难的日子，他努力回忆，却只能在睡梦中被脑海里一知半解的闪回所惊醒，依然无法记起自己的身份。",
    "genres": [
      "Action",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "动作",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.8,
    "votes": 258957,
    "runtime": "115 min",
    "releaseDate": "2007-11-15",
    "ratingRank": 72,
    "id": "movie-1578507"
  },
  {
    "sourceId": "4848115",
    "title": "你看起来好像很好吃",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554167519.jpg",
    "summary": "哈特（山口胜平 饰）是一只被草食性恐龙养大的霸王龙。其实，早在它破壳而出时，草食性恐龙的首领就曾命令哈特的母亲（原田知世 饰）抛弃它，但母亲却最终还是偷偷把它养大。随着年龄的增长，每天只吃野果的哈特每天饥饿难耐，最终还是抵不住本能的驱使，开始了自己食肉的残暴生涯。然而，由于母亲的影响，在哈特的内心深处，始终涌动着一颗善良的心灵。一天，偶尔遇到一只破壳而出的食草恐龙宝宝，哈特阴差阳错的被恐龙宝宝误认为是“爸爸”，而且为小恐龙取名为“很美味”，自此开始了又一段奇异的恐龙父子情。然而，伴随着生存环境的恶化，恐龙们的生存遭受着前所未有的破坏，哈特和它的亲人最终能否经得起考验……",
    "genres": [
      "Drama",
      "Animation",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 205359,
    "runtime": "90 min",
    "releaseDate": "2010-10-16",
    "ratingRank": 73,
    "id": "movie-4848115"
  },
  {
    "sourceId": "1291879",
    "title": "罗生门",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1950,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1864872647.jpg",
    "summary": "罗生门，日本京都的正南门。云游和尚、砍柴人和乞丐在城门底下避雨，三人闲聊，话题开始，故事的序幕拉开：一个武士和他妻子路过荒山，遭遇了不测。妻子被侮辱，而武士惨遭杀害。惨案如何酿成？凶手、妻子、借武士亡魂来做证的女巫，都各有说法。",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 178114,
    "runtime": "88 min",
    "releaseDate": "1950-08-26",
    "ratingRank": 74,
    "id": "movie-1291879"
  },
  {
    "sourceId": "1322848",
    "title": "奇爱博士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1964,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p835946292.jpg",
    "summary": "美国空军将领杰克•瑞（斯特林·海登 Sterling Hayden 饰）怀疑苏共的“腐朽思想”正在毒害“正直善良”的美国人民，他于是下令携带核弹头的飞行部队前往苏联，对敌人进行毁灭性的核打击。苏联方面得知此事，立即致电美国总统墨尔金•马夫雷（彼得·塞勒斯 Peter Sellers 饰），并威胁如若领土遭到攻击，苏联将不惜一切代价按下“世界末日装置”。该装置的威力足以摧毁地球上所有的生命。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 8.8,
    "votes": 51422,
    "runtime": "95 min",
    "releaseDate": "1964-01-29",
    "ratingRank": 75,
    "id": "movie-1322848"
  },
  {
    "sourceId": "1296196",
    "title": "乱",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2324366931.jpg",
    "summary": "一文字秀虎（仲代达矢饰）征战多年，手段残忍。在七十岁时，秀虎准备将家业一分为三，由三个儿子分掌大权。他把太郎孝虎（寺尾聪饰）、次郎正虎（根津甚八饰）、三郎直虎（隆大介饰）叫到跟前，以“支箭会断，砚支箭折不断”喻语告诫三兄弟，嘱咐他们要休戚与共。三郎当场把三支箭横在膝上折断，以抗议父亲枉经乱世，而不知人情。秀虎大怒，将三郎驱逐出境。三郎遂到邻国入赘为婿。",
    "genres": [
      "Drama",
      "Action",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "战争"
    ],
    "originalRegions": [
      "日本",
      "法国"
    ],
    "rating": 8.8,
    "votes": 47692,
    "runtime": "162 min",
    "releaseDate": "1985-06-01",
    "ratingRank": 76,
    "id": "movie-1296196"
  },
  {
    "sourceId": "1293456",
    "title": "莫里斯",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455549510.jpg",
    "summary": "1908年的剑桥，他们相遇，心中隐约情动。那时的克里夫（休•格兰特 Hugh Grant 饰）和莫里斯（詹姆斯•威尔比James Wilby 饰）还是青葱年岁，克里夫终于突破同性禁忌向莫里斯吐露爱意，莫里斯欣然接受，甚至爱得比克里夫还要真诚炽热。在克里夫选择了仕途而放弃这段感情时，莫里斯仍然坚守。他在等待克里夫回来，却只等到了他和一个贵族女子的婚姻。",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.8,
    "votes": 44270,
    "runtime": "140 min",
    "releaseDate": "1987-09-18",
    "ratingRank": 77,
    "id": "movie-1293456"
  },
  {
    "sourceId": "1300894",
    "title": "城南旧事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1983,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178268394.jpg",
    "summary": "本片根据林海音的同名短篇小说改编。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.8,
    "votes": 42522,
    "runtime": "88 min",
    "releaseDate": "",
    "ratingRank": 78,
    "id": "movie-1300894"
  },
  {
    "sourceId": "4832288",
    "title": "奇迹",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1172845476.jpg",
    "summary": "一段破败的婚姻，让两个尚未成年的好兄弟天各一边。哥哥航一（前田航基 饰）随母亲大迫希美（大塚寧々 饰）回到位于鹿儿岛的外婆家，弟弟龙之介（前田旺志郎 饰）则和追寻音乐梦想的“废柴”父亲木南健次（小田切让 饰）在福冈居住。兄弟俩有了各自的朋友圈，父母也似乎渐渐安定下来。可 是，他们无论如何还是希望重新聚在一起。鹿儿岛开往福冈的新干线“燕”和福冈开往鹿儿岛的“樱”号途中会有一次短暂的交汇，传说这时许下心中愿望的话，奇迹就会降临。晴朗的一天，两兄弟各自带着朋友朝着心中的奇迹之地出发……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 40483,
    "runtime": "128 min",
    "releaseDate": "2011-06-11",
    "ratingRank": 79,
    "id": "movie-4832288"
  },
  {
    "sourceId": "1292347",
    "title": "黑客帝国动画版",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1185327352.jpg",
    "summary": "《黑客帝国动画版》由9段以《黑客帝国》系列电影世界观为基础生发出的短片组成，各篇的角度与风格各异，制作班底汇聚了日本、美国、韩国三地的动画精英。《机器复兴》讲述了MATRIX的历史。机器人不堪人类恶劣对待，终于反抗并将人类化为能源。《少年故事》讲述一名少年突然收到来自网络的召唤，而大批黑衣人开始对他展开围捕。《虚拟程序》展示了一对男女在虚拟训练程序中的片断。《世界纪录》描写一位短跑运动员在接近突破人类极限时终被系统牢牢控制。《超越极限》叙述因为系统错误，平静的街区中出现了一片超常区域。《侦探故事》描写一位侦探被步步引领着试图摆脱系统的桎梏。《矩阵化》讲述一只机器人被人类捕获并驯化的故事。《终极战役》记录了一艘飞船毁灭的经过。",
    "genres": [
      "Drama",
      "Action",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 36784,
    "runtime": "102 min",
    "releaseDate": "2003-06-03",
    "ratingRank": 80,
    "id": "movie-1292347"
  },
  {
    "sourceId": "3335464",
    "title": "交响情人梦 最终乐章 后篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p612362291.jpg",
    "summary": "为了更专注自己的音乐事业，千秋真一（玉木宏 饰）向野田惠（上野树里 饰）提出分居的请求，浪漫之都巴黎，这对情侣两地相隔。当然野田并不会感到特别无聊，奥山真澄（小出惠介 饰）和峰龙太郎（瑛太 饰）的造访为她带来诸多的乐趣。原来每三年一度针对小提琴和钢琴的坎托纳国际竞演会召开在即，峰特意来给分别多年的恋人三木清良（水川あさみ 饰）加油打气。观看演出时，当拉威尔的G大调钢琴协奏曲响起时，野田深受触动，遂决定报名参赛，却被教授拒绝。与此同时，当听说复归后的孙蕊（山田优 饰）邀请千秋共演时心情更是跌落谷底。为了帮她重整旗鼓，千秋带领野田展开连番特训……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 32114,
    "runtime": "123 min",
    "releaseDate": "2010-04-17",
    "ratingRank": 81,
    "id": "movie-3335464"
  },
  {
    "sourceId": "1294753",
    "title": "追梦赤子心",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p452578349.jpg",
    "summary": "《Rudy》是改编自丹尼尔· 鲁迪的真人真事。",
    "genres": [
      "Drama",
      "Biography",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "运动"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 31501,
    "runtime": "114 min",
    "releaseDate": "1993-10-13",
    "ratingRank": 82,
    "id": "movie-1294753"
  },
  {
    "sourceId": "1292574",
    "title": "热情如火",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1959,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p860250155.jpg",
    "summary": "1930年代，动荡的芝加哥时常被强盗集团骚扰。乔（托尼•柯蒂斯）和杰利（杰克•莱蒙）本是乐团成员，两人因偶然目睹盗匪史巴克的手下在车库内射杀告密者而被穷追不舍。走投无路之下，他们男扮女装加入一女性乐团，并随该团来到迈阿密。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 31403,
    "runtime": "120 min",
    "releaseDate": "1959-03-29",
    "ratingRank": 83,
    "id": "movie-1292574"
  },
  {
    "sourceId": "1305261",
    "title": "恐怖分子",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1986,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2347245849.jpg",
    "summary": "老顾（顾宝明 饰）率领警察捣毁一个贼窝，唯一跳窗逃走的女孩淑安腿骨折断，被路过的男孩小强送去医院。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.8,
    "votes": 25241,
    "runtime": "109 min",
    "releaseDate": "1986-12-19",
    "ratingRank": 84,
    "id": "movie-1305261"
  },
  {
    "sourceId": "3796613",
    "title": "与玛格丽特的午后",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p855075428.jpg",
    "summary": "肥胖、粗俗而不失善良的50多岁男人基曼（杰拉尔·德帕迪约 Gérard Depardieu 饰）住在母亲花园旁的房车里，平时打理菜园，和朋友们泡小酒吧，时而和年轻女友安妮特（索菲·吉耶曼 Gisèle Casadesus 饰）在小窝里浪漫温存，过着平静的生活。然而，他的内心却有着不为人知的脆弱和苦楚，母亲在不想要他的情况下怀上了他，从来不知道父亲是谁；老师因为他的愚笨嘲弄；哥们儿喜欢他却又常常嘲笑他。女友想要个孩子，他却因自卑一直不肯答应，导致两人关系紧张。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.8,
    "votes": 23372,
    "runtime": "82 min",
    "releaseDate": "2010-06-02",
    "ratingRank": 85,
    "id": "movie-3796613"
  },
  {
    "sourceId": "1292230",
    "title": "刺杀肯尼迪",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p967284986.jpg",
    "summary": "肯尼迪的遇刺成为了一桩美国历史上的悬案，电影重新审视了那一段历史，到底杀手是一个普通人，还是整个庞大的政治阴谋，真相和幻象，都在调查中渐渐露出端倪。",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "惊悚",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.8,
    "votes": 22128,
    "runtime": "189 min",
    "releaseDate": "1991-12-20",
    "ratingRank": 86,
    "id": "movie-1292230"
  },
  {
    "sourceId": "1304476",
    "title": "独立时代",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2416432789.jpg",
    "summary": "Birdy（王也明）、Molly（倪淑君）、琪琪（陈湘琪）、小明（王维明）四个大学同学毕业后做着不同的工作，表面光鲜程度虽有异，都有身份转变（由学生到社会人）时期的尴尬。而这其中最难做人的，是夹在好友Molly与男友小明之间的琪琪，她只能暗自努力，以期好友、男友的事业与生活能有所改观，三人的关系能有所改善，却得到双方的误会。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.8,
    "votes": 20374,
    "runtime": "125 min",
    "releaseDate": "1994-09-12",
    "ratingRank": 87,
    "id": "movie-1304476"
  },
  {
    "sourceId": "1293237",
    "title": "变脸",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p753434191.jpg",
    "summary": "江湖艺人变脸王（朱旭 饰）孑然一身，以船为家，因恪守传男不传女、传内不传外之祖规，一手绝活面临失传。在活观音梁素兰（赵志刚 饰）惜才提点下，变脸王终生传承衣钵之愿。他用五枚大洋买下机灵的狗娃（周任莹 饰）。初时祖孙相处融洽，一场出街意外却令狗娃女儿身暴露。恼怒的变脸王意欲赶走狗娃，拗不过其苦苦相求，遂改自称“老板”，两人依旧搭伙卖艺。朝夕相处间，变脸王虽欣慰于狗娃孝顺懂事，碍于其女娃身份并不传授变脸绝活。按捺不住好奇的狗娃夜半偷看脸谱，失手引发船火，两人栖身之所烧毁殆尽。狗娃自感无颜，悄然离去，但心中始终感念变脸王的恩情。却不知，这份恩情有一日需要她以命相报，变脸绝活也终因此得以流传……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 8.8,
    "votes": 20316,
    "runtime": "101 min",
    "releaseDate": "",
    "ratingRank": 88,
    "id": "movie-1293237"
  },
  {
    "sourceId": "1298468",
    "title": "邮差",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2537507687.jpg",
    "summary": "马里奥（马西莫•特罗西 Massimo Troisi 饰）是一个渔民的儿子，他并不喜欢大海，却当上了邮递员，专门负责小岛上信件的发送。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "传记"
    ],
    "originalRegions": [
      "意大利",
      "法国",
      "比利时"
    ],
    "rating": 8.8,
    "votes": 13189,
    "runtime": "108 min",
    "releaseDate": "1994-09-01",
    "ratingRank": 89,
    "id": "movie-1298468"
  },
  {
    "sourceId": "1298672",
    "title": "阿玛柯德",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1973,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p771183436.jpg",
    "summary": "◎1975奧斯卡最佳外語片",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8.8,
    "votes": 7420,
    "runtime": "123 min",
    "releaseDate": "1973-12-13",
    "ratingRank": 90,
    "id": "movie-1298672"
  },
  {
    "sourceId": "1420080",
    "title": "悲惨世界",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1958,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2164568451.jpg",
    "summary": "十九世纪的巴黎，贫困的冉•阿让（Jean Gabin）因为偷一块面包被判处十九年的苦役。出狱后，走投无路的他被好心的主教（René Fleur）收留过夜，可是他却偷走了主教的银器。警察将他抓获，准备再次将他投入监狱，临危之际，主教的谎言将他拯救，他也得到感化，化名开始了洗心革面的生活。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "东德",
      "意大利"
    ],
    "rating": 8.8,
    "votes": 6288,
    "runtime": "210 min",
    "releaseDate": "1958-03-12",
    "ratingRank": 91,
    "id": "movie-1420080"
  },
  {
    "sourceId": "1297503",
    "title": "月球漫步",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1129454817.jpg",
    "summary": "迈克尔·杰克逊自资拍摄电影'Moonwalker'(外星战将),但是并没有得到预期的佳评。在这部电影中，迈克尔·杰克逊将自己塑造成一个漫画主角般，一身短小的西装，一顶压得很低的礼服帽，片中表演了惊人的顷斜45度的舞蹈。这些都成为了迈克尔·杰克逊个人神话中不可替代的标志。此片全场劲歌热舞，令人热血沸腾！ 洛杉矶市长Tom Bradley宣布11月为'Michael Jackson Month'(麦可杰克森月)。",
    "genres": [
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 4813,
    "runtime": "93 min",
    "releaseDate": "1988-12-16",
    "ratingRank": 92,
    "id": "movie-1297503"
  },
  {
    "sourceId": "1477317",
    "title": "悲伤的贝拉多娜",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1973,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p619682399.jpg",
    "summary": "美丽的贝拉多娜于新婚之际被领主夺去贞洁，丈夫在她憔悴归来之后却无安慰，贝拉多娜哀怨的身体召唤出恶魔，给予她慰藉。不久战争爆发，镇中壮丁随领主出征，贝拉多娜在丈夫一蹶不振之后凭神秘的能力维持城堡的供应，招来领主夫人妒恨，终被收监。身形愈发庞大的黑色恶魔到来，带走贝拉多娜，用瘟疫吞噬了茫茫大地，贝拉多娜用自己的特异能力解救人民，领主却再一次加害于她……",
    "genres": [
      "Drama",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 4217,
    "runtime": "87 min",
    "releaseDate": "1973-06-30",
    "ratingRank": 93,
    "id": "movie-1477317"
  },
  {
    "sourceId": "1306464",
    "title": "蝴蝶的舌头",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p562145754.jpg",
    "summary": "1936年的西班牙夏天，8岁的莫曹第一天上课便拉尿，弄得全班哄堂大笑，唯有老师安慰解难，小莫曹才可释怀。友情亦从这天开始。二人走到效外扑蝶捕虫，在日光下讲文学说自然，不亦乐乎。日光再强也挡不住政治的阴霾——西班牙内战，老师的政见政绩，顷刻成为众矢之的……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.8,
    "votes": 3858,
    "runtime": "92 min",
    "releaseDate": "1999-09-24",
    "ratingRank": 94,
    "id": "movie-1306464"
  },
  {
    "sourceId": "3993189",
    "title": "轻音少女番外篇：Live House!",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512771708.jpg",
    "summary": "在一个寒冷的冬日，轻音部五人组聚在部里讨论。原来她们刚刚得到一个Live House的消息，一场盛大的音乐派对即将在本年的最后一天举行。一想到这是一次难得的练兵机会，平泽唯（丰崎爱生 配音）便按捺不住心中的激动，鼓动大家报名参加。然而秋山澪（日笠阳子 配音）和中野梓（竹达彩奈 配音）却打了退堂鼓，紧张非常。经过举手表决，小唯、田井中律（佐藤聪美 配音）和琴吹紬（寿美菜子 配音）均赞同出场。一向在年末年初旅行的琴吹表示，希望最后一天和好朋友相守度过，最终大家的意见得到统一，携手前去报名。值得纪念的首场Live，即将拉开序幕……",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 3770,
    "runtime": "24 min",
    "releaseDate": "2010-01-20",
    "ratingRank": 95,
    "id": "movie-3993189"
  },
  {
    "sourceId": "1438746",
    "title": "相约星期二",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2135946487.jpg",
    "summary": "米奇·艾尔邦（汉克·阿扎利亚 Hank Azaria饰），一位疲于奔命的体育解说员和新闻记者。他每日都陷入无止境的工作中拼命赚钱，却弄得身心疲惫。米奇不但忽略了他的女友，更忘记了当年初出校门时的热情和理想。直到某天，米奇在电视中无意间看到自己大学时代的教授莫瑞·施瓦兹（杰克·莱蒙 Jack Lemmon饰）的电视采访。莫瑞教授在访谈中说出自己罹患了“肌肉萎缩性侧索硬化症”，每天都挣扎在死亡的边缘，痛苦不堪。为了见上一面不久于人世的老师，米奇开始了每周二下午的最后十四堂课。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 3630,
    "runtime": "89 min",
    "releaseDate": "1999-12-05",
    "ratingRank": 96,
    "id": "movie-1438746"
  },
  {
    "sourceId": "2240587",
    "title": "天鹅湖",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1981,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456771675.jpg",
    "summary": "中世纪欧洲，英俊潇洒的齐格菲尔德王子到了适婚年龄，爱子心切的王后为他举行盛大的舞会，并邀请邻国的公主参加。受童年的一段记忆所影响，齐格菲尔德一心寻找一位宛如白色天鹅般圣洁、美丽、脱俗、优雅的女子当作伴侣，然而眼前的公主们却无一不流露着庸俗的气质。舞会前夜，他邂逅了白天鹅 变化而来的美丽女子奥杰塔，并得知她的悲惨身世。原来邪恶的猫头鹰罗德巴尔为了霸占美丽的公主奥杰塔，而将其变化成天鹅，只有对公主拥有真爱的人才可将她解救出来。深深陷入爱恋的齐格菲尔德邀请奥杰塔参加第二天的舞会，决定用爱情战胜罗德巴尔的魔法。但是，邪恶的夜之幽灵如何肯放过这个纯洁美丽的女子……",
    "genres": [
      "Romance",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 3220,
    "runtime": "75 min",
    "releaseDate": "",
    "ratingRank": 97,
    "id": "movie-2240587"
  },
  {
    "sourceId": "1302789",
    "title": "鹳鸟踟蹰",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555194553.jpg",
    "summary": "故事发生在希腊边境，有人说它是一部关于世纪末的绝望的电影。它关注的是在东欧共产主义没落和苏联解体后，当代的边境、难民和变迁的问题。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "希腊",
      "瑞士"
    ],
    "rating": 8.8,
    "votes": 3156,
    "runtime": "143 min",
    "releaseDate": "1991-09-13",
    "ratingRank": 98,
    "id": "movie-1302789"
  },
  {
    "sourceId": "1306266",
    "title": "木屐树",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1978,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2381203798.jpg",
    "summary": "本片描写了十九世纪末期，意大利北部贫穷困苦的农村中好几户农家生活的点滴，由很多个小故事组成。其中的一段叙述一位佃农的儿子去学校读书，对当时这个地方的人而言，读书是件很不容易的事情，家长不懂得受教育的意义与好处，不愿意送孩子去读书，神父多次劝告下家长方才这样做的。这些家庭还需要在生活上加倍省吃俭用来供这些孩子们读书。一个佃农的孩子在读书回来时，鞋子坏了，父亲就砍了一颗树，连夜制成了一双木鞋。地主知道了这事之后，就把这户佃农赶了出去。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.8,
    "votes": 2303,
    "runtime": "186 min",
    "releaseDate": "1978-09-21",
    "ratingRank": 99,
    "id": "movie-1306266"
  },
  {
    "sourceId": "1469105",
    "title": "阿尔卡特兹的养鸟人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1962,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2177272586.jpg",
    "summary": "监狱电影中的代表作，改编自真人真事。桀骜不驯的青年劳勃斯．特劳德被判终身监禁，某日有一只生病的小鸟飞进他的牢房，在他细心呵护下竟然将小鸟医好了。他从此在狱中发奋研究，成为国际知名的鸟类学家。期间他要对抗过分保护他的母亲和粗暴的监狱长，也依旧不改其志，最后透过作家汤姆．加迪斯将他的传奇故事流传于世。导演约翰．弗兰肯海默以严谨手法诠释这个基本上相当静态的故事，虽然没有一般逃狱电影的紧张刺激动作，但气氛依旧紧凑动人。兰卡斯特充分掌握住主人翁的气质和感情，扮演狱友的特利．萨瓦莱斯亦十分抢戏。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 1830,
    "runtime": "147 min",
    "releaseDate": "1962-07-03",
    "ratingRank": 100,
    "id": "movie-1469105"
  },
  {
    "sourceId": "4817020",
    "title": "小羊肖恩：美好时光",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2271636103.jpg",
    "summary": "在英国一个远离城镇的农场，自我感觉良好的农夫独自居住在这里，不过正因为有了那些极具个性的小动物，才让他的生活充满惊险和乐趣。忠实的牧羊犬比兹尽心打理农场的一切，懒惰狡猾的小猫嘲弄其它动物，三只傲慢粗鲁且邋遢的猪随时在惹麻烦，而那群看似温顺的黑脸羊更是制造麻烦的高手。聪明睿智并且鬼点子多多的小羊肖恩见证了一次次乐事的发生。",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.8,
    "votes": 1659,
    "runtime": "45 min",
    "releaseDate": "",
    "ratingRank": 101,
    "id": "movie-4817020"
  },
  {
    "sourceId": "1458035",
    "title": "贤治之春",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1996,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503210039.jpg",
    "summary": "監督・脚本：河森正治",
    "genres": [
      "Drama",
      "Animation",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "传记"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 1646,
    "runtime": "57 min",
    "releaseDate": "1996-12-14",
    "ratingRank": 102,
    "id": "movie-1458035"
  },
  {
    "sourceId": "2977973",
    "title": "迷失：过去，现在与未来",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501801327.jpg",
    "summary": "迷失第四季的特别EP,回顾了前三季的内容.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 1489,
    "runtime": "60 min",
    "releaseDate": "2008-01-31",
    "ratingRank": 103,
    "id": "movie-2977973"
  },
  {
    "sourceId": "1305863",
    "title": "抛开自我空间",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503536751.jpg",
    "summary": "薇薇安（艾玛·汤普森 Emma Thompson 饰）是一位学识渊博的博士，让年轻的她没有想到的是，上帝竟然给对生活和学术充满了热情的自己开了一个天大的玩笑，经过医生的确证，她患上了卵巢癌，病情已经发展到了末期，几乎没有治愈的可能。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 8.8,
    "votes": 1253,
    "runtime": "99 min",
    "releaseDate": "2001-02-09",
    "ratingRank": 104,
    "id": "movie-1305863"
  },
  {
    "sourceId": "3231166",
    "title": "福尔摩斯：海军协定",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442114.jpg",
    "summary": "An unknown thief steals an important naval treaty from the office of Mr. Percy Phelps, a Foreign Office clerk. Phelps's distress gives him a brain fever that lasts for nine weeks. As he begins to recover, he writes to his old schoolmate, Dr. Watson, begging him to invite Sherlock Holmes to investigate the matter and find the treaty. Otherwise, his honor and happiness are gone forever. Holmes takes up the case with zest, but gives Phelps no false hopes. The mystery is as dark and tangled as any he has known.",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.8,
    "votes": 1016,
    "runtime": "50 min",
    "releaseDate": "1984-05-08",
    "ratingRank": 105,
    "id": "movie-3231166"
  },
  {
    "sourceId": "1298070",
    "title": "加勒比海盗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1596085504.jpg",
    "summary": "故事发生在17世纪，传说中海盗最为活跃的加勒比海。风趣迷人的杰克·斯伯洛（约翰尼·德普 Johnny Depp 饰），是活跃在加勒比海上的海盗，拥有属于自己的“黑珍珠”号海盗船。对他来说，最惬意的生活就是驾驶着“黑珍珠”号在加勒比海上游荡，自由自在的打劫过往船只。但不幸的是，他的仇敌，老谋深算的巴尔巴罗萨船长(杰弗里·拉什 Geoffrey Rush 饰)偷走了他的“黑珍珠”号。巴伯萨是一个无恶不作的坏蛋，他抢劫了杰克的\"黑珍珠号\"后，更加猖狂，在加勒比海上横行霸道，一时成为整个加勒比海的霸主。",
    "genres": [
      "Action",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 528555,
    "runtime": "143 min",
    "releaseDate": "2003-11-21",
    "ratingRank": 106,
    "id": "movie-1298070"
  },
  {
    "sourceId": "1417598",
    "title": "电锯惊魂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163771304.jpg",
    "summary": "一觉醒来的亚当（雷•沃纳尔 Leigh Whannell饰）发现自己被困在一个废弃的厕所里。他的对面是同样命运的劳伦斯（加利•艾尔维斯 Cary Elwes 饰）——他们被人用铁链绑住了腿，并吃惊发现二人中间横亘着一个恐怖的死人。死人鲜血淋漓，左手拿录放机右手拿枪。",
    "genres": [
      "Mystery",
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 293617,
    "runtime": "103 min",
    "releaseDate": "2004-01-19",
    "ratingRank": 107,
    "id": "movie-1417598"
  },
  {
    "sourceId": "1293318",
    "title": "萤火虫之墓",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1157334208.jpg",
    "summary": "美日战争爆发，14岁的清太带着年幼的妹妹到处逃命，当他们到达防空洞的时候，母亲已身受重伤，没过多久便不久人世。两兄妹自此过着相依为命的日子。他们只好投靠了母亲的姐妹，纵使他们把家里所有的家当都送给了阿姨，但当食物吃完，他们就越感到了寄人篱下的感觉，清太决定带着妹妹离开独自生活。火灾硝烟中的生活并不好过，清太为了妹妹四处偷取食物，但妹妹还是严重营养不良……",
    "genres": [
      "Drama",
      "Animation",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "战争"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 276174,
    "runtime": "89 min",
    "releaseDate": "1988-04-16",
    "ratingRank": 108,
    "id": "movie-1293318"
  },
  {
    "sourceId": "1793929",
    "title": "达拉斯买家俱乐部",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2166160837.jpg",
    "summary": "1986年美国达拉斯市，恐同的德州电工罗恩·伍德鲁夫（马修·麦康纳 Matthew McConaughey 饰）发现自己患上“同志病”——艾滋，生命只剩30天。他使用的AZT（叠氮胸苷）是当时美国药管局唯一批准面市的抗艾药物，但毒性极大。为了活下去，罗恩开始研究各种抗艾 处方和替代疗法，甚至走私来自世界各地未经批准的药物。在医生萨克斯（詹妮弗·加纳 Jennifer Garner 饰）和异装癖同性恋雷蒙（杰瑞德·莱托 Jared Leto 饰）的帮助下，罗恩开始成立了一个叫做“达拉斯买家俱乐部”的地下组织，为艾滋病人提供更多“非常规疗法”，很多患病的男同性恋亦求助于他。他的举动自然受到了药管局和药商的阻挠和施压。罗恩最终在1992年9月去世，离他被告知只剩30天可活已经过去了2557天。在这近7年时间里，他坚持不懈的与病魔、与药管局及制药商进行艰苦的斗争，享受真正活过的人生......",
    "genres": [
      "Drama",
      "LGBTQ+",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "同性",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 268994,
    "runtime": "117 min",
    "releaseDate": "2013-09-07",
    "ratingRank": 109,
    "id": "movie-1793929"
  },
  {
    "sourceId": "1292226",
    "title": "2001太空漫游",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1968,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500694952.jpg",
    "summary": "这部影片是库布里克花了四年时间制作的充满哲学命题的鸿篇巨制。一块大黑石树立在史前人类的面前，他们刚刚开始认识工具，进入到进化的里程碑。同样的黑石还在宇宙多处出现，它们矗立在月球上，漂浮在太空中，带着某种神秘的寓意。",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.7,
    "votes": 152585,
    "runtime": "149 min",
    "releaseDate": "1968-04-02",
    "ratingRank": 110,
    "id": "movie-1292226"
  },
  {
    "sourceId": "1300741",
    "title": "枪火",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1538646661.jpg",
    "summary": "黑社会老大文哥（高雄 饰）被人追杀，其弟阿南（任达华 饰）安排五个人来做其兄的保镖，并命令他们查出暗杀文哥的幕后人物。这五人分别是阿鬼（黄秋生 饰）、阿来（吴镇宇 饰）、阿Mike（张耀扬 饰）、阿信（吕颂贤 饰）和阿肥（林雪 饰）。阿来和阿信是知名的高手，阿鬼、阿Mike、阿肥则是金盆洗手的昔日英雄：阿鬼是文哥以前的手下，阿Mike是神枪手，阿肥是枪械专家。五人同心协力，将杀手擒获，并查清了幕后主使人。五个不认识的江湖人成为肝胆相照的好友，这时，阿南告诉阿鬼，阿信与文哥之妻通奸，要求阿鬼去杀死阿信，阿来坚决不允许这么做。阿Mike和阿肥又分别支持阿来和阿鬼，最后他们约定在一家小餐厅解决这个问题，互相对准的枪口真是一触即发……",
    "genres": [
      "Drama",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.7,
    "votes": 136577,
    "runtime": "84 min",
    "releaseDate": "1999-11-19",
    "ratingRank": 111,
    "id": "movie-1300741"
  },
  {
    "sourceId": "1477448",
    "title": "南极大冒险",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p687048224.jpg",
    "summary": "动物与人之间互救互助，不舍不弃的感人故事，冰天雪地的南极迎来了三个科考队员，他们要前来搜寻一块陨石，随行的还有八条雪橇狗。南极风景优美，三人惊叹不已，然而危险却也随着美景到来。几天之后，一场暴风雪让他们尝到了苦头，其中一名队员掉进了薄冰下的冰水里面，危在旦夕，幸得雪橇狗奋身相救，队员才脱险——这似乎只是一个小小的序曲，更严峻的考验还在后头。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 62001,
    "runtime": "120 min",
    "releaseDate": "2006-04-21",
    "ratingRank": 112,
    "id": "movie-1477448"
  },
  {
    "sourceId": "1921583",
    "title": "魔术师",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p791086335.jpg",
    "summary": "20世纪50年代末期，曾经风靡一时的剧场风云变幻，人们迷恋电视、迷恋摇滚，对于曾经伴随他们长大的各种杂耍则不再关注。他是一个经验丰富的魔术师，舞台上得体从容，现实中却不得不为了可怜的生活费而流转于各个表演场所，上至华贵的音乐厅，下至破落偏僻的小酒馆，不变的是他对魔术的执着。在苏格兰某个乡间逗留时，魔术师结识了一个小女孩，她感叹于那些神奇的魔法，于是偷偷离开故乡，转而追随魔术师的脚步。他们辗转来至爱丁堡，生活变得愈加艰辛，而为了满足女孩对魔法的信任和对繁华世界的向往，魔术师不得不想各种办法去赚钱……",
    "genres": [
      "Drama",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动画"
    ],
    "originalRegions": [
      "法国",
      "英国"
    ],
    "rating": 8.7,
    "votes": 57735,
    "runtime": "80 min",
    "releaseDate": "2010-06-16",
    "ratingRank": 113,
    "id": "movie-1921583"
  },
  {
    "sourceId": "4304402",
    "title": "精英部队2：大敌当前",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p858211193.jpg",
    "summary": "4年前，臭名昭著的拉西欧监狱发生了一场暴动，这一事件引起里约热内卢州社会的广泛争论，也不同程度改变了许多人的命运。直接领导精英部队（BOPE）的罗伯特·纳西贝托中校（Wagner Moura 饰）由此荣升为安全局的副秘书长，拥有更大的施展空间；而他的爱将安德鲁·马蒂亚斯（André Ramiro 饰）被政客当作替罪羔羊，踢出了BOPE部队。当然，纳西贝托也遭受着来自政坛、战友和家人各方面的压力，他将一腔愤懑转化到工作中，不仅扩编强化了BOPE的实力，还通过一次次铁腕的打击荡涤了贫民区毒贩的罪恶势力。",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 8.7,
    "votes": 56188,
    "runtime": "115 min",
    "releaseDate": "2011-11-25",
    "ratingRank": 114,
    "id": "movie-4304402"
  },
  {
    "sourceId": "3732800",
    "title": "我们天上见",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p459518618.jpg",
    "summary": "上世纪70年代末，时代的狂潮正渐渐退去热度。在南方某个古朴的小镇，小女孩蒋晓兰（朱一诺 饰）和姥爷（朱旭 饰）相依为命。晓兰的父母早年下放边疆，在学校她又因与“最大的阶级敌人”同姓而倍受欺负和排挤。破旧的小院是晓兰最为自由的天地，而家里的大衣柜则是她最后的避难之所。早年因战乱和疾病，姥爷几乎失去所有的亲人，因此这个调皮又善良的外孙女成了他生活的全部。时光缓缓流逝，细雨绵绵的小镇永远带着化不开的愁绪，渴望成为体操冠军的晓兰（姚君 饰）一天天长大，而那个永远牵挂着她的姥爷却慢慢地老去……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.7,
    "votes": 52493,
    "runtime": "85 min",
    "releaseDate": "2010-04-02",
    "ratingRank": 115,
    "id": "movie-3732800"
  },
  {
    "sourceId": "1421278",
    "title": "面子",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2047680289.jpg",
    "summary": "年轻医生Wil（杨雅慧 饰）是个美国华裔。她事业如意，工作干炼，但就是不爱打扮，不喜欢结交男朋友，这令到母亲（陈冲 饰）非常操心。母亲刻意拉女儿到一些华人圈子的聚会，帮女儿物色对象，却总是一无所获。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 35417,
    "runtime": "91 min",
    "releaseDate": "2004-09-12",
    "ratingRank": 116,
    "id": "movie-1421278"
  },
  {
    "sourceId": "1292349",
    "title": "阿拉伯的劳伦斯",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1962,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1697190295.jpg",
    "summary": "1916年，阿拉伯大起义爆发。 英军中尉 Lawrence（Peter O'Toole 饰）受命登上阿拉伯半岛之后，决定带领阿拉伯人夺取亚喀巴。在穿越沙漠的过程中， Lawrence 力排众议孤身返回搭救了失踪的 Gasim（I.S. Johar 饰）。此举赢得了众人的尊敬，Ali ibn el Kharish（Omar Sharif 饰）沙里夫甚至让 Lawrence 换上了沙里夫的长袍，而 Lawrence 也欣然接受。可是阿拉伯部落间并不和睦，Harith 部的 Gasim 杀了 Howeitat 部的人，双方剑拔弩张。为了平息争端，Lawrence 亲手处决了 Gasim，而杀人的快感却让 Lawrence 感到不安。成功夺取亚喀巴之后，Lawrence 驼不停蹄地穿越西奈半岛回到开罗。Allenby（Jack Hawkins 饰）将军大喜过望，升 Lawrence 为少校，对其寄予厚望……",
    "genres": [
      "Drama",
      "Biography",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "冒险"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.7,
    "votes": 30392,
    "runtime": "216 min",
    "releaseDate": "1962-12-10",
    "ratingRank": 117,
    "id": "movie-1292349"
  },
  {
    "sourceId": "1293753",
    "title": "十月的天空",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452602741.jpg",
    "summary": "本片根据真实故事改编。",
    "genres": [
      "Drama",
      "Family",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 21292,
    "runtime": "108 min",
    "releaseDate": "1999-02-19",
    "ratingRank": 118,
    "id": "movie-1293753"
  },
  {
    "sourceId": "1307306",
    "title": "黄昏的清兵卫",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1529771932.jpg",
    "summary": "幕府末年的海阪藩，下级武士清兵卫（真田广之）在妻子病逝后，以微薄薪俸独自照料痴呆老母和两个年幼女儿，由于每日结束工作后都是匆匆回家从不参加应酬，他被同僚们戏称为“黄昏的清兵卫”。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 20242,
    "runtime": "129 min",
    "releaseDate": "2002-11-02",
    "ratingRank": 119,
    "id": "movie-1307306"
  },
  {
    "sourceId": "1292994",
    "title": "开罗紫玫瑰",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2218755965.jpg",
    "summary": "三十年代美国经济大萧条，市面上一片荒芜。家庭主妇Cecilia（米亚·法罗 Mia Farrow 饰）白天应对沉闷的服务生工作（由于经济崩溃 ，很快也失去这份工作），晚上面对毫无情趣的丈夫。身为狂热影迷的她日日走进影院观看一部叫《开罗紫罗兰》的电影，熟习到连台词表情都能记住，电影里没有经济萧条，电影里是上流社会的宴席与取乐。这日奇怪的事发生了，戏里面的男主角Tom（杰夫·丹尼尔斯 Jeff Daniels 饰）从荧幕上走了下来！直接走到Cecilia面前，和她私奔。而电影里的人物也跟着议论纷纷，剧情不按剧情走，而变成了讨论会。",
    "genres": [
      "Comedy",
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 17903,
    "runtime": "82 min",
    "releaseDate": "1985-03-01",
    "ratingRank": 120,
    "id": "movie-1292994"
  },
  {
    "sourceId": "2354900",
    "title": "空之境界 第二章 杀人考察（前）",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2192136839.jpg",
    "summary": "1995年9月，16岁的两仪式与黑桐干也相遇了。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 17346,
    "runtime": "60 min",
    "releaseDate": "2007-12-29",
    "ratingRank": 121,
    "id": "movie-2354900"
  },
  {
    "sourceId": "1980825",
    "title": "永远的三丁目的夕阳2",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1011704039.jpg",
    "summary": "20世纪50年代末，日本申奥成功，从东京到全国各地都沉浸在一片自豪与喜悦之中。而我们所熟悉的东京夕阳町三丁目，平淡却不乏温情的百姓故事仍在继续着。铃木车行迎来了亲戚家的孩子，美丽女孩美加（彩梦 饰）。这位养尊处优的大小姐自然无法适应夕阳町的庶民生活，令则文（堤真一 饰）、六子（堀北真希 饰）颇为挠头。另一边厢，茶川龙之介（吉冈秀隆 饰）与淳之介（须贺健太 饰）相守，但始终思念离开的广美（小雪 饰）。淳之介生父的到来让茶川甚感郁闷，为了证明自己拥有抚养淳之介的能力，他重整旗鼓，决定向再次芥川奖发起冲击。夕阳町的平常人们如同一家人，相互争吵、牵绊、鼓舞、扶持，迎来了最为辉煌的时代……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 14347,
    "runtime": "146 min",
    "releaseDate": "2007-11-03",
    "ratingRank": 122,
    "id": "movie-1980825"
  },
  {
    "sourceId": "1294438",
    "title": "假面",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1966,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507966309.jpg",
    "summary": "舞台剧女演员伊丽莎白（丽芙·乌曼 Liv Ullmann 饰）在一次演出中忘了台词，之后长达数月她拒绝说话，被送进精神病医院。照顾她的护士阿尔玛（毕比·安德森 Bibi Andersson 饰）被医生责怪没有尽职，医院安排她带伊丽莎白在一所海滨别墅疗养治病。两人到达别墅后，伊丽莎白有所好转，但还是拒绝说话和给予回应。阿尔玛经常对她说话试图打破沉默，但仍旧得不到任何回应，最后不得不倾诉起她与未婚夫之间的情感问题。阿尔玛偷看了伊丽莎白写给医生的信，发现她在信里谈论自己，于是愤怒地叱责伊丽莎白。面对彻底沉默的伊丽莎白，阿尔玛在狂怒中几乎将她杀死。受惊的伊丽莎白惊恐地呼喊出“不！”，这让阿尔玛以为自己治好了她的病。可是伊丽莎白再次拒绝发出声音，她让阿尔玛成为自己的替身，与自己的丈夫做爱，照顾自己的孩子。阿尔玛在与伊丽莎白的过程中渐渐失去了自我的身份，悄然变成伊丽莎白的另一半。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "瑞典"
    ],
    "rating": 8.7,
    "votes": 13992,
    "runtime": "85 min",
    "releaseDate": "1966-10-18",
    "ratingRank": 123,
    "id": "movie-1294438"
  },
  {
    "sourceId": "1293310",
    "title": "椿三十郎",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1962,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2346574759.jpg",
    "summary": "郊外神社的神殿里，九位年轻武士在秘密开会，城代家老的外甥井坂（加山雄三饰）准备向大目付菊井求助整治内部问题。但外貌邋遢的武士椿三十郎（三船敏郎饰）出现，告诉他们菊井才是背后的黑手。果然，神殿很快被大目付手下团团围住，三十郎出手替年轻人解危，而室户半兵卫（仲代达矢饰）却欣赏三十郎的身手，欢迎他加入。之后，三十郎与九人组去找城代家老，却发现晚了一步已被绑架。",
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 11984,
    "runtime": "96 min",
    "releaseDate": "1962-01-01",
    "ratingRank": 124,
    "id": "movie-1293310"
  },
  {
    "sourceId": "1305791",
    "title": "王子与公主",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1320850506.jpg",
    "summary": "夜幕低垂，万籁俱静，六段穿梭时空的故事，古老而华丽的剧场，带领我们走进妙不可言的梦境里。",
    "genres": [
      "Comedy",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.7,
    "votes": 11964,
    "runtime": "70 min",
    "releaseDate": "2000-01-26",
    "ratingRank": 125,
    "id": "movie-1305791"
  },
  {
    "sourceId": "1293271",
    "title": "甜蜜的生活",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1960,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2204676857.jpg",
    "summary": "八卦记者Marcello原本的志向是要成为一名作家，却因为新闻工作关系，常穿梭在政商名流之间，过着堕落且糜烂的生活。一日，他和一位美丽女子共渡春宵后，回家发现女友为他吞药自杀身亡，Marcello的悲伤没有太久，因为他又赶着到机场迎接影星Sylvia到来，而接下来的几天，他们必需要作贴身采访…",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8.7,
    "votes": 11701,
    "runtime": "174 min",
    "releaseDate": "1960-02-03",
    "ratingRank": 126,
    "id": "movie-1293271"
  },
  {
    "sourceId": "1301867",
    "title": "烈日灼人",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p799102683.jpg",
    "summary": "影片的时代背景落在30年代斯大林统治下的前苏联。科托夫（尼基塔·米哈尔科夫 Nikita Mikhalkov 饰）是红军的光辉领袖，拥有殷实家底和幸福家庭，正在与妻子玛露莎（英格波佳·达库内提 Ingeborga Dapkunaite 饰）、女儿一起在别墅中度过幸福时光。不料，一名不速之客闯进了这里。当他揭开层层乔装的外物时，人们认出了他——一个失踪了十年的没落贵族米迪亚（欧列格·米契柯夫 Oleg Menshikov 饰）。米迪亚的到来犹如地狱派来的使者，随着他娓娓道来的故事，米迪亚和科托夫之间的恩怨纠结、和玛露莎之间的陈年旧情以及随着时代而扭曲的人生，都在故事中一一展开。而更为残酷的是，他带来了一个令科托夫一家陷入绝境的消息……",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "俄罗斯",
      "法国"
    ],
    "rating": 8.7,
    "votes": 11066,
    "runtime": "151 min",
    "releaseDate": "1994-05-21",
    "ratingRank": 127,
    "id": "movie-1301867"
  },
  {
    "sourceId": "1291989",
    "title": "原始星球",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1973,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910923416.jpg",
    "summary": "茫茫宇宙中一颗无名星球上，生活着体形悬殊的两种生物。占主导地位的是戴格斯人，他们身形巨大，拥有极高的文明和智慧，可以使精神摆脱肉体自在游弋；与之相对的是奥姆斯人，他们具有地球人的外表和身形，社会形态原始落后，在戴格斯人面前有如蝼蚁，于是当仁不让成为这些巨人的奴隶和玩物。奥姆斯人具有顽强的生命力和繁殖能力，他们的数量与日俱增，造成了统治者的困扰。于是，一场针对奥姆斯人的剿灭战随即展开。这本是一场微不足道的如同剿灭害虫的行动，但一个不起眼的奥姆斯人改变了双方的格局。泰尔是被一个戴格斯女孩豢养的奥姆斯男性宠物，他通过主人的教学机器学到了戴格斯人先进的科学文化知识。偶然机会，泰尔逃离戴格斯家庭，成为了领导奥姆斯人对抗统治者的领袖……",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "法国",
      "捷克斯洛伐克"
    ],
    "rating": 8.7,
    "votes": 10458,
    "runtime": "72 min",
    "releaseDate": "",
    "ratingRank": 128,
    "id": "movie-1291989"
  },
  {
    "sourceId": "1295116",
    "title": "西线无战事",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1930,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209784767.jpg",
    "summary": "第一次世界大战期间，德国政府以漂亮的口号呼吁年轻热情的学生志愿者投身战场保家卫国。一腔热血的德国青年保罗·鲍曼（卢·艾尔斯 Lew Ayres饰）怀着英雄理想投身到一战之中。然而当保罗和他的同学们经过训练后，被派往西线参战时，他们目睹到的却是残酷的饥饿、血腥和死亡。战争的荒谬无情让保罗从迷恋战争到心灰意冷，因伤返乡。可是愚昧的乡民根本不知前线的危急，保罗义愤填膺地向学生陈述战争的无情，西线无战事。他提前结束休假返回前线，在战壕中伸手捕捉一支蝴蝶时，不幸被流弹击中。",
    "genres": [
      "Drama",
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 10053,
    "runtime": "145 min",
    "releaseDate": "1930-08-24",
    "ratingRank": 129,
    "id": "movie-1295116"
  },
  {
    "sourceId": "2286133",
    "title": "冬之蝉",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503152349.jpg",
    "summary": "在幕末的动乱时期，在这个危机的时代，开国论者草加十马（三木真一郎 配音）和德川幕府的幕臣秋月景一郎（森川智之 配音）相遇了。二人一相遇便互生好感。草加更是对秋月的理念赞赏有加，而秋月则欣赏草加的开明和前瞻性。在草加去伦敦学习的前夕，互生情愫的二人终于向对方传达出自己的情意，约定回来后相见。但当二人再次相见时，却是在战场上。而此时的秋月却已断了双腿，被战败弄得意志消沉。草加将秋月安排到了自己家，悉心照顾。但身处对立面的二人终究抵不过这时代的悲剧。就像这“冬之蝉”，生在了错误的季节，终究逃不掉悲剧的命运。",
    "genres": [
      "Drama",
      "Animation",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "同性"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 8378,
    "runtime": "102 min",
    "releaseDate": "2007-02-23",
    "ratingRank": 130,
    "id": "movie-2286133"
  },
  {
    "sourceId": "1441054",
    "title": "古畑任三郎 VS SMAP",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2388615673.jpg",
    "summary": "某年，日本超人气偶像组合SMAP的演唱会召开在即，但是5名成员木村拓哉、香取慎吾、中居正广、草彅刚、稻垣吾郎却忧心忡忡，若有所思。在此之前，工作人员之一的富樫明男（宇梶刚士 饰）狠抓阿刚的痛脚，其行径足以导致SMAP解散，他狮子大张口勒索阿刚1000万日元。协商无效的情况下，5个好兄弟精心设计了一套详细周密的谋杀方案。这边厢，SMAP的演唱会准时召开，那边厢富樫吊死密室。突发命案，古畑任三郎（田村正和 饰）和今泉（西村雅彦 饰）隆重登场。虽然表面上富樫死于自杀，但现场种种能够蛛丝马迹则令古畑疑窦丛生，面对团结一致的SMAP，他该如何各个击破……",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 6918,
    "runtime": "135 min",
    "releaseDate": "1999-01-03",
    "ratingRank": 131,
    "id": "movie-1441054"
  },
  {
    "sourceId": "1293841",
    "title": "倒扣的王牌",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1951,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2171823995.jpg",
    "summary": "身无分文的记者丘克（Kirk Douglas 饰）流落一座新墨西哥州的小城，他舌如巧簧向当地报馆的主编推销自己，宣称自己有制造新闻的天才。波澜不惊的小城生活让曾经供职纽约的丘克倍感无聊。这天，主编令丘克外出采访，丘克于路却意外遭遇一名小镇店主里奥被困山洞。丘克敏感的意识到这件事情背后的新闻价值，他迅速联系州长、工程队与医生。随着丘克的一篇篇报道，观看施救过程的民众陆续赶来，本欲离开的里奥妻子因为看到有利可图而选择留下，并与丘克站到了同一阵营，丘克安排采用费时的营救方式来维持事件的新闻热度。几天内人群不断涌入，营救现场俨然成为游乐场。丘克与纽约的老上司讨价还价之时，洞中的里奥却走到了生命的尽头……",
    "genres": [
      "Drama",
      "Noir"
    ],
    "originalGenres": [
      "剧情",
      "黑色电影"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 6857,
    "runtime": "111 min",
    "releaseDate": "1951-06-29",
    "ratingRank": 132,
    "id": "movie-1293841"
  },
  {
    "sourceId": "1294737",
    "title": "楢山节考",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1958,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521124496.jpg",
    "summary": "信浓有一座楢山，附近山村的人到了七十岁就得进楢山。六十九岁的阿玲（田中绢代 饰）还有两件事放不下：一是四十五岁的儿子辰平（高桥贞二 饰）去年成了鳏夫；二是长孙袈裟吉（市川团子 饰）总是在村里人面前嘲笑自己牢固的牙齿。一年一度的祭祀日，等来了新儿媳阿玉（望月优子 饰）的阿玲狠下心在石臼上磕掉了两颗门牙。割稻子的时节，袈裟吉将怀着身孕的阿松（小笠原庆子 饰）领进了家门，并催促祖母早点进山。与袈裟吉不同，善良的辰平舍不得母亲进山。可是面对人口增加食物不足的状况，辰平别无选择，只得遵照母亲的意愿，在新年之前将母亲背上楢山……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 6145,
    "runtime": "98 min",
    "releaseDate": "1958-06-01",
    "ratingRank": 133,
    "id": "movie-1294737"
  },
  {
    "sourceId": "1298063",
    "title": "早安",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1959,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2200572533.jpg",
    "summary": "在东京近郊公路桥下，矗立着几间普普通通的民房，那里住着这个国家最富活力的平凡百姓，琐碎而有趣的故事也在他们中间发生。妇女协会的会费发生亏空，女人们叽叽喳喳打算查明原因。担任会计的小幸妈刚好给家里添置了洗衣机，因此成为重点怀疑对象。无聊的时候女人们婆婆妈妈，张家长李家短，好像永远看不得别人家的半点好。工作了一天的林先生（笠智众 饰）厌烦了女人的聒噪和孩子们的吵闹，偏偏两个儿子小实（设乐幸嗣 饰）和小勇（岛津雅彦 饰）他赌气决定不再说话。而这一次父子的无心之举又在邻居间激起了波澜。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 5920,
    "runtime": "94 min",
    "releaseDate": "1959-05-12",
    "ratingRank": 134,
    "id": "movie-1298063"
  },
  {
    "sourceId": "3542615",
    "title": "永不放弃",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2549571129.jpg",
    "summary": "性格开朗，绝不轻易说放弃的大学毕业生仓泽英雄（二宫和也 饰）的就业情况可谓难上加难。22岁的他患有小儿麻痹症，早年丧父，和母亲美津江（樋口可南子 饰）一直相依为命长大。想让妈妈过的轻松点的英雄非常渴望拥有一份工作，而这时经营净水器的社长给了他一个机会，去购买力不高的社区做推销。得到这份工作的英雄开始了他的销售征程，可一开始因为自身的状况，让英雄比常人更加四处碰壁。但不言放弃的英雄还是开辟了自己的一片天，得到了社区人民的支持和认可。正当一切向好的方向发展的时候，妈妈却倒下了，而自己工作的公司也出现了问题，英雄该怎么办呢？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 5424,
    "runtime": "106 min",
    "releaseDate": "2009-03-29",
    "ratingRank": 135,
    "id": "movie-3542615"
  },
  {
    "sourceId": "1416895",
    "title": "生命是个奇迹",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1764946900.jpg",
    "summary": "1992年南斯拉夫内战前夕，塞尔维亚工程师卢卡（Slavko Stimac 饰）为了修建一条旅游线路，带着痴迷歌剧的老婆嘉德兰卡（Vesna Trivalic 饰）和梦想成为足球运动员的儿子米罗（Vuk Kostic 饰）来到波斯尼亚地区的山上安营扎寨。卢卡不去理会妻子的抱怨和战争的传闻，一心投入线路的设计中。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "战争"
    ],
    "originalRegions": [
      "塞尔维亚和黑山",
      "法国",
      "意大利"
    ],
    "rating": 8.7,
    "votes": 4788,
    "runtime": "154 min",
    "releaseDate": "2004-05-14",
    "ratingRank": 136,
    "id": "movie-1416895"
  },
  {
    "sourceId": "1307508",
    "title": "指环王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1978,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2481687797.jpg",
    "summary": "这部影片改编自一部全球知名的小说《指环王》（The Lord of the Rings）。它出自名作家J.R.R. Tolkien之手，由三个各自独立而又相互关联的故事组成。这部小说至少已有1亿5百万人通读过，而浏览过的更是不计其数，可以说它是近100年来少有的一部经典巨作。近几十年来，这一故事曾多次被搬上银幕但均未获得较大的成功，只有1979年拍摄的动画版才获得了一点点好评。这部片子作为70年代的动画大作，画质算是比较不错了。其风格与迪斯尼自是大不相同，似乎有点中国水墨的影子。",
    "genres": [
      "Drama",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 4616,
    "runtime": "132 min",
    "releaseDate": "1978-11-15",
    "ratingRank": 137,
    "id": "movie-1307508"
  },
  {
    "sourceId": "1294047",
    "title": "凡尔杜先生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1947,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2074408234.jpg",
    "summary": "凡尔杜先生（查理·卓别林 Charles Chaplin 饰）曾经是一名银行的职员，跟妻子莫纳（Mady Correll 饰）和儿子皮特（Allison Roddan 饰）一同过着平静但是幸福的生活。经济大萧条的到来令凡尔杜先生失去了工作，有一个家庭要养活的他流落在街头无处容身，绝望之情溢于言表。",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 4378,
    "runtime": "124 min",
    "releaseDate": "1947-04-11",
    "ratingRank": 138,
    "id": "movie-1294047"
  },
  {
    "sourceId": "1303471",
    "title": "生生长流",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1944277781.jpg",
    "summary": "1990年伊朗西北部发生大地震，影片《哪里是我朋友家》的拍摄地点柯盖尔就在这个地区，导演带着儿子驱车前往那里寻找影片中的演员。父子俩沿路接触到的一个个劫后余生的村民没有人们想象中的悲哀神态，而是积极投身到震后的重建工作，更加珍视生命。尤其是那对在地震后第二天就举行婚礼的年轻夫妇，更能让人感受到经历过劫难的村民们的强大生命力。最后他们没有见到扮演两位小主人公的演员，但有人说刚刚看见他们。",
    "genres": [
      "Drama",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "灾难"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.7,
    "votes": 3791,
    "runtime": "95 min",
    "releaseDate": "1992-02-01",
    "ratingRank": 139,
    "id": "movie-1303471"
  },
  {
    "sourceId": "2138467",
    "title": "麻雀之歌",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2241043406.jpg",
    "summary": "卡林（瑞扎·纳基 Reza Najie 饰）靠在驼鸟养殖场打工赚钱勉强养家糊口，听力有障碍的女儿在考试前却弄丢了助听器，儿子则和一帮年纪相仿的孩子梦想着弄干净烂泥塘，然后养金鱼赚钱变成百万富翁。重新买助听器需要一大笔钱，本想跟老板预支工资的卡林却因为工作中的疏忽弄丢一只驼鸟而遭老板辞退。丢了工作的卡林四处寻找那只逃跑的驼鸟，可是最终一无所获。本来进城只是为女儿修助听器，可是开摩托车的他被人当成载客摩托车手从而意外的获得一份谋生的工作。往返于家和城市之间的卡林不仅赚来了维持生活的基本费用，而且经常还会从城里带回一些废品。卡林凭借自己的努力使一家人的生活慢慢得到改善，可是曾经流淌在家人之间的温情却由于卡林的疏忽慢慢的不见了，直到卡林的意外受伤……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.7,
    "votes": 3488,
    "runtime": "96 min",
    "releaseDate": "2008-02-10",
    "ratingRank": 140,
    "id": "movie-2138467"
  },
  {
    "sourceId": "2085537",
    "title": "马拉松",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509126391.jpg",
    "summary": "患有自闭症的小男孩彰太郎（吉川史树 饰），天真可爱，非常招人喜爱，无异于其他同龄的孩子。直到有一天，母亲晴江（田中美佐子 饰）发现了这个仿佛晴天霹雳一般的消息。难以面对现实的母亲却怀着一颗永不放弃的心，她不认输。慢慢的，晴江发现了彰太郎与众不同的天赋，儿子在跑步的时候表现超出常人。晴江带着儿子开始了每日的练习。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 3324,
    "runtime": "95 min",
    "releaseDate": "2007-09-20",
    "ratingRank": 141,
    "id": "movie-2085537"
  },
  {
    "sourceId": "1296659",
    "title": "舞台春秋",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1952,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2299155914.jpg",
    "summary": "1914年夏天，伦敦一所单身公寓。芭蕾舞女演员塞瑞拉·安布罗斯（克莱尔·布鲁姆 Claire Bloom饰）在自己的房间里，打开煤气企图自杀。万幸的是，喝得醉醺醺，刚回家的邻居卡尔费罗（查理·卓别林 Charles Chaplin饰）正好救了她。等赛瑞拉苏醒以后，卡尔费罗才得知她是因为患了风湿不能再跳舞，才产生轻生的念头。而卡尔费罗曾经是一名伟大的喜剧演员。他悉心的照料着赛瑞拉，并用自己的滑稽喜剧打消了她自杀的想法。六个月后，赛瑞拉重新成功的站了起来，并在一出芭蕾剧中担当重要角色。可赛瑞拉却与一名作曲家陷入了热恋，卡尔费罗只能默默的祝福他们，独自上演他的含泪喜剧。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 3053,
    "runtime": "137 min",
    "releaseDate": "1952-10-16",
    "ratingRank": 142,
    "id": "movie-1296659"
  },
  {
    "sourceId": "1868933",
    "title": "让娜·迪尔曼",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1975,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2464061179.jpg",
    "summary": "《让娜·迪尔曼》是一部怎样的电影呢？它是阿克曼1975年的一部长达三个半小时的电影，它又是一部著名的“女权主义”电影，它还是一部在形式与内容上都极富革命精神的电影。总之，阿克曼这位拍片数极少的比利时女导演凭借她二十出头拍出的这部电影，就足以让无数的影评人、电影史学家为她 树碑立传了。它的独特、先锋已远远超出了我们的想象，我相信，以前没有，以后也不会再有如此奇妙的观影体验了！",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "比利时"
    ],
    "rating": 8.7,
    "votes": 2970,
    "runtime": "201 min",
    "releaseDate": "1975-05-14",
    "ratingRank": 143,
    "id": "movie-1868933"
  },
  {
    "sourceId": "1303914",
    "title": "莎乐美",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2496545805.jpg",
    "summary": "剧团导演正在与舞者们排演弗兰明戈舞蹈版的《莎乐美》，预演排练，分工调度，各抒己见。终于，这场致命的绝伦之舞上演了。美艳性感的少女莎乐美（阿伊达·戈麦兹 Aída Gómez 饰）的母亲希罗底（卡门·维莱那 Carmen Villena 饰）原本是希律王（帕科·莫拉Paco Mora 饰）的嫂子，在杀害自己丈夫后改嫁希律王。施洗约翰（哈维尔·托卡 Javier Toca 饰）为此谴责了她，希罗底怀恨在心。施洗约翰试图阻止这段婚姻，被希律王困于狱中。情窦初开的莎乐美在施洗约翰面前跳起充满崇拜之情的示爱之舞，却遭到拒绝。在希罗底的怂恿下，莎乐美在希律王面前跳了一段妖魅赤裸的七层纱之舞，希律王大悦，答应满足莎乐美提出的一切请求。莎乐美淡淡地说，请把施洗约翰的头颅放在盘子里，拿来给我。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.7,
    "votes": 2899,
    "runtime": "85 min",
    "releaseDate": "2002-08-27",
    "ratingRank": 144,
    "id": "movie-1303914"
  },
  {
    "sourceId": "1306559",
    "title": "大河之歌",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1956,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2263825788.jpg",
    "summary": "转眼之间，阿普（Smaran Ghosal 饰）长大了，然而，生活却并没有因此而变得更加宽容。和父母搬去博纳斯之后没多久，阿普的父亲就永远的离开了他的家庭，就这样，阿普和母亲过起了相依为命的生活。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.7,
    "votes": 2674,
    "runtime": "110 min",
    "releaseDate": "1956-10-11",
    "ratingRank": 145,
    "id": "movie-1306559"
  },
  {
    "sourceId": "1292995",
    "title": "天伦之旅",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2331215125.jpg",
    "summary": "对于即将到来的旅程，斯库罗（马塞洛·马斯楚安尼 Marcello Mastroianni 饰）充满了兴奋和期待之情，在妻子去世多年，自己光荣退休之后，他终于要走出那一成不变的生活环境，去看望阔别已久的孩子们了。在重温亲情的路上领略异国他乡别样的景致，这样的经历想一想都 觉得美好。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8.7,
    "votes": 2579,
    "runtime": "118 min",
    "releaseDate": "1990-10-18",
    "ratingRank": 146,
    "id": "movie-1292995"
  },
  {
    "sourceId": "1958976",
    "title": "耶稣基督万世巨星",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508989574.jpg",
    "summary": "这部音乐剧DVD取材于耶稣的生平事迹，韦伯创新地将严肃的宗教故事和前卫的摇滚音乐联系起来，是一部艺术表现非常大胆、思想性也极为深刻的作品。如果说《约瑟夫与神奇彩衣》是对圣经故事的图解，那么《万世巨星》从表面上看简直就是对传统的颠覆与反动：上帝的儿子耶稣不再时刻带着圣哲的光环，他有软弱，有动摇，更多的人性代替了神性；犹大卖主也不是出自贪婪，而是出自上帝安排的命运，自杀后的犹大穿着白袍带领一个天使唱诗班向耶稣提出几个哲学问题，耶稣竟然也不知道答案。细心的读者不难看出这样的情节安排和电影《耶稣基督的最后诱惑》的相似之处，与后者一样，该剧刚一推出，便遭到了正统宗教人士的强烈抗议，这反而增加了它的知名度，其插曲《我不知如何爱他》(I don\\'t know how to love Him)、《万世巨星》(Superstar)长时间徘徊在各大唱片排行榜上。",
    "genres": [
      "Drama",
      "Music",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "音乐",
      "传记"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.7,
    "votes": 2443,
    "runtime": "107 min",
    "releaseDate": "2000-10-16",
    "ratingRank": 147,
    "id": "movie-1958976"
  },
  {
    "sourceId": "1298561",
    "title": "人间的条件(第一、二部)",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1959,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2327865956.jpg",
    "summary": "取材于五味川纯平的原著《人间的条件》。是反映日本在中国东北（满洲）日本殖民者的电影，导演站在人道主义的立场上对战争给双方的影响做了反思，本片的故事背景是一九四三年的满洲，在太平洋战争后期反对日本军国主义的 男主角尾，在满洲为其人道主义立场努力终生的故事。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 1986,
    "runtime": "208 min",
    "releaseDate": "1959-01-15",
    "ratingRank": 148,
    "id": "movie-1298561"
  },
  {
    "sourceId": "2044306",
    "title": "两头笨狗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1305587853.jpg",
    "summary": "\"Two Stupid Dogs\" follows the lives of two dogs: the overly excited Little Dog (the dachshund) and easy-paced Big Dog (the sheepdog). These crazy canines don't know how to fit in the world, and they definitely don't have any know-how. They often find themselves in commonplace situations (going to the drive-in, walking through the mall, working on the farm), some not so common situations (stuck on a space shuttle, a contestant on a game show, getting mistaken for the prime minister) and even in some familiar situations (little red riding hood, Noah's ark, and Hanzel and Gretel). But no matter the situation, their stupidity usually leads them to calamitous results. Written by van_whistler@hotmail.co.uk",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "USA",
      "美国"
    ],
    "rating": 8.7,
    "votes": 1969,
    "runtime": "Unknown runtime",
    "releaseDate": "1993-09-18",
    "ratingRank": 149,
    "id": "movie-2044306"
  },
  {
    "sourceId": "1301856",
    "title": "生死花园",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555446989.jpg",
    "summary": "普泽（雅克·维列雷 Jacques Villeret 饰）是当地一名受人尊敬的小学老师，他还有另一个身份——小丑。一到星期天，他就带上家当，在戏团里表演令人捧腹的小丑独角戏。儿子鲁西恩十分不理解他这种行为，觉得父亲的表演令他难堪。普泽的好朋友安德（安德烈·杜索里埃 André Dussollier 饰）看出了鲁西恩的心思，于是向他讲起了一段往事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.7,
    "votes": 1729,
    "runtime": "95 min",
    "releaseDate": "2003-03-26",
    "ratingRank": 150,
    "id": "movie-1301856"
  },
  {
    "sourceId": "1302463",
    "title": "千面佳人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1966,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2314094225.jpg",
    "summary": "詹姆斯（伊安·邦纳 Ian Bannen 饰）是一位事业小有成就的银行家，一次偶然中，他遇见了名叫佩尼洛浦（娜塔利·伍德 Natalie Wood 饰）的女子，佩尼洛浦的娇俏可人很快就将詹姆斯迷倒了，两人相识没多久，便步入了婚姻的殿堂。",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 1721,
    "runtime": "97 min",
    "releaseDate": "1966-11-10",
    "ratingRank": 151,
    "id": "movie-1302463"
  },
  {
    "sourceId": "1441097",
    "title": "跳跃大搜查线：97岁末特别警戒篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2456454616.jpg",
    "summary": "1997年12月27日，警视厅湾岸警察署全体在新年前夕依然繁忙的工作着，当然，除了无所事事的几位高层。是夜，商店街发生了绑架事件，突然从人群中冲出一个青年，轻轻松松将绑匪制伏。原来是传说中的青岛俊作（织田裕二饰）刑警回来了！因事件调离的青岛在新年之前调回湾岸署，但各个课室都不愿意接收这位爱惹麻烦的问题警察。从警务课、交通课、生活课，各个课长都像踢皮球一样不想青岛来工作。但青岛却乐在其中，在工作中，细心的青岛又发现了强盗犯罪事件的线索，犯人凶残似乎威胁到了警察署内部！1997年的最后几天，注定因为青岛俊作的努力工作而不平凡！",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 1708,
    "runtime": "Unknown runtime",
    "releaseDate": "1997-12-30",
    "ratingRank": 152,
    "id": "movie-1441097"
  },
  {
    "sourceId": "1420124",
    "title": "偶然与巧合",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p808397967.jpg",
    "summary": "长久以来，梅里安（亚历桑德拉·马提尼斯 Alessandra Martines 饰）带着儿子赛吉（Arthur Cheysson 饰）过着平静但孤单的生活。在威尼斯，梅里安结识了画商皮耶（皮埃尔·阿迪提 Pierre Arditi 饰），后者靠着自己的善良的幽默赢得了梅里安的芳心。可是好景不长，在三人回到巴黎后没多久，皮耶和赛吉却在意外中丢掉了性命，同时失去了爱人和孩子的梅里安悲痛欲绝。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "加拿大"
    ],
    "rating": 8.7,
    "votes": 1641,
    "runtime": "116 min",
    "releaseDate": "1998-09-07",
    "ratingRank": 153,
    "id": "movie-1420124"
  },
  {
    "sourceId": "1307745",
    "title": "让风带着我起飞",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2350704677.jpg",
    "summary": "影片简介",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "伊朗",
      "日本"
    ],
    "rating": 8.7,
    "votes": 1430,
    "runtime": "81 min",
    "releaseDate": "2000-04-21",
    "ratingRank": 154,
    "id": "movie-1307745"
  },
  {
    "sourceId": "2082176",
    "title": "我的妹妹小桃子",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2282600972.jpg",
    "summary": "●一個溫馨感人的故事，道盡兄妹情誼生命的喜悅",
    "genres": [
      "Animation",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 1413,
    "runtime": "78 min",
    "releaseDate": "2003-07-23",
    "ratingRank": 155,
    "id": "movie-2082176"
  },
  {
    "sourceId": "3199500",
    "title": "樱桃小丸子：我喜欢的歌",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1992,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453904287.jpg",
    "summary": "这一回，故事由学校让同学们根据自己喜欢的歌曲而描绘出一幅画来开始。小丸子在去静冈县的外婆家途中，遇到了帮路人素描打工的大姐姐，并成为了忘年交。在大姐姐对歌曲故事的讲述下，小丸子也画出了得奖的作品，并且还“童言无忌”的一番话感动了大姐姐，让大姐姐重新权衡了与北海道大哥哥的恋情和自己的梦想哪个更重要。",
    "genres": [
      "Animation",
      "Music",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "音乐",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 1318,
    "runtime": "92 min",
    "releaseDate": "1992-12-19",
    "ratingRank": 156,
    "id": "movie-3199500"
  },
  {
    "sourceId": "1298415",
    "title": "巴斯克维尔的猎犬",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2224226930.jpg",
    "summary": "Dr. Mortimer asks Sherlock Holmes to help protect Sir Charles Baskerville who has returned to England to take his place at the family seat following the death of his uncle, Sir Charles Baskerville. Sir Charles died of cardiac exhaustion and Dr. Mortimer believes he was frightened to death. There appears to be a curse on the family dating back nearly 200 years to when Sir Hugo Baskerville was supposedly killed on the moor by a huge hound. Holmes dismisses the supernatural elements of the case but there are a sufficient number of odd events to pique his interest. It is apparent that Sir Charles is being followed and one of his shoes was stolen at his hotel. At the family estate, the servants have suddenly resigned and the lady cook is crying herself to sleep every night. Holmes soon realizes that someone is making sure the legend becomes real. Written by garykmcd",
    "genres": [
      "Mystery",
      "Horror",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "恐怖",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.7,
    "votes": 1195,
    "runtime": "105 min",
    "releaseDate": "1988-08-31",
    "ratingRank": 157,
    "id": "movie-1298415"
  },
  {
    "sourceId": "1306016",
    "title": "玩家马布斯博士",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1922,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2188000097.jpg",
    "summary": "在上世纪初的德国，一个精通心理学的犯罪天才马布斯博士，利用各种伎俩，包括催眠，易容，赌博等，把他的受害人完全操纵于股掌之中。他自称能够医治战后人们的精神创伤；他欺骗了舞蹈演员卡罗扎，又从百万富翁的儿子胡尔手中靠赌博赢得了五万马克。警方有人开始调查……",
    "genres": [
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.7,
    "votes": 1169,
    "runtime": "297 min",
    "releaseDate": "1922-05-26",
    "ratingRank": 158,
    "id": "movie-1306016"
  },
  {
    "sourceId": "1305814",
    "title": "小树的故事",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526007439.jpg",
    "summary": "八岁印第安小孩“小树”，在双亲逝世后，被送至田纳西州的史莫基山，与祖父母同住。小树与住在深山中的祖父母展开了一段新生活，他的新生活充满了探索与冒险，有欢笑有泪水，当然有胜利与挫折。同时，小树也认识了不少好朋友，包括神秘的奇拉几族先知——“柳树”约翰。1930年的美国，虽然经济萧条，生活困苦，但是对小树来说，却是最难忘的时光。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.7,
    "votes": 1162,
    "runtime": "116 min",
    "releaseDate": "1997-12-25",
    "ratingRank": 159,
    "id": "movie-1305814"
  },
  {
    "sourceId": "1845698",
    "title": "神奇独角马",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1981,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554087038.jpg",
    "summary": "小白角是生来便具有神奇力量的独角兽，它能够给人带来快乐。因了这神奇的力量而遭到神的放逐。善良的西风把它带去了一个无人岛屿，在那里它认识了小魔鬼，并和孤独的小魔鬼成为了朋友。",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.7,
    "votes": 1126,
    "runtime": "90 min",
    "releaseDate": "1981-03-14",
    "ratingRank": 160,
    "id": "movie-1845698"
  },
  {
    "sourceId": "1292328",
    "title": "东邪西毒",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg",
    "summary": "在恋人（张曼玉）负气嫁给兄长的当晚，欧阳锋（张国荣）黯然离开白陀山，走进沙漠某个小镇，成为一名杀手中介人。他的朋友、风流剑客黄药师（梁家辉）每年都来小镇与他畅饮，酒话里有关白陀山的消息令他忘却往事的念想渐次演变成自欺行为。",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港",
      "中国台湾"
    ],
    "rating": 8.6,
    "votes": 368490,
    "runtime": "100 min",
    "releaseDate": "1994-09-17",
    "ratingRank": 161,
    "id": "movie-1292328"
  },
  {
    "sourceId": "3592854",
    "title": "疯狂的麦克斯4：狂暴之路",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2015,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2236181653.jpg",
    "summary": "未来世界，水资源短缺引发了连绵的战争。人们相互厮杀，争夺有限的资源，地球变成了血腥十足的杀戮死战场。面容恐怖的不死乔在戈壁山谷建立了难以撼动的强大武装王国，他手下的战郎驾驶装备尖端武器的战车四下抢掠，杀伐无度，甚至将自己的孩子打造成战争机器。在最近一次行动中，不死乔的得力战将弗瑞奥萨（查理兹·塞隆 Charlize Theron 饰）带着生育者们叛逃，这令不死乔恼羞成怒，发誓要追回生育者。经历了激烈的追逐战和摧毁力极强的沙尘暴，弗瑞奥萨和作为血主的麦克斯（汤姆·哈迪 Tom Hardy 饰）被迫上路，而身后不仅有不死乔的追兵，还有汽油镇、子弹农场的重兵追逐。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "冒险"
    ],
    "originalRegions": [
      "澳大利亚",
      "美国"
    ],
    "rating": 8.6,
    "votes": 302306,
    "runtime": "120 min",
    "releaseDate": "2015-05-14",
    "ratingRank": 162,
    "id": "movie-3592854"
  },
  {
    "sourceId": "1305725",
    "title": "大卫·戈尔的一生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2186861098.jpg",
    "summary": "贝茜•布鲁姆（凯特温斯莱 Kate Winslet饰）是纽约某新闻杂志的知名记者，她接到了一个任务是去采访一名死刑犯大卫•戈尔（凯文•斯帕西 Kevin Spacey 饰）。戈尔的罪名是强奸并谋杀了康丝坦斯•哈拉维，并将于周五下午6点被处以死刑，那么布鲁姆将要采访并记录的就是戈尔人生最后的三天，而此前戈尔拒绝了一切采访。布鲁姆起初对这个任务很不以为然，但在和戈尔的接触过程中，她发现一切并非表面呈现的那么简单，于是布鲁姆决定用仅剩的三天开始寻找真相……",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国",
      "英国"
    ],
    "rating": 8.6,
    "votes": 132355,
    "runtime": "130 min",
    "releaseDate": "2003-02-21",
    "ratingRank": 163,
    "id": "movie-1305725"
  },
  {
    "sourceId": "1293929",
    "title": "廊桥遗梦",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2190558219.jpg",
    "summary": "弗朗西斯卡·约翰逊（Meryl Streep 饰）去世了，留下的遗嘱要求孩子们将自己的骨灰撒在罗斯曼桥。困惑的孩子们翻看母亲的遗物，揭开了母亲生前的一段动人感情。 1965年夏季的一天，主妇弗朗西斯卡送走了丈夫理查德（Jim Haynie 饰）和孩子们，独自做着家务。摄影师罗伯特·金凯德（Clint Eastwood 饰）误打误撞来到这里，向她打听罗斯曼桥的所在。她平静的心起了波澜，于是带他来到桥头。当天的工作结束后，他送她一把野花致谢，并接受她的邀请，与她共进晚餐。第二天凌晨他走后，恋恋不舍的她回到罗斯曼桥，将一张字条钉在桥头，邀请他再次共进晚餐。他再次接受了邀请。两人在罗斯曼桥相会，爱情的火焰在两人心中熊熊燃烧。他请求她随他一起远走，但她割舍不下现有的家人和世俗的幸福。他黯然离开。 十多年后，深爱弗朗西斯卡的理查德去世。又过三年，她收到了罗伯特的死讯。他把大部分的东西留给了她，并要求将自己的骨灰撒在罗斯曼桥。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 130454,
    "runtime": "135 min",
    "releaseDate": "1995-06-02",
    "ratingRank": 164,
    "id": "movie-1293929"
  },
  {
    "sourceId": "1300613",
    "title": "土拨鼠之日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2493191199.jpg",
    "summary": "菲尔（Bill Murray饰）是个气象播报员，每天除了在摄像机前给观众做风趣幽默的天气预报外，每年的2月2日他还要前往一个名为普苏塔尼的边境小镇，报导当地的土拨鼠日庆典。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 100939,
    "runtime": "101 min",
    "releaseDate": "1993-02-12",
    "ratingRank": 165,
    "id": "movie-1300613"
  },
  {
    "sourceId": "1301106",
    "title": "布达佩斯之恋",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1282945684.jpg",
    "summary": "人们总是难以抗拒《忧郁星期天》的悲伤情调，原来这首歌与一段复杂凄美的爱情故事有关。上世纪30年代的匈牙利首都布达佩斯的一个餐馆里，美丽的伊洛娜（艾丽卡·莫露珊 Erika Marozsán 饰）同时被两个男人深爱着。一个是餐厅老板，另一个是钢琴师。三个人都并不愿意改变现况，打破平衡，伊洛娜同时拥有两个男人的爱而深感平静幸福。钢琴师为她创作出《忧郁星期天》，他和餐厅也因此一举成名。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "德国",
      "匈牙利"
    ],
    "rating": 8.6,
    "votes": 64470,
    "runtime": "112 min",
    "releaseDate": "1999-10-21",
    "ratingRank": 166,
    "id": "movie-1301106"
  },
  {
    "sourceId": "3026357",
    "title": "老爷车",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1155946363.jpg",
    "summary": "曾参加过朝鲜战争的福特车厂退休老工人沃尔特•科瓦尔斯基（克林特•伊斯特伍德 Clint Eastwood 饰）在妻子去世后独自居住在密歇根州小城的低收入亚洲移民区。邻居是个苗族大家庭，其中一对兄妹引起了沃尔特的注意。姐姐苏（安蕾•荷 Ahney Her 饰）幽默善谈，逐步与固执又有点种族主义的老沃尔特成为了朋友；沉默寡言的弟弟涛（比•王 Bee Vang 饰）则被自己的远房表兄强迫加入当地的苗族黑帮，第一次行动就被指派去偷沃尔特视为珍宝的1972年福特老爷车。偷车不成，涛被家人强迫，给沃尔特打工赎罪，却没曾想与沃尔特建立了深厚的友谊。而当地的苗族帮派却不肯就此罢手，为了苏与涛的安全和社区的安宁，老战士沃尔特该如何行动呢？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 60448,
    "runtime": "116 min",
    "releaseDate": "2008-12-12",
    "ratingRank": 167,
    "id": "movie-3026357"
  },
  {
    "sourceId": "1297294",
    "title": "迷魂记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1958,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1275162115.jpg",
    "summary": "退役警探约翰·弗格森（詹姆斯·斯图尔特 James Stewart 饰）的同学加文·埃尔斯特（汤姆·赫尔莫 Tom Helmore 饰）是造船商。他请求约翰跟踪自己的妻子，并称妻子经常被鬼魂附身。随后，约翰按照加文的指示，在厄尼餐厅见到了一位美丽的女人（金姆·诺瓦克 Kim Novak 饰）。经过跟踪，约翰发现女人确有不同寻常的行为：开车出门，去花店买花，去墓园在卡洛塔·巴尔德斯的碑前驻足，去荣勋宫博物馆凝视卡洛塔画像，最后进入麦基屈克旅馆并出现在二楼的一扇窗前。约翰随即进入旅馆调查，发现女人登记名为卡洛塔·巴尔德斯，但其房中无人。卡洛塔·巴尔德斯究竟是何方神圣，鬼魂真的能附身活人吗？",
    "genres": [
      "Romance",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "爱情",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 56149,
    "runtime": "128 min",
    "releaseDate": "1958-05-09",
    "ratingRank": 168,
    "id": "movie-1297294"
  },
  {
    "sourceId": "1302642",
    "title": "花火",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513347103.jpg",
    "summary": "西佳敬（北野武饰）是一名警察，几年前女儿不幸死去，现在妻子（岸本加世子饰）患白血病已到晚期。好意让他去探望妻子的搭档堀部（大杉涟饰），则在任务中严重受伤，导致下半身瘫痪，与轮椅为伴。后来西在一次逮捕行动中处理失当，又导致后辈田中（芦川诚饰）丧生。引咎辞职的他，想着供养田中的寡妻（大家由佑子饰），接近并安慰老友堀部，黑社会紧追着他索讨利息，这一切都令西感到不堪重负。他决定铤而走险，做件冒险的事情，将一切做个了结。最后，西陪妻子做一次没有归途的旅行。",
    "genres": [
      "Drama",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 55062,
    "runtime": "103 min",
    "releaseDate": "1997-09-03",
    "ratingRank": 169,
    "id": "movie-1302642"
  },
  {
    "sourceId": "1293374",
    "title": "热天午后",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1975,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2100141196.jpg",
    "summary": "根据真实故事改编，美国历史上最不完善的银行抢案。",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 46685,
    "runtime": "125 min",
    "releaseDate": "1975-09-21",
    "ratingRank": 170,
    "id": "movie-1293374"
  },
  {
    "sourceId": "3168993",
    "title": "求婚大作战特别篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2152409201.jpg",
    "summary": "礼（长泽雅美饰）听了健（山下智久饰）的表白，从与多田（藤木直人饰）正在进行的婚礼中落跑，转眼又过了一年。两人虽然都很了解对方的心思，但却始终无法迈出新的一步。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 36324,
    "runtime": "114 min",
    "releaseDate": "2008-03-25",
    "ratingRank": 171,
    "id": "movie-3168993"
  },
  {
    "sourceId": "1299112",
    "title": "梦",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2215880880.jpg",
    "summary": "本片是日本电影天皇黑泽明对梦的勾画，全片共有八个梦境，分别是：太阳雨、桃园、风雪、隧道、乌鸦、红色富士山、垂泪的魔鬼和水车之村。这八个梦几乎贯穿了人类生活的所有主题，战争与和平、社会与人生。在不同的梦境里有着不同的场景，配合不同的色彩，把人类所面对的所有主题一一呈现。",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "日本",
      "美国"
    ],
    "rating": 8.6,
    "votes": 27079,
    "runtime": "121 min",
    "releaseDate": "1990-05-25",
    "ratingRank": 172,
    "id": "movie-1299112"
  },
  {
    "sourceId": "4935242",
    "title": "焦土之城",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p981048348.jpg",
    "summary": "双胞胎姐弟珍妮（梅丽莎·德索蒙斯-波林 Mélissa Désormeaux-Poulin饰）跟西蒙（马克西姆·高德特 Maxim Gaudette饰）收到过世的母亲娜瓦尔（卢布娜·阿扎宝 Lubna Azabal饰）的遗嘱，可当宣读完内容之后，两姐弟却一时难以接受这样的遗嘱：一份是写给他们从未蒙面的父亲；一份是写给她的第三个孩子——他们更是不知道这个哥哥的存在。影片巧妙的游走在两个不同的时空：母亲终其一生苦苦寻觅自己的长子；姐弟遵循母亲的遗嘱前往中东寻找他们的父亲与兄长。可越是穷其究竟，他们面对的越是理不清的头绪跟令人震惊的真相。",
    "genres": [
      "Drama",
      "Mystery",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "战争"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.6,
    "votes": 24787,
    "runtime": "131 min",
    "releaseDate": "2010-09-03",
    "ratingRank": 173,
    "id": "movie-4935242"
  },
  {
    "sourceId": "1293150",
    "title": "宾虚",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1959,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201168652.jpg",
    "summary": "故事发生在古罗马时期，护民官米撒拉(史蒂芬•博伊德 Stephen Boyd 饰)回到了故乡，重遇了儿时的好友宾虚(查尔登•海斯顿 Charlton Heston 饰)。宾虚家是犹太人的豪门，在犹太人中享有相当高的待遇，为了控制犹太人，使他们安份的臣服于古罗马帝国的统治之下，米撒拉希望宾虚帮忙。但宾虚不肯出卖自己的民族，于是两个好友决裂了。随后，米撒拉找了借口治了宾虚一家谋反罪，宾虚被卖到一艘军舰上当奴隶，而他也失去家人们的信息。一次偶然机会，宾虚立了战功，得到了古罗马的皇帝接见，他回到了故乡，也开始了他的复仇之旅!",
    "genres": [
      "Drama",
      "Action",
      "History",
      "War",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史",
      "战争",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 23435,
    "runtime": "212 min",
    "releaseDate": "1959-11-18",
    "ratingRank": 174,
    "id": "movie-1293150"
  },
  {
    "sourceId": "2028659",
    "title": "狐狸与我",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p458726329.jpg",
    "summary": "一个十岁的小女孩（贝蒂•若耶-布萝Bertille Noël-Bruneau 饰）在上学路上碰见了一只正抓田鼠的狐狸。女孩被漂亮的狐狸迷住，下学后回到森林原地希望再见到那只狐狸。从秋天到冬天，女孩在厚雪地里沿着狐狸的脚印寻找，却失足摔断了腿，整个冬天只好在室内度过，读了很多关于狐狸的书。春天是猎狐的季节，为狐狸忧心忡忡的小女孩欣喜若狂的发现了狐狸的洞穴和它的三只小狐狸，却没想到狐狸嗅出人的气味，连夜转移了幼崽。女孩决定不去打扰狐狸，而是坐到山毛榉树上等它主动出现。就这样，人与狐狸的关系慢慢建立，狐狸带着小女孩展开了奇妙的森林冒险……",
    "genres": [
      "Drama",
      "Children",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "儿童",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.6,
    "votes": 21315,
    "runtime": "92 min",
    "releaseDate": "2007-12-12",
    "ratingRank": 175,
    "id": "movie-2028659"
  },
  {
    "sourceId": "1299900",
    "title": "亚当斯一家的价值观",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p652970475.jpg",
    "summary": "亚当斯庄园多了一个刚出生的婴儿，Morticia（Anjelica Huston 饰）被他搞得焦头烂额。Gomez（劳尔·朱力亚 Raul Julia 饰）雇了个保姆Debiie，她很讨亚当斯一家人的欢心。但Pugsley和Wednesday看穿她的用心，用来她是有名的“黑寡妇”，小时候便杀死了她的父母，后来又连续为钱杀死了她的两个丈夫。但当孩子们还来不及告发Debbie时，Debbie已经将他们都送去了夏令营，和Fester叔叔结婚了。婚后，Debbie想尽办法想要把Fester叔叔杀死，还要伪装成一场意外，但每一次都没能得逞。而尽管夏令营很好玩，但孩子们不断的惹老师生气，不停地破坏小朋友们的游戏气氛，为的就是老师能早点把他们送回家，好让他们能警告他们的家人：小心Debbie……",
    "genres": [
      "Comedy",
      "Thriller",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "惊悚",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 20005,
    "runtime": "94 min",
    "releaseDate": "1993-11-19",
    "ratingRank": 176,
    "id": "movie-1299900"
  },
  {
    "sourceId": "1947270",
    "title": "天狗",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1379497824.jpg",
    "summary": "伤残军人李天狗（富大龙）复员后，听从组织安排携带妻子桃花（朱媛媛）和儿子来到偏远山区当起国有林场的护林员，他没想到的是，眼前淳朴善良的农民发家致富的招数竟是乱砍乱伐乱卖林区的树木，而被当地人称为“三条龙”的孔家三兄弟是始作俑者兼幕后推手。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.6,
    "votes": 18581,
    "runtime": "101 min",
    "releaseDate": "2006-06-20",
    "ratingRank": 177,
    "id": "movie-1947270"
  },
  {
    "sourceId": "1296636",
    "title": "小马王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2284067604.jpg",
    "summary": "广袤的美国西部地区，野马史比瑞特和他的族群过着平静的生活。然而，当史比瑞特第一次见到人类时，他就被抓去训练成战马。幸好善良的印第安小男孩小溪将史比瑞特从训练营里救了出来，并带他回到了自己部落。在小溪的部落，史比瑞特遇上了斑纹木马小雨。这一次，史比瑞特对回家乡还是留下来感到难以抉择，因为他深深爱上了小雨。小溪察觉出了两匹马的爱情，他决定让他们一起回史比瑞特的家乡。当史比瑞特刚刚依依不舍的和小溪告别后，小溪的部落就遭到了骑兵的袭击。史比瑞特和小雨马上回去救小溪，慌乱之下，小雨替小溪挡了一枪，而史比瑞特也重新被抓……",
    "genres": [
      "Romance",
      "Animation",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "爱情",
      "动画",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 16360,
    "runtime": "83 min",
    "releaseDate": "2002-05-24",
    "ratingRank": 178,
    "id": "movie-1296636"
  },
  {
    "sourceId": "1293863",
    "title": "钢铁巨人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453506001.jpg",
    "summary": "往日平静的洛克威小镇，近来怪事不断，先是农家被毁、车子损坏等。一天晚上，发电厂也遭到了破坏，导致全镇停电，引起了全镇居民的恐慌。小男孩霍加斯（艾力·马伦斯奥 Eli Marienthal 配音）觉得迹象很可疑，于是沿着电缆线走到了建在森林中的发电厂，发现了凶手——钢铁巨人（范·迪塞尔 Vin Diesel 配音）。开始霍加斯被钢铁巨人巨大的身躯吓坏了，但发现他被高压电缆线缠住，无法脱身。霍加斯没有打算将此事向大人们报告，而是打算救他出来，在多日的交往过程中，霍加斯发现他其实有颗善良的心，两人成了好朋友。钢铁巨人以铁为食，每天要消耗大量的铁，供不应求，霍加斯只好带他去狄恩（小哈里·康尼克 Harry Connick Jr.）旧车厂。 另一方面，政府派来了肯特（克里斯托弗·麦克唐纳 Christopher McDonald 配音），追查铁巨人的下落，并到处散播谣言。最后巨人被肯特发现，派出大量的军队来摧毁他，完全不顾小镇居民的安危，错误的将原子弹的发射了出去，钢铁巨人在危机关头将会如何解决危机……",
    "genres": [
      "Comedy",
      "Sci-Fi",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "科幻",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 15555,
    "runtime": "86 min",
    "releaseDate": "1999-08-06",
    "ratingRank": 179,
    "id": "movie-1293863"
  },
  {
    "sourceId": "1299481",
    "title": "查令十字街84号",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2326209301.jpg",
    "summary": "女作家海伦（安妮·班克罗夫特 Anne Bancroft 饰）住在纽约，她常常为自己不能买到所需的珍稀图书而沮丧。偶然，她在一本杂志上发现一则来自一家英国旧书店刊登的广告，便抱着试探的心态给这家位于伦敦查令十字街84号的马克书店老板写了求书单。很快，马克书店给了她一个超乎想象的惊喜：她买到了自己一直苦苦寻找的珍品书籍，并且还获得了弗兰克（安东尼·霍普金斯 Anthony Hopkins 饰）对书籍珍本的诚意推荐。自此，两个热爱书籍的人开始了长达20年的书信来往。海伦不仅向弗兰克求购难寻书籍，还与他分享自己的读书心得。两人互相交流文学观点，评述名家作品。弗兰克奔波四处为海伦购买书籍珍本，海伦则从美国寄来丰盛食物，为书店员工们缓解因英国实物配给制而造成的食物匮乏难题。两人通过持续书信来往成为精神至交。海伦一直想前往伦敦拜访弗兰克，却因为各种突发情况而未能如愿。直到她收到弗兰克去世消息的书信，她才终于坐上了飞往英国的飞机，而此时，查林十字街84号的马克书店却面临着被拆迁……",
    "genres": [
      "Drama",
      "Romance",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "传记"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.6,
    "votes": 14981,
    "runtime": "100 min",
    "releaseDate": "1987-02-13",
    "ratingRank": 180,
    "id": "movie-1299481"
  },
  {
    "sourceId": "1293993",
    "title": "小公主",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1237895796.jpg",
    "summary": "富有的克鲁上校和她的女儿萨拉（利塞尔•马修斯 Liesel Matthews 饰）在印度度过了一段幸福美好的时光。直到战争爆发，因为萨拉的母亲在她出生的时候就去世了，上战场前，克鲁上校不得不把萨拉送到了纽约著名的米切恩女子学校，将女儿委托给了米切恩夫人代为照顾，并留下了一笔不菲的报酬，以便自己走后女儿生活无忧。米切恩夫人看在这笔丰厚酬劳的面子上，给萨拉安排了最大最好的房间，即使是在违背校规的情况下也默许萨拉带着母亲留给她的项链。天真活泼的萨拉总是有一些奇思妙想的小故事，让她很快和其他孩子融洽的相处起来。在大家的簇拥下，萨拉俨然过着小公主一般的生活。但天有不测风云，就在她生日那天，前线却突然传来了她父亲阵亡的消息，萨拉成了孤儿，米切恩夫人开始暴露出她贪婪势利的本性，萨拉的生活轨迹开始发生变化…",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 14953,
    "runtime": "97 min",
    "releaseDate": "1995-05-10",
    "ratingRank": 181,
    "id": "movie-1293993"
  },
  {
    "sourceId": "1328665",
    "title": "笑之大学",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p886358101.jpg",
    "summary": "故事发生在1940年秋的日本。政府在战时为了加强文化监管，在警察局设立了演剧检查科。刚从中国东北伪满洲国调来的审查官向坂（役所广司 饰）是个不苟言笑、不通情理的铁面判官，他掌握着演剧剧本的生杀大权。笑之大学剧团的喜剧作家椿一（稻垣吾郎 饰）带着他的剧本来到了向坂的调查室，一场喜剧剧本的搞笑升级拉锯战由此拉开了帷幕。故事发生在七天的时间里，每天向坂的恶意刁难都层层升级，一个个无理的要求向编剧椿一逐个抛出，椿一见招拆招努力应对的同时却创造出了前所未有的精彩喜剧剧本。连一向厌恶喜剧、希望喜剧从地球上消失的向坂都迷失了初衷，渐渐陶醉在椿一搞笑故事中。甚至帮助椿一修改剧本，使剧本的搞笑程度达到了又一个高峰。然而俩人的政治立场决定二人最终走向了对立，向坂向椿一使出了杀手锏，椿一是否能完成这个不可能完成的任务呢......",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 14753,
    "runtime": "121 min",
    "releaseDate": "2004-10-30",
    "ratingRank": 182,
    "id": "movie-1328665"
  },
  {
    "sourceId": "3285642",
    "title": "音乐会",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p767824526.jpg",
    "summary": "安德烈（阿列克塞·古斯科夫 Aleksei Guskov 饰）被盛赞为音乐天才，曾经当过俄国最伟大的交响乐团“波修瓦”的著名的乐队指挥。但因拒绝驱逐乐团里的犹太乐手，包括他最好的朋友——沙查（迪米特里·纳扎罗夫 Dmitri Nazarov 饰）而被解雇，染上了酗酒的毛病。“波修瓦”现在的经理为了愚弄和羞辱安德烈，让他留在乐团当清洁工。安德烈在无意之中发现了一份传真，法国巴黎最大的普莱耶音乐厅邀请“波修瓦”去演出，要求在两周之内给予回复。安德烈突然想到了一个疯狂的计划，他要把以前的那些音乐伙伴重新聚拢起来。被乐团流放之后，他们现在已经变成了一群混杂在莫斯科街头的最普通的人，从出租车司机、搬运工、跳蚤市场的地摊摊主到色情电影的配音演员，做的都是勉强维持生活的底层工作。他们决定顶替真正的“波修瓦”去巴黎，要向一切不公正的待遇展开复仇……",
    "genres": [
      "Drama",
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "罗马尼亚",
      "比利时"
    ],
    "rating": 8.6,
    "votes": 13320,
    "runtime": "122 min",
    "releaseDate": "2009-11-04",
    "ratingRank": 183,
    "id": "movie-3285642"
  },
  {
    "sourceId": "1297602",
    "title": "虎豹小霸王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1969,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p449568577.jpg",
    "summary": "19世纪末，威名四震的“虎豹小霸王”布奇（保罗·纽曼 Paul Newman 饰）与搭档太阳舞小子（罗伯特·雷德福 Robert Redford 饰）在美国西部的一个小镇上四处抢劫银行，与对手凶残搏杀，与警察机智周旋。一次，两人抢劫“飞人”公司邮车，引来警长与当地居民的追捕。但他俩依旧我行我素，与女教师埃塔（凯瑟琳·罗斯 Katharine Ross 饰）逍遥自在地过着快乐时光。当他们再次抢劫“飞人”邮车后，招来一队骑警，对他们紧追不舍，展开天罗地网的搜捕，迫使布奇和太阳舞小子展开了逃亡之路。从悬崖跳下逃命的两人找到埃塔，商议去玻利维亚谋生。在异国他乡，他们尝试金盆洗手走上正道，终究还是认为这种生活不适合他们，于是重操旧业。埃塔一气之下，抛下他们重回美国。他们在一座小镇不慎暴露身份，被追捕的警察重重包围。前有拦截，后有追兵，虎豹小霸王是否能够在重重夹击之下浴火重生？ 本片获得第42届奥斯卡最佳原创剧本奖、最佳摄影奖、最佳原创歌曲奖、最佳配乐奖等",
    "genres": [
      "Drama",
      "Crime",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "犯罪",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 12438,
    "runtime": "110 min",
    "releaseDate": "1969-10-10",
    "ratingRank": 184,
    "id": "movie-1297602"
  },
  {
    "sourceId": "1303577",
    "title": "雨月物语",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1953,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2300697285.jpg",
    "summary": "战国时代，琵琶湖附近的一个小山村里住着源十郎（森雅之饰）和妻子宫木（田中绢代饰），还有妹夫藤兵卫（小泽荣饰）、妹妹阿滨（水户光子）。他们以开小瓷窑、烧制瓷器为生，战乱中，源十郎想趁着战乱发一笔横财，而藤兵卫则想着成为一名武士，出人头地。",
    "genres": [
      "Drama",
      "War",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "战争",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 12238,
    "runtime": "96 min",
    "releaseDate": "1953-03-26",
    "ratingRank": 185,
    "id": "movie-1303577"
  },
  {
    "sourceId": "1306255",
    "title": "人狼",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1245102664.jpg",
    "summary": "二战后的十数年，日本从战败的阴影中逐渐走出，进入了经济高度增长的时代。然而强硬的经济政策也导致失业率的不断攀升，各种反政府武装势力不断抬头，安定的社会治安荡然无存。为了应对这一难题，政府建立了拥有高度自主权的首都圈治安警察机构，通过精良的装备和果断的武力来打击以“党派”为首的反政府组织。随着经济不断发展，崇尚暴力的首都圈警察和“党派”逐渐遭到民众的厌弃和孤立。",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 11862,
    "runtime": "102 min",
    "releaseDate": "1999-11-17",
    "ratingRank": 186,
    "id": "movie-1306255"
  },
  {
    "sourceId": "1301897",
    "title": "何处是我朋友的家",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p740033093.jpg",
    "summary": "伊朗的偏僻山村小学里，一群孩子在课堂里聆听老师讲课。在检查作业的时候，老师发现穆罕德屡次没有完成家庭作业，于是严厉地批评了他，说如若再犯立马开除。老师对学生强调这是帮助他们树立良好的规矩。当天放学后，小男孩阿穆德却赫然发现自己把同桌穆罕德的作业本带回了家。听懂了老师的谆谆善诱，所以阿穆德明白这作业本就是穆罕德继续听讲的凭证。为了把作业本还给同桌，阿穆德曾希望母亲和祖父可以施以援手，但是均告失败。所以，他只能孤身前行，到对面大山里的村落去寻找同桌，归还作业本。然而，由于不认识同桌的家，所以他处处碰壁，遭遇到了无法想象的艰难险阻……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.6,
    "votes": 11672,
    "runtime": "83 min",
    "releaseDate": "2000-08-31",
    "ratingRank": 187,
    "id": "movie-1301897"
  },
  {
    "sourceId": "1298385",
    "title": "解构爱情狂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2099964935.jpg",
    "summary": "哈里（伍迪·艾伦 Woody Allen 饰）是一个才华横溢的著名作家，由于他神经兮兮、过于疯狂，他一直过着支离破碎、混乱无序的生活。他把身边的人和周围发生的事都写进自己的小说里，把自己和多名女性的感情生活也写成小说出版，由此哈里伤害和得罪了身边很多人。哈里的真实生活与小说中的虚构情节不断交织，同时哈里发现自己的灵感开始枯竭。在哈里的生活过得一团糟的时候，他被母校邀请回校接受名誉学位，但他找不到一个可以陪他一起去的伴儿。他只好找了个妓女陪同，第二天朋友理查德也来陪他，路上他还从前妻手中拐来自己的儿子一同前去。四人在途中又遇到了什么，到达目的地之后又有什么状况？",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 11408,
    "runtime": "96 min",
    "releaseDate": "1997-12-12",
    "ratingRank": 188,
    "id": "movie-1298385"
  },
  {
    "sourceId": "5028328",
    "title": "午宴之歌",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2165601333.jpg",
    "summary": "“他”（艾伦·瑞克曼 Alan Rickman 饰）是伦敦一名默默无闻的图书编辑，经历了写作生涯的惨痛失败后，只能在工作之余写写诗，一边唾弃着他平淡无奇的工作，一边为曾经的失败爱情心怀遗憾，渐入颓唐中年。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.6,
    "votes": 10843,
    "runtime": "50 min",
    "releaseDate": "2010-10-08",
    "ratingRank": 189,
    "id": "movie-5028328"
  },
  {
    "sourceId": "1293936",
    "title": "杀手",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1956,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192213954.jpg",
    "summary": "在监狱服刑的5年期间，乔尼·科雷（Sterling Hayden 饰）想出一条绝妙的抢劫计划。出狱后，他集结一帮非法之徒，共同策划抢劫赛马场的两百万美元巨资，并且做到“无一人伤亡”。然而智者千虑，必有一失。乔尼天衣无缝的计划得以顺利实施，却被同伙乔治（Elisha Co ok Jr. 饰）的老婆谢莉（Marie Windsor 饰）打乱。她得知丈夫的计划后，联合情夫沃尔（Vince Edwards 饰）向巨款伸出贪婪之手……",
    "genres": [
      "Thriller",
      "Crime",
      "Noir"
    ],
    "originalGenres": [
      "惊悚",
      "犯罪",
      "黑色电影"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 10255,
    "runtime": "85 min",
    "releaseDate": "1956-06-06",
    "ratingRank": 190,
    "id": "movie-1293936"
  },
  {
    "sourceId": "1294038",
    "title": "流星语",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p939431341.jpg",
    "summary": "少君（琦琦）产下儿子明仔（叶靖岚）后被丈夫抛弃，为了不让明仔跟着自己过苦日子，她把明仔遗弃在了一艘豪华游船上，期望好心有钱的人士捡去，但自己从此落下心病。证券经纪人李兆荣（张国荣）见到明仔时虽已是因金融风暴而破产的穷光蛋，还是决定收养他，两人住进养老院天台的一间木屋，李兆荣开始靠骑单车为别人送货挣生活费。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.6,
    "votes": 9226,
    "runtime": "110 min",
    "releaseDate": "1999-10-14",
    "ratingRank": 191,
    "id": "movie-1294038"
  },
  {
    "sourceId": "3271093",
    "title": "北壁",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1701484116.jpg",
    "summary": "1936年纳粹者发起全国青少年挑战阿尔卑斯山背面的活动,很多人都认为那是死亡之墙,但还是有2位德国青少年挑战,而最终失败的故事。 人们在雪山中发现了他们的尸体　其中一人手紧握攥着一个小页血书，上书“给我一套装备。我能爬到中国……”",
    "genres": [
      "Drama",
      "History",
      "Adventure",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "冒险",
      "运动"
    ],
    "originalRegions": [
      "德国",
      "奥地利",
      "瑞士"
    ],
    "rating": 8.6,
    "votes": 9048,
    "runtime": "126 min",
    "releaseDate": "2008-10-23",
    "ratingRank": 192,
    "id": "movie-3271093"
  },
  {
    "sourceId": "1764361",
    "title": "四月一日灵异事件簿剧场版：仲夏夜之梦",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181265210.jpg",
    "summary": "普通高中生四月一日君寻（福山润 配音），有着异于常人的体质，他可以看到并且吸引各种鬼怪，而如果和同学百目鬼静（中井和哉 配音）在一起时，就不会被鬼怪缠上。因为命运的牵引，四月一日走进了一家奇怪的店里，这是一家可以帮客人实现任何愿望的店，但是店主人壹原侑子（大原沙耶香 配音）同时要拿走和这愿望对等的代价。侑子答应帮四月一日实现远离鬼怪的愿望，而作为代价，四月一日要留在店里打工。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 8882,
    "runtime": "60 min",
    "releaseDate": "2005-08-20",
    "ratingRank": 193,
    "id": "movie-1764361"
  },
  {
    "sourceId": "1302605",
    "title": "远山的呼唤",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1980,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2213081303.jpg",
    "summary": "寒冷偏远的北国，人们祖祖辈辈生活于此。在这片纯然且严苛的土地上，盛开着一朵来自他乡、柔弱而又坚强的鲜花。她叫风见民子（倍賞千恵子 饰），早年不顾家人的反对，决然跟随爱人来到北国经营农场。数年前丈夫撒手人寰，民子既要继续支撑农场，又要抚养儿子武志（吉岡秀隆 饰），个中艰辛谁人知。某天，一名沉默寡言有着坚毅面庞的男人路过农场，他去而复返，恳请民子留他在这里帮工。虽则顾虑重重，但是民子还是收留了这个名叫田岛耕作（高倉健 饰）的男人。耕作背负着不堪回首的过去，在这个远离城市喧嚣的偏远所在，他全身心地投入劳作，既与武志结下深厚的友情，也赢得了周围人的信任。他的坚毅也慢慢开启了民子的心门……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 8399,
    "runtime": "124 min",
    "releaseDate": "1980-03-15",
    "ratingRank": 194,
    "id": "movie-1302605"
  },
  {
    "sourceId": "1294565",
    "title": "五至七时的克莱奥",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1962,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2438827116.jpg",
    "summary": "巴黎，下午五至七时。美丽的女歌手克莱奥（柯琳妮·玛钱德 Corinne Marchand饰）正游荡在巴黎街头。她一袭黑衣，摘掉假发，面无声色地穿越着内心中的恐惧与焦灼。一切都由一份体检报告引发，她担心自己会如占卜的人所言，患上胃癌。忐忑不安的克莱奥游走在巴黎街头、咖啡厅、或是家里，遇到了各类形形色色的男人，她的情人或是朋友，对他们诉说她生命中的每一个段落，但似乎没人真正理解她。直到最后，她遇见了即将远赴阿尔及利亚战场的年轻士兵。在与他的交谈下，克莱奥开始重新看到了世界，坦然地面对现实。",
    "genres": [
      "Drama",
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 8.6,
    "votes": 8282,
    "runtime": "90 min",
    "releaseDate": "1962-04-11",
    "ratingRank": 195,
    "id": "movie-1294565"
  },
  {
    "sourceId": "1293046",
    "title": "热泪伤痕",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151462240.jpg",
    "summary": "疗养院的老太太薇拉连人带轮椅滚下了楼梯，当场毙命。护理她的保姆桃乐丝（凯西•贝茨 Kathy Bates 饰）手持凶器站在旁边。桃乐丝是唯一的嫌疑人。原来，桃乐丝是薇拉雇佣了40年的女佣，由于她饱受主人的责骂和变态要求，所以这起案件很容易被导向怀恨在心、伺机报复的谋杀。警方一直想把她定罪，判处她20年徒刑。这个案子惊动了桃乐丝远在纽约做记者的女儿莎琳娜（詹妮弗•杰森•李 Jennifer Jason Leigh 饰）。她亲自参与案件的追踪，再度与离散多年的母亲重逢，共同生活了几日。这令她不得不回首阴暗往事，而桃乐丝也总是恍然回忆起女儿小时候的样子。与此同时，一个恶魔般的身影也随之被记忆唤醒。那是她的丈夫，经常对她实施暴力。在忍无可忍之际，她做出了最后的反击……",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 7809,
    "runtime": "132 min",
    "releaseDate": "1996-08-01",
    "ratingRank": 196,
    "id": "movie-1293046"
  },
  {
    "sourceId": "2000741",
    "title": "母亲",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1176372745.jpg",
    "summary": "1940年，日本一方面深陷中国战场，另一方面与英美等国关系日益紧张。居住在东京的野上一家本来过着平静而幸福的生活。只是在这战争年代，幸福是多么奢侈和脆弱的一件事。身为进步作家的一家之长野上滋（坂东三津五郎 饰）因左倾思想被当局以妨害治安维持法的罪名逮捕，不久即受迫害致死。妻子佳代（吉永小百合 饰）强忍悲痛，坚强地抚养一双女儿初子（志田未来 饰）与照美（佐藤未来 饰）。他用自己一生的幸福和无私的母爱，护佑着孩子们健康成长……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 7763,
    "runtime": "133 min",
    "releaseDate": "2008-01-26",
    "ratingRank": 197,
    "id": "movie-2000741"
  },
  {
    "sourceId": "1507134",
    "title": "生活艰难但是快乐",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p718126297.jpg",
    "summary": "国际大都会东京，品川居民区的公寓内居住着五个性格各异的年轻人。渴望交到女朋友的落榜复读生冈野瞬（相叶雅纪 饰）、恶习满满的滑板少年恩田琢磨（二宫和也 饰）、总是遭遇倒霉晦气事件的贵田春彦（大野智 饰）、家中经营和风居酒屋的公子哥二叶廉太郎（松本润 饰）、超级暴走的问题少年鸭川忠（樱井翔 饰）。他们从初中时代就是好朋友，虽然时光流逝和各自不同的家境与人生，让少年们的心中渐渐产生了隔膜，但是曾经的友情依然维系着彼此，更加显得弥足珍贵。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 7044,
    "runtime": "119 min",
    "releaseDate": "2002-10-18",
    "ratingRank": 198,
    "id": "movie-1507134"
  },
  {
    "sourceId": "1440164",
    "title": "大菩萨岭",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1966,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2187846310.jpg",
    "summary": "幕末时期，时局动荡，暗流涌动。甲州武士机龙之助（仲代達矢 饰）剑术绝伦，却拥有一颗邪恶阴暗之心。在一次剑术比赛前夕，对手宇津木文之丞（中谷一郎 饰）的妻子阿滨（新珠三千代 饰）恳求他败给丈夫，甚至不惜委身于他。然而在次日的对决中，龙之助仍然以绝对优势杀死文之丞。在此之后 ，他和被休的阿滨离开甲州，浪迹江湖。两年后，他以杀手身份加入新选组，替幕府斩杀反抗义士。在此期间，文之丞弟弟兵马（加山雄三 饰）也来至江户，并拜入剑豪岛田虎之助（三船敏郎 饰）的门下，等待为兄长报仇的良机。宿命的相逢无可避免……",
    "genres": [
      "Drama",
      "Action"
    ],
    "originalGenres": [
      "剧情",
      "动作"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 6843,
    "runtime": "120 min",
    "releaseDate": "1966-02-25",
    "ratingRank": 199,
    "id": "movie-1440164"
  },
  {
    "sourceId": "1295070",
    "title": "布朗克斯的故事",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1413550329.jpg",
    "summary": "1960年代，纽约意大利人集结的布朗克斯区。黑帮老大辛尼（查兹·帕尔明特瑞 Chazz Palminteri饰）是当地赫赫有名的帮会人物。在一宗凶杀案现场，九岁的男孩安奴（弗朗西斯·卡普拉 Francis Capra饰）目睹了这一切。为了街区的名誉，安奴拒绝供出凶手就是辛尼，此事促使他俩展开一段俨如父子般的忘年友情。然而安奴的父亲罗兰逊（罗伯特·德尼罗 Robert De Niro饰）对此却并不赞成，唯恐儿子误入歧途。八年后，十七岁的安奴（李洛·布兰卡托 Lillo Brancato饰）已经成长为一名英俊少年。辛尼的势力正在逐渐扩大，安奴对辛尼愈发崇拜，对黑帮生活也更加向往。诚实正直的罗兰逊对儿子的忧虑越来越重。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 5437,
    "runtime": "121 min",
    "releaseDate": "1993-09-14",
    "ratingRank": 200,
    "id": "movie-1295070"
  },
  {
    "sourceId": "1292516",
    "title": "碧血金沙",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1948,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1729769888.jpg",
    "summary": "弗雷德（亨弗莱·鲍嘉 Humphrey Bogart 饰）和鲍勃（提姆·霍尔特 Tim Holt 饰）是两名穷困潦倒的流浪汉，一日，在酒吧中，他们从精明智慧的霍华德（沃尔特·休斯顿 Walter Huston 饰）口中听闻了有关金矿的消息，走投无路的两人打起了淘金的主意，他们谎称是猎人，驻扎在了山上。经历了种种苦难的挫折，幸运的三人找到了金矿。然而，随着金砂数量的增加，原本相互信任的三人之间出现了裂痕。",
    "genres": [
      "Drama",
      "Action",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 5107,
    "runtime": "126 min",
    "releaseDate": "1948-01-24",
    "ratingRank": 201,
    "id": "movie-1292516"
  },
  {
    "sourceId": "1401900",
    "title": "蜂巢幽灵",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1973,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p680070993.jpg",
    "summary": "1940年，一辆放映车驶入卡斯蒂利亚高原的某个村子，孩子们马上围拢了上去。放映的电影是《科学怪人》，座位上有女童安娜（Ana Torrent 饰）和她的小姐姐伊莎贝尔（Isabel Tellería 饰）。放映室外，父亲痴迷于自己的新蜂房，他掏出怀表，结束了今天的工作。母亲正在写一封信，尽管对方收到信的可能渺茫，母亲在信纸上倾诉思念之情，在火车站将信投递。安娜久久不能忘记科学怪人，伊莎贝尔向她虚构出荒原上一座孤立的砖房是怪人的出没之地。安娜惊慌逃开，但从此不时返回砖房查看。伊莎贝尔似乎洞悉了某种秘密，她装死、跳过火堆，诸如此类。不久一名受伤军人躲进砖房被安娜发现，当晚军人中枪死亡。父亲来到村公所拿走军人的物品，包括一只怀表。安娜独自一个跑出村子，夜里她在湖边遇到了科学怪人……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.6,
    "votes": 4837,
    "runtime": "97 min",
    "releaseDate": "",
    "ratingRank": 202,
    "id": "movie-1401900"
  },
  {
    "sourceId": "1294580",
    "title": "其后",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1859987414.jpg",
    "summary": "20世纪初的日本，毕业于东京帝国大学的长井代助（松田优作 饰）家境优渥，全然不曾为金钱烦恼。他终日周游玩乐，过着悠闲自在的高等无业游民的生活。与之相对，和长井相交多年的好友平冈常次郎（小林薰 饰）生活拮据，妻子三千代（藤谷美和子 饰）孕期患上心脏病，未出生的孩子更不幸夭折。承受巨大压力的平冈破罐破摔，流连烟花场所。生计日益紧迫的同时，夫妻情分名存实亡。三千代是长井、平冈大学时代亡友菅沼（风间杜夫 饰）的妹妹，此去经年，始终未婚的长井依然对三千代持有深深的爱慕，他同情对方的境遇，但碍于道德的束缚只能将炽烈的情感深锁心底。深爱无缘，百千心结何处搁置……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 4685,
    "runtime": "130 min",
    "releaseDate": "1985-11-09",
    "ratingRank": 203,
    "id": "movie-1294580"
  },
  {
    "sourceId": "1296679",
    "title": "红胡子",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1965,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2215875666.jpg",
    "summary": "刚毕业的医学院学生保本（加山雄三 Yuzo Kayama 饰），在父亲的介绍下，来到穷乡僻壤的小石川诊所实习。他的老师是一位被称作红胡子（三船敏郎 Toshiro Mifune 饰）的古怪医师。起初，向往长崎的保本对这个贫民窟厌恶之极，并迁怒于红胡子，觉得自己受骗上当，无用武之地。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 4682,
    "runtime": "185 min",
    "releaseDate": "1965-04-03",
    "ratingRank": 204,
    "id": "movie-1296679"
  },
  {
    "sourceId": "1458900",
    "title": "哆啦A梦：大雄与云之国",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1992,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520701519.jpg",
    "summary": "大雄相信天空上有云之国，遭到好友们的嘲笑。哆啦A梦用未来的神奇工具和大雄共同打造属于自己的云之国，建好之后，好友们被邀请上来，大家度过一段快乐的时光。",
    "genres": [
      "Sci-Fi",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 4496,
    "runtime": "97 min",
    "releaseDate": "1992-03-07",
    "ratingRank": 205,
    "id": "movie-1458900"
  },
  {
    "sourceId": "1300955",
    "title": "同流者",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1970,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p578516223.jpg",
    "summary": "马塞洛（让-路易斯·特林提格南特 Jean-Louis Trintignant 饰）是意大利法西斯组织的一员，他的新任务是到巴黎除掉他以前大学时候的教授 卢克·夸德里（Enzo Tarascio 饰），一个反法西斯组织的成员。于是马塞洛以和未婚妻朱利亚（斯蒂芬尼娅·桑德雷莉 Stefania Sandrelli 饰）到巴黎度蜜月为借口，到教授家拜访。和马塞洛一起执行任务的还有伪装成他的司机的曼加涅略（Gastone Moschin 饰)。在教授家，马塞洛被教授的年轻妻子安娜（多米尼克·桑达 Dominique Sanda 饰）深深吸引。马塞洛的同伴曼加涅略不断催促他除掉教授，然而他迟迟不愿下手。曼加涅略得知了教授和他的妻子将到野外去，于是准备独自进行刺杀任务......",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "意大利",
      "法国",
      "西德"
    ],
    "rating": 8.6,
    "votes": 4109,
    "runtime": "108 min",
    "releaseDate": "1970-07-01",
    "ratingRank": 206,
    "id": "movie-1300955"
  },
  {
    "sourceId": "1303557",
    "title": "维莉蒂安娜",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1961,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1531025433.jpg",
    "summary": "长年在修女会中修行的维莉蒂安娜（Silvia Pinal 饰）即将立誓归宗，嬷嬷建议她在仪式前探望资助人叔叔海麦，维莉蒂安娜前往叔叔在乡间的大宅，岂料海麦因她酷似自己妻子而动情，维莉蒂安娜短暂停留后即将返回修女会，在动身的前夜，海麦央求她穿上了妻子的婚纱并向维莉蒂安娜求婚，被拒后指使女仆用药麻醉了她。第二天海麦自杀身亡，维莉蒂安娜返回大宅决定留下，海麦的私生子何塞（Francisco Rabal 饰）携女友也来到大宅，马上雇人重整荒芜田地，同时维莉蒂安娜邀请一些流浪汉与病乞共享大宅，维莉蒂安娜照顾他们的生活，带领他们虔诚祷告，试图为他们提供神的帮助。何塞的女友大感失落宣布分手，趁维莉蒂安娜与何塞进城的功夫，病乞和流浪汉们登堂入室，将大宅搞得一团混乱。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙",
      "墨西哥"
    ],
    "rating": 8.6,
    "votes": 3911,
    "runtime": "91 min",
    "releaseDate": "1961-08-28",
    "ratingRank": 207,
    "id": "movie-1303557"
  },
  {
    "sourceId": "1950233",
    "title": "飞出个未来大电影1：班德大行动",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2191175944.jpg",
    "summary": "本片改编自著名搞笑科幻动画电视剧《飞出个未来》，讲述了星际快递公司被坏蛋接管，我们可怜的机器人班德落入了歹徒的魔掌，他被迫去帮助他们完成阴谋计划。",
    "genres": [
      "Comedy",
      "Romance",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 3711,
    "runtime": "88 min",
    "releaseDate": "2007-11-27",
    "ratingRank": 208,
    "id": "movie-1950233"
  },
  {
    "sourceId": "3742981",
    "title": "雨中的请求",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2364688392.jpg",
    "summary": "曾经，大魔术师马斯卡雷（里提克·罗申 Hrithik Roshan 饰）一次又一次的用自己高超的技术和精彩的表演震惊世人，不幸的是，一次表演中的失误让他不得不面临终身瘫痪的悲惨命运。在护士索菲亚（艾西瓦娅·雷 Aishwarya Rai Bachchan 饰）的精心照料 下，马斯卡雷的“瘫痪生活”过的还算不错，与此同时，只能躺在床上的他依然在努力用自己的智慧和语言为魔术事业做着贡献。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.6,
    "votes": 3523,
    "runtime": "126 min",
    "releaseDate": "2010-11-19",
    "ratingRank": 209,
    "id": "movie-3742981"
  },
  {
    "sourceId": "1296097",
    "title": "风烛泪",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1952,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204988530.jpg",
    "summary": "50年代的意大利，战争带来的恶劣余韵还在持续着，面对强大的生存压力和微薄的养老金，曾经为政府辛辛苦苦工作几十年的退休者们终于呐喊着走上了街头，但很快便被警察驱散了。在散开的人群中，温贝尔托（卡罗·巴蒂斯特 Carlo Battisti 饰）显得格外的凄凉，他身无分文又生了病，即将要因为付不起房租而被赶出住了二十年的老宅，而在他身边一直陪伴着他的，却只有他的爱犬。女房东凶神恶煞，但她的女佣玛利亚（玛丽娅-皮埃·卡西里奥 Maria-Pia Casilio 饰）却对温贝尔托格外关照。但是玛利亚的力量微薄，不足以保全温贝尔托的住处，走投无路的温贝尔托只得牵着爱犬流落街头。他想乞讨，但放不下尊严；他想自杀，但舍弃不了人生；他想丢掉他的爱犬让它另寻主人，但爱犬的不离不弃唤醒了他心中的感动的希望。影片的最后，一人一狗渐渐远去的画面在另一个层面控诉了生活的残酷和无奈。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.6,
    "votes": 3402,
    "runtime": "89 min",
    "releaseDate": "1952-01-20",
    "ratingRank": 210,
    "id": "movie-1296097"
  },
  {
    "sourceId": "1466022",
    "title": "铁扇公主",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1941,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2176923325.jpg",
    "summary": "唐僧师徒四人赶奔西天，渐觉热气蒸人。问及乡里，才知此地唤做火焰山，无春无秋，四季皆热，山周围八百里火焰。受阻于火焰山，孙悟空、猪八戒到翠屏山芭蕉洞找铁扇公主公主借灭火的芭蕉扇，铁扇公主不肯借予。孙悟空变只小虫钻进铁扇公主腹内大闹，结果拿到手的是一把假扇子。猪八戒又化作牛魔王的模样从铁扇公主手中骗到真扇。牛魔王这时正在跟狐狸精寻欢作乐，听到扇子被抢走了，赶紧回到家中，接着又化作孙悟空的模样从猪八戒手中骗回扇子。影片结尾，悟空和八戒，以及乡亲们联手打败了牛魔王，终得宝扇，扇灭火焰山的烈火，登上取经的路程。影片中的牛魔王其实“日本鬼子”的影射，正值抗战时期，万氏兄弟想借此片鼓舞全国人民的抗战热情。",
    "genres": [
      "Drama",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.6,
    "votes": 3259,
    "runtime": "72 min",
    "releaseDate": "1941-01-01",
    "ratingRank": 211,
    "id": "movie-1466022"
  },
  {
    "sourceId": "1293695",
    "title": "鸳梦重温",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1942,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2203652656.jpg",
    "summary": "在第一次世界大战中，查理斯（罗纳德·考尔曼 Ronald Colman 饰）受伤并失去了记忆，几十年的人生突然变成了一张白纸，带着迷惘和绝望的心情，他与舞女波拉（葛丽亚·嘉逊 Greer Garson 饰）邂逅了。在得知了查理斯的情况之后，波拉果断的担负起了照顾他起居的职责，在波拉的精心照料下，查理斯渐渐的康复起来。尽管记忆并没有恢复，但重拾了阅读和写作能力的他成为了一名作家。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 3163,
    "runtime": "126 min",
    "releaseDate": "1942-12-17",
    "ratingRank": 212,
    "id": "movie-1293695"
  },
  {
    "sourceId": "1305235",
    "title": "浮士德",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1926,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1649361608.jpg",
    "summary": "上帝和魔鬼梅菲斯特（爱米尔·强宁斯 Emil Jannings 饰）以浮士德的灵魂为赌注打赌，梅菲斯特坚称饱读诗书满腹经纶的大学士浮士德（格斯塔·埃克曼 Gösta Ekman 饰）会在欲望的引诱之下日渐堕落，而上帝则相信浮士德的理性终究会打败欲望。",
    "genres": [
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.6,
    "votes": 2998,
    "runtime": "85 min",
    "releaseDate": "1926-10-14",
    "ratingRank": 213,
    "id": "movie-1305235"
  },
  {
    "sourceId": "1298250",
    "title": "母亲的城堡",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1990,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532136348.jpg",
    "summary": "马赛尔童年的时候 ，在暑假和家人来普罗旺斯的小山度假。在这个风景秀丽的地方，马塞尔和他的小伙伴李力度过了一段难忘的时光。然而回到日常生活中，马塞尔却要为了代表学校参加奖学金考试而不得不着手准备枯燥的复习，而回味那些在山区度过的无忧无虑的生活回忆成了他平日里唯一的乐趣。令人惊喜的是，在母亲的不断计划于协调下，马塞尔一家开始了由每个假期拓展到每个周末去普罗旺斯山区度假的生活，马歇尔有了更多在乡村田野间的奇遇和故事。但是每周来回四个多小时的步程让全家人有些吃不消，这时候他们遇上了马塞尔父亲当运河监工的学生，他利用职务便利给了马塞尔一家一把钥匙让他们沿运河行走，使他们的路途缩短为了一个小时。虽然这种方式为这一家人提供了便利，却让自尊自重的父亲过起了自责和胆战的生活…",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Biography",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "传记",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.6,
    "votes": 2911,
    "runtime": "98 min",
    "releaseDate": "1990-10-26",
    "ratingRank": 214,
    "id": "movie-1298250"
  },
  {
    "sourceId": "1298784",
    "title": "征服者佩尔",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2383383703.jpg",
    "summary": "故事发生在十九世纪末北欧，混乱的局势衰颓的经济令人民们陷入了民不聊生的境地。农民拉斯卡森（马克斯·冯·西多 Max von Sydow 饰）带着儿子佩尔（贝利·赫维内加拉德 Pelle Hvenegaard 饰）来到丹麦，希望能够在这里依靠自己的双手挣得更体面的生活。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "丹麦",
      "瑞典"
    ],
    "rating": 8.6,
    "votes": 2819,
    "runtime": "157 min",
    "releaseDate": "1987-12-25",
    "ratingRank": 215,
    "id": "movie-1298784"
  },
  {
    "sourceId": "1797247",
    "title": "木更津猫眼 日本篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166334936.jpg",
    "summary": "21岁的原高中棒球队队员田浏公平（冈田准一饰）每天都在经营理发店的父亲那儿帮忙。某日，在健康诊断书中突然被医生宣告他的寿命其实仅剩半年，万念俱灰的他于是想趁死前使坏一番。他找到了过去的棒球队队员，一拍即合的他们马上组成了怪盗集团“CatsEye”（猫眼）。不料,一行人在随后的行盗日子里不但没捞到半毛钱,反而糊里糊涂的成了侠盗,无意间帮助了许多人。",
    "genres": [
      "Drama",
      "Comedy",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "运动"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 2648,
    "runtime": "123 min",
    "releaseDate": "2003-11-01",
    "ratingRank": 216,
    "id": "movie-1797247"
  },
  {
    "sourceId": "1300034",
    "title": "德尔苏·乌扎拉",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1975,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2206328338.jpg",
    "summary": "在风雪交加的寒冷高地大兴安岭，一群俄国探险科考队员在队长亚森尼耶夫（虞瑞•索罗民Yuri Solomin 饰）的带领下进驻这里，寻找附近的资源矿藏。这些远离家乡的队员，每到夜晚的时候，都会唱起思乡的歌曲表达各自的离愁别绪。正在此时，他们聆听到一阵悠扬的旋律，后来才发现有个当地的蒙古老猎手德尔苏•乌扎（马克西姆•门祖克 Maksim Munzuk 饰）拉常年驻扎此地。为了能够在陌生的地方不被野兽吞噬不走弯路，队长决定雇佣德尔苏•乌扎拉为向导，指引军队前行，后者欣然应允，并且帮助他们躲过了老虎的血盆大口，穿越了活埋死人的沙丘，在与自然的对抗与相处中，德尔苏•乌扎拉和科考队员慢慢地建立了跨文化的深厚情谊，他们对自然的认识也逐渐加深……",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "苏联",
      "日本"
    ],
    "rating": 8.6,
    "votes": 2615,
    "runtime": "144 min",
    "releaseDate": "1975-08-02",
    "ratingRank": 217,
    "id": "movie-1300034"
  },
  {
    "sourceId": "1864784",
    "title": "猫和老鼠：魔法戒指",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561801844.jpg",
    "summary": "魔法师让汤姆看管的戒指，被杰瑞当王冠戴在头上，拿不下来了……",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 2588,
    "runtime": "62 min",
    "releaseDate": "2002-03-12",
    "ratingRank": 218,
    "id": "movie-1864784"
  },
  {
    "sourceId": "1296067",
    "title": "影子大地",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p978240555.jpg",
    "summary": "故事发生在1952年的英国，一次偶然中，作家杰克（安东尼·霍普金斯 Anthony Hopkins 饰）结识了名为乔伊（德博拉·温格 Debra Winger 饰）的女子和她的儿子道格拉斯（约瑟夫·梅泽罗 Joseph Mazzello 饰），很快，三人便成为了好友。",
    "genres": [
      "Drama",
      "Romance",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "传记"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.6,
    "votes": 2110,
    "runtime": "131 min",
    "releaseDate": "1993-12-25",
    "ratingRank": 219,
    "id": "movie-1296067"
  },
  {
    "sourceId": "1304763",
    "title": "白朗宁版本",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1951,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1944228176.jpg",
    "summary": "哈里斯（迈克尔·雷德格瑞夫 Michael Redgrave 饰）是一位教授古典文学的教师，他温文尔雅极具气质，一生都勤勤恳恳地工作做人。然而，某一日，他竟然遭到了解雇，美其名曰“提前退休”，而他的学生们竟然完全不以为意。与此同时，哈里斯亦发现，自己毕生研究的古典文学，如今毫无价值，而自己则变成了一个无人问津的老古董。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.6,
    "votes": 2035,
    "runtime": "90 min",
    "releaseDate": "1951-03-13",
    "ratingRank": 220,
    "id": "movie-1304763"
  },
  {
    "sourceId": "1293266",
    "title": "黑骏马",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2270593566.jpg",
    "summary": "“黑骏马”是一匹漂亮的优种黑马，从小生活在贵族人家，受过良好的训练，性格温顺、善良，而且聪明、机智，主人非常喜欢他。但是好景不长，主人家里有了变故，黑骏马不得不被卖掉。他一连被卖过多次，接触过各种人：有喝多了酒就拿马撒气的醉汉，有动辄抽鞭子的出租马车车夫，有不把动物当回事的野蛮人，也有把动物当成朋友的好人家，尝尽了人间的甜酸苦辣。最后它侥幸有了一个好的归宿。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 8.6,
    "votes": 1995,
    "runtime": "88 min",
    "releaseDate": "1994-07-29",
    "ratingRank": 221,
    "id": "movie-1293266"
  },
  {
    "sourceId": "1296286",
    "title": "遗失的世界",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183434145.jpg",
    "summary": "一本记录了神秘信息的笔记本暴露在了公众的视线之中，笔记本中记载的是在现实世界中不可能发生的奇幻经历。为了找到真相，乔治教授（彼得·麦考利 Peter McCauley 饰）组建了一支由各行各业精英所组成的强悍探险队伍，深入笔记本中那片不存在于地图之中的遗失的世界，会有怎样惊险刺激的经历等待着他们呢？",
    "genres": [
      "Action",
      "Sci-Fi",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1931,
    "runtime": "92 min",
    "releaseDate": "1999-04-03",
    "ratingRank": 222,
    "id": "movie-1296286"
  },
  {
    "sourceId": "4831217",
    "title": "钢之炼金术师：失明的炼金术师",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190441795.jpg",
    "summary": "悲伤的回忆，善意的谎言，但是，大家都无法得到拯救。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1920,
    "runtime": "16 min",
    "releaseDate": "2010-01-01",
    "ratingRank": 223,
    "id": "movie-4831217"
  },
  {
    "sourceId": "1293620",
    "title": "不设限通缉",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1702441438.jpg",
    "summary": "故事发生在六十年代末期，安妮（克里斯汀·拉蒂 Christine Lahti 饰）和亚瑟（贾德·赫希 Judd Hirsch 饰）是反对越战的激进分子，为了坚持他们的主张，两人表现出了很多过激行为，最终，他们因为在政府实验室里放置炸弹而遭到了当局的通缉和追捕，从此，安妮和亚瑟过起了东躲西藏的流离生活。",
    "genres": [
      "Drama",
      "Music",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "音乐",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1890,
    "runtime": "116 min",
    "releaseDate": "1988-09-09",
    "ratingRank": 224,
    "id": "movie-1293620"
  },
  {
    "sourceId": "1298317",
    "title": "叛国作家",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2371956168.jpg",
    "summary": "故事发生在一间狭小的房间里，一位儿童文学作家（玛德琳·斯托 Madeleine Stowe 饰）正在被一位残暴的秘密警察（艾伦·瑞克曼 Alan Rickman 饰）审讯。原因就是，她涉嫌在她出版的儿童读物中传达她的政治信息。然而就是这样一个莫须有的罪名，把作家折磨得生不如死，而那位秘密警察丝毫没有停止的意思。他唯一要做的就是折磨她，直到她承认自己的这个罪行。",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1756,
    "runtime": "94 min",
    "releaseDate": "1991-03-06",
    "ratingRank": 225,
    "id": "movie-1298317"
  },
  {
    "sourceId": "1295401",
    "title": "小猫的故事",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1880458596.jpg",
    "summary": "在北海道一个人工的动物王国里，住着一只名叫米罗的调皮虎纹小猫，他有一个青梅竹马的好朋友——名叫奥提斯的忠厚老实的灰色哈巴狗。两个小家伙每天在一块跳跃玩闹，全无忧愁。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1667,
    "runtime": "90 min",
    "releaseDate": "1986-08-14",
    "ratingRank": 226,
    "id": "movie-1295401"
  },
  {
    "sourceId": "1477924",
    "title": "银河铁道999",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1979,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p551591781.jpg",
    "summary": "未来世界，人类文明高度发达，智能机器人大量涌现，已在日常生活中占据重要的位置，而且人类为了获得永恒的生命，也尝试将自己改造为机器人。同时，一列名为“银河铁道999号”的宇宙列车担负起连接地球和宇宙文明的使命，星系从此不再遥远。",
    "genres": [
      "Sci-Fi",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1526,
    "runtime": "128 min",
    "releaseDate": "1979-08-04",
    "ratingRank": 227,
    "id": "movie-1477924"
  },
  {
    "sourceId": "1298340",
    "title": "小逃亡者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1953,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2175669711.jpg",
    "summary": "由于母亲要出远门，照顾7岁的弟弟乔伊（Richie Andrusco 饰）的职责便落到了哥哥雷利（Richard Brewster 饰）的肩上，对此感到十分厌烦的雷利想出了一个不仅可以博朋友们一笑，并且可以解自己心头之气的点子。在朋友们的帮助下，雷利通过装死让乔伊误以为是自己杀死了哥哥，没想到，个性耿直的乔伊居然在惊恐之下孤身踏上了逃亡的旅程。",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1481,
    "runtime": "80 min",
    "releaseDate": "1953-10-06",
    "ratingRank": 228,
    "id": "movie-1298340"
  },
  {
    "sourceId": "1305533",
    "title": "德黑兰43年",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1981,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2431191594.jpg",
    "summary": "《德黑兰43年》是一部二战题材的影片，1980年由俄法瑞(士)三国合拍，片中几乎运用了所有的电影语言，堪称经典中的经典，1981年获莫斯科国际电影节金奖。导演是前苏联的阿·阿洛夫和弗·纳鸟莫夫，法国影星阿兰德隆领衔主演。1988年由央视译制并播放过该片。",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "战争"
    ],
    "originalRegions": [
      "苏联",
      "法国",
      "瑞士",
      "西班牙"
    ],
    "rating": 8.6,
    "votes": 1424,
    "runtime": "150 min",
    "releaseDate": "1981-07-08",
    "ratingRank": 229,
    "id": "movie-1305533"
  },
  {
    "sourceId": "2029103",
    "title": "了凡四训",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523046767.jpg",
    "summary": "了凡先生在慈云寺遇着一位老人，相貌非凡，留着长须，潇洒出尘。这位老人用《皇极数》为我推算，对我过去的遭遇，就是连很小的事，也都推算出来了。",
    "genres": [
      "Drama",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "古装"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.6,
    "votes": 1410,
    "runtime": "165 min",
    "releaseDate": "",
    "ratingRank": 230,
    "id": "movie-2029103"
  },
  {
    "sourceId": "1302814",
    "title": "阿赫迈德王子历险记",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1926,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2370401336.jpg",
    "summary": "《阿基米德王子历险记》改编于《一千零一夜》。作品记叙了这样一个故事：邪恶的巫师献给哈里发一匹魔法飞马，想以此换取和哈里发的女儿迪娜纱德的婚姻。阿基米德王子厌恶这笔交易，劝说父王拒绝了巫师。巫师为了报复王子，念咒语欺骗王子坐上飞马，飞马腾空飞去，开始了一段漫长的冒险之旅。旅途中，王子一路消灾解难，来到被施了魔法的瓦克瓦克岛，爱上了岛上的公主帕丽•巴奴，经过了一段曲折，王子终于赢得了公主的心，带着公主回到了父王的宫殿。",
    "genres": [
      "Romance",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "爱情",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.6,
    "votes": 1371,
    "runtime": "65 min",
    "releaseDate": "",
    "ratingRank": 231,
    "id": "movie-1302814"
  },
  {
    "sourceId": "1937998",
    "title": "阿弥陀堂讯息",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2393018482.jpg",
    "summary": "畅销小说家孝夫和在最先进的医疗机关工作的美智子夫妻，因为妻子得了焦虑症，离开东京，搬到丈夫的故乡，信州的一个山村。在那里，他们遇到了丈夫的患了癌症的恩师，因为疾病而不能说话的小姑娘小百合，还有在阿弥陀堂生活的96岁高龄的老婆婆等人，通过和这些人温情的交流，夫妻俩又找到了活着的喜悦...。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1332,
    "runtime": "127 min",
    "releaseDate": "2002-10-05",
    "ratingRank": 232,
    "id": "movie-1937998"
  },
  {
    "sourceId": "1308721",
    "title": "滑铁卢战役",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1970,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2369674069.jpg",
    "summary": "1815年6月18日早晨，惠灵顿公爵所指挥的部队，聚集在比利时一个名为滑铁卢的小镇营地里。连绵不断的降雨带来了痛苦、潮湿和寒冷给士兵。但是这些士兵将会感谢这场从前夜就开始下的大雨，因为这场夏日暴雨不仅挽救了很多人的生命，同时，也即将改写了整个欧洲的历史，就是在这儿──滑铁卢战场。",
    "genres": [
      "Drama",
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "意大利",
      "苏联"
    ],
    "rating": 8.6,
    "votes": 1247,
    "runtime": "134 min",
    "releaseDate": "1970-10-26",
    "ratingRank": 233,
    "id": "movie-1308721"
  },
  {
    "sourceId": "1300694",
    "title": "小熊维尼:寻找克里斯多夫罗宾",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513532959.jpg",
    "summary": "一转眼，克里斯托弗（Brady Bluhm 配音）就到了上学的年龄，要去学校报到了，这也就意味着，他必须离开森林，离开森林里的朋友们了。克里斯托弗写了一封信给动物们作为临别留言，然而，动物们却误解了信上的内容。它们以为克里斯托弗遇到了麻烦急需帮助，一拍即合之下，动物们踏上了营救克里斯托弗的旅途。",
    "genres": [
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1201,
    "runtime": "76 min",
    "releaseDate": "1997-08-05",
    "ratingRank": 234,
    "id": "movie-1300694"
  },
  {
    "sourceId": "1428377",
    "title": "人情纸风船",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1937,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151802423.jpg",
    "summary": "本片是山中貞雄的遺作，也是他的“時代劇的庶民電影”的代表作之一。他在片中吸取了美國電影和法國電影的影響，並受到摯友兼老師小津安二郎的“小庶民電影 ”美學影響，將歷史上江戶時代的小人物形像注入現代庶民的語言、性格、行止、靈魂，成就了一部難得的社會現實主義的佳作。故事發生於十八世紀德川幕府時代，以悲涼調子訴說德川幕府時期低下層的生活，開頭與結尾都是自殺場景，映照出舊時日本社會草根階層的悲哀。另外，山中的剪輯流暢自如，視覺風格鋒如日本繪畫，演員表演也很自然。此片公認為山中最好的作品，也是他僅存的三部電影之一。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1140,
    "runtime": "83 min",
    "releaseDate": "1937-08-25",
    "ratingRank": 235,
    "id": "movie-1428377"
  },
  {
    "sourceId": "4894066",
    "title": "最游记外传OVA第二卷：散华之章",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p530323032.jpg",
    "summary": "【作品情报】",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.6,
    "votes": 1128,
    "runtime": "30 min",
    "releaseDate": "2011-06-24",
    "ratingRank": 236,
    "id": "movie-4894066"
  },
  {
    "sourceId": "1299992",
    "title": "飞狼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183433841.jpg",
    "summary": "霍克（冉-迈克尔·文森特 Jan-Michael Vincent 饰）是一名极为优秀的飞行员，有着一段悲惨的过往，当所有他爱着和信赖着的人都被迫离他而去后，霍克终于找到了他最坚实的伙伴——战斗机飞狼，霍克是唯一能够驾驭和驯服这头狂暴“野兽”的人。然而，飞狼的制造者墨菲特竟然带着飞狼投靠了地方，无奈之下，政府找到了霍克，希望霍克能够协助他们夺回飞狼。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 1127,
    "runtime": "85 min",
    "releaseDate": "1984-01-22",
    "ratingRank": 237,
    "id": "movie-1299992"
  },
  {
    "sourceId": "1292745",
    "title": "碧波女贼",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517837075.jpg",
    "summary": "四名女子在狱中组了一个乐团，是她们用音乐摆脱监狱的桎梏，在一次前往警方舞会中表演的途中，她们企图逃脱，并且摇滚传达她们心灵深处最深的呐喊，在警员的严密缉捕下，班迪斯乐团一次又一次地逃过警方的围捕一路逃亡、演唱，很快就声名大噪，然而支持者的拥护，却不能换来自由，就在穷途末路之际，各自逃亡的她们又再度聚合，只为一次完美的演唱，在整个逃亡过程中，友谊的彰显，人性的考验，历历在目，全篇故事摇滚有余，亦为公路电影老调新唱。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "德国",
      "法国"
    ],
    "rating": 8.6,
    "votes": 1047,
    "runtime": "110 min",
    "releaseDate": "1997-07-03",
    "ratingRank": 238,
    "id": "movie-1292745"
  },
  {
    "sourceId": "1307601",
    "title": "云",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510000901.jpg",
    "summary": "阿根廷首都布宜诺斯艾利斯的镜子剧院因财政拮据面临即将被拆迁的命运。剧院经理马克斯（伊德瓦多·帕夫劳夫斯基 Eduardo Pavlovsky 饰）和剧作家安立加（弗兰克林·卡西多 Franklin Caicedo 饰）及众演员为剧院的命运奔走，却发现处处碰壁。从巴西里约热内卢来到剧院的美女弗洛（安吉拉·科雷亚 Ângela Correa 饰）为了生计不得不去电视台节目跳舞，甚至被迫去进行援助交际；热爱戏剧的青年卡奇多（卡洛斯·法勒斯 Carlos Perez 饰）靠给人遛狗谋生；探戈歌手卢卡斯（路易斯·卡迪 Luis Cardei 饰）灰心失望，自杀未遂被送进了精神病院……一次又一次的打击伴随着连绵不断下了1700多天的雨，厚厚的云层遮挡阳光，剧院的命运生死未卜。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "阿根廷",
      "法国"
    ],
    "rating": 8.6,
    "votes": 1003,
    "runtime": "113 min",
    "releaseDate": "1998-09-03",
    "ratingRank": 239,
    "id": "movie-1307601"
  },
  {
    "sourceId": "1760622",
    "title": "香水",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p470006658.jpg",
    "summary": "十八世纪，让-马普蒂斯特•格雷诺耶（本•韦肖 Ben Whishaw 饰）出生在巴黎最肮脏、最恶臭不堪的地方——鱼市场上。格雷诺耶天生对气味有着惊人的天赋：无论恶臭还芳香，他都一一记住，并能轻易分辨各种气味。",
    "genres": [
      "Drama",
      "Crime",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "犯罪",
      "奇幻"
    ],
    "originalRegions": [
      "德国",
      "法国",
      "西班牙",
      "美国"
    ],
    "rating": 8.5,
    "votes": 366946,
    "runtime": "147 min",
    "releaseDate": "2006-09-07",
    "ratingRank": 240,
    "id": "movie-1760622"
  },
  {
    "sourceId": "2213597",
    "title": "朗读者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1140984198.jpg",
    "summary": "15岁的少年米夏·伯格（大卫·克劳斯 David Kross 饰）偶遇36岁的中年神秘女列车售票员汉娜（凯特·温丝莱特 Kate Winslet 饰），后来两个发展出一段秘密的情人关系。汉娜最喜欢躺在米夏怀里听米夏为他读书，她总是沉浸在那朗朗的读书声中。年轻的米夏沉溺于这种关系不能自拔的同时，却发现他自己根本不了解汉娜。忽然有一天，这个神秘女人不告而别，米夏在短暂的迷惑和悲伤之后，开始了新的生活。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.5,
    "votes": 336129,
    "runtime": "124 min",
    "releaseDate": "2008-12-10",
    "ratingRank": 241,
    "id": "movie-2213597"
  },
  {
    "sourceId": "1303394",
    "title": "青蛇",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584021784.jpg",
    "summary": "南宋是一个人妖难分的时期，法海和尚（赵文卓 饰）到处收服妖精，也扰乱了在西湖底修炼的白青二蛇。青（张曼玉 饰）曾获白（王祖贤 饰）相救，二者便以姐妹相称。姐妹俩受惑佯装成人生活在民间，白更嫁于老实书生许仙，青也同时看上了许仙，便常常以媚态勾引许仙，无奈许仙只深爱白一个。白开设了药店，以为可以自此过上安定的生活，可许仙却受不了青的百般挑逗，更发现了青白二蛇的真实身份，可他却不舍得离开家中的天姿国色。法海得知了青白二蛇的下落，更抓走了许仙。原来白为了爱情放弃修成正果，更怀有了身孕。为了救回丈夫，二蛇与法海展开了搏斗……",
    "genres": [
      "Drama",
      "Romance",
      "Fantasy",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "奇幻",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 308421,
    "runtime": "99 min",
    "releaseDate": "1993-11-04",
    "ratingRank": 242,
    "id": "movie-1303394"
  },
  {
    "sourceId": "1298898",
    "title": "暗战",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2001994907.jpg",
    "summary": "大盗张彼德（刘德华）得知生命只剩四周时，决定为死于黑道老大（李子雄）之手的父亲报仇，为此他精心设计打劫了黑道老大的运输公司隔壁的财务公司，并挟持人质引来因得罪上级被转调文职的高级谈判专家何尚志（刘青云）。",
    "genres": [
      "Drama",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 151297,
    "runtime": "93 min",
    "releaseDate": "1999-09-23",
    "ratingRank": 243,
    "id": "movie-1298898"
  },
  {
    "sourceId": "3552028",
    "title": "弱点",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181613001.jpg",
    "summary": "黑人男孩奥赫（昆东•亚伦 Quinton Aaron 饰）自幼父母离异，无家可归。不过，木讷的他却因为极强的身体条件和运动天赋，幸运地进入了一家孤儿院。虽然，他科科零分，但是一些细节却让他显得与众不同。一次排球比赛后，他主动收拾垃圾的行为，引起了陶西一家的注意。于是，陶西太 太（桑德拉•布洛克 Sandra Bullock 饰）决定收养奥赫，并把他培养成橄榄球选手。陶西太太让他感受到了家庭的温暖。同时，陶西的儿子还帮助奥赫训练，使他很快地融入了橄榄球队的生活，不断激发运动的潜能。终于，在一次比赛中，他因出色的表现崭露头角，开始获得了球探的关注，随之带来了一系列的甜蜜和麻烦……",
    "genres": [
      "Drama",
      "Family",
      "Biography",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "传记",
      "运动"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 140751,
    "runtime": "129 min",
    "releaseDate": "2009-11-20",
    "ratingRank": 244,
    "id": "movie-3552028"
  },
  {
    "sourceId": "1293323",
    "title": "大红灯笼高高挂",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1254404823.jpg",
    "summary": "大学刚读半年的颂莲（巩俐）被贪钱的母亲逼迫着嫁进陈家大院，成了老爷的第四房姨太。陈府有老规矩，姨太太们傍晚时分要站在自已的屋子前，等待下人送来的意味被老爷“临幸”的大红灯笼。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港",
      "中国台湾"
    ],
    "rating": 8.5,
    "votes": 136677,
    "runtime": "125 min",
    "releaseDate": "1991-09-10",
    "ratingRank": 245,
    "id": "movie-1293323"
  },
  {
    "sourceId": "1293434",
    "title": "王牌对王牌",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1971419890.jpg",
    "summary": "丹尼（塞缪尔·杰克逊 Samuel L. Jackson 饰）是一名出色的谈判专家，屡立战功。当他的人生顺风顺水时，刹那间的转折让他措手不及。他的搭档发现警局内有人私吞公款，却在打算告诉丹尼实情时惨遭杀害，第一时间赶到现场的丹尼自然最大嫌疑人。当他确信是警局内有人要找他做替死鬼，百口莫辩之际，他铤而走险绑架了内务监察部检察官和其助手等人，想通过与警方的对话为自己洗刷罪名。",
    "genres": [
      "Drama",
      "Action",
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.5,
    "votes": 80404,
    "runtime": "140 min",
    "releaseDate": "1998-07-29",
    "ratingRank": 246,
    "id": "movie-1293434"
  },
  {
    "sourceId": "1293315",
    "title": "阿郎的故事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p763776246.jpg",
    "summary": "阿郎（周润发）年轻时作为出色的赛车手很是放荡不羁，却不妨碍富家女波波（张艾嘉）对其一往情深，波波不顾家人反对同他结婚并怀下身孕后，发 现阿郎背着她还有其它女人，愤然离去。波波临盆之际，阿郎参加非法赛车撞死警察入狱，波波也因被母亲和医生告知婴儿夭折去了美国。出狱后，阿郎很为以前行 为愧疚，从孤儿院找回儿子取名波仔（黄坤玄），父子二人开始相依为命过日子。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 76704,
    "runtime": "99 min",
    "releaseDate": "1989-03-16",
    "ratingRank": 247,
    "id": "movie-1293315"
  },
  {
    "sourceId": "1316580",
    "title": "春夏秋冬又一春",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554626580.jpg",
    "summary": "春天，贪玩的童僧拿着石头，绑在鱼、青蛙和蛇身上，捉弄着小生灵们。老僧（吴永洙饰）发现后，用同样的手法惩罚他，告诫他不可胡来。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国",
      "德国"
    ],
    "rating": 8.5,
    "votes": 74194,
    "runtime": "103 min",
    "releaseDate": "2003-08-14",
    "ratingRank": 248,
    "id": "movie-1316580"
  },
  {
    "sourceId": "1293527",
    "title": "美国X档案",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2359307923.jpg",
    "summary": "德瑞克（爱德华•诺顿 Edward Norton 饰）的父亲在他很小的时候就被一名黑人毒贩射杀，从此给他幼小的心灵埋下了仇恨的种子。原来德瑞克功课很好，是老师眼中的好学生。但自从父亲遇难后，他就将一切心机都放在了对付有色人种上面。他积极组织起一帮白人青年混混，到处和有色人种对着干。一次，他射杀了两名黑人，因此入狱。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 72572,
    "runtime": "119 min",
    "releaseDate": "1998-10-30",
    "ratingRank": 249,
    "id": "movie-1293527"
  },
  {
    "sourceId": "1307766",
    "title": "那山那人那狗",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2195671157.jpg",
    "summary": "儿子（刘烨）高考落榜不得已回到大山中的家后，做了大半辈子山村邮递员的父亲（滕汝骏）提前退休，安排儿子接下自己的工作。儿子上班第一天，父亲千叮咛万嘱咐之后仍不放心，带上长年在其左右的忠实老狗决定陪儿子再走一趟送信之旅。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.5,
    "votes": 64866,
    "runtime": "93 min",
    "releaseDate": "",
    "ratingRank": 250,
    "id": "movie-1307766"
  },
  {
    "sourceId": "1902193",
    "title": "爱尔莎和弗雷德",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p793143629.jpg",
    "summary": "独居老妇人爱尔莎隔壁搬来了一位刚丧偶的新邻居阿尔弗雷德。虽然生活背景、环境、性格完全不同，但这两位独居的老人被彼此吸引了，他们相爱了。阿尔弗雷德也成功地走出了丧妻的阴影。但事实上，开朗的爱尔莎身患重病，而她过去对阿尔弗雷德所说的一切也大都是谎言。知道了真相的阿尔弗雷德却决定帮爱尔莎一圆她未了的心愿，他带着爱尔莎来到了她梦寐以求的罗马……",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "阿根廷",
      "西班牙"
    ],
    "rating": 8.5,
    "votes": 150,
    "runtime": "108 min",
    "releaseDate": "2005-07-28",
    "ratingRank": null,
    "id": "movie-1902193"
  },
  {
    "sourceId": "1309015",
    "title": "摩托日记",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p466727772.jpg",
    "summary": "电影讲述了一次南美旅程如何激发了切格瓦拉全新的世界观，使得革命热情开始在他心中萌芽生长。格瓦拉（盖尔·加西亚·贝纳尔 Gael García Bernal 饰）当年23岁，意气风发，踌躇满怀，是一个医学院的学生。他对外面的世界抱有强烈的好奇心，于是和朋友艾伯特踏上了拉丁美洲的长长一串旅途中。他们骑上摩托车，风驰电掣的出发了，却不料摩托车很快就报了废。但这却一点没有影响年轻人的激情，二人靠搭便车来完成剩下的旅程。穿过拉丁美洲古老的文明遗址，穿梭于各个国家各色人群中间，他们开始真切感受到社会的真相、生活的苦难。当深入到亚马逊河流域的麻风病人区时，他们被所见所闻深深震撼。切格瓦拉开始思考宏大深奥的命题：人类、社会、经济、文明，人类的苦难、快乐的定义……",
    "genres": [
      "Drama",
      "Biography",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "冒险"
    ],
    "originalRegions": [
      "阿根廷",
      "美国",
      "智利",
      "秘鲁",
      "巴西",
      "英国",
      "德国",
      "法国"
    ],
    "rating": 8.4,
    "votes": 37240,
    "runtime": "126 min",
    "releaseDate": "2004-01-15",
    "ratingRank": null,
    "id": "movie-1309015"
  },
  {
    "sourceId": "1466397",
    "title": "探戈，加德尔的放逐",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510000702.jpg",
    "summary": "In the sorrow of exile, a group of Argentinians in Paris seek solace and connection to their culture by staging a set of tangos. The film alternates between their vibrant rehearsals and their circumscribed lives in low-rent apartments, underemployed, fitfully communicating with families back home, trying to make do with what they hope are only temporary arrangements in a foreign land.",
    "genres": [
      "Drama",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "歌舞"
    ],
    "originalRegions": [
      "阿根廷",
      "法国"
    ],
    "rating": 8.2,
    "votes": 271,
    "runtime": "119 min",
    "releaseDate": "1985-08-28",
    "ratingRank": null,
    "id": "movie-1466397"
  },
  {
    "sourceId": "1302166",
    "title": "些许故事",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1574779544.jpg",
    "summary": "巴塔哥尼亚高原上的某个边远小镇，有三个人在同一天里踏上了去圣胡里安市的路。退休后与儿子儿媳一家住在一起的老头儿东加斯托 （Antonio Benedicti 饰）听说多年前走丢的老狗“小丑脸”出现在圣胡里安市，不顾儿子儿媳的反对，夜里偷了钱离家出走寻狗。日夜奔波的推销员罗伯特（Javier Lombardo 饰）为了追求圣胡里安市一位单身母亲小店主，特意给她的儿子精心订购了一个足球生日蛋糕，开车向圣胡里安市进发。主妇玛利亚（Javiera Bravo 饰）赢得了一个参加圣胡里安市电视台彩色抽奖节目的机会，反复犹豫之后带着襁褓中的女儿也坐上了去圣胡里安市的汽车。三段旅程相互交织，一路上发生了许多温馨动人的小故事。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "阿根廷",
      "西班牙"
    ],
    "rating": 8.1,
    "votes": 492,
    "runtime": "92 min",
    "releaseDate": "2002-10-24",
    "ratingRank": null,
    "id": "movie-1302166"
  },
  {
    "sourceId": "1303124",
    "title": "南方",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554875618.jpg",
    "summary": "1983年在阿根廷，民主政府替代了独裁政权，被关押五年之后的弗洛雷阿尔获得了自由。深夜里，走在回家的路上，弗洛雷阿尔感觉一切都变了，他的家庭，他的朋友们，他的国家。独自徘徊在街头的弗洛雷阿尔漫游在梦境与痛苦，生者与死者之间……在这个蓝色的朦胧的南方，带着碎片般的回忆，弗洛雷阿尔发现，对于一个政治犯来说重返原来的自由生活是多么的不容易。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "阿根廷",
      "法国"
    ],
    "rating": 8.0,
    "votes": 606,
    "runtime": "127 min",
    "releaseDate": "1988-09-12",
    "ratingRank": null,
    "id": "movie-1303124"
  },
  {
    "sourceId": "1416897",
    "title": "威士忌",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2043660310.jpg",
    "summary": "In Uruguay, they don't say cheese in front of the camera - they say whisky. Beneath the artificially photographed smiles, however, is a blueprint for the \"South American Gothic,\" minus the farm and the forks. These Montevidean folks' stony expressions belie a life gripped frozen by accustomed routines. So it goes with an old Jewish bachelor who owns an ageing sock factory. When his estranged younger brother decides to visit for their mother's burial, he asks his employee Marta to pose as his wife. The resulting encounter creates clumsy silences that are uncomfortably comic. Grand Prize, Tokyo Film Festival and FIPRESCI prize from Cannes.",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "乌拉圭",
      "阿根廷",
      "德国",
      "西班牙"
    ],
    "rating": 8.0,
    "votes": 335,
    "runtime": "99 min",
    "releaseDate": "2004-05-19",
    "ratingRank": null,
    "id": "movie-1416897"
  },
  {
    "sourceId": "3638211",
    "title": "暗室",
    "countryCode": "AR",
    "countryName": "Argentina",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3700786.jpg",
    "summary": "19世纪末，在阿根廷恩特雷里奥斯省的一小块殖民地上， 赫特鲁迪斯 —— 一个在家人眼中天生丑陋的女孩在这里慢慢成长为一位端庄慈善的女人。由于从小所受到的漠视，赫特鲁迪斯从不敢抬起自己的头，视线总是停留在自己那双脚上。直到某天，摄影师让-巴蒂斯特的出现...",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "阿根廷",
      "法国"
    ],
    "rating": 8.0,
    "votes": 144,
    "runtime": "85 min",
    "releaseDate": "2008-10-16",
    "ratingRank": null,
    "id": "movie-3638211"
  },
  {
    "sourceId": "1470093",
    "title": "味浓情更浓",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2332355504.jpg",
    "summary": "电影主要描述一个带着梦想的会做一手好菜的女孩和与母亲赌气下来到大城市当了厨师，在姻缘巧合下认识了自己的对于菜肴十分挑剔的老板的美丽爱情故事。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "奥地利",
      "德国"
    ],
    "rating": 8.4,
    "votes": 1321,
    "runtime": "99 min",
    "releaseDate": "1994-04-28",
    "ratingRank": null,
    "id": "movie-1470093"
  },
  {
    "sourceId": "1981171",
    "title": "半月交响曲",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166779821.jpg",
    "summary": "摩玛（Ismail Ghaffari 饰）的毕生理想就是能够在伊拉克库尔德斯坦举行音乐会。终于，在三十五年之后，摩玛的这个理想即将变为现实，他的音乐会终于获得了政府的批准。可是，音乐会获得了批准仅仅只是一个开始，后面还有一大堆的麻烦和问题在等待着摩玛一一去解决，摩玛和自己的十个儿子共同踏上了圆梦之旅。",
    "genres": [
      "Drama",
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "奥地利",
      "法国",
      "伊朗",
      "伊拉克"
    ],
    "rating": 7.7,
    "votes": 465,
    "runtime": "Unknown runtime",
    "releaseDate": "2006-09-09",
    "ratingRank": null,
    "id": "movie-1981171"
  },
  {
    "sourceId": "2360779",
    "title": "奥匈情史",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2395195625.jpg",
    "summary": "巴罗尼斯夫人出落得亭亭玉立的女儿麦瑞闯进鲁道夫王子的生活。在与麦瑞私奔的落脚行宫梅耶林，鲁道夫和麦瑞殉情自杀。鲁道夫王子所预言并一直设法避免的大战在1914年爆发。到1918年战争结束时，奥匈帝国的地图从此消失。",
    "genres": [
      "Drama",
      "Romance",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "奥地利",
      "法国",
      "德国",
      "意大利"
    ],
    "rating": 7.6,
    "votes": 293,
    "runtime": "180 min",
    "releaseDate": "2006-04-30",
    "ratingRank": null,
    "id": "movie-2360779"
  },
  {
    "sourceId": "3640682",
    "title": "卢尔德",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p547496745.jpg",
    "summary": "一次意外的遭遇让年轻的克里斯汀（西尔薇·泰斯图德 Sylvie Testud 饰）不得不面临下半生都要在轮椅上度过的悲惨遭遇，着巨大的打击让克里斯汀选择在荒无人烟的小岛上过起了离群索居的孤独生活，然而，经历过痛苦、愤怒和沉沦后，克里斯汀重新振作了起来，她有一个理想未能实现，那就是前往比里牛斯山，进行一趟朝圣之旅。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "奥地利",
      "法国",
      "德国"
    ],
    "rating": 7.1,
    "votes": 926,
    "runtime": "96 min",
    "releaseDate": "2009-09-01",
    "ratingRank": null,
    "id": "movie-3640682"
  },
  {
    "sourceId": "1301140",
    "title": "疯狂游戏",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1654873363.jpg",
    "summary": "影片描述了一个古代“巫医”，他经常用一种类似气功或是特异功能的手法治疗病况特殊的病人，尤其是女病人。但这种医术远远超出一般医生的理解范畴，因此他经常被当作巫医遭人轻视。这到底是福是祸？",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "奥地利",
      "加拿大",
      "英国",
      "德国"
    ],
    "rating": 6.9,
    "votes": 263,
    "runtime": "107 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1301140"
  },
  {
    "sourceId": "1292749",
    "title": "豪情三剑客",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2203632228.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Action",
      "Romance",
      "Family",
      "History",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情",
      "家庭",
      "历史",
      "冒险"
    ],
    "originalRegions": [
      "奥地利",
      "英国",
      "美国"
    ],
    "rating": 6.9,
    "votes": 241,
    "runtime": "105 min",
    "releaseDate": "1993-11-12",
    "ratingRank": null,
    "id": "movie-1292749"
  },
  {
    "sourceId": "1875218",
    "title": "老鹰乐队2004年墨尔本演唱会",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510826237.jpg",
    "summary": "A documentary of the musical band Eagles and their 2004 concert in Melbourne, Australia.",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 9.5,
    "votes": 444,
    "runtime": "175 min",
    "releaseDate": "2005-06-14",
    "ratingRank": null,
    "id": "movie-1875218"
  },
  {
    "sourceId": "1478041",
    "title": "金色小提琴",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531221029.jpg",
    "summary": "A heartwarming story for all the family told in four hours from the South Australian Film Corporation.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "澳大利亚",
      "加拿大"
    ],
    "rating": 8.8,
    "votes": 170,
    "runtime": "240 min",
    "releaseDate": "1991-08-18",
    "ratingRank": null,
    "id": "movie-1478041"
  },
  {
    "sourceId": "1306642",
    "title": "轻骑兵",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2366278410.jpg",
    "summary": "在第一次世界大战中，澳大利亚轻骑兵与英国军队一起，在巴勒斯坦和土耳其、德国联军作战，在加沙经历了两场战败后，英军准备向水源充足的贝尔西发动了进攻，这是土耳其军队的一座防守重镇，在那里勇敢的轻骑兵们谱写了人和马的传奇。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.5,
    "votes": 234,
    "runtime": "131 min",
    "releaseDate": "1987-09-10",
    "ratingRank": null,
    "id": "movie-1306642"
  },
  {
    "sourceId": "1305876",
    "title": "最后一颗子弹",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s4723547.jpg",
    "summary": "第二次世界大战结束前，澳军在婆罗州受到日军疯狂自杀式袭击，环经过连番剧战，双方皆伤亡殆尽，只有一名年青的澳洲士兵史丹利和日军头号狙击手山川侥幸生存，但两人为著家仇国恨，旋即又再展开一场闹智闹力的困兽战。到最后，大家精力秏尽，每人身上只剩下一发子弹，究竟谁会取得最后胜利，战争带来的伤害又会否就此平伏下来？",
    "genres": [
      "Drama",
      "Action",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "战争"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.5,
    "votes": 175,
    "runtime": "90 min",
    "releaseDate": "1996-01-06",
    "ratingRank": null,
    "id": "movie-1305876"
  },
  {
    "sourceId": "3431802",
    "title": "红犬历险记",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1741434502.jpg",
    "summary": "影片改编自英国作家路易斯·德·伯尼尔斯《战地情人》的畅销书，讲述了名叫Koko的小狗穿越澳大利亚寻找曾经的主人的真实感人故事。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.4,
    "votes": 10904,
    "runtime": "92 min",
    "releaseDate": "2011-08-04",
    "ratingRank": null,
    "id": "movie-3431802"
  },
  {
    "sourceId": "1292345",
    "title": "沙漠妖姬",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1196536905.jpg",
    "summary": "异装癖表演者班丽娜（Terence Stamp 饰）、米芝（Hugo Weaving 饰）因一位好友去世而再度聚首，米芝得到澳洲中部城市的表演机会邀请班丽娜同往，同行费莉茜（Guy Pearce 饰）为圆“沙漠女王”之梦要求搭伙，并借来了经改装的大巴作为代步工具。三人风风火火的踏上旅程，上了年纪的班丽娜于路对往事讳莫如深，与年轻躁动的费莉茜生出不少琐碎口角，米芝则不时陷入对自己那场婚姻的回忆。他们在沿途经过的小镇大秀妖冶，得到了不少惊愕的目光，当然也有赞许。因为一次抛锚，对班丽娜昔日表演难以忘怀的修理工老巴得以加入他们的旅程。众人终于抵达目的地，虽然观众不甚热情，但米芝终于见到了儿子，而班丽娜决定和老巴在一起……",
    "genres": [
      "Drama",
      "Comedy",
      "LGBTQ+",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "同性",
      "音乐"
    ],
    "originalRegions": [
      "澳大利亚",
      "英国"
    ],
    "rating": 8.3,
    "votes": 5868,
    "runtime": "104 min",
    "releaseDate": "1994-08-10",
    "ratingRank": null,
    "id": "movie-1292345"
  },
  {
    "sourceId": "1294793",
    "title": "情如物证",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2495845163.jpg",
    "summary": "马丁一出生就是个盲人，为了证实别人告诉自己的话是否都是事实，他从10岁起便开始坚持不懈地用手中的照相机拍照。为了证明自己未被欺骗，也为了证明自己的存在。在一次邂逅之后，平凡的厨师安迪成了他最信赖的人，尽管他们的友情也经历了种种考验。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.3,
    "votes": 932,
    "runtime": "86 min",
    "releaseDate": "1991-08-15",
    "ratingRank": null,
    "id": "movie-1294793"
  },
  {
    "sourceId": "1296847",
    "title": "坏小子巴比",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519179648.jpg",
    "summary": "35岁的巴比从来没有出过自己家那个脏乱低矮的小公寓，只认识他自己，家里的一只猫，和他那淫威滥施的母亲。他不仅要忍受母亲的打骂，还要和母亲做爱。但是，因这个环境而呆呆傻傻的巴比却有着可以惟妙惟肖的模仿任何人的天赋。一天，一个突然出现的酒气冲天的老头自称是他的父亲，把他赶出门。愤怒的巴比闷死了父母，走出了家门。巴比在这个陌生的世界里模仿着自己看到的一切。闹出了不少笑话，也受到不少挫折。一个意外的机会他穿上父亲的牧师服装，走上舞台开始模仿他所听到的各种声音，竟然一炮走红，受到众多歌迷的追捧。而他也发现自己有着可以与脑麻痹患者沟通的神奇能力。最终，巴比也遇到了自己的真爱。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "澳大利亚",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 2530,
    "runtime": "114 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1296847"
  },
  {
    "sourceId": "2170916",
    "title": "男孩们回来了",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p475238938.jpg",
    "summary": "乔（克里夫·欧文 Clive Owen）的第二任妻子突患重症，不久便离开了人世，给他留下的除了无限的哀思同时，还有一个年仅五岁的儿子纳提。乔拒绝了妻子母亲的帮助，决定带着纳提独自生活，可是带孩子并不是想象的那么容易，特别是一个刚失去母亲的五岁小朋友，在与纳提相处的过程中，纳提的可爱和乖戾让乔无所适从；和前妻所生之子哈瑞专程从英国来看他，这个正处叛逆期而且沉默寡言的孩子同样让乔不知所措。琐碎的家务事和忙碌的工作让乔焦头烂额，单身父亲似乎并没有独自照顾两个儿子的能力，小儿子让岳母接走，大儿子回到了英国，乔同时失去了两个儿子。但故事并没有完，乔并不是一个没有责任心的父亲，他开始想法设法的挽回自己的儿子……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "澳大利亚",
      "英国"
    ],
    "rating": 8.0,
    "votes": 6497,
    "runtime": "104 min",
    "releaseDate": "2009-09-25",
    "ratingRank": null,
    "id": "movie-2170916"
  },
  {
    "sourceId": "1469497",
    "title": "凡高的生与死",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556871746.jpg",
    "summary": "本部纪录片以梵高在1872年直到1890年间，给其弟提奥的书信为线索，用画外音的叙述方式，向我们描绘了这位天才画家的心灵自述。用直击灵魂的第一视角，再现了他的生与死。这些描摹梵高视觉的主观镜头，加之代言其身的画外音，既无任何梵高生前的画作，也无煽情矫作的表演高潮。一切，都恰如其分的记录着这高贵又痛苦的灵魂。《村声》杂志称：这是一部难得的正直触及天才灵魂的作品。",
    "genres": [
      "Drama",
      "Animation",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "传记"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 8.0,
    "votes": 762,
    "runtime": "105 min",
    "releaseDate": "1987-09-15",
    "ratingRank": null,
    "id": "movie-1469497"
  },
  {
    "sourceId": "1401604",
    "title": "狮子王3",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2024090266.jpg",
    "summary": "该片是狮子王的外传，讲述了狮子王辛巴不为人知的成长历程。当年辛巴的父亲木法沙被奸人迫害而死，小辛巴为了躲过一劫，逃离了动物王国。在逃亡过程中，辛巴遇上了一对搞笑活宝——丁满和彭彭。丁满和彭彭与辛巴成了好朋友，他们在丛林中开始了他们惬意的生活。辛巴在丛林中慢慢长大，最终长成了雄壮的雄狮，并邂逅了自己美丽的公主。由于有了丁满和彭彭这对活宝，使得平凡的生活也笑料百出。",
    "genres": [
      "Comedy",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "澳大利亚",
      "美国"
    ],
    "rating": 7.9,
    "votes": 23309,
    "runtime": "77 min",
    "releaseDate": "2004-02-10",
    "ratingRank": null,
    "id": "movie-1401604"
  },
  {
    "sourceId": "3364223",
    "title": "了不起的盖茨比",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2013,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2091221628.jpg",
    "summary": "1922年的春天，作家尼克(托比•马奎尔 Tobey Maguire 饰)满怀希望离开家乡，随淘金热潮来到纽约这个新兴的城市，虽然这里爵士乐流行，股票飞涨，但是贫富两极分化，人们沉沦在纸醉金迷中。尼克为了追寻美国梦，放弃写作而进入证券市场，并搬入纽约附近的海湾居住，成为了神秘富豪盖茨比（莱昂纳多•迪卡普里奥 Leonardo DiCaprio 饰）的邻居。而海湾的对岸住着尼克的表妹黛西（凯瑞•穆里根 Carey Mulligan 饰）和她的贵族丈夫汤姆（乔尔•埃哲顿 Joel Edgerton 饰），尼克不仅被邀请去赴宴，之后汤姆还带着他去找情妇寻欢，尼克渐渐迷失在这个充满魅力，以及富豪编制的假象、爱与谎言的世界中。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "澳大利亚",
      "美国"
    ],
    "rating": 7.8,
    "votes": 387124,
    "runtime": "143 min",
    "releaseDate": "2013-08-30",
    "ratingRank": null,
    "id": "movie-3364223"
  },
  {
    "sourceId": "1401209",
    "title": "小英雄托托",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2211514719.jpg",
    "summary": "平民家庭的托托（Thomas Godet 饰）与隔壁富人家庭的阿尔弗雷德（Hugo Harold Harrison 饰）在同一家医院同一天内出生。托托坚信，因为医院的一场大火，导致他们两个婴儿被父母抱错。本该属于他的优渥生活被阿尔弗雷德夺去，当然，每当他提及此事时不免遭受阿尔弗雷德的一顿老拳。随着父亲的意外去世，托托对阿尔弗雷德一家的嫉恨逐渐加深。憎恨并未令他得到满足与补偿，反而使他的一生永远笼罩在阴影之中……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "比利时",
      "法国",
      "德国"
    ],
    "rating": 8.5,
    "votes": 3873,
    "runtime": "91 min",
    "releaseDate": "1991-06-19",
    "ratingRank": null,
    "id": "movie-1401209"
  },
  {
    "sourceId": "1295507",
    "title": "第八日",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1184771401.jpg",
    "summary": "神用七天创造了这个世界，第八天神作了什么？神奉献出了乔治",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "比利时",
      "法国",
      "英国"
    ],
    "rating": 8.4,
    "votes": 6562,
    "runtime": "118 min",
    "releaseDate": "1996-05-22",
    "ratingRank": null,
    "id": "movie-1295507"
  },
  {
    "sourceId": "1305337",
    "title": "他人之子",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183209196.jpg",
    "summary": "儿子的意外被杀让奥利维（奥利弗·古尔迈 Olivier Gourmet 饰）陷入了深深的痛苦之中，他一生都会记住这个混蛋，即便他也只是一个少年，即便他即将为自己的所作所为付出代价。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "比利时",
      "法国"
    ],
    "rating": 8.1,
    "votes": 2944,
    "runtime": "99 min",
    "releaseDate": "2002-10-23",
    "ratingRank": null,
    "id": "movie-1305337"
  },
  {
    "sourceId": "1296601",
    "title": "萌芽",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545528986.jpg",
    "summary": "本片描写19世纪未矿工悲惨命运。在法国北方，在矿山工作的朗蒂埃爱上了一位已委身于马厄的女人凯瑟琳。不久，他因为矿上的生活条件恶劣，于是鼓动工人进行大罢工，但很快就被镇压了。工人复工后，却被一个流亡的虚无主义者破坏了有关设备，致使巷道被水淹没，朗蒂埃等都被困在里面……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "比利时",
      "法国",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 111,
    "runtime": "160 min",
    "releaseDate": "1993-09-29",
    "ratingRank": null,
    "id": "movie-1296601"
  },
  {
    "sourceId": "4061047",
    "title": "惊恐小镇",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p546354183.jpg",
    "summary": "牛仔、印地安和小马共同居住在宁静乡间的一幢大房子中。晴朗的一天，恰逢小马的生日。牛仔和印地安决定为好朋友办一场篝火晚会。印地安通过网络订购50块砖头，结果却阴差阳错变成了50万块。傍晚，小马和朋友、邻居们举行了欢快、热闹的生日晚宴，却没想到那余下的几十万块砖头引发了巨大的灾难。次日，印地安和牛仔在小马的率领下重建房屋，但是他们修到一半的房子第二天总是会被人偷走。越来越多离奇的事情相继发生……",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "比利时",
      "卢森堡",
      "法国"
    ],
    "rating": 8.0,
    "votes": 6295,
    "runtime": "75 min",
    "releaseDate": "2009-05-21",
    "ratingRank": null,
    "id": "movie-4061047"
  },
  {
    "sourceId": "1418570",
    "title": "孩子",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1509446756.jpg",
    "summary": "布鲁诺（杰瑞米•雷尼尔 饰）是一名20岁的街头混混，过活的营生是各种合法、非法的地下交易，他的女友，18岁的索尼亚（黛博拉•弗朗西斯 饰）也没正当的工作，平日靠微薄的救济津贴和他度日。",
    "genres": [
      "Drama",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "比利时",
      "法国"
    ],
    "rating": 7.9,
    "votes": 5342,
    "runtime": "95 min",
    "releaseDate": "2005-09-14",
    "ratingRank": null,
    "id": "movie-1418570"
  },
  {
    "sourceId": "1307692",
    "title": "囚车驶向圣地",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2117992283.jpg",
    "summary": "第二次世界大战开始了，硝烟和炮火让整个世界满目疮痍，人民深陷于水火之中，苦苦挣扎。在占领了法国之后，凶残的纳粹开始了对于犹太人的疯狂屠杀，从屠刀下幸运地死里逃生的施劳模（利昂尔·阿贝兰斯基 Lionel Abelanski 饰）此刻脑海里只有一个念头，那就是要将这鲜血淋漓的一切告知聚居在施代尔的犹太人们。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "战争"
    ],
    "originalRegions": [
      "比利时",
      "法国",
      "以色列",
      "荷兰",
      "罗马尼亚"
    ],
    "rating": 7.9,
    "votes": 1009,
    "runtime": "103 min",
    "releaseDate": "1998-09-16",
    "ratingRank": null,
    "id": "movie-1307692"
  },
  {
    "sourceId": "1304872",
    "title": "岁月留痕",
    "countryCode": "BE",
    "countryName": "Belgium",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514392001.jpg",
    "summary": "二十岁的海雅生长在充满传统枷锁的家庭，为了找学费上大学，帮一个传统犹太家庭带他们最小的儿子辛哈，但辛哈从不说一句话，经海雅循循善诱后，有一天他居然会学鸭子叫，但突出事件却接二连三接踵而来……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "比利时",
      "荷兰",
      "英国",
      "美国"
    ],
    "rating": 7.9,
    "votes": 873,
    "runtime": "100 min",
    "releaseDate": "1998-03-30",
    "ratingRank": null,
    "id": "movie-1304872"
  },
  {
    "sourceId": "2063524",
    "title": "教宗的洗手间",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2469853333.jpg",
    "summary": "教宗即將來訪！預計有數萬名群眾將湧進這個小村…。窮困的村民聽到這個好消息，高興得快要昏倒！他們打算趁機海撈一票，於是個個使出了渾身解數：有人要賣西班牙香腸，有人要做美味點心，也有人打算以燒烤的色、香、味，來誘惑教宗…。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "乌拉圭",
      "巴西",
      "法国"
    ],
    "rating": 8.1,
    "votes": 2120,
    "runtime": "90 min",
    "releaseDate": "2007-08-03",
    "ratingRank": null,
    "id": "movie-2063524"
  },
  {
    "sourceId": "1296882",
    "title": "太阳背后",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2363708542.jpg",
    "summary": "故事发生在1910年的巴西，在那里，两大家族之间的斗争从未停歇。布雷维斯家在家族战争中失去了他们的大儿子，这让老父亲（乔斯·多蒙特 José Dumont 饰）感到非常的悲伤，于是把复仇的希望寄托在了小儿子汤诺（罗德里格·桑托罗 Rodrigo Santoro 饰）的身上。父辈的仇恨剥夺了汤诺的童年和快乐，最终，当他手刃杀死哥哥的敌人后，感受到的并没有释然和救赎，仅仅是空虚。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "巴西",
      "法国",
      "瑞士"
    ],
    "rating": 8.0,
    "votes": 339,
    "runtime": "105 min",
    "releaseDate": "2002-09-12",
    "ratingRank": null,
    "id": "movie-1296882"
  },
  {
    "sourceId": "1306630",
    "title": "海洋对岸",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s9130006.jpg",
    "summary": "《异国他乡》是90年代巴西电影史上的一部佳作，由巴西和葡萄牙两国优秀电影人顶力协作的颠峰之作，导演为巴西著名导演沃尔特·塞勒斯和葡萄牙著名导演尼尔拉·托马斯。沃尔特·塞勒斯1998年凭借《中央车站》这部感人肺腑的杰作荣获无数国际大奖, 2001年又出《太阳背面》而获得威尼斯国际电影节最佳影片金狮奖，2002年的巴西电影杰作《上帝之城》他是幕后制作，2003年又推出《Motorcycle Diaries》获柏林影展最佳影片提名。可以说90年代末由他领军的巴西电影在世界上影响不小。本片则是他的成名作。",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "巴西",
      "葡萄牙"
    ],
    "rating": 7.9,
    "votes": 157,
    "runtime": "101 min",
    "releaseDate": "1999-11-29",
    "ratingRank": null,
    "id": "movie-1306630"
  },
  {
    "sourceId": "3290656",
    "title": "爱在里约",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2509010837.jpg",
    "summary": "一条街分隔天堂与地狱，贫穷终成一种罪恶？爱上富家女的里约热内卢穷小子不怕枪弹，不怕白眼，咬着牙龈向着种族歧视贫富悬殊充塞一万种不公义的人生陷阱冲刺，亿分之一成就童话的机会也不放过，无奈连《泰坦尼克号》式的浪漫也与他无缘……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 7.7,
    "votes": 749,
    "runtime": "117 min",
    "releaseDate": "2008-07-25",
    "ratingRank": null,
    "id": "movie-3290656"
  },
  {
    "sourceId": "3230476",
    "title": "沙屋",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3852385.jpg",
    "summary": "剧情介绍：",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 7.7,
    "votes": 252,
    "runtime": "115 min",
    "releaseDate": "2006-04-05",
    "ratingRank": null,
    "id": "movie-3230476"
  },
  {
    "sourceId": "3065832",
    "title": "随波逐流",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2127990568.jpg",
    "summary": "影片讲述了14岁的菲力帕在成长的过程中面临父母婚姻裂痕的问题，父亲有了情人，母亲陷入绝望，家庭分崩离析，而这时菲力帕遇到了他的初恋………",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 7.6,
    "votes": 302,
    "runtime": "97 min",
    "releaseDate": "2009-07-31",
    "ratingRank": null,
    "id": "movie-3065832"
  },
  {
    "sourceId": "1791033",
    "title": "痛苦的大地",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 1967,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2270264535.jpg",
    "summary": "故事发生在一个虚构的国家埃尔拉多，整个国家充满着政治势力的相互争斗，这一切都被长期努力挖掘政治腐败的理想主义诗人兼记者保罗马丁斯看在眼里，他试图想通过民主选举来改变国家的苦难和那些社会的不公正，他为保守党候选人献计献策，但一些他无法理解的政治交易，使他转投支持另一政党自由党，两位参选的候选人都曾是他的朋友，然而获胜的一方，在掌握了领导权之后，却马上推翻了竞选时的承诺，保罗再次徘徊在疯狂的政治家与普罗大众之间难以取舍，他决定远离政治，但不久保罗马丁斯还是倒在了公路上的血泊之中。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 7.6,
    "votes": 206,
    "runtime": "106 min",
    "releaseDate": "1967-05-02",
    "ratingRank": null,
    "id": "movie-1791033"
  },
  {
    "sourceId": "4919183",
    "title": "太阳剧团：浪迹天涯",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s8916337.jpg",
    "summary": "“KOZA”在梵语中代表“藏宝箱”的意思，由此启发而来的《KOOZA》讲述的是寻找自己容身之处的少年由此返璞归真的故事。演出因扣人心弦的杂技表演和身着绚烂华服的角色而熠熠生辉。欢迎走进这充满刺激和兴奋，犹如藏宝箱般的华美世界。",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 9.1,
    "votes": 252,
    "runtime": "Unknown runtime",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-4919183"
  },
  {
    "sourceId": "1305995",
    "title": "飞翔的梦",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2550740471.jpg",
    "summary": "十一岁的阿历克是个性格孤僻的孩子，他白天的时候总是很想念当随船大夫的父亲，希望像父亲一样四海为家，到处去旅行……有一天，一位陌生人给阿历克带来他父亲送他的礼物。这是一包他父亲搜集的「蝶蛹」卡通画。 第二天清晨醒来，阿历克发现满屋子飞舞著五颜六色的蝴蝶，其中之一不同寻常，大大的双眼，长长的头发，她是一个「蝶仙」小精灵，阿历克称她为《乌鲁咕》，她有著神奇的力量，能使任何东西飞起来，阿历克和她形影不离，上学、睡觉都带著她。",
    "genres": [
      "Animation",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "捷克斯洛伐克",
      "加拿大"
    ],
    "rating": 9.0,
    "votes": 589,
    "runtime": "84 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1305995"
  },
  {
    "sourceId": "3879473",
    "title": "高德堡变奏曲",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543347086.jpg",
    "summary": "Cognoscente of the extraordinary, Marie Chouinard shares her reflections on the contact between the elusive Other and the flagrance of Beauty in the Goldberg Variations by Johann Sebastian Bach. Subtle and extravagant, sumptuous and wild, the movements plumb the insoluble mystery of the body, of living",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "加拿大",
      "德国"
    ],
    "rating": 8.9,
    "votes": 116,
    "runtime": "48 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3879473"
  },
  {
    "sourceId": "2984049",
    "title": "阻止战争的狗",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2222013550.jpg",
    "summary": "The film involves a huge snowball fight between the children of a village who split into two rival gangs, one defending a snow castle, the other attacking it. The snowball fight turns into a practical war, until an incident occurs and part of the snow castle crumbles, exactly where one of the children's pet dog was resting during their folly, instantly killing it, and ending the war.",
    "genres": [
      "Drama",
      "Comedy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "冒险"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.7,
    "votes": 151,
    "runtime": "92 min",
    "releaseDate": "1984-10-03",
    "ratingRank": null,
    "id": "movie-2984049"
  },
  {
    "sourceId": "1296950",
    "title": "文森特与我",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555132770.jpg",
    "summary": "乔（Nina Petronzio饰）小小年纪便具有出色的绘画天赋，她勤奋地参加培训班，结识了好友菲利克斯（Christopher Forrest饰）。在乔的心目中，文森特•梵高是她顶礼膜拜的人物，她的画风有着强烈的梵高风格。商人温科勒（Vernon Dobtcheff饰）买下了乔一副乡村油画，令乔始料不及的是，温科勒竟转身以梵高童年作品的谎言把画拍卖出去。",
    "genres": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "加拿大",
      "法国"
    ],
    "rating": 8.6,
    "votes": 308,
    "runtime": "100 min",
    "releaseDate": "1990-12-13",
    "ratingRank": null,
    "id": "movie-1296950"
  },
  {
    "sourceId": "1407149",
    "title": "平安夜",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2213072853.jpg",
    "summary": "故事发生在1944年的德国，伊丽莎白（琳达·汉密尔顿 Linda Hamilton 饰）带着儿子福瑞斯（Matthew Harbour 饰）藏身于森林木屋之中，以躲避战火带来的伤害。某日，三名受伤的美国士兵敲响了伊丽莎白家的房门，他们需要一个地方修养疗伤，无奈之下，伊丽莎白只得让他们进屋，但前提条件是他们的武器必须留在屋外。",
    "genres": [
      "Drama",
      "Family",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.5,
    "votes": 842,
    "runtime": "100 min",
    "releaseDate": "2002-12-14",
    "ratingRank": null,
    "id": "movie-1407149"
  },
  {
    "sourceId": "1476755",
    "title": "雪行者",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p847915650.jpg",
    "summary": "在获得赠与的两个稀有海象牙后，Barry Pepper扮演的飞行员Charles Halliday 运送生病的女孩Kannalaq去医院，途中发生坠机事故Charlie and Kannalaq（由Annabella Piugattuk扮演，这是她第一次露脸）被留在了远离城市的荒野。Charlie设法穿过遥无尽头的雪地前往最近的军事基地，不得不把生病、垂死的年轻姑娘抛在身后。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.5,
    "votes": 693,
    "runtime": "103 min",
    "releaseDate": "2003-09-11",
    "ratingRank": null,
    "id": "movie-1476755"
  },
  {
    "sourceId": "1873225",
    "title": "独角兽尼克",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181306733.jpg",
    "summary": "根据弗兰克·萨克斯畅销小说改编，讲述了一个发生在11岁男孩朱利·哈斯廷身上的温馨故事……",
    "genres": [
      "Drama",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "加拿大",
      "美国"
    ],
    "rating": 8.5,
    "votes": 433,
    "runtime": "90 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1873225"
  },
  {
    "sourceId": "1424257",
    "title": "两秒钟",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2138430151.jpg",
    "summary": "在一次速降自行车比赛中，身为运动员的法国女孩劳瑞·斯杜因在出发时迟缓了两秒中而丢掉了比赛的冠军，车队的老板斥责了她在比赛中的放纵行为并以此为由解雇了她。心有不服的劳瑞就此退役，找到了她的哥哥斯蒂夫并在哥哥家暂住。斯蒂夫是个学究式的人物，常研究一些彩票中奖率和量子理论的艰涩问题。他正为没有女朋友而烦心，同时也为找不到工作而焦虑。而他们的母亲却因老年痴呆症住进了养老院。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.5,
    "votes": 304,
    "runtime": "Unknown runtime",
    "releaseDate": "1998-09-12",
    "ratingRank": null,
    "id": "movie-1424257"
  },
  {
    "sourceId": "1298271",
    "title": "火之战",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1981,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540898604.jpg",
    "summary": "本片获奥斯卡最佳化妆奖、法国凯撒奖最佳影片及最佳导演奖。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "加拿大",
      "法国",
      "美国"
    ],
    "rating": 8.4,
    "votes": 896,
    "runtime": "100 min",
    "releaseDate": "1981-12-16",
    "ratingRank": null,
    "id": "movie-1298271"
  },
  {
    "sourceId": "1300980",
    "title": "一级谋杀",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1222683590.jpg",
    "summary": "警界名人瑞克在调查一宗商业大亨的命案中倍感棘手，这件受到大众媒体瞩目的命案，曾经一度以为破案，尔后却发现疑点重重而办案期间，瑞克与被害人的遗孀哈莉，两人双双坠入情网。哈莉的年轻貌美令瑞克无力招架，迷惘之余却有情报告知，命案的幕后主使人是哈莉，这一宗杀夫案或是一场美人计？",
    "genres": [
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "加拿大",
      "英国"
    ],
    "rating": 8.4,
    "votes": 735,
    "runtime": "98 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1300980"
  },
  {
    "sourceId": "1794360",
    "title": "晨曦中的女孩",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1352905785.jpg",
    "summary": "1918年，加拿大某村庄，小女孩奥若蕾（Marianne Fortier 饰）的母亲玛丽安（Hélène Bourgeois Leclerc 饰）感染肺结核，病入膏肓。她的父亲（Serge Postigo 饰）非但没有对妻子表现出应有的关心，反而和表妹（Stéphanie Lapointe 饰）勾搭成奸。不久，玛丽安在愤怒和忧郁中死去，父亲旋即与表妹成亲。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.3,
    "votes": 15124,
    "runtime": "115 min",
    "releaseDate": "2005-07-08",
    "ratingRank": null,
    "id": "movie-1794360"
  },
  {
    "sourceId": "1308787",
    "title": "成为朱莉娅",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p825998395.jpg",
    "summary": "朱莉娅（安妮特·贝宁 Annette Bening饰）的演艺事业如日中天，伦敦的舞台上她的霸气几乎无人能及。但是，这样一个人前辉煌的女性，却在身后承受着心灵的空虚。她因为事业的成功失去了幸福的家庭，和亲人的关系冷漠疏隔。汤姆（肖恩·埃文斯 Shaun Evans饰）正是趁着这个时机闯进朱莉娅生活的。他年轻、帅气，有着燃烧不尽的激情，把青春的感觉重新灌入朱莉娅的心中。朱莉娅情陷于此，不料在汤姆的心目中，有着另一番打算。年轻女演员想利用汤姆来撼动朱莉娅的一姐地位，初出茅庐的汤姆看不透圈内阴险，竟然乖乖上钩，以为利用和朱莉娅的感情就能大获全胜。然而，不是人人都能成为朱莉娅的，因为她有着过人的洞察力，果断利落的手段和深谙圈内之道的生存法则，时刻准备着给伤害她的人致命还击。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "加拿大",
      "匈牙利",
      "英国",
      "美国"
    ],
    "rating": 8.3,
    "votes": 3029,
    "runtime": "104 min",
    "releaseDate": "2004-10-28",
    "ratingRank": null,
    "id": "movie-1308787"
  },
  {
    "sourceId": "1422914",
    "title": "圣·拉尔夫",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p598264372.jpg",
    "summary": "讲的是一个14岁的男孩相信他可以创造奇迹的故事。男孩的父亲去世，母亲昏迷在医院，似乎只有奇迹才能使其苏醒。他渴望创造奇迹。一次长跑惩罚使他喜欢上了这项运动，并坚信如果能完成一项不可能完成的任务，比如赢得波士顿马拉松比赛，就能够唤醒母亲。虽然最后他离冠军仅一步之遥，但他赢得了师长和同学的尊重，赢得了心仪女孩的热吻，赢得了母亲奇迹般的苏醒。奇迹每天都会发生。",
    "genres": [
      "Drama",
      "Comedy",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "运动"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.3,
    "votes": 1145,
    "runtime": "98 min",
    "releaseDate": "2005-04-08",
    "ratingRank": null,
    "id": "movie-1422914"
  },
  {
    "sourceId": "1308450",
    "title": "极乐同盟",
    "countryCode": "CH",
    "countryName": "Switzerland",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1007772754.jpg",
    "summary": "城市中的六名普通男女，他们几乎每个人都有一项绝对避讳旁人的隐秘爱好。去商店购买成人杂志的男人，专注于制作公鸡形象的头套，他和肥胖女邻居之间似乎有怪异的联系，而女邻居混乱邋遢的家中也藏有玄机；每日送信的女邮递员不停的在工作时间捏小面包球；痴迷女播音员的店主则建造一台用于抚摸自己的机械设备；女播音员经常望着丈夫躲在工作室中的身影垂泪，她的丈夫偷窃、搜集各种古怪工具，意图不明……",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "捷克",
      "瑞士",
      "英国"
    ],
    "rating": 8.5,
    "votes": 3167,
    "runtime": "85 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1308450"
  },
  {
    "sourceId": "3023854",
    "title": "在白色的城市里",
    "countryCode": "CH",
    "countryName": "Switzerland",
    "year": 1983,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2243339541.jpg",
    "summary": "1983柏林电影节提名金熊奖 1984年法国恺撒奖最佳法语外国片",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "瑞士",
      "葡萄牙",
      "英国"
    ],
    "rating": 7.4,
    "votes": 117,
    "runtime": "108 min",
    "releaseDate": "1983-04-21",
    "ratingRank": null,
    "id": "movie-3023854"
  },
  {
    "sourceId": "3804492",
    "title": "丝路花雨",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1982,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2266845549.jpg",
    "summary": "取材于著名的敦煌壁画。",
    "genres": [
      "Music",
      "Musical",
      "Opera"
    ],
    "originalGenres": [
      "音乐",
      "歌舞",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.3,
    "votes": 802,
    "runtime": "100 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3804492"
  },
  {
    "sourceId": "3724033",
    "title": "荒山泪",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1956,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1945500364.jpg",
    "summary": "明末，昏君崇祯不断缺陷取苛捐杂税，加深人民的痛苦。农民高良敏因付不出捐税，父子俩都被抓入狱，儿媳张慧珠日夜织绢才将高父子赎回。刚到家，公差就来抽取新税，父子俩连夜去采药被老虎吃了，慧珠的独子宝琏又被抓去，年迈的婆婆被气身亡。索税公差仍向她要税，慧珠一人逃进深山荒野，自刎而死。",
    "genres": [
      "Drama",
      "Opera"
    ],
    "originalGenres": [
      "剧情",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.0,
    "votes": 224,
    "runtime": "106 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3724033"
  },
  {
    "sourceId": "4720779",
    "title": "秦香莲",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1964,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529226963.jpg",
    "summary": "故事发生在宋朝时代，陈世美（马长礼 饰）和秦香莲（张君秋 饰）本是恩爱的夫妻，心怀着远大理想的陈世美决定进京赶考，秦香莲则一边照顾两人的孩子一边留在老家等待丈夫的喜讯。功夫不负有心人，陈世美果然一举夺得了头筹，然而，命运的意外转变也激发了他内心的心魔，他早已经忘记了在老家的藏糠之妻，只想着如何成为驸马爷。",
    "genres": [
      "Drama",
      "Opera"
    ],
    "originalGenres": [
      "剧情",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.0,
    "votes": 218,
    "runtime": "125 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-4720779"
  },
  {
    "sourceId": "4739983",
    "title": "情探",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1958,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2397714766.jpg",
    "summary": "名妓敫桂英周济秀才王魁，又以身相许，两人恩情缱绻，盟誓于海神庙，互不变心。两年后，王魁入京中魁，在名利诱惑下，遣书休弃桂英，另与官家之女成婚。桂英愤而诉于海神庙，自缢身死。海神爷准了她的诉状，命判官引桂英鬼魂进京与王魁折证。桂英不舍夫妻恩义，再次以\"情\"试探，不料王魁果然负心绝情，桂英盛怒之下，活捉王魁。",
    "genres": [
      "Drama",
      "Romance",
      "Opera"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.9,
    "votes": 157,
    "runtime": "84 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-4739983"
  },
  {
    "sourceId": "2057398",
    "title": "难夫难妻",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1913,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1696510747.jpg",
    "summary": "由上海新民公司出品。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.9,
    "votes": 112,
    "runtime": "40 min",
    "releaseDate": "1913-09-29",
    "ratingRank": null,
    "id": "movie-2057398"
  },
  {
    "sourceId": "2059622",
    "title": "女驸马",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1959,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2228659315.jpg",
    "summary": "黄梅戏电影。",
    "genres": [
      "Drama",
      "Romance",
      "Opera"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.8,
    "votes": 874,
    "runtime": "100 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-2059622"
  },
  {
    "sourceId": "3032535",
    "title": "如此爹娘",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1963,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554774114.jpg",
    "summary": "孙平夫妇有一子名小宝，孙妻百般溺爱，孙平又不能以身作则，因而对小宝的教育收效甚微。邻居蒋福根有一子阿龙，蒋对孩子动辄打骂，蒋母又对孙子一味袒护。由于家庭教育不当，小宝、阿龙打架、逃学、偷窃财物、离家出走。在学校和社会的帮助下，孩子认识错误，走上正路，家长们也从中吸取了教训。1962年大众滑稽剧团首演。1963年上海海燕电影厂拍摄成电影(易名《如此爹娘》)。1981年上海市人民滑稽剧团复演。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.8,
    "votes": 282,
    "runtime": "87 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3032535"
  },
  {
    "sourceId": "3098844",
    "title": "长假",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2153135246.jpg",
    "summary": "假期之所以令人嚮往，是因為你知道會有回家的一天。如果假期之後回不了家，你會怎麼面對這段假期呢？",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.8,
    "votes": 238,
    "runtime": "87 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3098844"
  },
  {
    "sourceId": "2340946",
    "title": "对花枪",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1985,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523469347.jpg",
    "summary": "隋末，瓦岗寨义军的营外忽然有人要与罗义认亲，罗义拒认，反诬是杨林派来的奸细。程咬金察出其中必有蹊跷，亲往南营视察。姜桂枝终于说出原委。原来，四十年前，罗艺赶考途中发病，被河南南阳姜家集员外带回家中调养，其女姜桂枝一见倾心，在父母应允下，与罗艺结为夫妻。后来，由于战乱，夫妻分离。罗艺因战功卓著成为隋朝大将，并另娶妻生子罗成。程咬金巧妙安排，使罗艺亲自出战，大败姜桂枝的花枪之下。罗艺理屈词穷，只得认错，结发夫妻重新团圆。",
    "genres": [
      "Action",
      "Opera"
    ],
    "originalGenres": [
      "动作",
      "戏曲"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.8,
    "votes": 135,
    "runtime": "98 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-2340946"
  },
  {
    "sourceId": "4022125",
    "title": "白方礼",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s4659127.jpg",
    "summary": "天津74岁的老三轮车工人白方礼回到了老家，他看到孩子们大冬天的在外面不上学，玩娶媳妇的游戏，经打听才知道学校教室塌了，老师也离开了，好多孩子也上不起学，他一边把养老的五千块钱拿出来修学校，一边回到天津重操旧业瞪起了三轮车，他靠蹬三轮车挣钱支援教育，他不分昼夜、不分季节，14年过去了，他不但给老家修了学校，还资助了300多名贫困的大学生，他老了，88岁的白方礼蹬不动车了，他就帮人家看汽车，在一个寒类的冬季，他捐出了他支教生涯中的最后一笔钱。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.8,
    "votes": 121,
    "runtime": "Unknown runtime",
    "releaseDate": "2008-11-12",
    "ratingRank": null,
    "id": "movie-4022125"
  },
  {
    "sourceId": "1870121",
    "title": "玫瑰剪刀手",
    "countryCode": "CO",
    "countryName": "Colombia",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1506855012.jpg",
    "summary": "一个哥伦比亚的漂亮的女杀手，遇到了两个不同类型的追求者。一个是英俊和风流的富家子弟，一个是可爱和腼腆的小兄弟。围绕着爱情、杀手的悲剧宿命、亲情和混乱的时局，Rosario的感情时而炙热、时而疯狂、时而温柔，最后又是无可奈何的撒手人寰。",
    "genres": [
      "Drama",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "哥伦比亚",
      "墨西哥",
      "西班牙",
      "巴西"
    ],
    "rating": 5.7,
    "votes": 191,
    "runtime": "126 min",
    "releaseDate": "2005-11-11",
    "ratingRank": null,
    "id": "movie-1870121"
  },
  {
    "sourceId": "1947460",
    "title": "Minimum-Maximum",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2550492983.jpg",
    "summary": "1.1\tMeine Damen Und Herren\t0:35",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 9.5,
    "votes": 456,
    "runtime": "126 min",
    "releaseDate": "2005-12-02",
    "ratingRank": null,
    "id": "movie-1947460"
  },
  {
    "sourceId": "3060405",
    "title": "Christina Aguilera: Back to Basics - Live and Down Under",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498697744.jpg",
    "summary": "从2006年11月持续至2007年8月的“Back To Basics ”巡演吸引了全球55万名乐迷到场观看，票房4800多万美元，成为2007年度美国独唱女歌手巡演票房成绩榜冠军。这张“Live And Down Under Back To Basics Tour”录制于澳大利亚悉尼奥林匹克体育馆的现场演唱会。于2月5日正式上市。Christina aguilera 在巡演期间就已经身怀有孕，但她仍坚持到巡演结束。是一位非常值得尊敬的歌手。",
    "genres": [
      "Drama",
      "Thriller",
      "Music",
      "Musical",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "音乐",
      "歌舞",
      "奇幻"
    ],
    "originalRegions": [
      "德国",
      "英国"
    ],
    "rating": 9.4,
    "votes": 263,
    "runtime": "Unknown runtime",
    "releaseDate": "2008-02-05",
    "ratingRank": null,
    "id": "movie-3060405"
  },
  {
    "sourceId": "2150421",
    "title": "旅途守护天使",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512170801.jpg",
    "summary": "亲爱的乘务员要退休了，本次从维也纳发往威尼斯的列车将驶向他职业生涯的终点站。他自然希望一路上平平安安，但事实并不是这样……",
    "genres": [
      "Drama",
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 9.0,
    "votes": 100,
    "runtime": "90 min",
    "releaseDate": "1997-12-27",
    "ratingRank": null,
    "id": "movie-2150421"
  },
  {
    "sourceId": "1867888",
    "title": "尼伯龙根2：克里姆希尔德的复仇",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1924,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2455300039.jpg",
    "summary": "根据德国古典史诗《尼贝龙根之歌》改编。本片共两部，第一部的副标题是《西格弗里德》或《西格弗里德之死》，又译《斩龙遇仙》；第二部《克伦希尔德的复仇》。第一部剧情：库山王子西格弗里德从传说中得知，如果能用丛林内的巨龙血液沐浴，就能全身刀剑不入，乃立刻启程斩龙取血。不料飘来一片树叶 贴在他的背上挡住了龙血。他自恃刀剑不入，乃出兵讨伐矮人国，夺取隐身头巾和尼伯龙根的国宝。后来，他更凭这两样法宝之助打败冰岛女王的武士，跟王妹克伦希尔德结婚。武士哈根获悉，将长矛对准被树叶贴住而未沾龙血的背部猛掷，西格弗里德应声倒地。第二部描述西格弗里德死后，克伦希尔德嫁给了匈奴国王伊泽尔，生下一个孩子。她邀请她的兄弟前来参加派对，并鼓励伊泽尔向杀死她前夫西格弗里德的凶手哈根报仇。不料哈根得到她兄弟们的保护，于是她必须为逼迫自己的兄弟交出哈根而展开一场激战。",
    "genres": [
      "Drama",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.7,
    "votes": 697,
    "runtime": "129 min",
    "releaseDate": "1924-04-26",
    "ratingRank": null,
    "id": "movie-1867888"
  },
  {
    "sourceId": "1298312",
    "title": "尼伯龙根：西格弗里德之死",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1924,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455300134.jpg",
    "summary": "这是一个根据一个古老的德国传说改编的故事。很久以前有一个英雄，他叫西格弗里德。因为龙血沐浴，他浑身刀枪不入，力大无比。有一天，他邂逅了美丽的公主西里姆希尔德而坠入了情网，决心去城堡里找她，他这一路经历了很多，遇到了好人还有坏人......",
    "genres": [
      "Drama",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.6,
    "votes": 953,
    "runtime": "140 min",
    "releaseDate": "1924-02-14",
    "ratingRank": null,
    "id": "movie-1298312"
  },
  {
    "sourceId": "1292504",
    "title": "柏林苍穹下",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792520149.jpg",
    "summary": "柏林由两位天使守护着，一个是对人世疾苦冷眼旁观的卡西尔，另一个是常常感怀于人类疾苦的丹密尔（布鲁诺•甘茨 Bruno Ganz  饰）。二人穿着宽大的天使袍，在城市各处游荡，倾听人们的祈祷，默默观察人们的内心世界。马戏团玛瑞安（苏韦戈•多马丁Solveig Dommartin 饰）的心事引来了丹密尔的同情，因为马戏团经营不善，面临倒闭，玛瑞安满心烦恼。这个马戏团的天使演员令丹密尔动了凡心，他决定化作凡人，追求一段美满感情。",
    "genres": [
      "Drama",
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "西德",
      "法国"
    ],
    "rating": 8.5,
    "votes": 26639,
    "runtime": "128 min",
    "releaseDate": "1987-09-23",
    "ratingRank": null,
    "id": "movie-1292504"
  },
  {
    "sourceId": "1304596",
    "title": "谁来为我摘月亮",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p459930268.jpg",
    "summary": "对于少女马拉卡（楚潘·哈玛托娃 Chulpan Khamatova 饰）来说，看戏是生活里最让她感到愉快的事情。一天晚上，昏迷的马拉卡被人强暴，事后，怀孕的她企图进行流产手术，却意外的遇到了重重的困难。为了保全家族的颜面，马拉卡和父亲开始了寻找腹中孩子之父的旅程，他们来到了专门搭载演员的飞机上，但他们要找的那个人却并不在那里。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "德国",
      "日本",
      "塔吉克斯坦",
      "乌兹别克斯坦",
      "奥地利",
      "瑞士",
      "法国",
      "俄罗斯"
    ],
    "rating": 8.5,
    "votes": 3593,
    "runtime": "107 min",
    "releaseDate": "1999-09-08",
    "ratingRank": null,
    "id": "movie-1304596"
  },
  {
    "sourceId": "1470246",
    "title": "三生计",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1921,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2169249450.jpg",
    "summary": "死神来到人世，住在一幅没有门户的围墙后面，死去的亡魂穿过围墙去到异界。",
    "genres": [
      "Thriller",
      "Fantasy"
    ],
    "originalGenres": [
      "惊悚",
      "奇幻"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.5,
    "votes": 1103,
    "runtime": "105 min",
    "releaseDate": "1921-10-06",
    "ratingRank": null,
    "id": "movie-1470246"
  },
  {
    "sourceId": "1921644",
    "title": "咸海与神磨2",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1811788175.jpg",
    "summary": "简 介：",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "捷克",
      "德国"
    ],
    "rating": 8.5,
    "votes": 111,
    "runtime": "90 min",
    "releaseDate": "2006-02-23",
    "ratingRank": null,
    "id": "movie-1921644"
  },
  {
    "sourceId": "1772560",
    "title": "和平战士",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p536934426.jpg",
    "summary": "在比赛中，丹•米尔曼（斯科特•麦克洛维茨 Scott Mechlowicz 饰）完成了一组高难度的吊环动作，却在落地时把左腿摔得粉碎。他猛然惊醒，原来是南柯一梦。凌晨三点，受惊的米尔曼出去散心，意外在加油站结识了一位身怀绝技的老者苏格拉底（尼克•诺特 Nick Nolte 饰），两人成了忘年交。米尔曼外形俊朗，成绩优异，所以总有女孩子围绕身边，然而因为跟好友的女友上床而惹得兄弟反目。另外，他一直希望完成一个高难度动作，却遭到教练的强烈反对，因为后者怕他受伤。由于困扰的时候，他就会来加油站跟苏格拉底交谈。然而一场突如其来的车祸使得米尔曼丧失一切，双脚骨头碎了近100处，他的体操生涯遭到毁灭性打击。病床上的米尔曼这时想起了苏格拉底。在苏格拉底的指引下，米尔曼通过集中全部精神创造了奇迹……",
    "genres": [
      "Drama",
      "Romance",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "运动"
    ],
    "originalRegions": [
      "德国",
      "美国"
    ],
    "rating": 8.4,
    "votes": 5516,
    "runtime": "120 min",
    "releaseDate": "2006-06-02",
    "ratingRank": null,
    "id": "movie-1772560"
  },
  {
    "sourceId": "1292207",
    "title": "铁皮鼓",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1979,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1792296798.jpg",
    "summary": "奥斯卡（大卫·本奈特 David Bennent 饰）的家庭有些荒诞。他的母亲和自己的表弟相恋，由于近亲不能结婚，所以被迫嫁给了一位商人。奥斯卡是谁的孩子只有他母亲知道。在他三岁生日那天，母亲送了他一面铁皮鼓。奥斯卡十分喜欢，整天挂在脖子上敲。",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "西德",
      "波兰",
      "法国",
      "南斯拉夫"
    ],
    "rating": 8.3,
    "votes": 38938,
    "runtime": "142 min",
    "releaseDate": "1979-05-03",
    "ratingRank": null,
    "id": "movie-1292207"
  },
  {
    "sourceId": "1775004",
    "title": "克拉姆一家2",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512170335.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "丹麦"
    ],
    "rating": 9.0,
    "votes": 310,
    "runtime": "97 min",
    "releaseDate": "1992-12-04",
    "ratingRank": null,
    "id": "movie-1775004"
  },
  {
    "sourceId": "1769053",
    "title": "克拉姆一家",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511779823.jpg",
    "summary": "丹麦男孩克拉姆(Laus Hoybye饰演)是个性格开朗，阳光机灵的小男孩，虽然他不懂女孩子心里在想什么;老师为什么总为难他;班里的死对头总是让他难堪，可他依然热爱生活，就像他爸爸一样。他的爸爸(Laus Hoybye饰演)是他所在学校高年级组的老师，对待学生脾气暴躁，大吼大叫，但是他很爱自己的家庭。爸爸认为小克拉姆在自己的学习上学就应该给其他孩子树立榜样，奈何小克拉姆总总惹出\"事端\"，甚至是校长办公室的常客，不过这又何妨，老克拉姆对自己的孩子们可不会发脾气。妈妈(Karen-Lise Mynster)正在准备幼儿园培训资格考试，可一大堆家务和每天家里乱哄哄的场面让她很是头疼，虽然她很爱丈夫和孩子们，但是如果你打搅她准备考试的话，她可是要发脾气的。此外，克拉姆还有一个总把\"我今天就要搬出这个家\"挂在嘴上的姐姐，一个还在上幼儿园的弟弟，一个会搭树屋会做陷阱和机关的好朋友--神秘男孩汤姆(Christian Potalivo饰演)，以及他喜欢的女同学加邻居约莎(Barbara Topsoe-Rothenborg饰演)。",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "丹麦"
    ],
    "rating": 8.9,
    "votes": 766,
    "runtime": "85 min",
    "releaseDate": "1991-10-04",
    "ratingRank": null,
    "id": "movie-1769053"
  },
  {
    "sourceId": "1775005",
    "title": "克拉姆一家3",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s1646164.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "丹麦"
    ],
    "rating": 8.9,
    "votes": 204,
    "runtime": "90 min",
    "releaseDate": "1994-12-25",
    "ratingRank": null,
    "id": "movie-1775005"
  },
  {
    "sourceId": "1937822",
    "title": "伯德街小岛",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2518945089.jpg",
    "summary": "第二次世界大战期间，在一个用高墙围起来的犹太区的废弃大工厂里，里面的犹太人诚惶诚恐的生活和工作着，而且人数越来越少，因为纳粹时不时的就会进来把一些人带走，先是妇女儿童，再是老人，后来就要全部带走了，他们的下场可想而知。在一次清剿中，一位父亲想让他的父亲和儿子逃命，就准备和纳粹拼命，可是由于有人告密，失败了，这时那位祖父为了让孙子活命，义无反顾的占了出来，他的小孙子暂时躲过了灾难，躲了起来，那位祖父留下的就只有大街上的一顶帽子了。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "丹麦",
      "英国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 573,
    "runtime": "103 min",
    "releaseDate": "2001-03-18",
    "ratingRank": null,
    "id": "movie-1937822"
  },
  {
    "sourceId": "1292908",
    "title": "家宴",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1711012673.jpg",
    "summary": "一场在丹麦地方富绅海吉豪宅中举行的周末家庭聚会，是为了庆祝他六十岁大寿而筹办的。他的儿子与媳妇、女友与男友，还有几位亲友齐聚一堂为他庆生。不过原来该是融洽的热闹的晚宴，却笼罩着诡异的气氛，仿佛海吉两周前自杀身亡的女儿阴魂犹在。岂知早逝女孩的双胞兄弟击杯起身发言，控诉父亲乱伦并谋杀亲生女儿，引爆了席间的争议对立。而在此状况下，这群人不得不采取先发制人的手段……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "丹麦",
      "瑞典"
    ],
    "rating": 8.3,
    "votes": 3642,
    "runtime": "105 min",
    "releaseDate": "1998-06-19",
    "ratingRank": null,
    "id": "movie-1292908"
  },
  {
    "sourceId": "1295877",
    "title": "二楼传来的歌声",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163286030.jpg",
    "summary": "「或许得开始承认那些令我们无能为力的环境，我们自己也得负上责任。我相信西方人的生活方式抑制了人们的潜能发展。你看本片，应该明白人类的行为有多愚蠢。紊乱将人蚕食，情况越来越严重」 ─导演 洛伊 安德森（Roy Andersson）",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "丹麦",
      "挪威",
      "瑞典"
    ],
    "rating": 8.2,
    "votes": 4638,
    "runtime": "98 min",
    "releaseDate": "2000-10-06",
    "ratingRank": null,
    "id": "movie-1295877"
  },
  {
    "sourceId": "1478398",
    "title": "亚当的苹果",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509945381.jpg",
    "summary": "新纳粹光头党亚当（Ulrich Thomsen 饰）被送往一个偏远的教堂做社会服务，在这里他遇到各色奇怪之人。不过对他来说，最难缠的莫过于虔诚古板的神父伊万（Mads Mikkelsen 马兹•米克尔森 饰）了。桀骜不驯的亚当在伊万面前完全没有办法，作为服务的一部分，亚当选择浇灌苹果树，并与神父约定用秋天收获的果实做苹果派。但是各类天灾人祸不断威胁着苹果的生长，伊万相信这是魔鬼所为，亚当则认为这纯粹是上帝的恶作剧……",
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "丹麦",
      "德国"
    ],
    "rating": 8.2,
    "votes": 1760,
    "runtime": "94 min",
    "releaseDate": "2005-04-15",
    "ratingRank": null,
    "id": "movie-1478398"
  },
  {
    "sourceId": "1292468",
    "title": "破浪",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p762255833.jpg",
    "summary": "上世纪70年代的苏格兰，一个略带神经质的女子贝丝（艾米丽·沃森 Emily Watson 饰）不顾宗教束缚嫁给了石油工人亚恩（斯特兰·斯卡斯加德 Stellan Skarsgård 饰）。恩爱生活并不长久，亚恩在一次石油作业中身负重伤，沦为瘫痪。贝丝非常难受，甚至觉得是自己的欲望导致了这个悲剧。为了唤醒丈夫的生命力，贝丝挑逗不同的男人，和他们发生关系，让亚恩的病情可以被情欲的力量征服。丈夫的病情竟然有了好转，然而，村里的人都对贝丝投以唾弃的目光，贝丝亦被送进精神病院。为爱牺牲的信念在贝丝心中强烈燃烧，将再一次把她逼入绝境。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "丹麦",
      "瑞典",
      "法国",
      "荷兰",
      "挪威",
      "冰岛",
      "西班牙"
    ],
    "rating": 8.1,
    "votes": 11469,
    "runtime": "159 min",
    "releaseDate": "1996-05-03",
    "ratingRank": null,
    "id": "movie-1292468"
  },
  {
    "sourceId": "3284392",
    "title": "潜水艇",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p603777086.jpg",
    "summary": "尼克（雅各布·克德格恩 Jakob Cedergren 饰）很少回忆过去，因为那里存在着的只有痛苦和悲剧，然而，回忆却不放过尼克，它的一次次纠缠和卷土重来让尼克只能通过酗酒和健身才能保持心智的健全。在尼克的记忆力，弟弟是唯一温暖的存在，他们正是靠着曾经的相互扶持，在得以生存至今。如今，这个温暖的男人却沦为了一届毒贩，为了生活和保留儿子马丁（加斯塔夫·芬奇·卡杰鲁夫 Gustav Fischer Kjærulff 饰）的抚养权而终日四处奔波。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "丹麦",
      "瑞典"
    ],
    "rating": 7.8,
    "votes": 2779,
    "runtime": "105 min",
    "releaseDate": "2010-03-25",
    "ratingRank": null,
    "id": "movie-3284392"
  },
  {
    "sourceId": "1466198",
    "title": "响舞",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p551031558.jpg",
    "summary": "年逾七十的索拉已拍過多次音樂舞蹈電影，被譽為真正的“歌舞片大內高手”，連《紅磨坊》Moulin Rouge導演巴茲魯曼的成名作《舞國英雄》Strictly Ballroom也受他啟發。05年的作品《嚮舞》Iberia是他第六度以佛朗明哥為題材的電影，但精力旺盛的他只要登高一呼，在全世界各大音樂廳表演的西班牙大師級舞蹈家及音樂家們，必定放下手邊工作，飛回西班牙參與影片的拍攝。",
    "genres": [
      "Musical"
    ],
    "originalGenres": [
      "歌舞"
    ],
    "originalRegions": [
      "西班牙",
      "法国"
    ],
    "rating": 8.9,
    "votes": 257,
    "runtime": "120 min",
    "releaseDate": "2005-05-11",
    "ratingRank": null,
    "id": "movie-1466198"
  },
  {
    "sourceId": "1306469",
    "title": "美莲娜的故事",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1996,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s1655379.jpg",
    "summary": "In post-Franco Spain, a woman is hard-pressed to figure out what the new rules for women are. In this melodrama based on the novel by Almudena Grandes, Malena (newcomer Adriana Gil) explores life and relationships in the ever-changing world she finds herself in. Complicating matters for Malena is the example of her older sister, Reina, who is impeccably well-behaved. What's a girl to do except seek solace in the arms of as many men as possible? As she stumbles from catastrophe to catastrophe, Malena becomes her family's poster-child for what not to do with one's life.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙",
      "法国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 141,
    "runtime": "109 min",
    "releaseDate": "1996-04-12",
    "ratingRank": null,
    "id": "movie-1306469"
  },
  {
    "sourceId": "1303813",
    "title": "饲养乌鸦",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1976,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204703690.jpg",
    "summary": "弗朗哥统治时期的西班牙马德里，女童安娜（Ana Torrent 饰）与两个姐妹在军官父亲安赛莫死后被过继给姨妈抚养，安塞莫在世时风流成性，母亲玛莉亚（Geraldine Chaplin 饰）为他放弃事业最后落得在寂寞压抑的生活中痛苦不堪，早早去世。关于母亲的记忆不时浮现在安娜脑海，这些记忆混同她对死亡的臆想慢慢影响了现实生活。姐妹三人在姨妈的看顾下并不安分，姨妈正陷入一场同安赛莫已婚战友的恋情，安娜的举止让她愈发感到威胁。安娜试图用一瓶所谓毒药帮助生活不能自理的祖母自杀，而那瓶物事不过只是苏打，祖母拒绝服毒，安娜又将目标对向了姨妈……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.5,
    "votes": 3375,
    "runtime": "110 min",
    "releaseDate": "1976-01-26",
    "ratingRank": null,
    "id": "movie-1303813"
  },
  {
    "sourceId": "1449406",
    "title": "特蕾莎修女",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516187331.jpg",
    "summary": "本片内容跨越了半个世纪，真实而深刻的记述了德蕾莎修女秉持著对上帝的信仰与奉献的精神，发扬人性至善的光辉，超越国界与藩篱，给予数以百万计贫困苦难的人带来 希望与尊严慈悲的恻隐之心，无怨无悔的照顾无依无靠的人们，让他们知道有人关心著他们，她抚慰了苦难人的心，发扬了信、望、爱的至高精神，为那些弃婴、麻疯病人以及比穷人还穷的人们默默付出，鞠躬尽瘁。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "西班牙",
      "英国",
      "意大利"
    ],
    "rating": 8.5,
    "votes": 1231,
    "runtime": "180 min",
    "releaseDate": "2003-10-19",
    "ratingRank": null,
    "id": "movie-1449406"
  },
  {
    "sourceId": "4252918",
    "title": "克里斯梦游美洲",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519768382.jpg",
    "summary": "动画片名：Las mil y una... Américas",
    "genres": [
      "Drama",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动画"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.5,
    "votes": 169,
    "runtime": "30 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-4252918"
  },
  {
    "sourceId": "1871075",
    "title": "一只名叫痛苦的狗",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453897961.jpg",
    "summary": "这是一部完全手工绘制的动画作品，全片分为七个章节，讲述了八位艺术大师和他们的模特之间的微妙关系，以此反映出在特殊的历史背景和社会现实下他们对自己创作风格的或坚守或转变。他们分别是西班牙绘画大师戈雅（Francisco de Goya，1746-1828），维拉斯奎兹（D iego Velazquez，1599-1660），毕加索（Pablo Picasso，1881-1973），达利（Salvado）、索洛利亚、德·托雷斯、墨西哥女画家弗里达和法国前卫艺术大师马塞尔·杜尚。",
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.4,
    "votes": 904,
    "runtime": "90 min",
    "releaseDate": "2001-11-16",
    "ratingRank": null,
    "id": "movie-1871075"
  },
  {
    "sourceId": "1309003",
    "title": "深海长眠",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p646744389.jpg",
    "summary": "雷蒙（贾维尔•巴尔登 Javier Bardem 饰）在一次跳海运动中出了意外，全身瘫痪。原本英俊壮健的他要在煎熬中度过余生。他忍受着常人无法理解的痛苦中过活了26年，已经无法领会到活着的意义。他一再申请安乐死，却无法获准。他请来律师朱莉娅（贝兰•鲁达 Belén Rueda 饰），这个女人在与雷蒙的相处中慢慢认同了他的观点，她不幸也身患绝症，二人更加惺惺相惜。朱莉娅承诺帮雷蒙出版诗集后，就和他一同赴死。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "西班牙",
      "法国",
      "意大利"
    ],
    "rating": 8.3,
    "votes": 16566,
    "runtime": "125 min",
    "releaseDate": "2004-09-03",
    "ratingRank": null,
    "id": "movie-1309003"
  },
  {
    "sourceId": "3769466",
    "title": "永远活下去",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1972741017.jpg",
    "summary": "12岁的山姆（罗比·凯 Robbie Kay）是白血病末期病人，在第三次发病后他停止了上学，也不再住院化疗，而是每天由护士为他送血小板到家里，观察病情发展，度过生命的最后一年。山姆有位同样已经末期、只能坐轮椅的伙伴菲利克斯（亚历克斯·伊特尔 Alex Etel 饰）。两 个男孩的家长专门请了家庭老师辅导他们，安排每天的学习活动。老师鼓励他们写日记，列出愿望清单。不管是成为科学家、看第一部成人恐怖片、跟女生接吻、搭乘飞船……山姆和菲利克斯都不畏病痛的一个个实现，同时还从自己的视角探索生死疑难。他们人生旅程虽然短暂，却无比精彩和绚烂。",
    "genres": [
      "Drama",
      "Family",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "儿童"
    ],
    "originalRegions": [
      "西班牙",
      "英国"
    ],
    "rating": 8.3,
    "votes": 1167,
    "runtime": "99 min",
    "releaseDate": "2010-10-29",
    "ratingRank": null,
    "id": "movie-3769466"
  },
  {
    "sourceId": "2225432",
    "title": "夜曲",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p784407466.jpg",
    "summary": "提姆是一个生活在孤儿院的孩子，他孤僻又有些胆小，熟悉夜空中的星星，每晚要看着天上的星光后才能安然睡去，但是这天，提姆发现那颗属于他的星星消失不见了！无法入睡的提姆在屋顶焦灼的走动，不慎坠落，危机关头，督促猫们帮助孩子入睡的猫神父帕斯特将他救起。从帕斯特口中，提姆知晓还有一个夜间世界的存在，而莫卡是这个世界的管理者，提姆在帕斯特的带领下面见莫卡，向其说明星星正在逐渐消失的异象，可莫卡并不关心。提姆只得偷拿了星星守护人的联系方式，拜托帕斯特再度陪伴他找回星星。在神奇的夜晚世界，提姆在帕斯特的猫随从们、制作梦和露珠的小精灵之间向星星守护者的住处进发，而并不知道他和帕斯特此刻落入了莫卡的阴谋……",
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "西班牙",
      "法国"
    ],
    "rating": 8.2,
    "votes": 3907,
    "runtime": "80 min",
    "releaseDate": "2007-10-11",
    "ratingRank": null,
    "id": "movie-2225432"
  },
  {
    "sourceId": "1303061",
    "title": "卡门",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1983,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558197046.jpg",
    "summary": "舞蹈明星兼编导安东尼奥（安东尼奥·加德斯 Antonio Gades饰）正在筹拍法国作曲家比才的名剧《卡门》。痴迷悲剧《卡门》的安东尼奥，一直在寻找女主角卡门的合适人选。直到一个也叫做卡门的女舞蹈演员卡门（劳拉·德尔·索尔 Laura del Sol饰）出现，安东尼奥立刻决定由她来担任女主角。安东尼奥被年轻性感的卡门身上独特的气质所深深吸引，费尽心血培养她成为真正优秀的“卡门”。在排练中他渐渐对卡门产生了欲罢不能的爱欲，然而自由奔放的卡门却不愿受到约束而爱上他人。爱与死的纠缠渐渐模糊了戏剧与现实的界限，两人在不知不觉中陷入其中，不能自拔。",
    "genres": [
      "Drama",
      "Romance",
      "Music",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "音乐",
      "歌舞"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.2,
    "votes": 2600,
    "runtime": "102 min",
    "releaseDate": "1983-05-06",
    "ratingRank": null,
    "id": "movie-1303061"
  },
  {
    "sourceId": "1316560",
    "title": "列宁格勒牛仔征美记",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1652558241.jpg",
    "summary": "列宁格勒牛仔摇滚乐队的几个成员装扮怪异，戴大墨镜，烫飞机头，夸张的火箭鞋就是他们的标志。可在他们的家乡看不见事业成功的希望，于是他们决定转战美国寻求机会，在即将出发的前夜，吉他手却被冻死，尽管如此，队员们还是将他装入了放满冰块的木箱中带上了旅途。此时同村的一个怪异的哑巴偷偷跟随乐队来到了纽约。纽约的机会并不如他们想象的丰富，困窘的生活仍在继续，在他们走投无路之时，得到了一个来自墨西哥的婚宴演出机会。于是他们用仅剩的钱从一个美国售货员（吉姆•贾木许 Jim Jarmusch 饰）手中买了一辆旧车后继续向墨西哥进发，那里有他们最后的梦想……",
    "genres": [
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "芬兰",
      "瑞典"
    ],
    "rating": 8.4,
    "votes": 8061,
    "runtime": "78 min",
    "releaseDate": "1989-03-24",
    "ratingRank": null,
    "id": "movie-1316560"
  },
  {
    "sourceId": "1401895",
    "title": "火柴厂女工",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2384963435.jpg",
    "summary": "在火柴厂工作的伊利丝（Kati Outinen 饰）生活宛如一潭死水，她每天坐着机械、枯燥的工作，身边没有爱人、朋友，甚至父母也与她的关系非常冷淡。她何尝不渴望爱情的到来，但即使在舞池中，她也永远是一个尴尬的壁花小姐。直到某天，她在酒吧邂逅了一名男子。在她来看，爱情的春天似乎就这样到来了……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "芬兰",
      "瑞典"
    ],
    "rating": 8.3,
    "votes": 4535,
    "runtime": "68 min",
    "releaseDate": "1990-01-12",
    "ratingRank": null,
    "id": "movie-1401895"
  },
  {
    "sourceId": "1299877",
    "title": "波希米亚生活",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266076990.jpg",
    "summary": "在艺术之都的巴黎，几个穷困潦倒的艺术家住在低档住宅区，他们分別是來自阿爾巴尼亞的油畫家、愛爾蘭的作曲家及一個法國劇作家，他们因缘聚合，虽然生活窘迫、境况艰难却一直坚持创作，渴望有朝一日被社会认同，虽然如此，他们依旧乐观生活，渴望爱情，他们互相帮助，顽强努力。机会终于向他们招手，而外省女孩咪咪的出现让他们三人的发生了微妙的变化，画家爱上了她，不久，画家因为非法入境而被驱逐，好事多磨，在好朋友们帮助下他又回到了巴黎当自由艺术家，他不仅事业有了转机也赢得了咪咪的爱情，好景不长，他们的杂志社倒闭了，三人回到了原地，更悲惨的命运等待着他们….。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "芬兰",
      "法国",
      "瑞典",
      "德国"
    ],
    "rating": 8.2,
    "votes": 2230,
    "runtime": "100 min",
    "releaseDate": "1992-02-27",
    "ratingRank": null,
    "id": "movie-1299877"
  },
  {
    "sourceId": "1478280",
    "title": "战场上的小人球",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p539468749.jpg",
    "summary": "电影《我的母亲》改编自芬兰作家赫基•希耶塔梅斯的同名小说。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "芬兰",
      "瑞典"
    ],
    "rating": 8.1,
    "votes": 1271,
    "runtime": "111 min",
    "releaseDate": "2005-09-30",
    "ratingRank": null,
    "id": "movie-1478280"
  },
  {
    "sourceId": "4030657",
    "title": "勒阿弗尔",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1833432884.jpg",
    "summary": "马塞尔（安德烈·维尔姆斯 André Wilms 饰）曾经是一个小有名气的作家，可是，热爱自由的他厌倦了作家高高在上的枯燥生活，于是来到了勒阿弗尔，摇身一变成为了一个快乐的擦鞋匠。勒阿弗尔可爱而又热情的居民让马塞尔找到了心灵的归宿，在这里，马塞尔过上了梦寐以求的平静而又安定的生活。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "芬兰",
      "法国",
      "德国"
    ],
    "rating": 7.9,
    "votes": 5700,
    "runtime": "93 min",
    "releaseDate": "2011-05-17",
    "ratingRank": null,
    "id": "movie-4030657"
  },
  {
    "sourceId": "1472907",
    "title": "薄暮之光",
    "countryCode": "FI",
    "countryName": "Finland",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p677193910.jpg",
    "summary": "社会底层人士考斯迪南（詹·海帝安Janne Hyytiäinen饰）是个不起眼的保安。他的生活和事业都充斥着失败感，如果说他曾经有过一些挣扎的话，也陷于徒劳，因为无穷无尽的孤独和自卑感已经把他牢牢笼罩。他似乎已经被这个世界遗忘了太久。美女米尔雅（玛利亚·海斯卡涅 Maria Järvenhelmi 饰）就这样意外的出现了，被她如此垂青，考斯迪南的人生终于重现亮光。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "芬兰",
      "法国",
      "德国"
    ],
    "rating": 7.9,
    "votes": 3243,
    "runtime": "78 min",
    "releaseDate": "2007-02-03",
    "ratingRank": null,
    "id": "movie-1472907"
  },
  {
    "sourceId": "2040152",
    "title": "法国大革命",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1989,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2562096919.jpg",
    "summary": "法国凯撒奖(1990；第15届)",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "西德",
      "加拿大",
      "英国"
    ],
    "rating": 9.1,
    "votes": 492,
    "runtime": "360 min",
    "releaseDate": "1990-09-30",
    "ratingRank": null,
    "id": "movie-2040152"
  },
  {
    "sourceId": "1790587",
    "title": "苦儿流浪记",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508683103.jpg",
    "summary": "雷米（儒勒·斯楚克 Jules Sitruk 饰）从小就失去了父母，被人收养，过着寄人篱下的生活。尽管养母十分疼爱雷米，但是拮据的生活还是让养父决定将雷米卖给四处流浪的卖艺人维达里（皮埃尔·理查德 Pierre Richard 饰）。",
    "genres": [
      "Drama",
      "Children",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "儿童",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.8,
    "votes": 677,
    "runtime": "180 min",
    "releaseDate": "2000-12-18",
    "ratingRank": null,
    "id": "movie-1790587"
  },
  {
    "sourceId": "3661110",
    "title": "Alizee2004演唱会",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2376401413.jpg",
    "summary": "Alizée en concert is the third album by Alizée, released on October 18, 2004. After the release of her second album, Mes courants électriques, she toured France. Performances from these concerts make up Alizée en concert.",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.8,
    "votes": 184,
    "runtime": "90 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3661110"
  },
  {
    "sourceId": "2084602",
    "title": "爱尔丝小姐",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2153966838.jpg",
    "summary": "布劳恩是维也纳一位有名的律师，膝下一个漂亮的女儿，名叫爱尔丝。布劳恩因经济拮据挪用孤儿善款被发现，检察长限他三天内归还钱款，不然将受到指控。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "奥地利",
      "德国"
    ],
    "rating": 8.8,
    "votes": 108,
    "runtime": "Unknown runtime",
    "releaseDate": "2002-11-04",
    "ratingRank": null,
    "id": "movie-2084602"
  },
  {
    "sourceId": "1306527",
    "title": "天使的约定",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555039519.jpg",
    "summary": "正接受医院化疗的十岁男孩MARTY，一天走进七十岁ANTOINC的病房里，ANTOINC虽然失去了活动与说话能力，但想象完全清晰，两人开始以眼神表达心意，一段不平凡的忘年之交由此而生",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.6,
    "votes": 282,
    "runtime": "86 min",
    "releaseDate": "2000-01-26",
    "ratingRank": null,
    "id": "movie-1306527"
  },
  {
    "sourceId": "3181788",
    "title": "余生的第一天",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1486075677.jpg",
    "summary": "杜瓦尔家是居住在法国某市郊区的五口之家，身为出租车司机的罗伯特（Jacques Gamblin 饰）和妻子玛丽—让内（Zabou Breitman 饰）共同抚养三个儿女长大。长子阿尔贝（Pio Marmaï 饰）早年离家，在外独闯生活；次子拉菲尔（Marc-André Grondin 饰）是一个似乎对凡事都无所谓的散漫青年；最小的女儿弗洛尔（Déborah François 饰）从乖乖女变成叛逆少女，她的反叛时常令母亲不高兴。阿尔贝的离开让玛丽分外伤心，在此之后她转而求学，努力追寻自己的梦想。随着时间的流逝，父母、子女、兄妹彼此各有各的心事，然似乎总有什么将他们的关系拉远……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.5,
    "votes": 14356,
    "runtime": "114 min",
    "releaseDate": "2008-07-23",
    "ratingRank": null,
    "id": "movie-3181788"
  },
  {
    "sourceId": "1303040",
    "title": "蒙古精神",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1221316814.jpg",
    "summary": "在中苏边境跑生意的俄罗斯人谢尔盖不但迷了路，自己的卡车还陷到了泥坑里。他茫然地爬上山头以求救援，却看见了蒙古人天葬的尸体，惊愕的奔跑中遇到了蒙古牧民贡巴。淳朴热情的贡巴把谢尔盖请到家中杀羊摆酒进行款待，并帮他解决了卡车的问题。 贡巴、妻子和他们的三个孩子象祖先一样过着传统的游牧生活，这种温馨自然的家庭生活让谢尔盖回想起自己远在故乡的亲人。不久，谢尔盖在城里的歌厅酒后闹事被警察带走，贡巴又托亲戚把他接了出来。最后，这两个民族不同、语言不通、生活习惯迥异的男人成了要好的朋友。 而贡巴也有自己的忧虑，他的妻子已生育了三个孩子，医生告诫她不要再生孩子，这件事愁坏了贡巴，为此他已经好几个月没能和妻子同房。一天晚上，城里长大的妻子告诉贡巴现在有种叫避孕套的东西可以解决这个问题，并叮嘱他进城买彩电时捎回几个。 在城里的药店里，贡巴感到格外尴尬，最终只好笑嘻嘻地走开。回家途中，贡巴在享用过城里的罐头和饮料后梦到了自己的祖先——成吉思汗……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "苏联"
    ],
    "rating": 8.5,
    "votes": 2945,
    "runtime": "119 min",
    "releaseDate": "1991-09-01",
    "ratingRank": null,
    "id": "movie-1303040"
  },
  {
    "sourceId": "3676944",
    "title": "临终的侦探",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518184706.jpg",
    "summary": "两颊绯红、嘴唇干裂、双目无神、四肢搐、奄奄一息……出现在华生面前的，是一幅非常凄惨的景像，世界上最伟大、最出色、最强悍、最聪明的侦探福尔摩斯，染上了无药可救的致命恶疾，危在旦夕……",
    "genres": [
      "Crime"
    ],
    "originalGenres": [
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.4,
    "votes": 523,
    "runtime": "50 min",
    "releaseDate": "1994-03-14",
    "ratingRank": null,
    "id": "movie-3676944"
  },
  {
    "sourceId": "3603181",
    "title": "红发会",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442242.jpg",
    "summary": "Sherlock Holmes in investigates the strange case of Jabez Wilson. The man was recently offered employment by an organization known as the Red Headed League. For the grand sum of 4 pounds per week, he was to sit in an office and copy out entries fro an encyclopedia, starting with the letter A. He had responded to an advertisement and while there were many applicants, he has no idea why he was selected as the League's beneficiary. When after several weeks his employment is suddenly terminated, Mr. Wilson doesn't know what think. Holmes quickly deduces however that it was the location of his office as much as his red hair that resulted in him getting the employment in the first place. Written by garykmcd",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.3,
    "votes": 873,
    "runtime": "52 min",
    "releaseDate": "1985-09-22",
    "ratingRank": null,
    "id": "movie-3603181"
  },
  {
    "sourceId": "1766559",
    "title": "最佳污点",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535056907.jpg",
    "summary": "Product Description",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 993,
    "runtime": "90 min",
    "releaseDate": "2000-11-13",
    "ratingRank": null,
    "id": "movie-1766559"
  },
  {
    "sourceId": "3603187",
    "title": "最后一案",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511441944.jpg",
    "summary": "After a four month absence, Sherlock Holmes returns to Baker Street following several attempts on his life. Holmes had been away on an important assignment for the French government - recovering the Mona Lisa that had bee stolen from the Louvre. He was successful in his task and appropriately rewarded by the French but he raised the ire of the crime's perpetrator - Professor Moriarty. On the morning of his return, the Professor visited Holmes in his flat and warned him to cease or he would have no choice but to take extreme measures. With several attempts on his life having already taken place, Holmes and Watson head for Switzerland. Moriarty is a relentless pursuer however and he and Holmes have a fateful encounter at the Reichenbach Falls. Written by garykmcd",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 897,
    "runtime": "50 min",
    "releaseDate": "1985-09-29",
    "ratingRank": null,
    "id": "movie-3603187"
  },
  {
    "sourceId": "3603208",
    "title": "空屋",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442621.jpg",
    "summary": "After Dr. Watson testifies at the inquest of the Honourable Ronald Adair, shot to death after returning home from his gambling club, he is followed back to his office by an eccentric bookseller who reveals himself to be Holmes in disguise. After the initial shock wears off, Holmes explains that he did not die in the fall that killed Professor Moriarity in their famous encounter at Reichenbach Falls in Switzerland three years earlier. Holmes has remained out of England to avoid Colonel Sebastian Moran, a Moriarity associate who witnessed Holmes' escape death and has vowed to kill Holmes in revenge. Holmes will try to foil Moran and solve the Adair murder. Written by Gabe Taverney (duke1029@aol.com",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 758,
    "runtime": "50 min",
    "releaseDate": "1986-07-09",
    "ratingRank": null,
    "id": "movie-3603208"
  },
  {
    "sourceId": "3603173",
    "title": "住院的病人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442284.jpg",
    "summary": "在布莱星顿先生的支助下，年轻医生特里维廉得以挂牌行医，与此同时，自称心脏衰弱的布莱星顿先生也以合伙人及住院病人的双重身份住进了诊所的二楼。",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 757,
    "runtime": "52 min",
    "releaseDate": "1985-09-15",
    "ratingRank": null,
    "id": "movie-3603173"
  },
  {
    "sourceId": "1957933",
    "title": "迪兰·莫兰：怪兽",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517976601.jpg",
    "summary": "No music reviewer would make a career writing about pianists solely from repeated performances of a single concerto, nor any pianist out of playing just the one piece. Yet sometimes writing about stand-up comedians can feel worryingly like this. They all hit more or less the same notes: London... young people... children and parenthood... today's dreadful music... religion... growing up in Ireland (obviously not every comic includes this movement, though sometimes it feels like it)... finishing off with differences between men and women, usually with reference to naughty bits and/or naughty business. The difference lies in the phrasing, the flourishes, the individual expression brought to the work by the performer.",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 703,
    "runtime": "Unknown runtime",
    "releaseDate": "2004-11-15",
    "ratingRank": null,
    "id": "movie-1957933"
  },
  {
    "sourceId": "3607017",
    "title": "马斯格雷夫仪式",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1986,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2518184319.jpg",
    "summary": "马斯格雷夫典礼，一个古老仪式，它的咒语是这样的：“太阳在哪里？在像树上面。阴影在哪里？在榆树下面。怎样测到它？向北10步又10步，向东5步又5步，向南2步又2步，向西1步又1步，就在下面”。它在说什么？",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 673,
    "runtime": "50 min",
    "releaseDate": "1986-07-23",
    "ratingRank": null,
    "id": "movie-3607017"
  },
  {
    "sourceId": "3607036",
    "title": "六座拿破仑半身像",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511444146.jpg",
    "summary": "Sherlock Holmes is asked by Inspector Lestrade of Scotland Yard to assist with a most peculiar case. He has been investigating a series of break-ins in shops and private homes where all that happens is the destruction of a bust of Napoleon. The case includes murder when one of the burglaries also leaves an unidentified dead man on the front steps. Holmes realizes that someone is searching for an article hidden in one of the busts. Written by garykmcd",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 643,
    "runtime": "50 min",
    "releaseDate": "1986-08-20",
    "ratingRank": null,
    "id": "movie-3607036"
  },
  {
    "sourceId": "3676849",
    "title": "显贵的主顾",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518184536.jpg",
    "summary": "福尔摩斯办过很多疑难怪案，但拆散他人婚姻的勾当，这还是第一次。因为拆散他人婚姻而被人狂殴到头破血流，也是第一次。因为拆散别人婚姻而被指控盗窃，更是第一次……",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 459,
    "runtime": "50 min",
    "releaseDate": "1991-03-21",
    "ratingRank": null,
    "id": "movie-3676849"
  },
  {
    "sourceId": "2016065",
    "title": "水獭塔卡",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1979,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526848077.jpg",
    "summary": "水獭塔卡出生在宁静的托特河桥洞下，那里有爱它的妈妈以及它的动物朋友们，更有对水獭充满无尽欲望，专门捕杀水獭的猎狗将局以及一大群以此为乐的人。塔卡出生不久，它的父亲被这群人发现了行踪，一路追捕，好不容易逃回了洞穴，可是母亲为了保护小塔卡的安全，忍痛咬了父亲，把它赶出了洞穴……不久以后，与塔卡相依为命的母亲也被他们猎杀了，塔卡成了顺水流浪的孤儿，不得不开始了它的旅程。",
    "genres": [
      "Drama",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.2,
    "votes": 164,
    "runtime": "87 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-2016065"
  },
  {
    "sourceId": "4850732",
    "title": "迪兰·莫兰：是什么？",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517976810.jpg",
    "summary": "Dylan Moran live at Sydney's State Theatre 15th May 2009",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "英国",
      "澳大利亚"
    ],
    "rating": 9.1,
    "votes": 886,
    "runtime": "77 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-4850732"
  },
  {
    "sourceId": "3603169",
    "title": "诺伍德的建筑师",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442211.jpg",
    "summary": "Knowing that he is about to be arrested for murder, John Hector McFarlane asks for Sherlock Holmes' assistance in establishing his innocence. McFarlane is a solicitor who was visited the previous day by Jonas Oldacre who wanted to draw up a will. McFarlane was astonished to learn that Oldacre was naming him as the beneficiary of his fortune. McFarlane had never met the man who claimed to have known his parents long ago and having no issue of his own, wanted to leave everything to him. McFarlane drew up the papers and called at Oldacre's home that evening to have everything signed but sometime in the night the man was killed and the body burned beyond all recognition. Inspector Lestrade of Scotland Yard thinks he has an open and shut case but after Holmes interviews McFarlane's mother, he thinks there is something else afoot. Written by garykmcd",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 767,
    "runtime": "52 min",
    "releaseDate": "1985-09-08",
    "ratingRank": null,
    "id": "movie-3603169"
  },
  {
    "sourceId": "3607038",
    "title": "魔鬼之足",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511443805.jpg",
    "summary": "An ailing Sherlock Holmes travels under doctors orders to Cornwall for a period of rest and convalescence. Dr. Watson accompanies him intent on ensuring his friend follows orders but they are soon approached by the Reverend Roundhay to help solve a most perplexing incident. A young woman, Brenda Tregennis, apparently died of apoplexy while playing cards with her two brothers, George and Owen who are now suffering from some type of dementia. There are wild rumors going about the village including that the incident was a supernatural phenomenon. Holmes believes there is a far more grounded explanation and with the help of a surviving brother, Mortimer Tregennis, tries to determine who would want them dead. Written by garykmcd",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 642,
    "runtime": "50 min",
    "releaseDate": "1988-04-06",
    "ratingRank": null,
    "id": "movie-3607038"
  },
  {
    "sourceId": "3603220",
    "title": "格兰其庄园",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511442463.jpg",
    "summary": "Inspector Hopkins invites Holmes to assist him in solving the brutal murder of Lord Brackenstall with a fireplace poker at his country estate. According to his bruised and battered wife, her husband was a secret alcoholic who kept his drinking discreetly hidden. On the night in question, she alleges that her house was invaded by a locally notorious thief and his two larcenous sons, who bound her, stole the family silver, bludgeoned her husband to death, and calmly helped themselves to some port wine. Lady Brackenstall denies that the obvious bruising on her face and hands are connected to the murder. When something about the three wine glasses used by the perpetrators bothers Holmes, his mind begins to move in a new direction. Written by Gabe Taverney (duke1029@aol.com)",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 631,
    "runtime": "50 min",
    "releaseDate": "1986-07-16",
    "ratingRank": null,
    "id": "movie-3603220"
  },
  {
    "sourceId": "3607042",
    "title": "银色马",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511443948.jpg",
    "summary": "Sherlock Holmes and Dr. Watson investigate the disappearance of a champion racehorse, Silver Blaze. The horse disappeared in the middle of the night from its stables and with a major race on the horizon its owner, Colonel Ross, is desperate to get his prize possession back. There had been some strange comings and goings the night the horse disappeared including a race tout trying to get inside information on the upcoming race. When the horse's trainer, John Straker, is found dead in a field, this also becomes a murder investigation with the local police less than pleased at Homes' involvement. Written by garykmcd",
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 562,
    "runtime": "50 min",
    "releaseDate": "1988-04-13",
    "ratingRank": null,
    "id": "movie-3607042"
  },
  {
    "sourceId": "3676858",
    "title": "爬行人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518184561.jpg",
    "summary": "自从61岁的普莱斯伯利教授狂热地爱上一个少女后，每隔九天，他就会被家里的狼狗狠狠地咬一次。而更令教授的女儿和助手惊骇的是：被狗咬的当天深夜，教授总是偷偷地溜出房间，在楼道和窗户上四处爬行……",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 471,
    "runtime": "50 min",
    "releaseDate": "1991-03-28",
    "ratingRank": null,
    "id": "movie-3676858"
  },
  {
    "sourceId": "3712242",
    "title": "硬纸盒子",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509534531.jpg",
    "summary": "Susan Cushing asks Holmes' help in solving the disappearance of her sister Mary Browner, but it doesn't seem Holmes' type of case until he is told of a Christmas present's grisly contents.",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 369,
    "runtime": "50 min",
    "releaseDate": "1994-04-11",
    "ratingRank": null,
    "id": "movie-3712242"
  },
  {
    "sourceId": "3158580",
    "title": "KEANE基音乐团伦敦O2现场演唱会",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151072401.jpg",
    "summary": "内容介绍：",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 240,
    "runtime": "230 min",
    "releaseDate": "2007-12-17",
    "ratingRank": null,
    "id": "movie-3158580"
  },
  {
    "sourceId": "1889694",
    "title": "怒海英雄：火攻船",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2278610371.jpg",
    "summary": "该片改编自英国畅销作家佛瑞斯特(C. S. Forester)的最得意作品，描写了18世纪末到19世纪初霍恩布洛尔船长的海上传奇，刻画了一位正直、勇敢、智慧、富有冒险精神并时刻反思人生的船长形象，该书的系列作品到目前仍受到霍恩迷的支持，在国外亦有专门的网站和讨论区交流此作品。本片讲述的是初出茅庐的Hornblower作为一个海军学员的故事，是几年以来不可多得的人物撰记片。",
    "genres": [
      "Drama",
      "War",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "战争",
      "冒险"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 158,
    "runtime": "93 min",
    "releaseDate": "1998-11-18",
    "ratingRank": null,
    "id": "movie-1889694"
  },
  {
    "sourceId": "1294534",
    "title": "塞瑟岛之旅",
    "countryCode": "GR",
    "countryName": "Greece",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2330170222.jpg",
    "summary": "故事的主角是一个长期流亡苏联的共产党人。在希腊军政府倒台后，于处人生暮年的他终于可以回归故乡。当他以如此矛盾而又暧昧的身份，再回到记忆中熟悉的地方，再面对家人与朋友时，他感觉到了人情的疏离，对未来的盲目，对于祖国低度的认同与漠视。人们企图卸下记忆的承重，却又害怕轻得迷失 方向。在这样的环境下，他意识到自己已经真正失去了国籍。最终，和他离别多年的爱人漂在爱琴海中的浮岸上。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "希腊",
      "意大利",
      "英国",
      "西德"
    ],
    "rating": 8.5,
    "votes": 2848,
    "runtime": "120 min",
    "releaseDate": "1984-04-21",
    "ratingRank": null,
    "id": "movie-1294534"
  },
  {
    "sourceId": "1301103",
    "title": "亚历山大大帝",
    "countryCode": "GR",
    "countryName": "Greece",
    "year": 1980,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1946421823.jpg",
    "summary": "本片故事发生在巴黎公社后的希腊，片中的亚历山大原本是一个土匪，后演变成民间英雄。他从监狱逃脱后，劫持了几个英国贵族，开出的“赎金”是地主将土地归还给农民。公社成立后，社会主义的理想被内讧所取代，一群意大利无政府主义者、激进份子以及只有信仰没有根基的人士为了抢班夺权不择手段。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "希腊",
      "意大利",
      "西德"
    ],
    "rating": 7.9,
    "votes": 563,
    "runtime": "210 min",
    "releaseDate": "1982-03-20",
    "ratingRank": null,
    "id": "movie-1301103"
  },
  {
    "sourceId": "1419988",
    "title": "童年旧事",
    "countryCode": "GR",
    "countryName": "Greece",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511602222.jpg",
    "summary": "故事的背景设置在 1969 年。伊里亚斯（欧格斯·卡拉亚尼斯 Yorgos Karayannis 饰）是一名10 岁的雅典男孩，非常喜欢天文学和凡尔纳的小说。伊里亚斯十分崇拜他的父亲。他父亲是一名旅游推销员，在一次商务旅行中意外死于一场交通事故。伊里亚斯的父亲在离开前曾答应及时赶回家和他一起看登月的直播，他的意外死亡让整个家庭陷入悲痛。但伊利亚却拒绝接受这个事实坚信爸爸还活着，于是他臆造了一个想像世界。 他和同伴们分享科幻故事， 甚至以爸爸的名义写信给他祖母。他一人分饰两角，好像他父亲依然在他身边。 伊里亚斯的母亲和他的教父一直想把他拉回现实，于是他们带他去度假。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "希腊",
      "德国"
    ],
    "rating": 7.8,
    "votes": 177,
    "runtime": "113 min",
    "releaseDate": "2002-12-27",
    "ratingRank": null,
    "id": "movie-1419988"
  },
  {
    "sourceId": "1293281",
    "title": "痴汉艳娃",
    "countryCode": "GR",
    "countryName": "Greece",
    "year": 1960,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513364276.jpg",
    "summary": "男人对女人说：“世界上最快乐的事就是求知”女人才不听呢",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "希腊",
      "美国"
    ],
    "rating": 7.5,
    "votes": 542,
    "runtime": "91 min",
    "releaseDate": "1960-09-09",
    "ratingRank": null,
    "id": "movie-1293281"
  },
  {
    "sourceId": "3212221",
    "title": "凯尔经的秘密",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1088520038.jpg",
    "summary": "在遥远的爱尔兰，聪颖纯真的少年修士布兰登（伊万·麦克奎尔 Evan McGuire 配音）生活在一座高墙围筑的修道院内。为了抵抗维京人的入侵，院墙不断加高，卡拉院长（布莱丹·格里森 Brendan Gleeson 配音）更严格禁止布兰登他们踏入外部世界。某天，一名留着长发、幽默风趣的修士来到修道院，他便是闻名遐迩的艾奥娜绘经师伊丹（米奇·拉里 Mick Lally 配音）。此前伊丹持续创作那部重要的宗教典籍《凯尔经》，然而异族的侵略使他不得不中断这项神圣的工作。为《凯尔经》所吸引的布兰登，决心帮助伊丹完成经典的绘制，为此他不惜挑战禁令走出修道院。外面的世界充满新奇和危险……",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "爱尔兰",
      "法国",
      "比利时"
    ],
    "rating": 8.4,
    "votes": 48259,
    "runtime": "75 min",
    "releaseDate": "2009-02-08",
    "ratingRank": null,
    "id": "movie-3212221"
  },
  {
    "sourceId": "3336237",
    "title": "吻",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2362252850.jpg",
    "summary": "故事发生在爱尔兰的首都柏林，那里是迪伦（肖恩·库瑞 Shane Curry 饰）和凯利（凯莉·奥涅尔 Kelly O'Neill 饰）的故乡。迪伦的父亲沉迷于酒精之中，喝醉了就在迪伦的身上撒气，一直以来都过着压抑生活的迪伦早就对自己的人生失去了信心和希望。凯利也好不到哪里去，她家中有兄弟姐妹六人，忙于工作的母亲根本就无暇照顾膝下子女，只能任由六个孩子自由发展。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "爱尔兰",
      "瑞典"
    ],
    "rating": 8.4,
    "votes": 1809,
    "runtime": "72 min",
    "releaseDate": "2008-11-21",
    "ratingRank": null,
    "id": "movie-3336237"
  },
  {
    "sourceId": "1306426",
    "title": "血腥星期天",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p787880217.jpg",
    "summary": "事件起因是北爱人民不满英国政府未经审讯便予以拘留的不人道做法，决定在1月30日这天举行一场游行。英国陆军将军福特（Tim Pigott-Smith 饰）同时发表声明，定义这是一次非法游行，并将进行镇压。双方的矛盾冲突在前一夜便凸显开来，形势一触即发。北爱温和派议员库普（James Nesbitt 饰）意识到形势严峻，四处奔波告诫人们要克制，千万不可使用暴力。而另一方面英国派来一队伞兵作为先锋部队，防止北爱共和军的人伺机作乱。游行在紧张的气氛下展开，前半段的有条不紊被随之而来的混乱彻底破坏。一群激动的年轻人偏离游行路线，向驻防的的英国军队抗议并投掷石块。英国方面用高压水龙头、催泪弹和橡皮子弹还击。接着事态愈演愈烈，英军开始用真枪实弹向百姓射击，连臂膀上扎了白色手帕（以示和平）的老人也不放过。惶恐的人们四散逃窜，许多人倒在了血泊中不再起来。暴乱结束后，军方对外声称只有三人丧生，而当晚库普从医院拿来的资料显示总共13人死亡，14人受伤。",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "爱尔兰",
      "英国"
    ],
    "rating": 8.1,
    "votes": 2149,
    "runtime": "107 min",
    "releaseDate": "2002-01-25",
    "ratingRank": null,
    "id": "movie-1306426"
  },
  {
    "sourceId": "1432494",
    "title": "给坏小子的歌",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528880106.jpg",
    "summary": "影片揭露三十年代爱尔兰一间男童院的阴暗面。男主角富有改革社会的理想，相信诗歌可改变人心。他刚打完西班牙内战回来，在男童院当教师，即跟暴戾成性的院长神父发生冲突。这些每因小过而被关进来的少年，在院长眼中只是畜牲，但整个教会和国家均对神父的暴力和性侵犯视而不见。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "爱尔兰",
      "英国",
      "丹麦",
      "西班牙"
    ],
    "rating": 8.0,
    "votes": 288,
    "runtime": "100 min",
    "releaseDate": "2004-04-13",
    "ratingRank": null,
    "id": "movie-1432494"
  },
  {
    "sourceId": "1307714",
    "title": "玛德莲堕落少女",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2244246788.jpg",
    "summary": "20世纪60年代，在自由开放的大环境下，古老的爱尔兰仍保持着古板和保守的风气。在这里，所有被认为堕落的女孩都要被送入玛德莲女子学院接受感化，而等待他们的不是和风细雨，而是无尽的黑暗与绝望。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "爱尔兰",
      "英国"
    ],
    "rating": 7.9,
    "votes": 1957,
    "runtime": "119 min",
    "releaseDate": "2002-10-25",
    "ratingRank": null,
    "id": "movie-1307714"
  },
  {
    "sourceId": "1400889",
    "title": "奥萨玛",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2544857367.jpg",
    "summary": "一群阿富汗妇女正在为工作权利而上街游行，塔利班很快赶到，用水枪冲散人流，女孩奥萨玛（Marina Golbahari 饰）和母亲湿漉漉的回到家里。奥萨玛一家的男丁全部在战争中失去，母亲只能靠私人行医贴补家用，而塔利班是不允许女性工作的，为解决生计，奥萨玛被家人乔装成男孩，送到父亲老战友的小店内工作，但是塔利班很快将奥萨玛送入伊斯兰学校，流浪儿艾士潘迪（Arif Herati 饰）在学校里帮助奥萨玛隐藏性别，不过事情还是败露了，奥萨玛的童年，在塔利班手中无奈的结束。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "阿富汗",
      "爱尔兰",
      "日本"
    ],
    "rating": 7.9,
    "votes": 654,
    "runtime": "83 min",
    "releaseDate": "2003-05-20",
    "ratingRank": null,
    "id": "movie-1400889"
  },
  {
    "sourceId": "1812354",
    "title": "死尸",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1925201803.jpg",
    "summary": "汤米（安德鲁·斯科特 Andrew Scott 饰）和珍妮（凯蒂·戴维斯 Katy Davis 饰）曾经拥有过一段美好的恋情，只是这段恋情并没有能够开花结果，最后两人的关系以分手告终。这一天，珍妮突然出现在了汤米的公寓里，珍妮的出现给汤姆带来了许多的麻烦，两人之间爆发了激烈的争吵。珍妮死了，她的尸体成为了汤姆要处理的最大的麻烦，为此，汤米设计了一个计划。 这个计划需要汤米的好友诺埃尔（达伦·西里 Darren Healy 饰）的参与，然而，当汤米真正开始执行他的计划时才发现，这个计划有着如此之多的变故和漏洞。为了圆一个谎言，汤米开始撒下一个又一个谎，他原本安稳的生活也渐渐走向毁灭。",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "爱尔兰"
    ],
    "rating": 7.7,
    "votes": 474,
    "runtime": "88 min",
    "releaseDate": "2003-04-25",
    "ratingRank": null,
    "id": "movie-1812354"
  },
  {
    "sourceId": "4132395",
    "title": "国民警卫队",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1615452423.jpg",
    "summary": "爱尔兰都柏林戈尔韦郡探长格里•博伊尔（布莱丹•格里森 Brendan Gleeson 饰）收拾了瘾君子车祸暴毙的残局，迎来了新来报到的探员麦克布莱德，他们勘察犯罪现场，从证据推断杀手的类型，可惜两人思维大相径庭。博伊尔思维极其吊诡，令麦克布莱德完全不得要领。他们曾一同审问嫌疑犯，却发现他只是替死鬼，真凶仍逍遥法外。博伊尔虽然玩世不恭，但却是个孝子，其母大限将至，他挖空心思逗老人家开心。为了破获黑市价值5亿的毒品走私案，美国FBI探员温德尔（唐•钱德尔 Don Cheadle 饰）开始为警官们做案情分析，却屡屡遭博伊尔打断，正当上司要将博伊尔开除时，后者却一针见血地指出了报告中的最大漏洞——四名嫌疑犯中已有一人躺在太平间。这令温德尔对这个拿种族歧视开玩笑的博伊尔刮目相看。麦克布莱德在执勤中意外遭到哲学范儿歹徒杀害，他的妻子上门寻夫，让博伊尔倍感责任重大，他与温德尔踏上了缉凶之旅……",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "爱尔兰"
    ],
    "rating": 7.6,
    "votes": 7373,
    "runtime": "96 min",
    "releaseDate": "2011-07-07",
    "ratingRank": null,
    "id": "movie-4132395"
  },
  {
    "sourceId": "3278106",
    "title": "Abhilasha",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1983,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3338625.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Thriller"
    ],
    "originalGenres": [
      "惊悚"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 9.5,
    "votes": 139,
    "runtime": "145 min",
    "releaseDate": "1983-03-11",
    "ratingRank": null,
    "id": "movie-3278106"
  },
  {
    "sourceId": "4917494",
    "title": "未知死亡",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2412295656.jpg",
    "summary": "Sanjay Ramasamy is a rich tycoon suffering from short term memory loss due to being hit by a metal pole when trying to intervene on his girlfriend's murder. Because of the severe injury on his head, his memory can only last for fifteen minutes and he doesn't remember events or incidents that have happened before in his life. He can now only live a comprehendable life by tattooing notes on himself and taking pictures of things with a Polaroid camera to remind himself of the incidents that have happened. His story in unraveled by a police officer who is hunting him due to several murders he has committed while trying to find his girlfriend's murderer through his diary. His story has also piqued the interest of a medical college student, Chitra who is searching for a patient with an \"interesting\" record for her college project. Chitra comes to know about Sanjay's love with Kalpana a model cum activist. When her activist work for children comes in the way of child racketeers, she is killed by Lakshman when she intervened with his plan of kidnapping 25 young girls to Calcutta. So, with the help of Chitra, Sanjay sets out on a revenge spree, searching for the murderer of the one love of his life. Written by SoMeOnE",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.5,
    "votes": 389,
    "runtime": "175 min",
    "releaseDate": "2005-09-29",
    "ratingRank": null,
    "id": "movie-4917494"
  },
  {
    "sourceId": "3169043",
    "title": "我的名字叫可汗",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2190816486.jpg",
    "summary": "信奉伊斯兰教的里兹瓦·罕（沙鲁克·罕 Shahrukh Khan 饰）从小患有阿斯伯格综合症，母亲去世后，他追随弟弟扎克尔（吉米·舍尔吉勒 Jimmy Shergill 饰）的脚步 从印度孟买移民美国旧金山。里兹瓦在帮弟弟的化妆品公司推销美容产品时认识了经营发廊的单身母亲曼迪娅（卡卓尔 Kajol 饰）。里兹瓦不顾弟弟的反对执意与印度教的曼迪娅结为夫妇，一家人和谐美满。9.11恐怖袭击的发生使美国国内掀起了反对、歧视穆斯林教徒的风潮，里兹瓦与曼迪娅的发廊被迫关张，而曼迪娅的独子山姆（Yuvaan Makaar 饰）更是在一场由种族歧视引发的少年争斗中意外身亡。悲愤的曼迪娅将愤怒发泄在了里兹瓦的穆斯林姓氏“罕”上，说只有里兹瓦告诉美国人民及美国总统他的姓氏并非与恐怖分子相关，才会与他再次相见。就这样，执着的里兹瓦踏上了艰难的觐见总统之途……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.4,
    "votes": 49912,
    "runtime": "165 min",
    "releaseDate": "2010-11-30",
    "ratingRank": null,
    "id": "movie-3169043"
  },
  {
    "sourceId": "1818751",
    "title": "真爱永存",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1104288378.jpg",
    "summary": "故事发生在一间名为“古鲁酷”的学院中，每一年，这所以校风严谨校规严厉而著称的学校都为社会输送了为数众多的精英人才，这是校长萨恩卡（阿米特巴·巴强 Amitabh Bachchan 饰）最引以为豪的所在，在他的意识中，正是严格得犹如军规的校规让校园中的年轻人们不至于走上了歧途。",
    "genres": [
      "Drama",
      "Romance",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "歌舞"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.4,
    "votes": 2464,
    "runtime": "216 min",
    "releaseDate": "2000-10-27",
    "ratingRank": null,
    "id": "movie-1818751"
  },
  {
    "sourceId": "2157044",
    "title": "烈火恩仇",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2294436375.jpg",
    "summary": "沙卡（沙鲁克·罕 Shahrukh Khan 饰）自幼失去了父母，被黑帮老大拉杰（阿莫瑞什·普瑞 Amrish Puri 饰）收养，拉杰虽然将沙卡抚养长大，还教会了他一身的本领，但对于拉杰来说，沙卡只不过是他养的一只看门狗而已，丝毫没有尊严可言。",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.4,
    "votes": 337,
    "runtime": "166 min",
    "releaseDate": "1997-04-07",
    "ratingRank": null,
    "id": "movie-2157044"
  },
  {
    "sourceId": "4885915",
    "title": "摇摆的童年",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531194458.jpg",
    "summary": "Pinu loses his sister Rimzim's shoes so they both decide to share a pair of shoes until their father has saved enough money to buy a new pair.",
    "genres": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.3,
    "votes": 109,
    "runtime": "Unknown runtime",
    "releaseDate": "2010-05-14",
    "ratingRank": null,
    "id": "movie-4885915"
  },
  {
    "sourceId": "1959001",
    "title": "有时快乐有时悲伤",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2332340354.jpg",
    "summary": "理查德（阿米特巴·巴强 Amitabh Bachchan 饰）和妻子娜蒂尼（Jaya Bhaduri 饰）结婚多年，两人共同养育着两个儿子拉胡尔（沙鲁克·罕 Shahrukh Khan 饰）和罗汉（赫里尼克·罗斯汉 Hrithik Roshan 饰），夫妻两人用无尽的爱和关怀包容着两个孩子，尽管他们其中之一拉胡尔和他们并没有血缘关系。",
    "genres": [
      "Comedy",
      "Romance",
      "Musical"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "歌舞"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.2,
    "votes": 850,
    "runtime": "210 min",
    "releaseDate": "2001-12-14",
    "ratingRank": null,
    "id": "movie-1959001"
  },
  {
    "sourceId": "1440613",
    "title": "音乐室",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1958,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513976455.jpg",
    "summary": "雷艾（Chhabi Biswas 饰）出生于富贵之家中，世世代代都是坐拥着土地的地主阶级，雷艾自然继承了家族的财产，可是，他的心思却并不在好好经营这份财产之上。雷艾对音乐有着狂热的喜爱，常常斥巨资举办音乐会，请来大师名流进行演奏。就这样，上一代积攒下来的财富就在雷艾的一次又一次挥霍中越来越少。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.2,
    "votes": 674,
    "runtime": "100 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1440613"
  },
  {
    "sourceId": "2330231",
    "title": "冷暖人间",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2152817833.jpg",
    "summary": "印度某地的一个小乡村里，小伙子勒登纳爱上了漂亮的姑娘麦吐，两人一见倾心。然而，不知道内情的义母私自为儿子另订了一门亲事，姑娘麦吐得知后，经不起打击自杀身亡。麦吐的二哥腾拉兹枪杀了勒登郎纳，被判处无期徒刑。两家就此结下了仇恨。麦吐的大哥贾斯文来到德里，抚养了腾拉兹的儿子。由于腾拉兹在狱中表现良好，因此被提前释放。出狱后，却又遭到勒登纳哥哥仁提尔的不断挑衅，只得让儿子拉兹和贾斯文的儿子夏姆一起返乡。拉兹在家乡邂逅美丽的姑娘莱斯密，而她正是仁提尔的女儿，两个年轻人相爱了。仁提尔得知后怒不可遏，一再警告拉兹，并给女儿订婚，腾拉兹开始反对，后在贾斯文特的劝说下理解了儿子，然而愤怒的仁提尔决定不顾一切夺回女儿，以致酿成了一场更大的悲剧。",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "歌舞"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.2,
    "votes": 274,
    "runtime": "162 min",
    "releaseDate": "1988-03-01",
    "ratingRank": null,
    "id": "movie-2330231"
  },
  {
    "sourceId": "2142628",
    "title": "真心实意",
    "countryCode": "IN",
    "countryName": "India",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2332341645.jpg",
    "summary": "阿马尔（沙鲁克·汗 Shah Rukh Khan 饰）是一名德里电视台的记者，为了了解在北印度活跃的恐怖组织的现状，阿马尔不惜自己的个人安危，深入恐怖组织内部，想要采访恐怖组织的头目。在被印度，阿马尔邂逅了名为梅根（玛尼沙·柯伊拉拉 Manisha Koirala 饰）的姑娘，虽然梅根总是一副心事重重的样子，但是阿马尔还是被她深深的吸引。",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "歌舞"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.2,
    "votes": 203,
    "runtime": "163 min",
    "releaseDate": "1998-08-21",
    "ratingRank": null,
    "id": "movie-2142628"
  },
  {
    "sourceId": "3397503",
    "title": "未知死亡",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192809983.jpg",
    "summary": "电信大亨杰辛哈尼亚（阿米尔•汗 Aamir Khan 饰）为人低调，某日却见报纸爆料他向一个叫卡尔帕谢蒂（阿辛 Asin 饰）的小广告模特大胆示爱，气愤之余杰辛哈尼亚去向这个造谣生事的女孩儿问责，谁料他途中看见一个美丽善良的女孩机智地帮助残疾儿童，而这 个女孩就是卡尔帕谢蒂，卡尔帕谢蒂并不认识杰辛哈尼亚，一场误会令别人以为她就是大亨的女友。杰辛哈尼亚隐瞒身份接近卡尔帕谢蒂，可后者以为他不过是求广告机会的无名小卒。杰辛哈尼亚结识卡尔帕谢蒂后开始了扮演双重身份的生活，两人在相处中感情逐渐加深。卡尔帕谢蒂从黑帮大佬手中救出了25名少女，惹来杀身之祸。杰辛哈尼亚遭连累被击中头部之后只能保留十五分钟的记忆，为了爱人，他艰难的凭借有限的记忆复仇……",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.1,
    "votes": 72452,
    "runtime": "183 min",
    "releaseDate": "2008-12-25",
    "ratingRank": null,
    "id": "movie-3397503"
  },
  {
    "sourceId": "1300817",
    "title": "静谧的生活",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1974,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526846545.jpg",
    "summary": "扎根于社会、政治之上不可明言的故事，用客观的画面让观者自己去构建残酷的现实，以平淡的铺陈步步引向深刻的隐喻。叙事、画面，处处可见这位传奇导演对阿巴斯和马克马尔巴夫等追随者的影响。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.8,
    "votes": 858,
    "runtime": "93 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1300817"
  },
  {
    "sourceId": "1478142",
    "title": "旅客",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1974,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2559238424.jpg",
    "summary": "在1993年的金馬國際影展推出了伊朗導演阿巴斯‧奇亞洛斯塔米的導演專題後，阿巴斯的大師地位就深植台灣影迷心中。近15年來，大師新作一部接著一部在國內影展中放映，但他早年的作品，卻遲遲未有機會被介紹。《闖渡客》是阿巴斯的第一部劇情長片，是當時為伊朗的兒童機構Kanoon (Intellectual Development of Children & Young Adults) 電影部門所拍攝的作品。內容敘述一個十歲的問題男孩Qassem，夢想著到德黑蘭看一場伊朗國家足球隊的重要比賽。為此他可以不計一切鋌而走險，詐騙朋友跟父母的錢，展開一段長達400哩的冒險旅程。",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.4,
    "votes": 860,
    "runtime": "83 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-1478142"
  },
  {
    "sourceId": "1305620",
    "title": "巴伦",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503543399.jpg",
    "summary": "伊朗德黑兰北部的一个建筑工地上，阿富汗工人纳贾夫摔断了腿，作为家中唯一的经济支柱，他的受伤立刻使全家陷入困境中，好心的工头梅马不忍看到惨象，同意让他的大儿子莱麦特（Zahra Bahrami）接替他的职位，不久，梅马发现莱麦特十分不适合干扛水泥的体力活，可是却会细心地布置餐桌，于是决定让他代替自己的侄子拉提夫（Hossein Abedini），负责工队的膳食。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.2,
    "votes": 1010,
    "runtime": "94 min",
    "releaseDate": "2001-01-31",
    "ratingRank": null,
    "id": "movie-1305620"
  },
  {
    "sourceId": "2974293",
    "title": "佛在耻辱中倒塌",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2454203777.jpg",
    "summary": "荣获柏林电影节水晶熊奖/和平奖",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.2,
    "votes": 974,
    "runtime": "81 min",
    "releaseDate": "2007-09-09",
    "ratingRank": null,
    "id": "movie-2974293"
  },
  {
    "sourceId": "1302347",
    "title": "醉马时刻",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1604083687.jpg",
    "summary": "库尔德族少年阿尤（Rojin Younessi 饰）家在两伊边界，他每天带着年幼的妹妹，以及罹患侏儒症的哥哥到混乱的人力市场讨零工补贴家用。某日，他们的父亲误触地雷身亡，哥哥的病已不能再拖下去，妹妹上学又需要练习薄，悲痛的阿尤不得不更加卖力地挣钱，于是他向叔叔借来了骡子，每天在冰天雪地里运货，牲口在上路之前必须喂食掺酒的水激发体力。此时阿尤的叔叔擅自主张将他姐姐嫁给了有钱人当小媳妇，以此换得聘金和哥哥做手术的机会。下嫁当天对方却反悔，只给了一头骡子。一天在运货途中突遇埋伏，所有同行匆忙拉着骡子向回撤，阿尤一个人背着哥哥，面对着眼前醉倒在雪地上的骡子毫无办法，而远处劫匪们正在慢慢逼近……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8.2,
    "votes": 868,
    "runtime": "80 min",
    "releaseDate": "2000-09-13",
    "ratingRank": null,
    "id": "movie-1302347"
  },
  {
    "sourceId": "1303444",
    "title": "随风而逝",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1148223520.jpg",
    "summary": "伊朗库尔德斯坦省的一个小村子里来了一群工程师。村民们对这群突然来到的外来人议论纷纷，好奇他们来此地的目的。虽然感到陌生，但是村民对客人还是表现出友好的欢迎。其中一个工程师，对村里的一切都饶有兴趣。他每天跟随着村里的小孩到处查看，注意到有个生病的老太太，于是不停地打听老太太的病情。因为需要用无线电话和总部联络，而村里的信号不好，所以工程师每次都要跑到山上的墓地去接听。在山上，他发现有个村民总是在独自挖着坑，觉得好奇的他经常上前与这个村民聊天。突然有一天，如风般顺畅的日子发生了变化。山上村民挖的坑塌陷了，活埋了村民，医生前去奋力抢救村民，顺道发现那个老太太也在病危中。面对生命的逝去，工程师惆怅万分。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "伊朗",
      "法国"
    ],
    "rating": 8.1,
    "votes": 5180,
    "runtime": "118 min",
    "releaseDate": "1999-10-01",
    "ratingRank": null,
    "id": "movie-1303444"
  },
  {
    "sourceId": "1293086",
    "title": "茶花女",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1982,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504445626.jpg",
    "summary": "故事发生于19世纪40年代，阿尔方斯妮（特蕾萨·斯特拉塔斯 Teresa Stratas 饰）本是出生在穷乡僻壤的贫穷女孩，注定会过上默默无闻了此一生的生活。然而，上帝却将她指引向了繁华的大都市巴黎。在那里，阿尔方斯妮见识到了上流社会的奢靡生活。随着时间的推移，阿尔方斯妮凭借着自己的美貌和智慧渐渐打入了社交圈，最终成为了人人仰慕的交际花，那些对她垂涎三尺的男人们称她为茶花女。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.9,
    "votes": 465,
    "runtime": "109 min",
    "releaseDate": "1983-02-18",
    "ratingRank": null,
    "id": "movie-1293086"
  },
  {
    "sourceId": "2287219",
    "title": "给我讲个故事",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s2748967.jpg",
    "summary": "国家电视台天气预报主持人萨尔瓦多退休后在一家私人电视台重新找到一份工作，但女儿劳拉和女婿马可从乌克兰领养了一个女孩马柳斯卡，打乱了萨尔瓦多的计划。孩子的到来给一家人带来了欢乐，但也带来了烦恼，甚至影响到了劳拉和马可的关系。在老人的帮助下，一家人又变得其乐融融。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.9,
    "votes": 136,
    "runtime": "180 min",
    "releaseDate": "2004-02-01",
    "ratingRank": null,
    "id": "movie-2287219"
  },
  {
    "sourceId": "1439730",
    "title": "佩拉斯卡",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529022316.jpg",
    "summary": "在二战快要结束的1944年，纳粹法西斯继续在欧洲大肆残杀犹太人。佩拉斯卡原是位从事过贸易活动也参过战的意大利商人，面对满目的硝烟和战火，他的良心受到强烈震撼，舍弃与家人团聚的幸福，并投入自己所有的资金，开始想尽办法挽救犹太人的生命。这位机智而勇敢的中年男人利用各种机会，有时以金钱作为诱饵，有时凭借自己的口才据理力争，有时甚至装扮成西班牙外交官，在纳粹统治的夹缝中拯救了许多无辜的民众。",
    "genres": [
      "Drama",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "意大利",
      "法国",
      "瑞典",
      "匈牙利"
    ],
    "rating": 8.8,
    "votes": 543,
    "runtime": "197 min",
    "releaseDate": "2002-01-28",
    "ratingRank": null,
    "id": "movie-1439730"
  },
  {
    "sourceId": "1306568",
    "title": "从容的快板",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1976,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509553492.jpg",
    "summary": "在一个漆黑的音乐厅里，主持人向大家介绍，你即将看到的作品将是一部让你过目难忘的作品，作品的奇特之处在于导演充分发挥想象力，将古典乐结合动画进行表演，从独特的视角诠释了德彪西等作曲家六段经典音乐。作品无论在创意、想象力还是表现的深度和多样性上，都超过迪士尼1940年出品的《幻想曲》。德布西的《牧神的午后》 ，描写老牧师憧憬年轻女子，充满官能的诱惑以及对礼教的讽刺；拉威尔的《波烈罗》 ，讲从一支可口可乐瓶子里开始的生物进化史；史特拉汶斯基的《火鸟》，生动的演绎了现代版的亚当与夏娃的故事。",
    "genres": [
      "Comedy",
      "Animation",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.7,
    "votes": 378,
    "runtime": "85 min",
    "releaseDate": "1977-07-27",
    "ratingRank": null,
    "id": "movie-1306568"
  },
  {
    "sourceId": "1302993",
    "title": "擦鞋童",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1946,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643524.jpg",
    "summary": "故事发生在二战后的意大利，战争对于国家和人民的伤害无法估量，短时间内造成的痛苦和破坏，需要更漫长的时间才能痊愈。在这样一个动荡的时代中，穿梭着一群天真的孩子们的身影，他们是小小擦鞋童，帕斯克里特（弗朗科·英特朗吉 Franco Interlenghi 饰）和居赛派（里纳尔多·斯默东尼 Rinaldo Smordoni 饰）也是其中的成员。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.5,
    "votes": 2390,
    "runtime": "93 min",
    "releaseDate": "1946-04-27",
    "ratingRank": null,
    "id": "movie-1302993"
  },
  {
    "sourceId": "1302522",
    "title": "荒野大镖客",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1964,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178157710.jpg",
    "summary": "墨西哥边境小镇来了一位大镖客（克林特·伊斯特伍德 Clint Eastwood 饰），他得知镇上势不两立的两大帮派罗霍兄弟和镇长巴克斯特相厮杀已久，便决定与两派斡旋，除去镇上恶势力，恢复小镇的平静。他目击罗霍兄弟劫杀了一队士兵并私占黄金，于是利用两具士兵尸体吸引巴克斯特来寻找罗霍兄弟的罪证。同时，他又将消息透露给罗霍兄弟，导致双方展开了一场激烈枪战。乔在两派激战时找到了黄金，并发现被罗霍兄弟囚禁的女人玛利索，他将玛利索交给巴克斯特，换回了在激战中被捕获的儿子安东尼奥。但后来他得知玛利索是被罗霍家的雷蒙抢占，于是设法救出了她，帮助她与丈夫孩子一起逃出镇子。深爱着玛利索的雷蒙发现心爱的女人被放走，便认定是巴克斯特一家所为，于是展开了疯狂的报复。究竟两大帮派谁胜谁负，作为中间人的大镖客能否实现恢复小镇和平的计划？",
    "genres": [
      "Action",
      "Western"
    ],
    "originalGenres": [
      "动作",
      "西部"
    ],
    "originalRegions": [
      "意大利",
      "西班牙",
      "西德"
    ],
    "rating": 8.4,
    "votes": 30114,
    "runtime": "99 min",
    "releaseDate": "1964-09-12",
    "ratingRank": null,
    "id": "movie-1302522"
  },
  {
    "sourceId": "1293105",
    "title": "蚀",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1962,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2239013044.jpg",
    "summary": "天空微白，已是黎明时分。可对于里卡多（弗朗西斯科·拉瓦尔 Francisco Rabal饰）来说，这却是痛苦而残酷的一夜。无论里卡多怎样苦苦哀求维多利亚（莫尼卡·维蒂 Monica Vitti饰）回心转意，她已然心意已决，执意离去。维多利亚来到罗马证券交易所找她的母亲，远远地就看见母亲与经纪人皮耶罗（阿兰·德龙 Alain Delon饰）兴奋地聊着股票。皮耶罗年轻潇洒，风度翩翩，很会讨女人欢心，而这对维多利亚来说毫无兴趣。但一种莫名的强大吸引力在两人之间慢慢滋生，然而两人谁也未曾踏出第一步。当她再次来到交易所时，却遇到股票狂跌，维多利亚的母亲也亏了很多钱。不安的维多利亚，觉得皮耶罗可以成为自己可靠的保护人。然而当两人终于在一起时，隐藏在他们背后的复杂关系又使他们彼此疏远。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8.4,
    "votes": 10962,
    "runtime": "126 min",
    "releaseDate": "1962-04-12",
    "ratingRank": null,
    "id": "movie-1293105"
  },
  {
    "sourceId": "3794147",
    "title": "北国之恋：1987初恋",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2472830331.jpg",
    "summary": "因妻子外遇而离婚的黑板五郎，带着一对儿女从东京来到充满田园风光的北海道富良野生活。影片细腻地描写他们在北方富良野的田园生活和爱情，以及从学校走入社会工作，成家立业，生儿育女。剧中人物尽管有各种不如意的生活经历和自己无法掌控的现实，但他们最终都能战胜所面临的逆境，更加理解身边的人和事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.5,
    "votes": 651,
    "runtime": "120 min",
    "releaseDate": "1987-03-27",
    "ratingRank": null,
    "id": "movie-3794147"
  },
  {
    "sourceId": "2025130",
    "title": "北国之恋：1995秘密",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508557411.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.5,
    "votes": 582,
    "runtime": "183 min",
    "releaseDate": "1995-06-09",
    "ratingRank": null,
    "id": "movie-2025130"
  },
  {
    "sourceId": "3794149",
    "title": "北国之恋：1989归乡",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1989,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522940189.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.5,
    "votes": 561,
    "runtime": "133 min",
    "releaseDate": "1989-03-31",
    "ratingRank": null,
    "id": "movie-3794149"
  },
  {
    "sourceId": "1842047",
    "title": "Yoshiki Symphonic Concert 2002 with Tokyo City Philharmonic Orchestra Featuring Violet UK",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s1731983.jpg",
    "summary": "这场音乐会便是收录了当日的盛况,除演绎了[Forever Love]等多首X-JAPAN名曲外,也包括林桂树亲自监制的新组合VIOLET UK的未曾发表歌曲;林桂树创作出来的优美动人旋律,配上世界三大交响乐团之一的东京交响乐团庄严的演绎,创造出135分钟完美无暇的精彩演出",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.4,
    "votes": 138,
    "runtime": "Unknown runtime",
    "releaseDate": "2005-03-30",
    "ratingRank": null,
    "id": "movie-1842047"
  },
  {
    "sourceId": "3794145",
    "title": "北国之恋：1983冬天",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1983,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2472822148.jpg",
    "summary": "日本连续剧《北国之恋》以温情慈爱的笔触，描写家庭亲情之爱，人性之爱。离了婚的父亲带着一对儿女从东京来到充满田园风光的日本北方小岛生活。影片细腻地描写他们从学校走入社会工作，成家立业，生儿育女。剧中人物尽管有着各种不如意的生活经历和自己无法掌控的现实，但他们最终都能战胜所面临的逆境，更加理解身边的人和事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.3,
    "votes": 650,
    "runtime": "91 min",
    "releaseDate": "1983-03-24",
    "ratingRank": null,
    "id": "movie-3794145"
  },
  {
    "sourceId": "2065097",
    "title": "铃兰：少女萌的故事",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2195973075.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.3,
    "votes": 177,
    "runtime": "102 min",
    "releaseDate": "2000-06-17",
    "ratingRank": null,
    "id": "movie-2065097"
  },
  {
    "sourceId": "4906417",
    "title": "高智能方程式赛车 TV总集篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s4412555.jpg",
    "summary": "ハヤトが初優勝を制した第10回大会の軌跡を、アスラーダがドライバー別に編集したビデオで振り返る総集編。",
    "genres": [
      "Romance",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "爱情",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 415,
    "runtime": "Unknown runtime",
    "releaseDate": "1992-08-05",
    "ratingRank": null,
    "id": "movie-4906417"
  },
  {
    "sourceId": "1845707",
    "title": "独角马之魔法岛",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1983,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2528322297.jpg",
    "summary": "故事情节承接上一部而来。",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 226,
    "runtime": "91 min",
    "releaseDate": "1983-07-16",
    "ratingRank": null,
    "id": "movie-1845707"
  },
  {
    "sourceId": "5041031",
    "title": "赛文奥特曼 我是地球人",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2547616522.jpg",
    "summary": "在幾百萬年前，地球原本是外星人的故鄉，人類殘暴的祖先在地球進行殺戳把這地方鵲巢鳩佔。而世代以來，所有統治者還一直把紀錄了這個秘密的「亞米加檔案」禁敝起來，不肯承認過錯。事實上，外星人直對地球虎視眈眈，並非因為要侵略，而是想討回公道。這次，外星人決定實行最大的報復行動。即使地球高層最終決定向宇宙公開承認「亞米加檔案」的內容，但是也按制不住外星人為國復仇的決心。作為地球的好朋友，七星俠不忍袖手旁觀，但是從宇宙公義的角度看，他理應主持公道……七星俠將會如何抉擇？",
    "genres": [
      "Drama",
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 944,
    "runtime": "73 min",
    "releaseDate": "1999-12-31",
    "ratingRank": null,
    "id": "movie-5041031"
  },
  {
    "sourceId": "1417013",
    "title": "寅次郎的故事48：寅次郎红之花",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2333007595.jpg",
    "summary": "山田日後承認在開拍此片之前，已心諳渥美清的肺病步入末期，決定此章為最後一章，並安排由淺丘瑠璃子演的莉莉送寅次郎踏上人生的最後一程。分別15年後，兩人於如詩如畫的奄美大島重逢，感情依舊，鬥氣繼續，沒完沒了似的。正如山田所想，雖然系列必須完結，但始終不想為寅次郎的故事／人生劃上句號。結局如常開放，代表寅一直繼續他的旅程，日本人依然有夢。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.0,
    "votes": 186,
    "runtime": "107 min",
    "releaseDate": "1995-12-23",
    "ratingRank": null,
    "id": "movie-1417013"
  },
  {
    "sourceId": "4861627",
    "title": "和声",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p543621113.jpg",
    "summary": "女犯人贞慧（金允珍 饰）在狱中生下儿子珉宇，小珉宇就像上帝派来的小天使，让这些和贞慧一样曾犯下罪过的女人在围墙之内品味久违的温情。一次慰问演出让贞慧萌生了在监狱里组建合唱团的想法，可是贞慧不仅五音不全，而且完全没有相关经验。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.5,
    "votes": 47802,
    "runtime": "115 min",
    "releaseDate": "2010-01-28",
    "ratingRank": null,
    "id": "movie-4861627"
  },
  {
    "sourceId": "4328443",
    "title": "高地战",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1018163890.jpg",
    "summary": "1952年，在板门店谈判中，L高地的归属直接影响到停火线的划定，南北双方为了获得更有利的战果，围绕L高地展开了新一轮血腥的争夺。此时，在前线的韩方鳄鱼中队队长被自己人的手枪击毙，同时北方人民军军人的家信在暗中通过韩方邮路寄送，韩方怀疑高地前线出现内奸，派调查部门的姜恩彪中尉（申河均 饰）陪同新任队长前往鳄鱼中队。此时鳄鱼中队实际掌控在姜恩彪昔日战友金秀赫中尉（高修 饰)以及申日荣上尉手中，姜恩彪惊异的发现曾经书生气十足的金秀赫如今已变成强悍的战士，而表面上军纪涣散的鳄鱼中队在实战中则有着惊人的战斗力。姜恩彪随鳄鱼中队一起经历了拉锯式的高地争夺战，而他终于无意中发现了鳄鱼中队“通敌”的线索……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.5,
    "votes": 23698,
    "runtime": "133 min",
    "releaseDate": "2011-07-20",
    "ratingRank": null,
    "id": "movie-4328443"
  },
  {
    "sourceId": "1299582",
    "title": "绿洲",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2371311227.jpg",
    "summary": "刑满释放的洪忠都（薛景求饰）出狱后，家人对他横加排斥，而他之所以被判入狱，只是为了顶替哥哥的罪名。之后心冷意凉的他，来到车祸死者的住所拜访家属，遇到死者的女儿韩恭洙（文素利饰）——一名重度脑麻痹患者，面容扭曲、手脚抽搐。但忠都却被她吸引，并在冲动下做出大胆之举。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.5,
    "votes": 22847,
    "runtime": "132 min",
    "releaseDate": "2002-08-09",
    "ratingRank": null,
    "id": "movie-1299582"
  },
  {
    "sourceId": "1304972",
    "title": "太极旗飘扬",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480212560.jpg",
    "summary": "李镇泰（张东健饰）是生活在汉城的一个修鞋匠，一家人的生计就从修补鞋子的费用维持。虽然物质并不富裕，这却是一个十分温馨完整的家庭。妻子李英顺（李恩珠饰）和母亲开一间面馆，平日还要照顾下面的弟妹，弟弟李镇锡（元彬饰）是家中所有的希望，如今正在高中读书，考上大学是他的梦想，更是哥哥镇泰的寄托所在。",
    "genres": [
      "Drama",
      "Action",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "战争"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 63125,
    "runtime": "148 min",
    "releaseDate": "2004-02-06",
    "ratingRank": null,
    "id": "movie-1304972"
  },
  {
    "sourceId": "3586725",
    "title": "金氏漂流记",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p577422208.jpg",
    "summary": "金盛瑾（郑在泳 饰）因公司重组而失去了工作，同时债台高筑，妻子也离他而去，对人生彻底失望的金盛瑾爬上了汉江的大桥，纵身一跃…… 然而金盛瑾醒转过来之后，发现自己漂流到了汉江的江心小岛上，短暂的脱身努力失败后，金盛瑾在城市的边缘陷入了鲁宾孙一般的境地，回想起现代生活的局促忙碌，金盛瑾放弃了自杀的念头，开始依靠小岛上的各种废品过起了化外人生。与此同时，在城市高楼中，一位有自闭症的金小姐（郑丽媛 饰）恰巧用相机目睹了金盛瑾自杀的情形，这个一年中只在演习时窥探大街的女孩生活中自此闯入了一个外星人般的都市鲁宾孙。金小姐在夜晚时分进入对她来说危机四伏的街道，以便给金先生送出自己的信号，而金盛瑾则用沙滩上的大字来回应，这对儿奇妙的笔友慢慢维系着这份情谊，但是在纷乱的都市中，这段关系会走向何方呢？",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 40946,
    "runtime": "116 min",
    "releaseDate": "2009-05-14",
    "ratingRank": null,
    "id": "movie-3586725"
  },
  {
    "sourceId": "1303145",
    "title": "薄荷糖",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457521856.jpg",
    "summary": "1999年春天，对生活绝望的中年男子金永浩（薛景求饰），落魄地参与了同学会，他神经质般哭叫，并在高架桥上面对迎面而来的火车嘶喊：我要回去！",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国",
      "日本"
    ],
    "rating": 8.3,
    "votes": 27645,
    "runtime": "130 min",
    "releaseDate": "1999-10-14",
    "ratingRank": null,
    "id": "movie-1303145"
  },
  {
    "sourceId": "3060325",
    "title": "哥哥我爱你",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p532706995.jpg",
    "summary": "九岁的张韩一是个调皮的孩子。他总是在学校里捣乱，经常逃课。而十二岁的张韩星则是一个懂事的哥哥，他经常帮助弟弟。兄弟俩一个好动，一个喜静，性格迥然不同。但他们的关系非常好。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 5095,
    "runtime": "97 min",
    "releaseDate": "2005-05-27",
    "ratingRank": null,
    "id": "movie-3060325"
  },
  {
    "sourceId": "3423849",
    "title": "假期",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3548910.jpg",
    "summary": "东方神起成员们为首次演唱会正在努力的准备中，不过由于累积了过大的压力，成员之间产生了矛盾冲突。在练舞的时候允浩将有天撞倒在地，有天的肩膀重重地砸在了地上。有天望着经纪人（哀怨的表情）：“请不要再给我们增加行程了，我的肩膀，难道看不到吗？”于是，社长决定将演唱会延期，并让东方神起的成员们放两个星期的长假。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 2720,
    "runtime": "101 min",
    "releaseDate": "2006-07-28",
    "ratingRank": null,
    "id": "movie-3423849"
  },
  {
    "sourceId": "2006116",
    "title": "出位教师",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s3861029.jpg",
    "summary": "当一群在家长以及老师眼中坏到不可救药的孩子们遇到刚分来的音乐老师时，一切都变了……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 161,
    "runtime": "Unknown runtime",
    "releaseDate": "1998-11-28",
    "ratingRank": null,
    "id": "movie-2006116"
  },
  {
    "sourceId": "1302759",
    "title": "奥林传奇",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1985,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2329088428.jpg",
    "summary": "未来某星球上（大概是地球）的人类全部被机器人奴役，并为它们开采矿物，一名叫做奥林的年轻奴隶经过奇妙的启示，在“剑柄”的指引下开始反抗之旅，并在一名酷酷的赏金猎人、一名美丽的人类贵族女孩和一名性感可爱的女机器人的帮助下，最终带领人类奴隶推翻机器人残暴统治的故事。",
    "genres": [
      "Sci-Fi",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "韩国",
      "美国"
    ],
    "rating": 8.3,
    "votes": 124,
    "runtime": "107 min",
    "releaseDate": "1985-11-22",
    "ratingRank": null,
    "id": "movie-1302759"
  },
  {
    "sourceId": "1292286",
    "title": "我的野蛮女友",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p489336497.jpg",
    "summary": "牵牛（车太贤饰）第一次与她（全智贤饰）邂逅，就毫无浪漫感可言。在地铁上她就语出惊人，喝的醉醺醺的她大声训斥不自觉给老人让座的人，吐完之后就软趴趴地倒了下来。善良的牵牛上前接住，于是就只好背着她到旅馆投宿了。但是好心不一定有好报，牵牛正在好好洗澡时就被冲进来的警察带走了。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.2,
    "votes": 343383,
    "runtime": "123 min",
    "releaseDate": "2001-07-27",
    "ratingRank": null,
    "id": "movie-1292286"
  },
  {
    "sourceId": "1389982",
    "title": "实尾岛",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2265612013.jpg",
    "summary": "60年代末朝鲜半岛南北局势紧张，双方都展开了疯狂的间谍与刺杀行动。1968年1月，康仁灿（薛景求饰）因谋杀罪名成立而被判死刑的，在行刑前突然被召到拘留室，与特种部队军官讨论替代死刑的条件，他将被送到西南部荒岛实尾岛接受特别军事训练。同时，另外30名死囚也接受了特种部队军官的条件，被征召到实尾岛执行特别任务。",
    "genres": [
      "Drama",
      "Action"
    ],
    "originalGenres": [
      "剧情",
      "动作"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.1,
    "votes": 23832,
    "runtime": "135 min",
    "releaseDate": "2003-12-24",
    "ratingRank": null,
    "id": "movie-1389982"
  },
  {
    "sourceId": "1294191",
    "title": "西便制",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2182196217.jpg",
    "summary": "Pansori（朝鲜清唱）西便制歌者俞本（金明坤 饰）带着养女松华（Oh Jung-hae 吴贞海 饰）流浪荒野山村，与一寡母坠入爱河。为避他人口舌，俞本带着爱人、松华以及爱人的儿子东浩（Kim Kyu-chul 金古初 饰）远走他乡。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.1,
    "votes": 1495,
    "runtime": "112 min",
    "releaseDate": "1993-04-10",
    "ratingRank": null,
    "id": "movie-1294191"
  },
  {
    "sourceId": "1316537",
    "title": "春天花盛开",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1861604121.jpg",
    "summary": "Hyun-woo（崔岷植 饰）是喇叭乐手，可是事业上久久不得志，女友又抛弃了自己。Hyun-woo于是到了江原道边界的一所中学当管弦乐团的代课老师。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.1,
    "votes": 993,
    "runtime": "128 min",
    "releaseDate": "2004-09-17",
    "ratingRank": null,
    "id": "movie-1316537"
  },
  {
    "sourceId": "4179007",
    "title": "赤脚梦想",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p515582747.jpg",
    "summary": "影片改编自真实事件。曾经，元光（朴熙顺 饰）也是一名叱咤风云的足球健将，可是，一次失败的投资让他的生活一蹶不振。失意的元光千里迢迢来到东帝汶，希望能在当地开一个咖啡馆大赚一笔以抚平受伤的内心。可是，没有经商头脑的他再一次遭遇了失败，难道他就要这样灰头土脸一无所获的回国吗？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.1,
    "votes": 730,
    "runtime": "121 min",
    "releaseDate": "2010-06-24",
    "ratingRank": null,
    "id": "movie-4179007"
  },
  {
    "sourceId": "1433360",
    "title": "雏菊",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479188725.jpg",
    "summary": "阿姆斯特丹，两个男人爱上了同一个女人，注定了一段纠缠的故事。惠瑛（全智贤饰）是画家，每天到广场帮路人画肖像，而像她一样风雨不改的，还有某人送来的一盘雏菊。每天雏菊总是准时送到，让她心里悸动而好奇。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "韩国",
      "中国香港"
    ],
    "rating": 8.0,
    "votes": 208145,
    "runtime": "110 min",
    "releaseDate": "2006-04-30",
    "ratingRank": null,
    "id": "movie-1433360"
  },
  {
    "sourceId": "1850797",
    "title": "方糖",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p699062958.jpg",
    "summary": "幼年丧母的诗恩(林秀晶饰)对马有着深厚的感情。与一匹叫“雷鸣”的马更是亲密无间，视为亲弟弟。但诗恩的父亲不愿女儿走上赛马的道路，把“雷鸣”卖到了别的地方。固执的诗恩没有放弃当一名优秀骑手的梦想，更没有忘记过弟弟“雷鸣”。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.0,
    "votes": 18027,
    "runtime": "123 min",
    "releaseDate": "2006-08-10",
    "ratingRank": null,
    "id": "movie-1850797"
  },
  {
    "sourceId": "1308804",
    "title": "我脑中的橡皮擦",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465680286.jpg",
    "summary": "秀真（孙艺珍饰）是一个富家女，跟男友出走却被抛弃，在便利店内与在建筑公司当工人的哲洙（郑宇成饰）相遇。未来的日子里，他们一次又一次相遇，最终彼此相爱了。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 188919,
    "runtime": "117 min",
    "releaseDate": "2004-11-05",
    "ratingRank": null,
    "id": "movie-1308804"
  },
  {
    "sourceId": "3008672",
    "title": "美错",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p553292146.jpg",
    "summary": "乌西巴尔（哈维尔·巴登 Javier Barden 饰）是个职业通灵师，他能与死人交流从而抚慰那些悲痛的亲人，但能沟通生死的同时，他自己也罹患癌症，只剩两个月寿命，家里还有两个需要照顾的小孩，而孩子的母亲，他的前妻玛拉姆巴塔（玛丽赛·阿尔瓦雷兹 Maricel Álvarez 饰）却是个常年酗酒和药物依赖的妇人，难以依靠。自家一团糟的乌西巴尔还要周旋在一群非法移民和偷渡者中间，帮助他们找工作，逃避警察，还自己掏钱为睡在工厂的移民们买了几个暖气，却不想好心造就一场煤气泄露事故，二十五名非法移民一夜殒身，赤裸裸的惨剧令乌西巴尔无法承受，随着他受到身心双重煎熬，一个肮脏破败的巴塞罗那随之掀开它的幕布……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "墨西哥",
      "西班牙"
    ],
    "rating": 8.0,
    "votes": 14267,
    "runtime": "148 min",
    "releaseDate": "2010-10-15",
    "ratingRank": null,
    "id": "movie-3008672"
  },
  {
    "sourceId": "1301901",
    "title": "没人写信给上校",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510310764.jpg",
    "summary": "退休的老上校，被承诺可领到一笔退休金，但这个承诺却迟迟没有兑现。每个星期五，他会穿着正式的西装，站在码头，等着领退休金的通知书。人们都清楚，他的等待是不会有结果的，而上校依然执着于他的梦想，否则，他还有什么值得期待？抵抗饥饿、抵抗太太的怨言及永无止尽的询问：“我们要吃什么？”他终于给了一个隐忍了20年的答案……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "墨西哥",
      "法国",
      "西班牙"
    ],
    "rating": 7.7,
    "votes": 193,
    "runtime": "118 min",
    "releaseDate": "2000-04-15",
    "ratingRank": null,
    "id": "movie-1301901"
  },
  {
    "sourceId": "3008669",
    "title": "微不足道的事情",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2187403191.jpg",
    "summary": "女孩Esmeralda有个不同寻常的念头：她收集陌生人弄丢的、忘记的还有废弃的东西，把它们藏在床底下的箱子里。影片讲述的是箱子里的三个物品和它们的主人的故事，在某种程度上他们有个共同点就是没有办法联系到自己最爱的人。影片也讲述了箱子自身的故事，Esmeralda如何学会打开它，感知并储藏人们最珍贵的东西——人际关系……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "墨西哥",
      "西班牙"
    ],
    "rating": 7.5,
    "votes": 1618,
    "runtime": "98 min",
    "releaseDate": "2008-09-23",
    "ratingRank": null,
    "id": "movie-3008669"
  },
  {
    "sourceId": "1305003",
    "title": "杀手悲歌",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1179472084.jpg",
    "summary": "这是导演的成名之作，罗伯特自掏腰包拍了这部低成本的黑色电影，结果一炮而红。影片讲述的是一名心狠手辣的罪犯成功越狱后，来到小镇伺机找他的仇家报仇，仇家的手下只知道那个罪犯将武器藏在吉他盒子里随身携带，而从来都没有见过他本人。一名流浪的吉他手（卡洛斯•加拉尔多 Carlos Gallardo 饰）凑巧这时来到小镇谋生，于是，莫名其妙的他就被卷入了一场不知所谓的追杀中。追杀的场面被导演演绎的笑料百出，黑色幽默表现的淋漓尽致。",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "墨西哥",
      "美国"
    ],
    "rating": 7.4,
    "votes": 8501,
    "runtime": "81 min",
    "releaseDate": "1992-09-15",
    "ratingRank": null,
    "id": "movie-1305003"
  },
  {
    "sourceId": "2010939",
    "title": "阿粗和阿呆",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510617550.jpg",
    "summary": "贝托（迭戈·鲁纳 Diego Luna 饰）和塔托（盖尔·加西亚·贝纳尔 Gael García Bernal 饰）是情同手足的亲兄弟，彼此之间感情十分要好。虽然兄弟两人并没有太过于精明的头脑，甚至常常傻里傻气的，但他们拥有着世界上最珍贵的纯洁心灵以及对于足球运动的天赋和热爱，兄弟两人最大的愿望就是能够攒钱给母亲盖一栋房子。",
    "genres": [
      "Drama",
      "Comedy",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "运动"
    ],
    "originalRegions": [
      "墨西哥",
      "美国"
    ],
    "rating": 7.4,
    "votes": 302,
    "runtime": "103 min",
    "releaseDate": "2008-12-19",
    "ratingRank": null,
    "id": "movie-2010939"
  },
  {
    "sourceId": "2375791",
    "title": "太浩湖",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2378468199.jpg",
    "summary": "《太浩湖》(Lake Tahoe)墨西哥",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "墨西哥",
      "日本",
      "美国"
    ],
    "rating": 7.4,
    "votes": 265,
    "runtime": "89 min",
    "releaseDate": "2008-07-16",
    "ratingRank": null,
    "id": "movie-2375791"
  },
  {
    "sourceId": "3805354",
    "title": "世界大战：歌利亚",
    "countryCode": "MY",
    "countryName": "Malaysia",
    "year": 2012,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2256845158.jpg",
    "summary": "1899年地球遭到了火星人的入侵。火星人高二十多米，拥有先进的武器装备，即将得逞时却没有抵抗住细小的感冒病毒而最终失败。15年后火星人再度入侵地球，并且使用了更为先进的武器。面对强大的敌人，以艾瑞克为队长的ARES战斗小组的成员们爆发出了最大的勇气和力量。武器更胜一筹的火星人最终包围了曼哈顿。在生死关头，喀什尼尔福将军驾驶着被敌人打中的齐柏林飞艇冲向了最后一艘也是威力最大的飞艇。整个城市获救了...",
    "genres": [
      "Action",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "马来西亚",
      "日本",
      "美国"
    ],
    "rating": 5.1,
    "votes": 458,
    "runtime": "85 min",
    "releaseDate": "2012-07-14",
    "ratingRank": null,
    "id": "movie-3805354"
  },
  {
    "sourceId": "1401244",
    "title": "米娜的故事",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1113308027.jpg",
    "summary": "米娜（罗曼娜·波琳热 Romane Bohringer 饰）和安塞尔（艾尔莎·泽贝斯坦 Elsa Zylberstein 饰）从小一起长大，两人之间的友情真挚而紧密。米娜个性温和，平易近人，对艺术的敏感和热爱让她全身散发着一种迷人的气息。安塞尔个性强势，从小就争强好胜的她简直就是米娜的反面，可是，这种巨大的差异却并没有损害她们之间的分毫友谊。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "荷兰",
      "法国",
      "比利时"
    ],
    "rating": 8.7,
    "votes": 833,
    "runtime": "124 min",
    "releaseDate": "1994-03-02",
    "ratingRank": null,
    "id": "movie-1401244"
  },
  {
    "sourceId": "1858802",
    "title": "黑皮书",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2198811825.jpg",
    "summary": "二战末期，荷兰的犹太姑娘雷切尔（卡里斯·范·侯登 Carice van Houten 饰）和她家人刚刚逃过死神关口，来不及喘息又遭到德国军船的扫射，只幸存下雷切尔一人。躲避在暗处的雷切尔把叛徒的样子牢牢记在心上，她的一生都为寻找这个人而孤注一掷。",
    "genres": [
      "Drama",
      "Thriller",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "战争"
    ],
    "originalRegions": [
      "荷兰",
      "德国",
      "英国",
      "比利时"
    ],
    "rating": 8.3,
    "votes": 55632,
    "runtime": "145 min",
    "releaseDate": "2009-02-03",
    "ratingRank": null,
    "id": "movie-1858802"
  },
  {
    "sourceId": "1296482",
    "title": "安东尼娅家族",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p544715774.jpg",
    "summary": "故事发生在二战结束之后，安东尼娅（维力奇·范·阿麦莱 Willeke van Ammelrooy 饰）带着女儿达尼埃莱（埃尔斯·多特曼斯 Els Dottermans 饰）回到了久违的家乡。安东尼娅乐善好施的善良性格为战后满目疮痍的家园带来的新的希望，她先后收留了痴呆女孩代代（玛丽娜·德·格拉夫 Marina de Graaf 饰）和农夫巴斯（简·德克莱尔 Jan Decleir 饰）等人，组件了一个特殊的家族——安东尼娅家族。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "荷兰",
      "比利时",
      "英国"
    ],
    "rating": 8.3,
    "votes": 1747,
    "runtime": "102 min",
    "releaseDate": "1995-09-12",
    "ratingRank": null,
    "id": "movie-1296482"
  },
  {
    "sourceId": "3749973",
    "title": "神偷诺诺",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 2012,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1706559867.jpg",
    "summary": "顽皮的男孩Nono虽然常惹事生非，但其实他从小就立志，长大后要跟爸爸一样，成为一名出色的警探。没有母亲的他，在成年礼的前两天独自被送上火车，准备到叔叔家去「磨练心性」，殊不知遇上自称父亲好友的聪明老贼，就此开展了一连串精彩刺激的「成年须知」之旅。就在两人逐渐建立起忘年情谊的同时，Nono惊见报纸上自己被绑架的消息。觉得事有蹊跷的他开始抽丝剥茧拼凑线索，没想到种种暗示竟指向与素未谋面的母亲有关？他该选择相信他的大朋友吗？惊心动魄的推理情节、趣味横生的冒险之旅，结局出人意料。《神偷NONO》有着轻鬆诙谐的基调，佐以悬疑推理的紧凑步调，保证同时满足每个人内心都曾梦想成为侦探并且历险办桉的愿望。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "荷兰",
      "英国"
    ],
    "rating": 7.4,
    "votes": 139,
    "runtime": "95 min",
    "releaseDate": "2012-10-03",
    "ratingRank": null,
    "id": "movie-3749973"
  },
  {
    "sourceId": "1296432",
    "title": "神秘失踪",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543618742.jpg",
    "summary": "杰夫（伯纳德-皮亚里·唐纳狄欧 Bernard-Pierre Donnadieu 饰）和女友戴安娜（约翰娜·特尔·斯蒂格 Johanna ter Steege 饰）的感情一直十分要好，一次旅行中，去买饮料的戴安娜突然失踪。人人说失踪只是戴安娜离开杰夫的借口，但这并不能阻止杰夫追逐寻找戴安娜的脚步。",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "荷兰",
      "法国"
    ],
    "rating": 7.0,
    "votes": 2736,
    "runtime": "107 min",
    "releaseDate": "1988-10-27",
    "ratingRank": null,
    "id": "movie-1296432"
  },
  {
    "sourceId": "1421843",
    "title": "财色惊劫",
    "countryCode": "NL",
    "countryName": "Netherlands",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535502602.jpg",
    "summary": "Bennie是一家快餐店的老板，因为抢劫珠宝店未遂坐了5年牢。出狱后，养父Mast命不久已的消息对他无异于晴天霹雳，养父的亲生子Koen也在此时出现，Koen是个沉迷女色的疯子却爱上了有自杀倾向的Katia。",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "荷兰",
      "比利时",
      "英国"
    ],
    "rating": 6.8,
    "votes": 334,
    "runtime": "92 min",
    "releaseDate": "2005-02-03",
    "ratingRank": null,
    "id": "movie-1421843"
  },
  {
    "sourceId": "3390931",
    "title": "无影无踪",
    "countryCode": "NO",
    "countryName": "Norway",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p704724109.jpg",
    "summary": "谁都有过年少轻狂的时期，但杨（帕尔·斯维尔·瓦海姆·哈根 Pål Sverre Valheim Hagen 饰）在这段时期中却犯下了无法挽回的过错——他的过失导致了一名8岁男孩的死亡和一个家庭的破裂，为此，杨承担了八年的牢狱之灾。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "挪威",
      "瑞典",
      "德国"
    ],
    "rating": 7.9,
    "votes": 2025,
    "runtime": "115 min",
    "releaseDate": "2008-09-26",
    "ratingRank": null,
    "id": "movie-3390931"
  },
  {
    "sourceId": "3047736",
    "title": "奥霍顿",
    "countryCode": "NO",
    "countryName": "Norway",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508878554.jpg",
    "summary": "列车长奥德·霍顿（Baard Owe 饰）已经到了67岁的退休年限，像往常一样，他完成了最后一次出车的交接班，同事们为他准备了颇有心思的欢送聚会，但奥德似乎不在状态。他与同事们分散片刻就被破旧的电子锁挡在门外，并错过了第二天的车次，退休生活就这样在不顺利中开始了……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "挪威",
      "德国",
      "法国",
      "丹麦"
    ],
    "rating": 7.6,
    "votes": 194,
    "runtime": "90 min",
    "releaseDate": "2007-12-26",
    "ratingRank": null,
    "id": "movie-3047736"
  },
  {
    "sourceId": "3276017",
    "title": "库尔特是残酷的",
    "countryCode": "NO",
    "countryName": "Norway",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1087757923.jpg",
    "summary": "库尔特（Atle Antonsen 配音）是一名叉车操作员，他深深的热爱着自己的这一份工作，亦拥有着高超的操作技巧，然而，库尔特渐渐的发现，虽然自己深受同事和上司的爱戴和信赖，但对其他人来说，叉车操作员并不是一份高尚和只得尊重的工作，就连自己的妻子和孩子们在提到他的工作时，亦选择了含糊其辞的一笔带过。",
    "genres": [
      "Comedy",
      "Animation",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "家庭"
    ],
    "originalRegions": [
      "挪威",
      "丹麦"
    ],
    "rating": 6.6,
    "votes": 526,
    "runtime": "74 min",
    "releaseDate": "2008-10-31",
    "ratingRank": null,
    "id": "movie-3276017"
  },
  {
    "sourceId": "1308127",
    "title": "鲸骑士",
    "countryCode": "NZ",
    "countryName": "New Zealand",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2318519841.jpg",
    "summary": "佩（凯莎·卡斯特-休伊斯 Keisha Castle-Hughes饰）是新西兰海岸上古老部落的酋长孙女。母亲曾经诞下龙凤胎，但不幸她和男婴都死去了，心灰意冷的父亲远走他方，剩下孤女佩给祖父母抚养成人。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "新西兰",
      "德国"
    ],
    "rating": 8.0,
    "votes": 6174,
    "runtime": "101 min",
    "releaseDate": "2002-09-09",
    "ratingRank": null,
    "id": "movie-1308127"
  },
  {
    "sourceId": "3660570",
    "title": "狂野追踪",
    "countryCode": "NZ",
    "countryName": "New Zealand",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1111610793.jpg",
    "summary": "阿简（雷·温斯顿 Ray Winstone 饰）曾经是一名游击队员，经历过战争的残酷洗礼，如今，阿简选择定居新西兰，想要过上平静的生活。一个名叫卡瑞玛（特穆拉·莫里森 Temuera Morrison 饰）的船员让阿简再度陷入了危险之中，他奉命追击这个据说犯了杀人之罪的逃犯。",
    "genres": [
      "Drama",
      "Action",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "冒险"
    ],
    "originalRegions": [
      "新西兰",
      "英国"
    ],
    "rating": 7.5,
    "votes": 1350,
    "runtime": "102 min",
    "releaseDate": "2011-04-29",
    "ratingRank": null,
    "id": "movie-3660570"
  },
  {
    "sourceId": "2059314",
    "title": "摆渡人",
    "countryCode": "NZ",
    "countryName": "New Zealand",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/subject/l/public/s2716218.jpg",
    "summary": "苏兹（Kerry Fox 饰）、泰特（Sally Stockwell 饰）等一伙极富冒险精神的年轻人决定驾船从新西兰前往斐济，享受他们惊险刺激的假期之旅。当船行驶在南太平洋中央时，海上突起大雾，所有通讯全部中断。正当他们焦急之时，一艘破旧的小渔船由远及近出现在他们面前。船上有一个奄奄一息的希腊人（John Rhys-Davies 饰），他自称知晓欺骗死神的方法，迄今为止已活了数个世纪。而如今大限临近，地狱三途河的摆渡人正摇橹前来，欲将其带往另一个世界。",
    "genres": [
      "Thriller",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "新西兰",
      "英国"
    ],
    "rating": 5.3,
    "votes": 234,
    "runtime": "100 min",
    "releaseDate": "2007-04-11",
    "ratingRank": null,
    "id": "movie-2059314"
  },
  {
    "sourceId": "1983590",
    "title": "完美生物",
    "countryCode": "NZ",
    "countryName": "New Zealand",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516341102.jpg",
    "summary": "《完美生物》设想了一个人类和吸血鬼和平共存的世界，当一场流行性传染病开始席卷人类后，一名吸血鬼转而袭击人类，这种微妙的平衡看似要被打破，教会派Silus去抓捕这名吸血鬼里的叛徒Edgar。Silus同一名人类警官 (Burrows)一起将要找到躲藏在黑暗地下的Edgar。",
    "genres": [
      "Drama",
      "Action",
      "Sci-Fi",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "科幻",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "新西兰",
      "英国"
    ],
    "rating": 5.1,
    "votes": 1010,
    "runtime": "88 min",
    "releaseDate": "2006-04-24",
    "ratingRank": null,
    "id": "movie-1983590"
  },
  {
    "sourceId": "3066671",
    "title": "情欲电影院",
    "countryCode": "PH",
    "countryName": "Philippines",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2356572392.jpg",
    "summary": "名为“family”的这家电影院整日放映色情电影，马伊达一家经营着电影院也住在电影院里。影院的放映厅以及走廊上每日都聚集着同性恋者、娼妓和鸡奸者。马伊达的父亲有了外遇并且有了私生子，母亲弗罗伤心至极，为此事上法院结果是败诉。收养来的弟弟阿兰使女友梅丽怀孕了，别无他法的他们只得商量着结婚的事宜。而她的妹妹杰瑞尔整日无所事事在影院当检票员。舅舅罗纳尔德举止像个女人，却娶妻生子。丈夫兰多负责家中琐事，接送孩子约纳斯上下学。一日正值放映电影时放映厅闯进一只羊，众人将之赶了出去，母亲弗罗念才念叨道电影院是该修整的时候了.......",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "菲律宾",
      "法国"
    ],
    "rating": 6.2,
    "votes": 1503,
    "runtime": "90 min",
    "releaseDate": "2008-06-25",
    "ratingRank": null,
    "id": "movie-3066671"
  },
  {
    "sourceId": "1418665",
    "title": "科扎克医生",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504983840.jpg",
    "summary": "影片根据雅努什·柯扎克（Janusz Korczak）真实经历改编。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "波兰",
      "德国",
      "英国"
    ],
    "rating": 8.4,
    "votes": 178,
    "runtime": "118 min",
    "releaseDate": "1990-05-06",
    "ratingRank": null,
    "id": "movie-1418665"
  },
  {
    "sourceId": "1794863",
    "title": "乱世老少",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511736929.jpg",
    "summary": "该片的背景是1995年的波黑战争，和著名的《无主之地》应该是同一个时代。主要是一个老男人带着一个小孩子逃离战区的故事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "波兰",
      "英国",
      "德国",
      "美国"
    ],
    "rating": 8.2,
    "votes": 170,
    "runtime": "95 min",
    "releaseDate": "2002-01-11",
    "ratingRank": null,
    "id": "movie-1794863"
  },
  {
    "sourceId": "2131248",
    "title": "你往何处去",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1762001222.jpg",
    "summary": "指挥官维尼裘斯（帕维·德朗柯 Pawel Delag 饰）深深的爱着身在罗马的人质公主丽姬娅（玛达琳娜·米尔卡兹 Magdalena Mielcarz 饰），于是，残暴的尼禄皇帝（克兹佐夫·马扎克 Krzysztof Majchrzak 饰）将丽姬娅赏赐给了维尼裘斯为妻。然而，丽姬娅公主是一个虔诚的基督教徒，她不能忍受维尼裘斯靠杀戮和掠夺过活，丽姬娅选择了离开维尼裘斯。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "波兰",
      "美国"
    ],
    "rating": 7.8,
    "votes": 189,
    "runtime": "170 min",
    "releaseDate": "2001-08-30",
    "ratingRank": null,
    "id": "movie-2131248"
  },
  {
    "sourceId": "1444529",
    "title": "旅行",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2558708402.jpg",
    "summary": "一部描写大屠杀后幸存犹太人的电影起名为《旅行》是恰如其分的。过去的两千年来，犹太人流落世界各地，在歧视、迫害和杀戮之下辗转迁徙。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "波兰",
      "法国",
      "比利时"
    ],
    "rating": 7.7,
    "votes": 101,
    "runtime": "115 min",
    "releaseDate": "1999-09-22",
    "ratingRank": null,
    "id": "movie-1444529"
  },
  {
    "sourceId": "3059472",
    "title": "与安娜的四个夜晚",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2184476666.jpg",
    "summary": "医院的烧锅炉工人奥卡拉萨（Urszula Bartos-Gesikowska 饰）的生活单调封闭，他的锅炉有时要处理医院手术的残肢，在周围森林徘徊时会遇到河道上漂来的死牛，以及偶发的强奸事件……在相依为命的奶奶去世后，奥卡拉萨生活中唯一的光亮来自护士安娜，奥卡拉萨夜里会潜入安娜的家中，为她缝补衣服，修葺地板，整夜守着熟睡的安娜发呆。奥卡拉萨买了一只戒指，在无人知晓的夜里把卑微情人的礼物戴在安娜手上。在第五夜奥卡拉萨的行迹暴露，等待他的除了官方的公开审判，还有安娜的拒绝。",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "波兰",
      "法国"
    ],
    "rating": 7.6,
    "votes": 1866,
    "runtime": "87 min",
    "releaseDate": "2008-09-12",
    "ratingRank": null,
    "id": "movie-3059472"
  },
  {
    "sourceId": "3781749",
    "title": "磨坊与十字架",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1792327043.jpg",
    "summary": "影片改编自比利时艺术史学家Michael Francis Gibson的小说，是一部以文艺复兴时代为背景的惊悚片，围绕尼德兰著名画家博鲁盖尔的名作《受难之路》而展开。《磨坊与十字架》是一堂伪装成电影的的艺术史课，它的最初公开亮相，不是在电影院也不是在电影节，而是在卢浮宫 、纽约大都会艺术馆这样的场所。影片将人们带回十六世纪的荷兰，博鲁盖尔在创作《受难之路》时借助一个圣经故事来影射当时西班牙统治者的残忍以及尼德兰人民的反抗。莱彻·玛祖斯基将艺术史研究同电影CGI、3D技术结合起来，试图还原画家在创作这幅作品时所处的社会环境以及当时的思想、心境。站在一部艺术品之前的心神激荡，不正是让我们所有人晕眩地以为是所谓创作冲动么？值得一提的是，勃鲁盖尔的另一名作《雪中猎人》刺激瑞典导演罗伊·安德森创作下一部作品，名字很长的《树梢上沉思存在的鸟儿》，这部作品有望在明年戛纳或者威尼斯电影节亮相。",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "波兰",
      "瑞典"
    ],
    "rating": 7.4,
    "votes": 1990,
    "runtime": "96 min",
    "releaseDate": "2011-01-23",
    "ratingRank": null,
    "id": "movie-3781749"
  },
  {
    "sourceId": "1291829",
    "title": "古尔德的32个短片",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508616931.jpg",
    "summary": "Side #1- WIDESCREEN",
    "genres": [
      "Drama",
      "Music",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "音乐",
      "传记"
    ],
    "originalRegions": [
      "葡萄牙",
      "加拿大",
      "芬兰",
      "荷兰"
    ],
    "rating": 8.4,
    "votes": 786,
    "runtime": "98 min",
    "releaseDate": "1993-09-14",
    "ratingRank": null,
    "id": "movie-1291829"
  },
  {
    "sourceId": "1442101",
    "title": "世界源头之旅",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508886592.jpg",
    "summary": "在曼努艾尔．德．奥利维拉1997年的作品《世界起点之旅》中，他请意大利著名演员马尔塞洛．马斯特罗亚尼扮演一个年老的导演，其实就是扮演他自己，影片几乎是一部纪录片，摄影机漫游在公路、河畔，以及绿荫繁茂的林间的那座童年的豪华旅馆，现在那些只是残墙断垣建筑被老人的笑容唤醒。在追寻自己记忆的过程中，导演在路旁一个民舍门前驻足，他发现了一座小小的雕像，一个戴着帽子的男人永远扛着一根大木头。乡人告诉导演一首相关的民谣：“我是彼德罗．马考；我背上背一根大木头；许多人从这里经过；有的是一幅白色嘴脸；另一些是一幅黑色嘴脸，但是，……谁都不带我脱离苦海！”在影片的结尾的最后的镜头，导演对助手说：“你也是一个彼德罗．马考，永远不能脱离苦海”。这也是奥立维拉对自己的感叹，他一辈子探求着那测不准的人类情感世界的原理，一辈子脱离不了这个苦海。那年奥利维拉快90岁了，而2002年他93岁的时候拍摄出的最新作品的片名就是《测不准原理》。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "葡萄牙",
      "法国"
    ],
    "rating": 7.7,
    "votes": 112,
    "runtime": "95 min",
    "releaseDate": "1997-05-16",
    "ratingRank": null,
    "id": "movie-1442101"
  },
  {
    "sourceId": "3082472",
    "title": "秘境里斯本",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1125948395.jpg",
    "summary": "十四岁的约翰从小就生长在修道院中，没有亲人，亦没有过去。一天，一位神秘的妇人安吉拉（玛利亚·若奥·巴斯托斯 Maria João Bastos 饰）找到了约翰，声称自己是他的亲生母亲，并且向约翰讲述了她曾经的故事。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "葡萄牙",
      "法国"
    ],
    "rating": 7.5,
    "votes": 886,
    "runtime": "272 min",
    "releaseDate": "2010-10-20",
    "ratingRank": null,
    "id": "movie-3082472"
  },
  {
    "sourceId": "1829850",
    "title": "落入俗世",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511674534.jpg",
    "summary": "戛纳常客、《回首向来萧瑟处》、《范黛的小室》导演佩德罗?科斯塔1994年经典作品，讲述一位护士陪伴昏迷的受伤男子回他家将他交给家人照顾，在此过程中年轻的护士渐渐卷入神秘的阴谋...",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "葡萄牙",
      "法国",
      "德国"
    ],
    "rating": 7.5,
    "votes": 246,
    "runtime": "110 min",
    "releaseDate": "1995-02-10",
    "ratingRank": null,
    "id": "movie-1829850"
  },
  {
    "sourceId": "1937459",
    "title": "前进青春",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p459707612.jpg",
    "summary": "这部影片还有一个译名是《年轻人，向前一步走！》，这个片名透露着给予年轻人希望的信息。这部影片刻画了一个有着沉重过去的男人，影片还探讨了上一辈人与子女的关系。片中充满着种种讯息和隐喻。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "葡萄牙",
      "法国",
      "瑞士"
    ],
    "rating": 7.2,
    "votes": 342,
    "runtime": "155 min",
    "releaseDate": "2006-11-23",
    "ratingRank": null,
    "id": "movie-1937459"
  },
  {
    "sourceId": "2075412",
    "title": "金发奇女",
    "countryCode": "PT",
    "countryName": "Portugal",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p866771947.jpg",
    "summary": "唯一由默片拍到現在的導演，迪‧奧利菲拉可說是活動電影博物館了。大師一百歲又生猛出招啦！這一招是個完美無瑕的道德故事，玩卡夫卡式的寓言不止，更曲筆擺出華麗古典版布紐爾格局。倒楣的馬加里奧一見鍾情對窗金髮女，但當美人被追到手，情卻隔了幾重山：叔父的反對、經濟的拮据，最後竟是金髮女的問題。生命果然是個謎。最精彩的是爐火純青的畫面，伺機同你暢遊葡萄牙文化藝術，文學金句、音樂、名畫……讓你飽覽而回。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "葡萄牙",
      "西班牙",
      "法国"
    ],
    "rating": 7.1,
    "votes": 611,
    "runtime": "64 min",
    "releaseDate": "2009-02-10",
    "ratingRank": null,
    "id": "movie-2075412"
  },
  {
    "sourceId": "3541997",
    "title": "柴可夫斯基芭蕾舞剧：胡桃夹子",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2327920276.jpg",
    "summary": "芭蕾舞剧《胡桃夹子》是世界上最优秀的芭蕾舞剧之一，它之所以能吸引千千万万的观众，一方面是由于它有华丽壮观的场面、诙谐有趣的表演，但更重要的原因是柴科夫斯基的音乐赋予舞剧以强烈的感染力。《胡桃夹子》剧本是根据德国名作家霍夫曼的童话《胡桃夹子和鼠王》改编的，全剧共分两幕，描绘了儿童的独特天地。舞剧的音乐充满了单纯而神秘的神话色彩，具有强烈的儿童音乐特色。剧情大致为：圣诞节，女孩玛丽得到一只胡桃夹子。夜晚，她梦见这胡桃夹子变成了一位王子，领着她的一群玩具同老鼠兵作战。后来又把她带到果酱山，受到糖果仙子的欢迎，享受了一次玩具、舞蹈和盛宴的快乐。",
    "genres": [
      "Romance",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "俄罗斯",
      "英国",
      "法国"
    ],
    "rating": 8.9,
    "votes": 160,
    "runtime": "Unknown runtime",
    "releaseDate": "2007-01-02",
    "ratingRank": null,
    "id": "movie-3541997"
  },
  {
    "sourceId": "1770064",
    "title": "寻找幸福的起点",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513069386.jpg",
    "summary": "生活对于六岁的男孩凡亚（柯里亚·史比里道诺夫 Kolya Spiridonov 饰）来说并不轻松，从小就在孤儿院长大他早就练了八面玲珑的处世技巧。一日，凡亚被告知即将被一对意大利夫妇领养，同伴们羡慕的眼光让他不经对未来的生活有了几分美好的相像。一个女人的到来打碎了凡亚松赛夫的幻想，女人想要寻找自己早已被人领养的孩子，却遭到了无情的辱骂，绝望的她最终选择了卧轨自杀。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 8.4,
    "votes": 2092,
    "runtime": "90 min",
    "releaseDate": "2005-09-22",
    "ratingRank": null,
    "id": "movie-1770064"
  },
  {
    "sourceId": "1304870",
    "title": "母与子",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510190854.jpg",
    "summary": "在俄罗斯某个偏僻的小山村，人烟罕至，静谧非常，这里的景色如同律动的油画一般，美得忧伤，美得窒息。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "俄罗斯",
      "德国"
    ],
    "rating": 8.3,
    "votes": 2009,
    "runtime": "73 min",
    "releaseDate": "1997-09-25",
    "ratingRank": null,
    "id": "movie-1304870"
  },
  {
    "sourceId": "2156532",
    "title": "垂死的天鹅",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1917,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2423924096.jpg",
    "summary": "На берегу реки Сочи немая танцовщица Гизелла знакомится с Виктором и влюбляется в него. Кажется, что Виктор отвечает ей взаимностью, но вскоре танцовщица обнаруживает его с другой. Увидев Гизеллу в роли умирающего лебедя, в нее влюбляется (?)художник Глинский, стремящийся изобразить в картине смерть, и использует танцовщицу для осуществления своего замысла.",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 8.3,
    "votes": 176,
    "runtime": "49 min",
    "releaseDate": "1917-01-17",
    "ratingRank": null,
    "id": "movie-2156532"
  },
  {
    "sourceId": "3540862",
    "title": "士兵非多特的故事",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2558334487.jpg",
    "summary": "The storyline is based on the folk tale Go I Know Not Whither and Fetch I Know Not What",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 8.3,
    "votes": 132,
    "runtime": "70 min",
    "releaseDate": "2008-12-18",
    "ratingRank": null,
    "id": "movie-3540862"
  },
  {
    "sourceId": "1303027",
    "title": "高加索的俘虏",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1996,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2442081289.jpg",
    "summary": "本来是一场你做初一我做十五的战乱仇杀，谁知失手被俘的俄军虾兵蟹将，被高加索村长当成人质，希望通过交换战俘赎回爱子。怨恨未曾消解，情意却默默滋生；先是血气方刚的虾兵与十月芥菜的村长女儿有来有往，后是蟹将与监守他的哑巴成为无声的莫逆。可惜好景不常，以为是解除武装的桃花源，瞬间转为万劫不复的地狱。影片就在车臣战区不远拍摄，以当地村民为演员更加强了真实感。波德洛夫技艺之精，视野之纯，使人心服口服。获九六康城影展国际影评人奖。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "俄罗斯",
      "哈萨克斯坦"
    ],
    "rating": 8.1,
    "votes": 344,
    "runtime": "99 min",
    "releaseDate": "1996-03-15",
    "ratingRank": null,
    "id": "movie-1303027"
  },
  {
    "sourceId": "1300485",
    "title": "婚礼",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2174118266.jpg",
    "summary": "在莫斯科附近的矿区村庄里，住着善良老实的青年矿工米什卡，他那青梅竹马的女朋友塔尼亚，在离开家乡多年以后又回到了他的身边。专情的米什卡不计前嫌，决定娶塔尼亚为妻。但米什卡的母亲却因为怀疑塔尼亚的纯洁，坚决反对这门婚事；与此同时，米什卡的老祖父也在到处散布未来孙媳妇的坏话；只有米什卡的父亲在竭尽全力地准备着婚礼，为此他甚至发不出工资给矿工，于是全镇的矿工几乎都闯进了婚礼……婚礼前，为了给新娘买耳环，米什卡被朋友怂恿喝醉了酒，参与了抢劫。婚礼进行到一半时，米什卡被突如其来的警察带回了警察局。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "俄罗斯",
      "法国",
      "德国"
    ],
    "rating": 8.1,
    "votes": 185,
    "runtime": "114 min",
    "releaseDate": "2000-09-27",
    "ratingRank": null,
    "id": "movie-1300485"
  },
  {
    "sourceId": "1447034",
    "title": "斯佐的爱",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204851993.jpg",
    "summary": "个性孤僻的哈萨克男孩，被命运推向不法的地下拳击，他像草原和巴尔喀什一样平静的眼神中流露出一切无所谓的人生哲学。他爱上了俄罗斯族女人，为她过着仍然平淡的生活。而生活就像草原上的天气，严冬总是在不经意间换作春天……",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Crime",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "犯罪",
      "运动"
    ],
    "originalRegions": [
      "哈萨克斯坦",
      "俄罗斯",
      "德国",
      "法国"
    ],
    "rating": 8.1,
    "votes": 160,
    "runtime": "Unknown runtime",
    "releaseDate": "2004-03-14",
    "ratingRank": null,
    "id": "movie-1447034"
  },
  {
    "sourceId": "1305858",
    "title": "无声言证",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2157014008.jpg",
    "summary": "天生不能说话的比莉（玛丽娜·奇蒂娜 Marina Zudina 饰）是一名道具师，她的工作是为小成本恐怖片提供道具，虽然身体上有缺憾，但有一个关心她的姐姐让她的生活充满了温暖。一天收工后，她为了取回落在拍摄现场的道具而折返，却被锁在了片场。无聊的她四处转悠，无意之间闯进了一部色情片的拍摄现场，令他没有想到的是，在转瞬间，色情变恐怖，女演员活生生的杀死了，而凶手手中的镜头，如实的拍下了这血腥的一幕。比莉报了警，警察前来搜索却一无所获，凶手坚称吓坏了的比莉将假戏看成了真做。",
    "genres": [
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "俄罗斯",
      "英国",
      "德国"
    ],
    "rating": 8.0,
    "votes": 17594,
    "runtime": "95 min",
    "releaseDate": "1995-09-15",
    "ratingRank": null,
    "id": "movie-1305858"
  },
  {
    "sourceId": "1548912",
    "title": "兄弟",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2205000896.jpg",
    "summary": "年轻的丹尼尔·巴格罗夫服满兵役后回到家乡，母亲要他去圣彼得堡找哥哥维克托，以便找到合适的工作。到了彼得堡他在市场救了一个绰号为“德国人”的摆地摊的男子霍夫曼，并结识了爱吃药的女混混凯特。 丹尼尔找到了哥哥维克托，发现他已成为了一个杀手，维克托刚刚结到一笔订单要干掉一名恐怖分子“车臣人”，维克托要丹尼尔帮忙干掉“车臣人”。丹尼尔先租了一个房子居住，后来尽管丹尼尔成功干掉了“车臣人”，但却遭到雇佣者的追杀，原来雇佣维克托的黑帮大佬想干掉贪财的维克托。丹尼尔在逃脱途中打伤了一名大佬的手下，并得到开有轨电车的女司机斯维特兰娜的帮助，此后丹尼尔与斯维特兰娜发生感情并一起生活了一段时间。之后丹尼尔再次为哥哥做事，打死了大佬的几名手下，而大佬为了报仇，以维克托为人质想除掉前来的丹尼尔。最终丹尼尔将黑帮分子干掉，并救出了哥哥。之后他带着大佬留下的一大笔美金离开，他去找斯维特兰娜要求她与他一起远走高飞，然而她坐牢的丈夫已归家，而她仍深爱着丈夫因此拒绝了丹尼尔的要求。丹尼尔感到大城市的人都只爱钱贪生怕死，包括哥哥维克托，最终离开彼得堡去了莫斯科。",
    "genres": [
      "Drama",
      "Music",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "音乐",
      "犯罪"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 8.0,
    "votes": 904,
    "runtime": "96 min",
    "releaseDate": "1997-05-17",
    "ratingRank": null,
    "id": "movie-1548912"
  },
  {
    "sourceId": "1416904",
    "title": "西服",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178316801.jpg",
    "summary": "这是3个俄罗斯小伙子在海边小镇的一连串冒险小故事。他们觉得在某些场合他们需要一套昂贵的优质西装，他们成功地买了一套，但奇怪的是当其中一个穿上时，就会由少年变成大人。他们3个都有典型的家庭问题，父母离婚，母亲有问题，而父亲不关心儿子。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "俄罗斯",
      "德国",
      "法国",
      "意大利",
      "乌克兰"
    ],
    "rating": 8.0,
    "votes": 243,
    "runtime": "92 min",
    "releaseDate": "2003-04-30",
    "ratingRank": null,
    "id": "movie-1416904"
  },
  {
    "sourceId": "3154392",
    "title": "永恒记忆",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2458917097.jpg",
    "summary": "20世纪初的瑞典，社会动荡，物质生活与精神生活双双匮乏。玛丽亚（Maria Heiskanen 玛丽亚·海斯卡尼 饰）是个普普通通的家庭主妇，操持着一个并不富裕的家，一次偶然的博彩，让她中了一台相机，她的人生就此改变。她开始偷偷学习拍照，并对此非常着迷，她拍下孩子成长的  样子，随手发现的美景，慢慢的，她开始有能力为邻居拍照，赚点钱，他们也对照片特别满意，国王来访时，她也被请去拍照……当然，这一切要背着她的酒鬼丈夫。经常冲印照片令玛丽亚与当地小照相馆老板佩特森（Jesper Christensen 饰）熟悉起来，他是她的伯乐，一直称赞她的天赋，鼓励她拍下去，二人产生淡淡的情愫，最终发乎情止乎礼，湮没在时光里，唯有玛丽亚拍下的美妙照片，至今留存……",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "瑞典",
      "芬兰",
      "挪威",
      "丹麦",
      "德国"
    ],
    "rating": 8.5,
    "votes": 6384,
    "runtime": "131 min",
    "releaseDate": "2008-09-24",
    "ratingRank": null,
    "id": "movie-3154392"
  },
  {
    "sourceId": "1308658",
    "title": "派特森与芬达猫",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506881898.jpg",
    "summary": "新年前夕，派特森与心爱的小猫芬达斯在一个晴朗的日子里来到湖边钓鱼。派特森在湖上驾着他新发明的平底帆船，而火箭猫 - 芬达斯也在冰湖上玩的不亦乐乎，两人完全忘了古塔生曾提醒他们暴风雪要来的警告；",
    "genres": [
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "瑞典",
      "德国"
    ],
    "rating": 8.5,
    "votes": 224,
    "runtime": "75 min",
    "releaseDate": "1999-12-25",
    "ratingRank": null,
    "id": "movie-1308658"
  },
  {
    "sourceId": "1293234",
    "title": "第七封印",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1957,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2021642865.jpg",
    "summary": "海滩边，巨浪滔天，英武的骑士布洛克（马克斯•冯•西多 Max von Sydow 饰）与黑衣死神（本特•埃切罗特 Bengt Ekerot 饰）摆下了一盘生死棋局。在下棋的过程中，骑士在回顾自己的人生，所见所闻暗合圣经的图景。十四世纪十字军东征后期，欧洲大陆瘟疫蔓延，民不聊生。布洛克曾遇到过马戏团的一对夫妻，丈夫笃信神明，无比虔诚，妻子则更加现实，唯命是从。他们的相濡以沫让幸福唾手可得。骑士在树林中邂逅了铁匠夫妇。铁匠非常粗鲁，他的妻子很是风骚，他们在树林里对着路人演出双簧，仿佛一对可笑的傀儡。最后，在经历过集体膜拜的祭奠仪式后，武士和他的朋友们再次遇到了死神，曾经的无助与恐惧，愤怒与怀疑，都化作了人生的诘问……",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "瑞典"
    ],
    "rating": 8.4,
    "votes": 32619,
    "runtime": "96 min",
    "releaseDate": "1957-02-16",
    "ratingRank": null,
    "id": "movie-1293234"
  },
  {
    "sourceId": "1293156",
    "title": "处女泉",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1960,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2186774515.jpg",
    "summary": "早上，虔诚的农场主陶尔（Max von Sydow 饰）夫妻做过了祷告，随后安排女儿卡琳骑马为教堂送一些蜡烛，卡琳穿上了新制的盛装，邀请家里的养女英格丽同行。有孕在身的英格丽性格放纵，并一直嫉妒卡琳的明媚人生，出行前，英格丽在食物中塞进了一只蛤蟆。行至一片森林前，英格丽让卡琳独自上路而自己尾随观察。林中的三个牧羊人看到孤身一人的卡琳顿起歹意，他们奸污后又打死了卡琳，掳走她的外套。傍晚，三名牧羊人投宿陶尔家中，向陶尔妻子兜售卡琳的衣物，惊慌的英格丽亦同时回到家中，她向陶尔忏悔了自己诅咒卡琳的罪行。陶尔沐浴更衣，以白桦树枝抽打自己后，决意用很双手为女儿报仇……",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "瑞典"
    ],
    "rating": 8.4,
    "votes": 15093,
    "runtime": "89 min",
    "releaseDate": "1960-02-08",
    "ratingRank": null,
    "id": "movie-1293156"
  },
  {
    "sourceId": "1296792",
    "title": "冬日之光",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1963,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1886926656.jpg",
    "summary": "埃里克森牧师在瑞典一小镇宣扬基督的爱，认为爱是上帝存在的证明，但围绕在他身边发生的事却弥漫着世界末日的气息，因为他与人全无沟通。上承《犹在镜中》，下启《沉默》的《信仰三部曲》中间作品，场景集中（室内剧形式），时间短促（发生在一天内），虽然简洁但传递出深刻的涵义。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "瑞典"
    ],
    "rating": 8.3,
    "votes": 3787,
    "runtime": "81 min",
    "releaseDate": "1963-02-11",
    "ratingRank": null,
    "id": "movie-1296792"
  },
  {
    "sourceId": "1294897",
    "title": "面对面",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 1976,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2262918985.jpg",
    "summary": "简妮·伊萨克森和丈夫都是成功的精神病学家。但是，简妮发现自己慢慢陷入了精神崩溃。她被那些来自过去的情感与画面困扰，最终导致她无法继续扮演自己作为妻子，医生，乃至正常人的角色。",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "瑞典",
      "意大利"
    ],
    "rating": 8.3,
    "votes": 671,
    "runtime": "114 min",
    "releaseDate": "1976-04-05",
    "ratingRank": null,
    "id": "movie-1294897"
  },
  {
    "sourceId": "2002696",
    "title": "你还活着",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1725060218.jpg",
    "summary": "瑞典小城，形形色色看似普通而又古怪的小城居民。天天神经质般叫嚷“没有人理解自己”的胖大妈，破坏别人宴席而被宣判坐电椅执行死刑的中年大叔，一边做爱一边念叨银行基金赔钱的怪男人，口不择言伤害到对方的争吵夫妇，听了二十七年精神病人倾诉已经不堪重负的精神科医生，一个随时都会解散的业余乐团，敢于追求爱情哪怕只是梦境的女孩安娜……一段段看似毫无联系的生活片段，或荒诞滑稽或离经叛道，却共同讲述着人与人之间爱与被爱的幽默悲喜剧。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "瑞典",
      "德国",
      "法国",
      "丹麦",
      "挪威",
      "日本"
    ],
    "rating": 8.2,
    "votes": 4388,
    "runtime": "95 min",
    "releaseDate": "2007-09-21",
    "ratingRank": null,
    "id": "movie-2002696"
  },
  {
    "sourceId": "4739952",
    "title": "初恋这件小事",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg",
    "summary": "初中生小水相貌平平，家境一般，所以在学校里并不受重视。但是她心地善良，又有一群死党，日子过得倒也开心。某天，她遇见了帅气的学长阿亮（马里奥·毛瑞尔 Mario Maurer 饰），春心萌动，无 法遏制。她喜欢看他踢足球，看他拍照，如痴如狂。上英语课时，她不停地给死党传纸条 表达对阿亮的爱慕。然而，英语老师则指出她除了英语一无是处。回到家，叔叔从美国捎来了父亲的消息，说如果她能考全校第一，就可以去美国。于是，她按下决心要努力加油。某天，小水等人在买饮料时，碰到篮球队员蛮横插队。阿亮挺身而出，为她们教训了对方，并挨了校长的责骂。小水也第一次听说，阿亮的父亲因为射失点球而退役的事情，理解了他心中的隐痛。由于舞蹈队是给美女准备的，所以小水等一干姐妹准备在话剧社大展身手，没想到学长也来到这个社团。两人还扮演王子公主，他们的恋情会由此展开么？……",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 8.3,
    "votes": 643975,
    "runtime": "118 min",
    "releaseDate": "2012-06-05",
    "ratingRank": null,
    "id": "movie-4739952"
  },
  {
    "sourceId": "2365260",
    "title": "爱在暹罗",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1024585648.jpg",
    "summary": "Mew（Witwisit Hirunwongkul饰）和Tong（Mario Maurer饰）是一对小伙伴，一场悲剧却使二人不得不分开：Tong的姐姐阿红在一次野外旅行中不幸失踪，Tong的父母迅速决定离开这个伤心地。",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 8.3,
    "votes": 247538,
    "runtime": "150 min",
    "releaseDate": "2007-11-22",
    "ratingRank": null,
    "id": "movie-2365260"
  },
  {
    "sourceId": "1925349",
    "title": "锡矿山",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2210697780.jpg",
    "summary": "Set in 1950 and based on the series of autobiographical short stories by Archin Panjabhan, the beginning finds Archin expelled from Bangkok's Chulalongkorn University in his sophomore year. He is packed off to southern Thailand, where he supposedly has a job waiting for him. It's in a remote, mountainous jungle that doesn't even \"rate a spot on the map\", a place that is little but all-consuming red mud and seemingly endless, torrential downpours.",
    "genres": [
      "Drama",
      "Comedy",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "传记"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 8.3,
    "votes": 530,
    "runtime": "Unknown runtime",
    "releaseDate": "2005-05-26",
    "ratingRank": null,
    "id": "movie-1925349"
  },
  {
    "sourceId": "1794547",
    "title": "小犬与女孩",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1982427478.jpg",
    "summary": "寇妞（娜华拉·泰夏华泰拿派史彻 Nawarat Techarathanaprasert 饰）的父母离了婚，无人照料的她只得借住在亲戚家中，过着寄人篱下的生活。某日，寇妞遇见了一只和她一样孤苦无依的流浪狗，善良的寇妞收留了它，给它取名“叉烧”。寇妞偷偷的将叉烧养在天台上，每天无微不至的照顾着它，一人一狗之间结下了深厚的友谊。",
    "genres": [
      "Drama",
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 8.0,
    "votes": 520,
    "runtime": "Unknown runtime",
    "releaseDate": "2006-01-12",
    "ratingRank": null,
    "id": "movie-1794547"
  },
  {
    "sourceId": "1805685",
    "title": "大狗民",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2392450852.jpg",
    "summary": "帕德（Mahasamut Boonyaruk 饰）是一名罐头工厂的切鱼工人，一次意外中，他削去了自己的左手食指，当他在一个鱼罐头里找到了自己的手指后才发现，这截手指其实属于工友耀德（Sawatwong Palakawong Na Autthaya 饰）。",
    "genres": [
      "Comedy",
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.9,
    "votes": 5919,
    "runtime": "100 min",
    "releaseDate": "2004-12-12",
    "ratingRank": null,
    "id": "movie-1805685"
  },
  {
    "sourceId": "2287150",
    "title": "午夜之爱",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498351741.jpg",
    "summary": "一个曼谷的计程车司机，每日巡行在的大街小巷，而他寻求心灵平静的来源，是车上不停播放着的收音机，当电台主人诉说着晴天路况与心灵小语，他就觉得人生充满希望。直到那一天，一个从事色情按摩的妓女搭上他的车，他光明的生活因此有了黑暗的转变。通俗幽默的浪漫喜剧，导演娴熟的手法，将这个小人物的故事说得流畅动人。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.9,
    "votes": 2884,
    "runtime": "100 min",
    "releaseDate": "2005-05-12",
    "ratingRank": null,
    "id": "movie-2287150"
  },
  {
    "sourceId": "4022090",
    "title": "下一站，说爱你",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p459846512.jpg",
    "summary": "梅丽（Cris Horwang 饰）年逾30，至今未婚。眼瞅着身边的朋友出双入对，自己却始终孤身一人，难免悲从中来。情人节参加完最后一个单身朋友的结婚派对，喝得醉熏熏的梅丽在车祸后意外遇到在轻轨公司上班的大伯（Theeradej Wongpuapan 饰），大伯的热心和帅气令梅丽一见倾心。为了结束自己长达三十年的单身生涯，梅丽决定把握机会，主动出击。终于鼓起勇气走到大伯面前，可是却频发状况，还被邻居的花心小妹妹阿宝抢占先机。好不容易找到一点恋爱的感觉时，梅丽却意外在大伯扔掉的背里发现一些东西。追求爱情的路上布满荆棘，梅丽最终能否赢得属于自己的爱情？",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.8,
    "votes": 50203,
    "runtime": "Unknown runtime",
    "releaseDate": "2009-10-15",
    "ratingRank": null,
    "id": "movie-4022090"
  },
  {
    "sourceId": "1308713",
    "title": "拳霸",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1071485041.jpg",
    "summary": "身怀绝技的青年阿天（托尼·贾 Tony Jaa 饰）生活在泰国一座平静的村落——巴都村，他自幼跟随师傅学习泰拳。某晚，村中不成器的青年巴端打伤阿天的师傅，并将村民们虔诚以待的佛像之首盗走。肩负村民的嘱托和众望，阿天踏上寻找巴端和佛首的道路。几经辗转，他找到在曼谷混事的同乡阿含莱，岂料对方只是一个见钱眼开的小混混，根本无心帮忙，反而利用阿天的身手在黑市拳台大赚钱财。阿天在黑市拳台名震一方，不过他念念不忘村中的佛首，仍一门心思追查。不可避免，他将与作恶多端的文物犯罪集团展开连番较量……",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.8,
    "votes": 20647,
    "runtime": "108 min",
    "releaseDate": "2003-01-21",
    "ratingRank": null,
    "id": "movie-1308713"
  },
  {
    "sourceId": "2004613",
    "title": "季节变幻",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p733383387.jpg",
    "summary": "Pom（文塔瓦·史蓝蓬 Witawat Singlampong 饰）为了暗恋的才女Dao（尤万娜特·阿拉亚尼米萨库 Yuwanat Arayanimisakul 饰）选择了马希隆大学的音乐学院。而爸爸以为他是去读医科，面对家人的期望，Pom只能隐瞒。为了能更接近Dao，Pom加入了古典乐团，却遇到了爸爸朋友的女儿Aom（Chalermpol Tuntawisut 饰），并求Aom替自己保密。在相处中Aom被Pom的纯真渐渐吸引。Pom偶然拿到了Dao的作业本，而这也使两人相识逐渐成了朋友。Pom的打鼓天分被老师发掘，决心送他出国深造，但申请表必须要父亲签字。Dao申请去布达佩斯的奖学金，Pom希望能和她一起到匈牙利进修，又不敢父母说出真相。最后秘密暴露，Pom做了一个令人讶异的选择……",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.8,
    "votes": 17575,
    "runtime": "118 min",
    "releaseDate": "2006-08-31",
    "ratingRank": null,
    "id": "movie-2004613"
  },
  {
    "sourceId": "1857095",
    "title": "恋爱症候群",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p771783746.jpg",
    "summary": "本片根据导演自己的童年回忆拍摄，他的父母都是医生。一位女医生在乡下医院里为前来求诊的村民和和尚看病，她和一个兰花养殖场的主人热恋，同时，在一间城市医院里执业的一名医生爱上了她，而在他和他之间，却发生了一段不寻常的情感交流。导演仍以长镜头表现人物细腻的情感，片中不时出现一些幽默的小人物，譬如牙医兼职做歌星，求药的老和尚亦为他人施药，年轻的和尚一心想做唱片骑师等。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "泰国",
      "法国",
      "奥地利"
    ],
    "rating": 7.8,
    "votes": 2439,
    "runtime": "105 min",
    "releaseDate": "2006-08-31",
    "ratingRank": null,
    "id": "movie-1857095"
  },
  {
    "sourceId": "2997316",
    "title": "月亮的孩子",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512321775.jpg",
    "summary": "这部影片是基于Momrajawong Kukrit Pramoj的同名小说改编，94年向世界各地发行后，被认定是剽窃之作。这部小说多处情节抄袭John Wyndham的小说《Midwich镇的杜鹃》（The Midwich Cuckoos），后者早在1960年就被拍成电影《Village of the Damned》并在1995年进行了重拍。",
    "genres": [
      "Romance",
      "Sci-Fi"
    ],
    "originalGenres": [
      "爱情",
      "科幻"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.8,
    "votes": 436,
    "runtime": "120 min",
    "releaseDate": "1994-09-09",
    "ratingRank": null,
    "id": "movie-2997316"
  },
  {
    "sourceId": "1308259",
    "title": "宇宙只有我和你",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2457404288.jpg",
    "summary": "住在泰国曼谷的日籍图书馆管理员健二（浅野忠信）一心求死，曾精心设计了多种自杀方式，无奈每次都是阳寿未尽天国不收，某晚，他错手将杀死其兄长的日本黑帮成员杀死，人生出现转折。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "泰国",
      "日本"
    ],
    "rating": 7.6,
    "votes": 2257,
    "runtime": "112 min",
    "releaseDate": "2003-08-08",
    "ratingRank": null,
    "id": "movie-1308259"
  },
  {
    "sourceId": "3041753",
    "title": "荷尔蒙",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1074591790.jpg",
    "summary": "暑假开始了，伴随着夏日热度一同翻滚的，还有悸动的青春心灵……清迈的普（查理·哲华 Charlie Trairat 饰）和迈（司拉恰奇·齐恩萨温 Sirachuch Chienthaworn 饰）是一对竞争多年的邻居，同时又是校内颇受女孩欢迎的组合，他们一齐喜欢上了回乡度假的少女娜娜，相约展开竞争；曼谷少女娥乐（霍嘉丝·芝华顾 Focus Jirakul 饰）痴迷台湾明星迪迪，为了不错过迪迪在电影中和舞台上的每个表演，娥乐决定学习中文；羞涩笨拙的宅男佐（Ratchu Surachalas 饰）为了追求美女茜，从电影中学习浪漫桥段，并且精心准备剧本，但收获的却是拒绝；恒（Chantawit Thanasewee 饰）送女友离开后，终于回到了一班兄弟的怀抱，并且再次燃起了对AV女神的憧憬……",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.5,
    "votes": 35969,
    "runtime": "126 min",
    "releaseDate": "2008-03-20",
    "ratingRank": null,
    "id": "movie-3041753"
  },
  {
    "sourceId": "1866462",
    "title": "恶魔的艺术2：邪降",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1308639435.jpg",
    "summary": "六个昔日的同窗好友在分开多年之后分别收到了旧时好友Ta的邀请，于是他们一起离开曼谷前往儿时的故乡。记忆之门也渐渐敞开。",
    "genres": [
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.5,
    "votes": 22934,
    "runtime": "100 min",
    "releaseDate": "2005-12-01",
    "ratingRank": null,
    "id": "movie-1866462"
  },
  {
    "sourceId": "1915202",
    "title": "不朽的女人",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 1963,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2219037166.jpg",
    "summary": "在具有异国情调的伊斯坦布尔，一位法国教授在寻觅一个神秘的女人，但从各个方面得到的都是否定和不确切的答复。同时，就像这个女人的存在一样，伊斯坦布尔也充满了各种假的事物，从清真寺到旅游纪念品，所有的东西都是虚假的，而且，演员的表演也被指责为“不自然”。罗伯-格里耶正是通过这种虚假对现实进行反思。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "意大利",
      "法国"
    ],
    "rating": 8.0,
    "votes": 305,
    "runtime": "Unknown runtime",
    "releaseDate": "1963-03-27",
    "ratingRank": null,
    "id": "movie-1915202"
  },
  {
    "sourceId": "1867787",
    "title": "适合分手的季节",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p476352862.jpg",
    "summary": "刚愎自用的大学讲师伊沙（努里·比格·锡兰 Nuri Bilge Ceylan 饰）和身为电视制作人的妻子巴哈（埃伯鲁·锡兰 Ebru Ceylan 饰）正在风景宜人的海滨小镇卡斯度假，但是夫妻俩的情绪却与这里全不搭调。不知何故，他们发生激烈争吵，伊沙更撇下妻子独自回到伊斯坦布尔。在分居两地的日子里，伊沙和昔日女友（Nazan Kesal 饰）重温旧梦，然而他并未沉浸其中，却渐渐体味出妻子的珍贵。他决定启程找回巴哈……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "法国"
    ],
    "rating": 7.5,
    "votes": 3119,
    "runtime": "101 min",
    "releaseDate": "2006-10-20",
    "ratingRank": null,
    "id": "movie-1867787"
  },
  {
    "sourceId": "1308249",
    "title": "太阳之旅",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510240998.jpg",
    "summary": "来自土耳其西部泰亚德默罕默特（Newroz Baz 饰）偶然结识来自东部的库尔德人巴赞（Nazmi Kirik 饰），两人成为好朋友。不久，默罕默特因为帮助巴赞躲避种族分子的攻击，而被当作库尔德人投入监狱。出狱后，他失去辛苦得来的工作，而巴赞也死于非命。默罕默特带着好友的尸体，他上遥远而充满艰辛的归乡之路……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "荷兰",
      "德国"
    ],
    "rating": 7.5,
    "votes": 105,
    "runtime": "104 min",
    "releaseDate": "1999-11-19",
    "ratingRank": null,
    "id": "movie-1308249"
  },
  {
    "sourceId": "3212310",
    "title": "潘多拉之盒",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2272038109.jpg",
    "summary": "三兄妹翻越黑海旁的高山去寻找他们失踪的母亲，但把她带回伊斯坦布尔后，没人愿意去照顾她。只有孙子穆拉特与祖母关系比较密切，两人得以一起排遣自己的孤单。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "法国",
      "德国",
      "比利时"
    ],
    "rating": 7.4,
    "votes": 339,
    "runtime": "112 min",
    "releaseDate": "2008-09-06",
    "ratingRank": null,
    "id": "movie-3212310"
  },
  {
    "sourceId": "2378028",
    "title": "Justin Timberlake: FutureSex/LoveShow - Live from Madison Square Garden",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513863245.jpg",
    "summary": "The full live show, over two hours longs, from Madison Square Garden as seen on HBO!",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 491,
    "runtime": "134 min",
    "releaseDate": "2007-09-03",
    "ratingRank": null,
    "id": "movie-2378028"
  },
  {
    "sourceId": "1937337",
    "title": "枪炮玫瑰世纪精选MV",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s2402295.jpg",
    "summary": "Welcome To The Jungle",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 316,
    "runtime": "75 min",
    "releaseDate": "1998-10-27",
    "ratingRank": null,
    "id": "movie-1937337"
  },
  {
    "sourceId": "2044099",
    "title": "Christina Aguilera: Stripped Live in the UK",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498698322.jpg",
    "summary": "Exclusive interview with Christina about her album STRIPPED,the STRIPPED tour,and her life and causes outside of music..An introduction to the supporting cast.Meet the musicians,dancers,stylists,and choreographers who help Christina put on her dazzling show every night..\"Gilbert's Bus Tour\"-Take a tour of Christina's tour bus with backup dancer Gilberto Saldivar..\"One Night In Milano\"-Christina meets up with Donatella Versace in Milan,the fashion capital of the world..\"RSVP\"-Christina answers questions directly from her fans.",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 308,
    "runtime": "Unknown runtime",
    "releaseDate": "2004-10-12",
    "ratingRank": null,
    "id": "movie-2044099"
  },
  {
    "sourceId": "1295406",
    "title": "查理布朗男孩",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1969,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p577559527.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Drama",
      "Comedy",
      "Animation",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动画",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 153,
    "runtime": "86 min",
    "releaseDate": "1971-08-26",
    "ratingRank": null,
    "id": "movie-1295406"
  },
  {
    "sourceId": "2219816",
    "title": "艾里克.克莱普顿吉他音乐节",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s2663004.jpg",
    "summary": "Eric Clapton于2004年在达拉斯的Cotton Bowl举办Crossroads吉他音乐节，邀请了各种风格的吉他大师Folk（James Taylor），Jazz（John McLaughlin），gospel (Robert Randolph & the Family Band)，Indian classical music (Vishwa Mohan Bhatt)，Blue Grass（Dan Tyminski & Ron Block），Latin（Carlos Santana）以及速弹大师Steve Vai。但音乐节的主题仍是Blues，包括B.B King, Buddy Guy, Jimmie Vaughan, Robert Cray 以及Robert Lockwood Jr. Honeyboy Edwards这样的老艺人，演奏了大量经典blues，当然还有可爱的德州blues乐队ZZ Top。",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 151,
    "runtime": "Unknown runtime",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-2219816"
  },
  {
    "sourceId": "4112014",
    "title": "玛丽亚·凯莉纽约不插电演唱会",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2243322391.jpg",
    "summary": "1992年3月16日Mariah在纽约Kaufman Astoria Studios克服自己不安情绪,现场表演了MTV Unplugged节目单元。这是她的第一次现场Concert。1992年6月25日发行的MTV\" Unplugged EP是Mariah Carey的第三张专辑。收录了Mariah在MTV的“不插电”现场原声。这张专辑也是最成功的Unplugged专辑之一。在专辑榜中首周第8名,最好成绩为第3名,3白金销量。在美国,专辑销量为5,100,000张。在日本，专辑销量为500,000张。全球专辑+单曲销量为13,700,000张,其中专辑10,000,000张。专辑中Mariah翻唱了Jackson 5的冠军曲I’ll be There,也因此造就了Mariah的第六支冠军单曲。",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐",
      "舞台艺术"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.4,
    "votes": 142,
    "runtime": "Unknown runtime",
    "releaseDate": "1992-03-16",
    "ratingRank": null,
    "id": "movie-4112014"
  },
  {
    "sourceId": "3054636",
    "title": "乔治 卡林：王者归来",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508661214.jpg",
    "summary": "George Carlin brings his comedy stylings to the Beacon theater in New York City. He rants about Abortion, The death penalty, prison farms, fart jokes, free floating hostility and words.",
    "genres": [
      "Comedy",
      "LGBTQ+",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "同性",
      "家庭",
      "舞台艺术"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.3,
    "votes": 513,
    "runtime": "62 min",
    "releaseDate": "1996-03-11",
    "ratingRank": null,
    "id": "movie-3054636"
  },
  {
    "sourceId": "3272459",
    "title": "博弈论",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2254959230.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Drama",
      "Comedy",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "运动"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.3,
    "votes": 505,
    "runtime": "Unknown runtime",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-3272459"
  },
  {
    "sourceId": "4001873",
    "title": "平方根：海绵宝宝的故事",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3956255.jpg",
    "summary": "Commemorates the 10th anniversary of the SpongeBob SquarePants. The documentary chronicles the beloved character's journey to international pop culture icon status and showcases the series' around the world.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.3,
    "votes": 188,
    "runtime": "45 min",
    "releaseDate": "2009-07-14",
    "ratingRank": null,
    "id": "movie-4001873"
  },
  {
    "sourceId": "2139531",
    "title": "The Beatles Yellow Submarine Adventure",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s3320164.jpg",
    "summary": "A ride based on the film Yellow Submarine (1968), in which the viewers/passengers travel in the yellow submarine to save Pepperland from the Blue Meanies.",
    "genres": [
      "Animation",
      "Musical"
    ],
    "originalGenres": [
      "动画",
      "歌舞"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 9.3,
    "votes": 159,
    "runtime": "Unknown runtime",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-2139531"
  },
  {
    "sourceId": "2346297",
    "title": "周六夜现场",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p836398212.jpg",
    "summary": "17 December 2006 (Season 32, Episode 9)",
    "genres": [
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 534,
    "runtime": "Unknown runtime",
    "releaseDate": "2006-12-17",
    "ratingRank": null,
    "id": "movie-2346297"
  },
  {
    "sourceId": "5150232",
    "title": "电话",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2552912504.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Musical"
    ],
    "originalGenres": [
      "歌舞",
      "舞台艺术"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 461,
    "runtime": "9 min",
    "releaseDate": "",
    "ratingRank": null,
    "id": "movie-5150232"
  },
  {
    "sourceId": "4212382",
    "title": "Beyoncé: I Am... Yours",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2258074809.jpg",
    "summary": "01. Hello",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 128,
    "runtime": "Unknown runtime",
    "releaseDate": "2009-11-23",
    "ratingRank": null,
    "id": "movie-4212382"
  },
  {
    "sourceId": "4737724",
    "title": "Eminem: E",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s4351851.jpg",
    "summary": "No synopsis available.",
    "genres": [
      "Music"
    ],
    "originalGenres": [
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 102,
    "runtime": "Unknown runtime",
    "releaseDate": "2000-12-19",
    "ratingRank": null,
    "id": "movie-4737724"
  },
  {
    "sourceId": "4706591",
    "title": "周六夜现场：贝蒂·怀特/Jay-Z",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2362999490.jpg",
    "summary": "Season 35, Episode 21",
    "genres": [
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.1,
    "votes": 552,
    "runtime": "Unknown runtime",
    "releaseDate": "2010-05-08",
    "ratingRank": null,
    "id": "movie-4706591"
  },
  {
    "sourceId": "1850674",
    "title": "辛普森一家：家庭治疗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/subject/l/public/s1742552.jpg",
    "summary": "Homer tricks the family into going to a psychologist by pretending to take them out for frosty chocolate milkshakes. He seeks an answer to the family's problems, saying that they don't laugh any more. The family breaks into a collective chuckle after the psychologist kicks them out of his office.",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 738,
    "runtime": "3 min",
    "releaseDate": "1989-12-08",
    "ratingRank": null,
    "id": "movie-1850674"
  },
  {
    "sourceId": "1304265",
    "title": "星期天与乔治同游公园",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526000471.jpg",
    "summary": "《星期天与乔治同游公园》是音乐剧大师斯蒂芬·桑德海姆（Stephen Sondheim)的代表作之一，由其老搭档詹姆斯·拉潘（James Lapine）编剧，桑德海姆包揽词曲。该剧的故事灵感来源于法国点画派大师乔治·修拉（Georges Seurat)的名作《大碗岛上的星期天下午》。关于乔治·修拉生平的记载颇少，故事主要是虚构的。1983年七月该剧第一幕（未定稿）在外百老汇的Playwrights Horizons)试验，由著名的Mandy Patinkin及Bernadette Peters主演，后桑德海姆扩充完成全剧，于1984年5月2日在百老汇的Booth Theatre首演，主角仍是Mandy和Bernadette。百老汇首演的评价褒贬不一，但是次年该剧即获得普利策最佳戏剧奖（历史上只有七个音乐剧获得过次奖），以及托尼奖两项舞台设计类奖项（该剧的舞台光学运用具有突破意义），也获得了最佳音乐剧提名，但惜败于La Cage aux Folles。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.0,
    "votes": 582,
    "runtime": "146 min",
    "releaseDate": "1986-06-16",
    "ratingRank": null,
    "id": "movie-1304265"
  },
  {
    "sourceId": "1291553",
    "title": "青木瓜之味",
    "countryCode": "VN",
    "countryName": "Vietnam",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p477906875.jpg",
    "summary": "十岁时，梅（阮如琼 饰）被邻居送到西贡一大户人家当女佣。因为长得很像女主人死去的女儿，梅深受女主人的疼爱，但女主人并没因此看到生活的亮色，她的音乐家丈夫时不时就会不做交代外出数日，后来更是消失得再无踪迹。女主人的三个儿子因为整日无所事事，常拿梅寻开心，但慢慢地，他们发现家里的生气，全是由温和善良的梅带来。",
    "genres": [
      "Drama",
      "Romance",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "音乐"
    ],
    "originalRegions": [
      "越南",
      "法国"
    ],
    "rating": 7.8,
    "votes": 41858,
    "runtime": "104 min",
    "releaseDate": "1993-06-08",
    "ratingRank": null,
    "id": "movie-1291553"
  },
  {
    "sourceId": "1299986",
    "title": "夏天的滋味",
    "countryCode": "VN",
    "countryName": "Vietnam",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2390018064.jpg",
    "summary": "河内一个由兄妹四人组成的普通中产阶级家庭，大姐香与摄影师丈夫昆有一个儿子，但两人性生活不和谐，二姐卿（黎卿）同作家金结婚没多久，小妹琳（陈女燕溪）患有幽闭恐惧症，她与弟弟海保持着一种暧昧关系。在母亲的斋祀日，三姐妹追忆起被戏称为“母亲的谭”的神秘男人。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "越南",
      "法国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 4160,
    "runtime": "112 min",
    "releaseDate": "2000-05-24",
    "ratingRank": null,
    "id": "movie-1299986"
  },
  {
    "sourceId": "1294434",
    "title": "三轮车夫",
    "countryCode": "VN",
    "countryName": "Vietnam",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2171890911.jpg",
    "summary": "该片荣获1995年第52届威尼斯电影节最佳影片金狮奖。越南天才导演陈英雄继《青木瓜之味》后第二部作品，也是梁朝伟在《悲情城市》之后再次受到全世界瞩目的电影。本片对越南底层社会的触目惊心的描述，对黑帮贩毒、杀人放火、变态的性的刻划，再现出一个充溢着堕落与罪恶的越南。一个几乎还是孩子的三轮车夫、一个诗人气质的黑帮分子（梁朝伟饰）、一个为生活所迫不惜卖身的妓女都在与这个城市一起腐烂。两个多小时的片子里，那鲜红的血哗地一声不知从何处淌了出来，也就是在那一刹那，触到了生命的质感。影片以坚硬的力度、残酷的美感、血腥的诗意构筑了一个辛辣而令人晕眩的世界......",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "越南",
      "法国",
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 10963,
    "runtime": "123 min",
    "releaseDate": "1995-09-27",
    "ratingRank": null,
    "id": "movie-1294434"
  },
  {
    "sourceId": "3055450",
    "title": "看不见的世界",
    "countryCode": "ZA",
    "countryName": "South Africa",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1005179057.jpg",
    "summary": "五十年代的南非，正是种族隔离制度执行时期。影片讲述在这样特别的时代下，妇女米里亚姆（丽莎·蕾 Lisa Ray饰）与妇女阿米拉（茜多·塞丝 Sheetal Sheth饰）之间的特别情感。米里亚姆的婚姻生活并不幸福，她发现丈夫与其大嫂偷情，唯有隐忍。直到一身牛仔打扮的阿米拉出现在她压抑恪守的生活中，两个美丽的女人一见钟情。拥有反抗精神的阿米拉是坚决反对种族隔离制度的人，这也正是吸引米里亚姆的地方。两个女人之间这微妙而细腻的情感，都在指尖的每一次轻佻中，在眼神的每一次凝视里。她们超越的不仅是性别的屏障，还有种族的阻隔。",
    "genres": [
      "Drama",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "同性"
    ],
    "originalRegions": [
      "南非",
      "英国"
    ],
    "rating": 8.0,
    "votes": 11579,
    "runtime": "94 min",
    "releaseDate": "2007-09-09",
    "ratingRank": null,
    "id": "movie-3055450"
  },
  {
    "sourceId": "1299962",
    "title": "深海狂鲨2",
    "countryCode": "ZA",
    "countryName": "South Africa",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2289414903.jpg",
    "summary": "The mutant sharks from Dr. Craven's experiments in \"Shark Attack 1\" are back, this time choosing Cape Town, South Africa as their hunting ground. Two sisters, Amy and Samantha, while diving...（",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "南非",
      "美国"
    ],
    "rating": 4.5,
    "votes": 261,
    "runtime": "93 min",
    "releaseDate": "2001-02-13",
    "ratingRank": null,
    "id": "movie-1299962"
  },
  {
    "sourceId": "3612117",
    "title": "捉鬼小精灵3",
    "countryCode": "ZA",
    "countryName": "South Africa",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2376802740.jpg",
    "summary": "卡萨达的年轻男女正准备开一场血月纵欢派对，但吸血鬼魔王却打算把他们全部变成活死人。唯一可以阻挡他行动的就是著名的佛罗格兄弟，艾格和亚伦这两兄弟带着两桶圣水和驱魔十字弓，加入高校生对抗吸血鬼的行列。",
    "genres": [
      "Comedy",
      "Action",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "冒险"
    ],
    "originalRegions": [
      "南非",
      "美国",
      "德国"
    ],
    "rating": 4.2,
    "votes": 232,
    "runtime": "81 min",
    "releaseDate": "2010-10-05",
    "ratingRank": null,
    "id": "movie-3612117"
  }
];

export const movies: Movie[] = rawMovies.map((movie) => ({
  ...movie,
  countryName: COUNTRY_NAMES[movie.countryCode] ?? movie.countryName,
  genres: movie.originalGenres.map((genre) => GENRE_TRANSLATIONS[genre]).filter((genre): genre is string => Boolean(genre)),
  posterUrl: (posterManifest as Record<string, string>)[movie.id] ?? movie.coverUrl
}));

export const movieRegionCountryMap = REGION_TO_COUNTRY_CODE;
export const movieGenreMap = GENRE_TRANSLATIONS;
