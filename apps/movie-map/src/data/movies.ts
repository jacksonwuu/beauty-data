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
  doubanTop250Rank: number | null;
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
    "doubanTop250Rank": null,
    "imdbId": "tt0106332",
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
    "doubanTop250Rank": null,
    "imdbId": "tt0108052",
    "id": "movie-1295124"
  },
  {
    "sourceId": "10583098",
    "title": "十二怒汉（电视版）",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1954,
    "coverUrl": "",
    "summary": "This production of 'Twelve Angry Men', written especially for Studio One, is shorter than the film version and leaves a few twists and turns of plot undeveloped, but it is fifty minutes of class nevertheless. For many years this episode was thought to have been lost. The Museum of Television and Radio (now the Paley Center) had only the first 30 minutes of the hour-long program on a kinescope provided by CBS - the only version CBS had. After nearly 30 years of searching, a copy of the complete program was found in 2003 by filmmaker Joseph Consentino, who was working on a documentary about noted defense attorney Robert Leibowitz (Leibowitz reported on the Charles A. Lindbergh baby kidnapping for the NY radio station WHN) and found a copy of the show in the archives maintained by the children of Leibowitz, Robert Leibowitz and Marjorie Leibowitz Finch. Samuel Leibowitz requested and received a commercial-free kinescope copy of \"Twelve Angry Men\" from CBS shortly after it aired because of his interest in legal issues. The Leibowitz children donated the kinescope to the museum and it had a re-premiere in May 2003.",
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
      "美国"
    ],
    "rating": 9.5,
    "votes": 12646,
    "runtime": "52 min",
    "releaseDate": "1954-09-20",
    "ratingRank": 3,
    "doubanTop250Rank": null,
    "imdbId": "tt0122737",
    "id": "movie-10583098"
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
    "ratingRank": 4,
    "doubanTop250Rank": null,
    "imdbId": "tt0050083",
    "id": "movie-1293182"
  },
  {
    "sourceId": "1307856",
    "title": "背靠背，脸对脸",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "王双立（牛振华 饰）是某地文化馆的代馆长，这个馆长一代就是好几年，想升也升不上去，却也没有其他变动。不料一天，来了新的文化馆长老马（雷恪生 饰），这让王双立离正馆长的距离更远了。新馆长老马原是个副乡长，王双立认为他是个土包子，心里很是不以为然，利用自己对文化馆人际关系熟 悉的优势，想方设法给老马出难题。经过几轮较量，老马终于被挤走，王双立又成了代馆长，再次受领导重用，岂料，螳螂捕蝉黄雀在后，秘书小阎（李强 饰）成了新一任馆长。王双立不甘心，再次和小阎斗法，想将对方挤走，这次王双立还能如愿与偿吗？",
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
    "rating": 9.4,
    "votes": 38410,
    "runtime": "141 min",
    "releaseDate": "1994-09-10",
    "ratingRank": 5,
    "doubanTop250Rank": null,
    "imdbId": "tt0109235",
    "id": "movie-1307856"
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
    "ratingRank": 6,
    "doubanTop250Rank": null,
    "imdbId": "tt0346336",
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
    "releaseDate": "1982-01-01",
    "ratingRank": 7,
    "doubanTop250Rank": null,
    "imdbId": "tt1395030",
    "id": "movie-1461403"
  },
  {
    "sourceId": "1291561",
    "title": "千与千寻",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2001,
    "coverUrl": "",
    "summary": "千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。",
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
    "rating": 9.3,
    "votes": 1261985,
    "runtime": "125 min",
    "releaseDate": "2019-06-21",
    "ratingRank": 8,
    "doubanTop250Rank": null,
    "imdbId": "tt0245429",
    "id": "movie-1291561"
  },
  {
    "sourceId": "1418019",
    "title": "大闹天宫",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1961,
    "coverUrl": "",
    "summary": "话说在东土傲来国有一座花果山，山上有一尊石猴吸收日精月华化身为一只神猴（邱岳峰 音），统领着山中的猴子猴孙。为求得一件称心的宝贝，神猴孙大圣潜入龙宫，强硬求来大禹治水时的定海神针如意金箍棒。东海龙王（毕克 音）心有不甘，于是上天将此事诉诸玉帝（富润生 音）。玉皇大帝命令太白金星（尚华 音）下界招安，许以爵位。不知有诈的孙大圣欣然前往，却发现只是负责养马的弼马温。得知受骗的猴王反下天庭，与天兵天将在花果山展开大战……",
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 9.3,
    "votes": 196056,
    "runtime": "114 min",
    "releaseDate": "1961-01-01",
    "ratingRank": 9,
    "doubanTop250Rank": null,
    "imdbId": "tt0059855",
    "id": "movie-1418019"
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
    "ratingRank": 10,
    "doubanTop250Rank": null,
    "imdbId": "tt0021749",
    "id": "movie-1293908"
  },
  {
    "sourceId": "26700818",
    "title": "极品基老伴：完结篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "A one-off special has been confirmed by ITV and is expected to air in 2016, with the episode being recorded on Tuesday 22nd and Wednesday 23rd December 2015. It will be the show's final episode.",
    "genres": [
      "Comedy",
      "LGBTQ+"
    ],
    "originalGenres": [
      "喜剧",
      "同性"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.3,
    "votes": 17474,
    "runtime": "47 min",
    "releaseDate": "2016-06-19",
    "ratingRank": 11,
    "doubanTop250Rank": null,
    "imdbId": "tt5364868",
    "id": "movie-26700818"
  },
  {
    "sourceId": "25736048",
    "title": "夏目友人帐：曾几何时下雪之日",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "4期にわたり放映されたアニメ『夏目友人帳』の完全新作OVA。妖怪を見ることができる夏目貴志が、自称用心棒の妖怪・ニャンコ先生と共に妖怪たちと交流する様を描く。",
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
    "rating": 9.3,
    "votes": 12303,
    "runtime": "22 min",
    "releaseDate": "2014-02-02",
    "ratingRank": 12,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-25736048"
  },
  {
    "sourceId": "3793023",
    "title": "三傻大闹宝莱坞",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2009,
    "coverUrl": "",
    "summary": "三个工程学院学生在高压教育制度里追问学习、友情和人生选择，也不断挑战只看分数和名次的成功标准。",
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "歌舞"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 9.2,
    "votes": 2077067,
    "runtime": "171 min",
    "releaseDate": "2009-12-25",
    "doubanTop250Rank": 15,
    "imdbId": "tt1187043",
    "id": "movie-3793023",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Musical"
    ],
    "ratingRank": 13
  },
  {
    "sourceId": "1292213",
    "title": "大话西游之大圣娶亲",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "",
    "summary": "至尊宝（周星驰 饰）被月光宝盒带回到五百年前，遇见紫霞仙子（朱茵 饰），被对方打上烙印成为对方的人，并发觉自己已变成孙悟空。",
    "genres": [
      "Comedy",
      "Romance",
      "Fantasy",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "奇幻",
      "古装"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 9.2,
    "votes": 855166,
    "runtime": "95 min",
    "releaseDate": "1995-02-04",
    "ratingRank": 14,
    "doubanTop250Rank": null,
    "imdbId": "tt0114996",
    "id": "movie-1292213"
  },
  {
    "sourceId": "1307914",
    "title": "无间道",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "",
    "summary": "1991年，香港黑帮三合会会员刘健明（刘德华）听从老大韩琛（曾志伟）的吩咐，加入警察部队成为黑帮卧底，韩琛许诺刘健明会帮其在七年后晋升为见习督察。1992年，警察训练学校优秀学员陈永仁（梁朝伟）被上级要求深入到三合会做卧底，终极目标是成为韩琛身边的红人。2002年，两人都不负重望，也都身背重压，刘健明渐想成为一个真正的好人，陈永仁则盼着尽快回归警察身份。",
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
      "中国香港"
    ],
    "rating": 9.2,
    "votes": 702109,
    "runtime": "101 min",
    "releaseDate": "2002-12-12",
    "ratingRank": 15,
    "doubanTop250Rank": null,
    "imdbId": "tt0338564",
    "id": "movie-1307914"
  },
  {
    "sourceId": "1292365",
    "title": "活着",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "根据余华同名小说改编。",
    "genres": [
      "Drama",
      "Family",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "历史"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 9.2,
    "votes": 453493,
    "runtime": "132 min",
    "releaseDate": "1994-06-30",
    "ratingRank": 16,
    "doubanTop250Rank": null,
    "imdbId": "tt0110081",
    "id": "movie-1292365"
  },
  {
    "sourceId": "1299131",
    "title": "教父2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1974,
    "coverUrl": "",
    "summary": "迈克尔（阿尔·帕西诺 饰）是美利坚黑手党科利昂家族的头目。 迈克尔的父亲维托·安多里尼（奥雷斯特·巴尔迪尼 饰）出生于意大利科利昂镇。1901年，维托的父亲安东尼奥、兄长保罗、母亲（玛丽亚·卡塔 饰）都死于黑手党西乔家族之手。9岁的维托只得漂洋过海逃亡美利坚谋生。入境时，海关官员（理查德·沃森 饰）将其名姓登记为维托·科利昂。 1958年，迈克尔为儿子安东尼（詹姆斯·古纳瑞斯 饰）举办了初领圣体的聚会，不想当晚便遭遇暗杀。迈克尔侥幸躲过一劫，两名杀手却被人灭口。 维托在异国他乡如何生存？他身负的血海深仇能否得报？想要迈克尔性命的是谁？将杀手灭口的又是谁？",
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
    "rating": 9.2,
    "votes": 297058,
    "runtime": "202 min",
    "releaseDate": "1974-12-12",
    "ratingRank": 17,
    "doubanTop250Rank": null,
    "imdbId": "tt0071562",
    "id": "movie-1299131"
  },
  {
    "sourceId": "1292262",
    "title": "美国往事",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1984,
    "coverUrl": "",
    "summary": "二十年代的美国，纽约少年“面条”（罗伯特•德尼罗 饰）和几个同龄朋友一起认识了聪明狡黠的“麦大”（詹姆斯 • 伍兹 饰），他们开始从事走私活动。不久，面条在一场械斗中杀伤人命，被关进监牢。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "意大利",
      "美国"
    ],
    "rating": 9.2,
    "votes": 252058,
    "runtime": "229 min",
    "releaseDate": "1984-02-17",
    "ratingRank": 18,
    "doubanTop250Rank": null,
    "imdbId": "tt0087843",
    "id": "movie-1292262"
  },
  {
    "sourceId": "1303021",
    "title": "小鞋子",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 1997,
    "coverUrl": "",
    "summary": "家境贫寒的男孩Ali（Amir Farrokh Hashemian）帮妹妹Zahra（Bahare Seddiqi）取修补好的鞋子时，不慎将鞋子弄丢，为了不被父（Mohammad Amir Naji）、母（Fereshte Sarabandi ）责罚，他央求Zahra暂时保密，说两人可以替换着穿他的鞋子上学，并答应一定会帮她买双新鞋子。",
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
      "伊朗"
    ],
    "rating": 9.2,
    "votes": 223267,
    "runtime": "89 min",
    "releaseDate": "1997-01-01",
    "ratingRank": 19,
    "doubanTop250Rank": null,
    "imdbId": "tt0118849",
    "id": "movie-1303021"
  },
  {
    "sourceId": "1291568",
    "title": "东京物语",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1953,
    "coverUrl": "",
    "summary": "儿女们都大了，各自成家。父亲周吉（笠智众饰）和老伴（东山千荣子饰）要去东京看望他们，老两口带着愉快心情上路。可另一边，还没等他们到大儿子家，孙子就因为爷爷奶奶到来腾地方哭闹不停。老人开始觉得尴尬，大儿子幸一（山村聪饰）在东京当医生，二女儿繁（杉村春子饰）在东京开美容店，二儿媳纪子（原节子饰），小女儿京子（香川京子饰）外，大阪还有三子敬三。",
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
    "rating": 9.2,
    "votes": 74086,
    "runtime": "136 min",
    "releaseDate": "1953-11-03",
    "ratingRank": 20,
    "doubanTop250Rank": null,
    "imdbId": "tt0046438",
    "id": "movie-1291568"
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
    "ratingRank": 21,
    "doubanTop250Rank": null,
    "imdbId": "tt0134836",
    "id": "movie-1303913"
  },
  {
    "sourceId": "1303418",
    "title": "你逃我也逃",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1942,
    "coverUrl": "",
    "summary": "波兰华沙有一个剧团，其中有一名演员Bronski（Tom Dugan 饰）极其擅长模仿德国纳粹领袖希特勒。Maria Tura（卡洛·朗白 Carole Lombard 饰）和Joseph Tura（杰克·本尼 Jack Benny 饰）是剧团里的一对夫妻，剧团最近正在上演《哈姆雷特》。演出间隙，Maria收到了一束鲜花，来自一个年轻的飞行员Stanislav Sobinski（罗伯特·斯塔克 Robert Stack 饰），趁着Joseph在舞台上念著名台词“to be or not to be”的时候，她安排Sobinski进了后台，两人情愫暗生。然而不久后，纳粹侵略波兰，Sobinski只能前往作战。Sobinski所在队伍的领导是Siletsky教授，Sobinski想让Siletsky帮忙带封信给Maria，然而Siletsky却连著名女演员Maria都不认识，于是Sobinski开始对Siletsky产生了怀疑。Sobinski为了追踪Siletsky又回到华沙。而另一方面，Maria却被两个纳粹士兵带去见Siletsky，Siletsky对Maria也是心生爱慕，更希望Maria成为纳粹在波兰的间谍。Maria借故逃回家，却在家中意外的碰到了Sobinski和她的丈夫Josef，这段三角关系该如何收场，他们又要如何联手对抗纳粹？",
    "genres": [
      "Comedy",
      "War"
    ],
    "originalGenres": [
      "喜剧",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 9.2,
    "votes": 17757,
    "runtime": "99 min",
    "releaseDate": "1942-03-06",
    "ratingRank": 22,
    "doubanTop250Rank": null,
    "imdbId": "tt0035446",
    "id": "movie-1303418"
  },
  {
    "sourceId": "20453087",
    "title": "IT狂人特别篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2013,
    "coverUrl": "",
    "summary": "曾卷起一股英式幽默风潮的情景喜剧《IT狂人》，在阔别观众2年多之后再度袭来！距第四季完结至今，观众们始终翘首以盼，尽管导演表示不再制作第五季，但他还是重新启动了剧集，推出了本特别篇，“还给观众一个结尾”。Moss，Roy和Jen，位于公司地下室的IT部门三狂人，这次又会遭遇怎么样的爆笑故事？",
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
    "votes": 17674,
    "runtime": "48 min",
    "releaseDate": "2013-09-27",
    "ratingRank": 23,
    "doubanTop250Rank": null,
    "imdbId": "tt3221116",
    "id": "movie-20453087"
  },
  {
    "sourceId": "1849031",
    "title": "当幸福来敲门",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "克里斯•加纳（威尔·史密斯 Will Smith 饰）用尽全部积蓄买下了高科技治疗仪，到处向医院推销，可是价格高昂，接受的人不多。就算他多努力都无法提供一个良好的生活环境给妻儿，妻子（桑迪·牛顿 Thandie Newton 饰）最终选择离开家。从此他带着儿子克里斯托夫（贾登·史密斯 Jaden Smith 饰）相依为命。克里斯好不容易争取回来一个股票投资公司实习的机会，就算没有报酬，成功机会只有百分之五，他仍努力奋斗，儿子是他的力量。他看尽白眼，与儿子躲在地铁站里的公共厕所里，住在教堂的收容所里…… 他坚信，幸福明天就会来临。",
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
    "rating": 9.1,
    "votes": 889529,
    "runtime": "117 min",
    "releaseDate": "2008-01-17",
    "ratingRank": 24,
    "doubanTop250Rank": null,
    "imdbId": "tt0454921",
    "id": "movie-1849031"
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
    "releaseDate": "1986-01-01",
    "ratingRank": 25,
    "doubanTop250Rank": null,
    "imdbId": "tt0092067",
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
    "ratingRank": 26,
    "doubanTop250Rank": null,
    "imdbId": "tt0120735",
    "id": "movie-1293350"
  },
  {
    "sourceId": "1296736",
    "title": "钢琴家",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2002,
    "coverUrl": "",
    "summary": "史标曼（艾德里安•布洛迪 Adrien Brody 饰）是波兰一家电台的钢琴师。二战即将爆发之时，他们全家被迫被赶进华沙的犹太区。在战争的颠沛流离中，家人和亲戚最终被纳粹杀害，而标曼本人也受尽种种羞辱和折磨，他侥幸得到一位朋友的帮助，暂时有了藏身之处。战争愈加猛烈，朋友不得不抛下 他回老家寻得安全的住所养育儿女。此时史标曼恶病缠身，却还要在搜捕中逃亡。在废墟的阁楼上他遇见了一名德国军官，在军官的要求下他弹奏了钢琴曲。美妙的琴声令德国军官萌发了恻隐之心，他暗暗帮助标曼直到俄军对波兰的解放到来……",
    "genres": [
      "Drama",
      "Music",
      "Biography",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "音乐",
      "传记",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "法国",
      "德国",
      "英国",
      "波兰"
    ],
    "rating": 9.1,
    "votes": 298294,
    "runtime": "150 min",
    "releaseDate": "2002-05-24",
    "ratingRank": 27,
    "doubanTop250Rank": null,
    "imdbId": "tt0253474",
    "id": "movie-1296736"
  },
  {
    "sourceId": "25964630",
    "title": "黑镜：圣诞特别篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2014,
    "coverUrl": "",
    "summary": "圣诞节将至，一间地处偏远的小木屋里，波特（拉菲·斯波 Rafe Spall 饰）和马特（乔恩·哈姆 Jon Hamm 饰）同坐一桌，用红酒和烤土豆庆祝这个银装素裹的节日。波特沉默寡言，无精打采，而马特却恰恰相反，为了逗波特讲话，他向波特讲述了自己的过去。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "惊悚"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 9.1,
    "votes": 85795,
    "runtime": "74 min",
    "releaseDate": "2014-12-16",
    "ratingRank": 28,
    "doubanTop250Rank": null,
    "imdbId": "tt3973198",
    "id": "movie-25964630"
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
    "ratingRank": 29,
    "doubanTop250Rank": null,
    "imdbId": "tt0312841",
    "id": "movie-1299361"
  },
  {
    "sourceId": "1291566",
    "title": "攻壳机动队2：无罪",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "",
    "summary": "草薙素子之后，巴特与侦探出身的陀古萨结为搭档。近期发生多起机器人偶杀害主人继而自杀的事件，由于受害者家属均无公诉，且死者中有政客与公安官员，于是公安9课派出巴特小组调查此案。杀人人偶皆为荒凉地带公司出品的哈德莉机型，应部分顾客要求，该机型同时具备异性玩伴的功能，巴特从荒凉地带公司出货官遇害入手，卷入与黑帮的战斗，期间有人入侵他的大脑，使其自残。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9.1,
    "votes": 44574,
    "runtime": "100 min",
    "releaseDate": "2004-03-06",
    "ratingRank": 30,
    "doubanTop250Rank": null,
    "imdbId": "tt0347246",
    "id": "movie-1291566"
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
    "ratingRank": 31,
    "doubanTop250Rank": null,
    "imdbId": "tt0430594",
    "id": "movie-1769507"
  },
  {
    "sourceId": "1292206",
    "title": "地下",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1995,
    "coverUrl": "",
    "summary": "影片通过三位主人公——知识分子和投机商马高、他的朋友黑仔、他们共同的爱人娜塔莉——传奇般的人生展现了导演对南斯拉夫这个民族的理解与复杂情感。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "南斯拉夫联邦共和国",
      "法国",
      "德国",
      "保加利亚",
      "捷克",
      "匈牙利",
      "英国",
      "美国"
    ],
    "rating": 9.1,
    "votes": 33008,
    "runtime": "170 min",
    "releaseDate": "1995-04-01",
    "ratingRank": 32,
    "doubanTop250Rank": null,
    "imdbId": "tt0114787",
    "id": "movie-1292206"
  },
  {
    "sourceId": "25790749",
    "title": "最完美的离婚 2014特别篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "纷纷扰扰的一年过去，滨崎光生（瑛太 饰）和星野结夏（尾野真千子 饰）这对孽缘鸳鸯终于决定重新走入婚姻殿堂。只不过在孩子的问题上，两人再度发生分歧，结夏愤而离家出走。另一边的上原家，新生命的到来增添了几多温馨。谁知谅（绫野刚 饰）偶然邂逅当初和他一同私奔的潮见薰（臼田麻美 饰），平静的内心再起波澜。全心全意照顾女儿的灯里（真木阳子 饰）敏锐察觉到丈夫的变化，她不禁为这样的爱情和婚姻深感懊恼。结夏打算随同爱慕自己的便当店老板黑部三德去北海道，正和薰谈判的灯里目击这一幕，连忙告知光生。",
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
    "rating": 9.1,
    "votes": 31244,
    "runtime": "120 min",
    "releaseDate": "2014-02-08",
    "ratingRank": 33,
    "doubanTop250Rank": null,
    "imdbId": "tt3400916",
    "id": "movie-25790749"
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
    "ratingRank": 34,
    "doubanTop250Rank": null,
    "imdbId": "tt1636780",
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
    "ratingRank": 35,
    "doubanTop250Rank": null,
    "imdbId": "tt0095800",
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
    "ratingRank": 36,
    "doubanTop250Rank": null,
    "imdbId": "tt0044741",
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
    "ratingRank": 37,
    "doubanTop250Rank": null,
    "imdbId": "tt0334505",
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
    "ratingRank": 38,
    "doubanTop250Rank": null,
    "imdbId": "tt0112757",
    "id": "movie-1301811"
  },
  {
    "sourceId": "26387939",
    "title": "摔跤吧！爸爸",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2016,
    "coverUrl": "",
    "summary": "马哈维亚（阿米尔·汗 Aamir Khan 饰）曾经是一名前途无量的摔跤运动员，在放弃了职业生涯后，他最大的遗憾就是没有能够替国家赢得金牌。马哈维亚将这份希望寄托在了尚未出生的儿子身上，哪知道妻子接连给他生了两个女儿，取名吉塔（法缇玛·萨那·纱卡 Fatima Sana Shaikh 饰）和巴比塔（桑亚·玛荷塔 Sanya Malhotra 饰）。让马哈维亚没有想到的是，两个姑娘展现出了杰出的摔跤天赋，让他幡然醒悟，就算是女孩，也能够昂首挺胸的站在比赛场上，为了国家和她们自己赢得荣誉。",
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
      "印度"
    ],
    "rating": 9,
    "votes": 870905,
    "runtime": "161 min",
    "releaseDate": "2017-05-05",
    "ratingRank": 39,
    "doubanTop250Rank": null,
    "imdbId": "tt5074352",
    "id": "movie-26387939"
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
    "rating": 9,
    "votes": 789525,
    "runtime": "96 min",
    "releaseDate": "2009-08-04",
    "ratingRank": 40,
    "doubanTop250Rank": null,
    "imdbId": "tt1049413",
    "id": "movie-2129039"
  },
  {
    "sourceId": "1299398",
    "title": "大话西游之月光宝盒",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "",
    "summary": "孙悟空（周星驰）护送唐三藏（罗家英）去西天取经路上，与牛魔王合谋欲杀害唐三藏，并偷走了月光宝盒，此举使观音萌生将其铲除心思，经唐三藏请求，孙悟空被判五百年后重新投胎做人赎其罪孽。",
    "genres": [
      "Comedy",
      "Romance",
      "Fantasy",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "奇幻",
      "古装"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 9,
    "votes": 690692,
    "runtime": "87 min",
    "releaseDate": "1995-01-21",
    "ratingRank": 41,
    "doubanTop250Rank": null,
    "imdbId": "tt0112778",
    "id": "movie-1299398"
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
    "rating": 9,
    "votes": 586672,
    "runtime": "118 min",
    "releaseDate": "1953-08-20",
    "ratingRank": 42,
    "doubanTop250Rank": null,
    "imdbId": "tt0046250",
    "id": "movie-1293839"
  },
  {
    "sourceId": "1292000",
    "title": "搏击俱乐部",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "",
    "summary": "杰克（爱德华•诺顿 饰）是一个大汽车公司的职员，患有严重的失眠症，对周围的一切充满危机和憎恨。",
    "genres": [
      "Drama",
      "Action",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 9,
    "votes": 550345,
    "runtime": "139 min",
    "releaseDate": "1999-09-10",
    "ratingRank": 43,
    "doubanTop250Rank": null,
    "imdbId": "tt0137523",
    "id": "movie-1292000"
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
    "rating": 9,
    "votes": 450450,
    "runtime": "89 min",
    "releaseDate": "1995-07-15",
    "ratingRank": 44,
    "doubanTop250Rank": null,
    "imdbId": "tt0110357",
    "id": "movie-1301753"
  },
  {
    "sourceId": "25814705",
    "title": "小森林 夏秋篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "平凡女孩市子（桥本爱 饰）自幼生长在位于日本东北地区的村庄小森。这里远离都市的喧嚣和浮躁，为青山绿水所环绕，俨然一个幽静怡然的世外桃源。村民们日出而作，日落而息，依靠一双勤劳的双手经营渺小却舒适的生活，与世无争。市子曾经前往东京闯荡，只不过她终究无法适应都市快节奏的步伐，最终回到了妈妈早已不在的老宅。童年时妈妈福子利用山川田野各种食材做出胡乱命名的美食，实心眼的市子在感叹受骗之余，也将美好的回忆留在了味蕾深处。仿佛遵循着母亲的步伐，她将对故乡的热爱融入了美食的烹制中。在朋友佑太（三浦贵大 饰）和吉子（松冈茉优 饰）的环绕下，享受着无忧无虑的人生……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9,
    "votes": 231551,
    "runtime": "111 min",
    "releaseDate": "2014-08-30",
    "ratingRank": 45,
    "doubanTop250Rank": null,
    "imdbId": "tt3474600",
    "id": "movie-25814705"
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
    "rating": 9,
    "votes": 216028,
    "runtime": "90 min",
    "releaseDate": "2006-09-02",
    "ratingRank": 46,
    "doubanTop250Rank": null,
    "imdbId": "tt0851578",
    "id": "movie-1865703"
  },
  {
    "sourceId": "25814707",
    "title": "小森林 冬春篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "于无法融入喧嚣吵闹的大城市，平凡女孩市子（桥本爱 饰）选择回到自幼生长的老家——位于日本东北地区的小森村。这里没有过多时尚文明的色彩，当地人过着日出而作日落而息的传统生活，他们靠天吃饭，靠着双手经营人生。生活虽不富裕，心中则是满满的充实和欢喜。受妈妈（桐島かれん 饰） 影响，市子似乎对亲手制作各种美味而廉价的料理有着格外浓厚的兴趣。妈妈失踪已经很久，对料理的回忆与再现成为母女间别具特色的交流方式。更何况还有取自大自然的各种食材，又怎能暴殄天物浪费了大好的韶光？在好友纪子（松冈茉优 饰）和裕太（三浦贵大 饰）的陪伴下，市子静静地走过了春夏秋冬……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9,
    "votes": 200877,
    "runtime": "120 min",
    "releaseDate": "2015-02-14",
    "ratingRank": 47,
    "doubanTop250Rank": null,
    "imdbId": "tt3474602",
    "id": "movie-25814707"
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
    "rating": 9,
    "votes": 133807,
    "runtime": "65 min",
    "releaseDate": "1979-05-19",
    "ratingRank": 48,
    "doubanTop250Rank": null,
    "imdbId": "tt0354770",
    "id": "movie-1307315"
  },
  {
    "sourceId": "5908478",
    "title": "我爱你",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "",
    "summary": "飘雪的坡道上，送牛奶的老头子金万皙（李顺载 饰）邂逅了收废品的老太太宋怡芬（尹秀晶 饰）。他们的前半生各自背负着艰辛的人生：万皙年轻时我行我素，直到妻子病逝才深觉愧疚；怡芬被心爱的男人抛弃在城市角落，孩子夭折后至老未嫁。两位老人在每天凌晨寂静的街道上相遇，孤独而苦难的生活令他们渐渐靠近。在万皙孙女妍儿（宋智孝 饰）的穿针引线下，如初恋般的悸动萌发在了彼此心中。万皙的朋友、停车场管理员张军峰（宋在河 饰）一直耐心的看护着患有老年痴呆症的老伴。直到有一天，军峰得知老伴已患绝症。目睹她一次次痛苦病发，心如刀绞的军峰做出了悲伤的决定……",
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
    "rating": 9,
    "votes": 86188,
    "runtime": "118 min",
    "releaseDate": "2011-02-17",
    "ratingRank": 49,
    "doubanTop250Rank": null,
    "imdbId": "tt1862020",
    "id": "movie-5908478"
  },
  {
    "sourceId": "1291936",
    "title": "攻壳机动队",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "",
    "summary": "公元2029年，未来世界是高科技与信息化的世界。人类生活水平的提高伴随着犯罪活动的高科技化，于是，专门镇压高科技犯罪的特殊部队——公安9课成立了。队长草薙素子，作为一位全身“义体化”的女警，带领公安9课不断展开行动。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9,
    "votes": 82891,
    "runtime": "83 min",
    "releaseDate": "1995-11-18",
    "ratingRank": 50,
    "doubanTop250Rank": null,
    "imdbId": "tt0113568",
    "id": "movie-1291936"
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
    "rating": 9,
    "votes": 40329,
    "runtime": "125 min",
    "releaseDate": "1940-10-15",
    "ratingRank": 51,
    "doubanTop250Rank": null,
    "imdbId": "tt0032553",
    "id": "movie-1295646"
  },
  {
    "sourceId": "25938803",
    "title": "莫娣",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2016,
    "coverUrl": "",
    "summary": "真人真事改编，描述在加拿大美丽的大西洋省份新斯科舍省（Nova Scotia），一位患有关节炎的民间艺术家莫娣·刘易斯(Maud Lewis)，对艺术不懈的追求，与她的丈夫相识，并以艺术、贩卖作品为生的励志生活。",
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
      "爱尔兰",
      "加拿大"
    ],
    "rating": 9,
    "votes": 34454,
    "runtime": "115 min",
    "releaseDate": "2016-09-02",
    "ratingRank": 52,
    "doubanTop250Rank": null,
    "imdbId": "tt3721954",
    "id": "movie-25938803"
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
    "rating": 9,
    "votes": 34230,
    "runtime": "180 min",
    "releaseDate": "1980-04-26",
    "ratingRank": 53,
    "doubanTop250Rank": null,
    "imdbId": "tt0080979",
    "id": "movie-1303067"
  },
  {
    "sourceId": "26266892",
    "title": "红鳉鱼",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "1984年，受立川派落语宗师立川谈志（北野武 饰）的感染，平凡高中生佐佐木信行（二宫和也 饰）决定终止学业，拜入立川名下成为一名落语表演演员。作为落语界的异端，立川特立独行的风格让徒弟们也吃不消。他破天荒向徒弟收取学费，平日里支使他们干着各种杂务，一旦不满意就破口大骂。有的人因吃不消而选择离开，有的则以理念不合拜入其他师父门下。得名谈春的信行为了梦想甚至和父母闹僵，好不容易令师父青眼相看又错失良机，被发配到筑地的鱼市修炼。在此期间，天才师弟（滨田岳 饰）脱颖而出，两位师兄谈谈（北村有起哉 饰）和关西（宫川大辅 饰）也各自经历着内心的煎熬。梦想当前，谈春他们全力奔跑……",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 9,
    "votes": 31565,
    "runtime": "124 min",
    "releaseDate": "2015-12-28",
    "ratingRank": 54,
    "doubanTop250Rank": null,
    "imdbId": "tt4396044",
    "id": "movie-26266892"
  },
  {
    "sourceId": "1298107",
    "title": "大都会",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1927,
    "coverUrl": "",
    "summary": "在未来的大都会里社会分为两个阶层。建立并策划了整个城市赖以运转的庞大机器的是以强·弗莱德森（艾尔弗雷德·埃布尔 Alfred Abel 饰）为首的资本家，他们生活在富丽堂皇的摩天大厦之内；靠劳动以双手建立了机器并日夜维护的则是广大的工人团体，他们群居于黑暗的地下城。有一天，在弗莱德森为子女修建的美丽花园中，他的儿子弗雷德（古斯塔夫·弗勒里希Gustav Fröhlich 饰）对工人之女玛丽娅（布里吉特·赫尔姆Brigitte Helm 饰）一见钟情，追随她进入了地下工厂城，亲历机器事故。被悲惨景象惊呆的弗雷德决定追随玛丽娅；与此同时，对工人传单不解的弗莱德森则求助于过去的科学家对头洛特汪（卢度·格连-罗格 Rudolf Klein-Rogge 饰）。洛特汪建造出一个以玛丽娅面目出现的机器人，试图煽动工人暴乱，彻底摧毁弗莱德森的机器世界……",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "originalGenres": [
      "剧情",
      "科幻"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 9,
    "votes": 21119,
    "runtime": "153 min",
    "releaseDate": "1927-01-10",
    "ratingRank": 55,
    "doubanTop250Rank": null,
    "imdbId": "tt0017136",
    "id": "movie-1298107"
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
    "rating": 9,
    "votes": 20867,
    "runtime": "88 min",
    "releaseDate": "1957-10-25",
    "ratingRank": 56,
    "doubanTop250Rank": null,
    "imdbId": "tt0050825",
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
    "rating": 9,
    "votes": 17368,
    "runtime": "137 min",
    "releaseDate": "1998-05-23",
    "ratingRank": 57,
    "doubanTop250Rank": null,
    "imdbId": "tt0156794",
    "id": "movie-1293455"
  },
  {
    "sourceId": "1291556",
    "title": "乡愁",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1983,
    "coverUrl": "",
    "summary": "俄国诗人安德烈（奥列格·扬科夫斯基 Oleg Yankovsky 饰）在美丽的女翻译尤金伲亚（多美兹亚娜·佐丹奴 Domiziana Giordano 饰）的陪同下，一同前往意大利寻访一位十八世纪俄国作曲家的生活。他们一起走访充满宗教意象的乡村教堂，在一座有天然温泉的古老小镇停留。 此时他遇见了不被世人理解的疯人多米尼克（厄兰·约瑟夫森 Erland Josephson 饰），村民因为他早些年囚禁家人而认为他神经失常。可安德烈看到了多米尼克疯狂下的深意，并被他所吸引。同时他拒绝了性感的尤金伲亚的示爱。此时的安德烈，游走在支离破碎的现实与超现实的梦境中不能自拔。他对祖国的思念、与家人的分离……种种情愫混杂在一起，彼此纠缠，化为终生的乡愁。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "苏联",
      "意大利"
    ],
    "rating": 9,
    "votes": 17201,
    "runtime": "125 min",
    "releaseDate": "1983-05-17",
    "ratingRank": 58,
    "doubanTop250Rank": null,
    "imdbId": "tt0086022",
    "id": "movie-1291556"
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
    "rating": 9,
    "votes": 14780,
    "runtime": "76 min",
    "releaseDate": "1934-01-01",
    "ratingRank": 59,
    "doubanTop250Rank": null,
    "imdbId": "tt0195256",
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
    "rating": 9,
    "votes": 12769,
    "runtime": "67 min",
    "releaseDate": "1926-12-31",
    "ratingRank": 60,
    "doubanTop250Rank": null,
    "imdbId": "tt0017925",
    "id": "movie-1292778"
  },
  {
    "sourceId": "1305487",
    "title": "猫鼠游戏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "弗兰克（莱昂纳多·迪卡普里奥 Leonardo DiCaprio饰）是FBI有史以来年龄最小的通缉犯。他的犯罪手段神通广大，伪装身份的能力超乎常人，全美各地几乎都留下他的犯罪足迹。乔装医生、律师、飞行员，统统都是他曾经的身份。当然，弗兰克凭着这个“本领”，骗取了高达几百万的金额。",
    "genres": [
      "Drama",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 8.9,
    "votes": 416283,
    "runtime": "141 min",
    "releaseDate": "2002-12-16",
    "ratingRank": 61,
    "doubanTop250Rank": null,
    "imdbId": "tt0264464",
    "id": "movie-1305487"
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
    "ratingRank": 62,
    "doubanTop250Rank": null,
    "imdbId": "tt0118845",
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
    "ratingRank": 63,
    "doubanTop250Rank": null,
    "imdbId": "tt0978762",
    "id": "movie-3072124"
  },
  {
    "sourceId": "1297052",
    "title": "侧耳倾听",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "",
    "summary": "正在读初三的月岛滴滴是一个喜欢看书的女孩，她每次都能在借书卡上看到一个叫天泽圣司名字，因此她对这个人充满了好奇。",
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
    "votes": 261878,
    "runtime": "111 min",
    "releaseDate": "1995-07-15",
    "ratingRank": 64,
    "doubanTop250Rank": null,
    "imdbId": "tt0113824",
    "id": "movie-1297052"
  },
  {
    "sourceId": "1291822",
    "title": "卢旺达饭店",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2004,
    "coverUrl": "",
    "summary": "1962年，卢旺达宣布独立后，胡图族与图西族两部族之间矛盾重重，多次发生冲突，战事持续不断。胡图族大肆屠杀图西族人，在这种背景下，卢旺达饭店经理保罗一直四面奔走，最终成功挽救了饭店里一千多名图西族和胡图族难民。",
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
      "英国",
      "南非",
      "意大利",
      "美国"
    ],
    "rating": 8.9,
    "votes": 163781,
    "runtime": "121 min",
    "releaseDate": "2004-12-22",
    "ratingRank": 65,
    "doubanTop250Rank": null,
    "imdbId": "tt0395169",
    "id": "movie-1291822"
  },
  {
    "sourceId": "1306861",
    "title": "我是山姆",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "在星巴克工作的山姆（西恩•潘 Sean Penn 饰），虽已成人，但智力水平只有7岁。一次偶然，他收留了一个流浪女。该女子帮山姆生下了一个女儿后消失得无影无踪。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.9,
    "votes": 161287,
    "runtime": "132 min",
    "releaseDate": "2001-12-03",
    "ratingRank": 66,
    "doubanTop250Rank": null,
    "imdbId": "tt0277027",
    "id": "movie-1306861"
  },
  {
    "sourceId": "27191492",
    "title": "四个春天",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2017,
    "coverUrl": "",
    "summary": "《四个春天》是一部以真实家庭生活为背景的纪录片。15岁离家，在异乡漂泊多年的导演以自己南方小城里的父母为主角，在四年光阴里，以一己之力记录了他们的美丽日常。在如诗的乐活慢生活图景中，影像缓缓雕刻出一个幸福家庭近二十年的温柔变迁，以及他们如何以自己的方式面对流转的时间、人生的得失起落。",
    "genres": [
      "Documentary",
      "Family"
    ],
    "originalGenres": [
      "纪录片",
      "家庭"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.9,
    "votes": 89221,
    "runtime": "105 min",
    "releaseDate": "2019-01-04",
    "ratingRank": 67,
    "doubanTop250Rank": null,
    "imdbId": "tt7124742",
    "id": "movie-27191492"
  },
  {
    "sourceId": "1292925",
    "title": "伴我同行",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1986,
    "coverUrl": "",
    "summary": "这是一部关于成长的电影。著名作家戈迪（理查德•德莱福斯 Richard Dreyfuss 饰）回忆起他12岁时的一次冒险活动：当时，年少的戈迪（威尔•惠顿 Wil Wheaton 饰）与他的三个小伙伴克里斯（瑞凡•菲尼克斯 River Phoenix 饰）、泰迪（科里•费尔德曼 Corey Feldman 饰）和维恩为了当一回“英雄”去河的对岸的森林里寻找一具12岁男孩的尸体。",
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
      "美国"
    ],
    "rating": 8.9,
    "votes": 71012,
    "runtime": "89 min",
    "releaseDate": "1986-08-08",
    "ratingRank": 68,
    "doubanTop250Rank": null,
    "imdbId": "tt0092005",
    "id": "movie-1292925"
  },
  {
    "sourceId": "1293764",
    "title": "与狼共舞",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1990,
    "coverUrl": "",
    "summary": "邓巴中尉（凯文•科斯特纳 Kevin Costner 饰）在南北战争中立了大功，政府为了褒奖他，给了他任意选择驻地的特权。邓巴渴望着一种全新的生活，于是选择了遥远偏僻的西部哨所塞克威克。这里住着大量的印第安苏族人。",
    "genres": [
      "Drama",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.9,
    "votes": 62932,
    "runtime": "181 min",
    "releaseDate": "1990-11-21",
    "ratingRank": 69,
    "doubanTop250Rank": null,
    "imdbId": "tt0099348",
    "id": "movie-1293764"
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
    "ratingRank": 70,
    "doubanTop250Rank": null,
    "imdbId": "tt0040522",
    "id": "movie-1295873"
  },
  {
    "sourceId": "1477916",
    "title": "心理游戏",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "",
    "summary": "一天雨夜，青年漫画家西（今田耕司 配音）在地铁站出来遇见了初恋梦中情人弥（前田沙耶香 配音）。西送弥回家途中得知了弥已订婚，随后，他被弥邀请到酒馆喝酒，弥的未婚夫也来了，西虽然嫉妒弥的未婚夫，但自愧不如。这时，黑社会来到店里，原来弥被黑社会所追杀，打晕了弥的男友并要强奸弥，西则蜷缩一旁不敢动弹。黑社会发现了一旁的西，用枪爆了他的屁眼。前一刻，西还沉醉于与初恋梦中情人相逢时的甜蜜，下一刻就肛门中枪，贯穿脑部，死于非命。当西等人上了天堂，西觉得自己死得很难看，后悔人生过得很窝囊，决心再度复活。他们一行人违反神的意旨，并回到地上的世界，却阴差阳错却来到了鲸鱼的肚子里，接下来又将会有什么等待着他们呢……",
    "genres": [
      "Comedy",
      "Animation",
      "Mystery",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "悬疑",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 22434,
    "runtime": "103 min",
    "releaseDate": "2004-08-07",
    "ratingRank": 71,
    "doubanTop250Rank": null,
    "imdbId": "tt0452039",
    "id": "movie-1477916"
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
    "ratingRank": 72,
    "doubanTop250Rank": null,
    "imdbId": "tt0055630",
    "id": "movie-1292515"
  },
  {
    "sourceId": "2078398",
    "title": "听见天堂",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2006,
    "coverUrl": "",
    "summary": "当上帝为你关上一扇门时，往往他会为你打开另一扇。意大利男孩米克（Luca Capriotti 饰）虽然出身在穷乡僻壤，但他从小就梦想成一流的电影大师，只因他是那么的热爱电影。然而上帝跟他开了一个最残酷的玩笑，米克玩弄一支来复枪时不幸走火，从此他只能淹没在巨大的黑暗当中。 这一度令米克感到沮丧万分，仿佛活着已没有了动力。然而盲校的唐老师的一番话让米克豁然开朗，为什么音乐家在演奏时会闭上眼睛，因为那样音符会蜕变，变的更有力量。于是，米克选择了用耳朵代替眼睛，去记录他生活的点点滴滴。这时，我们才发现：原来，不仅可以看见天堂，还可以听见天堂。",
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
    "votes": 20528,
    "runtime": "96 min",
    "releaseDate": "2006-10-17",
    "ratingRank": 73,
    "doubanTop250Rank": null,
    "imdbId": "tt0450121",
    "id": "movie-2078398"
  },
  {
    "sourceId": "5258017",
    "title": "神探夏洛克(试播集)",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2010,
    "coverUrl": "",
    "summary": "《神探夏洛克》是一部由BBC出品的英国迷你电视剧，该剧将原著的故事背景从19世纪大英帝国国势鼎盛的时期搬到了21世纪繁华热闹的大都市中。",
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
    "rating": 8.9,
    "votes": 20524,
    "runtime": "55 min",
    "releaseDate": "2010-08-30",
    "ratingRank": 74,
    "doubanTop250Rank": null,
    "imdbId": "tt1815240",
    "id": "movie-5258017"
  },
  {
    "sourceId": "3399553",
    "title": "空之境界 第七章 杀人考察（后）",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "",
    "summary": "1999年2月，杀人鬼回来了！",
    "genres": [
      "Drama",
      "Action",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.9,
    "votes": 14883,
    "runtime": "122 min",
    "releaseDate": "2009-08-08",
    "ratingRank": 75,
    "doubanTop250Rank": null,
    "imdbId": "tt1345776",
    "id": "movie-3399553"
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
    "ratingRank": 76,
    "doubanTop250Rank": null,
    "imdbId": "tt0077711",
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
    "ratingRank": 77,
    "doubanTop250Rank": null,
    "imdbId": "tt0032455",
    "id": "movie-1310179"
  },
  {
    "sourceId": "26580232",
    "title": "看不见的客人",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2016,
    "coverUrl": "",
    "summary": "艾德里安（马里奥·卡萨斯 Mario Casas 饰）经营着一间科技公司，事业蒸蒸日上，家中有美丽贤惠的妻子和活泼可爱的女儿，事业家庭双丰收的他是旁人羡慕的对象。然而，野心勃勃的艾德里安并未珍惜眼前来之不易的生活，一直以来，他和一位名叫劳拉（芭芭拉·蓝妮 Bárbara Lennie 饰）的女摄影师保持着肉体关系。",
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
      "西班牙"
    ],
    "rating": 8.8,
    "votes": 650397,
    "runtime": "106 min",
    "releaseDate": "2017-09-15",
    "ratingRank": 78,
    "doubanTop250Rank": null,
    "imdbId": "tt4857264",
    "id": "movie-26580232"
  },
  {
    "sourceId": "1292343",
    "title": "蝴蝶效应",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "伊万（艾什顿·库奇 Ashton Kutcher 饰）曾经有一个糟糕的童年，因为他行为闯下了大祸，令他童年充满不堪回忆的往事。而事实上，他确实只是依稀记得一点可怕的情景，这些情景一直纠缠着他的正常生活。伊万接受心理学家建议，把琐碎生活记在记事本里，却偶然发现通过记事本回到过去。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 8.8,
    "votes": 557714,
    "runtime": "113 min",
    "releaseDate": "2004-01-23",
    "ratingRank": 79,
    "doubanTop250Rank": null,
    "imdbId": "tt0289879",
    "id": "movie-1292343"
  },
  {
    "sourceId": "4917726",
    "title": "阳光姐妹淘",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "",
    "summary": "25年前，高中生任娜美（沈恩京 饰）一家从全罗道搬到汉城，娜美入读真德女子高中，因方言浓重怯于开口的娜美幸运的得到了同班大姐头夏春花（姜索拉 饰）的维护，并与围绕在夏春花周围的执着于双眼皮的金玫瑰、满嘴脏话的黄珍熙、梦想成为作家的徐金玉、要成为韩国小姐的俞福姬以及沉默傲慢的美人郑秀智等五人结识。在一次和不良少女团对决之后，春花和娜美等七人组成了“Sunny”团体……",
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
    "rating": 8.8,
    "votes": 384242,
    "runtime": "124 min",
    "releaseDate": "2011-05-04",
    "ratingRank": 80,
    "doubanTop250Rank": null,
    "imdbId": "tt1937339",
    "id": "movie-4917726"
  },
  {
    "sourceId": "26799731",
    "title": "请以你的名字呼唤我",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2017,
    "coverUrl": "",
    "summary": "故事发生在八十年代的意大利里维埃拉，每年夏天，十七岁的少年艾力奥（提莫西·查拉梅 Timothée Chalamet 饰）都会跟家人一起来此地度假。今年，和他们共享假日时光的，还有来自美国的奥利弗（艾米·汉莫 Armie Hammer 饰），高大英俊热情开朗的奥利弗很快就获得了艾力奥一家人的喜爱。",
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
      "意大利",
      "法国",
      "巴西",
      "美国",
      "荷兰",
      "德国"
    ],
    "rating": 8.8,
    "votes": 336648,
    "runtime": "132 min",
    "releaseDate": "2017-01-22",
    "ratingRank": 81,
    "doubanTop250Rank": null,
    "imdbId": "tt5726616",
    "id": "movie-26799731"
  },
  {
    "sourceId": "1300299",
    "title": "杀人回忆",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2003,
    "coverUrl": "",
    "summary": "1986年，韩国京畿道华城郡，热得发昏的夏天，在田野边发现一具女尸，早已发臭。小镇警察朴探员（宋康昊饰）和汉城来的苏探员（金相庆饰）接手案件，唯一可证实的是这具女尸生前被强奸过。线索的严重缺乏让毫无经验的朴探员和搭档曹探员（金罗河饰）只凭粗暴逼供和第六感推断，几次将犯罪 嫌疑人屈打成招。而苏探员客观冷静，据理分析，几次排除嫌疑，警察内部为了证明与推翻矛盾不断，然而无辜女子还是接二连三被残忍杀害，他们只好达成共识一起合作。此时，一个极其符合作案特征的小青年（朴海日饰）成为最大嫌疑人，警方神经绷紧地锁定住他，同时DNA检测报告也被送往美国，然而案件并未在此处停止。",
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
      "韩国"
    ],
    "rating": 8.8,
    "votes": 327905,
    "runtime": "131 min",
    "releaseDate": "2003-05-02",
    "ratingRank": 82,
    "doubanTop250Rank": null,
    "imdbId": "tt0353969",
    "id": "movie-1300299"
  },
  {
    "sourceId": "1305164",
    "title": "甜蜜蜜",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "",
    "summary": "改革开放初期，黎小军（黎明 饰）告别女友小婷（杨恭如 饰）从天津（国语版中为无锡）来到香港讨生活，期望有天挣到大钱把小婷接来与之风风光光地成婚，没料想日子会比想象中的难熬许多。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.8,
    "votes": 311400,
    "runtime": "118 min",
    "releaseDate": "1996-11-02",
    "ratingRank": 83,
    "doubanTop250Rank": null,
    "imdbId": "tt0117905",
    "id": "movie-1305164"
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
    "ratingRank": 84,
    "doubanTop250Rank": null,
    "imdbId": "tt0199683",
    "id": "movie-1293359"
  },
  {
    "sourceId": "5989818",
    "title": "萤火之森",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "某年夏天，6岁小女孩竹川萤来到爷爷家度假，她闯进了传说住满妖怪的山神森林。正当她因为迷路而焦急万分的时候，一个戴着狐狸面具的大男孩出现在她面前，并引领着萤找到回家的路。虽然萤分外感激，可是男孩却禁止她碰触自己的身体，原来这名叫银的男孩并非人类，他一旦被人类碰触就会烟消云散。在此后的日子里，萤和银成为好朋友，他们走遍了森林的每一个角落玩耍。日复一日，年复一年，每到夏天的时候萤就会如约来到森林和好朋友见面。她遵守着和银的约定，无论如何也不碰触银的身体。随着年龄的增长，萤和银对彼此的情感都悄悄发生了变化，他们共同期待相聚的日子，共同期待拥抱对方……",
    "genres": [
      "Drama",
      "Romance",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.8,
    "votes": 268717,
    "runtime": "45 min",
    "releaseDate": "2011-09-17",
    "ratingRank": 85,
    "doubanTop250Rank": null,
    "imdbId": "tt2061702",
    "id": "movie-5989818"
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
    "ratingRank": 86,
    "doubanTop250Rank": null,
    "imdbId": "tt0440963",
    "id": "movie-1578507"
  },
  {
    "sourceId": "1291585",
    "title": "风之谷",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1984,
    "coverUrl": "",
    "summary": "工业文明的高度发展，却最终带来灾难，一场为期7天的虫族毁灭战争摧毁了人类文明。一千年后，工业文明遗留下来的症结仍在困扰这个星球。带有强烈毒性的植物组成了令人望而却步的“腐海”森林，随着时间的推移，腐海有条不紊地向四周蔓延，蚕食周边世界。在一片腐海森林的旁边，居住着一群御风而行的人类。女主角娜乌茜卡和族人依靠海风的力量抵御着有毒孢子的侵蚀，过着平静祥和的生活。",
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
    "rating": 8.8,
    "votes": 248775,
    "runtime": "117 min",
    "releaseDate": "1984-01-01",
    "ratingRank": 87,
    "doubanTop250Rank": null,
    "imdbId": "tt0087544",
    "id": "movie-1291585"
  },
  {
    "sourceId": "25724855",
    "title": "房间",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2015,
    "coverUrl": "",
    "summary": "女孩乔伊（布丽·拉尔森 Brie Larson 饰）被一个叫“老尼克”的男人拐骗，之后被他囚禁在其房子后院的棚屋里长达七年之久。在此期间她遭到强奸，并生下儿子杰克（雅各布·特伦布莱 Jacob Tremblay 饰）。靠着老尼克时不时的物资补给，母子二人艰难度日。尽管如此，母亲还是竭尽所能，为儿子杰克创造了一个安全而开心的成长空间。这个狭小逼仄的房间，成了杰克生活成长的神奇小天地。在杰克度过了他的五岁生日后，母亲决定告诉他真相，在这个小小的房间外面，有着更广阔的世界。他们开始策划逃跑计划，决心要逃出这个囚禁他们的房间……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "爱尔兰",
      "加拿大",
      "英国",
      "美国"
    ],
    "rating": 8.8,
    "votes": 233408,
    "runtime": "118 min",
    "releaseDate": "2015-09-04",
    "ratingRank": 88,
    "doubanTop250Rank": null,
    "imdbId": "tt3170832",
    "id": "movie-25724855"
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
    "ratingRank": 89,
    "doubanTop250Rank": null,
    "imdbId": "tt1734113",
    "id": "movie-4848115"
  },
  {
    "sourceId": "1294240",
    "title": "教父3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1990,
    "coverUrl": "",
    "summary": "转眼间已经是1979年，第二代教父麦克•柯里昂（阿尔•帕西诺 饰）到了垂暮之年，为了灵魂的救赎，麦克慢慢结束家族的黑道事业，转投正当生意。",
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
    "rating": 8.8,
    "votes": 195546,
    "runtime": "170 min",
    "releaseDate": "1990-12-25",
    "ratingRank": 90,
    "doubanTop250Rank": null,
    "imdbId": "tt0099674",
    "id": "movie-1294240"
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
    "ratingRank": 91,
    "doubanTop250Rank": null,
    "imdbId": "tt0042876",
    "id": "movie-1291879"
  },
  {
    "sourceId": "25954475",
    "title": "聚焦",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "“聚焦”是波士顿环球报的一个专栏，罗比·罗宾森（迈克尔·基顿饰）是\"聚焦\"栏目的编辑，栏目拥有一个独立的调查小组，组员包括萨夏·菲弗（瑞秋·麦克亚当斯饰），迈克尔（马克·鲁弗洛饰），马特·卡罗尔（布莱恩·达西·詹姆斯饰）。当马蒂·巴伦（列维·施瑞博尔饰）接替了环球报的总编辑一职，他开始指派罗宾森和他的团队，紧跟一桩被雪藏已久的案件，一个天主教牧师性骚扰教区里的孩子。虽然最开始他们以为这只是个小任务，但很快他们就发现，其背后还隐藏一系列事件，涉及了上百名受害者，而教会已经私下赔偿了受害者，并派人掩盖了这些罪行。随着调查的越发深入，他们发现这一阴谋的更多证据，不仅仅是神职人员，就在波士顿以外，甚至全世界，都在上演着这种暴行。罗宾森和他的团队遭遇到了当地官员们的掣肘。教会内的，教会外的势力都在向他们施压，想让他们放弃这个案件。",
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
    "votes": 175002,
    "runtime": "128 min",
    "releaseDate": "2015-09-03",
    "ratingRank": 92,
    "doubanTop250Rank": null,
    "imdbId": "tt1895587",
    "id": "movie-25954475"
  },
  {
    "sourceId": "1292329",
    "title": "牯岭街少年杀人事件",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "",
    "summary": "结识小明（杨静怡）前，小四（张震）是典型的乖仔，是父母的希望和兄妹的骄傲（一家人指望他考上名牌大学将来提升全家的社会地位），他有一个喜欢摇滚乐的自称“小猫王（王启赞）”的好友，两人虽会去树林看人幽会，但过的是与周围诸多在“小公园”混的少年人完全两样的生活。",
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
    "votes": 151990,
    "runtime": "237 min",
    "releaseDate": "1991-07-27",
    "ratingRank": 93,
    "doubanTop250Rank": null,
    "imdbId": "tt0101985",
    "id": "movie-1292329"
  },
  {
    "sourceId": "2222996",
    "title": "步履不停",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "",
    "summary": "“人生路上步履不停，为何总是慢一拍”。",
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
    "votes": 142823,
    "runtime": "115 min",
    "releaseDate": "2008-06-28",
    "ratingRank": 94,
    "doubanTop250Rank": null,
    "imdbId": "tt1087578",
    "id": "movie-2222996"
  },
  {
    "sourceId": "11584019",
    "title": "海洋之歌",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2014,
    "coverUrl": "",
    "summary": "在一个风景如画的海中小岛，小男孩本（大卫·罗尔 David Rawle 配音）和怀有身孕的母亲布罗娜（丽莎·汉尼根 Lisa Hannigan 配音）渡过了最后一个快乐而难忘的夜晚。不久后，妹妹西尔莎（露西·奥康奈尔 Lucy O'Connell 配音）出生，而因母亲却撒手人寰。转眼过了六年，他们的父亲康纳（布莱丹·格里森 Brendan Gleeson 配音）始终未从丧妻之痛中走出，而充满幻想的西尔莎偶然发现妈妈留下的贝笛，结果险些溺毙大海，最终导致奶奶强制性地将两个孩子带离这座小岛。兄妹俩无法适应城市的生活，他们在街道游走的时候，意外遭遇了三个奇怪的小精灵。他们希望借助“海豹女”西尔莎的歌声回到故乡，神奇的冒险就此展开……",
    "genres": [
      "Drama",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "爱尔兰",
      "丹麦",
      "比利时",
      "卢森堡",
      "法国"
    ],
    "rating": 8.8,
    "votes": 112771,
    "runtime": "93 min",
    "releaseDate": "2016-08-12",
    "ratingRank": 95,
    "doubanTop250Rank": null,
    "imdbId": "tt1865505",
    "id": "movie-11584019"
  },
  {
    "sourceId": "3824274",
    "title": "刺猬的优雅",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2009,
    "coverUrl": "",
    "summary": "国会议员一家四口住在巴黎左岸的高级公寓里。议员的小女儿芭洛玛（Garance Le Guillermic 饰）古灵精怪，喜欢透过摄影机洞察世界，是名不满12岁的天才小哲学家。不愿成为鱼缸中命运已被注定的金鱼，芭洛玛策划着一场生日当天的自杀。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 8.8,
    "votes": 80730,
    "runtime": "100 min",
    "releaseDate": "2009-07-03",
    "ratingRank": 96,
    "doubanTop250Rank": null,
    "imdbId": "tt1442519",
    "id": "movie-3824274"
  },
  {
    "sourceId": "27000061",
    "title": "我能说",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2017,
    "coverUrl": "",
    "summary": "热血老奶奶罗玉粉（罗文姬饰）性格耿直，爱打抱不平，多年来专注于举报社区里发生的不法行为的，被周围的人叫做“鬼怪奶奶”。她的“对手”是信访办新来的基层公务员朴民载（李帝勋饰）。二人吵吵闹闹未分胜负。某天，罗奶奶忽然“死皮赖脸”要求朴民载成为自己的英语老师。因为她有一个弟弟生长在美国，一句韩语也不懂，罗奶奶只有学会了英语，才能跟他交流。在学习过程中，朴民载与罗奶奶的感情变得越来越融洽。但是，民载得知罗奶奶的弟弟其实根本不想和她通话。在一次冲突中，他不小心对奶奶说出了实情。然而，这时候，罗奶奶有了更迫切的学习英语的理由，她要到美国，向全世界讲述自己做慰安妇的经历，迫使日本政府为践踏人伦的行为道歉。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.8,
    "votes": 53039,
    "runtime": "119 min",
    "releaseDate": "2017-09-21",
    "ratingRank": 97,
    "doubanTop250Rank": null,
    "imdbId": "tt7342204",
    "id": "movie-27000061"
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
    "ratingRank": 98,
    "doubanTop250Rank": null,
    "imdbId": "tt0057012",
    "id": "movie-1322848"
  },
  {
    "sourceId": "1294194",
    "title": "悲情城市",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1989,
    "coverUrl": "",
    "summary": "普通人的命运在轰轰烈烈的时代面前总是渺小到可以忽略不计。个人，如果勇敢地站出来想阻止时代洪流，多少像奋力扑向风车的唐吉坷德，往往只能当殉道者，而更多时候，个人甚至连选择当旁观者的权利也没有。可是普通人的悲剧，无疑能照出历史的荒谬与残忍。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾",
      "中国香港"
    ],
    "rating": 8.8,
    "votes": 48282,
    "runtime": "157 min",
    "releaseDate": "1989-10-21",
    "ratingRank": 99,
    "doubanTop250Rank": null,
    "imdbId": "tt0096908",
    "id": "movie-1294194"
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
    "ratingRank": 100,
    "doubanTop250Rank": null,
    "imdbId": "tt0089881",
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
    "ratingRank": 101,
    "doubanTop250Rank": null,
    "imdbId": "tt0093512",
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
    "releaseDate": "1983-01-01",
    "ratingRank": 102,
    "doubanTop250Rank": null,
    "imdbId": "tt0085326",
    "id": "movie-1300894"
  },
  {
    "sourceId": "1417728",
    "title": "我的邻居山田君",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "",
    "summary": "住在山野市的山田家共有五口人：一家之主山田隆年届不惑，是一间小公司杂物课的职员。他有些大男子主义，经常为了些琐事和老婆吵吵闹闹，却又被丈母娘压得抬不起头来；阿隆的妻子松子和丈夫同岁，是个全职的家庭主妇，每天忙忙碌碌，照顾一大家子人的饮食起居，却又迷迷糊糊，经常丢三落四；松子的母亲年近古稀，然而精神矍铄，这位老人家一向特立独行，讲话毒辣，连暴走组也全不畏惧；长子阿升是个长相和学习都平平的中学生，他继承了母亲迷糊的性格，生活中乐事不断；小女儿野野子还是个小学三年级学生，瘦瘦小小的她碰上一群脑瓜秀逗的家人，经常成为被遗忘的对象。",
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
      "日本"
    ],
    "rating": 8.8,
    "votes": 41810,
    "runtime": "104 min",
    "releaseDate": "1999-07-17",
    "ratingRank": 103,
    "doubanTop250Rank": null,
    "imdbId": "tt0206013",
    "id": "movie-1417728"
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
    "ratingRank": 104,
    "doubanTop250Rank": null,
    "imdbId": "tt1650453",
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
    "ratingRank": 105,
    "doubanTop250Rank": null,
    "imdbId": "tt0328832",
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
    "ratingRank": 106,
    "doubanTop250Rank": null,
    "imdbId": "tt1337673",
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
    "ratingRank": 107,
    "doubanTop250Rank": null,
    "imdbId": "tt0108002",
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
    "ratingRank": 108,
    "doubanTop250Rank": null,
    "imdbId": "tt0053291",
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
    "ratingRank": 109,
    "doubanTop250Rank": null,
    "imdbId": "tt0091355",
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
    "ratingRank": 110,
    "doubanTop250Rank": null,
    "imdbId": "tt1455151",
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
    "ratingRank": 111,
    "doubanTop250Rank": null,
    "imdbId": "tt0102138",
    "id": "movie-1292230"
  },
  {
    "sourceId": "11443810",
    "title": "蝙蝠侠：黑暗骑士归来(下)",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "曾经罪恶横行的高谭市，自布鲁斯·韦恩（彼得·威勒 Peter Weller 配音）决定以蝙蝠侠的身份归来后，仿佛终于发生了新的变化。变种人头目双面人被除掉，然而原变种人团伙摇身变成蝙蝠狂热者，以暴力的方式执行着对善恶之行的裁断。因此，蝙蝠侠的法外行为引起广泛争论，甚至惊动白宫，而高谭的新任探长对其存在颇有微词。正值美苏交恶的危机时刻，超人（马克·瓦雷 Mark Valley 配音）卷入战火，蝙蝠侠和这位昔日的战友因理念不同分道扬镳。在此期间，小丑（迈克尔·爱默生 Michael Emerson 配音）高调复出，受邀参加某电视节目访问，实则暗藏新的阴谋。",
    "genres": [
      "Action",
      "Animation"
    ],
    "originalGenres": [
      "动作",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.8,
    "votes": 20677,
    "runtime": "76 min",
    "releaseDate": "2013-01-29",
    "ratingRank": 112,
    "doubanTop250Rank": null,
    "imdbId": "tt2166834",
    "id": "movie-11443810"
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
    "ratingRank": 113,
    "doubanTop250Rank": null,
    "imdbId": "tt0109685",
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
    "releaseDate": "1996-01-01",
    "ratingRank": 114,
    "doubanTop250Rank": null,
    "imdbId": "tt0115669",
    "id": "movie-1293237"
  },
  {
    "sourceId": "25804790",
    "title": "神探夏洛克：最后的誓言",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2014,
    "coverUrl": "",
    "summary": "本集因以电视电影形式报艾美奖评选而被单独列出，改编自原著《米尔沃顿》。华生受朋友请求来到一个年轻人吸毒聚集地，没想到在这里居然遇到夏洛克。华生把夏洛克带回贝克街，惊讶的发现夏洛克有了女友，这位女友正是自己婚礼上的伴娘洁琳。但随后华生发现，夏洛克之所以和自己的伴娘约会是因为在查的案件。夏洛克假装要求婚，混进了讹诈专家马格努森的办 公室，华生也和夏洛克一起，然而就在夏洛克发现马格努森被人威胁的时候，威胁者转过头，这个人竟然是华生的新婚妻子玛丽……",
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
    "rating": 8.8,
    "votes": 18577,
    "runtime": "90 min",
    "releaseDate": "2014-01-12",
    "ratingRank": 115,
    "doubanTop250Rank": null,
    "imdbId": "tt2781046",
    "id": "movie-25804790"
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
    "ratingRank": 116,
    "doubanTop250Rank": null,
    "imdbId": "tt0110877",
    "id": "movie-1298468"
  },
  {
    "sourceId": "25741398",
    "title": "男孩与世界",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2013,
    "coverUrl": "",
    "summary": "荣获动画界最高荣誉——法国安锡动画影展首奖。童真如何面对成长的苦涩与世界的现实？宛如巴西版的囧男孩，一家务农生活穷苦却过得快乐。然而为求谋生，父亲只得离乡出外谋生。小男孩不忍母亲伤心，踏上寻父的大冒险旅程。沿途光怪陆离的人事，城乡风景，媒体，贪婪嘴脸的美国老板与压榨扁瘦得劳动者，美丽又悲伤的世界景象。",
    "genres": [
      "Drama",
      "Animation"
    ],
    "originalGenres": [
      "剧情",
      "动画"
    ],
    "originalRegions": [
      "巴西"
    ],
    "rating": 8.8,
    "votes": 11095,
    "runtime": "80 min",
    "releaseDate": "2013-09-20",
    "ratingRank": 117,
    "doubanTop250Rank": null,
    "imdbId": "tt3183630",
    "id": "movie-25741398"
  },
  {
    "sourceId": "4920389",
    "title": "头号玩家",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2018,
    "coverUrl": "",
    "summary": "故事发生在2045年，虚拟现实技术已经渗透到了人类生活的每一个角落。詹姆斯哈利迪（马克·里朗斯 Mark Rylance 饰）一手建造了名为“绿洲”的虚拟现实游戏世界，临终前，他宣布自己在游戏中设置了一个彩蛋，找到这枚彩蛋的人即可成为绿洲的继承人。要找到这枚彩蛋，必须先获得三把钥匙，而寻找钥匙的线索就隐藏在詹姆斯的过往之中。",
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
    "rating": 8.7,
    "votes": 841114,
    "runtime": "140 min",
    "releaseDate": "2018-03-30",
    "ratingRank": 118,
    "doubanTop250Rank": null,
    "imdbId": "tt1677720",
    "id": "movie-4920389"
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
    "ratingRank": 119,
    "doubanTop250Rank": null,
    "imdbId": "tt0325980",
    "id": "movie-1298070"
  },
  {
    "sourceId": "26325320",
    "title": "血战钢锯岭",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "1945年，第二次世界大战接近尾声，作为邪恶轴心重要成员的日本，其嚣张态势已成强弩之末。是年，决定战局走向的冲绳岛战役拉开序幕，成千上万斗志昂扬的美国大兵被派往冲绳，等待他们的则是敌军重兵防守、凶险异常的钢锯岭。在这群人中间，却有一个不愿拿起武器的军医。他名叫戴斯蒙德·道斯（安德鲁·加菲尔德 Andrew Garfield 饰），来自美国的弗吉尼亚。太平洋爆发之际，瘦弱的戴斯蒙德志愿成为救死扶伤的军医而应征入伍。可因童年和家庭的原因，他始终不愿拿起枪支操练，为此宁愿背上拒服兵役的罪名被送上军事法庭。几经周折，戴斯蒙德最终和战友来到了钢锯岭。枪林弹雨，转瞬之间无数人应声倒地。在信仰和信念的支持下，戴斯蒙德仅凭一己之力拯救了数十条濒死的生命……",
    "genres": [
      "Drama",
      "Biography",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国",
      "澳大利亚"
    ],
    "rating": 8.7,
    "votes": 481354,
    "runtime": "139 min",
    "releaseDate": "2016-12-08",
    "ratingRank": 120,
    "doubanTop250Rank": null,
    "imdbId": "tt2119532",
    "id": "movie-26325320"
  },
  {
    "sourceId": "2353023",
    "title": "驯龙高手",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "维京岛国的少年小嗝嗝（杰伊•巴鲁切尔 Jay Baruchel 配音）是部落统领伟大的斯托里克（杰拉德·巴特勒 Gerard Butler 配音）的儿子，他非常想像自己的父亲一样亲手屠龙——这些飞龙是岛上维京人放牧羊群的主要天敌——但他每次出现在部落屠龙的战斗中都只给大家徒增烦恼。在一次对抗飞龙的战斗中，希卡普偷偷用射龙器击伤了一只最神秘的“夜之怒龙”，并背着族人放生、豢养，甚至驯服了这只龙，还给它起名“无牙”。希卡普的神秘行径引起了一同训练屠龙技巧的女孩阿斯特丽德（亚美莉卡·费雷拉 America Ferrera 配音）的怀疑。阿斯特丽德发现了希卡普的秘密，却同时被身骑“无牙”御风而飞的美妙体验所震撼。格雷决定在屠龙成人礼上向远征归来的斯托里克和族人讲明真相，说服大家放弃屠龙，却偏偏弄巧成拙，害得“无牙”被俘，一场更大的灾难就在眼前……",
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
      "美国"
    ],
    "rating": 8.7,
    "votes": 446545,
    "runtime": "98 min",
    "releaseDate": "2010-05-14",
    "ratingRank": 121,
    "doubanTop250Rank": null,
    "imdbId": "tt0892769",
    "id": "movie-2353023"
  },
  {
    "sourceId": "1297447",
    "title": "倩女幽魂",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "",
    "summary": "书生宁采臣（张国荣饰）收账不成，无处可归，遂夜宿鬼寺兰若寺，遇上侠士燕赤霞（午马饰），二人成为邻居。一日偶遇艳女小倩（王祖贤饰），二人两情相悦，但小倩乃是被树妖姥姥控制的鬼魂，专门迷惑精壮男子代姥姥吸取阳气。小倩见宁采臣心地善良不忍加害，并与他感情逐渐加深。宁采臣欲救小倩脱离姥姥魔掌，但苦于姥姥功力深厚，小倩无法脱离其魔掌。二人遂向燕赤霞求救......",
    "genres": [
      "Romance",
      "Fantasy",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "爱情",
      "奇幻",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.7,
    "votes": 407862,
    "runtime": "98 min",
    "releaseDate": "1987-07-18",
    "ratingRank": 122,
    "doubanTop250Rank": null,
    "imdbId": "tt0093978",
    "id": "movie-1297447"
  },
  {
    "sourceId": "1316510",
    "title": "射雕英雄传之东成西就",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "金轮国王妃（叶玉卿 饰）与表哥欧阳锋（梁朝伟 饰）有染，为霸占江山，他们毒死了国王，但没找到传国玉玺。得知玉玺在前往九宫山找寻其师父求助的三公主（林青霞 饰）手里后，欧阳锋企图抢到手但没成功。糊涂国师（张曼玉 饰）在淫威下屈服，查出三公主的具体下落，欧阳锋乘火箭金靴追赶 ，却误脱落一只插死刚出关的王重阳（钟镇涛 饰），奄奄一息的王重阳恳求适逢路过的三公主找到其师弟周伯通（刘嘉玲 饰）代为报仇。逃到九宫山的三公主邀得师弟黄药师（张国荣 饰）与师妹（王祖贤 饰）相助，再加上前来寻找表妹的洪七（张学友 饰）、找到真心人才能成仙的段智兴（梁家辉 饰），一场与欧阳锋的生死恶战蓄势待发……",
    "genres": [
      "Comedy",
      "Fantasy",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "奇幻",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.7,
    "votes": 390538,
    "runtime": "113 min",
    "releaseDate": "1993-02-05",
    "ratingRank": 123,
    "doubanTop250Rank": null,
    "imdbId": "tt0108074",
    "id": "movie-1316510"
  },
  {
    "sourceId": "1291579",
    "title": "怪兽电力公司",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "我们不知道，在那样的世界里住着那样一群怪物。他们长相滑稽，却必须装作狰狞。因为，在夜深的时候，他们要悄悄的出现在孩子的衣橱里，吓唬刚刚甜美睡去的宝宝。一切，只因为他们是怪物电力公司的员工，而孩子的尖叫，则是怪物王国发电的全部能量。怪物们害怕孩子，却又必须让孩子尖叫。在怪物的国度里，他们都是为全民造福的英雄。",
    "genres": [
      "Comedy",
      "Animation",
      "Children",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "儿童",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 370595,
    "runtime": "92 min",
    "releaseDate": "2001-11-02",
    "ratingRank": 124,
    "doubanTop250Rank": null,
    "imdbId": "tt0198781",
    "id": "movie-1291579"
  },
  {
    "sourceId": "6307447",
    "title": "被解救的姜戈",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "1858年，美国南北战争前两年。德国赏金猎人金·舒尔茨（克里斯托弗·瓦尔兹 Christoph Waltz饰）从贩奴商人手中买下黑奴姜戈（杰米·福克斯 Jamie Foxx饰），让其重获自由。舒尔茨实则是要把姜戈培养成无法无天的赏金猎人，为其缉拿各种通缉犯以换取报酬。姜 戈的唯一条件是：从暴虐的糖果庄园主卡尔文·坎迪（莱昂纳多·迪卡普里奥 Leonardo DiCaprio饰）手中解救出自己的妻子布鲁姆希尔达（凯丽·华盛顿 Kerry Washington饰）。本片是昆汀向1966年由塞吉奥·考布西执导的经典意大利西部片《迪亚戈》的致敬之作。",
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
    "rating": 8.7,
    "votes": 364010,
    "runtime": "163 min",
    "releaseDate": "2013-05-12",
    "ratingRank": 125,
    "doubanTop250Rank": null,
    "imdbId": "tt1853728",
    "id": "movie-6307447"
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
    "ratingRank": 126,
    "doubanTop250Rank": null,
    "imdbId": "tt0387564",
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
    "ratingRank": 127,
    "doubanTop250Rank": null,
    "imdbId": "tt0095327",
    "id": "movie-1293318"
  },
  {
    "sourceId": "1291870",
    "title": "雨人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "",
    "summary": "查理（汤姆·克鲁斯 Tom Cruise 饰）父亲去世，留下了300万美元的遗产。然而令他意外的是，遗产全部给了一个他不认识的哥哥雷蒙（达斯汀·霍夫曼 Dustin Hoffman 饰）。雷蒙的名字查理从没听过，这个事件让他气愤不已。他决定前去寻找哥哥。谁知雷蒙的住处就在一个精神病院里，原来他自幼患有自闭症，母亲去世后就被送到精神病院治疗。查理心中有了算计，他把雷蒙带出精神病院，企图骗他出让遗产。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 270648,
    "runtime": "133 min",
    "releaseDate": "1988-12-16",
    "ratingRank": 128,
    "doubanTop250Rank": null,
    "imdbId": "tt0095953",
    "id": "movie-1291870"
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
    "ratingRank": 129,
    "doubanTop250Rank": null,
    "imdbId": "tt0790636",
    "id": "movie-1793929"
  },
  {
    "sourceId": "25895901",
    "title": "海街日记",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "临海古都镰仓，顺山而成的小镇，不起眼的角落里生活着香田家四姐妹。她们的父亲早年和情人离家出走，母亲则干脆将女儿们抛给了外婆照顾。外婆去世后，外孙女们继承了这栋有着悠久历史的大房子。过早担负起家庭重任的大姐香田幸（绫濑遥 饰），尽心尽力照顾着两个妹妹佳乃（长泽雅美 饰）、千佳（夏帆 饰）健康成长。这一天，父亲去世的消息传到姐妹手中。她们结伴而行参加了父亲的葬礼，并且结识了从未谋面的异母妹妹浅野铃（广濑丝丝 饰）。许是血缘中的亲近之感，幸在临行前邀请铃搬来镰仓同住。未过多久，抱着对姐姐们的憧憬，铃迈入了父亲曾经生活过的房子。四季流转，姐妹们的故事悄然上演……",
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
    "rating": 8.7,
    "votes": 219180,
    "runtime": "127 min",
    "releaseDate": "2015-05-14",
    "ratingRank": 130,
    "doubanTop250Rank": null,
    "imdbId": "tt3756788",
    "id": "movie-25895901"
  },
  {
    "sourceId": "27059130",
    "title": "大佛普拉斯",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2017,
    "coverUrl": "",
    "summary": "菜埔（庄益增 饰）是一家雕塑厂的夜间保安，家中有一位重病的老母亲需要照顾。肚财（陈竹昇 饰）是菜埔唯一的朋友，菜埔经常在值夜班的时候把肚财叫过来和他作伴。一天，两人突发奇想决定看一看菜埔的老板黄启文（戴立忍 饰）的行车记录仪里记录了哪些影像，希望向来风流的老板能够贡献出一些精彩的片段以解两个独身男人内心里的寂寞之苦。",
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
      "中国台湾"
    ],
    "rating": 8.7,
    "votes": 190755,
    "runtime": "102 min",
    "releaseDate": "2017-10-13",
    "ratingRank": 131,
    "doubanTop250Rank": null,
    "imdbId": "tt7010412",
    "id": "movie-27059130"
  },
  {
    "sourceId": "10437779",
    "title": "新世界",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2013,
    "coverUrl": "",
    "summary": "金门集团会长、暴力组织在虎派大佬石东出遭遇车祸身亡，该事件在黑白两道引起不小震荡。为了遏制金门集团进一步向合法领域渗透并持续壮大，警方及时提出“新世界计划”，旨在干预金门集团继任大佬的选举。而围绕会长头衔，金门旗下三号人物华侨出身的丁青（黄正民 饰）和四号人物常务理事李仲久（朴圣雄 饰）展开一连串明争暗斗。在危机四伏的当下，警方姜科长（崔岷植 饰）命令卧底十年之久的李子成（李政宰 饰）左右选举结果。子成六年前和丁青结识，并且得到对方的器重和信任。早已厌倦黑道生活的子成无奈受命，却无疑将自己投入了凶险非常的黑色漩涡之中。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.7,
    "votes": 155698,
    "runtime": "134 min",
    "releaseDate": "2013-02-21",
    "ratingRank": 132,
    "doubanTop250Rank": null,
    "imdbId": "tt2625030",
    "id": "movie-10437779"
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
    "ratingRank": 133,
    "doubanTop250Rank": null,
    "imdbId": "tt0062622",
    "id": "movie-1292226"
  },
  {
    "sourceId": "1291992",
    "title": "末路狂花",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1991,
    "coverUrl": "",
    "summary": "该片被认为是向男权社会发出抗争的女性主义电影代表作。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.7,
    "votes": 139773,
    "runtime": "130 min",
    "releaseDate": "1991-05-24",
    "ratingRank": 134,
    "doubanTop250Rank": null,
    "imdbId": "tt0103074",
    "id": "movie-1291992"
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
    "ratingRank": 135,
    "doubanTop250Rank": null,
    "imdbId": "tt0220644",
    "id": "movie-1300741"
  },
  {
    "sourceId": "3993559",
    "title": "赛德克·巴莱",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "此条目为国内上映合集条目，上下集条目分别为：",
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
      "中国台湾"
    ],
    "rating": 8.7,
    "votes": 117861,
    "runtime": "153 min",
    "releaseDate": "2012-05-10",
    "ratingRank": 136,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-3993559"
  },
  {
    "sourceId": "5960606",
    "title": "再见我们的幼儿园",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "好朋友洋武因病退学，无法参加毕园典礼。与他同在朝阳幼儿园紫罗兰组的康娜（芦田爱菜 饰）、拓实（佐藤瑠生亮 饰）、美琴（本田望结 饰）、俊佑（黑田博之 饰）、优衣（庵原凉香 饰）偷偷溜出幼儿园，从新宿搭上了开往高尾的中央线列车，去寻找他们的好朋友。他们在换乘站不慎和优衣失散，还遭遇了会把人变成玉米的流浪汉大叔（岸部一德 饰）。总之，漫漫的旅途中充满了快乐与艰险，他们纯真的友情也经受着考验。",
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
    "votes": 101162,
    "runtime": "105 min",
    "releaseDate": "2011-03-30",
    "ratingRank": 137,
    "doubanTop250Rank": null,
    "imdbId": "tt1831754",
    "id": "movie-5960606"
  },
  {
    "sourceId": "26694988",
    "title": "比海更深",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "邋遢潦倒的中年大叔筱田良多（阿部宽 饰）是一名私家侦探，早年间他作为作家出道，然而自从处女作之后就再也没有令人称道的作品问世。他满腹牢骚，自视清高，绝不愿为了钱去创作没有“灵魂”的作品。现实生活中处处为钱发愁，拿到钱后又转瞬扔进赌场，全然没有指望。母亲淑子（树木希林 饰）独自住在团地，在老人家的眼里，再差劲的儿子也有别人无可比拟的优点。良多原本拥有美满的家庭，只不过前妻白石响子（真木阳子 饰）再也无法忍受他的作为，离婚后带着儿子真吾（吉泽太阳 饰）另外过活。好不容易与儿子见上一面，良多父子以及随后赶到的响子在淑子家中团聚。台风袭来，他们被迫留在充满着往昔回忆的奶奶家过夜。",
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
    "rating": 8.7,
    "votes": 99449,
    "runtime": "117 min",
    "releaseDate": "2016-05-18",
    "ratingRank": 138,
    "doubanTop250Rank": null,
    "imdbId": "tt5294966",
    "id": "movie-26694988"
  },
  {
    "sourceId": "1291565",
    "title": "疯狂约会美丽都",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2003,
    "coverUrl": "",
    "summary": "查宾是一个孤独的孩子，从小失去双亲的他每天跟苏沙婆婆相依为命。男孩有点自闭，喜欢跟小狗布鲁诺说话，喜欢独自骑单车。美丽都三姊妹的歌声陪伴他们过着平静日子。终于，婆婆看出了查宾单车方面的天分，要把他培养成才，于是风雨不改的陪孩子训练。",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "法国",
      "比利时",
      "加拿大",
      "英国",
      "拉脱维亚"
    ],
    "rating": 8.7,
    "votes": 62103,
    "runtime": "80 min",
    "releaseDate": "2003-06-11",
    "ratingRank": 139,
    "doubanTop250Rank": null,
    "imdbId": "tt0286244",
    "id": "movie-1291565"
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
    "ratingRank": 140,
    "doubanTop250Rank": null,
    "imdbId": "tt0397313",
    "id": "movie-1477448"
  },
  {
    "sourceId": "1428578",
    "title": "没头脑和不高兴",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1962,
    "coverUrl": "",
    "summary": "没头脑和不高兴是一对活宝，一个做事丢三落四忘东忘西，一个常常拿着一根竹竿做出一副不高兴的模样，当旁人感慨他们长大后该怎么办时，两人就想立刻长大做出一番事业给旁人瞧瞧，结果，一瞬间两人真的长大成人，没头脑当了工程师，不高兴成了演员。",
    "genres": [
      "Comedy",
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "短片"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.7,
    "votes": 60791,
    "runtime": "20 min",
    "releaseDate": "1962-01-01",
    "ratingRank": 141,
    "doubanTop250Rank": null,
    "imdbId": "tt6825352",
    "id": "movie-1428578"
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
    "ratingRank": 142,
    "doubanTop250Rank": null,
    "imdbId": "tt0775489",
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
    "ratingRank": 143,
    "doubanTop250Rank": null,
    "imdbId": "tt1555149",
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
    "ratingRank": 144,
    "doubanTop250Rank": null,
    "imdbId": "tt1515202",
    "id": "movie-3732800"
  },
  {
    "sourceId": "26703158",
    "title": "斯隆女士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "在华盛顿呼风唤雨的政治说客斯隆女士，在美国枪击事件接连发生的情况下，不惜牺牲自己的职业生涯，以督促政府实施更严格的联邦法律规范枪支。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.7,
    "votes": 48191,
    "runtime": "132 min",
    "releaseDate": "2016-11-11",
    "ratingRank": 145,
    "doubanTop250Rank": null,
    "imdbId": "tt4540710",
    "id": "movie-26703158"
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
    "ratingRank": 146,
    "doubanTop250Rank": null,
    "imdbId": "tt0384504",
    "id": "movie-1421278"
  },
  {
    "sourceId": "1295684",
    "title": "一夜风流",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1934,
    "coverUrl": "",
    "summary": "艾丽（克劳黛·考尔白 Claudette Colbert 饰）有一个显赫有钱的家庭，这恰恰成为她感情不如意的根源——父亲不赞成她和飞机师卫斯理结婚。艾丽一气之下离家出走，前去找卫斯理，不料途中钱财遭抢。遇上记者沃恩（克拉克·盖博 Clark Gable饰），沃恩得知艾丽是个不平常的富家女，确信艾丽非常有新闻价值，可以炮制出吸引眼球的新闻，便一路与艾丽同行。路上车前进遇阻，乘客得在半路住一晚旅馆，而身无分文的艾丽只能与沃恩同屋，并在床上用毯子间隔开两人来睡。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.7,
    "votes": 31772,
    "runtime": "105 min",
    "releaseDate": "1934-02-22",
    "ratingRank": 147,
    "doubanTop250Rank": null,
    "imdbId": "tt0025316",
    "id": "movie-1295684"
  },
  {
    "sourceId": "5996409",
    "title": "东京家族",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "2012年的一天，年届七旬的平山周吉（桥爪功 饰）和老伴富子（吉行和子 饰）结伴来到东京。这片繁华匆忙的土地上，生活着他们三个子女，在郊外开办诊所的长子幸一（西村雅彦 饰），与丈夫库造（林家正藏 饰）共同经营美发店的女儿滋子（中岛朋子 饰）以及担任歌舞伎美工的次子昌次（妻夫木聪 饰）。一家人久未团聚，自然心间充满喜悦。只是子女长大成人，荷担家业，从早到晚为了生计奔波劳碌，根本无暇带着父母游览东京。老两口先后在孩子们的家中小住，深深感受到他们的艰辛，而昌次对未来的茫然似乎也让平山夫妇多了一份担心。也许一切都会好起来，总要有放开手的时刻。",
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
    "rating": 8.7,
    "votes": 30751,
    "runtime": "146 min",
    "releaseDate": "2013-01-19",
    "ratingRank": 148,
    "doubanTop250Rank": null,
    "imdbId": "tt1796652",
    "id": "movie-5996409"
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
    "ratingRank": 149,
    "doubanTop250Rank": null,
    "imdbId": "tt0056172",
    "id": "movie-1292349"
  },
  {
    "sourceId": "1303001",
    "title": "西伯利亚的理发师",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 1998,
    "coverUrl": "",
    "summary": "在一辆开往莫斯科的火车上，军事学院的学生安德烈.托尔斯泰（欧列格·缅希科夫 Oleg Menshikov饰）偶遇了风情万种的美国女人珍（朱莉娅·奥蒙德 Julia Ormond 饰），两人暗生情愫。珍谎称自己是个寡妇，来俄罗斯看 望疯狂的机械师父亲（理查德·哈里斯 Richard Harris 饰），但实际上是被请来骗取军事学院院长拉德洛夫将军（阿列克谢·彼得连科 Aleksey Petrenko 饰）信任的交际花，好让机械师的“西伯利亚理发师”伐木机能够顺利驶进西柏林亚。但是没想到将军对珍动了真感情，并想向她求婚，而安德烈对珍的感情愈演愈烈，珍一方面想接受安德烈的感情，另一方面又想完成任务，于是事件发展到了不可收拾的地步。在一次演出中安德烈因为嫉妒和误会，抽伤了院长，被流放到了西伯利亚。在火车站上尽管珍赶上了最后的送别，但是安德烈始终没能和珍见最后一面。十年后，珍终于在西伯利亚找到了安德烈的住所，但终究逃不过命运的改变……若干年后珍回到了美国，把这段往事在信中讲述给了军事学院的儿子。",
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
      "俄罗斯",
      "法国",
      "意大利",
      "捷克"
    ],
    "rating": 8.7,
    "votes": 26555,
    "runtime": "180 min",
    "releaseDate": "1998-10-30",
    "ratingRank": 150,
    "doubanTop250Rank": null,
    "imdbId": "tt0120125",
    "id": "movie-1303001"
  },
  {
    "sourceId": "1394218",
    "title": "桃色公寓",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1960,
    "coverUrl": "",
    "summary": "C. C. Baxter（杰克·莱蒙 Jack Lemmon饰）是纽约一个大公司的小职员，他的单身公寓经常被公司的高层们用去当作幽会的场所，Baxter也因此获得不少升迁的机会。Baxter暗恋着公司的电梯女郎Fran Kubelik（雪莉·麦克雷恩 Shirley MacLaine 饰），这天他终于鼓起勇气约了她晚上一起去看一出戏剧。然而Baxter等了一晚却未见Fran的踪影，原来Fran是公司的高管有妇之夫Jeffery Sheldrake（弗莱德·麦克莫瑞 Fred MacMurray饰）的地下情人，那晚他们还在Baxter的公寓幽会。Jeffery信誓旦旦向Fran表示，他将和他的妻子离婚然后和她名正言顺地在一起。Fran相信了，然而几个星期后她又从Jeffery的上一任情人知晓了Jeffery所说的不过是个谎言。另一方面，在一个夜里，当Baxter回到他家的时候，意外地发现Fran竟倒在他的床上，并且服了很多安眠药企图自杀......",
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
    "rating": 8.7,
    "votes": 23453,
    "runtime": "125 min",
    "releaseDate": "1960-06-15",
    "ratingRank": 151,
    "doubanTop250Rank": null,
    "imdbId": "tt0053604",
    "id": "movie-1394218"
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
    "ratingRank": 152,
    "doubanTop250Rank": null,
    "imdbId": "tt0132477",
    "id": "movie-1293753"
  },
  {
    "sourceId": "1303036",
    "title": "暴雨将至",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1994,
    "coverUrl": "",
    "summary": "在马其顿，战争中的波斯尼亚，东正教的一位年轻修士以沉默保护一位年轻女孩，这位阿尔巴尼亚女孩涉嫌杀害一位东正教徒。但其实只是误会。修士以自己的善良决定与女孩私奔。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "马其顿",
      "法国",
      "英国"
    ],
    "rating": 8.7,
    "votes": 20496,
    "runtime": "113 min",
    "releaseDate": "1994-09-01",
    "ratingRank": 153,
    "doubanTop250Rank": null,
    "imdbId": "tt0110882",
    "id": "movie-1303036"
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
    "ratingRank": 154,
    "doubanTop250Rank": null,
    "imdbId": "tt0351817",
    "id": "movie-1307306"
  },
  {
    "sourceId": "1428580",
    "title": "阿凡提的故事之卖树荫",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1980,
    "coverUrl": "",
    "summary": "本美术片是系列木偶剧《阿凡提的故事》的第一集。",
    "genres": [
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "动画",
      "短片"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.7,
    "votes": 19555,
    "runtime": "25 min",
    "releaseDate": "1980-01-01",
    "ratingRank": 155,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-1428580"
  },
  {
    "sourceId": "26390631",
    "title": "总有一天",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2016,
    "coverUrl": "",
    "summary": "母亲（松佳·里奇特 Sonja Richter 饰）病重，艾尔玛（Harald Kaiser Hermann 饰）和艾瑞克（Albert Rudbeck Lindhardt 饰）兄弟两人无人照顾，只能被送往由校长赫克（拉斯·米科尔森 Lars Mikkelsen 饰）所开办的寄宿学校之中。赫克是一个信奉暴力的男人，他坚信，唯有通过武力才能够令学校中的孩子们真正信服，才能够引导他们走上正确的道路。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "丹麦"
    ],
    "rating": 8.7,
    "votes": 18176,
    "runtime": "115 min",
    "releaseDate": "2016-04-21",
    "ratingRank": 156,
    "doubanTop250Rank": null,
    "imdbId": "tt4659056",
    "id": "movie-26390631"
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
    "ratingRank": 157,
    "doubanTop250Rank": null,
    "imdbId": "tt0089853",
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
    "ratingRank": 158,
    "doubanTop250Rank": null,
    "imdbId": "tt1155651",
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
    "ratingRank": 159,
    "doubanTop250Rank": null,
    "imdbId": "tt0953981",
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
    "ratingRank": 160,
    "doubanTop250Rank": null,
    "imdbId": "tt0060827",
    "id": "movie-1294438"
  },
  {
    "sourceId": "6753589",
    "title": "理查二世",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2012,
    "coverUrl": "",
    "summary": "BBC2历史电视电影系列《空王冠》演绎4部经典莎士比亚作品。这部电视电影作为伦敦文化奥运的重点推荐剧目在2012年6月播出向全世界推行。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.7,
    "votes": 12119,
    "runtime": "140 min",
    "releaseDate": "2012-06-30",
    "ratingRank": 161,
    "doubanTop250Rank": null,
    "imdbId": "tt1978517",
    "id": "movie-6753589"
  },
  {
    "sourceId": "27073245",
    "title": "反叛的童谣",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "童话新编，将多个儿时的童话故事杂糅在一起，形成了一段崭新的童话故事，想法大胆，别具一格，当小红帽、白雪公主、灰姑娘、三只小猪、杰克与豌豆等出现在同一个故事，该是多么精彩呢？",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.7,
    "votes": 12028,
    "runtime": "57 min",
    "releaseDate": "2016-12-26",
    "ratingRank": 162,
    "doubanTop250Rank": null,
    "imdbId": "tt6386210",
    "id": "movie-27073245"
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
    "ratingRank": 163,
    "doubanTop250Rank": null,
    "imdbId": "tt0056443",
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
    "ratingRank": 164,
    "doubanTop250Rank": null,
    "imdbId": "tt0229664",
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
    "ratingRank": 165,
    "doubanTop250Rank": null,
    "imdbId": "tt0053779",
    "id": "movie-1293271"
  },
  {
    "sourceId": "6844861",
    "title": "命运石之门剧场版：负荷领域的既视感",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "这是又一部关于时间、空间和人性的哲学命题动画。日本动画所特有的那种创造离奇而宏大世界观的做法，在本作中再次得到淋漓尽致的体现。如果你是一个逻辑能力较弱的人，或许真的很难看懂影片中关于时间线的种种匪夷所思的设定，但是你依然能体会当人类通过时间机器穿越时空时所带来的种种伦理难题。“命运石之门”起始于2009年的一款游戏，后被改编为电视动画，今年推出了这部剧场版。",
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
    "votes": 11614,
    "runtime": "90 min",
    "releaseDate": "2013-04-20",
    "ratingRank": 166,
    "doubanTop250Rank": null,
    "imdbId": "tt2967286",
    "id": "movie-6844861"
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
    "ratingRank": 167,
    "doubanTop250Rank": null,
    "imdbId": "tt0111579",
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
    "releaseDate": "1973-01-01",
    "ratingRank": 168,
    "doubanTop250Rank": null,
    "imdbId": "tt0070544",
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
    "ratingRank": 169,
    "doubanTop250Rank": null,
    "imdbId": "tt0020629",
    "id": "movie-1295116"
  },
  {
    "sourceId": "26794435",
    "title": "哪吒之魔童降世",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2019,
    "coverUrl": "",
    "summary": "天地灵气孕育出一颗能量巨大的混元珠，元始天尊将混元珠提炼成灵珠和魔丸，灵珠投胎为人，助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。然而阴差阳错，灵珠和魔丸竟然被掉包。本应是灵珠英雄的哪吒却成了混世大魔王。调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。然而面对众人对魔丸的误解和即将来临的天雷的降临，哪吒是否命中注定会立地成魔？他将何去何从？",
    "genres": [
      "Drama",
      "Comedy",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.6,
    "votes": 889431,
    "runtime": "110 min",
    "releaseDate": "2019-07-26",
    "ratingRank": 170,
    "doubanTop250Rank": null,
    "imdbId": "tt10627720",
    "id": "movie-26794435"
  },
  {
    "sourceId": "11026735",
    "title": "超能陆战队",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "未来世界的超级都市旧京山（San Fransokyo），热爱发明创造的天才少年小宏，在哥哥泰迪的鼓励下参加了罗伯特·卡拉汉教授主持的理工学院机器人专业的入学大赛。他凭借神奇的微型磁力机器人赢得观众、参赛者以及考官的一致好评，谁知突如其来的灾难却将小宏的梦想和人生毁于一旦。大火烧毁了展示会场，而哥哥为了救出受困的卡拉汉教授命丧火场。身心饱受创伤的小宏闭门不出，哥哥生前留下的治疗型机器人大白则成为安慰他的唯一伙伴。原以为微型机器人也毁于火灾，谁知小宏和大白竟意外发现有人在某座废弃工厂内大批量地生产他的发明。",
    "genres": [
      "Comedy",
      "Action",
      "Sci-Fi",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "科幻",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 577469,
    "runtime": "102 min",
    "releaseDate": "2015-02-28",
    "ratingRank": 171,
    "doubanTop250Rank": null,
    "imdbId": "tt2245084",
    "id": "movie-11026735"
  },
  {
    "sourceId": "2209573",
    "title": "贫民窟的百万富翁",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2008,
    "coverUrl": "",
    "summary": "2006年，印度孟买。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.6,
    "votes": 503147,
    "runtime": "120 min",
    "releaseDate": "2009-03-26",
    "ratingRank": 172,
    "doubanTop250Rank": null,
    "imdbId": "tt1010048",
    "id": "movie-2209573"
  },
  {
    "sourceId": "1304447",
    "title": "记忆碎片",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "",
    "summary": "当记忆支离破碎后，你该怎样面对生活？本片的主人公就遭遇了这样的事情。",
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
      "美国"
    ],
    "rating": 8.6,
    "votes": 378193,
    "runtime": "113 min",
    "releaseDate": "2000-09-05",
    "ratingRank": 173,
    "doubanTop250Rank": null,
    "imdbId": "tt0209144",
    "id": "movie-1304447"
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
    "ratingRank": 174,
    "doubanTop250Rank": null,
    "imdbId": "tt0109688",
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
    "ratingRank": 175,
    "doubanTop250Rank": null,
    "imdbId": "tt1392190",
    "id": "movie-3592854"
  },
  {
    "sourceId": "1302827",
    "title": "人工智能",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "21世纪中期，由于温室效应，南北极冰川融化，地球上很多城市被淹没。此时，人类科技已经高度发达，人工智能机器人就是人类发明出来用以应对恶劣自然环境的科技手段之一，而且，机器人制造技术已经高度发达，先进的机器人不但拥有可以乱真的人类外表，还能感知自身的存在。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 262530,
    "runtime": "146 min",
    "releaseDate": "2001-06-29",
    "ratingRank": 176,
    "doubanTop250Rank": null,
    "imdbId": "tt0212720",
    "id": "movie-1302827"
  },
  {
    "sourceId": "1419936",
    "title": "战争之王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "",
    "summary": "本来美国移民尤瑞（尼古拉斯•凯奇 Nicolas Cage 饰）的家族生意是开饭馆。但是一个偶然的机会令他踏入了军火生意的大门，从此开始了贩卖武器的“职业生涯”。尤瑞遇事机智，胆大心细，这不仅让他成功俘获了美女埃娃的心，还使得他在地下军火生意中愈战愈勇。但是，不顺心的事情也随之而来：出现了生意上的死对头和一名老是盯着他的国际警察；弟弟染上毒瘾，并在一单生意交易中丧了命，而且，尽管他在竭力维护自己在家庭里的正义形象，但却掩盖不了真相。尤瑞开始反省自己生意的正义性，拷问自己的良心，但一切太迟，他已经众叛亲离……",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.6,
    "votes": 227966,
    "runtime": "122 min",
    "releaseDate": "2005-09-16",
    "ratingRank": 177,
    "doubanTop250Rank": null,
    "imdbId": "tt0399295",
    "id": "movie-1419936"
  },
  {
    "sourceId": "1308767",
    "title": "谍影重重2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "经过上一集的腥风血雨之后，伯恩（马特·达蒙 饰）和女朋友玛丽（弗兰卡·泼坦特 饰）隐居在印度偏僻的海边小镇，想忘记以前的生活。一天，神秘组织的杀手来到小镇，打破了伯恩二人世界的宁静，女友玛丽在逃亡途中被枪杀。",
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
    "rating": 8.6,
    "votes": 221982,
    "runtime": "108 min",
    "releaseDate": "2004-11-14",
    "ratingRank": 178,
    "doubanTop250Rank": null,
    "imdbId": "tt0372183",
    "id": "movie-1308767"
  },
  {
    "sourceId": "1388216",
    "title": "撞车",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "一个黑人电视导演和他的妻子，莫名其妙地因为莫须有的违章驾驶受到了白人警察的侮辱；看似该受到谴责的警察却在最危急关头挽救了那名曾遭他侮辱的黑人妇女；老实巴交的波斯商店店主，却差点谋杀了有着刺青的墨西哥修锁匠(迈克尔•佩纳Michael Pena饰)；地区检察官（布兰登•费舍尔Brendan Fraser 饰）和他的妻子（桑德拉•布洛克Sandra Bullock饰）被抢吉普车后只能把怨气发泄到无辜的修锁匠身上；黑人警察（唐•钱德尔 Don Cheadle 饰）在承受着上司的威胁和焦急地寻找自己的弟弟。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 221344,
    "runtime": "112 min",
    "releaseDate": "2004-09-10",
    "ratingRank": 179,
    "doubanTop250Rank": null,
    "imdbId": "tt0375679",
    "id": "movie-1388216"
  },
  {
    "sourceId": "1428175",
    "title": "血钻",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "九十年代非洲塞拉利昂，连连战火使这片土地饱受摧残，非法钻石贸易日益猖獗。",
    "genres": [
      "Drama",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 200290,
    "runtime": "143 min",
    "releaseDate": "2006-12-08",
    "ratingRank": 180,
    "doubanTop250Rank": null,
    "imdbId": "tt0450259",
    "id": "movie-1428175"
  },
  {
    "sourceId": "1867345",
    "title": "遗愿清单",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "",
    "summary": "老富翁爱德华•科尔（杰克•尼克尔森 Jack Nicholson 饰）近年来在公立医院的私有化改造事业中获利颇丰，他为节省成本，规定病房“一房两床”的做法颇受非议，但性格强势的科尔不以为意，岂料他不久被检查出罹患癌症，本欲入住单人病房的科尔在舆论压力下只得与另一位病人——老卡特（摩根•弗里曼 Morgan Freeman 饰）同处一室。汽车修理技师老卡特博闻强识，将三个子女培养成才，但代价是牺牲了年轻时要做历史教授的梦想。曾经结婚多次如今却孤身一人的科尔逐渐对卡特产生了兴趣，两位老人在病房中结下了友谊。科尔偶然发现了卡特的“遗愿清单”，他决定运用自己的力量，让那些纸面上的疯狂构想一一实现，去发现人生的真正意义……",
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
      "美国"
    ],
    "rating": 8.6,
    "votes": 195634,
    "runtime": "97 min",
    "releaseDate": "2007-12-25",
    "ratingRank": 181,
    "doubanTop250Rank": null,
    "imdbId": "tt0825232",
    "id": "movie-1867345"
  },
  {
    "sourceId": "1291824",
    "title": "黑鹰坠落",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "1992年，连年的部落战争令东非国家索马里山河破败，民不聊生，由此引发的大饥荒更造成三十万人死亡。掌控首都摩加迪休的独裁者默罕默德•法拉•艾迪德抢走国际组织的救援物资，此举引起世人公愤。丧心病狂的艾迪德向国际维和组织宣战，美国方面派出160名特种部队成员前往摩加迪休以推翻艾迪德政权。",
    "genres": [
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 172417,
    "runtime": "144 min",
    "releaseDate": "2001-12-18",
    "ratingRank": 182,
    "doubanTop250Rank": null,
    "imdbId": "tt0265086",
    "id": "movie-1291824"
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
    "ratingRank": 183,
    "doubanTop250Rank": null,
    "imdbId": "tt0289992",
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
    "ratingRank": 184,
    "doubanTop250Rank": null,
    "imdbId": "tt0112579",
    "id": "movie-1293929"
  },
  {
    "sourceId": "10537853",
    "title": "万箭穿心",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2012,
    "coverUrl": "",
    "summary": "90年代的武汉，一个普通家庭里丈夫马学武（焦刚 饰）是一家国企的厂办主任，妻子李宝莉（颜丙燕 饰）是汉正街的一名小贩，二人还有一个儿子小宝（李现 饰）。一次企业分房让这个家庭住进了新房，岂料从搬家那天起一系列让人始料未及的变故接踵而来：丈夫马学武提出离婚、妻子发现丈夫出轨、无家可归 的婆婆要入住新家，终于马学武在一系列打击下走向了自杀之路。宝莉的好友小景（赵倩 饰）把一切厄运归结于新房的风水不好，称之“万箭穿心”，个性倔强的李宝莉不愿妥协，决意撑起这个家……",
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
    "rating": 8.6,
    "votes": 128536,
    "runtime": "118 min",
    "releaseDate": "2012-11-16",
    "ratingRank": 185,
    "doubanTop250Rank": null,
    "imdbId": "tt2513344",
    "id": "movie-10537853"
  },
  {
    "sourceId": "1292056",
    "title": "蝴蝶",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2002,
    "coverUrl": "",
    "summary": "丽莎（柯莱儿布翁尼许Claire Bouanich 饰），今年8岁，单亲，喜欢提问，各种各样童稚的问题。邻居的爷爷（米歇尔•塞罗 Michel Serrault 饰 ），儿子已经去世，脾气古怪，有收集蝴蝶标本的癖好。一天，丽莎闯进了爷爷的密室，发现了五彩斑斓的蝴蝶标本。爷爷还说，他要到山上去采集一个叫“伊莎贝拉”的蝴蝶，丽莎大喜，要跟爷爷一起去探险，她多么希望跟着爷爷去看满天飞的蝴蝶。一路上，丽莎给爷爷添了不少麻烦，因为她有问不完的问题，还放走了爷爷采来的蝴蝶。丽莎掉进了一个山洞，爷爷着急，找来了救生人员。两人的友谊、亲情，与美丽的大自然融为一体。",
    "genres": [
      "Drama",
      "Comedy",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "儿童"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.6,
    "votes": 102035,
    "runtime": "85 min",
    "releaseDate": "2002-12-18",
    "ratingRank": 186,
    "doubanTop250Rank": null,
    "imdbId": "tt0329485",
    "id": "movie-1292056"
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
    "ratingRank": 187,
    "doubanTop250Rank": null,
    "imdbId": "tt0107048",
    "id": "movie-1300613"
  },
  {
    "sourceId": "1291588",
    "title": "岁月的童话",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1991,
    "coverUrl": "",
    "summary": "妙子今年27岁了，她向公司请了十天的假，到乡间享受向往已久的乡村生活。自此，她便常常想起了她五年级那一年的往事。一路上不断回想五年级时发生的往事，到达目的地后，迎接她的是一名乡村小伙子，比她小2岁的俊雄。",
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
    "rating": 8.6,
    "votes": 93259,
    "runtime": "118 min",
    "releaseDate": "1991-07-20",
    "ratingRank": 188,
    "doubanTop250Rank": null,
    "imdbId": "tt0102587",
    "id": "movie-1291588"
  },
  {
    "sourceId": "27072795",
    "title": "幸福的拉扎罗",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2018,
    "coverUrl": "",
    "summary": "拉扎罗（阿德里亚诺·塔尔迪奥洛 饰）是一位内心单纯的年轻农民，坦克雷迪（卢卡·奇科瓦尼 饰）则是一位骄横的年轻贵族。他在Inviolata这座与世隔绝的小城内生活，这个城镇则由侯爵夫人阿诺西纳·德·卢娜（尼可莱塔·布拉斯基 饰）所统治。年轻的农民和年轻的贵族相遇并成为好友。某天，坦克雷迪自导自演了一场绑架戏码，希望骗到母亲的赎金，不料最终引来了警察……",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "意大利",
      "瑞士",
      "法国",
      "德国"
    ],
    "rating": 8.6,
    "votes": 64749,
    "runtime": "127 min",
    "releaseDate": "2018-05-13",
    "ratingRank": 189,
    "doubanTop250Rank": null,
    "imdbId": "tt6752992",
    "id": "movie-27072795"
  },
  {
    "sourceId": "1292288",
    "title": "公民凯恩",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1941,
    "coverUrl": "",
    "summary": "美国报业大亨凯恩（奥森•韦尔斯）在桑拿都庄园中留下“玫瑰花蕾”的“遗言”死去后，一位青年记者受媒体的委托调查这四个字的含义，遂即，他走访了凯恩生前的同事好友，从报社董事长伯恩斯坦的口中，了解到凯恩的发迹历程以及如何制造舆论使美国卷入1897年的战争中的往事，从利兰的讲述中，凯恩与美国总统的侄女爱米丽的婚姻、与第二任妻子（歌手）苏珊的复杂关系及在总统竞选中的失败等等也被他一一所知。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 64523,
    "runtime": "119 min",
    "releaseDate": "1941-09-05",
    "ratingRank": 190,
    "doubanTop250Rank": null,
    "imdbId": "tt0033467",
    "id": "movie-1292288"
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
    "ratingRank": 191,
    "doubanTop250Rank": null,
    "imdbId": "tt0155722",
    "id": "movie-1301106"
  },
  {
    "sourceId": "1291840",
    "title": "走出非洲",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1985,
    "coverUrl": "",
    "summary": "凯伦（梅丽尔·斯特里普 Meryl Streep 饰）是一个爱慕虚荣的富家女，为了得到一个男爵夫人的称号她离开故土丹麦远嫁东非肯尼亚，然而男爵夫人的称号并没有给凯伦带来美满的婚姻生活。幸运的是在那片广袤的土地上，凯伦可以经常外出打猎、探险，她渐渐的爱上了这片神奇的土地。 在一次打猎遇险时，凯伦邂逅了年青的英国贵族邓尼斯（罗伯特·雷德福 Robert Redford 饰）。在遭遇婚姻的破裂和丈夫出走之后，凯伦独立承担起经营庄园的任务，在劳动的过程中，凯伦渐渐的与种植园里的仆人们产生了深厚友谊，而她与邓尼斯的关系似乎也有了进展。然尔命运之神并没有从此让凯伦一帆风顺，一次大火让她不得不出卖庄园从而缓解经济的拮据，后来邓尼斯驾机意外身亡又一次给了她沉重的打击。在经历了生命的磨炼之后，凯伦最终告别了那片她洒下青春和热情的土地……",
    "genres": [
      "Drama",
      "Romance",
      "Biography",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "传记",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 63313,
    "runtime": "161 min",
    "releaseDate": "1985-12-10",
    "ratingRank": 192,
    "doubanTop250Rank": null,
    "imdbId": "tt0089755",
    "id": "movie-1291840"
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
    "ratingRank": 193,
    "doubanTop250Rank": null,
    "imdbId": "tt1205489",
    "id": "movie-3026357"
  },
  {
    "sourceId": "4798707",
    "title": "爱",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2012,
    "coverUrl": "",
    "summary": "导演迈克尔·哈内克凭借本片再度勇夺金棕榈大奖。",
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
      "德国",
      "奥地利"
    ],
    "rating": 8.6,
    "votes": 59613,
    "runtime": "127 min",
    "releaseDate": "2012-05-20",
    "ratingRank": 194,
    "doubanTop250Rank": null,
    "imdbId": "tt1602620",
    "id": "movie-4798707"
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
    "ratingRank": 195,
    "doubanTop250Rank": null,
    "imdbId": "tt0052357",
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
    "ratingRank": 196,
    "doubanTop250Rank": null,
    "imdbId": "tt0119250",
    "id": "movie-1302642"
  },
  {
    "sourceId": "1394488",
    "title": "小情人",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2003,
    "coverUrl": "",
    "summary": "10 岁的阿捷（查理•哲华 Chalee Trirat）和奈娜（霍嘉丝•芝华顾 Focus Jeerakul 饰）是一对青梅竹马的好朋友，两人同样身为理发师的父亲虽然老死不相往来，但这两个小家伙却每天都在一起玩耍。清秀的阿捷热衷和奈娜玩一些女孩子的游戏，这也招致小霸王吉扎（查郎谱•狄锦邦提哇旺 Chaleumpol Tikumpornteerawong 饰）等人的嘲笑。男孩的心中都有一份倔强和不甘，阿捷为此狠下心和奈娜决裂，两个好友从此不再见面。阿捷随着吉扎他们来到男孩的世界尽情玩耍，却不知自己的青梅竹马正要举家搬到另一个地方……",
    "genres": [
      "Comedy",
      "Children"
    ],
    "originalGenres": [
      "喜剧",
      "儿童"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 8.6,
    "votes": 53155,
    "runtime": "110 min",
    "releaseDate": "2003-08-01",
    "ratingRank": 197,
    "doubanTop250Rank": null,
    "imdbId": "tt0399040",
    "id": "movie-1394488"
  },
  {
    "sourceId": "11500954",
    "title": "编舟记",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "玄武书房拟定出版一部面向当代人的中型国语辞典《大渡海》，阅历颇丰且行事一丝不苟的国语学者松本朋佑（加藤刚 饰）作为监修主持工作，谁知他最为器重的编辑荒木公平（小林薰 饰）却到了退休的年龄，选择回家照顾病中的妻子。此时编辑部中仅有做事浮躁的西冈正志（小田切让 饰）和临时工佐佐木熏（伊佐山博子 饰）。荒木和西冈多方物色，终于相中了营业部内不善于和人交往却对词语有着敏锐认知度以及做事极为认真投入的青年马缔光也（松田龙平 饰）。浩瀚的词语海洋，马缔与同事们用长达十五年的时间编制一艘驶向彼岸的小船。他们甘于寂寞，却也收获着弥足珍贵的幸福……",
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
    "votes": 52712,
    "runtime": "134 min",
    "releaseDate": "2013-04-13",
    "ratingRank": 198,
    "doubanTop250Rank": null,
    "imdbId": "tt2315226",
    "id": "movie-11500954"
  },
  {
    "sourceId": "1292330",
    "title": "恋恋风尘",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1986,
    "coverUrl": "",
    "summary": "初中毕业后，因家境不许，15岁的农村少年阿远（王晶文）放弃学业来台北做事，初尝人生的辛苦，却仍为自己的理想努力着。一年后，阿远青梅竹马的恋人阿云（辛树芬）也来到台北，了解到现实的台北同阿远信里所描述的，是两个世界。可是困顿的环境并没减少他们的快乐，因为他们拥有彼此。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.6,
    "votes": 48110,
    "runtime": "109 min",
    "releaseDate": "1986-01-01",
    "ratingRank": 199,
    "doubanTop250Rank": null,
    "imdbId": "tt0091406",
    "id": "movie-1292330"
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
    "ratingRank": 200,
    "doubanTop250Rank": null,
    "imdbId": "tt0072890",
    "id": "movie-1293374"
  },
  {
    "sourceId": "26591654",
    "title": "地雷区",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2015,
    "coverUrl": "",
    "summary": "电影改编自真实的历史事件。",
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
      "丹麦",
      "德国"
    ],
    "rating": 8.6,
    "votes": 42928,
    "runtime": "100 min",
    "releaseDate": "2015-12-03",
    "ratingRank": 201,
    "doubanTop250Rank": null,
    "imdbId": "tt3841424",
    "id": "movie-26591654"
  },
  {
    "sourceId": "6538833",
    "title": "内布拉斯加",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "老头子Woody（布鲁斯·邓恩 Bruce Dern 饰）收到一份广告，上面说他中了一百万大奖，对此他深信不疑，更决定从蒙大拿的比灵斯市步行到内布拉斯加的林肯市去领奖。他的妻子和两个儿子多次劝阻未果，最终小儿子David（威尔·福特 Will Forte 饰）决定开车载着他到林肯去领奖。去林肯的路上他们经过了Woody的老家，便决定去拜访那些久未谋面的亲戚们。Woody一家在那里短暂停留的几天里，整个小镇的人都知道Woody中了大奖，Woody顿时成了镇上的红人，接踵而来的是他的那些老债主们。David也渐渐了解了Woody那些不为人知的过去，对自己的父亲有了新的了解......",
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
      "美国"
    ],
    "rating": 8.6,
    "votes": 37056,
    "runtime": "115 min",
    "releaseDate": "2013-05-23",
    "ratingRank": 202,
    "doubanTop250Rank": null,
    "imdbId": "tt1821549",
    "id": "movie-6538833"
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
    "ratingRank": 203,
    "doubanTop250Rank": null,
    "imdbId": "tt1270783",
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
    "ratingRank": 204,
    "doubanTop250Rank": null,
    "imdbId": "tt0100998",
    "id": "movie-1299112"
  },
  {
    "sourceId": "1297418",
    "title": "麻将",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "",
    "summary": "富商儿子红鱼（唐从圣饰）从父亲那里学到很多骗人之术，他和纶纶（柯宇纶饰）、牙膏（王启赞饰）、香港（张震饰）组成一个四人小集团，到处敛财骗色。有一次，他们在咖啡店里遇见从法国来台北寻找男友的女孩马特拉（维吉妮亚•雷多尔恩饰），红鱼就此盯上了她，意图欺骗对方。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.6,
    "votes": 26286,
    "runtime": "121 min",
    "releaseDate": "1996-12-07",
    "ratingRank": 205,
    "doubanTop250Rank": null,
    "imdbId": "tt0116962",
    "id": "movie-1297418"
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
    "ratingRank": 206,
    "doubanTop250Rank": null,
    "imdbId": "tt1255953",
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
    "ratingRank": 207,
    "doubanTop250Rank": null,
    "imdbId": "tt0052618",
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
    "ratingRank": 208,
    "doubanTop250Rank": null,
    "imdbId": "tt0756648",
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
    "ratingRank": 209,
    "doubanTop250Rank": null,
    "imdbId": "tt0106220",
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
    "ratingRank": 210,
    "doubanTop250Rank": null,
    "imdbId": "tt0830838",
    "id": "movie-1947270"
  },
  {
    "sourceId": "30361134",
    "title": "9号秘事 万圣节特别篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2018,
    "coverUrl": "",
    "summary": "亚瑟在墓地捡到旧手机，谁知他好死不死地非要去联系原机主。可是有些秘密最好不要揭开。随着万圣节临近，亚瑟坠入自找的噩梦中。无论今生来世，好人是没有好报的……",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "originalGenres": [
      "喜剧",
      "恐怖"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.6,
    "votes": 16689,
    "runtime": "30 min",
    "releaseDate": "2018-10-28",
    "ratingRank": 211,
    "doubanTop250Rank": null,
    "imdbId": "tt7976574",
    "id": "movie-30361134"
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
    "ratingRank": 212,
    "doubanTop250Rank": null,
    "imdbId": "tt0166813",
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
    "ratingRank": 213,
    "doubanTop250Rank": null,
    "imdbId": "tt0129167",
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
    "ratingRank": 214,
    "doubanTop250Rank": null,
    "imdbId": "tt0090570",
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
    "ratingRank": 215,
    "doubanTop250Rank": null,
    "imdbId": "tt0113670",
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
    "ratingRank": 216,
    "doubanTop250Rank": null,
    "imdbId": "tt0436886",
    "id": "movie-1328665"
  },
  {
    "sourceId": "1401385",
    "title": "彗星美人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1950,
    "coverUrl": "",
    "summary": "百老汇资深女星玛戈·强尼（贝蒂·戴维斯 Bette Davis饰）即便上了年纪，却仍风姿绰约，是百老汇炙手可热的殿堂级名角。成功的演艺生涯，光鲜亮丽的生活圈子，一切看起来都如此完美。直到她的剧作家朋友劳埃德·理查兹（休·马洛威 Hugh Marlowe饰）和妻子卡伦（西莱斯特·霍姆 Celeste Holm饰），把面目清秀、聪明怜俐的艾娃·哈林顿（安妮·巴克斯特 Anne Baxter饰）介绍给她做跟班，玛戈才意识到这个潜心学艺进步飞快的姑娘对自己的威胁，不免起了戒心。与此同时，艾娃极力讨好大名鼎鼎的剧评家艾德逊·德威特（乔治·桑德斯 George Sanders饰），势要在百老汇找到自己的一席之地。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.6,
    "votes": 14501,
    "runtime": "138 min",
    "releaseDate": "1950-10-13",
    "ratingRank": 217,
    "doubanTop250Rank": null,
    "imdbId": "tt0042192",
    "id": "movie-1401385"
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
    "ratingRank": 218,
    "doubanTop250Rank": null,
    "imdbId": "tt1320082",
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
    "ratingRank": 219,
    "doubanTop250Rank": null,
    "imdbId": "tt0064115",
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
    "ratingRank": 220,
    "doubanTop250Rank": null,
    "imdbId": "tt0046478",
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
    "ratingRank": 221,
    "doubanTop250Rank": null,
    "imdbId": "tt0193253",
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
    "ratingRank": 222,
    "doubanTop250Rank": null,
    "imdbId": "tt0093342",
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
    "ratingRank": 223,
    "doubanTop250Rank": null,
    "imdbId": "tt0118954",
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
    "ratingRank": 224,
    "doubanTop250Rank": null,
    "imdbId": "tt1686812",
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
    "ratingRank": 225,
    "doubanTop250Rank": null,
    "imdbId": "tt0049406",
    "id": "movie-1293936"
  },
  {
    "sourceId": "1309163",
    "title": "恋恋笔记本",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "一个浸润着鲜红与纯白的爱情故事，写在一本洒满昏黄的笔记本上，被一位老先生(詹姆斯·加纳 饰)，一遍一遍的讲述。老太太(吉娜·罗兰兹 饰)总是静静的听着，好奇的追问结果。在一家疗养院，这样不变的场景每天都会上演。",
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
    "rating": 8.5,
    "votes": 391396,
    "runtime": "123 min",
    "releaseDate": "2004-06-25",
    "ratingRank": 226,
    "doubanTop250Rank": null,
    "imdbId": "tt0332280",
    "id": "movie-1309163"
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
    "ratingRank": 227,
    "doubanTop250Rank": null,
    "imdbId": "tt0396171",
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
    "ratingRank": 228,
    "doubanTop250Rank": null,
    "imdbId": "tt0976051",
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
    "ratingRank": 229,
    "doubanTop250Rank": null,
    "imdbId": "tt0106559",
    "id": "movie-1303394"
  },
  {
    "sourceId": "1305690",
    "title": "阿飞正传",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "",
    "summary": "1960年代的香港，因生母在阿飞旭仔（张国荣）长大成人过程中的缺失，他把自己优雅地比喻为“无根鸟”，对生命中遇到的每一个女人都表现得放荡不羁，售票员苏丽珍（张曼玉）和舞女咪咪（刘嘉玲）先后令他感受过温暖，可是她们也只能当当小情人。为摆脱沉重和无力感，旭仔抛下一切去南洋找寻生母。",
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
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 300525,
    "runtime": "94 min",
    "releaseDate": "1990-12-15",
    "ratingRank": 230,
    "doubanTop250Rank": null,
    "imdbId": "tt0101258",
    "id": "movie-1305690"
  },
  {
    "sourceId": "1291544",
    "title": "哈利·波特与阿兹卡班的囚徒",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2004,
    "coverUrl": "",
    "summary": "哈利（丹尼尔·雷德克里夫）即将在霍格沃兹渡过第三个年头，此时在阿兹塔班却传出恶棍小天狼星（加里·奥德曼）越狱的消息。据说小天狼星正是背叛哈利父母的好友，他的教父，而这次小天狼星越狱似乎正是为了找他。哈利的心里悄悄的滋生了为父母报仇的想法，期待着小天狼星的出现。",
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
      "英国",
      "美国"
    ],
    "rating": 8.5,
    "votes": 268467,
    "runtime": "141 min",
    "releaseDate": "2004-09-10",
    "ratingRank": 231,
    "doubanTop250Rank": null,
    "imdbId": "tt0304141",
    "id": "movie-1291544"
  },
  {
    "sourceId": "3073124",
    "title": "月球",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "",
    "summary": "未来世界，随着科技的飞速进步，地球的污染也越来越严重。为了遏制这种现状，一家名为月能工业有限公司的企业应运而生。该公司致力于月球能源的开发，通过采集氦-3来满足地球对能源的需求。月能公司在月球设有基地，山姆·贝尔（山姆·洛克威尔 Sam Rockwell 饰）正是该基地 上唯一的工作人员。山姆是公司聘用的合同工，他已在月球孤零零地生活3年，陪伴他的只有智能机器人戈蒂（凯文·斯派西 Kevin Spacey 饰）。枯燥乏味的生活令山姆归心似箭，在还有两周就离开月球的时候，山姆偶然遭遇一起事故。醒来后的他发现戈蒂似乎对其有所隐瞒，公司高层也拒绝他的回程请求。山姆借机逃出基地，却在事故发生地点发现另一个自己……",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "悬疑"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.5,
    "votes": 182857,
    "runtime": "97 min",
    "releaseDate": "2009-07-17",
    "ratingRank": 232,
    "doubanTop250Rank": null,
    "imdbId": "tt1182345",
    "id": "movie-3073124"
  },
  {
    "sourceId": "1308777",
    "title": "暖暖内含光",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "内向沉稳的约尔•巴瑞斯（金•凯瑞 饰）在一次聚会中认识了率真随性的克莱门汀•克罗斯基（凯特•温丝莱特 饰），二人成为情侣。和普通的情侣一样，他们的日子也在甜蜜和争吵中度过。",
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
      "美国"
    ],
    "rating": 8.5,
    "votes": 173475,
    "runtime": "108 min",
    "releaseDate": "2004-03-19",
    "ratingRank": 233,
    "doubanTop250Rank": null,
    "imdbId": "tt0338013",
    "id": "movie-1308777"
  },
  {
    "sourceId": "25837262",
    "title": "至爱梵高·星空之谜",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2017,
    "coverUrl": "",
    "summary": "影片用一封无法投递的信件串联起梵高在去世前最后六周里与他生命中最重要的三个人物之间的秘密，带观众穿越回十九世纪末的欧洲，并陪伴梵高走完他最后的人生。影片采用梵高原画作品中的人物原型还原梵高的艺术人生，让观众在享受美得令人窒息的视觉盛宴时，抽丝剥茧地发现隐藏了一个半世纪的秘密。",
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
      "英国",
      "波兰"
    ],
    "rating": 8.5,
    "votes": 156229,
    "runtime": "95 min",
    "releaseDate": "2017-12-08",
    "ratingRank": 234,
    "doubanTop250Rank": null,
    "imdbId": "tt3262342",
    "id": "movie-25837262"
  },
  {
    "sourceId": "6019180",
    "title": "开心家族",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2010,
    "coverUrl": "",
    "summary": "生无可恋的落魄青年尚万（车太贤 饰）屡次自杀未遂，最近一次被抢救醒来后发现自己竟能看见鬼魂。“烟鬼大叔”（高昌锡 饰）、“爱哭大婶”（张英南 饰）、“变态爷爷”和“吃货小鬼”都不请自来赖上了尚万，形影不离的粘在他身边。尚万求死不能、无奈苟活，还因为与鬼魂交流而频遭旁人白眼，烦恼更甚以往。为了请走难缠的四个鬼魂，尚万动身帮助他们完成在人间未了的心愿。在为鬼魂们奔走的过程中，他与善良的护士妍秀（姜艺媛 饰）渐渐靠近，生活也出现了新的转机。",
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
      "韩国"
    ],
    "rating": 8.5,
    "votes": 155571,
    "runtime": "111 min",
    "releaseDate": "2011-11-29",
    "ratingRank": 235,
    "doubanTop250Rank": null,
    "imdbId": "tt1848926",
    "id": "movie-6019180"
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
    "ratingRank": 236,
    "doubanTop250Rank": null,
    "imdbId": "tt0216165",
    "id": "movie-1298898"
  },
  {
    "sourceId": "1302476",
    "title": "麦兜故事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "",
    "summary": "麦兜，一个长得不帅，头脑平平的小朋友。和妈妈麦太太，在香港一个叫大角咀的地方过着并不富裕却很快乐的生活。从麦兜带着妈妈的期望来到世界那一刻开始，他的脑海中一直飘满七彩幻想的泡泡。那个蓝天白云，椰林树影，水清沙白的童年的马尔代夫，那充满诱惑的圣诞火鸡的浓香，还有那个关于“抢包山”的奥运金牌的梦想，让麦兜平凡着他的平凡，却幸福着他的幸福。麦兜，和春田花花幼儿园的小朋友们一起，陪着我们，简单的在爱的呵护下慢慢长大。",
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
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 145193,
    "runtime": "75 min",
    "releaseDate": "2001-12-15",
    "ratingRank": 237,
    "doubanTop250Rank": null,
    "imdbId": "tt0312941",
    "id": "movie-1302476"
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
    "ratingRank": 238,
    "doubanTop250Rank": null,
    "imdbId": "tt0878804",
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
    "ratingRank": 239,
    "doubanTop250Rank": null,
    "imdbId": "tt0101640",
    "id": "movie-1293323"
  },
  {
    "sourceId": "24741412",
    "title": "哪啊哪啊神去村",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "因为考大学失败，刚刚告别高中时代的都市青年平野勇气（染谷将太 饰）站在人生的十字路口。他偶然被林业培训生宣传材料上的美丽女孩所吸引，于是脑瓜一热来到三重县一个连手机信号都没有的偏僻小山村接受为期一年的林业培训课程。一开始他吊儿郎当，毫无干劲儿，因此饱受前辈饭田与喜（伊藤英明 饰）的斥责。正当勇气准备逃离之际，与封面美女石井直纪（长泽雅美 饰）不期而遇让他鬼使神差地又回到宿舍。前期培训结束，勇气随着饭田前辈来到神去村，跟随师父（光石研 饰）开始实地修行与学习。严苛的环境打磨着这个都市青年的骄傲和浮躁，不知不觉中他已成长为足以独当一面的优秀伐木工……",
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
    "rating": 8.5,
    "votes": 111009,
    "runtime": "116 min",
    "releaseDate": "2014-05-10",
    "ratingRank": 240,
    "doubanTop250Rank": null,
    "imdbId": "tt2964120",
    "id": "movie-24741412"
  },
  {
    "sourceId": "1305666",
    "title": "时时刻刻",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "跨越时空的三个女人，因为一个名字被联系起来----戴罗薇夫人。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 8.5,
    "votes": 103170,
    "runtime": "114 min",
    "releaseDate": "2002-12-27",
    "ratingRank": 241,
    "doubanTop250Rank": null,
    "imdbId": "tt0274558",
    "id": "movie-1305666"
  },
  {
    "sourceId": "6537486",
    "title": "登堂入室",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2012,
    "coverUrl": "",
    "summary": "法国高校文学老师吉尔曼（法布莱斯·鲁奇尼 Fabrice Luchini 饰）给学生布置了一篇周记，要求他们如实记录周末的见闻。在众多乏味的作业中吉尔曼意外发现16岁少年克劳德（恩斯特·吴默埃 Ernst Umhauer 饰）的文章异常精彩。克劳德是一个安静的观察者，习 惯坐在教室的最后一排。他的作业是关于偷窥——讲述他如何潜入朋友家中、窥探对方一家生活的故事。吉尔曼被字里行间深深吸引，熄灭已久的文学激情亦被点燃。他不但决定单独辅导才华横溢的克劳德、鼓励他放手创作，还与妻子珍娜（克里斯汀·斯科特·托马斯 Kristin Scott Thomas 饰）一同分享克劳德的作文。然而成年人在阅读过程中竟渐渐忘记了虚构和现实的边界，更懵然不知自己的居室早已房门大开......",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.5,
    "votes": 93976,
    "runtime": "105 min",
    "releaseDate": "2012-10-10",
    "ratingRank": 242,
    "doubanTop250Rank": null,
    "imdbId": "tt1964624",
    "id": "movie-6537486"
  },
  {
    "sourceId": "6880497",
    "title": "盗钥匙的方法",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2012,
    "coverUrl": "",
    "summary": "小剧场演员樱井武史（堺雅人 饰）奋斗多年始终未见出头天，穷困潦倒，情场失意，绝望至极的他连自杀都不成功。无奈之下，他只得进入大众浴池洗澡，谁知却阴差阳错用一枚香皂滑到了某个陌生男子。男子倒地晕厥，樱井则鬼迷心窍偷走了对方的储物柜钥匙，从此化名近藤，过起了从来不敢企及的富贵人生活。然而令他怎么也想象不到的是，近藤（香川照之 饰）竟是一名名震黑道的冷血杀手。在此之后，樱井不得不接手来自黑道的委托，硬着头皮干起杀人的营生。与此同时，从医院醒来的近藤失去记忆，误以为自己是走投无路的樱井。在偶然结识的美丽女性水岛早苗（广末凉子 饰）的帮助下，他一点一滴重新认识作为演员的自己，苦苦探索前进的方向，在此过程中他和早苗的内心也悄悄发生变化。而当他的记忆恢复那一刹那，三个人的命运也由此纠缠到了一起……",
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
    "rating": 8.5,
    "votes": 92639,
    "runtime": "128 min",
    "releaseDate": "2012-06-17",
    "ratingRank": 243,
    "doubanTop250Rank": null,
    "imdbId": "tt2078599",
    "id": "movie-6880497"
  },
  {
    "sourceId": "6985803",
    "title": "少年斯派维的奇异旅行",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "",
    "summary": "小小少年T.S. 斯派维（凯尔·凯特莱特 Kyle Catlett 饰）生于蒙大拿州一个偏远牧场，他有一颗聪明绝顶的大脑，酷爱制图学和科学图解，年仅十岁就发明了永动机。他的父亲（考乐姆·吉斯·雷尼 Callum Keith Rennie 饰）是个狂热的牛仔迷，搜集关于西部牛仔的一切；母亲（海伦娜·伯翰·卡特 Helena Bonham Carter 饰）是一位生物学博士，潜心投入到昆虫研究中；而姐姐则是一个最普通不过的正常人，她常常为生在这个一屋子怪人的家里而烦恼。T.S.原本还有一个异卵双胞胎弟弟雷顿，去年死于一场意外。",
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
      "法国",
      "加拿大"
    ],
    "rating": 8.5,
    "votes": 81457,
    "runtime": "105 min",
    "releaseDate": "2013-10-16",
    "ratingRank": 244,
    "doubanTop250Rank": null,
    "imdbId": "tt1981107",
    "id": "movie-6985803"
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
    "ratingRank": 245,
    "doubanTop250Rank": null,
    "imdbId": "tt0120768",
    "id": "movie-1293434"
  },
  {
    "sourceId": "1300055",
    "title": "全金属外壳",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1987,
    "coverUrl": "",
    "summary": "越战期间，美军大量征兵。大批年轻人应征入伍，在新兵营接受“残忍”的训练。“傻瓜”比尔运动神经不发达，常常犯错而连累所有人一起受罚。“小丑”（马修•莫迪恩 Matthew Modine 饰）奉命帮助比尔，但比尔还是老犯错误，连累其他人。大家忍无可忍下打了他一顿，比尔从此变得精神恍惚，在新兵营毕业前夕枪杀教官后吞枪自杀。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.5,
    "votes": 77214,
    "runtime": "116 min",
    "releaseDate": "1987-06-17",
    "ratingRank": 246,
    "doubanTop250Rank": null,
    "imdbId": "tt0093058",
    "id": "movie-1300055"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0098694",
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
    "doubanTop250Rank": null,
    "imdbId": "tt0374546",
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
    "doubanTop250Rank": null,
    "imdbId": "tt0120586",
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
    "releaseDate": "1999-01-01",
    "ratingRank": 250,
    "doubanTop250Rank": null,
    "imdbId": "tt0210916",
    "id": "movie-1307766"
  },
  {
    "sourceId": "1293414",
    "title": "阮玲玉",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "",
    "summary": "一代电影明星阮玲玉（张曼玉饰）的一生波折辛酸，由璀璨的荧幕生涯到黯然的个人生活，皆成为后世怀念与争论不休的话题。其与张达民（吴启华饰）、唐季珊（秦汉饰）、蔡楚生（梁家辉饰）的感情纠葛让人唏嘘不已。本片导演关锦鹏以记录片的拍摄方式，穿插阮玲玉女士的原片与张曼玉饰演的画面交织，又附着老影人的采访与演员张曼玉自己的感受，可谓创造出了时空变换的美感与意境，让人不禁为这一代玉人的一生惋惜与深思。“人言可畏”，成为经典绝语。",
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
    "rating": 8.5,
    "votes": 60506,
    "runtime": "126 min",
    "releaseDate": "1991-11-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0102816",
    "id": "movie-1293414"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1588356",
    "id": "movie-4861627"
  },
  {
    "sourceId": "26020814",
    "title": "胜者即是正义 2014SP",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "东都综合医院为一位疑难病症患者投放新型药物，仅仅三天后该患者突发心肌梗塞身亡。患者遗孀中原纱弥加（吉濑美智子 饰）悲痛交加，她认为丈夫死于医疗事故，因此拜托“敲诈律师”九条和马（大森南朋 饰）对医院提起指控。因盲肠炎住院治疗的古美门研介（堺雅人 饰）刚好是该医院的顾问律师，他三下五除二赶走了九条。谁知九条一改当初的敲诈作风，而是煞有其事地将东都综合医院正式告上法庭。随着庭审的进行，医护人员涉嫌隐藏新药的致死副作用以及院长赤目义和专横跋扈、糜烂堕落的生活作风接连被曝了出来。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 46833,
    "runtime": "107 min",
    "releaseDate": "2014-11-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2725232",
    "id": "movie-26020814"
  },
  {
    "sourceId": "1291937",
    "title": "关于我母亲的一切",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1999,
    "coverUrl": "",
    "summary": "玛努埃拉（丝莉亚 洛芙　饰）的丈夫在儿子出生前就离开了妻子，玛努埃拉成为了单身妈妈，带着儿子埃斯特班来到马德里生活。儿子从不知道爸爸的事情，玛努埃拉只好对儿子说父亲已经过世。然而，儿子终究不相信。他在日记本里悄悄写下对父亲的想念。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "西班牙",
      "法国"
    ],
    "rating": 8.5,
    "votes": 42493,
    "runtime": "101 min",
    "releaseDate": "1999-04-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0185125",
    "id": "movie-1291937"
  },
  {
    "sourceId": "1299889",
    "title": "暗恋桃花源",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "某剧场这晚迎来现代爱情悲剧《暗恋》和古装爱情喜剧《桃花源》两个不相干的剧组，因为都与之签定了当晚的彩排合约、又都是演出在即，双方发生争执只为独占唯一的舞台，结果谁都不愿相让只能间隔着排戏。",
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
      "中国台湾"
    ],
    "rating": 8.5,
    "votes": 38109,
    "runtime": "107 min",
    "releaseDate": "1992-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103699",
    "id": "movie-1299889"
  },
  {
    "sourceId": "1304942",
    "title": "两小无猜",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1971,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1132971627.jpg",
    "summary": "这是一个纯真美好的初恋故事。丹尼尔（马克·莱斯特 Mark Lester 饰）是英国某小学的一名学童，家境殷实的他乖巧听话，同时也有叛逆的一面。他最好的朋友昂肖（杰克·瓦尔德 Jack Wild 饰），是一个叛逆乖张、专门捣蛋的小孩，丹尼尔和昂肖度过了许多个美好的放学时光。天真可爱的美乐蒂（特雷西·海德 Tracy Hyde 饰）跟丹尼尔同一所小学，原来并没有交集的二人，因为某一天在舞蹈室偶遇而相识，丹尼尔爱上了那个翩翩起舞的美乐蒂。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.5,
    "votes": 37204,
    "runtime": "103 min",
    "releaseDate": "1971-04-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0067418",
    "id": "movie-1304942"
  },
  {
    "sourceId": "1306439",
    "title": "迫在眉梢",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2174974798.jpg",
    "summary": "生活并不富裕的约翰·Q·阿奇伯德（丹泽尔·华盛顿 Denzel Washington饰）是个工厂里卖命工作的工人。为了养家糊口，两夫妻感情日渐淡漠而导致婚姻濒临破裂。更加雪上加霜的是，不幸降临在了他们9岁的儿子迈克尔身上。",
    "genres": [
      "Drama",
      "Thriller",
      "Family",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "家庭",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 34687,
    "runtime": "116 min",
    "releaseDate": "2002-02-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0251160",
    "id": "movie-1306439"
  },
  {
    "sourceId": "1295428",
    "title": "南方公园",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1852116626.jpg",
    "summary": "South Park是美国一个宁静的小镇，这里的人们生活的单纯、快乐。一日，四个小伙伴Cartman, Stan, Kenny和Kyle偷偷溜进了正在播映一部由加拿大演员P和T主演的低级电影，影中充斥着黄色笑话和不堪入耳的粗口。四个小伙伴看完电影后学会片中的粗口，并到处和其他孩子讲。很快这些粗口就传遍了小镇，小镇上几乎每一个小孩都跑去看了这部电影，都学会了这些粗口。这些粗口让小镇的大人们十分惊慌，他们认为是加拿大人教坏了他们的孩子，更荒唐的是，美国国会也这样认为，于是，一场发生在美国和加拿大之间的战争打响了！",
    "genres": [
      "Comedy",
      "Animation",
      "Musical"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "歌舞"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 30797,
    "runtime": "81 min",
    "releaseDate": "1999-06-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0158983",
    "id": "movie-1295428"
  },
  {
    "sourceId": "3335463",
    "title": "交响情人梦 最终乐章 前篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p575387624.jpg",
    "summary": "经过在法国巴黎一年的努力打拼，千秋真一（玉木宏 饰）渐渐成长为备受瞩目的指挥家，野田惠在音乐学院的学业也在有条不紊地进行中。而就在此春风得意的时刻，艾莉莎（吉瀬美智子 饰）命令千秋去担任宫殿专用乐团Roux-marlet乐团的首席指挥。虽然该乐团声名显赫，但早已今非昔比，由于资金断链，人才相继流失，临时演奏家占多数且缺少练习的乐团，其窘况可想而知。种种困境让千秋备感困扰，为此他找来野田惠（上野树里 饰）加入练习，而碰巧来到巴黎的孙蕊（山田优 饰）也加入其中。糟糕的现状，一切似乎都要从头开始……",
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
      "日本"
    ],
    "rating": 8.5,
    "votes": 30599,
    "runtime": "122 min",
    "releaseDate": "2009-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1337672",
    "id": "movie-3335463"
  },
  {
    "sourceId": "1457219",
    "title": "光荣之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1321134590.jpg",
    "summary": "1965年是马丁·路德·金与黑豹党、披头士与越战、白人在篮球领域统治天下的时代。",
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
    "rating": 8.5,
    "votes": 29870,
    "runtime": "118 min",
    "releaseDate": "2006-01-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0385726",
    "id": "movie-1457219"
  },
  {
    "sourceId": "1361276",
    "title": "八部半",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1963,
    "coverUrl": "",
    "summary": "电影导演圭多（马塞洛·马斯楚安尼 Marcello Mastroianni 饰）在完成了一部影片之后感到筋疲力尽，他来到一处疗养地休息，同时开始构思下一部电影。他受到恶梦的困扰，精神不振，灵感也陷入停滞。他让情妇卡拉（桑德拉·米洛 Sandra Milo 饰）也来到疗养地和他作伴，但卡拉的到来反而增添了他的烦恼。此时，充满朝气的年轻女郎克劳迪娅（克劳迪娅·卡汀娜 Claudia Cardinale 饰）的出现，令圭多压抑的世界乍现出一抹亮色。然而随着圭多妻子路易莎（阿努克·艾梅 Anouk Aimée 饰）以及许多电影圈人士纷纷来到疗养地，圭多不堪忍受个人感情生活的混乱与电影拍摄的双重压力，他的精神危机愈演愈烈，梦境与幻觉不断侵入他的现实生活……",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8.5,
    "votes": 29149,
    "runtime": "138 min",
    "releaseDate": "1963-02-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0056801",
    "id": "movie-1361276"
  },
  {
    "sourceId": "1297311",
    "title": "水牛城66",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453576673.jpg",
    "summary": "倒霉的比利（文森特•加洛 Vincent Gallo 饰）替人顶罪蹲了5年牢，今天，他出狱了。可是他的霉运似乎还没有结束，刚出狱的比利内急想上厕所小便时，不是厕所维修就是被拒绝；即使鬼鬼祟祟的躲到汽车后面想就地解决时汽车也马上开走了。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 8.5,
    "votes": 28498,
    "runtime": "110 min",
    "releaseDate": "1998-06-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118789",
    "id": "movie-1297311"
  },
  {
    "sourceId": "6717574",
    "title": "SPEC：翔",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2012,
    "coverUrl": "",
    "summary": "经过长时间的休整，治疗眼伤的濑文焚流（加濑亮 饰）终于随着当麻（户田惠梨香 饰）重返阔别已久的未详，只是此时来自公安部公安五课的市柳（でんでん 饰）和吉川（北村一辉 饰）握得实权，令濑文等人颇为气闷。与此同时，在市井算命的觉被一掌握瞬间移动能力的黑衣男子射杀，同时遇害的还有觉的保镖以及几名无辜市民。父母双双遇害而作为幸存者并且目击了黑衣人真实容颜的少女久远望（谷村美月 饰）便成为对方追杀的目标。为了保护小望，未详同仁通力合作，并持续追索黑衣人的真面目以及其背后的阴谋。在此期间，当麻也展示了其不为人知的SPEC。一场斗智斗勇的战斗拉开了序幕……",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 27367,
    "runtime": "92 min",
    "releaseDate": "2012-04-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1988184",
    "id": "movie-6717574"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0093191",
    "id": "movie-1292504"
  },
  {
    "sourceId": "1395080",
    "title": "借着雨点说爱你",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1499616217.jpg",
    "summary": "秋穗巧（中村狮童饰）的妻子槚田泠（竹内结子饰）一年前去世，便和6岁的儿子佑司（武开证饰）过着相依为命的日子。妻子临终前跟他们说，翌年的雨季便会跟着雨点回来看他们。儿子深信母亲会在这个时候回来他们的身边，虽然秋穗巧知道这是一件很荒唐的事，却不忍心向儿子说。",
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
      "日本"
    ],
    "rating": 8.5,
    "votes": 25964,
    "runtime": "119 min",
    "releaseDate": "2004-10-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0442268",
    "id": "movie-1395080"
  },
  {
    "sourceId": "1308086",
    "title": "昨天",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2211903349.jpg",
    "summary": "本片是对演员贾宏声在上世纪九十年代整十年不堪回首岁月的真实再现，并由贾宏声本人及其家人回归各自相应身份参与回首。",
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
      "中国大陆"
    ],
    "rating": 8.5,
    "votes": 24508,
    "runtime": "114 min",
    "releaseDate": "2001-09-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0298238",
    "id": "movie-1308086"
  },
  {
    "sourceId": "1310176",
    "title": "放大",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1966,
    "coverUrl": "",
    "summary": "真相与幻想之间的界限是什么？感官是否能助我们认识世界？影片用一个摄影师的故事，铺开了一系列哲学、心理学的问号。",
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
      "英国",
      "意大利",
      "美国"
    ],
    "rating": 8.5,
    "votes": 23849,
    "runtime": "111 min",
    "releaseDate": "1966-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0060176",
    "id": "movie-1310176"
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
    "doubanTop250Rank": null,
    "imdbId": "tt2007387",
    "id": "movie-4328443"
  },
  {
    "sourceId": "27114240",
    "title": "冒牌上尉",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2017,
    "coverUrl": "",
    "summary": "德国二战题材影片。影片根据真实故事改编，讲述了一名十九岁的普通国防兵威利赫罗德在二战最后两周内成为所谓的“埃姆斯兰德刽子手”的故事。他凭借捡到的上尉制服而假冒军官，将溃散的其他士兵聚集起来组成特别任务小组，一路抢掠地在行将陷落的纳粹帝国大地上为所欲为，并以元首为榜样掌握起逮捕和生杀大权。",
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
      "德国",
      "波兰",
      "葡萄牙",
      "法国"
    ],
    "rating": 8.5,
    "votes": 23248,
    "runtime": "118 min",
    "releaseDate": "2017-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6763252",
    "id": "movie-27114240"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0320193",
    "id": "movie-1299582"
  },
  {
    "sourceId": "3750104",
    "title": "朝圣之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p740305253.jpg",
    "summary": "影片导演艾米利奥·艾斯特维兹是本片主演马丁·辛的大儿子，这是这对父子在影视剧里的第七次合作。",
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
      "美国",
      "西班牙"
    ],
    "rating": 8.5,
    "votes": 21639,
    "runtime": "123 min",
    "releaseDate": "2010-11-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1441912",
    "id": "movie-3750104"
  },
  {
    "sourceId": "3074482",
    "title": "死亡医生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166647043.jpg",
    "summary": "头发花白的杰克·科沃基恩（阿尔·帕西诺 Al Pacino 饰）是美国密西根州一名备受争议的医生，在几十年的职业生涯中，他亲眼见过无数人为病痛所折磨，却求生不得，求死不能。杰克坚信医生的职责不仅是要尽最大努力医治病患，更要设身处地为病人着想，满足他们的需求，包括他们对死的渴望。因此，杰克尝试帮对生活失去希望的病人施行安乐死。但是他的做法遭到了普罗大众的一致反对，人们斥责他剥夺病患的生命，更送他“死亡医生”的绰号。在这一过程中，只有姐姐玛格（Brenda Vaccaro 饰）和少数几个朋友默默支持着杰克的工作。",
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
    "rating": 8.5,
    "votes": 21406,
    "runtime": "134 min",
    "releaseDate": "2010-04-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1132623",
    "id": "movie-3074482"
  },
  {
    "sourceId": "1309156",
    "title": "海绵宝宝历险记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "蟹堡王毗邻本店的二号店即将开张了！海绵宝宝满心期待，以为分店经理一职非自己莫属，然而蟹老板却以他不够成熟为理由，将分店交给章鱼哥打理。同时看着蟹堡王做大的痞老板再出毒计，他偷走了海王星国王的王冠，并嫁祸蟹老板，盛怒的海王星要处死蟹老板，但为了拿回王冠，给忠诚的海绵宝宝和派大星六天时间，让他们去无人能够生还的贝壳城取回王冠。而痞老板得逞后偷走了蟹老板的蟹黄堡配方，生意迅速大热，他趁机把能够操纵思想的头盔赠送给顾客们，要通过控制海洋生物称霸世界。另一面，海绵宝宝和派大星踏上了无厘头又凶险万分的寻冠之路，前往传说中独眼巨人栖息的贝壳城……",
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
      "美国"
    ],
    "rating": 8.5,
    "votes": 20596,
    "runtime": "87 min",
    "releaseDate": "2004-11-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0345950",
    "id": "movie-1309156"
  },
  {
    "sourceId": "1293226",
    "title": "双重赔偿",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1944,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1675680930.jpg",
    "summary": "Walter Neff（弗莱德·麦克莫瑞 Fred MacMurray 饰）是一个成功的保险代理人，他在夜里回到办公室，开始在一个录音机上诉说他的故事......",
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
    "rating": 8.5,
    "votes": 19348,
    "runtime": "107 min",
    "releaseDate": "1944-07-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0036775",
    "id": "movie-1293226"
  },
  {
    "sourceId": "24718965",
    "title": "正义联盟：闪点悖论",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "某晚，中央城爆发激战，闪电侠巴里·艾伦（贾斯汀·钱伯斯 Justin Chambers 配音）和超人、蝙蝠侠、戴安娜、绿灯侠等正义联盟的伙伴们与来自25世纪的急速教授及其爪牙镜子大师、陀螺、速冻队长你来我往，最终将这群恶棍绳之于法。分别时刻，急速教授的一番话触动巴里心底最敏感的地方。在此之后，似乎一切都发生变化。他一觉醒来，发现无赖帮们继续为非作歹，自己则意外丧失了变身闪电侠的能力，更令他出乎意料的是本应在童年被盗贼杀害的母亲竟然活着出现在他面前。全世界仿佛也天翻地覆，戴安娜率领的亚马逊人以及亚特兰蒂斯阴谋毁灭世界，布鲁斯死去，他的父亲托马斯·韦恩则以粗暴的蝙蝠侠身份出现。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 17615,
    "runtime": "75 min",
    "releaseDate": "2013-07-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2820466",
    "id": "movie-24718965"
  },
  {
    "sourceId": "1308314",
    "title": "邦尼和琼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511366698.jpg",
    "summary": "邦尼（艾丹•奎因 Aidan Quinn 饰）在汽车修理厂工作。他有一个智障的妹妹琼（玛丽•斯图尔特•马斯特森 Mary Stuart Masterson 饰）令他非常操心。为了照顾妹妹，邦尼一直单身，因为他不想把琼送到专门的疗养院。某一天，邦尼和琼遇到了一个不速之客——邦尼朋友的远房亲戚萨姆（约翰尼•德普 Johnny Depp 饰）。这个萨姆行为古怪，他在酒吧里可以用面包玩出花样，还会模仿经典影片的桥段，逗大家开心。于是，邦尼邀请他做自己妹妹的保姆。在相处中，两个年轻人渐渐建立了一种特殊的感情。同时，邦尼也遇到了心上人路西（朱丽安•摩尔 Julianne Moore 饰），但是对妹妹的责任感让他对这段恋情有所忌惮。或许是出于对妹妹的爱，他拒绝萨姆的请求，结果萨姆带着琼私奔了。但是，因为改变环境，琼开始发疯，她被强制送进了医院……",
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
    "rating": 8.5,
    "votes": 17172,
    "runtime": "98 min",
    "releaseDate": "1993-04-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0106387",
    "id": "movie-1308314"
  },
  {
    "sourceId": "1421733",
    "title": "伊豆的舞女",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1974,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p939020358.jpg",
    "summary": "本片改编自川端康成著名小说《伊豆的舞女》。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 16887,
    "runtime": "82 min",
    "releaseDate": "1974-12-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0391249",
    "id": "movie-1421733"
  },
  {
    "sourceId": "1307708",
    "title": "马路天使",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1937,
    "coverUrl": "",
    "summary": "1930年代，小云、小红（周璇）姐妹被人骗到上海卖给琴师和妓院老鸨夫妇，小云被迫做了暗娼，小红年纪尚小，又天生有一副好嗓子，便随琴师去茶楼终日卖唱。姐妹两人住在贫民窟，在她们对面，住的分别是报贩老王和吹鼓手陈少平（赵丹）。因为闲来无事时陈少平常同小红对窗玩闹，两人渐生感情。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.5,
    "votes": 15171,
    "runtime": "91 min",
    "releaseDate": "1937-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0183828",
    "id": "movie-1307708"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0926759",
    "id": "movie-3181788"
  },
  {
    "sourceId": "10756537",
    "title": "杀死比尔整个血腥事件",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "新娘（乌玛·瑟曼 Uma Thurman 饰）曾是暗杀组织中的一名成员，也是组织首脑比尔（大卫·卡拉丁 David Carradine 饰）的情人，金盆洗手后的她结识了一个单纯的小伙子并准备忘掉过去与之结婚。没想到，婚礼当天比尔突然出现，并带领手下大开杀戒，霎时间，圣洁的教堂变成人间地狱。新娘头部中弹昏迷4年，醒来后脑中首先想起的便是昏迷眼前的几张残酷的面孔，“黑曼巴”、“蝮蛇”、“百步蛇”、“加州山蛇”和比尔，他们是曾经的同僚和爱人，是如今的敌人。满腔怒火的新娘要一一的找到她们，不问是非对错，赶尽杀绝。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 14059,
    "runtime": "230 min",
    "releaseDate": "2011-03-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6019206",
    "id": "movie-10756537"
  },
  {
    "sourceId": "1945253",
    "title": "自由作家",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1009650327.jpg",
    "summary": "爱林（希拉里·斯万克 Hilary Swank饰）从事的第一份教育工作，就是在威尔逊学校一个糟糕透顶的班级里担任老师。这里有着给老师们带来噩梦的学生：他们虚度光阴，消磨时辰，把学校当成18岁之前的游乐场；更混乱的是，学生们来自社会里的不同种族和各类底层阶级，分帮结派互相斗殴。",
    "genres": [
      "Drama",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.5,
    "votes": 13748,
    "runtime": "123 min",
    "releaseDate": "2007-01-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0463998",
    "id": "movie-1945253"
  },
  {
    "sourceId": "1308191",
    "title": "二手狮王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1626609748.jpg",
    "summary": "暑假刚刚开始，14岁的男孩沃尔特（海利·乔·奥斯蒙 Haley Joel Osment 饰）就在百般的不情愿中被母亲玫（凯拉·塞吉维克 Kyra Sedgwick 饰）打发到了位于乡下的两个伯父家，他们分别是贾斯（迈克尔·凯恩 Michael Caine 饰）和哈勃（罗伯特·杜瓦尔 Robert Duvall 饰）。",
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
      "美国"
    ],
    "rating": 8.5,
    "votes": 13610,
    "runtime": "111 min",
    "releaseDate": "2003-09-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0327137",
    "id": "movie-1308191"
  },
  {
    "sourceId": "2263102",
    "title": "转转",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1111394339.jpg",
    "summary": "大学生竹村文哉（小田切让 饰）真可谓霉运当头，他自幼被父母抛弃，养父则被投入监狱，大学念了八年始终无法毕业，在外更债台高筑，欠下84万元债务。因迟迟无法还钱，他被讨债人福原爱一郎（三浦友和 饰）狠狠修理了一番。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 13424,
    "runtime": "101 min",
    "releaseDate": "2007-11-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1098226",
    "id": "movie-2263102"
  },
  {
    "sourceId": "1294827",
    "title": "蜘蛛巢城",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1957,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p647422117.jpg",
    "summary": "一串悲凉的歌声诉说着蜘蛛城的历史预言。战国时期，处于密林围抱的蜘蛛城，地形复杂，敌军攻来此地，必然迷路，因此城主稳坐城楼，指挥若定，四面排出大将御敌，可保此城固若金汤。大将鹫津武时（三船敏郎 Toshiro Mifune 饰）和副将三木因为平叛得力，准备回城领赏。途中，二人阴错阳差走入了密林深处，偶遇一白发老妪弹琴吟唱。他们觉得此事蹊跷，怀疑是敌方故布疑阵，因此上前以武力逼其就范。但此人却预言鹫津将夺城主之位，三木之子也将继承大统，正当两人将信将疑之时，此人化作一道白光销声匿迹。此后，回到城中，鹫津做了北城城主，但念及预言，心有不甘，于是在妻子浅茅的怂恿下，弑君，自立为蜘蛛巢城城主，然而这才只是预言的开始……",
    "genres": [
      "Drama",
      "Thriller",
      "War",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "战争",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 12621,
    "runtime": "110 min",
    "releaseDate": "1957-01-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0050613",
    "id": "movie-1294827"
  },
  {
    "sourceId": "1389949",
    "title": "日瓦戈医生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1965,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2201838179.jpg",
    "summary": "幼年丧母的日瓦戈（Omar Sharif 饰）被过继给母亲的朋友，自此与继母一家的小女儿冬妮娅一同成长，并顺利修完医学专业，成为了一名优秀的医生。在另一条平行的生命线上，出生于裁缝之家的拉娜（Julie Christie 饰）正是十七岁的金色年华，母亲的情人维克多不时骚扰她，热衷于工人革命的未婚夫帕夏更让拉娜日日为其担忧。在工人运动风起云涌的日子里，日瓦戈目睹了当局对工人的残酷镇压，拉娜则因帕夏被卷入工人运动而遭到维克多的玷污，由于维克多的关系，日瓦戈与拉娜的人生终于汇合，在不久后混乱的一战中，他们终于不顾各自的伴侣陷入了热恋……不久布尔什维克掌握政权，返回家乡与冬妮娅团聚的日瓦戈发现生活却每况愈下，以至他们不得不远赴乡村谋生，岂料在遥远的北方村落，日瓦戈再次与拉娜相遇……",
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
      "美国",
      "意大利",
      "英国"
    ],
    "rating": 8.5,
    "votes": 12613,
    "runtime": "197 min",
    "releaseDate": "1965-12-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0059113",
    "id": "movie-1389949"
  },
  {
    "sourceId": "1306490",
    "title": "侠女",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1970,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249959791.jpg",
    "summary": "没落书生顾省斋（石隽 饰）在小镇经营字画铺“代写书信春联”过活，奉养家中老母，偶然结识了家附近废屯堡新搬来的杨之云（徐枫 饰），与其暗生情愫。恰逢东厂人士欧阳年（田鹏 饰）前来打探，其与附近算命瞎子（白鹰 饰）动手，被顾生与其母遇见，遂将受伤的算命瞎子就近带到杨之云处， 从而得知他们的真正身份——因弹劾宦官魏忠贤而被杖毙的左副都御史杨涟之女杨慧贞；保卫忠良之后的石门樵将军。因二人都被朝廷通缉，东厂追杀，顾生就此在屯堡设下重重计谋，又得高僧慧圆（乔宏 饰）帮助，以期摆脱东厂追兵，逃出生天。",
    "genres": [
      "Drama",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国台湾",
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 12049,
    "runtime": "179 min",
    "releaseDate": "1970-07-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0064451",
    "id": "movie-1306490"
  },
  {
    "sourceId": "1299103",
    "title": "冬冬的假期",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2347250205.jpg",
    "summary": "因为妈妈生病在床，台北某所小学毕业生冬冬（王启光）携带妹妹婷婷（李淑桢）来到乡下外公家度暑假，在和当地小朋友共度快乐时光的同时，也逐渐见识到成人世界的各色脸孔。",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.5,
    "votes": 11617,
    "runtime": "93 min",
    "releaseDate": "1984-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0087164",
    "id": "movie-1299103"
  },
  {
    "sourceId": "1294699",
    "title": "午夜狂奔",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1483943303.jpg",
    "summary": "赏金猎人杰克•沃尔什（罗伯特•德尼罗 Robert De Niro 饰）为十万美元决定去纽约搜捕芝加哥黑帮头子吉米•瑟拉诺（丹尼斯•法里纳 Dennis Farina 饰）的会计乔纳森•马杜克斯（查尔斯•格罗丁 Charles Grodin 饰）。乔纳森贪污了吉米一千五百万美元，并将大部分钱捐给了慈善机构。杰克本打算带乔纳森乘飞机于周五午夜前抵达洛杉矶，但乔纳森患有飞行恐惧症，二人只好转乘火车。于此同时，FBI探员阿朗佐•莫斯利（亚菲特•卡托 Yaphet Kotto 饰）、吉米的黑帮手下及吉米的竞争对手，赏金猎人马文（约翰•阿什顿 John Ashton 饰）都在追踪二人。杰克与乔纳森险况横出爆笑风趣的旅程究竟能否顺利完成？",
    "genres": [
      "Comedy",
      "Action",
      "Thriller",
      "Crime",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "惊悚",
      "犯罪",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.5,
    "votes": 11560,
    "runtime": "126 min",
    "releaseDate": "1988-07-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0095631",
    "id": "movie-1294699"
  },
  {
    "sourceId": "27030639",
    "title": "啊，荒野 后篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "菅田将暉×ヤン・イクチュンW主演作『あゝ、荒野』が、10月7日（土）と10月21日（土）に、前後篇2部作連続で公開されることが決定。あわせてイメージビジュアルが公開された。本作は、1960年代後半、激動の時代において、演劇、映画、文学とマルチに活躍した寺山修司が、唯一遺した長編小説を実写化した青春ストーリー。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.5,
    "votes": 11473,
    "runtime": "147 min",
    "releaseDate": "2017-10-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6835806",
    "id": "movie-27030639"
  },
  {
    "sourceId": "1304758",
    "title": "细路祥",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1889086570.jpg",
    "summary": "细路祥（姚月明 Yuet-Ming Yiu  饰）6岁了，他有一个嗜酒的父亲，一个好赌的母亲，一个深居简出的奶奶，还有一个被妈妈赶出了家门、从未见过的哥哥。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 11108,
    "runtime": "101 min",
    "releaseDate": "1999-12-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0234116",
    "id": "movie-1304758"
  },
  {
    "sourceId": "1303823",
    "title": "癫佬正传",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2329847890.jpg",
    "summary": "女记者（叶德娴 饰）受托跟踪采访一个忠实于精神病患者救助事业的社会工作者（冯淬帆 饰），二十多年来他一直与街头流浪汉打交道，旨在引导他们走向康复，但他的行为得不到人们的响应。女记者亲眼目睹了他对垃圾佬（周润发 饰）、终日游荡在菜市场的癫仔（梁朝伟 饰）与康复的患者（秦沛 饰）的关怀 与他们辛酸的故事。康复患者其实有间歇性发作精神病，受到生活中重重压迫后，想念儿子的他持刀闯入幼儿园酿成血案......",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.5,
    "votes": 10557,
    "runtime": "92 min",
    "releaseDate": "1986-06-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0090940",
    "id": "movie-1303823"
  },
  {
    "sourceId": "26683290",
    "title": "你的名字。",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶（上白石萌音 配音）。校园和家庭的原因本就让她充满烦恼，而近一段时间发生的奇怪事件，又让三叶摸不清头脑。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。那里有陌生的同学和朋友，有亲切的前辈和繁华的街道，一切都是如此诱人而真实。另一方面，住在东京的高中男孩立花泷（神木隆之介 配音）则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。许是受那颗神秘彗星的影响，立花和三叶在梦中交换了身份。他们以他者的角度体验着对方的人生，这期间有愤怒、有欢笑也有暖心。只是两人并不知道，身份交换的背后隐藏着重大而锥心的秘密……",
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
    "rating": 8.4,
    "votes": 775533,
    "runtime": "106 min",
    "releaseDate": "2016-12-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5311514",
    "id": "movie-26683290"
  },
  {
    "sourceId": "25986180",
    "title": "釜山行",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2016,
    "coverUrl": "",
    "summary": "证券公司基金管理人石宇（孔侑 饰）光鲜精干，却也是个重利轻义之徒。妻子为此与之决裂，女儿秀安（金秀安 饰）则对如此自私的父亲越来越失望，决定前往釜山和母亲生活。在秀安生日这天，石宇抽出时间陪伴女儿登上开往釜山的特快列车。而与此同时，城市四处出现了极为可疑的暴动事件。政府极力洗白无法掩盖丧尸肆虐的事实，即便懵然无知的列车乘客也因为不速之客的到来而堕入恐慌绝望的地狱中。开车的刹那，一名感染者冲入车厢，而她很快尸变并对目光所及之处的健康人展开血腥屠杀。未过多久，丧尸便呈几何数爆发性地增长。石宇被迫和幸存者的乘客们在逼仄的空间中奋力求生。",
    "genres": [
      "Action",
      "Thriller",
      "Disaster"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "灾难"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.4,
    "votes": 579686,
    "runtime": "118 min",
    "releaseDate": "2016-05-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5700672",
    "id": "movie-25986180"
  },
  {
    "sourceId": "3075287",
    "title": "源代码",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "在阿富汗执行任务的美国空军飞行员科特史蒂文斯上尉（杰克·吉伦哈尔 Jake Gyllenhaal 饰）突然惊醒，发现自己在一辆高速行驶的列车上，而他的身边坐着一个素不相识的女子克里斯蒂安（米歇尔·莫娜汉 Michelle Monaghan 饰）正在与自己讲话。科尔不知自己为什么会在这辆车上，而且他发现自己居然是以另一个人的身份存在，正当他迷惑不解的时候，列车上忽然发生爆炸……",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 8.4,
    "votes": 525750,
    "runtime": "93 min",
    "releaseDate": "2011-08-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0945513",
    "id": "movie-3075287"
  },
  {
    "sourceId": "3011051",
    "title": "恐怖游轮",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "",
    "summary": "单亲母亲杰西（梅利莎·乔治 饰）和一帮朋友乘游艇出海游玩，但她总有一种有不好的事情发生的感觉。不久，他们便在海上遭遇一场强烈的风暴。游艇翻船，众人落海，几经挣扎他们好不容易爬到游艇残骸上来。正当他们无计可施之时，一艘巨大的游轮向众人缓缓驶来。众人欣喜过望，未加思索便登上这艘名为“艾俄洛斯”的游轮，结果发现这竟是一艘1930年便告失踪的神秘之船，而船上更是空无一人。",
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
      "英国",
      "澳大利亚"
    ],
    "rating": 8.4,
    "votes": 466665,
    "runtime": "99 min",
    "releaseDate": "2009-10-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1187064",
    "id": "movie-3011051"
  },
  {
    "sourceId": "25798222",
    "title": "亲爱的",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "田文军（黄渤 饰）和鲁晓娟（郝蕾 饰）曾是一对恩爱的夫妻，然而，两人之间的感情却被时间和争吵消耗殆尽，最终，他们选择了离婚。如今，联系着两人的唯一枢纽，就是可爱的儿子田鹏。然而，某一天，这唯一的纽带也断裂了，田鹏于一次外出玩耍时无故失踪，绝望和崩溃之中，田文军与鲁晓娟踏 上了漫漫寻子之路，并在途中结识了许多和他们一样无助的父亲和母亲们。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 345033,
    "runtime": "130 min",
    "releaseDate": "2014-09-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3752930",
    "id": "movie-25798222"
  },
  {
    "sourceId": "1959877",
    "title": "悬崖上的金鱼姬",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "",
    "summary": "金鱼姬是一条活泼好动的小鱼，一次偶然的机会，它在涨潮时被冲进了玻璃瓶中无法脱身。此时，刚好来海边度假的男孩宗介路过，帮它解困，从此人鱼相识。宗介把金鱼抱回家里喂养，一起玩耍，感情甚笃。由于海员父亲终日出航，宗介只得跟母亲相依为命，这让他的性格孤僻自闭，甚至对长辈也不理不睬。但是，遇到金鱼姬后，宗介逐渐改变了对生活的冷漠态度，这也让他慢慢修复了性格中的缺陷。一次意外的海啸中，宗介撞伤了身体，金鱼姬沾染到了人类的血，飘回了大海之中。原来海洋中还有另外一个世界，那里有个操控水文环境的古怪男子藤本，因为发现了人类污染环境的丑陋，所以自造了另一个水中世界。他发现金鱼姬沾染了人气，正准备用魔法将它打回原形，却事与愿违……",
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
    "rating": 8.4,
    "votes": 265528,
    "runtime": "101 min",
    "releaseDate": "2008-07-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0876563",
    "id": "movie-1959877"
  },
  {
    "sourceId": "1793491",
    "title": "美食总动员",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "",
    "summary": "小老鼠雷米在嗅觉方面有着无与伦比的天赋，不想过与垃圾堆为伴的生活，心怀成为五星大厨的梦想。",
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
      "美国"
    ],
    "rating": 8.4,
    "votes": 235489,
    "runtime": "111 min",
    "releaseDate": "2007-10-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0382932",
    "id": "movie-1793491"
  },
  {
    "sourceId": "1299288",
    "title": "胭脂扣",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2205476838.jpg",
    "summary": "报社记者袁永定（万梓良 饰）遇到了一位前来登寻人广告的女子如花（梅艳芳 饰），无意中才发现了该名冷艳的女子原是鬼魂，早在50年前，她是一名红牌妓女，结识了一名纨绔子弟十二少陈振邦（张国荣 饰）。如花深深爱上了这名多情的公子，两人已到了谈婚论嫁的地步，由于身份悬殊，遭到了十二少家人的极力反对。无奈之下，他们以胭脂扣定情，一起吞鸦片殉情。如花未能在地府看到自己的爱人，便到阳间寻找。",
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
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 182080,
    "runtime": "96 min",
    "releaseDate": "1987-12-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093258",
    "id": "movie-1299288"
  },
  {
    "sourceId": "25787888",
    "title": "八恶人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "寒冷的怀俄明州山谷中，一辆马车载着赏金猎人“绞刑者”约翰·鲁斯（库尔特·拉塞尔 Kurt Russell 饰）及其价值一万美元的猎物黛西·多摩格（詹妮弗·杰森·李 Jennifer Jason Leigh 饰）踏雪而行。途中，黑人赏金猎人马奎斯·沃伦少校（塞缪尔·杰克逊 Samuel L. Jackson 饰）和新人警长克里斯·马尼克斯（沃尔顿·戈金斯 Walton Goggins 饰）相继登上马车，红石镇是他们共同的目标。由于风雪太大，马车停在了米妮男装店，然而熟悉的店主人不知去向，却另有四名不速之客百无聊赖地待在店里。约翰时刻担心他人抢走猎物，马奎斯警惕地扫视面前的陌生人们，多嘴多舌的克里斯不时为紧张的气氛中加油添醋，黛西则似乎等待更大的风暴到来。",
    "genres": [
      "Drama",
      "Crime",
      "Western"
    ],
    "originalGenres": [
      "剧情",
      "犯罪",
      "西部"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 145546,
    "runtime": "168 min",
    "releaseDate": "2015-12-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3460252",
    "id": "movie-25787888"
  },
  {
    "sourceId": "10535568",
    "title": "阿黛尔的生活",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "",
    "summary": "故事主角是15岁女孩阿黛尔（阿黛尔·艾克萨勒霍布洛斯 Adèle Exarchopoulos 饰），她有一个帅气的同学男友托马斯（热雷米·拉厄尔特 Jeremie Laheurte 饰），但托马斯并没能走进她的心。她在街头意外遇到一个美丽的蓝发女孩艾玛（蕾雅·赛杜 Léa Seydoux 饰）后，第一次体验到小鹿乱撞般的怦然心动。而当某晚阿黛尔忐忑不安的走进一家同志酒吧，发现艾玛就在那儿等着她呢。女孩们的彼此靠近让阿黛尔的青春期变得复杂起来…...",
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
      "法国",
      "比利时",
      "西班牙",
      "突尼斯"
    ],
    "rating": 8.4,
    "votes": 143590,
    "runtime": "179 min",
    "releaseDate": "2013-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2278871",
    "id": "movie-10535568"
  },
  {
    "sourceId": "3006309",
    "title": "追击者",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2008,
    "coverUrl": "",
    "summary": "深夜的首尔街头，出租车上频频被插上写有电话的应召女郎的卡片。前刑警忠浩（金允石 Yun-seok Kim 饰）手下就有着一批应召女郎，表面粗暴野蛮的他，对姐妹们貌似毫不讲理。最近忠浩手下的姐妹频频发生失踪事件，他认为是有人故意把她们拐卖。暴跳如雷的他猛翻登记簿寻找蛛丝 马迹，最后确定了一个嫌疑电话尾数为4885。正好这个电话这时呼入需要应召女郎。忠浩让美珍（徐英姬 Yeong-hie Seo 饰）前去。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.4,
    "votes": 140042,
    "runtime": "125 min",
    "releaseDate": "2008-02-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1190539",
    "id": "movie-3006309"
  },
  {
    "sourceId": "1292222",
    "title": "出租车司机",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1976,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792510233.jpg",
    "summary": "特拉维斯（罗伯特·德尼罗 Robert De Niro 饰）从越战中退伍回来后一直在纽约以开出租车为生。战争后的他多少有些失落，加上开出租车目睹了纽约夜幕下的种种罪恶，令他变得愤世嫉俗、痛恨社会。在追求总统候选人帕兰坦竞选办公室的秘书贝西失败后，特拉维斯决定去刺杀帕兰坦 以证明自己。",
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
    "rating": 8.4,
    "votes": 128604,
    "runtime": "113 min",
    "releaseDate": "1976-02-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0075314",
    "id": "movie-1292222"
  },
  {
    "sourceId": "1316572",
    "title": "导盲犬小Q",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "",
    "summary": "一只可爱的拉布拉多犬被选去接受导盲犬的培训。为了让它与人类建立感情，它被寄养在一对夫妇的家里，因为身上有一个棕色的胎记，像一只飞翔的海鸥，便给它取名小Q。训练十分艰苦，但小Q还是成为了导盲犬，认识了第一位主人渡边先生，可是渡边先生却怀疑。情况刚有了好转，渡边先生却病倒了，小Q只好回到了训练中心。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 124336,
    "runtime": "100 min",
    "releaseDate": "2004-03-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0400761",
    "id": "movie-1316572"
  },
  {
    "sourceId": "26773744",
    "title": "相爱相亲",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2017,
    "coverUrl": "",
    "summary": "岳惠英（张艾嘉 饰）的母亲去世之后，惠英最大的念想就是将远葬在乡下的父亲的坟迁回城里，和母亲葬在一起，这个念头让她和父亲的原配姥姥（吴彦姝 饰）之间爆发了巨大的矛盾。迁坟的事成为了惠英的心结，亦让她和丈夫孝平（田壮壮 饰）之间的感情产生了裂痕。",
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
      "中国大陆",
      "中国台湾"
    ],
    "rating": 8.4,
    "votes": 121255,
    "runtime": "120 min",
    "releaseDate": "2017-11-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7479718",
    "id": "movie-26773744"
  },
  {
    "sourceId": "1294417",
    "title": "笑傲江湖2：东方不败",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "令狐冲（李连杰饰）在按计划与日月神教的朋友会面后，将和小师妹岳灵珊（李嘉欣饰）等其他华山派师兄弟赴牛背山归隐退出江湖。路途中意外发现练就“葵花宝典”的东方不败（林青霞饰），但令狐冲不认识东方不败，误将对方当成一位美貌女子。后来几次相遇，还一道饮酒吟诗。",
    "genres": [
      "Drama",
      "Romance",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 121122,
    "runtime": "107 min",
    "releaseDate": "1992-06-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103295",
    "id": "movie-1294417"
  },
  {
    "sourceId": "1298759",
    "title": "狗镇",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2003,
    "coverUrl": "",
    "summary": "封闭守旧的美国小镇闯进了一个神秘女子格蕾斯（妮可•基德曼 Nicole Kidman  饰）。她美丽善良，正在逃避歹徒追杀。镇中的作家汤姆力劝村民留下这个女子，让她暂时在镇里避过难关。然而条件就是格蕾丝要干各种农活来偿还。人们同意了，不久后却发现格蕾丝是一个通缉中的逃犯。大家要把格蕾丝赶走，最后答应，如果她更卖力的干活，才可以在这里逗留。",
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
      "丹麦",
      "瑞典",
      "挪威",
      "芬兰",
      "英国",
      "法国",
      "德国",
      "荷兰",
      "意大利"
    ],
    "rating": 8.4,
    "votes": 100971,
    "runtime": "178 min",
    "releaseDate": "2003-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0276919",
    "id": "movie-1298759"
  },
  {
    "sourceId": "7059671",
    "title": "最佳出价",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2013,
    "coverUrl": "",
    "summary": "性情古怪的奥德曼先生（杰弗里·拉什 Geoffrey Rush 饰）是一家顶级艺术品拍卖行的鉴赏拍卖师，在他几十年的职业生涯中几乎从未失手，他最大的爱好就是收藏各种时期的女人肖像画。比利（唐纳德·萨瑟兰 Donald Sutherland 饰）帮助他用低价拍到心仪的画作，而年轻人罗伯特（吉姆·斯特吉斯 Jim Sturgess）则帮助他用技术手段鉴定古董真伪。直到一天，一个神秘的女主顾克莱尔（西尔维娅·侯克斯 Sylvia Hoeks 饰）带着大批的古董遗产走进了他的生活，克莱尔声称患有广场恐惧症因此从不露面，但是这种特殊的交流方式却让奥德曼渐渐着迷，他甚至求助于罗伯特追求女人的方法。终于有一天奥德曼放弃了自己原有的生活，可是一个惊天的阴谋正在悄悄等待着他。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑"
    ],
    "originalRegions": [
      "意大利"
    ],
    "rating": 8.4,
    "votes": 97529,
    "runtime": "131 min",
    "releaseDate": "2013-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1924396",
    "id": "movie-7059671"
  },
  {
    "sourceId": "1306939",
    "title": "推手",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p753043026.jpg",
    "summary": "老朱（郎雄）被儿子晓生（王伯昭）从北京接到美国后，不但没享清福，反因与作家儿媳马莎（Deb Snyder）语言不通、在生活习性上有诸多差异，添出许多新愁（老朱对马莎的世界不好奇，马莎虽对老朱的世界好奇，却并不想作深入的理解，而是在好奇过后深深厌恶）。而在明白儿子已基本被马莎降服后，倔强的老朱一片灰心（竟然在儿子家里尝到寄人篱下的滋味！），愤然离家出走。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国台湾",
      "美国"
    ],
    "rating": 8.4,
    "votes": 90675,
    "runtime": "105 min",
    "releaseDate": "1991-12-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105652",
    "id": "movie-1306939"
  },
  {
    "sourceId": "1291851",
    "title": "小武",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "",
    "summary": "小武（王宏伟）是山西汾阳一个屡教不改的“惯偷”，即使公安部门在搞严打活动，他仍要想方设法下手。但是抛开所谓的“小偷”身份，他是个十分恋旧十分传统的人，亲情、友情在他心中都有沉甸甸的分量。但昔日亲朋好友早将他看作瘟神，惟恐躲避不及。无形之中，小武只能去做边缘人，换回某些满足和安慰。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 8.4,
    "votes": 74871,
    "runtime": "108 min",
    "releaseDate": "1998-02-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0144020",
    "id": "movie-1291851"
  },
  {
    "sourceId": "1295647",
    "title": "超时空接触",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "",
    "summary": "艾莉·爱罗维（茱迪·福斯特饰）自幼就对无线电通讯情有独钟。长大后，她成为一名天文学家，其项目内容为接收外太空信号。她希望能借此找到宇宙其他文明的存在。天才的理想得到的却是投资者的冷眼相看，幸好有神秘人帮助艾莉继续工作。",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "originalGenres": [
      "剧情",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 69083,
    "runtime": "150 min",
    "releaseDate": "1997-07-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118884",
    "id": "movie-1295647"
  },
  {
    "sourceId": "1303907",
    "title": "百变狸猫",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1994,
    "coverUrl": "",
    "summary": "随着人类文明的发展，城市的规模越来越大，与之相对，青山绿水则迅速减少。东京都提出“多摩新市”的概念，大肆向周边的原始森林扩张。祖辈生长在多摩丘陵的狸猫家族受到巨大冲击，随着树木花草的急剧减少，可供它们生存的食物也开始短缺。最终，鹰之森和玲之森的狸猫发生内战，战况激烈。在火玉婆婆的点拨下，两派狸猫握手言和，转而将主要目标对准破坏森林的人类。为了更好地了解对手，火玉婆婆和龟鹤和尚教授族人已被遗忘很久的变化之术。经过一段时间的艰苦修行，狸猫们终于学会了自由变化。在激进派代表权太的领导下，一部分狸猫向建筑工人发起恐怖袭击，造成多人伤亡。它们的行动虽然取得成效，然而却无法阻挡利益熏心的人类的脚步。",
    "genres": [
      "Drama",
      "Comedy",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 68315,
    "runtime": "119 min",
    "releaseDate": "1994-07-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110008",
    "id": "movie-1303907"
  },
  {
    "sourceId": "24397586",
    "title": "小羊肖恩",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2015,
    "coverUrl": "",
    "summary": "厌倦了每天千篇一律的枯燥生活，小羊肖恩决定做些改变。他煽动同伴们参与了他的计划，引开狗狗比泽尔的同时，将农夫催眠。可是他们的快乐假日还没开始，意外突然发生。关着农夫的拖车厢失去控制，一路向市中心冲去。比泽尔命令羊羊们回到农场，自己则惊慌失措地跑去营救农夫。好不容易醒来的农夫根本搞不清发生了什么状况，随后头部遭受撞击失去了记忆。另一边，农场在三只肥猪的祸害下沸反盈天，乱作一团。肖恩、提米、雪利他们都开始怀念一本正经的农夫了。一不做二不休，肖恩背起行囊混上了开往市中心的巴士，他的伙伴们也不打招呼尾随而至。",
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
      "英国",
      "法国"
    ],
    "rating": 8.4,
    "votes": 68116,
    "runtime": "85 min",
    "releaseDate": "2015-07-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2872750",
    "id": "movie-24397586"
  },
  {
    "sourceId": "25859495",
    "title": "思悼",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "18世纪初，朝鲜李氏王朝正值英祖（宋康昊 饰）在位时期。英祖舐犊情深，在长子早逝后，他全部希望寄托在次子李愃（刘亚仁 饰）身上。不仅在他刚出生之际就册封为世子，更为其安排名臣督导功课。然而天不遂人意，世子耽于玩乐，无心学业，英祖一度提拔世子代理国政，可却使这对站在权力顶峰的父子渐行渐远。在一个瓢泼雨夜，世子杖刀闯入王宫。次日，他因意图谋反而遭到英祖的训斥，并被锁入米柜之中。在接下来的八日里，这对形同寇仇的父子各自回忆起过往的种种。",
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
      "韩国"
    ],
    "rating": 8.4,
    "votes": 66157,
    "runtime": "125 min",
    "releaseDate": "2015-09-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4010918",
    "id": "movie-25859495"
  },
  {
    "sourceId": "1300282",
    "title": "异次元骇客",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1999,
    "coverUrl": "",
    "summary": "十三，一个听起来就有些阴冷的数字。在一座大厦的第十三层，科学家道格拉斯•霍尔（克雷戈•比克饰）和汉农•富勒（阿明•缪勒－斯塔尔饰）用电脑模拟出一个逼真的1937年的洛杉矶，他们可以通过电脑进入这个虚拟世界，真实地体验1937年的生活与自己。然而一个夜里，富勒被人杀死，种种线索都表明似乎是霍尔所为。可霍尔却对当天夜里的事情全无记忆。这时一个自称是富勒女儿的女人又神秘出现，可霍尔从未听富勒说过自己有女儿……为了找到凶手明晓真相，霍尔循着富勒留下的线索来到虚拟世界中，他离真相越来越近了……近到窒息……",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "德国",
      "美国"
    ],
    "rating": 8.4,
    "votes": 66121,
    "runtime": "100 min",
    "releaseDate": "1999-05-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0139809",
    "id": "movie-1300282"
  },
  {
    "sourceId": "26794701",
    "title": "孟买酒店",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2018,
    "coverUrl": "",
    "summary": "影片真实再现震惊世界的“印度9·11”孟买恐袭事件，2008年11月，著名的泰姬陵酒店意外遭到恐怖分子入侵，恐怖分子无差别行凶，让整个酒店陷入绝望之境，百余名酒店住客及员工被困，无人得知何时能等来救援，一场与死神的赛跑就此开启…",
    "genres": [
      "Drama",
      "Thriller",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "历史"
    ],
    "originalRegions": [
      "澳大利亚",
      "美国",
      "印度"
    ],
    "rating": 8.4,
    "votes": 65644,
    "runtime": "123 min",
    "releaseDate": "2018-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5461944",
    "id": "movie-26794701"
  },
  {
    "sourceId": "1309071",
    "title": "天国王朝",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p460797308.jpg",
    "summary": "《天国王朝》大部分角色基于历史人物而改编，哥伦比亚大学的Hamid Dabashi教授为该片的首席学术顾问。",
    "genres": [
      "Drama",
      "Action",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史"
    ],
    "originalRegions": [
      "美国",
      "英国",
      "西班牙",
      "德国",
      "摩洛哥"
    ],
    "rating": 8.4,
    "votes": 63453,
    "runtime": "144 min",
    "releaseDate": "2005-05-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0320661",
    "id": "movie-1309071"
  },
  {
    "sourceId": "1292450",
    "title": "暗花",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159683290.jpg",
    "summary": "澳门两大黑帮洪兴帮和义英帮为争夺赌场利益火并数月后决定言和，不想这时江湖上传出洪兴帮老大崩牙华已出五百万高价聘请外来杀手，准备不日刺杀义英帮大哥高佬忠。为保证高佬忠的安全以免天下再次大乱，崩牙华派出手下得力干将也是腐败警察的阿深（梁朝伟）去阻止事情发生。",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 62931,
    "runtime": "81 min",
    "releaseDate": "1998-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0168043",
    "id": "movie-1292450"
  },
  {
    "sourceId": "1301912",
    "title": "秋天的童话",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2038067892.jpg",
    "summary": "留学生李琪（钟楚红 饰）独自一人从香港到纽约读书，满心以为接机的会是自己的男友（陈百强 饰），来到却是一位远方亲戚和一位在唐人街打工的船头尺（周润发 饰）。原来自己的男友已经移情别恋了，令李琪伤心不已，把自己关在房内。船头尺不放心前往询问，闻到煤气味便以为李琪自杀，原来只是煤气泄漏。船头尺鼓励李琪就算一个人也要好好生活读书，李琪得到了他的鼓励及帮助，便开始专心读书和工作。当中船头尺也屡遭不顺，两人互相帮助之余，船头尺也爱上了李琪……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 60231,
    "runtime": "98 min",
    "releaseDate": "1987-07-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093426",
    "id": "movie-1301912"
  },
  {
    "sourceId": "2132220",
    "title": "三毛从军记",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2252295029.jpg",
    "summary": "三毛（贾林 Jia Lin 饰）从来就是银幕上喜剧人物。这次，三毛从军了。抗日战争全面爆发了，无所事事的三毛一心想着为国立功，加入了军队。不料，新兵训练的时候就笑话百出。手榴弹实弹投掷训练时，三毛一不小心就将手榴弹投到了战壕里，搞得全军上下一片乌黑。稀里糊涂的三毛随后参加了一支敢死队，笑话百出的他和队友们竟一股全歼了敌军。",
    "genres": [
      "Drama",
      "Comedy",
      "Children",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "儿童",
      "战争"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.4,
    "votes": 59392,
    "runtime": "90 min",
    "releaseDate": "1992-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5781778",
    "id": "movie-2132220"
  },
  {
    "sourceId": "26346327",
    "title": "养家之人",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2017,
    "coverUrl": "",
    "summary": "塔利班残酷统治下的阿富汗，平民百姓尤其是女性过着水深火热犹如地狱一般的生活。倔强的小女孩帕瓦娜（莎拉·乔德利 Saara Chaudry 配音）随父亲（Ali Rizvi Badshah 配音）外出挣钱养家，不仅目睹了父亲被昔日的学生辱骂羞辱，更和家人目击了父亲遭到非法逮捕的一幕。家中有病弱的母亲、成年的姐姐以及嗷嗷待哺的弟弟，年幼的帕瓦娜只能剪去秀发，伪装成男孩走出家门，踏上生死未卜的养家之路。在此过程中，她遇到了同样扮成男孩的昔日伙伴，也与一名沉默魁梧的塔利班分子成为朋友。当战争的阴影再度逼近时，帕瓦娜想方设法要找到下落不明的父亲，将他带回家中……",
    "genres": [
      "Drama",
      "Animation",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "家庭"
    ],
    "originalRegions": [
      "爱尔兰",
      "加拿大",
      "卢森堡"
    ],
    "rating": 8.4,
    "votes": 58358,
    "runtime": "94 min",
    "releaseDate": "2019-01-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3901826",
    "id": "movie-26346327"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1188996",
    "id": "movie-3169043"
  },
  {
    "sourceId": "19945757",
    "title": "偶滴神啊",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2012,
    "coverUrl": "",
    "summary": "售卖佛像的古董商人坎杰（Paresh Rawal 饰）是个无神论者。他把佛像视为玩具，不明白那些花招百出的宗教仪式，希望把女儿培养成飞行员，把儿子培养成板球球员。古董店寄托着他全部的希望和感情。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.4,
    "votes": 48949,
    "runtime": "125 min",
    "releaseDate": "2012-09-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2283748",
    "id": "movie-19945757"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0485601",
    "id": "movie-3212221"
  },
  {
    "sourceId": "6776051",
    "title": "平常的心",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "1981年，艾滋作为一种前所未见的免疫系统缺陷疾病在纽约出现。由于它集中发生在男同性恋当中，所以在当时又被称为“同志病”。内德（马克·鲁弗洛 Mark Ruffalo 饰）是一个激进的同志作家，当他看着朋友纷纷死去以及政府的不作为时，义愤填膺的他发起了男同健康危机组织， 呼吁政府和社会公众对这场即将爆发的大瘟疫给予重视。半身瘫痪的女医生艾玛（朱莉娅·罗伯茨 Julia Roberts 饰）是少数从一开始就高度警惕艾滋疫情的的医护人员，也是内德重要的异性恋盟友。在运动中内德认识了纽约时报记者菲尼克斯（马修·波莫 Matt Bomer 饰），两人陷入如火如荼的热恋。然而菲尼克斯最终也被确诊感染，悲痛的内德惟有爱人和事业两线作战。健康危机组织的主席布鲁斯（泰勒·克奇 Taylor Kitsch 饰）虽然是内德最好的朋友，然而深柜的他行事风格与好斗的内德截然相反。执行董事汤米（吉姆·帕森斯 Jim Parsons 饰）一直试图平衡两人，却无法消弭越来越大的分歧，一场决裂迫在眉睫。而此刻已是艾滋在美国蔓延的第四个年头......",
    "genres": [
      "Drama",
      "LGBTQ+",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "同性",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 43828,
    "runtime": "133 min",
    "releaseDate": "2014-05-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1684226",
    "id": "movie-6776051"
  },
  {
    "sourceId": "25858604",
    "title": "普罗旺斯的夏天",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2014,
    "coverUrl": "",
    "summary": "居住在法国南部乡村的老人保罗，在一个暑假突然迎来了三个不速之客——来自巴黎的外孙女和外孙。认知的分歧加上与女儿多年的失和让保罗与三个年轻人难以顺利相处。祖孙几个你来我往地过招，外婆不停从中调和。在不知不觉中保罗与外孙们的感情距离拉近了。",
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
      "法国"
    ],
    "rating": 8.4,
    "votes": 42056,
    "runtime": "105 min",
    "releaseDate": "2014-04-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3013588",
    "id": "movie-25858604"
  },
  {
    "sourceId": "1295815",
    "title": "那年夏天，宁静的海",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2153209777.jpg",
    "summary": "聋哑青年茂（真木藏人饰）是名清洁工，他在一个清理垃圾堆时发现了一个被人扔掉的破旧冲浪板，捡去修好后就带着女朋友贵子（大岛弘子饰）到海边练习，贵子也是个聋哑人。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 40045,
    "runtime": "101 min",
    "releaseDate": "1991-10-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103704",
    "id": "movie-1295815"
  },
  {
    "sourceId": "1292850",
    "title": "危情十日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1217959104.jpg",
    "summary": "畅销书作家保罗•谢尔顿（詹姆斯•凯恩 James Caan 饰）带着他的最新作品《米瑟莉》驱车走在回家的路上。途中他遭遇了可怕的暴风雪，轿车发生侧翻事故，保罗的双腿严重受伤，幸好被独居在附近山顶的护士安妮•威尔克斯（凯西•贝茨 Kathy Bates 饰）及时相救。安妮是保罗的头号书迷，在她的悉心照顾下，保罗的伤势日渐好转。但当她获悉喜爱的女主人公在保罗的新书中已经死亡，却难以遏制心中的怒火，通过各种手段向保罗施加报复，逐渐将作家逼向了绝望……",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 38787,
    "runtime": "107 min",
    "releaseDate": "1990-11-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100157",
    "id": "movie-1292850"
  },
  {
    "sourceId": "26754513",
    "title": "人生密密缝",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "友子（柿园玲佳 饰）和母亲过着相依为命的生活，母亲常常徘徊在不同的男人之间，每天都喝到深夜才回来，友子虽然年幼，却早已经习惯了这样的生活。某日，母亲在丢下了生活费后又不知所踪，无奈之下，友子只能找到舅舅政男（桐谷健太 饰），暂时住在他的家里。",
    "genres": [
      "Drama",
      "LGBTQ+",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "同性",
      "家庭"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 37389,
    "runtime": "127 min",
    "releaseDate": "2017-02-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5633706",
    "id": "movie-26754513"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0318462",
    "id": "movie-1309015"
  },
  {
    "sourceId": "26356789",
    "title": "心房客",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事发生在一幢破旧的老式公寓之中，少年查理（朱尔·本切特 Jules Benchetrit 饰）的对门搬来了一位名叫珍妮（伊莎贝尔·于佩尔 Isabelle Huppert 饰）的新邻居，珍妮曾是一名红极一时的女演员，如今已经过气。查理决定帮助珍妮获得一个对珍妮来说十分重要的角色。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.4,
    "votes": 35351,
    "runtime": "100 min",
    "releaseDate": "2015-10-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4357368",
    "id": "movie-26356789"
  },
  {
    "sourceId": "1293155",
    "title": "愤怒的公牛",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1980,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2427118378.jpg",
    "summary": "杰克•拉莫塔（罗伯特•德尼罗 Robert De Niro 饰）出身于纽约的布鲁克林区。自小便进行拳击训练的杰克很快就在拳击界崭露头角，他因在比赛中出拳迅猛，打击对手毫不留情，表现得就像一头公牛，被称为“愤怒的公牛”。",
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
    "rating": 8.4,
    "votes": 35285,
    "runtime": "129 min",
    "releaseDate": "1980-11-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0081398",
    "id": "movie-1293155"
  },
  {
    "sourceId": "1293889",
    "title": "唐人街",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1974,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2290719289.jpg",
    "summary": "1937年的洛山矶唐人街，警员杰克（杰克•尼科尔森 Jack Nicholson 饰）因不满这里的黑暗，辞职当起了私家侦探。这天，一个自称莫拉雷太太的女子请杰克调查丈夫的外遇，杰克欣然接受。杰克发现莫拉雷原来是当地水利总工程师，正在为兴建水坝问题和当地农民争执。随后有人给 了杰克一些证明莫拉雷偷情的照片，隔天早上真正的莫拉雷太太却找上门来要求杰克停止调查莫拉雷。",
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
      "美国"
    ],
    "rating": 8.4,
    "votes": 32937,
    "runtime": "130 min",
    "releaseDate": "1974-06-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0071315",
    "id": "movie-1293889"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0050976",
    "id": "movie-1293234"
  },
  {
    "sourceId": "1299923",
    "title": "喜福会",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1269318004.jpg",
    "summary": "刚刚失去母亲的阿梅（温明娜 饰）参加了一场聚会。聚会上的成员都是母亲在世时的好友及其女儿。阿梅坐在之前母亲的位置陪着阿姨们搓麻将。牌桌上的四人，各色性格，而背后也各有其心酸和奋斗的故事。林多（周采芹 饰）阿姨的精明和强韧让她摆脱童养媳的身份，奋斗到今天 的位置；莺莺（俞飞鸿 饰）阿姨有一段不堪回首的往事，因此希望自己的女儿要勇敢的做自己；安美（卢燕 饰）阿姨受其母亲（邬君梅 饰）的影响，知道要学会在不公平的命运面前发声；而阿梅的母亲（Kieu Chinh 饰）则迫于战乱，和骨肉走失。几位女性均从困苦中走过来，历经人生的磨练，不希望自己的女儿重复自己的悲剧。一出中国女性的故事被娓娓道来。",
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
    "rating": 8.4,
    "votes": 32135,
    "runtime": "139 min",
    "releaseDate": "1993-09-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0107282",
    "id": "movie-1299923"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0058461",
    "id": "movie-1302522"
  },
  {
    "sourceId": "1302235",
    "title": "茜茜公主2",
    "countryCode": "AT",
    "countryName": "Austria",
    "year": 1956,
    "coverUrl": "",
    "summary": "维也纳盛大的皇家婚礼之后，茜茜（罗密·施奈德 Romy Schneider 饰）开始皇后的生活。她慢慢地调整自己以适应奥地利宫廷生活，但她发现与皇太后苏菲（玛达·施耐德 Magda Schneider 饰）相处非常艰难。专横的皇太后恪守着皇室的陈规陋习，并不断地向弗兰兹（卡尔亨兹·伯恩 Karlheinz Böhm 饰）灌输应该怎样遵守皇室法规去经营帝国和家庭。茜茜的女儿出生之后，她和苏菲之间的矛盾进一步激化。苏菲依据皇室的规矩不让茜茜自己抚养女儿，而弗兰兹竟然顺从母意，让茜茜与女儿无法在一起。伤心失望的茜茜只身一人回到巴伐利亚。愧疚弗兰兹立刻追随而至，劝服茜茜和他一起返回奥地利。这时，苏菲也不得不改变主意同意茜茜抚养女儿。之后，茜茜伴随弗兰兹出访多国，在匈牙利她受到了热烈的欢迎，他们在匈牙利人民的欢呼声中加冕为奥匈帝国的国王和皇后。",
    "genres": [
      "Drama",
      "Romance",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史"
    ],
    "originalRegions": [
      "奥地利"
    ],
    "rating": 8.4,
    "votes": 29704,
    "runtime": "107 min",
    "releaseDate": "1956-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0049762",
    "id": "movie-1302235"
  },
  {
    "sourceId": "11527487",
    "title": "弗兰西丝·哈",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "索菲（米凯·萨姆纳 Mickey Sumner 饰）是弗朗西斯（格蕾塔·葛韦格 Greta Gerwig 饰）最要好的朋友兼室友，两人整日里出双入对，关系俨然比情侣要亲密的多。然而某日，索菲忽然告诉弗朗西斯，自己要搬到城中和另一个女孩同住。虽然索菲万般保证两人还是朋友，但弗朗西斯的内心依旧十分失落。",
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
    "rating": 8.4,
    "votes": 29299,
    "runtime": "86 min",
    "releaseDate": "2012-09-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2347569",
    "id": "movie-11527487"
  },
  {
    "sourceId": "1307535",
    "title": "奔腾年代",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p845519371.jpg",
    "summary": "大萧条时期，每个人都要守住一个梦想，以此来度过最黑暗的时光，生活失意的汽车制造商查尔斯•霍华德（杰夫•布里吉斯 Jeff Bridges 饰）也不例外。他买了一匹小个子赛马，名为“海饼干”，并笼络了一批同样有梦想的人，意图进入赛马圈。",
    "genres": [
      "Drama",
      "History",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "运动"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 27810,
    "runtime": "140 min",
    "releaseDate": "2003-07-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0329575",
    "id": "movie-1307535"
  },
  {
    "sourceId": "1353745",
    "title": "精疲力尽",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1960,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2167119775.jpg",
    "summary": "本片和特吕弗的《四百击》同被誉为法国电影新浪潮的开山之作。",
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
      "法国"
    ],
    "rating": 8.4,
    "votes": 27091,
    "runtime": "90 min",
    "releaseDate": "1960-03-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0053472",
    "id": "movie-1353745"
  },
  {
    "sourceId": "1309017",
    "title": "卡特教练",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219988388.jpg",
    "summary": "《卡特教练》又名《铁血教练 》、《放牛班的严冬》，根据高中篮球队教练肯·卡特的真实故事改编而成。",
    "genres": [
      "Drama",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "运动"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.4,
    "votes": 25992,
    "runtime": "136 min",
    "releaseDate": "2005-01-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0393162",
    "id": "movie-1309017"
  },
  {
    "sourceId": "1294991",
    "title": "精武门",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1972,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204678296.jpg",
    "summary": "一代武术宗师、精武门创始人霍元甲突然逝世，霍师傅生前最喜爱的五徒弟陈真（李小龙 饰）匆匆赶回奔丧，在师傅的棺椁前，陈真悲痛欲绝，暂时终止了和小师妹（苗可秀 饰）完婚的计划，并且不相信师傅死于胃病和感冒的结论。日本虹口道场馆主铃木宽在霍师傅头七之日，派人送上写有“东亚病夫 ”的牌匾，并且出言大肆侮辱精武门，被激怒的陈真随后赶到虹口道场，大败众日本武人，并踢碎了租界公园门口“华人与狗不得入内”的招牌。虹口道场马上派人至精武馆报复，陈真为避免连累师门只得暂离精武门。机缘巧合，陈真发现了日本人害死师傅的证据，他怒不可遏，连毙数名凶手，成为日本人的眼中钉，为了保全精武门，陈真选择独立承担，他在租界外国势力的枪口前纵身跃起……",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "惊悚"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.4,
    "votes": 23438,
    "runtime": "102 min",
    "releaseDate": "1972-03-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0068767",
    "id": "movie-1294991"
  },
  {
    "sourceId": "30192401",
    "title": "气球",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2018,
    "coverUrl": "",
    "summary": "1979年冷战高峰期，身在东德的冈特（大卫·克劳斯 David Kross 饰）和彼得（弗莱德里奇·穆克 Friedrich Mücke 饰）为了追求自由，用超过两年的时间筹画了一场“惊天大逃亡”：他们用有限的资源，自制了一个巨大的热气球，并打算用它载着家人逃到西德。不料，就在即将越过边境时，热气球却意外坠毁，引来东德秘密警察铺天盖地的调查。在紧迫的时间和严密的侦查之下，他们拼命打造了新的热气球，而在此同时，秘密警察也逐渐锁定了他们，一场分秒必争的绝命逃亡就此展开…",
    "genres": [
      "Drama",
      "Thriller",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "历史"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.4,
    "votes": 18172,
    "runtime": "125 min",
    "releaseDate": "2018-09-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7125774",
    "id": "movie-30192401"
  },
  {
    "sourceId": "1294958",
    "title": "桂河大桥",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1957,
    "coverUrl": "",
    "summary": "二战期间，日军占领了缅甸边境的一个战俘营。出于战略需要，日军将在缅甸与泰国交界修建一条大桥，同时希望战俘营里战俘出力，但英军战俘代表尼科森上校（亚利克·基尼斯 Alec Guinness 饰）认为这违反日内瓦公约拒不执行。于是尼科森等人被关了禁闭，但是没了尼科森的带领， 战俘们表现消极，而且因日本设计方面的不足，建桥工作陷入了停滞。日军无奈只好放出了尼科森等人，获释后尼科森感到在破坏一切的战争里何不做点建设，于是开始投入到建桥的工作。与此同时，逃出去的美军俘虏希尔兹（威廉•霍尔登 William Holden 饰）接受盟军一个特别任务，就是大桥建成之日将它炸毁。",
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
      "英国",
      "美国"
    ],
    "rating": 8.4,
    "votes": 16474,
    "runtime": "161 min",
    "releaseDate": "1957-10-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0050212",
    "id": "movie-1294958"
  },
  {
    "sourceId": "25822430",
    "title": "炙热",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2015,
    "coverUrl": "",
    "summary": "拉妮、拉荞和碧琪丽是拉贾斯坦乡间的三个好姐妹。拉妮三十出头却守寡多年，她为儿子古拉布的婚事不惜债台高筑，而古拉布则是个败家子，只知每日胡作非为；拉荞婚后一直未能生育，她的酒鬼丈夫常常对她拳脚相加；碧琪丽是流浪舞团的花魁，同时也操持着皮肉生意，老板曾拿她的身体当作摇钱树， 如今却将她冷落。在十胜节的夜晚，饱受折磨的三个人终于下定决心，结伴踏上了寻找乐土的道路。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "印度",
      "美国",
      "英国"
    ],
    "rating": 8.4,
    "votes": 16336,
    "runtime": "116 min",
    "releaseDate": "2015-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3043252",
    "id": "movie-25822430"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0053976",
    "id": "movie-1293156"
  },
  {
    "sourceId": "1298521",
    "title": "正午",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1952,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2228064849.jpg",
    "summary": "小镇执法官威尔·凯恩（加里·库柏 Gary Cooper 饰）在卸任的当天，同未婚妻艾米（Grace Kelly 饰）举行了婚礼，两人预备开始蜜月旅行的当口，小镇迎来了三位不速之客，他们是皮尔斯、科比和本，三人在火车站等候五年前被威尔抓获的恶棍弗兰克·米勒。预感小镇将被卷入一场血腥仇杀的人们纷纷躲避，或者力劝威尔离开，但前任执法官执意留下，并开始在镇上寻找帮手，岂料不得升迁的员警哈维、当年审判弗兰克的法官等人全部与此事撇清了关系，新婚妻子亦不支持威尔的坚守，孤立无援的威尔只得拿起自己的枪战斗……",
    "genres": [
      "Drama",
      "Western"
    ],
    "originalGenres": [
      "剧情",
      "西部"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 14859,
    "runtime": "85 min",
    "releaseDate": "1952-07-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0044706",
    "id": "movie-1298521"
  },
  {
    "sourceId": "1309085",
    "title": "灵魂歌王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2216531651.jpg",
    "summary": "这是一部传记电影。雷•查尔斯（杰米•福克斯 Jamie Foxx 饰）出生在一个贫穷的黑人家庭，因缺乏必要医疗条件，年少的查尔斯就因青光眼丧失了视力。然而，在母亲言传身教下，小查尔斯没有从此自暴自弃，而是很快熟悉了盲文，并通过盲文接触了他人生的第一个乐谱。",
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
      "美国"
    ],
    "rating": 8.4,
    "votes": 14012,
    "runtime": "152 min",
    "releaseDate": "2004-05-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0350258",
    "id": "movie-1309085"
  },
  {
    "sourceId": "26887890",
    "title": "小戏骨：白蛇传",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2016,
    "coverUrl": "",
    "summary": "小戏骨《白蛇传》是以《新白娘子传奇》为蓝本再度创作的《白蛇传》大电影。讲述小牧童从捕蛇人手中救下一条白蛇，白蛇为报救命之恩，经过一千七百年的修炼化为人形，变成美丽女子的白素贞，和青蛇变形的小青来到人间，与外表俊美的许仙，历经磨难，演绎了一场恩恩怨怨、生生死死，如泣如诉的爱情故事。",
    "genres": [
      "Drama",
      "Children",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "儿童",
      "古装"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.4,
    "votes": 13931,
    "runtime": "88 min",
    "releaseDate": "2016-10-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-26887890"
  },
  {
    "sourceId": "1300966",
    "title": "独行杀手",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1967,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2276173501.jpg",
    "summary": "杰夫（阿兰·德龙 Alain Delon 饰）是一名沉默寡言的杀手，他住在一间旅馆里，仅与一只鸟为伴。独来独往的他接到委托暗杀俱乐部的老板，尽管行动天衣无缝，但警察还是扣押了他。钢琴女马蕾莉（凯茜·罗齐尔 Cathy Rosier 饰）认出了杰夫就是当天的可疑男子，但她却选择了包庇杰夫，这使杰夫心生疑虑。杰夫找到中间人结算工钱，没想到中间人开枪打伤了他。逃过一劫的杰夫暗中查明了雇主的身份，找到并且杀死了他，但同时，他发现，当初袒护他的马蕾莉，居然是雇主的情人。心情复杂的杰夫举着手枪来到俱乐部质问马蕾莉，却被早已埋伏在此的警察乱枪打死，事后，警察们发现，杰夫的手枪中并没有子弹，他这一行为的意义也成为了一个永远的秘密。",
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
      "法国",
      "意大利"
    ],
    "rating": 8.4,
    "votes": 13864,
    "runtime": "105 min",
    "releaseDate": "1967-10-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0062229",
    "id": "movie-1300966"
  },
  {
    "sourceId": "1297646",
    "title": "逍遥骑士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1969,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1379548347.jpg",
    "summary": "比利（丹尼斯·霍珀 Dennis Hopper 饰）和怀特（彼得·方达 Peter Fonda 饰）用一次毒品交易的钱骑着他们的机车上路了，他们的目的地，是新奥尔良的狂欢节。在路上，他们经过了离群索居的波西米亚人群落，短暂逗留的数天里目睹了他们自由放浪但也贫穷困苦的生活。在德克萨斯州，他们仅因为行为举止诡异就被警察关进了监狱，在那里，他们遇见了律师汉森（杰克·尼科尔森 Jack Nicholson 饰），汉森帮助他们逃离了牢狱之灾，他们怂恿汉森同他们一起上路。抵挡不住内心的骚动，汉森同意了。三人来到一个保守的小镇，在那里受尽了居民的白眼。不受欢迎的三人只得露宿荒野，夜里，当地的居民乔装袭击了他们，汉森被打死。比利和怀特虽然震惊，但这一切都没能阻止他们前进的脚步。到达目的地的两人并没有感到喜悦，有的只是无尽的空虚，沮丧的两人打道回府，但令人意外的是，一个卡车司机和他的双杆猎枪使得他们的行程截然而止。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.4,
    "votes": 12969,
    "runtime": "95 min",
    "releaseDate": "1969-05-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0064276",
    "id": "movie-1297646"
  },
  {
    "sourceId": "27608785",
    "title": "沉默的教室",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2018,
    "coverUrl": "",
    "summary": "1956年，两位高中生提奥和库特在去西柏林看电影的路上见到了匈牙利十月起义的新闻报道。为了对起义的死者表示悼念，他们和同班同学们决定，一起在课堂上无视老师，突发沉默一分钟。然而这短短的一分钟彻底改变了班上同学的命运，许多人从此被东德安全局视为眼中钉，加以监视和迫害。在 班级被强行解散后，他们却决心在西德重新结集，不过是以作为逃亡者的新身份。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.4,
    "votes": 12415,
    "runtime": "111 min",
    "releaseDate": "2018-03-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6576556",
    "id": "movie-27608785"
  },
  {
    "sourceId": "1294140",
    "title": "秋天的故事",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1998,
    "coverUrl": "",
    "summary": "侯麦《人间四季》的最后一部。马嘉利（碧翠丝·罗曼德 Béatrice Romand 饰）是一名大龄剩女，有一个儿子和一片葡萄园，过着自给自足的生活。伊莎贝拉（玛丽·瑞莱 Marie Rivière 饰）一直担心着马嘉利的终身大事，她不愿她的密友在孤独中度过晚年。伊莎贝拉以马嘉利的名义偷偷在报纸上登了交友广告，没想到来者热拉尔（阿兰·利博 Alain Libolt 饰）正是自己中意的类型，一个善意的举动使得两个好友落到了尴尬的境地。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.4,
    "votes": 11927,
    "runtime": "112 min",
    "releaseDate": "1998-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0137439",
    "id": "movie-1294140"
  },
  {
    "sourceId": "1303364",
    "title": "资产阶级的审慎魅力",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1972,
    "coverUrl": "",
    "summary": "剧情简介：",
    "genres": [
      "Drama",
      "Comedy",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "奇幻"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.4,
    "votes": 11852,
    "runtime": "102 min",
    "releaseDate": "1972-09-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0068361",
    "id": "movie-1303364"
  },
  {
    "sourceId": "25766495",
    "title": "唐顿庄园：2013圣诞特别篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2013,
    "coverUrl": "",
    "summary": "伯爵一家前往伦敦出席表小姐Rose MacClare的社交季舞会。",
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
      "英国"
    ],
    "rating": 8.4,
    "votes": 11325,
    "runtime": "92 min",
    "releaseDate": "2013-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2819840",
    "id": "movie-25766495"
  },
  {
    "sourceId": "1303083",
    "title": "怪谈",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1964,
    "coverUrl": "",
    "summary": "本片分为四个故事：《黑发》居住在京都的武士（三國連太郎 饰）厌倦了贫苦的生活，他抛弃妻子（新珠三千代 饰），与一个贵族小姐（渡辺美佐子 饰）结婚。然而现任妻子的冷酷让武士怀念起前妻的温柔贤淑，他再次与前妻相遇，结果却出人意料；《雪女》狂风暴雪的一日，青年（仲代達矢 饰）在山上邂逅美丽的雪女（岸恵子 饰）。雪女爱慕青年，饶他不死，但青年不得将这次相遇告知外人；《无耳芳一的故事》盲僧芳一（中村賀津雄 饰）的琵琶弹唱连鬼魂也分外欣赏，但经常与鬼接触势必折损阳寿，寺中的长老决定拯救芳一；《茶杯中》武士关内（中村翫右衛門 饰）喝茶时发现茶碗有一个陌生人的面孔，他打破茶碗，却引来了一个不速之客。",
    "genres": [
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 11287,
    "runtime": "183 min",
    "releaseDate": "1964-12-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0058279",
    "id": "movie-1303083"
  },
  {
    "sourceId": "5308201",
    "title": "剑风传奇 黄金时代篇1：霸王之卵",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2012,
    "coverUrl": "",
    "summary": "百年战争，世事颠倒，人心糜烂，贪欲横行。各国之间兼并攻伐，血流成河。名叫格斯的男子（岩永洋昭 配音）凭藉一己之力在佣兵中打出名号，也引起另一个强大男人的观注。不久，他遭遇了令人闻风丧胆的佣兵部队“鹰之团”及其具有超凡魅力和实力的领导者统治者格里菲斯（樱井孝宏 配音）。格斯在挑战格里菲斯的战斗中败北，此后加入鹰之团，成为其中最为骁勇的战将。在连番激烈的战斗中，他与战友建立起坚不可摧的友情，更得到格里菲斯的赏识，后者甚至不顾自己的安全拯救被恶魔佐德折磨的格斯。但随着鹰之团成为米特兰王国的正规军，以及格里菲斯被封为贵族，淳朴的战友之情开始蒙上阴谋的鬼影……",
    "genres": [
      "Drama",
      "Action",
      "Animation",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "动画",
      "战争"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.4,
    "votes": 11045,
    "runtime": "77 min",
    "releaseDate": "2012-02-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2210479",
    "id": "movie-5308201"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0056736",
    "id": "movie-1293105"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0803061",
    "id": "movie-3431802"
  },
  {
    "sourceId": "1295452",
    "title": "子弹横飞百老汇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p946721980.jpg",
    "summary": "长久以来，剧作家大卫（约翰·库萨克 John Cusack 饰）都过着郁郁不得志的生活，艺术家特有的清高让他对如今腐败混乱的话剧界充满了失望之情。为了讨好情妇奥利芙（詹妮弗·提莉 Jennifer Tilly 饰），黑帮大佬看中了名不见经传的大卫的剧本想要投资，作为前提条件 ，大卫必须让奥利芙饰演主角。虽然奥利芙唠叨的个性和蹩脚的演技让大卫深感抓狂，但在利益面前，他痛苦的屈服了。就这样，一个奇怪的剧组诞生了。",
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
    "rating": 8.4,
    "votes": 10606,
    "runtime": "98 min",
    "releaseDate": "1994-09-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0109348",
    "id": "movie-1295452"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1859438",
    "id": "movie-4739952"
  },
  {
    "sourceId": "25921812",
    "title": "驴得水",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2016,
    "coverUrl": "",
    "summary": "一群“品行不端”却怀揣教育梦想的大学教师，从大城市来到偏远乡村开办了一所小学校。学校待遇惨淡、生活艰苦，但老师们都自得其乐，每天嘻嘻哈哈打成一片。然而教育部特派员要来突击检查的消息打破了安宁，因为学校有一位“驴得水老师”隐藏着不可告人的秘密。就在所有人都担心丑事即将败露的时候，一个神奇天才的出现拯救了大家，然而谁能料到真正的麻烦才刚刚开始……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 513535,
    "runtime": "111 min",
    "releaseDate": "2016-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6167014",
    "id": "movie-25921812"
  },
  {
    "sourceId": "30334073",
    "title": "调音师",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2018,
    "coverUrl": "",
    "summary": "双目失明的钢琴家阿卡什（阿尤斯曼·库拉纳 Ayushmann Khurrana 饰）为了参加国际大赛，平日里通过私人授课赚取经费。事实上他的眼睛完全正常，只不过希望通过这种方式感受不同的生活。因为一场意外，阿卡什结识了美丽的姑娘苏菲（拉迪卡·艾普特 Radhika Apte 饰）。凭借出色的演奏技巧，阿卡什在苏菲父亲经营的西餐馆谋得兼职。他的演奏不仅令食客们倾倒，更虏获了苏菲的心。某天，阿卡什接受过气的影星普拉默（安尔·德霍万 Anil Dhawan 饰）的邀请，登门为对方的妻子西米（塔布 Tabu 饰）演奏庆生，谁知却亲眼目睹了倒在血泊中的普拉默的尸体。惊慌失措的阿卡什假装镇定，虽然暂时骗过了西米及其情夫，但是他的秘密还是慢慢被人戳穿……",
    "genres": [
      "Comedy",
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 8.3,
    "votes": 487318,
    "runtime": "139 min",
    "releaseDate": "2019-04-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8108198",
    "id": "movie-30334073"
  },
  {
    "sourceId": "2043546",
    "title": "秒速5厘米",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "",
    "summary": "如果，樱花掉落的速度是每秒5厘米，那么两颗心需要多久才能靠近？",
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
    "rating": 8.3,
    "votes": 419194,
    "runtime": "63 min",
    "releaseDate": "2007-03-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0983213",
    "id": "movie-2043546"
  },
  {
    "sourceId": "3068206",
    "title": "碟中谍4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1382432968.jpg",
    "summary": "特工汉纳威（乔什·哈洛威 Josh Holloway 饰）执行任务时遇害，核机密文件被女杀手莫伦（蕾雅·赛杜 Léa Seydoux 饰）截获。为了找回文件，特工班吉（西蒙·佩吉 Simon Pegg 饰）和特工简（宝拉·巴顿 Paula Patton 饰）从俄罗斯监狱救出了伊桑·亨特（汤姆·克鲁斯 Tom Cruise 饰）。他们接受的幽灵协议任务便是从克林姆林宫盗取核军事密码。然而，当他们接近目标时，却发现被恐怖分子亨德里克斯（迈克尔·恩奎斯特 Michael Nyqvist 饰）捷足先登，抢走了核军事密码。在爆炸中，亨特受困医院，遭俄特工的追捕，幸好他身手矫捷，才化险为夷。不过，亨特的上司也在混乱中丧生，只剩下其助手布兰德（杰瑞米·雷纳 Jeremy Renner 饰）与亨特死里逃生，加上班吉和简，逼上绝境的四人开始了最后一搏，从迪拜到印度，他们出生入死，与恐怖分子斗智斗勇……",
    "genres": [
      "Action",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "阿联酋",
      "捷克",
      "俄罗斯",
      "印度",
      "加拿大"
    ],
    "rating": 8.3,
    "votes": 320326,
    "runtime": "133 min",
    "releaseDate": "2012-01-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1229238",
    "id": "movie-3068206"
  },
  {
    "sourceId": "10512661",
    "title": "银翼杀手2049",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2017,
    "coverUrl": "",
    "summary": "故事发生在大断电30年后。复制人K（瑞恩·高斯林 Ryan Gosling 饰）是新一代的银翼杀手，在如今的世界里，人类和复制人之间的界限划分的更加明确，复制人从刚一制造出来就被灌输了服务于人类的思想，绝对不被允许产生人类的感情。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "惊悚"
    ],
    "originalRegions": [
      "美国",
      "加拿大",
      "英国"
    ],
    "rating": 8.3,
    "votes": 293366,
    "runtime": "163 min",
    "releaseDate": "2017-10-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1856101",
    "id": "movie-10512661"
  },
  {
    "sourceId": "26647117",
    "title": "暴裂无声",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2017,
    "coverUrl": "",
    "summary": "故事发生在偏僻贫瘠的山村之中。张保民（宋洋 饰）是一名矿工，一天，他被妻子翠霞（谭卓 饰）叫回了家，原来，他们的儿子失踪了。带着儿子的照片，不会说话的张保民踏上了寻子之路，途中，他遇见了大资本家昌万年（姜武 饰）的爪牙，两方人马起了冲突，昌万年骗张保民自己知道他儿子的下落，实际上，他隐藏了一个黑暗的秘密。",
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
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 292877,
    "runtime": "120 min",
    "releaseDate": "2018-04-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6389316",
    "id": "movie-26647117"
  },
  {
    "sourceId": "1291586",
    "title": "海底总动员",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "",
    "summary": "在澳洲大堡礁的深海中，小丑鱼爸爸玛林和儿子尼莫简单幸福的生活着，可是爸爸做事常常畏首畏尾，是个胆小鬼，尼莫觉得爸爸很不勇敢，甚至有点看不起自己的爸爸。小尼莫却天不怕地不怕，跟同伴们去水面玩耍的时候，竟然被渔网捞了起来，辗转被卖到一家牙医诊所。玛林对儿子的生死未卜感到十分的担忧，就算平时不能大胆行事，为了儿子也要勇敢豁出去了。可是在路上遇到了很多艰难与恐惧，令他十分胆怯。幸好他遇到了好心的多瑞，一路与他作伴。父子俩都遇到了很多热心的帮助，最终都能重逢，玛林也从此成为儿子以及大家心中的英雄。",
    "genres": [
      "Comedy",
      "Animation",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "澳大利亚"
    ],
    "rating": 8.3,
    "votes": 267049,
    "runtime": "100 min",
    "releaseDate": "2003-07-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0266543",
    "id": "movie-1291586"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1152282",
    "id": "movie-2365260"
  },
  {
    "sourceId": "5977835",
    "title": "桃姐",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "桃姐（叶德娴 饰）是侍候了李家数十年的老佣人，把第二代的少爷罗杰（刘德华 饰）抚养成人。罗杰从事电影制片人，五十多岁了仍然独身，而桃姐也继续照顾罗杰，成为习惯……一日，桃姐如常到街市买菜，回寓所煲汤、做好满桌的饭菜，在等待从内地出差回家的罗杰，桃姐看着窗外的街景打发时间 ，不知不觉间却竟昏迷在地上……桃姐醒来时发现自己身在医院，桃姐是中风了！一边手臂不能活动自如，必须利用物理治疗尽量恢复活动能力。",
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
    "rating": 8.3,
    "votes": 235560,
    "runtime": "118 min",
    "releaseDate": "2012-03-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2008006",
    "id": "movie-5977835"
  },
  {
    "sourceId": "1299327",
    "title": "夜访吸血鬼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "",
    "summary": "18世纪的路易斯安娜州，丧失妻女痛不欲生的庄园主路易（布拉德·皮特 饰）遇上了吸血鬼莱斯塔特（汤姆·克鲁斯 饰），被其施法变成吸血鬼。路易心存人性，不愿意吸血杀人，靠吸食动物的血为生，而莱斯塔特则一心要把路易斯教导成一个真正的吸血同类。",
    "genres": [
      "Drama",
      "Thriller",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 229218,
    "runtime": "123 min",
    "releaseDate": "1994-11-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110148",
    "id": "movie-1299327"
  },
  {
    "sourceId": "24875534",
    "title": "十二公民",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "某高校模拟法庭，正就社会上不久前发生的一起真实案件展开辩论。案件的嫌疑人是某房地产商收养的富二代，其生父是来自河南的务工人员。案发当晚，有人听到富二代和其生父发生激烈争吵，随后生父被人在家中杀害。学生们围绕嫌疑人是否有罪展开激烈辩论，而他们的父亲作为陪审团观摩整个法庭的审判过程。休庭期间，12名陪审员被带到另一个房间展开讨论，他们必须在一个小时内得出结论，而且需要全票通过嫌疑人是否有罪。这些人来自各行各业，有着不同的背景。大家普遍希望尽快敷衍了事，谁知第一轮投票过后，只有8号陪审员（何冰 饰）认为嫌疑人无罪。有的人暴跳如雷、有的人奚落戏谑、有的人摇摆不定、有的则固执己见。这是一场关于良心和道义的鏖战……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 208473,
    "runtime": "106 min",
    "releaseDate": "2015-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3431598",
    "id": "movie-24875534"
  },
  {
    "sourceId": "1777612",
    "title": "阳光小美女",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792394752.jpg",
    "summary": "7岁的奥利芙，戴眼镜，小肚腩，做一夜成名的美梦，坚信自己有朝一日能当选美国小姐。",
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
      "美国"
    ],
    "rating": 8.3,
    "votes": 201047,
    "runtime": "101 min",
    "releaseDate": "2006-08-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0449059",
    "id": "movie-1777612"
  },
  {
    "sourceId": "1950148",
    "title": "赎罪",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p867246302.jpg",
    "summary": "1935年夏天，来自一个宽裕的英国小康家庭的13岁的少女布里奥妮（斯奥里兹•罗南 饰）刚刚开始尝试写作,想象力丰富。一天，她暗中发现仆人的儿子——罗比•特纳（詹姆斯•迈克沃伊 饰）和她姐姐塞西利亚（凯特•奈特莉 饰）之间有暧昧关系，而且发现他给她写了一封充满情色意味的情书。布里奥妮丰富的想象力虚构着各种可怕的事情，浮想联翩。当她的表姐罗拉被强奸后，布里奥妮相当肯定她看到是罗比做的，这次指证使罗比蒙冤入狱，留下伤心欲绝的塞西利亚。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑",
      "战争"
    ],
    "originalRegions": [
      "英国",
      "法国"
    ],
    "rating": 8.3,
    "votes": 200364,
    "runtime": "123 min",
    "releaseDate": "2008-02-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0783233",
    "id": "movie-1950148"
  },
  {
    "sourceId": "26416603",
    "title": "萨利机长",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "影片根据真实事件改编，2009年1月15日，萨利（汤姆·汉克斯 Tom Hanks 饰）在全美航空1549号班担任机长，飞机起飞两分钟后遭到飞鸟攻击，两架发动机全部熄火，萨利决定在哈德逊河上迫降，155人全数生还。但之后的调查显示他做了错误的抉择，认为大可选择返回拉瓜地亚机场。机内到底发生了什么呢？",
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
    "rating": 8.3,
    "votes": 197804,
    "runtime": "96 min",
    "releaseDate": "2016-12-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3263904",
    "id": "movie-26416603"
  },
  {
    "sourceId": "2369845",
    "title": "嫌疑人X的献身",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p698531629.jpg",
    "summary": "天才物理学家汤川学（福山雅治 饰）此次又受内海薰（柴崎幸 饰）所托，调查一件不可思议命案。受害人富樫慎二被发现死在河边，面目指纹尽毁。最大的嫌疑人是他的前妻花冈靖子（松雪泰子 饰），然而靖子却有着完美的不在场证明。一个人能够同一时间出现在不同地方吗？当汤川发现住在靖子隔壁的是当年的大学同学、同为天才的数学家石神哲哉（堤真一  饰）时引起兴趣。",
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
    "rating": 8.3,
    "votes": 162978,
    "runtime": "128 min",
    "releaseDate": "2008-10-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1160629",
    "id": "movie-2369845"
  },
  {
    "sourceId": "24879820",
    "title": "奇怪的她",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2014,
    "coverUrl": "",
    "summary": "经营咖啡店的坏脾气老奶奶吴末顺（罗文熙 饰）自持有一个孝顺的教授儿子（成东日 饰）而处处霸道，除了少年时期的老佣人朴老头（朴仁焕 饰）真心对她好，朋友们都讨厌她，包括她的儿媳。一次儿媳住院，全家除了孙子智河（郑真英 饰）不同意，别人都觉得该送奶奶去老人院。末顺奶奶失落之 时想去照相馆拍张遗照，没想到这一拍竟然变成了年轻的模样。年轻的末顺改名吴斗丽（沈恩敬 饰），开始了新的生活，甚至重拾了年轻时的梦想——当歌手。斗丽特立独行却受到了大家的欢迎，甚至吸引了电视台导演（李真旭 饰）的倾慕，可是她的身份却面临着被揭穿的威胁，该留在20岁享受人生，还是重回正轨面对生活，末顺做出了艰难的抉择。",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "奇幻"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.3,
    "votes": 144452,
    "runtime": "124 min",
    "releaseDate": "2014-01-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3516378",
    "id": "movie-24879820"
  },
  {
    "sourceId": "1300064",
    "title": "家有喜事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p940263436.jpg",
    "summary": "常家大哥常满（黄百鸣 饰）事业有成，可是却嫌弃家中老婆程大嫂（吴君如 饰）是个黄脸婆，不懂打扮。程大嫂每天在家服侍老人痴呆的公婆，深得常骚（张国荣 饰）与常欢（周星驰 饰）的喜爱。娘娘腔常骚与“男人婆”表姑妈梁无双（毛舜筠 饰）是一对死对头，可在两人同时受到感情伤害的时候，萌生爱意。常欢是出名的花花公子，却意外撞坏了脑子，女朋友何里玉（张曼玉 饰）还是愿意留在他的身边。当个人都心有所属时，却要帮大哥想办法挽回与程大嫂的感情。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "家庭"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.3,
    "votes": 138190,
    "runtime": "100 min",
    "releaseDate": "1992-01-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0104553",
    "id": "movie-1300064"
  },
  {
    "sourceId": "1844413",
    "title": "八月迷情",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792528025.jpg",
    "summary": "莱拉（凯丽•拉塞尔 Keri Russell 饰），一个出色的大提琴手；路易斯（乔纳森•莱斯•梅耶斯 Jonathan Rhys Meyers 饰），一名流浪的爱尔兰歌手。一个月色迷离的晚上，两人相遇了。度过难忘的一晚后，莱拉那专横的父亲又强逼她继续踏上音乐会的旅程。路易斯因等不到恋人失望之下离开了；而莱拉发觉爱人走后，独自伤心的等待肚中的孩子出生。岂料几个月后莱拉遭遇了一场车祸，宝宝亦随之夭折。孰料，莱拉的宝宝其实并没有死，而是被她狠心的父亲送到了孤儿院。一晃眼10多年过去了，生活在孤儿院的少年奥古斯特（弗莱迪•海默 Freddie Highmore 饰）坚信自己的父母还在世上，于是踏上了漫漫寻亲路。",
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
      "美国"
    ],
    "rating": 8.3,
    "votes": 134604,
    "runtime": "114 min",
    "releaseDate": "2009-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0426931",
    "id": "movie-1844413"
  },
  {
    "sourceId": "1299603",
    "title": "落水狗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1851340431.jpg",
    "summary": "黑帮老大乔·卡伯特（劳伦斯·蒂尔尼 饰）和他的儿子“好家伙”艾迪（克里斯·佩恩 饰）召集了六名强盗，准备到珠宝店抢劫一批天然钻石。这六个人彼此各不相识，甚至连对方的姓名都无从得知。乔为了保持机密，以颜色作为代号分别给六人起名为白先生(哈维·凯特尔 饰)、橙先生（蒂姆·罗思 饰）、金先生（迈克尔·马德森 饰）、粉先生（史蒂夫·布斯塞米 饰）、棕先生和蓝先生，并规定他们之间不能透露任何私事。",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 134521,
    "runtime": "99 min",
    "releaseDate": "1992-01-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105236",
    "id": "movie-1299603"
  },
  {
    "sourceId": "1297102",
    "title": "天生一对",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1933809793.jpg",
    "summary": "安妮（琳赛·洛翰 Lindsay Lohan 饰）和荷莉（琳赛·露安 Lindsay Lohan 饰）两个小女孩在夏令营中相识。她们相貌惊人地相似，却非常合不来。十分偶然的，她们知道了对方原来是自己的孪生姐妹。",
    "genres": [
      "Comedy",
      "Romance",
      "Family",
      "Children"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "家庭",
      "儿童"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 129393,
    "runtime": "127 min",
    "releaseDate": "1998-07-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120783",
    "id": "movie-1297102"
  },
  {
    "sourceId": "26593587",
    "title": "天才少女",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2017,
    "coverUrl": "",
    "summary": "Chris Evans将参演马克·韦布（超凡蜘蛛侠系列）执导新片《Gifted》。该片讲述美队扮演一名原本波士顿大学助教现在是修船工的Frank Adler在姐姐自杀后领养了外甥女Mary——一位智力过人的天才少女。Mary刚一入学就表现得与众不同，然而舅舅Frank只想让孩子过普通人生活。Mary的外婆得知了少女的天赋，出现在二人的生活里，要将Mary培养成数学天才。于是一场抚养权之争开始了。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 124025,
    "runtime": "101 min",
    "releaseDate": "2017-04-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4481414",
    "id": "movie-26593587"
  },
  {
    "sourceId": "1291842",
    "title": "当哈利遇到莎莉",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2172960925.jpg",
    "summary": "莎莉（梅格·瑞恩 饰）开车载哈利（比利·克里斯托 饰）前往纽约，两人就此相识。途中二人言语相左，不欢而散，并留下经典的问题：“排除‘性’的介入，男人和女人可以成为真正的朋友么？”",
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
    "rating": 8.3,
    "votes": 103174,
    "runtime": "96 min",
    "releaseDate": "1989-07-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0098635",
    "id": "movie-1291842"
  },
  {
    "sourceId": "25761178",
    "title": "百元之恋",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "早已过了而立之年的一子（安藤樱 饰）整天百无聊赖，她根本无心帮助打理自家的料理店，整日玩游戏虐杀小外甥。她的妹妹二三子（早织 饰）离婚后回到娘家，极度看不惯姐姐的作为，为此两姐妹甚至大打出手。自感不被家人所容的一子搬了出去，并在日常光顾的百元超市谋得收银员的职位。这间小店云集着许多怪人，患有忧郁症的店长、话唠猥琐的同事、因盗窃被开除却还时常回来拿临过期食品的老太。在这些人中间，一子的心情愈加苦闷。偶然机缘，她和名不见经传的拳击手狩野（新井浩文 饰）走到一起，无奈他们之间甚至连爱情都谈不上。极度压抑之际一子选择学习拳击，她渴望释放心中不委屈和不满，渴望获得哪怕只有一次的认可。",
    "genres": [
      "Drama",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "运动"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 101042,
    "runtime": "113 min",
    "releaseDate": "2014-12-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4080598",
    "id": "movie-25761178"
  },
  {
    "sourceId": "1293708",
    "title": "她比烟花寂寞",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p696205667.jpg",
    "summary": "希拉莉（瑞切尔•格里菲斯 饰）与积琪琳（艾米丽•沃森 饰）是一对感情深厚的姐妹。姐姐希拉莉很有吹长笛的天分，积琪琳看着姐姐拿到了许多荣耀也不甘落后，经过艰苦练习后，积琪琳的大提琴也有了很大的进步。在一次比赛中，两人分别获得了第一，但希拉莉开始嫉妒妹妹，纵使两人的感情没有受到影响，可是希拉莉的音乐之路开始触礁。",
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
    "rating": 8.3,
    "votes": 98177,
    "runtime": "121 min",
    "releaseDate": "1998-12-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0150915",
    "id": "movie-1293708"
  },
  {
    "sourceId": "25738406",
    "title": "如晴天，似雨天",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "电影《如晴天 似雨天》（Like Sunday, Like Rain）是由Leighton Meester (《绯闻女孩》Queen B)主演的一部文艺片。故事讲述在一个夏天，贫穷女生Eleanor为了生计去给一名12岁的孩子当保姆。Eleanor同时也是一名音乐家，而12岁的 孩子则是音乐神童，相处之下他们在彼此间找到自我....",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 95328,
    "runtime": "104 min",
    "releaseDate": "2014-09-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3104818",
    "id": "movie-25738406"
  },
  {
    "sourceId": "5360889",
    "title": "月升王国",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "1965年，在一个叫新彭赞斯的小岛上，有一队童子军驻扎在艾凡赫营地里。童子军教官华德（爱德华·诺顿 Edward Norton 饰）在一个早上发现学童山姆（杰瑞德·吉尔曼 Jared Gilman 饰）留信出走，于是华德和一众童子军开始寻找山姆，小岛警察夏普（布鲁斯·威利斯 Bruce Willis 饰）也展开了环岛搜寻。原来山姆的出逃是计划已久的，他和“问题”女孩苏西（卡拉·海沃德 Kara Hayward 饰）一起出走，而苏西是岛上一对律师夫妻的女儿，父母视苏西为问题儿童。搜寻过程中，苏西的父亲（比尔·默瑞 Bill Murray 饰）似乎察觉到自己的妻子和警察有染。",
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
    "rating": 8.3,
    "votes": 91309,
    "runtime": "94 min",
    "releaseDate": "2012-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1748122",
    "id": "movie-5360889"
  },
  {
    "sourceId": "1297862",
    "title": "英雄本色2",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159524495.jpg",
    "summary": "第一部中，小马哥（周润发 饰）死在乱枪之下，宋子豪（狄龙 饰）和弟弟宋子杰（张国荣 饰）冰释前嫌，英雄的故事还在继续。",
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
    "rating": 8.3,
    "votes": 88748,
    "runtime": "105 min",
    "releaseDate": "1987-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0094357",
    "id": "movie-1297862"
  },
  {
    "sourceId": "27024959",
    "title": "绝杀慕尼黑",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2017,
    "coverUrl": "",
    "summary": "电影根据体育历史中著名的传奇真实事件改编，讲述了1972年慕尼黑奥运会篮球决赛中，前苏联篮球队打败了保持了36年全胜纪录的美国队的传奇故事。在决赛结束前三秒钟，美国队以一分优势领先。美国队已经开始提前庆祝比赛的胜利了，因为他们相信比赛结果已成定局。然而，一位来自苏联的不知名篮球教练，率领着艰难、困苦、贫穷中的苏联国家队，比赛结果发生逆转，整个篮球历史也发生了改变。",
    "genres": [
      "Drama",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "运动"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 8.3,
    "votes": 74331,
    "runtime": "133 min",
    "releaseDate": "2019-06-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5987402",
    "id": "movie-27024959"
  },
  {
    "sourceId": "1294183",
    "title": "黑洞频率",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p812857342.jpg",
    "summary": "约翰的父亲弗兰克(丹尼斯•奎德 Dennis Quaid 饰)死于30年前一次救火行动中。一次，翻看父亲的遗物时，约翰(詹姆斯•卡维泽 James Caviezel 饰)发现了30年前父亲使用过的一台老式无线电。在随手翻拨频段的时候，他竟然和一名年轻叫弗兰克的男子搭上了线。经过整夜长谈，约翰确定时空发生了错乱，这个弗兰克正是自己30年前的父亲。",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 73909,
    "runtime": "118 min",
    "releaseDate": "2000-04-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0186151",
    "id": "movie-1294183"
  },
  {
    "sourceId": "1298909",
    "title": "魔鬼代言人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1695005982.jpg",
    "summary": "凯文（Keanu Reeves饰）是个保持不败记录的年轻律师，娇妻相伴，事业有为的他宛如生活在天堂一般。受到纽约著名事务所的邀请，他携妻子来到纽约。奢华的生活近在眼前，一切似乎都昭示着明天的坦途与光明。",
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
      "美国",
      "德国"
    ],
    "rating": 8.3,
    "votes": 73627,
    "runtime": "144 min",
    "releaseDate": "1997-10-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118971",
    "id": "movie-1298909"
  },
  {
    "sourceId": "1309078",
    "title": "星球大战前传3：西斯的复仇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "",
    "summary": "克隆战争已经进行了三年，共和国即将胜利，分裂联盟的格非特将军和杜库伯爵（克里斯托弗•李 Christopher Lee 饰）劫持议会首相帕尔帕庭（伊恩·迈克蒂安米德Ian McDiarmid 饰）潜逃，绝地武士欧比-旺•肯诺比（伊万•麦克格雷格 Ewan McGregor 饰）和阿纳金（海登·克里斯滕森 Hayden Christensen 饰）奉长老院命前去营救，阿纳金杀死杜库伯爵救出帕尔帕庭，但格非特将军逃匿。阿纳金梦见妻子阿米达拉（娜塔丽·波特曼 Natalie Portman 饰）将死于难产，困惑中求助于帕尔帕庭，后者趁此机会离间阿纳金与绝地长老院。随着阿纳金向帕尔帕庭的靠拢，一场针对绝地武士与其所捍卫之民主的阴谋逐渐展开。",
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
    "rating": 8.3,
    "votes": 70713,
    "runtime": "140 min",
    "releaseDate": "2005-05-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0121766",
    "id": "movie-1309078"
  },
  {
    "sourceId": "1293422",
    "title": "监狱风云",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2347371309.jpg",
    "summary": "年轻有为的广告设计师卢家耀（梁家辉 饰）在一次阻止不良分子寻衅滋事中失手伤人，被判服刑三年，在狱中，他因个性憨直得罪了黑帮老大，受尽欺辱，老囚犯钟天正（周润发 饰）看不过仗义相助，两人结为患难之交。",
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
    "rating": 8.3,
    "votes": 67122,
    "runtime": "101 min",
    "releaseDate": "1987-11-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093304",
    "id": "movie-1293422"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0386064",
    "id": "movie-1304972"
  },
  {
    "sourceId": "1297151",
    "title": "星球大战3：绝地归来",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1983,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p732934345.jpg",
    "summary": "银河帝国再建威力更大的新“死星”，试图彻底消灭抵抗力量。卢克•天行者（马克•哈米尔 Mark Hamill 饰）派机器人R2-D2和C-3PO前往塔图因星贾霸处协商交换被冷冻的韩•索罗（哈里森•福特饰）未果；后在莉亚公主（卡里•费什尔 Carrie Fisher 饰），猿人丘巴卡（彼得•梅林 Peter Mayhew 饰）和蓝多•卡瑞辛（比利•迪•威廉姆斯 Billy Dee Williams 饰）的帮助下终于营救成功。在尤达师傅处，卢克发现了更多关于自己身世的秘密，也终于决定迎接成为一个绝地武士的终极挑战。卢克回到抵抗组织参与攻打“死星”行动，与韩•索罗，莉亚公主，丘巴卡，机器人R2-D2和C-3PO共同前往森林密布的恩多星破坏“死星”防护罩的能源站，与此同时蓝多•卡瑞辛驾驶千年隼飞船带领各部施展航空打击。没曾想卢克一行人刚踏上恩多星，就遭遇当地部落伊沃克人，莉亚公主也不知所踪……",
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
    "rating": 8.3,
    "votes": 60442,
    "runtime": "131 min",
    "releaseDate": "1983-05-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0086190",
    "id": "movie-1297151"
  },
  {
    "sourceId": "1303376",
    "title": "金枝玉叶",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2167118411.jpg",
    "summary": "著名音乐人顾家明（张国荣 饰）精心栽培了最受欢迎女歌星玫瑰（刘嘉玲 饰）。两人男才女貌，是十分相配的一对。他们的忠实fans林子颖（袁咏仪 饰）误打误撞成为了唱片公司的男新人，众人都没有发现其实林子颖是女扮男装的。子颖生活在偶像的圈子中才发现这对金童玉女正面临感情的考验。子颖的纯真同时吸引住了家明与玫瑰的眼球，分别对子颖产生了爱意。一段复杂的三角关系，引出不少笑料。",
    "genres": [
      "Comedy",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.3,
    "votes": 57970,
    "runtime": "107 min",
    "releaseDate": "1994-07-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0109958",
    "id": "movie-1303376"
  },
  {
    "sourceId": "1301582",
    "title": "苦月亮",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1992,
    "coverUrl": "",
    "summary": "奈杰尔（休•格兰特 Hugh Grant 饰）陷入了七年之痒的婚姻中。他和妻子菲奥纳（克里斯汀•斯科特•托马斯 Kristin Scott Thomas饰）决定乘坐游轮前往印度旅游，尝试改变糟糕的关系。船上，他遇见了瘫痪作家奥斯卡（彼德•考约特 Peter Coyote 饰）和他的美艳妻子咪咪（埃玛纽埃尔•塞纳 Emmanuelle Seigner饰）。奥斯卡似乎要把他和咪咪之间的异常关系告诉陌生人奈杰尔。",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "情色"
    ],
    "originalRegions": [
      "法国",
      "英国",
      "美国"
    ],
    "rating": 8.3,
    "votes": 56716,
    "runtime": "139 min",
    "releaseDate": "1992-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0104779",
    "id": "movie-1301582"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0389557",
    "id": "movie-1858802"
  },
  {
    "sourceId": "26362351",
    "title": "濑户内海",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "在这个故事里，濑户内海并非地名，而是大阪某男子高中二年级两个男生的名字。濑户小吉（菅田将晖 饰）身形瘦弱高挑，他曾是足球部的一员，但因和前辈关系不睦而退出社团。内海想（池松壮亮 饰）文质彬彬，沉默寡言，却也并非只知道读书的书呆子。不知为何，这两个看起来完全没有交集的“回家部”成了朋友。每当下午放学后，他们便相约来到河边坐下。在内海去补习班前的这段时间里，两个人便海阔天空地闲聊起来。他们的话题无所不包，却又无聊空洞。当那个妖精一般的女孩樫村一期（中条彩未 饰）出现时，不经意间在木讷的大男孩心间激起波澜……",
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
    "rating": 8.3,
    "votes": 54632,
    "runtime": "75 min",
    "releaseDate": "2016-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4934870",
    "id": "movie-26362351"
  },
  {
    "sourceId": "1892578",
    "title": "海鸥食堂",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p540502836.jpg",
    "summary": "芬兰是最接近日本的欧洲国家，坐飞机只需要十个小时。幸惠（小林聪美饰）在风光如画的首都赫尔辛基独自经营一家叫做“海鸥食堂” 的日式餐厅，她希望以简单却温暖的传统手卷留住客人的心，只可惜事与愿违，餐厅经常空无一人。后来，绿（片桐入饰）与正子（罇真佐子饰），因为不同原因，先后来到了那里帮忙。",
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
    "rating": 8.3,
    "votes": 48222,
    "runtime": "102 min",
    "releaseDate": "2006-03-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0483022",
    "id": "movie-1892578"
  },
  {
    "sourceId": "1292950",
    "title": "新不了情",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1277982373.jpg",
    "summary": "阿杰（刘青云 饰）是一个怀才不遇的年轻音乐人，生活潦倒不得不独自住进了一个破旧的单位内，终日都沉默寡言。此时他也遇到了在庙街街头艺人的女儿阿敏（袁咏仪 饰），阿敏虽然自小便患有骨癌，但她还是乐观开朗的面对自己的人生，她对生命充满希望的态度感染了阿杰，令他找回了失去的自信，在事业上也看到了曙光。两人渐渐情愫互生，就当一切看来都十分顺利之际，阿敏的病情却日渐恶化，使她失去了往日的勇敢及坚强，变得暴躁起来。最后阿敏得到了阿杰与亲戚朋友的鼓励，可是阿敏体内的病魔还是不肯放手。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.3,
    "votes": 45691,
    "runtime": "98 min",
    "releaseDate": "1993-11-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111770",
    "id": "movie-1292950"
  },
  {
    "sourceId": "1303485",
    "title": "洗澡",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1246439749.jpg",
    "summary": "早年丧偶育有两子的老刘（朱旭）苦心经营了一辈子澡堂子，是京城搓澡行业的一把手。长子大明（濮存昕）离家南下多年没归，身边只有傻二儿子二明（姜武），加上澡堂子生意日益冷清，老刘生出无限凄凉，好在，他还有一帮离不开澡堂子的老伙计相陪。",
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
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 45499,
    "runtime": "92 min",
    "releaseDate": "1999-09-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0215369",
    "id": "movie-1303485"
  },
  {
    "sourceId": "2336737",
    "title": "米尔克",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2434259081.jpg",
    "summary": "哈维•米尔克（Harvey Milk），被美国时代杂志评为20世纪代表人物之一的同性恋政治家。",
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
    "rating": 8.3,
    "votes": 45473,
    "runtime": "128 min",
    "releaseDate": "2008-11-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1013753",
    "id": "movie-2336737"
  },
  {
    "sourceId": "1292065",
    "title": "疤面煞星",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1983,
    "coverUrl": "",
    "summary": "古巴难民青年托尼（阿尔•帕西诺 Al Pacino 饰）逃难来到了美国的迈阿密，成了一个典型的天不怕、地不怕的美国街头小混混。托尼在当地的一个毒枭手下干活，因其心狠手辣、胆大心细，十分出色地帮老大完成了几件任务而迅速受到赏识，成为毒枭的第一得力助手。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 43840,
    "runtime": "170 min",
    "releaseDate": "1983-12-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0086250",
    "id": "movie-1292065"
  },
  {
    "sourceId": "1291850",
    "title": "站台",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910910474.jpg",
    "summary": "崔明亮（王宏伟）、尹瑞娟（赵涛）、张军（梁景东）、钟萍（杨天乙）是山西汾阳县文工团的演员，改革开放初期，他们过的虽是普普通通的日子，却拥有相对丰盈的精神世界。改革开放的不断深入令他们见识到了各种新鲜事物，也使他们对自身有了更多的认识，走上了不同的人生道路。然而当时间来到 1980年末时，他们发现虽然各自早已面目全非，却仍然一无所有。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港",
      "日本",
      "法国"
    ],
    "rating": 8.3,
    "votes": 41225,
    "runtime": "154 min",
    "releaseDate": "2000-09-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0258885",
    "id": "movie-1291850"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1499666",
    "id": "movie-3586725"
  },
  {
    "sourceId": "1294461",
    "title": "仙履奇缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1950,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1833051594.jpg",
    "summary": "一部经典的迪士尼动画片，取材于格林童话《灰姑娘》。母亲的早逝令灰姑娘仙德瑞拉再也感受不到母爱的温暖，失去了公主般的童年。后母和她的两个女儿，无时无刻不在想方设法折磨仙德瑞拉，给她糟糕的住处、做不完的家务。幸好得道多助、失道寡助，心地善良的仙德瑞拉结识了一大班朋友，老鼠 、鸟儿、小狗都是守护在她周围的老友记。",
    "genres": [
      "Romance",
      "Animation",
      "Musical",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "动画",
      "歌舞",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 40663,
    "runtime": "74 min",
    "releaseDate": "1950-03-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0042332",
    "id": "movie-1294461"
  },
  {
    "sourceId": "1432972",
    "title": "妈妈再爱我一次",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2196346882.jpg",
    "summary": "黄秋霞（杨贵媚 饰）与富家子弟林国荣（李小飞 饰）真心相爱，并已珠胎暗结，但在谈婚论嫁时两人被林母以黄秋霞身家不清白为由强行拆散，林国荣另娶了门当户对女子为妻，黄秋霞则投靠乡下姨母生下志强（谢小鱼、孙亚东 饰）独立抚养。 几年后，林国荣之妻被证实不能生育，林家父母为了延续香火，办法施尽令志强离开黄秋霞回到了林家认祖归宗，然而年幼的志强却无法接受没有母亲的生活，屡次试图重回母亲身边，却在某次尝试中遭遇大雨导致生命垂危，黄秋霞因为此事激动，失足跌下楼梯成为疯妇。",
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
    "rating": 8.3,
    "votes": 40474,
    "runtime": "87 min",
    "releaseDate": "1988-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0185520",
    "id": "movie-1432972"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0078875",
    "id": "movie-1292207"
  },
  {
    "sourceId": "3007826",
    "title": "摔角王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508065161.jpg",
    "summary": "绰号“大锤”的兰迪•罗宾森（Mickey Rourke 米基•洛克 饰）是上世纪80年代美国独立摔角圈中一颗耀眼的明星，他留下了无数经典的比赛，其绝招“大锤粉碎压”更虏获众多狂热的摔角爱好者。",
    "genres": [
      "Drama",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "运动"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.3,
    "votes": 35633,
    "runtime": "109 min",
    "releaseDate": "2008-09-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1125849",
    "id": "movie-3007826"
  },
  {
    "sourceId": "1292757",
    "title": "木偶奇遇记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1940,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1833095654.jpg",
    "summary": "孤独的木匠爷爷这晚亲手制作了一个木偶男孩——皮诺曹。可能上天眷顾爷爷，午夜，蓝仙女显灵了，她让这个木偶男孩具有了意识，能像其他男孩那样跑跑跳跳了。获得了生命的皮诺曹兴奋不已，很快和屋子里的小动物交上了朋友。早上爷爷起来见到皮诺曹惊讶不已，他十分感激上天赐给他的礼物。",
    "genres": [
      "Drama",
      "Animation",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 33248,
    "runtime": "88 min",
    "releaseDate": "1940-02-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0032910",
    "id": "movie-1292757"
  },
  {
    "sourceId": "1293973",
    "title": "爱德华大夫",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1945,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1884306259.jpg",
    "summary": "精神病院的默奇逊院长即将退休，接手的是年轻有为的爱德华大夫（格利高里·派克 Gregory Peck 饰）。医院里年轻漂亮的女医生彼特森（英格丽·褒曼 Ingrid Bergman 饰）和他相爱，然而竟发现眼前的爱人不是爱德华大夫，而真实的爱德华的秘书，还前来指出这个冒牌人士是杀害爱德华的凶手。",
    "genres": [
      "Romance",
      "Mystery",
      "Thriller",
      "Noir"
    ],
    "originalGenres": [
      "爱情",
      "悬疑",
      "惊悚",
      "黑色电影"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 31813,
    "runtime": "111 min",
    "releaseDate": "1945-12-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0038109",
    "id": "movie-1293973"
  },
  {
    "sourceId": "24723061",
    "title": "魁拔Ⅲ战神崛起",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "历经惨烈的元泱界大战，成功突破魁拔十二妖第一道防线的蛮吉（刘婧荦 配音）、镜心（刘校妤 配音）一行，为追赶曲境一号再踏征途，却意外闯入萨库人大仓（王宇腾 配音）与粼妖姑娘海问香（姚姝 配音）所设下的诡异防线。面对大仓与海问香的步步紧逼，蛮吉等人无奈应战。激战中，神秘少年 敖江（刘校妤 配音）凭空出现、曲境一号舰长远浪（杨晨 配音）更做出种种令人匪夷所思的决定，让本已复杂的局面，越发显得扑朔迷离；而机缘巧合下，脉门封闭已久的蛮吉竟意外开启六大脉门，化身无敌战神，携魁拔脉兽驰骋于漫天烽火中，上演了一场气势磅礴的惊世之战……",
    "genres": [
      "Action",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 30000,
    "runtime": "90 min",
    "releaseDate": "2014-10-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4912418",
    "id": "movie-24723061"
  },
  {
    "sourceId": "1293590",
    "title": "欲望号街车",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1951,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2177784348.jpg",
    "summary": "本片改编自著名剧作家田纳西·威廉斯的同名戏剧。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 28404,
    "runtime": "122 min",
    "releaseDate": "1951-09-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0044081",
    "id": "movie-1293590"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0247613",
    "id": "movie-1303145"
  },
  {
    "sourceId": "2335122",
    "title": "真相至上",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p769052768.jpg",
    "summary": "女记者瑞秋（凯特·贝金赛尔 Kate Beckinsale 饰）从线人处获得了一份情报涉及政府一次相当不光彩的行为。在丈夫雷（大卫·休默 David Schwimmer 饰）支持下刊登了这起新闻报道。政府最终以泄露国家 机密的罪行将瑞秋推上被告席，主审该案件的则是自负的检察官帕顿（马特·狄龙 Matt Dillon 饰）。在法庭上，面对帕顿的层层逼问，瑞秋坦然地叙述了整个事件的前前后后，公众心中的天平也开始往瑞秋方面倾斜，但是艾伦坚持要求瑞秋必须说出资料的提供者是谁，瑞秋逐渐地陷入进退两难的境地。艾伦开始向舆论和瑞秋的家人施加压力，而雷也渐渐地抵抗不住国家给予的压力，建议瑞秋屈服于国家。但瑞秋向雷表达了自己的坚持：真相至上。",
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
    "rating": 8.3,
    "votes": 25356,
    "runtime": "108 min",
    "releaseDate": "2008-09-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1073241",
    "id": "movie-2335122"
  },
  {
    "sourceId": "27160618",
    "title": "阳光姐妹淘",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2018,
    "coverUrl": "",
    "summary": "90年代的日本，6名女子高中生组成了「SUNNY」，一起经历了美好的青春岁月，更希望可以一直在一起…转眼20年过去，她们却各自踏上不一样的路，过着毫无交集的生活。某天，已经成为家庭主妇的奈美，竟遇上另一成员芹香，更意想不到的是好友身患重病，时日无多…她唯一的愿望就是跟「SUNNY」成员重聚！为了实现芹香最后的心愿，奈美展开了寻找昔日好友之旅…",
    "genres": [
      "Drama",
      "Comedy",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "歌舞"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 25154,
    "runtime": "119 min",
    "releaseDate": "2018-08-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7493818",
    "id": "movie-27160618"
  },
  {
    "sourceId": "2157507",
    "title": "魔幻时刻",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "",
    "summary": "黑帮小喽罗备后登（妻夫木聪 饰）与老大天盐幸之助（西田敏行 饰）的女人高千穗玛丽（深津惠里 饰）有染，惹来杀身之祸。为保性命，备后不得不接受寻找传奇杀手富坚的任务。走投无路之时，他突发妙策，假扮成一名正在筹拍黑帮电影的导演，邀请多年来辛苦打拼却功不成名不就的小演员村田大树（佐藤浩市 饰）出演杀手富坚。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 23856,
    "runtime": "136 min",
    "releaseDate": "2008-06-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1077089",
    "id": "movie-2157507"
  },
  {
    "sourceId": "1299436",
    "title": "风柜来的人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1983,
    "coverUrl": "",
    "summary": "阿清（钮承泽）、阿荣（张世）等男孩生于风柜长于风柜，他们在高中毕业后等待征兵的日子里百无聊赖，每日通过赌博、打架、看白戏等形式来挥霍过量的精力。因为一次较严重的打架事件，也因对周遭环境的厌倦，他们怀揣几颗忐忑的心，离开风柜来到高雄。起始，自然只能如迷途羔羊般，在大都市的五光十色中乱撞。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.3,
    "votes": 22262,
    "runtime": "101 min",
    "releaseDate": "1983-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0085533",
    "id": "movie-1299436"
  },
  {
    "sourceId": "1296266",
    "title": "本命年",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "",
    "summary": "经过劳动改造，犯人李慧泉（姜文 饰）刑满释放，他回到了从小生长的胡同。老街坊邻居罗大妈很照顾这个父母亡故、孤苦伶仃的小伙子。当年，哥们叉子因为女友爱上了别人，气愤不过，拉着讲义气的李慧泉，教训了那个男人，结果无意中弄出了人命，二人双双入狱。如今，叉子的家人对他们依旧抱有成见，只有叉子的弟弟觉得李慧泉是条汉子。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.3,
    "votes": 21546,
    "runtime": "108 min",
    "releaseDate": "1990-04-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0123450",
    "id": "movie-1296266"
  },
  {
    "sourceId": "1301498",
    "title": "地球之夜",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "",
    "summary": "本片由五个发生在同一时间，不同国家地区的小故事组成，每个故事都描述了的士司机与乘客的一次短暂遭遇。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "法国",
      "英国",
      "德国",
      "美国",
      "日本"
    ],
    "rating": 8.3,
    "votes": 21303,
    "runtime": "129 min",
    "releaseDate": "1991-12-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0102536",
    "id": "movie-1301498"
  },
  {
    "sourceId": "26616719",
    "title": "弗兰兹",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2016,
    "coverUrl": "",
    "summary": "法国导演弗朗索瓦·欧容在沉寂两年后，终于带着皮埃尔·尼内、葆拉·贝尔主演的《弗兰兹》杀回影坛。影片将以一战后的法国为背景，聚焦贝尔饰演的德国女人正因未婚夫的惨死而悲痛欲绝，尼内饰演的神秘法国男子却悄然出现，默默为其未婚夫墓碑致哀、献花，两人也就此揭开一段匪夷所思的往事。",
    "genres": [
      "Drama",
      "Romance",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "法国",
      "德国"
    ],
    "rating": 8.3,
    "votes": 20723,
    "runtime": "113 min",
    "releaseDate": "2016-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5029608",
    "id": "movie-26616719"
  },
  {
    "sourceId": "25740192",
    "title": "骄傲",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2014,
    "coverUrl": "",
    "summary": "1984年，英国首相撒切尔夫人采取铁腕手段打压工人运动，矿工群体发起了史上规模最大的一次罢工。在同年的伦敦同志骄傲游行中，一群男女同性恋决定主动为罢工工人筹款。然而尴尬也随之而来：工会竟然羞于接受他们的资助！这群同性恋决定绕过工会，直接走进工人家中。他们驱车前往南威尔士的一个煤矿村庄，给工人家庭带去了钱和物资。两个出身背景天差地远的群体从此产生了意外温暖的接触，并且在政府高压下结成了最不可能的联盟。",
    "genres": [
      "Drama",
      "Comedy",
      "LGBTQ+",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "同性",
      "历史"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.3,
    "votes": 19256,
    "runtime": "120 min",
    "releaseDate": "2014-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3169706",
    "id": "movie-25740192"
  },
  {
    "sourceId": "30476406",
    "title": "行骗天下：运势篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2019,
    "coverUrl": "",
    "summary": "达子（长泽雅美）是一个ConfidenceMan，即信用欺诈师。她可以凭借自己的天才头脑和出类拔萃集中力在短时间内掌握各种艰涩难懂的专业知识。她长期居住在高档酒店的豪华套房，虽然天赋异禀却有着纯真马虎的一面。达子的搭档是小朋友（东出昌大），一个总是被她耍的团团转的性格谨慎的老好人，他总盼望着早日金盆洗手，光明磊落地生活。另一位搭档是拥有超一流变装技术，把自己与生俱来的好气质运用于骗术的理查德（小日向文世）。他们以纵横于各个行业，以花花世界作为他们的舞台，用各种异想天开的计划从利欲熏心的人们手中骗取钱财，是一部大快人心的喜剧。",
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
    "rating": 8.3,
    "votes": 18939,
    "runtime": "105 min",
    "releaseDate": "2019-05-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-30476406"
  },
  {
    "sourceId": "1304304",
    "title": "朱丽叶与梁山伯",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p826794784.jpg",
    "summary": "佐敦（吴镇宇饰）因为欠下元朗大哥新界安（任达华饰）十多万赌债，被迫逃跑。而同一时刻，孤女Judy（吴君如饰）也带着行李离开丈夫，返回元朗。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.3,
    "votes": 17766,
    "runtime": "89 min",
    "releaseDate": "2000-03-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0260992",
    "id": "movie-1304304"
  },
  {
    "sourceId": "5295610",
    "title": "第八日的蝉",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "一段不伦之恋，造成了两代人的人生悲剧。野野宫希和子（永作博美 饰）无法得到情人的身与心，还被迫杀掉了腹中的孩子。在一个瓢泼大雨的日子里，万念俱灰的希和子走入情人的家，抱走了他们尚在襁褓中的女儿惠理菜。此后的岁月中，她带着“女儿”薰辗转各地，只为寻求“母女”安身立命的宁静之所。此去经年，长大成人的惠理菜（井上真央 饰）经历着人生的种种，而她似乎正在走一条与“母亲”希和子相同的路。无论多么不愿回首，她仍按照宿命的指引追忆着与希和子共处的那段短暂而美好的时光……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 17706,
    "runtime": "147 min",
    "releaseDate": "2011-04-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1727825",
    "id": "movie-5295610"
  },
  {
    "sourceId": "11520649",
    "title": "麦克法兰",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "《麦克法兰》根据1987年的真实故事改编，科斯特纳扮演的教练来到一个穷困无比，尘土飞扬，居民多为拉美裔的农业小镇，将那里的高中生们变成越野赛跑健将，给自己，也给小镇带来希望。",
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
    "rating": 8.3,
    "votes": 17184,
    "runtime": "129 min",
    "releaseDate": "2015-02-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2097298",
    "id": "movie-11520649"
  },
  {
    "sourceId": "1297628",
    "title": "午夜牛郎",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1969,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2261560304.jpg",
    "summary": "生活清贫的牛仔乔恩（乔恩·沃伊特 Jon Voight 饰）从老家来到纽约讨生活，他自认为风流倜傥，因此想在纽约当个男妓混口饭吃。当他第一天来到纽约时，就在大街上勾搭女人。不料，人地生疏的他生意不成反而亏了20块钱。沮丧不已的乔恩遇到了专靠骗点小钱为生的里佐（达斯汀·霍夫曼 Dustin Hoffman 饰），里佐骗乔恩说他认识一个男妓集团的首脑，但要收20元作为中介费。最后里佐只是把乔恩介绍给了一个同性恋的皮条客，愤怒不已的乔恩随后找到了里佐。里佐收留了无家可归的乔恩，两人渐渐成了无所不谈的好朋友。 寒冷的纽约冬天，两人过的十分辛酸，以至于衣食无着，里佐也没有钱买药治病",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 16594,
    "runtime": "113 min",
    "releaseDate": "1969-05-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0064665",
    "id": "movie-1297628"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0369702",
    "id": "movie-1309003"
  },
  {
    "sourceId": "21767183",
    "title": "0.5毫米",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "在某老人护理机构供职的山岸佐和（安藤樱 饰）长久以来一直照顾生活不能自理的老人昭三（织本顺吉 饰）。某天昭三的女儿向其提出一个匪夷所思的要求，虽然有些勉强，佐和还是应承了下来，谁曾想这一决定竟彻底改变了她的命运。突如其来的灾难让佐和丢掉了工作，进而流落街头。在四处闲逛的时候，她先后邂逅了康夫（井上龙夫 饰）、阿茂（坂田利夫 饰）、义男（津川雅彦 饰）等有着各种各样怪癖和坏毛病的老年人。佐和就像恶意满满的魔女，不由分说闯入老人们的生活。她霸道地纠正老人们的恶习，却也为他们带来了久违的关怀……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 16373,
    "runtime": "196 min",
    "releaseDate": "2014-11-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3825360",
    "id": "movie-21767183"
  },
  {
    "sourceId": "1298638",
    "title": "鸟人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p852618632.jpg",
    "summary": "伯迪（马修·莫迪恩 Matthew Modine 饰）是个从小活在幻想中的孩子，他一直向往鸟的生活，羡慕他们有翅膀可以飞翔，自己也兴致勃勃地动手制作翅膀，幻想有朝一日飞上天空。越战爆发打断少年美梦。战场上残忍的一幕幕让内心脆弱的伯迪受到极大刺激，终于失去理智，成为现实意义中的“精神病人”，被送进医院。在医院里，他从不说话，每天以鸟的姿态蹲着，以鸟的方式吃东西，在牢笼里望着一方小小的蓝天向往飞翔。为了治疗伯迪，医院找来他的儿时好友艾尔（尼古拉斯·凯奇 Nicolas Cage 饰），希望他能引导伯迪重新和人交流。艾尔用大量共同回忆开启伯迪的心智，也认识到对伯迪来说只有飞翔的梦想是永恒的……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 15990,
    "runtime": "120 min",
    "releaseDate": "1984-12-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0086969",
    "id": "movie-1298638"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0430895",
    "id": "movie-1794360"
  },
  {
    "sourceId": "26842503",
    "title": "啊，荒野 前篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "作品改编自寺山修司的同名原著，将时间改为了近未来的2021年，但仍聚焦于年轻人的迷惘和焦躁。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 14378,
    "runtime": "157 min",
    "releaseDate": "2017-10-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5905008",
    "id": "movie-26842503"
  },
  {
    "sourceId": "6013501",
    "title": "大而不倒",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "影片讲述了于2008年爆发的全球金融危机，以美国财政部长汉克·保尔森（威廉·赫特 William Hurt饰）为主要线索，记录了在几周之内决定全球最大经济体命运的权力人物的决策与行动。为拯救全球经济，摆脱金融困境，不仅保尔森倾尽全力，美联储主席本·伯南克（保罗·吉亚玛提 Paul Giamatti饰）、纽约联邦储备银行行长蒂姆·盖特纳等人也动用了自己的私人关系和渠道。除此之外，沃伦·巴菲特（爱德华·阿斯纳 Edward Asner饰）、投资银行家、英国监管机构以及几乎所有的国会议员都参与到了这场没有硝烟的金融大战中。",
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
      "美国"
    ],
    "rating": 8.3,
    "votes": 14339,
    "runtime": "98 min",
    "releaseDate": "2011-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1742683",
    "id": "movie-6013501"
  },
  {
    "sourceId": "26147991",
    "title": "明月守护者",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2014,
    "coverUrl": "",
    "summary": "故事讲述爱闯祸的无名小卒缪恩，有一天阴差阳错得成了重要的月亮守护者，而他任职第一天就造成大错，间接导致太阳被偷、月亮消失、世界大乱。于是，他不得不携手太阳守护者和蜡质姑娘茜尔，展开一场大冒险，揪出混乱背后的黑手，拯救世界。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.3,
    "votes": 14191,
    "runtime": "86 min",
    "releaseDate": "2014-12-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3858372",
    "id": "movie-26147991"
  },
  {
    "sourceId": "1295451",
    "title": "第三人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1949,
    "coverUrl": "",
    "summary": "二战后，美国作家马丁（约瑟夫•科顿 Joseph Cotten 饰）应好友哈里（奥逊•威尔斯 Orson Welles 饰）邀请到维也纳工作，岂料刚到达目的地就传来了哈里车祸身亡的消息。哈里葬礼上，马丁遇到了当地军官卡洛维，卡洛维很不客气的请他马上离开维也纳。马丁没有理会，决心留下调查出好友死亡的真相。",
    "genres": [
      "Mystery",
      "Thriller",
      "Noir"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚",
      "黑色电影"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.3,
    "votes": 13446,
    "runtime": "105 min",
    "releaseDate": "1949-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0041959",
    "id": "movie-1295451"
  },
  {
    "sourceId": "1291564",
    "title": "十分钟年华老去：大提琴篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2002,
    "coverUrl": "",
    "summary": "大师们的命题作文，八位电影大师用各自的手法为我们解读了时间的含义。",
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "科幻",
      "歌舞"
    ],
    "originalRegions": [
      "英国",
      "德国",
      "法国"
    ],
    "rating": 8.3,
    "votes": 13252,
    "runtime": "95 min",
    "releaseDate": "2002-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0318742",
    "id": "movie-1291564"
  },
  {
    "sourceId": "3299241",
    "title": "在世界转角遇见爱",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2007,
    "coverUrl": "",
    "summary": "一个年过半百却精神矍烁的老人（米基马诺洛维克 Miki Manojlovic 饰）出现在躺在医院因车祸而失去记忆的青年亚历山（卡罗柳别克 Carlo Ljubek 饰）在的身边，他自称是亚历山大的外公，来自保加利亚。他还带来了一张旧照片和一盒双陆棋，并且如数家珍的向亚历山大讲起他小时候的事情。一系列的亲昵行为并不能唤起亚历山大的记忆，反正让亚历山大极不自在。于是，老人能做的只是每天来医院陪亚历山大下棋，跳动的棋子似乎扣动了亚历山大心灵深处的某种东西，他对这个老人之间建立起初级的信任。为了唤起亚历山大的记忆，并且重新鼓起他积极生活的勇气，老人决定带亚历山大开始一段“回家”之旅。一辆协力车，一路的美景，亚历山大在老人的鼓励下在途中邂逅美丽的爱情、重新找回积极生活的信心和勇气、并最近在意大利的收容所里找回往昔的记忆……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "保加利亚",
      "德国",
      "斯洛文尼亚",
      "匈牙利"
    ],
    "rating": 8.3,
    "votes": 12990,
    "runtime": "105 min",
    "releaseDate": "2008-10-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1178197",
    "id": "movie-3299241"
  },
  {
    "sourceId": "1293077",
    "title": "苏菲的抉择",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1982,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1217019930.jpg",
    "summary": "一位来自美国南部的年轻作家斯汀戈（彼特·麦尼科 Peter MacNicol 饰）为求生计来到布鲁克林，认识了居住在楼上的苏菲（梅丽尔·斯特里普 Meryl Streep 饰）和内森（凯文·克莱恩 Kevin Kline 饰）。他们很热情的表达希望和这位年轻的作家交朋友 ，斯汀戈欣然接受他们的邀请。逐渐地交往之后，他们之间相互建立了亲密友好的感情。在这个过程中斯汀戈了解到，苏菲常因内森的猜疑和暴怒伤心哭泣，但她非常的爱内森，最让她担心是：内森没有她以后的生活将不可想象。苏菲是波兰人，二战后来到美国，在这里认识了内森并和他相依为命，战时苏菲曾被关进纳粹集中营，而她的父亲、丈夫、儿女全部在这场战争中罹难。对于自己的受难和亲人一个个的悲惨命运，和这场战争中人间地狱般的种族大灭绝，苏菲的精神和肉体该如何抉择…… by yosemite_g",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.3,
    "votes": 12985,
    "runtime": "150 min",
    "releaseDate": "1982-12-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0084707",
    "id": "movie-1293077"
  },
  {
    "sourceId": "1427034",
    "title": "尼罗河上的惨案",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2229994399.jpg",
    "summary": "本片拍摄于2003年，改编自阿加莎·克里斯蒂的同名原著作品，为大卫·苏切特主演的“大侦探波罗”电视系列剧中的一集，讲述了一桩发生在一个特别地点的特别案件：尼罗河上的一艘游艇中，一位不幸的女士被枪杀，船上每一个人都可能是凶手，可谁是？谁不是？波罗正在紧张地思索……",
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
    "rating": 8.3,
    "votes": 12689,
    "runtime": "98 min",
    "releaseDate": "2004-04-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0406516",
    "id": "movie-1427034"
  },
  {
    "sourceId": "1299607",
    "title": "东京日和",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p671006486.jpg",
    "summary": "摄影家岛津已喜男（竹中直人饰）想要出版一本摄影集，这是一本献给亡妻阳子（中山美穗饰）的摄影集，标题为《东京日和》，岛津希望藉着这本摄影集，重新去感觉他和阳子之间的情愫与回忆。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 12513,
    "runtime": "121 min",
    "releaseDate": "1997-10-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0123302",
    "id": "movie-1299607"
  },
  {
    "sourceId": "1296684",
    "title": "小熊维尼历险记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1977,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1315728990.jpg",
    "summary": "Winnie the Pooh 是英国作家 A. A. Milne 笔下一只十分爱吃蜂蜜的熊，他其实是一个小男孩 Christopher Robin 的玩具熊，Robin 想像他和这只熊住在一个叫“百亩森林”的地方，当地还有许多其他的动物邻居伙伴们，像是兔子 Rabbit、小猪 Piglet、跳跳虎 Tigger …等等，这一切的故事都是 Robin 所想像出来的。迪士尼首度於１９６６年推出“小熊维尼与蜂蜜树”立刻深获好评，之后的“小熊维尼与大风吹”更拿到当年奥斯卡金像奖最佳短篇动画奖项，“小熊维尼与跳跳虎”也获得提名，所以在１９７７年时，迪士尼将此三部 Pooh 的短片集合成一部电影在戏院上映，成为迪士尼的第２２部经典动画－【小熊维尼历险记】。本片录影带原本在美国都是三段分开来发行的，一直到１９９６年才首度正式发行完整电影版的录影带，一上市居然大热卖！Winnie the Pooh 还真是迪士尼人气最旺的小熊啊！",
    "genres": [
      "Animation",
      "Musical",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "歌舞",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.3,
    "votes": 11945,
    "runtime": "74 min",
    "releaseDate": "1977-07-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0076363",
    "id": "movie-1296684"
  },
  {
    "sourceId": "27098888",
    "title": "羞辱",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2017,
    "coverUrl": "",
    "summary": "一人是黎巴嫩基督徒，另一人是巴勒斯坦难民，两人因口角摩擦走上法庭。这场斗争在媒体的推动下引发了全国范围的大动荡。看似两人之间的小事，实际上牵扯出整个中东的政治及信仰问题，由此影片引发人们有关真相、信仰、人性与和平的思考。男主卡梅尔·巴沙凭借此片夺得威尼斯电影节沃尔皮杯最佳男演员。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "黎巴嫩",
      "法国",
      "塞浦路斯",
      "比利时",
      "美国"
    ],
    "rating": 8.3,
    "votes": 11725,
    "runtime": "113 min",
    "releaseDate": "2017-08-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7048622",
    "id": "movie-27098888"
  },
  {
    "sourceId": "1293632",
    "title": "春天的故事",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1990,
    "coverUrl": "",
    "summary": "珍妮（Anne Teyssèdre 饰）是一名哲学老师，一日在宴会上，她与娜塔莎（Florence Dare 饰）相识，也许是因为寂寞，两个本无交集的人成为了朋友。娜塔莎邀请珍妮到自己家里做客，后者欣然前往。娜塔莎有一个奇怪的家庭，父亲离婚，交往了一个年龄和自己相差无几的漂亮女朋友伊芙（Eloïse Bennett 饰），这一点令娜塔莎无法接受，同时，一条项链的失踪也加深了她与“后妈”的隔阂。珍妮的介入让这个家庭里的关系发生了改变，娜塔莎的父亲显然对知性的珍妮抱有好感，而娜塔莎也渴望能和喜欢的珍妮组成新的家庭。",
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
      "法国"
    ],
    "rating": 8.3,
    "votes": 10968,
    "runtime": "108 min",
    "releaseDate": "1990-04-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0097106",
    "id": "movie-1293632"
  },
  {
    "sourceId": "1303559",
    "title": "扒手",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1959,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1716876999.jpg",
    "summary": "影片以日记的形式呈现。无所事事的年轻人米歇尔（马丁·拉萨尔 Martin LaSalle 饰）在赛马场目睹了一个小偷偷窃的全过程，他被小偷那自信优雅的手法所吸引遂即加入了偷窃的勾当。爱读书，坚持虚无主义哲学思想的米歇尔坚信偷窃是一种手指的芭蕾，一场完美的行窃就像一场精彩的行为艺术。米歇尔有一个久违的病重的母亲，在去探望的时候结识了一直照顾他母亲的邻居珍妮（玛莉卡·格林 Marika Green 饰），漂亮的珍妮唤醒了米歇尔心中沉睡已久的感情。米歇尔被警察盯住了，警长虽然三番五次的给了他改过自新的机会，但米歇尔依旧沉迷于他的“艺术”中无法自拔，很快，米歇尔被捕了。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.3,
    "votes": 10867,
    "runtime": "75 min",
    "releaseDate": "1959-12-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0053168",
    "id": "movie-1303559"
  },
  {
    "sourceId": "1860582",
    "title": "三眼神童",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1985,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554491718.jpg",
    "summary": "头上贴着胶布、无论从外形还是性格来看都像小孩子的写乐保介却天资聪颖，以第一名的成绩跳级进入高中。写乐平时天真开朗，然胶布下却掩藏着第三只眼的秘密。原来他是古老的三眼族的遗孤，十几年前三眼族神秘灭亡，写乐被族人托付给养父犬特医生。童年时的写乐脾气暴虐，令人困扰。犬特发现，只有用胶布将第三只眼封上才可使写乐安静下来。而一旦胶布被撕开，古老文明的灵魂将再次回归。如同被命运引领一般，写乐和朋友们经历了一次次神秘而刺激的大冒险……",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.3,
    "votes": 10822,
    "runtime": "85 min",
    "releaseDate": "1985-08-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0791100",
    "id": "movie-1860582"
  },
  {
    "sourceId": "2009392",
    "title": "真爱满行囊",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p674583978.jpg",
    "summary": "贝蒂（Alba Gaïa Kraghede Bellugi 饰）是个敏感而胆小的小女孩，和爸爸妈妈一起住在精神病疗养院旁边一间阴森的大屋里。贝蒂整天都生活在巨大的孤独中：姐姐快乐的离家上学了、爸爸妈妈感情破裂、漆黑的大屋深处、昏暗的天空……一天，从疗养院里逃出了一个英俊的小伙子伊凡（本杰明•莱蒙 Benjamin Ramon 饰）。当贝蒂发现了虚弱的伊凡时，好心的她将他藏在了家里的杂物仓库。他们度过了一段快乐的时光，然而，警察也开始搜索伊凡了。为了他的安全，贝蒂要带着伊凡上路了。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.3,
    "votes": 10479,
    "runtime": "90 min",
    "releaseDate": "2006-11-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0478687",
    "id": "movie-2009392"
  },
  {
    "sourceId": "1432146",
    "title": "钢铁侠",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "",
    "summary": "斯塔克军火公司是美军在全球范围内第一大军火供应商，其新任掌门人托尼•斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）风流倜傥，天资聪颖。他与公司元老俄巴迪亚•斯坦（杰夫·布里吉斯 Jeff Bridges 饰）合作无间，共同将斯塔克公司的业务推向顶峰。现 实生活中的托尼热衷收集名贵跑车，搞点儿发明创造，当然露水姻缘更不可少。所幸他身边有维吉尼亚•波茨（格温妮斯·帕特洛 Gwyneth Paltrow 饰）这样的好助手细心打理一切，才让他能自由自在过着贵公子的生活。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 404277,
    "runtime": "126 min",
    "releaseDate": "2008-04-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0371746",
    "id": "movie-1432146"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0293715",
    "id": "movie-1292286"
  },
  {
    "sourceId": "1794171",
    "title": "变形金刚",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "",
    "summary": "“霸天虎”的先遣部队旋风和毒蝎袭击了美军位于卡塔尔的军事基地，与此同时，路障帮助他的搭档迷乱潜入了美国总统的座机空中一号，通过电脑获悉，要想找到威震天就必须找到维特维奇家族的那副眼镜，上面有威震天关于能量块的信息扫描，而它现在的拥有者萨姆•维特维奇（希安•拉博夫饰）成为了“霸天虎”攻击的目标。",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 326184,
    "runtime": "144 min",
    "releaseDate": "2007-07-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0418279",
    "id": "movie-1794171"
  },
  {
    "sourceId": "25716096",
    "title": "狗十三",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "13岁的少女李玩，由于父母离异，与爷爷奶奶生活在一起。正处于青春期的她渴望了解、陪伴和爱。在“要听话”的中国式教育里，李玩也完成了属于她的“成人礼”。电影中，父亲希望通过一条宠物小狗完成与女儿的和解与沟通，李玩为狗取名“爱因斯坦”，暗潮涌动的青春因“爱因斯坦”意外走失，开启了它汹涌又无奈的成长之路。",
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
    "rating": 8.2,
    "votes": 321831,
    "runtime": "120 min",
    "releaseDate": "2018-12-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3401962",
    "id": "movie-25716096"
  },
  {
    "sourceId": "1291580",
    "title": "杀死比尔",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "",
    "summary": "这是一部令人眼花缭乱，绝对能带给您感官刺激的动作电影。一个新娘（乌玛•瑟曼Uma Thurman饰）在自己的婚礼上遭到了暗杀，婚礼瞬间变成了一片狼籍的红色。幸运的是，新娘并没有就此消失，而是在四年后苏醒过来，并且接受了高强度的各种各样的武术训练，开始踏上了自己的复仇之路，在世界各地寻找给自己带来灾难的人。当然，她也遇到了许多阻碍。日本杀手（刘玉玲饰）就是其中之一。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 286862,
    "runtime": "111 min",
    "releaseDate": "2003-09-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0266697",
    "id": "movie-1291580"
  },
  {
    "sourceId": "1418192",
    "title": "加勒比海盗3：世界的尽头",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1076818175.jpg",
    "summary": "被大章鱼吞下去的杰克船长（强尼·戴普）进入了戴维·琼斯控制的“死界”——世界的尽头。为了拯救杰克，威尔·特纳（奥兰多·布鲁姆）、伊丽莎白（凯拉·奈特莉）和女巫等一行人也来到了“死界”。",
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
    "rating": 8.2,
    "votes": 256506,
    "runtime": "169 min",
    "releaseDate": "2007-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0449088",
    "id": "movie-1418192"
  },
  {
    "sourceId": "26259677",
    "title": "垫底辣妹",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "长相甜美的高中女孩工藤沙耶加（有村架纯 饰）在家并不受父亲待见，父亲一心要把弟弟培养成棒球手，而疏于对女儿们的呵护。沙耶加所在的高中有内部升学的制度，因此她终日和小姐妹们吃喝玩乐，学习掉到了全年级倒数第一也毫不为意。温柔勤苦的妈妈（吉田羊 饰）经常被校方找去说教，她为女儿的未来焦虑万分，因此将沙耶加送到了坪田（伊藤淳史 饰）所开办的补习班。经过水平测试，沙耶加实际只有小学四年级的水平，不过开朗自信的坪田不以为意，他以特有的方式打开女孩的心防，两人很快成为好朋友。在坪田的帮助下，沙耶加对学习的态度逐渐浓厚，后来更立下了考取庆应大学的宏愿。这是丑小鸭绝地逆袭的真实故事……",
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
    "rating": 8.2,
    "votes": 245779,
    "runtime": "117 min",
    "releaseDate": "2016-04-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4195368",
    "id": "movie-26259677"
  },
  {
    "sourceId": "1972729",
    "title": "铁甲钢拳",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1031075041.jpg",
    "summary": "2020年，未来一个并不遥远的年份，整个世界已经发生了许多变化。在那个时代，人类拳击不再被允许，取而代之的是各种机器人走上了擂台，继续这项火爆的运动，愉悦大众。前拳击手查理·肯顿（休·杰克曼 Hugh Jackman 饰）似乎并不那么落寞，他很快适应了时代的发展，带着经过训练的机器人一次次走上拳台。但是倒霉事接二连三，他先是意外落败，债台高筑，继而接到前女友突然过世的消息，并见到了从未谋过面的儿子——11岁男孩麦克斯（达科塔·高尤 Dakota Goyo 饰）。",
    "genres": [
      "Drama",
      "Action",
      "Sci-Fi",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "科幻",
      "运动"
    ],
    "originalRegions": [
      "美国",
      "印度"
    ],
    "rating": 8.2,
    "votes": 202295,
    "runtime": "127 min",
    "releaseDate": "2011-11-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0433035",
    "id": "movie-1972729"
  },
  {
    "sourceId": "20470074",
    "title": "言叶之庭",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "年方15岁的高中生秋月孝雄（入野自由 配音），专心学业的过程中不得不为了生计打工赚钱。母亲离家出走，他与哥哥过着看不到前方的生活。入梅之日，孝雄逃课来到日本庭园。在一座安静的小亭子里，27岁的职场女性雪野百香里（花泽香菜 配音）边吃巧克力边饮啤酒的样子引起了孝雄的注意。似曾相识的二人，仿佛约定好了一般，每到落雨之日便从世俗的烦恼中逃脱出来，相会于这座钢筋铁骨都市丛林中宛若世外桃源的幽静角落。在梅雨季节的日子里，他们的心渐渐向彼此靠拢。志愿成为手工鞋匠的秋月，决心以雪野为模特做一双鞋。",
    "genres": [
      "Romance",
      "Animation"
    ],
    "originalGenres": [
      "爱情",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 187584,
    "runtime": "46 min",
    "releaseDate": "2013-05-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2591814",
    "id": "movie-20470074"
  },
  {
    "sourceId": "1920805",
    "title": "成为简·奥斯汀",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1284506783.jpg",
    "summary": "简•奥斯汀（安妮·海瑟薇 Anne Hathaway 饰）的一生是否如她的文字那样充满曲折的过程和完满的结局？《成为简》用传记方式描述她的一生：她的母亲竭力为她撮合婚事，对象是上层社会的有钱人。但是简不接受没有爱情的婚姻，认为女人要靠自己的能力去养活自身。于是，她拒绝贵族瓦斯莱先生的求婚，爱上了心灵相通的汤姆•勒弗罗伊（詹姆斯·麦卡沃伊 James McAvoy 饰）。",
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
      "爱尔兰"
    ],
    "rating": 8.2,
    "votes": 180203,
    "runtime": "120 min",
    "releaseDate": "2007-03-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0416508",
    "id": "movie-1920805"
  },
  {
    "sourceId": "1308741",
    "title": "独自等待",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p486667524.jpg",
    "summary": "繁华都市之中，年轻的陈文（夏雨饰）和他的一班好友怀揣各自的梦想，终日徘徊在等待与寻觅的地平线上。在偶然邂逅理想中的爱情目标刘荣（李冰冰饰）之后，陈文渴望爱情的激情被瞬间点燃。在好友们（高旗、吴超、高亚麟等饰）的百般怂恿之下，经由绰号“孙子”（涂松岩饰）的所谓“恋爱专家”点拨，陈文不顾一切地是展出五花八门的求爱攻略，演绎出一幕幕颇具喜剧色彩的浪漫情节。然而此时，在他身旁暗中相助的多年玩伴李静（龚蓓苾饰），却在心中默默隐藏着对陈文的真爱。 在独自等待的人生旅途中，每一个青涩生命不断努力实践着梦想，在不知不觉中体味到成长的真实滋味……",
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
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 166554,
    "runtime": "107 min",
    "releaseDate": "2005-09-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0311041",
    "id": "movie-1308741"
  },
  {
    "sourceId": "1863766",
    "title": "魔发奇缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "女巫Gothel（唐纳·墨菲 Donna Murphy 配音）靠着一朵神奇的金色花朵保持青春。王后重病，国王派人找到了这朵金花给王后治病，王后病愈，生下了一个一头金发的小女孩Rapunzel（曼迪·摩尔 Mandy Moore 配音）。女巫失去金花，却发现小公主的金发有 着同样的魔力，因此她偷走Rapunzel，把她关到森林中的一座没有楼梯高塔之上。",
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
      "美国"
    ],
    "rating": 8.2,
    "votes": 163663,
    "runtime": "100 min",
    "releaseDate": "2011-02-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0398286",
    "id": "movie-1863766"
  },
  {
    "sourceId": "1291868",
    "title": "情人",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1992,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553122878.jpg",
    "summary": "1929年的越南是法国殖民地，简（珍·玛奇 饰）是一个15岁的法国少女，在西贡女子寄宿学校读书。每逢假期简便回家，母亲办了一所很小的学校，收入甚少。简有两个哥哥，大哥比尔吸毒成瘾且横行霸道，二哥保罗生性懦弱，常受大哥的欺负。一天简一如往常一样告别母亲乘上渡船回学校，在船上遇到一个坐黑色大轿车的阔少爷东尼（梁家辉饰）。东尼是华侨富翁的独生子，东尼喜欢这名白人少女便去搭讪，两人便搭上了。",
    "genres": [
      "Drama",
      "Romance",
      "Erotic",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "情色",
      "传记"
    ],
    "originalRegions": [
      "法国",
      "英国",
      "越南"
    ],
    "rating": 8.2,
    "votes": 141271,
    "runtime": "115 min",
    "releaseDate": "1992-01-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0101316",
    "id": "movie-1291868"
  },
  {
    "sourceId": "3071604",
    "title": "丹麦女孩",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2015,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2264778990.jpg",
    "summary": "1926年哥本哈根，风景画家艾纳（埃迪·雷德梅恩 Eddie Redmayne 饰）和擅长人物画的格尔达（艾丽西亚·维坎德 Alicia Vikander 饰）结为夫妇。因为模特失约，格尔达为顺利完成画作说服了艾纳穿上女装救场。这次意外令艾纳多出一个女性人格“莉莉”，而后者亦成为妻子的灵感女神，让格尔达声名鹊起。只是随着沉睡女性人格的被唤醒，艾纳开始厌恶自己作为男性的身体，他渐渐发现莉莉不但是艺术存在，更是真正的自己。格尔达也没有想到只是临时起意的游戏，竟为自己人生投下了一颗震撼弹，她该如何继续爱她的伴侣？她们在各种社会非议和误解中不离不弃，最后格尔达鼓励艾纳彻底变成莉莉......",
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
      "美国",
      "比利时",
      "丹麦",
      "德国"
    ],
    "rating": 8.2,
    "votes": 138785,
    "runtime": "119 min",
    "releaseDate": "2015-09-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0810819",
    "id": "movie-3071604"
  },
  {
    "sourceId": "1291574",
    "title": "玩具总动员2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1283688673.jpg",
    "summary": "自从上一集牛仔伍迪救回巴斯光年之后，他一直和其他玩具一起快乐的生活在小主人家。一次，小主人参加夏令营去了，伍迪因为破旧而没被带去。留在家里的伍迪恰巧被一个玩具收藏家发现了，认为他是近代最具代表性的玩具。于是将伍迪被偷了出来放在颇富盛名的文化博物馆内展览。在家里所有的玩具 都很担心伍迪，因此巴斯光年自告奋勇去寻找伍迪，但是当他们发现伍迪在展览馆时， 伍迪却似乎不再愿意回去过那平凡的生活……",
    "genres": [
      "Comedy",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 132734,
    "runtime": "92 min",
    "releaseDate": "1999-11-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120363",
    "id": "movie-1291574"
  },
  {
    "sourceId": "6536180",
    "title": "黑暗面",
    "countryCode": "CO",
    "countryName": "Colombia",
    "year": 2011,
    "coverUrl": "",
    "summary": "年轻指挥家亚德里安（奎姆·古铁雷兹 Quim Gutiérrez 饰）的女友贝伦（克拉拉·拉戈 Clara Lago饰）失踪了，活不见人死不见尸，只留下一段视频讯息。郁闷的亚德里安不断被警察怀疑和调查，烦不胜烦之下到小酒馆浇愁，一不小心喝的大醉，受到女招待法比安娜（玛蒂娜·加西亚 Martina García）照顾，两人迅速陷入新的恋情。很快，法比安娜住进亚德里安的大宅，敏感的她时时感到房子里面不对劲，浴室里面好像总有奇怪的声音，亚德里安对此不以为意，但法比安娜开始时时留心，还一度怀疑是他前女友的鬼魂作祟。一天，在卧室更衣的法比安娜拾到一把古怪的钥匙，似乎接近了一个天大的秘密……",
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
      "哥伦比亚",
      "西班牙"
    ],
    "rating": 8.2,
    "votes": 119457,
    "runtime": "97 min",
    "releaseDate": "2011-09-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1772250",
    "id": "movie-6536180"
  },
  {
    "sourceId": "1937502",
    "title": "追风筝的人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p956325412.jpg",
    "summary": "2000年美国加利福利亚，知名作家阿富汗人Amir(Khalid Abdalla 饰)接到一个电话，将他带回了童年的岁月……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国",
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 119346,
    "runtime": "128 min",
    "releaseDate": "2007-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0419887",
    "id": "movie-1937502"
  },
  {
    "sourceId": "1292553",
    "title": "真实的谎言",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2408831888.jpg",
    "summary": "哈里（阿诺•施瓦辛格 Arnold Schwarzenegger 饰）是美国FBI的高级特工，他正在奉命调查一起跨国核武器走私案件。出于安全考虑，哈里连结婚15年的妻子海伦（杰米•李•柯蒂斯 Jamie Lee Curtis 饰）都没有告诉他的真实身份。",
    "genres": [
      "Comedy",
      "Action",
      "Thriller"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 118105,
    "runtime": "141 min",
    "releaseDate": "1995-04-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111503",
    "id": "movie-1292553"
  },
  {
    "sourceId": "1300616",
    "title": "买凶拍人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1361412292.jpg",
    "summary": "职业杀手Bart（葛民辉饰）技艺高超，雇主很多，收入不俗。他与妻子阿玲（方子璇饰）居于高级住宅区，小日子过的非常滋润。可惜好景不长，金融风暴后夫妻二人陷入经济危机。Bart迫于无奈，便为有钱太太杀人服务，不想有钱太太要求苛刻，要Bart在杀人之余还得拍下杀人过程，方泄心头之恨。Bart深明顾客至上的道理，决定找一个拍档合作。凑巧Bart在酒吧见到导演阿全（张达明饰），二人一拍即合，成为了杀手导演二人组，一时间生意大增，一连串的“买凶拍人”行动随即展开。后来江湖大佬标哥听闻，决定聘Bart及阿全代劳，杀死社团叛徒大雄，并要拍下影带，好让他有真凭实据能向社团交代，稳坐执事人一职。这次买凶拍人行动能否成功呢？",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 109292,
    "runtime": "99 min",
    "releaseDate": "2001-08-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0312932",
    "id": "movie-1300616"
  },
  {
    "sourceId": "1307542",
    "title": "火柴人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1757301336.jpg",
    "summary": "罗伊（尼古拉斯·凯奇 Nicolas Cage饰）是一个手段高超的职业骗子，他有一个大胆且贪心的伙伴法兰克(萨姆·罗克韦尔 Sam Rockwell饰)，他们一起搭档了很多年，几乎没有失过手。",
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
    "rating": 8.2,
    "votes": 102959,
    "runtime": "116 min",
    "releaseDate": "2003-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0325805",
    "id": "movie-1307542"
  },
  {
    "sourceId": "1950330",
    "title": "罗马",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2018,
    "coverUrl": "",
    "summary": "故事发生在墨西哥城的一个中产阶级社区“罗马”，讲述年轻女佣克里奥（雅利扎·阿巴里西奥饰）在雇主索菲亚（玛丽娜·德·塔维拉饰）家中工作，该家中索菲亚的丈夫长期在外，由女佣克里奥照顾索菲的四个孩子。突如其来的两个意外，同时砸中了女佣克里奥和雇主索菲亚，两人究竟该如何面对苦涩茫然的生活？四位孩子似乎是希望所在。 这是以导演阿方索·卡隆的儿时记忆铸成的影片，而卡隆其实就是片中某一位小孩。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "墨西哥",
      "美国"
    ],
    "rating": 8.2,
    "votes": 90340,
    "runtime": "135 min",
    "releaseDate": "2019-05-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6155172",
    "id": "movie-1950330"
  },
  {
    "sourceId": "11600078",
    "title": "目击者之追凶",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2017,
    "coverUrl": "",
    "summary": "冲劲十足、富有野心的社会线记者小齐，在报导一则事故车还魂新闻时，意外发现9年前一宗肇事逃逸命案并不单纯，虽然提案不被长官邱哥重视，但相信直觉的小齐找上菜鸟警员阿纬帮忙，并说服女主管Maggie连手调查当年的真相。当小齐、Maggie 好不容易找到命案中唯一生还的受害者徐爱婷，并取得采访同意后 ，徐爱婷却无故失踪了…到底九年前被隐瞒的真相是什么？",
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
      "中国台湾"
    ],
    "rating": 8.2,
    "votes": 90318,
    "runtime": "117 min",
    "releaseDate": "2017-03-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5576318",
    "id": "movie-11600078"
  },
  {
    "sourceId": "25766754",
    "title": "年轻气盛",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2015,
    "coverUrl": "",
    "summary": "老友米克和弗雷德结伴前往阿尔卑斯的度假旅馆，他们以爱和幽默的视角，探讨子女们满是麻烦的生活。米克是导演，正在积极创作自己看来最重要的一部电影，而早就没有了事业追求的指挥家、作曲家弗雷德却收到女王伊丽莎白二世的邀请为菲利普的生日演奏。",
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
      "法国",
      "瑞士",
      "英国"
    ],
    "rating": 8.2,
    "votes": 84319,
    "runtime": "124 min",
    "releaseDate": "2015-05-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3312830",
    "id": "movie-25766754"
  },
  {
    "sourceId": "10733376",
    "title": "逆光飞翔",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2012,
    "coverUrl": "",
    "summary": "音乐天分超凡的男孩裕翔（黄裕翔饰）弹得一手好琴，却天生失明。他坚持不参加任何比赛，只希望能拥有像普通人一样的生活。他第一次离家北上念书，遇见热爱跳舞却因故被迫放弃梦想的女孩小洁（张榕容饰）。裕翔能“看见”世界上不被旁人看见的美丽，从未放弃过这个世界。他就像一缕温暖的逆光照进了小洁冰冷的内心，而小洁则带领着裕翔经历了他从未尝试过的冒险。两个看似永不会相交的灵魂，却成为彼此遗失的那份力量。两人身后的那道耀眼的逆光，正温暖着、鼓舞着他们向梦想展翅飞翔。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.2,
    "votes": 79838,
    "runtime": "107 min",
    "releaseDate": "2012-09-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2368920",
    "id": "movie-10733376"
  },
  {
    "sourceId": "3023164",
    "title": "点球成金",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1393286611.jpg",
    "summary": "在美国职业棒球大联盟MLB中，比利（布拉德•皮特 Brad Pitt 饰）所属的奥克兰运动家队败给了财大气粗的纽约扬基队，这让他深受打击。雪上加霜的是三名主力纷纷被重金挖走，未来的赛季前途渺茫。在管理层会议上，大家一头雾水，只有他暗下决心改造球队。一次偶然的机会，他认识了耶鲁大学经济学硕士彼得（乔纳•希尔 Jonah Hill 饰），两者对于球队运营的理念不谋而合。凭借直觉和经验，他仿佛找到了破解金元棒球的钥匙。他聘请彼得作为自己的顾问，一起研究如何打造最高胜率的球队。他们用数学建模的方式，逐渐开始挖掘上垒率的潜在明星，并通过软磨硬泡将他们招致麾下。他们不在乎高层的冷嘲热讽，只是专心地为球队寻找信心和实力的根源，终于新的赛季开始了……",
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
    "rating": 8.2,
    "votes": 75046,
    "runtime": "133 min",
    "releaseDate": "2011-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1210166",
    "id": "movie-3023164"
  },
  {
    "sourceId": "1297756",
    "title": "白雪公主和七个小矮人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1937,
    "coverUrl": "",
    "summary": "白雪公主原本是世界上最幸福的人，可惜当她母后逝去，父王娶了她继母后，这一切都改变了。恶毒的继母处处为难白雪公主，当她父王也死后，白雪公主过得更艰难了。这天，皇后从魔镜中得知世上最美的人不是自己而是白雪公主后，气急败坏的她下令武士将她带到森林处决了，好心的武士放走了白雪公主。夜晚，森林里的七个小矮人收留了无家可归的白雪公主。当皇后得知白雪公主还没死时，气急败坏的她决定亲自出马将白雪公主害死。第二天，她化妆成了一个老婆婆，带着毒苹果往森林深处走去。",
    "genres": [
      "Romance",
      "Animation",
      "Musical",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "动画",
      "歌舞",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 71331,
    "runtime": "83 min",
    "releaseDate": "1937-12-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0029583",
    "id": "movie-1297756"
  },
  {
    "sourceId": "3626372",
    "title": "大地惊雷",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1046956087.jpg",
    "summary": "因父亲被害，14岁的玛蒂·罗斯（海莉·斯坦菲尔德 Hailee Steinfeld 饰）抵达案发地史密斯堡，作为长女代表家人处理后事。杀死父亲的凶手汤姆·切尼已不知去向，在这枯燥又忙碌的西部小镇上，没人关心杀死异乡人的逃犯何时落网。玛蒂决定自己雇佣警察为父亲报仇，经人介绍，她选择与醉醺醺的警长罗斯特·考波恩（杰夫·布里吉斯 Jeff Bridges 饰）合作，同时，一名来自德克萨斯的骑警拉博夫（马特·达蒙 Matt Damon 饰）亦希望抓获汤姆·切尼，好在德州获得高额悬赏，为了让切尼在本地被正法，玛蒂必须在拉博夫之前抓到杀父仇人。成熟而坚强的玛蒂与罗斯特踏入了保留地，在那里有众多不法之徒，以及暂时逍遥法外的仇人……",
    "genres": [
      "Drama",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 69493,
    "runtime": "110 min",
    "releaseDate": "2010-12-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1403865",
    "id": "movie-3626372"
  },
  {
    "sourceId": "1292289",
    "title": "心动",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "",
    "summary": "女导演Cheryl（张艾嘉 饰）跟编剧商量准备开拍一部关于初恋的爱情故事，她决定把故事时间订在1977年，那时候的女主角小柔（梁咏琪 饰）只有17岁，在舞会上遇到了男主角浩君（金城武 饰）二人一见钟情，很快他们便陷入了热恋之中。小柔有一个好朋友叫陈莉（莫文蔚 饰），小柔除了跟她诉说心事以为，更是逃过妈妈追问出外过夜的好借口。浩君与小柔的家人很快知道了他们的事，两方家长都要求他们分手了断，伤心欲绝的小柔找到陈莉，原来陈莉一直喜欢小柔，令小柔惊吓不已。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "中国香港",
      "日本"
    ],
    "rating": 8.2,
    "votes": 67095,
    "runtime": "115 min",
    "releaseDate": "1999-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0215240",
    "id": "movie-1292289"
  },
  {
    "sourceId": "26657126",
    "title": "不成问题的问题",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2016,
    "coverUrl": "",
    "summary": "1940年代的大后方重庆，一间物产丰富却总是赔钱的树华农场，一场明争暗斗在新旧两个农场主任之间上演。这部根据老舍小说改编的影片似乎叙述了一个永不过时的人间寓言。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "法国"
    ],
    "rating": 8.2,
    "votes": 63996,
    "runtime": "133 min",
    "releaseDate": "2017-11-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6128782",
    "id": "movie-26657126"
  },
  {
    "sourceId": "1292697",
    "title": "虎胆龙威",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "",
    "summary": "警探约翰•麦卡伦（布鲁斯•威利斯 饰）从纽约来到洛杉矶，见他分别已有半年之久的妻子霍莉（邦尼•彼地丽娅 饰）。他被邀请参加在一栋大厦的30层举行的圣诞晚会。然而一群匪徒却打起了大厦金库中存有的六亿多元公债券的主意。他们封锁了大楼，将参加晚会的人扣作人质。麦卡伦侥幸逃脱，只身与匪徒们展开了激烈的斗争",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 59663,
    "runtime": "132 min",
    "releaseDate": "1988-07-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0095016",
    "id": "movie-1292697"
  },
  {
    "sourceId": "1291859",
    "title": "布拉格之恋",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "",
    "summary": "本片根据米兰·昆德拉的同名小说改编。1968年，布拉格外科手术医生托马斯（丹尼尔·戴-刘易斯 Daniel Day-Lewis 饰）生活在对女人追逐的快乐中，享受着性的快感。画家萨比娜（莉娜·奥琳 Lena Olin 饰）是托马斯的红颜知己，但在一次去温泉疗养院出诊的过程中，托马斯结识了女招待特蕾莎（朱丽叶·比诺什Juliette Binoche 饰）。不久，特蕾莎只身来到布拉格，二人结婚。托马斯在婚后依然不改与萨比娜或其他女人偷情的恶习，特蕾莎无法忍受托马斯的不忠，深夜出走，却碰上苏联武装入侵捷克。三人先后逃亡至瑞士日内瓦，萨比娜认识了当地大学教授弗兰茨（德雷克·德·林特 Derek de Lint 饰），特蕾莎失去工作终日闷闷不乐，带着小狗卡列宁孤身重返布拉格。在自由与束缚之间，托马斯究竟该如何选择呢？",
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
    "rating": 8.2,
    "votes": 53881,
    "runtime": "171 min",
    "releaseDate": "1988-02-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0096332",
    "id": "movie-1291859"
  },
  {
    "sourceId": "3011049",
    "title": "姐姐的守护者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p650019299.jpg",
    "summary": "为了让罹患血癌的凯特（苏菲亚·威希涅瓦 Sofia Vassilieva 饰）能够活下去，父母通过基因技术“制造”了与凯特的基因完美配型的小女儿——安娜（阿比吉尔·布莱斯林 Abigail Breslin 饰）。安娜感觉自己只是姐姐凯特的“药罐子”，11年来，凡是在凯特有需要的时候，无论是脐带血还是白血球、肝细胞、骨髓，她都得源源不断的向凯特提供。然而，即使有孤注一掷的妈妈（卡梅隆·迪亚茨 Cameron Diaz 饰）、无可奈何的爸爸，以及身边所有人的爱，凯特的情况还是越来越糟，肾功能的衰竭必须要年仅11岁的安娜捐献出自己的一个肾。这一次，安娜选择了拒绝，并且寻找到律师坎贝尔把母亲告上法庭，她要捍卫自己的身体。然而，法庭上哥哥杰西却吐露了另一番真相……",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 52098,
    "runtime": "109 min",
    "releaseDate": "2009-06-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1078588",
    "id": "movie-3011049"
  },
  {
    "sourceId": "4913185",
    "title": "杀戮",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1305342680.jpg",
    "summary": "平凡的一天，名叫扎克利和伊森的小男孩在某公园内发生争执，前者用棍子将后者的嘴打破。这起不大不小的儿童纠纷，将两对本没有任何交集的夫妇拉到了一起。经营小百货商店的麦克·朗斯特里特（约翰·C·赖利 John C Reilly 饰）与身为作家的潘妮洛普（朱迪·福斯特 Jodie Foster 饰）是伊森的父母，他们在家中迎来扎克利的父母——律师艾伦·考温（克里斯托弗·沃尔兹 Christoph Waltz 饰）以及投资经纪人南希（凯特·温斯莱特 KateWinslet 饰）——的拜访。他们就孩子的伤害事件协商、讨论、争执、冷嘲热讽、旁敲侧击，时而强作欢颜，时而面露不快，可是又不得不面对面度过这难熬与痛苦的一天……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "法国",
      "德国",
      "波兰",
      "西班牙"
    ],
    "rating": 8.2,
    "votes": 49339,
    "runtime": "80 min",
    "releaseDate": "2011-09-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1692486",
    "id": "movie-4913185"
  },
  {
    "sourceId": "6010171",
    "title": "给桃子的信",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "11岁的小学6年级女孩宫浦桃子（美山加恋 配音）在父亲意外去世后，随母亲郁子（优香 配音）从东京迁到了濑户内海的汐岛。忙碌的母亲无暇顾及桃子，令桃子在新环境中时常感到孤单无助。桃子一直保留着父亲只写下了“给桃子”这样开头的一封信，但是始终无法明白父亲想要通过信件传达给她的话 。 初到汐岛，桃子打开了阁楼里一个装着描绘妖怪画册的旧盒子，从此开始察觉到身边一连串不可思议的事情。“汐岛上一定存在着什么东西”，怀抱着这样想法的桃子，在汐岛奇异而热闹的夏天里邂逅到的竟会是……？",
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
    "rating": 8.2,
    "votes": 44042,
    "runtime": "120 min",
    "releaseDate": "2011-09-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1853614",
    "id": "movie-6010171"
  },
  {
    "sourceId": "1296272",
    "title": "跛豪",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1820465199.jpg",
    "summary": "1962年，内地正值经济困难时期，随难民潮逃到香港的汕头青年吴国豪（吕良伟）因不甘被黑帮欺凌，投靠黑帮大佬肥波（郑则士），几场拼命的血战后，他被肥波重用，在黑帮中确立下地位，势力越来越大。",
    "genres": [
      "Drama",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 41576,
    "runtime": "143 min",
    "releaseDate": "1991-04-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0101490",
    "id": "movie-1296272"
  },
  {
    "sourceId": "1292531",
    "title": "华尔街",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2215746342.jpg",
    "summary": "美国华尔街股市大亨戈登·盖柯（迈克尔·道格拉斯 Michael Douglas 饰）在金融界叱咤风云，人人敬畏。在随时随地上演的金融大战中，他总能百战百胜。初出茅庐的纽约大学毕业生保罗·巴德（查理·辛 Charlie Sheen 饰）野心勃勃，却空有满腔热血而投报无门。 一个偶然的机会，他接触到盖柯，用一个股市内幕情报帮其赚了笔大钱而受到重用，成为盖柯的合伙人之一。在对金钱、美女、上流社会的渴求下，巴德开始利用身边所有的人来刺探一切有利的商业情报，为自己获利。直到在一场收购他父亲所工作的蓝星航空公司的过程中，贪得无厌的盖柯出尔反尔想要解散并卖掉它，这让尚有良知的巴德幡然醒悟。他利用盖柯教会他的一切股市战术，狠狠地反击了大亨盖柯，帮助父亲拯救了蓝星航空。然而，因为违法操控股票内线交易，巴德不得不面临着冰冷的铁窗……",
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
    "rating": 8.2,
    "votes": 41546,
    "runtime": "126 min",
    "releaseDate": "1987-12-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0094291",
    "id": "movie-1292531"
  },
  {
    "sourceId": "1297710",
    "title": "天若有情",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2564014416.jpg",
    "summary": "华弟（刘德华 饰）是一个黑道的小混混，喜欢从飚车中得到快感，整天骑着电单车。他在极不愿意的情况下做了一宗抢劫案，警方怀疑他实施追捕，他挟持了富家女Jojo（吴倩莲 饰）出走，没想到他们不管悬殊的身份地位，很快爱上了对方。Jojo不管家里人的反对跟着华弟出走。华弟后来更遭到了黑道老大的追杀，两人亡命天涯。",
    "genres": [
      "Drama",
      "Action",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 41333,
    "runtime": "87 min",
    "releaseDate": "1990-06-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100777",
    "id": "movie-1297710"
  },
  {
    "sourceId": "1937257",
    "title": "微不足道",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1517352664.jpg",
    "summary": "博士查理（大卫•休默 David Schwimmer 饰）最近遇到了麻烦。不仅丢掉了大学里的工作，自己写的书也出版无望。为了不成为家里的负担，查理找到了份电话销售的工作，在那里认识了自来熟的同事加斯（西蒙•佩吉 Simon Pegg 饰）。加斯告诉了查理他的计划，即敲诈一位经常浏览色情网站的牧师。为了让家人过上富足的生活，查理答应加入，再加上加斯一夜情的女友朱茜（爱丽丝•伊芙 Alice Eve 饰），三人开始了这个计划。",
    "genres": [
      "Comedy",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "英国",
      "加拿大"
    ],
    "rating": 8.2,
    "votes": 41023,
    "runtime": "86 min",
    "releaseDate": "2006-12-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0488085",
    "id": "movie-1937257"
  },
  {
    "sourceId": "1308078",
    "title": "紫日",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "",
    "summary": "二战即将结束时，忠厚老实的中国老百姓杨玉福（富大龙）被苏联红军从日本人的屠刀下救出。向后方转移的路上，苏军误入日军军营，一场激战过后，杨玉福和女军医娜佳（安娜•捷尼拉洛娃）逃进林区，碰上与日军失散的少女秋叶子（前田知惠）。由于一直被灌输军国主义思想，秋叶子一心要置杨玉福和娜佳于死地。几次险境过后，娜佳无法忍受秋叶子的作为，让杨玉福杀了她，但后者不忍下手。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 40474,
    "runtime": "106 min",
    "releaseDate": "2001-04-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0303260",
    "id": "movie-1308078"
  },
  {
    "sourceId": "10773239",
    "title": "小男孩",
    "countryCode": "MX",
    "countryName": "Mexico",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事发生在二战时期的一个美国沿海小镇，八岁小男孩Pepper（雅各布·萨尔瓦提 Jakob Salvati 饰）天生矮小瘦弱，为此没少受同龄人欺负，还被取绰号为“小男孩”（little boy）。他最好的朋友兼搭档，就是自己高大魁梧的父亲詹姆斯（迈克尔·拉帕波特 Michael Rapaport 饰）。在父亲的教导陪伴下，Pepper渡过了一段美好的时光。直到父亲应召入伍，投入到第二次世界大战的战场中去。",
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
      "墨西哥",
      "美国"
    ],
    "rating": 8.2,
    "votes": 40276,
    "runtime": "106 min",
    "releaseDate": "2015-04-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1810683",
    "id": "movie-10773239"
  },
  {
    "sourceId": "1303451",
    "title": "海上花",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554535546.jpg",
    "summary": "该片改编自张爱玲曾将其“翻译”成国语的吴语小说《海上花列传》。上海英租界一所名叫“长三公寓”的高级妓院里，红倌人沈小红（羽田美智子）、黄翠凤（李嘉欣）与周双珠（刘嘉玲）心事迥异，一个想同某个男人建立长久关系，一个一边与多个男人斡旋，一边秘密锁定其中最有闲有钱的一位，想其 将来帮她赎身，另一个心地仁厚，却又看破红尘，觉得人生不过如此。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.2,
    "votes": 35398,
    "runtime": "130 min",
    "releaseDate": "1998-10-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0156587",
    "id": "movie-1303451"
  },
  {
    "sourceId": "1463872",
    "title": "星之声",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "",
    "summary": "故事始于2046年，为了追捕侵袭火星的外星人多鲁米斯星人，宇宙探索舰Lysithea号在各地挑选先发人员，初中生美加子（武藤寿美配）也成为一名宇宙员。开始了辗转于火星、太空基地、木星、冥王星等各地的演习。",
    "genres": [
      "Romance",
      "Sci-Fi",
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "爱情",
      "科幻",
      "动画",
      "短片"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 34176,
    "runtime": "25 min",
    "releaseDate": "2002-02-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0370754",
    "id": "movie-1463872"
  },
  {
    "sourceId": "1310175",
    "title": "群鸟",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1963,
    "coverUrl": "",
    "summary": "米兰妮（蒂比·海德莉 Tippi Hedren 饰）是一个富家女，偶然在宠物店里遇见律师米契（罗德泰勒Rod Taylor 饰），二人萌生爱意。第二天米兰妮带着她的一对宠物鹦鹉到访米契居住的波德加湾小镇，却被一只海鸥袭击，当场受伤。然而谁也没料到，这次鸟袭击人的事件，只是鸟类大规模攻击人类的小序幕。",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 32609,
    "runtime": "119 min",
    "releaseDate": "1963-03-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0056869",
    "id": "movie-1310175"
  },
  {
    "sourceId": "1292625",
    "title": "绿野仙踪",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1939,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1923206570.jpg",
    "summary": "小女孩桃乐丝·盖尔（Judy Garland 饰）随叔叔、婶婶住在堪萨斯州中部的农场。某天，龙卷风袭来，为找到心爱的小狗，桃乐丝没能及时躲藏。强大的龙卷风将桃乐丝藏身的小木屋卷入空中。不知经过多久，小木屋终于落到地面，而且把一个邪恶的女巫也给压死了。在善良的北方女巫的指点下，桃乐丝和小狗启程前往魔法师奥兹（Frank Morgan 饰）所居住的翡翠城，祈求他能帮助自己回家。路上，桃乐丝遇见了没有脑子的稻草人（Ray Bolger 饰）、缺少心脏的铁皮人（Jack Haley 饰）以及胆小如鼠的狮子（Bert Lahr 饰），为了实现各自的愿望，他们随桃乐丝一同前行。一路上经历千难万险，更有邪恶的西方女巫处处阻挠，他们的愿望最终能否实现呢？",
    "genres": [
      "Musical",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "歌舞",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 32054,
    "runtime": "101 min",
    "releaseDate": "1939-08-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0032138",
    "id": "movie-1292625"
  },
  {
    "sourceId": "1292396",
    "title": "香港制造",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "",
    "summary": "有惨淡家境的香港街头小混混中秋（李灿森）虽对未来迷茫，为人却很豪爽讲义气，将总被人欺负的弱智男孩阿龙（李栋泉）当作自己的亲人“罩”着，可是在他被仇家捅成重伤躺在医院时，老大派去运毒的阿龙被人打死。",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 30807,
    "runtime": "108 min",
    "releaseDate": "1997-10-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0123328",
    "id": "movie-1292396"
  },
  {
    "sourceId": "1294584",
    "title": "雌雄大盗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1967,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p874655660.jpg",
    "summary": "本片根据美国历史上著名雌雄大盗邦妮•派克和克莱德•巴罗的真实经历拍摄。",
    "genres": [
      "Action",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 30426,
    "runtime": "111 min",
    "releaseDate": "1967-08-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0061418",
    "id": "movie-1294584"
  },
  {
    "sourceId": "26215216",
    "title": "将来的事",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2016,
    "coverUrl": "",
    "summary": "娜塔莉（伊莎贝尔·于佩尔 Isabelle Huppert 饰）是一名哲学教师，和丈夫汉斯（安德烈·马孔 André Marcon 饰）结婚数十年，两人共同养育了两个孩子，日子过得平静而美满。某日，汉斯忽然和娜塔莉坦白，自己在外面有了情人，不仅如此，他还打算从家里搬出去和情人同居，虽然娜塔莉表面故作镇定，但内心却遭受了强烈的打击。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "德国"
    ],
    "rating": 8.2,
    "votes": 29799,
    "runtime": "102 min",
    "releaseDate": "2016-02-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4120176",
    "id": "movie-26215216"
  },
  {
    "sourceId": "27042467",
    "title": "摇摆狂潮",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2018,
    "coverUrl": "",
    "summary": "叛逆青年奇秀在战俘营中被美国大兵的踢踏舞深深吸引，于是加入了名为“Swing Kids”的舞团。然而，只想在战俘营中尽情跳舞的小小梦想，却让这群不分南北阵营与国籍的舞者身陷危机…",
    "genres": [
      "Drama",
      "Musical",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "歌舞",
      "战争"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8.2,
    "votes": 28909,
    "runtime": "133 min",
    "releaseDate": "2018-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7046974",
    "id": "movie-27042467"
  },
  {
    "sourceId": "1295344",
    "title": "喋血街头",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1329107141.jpg",
    "summary": "细荣(李子雄饰）、阿B（梁朝伟饰），辉仔（张学友饰）在石殎尾陡置区一同成长，三人情同手足，虽然各人家境贫困，年轻的心从没有失去对将来的幻想与憧憬。阿B因要与女友小珍（袁洁莹饰）结婚，众人各出奇谋为阿B筹钱。辉仔借来高利贷途中被劫，辉仔负伤往婚礼。及后，阿B与辉仔往复仇而误杀废强，细荣众人遂到越南逃亡。其时西贡市长外弛内张，对众人来说便是炼狱，更遇上越共刺杀越南政要，细荣遂决定要拼死捞一笔钱才离开越南。细荣远亲中、法混血儿阿乐（任达华饰）是职业杀手，阿乐得悉越南恶霸梁源盛在夜总会有黄金交易，遂与一众里应外合，激战后把黄金抢走，阿B为拯救一位香港女歌星陈秀青而险丧命……",
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
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 28854,
    "runtime": "130 min",
    "releaseDate": "1990-08-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0099426",
    "id": "movie-1295344"
  },
  {
    "sourceId": "1296697",
    "title": "人猿星球",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1968,
    "coverUrl": "",
    "summary": "一艘出发自二十世纪的宇宙飞船经过6个月的近光速飞行，相当于经历了七百年时间，船长泰勒（查尔登•海斯顿 Charlton Heston 饰）设定自动飞行状态后，飞船最终坠落在公元3978年的一颗陌生星球上。泰勒和两名幸存队员发现该星球与地球环境相当，而且竟然存在没有语言能力靠采集为生的人类，不待泰勒进行进一步的考察，一群具有智能的人猿突然出现将一众人类捕获。原来这颗星球的主人是人猿，人类只不过是供他们捕猎研究的野兽，人猿博士基拉（金•亨特 Kim Hunter 饰）和男友康奈利分别进行着人类行为学和人猿历史的研究，喉部受伤的泰勒暂时失去语言能力，但他的沟通行为很快引起了基拉的注意，在顽固的人猿学术界引发了争议。一直设法争取自由的泰勒不久终于发现了人猿星球的真相……",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 24320,
    "runtime": "112 min",
    "releaseDate": "1968-02-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0063442",
    "id": "movie-1296697"
  },
  {
    "sourceId": "1299799",
    "title": "赌城风云",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2165152819.jpg",
    "summary": "电影《赌城风云》是由大导演马丁·斯科塞斯与老拍档罗伯特·德尼罗的第八度合作。萨姆·“埃斯”·罗思坦（罗伯特·德尼罗 Robert De Niro 饰）抱着“赌博是一桩需要认真对待的事业”这个信念经营这一家拉斯维加斯的赌场。这个信念使他的赌场生意兴隆，而也让他成为富四一方的大亨。但是自从他娶了妓女出身的金姬（莎朗·斯通 Sharon Stone 饰）后，一切都发生了改变。金姬是个贪得无厌，嗜好酒和毒品的美丽女人，对前男友旧情不忘甚至给他送钱；黑社会老大派来保护萨姆的尼基（乔·佩西 Joe Pesci 饰）总是触犯法律，被警方禁止踏足赌场，还不量力要当老板；萨姆开除了不负责任的雇员却得罪了当地的官员；更糟糕的是，萨姆和昔日的合作伙伴间的摩擦加剧。所有的一切，都使萨姆心神不宁……",
    "genres": [
      "Drama",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 8.2,
    "votes": 24149,
    "runtime": "178 min",
    "releaseDate": "1995-11-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0112641",
    "id": "movie-1299799"
  },
  {
    "sourceId": "1307812",
    "title": "双旗镇刀客",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548599876.jpg",
    "summary": "中国西部，黄沙漫天，马嘶人怒。自幼跟随父亲操练关西无极刀法的孩哥（高伟 饰）遵照父亲的遗嘱，来到双旗镇寻找指腹为婚的妻子好妹（赵玛娜 饰）。只叹人情冷暖，世态炎凉，好妹及其父亲瘸子（常江 饰）毫不待见这个男孩。婚期无望，孩哥只得暂时在瘸子的店里当小伙计。一日，土匪二爷意欲强暴好妹，结果为孩哥所杀。此举惹恼了长年盘踞双旗镇的土匪头子一刀仙（孙海英 饰）。由此惹得滚滚狂沙中刀光剑影，鲜血四溅……",
    "genres": [
      "Action",
      "Adventure",
      "Wuxia"
    ],
    "originalGenres": [
      "动作",
      "冒险",
      "武侠"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 23522,
    "runtime": "91 min",
    "releaseDate": "1991-05-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0102917",
    "id": "movie-1307812"
  },
  {
    "sourceId": "23048775",
    "title": "昆虫总动员",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "",
    "summary": "在一片宁静的丛林里，在人类的行迹之下，掩藏着一个生机勃勃、热闹非凡的昆虫世界。一只瓢虫遭遇丛林各色虫类追赶，又闯入红黑蚂蚁的战争现场，亲身见证一场昆虫界的“特洛伊攻城”。影片想象力天马行空，不断抛出新的昆虫物种及各色设计感丰富的道具，在银幕上走马观花，笨拙的蜘蛛、卖萌的瓢虫、精明的蚂蚁，轮番登场，教人目不暇接。整部影片没有对白，以3D形式呈现出昆虫王国的微观世界，动画与实景拍摄结合，创造与好莱坞动画趣味大有不同的法式动画大片。",
    "genres": [
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "法国",
      "比利时"
    ],
    "rating": 8.2,
    "votes": 23464,
    "runtime": "89 min",
    "releaseDate": "2014-08-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2368672",
    "id": "movie-23048775"
  },
  {
    "sourceId": "20441632",
    "title": "爱，简单",
    "countryCode": "BR",
    "countryName": "Brazil",
    "year": 2014,
    "coverUrl": "",
    "summary": "女孩吉瓦娜（Tess Amorim 饰）和男孩里奥（Ghilherme Lobo 饰）是最要好的朋友。里奥虽然双目失明，但内心一直渴望自立，不喜欢来自父母的过多保护。新来转校生加百列（Fabio Audi 饰）不小心闯入里奥的世界，也改变了里奥和吉瓦娜的相处习惯。里奥对爱上加百列患得患失，吉瓦娜对里奥的疏远伤心难过，而加百列懵懵懂懂的回应更让男孩女孩们的世界复杂起来......",
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
      "巴西"
    ],
    "rating": 8.2,
    "votes": 22781,
    "runtime": "95 min",
    "releaseDate": "2014-02-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1702014",
    "id": "movie-20441632"
  },
  {
    "sourceId": "2251569",
    "title": "男孩A",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p574349406.jpg",
    "summary": "24岁的杰克（安德鲁·加菲尔德 Andrew Garfield 饰）获得假释出狱，负责接管他的特里（彼得·穆兰 Peter Mullan 饰）为他安排了新名字新房子新工作，于是他用“杰克”这个名字开始了新生活。在新的工作环境中，杰克认识了新朋友克里斯（肖恩·埃文斯 Shaun Evans 饰），也结交了一个女朋友米歇尔（凯蒂·里昂丝 Katie Lyons 饰），还在一次车祸中救了一名女孩。然而，已经改过自新的他必须向所有人隐瞒——自己曾经是个杀人犯的秘密。曾经的杰克是个受到老师家长冷落的少年，他和唯一的朋友菲利普整天厮混在一起，有一天，他们在小树林里残忍地杀害了一名少女……",
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
      "英国"
    ],
    "rating": 8.2,
    "votes": 22626,
    "runtime": "106 min",
    "releaseDate": "2007-09-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1078188",
    "id": "movie-2251569"
  },
  {
    "sourceId": "1293564",
    "title": "木兰花",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2189098969.jpg",
    "summary": "汤姆·克鲁斯凭此片获金球奖最佳男配角奖。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 22068,
    "runtime": "188 min",
    "releaseDate": "1999-12-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0175880",
    "id": "movie-1293564"
  },
  {
    "sourceId": "1293683",
    "title": "艾德·伍德",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1704315869.jpg",
    "summary": "这是一部关于奋斗的个人自传电影。1951年，心怀大志的艾德•伍德（约翰尼•德普 Johnny Depp 饰）终于等来机会上演一出自导自演的电影，但是，这个计划不久就夭折了。",
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
      "美国"
    ],
    "rating": 8.2,
    "votes": 21733,
    "runtime": "127 min",
    "releaseDate": "1994-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0109707",
    "id": "movie-1293683"
  },
  {
    "sourceId": "1292449",
    "title": "惊世狂花",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p880917786.jpg",
    "summary": "薇拉（珍妮佛•提莉 Jennifer Tilly 饰）是黑道中人的老婆，阴暗的生活令她非常厌倦。这天，她家隔壁新搬来了一个颇有男子气质的女邻居高琪（吉娜•吉舍恩 Gina Gershon 饰），她会亲自动手修下水管，打扮总是非常脏乱。一种莫名的情愫在薇拉心中涌动，她主动接近高琪，风情万种的引诱她，二人终于堕入断臂之爱。薇拉一心想和高琪远走高飞，逃离现在的生活。于是，高琪和她展开了一场危险游戏。",
    "genres": [
      "Drama",
      "Thriller",
      "LGBTQ+",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "同性",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 20848,
    "runtime": "108 min",
    "releaseDate": "1996-10-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0115736",
    "id": "movie-1292449"
  },
  {
    "sourceId": "25745651",
    "title": "妈咪",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2014,
    "coverUrl": "",
    "summary": "单亲妈妈戴安（安妮·杜尔瓦勒 Anne Dorval 饰）大大咧咧，抽烟喝酒满口脏话，有着一颗不服输的心。她独自抚养患有多动症、常做出暴力行为的儿子斯蒂夫（安托万-奥利弗·波尼安 Antoine-Olivier Pilon 饰），母子关系游走在爆炸的边缘。戴安担心斯蒂夫惹是生非，斯蒂夫迫切想表达对妈妈的爱。新邻居凯拉（苏珊娜·克莱蒙 Suzanne Clément 饰）适时出现，这位患有失语症的高中女教师充当了母子的缓冲阀，让三个人都开始看到平衡和希望。然而斯蒂夫以前暴力行为带来的后果正在发酵，戴安需要支付一大笔赔偿金。她决定出卖自己的幸福并且做出一个痛苦决定：将儿子送回医院接受治疗......",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 8.2,
    "votes": 20556,
    "runtime": "139 min",
    "releaseDate": "2014-05-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3612616",
    "id": "movie-25745651"
  },
  {
    "sourceId": "1291863",
    "title": "追捕",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1976,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2198650728.jpg",
    "summary": "为人正直的检查官杜丘（高仓健 饰）被人控告犯有抢劫、强奸罪，自知清白的他为了洗清冤屈，开始了一边躲避警察追捕、一边查找事实真相的逃亡。",
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
      "日本"
    ],
    "rating": 8.2,
    "votes": 20207,
    "runtime": "151 min",
    "releaseDate": "1976-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0327002",
    "id": "movie-1291863"
  },
  {
    "sourceId": "1307679",
    "title": "不夜城",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p643108501.jpg",
    "summary": "刘健一（金城武饰）是新宿歌舞伎町的混混，身为台湾与日本人的残留孤儿，混血的他被叫作半唐番，不为社会所容纳。歌舞伎町有着上海帮、福建帮、北京帮、台湾帮等，各方力量形成复杂的角力形势。年关将至，似乎是因为健一的前度拍档吴富春（椎名桔平饰）返回歌舞伎町，他因杀死元成贵（曾志伟饰）的手下而逃亡，元成贵遂限令健一在三日内交出富春，否则二人便只有死路一条。此时左藤夏美（山本未来饰）出现，她称与有过节，为了活命甘愿出卖一切，健一被她吸引。富春终于现身，偷袭元成贵的情妇黄秀红的夜总会“上海滩”，令健一陷入绝境。所有人都劝他离开歌舞伎町，但真相并不是那么简单，命运并没有眷顾二人……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港",
      "日本"
    ],
    "rating": 8.2,
    "votes": 19135,
    "runtime": "122 min",
    "releaseDate": "1998-06-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0169929",
    "id": "movie-1307679"
  },
  {
    "sourceId": "11443807",
    "title": "蝙蝠侠：黑暗骑士归来(上)",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "阴云密布的高谭市，自蝙蝠侠消失的十年里，变种人团伙为非作歹，变本加厉，将这座繁华城市变成充满恐怖和凶杀的罪恶王国。嫉恶如仇的吉姆·戈登探长（大卫·塞尔比 David Selby 配音）行将退休，却不免成为变种人下一个袭击的目标。随着双面人哈维·登特（韦德·威廉姆斯 Wade Williams 配音）走出精神病院，高谭市被带入更加阴冷的黑暗之中。与此同时，富翁布鲁斯·韦恩（彼得·威勒 Peter Weller 配音）置身事外，享受着养尊处优的上流生活。而旧日记忆的复苏，一步步引导着他再次拿起搁置已久的战斗服。夜幕降临，老态龙钟的蝙蝠侠穿梭城市的阴暗角落，以无情的手段惩治恶徒。",
    "genres": [
      "Action",
      "Animation"
    ],
    "originalGenres": [
      "动作",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 18161,
    "runtime": "76 min",
    "releaseDate": "2012-09-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2313197",
    "id": "movie-11443807"
  },
  {
    "sourceId": "1308685",
    "title": "烟花",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1995,
    "coverUrl": "",
    "summary": "小学生典道（山崎裕太）与佑价（反田孝幸）等同伴们就烟花升腾而起时是扁是圆展开争论，无果后，众人困惑起来，为了将困惑解决，他们决定趁夏季花火大会的机会去燃放烟花的灯塔上一探究竟。",
    "genres": [
      "Drama",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "儿童"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 18068,
    "runtime": "49 min",
    "releaseDate": "1995-08-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0217862",
    "id": "movie-1308685"
  },
  {
    "sourceId": "1292660",
    "title": "惊曝内幕",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p827331728.jpg",
    "summary": "劳埃尔-伯格曼(艾尔-帕西诺饰)是CBS电视台“60分钟”节目的王牌制作人，和德高望重的节目主持人迈克-华莱士(克里斯托弗-普拉默饰)向来合作无间。乔佛瑞-维根(罗素-克罗饰)刚被大烟草公司解雇，他的人生似乎瞬间坠入谷底。伯格曼收到一份显示烟草公司制造的香烟对人体有害的报告，找到维根来翻译。然而从这个时候开始，维根便感觉到有人在跟踪监视自己，并给家人带来极大的威胁。烟草公司提醒维根与自己签署的保密协议，他将不能公开任何有关香烟制造的研究给公众。维根不想失去医疗保险等等对家人生活的保障，然而又在备受良心拷问。他最终决定向外界宣布这一切，即使违反保密协议。他先和伯格曼录制了一集“60分钟”栏目，然后前往密西西比州出庭作证控告烟草公司。",
    "genres": [
      "Drama",
      "Thriller",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 18051,
    "runtime": "157 min",
    "releaseDate": "1999-11-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0140352",
    "id": "movie-1292660"
  },
  {
    "sourceId": "1431951",
    "title": "人参娃娃",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1962,
    "coverUrl": "",
    "summary": "北方某个美丽的小山村被财主胡刮皮霸占着，他对小长工小虎子非常苛刻，动不动就打骂。某日，他嫌刚挑完水的小虎子干活偷工减料，规定他挑满十大缸水方能睡觉，小虎子挑了将近一夜，仍没将活干完，可是在看到井边有个身穿红布兜的小兄弟（人参娃）想喝水时，他还是停下手里的活帮起他的忙来。",
    "genres": [
      "Animation",
      "Short",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "短片",
      "儿童"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 17725,
    "runtime": "26 min",
    "releaseDate": "1962-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-1431951"
  },
  {
    "sourceId": "26653676",
    "title": "我是布莱克",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "59岁的丹尼尔·布莱克（戴夫·琼斯 Dave Johns 饰）是个木匠，由于心脏问题，他生平第一次需要申请社会救济。尽管他的医生禁止他继续工作，但他依然决定冒着被罚款的风险找一份工作。在他反复前往“就业中心”求职的过程中，他结识了凯蒂（海莉·斯奎尔斯 Hayley Squires 饰），一位需要照顾两个孩子的单身母亲。为了不让孩子流落到儿童福利院，她不得不住在一间离自己出生地450公里远的住房内。当今英国行政机构的繁琐程序就像一张网，牢牢套住两人。丹尼尔和凯蒂决定尝试相互帮助……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "英国",
      "法国",
      "比利时"
    ],
    "rating": 8.2,
    "votes": 17650,
    "runtime": "100 min",
    "releaseDate": "2016-05-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5168192",
    "id": "movie-26653676"
  },
  {
    "sourceId": "3039187",
    "title": "阿基里斯与龟",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2194386594.jpg",
    "summary": "富商之子仓持真知寿（吉岡澪皇 饰）从少年时代便痴迷绘画，随着父亲企业的破产，父母相继自杀，真知寿的童年也变得一片黯淡。即便如此，他也从未放弃成为画家的梦想。时光流转，转眼长成青年的真知寿（柳忧怜 饰）自顾自徜徉在艺术的世界中。为了提高技艺，他就读艺术学校，遇到一班志同道合的好朋友，和他们经历了喜怒哀乐、悲欢离合。他经常往返于画廊，而作品却迟迟得不到赏识，唯有同在印刷厂打工的少女幸子（麻生久美子 饰）真切理解真知寿的艺术。",
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
    "rating": 8.2,
    "votes": 16779,
    "runtime": "119 min",
    "releaseDate": "2008-09-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1217243",
    "id": "movie-3039187"
  },
  {
    "sourceId": "1299795",
    "title": "非常公寓",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1996,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p581851559.jpg",
    "summary": "麦克斯（文森特•卡塞尔 Vincent Cassel 饰）和女友就要步入结婚的殿堂，他却意外地看到失踪了的前女友丽萨（莫妮卡•贝鲁齐 Monica Bellucci 饰）。往事一幕幕闪回：他们曾经是甜蜜的一对，却因为没有转交到丽萨手中的一封信而错过了这段感情——这个遗憾恰恰是由于丽萨的邻居爱丽丝（罗曼娜•波琳热 Romane Bohringer饰）一手造成，她暗恋麦克斯已久，麦克斯叮嘱她交给丽萨的信，其实一直搁置在她手中。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑"
    ],
    "originalRegions": [
      "法国",
      "西班牙",
      "意大利"
    ],
    "rating": 8.2,
    "votes": 16248,
    "runtime": "116 min",
    "releaseDate": "1996-07-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0115561",
    "id": "movie-1299795"
  },
  {
    "sourceId": "1293118",
    "title": "龙争虎斗",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1973,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p581902469.jpg",
    "summary": "少林叛徒韩先生（石坚 饰）背叛少林后，斥资买下一座小岛将其改造成私人王国，韩先生及一干手下在岛上制贩毒品，强迫女性卖淫，警方欲将其绳之以法却苦无证据。少林高徒李（李小龙 饰）的功夫已经超越有形境界，他受师傅与政府请托，准备参加三年一度由韩先生主办的比武大会。比武大会期间，是登陆孤岛搜集证据的唯一机会。同时韩先生的私人保镖熬加达曾经杀害了李的姐姐，是李恨之入骨的仇人。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 16025,
    "runtime": "102 min",
    "releaseDate": "1973-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0070034",
    "id": "movie-1293118"
  },
  {
    "sourceId": "1293098",
    "title": "小倩",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2179017609.jpg",
    "summary": "故事出自连拍三集的《倩女幽魂》，徐克二维人物动作结合三维背景电脑处理，成为卡通漫画版。电影制作历时四年，糅合了日本动画和中国传统中国板画风格。",
    "genres": [
      "Comedy",
      "Action",
      "Romance",
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情",
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 15875,
    "runtime": "84 min",
    "releaseDate": "1997-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0125037",
    "id": "movie-1293098"
  },
  {
    "sourceId": "30140231",
    "title": "沦落人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "这是关于两个沦落香港的最低下层的人的故事。中年男子汉昌荣（黄秋生饰）因意外受伤瘫痪后妻离子散，他认为人生再没有值得期望的东西，而自己亦不值得拥有任何东西。年轻菲佣Evelyn（Crisel Consunji饰）因为现实的原因，成为了一个寄人篱下的工人，放弃了成为摄影师的梦想。那一个夏天，这样的两个陌生人相遇相识，感情在他们的主仆关系中发芽，然而盛放的，却是灵魂与灵魂之间的尊重和爱。他们一起经历的春夏秋冬，令他们学习到底要怎样面对人生的四季。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 15609,
    "runtime": "112 min",
    "releaseDate": "2019-04-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8497794",
    "id": "movie-30140231"
  },
  {
    "sourceId": "1448758",
    "title": "半斤八两",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1976,
    "coverUrl": "",
    "summary": "万能私家侦探社是一家连同社长黄若思（许冠文）在内只有三名工作人员的小侦探社，由于生意不咸不淡，加上黄若思为人小气刻薄，员工河豚（许冠英）和积琪（赵雅芝），尤其前者没少遭罪。原在汽水厂上班的李国杰（许冠杰）因工作偷懒被老板解雇，一身好功夫的他来到万能求职，黄若思起初不肯雇用，随后见他的确有两把刷子，应了下来，薪水自然苛刻。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.2,
    "votes": 15339,
    "runtime": "94 min",
    "releaseDate": "1976-12-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0074179",
    "id": "movie-1448758"
  },
  {
    "sourceId": "1294562",
    "title": "虎！虎！虎！",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1970,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1560626387.jpg",
    "summary": "这是一部真实的电影，真实展现了日军偷袭珍珠港的历史。美军插手太平洋战场，日军最高将领山本五十六（山村聪 Sô Yamamura 饰）认为美军实力强大，应速战速战，不宜和美国人打长久战。于是，由他一手策划的偷袭珍珠港行动正式启动了。",
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
      "美国",
      "日本"
    ],
    "rating": 8.2,
    "votes": 14804,
    "runtime": "144 min",
    "releaseDate": "1970-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0066473",
    "id": "movie-1294562"
  },
  {
    "sourceId": "1307176",
    "title": "GO!大暴走",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2221153968.jpg",
    "summary": "杉原（洼冢洋介 饰）是高中三年级生，性格暴戾好斗，拳术了得，而这些都来源于他父亲的教导。他的父亲三年前借着去夏威夷之名，暗中从朝鲜国籍换成了韩国国籍。但是，在日本的韩国人身份一直是生杉原的心结。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 14682,
    "runtime": "122 min",
    "releaseDate": "2001-10-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0299937",
    "id": "movie-1307176"
  },
  {
    "sourceId": "1316511",
    "title": "我的1919",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2461241975.jpg",
    "summary": "1919年，随着第一次世界大战结束，被战火蹂躏的欧洲尚未恢复元气，旨在解决战争遗留问题和奠定和平基础的巴黎和会准备召开，中国作为战胜国之一，派出了时任驻美公使、全权代表顾维钧（陈道明 饰）等五人组成的代表团参加和会。然而在欧美各国以及日本等列强意欲重新划分势力范围的大环境下，中国代表团人数遭到削减、德国在山东的利益眼看也要落入日本之手。顾维钧在会议上慷慨陈词，驳斥日方无理要求，然而公理在利益面前显得多么脆弱。顾维钧好友肖克俭（何政军 饰）之妻梅（许晴 饰）专程赶赴巴黎，寻找投身爱国工人运动的克俭。克俭在法国的活动、以及国内浩大的群众呼声令和会中的顾维钧等感受到责任重大。",
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
      "中国大陆"
    ],
    "rating": 8.2,
    "votes": 14328,
    "runtime": "98 min",
    "releaseDate": "1999-09-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0441912",
    "id": "movie-1316511"
  },
  {
    "sourceId": "3742987",
    "title": "小小的白色谎言",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p693375939.jpg",
    "summary": "每一年，餐馆老板马克思（弗朗索瓦·克鲁塞 François Cluzet 饰）都会请他的朋友们来到他在海边的别墅度假，而这一年的假期，却被一场发生在卢多（让·杜雅尔丹 Jean Dujardin 饰）身上的严重车祸蒙上了阴影。为了冲淡悲伤，朋友们决定像往常一样前往海边。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.2,
    "votes": 13694,
    "runtime": "154 min",
    "releaseDate": "2010-10-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1440232",
    "id": "movie-3742987"
  },
  {
    "sourceId": "3369765",
    "title": "空之境界 第六章 忘却录音",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "",
    "summary": "1999年1月，黑桐鲜花所就读的高级女子中学——礼园出现了神秘的事件。一年四班的学生橘佳织在宿舍起火事件中身亡，随后，一年四班全体同学的生活改变了。每天活在痛苦与烦恼中的她们，收到了不明来源的信件。不安的情绪在礼园全体学生间蔓延。为了解决事件，两仪式假扮学生潜入礼园，与黑桐鲜花一同调查事件的原委。另一方面，黑桐干也在使用自己的方法追踪事件的真相。而事件的背后，似乎还有那个男人，魔术师荒耶宗莲的安排。",
    "genres": [
      "Drama",
      "Action",
      "Animation",
      "Horror"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "动画",
      "恐怖"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 13363,
    "runtime": "59 min",
    "releaseDate": "2008-12-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1343089",
    "id": "movie-3369765"
  },
  {
    "sourceId": "10754780",
    "title": "无人引航",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "山姆（比利·克鲁德普 Billy Crudup 饰）是一位事业有成的广告公司总裁，一场意外夺取了他的儿子乔什（迈尔斯·赫尔泽 Miles Heizer 饰）的生命，这突如其来的打击让山姆陷入了绝望之中，他放弃了所拥有的一切，躲在自己的帆船里，每日靠酗酒过活。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 13307,
    "runtime": "105 min",
    "releaseDate": "2014-10-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1798243",
    "id": "movie-10754780"
  },
  {
    "sourceId": "1301895",
    "title": "奥兰多",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183010663.jpg",
    "summary": "本片根据英国作家弗吉尼亚·伍尔芙的同名小说改编。伊丽莎白女王一世时期的英国，英俊贵族少年奥兰多（蒂尔达·斯维顿 Tilda Swinton 饰）得到了女王的宠爱，被赐予宅邸及不朽的青春。在之后的四百年间，奥兰多先是爱上了俄国公主萨沙（夏洛特·瓦兰椎 Charlotte Valandrey 饰），后寄情于诗歌，资助落魄诗人尼克·格林（海斯科蒂·威廉姆斯Heathcote Williams 饰），之后代表查尔斯国王二世出使土耳其君士坦丁堡，在激战之夜被亨利大公（约翰·伍德 John Wood 饰）授予皇室勋章。昏睡七天后，奥兰多醒来变成了女人，重返英伦。女性的奥兰多拒绝了亨利大公的求婚，与冒险家赛尔墨汀（比利·赞恩 Billy Zane 饰）一见钟情。在工业革命的硝烟及世界大战的火光中，作为母亲的奥兰多骑着摩托车走向二十世纪。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国",
      "俄罗斯",
      "法国",
      "意大利",
      "荷兰"
    ],
    "rating": 8.2,
    "votes": 12435,
    "runtime": "93 min",
    "releaseDate": "1992-09-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0107756",
    "id": "movie-1301895"
  },
  {
    "sourceId": "25969201",
    "title": "投靠女与出走男",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事发生在19世纪中叶的日本德川幕府时期，位于镰仓的东庆寺得到幕府的支持，可以向饱受苦难婚姻折磨的女性施以援手，帮助他们成功和夫家断绝关系。这一日，不法商人堀切屋三郎卫门（堤真一 饰）的小妾阿吟（满岛光 饰）以及被混蛋丈夫（武田真治 饰）残酷剥削的铁匠阿茹（户田惠梨香 饰）结伴来到东庆寺，并且认识了寺脚下御用宿柏屋主人源兵卫（树木希林 饰）的外甥信次郎（大泉洋 饰）。信次郎是一名见习医生，他利用医术尝试着治疗阿茹的烧伤，同时希望记录下女性们的遭遇写出传世剧本。有着不同背景的女性们相继前来，她们共同站在了人生的岔路口上……",
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
    "rating": 8.2,
    "votes": 12066,
    "runtime": "143 min",
    "releaseDate": "2015-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3989744",
    "id": "movie-25969201"
  },
  {
    "sourceId": "3239700",
    "title": "紧急救命 新春特别篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2454869600.jpg",
    "summary": "特别篇继续延续着第一季的故事。没有听从指挥的实习生五人组蓝泽耕作（山下智久 饰）、白石惠（新垣结衣 饰）、绯山美帆子（户田惠梨香 饰）、冴岛遥（比嘉爱末 饰）和藤川一男（浅利阳介 饰）被要求停止工作一周进行反思。这一周里，五人各进行着不一样的事情。因为上一季的意外事故，失去右手的黑田医生（柳叶敏郎 饰）则开始进行康复训练。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.2,
    "votes": 11983,
    "runtime": "107 min",
    "releaseDate": "2009-01-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-3239700"
  },
  {
    "sourceId": "1302868",
    "title": "傲慢与偏见",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1940,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1353557903.jpg",
    "summary": "班纳一家五个女儿待嫁闺中，应上流贵族彬格莱之邀参加盛大舞会。班府大小姐简妮（莫琳·奥沙利文 Maureen O'Sullivan 饰）深受彬格莱青睐，相互倾慕。彬格莱的好友达西（劳伦斯·奥利弗 Laurence Olivier 饰）虽迷恋二小姐伊丽莎（葛丽亚·嘉逊 Greer Garson 饰），但因性情傲慢和原家中总管的儿子韦翰的污蔑招致伊丽莎白的误会与偏见。表哥柯林斯向伊丽莎白求婚遭拒后与夏绿蒂结合，并法定继承班家财产。达西再次在自己的庄园与伊丽莎白相遇时，态度诚恳、礼仪周全，伊丽莎白弄清事情真相，两人终于从傲慢与偏见的迷失中走了出来，缔结幸福之果。",
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
    "rating": 8.2,
    "votes": 11365,
    "runtime": "118 min",
    "releaseDate": "1940-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0032943",
    "id": "movie-1302868"
  },
  {
    "sourceId": "25745494",
    "title": "灵犬雪莉",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "",
    "summary": "改编自法国著名的童书，此前这部书就已经多次被拍成电视剧和电影。故事发生在二战期间的阿尔卑斯山脚下的小镇上，讲述了小男孩塞巴斯蒂安驯化灵犬雪莉的故事。这里位于法国和西班牙交界，大地被皑皑白雪，一切都那么宁静祥和，直到纳粹士兵的到来。在小镇上有一只叫 做雪莉的小白狗和叫做塞巴斯蒂安的小男孩，他们出生在同一天。这两个初生时互不相关的小生命，在无形命运的拉扯下，几年后被紧紧的连繫在一起，成了彼此相知并深深相惜的好伙伴。这是一次永恒友谊的历险，也是一个足智多谋而又令人感动孩子不平凡的故事。这是一个小男孩寻找母亲、一位老人追寻过往、一个抵抗战士寻找爱情、一位年轻女子寻觅奇遇、一个德国军官寻求宽恕的离奇旅程。这是灵犬雪莉与塞巴斯蒂安的生活..",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.2,
    "votes": 10593,
    "runtime": "104 min",
    "releaseDate": "2013-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3146360",
    "id": "movie-25745494"
  },
  {
    "sourceId": "1303545",
    "title": "怪宴",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1976,
    "coverUrl": "",
    "summary": "神秘宅邸的主人莱昂内尔·吐温（杜鲁门·卡波特 Truman Capote饰）邀请五位世界著名的侦探来到古堡出席一场神秘的晚宴。他们分别是纽约业余侦探迪克·查尔斯顿（大卫·尼文 David Niven饰），比利时侦探米洛·比埃尔（詹姆斯·可可 James Coco饰），上海检查员西德尼·王（彼得·塞勒斯 Peter Sellers饰），英国人杰西卡·马波尔（爱尔莎·兰切斯特 Elsa Lanchester饰）小姐和来自旧金山的萨姆·戴蒙德（彼得·法尔克 Peter Falk饰）。没人知道这次凶险异常的邀约背后到底隐藏着什么样的杀机，但这五位侦探们还是各自带上一位亲属或朋友来到了这座神秘的宅邸。然而莱昂内尔并没有现身，等待他们的是一连串被精心设计过的谋杀事件。",
    "genres": [
      "Comedy",
      "Mystery",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "悬疑",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.2,
    "votes": 10438,
    "runtime": "94 min",
    "releaseDate": "1976-06-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0074937",
    "id": "movie-1303545"
  },
  {
    "sourceId": "27110296",
    "title": "无名之辈",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "来自乡村的笨贼眼镜（章宇 饰）和大头（潘斌龙 饰）抢了一家手机店，慌乱之中逃进坐着轮椅的单身女子嘉旗（任素汐 饰）的家中。嘉旗早已失去活着的欲望，她强横地要求俩笨贼杀死自己。另一边，某楼盘老板资金链断裂跑路，留下保安马先勇（陈建斌 饰）与讨债者周旋。马曾经是立功无数的协警，可就在转正的关头因为一场车祸毁了原本看似美好的一切。不久前他挖到一把喷子，原本打算交给当初的警察好友立功，却发现喷子被换成了水枪。而成为了新闻的手机抢劫案，让马先勇意识到喷子正在劫匪的手上。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 699120,
    "runtime": "108 min",
    "releaseDate": "2018-11-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt9282616",
    "id": "movie-27110296"
  },
  {
    "sourceId": "4920528",
    "title": "那些年，我们一起追的女孩",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "青春是一场大雨。即使感冒了，还盼望回头再淋它一次。人生就是不停的战斗，在还没有获得女神青睐时，左手永远都只是辅助！！！",
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
      "中国台湾"
    ],
    "rating": 8.1,
    "votes": 653722,
    "runtime": "110 min",
    "releaseDate": "2011-08-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2036416",
    "id": "movie-4920528"
  },
  {
    "sourceId": "26425063",
    "title": "无双",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "身陷囹圄的李问（郭富城 饰）被引渡回港，他原本隶属于一个的跨国假钞制贩组织。该组织曾犯下过多宗恶性案件，而首脑“画家”不仅始终逍遥法外，连真面目都没人知道。为了逼迫李问吐露“画家”真实身份，警方不惜用足以判死刑的假罪证使其就范。就在此时，富有的遗孀阮文（张静初 饰）申请保释李问，而警方提出的条件依然是“画家”的真面目。",
    "genres": [
      "Drama",
      "Action",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 647077,
    "runtime": "130 min",
    "releaseDate": "2018-09-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7183578",
    "id": "movie-26425063"
  },
  {
    "sourceId": "24719063",
    "title": "烈日灼心",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "七年前，福建西陇发生一起惨绝人寰的灭门惨案，某别墅内一家五口同日惨死，在社会上引起极大的震动，然而此去经年，嫌疑人杨自道（郭涛 饰）、辛小丰（邓超 饰）、陈比觉（高虎 饰）却依然逍遥法外。现如今，这三个人都在厦门过活，杨当起了出租车司机，小丰加入了协警队伍，因意外变成傻子的陈则带着三人捡来的女孩尾巴栖息在亲戚的渔场中。这一天，拥有丰富办案经验的伊谷春（段奕宏 饰）调到小丰所在的队伍担任警长。伊颇为器重能力卓越的小丰，但嗅觉灵敏的他也隐隐觉出这个男子和当年的灭门惨案有所关联。在此期间，道哥在一次意外中结识了伊的妹妹小夏（王珞丹 饰）。仿佛冥冥之中有一只看不见的手，正将这三个决心重新做人的男人推向无法更改的结局……",
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
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 369606,
    "runtime": "139 min",
    "releaseDate": "2015-08-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4079152",
    "id": "movie-24719063"
  },
  {
    "sourceId": "3734112",
    "title": "风声",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1599059779.jpg",
    "summary": "1942年10月10日，汪伪政权举行了盛大的国民政府庆典。然而，一系列的军政要员遇刺事件，让身为特务处长王田香（王志文 饰）如坐针毡。在对女刺客（刘威葳 饰）的酷刑审问中，他获得了一条关键的情报——代号为老鬼的地下党已经混入了剿匪司令部。立功心切的王田香立刻向日本皇军特务机关长武田（黄晓明 饰）做了汇报。二人随即在裘庄布下了一个圈套，意图通过放出假消息逼老鬼现身。",
    "genres": [
      "Drama",
      "Thriller",
      "War",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "战争",
      "犯罪"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 352228,
    "runtime": "118 min",
    "releaseDate": "2009-09-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1434423",
    "id": "movie-3734112"
  },
  {
    "sourceId": "4746257",
    "title": "明日边缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "未来世界陷入外星人入侵的恐慌中，军事演说家凯奇少校（汤姆·克鲁斯 Tom Cruise 饰）畏惧上战场，他从没想过将军（布莱丹·格里森 Brendan Gleeson 饰）会让他去指挥即将开始的“诺曼底战役”，拒绝接受命令之后将军居然恶整了他，那就是把他当做逃兵扔进了军 营中。凯奇被归入了J小队中进行战斗，战役的第一天就惨死在战场，没想到这一死让他拥有了时空循环的能力，而唯一相信他的人就是被称为“全金属战士”的丽塔·沃拉塔斯基（艾米莉·布朗特 Emily Blunt 饰）。二人开始了时空循环作战，在训练凯奇的同时他们发现了控制时间的奥秘，这与外星人“主脑”欧米茄有关，但是唯一能取得胜利的方法就是让凯奇不断死去、不断重启时间。在不断重复登陆那天的战斗的同时，凯奇越来越不想失去丽塔……",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 8.1,
    "votes": 330104,
    "runtime": "114 min",
    "releaseDate": "2014-06-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1631867",
    "id": "movie-4746257"
  },
  {
    "sourceId": "3274505",
    "title": "猩球崛起",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "为了能让身患老年痴呆症的父亲重回正常的生活，威尔·罗曼（詹姆斯·弗兰科 James Franco 饰）一直致力于名为“Cure”的基因药物的开发，并在大猩猩身上不断进行着药物试验。在公司已经失去信心的同时，威尔继续在家完成试验，并在一只名为凯撒的大猩猩身上获得成功。借助灵长类学家卡洛琳（芙蕾达·平托 Freida Pinto 饰）的帮助，威尔发现凯撒的智力极大地提高。不过，人类的社会始终无法接受拥有极高智力的凯撒，凯撒被送往了猩猩看护所。看护所的残酷对待，使得凯撒利用智慧进行抗争，最终救走了同时被囚禁的其他猩猩，而且对它们都使用了Cure。一群高智商的猩猩与人类对立的战争就此拉开。本片获得了第84届奥斯卡最佳视觉效果的提名。",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 319931,
    "runtime": "105 min",
    "releaseDate": "2011-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1318514",
    "id": "movie-3274505"
  },
  {
    "sourceId": "3824672",
    "title": "听说",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "",
    "summary": "阳光男孩黄天阔（彭于晏 饰）的父母经营着一家便当店，某天，他在为听障游泳队送便当时邂逅了清纯美丽的姐妹花——小朋（陈妍希 饰）和秧秧（陈意涵 饰）。姐妹俩的父亲是一名传教士，常年在非洲工作。为了保障姐姐顺利参加听障奥运会，秧秧担负起赚取家用的重任。她每日来去匆匆，辛苦打着几份工。本身即掌握手语的天阔自然而然融入了姐妹俩的生活当中，为了接近心仪的秧秧，他时常在体育馆门口做生意，还费尽心思为秧秧制作爱心便当。相识时间虽短，却让两个年轻人的心越走越近。然而某次约会中，一个小小的误会阻断了他们的交往，与此同时，小朋也遭遇了一场灾难……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8.1,
    "votes": 318759,
    "runtime": "107 min",
    "releaseDate": "2009-08-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1562328",
    "id": "movie-3824672"
  },
  {
    "sourceId": "3789848",
    "title": "怪兽大学",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "自幼憧憬惊吓专员职业的大眼仔麦克·华斯基（比利·克里斯托 Billy Crystal 配音），终于如愿考入曾走出过无数传奇人物的怪兽大学惊吓学院。对于这个相貌讨喜、丝毫没有任何恐怖气场的小怪物来说，死啃书本似乎是实现梦想的唯一途径。与之相对，系出惊吓名门的同学毛怪詹姆士·苏利文（约翰·古德曼 John Goodman 配音）天生是周围同学关注的焦点，完全一副什么都无所谓的浪荡公子哥做派。倒霉的是这两个脾气完全不合的家伙惹到了极其严格的院长迪安·哈德斯克莱博（海伦·米伦 Helen Mirren 配音），结果在期中考试时被三振出局，驱逐出惊吓学院。不甘失败的大眼仔抓住一线机会，集结团队报名参加兄弟会举办的惊吓游戏，只要获胜的话便有机会重返惊吓学院。而在高手云集的赛场上，大眼仔与毛怪即将迎接前所未有的挑战……",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 248447,
    "runtime": "104 min",
    "releaseDate": "2013-08-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1453405",
    "id": "movie-3789848"
  },
  {
    "sourceId": "1292225",
    "title": "闪灵",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1980,
    "coverUrl": "",
    "summary": "杰克（杰克•尼科尔森 Jack Nicholson 饰）是一个作家。一个冬天，他得到了一个看管山顶酒店的差事。这正合杰克的意思，他正好可以有一个幽静的地方写作。于是杰克带着妻儿搬进了酒店。",
    "genres": [
      "Drama",
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.1,
    "votes": 240600,
    "runtime": "119 min",
    "releaseDate": "1980-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0081505",
    "id": "movie-1292225"
  },
  {
    "sourceId": "1292523",
    "title": "侏罗纪公园",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2076443176.jpg",
    "summary": "哈蒙德（理查德•阿滕伯勒 Richard Attenborough  饰）立志要建立一个非同寻常的公园：恐龙将是这个公园的主角。他把众多科学家收归旗下，利用琥珀里面困住的远古蚊子体内的血液，提取出恐龙的基因信息，利用这些信息培育繁殖恐龙。结果如愿以偿，他把怒布拉岛建立成了一个恐龙公园，坚信可以从中赚取大钱。然而，科学家们则忧心忡忡。",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 215630,
    "runtime": "127 min",
    "releaseDate": "2013-08-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0107290",
    "id": "movie-1292523"
  },
  {
    "sourceId": "1301445",
    "title": "黑衣人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "",
    "summary": "地球并不只是人类的天下，其实有1500名外星人生活中我们当中，而星际移民局则处理和外星人相关的事情。",
    "genres": [
      "Comedy",
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 215230,
    "runtime": "98 min",
    "releaseDate": "1997-07-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119654",
    "id": "movie-1301445"
  },
  {
    "sourceId": "1291577",
    "title": "超人总动员",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2167017148.jpg",
    "summary": "鲍勃是一个超人特工，他惩恶扬善，深受街坊邻里的爱戴。“不可思议”先生就是他的光荣外号。他和另一个超人特工“弹力女超人”相爱，两人结婚后过上平静的生活。",
    "genres": [
      "Comedy",
      "Action",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 205041,
    "runtime": "115 min",
    "releaseDate": "2005-01-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0317705",
    "id": "movie-1291577"
  },
  {
    "sourceId": "20645098",
    "title": "小王子",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2015,
    "coverUrl": "",
    "summary": "灰蒙蒙的都市丛林，美丽的小女孩眼神中没有渴望和雀跃，她跟随妈妈穿梭钢筋水泥的光影之间，按照社会既定法则亦步亦趋。她的未来似乎早被注定和规划，即使生日礼物也找不到些许惊奇。为了进入好学校，母女俩搬到郊外一幢独栋房子里，旁边则是一间与周遭格格不入的破房子。某天，一个飞机螺旋桨突然破墙而入，从而建立起女孩和隔壁那个怪爷爷的友谊。老人自称曾是一名飞行员，年轻时他迫降沙漠，在那里认识了有着纯真心灵的小王子。女孩听老人讲述着有着童话般瑰丽色彩的往事，不知不觉间心驰神往……",
    "genres": [
      "Animation",
      "Fantasy"
    ],
    "originalGenres": [
      "动画",
      "奇幻"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 200509,
    "runtime": "108 min",
    "releaseDate": "2015-10-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1754656",
    "id": "movie-20645098"
  },
  {
    "sourceId": "4206436",
    "title": "战马",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1248524406.jpg",
    "summary": "1914年，在德文郡小镇，男孩艾尔伯特（杰瑞米·艾文 Jeremy Irvine 饰）目睹了幼驹乔伊的诞生。在集市上，它被频繁叫价，最终被艾尔伯特的父亲泰德（彼得·穆兰 Peter Mullan 饰）用30几尼的天价收入囊中，跛脚的他也因此得罪了地主。艾尔伯特与乔伊尽情 嬉戏，与朋友分享。然而，好景不长，地主登门拜访，称如果乔伊不能犁地将立刻将其带走，于是泰德赌上了全部家当。于是，艾尔伯特在逼迫之下，为乔伊套上了鞍蹬，强迫它犁地，甚至还使用了皮鞭，却不能让它屈服就范。为了还债，泰德亲自上阵犁地，功夫不负有心人，辛苦换来了收成，但是一场大雨毁了一切。德军来袭，父亲被迫将马变卖给骑兵军，换了30几尼。艾尔伯特虽然难以割舍也只能含泪送别乔伊踏上了前途未卜的战场。战争中，乔伊的主人不停在变，从英国上尉，法国老农与孙女，到德国骑兵，然而它真正等待的是艾尔伯特，他们能够重逢吗……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 182788,
    "runtime": "146 min",
    "releaseDate": "2012-02-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1568911",
    "id": "movie-4206436"
  },
  {
    "sourceId": "1292275",
    "title": "罗拉快跑",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 1998,
    "coverUrl": "",
    "summary": "罗拉（弗兰卡•波滕特 饰）和曼尼（莫里兹•克雷多 饰）是一对年轻的恋人，其中曼尼是一个不务正业的小混混，而罗拉则是相信“天大的事情有爱情顶着”的爱情至上主义者。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 8.1,
    "votes": 181956,
    "runtime": "81 min",
    "releaseDate": "1998-08-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0130827",
    "id": "movie-1292275"
  },
  {
    "sourceId": "1292484",
    "title": "碟中谍",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1996,
    "coverUrl": "",
    "summary": "中情局获得情报，得知他们的特工中出了一个叛徒，准备将中情局布置在东欧的特工名单出卖给外国特工组织。在特工头目吉姆（乔恩•沃伊特 Jon Voight 饰）的策划下，伊森（汤姆•克鲁斯 Tom Cruise 饰）所住的一组特工赶往了他们交易的地点。",
    "genres": [
      "Action",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 177885,
    "runtime": "110 min",
    "releaseDate": "1996-05-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0117060",
    "id": "movie-1292484"
  },
  {
    "sourceId": "1437342",
    "title": "冰川时代2：融冰之灾",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204578670.jpg",
    "summary": "地球上的冰河期终于就快要结束了！面对一天天变暖的天气，动物们都欢欣鼓舞。万物回春的天气里，食物多种多样，生活无忧无虑……",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 175118,
    "runtime": "91 min",
    "releaseDate": "2006-06-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0438097",
    "id": "movie-1437342"
  },
  {
    "sourceId": "4914468",
    "title": "冰川时代4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1596241117.jpg",
    "summary": "Chris Wedge",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 174824,
    "runtime": "88 min",
    "releaseDate": "2012-07-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1667889",
    "id": "movie-4914468"
  },
  {
    "sourceId": "26340419",
    "title": "帕丁顿熊2",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2017,
    "coverUrl": "",
    "summary": "露西婶婶（伊梅尔达·斯汤顿 Imelda Staunton 配音）的生日即将到来，帕丁顿（本·威士肖 Ben Whishaw 配音）决定送婶婶一份会让她终生难忘的礼物。最终，帕丁顿选中了一本立体绘本，然而这绘本是世间仅此一份的珍贵宝物，为了存钱购买绘本，帕丁顿决定开始工作，在遭遇了一连串的失败后，帕丁顿终于找到了适合他的工作——清洁玻璃窗。",
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
      "英国",
      "法国",
      "美国"
    ],
    "rating": 8.1,
    "votes": 169235,
    "runtime": "103 min",
    "releaseDate": "2017-12-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4468740",
    "id": "movie-26340419"
  },
  {
    "sourceId": "10831445",
    "title": "百鸟朝凤",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "老一代唢呐艺人焦三爷（陶泽如 饰）是个外冷内热的老人，看起来严肃古板，其实心怀热血。影片表现了在社会变革、民心浮躁的年代里，新老两代唢呐艺人为了信念的坚守所产生的真挚的师徒情、父子情、兄弟情。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 168071,
    "runtime": "108 min",
    "releaseDate": "2016-05-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3214392",
    "id": "movie-10831445"
  },
  {
    "sourceId": "1301459",
    "title": "小岛惊魂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "二战结束，格蕾丝(尼科尔•基德曼)在英伦的小岛上独自抚养着一对儿女，耐心等待着丈夫从战场归来。儿女怕光，受到光照会发病，因此家里的窗帘常年拉得严严实实。就在这样一间阴暗的古宅里，格蕾丝迎来了三个新仆人。这三个人到来之后，却让格蕾丝寒了心——窗帘经常被拉开，门无故打开，钢琴自动发声，而她的女儿说，在房间里经常可以见到陌生男人。格蕾丝陷入了精神紧张的状态，她不明白怪事为何屡屡发生，不明白丈夫为何迟迟未归。而她最后才醒悟，所有的惊恐，其实都来源自身，但是事情已经不可逆转……",
    "genres": [
      "Drama",
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "美国",
      "西班牙",
      "法国",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 168041,
    "runtime": "104 min",
    "releaseDate": "2001-08-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0230600",
    "id": "movie-1301459"
  },
  {
    "sourceId": "1300868",
    "title": "异形",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1979,
    "coverUrl": "",
    "summary": "未来的世界，人类已能轻松穿梭于星际之间，在太空中展开商业活动。“诺史莫”是在太空活动的众多星际商业运输船之一。一次，它完成任务满载太空矿石返航地球时，突然收到了一组奇怪的信号，由于这可能是求救信号，飞船接到指令前往信号源地进行搜救。",
    "genres": [
      "Sci-Fi",
      "Horror"
    ],
    "originalGenres": [
      "科幻",
      "恐怖"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8.1,
    "votes": 139967,
    "runtime": "117 min",
    "releaseDate": "1979-05-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0078748",
    "id": "movie-1300868"
  },
  {
    "sourceId": "2037012",
    "title": "革命之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480460526.jpg",
    "summary": "当他们第一次见面，他是高谈阔论的有志青年，她是向往成为名演员的未来之星。而如今，婚后的他们变了。他变成了在公司做不喜欢工作的无聊上班族，她成了不入流的糟糕演员。在一次演出后，丈夫弗兰克（莱奥纳多•迪卡布莱里奥饰）与妻子爱波（凯特•温斯莱特饰）大动肝火，两人多年的积怨终于爆发。莫非婚姻真的躲不过七年之痒？悲痛的爱波整理照片，发现弗兰克年轻的照片，想起他曾经描述的“美好的巴黎”，她提出了一个计划“全家搬到巴黎”，以拯救这个家庭。但是，这看似遥不可及的计划，却成为了催化剂，将两人推向婚姻更痛苦的深渊。",
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
      "英国"
    ],
    "rating": 8.1,
    "votes": 137444,
    "runtime": "119 min",
    "releaseDate": "2008-12-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0959337",
    "id": "movie-2037012"
  },
  {
    "sourceId": "1303815",
    "title": "你丫闭嘴！",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173579470.jpg",
    "summary": "铁蛋（杰拉尔·德帕缔约）是个大话痨，与人聊天不分时间、场合和对象，也因此他没有朋友，在监狱里一个接一个的换着室友，直到他遇到总也不说话的杀手卢比。铁蛋可以一直对卢比说下去，卢比（让·雷诺）不说话，不生气，脑子里总在策划越狱。",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 136551,
    "runtime": "85 min",
    "releaseDate": "2003-10-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0310203",
    "id": "movie-1303815"
  },
  {
    "sourceId": "1920796",
    "title": "附注：我爱你",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p461625359.jpg",
    "summary": "霍莉（希拉里•斯万克 饰）与盖里（杰拉德•巴特勒 饰）深爱彼此，虽然有时候他们会有争吵，可是这些都是他们生活中的情趣。霍莉感觉自己已经找到了最爱，盖里却在他们婚后罹患脑癌并逝世了。自此，霍莉便生活在失去挚爱的痛苦中。",
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
    "rating": 8.1,
    "votes": 115880,
    "runtime": "126 min",
    "releaseDate": "2007-12-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0431308",
    "id": "movie-1920796"
  },
  {
    "sourceId": "25932086",
    "title": "我是谁：没有绝对安全的系统",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2014,
    "coverUrl": "",
    "summary": "本杰明是一个这样的人：三次元现实世界中，他是一个十足的屌丝&Loser，难以找到存在感，没有时尚感、没有朋友，也没有女朋友。但是二十五岁的他却是一个的电脑极客，拥有对数字技术不可思议的天赋。而影片中另一位主人公马克思是一个渴望“黑客世界”的潜在革命者，他注意到了本杰明在 网络方面的惊人才华，马克思、本杰明和神童斯蒂芬以及保罗私人组建了黑客组织CLAY，并且为了正义入侵国际安全系统。他们凭借高超黑客技术的所为引起了德国秘密警察组织、欧洲刑警组织的重视，并且一个邪恶的黑客将他们视作威胁，想要将他们除去。本杰明因此感觉到自己正在面临生死攸关的考验，并且他们的目标似乎不值得他付出如此大的代价……",
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
    "rating": 8.1,
    "votes": 113004,
    "runtime": "102 min",
    "releaseDate": "2014-09-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3042408",
    "id": "movie-25932086"
  },
  {
    "sourceId": "2044089",
    "title": "杀手没有假期",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173386253.jpg",
    "summary": "一对儿杀手，肯与雷（Colin Farrell 饰），在圣诞期间来到比利时古城布鲁日，他们将在这里接到联系人哈里（Ralph Fiennes 饰）指令的新任务。雷在不久前的一次暗杀中误杀了一名男童，怀着深深愧疚的雷情绪不稳，古城中的等待对他来说是一场难耐的煎熬。肯作为带领雷入行的前辈，试图帮助雷摆脱困境，但他的努力毫无收效。百无聊赖的雷在街上结识了女演员克洛伊，这个神秘女孩引发了雷一系列的冒险经历，与此同时，肯再一次被哈里催促，原来此次任务的真相是暴怒的哈里要雷为他的误杀行为付出代价，肯面对被自己一手引入杀手行当的年轻人，难以做出抉择，两名杀手，在夜色中的古城各怀心事……",
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
      "英国",
      "美国"
    ],
    "rating": 8.1,
    "votes": 101991,
    "runtime": "107 min",
    "releaseDate": "2008-01-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0780536",
    "id": "movie-2044089"
  },
  {
    "sourceId": "2969282",
    "title": "七磅",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p729808513.jpg",
    "summary": "“上帝用7天创造世界，我用7秒钟，就毁灭了自己。”",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 100276,
    "runtime": "123 min",
    "releaseDate": "2008-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0814314",
    "id": "movie-2969282"
  },
  {
    "sourceId": "1294990",
    "title": "勇敢者的游戏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1530913993.jpg",
    "summary": "“尤曼吉”是一种类似于大富翁的棋类游戏，然而，和大富翁不同的是，“尤曼吉”的棋子能自动移动，当你走到其中一格时，这格描述的东西就会真实出现在你面前，而且游戏一经开始便不能结束，只有游戏结束才一切复原！",
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
    "rating": 8.1,
    "votes": 96727,
    "runtime": "104 min",
    "releaseDate": "1995-12-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113497",
    "id": "movie-1294990"
  },
  {
    "sourceId": "1433990",
    "title": "风雨哈佛路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2184507337.jpg",
    "summary": "丽兹（索拉·伯奇 Thora Birch饰）出生在美国的贫民窟里，从小就开始承受着家庭的千疮百孔，父母酗酒吸毒，母亲患上了精神分裂症。贫穷的丽兹需要出去乞讨，流浪在城市的角落，生活的苦难似乎无穷无尽。",
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
    "rating": 8.1,
    "votes": 95024,
    "runtime": "104 min",
    "releaseDate": "2003-04-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0338109",
    "id": "movie-1433990"
  },
  {
    "sourceId": "3036997",
    "title": "立春",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "",
    "summary": "北方某小城市的大龄音乐女教师王彩玲（蒋雯丽）相貌丑陋，却因天生有一副唱歌剧的嗓喉，相当清高。不甘像周围人一样过平庸世俗生活的她，一心要将根扎在北京。钢铁厂工人周瑜迷上了在广播里献声的王，以拜师的名义对她展开追求，却间接令王爱上了其一心想去北京念美院但屡考屡败的表弟黄四宝（李光洁），然而黄只当王是自己苦闷精神世界的知音。后来，黄因为认为这段纯洁关系被王玷污去了深圳，周对王的再度追求也不了了之。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 87836,
    "runtime": "101 min",
    "releaseDate": "2008-04-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1214973",
    "id": "movie-3036997"
  },
  {
    "sourceId": "1294362",
    "title": "星球大战前传1：幽灵的威胁",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2308392633.jpg",
    "summary": "作为星球大战前传系列的首部曲，这部电影诞生了一个重要的人物：阿纳金（杰克·洛伊德 Jake Lloyd  . 饰）。银河国会会议上出现了利益争执，纳布星的女王阿米达拉（娜塔丽·波特曼 Natalie Portman   饰）被贸易联盟绑架并威胁签署新的贸易协议。绝地武士奎刚（连姆·尼森 Liam Neeson 饰）及徒弟欧比-旺•肯诺比（伊万·麦克格雷格 Ewan McGregor  饰）受命前去解决纠纷，维护和平。他们的飞船在塔图因星意外降落的时候遇到了阿纳金并且带走了他。",
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
    "rating": 8.1,
    "votes": 79565,
    "runtime": "136 min",
    "releaseDate": "1999-11-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120915",
    "id": "movie-1294362"
  },
  {
    "sourceId": "1293377",
    "title": "芳芳",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1023890205.jpg",
    "summary": "亚历（文森特•佩雷斯 Vincent Perez 饰）快要结婚了。在他的观念中，一上床就意味着爱的结束。这都是因为小时候他看见妈妈不停更换性伴侣造成的阴影。当他看到舞姿动人的芳芳（苏菲•玛索 Sophie Marceau饰），心里燃起了真爱的火焰。亚历决定，他要追求芳芳，但不去涉及情欲。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 75199,
    "runtime": "85 min",
    "releaseDate": "1993-06-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0106866",
    "id": "movie-1293377"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1166100",
    "id": "movie-3397503"
  },
  {
    "sourceId": "26815162",
    "title": "生存家族",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "《生存家族》讲述了这么一个故事，突然有一天家里的电器全部无法运转，车，自来水，电池，手机和电视等等都不能使用了，在东京生活的铃木一家决定骑自行车去乡下，逃离东京…",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 72405,
    "runtime": "117 min",
    "releaseDate": "2018-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5890000",
    "id": "movie-26815162"
  },
  {
    "sourceId": "3769423",
    "title": "守护者联盟",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1758887194.jpg",
    "summary": "圣诞老人诺斯（亚历克·鲍德温 Alec Baldwin 配音）、复活节兔子（休·杰克曼 Hugh Jackman 配音）、牙仙（艾拉·菲舍尔 Isla Fisher 配音）和沙人，这些童年的守护者个个长生不老、力量强大又动作敏捷，他们的任务就是尽其所能保护所有孩子的天真与想象力，但一个心怀不轨的坏蛋出现了，他打算抢夺孩子们的希望和梦想来抹去守护者的存在。此时这群深受喜爱的英雄需要杰克冻人（克里斯·派恩 Chris Pine 配音）助其一臂之力，但这位新加入的守护者却只喜欢玩雪，对拯救世界毫不关心。从北极最深的隐蔽处、上海的屋顶到新英格兰的迷你小镇，守护者在世界各个角落进行一场规模浩大的战争以对抗邪恶又擅于蛊惑人心的的食虫人（裘德·洛 Jude Law 配音）。他的阴谋是到处散布恐惧来征服全世界，而唯一能够阻止他的就是相信的力量，以及守护者拥有的神奇魔力。",
    "genres": [
      "Animation",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 69138,
    "runtime": "97 min",
    "releaseDate": "2012-11-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1446192",
    "id": "movie-3769423"
  },
  {
    "sourceId": "26357945",
    "title": "恐袭波士顿",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "影片聚焦于2013年发生的波士顿马拉松爆炸事件，是继《伦敦陷落》《深海浩劫》之后，又一高口碑灾难巨制，该片真实还原了在波士顿恐袭发生后，FBI、当地警方在102小时内全力缉捕真凶，阻止了犯罪分子下一步攻击行动的英勇事迹。",
    "genres": [
      "Drama",
      "Thriller",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 66658,
    "runtime": "133 min",
    "releaseDate": "2017-11-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4572514",
    "id": "movie-26357945"
  },
  {
    "sourceId": "1297965",
    "title": "窈窕淑女",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1964,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p842376184.jpg",
    "summary": "卖花女伊莉莎.杜利特尔，长得眉清目秀，聪明乖巧，但出身寒微，家境贫寒。她每天到街头叫卖鲜花，赚点钱补贴家用。一天，伊莉莎低俗的嗓音引起了语言学家希金斯教授的注意，教授夸口只要经过他的训练，卖花女也可以成为贵夫人。伊莉莎觉得教授说的话对她是一个机会，就主动上门请求教授训练她。教授的朋友皮克林和他打赌，如果让伊莉莎以贵夫人的身份出席6个月后将举办的大使游园会而不被人识破真相，那么皮克林愿意承担一切试验费用和伊莉莎的学费，这激起了教授的斗志，希金斯欣然接受了挑战。他是不甘示弱的，他从最基本的字母发音开始教起。希金斯是个精力旺盛和讲究科学的学者，对每一感兴趣件事都能废寝忘食。他胸怀坦荡、丝毫不怀任何恶意，但他又像孩子一样，毫不顾及他人的感情，对伊莉莎严加训练。",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 63466,
    "runtime": "172 min",
    "releaseDate": "1964-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0058385",
    "id": "movie-1297965"
  },
  {
    "sourceId": "1850963",
    "title": "花魁",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p656858958.jpg",
    "summary": "日本江户时期，艺妓云集的吉原游郭车水马龙，繁华非常。商贾富豪挥金如土，只为博得佳人浅浅一笑。年仅八岁的小女孩辗转来到吉原玉菊屋，得名清叶，时玉菊屋头牌花魁妆日（菅野美穗饰）负责训练这个桀骜不驯的小女孩。为了早日离开这个烟花之地，清叶专心训练，以期早日成为吉原花魁，全身而退。转眼十年过去，清叶（土屋安娜 饰）色艺双全，成为吉原头号花魁，并更名日暮。然她此时仍未改却倔强秉性，对待富甲一方却傲慢无理的客人不屑一顾。武士仓之助（椎名桔平 饰）倾心日暮，并欲取之为妻，日暮却向他提出了一个几乎不可能的条件……",
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
    "rating": 8.1,
    "votes": 63210,
    "runtime": "111 min",
    "releaseDate": "2007-02-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0794338",
    "id": "movie-1850963"
  },
  {
    "sourceId": "2003389",
    "title": "葬礼上的死亡",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501057857.jpg",
    "summary": "丹尼尔（马修·麦克费登  Matthew Macfadyen 饰）是个久不得志的作家，而且一直生活在名作家哥哥罗伯特（拉珀特·格雷夫斯 Rupert Graves 饰）的阴影之下。默默担负赡养父母义务的他这次主办父亲的葬礼，却同样被哥哥喧宾夺主。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "英国",
      "美国",
      "德国",
      "荷兰"
    ],
    "rating": 8.1,
    "votes": 61807,
    "runtime": "90 min",
    "releaseDate": "2007-07-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0795368",
    "id": "movie-2003389"
  },
  {
    "sourceId": "24325923",
    "title": "我和厄尔以及将死的女孩",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "高中生格雷戈（托马斯·曼 Thomas Mann 饰）性格善良却有点孤僻，他唯一的爱好是与死党厄尔（RJ·赛勒 RJ Cyler 饰）拍摄短片，改编他们喜爱经典电影，自娱自乐。有一天，格雷戈结识了身患白血病的女孩蕾切尔（奥利维亚·库克 Olivia Cooke 饰），乐观开朗的蕾切尔改变了格雷戈原有的世界，两人十分谈得来，格雷戈逐渐对蕾切尔萌生爱意，却不好意思说出口。就在此时，蕾切尔的病情加重，格雷戈意识到自己必须有所行动……",
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
    "rating": 8.1,
    "votes": 60582,
    "runtime": "105 min",
    "releaseDate": "2015-01-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2582496",
    "id": "movie-24325923"
  },
  {
    "sourceId": "1853160",
    "title": "狗咬狗",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151061551.jpg",
    "summary": "暗黑、摇晃的船舱，来自柬埔寨的杀手鹏（陈冠希 饰），狗一般在抢食已经洒在地上的残羹冷炙。甚至，在杀人前，还不忘点了满满一桌的食物，风卷残云之后再冷静杀人施然离去。",
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
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 56391,
    "runtime": "109 min",
    "releaseDate": "2006-08-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0819765",
    "id": "movie-1853160"
  },
  {
    "sourceId": "1302109",
    "title": "十二夜",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553843848.jpg",
    "summary": "Jeannie（张柏芝饰）是一个空姐，与工程师Alan（陈奕迅饰）相遇在同一辆车上，之后便开始了他们的爱恋。刚开始的时候，两人都打得火热，深深投入到彼此的生活，如胶似漆。跟很多恋情一样，Alan厌倦Jeannie对他管太紧的方式，开始挣扎，Jeannie认为自己已把一切给了男友，便全身心投入感情，但渐渐的两人之间当初热恋的感觉不再，感情转淡。Jeannie努力挽回感情，两人也复合了，Jeannie在这时才发现自己已不再爱Alan了，导致最后分手收场。Jeannie消失于Alan的生活中，独自一人继续游走在繁华的都会里，寻找另一个“十二夜”，她也遇到了另一个令她心动的人。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 55628,
    "runtime": "92 min",
    "releaseDate": "2000-04-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0282159",
    "id": "movie-1302109"
  },
  {
    "sourceId": "5968334",
    "title": "丈夫得了抑郁症",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "婚后五年，在某网络公司上班的髙野干夫（堺雅人 饰）和毫不卖座的漫画家妻子小晴（宮﨑あおい 饰）过着平静的生活。干夫为人纤细，一丝不苟，习惯每天早上做便当，按照不同日期搭配便当的奶酪和领带。但是在巨大的工作压力下，干夫看似平静的内心渐渐失衡，他甚至一度企图自杀，经问诊才发现自己已经患了抑郁症。一向专注工作、神经大条的小晴回想，似乎早在几个月前干夫的身上便已出现了些许迹象。为了让丈夫尽快恢复健康，小晴以离婚相要挟迫使干夫辞职休养。失去了生活来源，髙野夫妇的生活陷入了前所未有的困境，但他们也在相互扶持的道路上获得了久违的快乐……",
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
    "rating": 8.1,
    "votes": 51283,
    "runtime": "121 min",
    "releaseDate": "2011-10-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1810833",
    "id": "movie-5968334"
  },
  {
    "sourceId": "1303630",
    "title": "金鸡",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p824275053.jpg",
    "summary": "老妓女金如（吴君如 饰）在自助银行里遇到了小偷（曾志伟 饰）打劫，怎料突然停电，两人都被锁在里面，阿金开始向小偷说起了她与香港一起成长的故事。她16岁开始当“鱼蛋妹”，当时已经月入数千，后来成年后就正式成为了舞小姐，可是她没有出色的容貌，也只能在夜总会里担演丑角。可是仍为她带来了十分丰厚的收入，却不一小心怀上了不知是那位客人的孩子，为了生活，阿金只好把帐认到了另一位客人头上，客人也把儿子带到了美国。经济不景，接着她只好做按摩女郎，继续做着老本行，她看到了很多，也感受到了很多。",
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
    "rating": 8.1,
    "votes": 50959,
    "runtime": "106 min",
    "releaseDate": "2002-12-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0354593",
    "id": "movie-1303630"
  },
  {
    "sourceId": "1309116",
    "title": "怒火救援",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1673558925.jpg",
    "summary": "克雷塞（丹泽尔•华盛顿 Denzel Washington 饰）曾经是一名杀人不眨眼的特种兵，但是退役后的他却常常被自己杀人的梦魇惊醒，无法忍受痛苦的他只好求助于酒精来麻痹自己的神经。好友见长此以往不是办法，遂推荐他到墨西哥去担任一名私人保镖。墨西哥城是世界高犯罪率城市，绑架事件频发，不管有没有钱都可能遭到绑架。克雷塞保护的是一名百万富翁的女儿皮塔（达科塔•范宁 Dakota Fanning 饰）。10岁的平塔活泼可爱，她快乐的心很快就感染了克雷塞，她成了克雷塞生活中的天使。但是，好景不长，皮塔遭到了绑票并被撕票了！克雷塞大受打击，怒火中烧的他决定只身去找绑匪为皮塔报仇。",
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
      "美国",
      "英国"
    ],
    "rating": 8.1,
    "votes": 50773,
    "runtime": "146 min",
    "releaseDate": "2004-04-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0328107",
    "id": "movie-1309116"
  },
  {
    "sourceId": "1306692",
    "title": "枪王",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "",
    "summary": "Rick（张国荣饰）是个顶级射击手，自第一次参加IPSC实战枪击比赛起，已连获数届冠军，Rick的拿手好戏是double tap，即在最短时间内打出两枪，弹孔在同一点上。Rick还是个改良枪支的专家，经他改良后，枪的性能可发挥到最高点。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 43564,
    "runtime": "96 min",
    "releaseDate": "2000-05-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0258489",
    "id": "movie-1306692"
  },
  {
    "sourceId": "1917171",
    "title": "硫磺岛的来信",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "中途岛战役失利直接宣布了日军在太平洋战场上的失败，负隅顽抗的日军依然坚守日本最南端的小岛—硫磺岛。这个看似不起眼的小岛，却上演了二战太平洋上最惨烈的战争。",
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
    "rating": 8.1,
    "votes": 41535,
    "runtime": "141 min",
    "releaseDate": "2006-12-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0498380",
    "id": "movie-1917171"
  },
  {
    "sourceId": "1483507",
    "title": "她和她的猫",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "",
    "summary": "本动画片以一只公猫的视角，讲述了“他”与女主人在同一个屋檐下所过的略带感伤的淡然日子。",
    "genres": [
      "Drama",
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "短片"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 36363,
    "runtime": "5 min",
    "releaseDate": "1999-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0373960",
    "id": "movie-1483507"
  },
  {
    "sourceId": "3011072",
    "title": "珍爱",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p558068336.jpg",
    "summary": "上世纪80年代，又胖又丑的黑人女孩叫克拉丽丝·珍爱·琼斯（嘉伯蕾·西蒂比 Gabourey Sidibe 饰）和暴虐的母亲依靠救济金一起生活，目不识丁的她给自己取名珍爱。年仅16岁的她有个智障女儿的同时还怀有两个月的身孕，而孩子们的父亲就是强奸她的父亲。珍爱时常幻想着自己有迷人的舞姿，有艳丽的舞台，还有一个帅气的男友，而这些只存在于她的白日梦里，现实中的她不但要忍受外人的侮辱，而且还要想办法应付自己亲生母亲的讽刺和刁难。直到她被学校退学并被介绍到一对一选修学校，在那里她认识到其他几个问题少女以及一个让她们每天都写日记的老师布鲁·瑞恩。珍爱慢慢的重新燃起了对生活的热情，可是她却发现自己感染了艾滋病。在希望和不幸的夹缝里，珍爱将何去何从？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 33067,
    "runtime": "110 min",
    "releaseDate": "2009-01-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0929632",
    "id": "movie-3011072"
  },
  {
    "sourceId": "1291559",
    "title": "新桥恋人",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p581792602.jpg",
    "summary": "米歇尔（朱丽叶·比诺什 Juliette Binoche 饰）是个富家女，心里却并不幸福。她失恋，患上眼疾，情绪低落之下决定到外面的世界去流浪。她喜欢画画，在街头遇到断了腿的埃里克斯（德尼·拉旺 Denis Lavant 饰），画下了他抽搐的脸。克劳斯是个一无所有的流浪汉，却爱上了米歇尔。两人开始了热恋，流浪中互相取暖互相疗伤。米歇尔的视力慢慢模糊，她的心愿是在失明前看看博物馆的画。满街都贴着米歇尔家人的寻人启事，埃里克斯感到米歇尔即将离他而去，悲伤不已。他用枪打碎自己的手指以宣泄痛苦，疯狂的烧掉寻人通知，却没有留得住一段即将幻灭的感情。然而，米歇尔最后还是提出分手，重新回到她原来生活的世界。后来米希尔终于在飘雪的圣诞夜跟埃里克斯在烟花灿烂的塞纳河上重逢。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 32904,
    "runtime": "125 min",
    "releaseDate": "1991-10-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0101318",
    "id": "movie-1291559"
  },
  {
    "sourceId": "1689787",
    "title": "回归",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2213137026.jpg",
    "summary": "雷蒙黛（佩内洛普•克鲁兹 Penélope Cruz饰）和他的酒鬼丈夫、年轻女儿共住，生活却不像别人平静。",
    "genres": [
      "Drama",
      "Comedy",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 8.1,
    "votes": 31684,
    "runtime": "121 min",
    "releaseDate": "2006-03-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0441909",
    "id": "movie-1689787"
  },
  {
    "sourceId": "19955828",
    "title": "穿裘皮的维纳斯",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "",
    "summary": "故事发生在一间阴暗人稀的剧院之中，编剧托马斯（马修·阿马立克 Mathieu Amalric 饰）正在为他所改编的剧本《穿裘皮的维纳斯》寻找合适的女主角。接连面试的几位演员都令托马斯感到失望，她们和他脑海里完美的女神形象简直千差万别。面试以一无所获的结局结束了，正当托马斯准备离开之时，一位被淋成了落汤鸡的落魄女郎闯入了剧院。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "波兰"
    ],
    "rating": 8.1,
    "votes": 28958,
    "runtime": "96 min",
    "releaseDate": "2013-05-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2406252",
    "id": "movie-19955828"
  },
  {
    "sourceId": "4946963",
    "title": "光棍儿",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p773609121.jpg",
    "summary": "张家口治下的顾家沟村里，四个老光棍聚在村头闲聊：梁大头在1966年为女社员贴身义务教学，结果付出了一只手的代价；顾林在1945年的光景上演了一出釜底加薪计只为摸两把姑娘；六软12岁成亲，但初夜经历却不堪回首；老杨（杨振君 饰）则三十年和同村二丫头维系着地下情，时常把收入输送给后者补习考大学的儿子，而二丫头背着村长丈夫，同时和多名光棍保持关系……",
    "genres": [
      "Drama",
      "Comedy",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "同性"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 28650,
    "runtime": "94 min",
    "releaseDate": "2011-12-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1652352",
    "id": "movie-4946963"
  },
  {
    "sourceId": "1293596",
    "title": "离开拉斯维加斯",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p860190615.jpg",
    "summary": "本（尼古拉斯•凯奇 Nicolas Cage  饰 ）一个是贫困潦倒的编剧，终日借酒消愁，被公司开除后，郁郁不得志的他变卖了所有的家当，前去拉斯维加斯开始了他慢性自杀的计划。他打算在几周的时间内，喝酒至死。在光怪陆离的拉斯维加斯，醉醺醺的他遇见了妓女莎拉（伊丽莎白•苏 Elisabeth Shue  饰）。莎拉过着同样不幸的生活：被皮条客控制自由，屡次出逃不遂。本和莎拉共度了一夜，这夜他们互相倾诉，同是天涯沦落人。",
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
      "法国",
      "英国"
    ],
    "rating": 8.1,
    "votes": 26999,
    "runtime": "111 min",
    "releaseDate": "1995-10-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113627",
    "id": "movie-1293596"
  },
  {
    "sourceId": "26691320",
    "title": "帝一之国",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "生长于政治世家的赤场帝一（菅田将晖饰），从小就以当上日本总理为目标，为了建立自己的王国，他必须在孕育出多位政治领袖，人称「超精英学校」的海帝高校展露头角，只有当过海帝高校学生会长的人，未来才有机会角逐总理的宝座。「我一定打败所有竞争对手，站在顶点！为此我会不择手段！」比谁都早开始计划的帝一，将要面对意想不到的陷阱和试炼！斗个你死我活的学生会长选举战争即将华丽展开！",
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
    "rating": 8.1,
    "votes": 25856,
    "runtime": "118 min",
    "releaseDate": "2017-04-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5293604",
    "id": "movie-26691320"
  },
  {
    "sourceId": "2355582",
    "title": "尽情游戏",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p471709282.jpg",
    "summary": "摩洛哥沙漠中的一座煤矿发生爆炸，前去清除地雷的老巴塞尔因公殉职，小巴塞尔因为暴力武器成了孤儿。很多年以后，有一次，巴塞尔（丹尼·伯恩 Dany Boon 饰）在路旁观战枪匪追逐的时候不幸被一颗流弹击中头部。这次的遭遇，让巴塞尔失去了工作，接着导致流落街头。不幸中大幸，巴塞遇到了一群面相凶悍的拾荒者。这群奇怪的人集体生活在一个像阿里巴巴山洞的洞穴中，并且各自身怀绝技。好心的他们收留了巴塞尔，让他又一次感受到了家庭的温暖。突然有一天，当巴塞尔路过两幢雄伟建筑时，认出招致他枪伤和父亲死亡的武器制造商的标志。在拾荒者家族的全力支持下，巴塞尔决定向那些武器制造者们发出报复。在行动的过程中，他们还发现那些非法军火商似乎还在策划一起秘密的军火交易......",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 24553,
    "runtime": "105 min",
    "releaseDate": "2009-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1149361",
    "id": "movie-2355582"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0387596",
    "id": "movie-1389982"
  },
  {
    "sourceId": "2464346",
    "title": "白丝带",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2196608840.jpg",
    "summary": "故事的讲述者——一位乡村教师回忆起一战前夕，德国北部某村庄里的一系列离奇往事。医生骑马回家的时候被绳索绊倒受伤，人们马上展开调查的同时，牧师对两名晚归的孩子施以体罚，并为孩子们系上了象征纯洁的白丝带。第二天，一名佃农的妻子因事故身亡，乡村教师在河边发现男孩马丁在高处行走，马丁声称想知道上帝是否要惩罚他。教师与男爵家的保姆伊娃相识，彼此留下了良好印象。不久男爵主持了丰收典礼，身亡农妇的儿子认为男爵对母亲的死有责任遂破坏了男爵的菜园泄愤。所有这些恶性事件可能的始作俑者迟迟没有调查出来，纵火和针对儿童的毒打仍然发生。第二年费迪南大公遇刺之后，教师似乎发现了一些线索，但却被牧师强硬的制止。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "德国",
      "奥地利",
      "法国",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 23016,
    "runtime": "144 min",
    "releaseDate": "2009-09-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1149362",
    "id": "movie-2464346"
  },
  {
    "sourceId": "4903614",
    "title": "真幌站前多田便利屋",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "在东京的附近有一座真幌市，这里介乎都市与乡村之间，生活悠哉散漫，甚至连天气预报也不准。在真幌车站的旁边，坐落着一家破败毫不起眼的小店——多田便利轩。店主多田启介（瑛太 饰）是一个有过失败婚姻的男子，他独自经营小店，兼带为他人提供各种各样的服务，生活平淡无奇。偶然机缘，多田重逢初中同学行天春彦（松田龙平 饰）。这个同样有着失败婚姻性格别扭的男子暂时住进了便利轩，却不知不觉成为了多田的合作伙伴。他们终日开着小卡车，穿梭在真幌的大街小巷，与各式各样的人擦肩而过，影响着彼此的人生……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 22882,
    "runtime": "123 min",
    "releaseDate": "2011-04-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1685576",
    "id": "movie-4903614"
  },
  {
    "sourceId": "1301230",
    "title": "夺魂索",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1948,
    "coverUrl": "",
    "summary": "博兰顿（约翰•达尔John Dall 饰）和菲利普（法利•格兰杰 Farley Granger 饰）都是哈佛的高才生，一天，都是同性恋的两人合谋杀害了同学戴维，并藏尸于一个大箱子中。或许是出于炫耀，他们做出了一个惊人的举动。那就是用装着戴维尸体的箱子当餐桌，邀请了戴维的父母、未婚妻、同学和茹伯特教授（詹姆斯•斯图尔特 James Stewart 饰）来赴宴。他们谎称戴维外出了，和客人们在戴维的“棺材”上进行着宴会。胆小的菲利普从宴会开始就开始坐立不安，但是博兰顿却不慌不忙，在客人中滔滔不绝。然而，聪明的茹伯特教授从博兰顿的谈话中渐渐察觉出事有蹊跷……",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 21891,
    "runtime": "80 min",
    "releaseDate": "1948-08-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0040746",
    "id": "movie-1301230"
  },
  {
    "sourceId": "25905124",
    "title": "澄沙之味",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事发生在一间名为“铜锣之春”的铜锣烧专卖店里，千太郎（永濑正敏 饰）是这里的店长，曾经，他有过一段十分灰暗的过往，如今，他将不堪回首的回忆深深的埋葬在心底，安安心心，只做一介卖铜锣烧的小贩。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本",
      "法国"
    ],
    "rating": 8.1,
    "votes": 20131,
    "runtime": "113 min",
    "releaseDate": "2015-05-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4298958",
    "id": "movie-25905124"
  },
  {
    "sourceId": "1291872",
    "title": "苔丝",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1979,
    "coverUrl": "",
    "summary": "苔丝（娜塔莎·金斯基 Nastassja Kinski 饰）出生于英国乡村的一个小农家庭，一天她的父亲听说自家是古老贵族德伯维尔的后裔。这个传闻，让苔丝的一生发生了剧变。因为有一个姓德伯维尔的有钱人家就住在不远，父母让苔丝前去攀亲。",
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
      "英国"
    ],
    "rating": 8.1,
    "votes": 19440,
    "runtime": "190 min",
    "releaseDate": "1979-10-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0080009",
    "id": "movie-1291872"
  },
  {
    "sourceId": "21770915",
    "title": "冬眠",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 2014,
    "coverUrl": "",
    "summary": "远离伊斯坦布尔的安纳托利亚，业已退休的戏剧演员艾登（Haluk Bilginer 饰）以专栏作家的身份展开了新的人生。他故作关心地日复一日撰写宗教类的文章，沉浸陶醉在自我所营造的看似深刻的思考世界里无法自拔。艾登用退休金经营一家旅馆，名下还有多处正在出租的房产，在与普通民众的接触过程中让他看起来多了一份虚伪和冰冷。妹妹尼卡（Demet Akbag 饰）早年离婚，经常蜷缩在艾登的书房内针对写作而争论，甚至彼此嘲讽攻讦。他的妻子尼哈尔（Melisa Sözen 饰）年轻独立，热衷各种公益事业。聚少离多且人生态度迥异的老夫少妻渐行渐远，感情出现裂痕……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "法国",
      "德国"
    ],
    "rating": 8.1,
    "votes": 17371,
    "runtime": "196 min",
    "releaseDate": "2014-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2758880",
    "id": "movie-21770915"
  },
  {
    "sourceId": "2032143",
    "title": "东京奏鸣曲",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p488976777.jpg",
    "summary": "佐佐木家的小儿子健二（井之肋海饰）偷偷练习钢琴。爸爸龙平（香川照之饰）是一个普通的上班族。妈妈惠（小泉今日子饰）则是家庭主妇。哥哥贵（小柳友饰）是个忙着打工的大学生。这是一个乍看非常普通的日本家庭，但其实每个人都藏有不希望被别人知道的秘密。直到某天健二回到空无一人的家里，一切开始漫漫浮出水面……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本",
      "荷兰",
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 16900,
    "runtime": "120 min",
    "releaseDate": "2008-05-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0938341",
    "id": "movie-2032143"
  },
  {
    "sourceId": "1293200",
    "title": "象人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1980,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1474924253.jpg",
    "summary": "象人（约翰•赫特 John Hurt 饰）是一个天生的畸形症患者，他的脸长得就像大象的脸，因此而得名。象人一直被利欲昏心的马戏团老板利用，带到世界各地去巡回演出，受尽了非人的虐待。象人所经受的遭遇社会名流们都会感到不可思议，然而乐观坚强的象人却承担了下来。",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 16707,
    "runtime": "124 min",
    "releaseDate": "1980-10-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0080678",
    "id": "movie-1293200"
  },
  {
    "sourceId": "25821498",
    "title": "妇女参政论者",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2015,
    "coverUrl": "",
    "summary": "影片讲述一个多世纪前，英国妇女为了争取选举权而不懈斗争的故事。斯特里普在片中饰演的埃米琳·潘克赫斯特是一位著名的妇女选举权倡导者。她与几位同盟者发起成立了“妇女议会”，在国会开会时，她们也开会，与议会唱对台戏。由于采取了激进的斗争措施，潘克赫斯特同她的同盟者们曾多次入狱，在社会上造成了很大的反响。",
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
      "英国"
    ],
    "rating": 8.1,
    "votes": 16323,
    "runtime": "106 min",
    "releaseDate": "2015-09-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3077214",
    "id": "movie-25821498"
  },
  {
    "sourceId": "24719853",
    "title": "神探伽利略XX 内海薰最后的案件 愚弄",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "九个月前，正值而立之年的内海薰（柴崎幸 饰）突然接到远赴美国俄克拉何马州研修的通知，情知自己正成为警界可有可无之人，薰在焦虑烦恼的同时也暗下决心要干出一番业绩。就在此时，机会从天而降。在街上执行任务时她偶然发现一名看护师用轮椅推着早已死亡的老人，进一步调查发现看护师上念研一（中山裕介 饰）竟是长野县通缉的在逃犯。在薰的面前，上念供诉了杀害主家女儿的经过。风光得意的薰在公众和同侪的注视下担当押送嫌犯的重任，谁知上念抵达长野后推翻了之前的供词，令内海陷入窘境。在此之后，他只得与新人当摩健斗（柳乐优弥 饰）联手调查，却意外探知到九年前的一起冤案。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 15861,
    "runtime": "107 min",
    "releaseDate": "2013-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2956368",
    "id": "movie-24719853"
  },
  {
    "sourceId": "1297769",
    "title": "马语者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p949388374.jpg",
    "summary": "安妮（克里斯汀•斯科特•托马斯 Kristin Scott Thomas 饰）的女儿格雷斯（斯嘉丽•约翰逊 Scarlett Johansson 饰） 喜欢骑马，却在一次事故中和好友一同从马背摔下，好友遇难，而格雷斯也摔断了一条腿，她心爱的马匹“朝圣者”受伤得面目全非。格雷斯的心里蒙上了挥之不去的阴霾。",
    "genres": [
      "Drama",
      "Romance",
      "Western"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "西部"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 14663,
    "runtime": "170 min",
    "releaseDate": "1998-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119314",
    "id": "movie-1297769"
  },
  {
    "sourceId": "1308841",
    "title": "杀妻总动员",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p729530435.jpg",
    "summary": "一个男人（浅野忠信饰）因无法忍受妻子（橋本麗香饰），处心积虑将其“杀害”后抛于荒野，可是每次回到家后，妻子都像没事人一样待着。",
    "genres": [
      "Romance",
      "Mystery",
      "Thriller",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "悬疑",
      "惊悚",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 14363,
    "runtime": "120 min",
    "releaseDate": "2004-08-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0430651",
    "id": "movie-1308841"
  },
  {
    "sourceId": "2971730",
    "title": "你好，再见",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p523684897.jpg",
    "summary": "一宗交通意外，连结两个陌生的人。马克（查克·伯劳姆 Chuck Blaum 饰）在车祸中丧生，一直暗恋他的好友杰夫（亚当·尼尔·史密斯 Adam Neal Smith 饰）因代为回复电邮，认识了马克生前的意大利网友安德烈（亚历山德罗·卡萨 Alessandro Calz a 饰）。安德烈本想取消来德州的计划，但最终被杰夫说服。两个拥有不同人生轨迹的男人，于是带着一点点惆怅和困惑，在阳光如织的德州天空下发生交集。他们真切的分享对逝者的美好回忆，于淡淡的哀鸣中寻找路标前行。",
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
      "美国"
    ],
    "rating": 8.1,
    "votes": 13812,
    "runtime": "87 min",
    "releaseDate": "2008-12-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0870089",
    "id": "movie-2971730"
  },
  {
    "sourceId": "1436768",
    "title": "时光驻留",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2244194842.jpg",
    "summary": "浪漫之都法国，拥有迷人气质的摄影师罗曼（梅尔维尔·珀波 Melvil Poupaud 饰）在工作中突然晕倒，经诊断发现他已罹患晚期癌症，去日无多。突如其来的打击，令罗曼内心百感交集，也许他隐隐意识到即使拍摄过那么多精美的照片，却无法留住行将消逝的生命。罗曼取消接下来的工作，与父母和姐姐苏菲（Louise-Anne Hippeau 饰）聚餐。纵然事先练习，依然无法道出真相，只得徒劳付诸言语的伤害。此外，他还要面对相守多年的男孩——同性恋人萨沙（Christian Sengewald 饰），接近黄昏的疲惫爱情，可堪这段生死考验？",
    "genres": [
      "Drama",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "同性"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 13144,
    "runtime": "81 min",
    "releaseDate": "2005-12-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0417189",
    "id": "movie-1436768"
  },
  {
    "sourceId": "1293870",
    "title": "阿黛尔·雨果的故事",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1975,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1144735459.jpg",
    "summary": "美国内战时期，法国大作家Victor Hugo的二女儿Adele Hugo（伊莎贝尔·阿佳妮 Isabelle Adjani饰）漂洋过海来到加拿大的Halifax寻找自己的爱人——英国军官Pinson（布鲁斯·罗宾逊 Bruce Robinson）。然而Pinson却已移情别恋，对Adele异常冷漠。Adele想尽一切方法想挽回Pinson皆告失败。而另一方面，当地高昂的生活费也让Adele难以承受，只能一次又一次要求父亲汇钱。此时的Hugo正流亡在一个小岛上，妻子病重，两人多次希望Adele能返回家中，但Adele坚持留在加拿大。恋情的失败让Adele经常想起她溺水身亡的姐姐，她的精神开始变得错乱。之后，Pinson跟着部队离开Halifax前往另一个小岛Barbados，Adele也跟随而去，在那里，她的病情日益恶化，最终被送回法国，在休养院里度过余生，最终于一战时期悄然离世。",
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
      "法国"
    ],
    "rating": 8.1,
    "votes": 13140,
    "runtime": "96 min",
    "releaseDate": "1975-10-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0073114",
    "id": "movie-1293870"
  },
  {
    "sourceId": "3543262",
    "title": "夏威夷男孩",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2202387821.jpg",
    "summary": "追寻着杂志上报道的月虹，日本男孩玲雄（冈田将生 饰）和女友来到夏威夷岛旅行，邂逅了岛北端霍诺卡坷村镇上的老式影院。半年后，从大学休学的玲雄独自回到镇上，在影院担任放映助理。他逐渐融入当地简单安详的生活，并和擅长料理又爱恶作剧的比婆婆（倍赏千惠子 饰）成为了朋友。比婆婆邀请玲雄每天到她家享用美食，两人结伴到山谷中等待月虹。一天玲雄结识了活泼爱笑的姑娘玛莱亚（长谷川润 饰），后者很快成为他生活中的阳光。被冷落的比婆婆闷闷不乐，玲雄却浑然不觉。生日当晚玲雄带玛莱亚到比婆婆家吃饭，玛莱亚因比婆婆的料理过敏入院。玲雄打电话质问比婆婆，却得知她突然失明的消息。同时玲雄工作的影院正面临停业。在夏威夷轻柔吹拂的海风中，男孩悄然经历着成长的抉择。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 12979,
    "runtime": "111 min",
    "releaseDate": "2009-03-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1375730",
    "id": "movie-3543262"
  },
  {
    "sourceId": "20389706",
    "title": "小小的家",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "青年荒井健史（妻夫木聪 饰）此前一直照顾姨婆多喜（倍赏千恵子 饰）的生活起居，多喜年轻时曾在东京帮佣，如今在健史的纠缠下，她提笔写下了陈年的悲喜往事。那要回溯到昭和初期，年轻的多喜（黑木华 饰）离开山形老家，几经辗转进入平井家担任女佣。平井家在东京郊区盖了一栋红色屋顶的小房子，男主人（片冈孝太郎 饰）是玩具公司常务，女主人时子（松隆子 饰）雍容美丽。多喜对时子充满敬仰，她更全心全意为平井家服务。某年春节，玩具公司新来的设计人员板仓正治（吉冈秀隆 饰）走进平井家门。相近的趣味和爱好让他和时子愈加投机。与此同时，战况日渐激烈，有情男女藏着彼此的秘密，随波逐流……",
    "genres": [
      "Drama",
      "Romance",
      "Family",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "家庭",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 12903,
    "runtime": "136 min",
    "releaseDate": "2014-01-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2530392",
    "id": "movie-20389706"
  },
  {
    "sourceId": "1303462",
    "title": "离魂异客",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2155134187.jpg",
    "summary": "来自克里夫兰的美国小伙子威廉•布莱克（约翰尼•德普 Johnny Depp 饰）往西部去讨生活，他准备前往当地的一间工厂应聘会计。不料，他错过了应聘时间，被赶了出来。还遭到了当地迪金森金属厂的老板的百般凌辱，甚至被枪指着脑袋。",
    "genres": [
      "Drama",
      "Western",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "西部",
      "奇幻"
    ],
    "originalRegions": [
      "美国",
      "德国",
      "日本"
    ],
    "rating": 8.1,
    "votes": 12491,
    "runtime": "121 min",
    "releaseDate": "1995-05-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0112817",
    "id": "movie-1303462"
  },
  {
    "sourceId": "1291866",
    "title": "佐罗",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1975,
    "coverUrl": "",
    "summary": "西班牙人在南美洲殖民统治时代，苛捐杂税民不聊生。新总督米格尔在上任途中被杀，临死时把官印交与好友“欧洲第一剑士”唐迭戈（阿兰·德龙 Alain Delon 饰），要其承继遗志。三个月后，新总督突然出现，不过他似乎是一个贵族的纨绔子弟，一切事物均假手他人。与此同时，民传说一位蒙面黑侠从天而降，警恶惩奸，锄强扶弱，\"佐罗\"的英名不径而走，令殖民者大为头痛，而新总督的身份更令人怀疑。身兼总督和侠客双重身份的迭戈与残暴的韦尔塔上校斗志斗勇，终于在韦尔塔强娶奥顿西娅的婚礼上结果了这个恶棍的性命，为当地百姓除了大害。佐罗告别了好姑娘奥顿西娅，告别了新阿拉贡。这个主持公道、追求自由的义侠佐罗又跨上枣红马去行侠仗义了……",
    "genres": [
      "Comedy",
      "Action",
      "Western",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "西部",
      "冒险"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 8.1,
    "votes": 12397,
    "runtime": "124 min",
    "releaseDate": "1975-03-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0072448",
    "id": "movie-1291866"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0115751",
    "id": "movie-1292468"
  },
  {
    "sourceId": "3005365",
    "title": "蓝调传奇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p719411750.jpg",
    "summary": "1941年，波兰裔移民里奥纳德·切斯（亚德里安·布洛迪 Adrien Brody 饰）为出人头地，开始经营一间酒吧。而此时密西西比的佃农麦肯利·摩根菲尔德（杰弗里·怀特 Jeffrey Wright 饰）怀揣音乐梦想背着一把吉他只身来到芝加哥，在街边他遇到了17岁的天才口琴演奏师小沃尔特，两人一拍即合，开始在切斯的酒吧驻唱。野心勃勃的切斯凭借自己敏锐的直觉和商业头脑，开办了切斯工作室（Chess Records），为沃特斯录制唱片，取得巨大成功。切斯在经营切斯工公室期间，广纳音乐人才，推陈出新，造就了一大批对美国乐坛影响深远的歌手……",
    "genres": [
      "Drama",
      "Romance",
      "Music",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "音乐",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8.1,
    "votes": 10729,
    "runtime": "109 min",
    "releaseDate": "2008-12-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1042877",
    "id": "movie-3005365"
  },
  {
    "sourceId": "1294039",
    "title": "绿光",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178171016.jpg",
    "summary": "夏天快要来临的时候，巴黎女子戴尔芬（玛丽·瑞莱 Marie Rivière 饰）却陷入了忧伤与烦闷中。刚刚和前男友结束恋爱关系，本来约好与她一同度假的女友也放了她鸽子。尽管其它许多好心的亲友邀请她一同度假，但是她却一一拒绝了。每个人都有了自己的度假计划，只有她看似要独身 一人困在巴黎过冗长的夏天。她寻寻觅觅，终日游荡在各处，希望能够找到自己的情人，但是所遇之人皆不能触动她心。在马赛海边，她听说了关于绿光的传说：谁能看到绿光，谁就能得到幸福。落寞的她打算返回巴黎，在车站，一个男子对着正在阅读小说《白痴》的她微笑，戴尔芬似乎觉察到了什么，她主动邀请男子去海边看日落。在灿烂的光辉中，男子对她表白，而她却固执地等到绿光才给出答案。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8.1,
    "votes": 10592,
    "runtime": "98 min",
    "releaseDate": "1986-08-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0091830",
    "id": "movie-1294039"
  },
  {
    "sourceId": "2042181",
    "title": "律政英雄",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1176364620.jpg",
    "summary": "检察官久力生公平（木村拓哉 饰）六年后回到东京地方监察厅城西部，继续由事务官雨宫舞（松隆子 饰）担任助手。六年时间并没有隔断他们的感情，在斗嘴中舞试探着久利生的心意，久利生感觉到却故意调皮地置之不理。芝山检察官（阿部宽 饰）正对一桩故意伤害人的案件提起起诉，犯罪嫌疑人对罪状也供认不讳。芝山由于正在为自己争取女儿抚养权的官司弄得焦头烂额，这件官司只得转交久利生处理。久利生和舞去了案发现场重演经过时遇见了一个神情庄重的中年人。在初审法庭上发现他竟是犯罪嫌疑人的辩护律师——在业界首屈一指的蒲生一臣，而犯罪嫌疑人也一改之前的口供，否认罪状。原来花岗练三郎议员正在被控贿赂，而他坚称当时正在牙医诊所，目击证人正是一名保安，这名保安就是久利生的犯罪嫌疑人。为了帮花岗脱罪，所以这名犯罪嫌疑人必须身在牙医诊所而不是案发现场。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8.1,
    "votes": 10470,
    "runtime": "130 min",
    "releaseDate": "2007-09-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0997157",
    "id": "movie-2042181"
  },
  {
    "sourceId": "1304879",
    "title": "去年烟花特别多",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p796235683.jpg",
    "summary": "九七香港回归使家贤（何华超）等5名已近不惑之年的华籍英兵成了“无用”的人，然而他们虽然深知无力与年轻一代争抢舞台，却仍在尽力给自己找寻新的位置，但许多事并非有心努力就能做成，朋友Bobby虽重新将自己确定，家贤却只能通过弟弟家璇（李灿森）的引荐铤而走险加入黑帮，等待命运将他捶打。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8.1,
    "votes": 10434,
    "runtime": "128 min",
    "releaseDate": "1998-12-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0189660",
    "id": "movie-1304879"
  },
  {
    "sourceId": "1293391",
    "title": "孩子王",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2243809766.jpg",
    "summary": "文化大革命期间，插队七年的知青老杆（谢园饰）被抽到云贵山区的某简陋小学担任老师，知青伙伴高兴地称他为“孩子王”。但那里师资奇缺，教材稀少，学校分配他教初三，令他吃惊不小。老杆苦恼于学校的政治学习材料多如牛毛，批判文章学了一篇又一篇，但孩子们连小学课本上的生字都不认得，老杆感慨万端，只得从头教起。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8.1,
    "votes": 10312,
    "runtime": "110 min",
    "releaseDate": "1987-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093133",
    "id": "movie-1293391"
  },
  {
    "sourceId": "1292760",
    "title": "贵妇失踪记",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1938,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2155703968.jpg",
    "summary": "正要赶往伦敦完婚的凯莉（Margaret Lockwood）因雪崩被困在山下的小旅馆里，偶遇摄影记者康德（Michael Redgrave），两个人因小事发生争执，第二天大家各自赶路，却登上了同一列火车。",
    "genres": [
      "Comedy",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "喜剧",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8.1,
    "votes": 10213,
    "runtime": "96 min",
    "releaseDate": "1938-11-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0030341",
    "id": "movie-1292760"
  },
  {
    "sourceId": "25958713",
    "title": "记住",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2015,
    "coverUrl": "",
    "summary": "一家疗养院里，年逾古稀的犹太人古特曼先生（克里斯托弗·普卢默 Christopher Plummer 饰）呻吟着从睡梦中醒来。他的记忆正在消退，连妻子不久前去世的事也险些忘记。不过妻子的离开似乎也帮他卸去最后一点儿牵挂，他在朋友的帮助下，从养老院偷偷跑出。古特曼的身上携带着朋友写的信，上面记载着他沿途需要注意的事项以及此行最大的目的。几经辗转，他终于找到了名叫鲁迪·克兰德的老人。对方年轻时曾是参与过二战的德国士兵，家族的血海深仇驱使着古特曼先生不远万里追踪仇人。",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "加拿大",
      "墨西哥",
      "德国",
      "南非"
    ],
    "rating": 8.1,
    "votes": 10049,
    "runtime": "94 min",
    "releaseDate": "2015-10-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3704050",
    "id": "movie-25958713"
  },
  {
    "sourceId": "1298047",
    "title": "造雨人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2162186286.jpg",
    "summary": "初出茅庐的鲁迪·贝勒（马特·达蒙 Matt Damon饰）是刚踏进律师界的新手。一腔热血的鲁迪接手的第一个案子是一宗涉及医疗保险赔偿的诉讼。无助的母亲，生命垂危的儿子，拒绝支付医疗费的保险公司，不择手段的辩护律师，一切都跟当初设想的大相径庭。面对种种举步维艰的行业阴暗面和陷于困境的弱势群体，鲁迪至始至终都没有放弃他的正义之心。影片的另一条主线还有一位遭受家庭暴力的受虐少妇。影片用写实的手法，向我们描绘了一场捍卫正义的道德之战。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8.1,
    "votes": 10010,
    "runtime": "135 min",
    "releaseDate": "1997-11-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119978",
    "id": "movie-1298047"
  },
  {
    "sourceId": "25815034",
    "title": "湄公河行动",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2016,
    "coverUrl": "",
    "summary": "金三角湄公河上，一处被称为“鬼门关”的河段，两艘来自中国的商船遭到不明身份之人的枪击袭击。未过多久，泰国军方召开新闻发布会，指责中国商船贩卖毒品。虽然发布会宣称船员全部逃亡，但是十三具遭受残忍杀害的中国船员尸体很快被人发现。这起胆大妄为的案件令中国警方大为震惊，云南省缉毒总队队长高刚（张涵予 饰）受命带特别行动小组前往泰国，并与情报员方新武（彭于晏 饰）合作接洽。根据现有资料显示，这件案子由盘踞在金三角的大毒枭糯卡所为。糯卡贪婪残忍，胆大包天，是湄公河流域上一颗惊扰运输安全的毒瘤。为了将这个恶棍绳之于法，中国、老挝、缅甸开展了三国联合巡逻，集中对糯卡的制毒窝点进行扫荡。而高刚等人也深入最危险境地，与丧失人性的贩毒分子进行惨烈对决……",
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
      "中国大陆",
      "中国香港"
    ],
    "rating": 8,
    "votes": 503324,
    "runtime": "124 min",
    "releaseDate": "2016-09-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6044910",
    "id": "movie-25815034"
  },
  {
    "sourceId": "1482072",
    "title": "穿普拉达的女王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p735379215.jpg",
    "summary": "初涉社会的安德丽娅•桑切丝（安妮•海瑟薇饰）来到了著名时尚杂志《RUNWAY》面试，以聪明得到了主编米兰达•普雷斯丽（梅利尔•斯特里普）的特许，让她担任自己的第二助理。开始的时候安德丽娅感到十分委屈，就算自己多努力工作也无法得到赞赏，经一位老前辈的指点便重新改造自己。工作越来越顺，甚至取代了第一助理在米兰达心中的地位，决定带着这个聪明的女孩前往法国。可安德丽的改变让她失去了男友及朋友的爱，令她非常矛盾。",
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
      "法国"
    ],
    "rating": 8,
    "votes": 456880,
    "runtime": "109 min",
    "releaseDate": "2007-02-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0458352",
    "id": "movie-1482072"
  },
  {
    "sourceId": "1820156",
    "title": "我是传奇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "",
    "summary": "2012年，人类被不知名病毒感染，纽约成为一座空城。Robert Neville（Will Smith 饰）是为军方服务的科学家，也是对病毒有免疫力的幸存者。白天，他带着狗Sam在街道上寻找食物，用广播寻找幸存者，在实验室里研究治愈病毒的方法；晚上，他只能躲在屋子里，因为那些感染病毒而没有死亡的人们，成为了“夜魔”只能夜晚出来活动，丧失理智，会攻击所有的人。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Horror"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 270144,
    "runtime": "101 min",
    "releaseDate": "2007-12-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0480249",
    "id": "movie-1820156"
  },
  {
    "sourceId": "2124703",
    "title": "疯狂的赛车",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510069458.jpg",
    "summary": "在一次全国自行车锦标赛上，倒霉的职业车手耿浩（黄渤 饰）以0.01秒的微弱差距败给撞到狗屎运的对手，屈居亚军，随后他又遭奸商李法拉（九孔 饰）算计，因药检呈阳性而被终身禁赛，他的教练（马少骅 饰）因此气倒。",
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
      "中国大陆"
    ],
    "rating": 8,
    "votes": 232464,
    "runtime": "104 min",
    "releaseDate": "2009-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0851515",
    "id": "movie-2124703"
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
    "rating": 8,
    "votes": 208145,
    "runtime": "110 min",
    "releaseDate": "2006-04-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0468704",
    "id": "movie-1433360"
  },
  {
    "sourceId": "25769362",
    "title": "哆啦A梦：伴我同行",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "生活在日本东京的野比大雄（大原惠美 配音），是一个学习不上进、日常迷迷糊糊并且饱受同学欺负的男孩。他的性格不仅左右着自己的事业和婚姻，还对未来子孙产生莫大的影响。为此，大雄孙子的孙子世修（松本さち 配音）带着猫型机器人哆啦A梦（水田山葵 配音）乘坐时光机突然来访，期望彻底改变大雄及整个家族的命运。在哆啦A梦的帮助下，大雄不再受到胖虎（木村昴 配音）和小夫（关智一 配音）等人的欺负，他喜欢美丽的女孩源静香（嘉数由美 配音）。为了实现和静香结婚的命运，他和哆啦A梦穿越时空，见证了决定人生的最关键的时刻和事件。当大雄慢慢开始变得幸福之际，哆啦A梦也到了必须返回22世纪的时候……",
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
    "rating": 8,
    "votes": 199372,
    "runtime": "95 min",
    "releaseDate": "2015-05-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3331846",
    "id": "movie-25769362"
  },
  {
    "sourceId": "1297223",
    "title": "鹿鼎记",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "清朝初期，康熙皇帝尚且年少，奸臣从中控制政权，民不聊生。“天地会”是一个推翻清朝的民间组织。“天地会”首领陈近南（刘松仁 饰）在一次行动中幸得韦小宝（周星驰 饰）相救，小宝就此加入天地会，被派到王宫当卧底，偷取藏有清朝秘密的四十二章经。聪明机灵的小宝很快便成为了皇上的心腹，做了大官。小宝陷入了两难的状态，他既要执行任务却又跟皇帝成为了好朋友。就在小宝想要逃走之际，师父陈近南也找到了他，并派人监视他回到王宫。不久，小宝便受到了鳌拜同盟以及假太后的追杀，与天地会的人大战起来。",
    "genres": [
      "Comedy",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 189917,
    "runtime": "110 min",
    "releaseDate": "1992-07-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0104770",
    "id": "movie-1297223"
  },
  {
    "sourceId": "3642843",
    "title": "星际迷航2：暗黑无界",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "在尼比鲁星球探查期间，企业号舰长柯克（克里斯·派恩Chris Pine 饰）为营救史波克（扎克瑞·昆图 Zachary Quinto 饰）采取了胆大妄为的举动，几乎危及全舰队员的生命，他也为此付出代价。不久，柯克官复原职，而伦敦发生一起死亡超过四十人的恐怖袭击事件。该事件的始作俑者约翰·哈里森（本尼迪克特·康伯巴奇 Benedict Cumberbatch 饰）正来自联盟内部。此后他驾驶飞机袭击了高层会议，柯克最为敬重的派克将军不幸遇难。为了阻止哈里森的外逃阴谋，柯克重新率领企业号启程追击。危机重重的旅途，他和舰员、朋友之间的信任也受到巨大考验。",
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
    "rating": 8,
    "votes": 175084,
    "runtime": "132 min",
    "releaseDate": "2013-05-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1408101",
    "id": "movie-3642843"
  },
  {
    "sourceId": "1907464",
    "title": "集结号",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "",
    "summary": "1948年解放战争时期，连长谷子地（张涵予 饰）率领九连47名战士在汶河岸执行掩护大部队撤退的任务，团长刘泽水（胡军 饰）下令，以集结号为令，听见号响就撤退。",
    "genres": [
      "Drama",
      "Biography",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 8,
    "votes": 163527,
    "runtime": "124 min",
    "releaseDate": "2007-12-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0881200",
    "id": "movie-1907464"
  },
  {
    "sourceId": "1292444",
    "title": "大逃杀",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1071682909.jpg",
    "summary": "为了培养出忠实效忠于成人、在逆境中坚忍不拔的青少年一代，日本政府出台《BR》法案。每年都从全国学校随机抽出一个班级的同学，前往荒岛进行生存极限挑战——老师发给学生地图、粮食和各式武器，令他们自相残杀，直到存活下来的最后一个，才能离开荒岛。接下来，残酷的游戏规则和令人绝望的生存条件，使班级里的年轻人开始了相互杀戮。善良或者凶残，主动出击或者被动防守， 同学们开始了各自的计划，人性的丑恶在血腥的死亡中暴露无遗。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "惊悚"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 154644,
    "runtime": "114 min",
    "releaseDate": "2000-12-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0266308",
    "id": "movie-1292444"
  },
  {
    "sourceId": "6791750",
    "title": "起风了",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "那是一个动荡的年代，战争、饥饿、疾病、天灾，死神的阴影笼罩全球，却无法遮挡心头闪现的梦想和希望的光芒。平凡的日本少年堀越二郎（庵野秀明 配音）迷恋游弋长空的飞机，梦中他与意大利飞机设计师卡普罗尼（野村万斋 配音）成为朋友，享受着飞行带来的乐趣。恐怖的关东大地震，二郎邂逅一生的挂念——里见菜穗子（泷本美织 配音），短暂的相逢，无序的混乱中又失之交臂。在命运的指引下，被称为天才的二郎如愿成为飞机设计师，他和前辈同侪共同努力，绞尽脑汁提升飞机的性能。欧洲的先进设计让他们痛心疾首，另一方面又充满矛盾的打造着融合了梦想和杀人属性的机器。他追逐梦想，并与菜穗子重逢。动荡的昭和时代，风雪飘摇之中步伐从未停止……",
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
    "rating": 8,
    "votes": 146723,
    "runtime": "126 min",
    "releaseDate": "2013-07-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2013293",
    "id": "movie-6791750"
  },
  {
    "sourceId": "1304970",
    "title": "猫的报恩",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "",
    "summary": "吉冈春（池胁千鹤 配音）是一个普普通通同时又有些迷糊的女高中生，某天放学的路上，她偶然救下了一只险些丧生车轮之下的小猫，谁曾想小猫竟然直立起来以人类的方式对女孩表示感谢。小春更想不到的是，她不经意的善举改变了自己的命运。原来小猫是猫王国的王子，为了报答小春的恩情，猫王国举国上下展开了令人啼笑皆非的报恩行动，只不过它们视为“上品”的老鼠令小春哭笑不得。不久后，小春接受王国的邀请前去做客，期间竟稀里糊涂答应成为王子的妃子。女孩眼看就彻底变成了一只猫，神秘的男爵（袴田吉彦 配音）成为她的救命稻草……",
    "genres": [
      "Comedy",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 146682,
    "runtime": "75 min",
    "releaseDate": "2002-07-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0347618",
    "id": "movie-1304970"
  },
  {
    "sourceId": "25823132",
    "title": "暗杀",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事发生在20世纪30年代，日本帝国主义的铁蹄响彻东亚诸国，风起云涌的时代下，一段段传奇接连上演。在中国，效力于韩国临时政府的局务局队长廉锡镇（李政宰 饰）从监狱中释放了被判处死刑的独立军狙击手安沃允（全智贤 饰），随后又找来了爆破专家黄德三（崔德文 饰）、新兴武官学校毕业生“速射炮”秋尚沃（赵镇雄 饰），密令三人暗杀朝鲜驻军司令官以及本国的卖国贼。危险的行动开始了，可是日本方面却很快收到刺杀任务的线报。在狂蛇乱舞的十里洋场，紧张刺激且充满阴谋的较量交替展开，而这也是有关民族命运的惊险对决……",
    "genres": [
      "Drama",
      "Action",
      "History",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 8,
    "votes": 144383,
    "runtime": "139 min",
    "releaseDate": "2015-09-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3501416",
    "id": "movie-25823132"
  },
  {
    "sourceId": "1299661",
    "title": "苏州河",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "",
    "summary": "上海苏州河上，用摩托车替人送货的马达（贾宏声）接下送接纯真少女牡丹（周迅）的活，两人相处时，牡丹爱上马达，但就在她决定把终身托付给对方时，马达财迷心窍联合黑道朋友绑架了她，令牡丹心灰意冷跳进苏州河里。临跳前，牡丹丢下会变成美人鱼再寻马达的话。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国大陆",
      "德国"
    ],
    "rating": 8,
    "votes": 122933,
    "runtime": "83 min",
    "releaseDate": "2000-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0234837",
    "id": "movie-1299661"
  },
  {
    "sourceId": "1498818",
    "title": "通天塔",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792233816.jpg",
    "summary": "在摩洛哥、墨西哥和日本发生的三个故事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "美国",
      "墨西哥"
    ],
    "rating": 8,
    "votes": 119832,
    "runtime": "143 min",
    "releaseDate": "2007-03-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0449467",
    "id": "movie-1498818"
  },
  {
    "sourceId": "1915403",
    "title": "只是爱着你",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2323383500.jpg",
    "summary": "濑川诚人（玉木宏 饰）是一个大学新鲜人，他不愿参加学校的开学典礼而选择了在校园附近闲逛。他在马路旁遇到了里中静流（宫崎葵 饰），她古怪的行径使热爱摄影的诚人忍不住按下了快门。自此静流喜欢上了诚人，可诚人只当她是朋友。随后他们成为了朋友，诚人也喜欢上了同班的富山美雪（黑木明纱 饰）。他跟静流发现了一个环境优美的树林，因为喜欢诚人的关系，静流也喜欢上摄影。静流要和诚人一起参加摄影比赛，而她的作品就是拍下跟诚人在湖边接吻的画面。但是当天傍晚，静流却不辞而别……",
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
    "rating": 8,
    "votes": 103522,
    "runtime": "116 min",
    "releaseDate": "2006-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0872022",
    "id": "movie-1915403"
  },
  {
    "sourceId": "27040737",
    "title": "祈祷落幕时",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2018,
    "coverUrl": "",
    "summary": "位于东京都葛饰区的一座公寓内，一具高度腐烂的尸体被人发现。经警方初步查明，死者是来自滋贺县的押谷道子，她的死亡实属他杀。警视厅搜查一课刑警松宫（沟端淳平 饰）调查发现，押谷此次上都是为了拜访并观看学生时代的好友浅居博美（松岛菜菜子 饰）的舞台剧的。虽然浅居有充分的不在场证明，不过她和加贺恭一郎（阿部宽 饰）的合影依然引起松宫的注意。与此同时，在道子遇害公寓的附近，一具焚烧后的尸体被人发现。现场的一件遗物令加贺激动万分，因为这与他多年未曾谋面的母亲有着千丝万缕的关系。两起案件，以及失踪的人，将浅居和加贺再度连接在一起……",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 100816,
    "runtime": "119 min",
    "releaseDate": "2019-04-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7080138",
    "id": "movie-27040737"
  },
  {
    "sourceId": "1301890",
    "title": "浓情巧克力",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2000,
    "coverUrl": "",
    "summary": "平静的小镇在寒冬里迎来了火热的一天。年轻的薇安萝雪（朱丽叶特-比诺什 Juliette Binoche 饰)）带着女儿来到这里，在当地教堂的对面开了一间名为“天上人间 核桃糖”的巧克力店。巧克力香浓的气味在小镇上空飘荡，吸引众多小镇居民，而神奇的是，薇安萝雪每次做出来的巧克力，都能满足顾客的心理需求，发掘他们心中隐蔽的渴望。很多人原本封闭灰暗的生活有了新的色彩。但是，这却激怒了镇里的神父和贵族，他们视薇安萝雪为异类，镇里出现了对立的两派。而这时，吉普赛人洛克斯（强尼戴普 Johnny Depp 饰）远道而来，加入了薇安萝雪的阵营，他令薇安萝雪勇敢地打开了自己内心的欲望，二人共浸爱河，却想不到神父盘算着如何把这个“不祥”女子赶出小镇，于是，新旧观念的大碰撞开始了。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8,
    "votes": 95851,
    "runtime": "121 min",
    "releaseDate": "2000-12-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0241303",
    "id": "movie-1301890"
  },
  {
    "sourceId": "1829654",
    "title": "憨豆的黄金周",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2191830473.jpg",
    "summary": "憨豆先生（罗温•艾金森 Rowan Atkinson 饰）总是傻人有傻福。他买彩票意外获得前往法国度假的机会。憨豆先生马上收拾好行囊，前往法国圆他的先锋派电影之梦！抵达巴黎后，憨豆先生遇到了一位来自俄罗斯的戛纳电影节评委。奇思妙想的憨豆希望能拍摄一部关于自己的先锋派电影，于是做事从来不顾后果的他带上了与那位俄罗斯评委走散的儿子，两人跳上了火车，路上扮演一对父子，却因语言不通大闹笑话，最后陷入了困境。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "英国",
      "法国",
      "德国"
    ],
    "rating": 8,
    "votes": 93052,
    "runtime": "90 min",
    "releaseDate": "2007-07-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0453451",
    "id": "movie-1829654"
  },
  {
    "sourceId": "1292326",
    "title": "暴力街区",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p642981690.jpg",
    "summary": "近未来，法国巴黎黑势力横行，以大毒枭塔哈（Bibi Naceri 饰）为首的黑帮更是横行无忌，连当地警方都惧怕三分。软弱的警方无法对抗势力强悍的黑帮，只能用围墙和工事将不法分子所在的区域隔离。在这个被称为“13区”的地方，鱼龙混杂，暗流涌动。年轻的小混混雷托（David Belle 饰）拒绝塔哈的毒品生意，双方发生激烈冲突。雷托原本将塔哈扭送警察局，结果遭到腐败警察的算计。塔哈不仅逍遥法外，雷托的妹妹罗拉（Dany Verissimo 饰）也被大毒枭带走。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8,
    "votes": 92059,
    "runtime": "84 min",
    "releaseDate": "2004-11-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0414852",
    "id": "movie-1292326"
  },
  {
    "sourceId": "1309004",
    "title": "孔雀",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1322924189.jpg",
    "summary": "上世纪七八十年代的河南古城安阳，某个五口之家的姐姐（张静初）、哥哥（冯瓅）和弟弟（吕玉来）在社会剧烈转型时期，踏上不同的人生之路。",
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
    "rating": 8,
    "votes": 90054,
    "runtime": "136 min",
    "releaseDate": "2005-02-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0445506",
    "id": "movie-1309004"
  },
  {
    "sourceId": "27172891",
    "title": "大象席地而坐",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "满州里动物园有一头大象，每天坐在那里。为朋友出头的少年、为弟报仇的恶霸哥哥、身陷囹圄的女生，卡在世界灰暗的缝隙里无法脱身，却挣扎着去看大象。萧瑟寒冬的一天，绝望身影在不对称不平衡的影像中碰撞， 爆裂了压抑的沉郁，在粗糙布景、朦胧灯光的低成本制作中肆意蔓延。作者兼导演胡波 （笔名胡迁）首作，以青涩朴质与震撼感性，获柏林影展赏识入围论坛单元， 却是无法嵌合和谐主旋律的一块失落拼图。看不见大象是共同宿命，胡波骤然陨落，也成了这一代人的遗憾。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 88429,
    "runtime": "234 min",
    "releaseDate": "2018-02-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8020896",
    "id": "movie-27172891"
  },
  {
    "sourceId": "1292229",
    "title": "天生杀人狂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1640827366.jpg",
    "summary": "米基（伍迪·哈里森 Woody Harrelson 饰）和梅乐丽（朱丽叶特·刘易斯 Juliette Lewis饰）同样有着残缺的家庭，深种在他们内心暴力的种子在渐渐萌芽成长。梅乐丽从小就备受父亲虐待，她决定和只有一面之缘的米基一同出走，出走前把父母都杀死。米基要梅乐丽 从今起开始新生活，他们举行婚礼后，便开始了一边逃亡一边杀人的疯狂旅程。",
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
      "美国"
    ],
    "rating": 8,
    "votes": 87761,
    "runtime": "118 min",
    "releaseDate": "1994-08-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110632",
    "id": "movie-1292229"
  },
  {
    "sourceId": "2996640",
    "title": "朱莉与朱莉娅",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p596884844.jpg",
    "summary": "对工作感到灰心沮丧的曼哈顿下城发展公司员工茱莉•鲍威尔（艾美·亚当斯Amy Adams 饰）决定用一年时间实践美国最受欢迎的电视名厨茱莉亚•切尔德（梅丽尔•斯特里普 Meryl Streep 饰）第一本食谱《精通法国烹饪的艺术》中的全部524道菜，并写博客记录每日进展。与此同时，电影平行穿插茱莉亚•切尔德随美国新闻署任职的丈夫保罗•切尔德（斯坦利•塔奇 Stanley Tucci 饰）于1948年来到法国巴黎居住，学习烹饪，并历经十年艰辛出版厚达七百多页的《精通法国烹饪的艺术》过程。茱莉•鲍威尔在模仿茱莉亚•切尔德的历程中终于找到了自我，而随着博客浏览量的增加，就连茱莉亚本人也得知了茱莉的存在，但结果却在茱莉意料之外。",
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
    "rating": 8,
    "votes": 85392,
    "runtime": "123 min",
    "releaseDate": "2009-08-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1135503",
    "id": "movie-2996640"
  },
  {
    "sourceId": "1309070",
    "title": "飞行家",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2215458280.jpg",
    "summary": "本片依据Howard Hughes的生平改编。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 8,
    "votes": 79274,
    "runtime": "170 min",
    "releaseDate": "2004-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0338751",
    "id": "movie-1309070"
  },
  {
    "sourceId": "1293475",
    "title": "黄飞鸿之二：男儿当自强",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "白莲教徒接下满清大臣纳兰元述（甄子丹）所下的对付革命党人的命令后，在广州街头借“扶清灭洋”的口号大肆捣乱洋人的使馆、教堂等地盘，甚至连小学生也不放过，他们的举动令黄飞鸿（李连杰）、十三姨（关之琳）与梁宽（莫少聪）异常气愤。",
    "genres": [
      "Action",
      "Romance",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "爱情",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 74370,
    "runtime": "113 min",
    "releaseDate": "1992-04-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105839",
    "id": "movie-1293475"
  },
  {
    "sourceId": "3592859",
    "title": "囚徒",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2119799056.jpg",
    "summary": "凯勒（休·杰克曼 Hugh Jackman 饰）是一名木匠，一次意外中，他的女儿安娜（艾琳·格拉西莫维奇 Erin Gerasimovich 饰）同小伙伴乔伊（凯拉·德鲁·西蒙斯 Kyla Drew Simmons 饰）一起莫名失踪。对于女儿遭遇的不测，心急如焚的凯勒向警方寻求帮助，很快，案件的负责人洛基（杰克·吉伦哈尔 Jake Gyllenhaal 饰）就将目标锁定在了一位名叫艾利克斯（保罗·达诺 Paul Dano 饰）的男子身上。",
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
      "美国"
    ],
    "rating": 8,
    "votes": 71970,
    "runtime": "153 min",
    "releaseDate": "2013-08-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1392214",
    "id": "movie-3592859"
  },
  {
    "sourceId": "1440703",
    "title": "爱再来一次",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "伊恩·温德姆（保罗·尼科尔斯 Paul Nicholls 饰）与女友萨曼莎·安德鲁斯（詹妮弗·洛芙·休伊特 Jennifer Love Hewitt 饰）像任何一对平凡的情侣一样，每天忙着自己的生活，很少时间独处。一次争吵过后，前来道歉的peter犹豫着要不要上出租车，因为这份犹豫女友选择离开。不到一分种，出租车 在前面街口与一辆卡车相撞，女友香消玉陨。",
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
      "美国",
      "英国"
    ],
    "rating": 8,
    "votes": 71569,
    "runtime": "92 min",
    "releaseDate": "2004-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0332136",
    "id": "movie-1440703"
  },
  {
    "sourceId": "1790577",
    "title": "放·逐",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "",
    "summary": "澳门回归前三天，五位情深意重的杀手。杀手阿和(张家辉饰)与妻子阿静(何超仪饰)带着刚满一个月的孩子重返故地，阿火(黄秋生饰)与阿波(林雪饰)奉黑社会老大大飞(任达华饰)的命令来追杀阿和，但另一对好兄弟阿泰(吴镇宇饰)与阿猫(张耀扬饰)闻讯，为了情义前来阻止。冲突在阿和家突然爆发，又迅速重归平静。最后他们决定一起做一宗大买卖来解救阿和，在谢夫(张兆辉饰)那里，摆放在他们眼前的是两个选择：暗杀蛋卷强(林家栋饰)或者抢夺一吨黄金……最终他们选择了前者，然而却在餐厅和死对头大飞不期而遇，一场恶战难免。",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 71347,
    "runtime": "108 min",
    "releaseDate": "2006-10-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0796212",
    "id": "movie-1790577"
  },
  {
    "sourceId": "3690289",
    "title": "春风沉醉的夜晚",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p463651314.jpg",
    "summary": "在南京开小书店的王平（吴伟 饰）背着妻子林雪（江佳奇 饰）与男同性恋者姜城（秦昊饰）有染。对丈夫行为生疑的林雪委托罗海涛（陈思成 饰）跟踪王平，发现了姜城的行踪。气愤的林雪到姜城任职的旅游公司大闹，迫使其与王平分手。罗海涛有一个在制衣厂做工的女友李静（谭卓 饰），但他却在跟踪的过程中对姜城产生了好感。罗海涛与分手后情绪低落的姜城交往，二人关系日渐亲密，但与此同时他又难舍李静。在三人共同出游的过程中，李静发现了罗海涛与姜城的暧昧关系，伤心落泪。一座城，许多人，都在感情的路上崎岖前行。",
    "genres": [
      "Drama",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "同性"
    ],
    "originalRegions": [
      "中国大陆",
      "法国"
    ],
    "rating": 8,
    "votes": 67354,
    "runtime": "106 min",
    "releaseDate": "2009-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1422119",
    "id": "movie-3690289"
  },
  {
    "sourceId": "1295374",
    "title": "金玉满堂",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p950775183.jpg",
    "summary": "赵港生（张国荣饰）因厌烦黑社会生活，欲金盆洗手后去加拿大追寻偶像山口百惠，而他选择的移民途径竟是——参加加拿大酒店的厨师考试，丝毫不懂厨艺的他最终因作弊暴露而惨败。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 59003,
    "runtime": "106 min",
    "releaseDate": "1995-01-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113475",
    "id": "movie-1295374"
  },
  {
    "sourceId": "10485526",
    "title": "潜伏2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "经历了上一集令人难以置信的变故后，莱姆波特家的长子达尔顿（Ty Simpkins 饰）暂时摆脱恶灵的纠缠，而灵媒伊莉丝（林·沙烨 Lin Shaye 饰）则惨死室中，达尔顿的父亲乔什（帕特里克·威尔森 Patrick Wilson 饰）蒙受杀人嫌疑。由于警方需要继续调查他们的房子，乔什只得带着妻子兰妮（罗丝·拜恩 Rose Byrne 饰）和三个孩子暂时回到母亲劳瑞安（芭芭拉·赫希 Barbara Hershey 饰）家居中。本以为一切回归正常，但是兰妮和孩子们似乎仍在饱受恶灵的纠缠。",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 58420,
    "runtime": "106 min",
    "releaseDate": "2013-09-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2226417",
    "id": "movie-10485526"
  },
  {
    "sourceId": "1302434",
    "title": "机动部队",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p793201686.jpg",
    "summary": "反黑组警长肥沙（林雪 饰），不慎丢失手枪。这件事非同小可，如果手枪被匪徒用去行凶，肥沙将大祸临头。PTU（警察机动部队）警官何文展（任达华 饰）出于义气，答应一定会在天亮之前寻回手枪，带几名手下开展了寻枪行动。另一方面，却在横生枝节：警员Kat（邵美琪 饰）死守纪律，坚持要将此事汇报上级处理；而在同一晚，CID的Madam张（黄卓玲 饰）在接手一单黑社会谋杀案时，怀疑肥沙与黑社会有染，由此与PTU发生意见分歧。人与人，部门与部门之间的矛盾、争斗和角力，在夜幕中徐徐拉开。而第二天清早，揭晓的真相，原来都在他们的意料之外……",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 51849,
    "runtime": "88 min",
    "releaseDate": "2003-04-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0250638",
    "id": "movie-1302434"
  },
  {
    "sourceId": "1323749",
    "title": "青春梦工场",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1000269561.jpg",
    "summary": "名大学生阿肥（周振辉饰）、胶布（曾国祥饰）、Jason（黄又南饰）与志安（周俊伟饰）还有几个月就要毕业离校了，但他们并没有想到工作和社会的事情。他们一个同学阿乐，因为“借拍戏沟女事件”，传遍整个电影学院，惊动了校方，竟在临毕业前被勒令退学。",
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
      "中国香港"
    ],
    "rating": 8,
    "votes": 44311,
    "runtime": "103 min",
    "releaseDate": "2005-03-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0452931",
    "id": "movie-1323749"
  },
  {
    "sourceId": "1304530",
    "title": "男人四十",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2246996159.jpg",
    "summary": "人到四十的香港某中学国文教师林耀国（张学友）是业已消失的“好好先生”。念书时是学校里有名才子的他，如今面对飞黄腾达、闲来便会打打高尔夫球的昔日同窗，只收获了一份难言的失落，但在他的“坏学生”胡彩蓝（林嘉欣）眼中，他却是有内涵的成熟魅力男。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 44137,
    "runtime": "103 min",
    "releaseDate": "2002-03-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0312886",
    "id": "movie-1304530"
  },
  {
    "sourceId": "1308858",
    "title": "麦兜，菠萝油王子",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p805075384.jpg",
    "summary": "随着城市发展，麦兜住的旧区大脚咀也卷入了拆迁漩涡。不过无忧无虑的麦兜从来不会去考虑拆迁对他意味着什么，春田花花幼稚园又开学了。为了适应激烈的社会竞争，春天花花幼稚园也加入很多令人捧腹的新课程：耍赖、诈死等等。麦太在樟木头买了块墓地，为了日后能有个安身之所。时光飞逝，一切又回到了从前，回到了麦兜的父亲菠萝油王子的时代。王子跟随着师傅出行，不料遇到了一连串怪事，王子不再是王子，有人变成了他的样子回去当了王子。浑浑噩噩的菠萝油认识了阿莲——以后的麦太，过着平平凡凡、庸庸碌碌的生活，只是在夜里，菠萝油偶然会想起他的王国、眼里会呛着泪花。阿莲怀孕了，菠萝油重遇了以前送薄饼的龟仔、一起出行的师傅，他们决定回去复国了。于是菠萝油告别了阿莲，告诉他如果明天听不到一个王子复国的新闻，那就永远忘了他……",
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
      "中国香港"
    ],
    "rating": 8,
    "votes": 43851,
    "runtime": "73 min",
    "releaseDate": "2004-06-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0419954",
    "id": "movie-1308858"
  },
  {
    "sourceId": "26389148",
    "title": "赴汤蹈火",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "两兄弟，一个有前科，另一个是离异的父亲。他们为了应对无法赎回家族农场的窘境，决定联手谋划一连串刺激的盗窃活动。而一位经验丰富的警察开始追踪他们制造的一系列银行抢劫案，决定将他们捉拿归案。",
    "genres": [
      "Drama",
      "Crime",
      "Western"
    ],
    "originalGenres": [
      "剧情",
      "犯罪",
      "西部"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 42332,
    "runtime": "102 min",
    "releaseDate": "2016-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2582782",
    "id": "movie-26389148"
  },
  {
    "sourceId": "1310159",
    "title": "梁祝",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2125670899.jpg",
    "summary": "公元337年的东晋时期，门第风气极盛，三品官家祝氏为了巩固朝中地位攀附权贵，将独生女儿祝英台（杨采妮）许配马氏太守，因为担心无心向学的女儿失礼于人，遂叫她女扮男装来到书院好好进补，因书院均是男儿，祝氏夫人（吴家丽）拜托院长夫人对爱女特别关照。",
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
      "中国香港"
    ],
    "rating": 8,
    "votes": 41226,
    "runtime": "107 min",
    "releaseDate": "1994-08-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110340",
    "id": "movie-1310159"
  },
  {
    "sourceId": "3072064",
    "title": "飞鹰艾迪",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2322216899.jpg",
    "summary": "详述了英国历史上最著名的跳台滑雪运动员，有“飞鹰艾迪”之称的迈克尔.爱德华兹激励人心的真实事迹。影片刻画了艾迪在运动赛场上永不言弃的宝贵精神，赞扬了他在面对巨大困难和挑战时所表现的非凡毅力和乐观精神。",
    "genres": [
      "Drama",
      "Comedy",
      "Biography",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "传记",
      "运动"
    ],
    "originalRegions": [
      "英国",
      "美国",
      "德国"
    ],
    "rating": 8,
    "votes": 40936,
    "runtime": "105 min",
    "releaseDate": "2016-03-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1083452",
    "id": "movie-3072064"
  },
  {
    "sourceId": "1294948",
    "title": "憨豆先生的大灾难",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521404651.jpg",
    "summary": "我们疯狂的憨豆先生（罗温•艾金森 Rowan Atkinson 饰）又来了！这次，我们的憨豆先生在英国一间画廊工作。画廊里的一副传世珍品被美国国家博物馆买走了，憨豆先生所在博物馆要派出一名专家运送这副画到美国。阴差阳错之下，这个专家就由憨豆先生担任了。",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 8,
    "votes": 37653,
    "runtime": "90 min",
    "releaseDate": "1997-08-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118689",
    "id": "movie-1294948"
  },
  {
    "sourceId": "25867546",
    "title": "岳父岳母真难当",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2014,
    "coverUrl": "",
    "summary": "克劳德（克里斯汀·克拉维尔 Christian Clavier 饰）和玛利亚（尚塔尔·罗比 Chantal Lauby 饰）结婚多年，感情十分要好。两人育有四个女儿伊莎贝拉（福德莉奇·贝尔 Frédérique Bel 饰）、奥迪尔（茱莉亚·皮雅顿 Julia Piaton 饰）、赛格利亚（艾米丽·卡恩 Emilie Caen 饰）和劳拉（艾罗娣·方坦 Elodie Fontan 饰），一眨眼，如花似玉的四姐妹都已经长大成人，到了谈婚论嫁的年龄。",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8,
    "votes": 36069,
    "runtime": "97 min",
    "releaseDate": "2014-04-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2800240",
    "id": "movie-25867546"
  },
  {
    "sourceId": "1306666",
    "title": "黑店狂想曲",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1969387376.jpg",
    "summary": "一个虚构的年代背景，经济萧条，人人自危，甚至要以人肉为食物赖以生存。",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "奇幻"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8,
    "votes": 35467,
    "runtime": "99 min",
    "releaseDate": "1991-04-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0101700",
    "id": "movie-1306666"
  },
  {
    "sourceId": "2338019",
    "title": "欲盖弄潮",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1414965747.jpg",
    "summary": "无论如何，扎克（Trevor Wright 饰）看起来都是一个如此阳光、温柔的男孩，他热爱冲浪，喜欢学习，艺术素养颇高，而且有着十分难得的家庭观念。为了照顾姐姐的孩子，他甚至可以放弃读书的机会。平常的日子里，扎克便和好友盖布（Ross Thomas 饰）一起玩耍。某天，他结识了盖布的哥哥肖恩（Brad Rowe 饰）——一个在好莱坞小有名气的同性恋作家。他们互相欣赏，渐渐为对方所吸引，一段不被亲人们所理解的爱情悄悄滋生……",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性",
      "运动"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 34758,
    "runtime": "97 min",
    "releaseDate": "2008-03-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0942384",
    "id": "movie-2338019"
  },
  {
    "sourceId": "1301886",
    "title": "居家男人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p622619176.jpg",
    "summary": "1987年，踌躇满志的杰克·坎贝尔（尼古拉斯·凯奇 Nicolas Cage 饰）告别女友凯特（蒂娅·利奥尼 Téa Leoni 饰），只身前往纽约打拼。13年后，杰克已然成为华尔街炙手可热的投资经纪人，他的事业一帆风顺，生活奢侈优渥，身边美女如云，俨然一个完美无瑕的成功人士。然而，就在圣诞夜节的前两天，杰克的人生发生翻天覆地的变化。当他一觉醒来时，发现自己身在新泽西老家，凯特成为他的妻子，两人更育有两个可爱的孩子。全新而对立的人生让杰克无所适从，而他终将在金钱和亲情间做出抉择……",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 34260,
    "runtime": "125 min",
    "releaseDate": "2000-12-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0218967",
    "id": "movie-1301886"
  },
  {
    "sourceId": "5320600",
    "title": "涉外大饭店",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2011,
    "coverUrl": "",
    "summary": "人生已至暮年的七位英国老人辗转前往印度斋浦尔度假。七人中，善解人意的伊芙琳（朱迪·丹奇 Judi Dench 饰）试图在丧夫后独立生活；患心脏疾病的大法官格雷厄姆（汤姆·威尔金森 Tom Wilkinson 饰）怀揣着无法启齿的秘密；道格拉斯（比尔·奈伊 Bill Nighy 饰）和琼希望能改善僵化的夫妻关系；老顽童诺曼和老来俏玛琪则时刻期盼着艳遇；至于穆瑞尔（玛吉·史密斯 Maggie Smith 饰），等待手术的她总是显得有几分冷漠刻薄。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "英国",
      "美国",
      "阿联酋"
    ],
    "rating": 8,
    "votes": 31701,
    "runtime": "124 min",
    "releaseDate": "2011-11-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1412386",
    "id": "movie-5320600"
  },
  {
    "sourceId": "1291587",
    "title": "埃及王子",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "",
    "summary": "法老发现自己的王国内希伯来人日益增多，开始感到不安，对希伯来人总是无端猜疑，于是命令所有的希伯来人都去当奴隶，并吩咐讲所有希伯来人生的男孩扔到河里。这天，一个希伯来妇女生了一个漂亮的男孩，为了自己的孩子能够幸免于难，她将他放到一个草箱中放进了尼罗河。",
    "genres": [
      "Drama",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 31555,
    "runtime": "99 min",
    "releaseDate": "1998-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120794",
    "id": "movie-1291587"
  },
  {
    "sourceId": "26147706",
    "title": "花与爱丽丝杀人事件",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "就读国中的女孩有栖川彻子（苍井优 配音），因父母离婚而转学来到了石之森学园。令她有些气闷的是，同学们皆以诡异的目光看她，甚至对她敬而远之。从同班同学睦美口中得知，彻子现在所坐的桌子，其前主人曾经陷入一起被称为“犹大及其四位妻子的杀人事件”。而那张桌子后面还有一张桌子，其主人荒井花（铃木杏 配音）长期旷课，花也恰恰是彻子现在的邻居。为了弄清杀人事件的真相，给自己起名“爱丽丝”的彻子壮着胆子进入花的家，进而得知了关于“犹大”的种种往事。",
    "genres": [
      "Comedy",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 31469,
    "runtime": "100 min",
    "releaseDate": "2015-02-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4125300",
    "id": "movie-26147706"
  },
  {
    "sourceId": "1300752",
    "title": "座头市",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p764956497.jpg",
    "summary": "盲剑客座头市（北野武饰）来到一个小镇上，他染着金发，身怀绝技，出手致命。服部源之助（浅野忠信饰）是名武艺高强的剑客，他为了筹钱给妻子（夏川结衣饰）治病也来到小镇，想要寻找一份工作。与此同时，一对为了复仇，化装成艺妓流浪卖艺的野子姐弟（大家由佑子、橘大五郎饰）也来到此地，他们的目标是镇上恶霸银藏和扇屋等。好打抱不平的座头市得知其中隐情后，决定帮助姐弟俩报双亲被杀之仇，而服部却成了敌人所雇佣的保镖，一场生死大战在所难免。",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "Music",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "音乐",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 30776,
    "runtime": "116 min",
    "releaseDate": "2003-09-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0363226",
    "id": "movie-1300752"
  },
  {
    "sourceId": "1293770",
    "title": "猎杀U-571",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p734370021.jpg",
    "summary": "1942年4月，二战期间，大西洋上，德军战舰采取“狼群”战术，令盟军损失惨重。美国海军上尉泰勒（马修•麦康纳 Matthew McConaughey 饰）因抗敌表现出色，曾被许诺晋升艇长，但是却因故不能如愿。这时突然传来敌情，泰勒临危受命，登上S-33老爷级潜艇执行秘密任务，指挥官为上尉迈克（比尔•帕克斯顿 Bill Paxton 饰），同行的还有哈什（哈威•凯特尔 Harvey Keitel 饰）上尉和库南少校等。经过勘察，一艘德军受创潜艇U-571，正在发出求救信号。S-33的任务是伪装成一艘德军的维修舰，以维修作掩护，从U-571上获取德国最先进的译码设备。不过，由于S-33年久失修，水箱等装备已到服役期，若潜入200米以下恐有危险，但是为了完成任务，泰勒等人还是小心驾驶，偷袭了德国军舰，但正在此时，德军的鱼雷也逼近了U-571，他们命悬一线，生死未卜……",
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
      "美国",
      "法国"
    ],
    "rating": 8,
    "votes": 30324,
    "runtime": "116 min",
    "releaseDate": "2000-04-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0141926",
    "id": "movie-1293770"
  },
  {
    "sourceId": "1464540",
    "title": "地雷战",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1963,
    "coverUrl": "",
    "summary": "抗日战争较为艰苦的1942年，胶东抗日根据地边缘村庄赵家庄等经常遭受日军的突袭，为了减少损失，区武委会雷主任（张长瑞）和赵家庄民兵队长赵虎（白大钧）集合群众的智慧，想出应对日军的策略：他们联合附近几个村庄组成民兵联防壮大武装力量的同时，用土制地雷组成各式各样的地雷阵，将日军沉重打击。",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 28269,
    "runtime": "74 min",
    "releaseDate": "1963-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6476542",
    "id": "movie-1464540"
  },
  {
    "sourceId": "2157504",
    "title": "百万元与苦虫女",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p699101890.jpg",
    "summary": "佐藤玲子（苍井优 饰）是个毫无一技之长的平凡女孩，刚刚大学毕业，和父母住在一起，对未来一片茫然。她本性内向又倔强，经常和家人发生矛盾，终于决定打工存够一百万就搬出去，寻找属于自己的生活。玲子并未食言，存够一百万的她拉着行李箱离开了家，开始四处游历，到了海边，她在小店卖冰沙；到了山里，她帮果农摘桃子，四处打工让她存够一个又一个一百万，每存够一次便是出发前往下一个地方之时，存钱很容易，但她想要的生活却还不知在哪里。不过，频繁换地打工的过程中，玲子也在学习与人相处，从最初的困窘慌乱戒备，到可以交下朋友，在一间花店打工时，她认识了不断向她借钱的大学生中岛（森山未来 饰），许久以来的困惑和寻找，似乎都有了答案……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 27670,
    "runtime": "121 min",
    "releaseDate": "2008-07-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1077094",
    "id": "movie-2157504"
  },
  {
    "sourceId": "1793904",
    "title": "决战犹马镇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p443323143.jpg",
    "summary": "丹•埃文斯（克里斯汀·贝尔 饰）在南北战争断了一条腿，得到政府小小的补偿，他和妻子艾丽丝还有两个儿子在亚利桑那的农场居住。然而，恶劣的气候和腐败之风却让丹负债累累，一些人想在建造铁路上获得暴利，他们想尽办法赶走埃文斯一家，家人开始质疑丹的能力。",
    "genres": [
      "Drama",
      "Action",
      "Crime",
      "Western"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "犯罪",
      "西部"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 27616,
    "runtime": "122 min",
    "releaseDate": "2007-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0381849",
    "id": "movie-1793904"
  },
  {
    "sourceId": "26666177",
    "title": "杀戮都市：O",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "高中生加藤胜（小野大辅 配音）和弟弟过着相依为命的生活，某日，加藤胜所在的地铁站遭到了无差别杀人犯的袭击，为了救人，加藤胜身中数刀不幸身亡，而当他再度睁开双眼之时，却发现自己完好无损的站在一个陌生的房间里，眼前是一个黑色的诡异圆球。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Animation"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 27303,
    "runtime": "96 min",
    "releaseDate": "2016-10-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5923962",
    "id": "movie-26666177"
  },
  {
    "sourceId": "1293785",
    "title": "阿波罗13号",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p839197485.jpg",
    "summary": "1969年7月20日，乘坐着阿波罗11号的美国人尼尔·阿姆斯特朗成功登陆月球，迈出对人类来说具有重要意义的一大步。与此同时，资深宇航员吉姆·洛维尔（汤姆·汉克斯 Tom Hanks 饰）和亲人好友们通过电视密切关注着这历史性的一刻。吉姆曾乘坐阿波罗8号飞到月球附近，他同样希望在有生之年实现登陆月球的梦想。这个时刻很快来临，就在3个月后，吉姆被任命为阿波罗13号的指挥官，他将连同伙伴佛瑞·德汉斯（比尔·帕克斯顿 Bill Paxton 饰）、杰克·史威吉特（凯文·贝肯 Kevin Bacon 饰）再次升空前往月球。他们满怀着希望，却没想到有无限的磨难等在前方……",
    "genres": [
      "Drama",
      "History",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 25530,
    "runtime": "140 min",
    "releaseDate": "1995-06-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0112384",
    "id": "movie-1293785"
  },
  {
    "sourceId": "19973312",
    "title": "唐顿庄园：2012圣诞特别篇",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2012,
    "coverUrl": "",
    "summary": "特别篇开始，Mary（米歇尔·道克瑞 Michelle Dockery 饰）已经怀孕，一家人到苏格兰Rose家度假，留在庄园的Tom（艾伦·里奇 Allen Leech 饰）在Isobel和新女仆Edna的劝说下和众仆人打成一片，令管家Carson（吉姆·卡特 Jim Carter 饰）颇为头痛。没有了主人的仆人们似乎生活更加轻松和随意。众人一起去了集市，而Jimmy对Thomas（罗伯·詹姆斯-克里尔 Rob James-Collier 饰）的态度也有所好转。杂货店老板Joss似乎对Patmore太太有着别样的感情。Gregson为了让Crawley一家接受他对Edith（劳拉·卡尔迈克尔 Laura Carmichael 饰）的感情也来到了Rose家，而Robert（休·博内威利 Hugh Bonneville 饰）发现老友一家似乎也面临了财政问题。终于，Mary平安生下儿子，Matthew（丹·史蒂文斯 Dan Stevens 饰）去医院看望完妻儿，欣喜地向家人报喜时，他的车不幸与一辆货车相撞......",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8,
    "votes": 25471,
    "runtime": "93 min",
    "releaseDate": "2012-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2385306",
    "id": "movie-19973312"
  },
  {
    "sourceId": "1498811",
    "title": "感谢你抽烟",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p641850219.jpg",
    "summary": "尼克（艾伦•艾克哈特 Aaron Eckhart  饰）是这个世界上最赚钱也最富有争议的行业――烟草业 的代言人。他每天不仅要像推销员一样用三寸不烂之舌去说服人们抽烟，还要不得不变着发子去对付禁烟团体、环保团体和科学团体的抗议，在政府和参议员中想尽办法为烟草业谋取最大利益。",
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
    "rating": 8,
    "votes": 24706,
    "runtime": "92 min",
    "releaseDate": "2005-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0427944",
    "id": "movie-1498811"
  },
  {
    "sourceId": "1296242",
    "title": "巴黎圣母院",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 1956,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1942074866.jpg",
    "summary": "爱斯米兰达是一个性格活泼热情似火的吉普赛女郎，生性善良的她赢得了许多人的赞美和喜爱。巴黎圣母院的神父克洛德觊觎爱斯米兰达的美貌已久，终于按奈不住派出手下样貌丑陋的撞钟人卡西莫多，将爱斯米兰达强行掠夺至巴黎圣母院，谁知道半途杀出了英俊勇敢的上尉菲比斯，后者令爱斯米兰达一见倾心。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "意大利",
      "法国"
    ],
    "rating": 8,
    "votes": 23784,
    "runtime": "115 min",
    "releaseDate": "1956-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0050781",
    "id": "movie-1296242"
  },
  {
    "sourceId": "1966460",
    "title": "图雅的婚事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p581291401.jpg",
    "summary": "内蒙古日渐干旱的草原上，丈夫巴特尔（巴特尔 饰）为了掘水井而双腿残疾，妻子图雅（余男 饰）勤劳善良，性格泼辣。她一个人挑起了家庭的重担，照顾孩子，但长期的劳碌让她的腰椎病变，甚而也有下肢瘫痪的危险。为了不再耽误图雅，卧躺床上的巴特尔决意离婚，在现实面前，图雅也只能同意。但她坚持提出自己再婚的条件：新丈夫必须和自己一起供养巴特尔。由此，图雅开始了艰难的择夫历程，附加条件让许多前来求婚的男人打了退堂鼓。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 22815,
    "runtime": "95 min",
    "releaseDate": "2006-09-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0949564",
    "id": "movie-1966460"
  },
  {
    "sourceId": "1299560",
    "title": "深渊",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1989,
    "coverUrl": "",
    "summary": "美国核潜艇蒙坦娜号在深海追踪一个不明物体的时候不幸失踪，高压潜水钻台深海之心号工头巴德（艾德·哈里斯 Ed Harris 饰）接到命令负责配合科菲中尉（迈克尔·比恩 Michael Biehn 饰）前去营救。令人意想不想不到的是一同前往的还有跟巴德一直在闹别扭的妻子—— 石油公司工程师琳西（玛丽·伊丽莎白·马斯特兰托尼奥 Mary Elizabeth Mastrantonio）。三人为主的救援队潜到潜艇失踪的海底深渊边缘，却发现潜艇上无人幸存，令人恐慌的是深渊里还存在着一种未知的怪物。经过一系列的危机之后，科菲中尉不听劝阻认定这是苏联的阴谋，决定把从潜艇上拆下来的核弹发射给不明的敌人，于是巴德和琳西联手开始了殊死搏斗。千钧一发之际巴德不顾危险救下了琳西，并且潜下深渊去拆掉核弹头上的引信，完成任务之后巴德的氧气已经消耗殆尽，而就在此刻深海的怪物再次出现。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 22437,
    "runtime": "138 min",
    "releaseDate": "1989-08-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0096754",
    "id": "movie-1299560"
  },
  {
    "sourceId": "1299782",
    "title": "非常突然",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1275273375.jpg",
    "summary": "三名大陆赴港的毛贼在白天抢劫金铺后，遇上巡警慌张逃亡，其中一人逃入另一帮被警方通缉多时并配备有强大火力的大陆悍匪躲藏的大厦，紧接着，警方重案组的命运被这两帮歹徒意外牵连，当他们以为成功打死悍匪可以放松庆祝时，又碰上那两个漏网的毛贼，一轮混战后，事情顿时变得非常突然。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 8,
    "votes": 22286,
    "runtime": "90 min",
    "releaseDate": "1998-05-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0159432",
    "id": "movie-1299782"
  },
  {
    "sourceId": "1419856",
    "title": "不朽的园丁",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p824408304.jpg",
    "summary": "英国驻肯尼亚大使馆的外交官贾斯汀（拉尔夫·费因斯 Ralph Fiennes 饰）为人随和、生活平淡，平日只爱在自己的园子里打理花草树木。然而，有一天，厄运降临到这名超然物外的男人身上。他的妻子泰莎（蕾切尔·薇兹 Rachel Weisz 饰）――一名主持正义的律师，被发 现陈尸郊外，调查结果为被其情人杀害。",
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
      "英国",
      "德国",
      "美国",
      "中国大陆"
    ],
    "rating": 8,
    "votes": 20820,
    "runtime": "129 min",
    "releaseDate": "2005-08-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0387131",
    "id": "movie-1419856"
  },
  {
    "sourceId": "1806543",
    "title": "这就是英格兰",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2159581319.jpg",
    "summary": "这是一个关于英国“光头仔”群体的故事。1983年的英国，正处于一个动荡时期。12岁的叛逆少年沙恩在放学回家的路上遇到了一群“光头仔”，在同他们大打出手后沙恩也成为了他们中的一员。令沙恩没有想到的是，这些人竟成为他日后最好的朋友甚至亲如一家人。他们一起，在一个灰色的年代里分享自己的成长和喜怒哀乐。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8,
    "votes": 19604,
    "runtime": "103 min",
    "releaseDate": "2007-04-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0480025",
    "id": "movie-1806543"
  },
  {
    "sourceId": "3001149",
    "title": "机械心",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2013,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2167571462.jpg",
    "summary": "19世纪末的爱丁堡，在一个极度寒冷的冬天，痛苦的孕妇找到被人称作巫婆的玛德莲大夫（Marie Vincent 配音）。不久，一个孱弱的婴儿降临人间，但是这个小家伙的心都冻僵了，为此玛德莲帮他安装了机械心脏。孩子的生母不告而别，玛德莲将其作为亲生儿子抚养，并起名杰克（Mathias Malzieu 配音）。她告诫杰克不可以生气，避免强烈的情绪起伏，尤其要避免陷入爱恋。小杰克一天天长大，在他十岁的那年他首度来到镇上玩耍，并和命运中的天使邂逅。他的机械心脏出了故障， 冒出浓烟，他知道他恋爱了。从这一天起，杰克注定要踏上追寻爱情的征程……",
    "genres": [
      "Drama",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 8,
    "votes": 19382,
    "runtime": "94 min",
    "releaseDate": "2013-11-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1181840",
    "id": "movie-3001149"
  },
  {
    "sourceId": "1297032",
    "title": "新难兄难弟",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2352004508.jpg",
    "summary": "时值九十年代的香港，父亲楚帆（梁家辉 饰）讲义气爱吹牛，儿子楚原（梁朝伟 饰）却冷漠实际，二人无法沟通，矛盾不断，母亲（刘嘉玲 饰）夹在二人中间左右为难。中秋节楚帆心软放走匪导致自己受伤昏迷，楚原却借探望父亲的机会又和医院女医生鬼混，女友阿夷（袁咏仪 饰）好心劝慰却无法令浪子回头。 当夜正值木星和月亮交叠，楚原误打误撞掉入一口施工用井中，却重返几十年前和风华正茂的父亲及春风街邻居重新相识。楚原这才知道，原来母亲罗拉当年亦是富家小姐，年轻漂亮却倾心热心英俊的电车厂工人楚帆，两人的爱情被外公百般阻拦……",
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
    "rating": 8,
    "votes": 19191,
    "runtime": "97 min",
    "releaseDate": "1993-12-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0108611",
    "id": "movie-1297032"
  },
  {
    "sourceId": "1302661",
    "title": "飞天小女警 剧场版",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "《飞天小女警》（英文：The Powerpuff Girls），是美国时代华纳公司旗下的Cartoon Network推出的动画片。",
    "genres": [
      "Drama",
      "Comedy",
      "Action",
      "Animation",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作",
      "动画",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 18092,
    "runtime": "73 min",
    "releaseDate": "2002-07-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0289408",
    "id": "movie-1302661"
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
    "rating": 8,
    "votes": 18027,
    "runtime": "123 min",
    "releaseDate": "2006-08-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0438986",
    "id": "movie-1850797"
  },
  {
    "sourceId": "1431714",
    "title": "小鲤鱼跳龙门",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1958,
    "coverUrl": "",
    "summary": "本美术片是民间传说“鲤鱼跳龙门”的故事新编，在1959年获中国第一届《大众电影》“百花奖”最佳美术片奖等奖。",
    "genres": [
      "Animation",
      "Short",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "短片",
      "儿童"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 17872,
    "runtime": "",
    "releaseDate": "1958-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6838480",
    "id": "movie-1431714"
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
    "rating": 8,
    "votes": 17594,
    "runtime": "95 min",
    "releaseDate": "1995-09-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110604",
    "id": "movie-1305858"
  },
  {
    "sourceId": "3725295",
    "title": "断线",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "虚拟的社交网络连了线，真实的人际关系却断了线。聊天室的每句对话、脸书上的一张照片一条短片，背后隐藏着人渴望与人接触的欲望，但却分分钟带来不堪设想的后果。日理万机的大律师无暇与家人相处沟通，直到儿子出事才悔恨爱得太迟；一对婚姻枯燥无味的夫妇各自在网上寻求慰藉，但网络世界何来秘密；孤僻宅男网上会女神，原来一直被玩更误堕色欲陷阱；顽童网上欺凌同学，乐极生悲；女记者为爆独家猛料，故意接近未成年色情网男模，道德界线难划清。几条故事线纠缠交错，每个荡失于虚拟世界的主人翁，只是渴望找到与人真正的联系和沟通。",
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
    "rating": 8,
    "votes": 17443,
    "runtime": "115 min",
    "releaseDate": "2012-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1433811",
    "id": "movie-3725295"
  },
  {
    "sourceId": "1298505",
    "title": "火车怪客",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1951,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2155823844.jpg",
    "summary": "凯亨（法利·格兰杰）恨自己不守妇道的妻子，意图谋害；布鲁罗（罗伯特·沃特）想杀死自己的父亲。一次他们在火车上偶遇，两人互诉衷肠，协议互换杀人。布鲁罗轻松的杀掉了凯亨的妻子，凯亨却难以下手。布鲁罗以嫁祸凯亨相要挟，转瞬间凯亨从杀人走向了为自己洗脱罪责而奔命。",
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
    "rating": 8,
    "votes": 16319,
    "runtime": "101 min",
    "releaseDate": "1951-06-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0044079",
    "id": "movie-1298505"
  },
  {
    "sourceId": "1306465",
    "title": "夜奔",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1264103918.jpg",
    "summary": "1930年代，自幼在美国生活与学习的大提琴家徐少东（黄磊）返回祖国准备与素未蒙面但一直有书信往来的未婚妻英儿（刘若英）成亲。可是在随英儿在自家戏院看过昆曲《夜奔》并结识其主演林冲（尹昭德）后，徐少东的感情天平开始更多地倾斜到林冲身上，但随后有关他与林冲的流言蜚语传出，顶不住世俗压力的他最终告别英儿回到美国。",
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
      "中国台湾",
      "中国大陆"
    ],
    "rating": 8,
    "votes": 15909,
    "runtime": "119 min",
    "releaseDate": "2000-10-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0259744",
    "id": "movie-1306465"
  },
  {
    "sourceId": "5151357",
    "title": "梅子鸡之味",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2011,
    "coverUrl": "",
    "summary": "因为妻子摔破了自己心爱的小提琴，音乐家纳瑟·阿里（马修·阿马立克 Mathieu Amalric饰）决定自杀，绝食八天后他终于死去。在这八天里，躺在床上的他回顾了自己的一生。他想起了自己与弟弟的小时候，想起了自己的女儿和儿子，想起了自己失败的婚姻，想起了母亲临死前的场景。当然，他还想起了自己一生的挚爱——伊兰娜（格什菲·法拉哈尼 Golshifteh Farahani 饰）。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "法国",
      "德国"
    ],
    "rating": 8,
    "votes": 15867,
    "runtime": "93 min",
    "releaseDate": "2011-10-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1663321",
    "id": "movie-5151357"
  },
  {
    "sourceId": "1663415",
    "title": "上车走吧",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2495747700.jpg",
    "summary": "1998年，山东青年刘承强（高虎 饰）和同乡高明（黄渤 饰）相约来到首都北京。已去海南发展的表哥小软将自己承包过的小巴托给承强，在小巴老板陆建刚的帮助下，二人在郊区找到落脚之处，也顺利地成为了小巴302线的司乘人员。建刚哥为人仗义，但同在一条营运线的大头和大英子出于利益的关系，处处与强子和小明作对，双方为此曾大打出手。在此期间，他们结识了同住一个院子的四川女孩小辫子，高明更与她日久生情，而强子则喜欢上了小巴上的常客丽娟（陈宇 饰）。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 15793,
    "runtime": "113 min",
    "releaseDate": "2000-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt9602302",
    "id": "movie-1663415"
  },
  {
    "sourceId": "1920620",
    "title": "光荣的愤怒",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p630606567.jpg",
    "summary": "云南黑井村，熊家四兄弟横行乡里，老大（李晓波饰）粗鲁地教训了来叫板的狗卵（蒲小虎饰）、老二（孔庆三饰）是村里的会计，为人狡诈。老三（王砚辉饰）是阴险的村长，手段狠毒。老四（朱义饰）是个不折不扣的流氓，喜欢玩弄妇女。村民们备受欺压，敢怒不敢言，新上任的村支书叶光荣（吴刚饰）也苦于抓不到证据，只得一忍再忍，等着找机会一网打尽熊家兄弟。终于，机会来了。熊家兄弟从外地绑架回来两名女子，被叶光荣盯上。他暗地发动群众，以“打倒四人帮，黑井村有希望”暗语，准备当天夜里去熊家抓现行，但没想到人算不如天算，兵分四路的抓捕行动意外频出，乱成一锅粥。就在叶光荣一帮人陷入绝境的时候，突然峰回路转，出乎意料的事情发生了。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 14712,
    "runtime": "105 min",
    "releaseDate": "2006-06-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1982693",
    "id": "movie-1920620"
  },
  {
    "sourceId": "3727653",
    "title": "重力小丑",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p959347394.jpg",
    "summary": "清洗墙壁涂鸦的春（冈田将生 饰）无意中发现了多处涂鸦，这些涂鸦与最近在仙台发生的多起纵火案件有着千丝万缕的联系，总是出现在纵火案现场附近。觉得暗藏玄机的春找来了哥哥泉水（加濑亮 饰）商量，二人作为秘密侦探开始跟踪这系列纵火案。与此同时，24年前某案件的犯人（渡部笃郎 饰）刑满释放。看似没有联系的两起案件，背后却紧密交织着。随着案件的深入，被掩盖的秘密一一浮出水面，有震惊有无法接受。最终的真相是什么，兄弟二人能否解决危机，一切都是未知……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 14272,
    "runtime": "119 min",
    "releaseDate": "2009-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1427241",
    "id": "movie-3727653"
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
    "rating": 8,
    "votes": 14267,
    "runtime": "148 min",
    "releaseDate": "2010-10-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1164999",
    "id": "movie-3008672"
  },
  {
    "sourceId": "1307493",
    "title": "失控陪审团",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1191137962.jpg",
    "summary": "一名证券经纪人在儿子生日那天因枪击事件死在公司。两年后，死者遗孀控告枪支制造商维克斯堡，索取巨额赔偿，拥有三十多年从业经验的代理律师洛尔（达斯汀·霍夫曼 Dustin Hoffman 饰）宁肯凭借个人经验选择陪审团成员，但还是接受与陪审团筛选顾问劳伦斯合作，因为此类控告枪支公司的案例胜少败多。另一方面，枪支公司聘请著名陪审团筛选顾问蓝金（Gene Hackman 饰），全面调查陪审团成员背景，以期掌控陪审团。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 8,
    "votes": 13777,
    "runtime": "127 min",
    "releaseDate": "2003-10-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0313542",
    "id": "movie-1307493"
  },
  {
    "sourceId": "3070921",
    "title": "饥饿",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p788163635.jpg",
    "summary": "北爱共和军领导人鲍比•桑兹（迈克尔•法斯宾德 Michael Fassbender 饰）因为领导反对当局的游行而被捕。在梅兹监狱中，他依然没有放弃斗争。监狱里都是六平方米的封闭牢房，这里关押着北爱共和军的囚犯，他们赤身裸体拒绝穿囚衣，以此对抗撒切尔夫人剥夺囚犯权利的法令。他们用污浊的食物和排泄物掩盖着变形门下的沟渠，以此传递消息。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "英国",
      "爱尔兰"
    ],
    "rating": 8,
    "votes": 13554,
    "runtime": "96 min",
    "releaseDate": "2008-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0986233",
    "id": "movie-3070921"
  },
  {
    "sourceId": "26304167",
    "title": "出租车",
    "countryCode": "IR",
    "countryName": "Iran",
    "year": 2015,
    "coverUrl": "",
    "summary": "一辆黄色出租车行驶在德黑兰熙熙攘攘的街道上。各种各样的乘客坐上车，每人都直率坦白地回答了司机的各种问题。而这个司机不是别人就是导演贾法•帕纳西本人。在这个移动摄影棚中，导演将摄像机放在仪表板上，通过这次有趣而戏剧的旅程，记录了伊朗社会的精神风貌。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "伊朗"
    ],
    "rating": 8,
    "votes": 13456,
    "runtime": "82 min",
    "releaseDate": "2015-02-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4359416",
    "id": "movie-26304167"
  },
  {
    "sourceId": "3718782",
    "title": "又一年",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p648233277.jpg",
    "summary": "工程师Tom（吉姆·布劳德本特 Jim Broadbent 饰）和心理咨询师Gerri（鲁斯·西恩 Ruth Sheen 饰）是一对生活在伦敦的中年夫妻。单身女性Mary（莱丝利·曼维尔 Lesley Manville饰）是Gerri的同事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 8,
    "votes": 12739,
    "runtime": "129 min",
    "releaseDate": "2010-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1431181",
    "id": "movie-3718782"
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
    "rating": 8,
    "votes": 11579,
    "runtime": "94 min",
    "releaseDate": "2007-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1048174",
    "id": "movie-3055450"
  },
  {
    "sourceId": "3062897",
    "title": "葫芦兄弟",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2318160313.jpg",
    "summary": "在很久以前，某座山中蛇精和蝎子精为害人间，它们的恶行引起天神震怒。天神用雷电化成的葫芦把两个妖精收了进去。葫芦化作葫芦山镇守两只妖精，只要满一万年，它们就会被葫芦化去。然而天运使然，就在九千九百九十九年之际，一只穿山甲无意钻破葫芦山，放出两只妖精。穿山甲带着老爷爷找到葫芦种子，只要种出七颗葫芦，便可将妖精重新收伏。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 11201,
    "runtime": "83 min",
    "releaseDate": "2008-05-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-3062897"
  },
  {
    "sourceId": "1807495",
    "title": "夏日时光机",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p540520721.jpg",
    "summary": "这是一个热得不能再热的夏天。科幻协会的7位好朋友：河本（瑛太饰）、曾我（与座嘉秋饰）、遙（上野樹里饰）等人逗留在学校里玩耍。某日，他们在房间的一角突然发现了一个凭空冒出的时光机！",
    "genres": [
      "Comedy",
      "Sci-Fi"
    ],
    "originalGenres": [
      "喜剧",
      "科幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 8,
    "votes": 11117,
    "runtime": "107 min",
    "releaseDate": "2005-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0498567",
    "id": "movie-1807495"
  },
  {
    "sourceId": "1431949",
    "title": "小马虎",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1980,
    "coverUrl": "",
    "summary": "本美术片为木偶动画片。",
    "genres": [
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "动画",
      "短片"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 8,
    "votes": 11042,
    "runtime": "20 min",
    "releaseDate": "1980-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6743006",
    "id": "movie-1431949"
  },
  {
    "sourceId": "10777780",
    "title": "遗忘",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2012,
    "coverUrl": "",
    "summary": "迷你剧/电视电影《遗忘》由李晓苹编剧、连奕琦执导，是专门为台湾金钟奖而制作的。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 8,
    "votes": 10548,
    "runtime": "110 min",
    "releaseDate": "2012-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2255474",
    "id": "movie-10777780"
  },
  {
    "sourceId": "3821067",
    "title": "一代宗师",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2217557172.jpg",
    "summary": "广东佛山人叶问（梁朝伟 饰），年少时家境优渥，师从咏春拳第三代传人陈华顺学习拳法，师傅“一条腰带一口气”的告诫，支持他走过兵荒马乱、朝代更迭的混乱年代。妻子张永成（宋慧乔 饰）泼辣干练，二人夫唱妇随，琴瑟合璧。",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "传记"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 391371,
    "runtime": "111 min",
    "releaseDate": "2013-01-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1462900",
    "id": "movie-3821067"
  },
  {
    "sourceId": "3793783",
    "title": "地心引力",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "深邃浩瀚的外层空间，蔚蓝的地球与深不见底、漆黑一片的宇宙形成鲜明对比。一台隶属美国的空间站，数名宇航人员正进行太空漫步，对所属卫星做着例行检查。初上太空的瑞安·斯通博士（桑德拉·布洛克 Sandra Bullock 饰）在经验丰富的宇航员麦特·科沃斯基（乔治·克鲁尼 George Clooney 饰）的协助下，有条不紊地检查每一个部件。此次是科沃斯基退休前的最后一次飞行，他幽默风趣地活跃着团队的氛围。就在此时，休士顿总部传来骇人消息，不久前行将废弃俄罗斯卫星被导弹击毁，碎片以超过子弹的速度在地球轨道上散开，并意外击中其他卫星，引起连锁反应制造了新的碎片。",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Disaster"
    ],
    "originalGenres": [
      "科幻",
      "惊悚",
      "灾难"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 7.9,
    "votes": 322865,
    "runtime": "91 min",
    "releaseDate": "2013-11-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1454468",
    "id": "movie-3793783"
  },
  {
    "sourceId": "21352814",
    "title": "归来",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "上世纪70年代初，与家人音讯全无隔绝多年的劳改犯陆焉识（陈道明 饰）在一次农场转迁途中逃跑回家。这对怀抱芭蕾舞梦想的女儿丹丹（张慧雯 饰）带来了巨大压力，她阻止母亲冯婉瑜（巩俐 饰）与父亲的相见。因此夫妻二人近在咫尺却又相隔天涯。文革结束后，陆焉识终于平反回家，但是他却发现女儿早已放弃了芭蕾的梦想成了一名工厂女工，而深爱的妻子因为患病已经不认识自己。深厚的感情、生活的变故，迫使陆焉识做出了对他来说最荒唐却又最合理的人生选择……",
    "genres": [
      "Drama",
      "Romance",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 239248,
    "runtime": "111 min",
    "releaseDate": "2014-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3125472",
    "id": "movie-21352814"
  },
  {
    "sourceId": "3230459",
    "title": "李米的猜想",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "",
    "summary": "出租车司机李米（周迅 饰）嘴里一直叨叨着神秘的数字，坐她车的乘客都得回答她一个问题：见过这个男人吗？李米的男友方文已经失踪四年，然而在这四年里又一直不停地给她写信告知近况，找不到恋人的李米把他的照片贴在杂志里让人辨认，每天生活在极大的折磨下。",
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
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 218266,
    "runtime": "96 min",
    "releaseDate": "2008-09-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1299370",
    "id": "movie-3230459"
  },
  {
    "sourceId": "1945330",
    "title": "迷雾",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1970406441.jpg",
    "summary": "一座风景秀美的小镇被一场突如其来的浓雾瞬间淹没。雾中传来阵阵惨叫，人们惊慌失措地四处逃散。戴维和他的儿子与众多镇上的人被困在小镇超市里，等待雾的消散。浓雾并没有如期望的散开，而走进浓雾的人一去不返。浓雾逐渐露出了它狰狞的面目。恐惧、惊慌、挣扎、悲伤、绝望……人们的精神濒临崩溃。如何才能活着走出迷雾？面对超市里几近癫狂的人们和超市外吞噬一切、不可知的迷雾，戴维紧紧搂着儿子，开始了艰难的求生之路……",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "科幻",
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 196020,
    "runtime": "126 min",
    "releaseDate": "2007-11-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0884328",
    "id": "movie-1945330"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0428870",
    "id": "movie-1308804"
  },
  {
    "sourceId": "1307694",
    "title": "无间道3：终极无间",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527603461.jpg",
    "summary": "刘建明（刘德华）在陈永仁（梁朝伟）被杀10个月后接受警队内部调查，被架空职权，加上家庭的变故，他的精神状态每况愈下，但他坚信局面很快就会扭转。年轻警司杨锦荣（黎明）在同事看来是怪人一个，他正凭着过人的业绩迈向警队最高层。为了搞清楚杨锦荣的真实身份，刘建明开始对其调查。",
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
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 187384,
    "runtime": "107 min",
    "releaseDate": "2003-12-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0374339",
    "id": "movie-1307694"
  },
  {
    "sourceId": "25849049",
    "title": "超人总动员2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2018,
    "coverUrl": "",
    "summary": "在一次挖地超人制造的大混乱中，超人家庭大力神巴鲍伯（格雷格·T·尼尔森 Craig T. Nelson配音）和弹力女超人巴荷莉（霍利·亨特 Holly Hunter 配音）和他们的子女巴小倩（莎拉·沃威尔 Sarah Vowell 配音）、巴小飞（赫克·米尔纳 Huck Milner 配音）使出浑身解数，然而不仅不能抓住狡猾的敌人，而且还因为对城市破坏太大而导致失去了政府的支持。此后不久，电信集团大亨温斯顿·狄弗（鲍勃·奥登科克 Bob Odenkirk 配音）通过酷冰侠鲁休斯（塞缪尔·杰克逊 Samuel L. Jackson 配音）找到鲍伯一家，希望将该公司的前沿技术应用到超人身上，更好地维护世界和平。可是狄弗只希望雇佣荷莉，偏偏荷莉大展雄风，成为了所有超人族群的偶像，这可令担任奶爸的鲍伯心有不甘。",
    "genres": [
      "Comedy",
      "Action",
      "Animation",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "动画",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 184713,
    "runtime": "118 min",
    "releaseDate": "2018-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3606756",
    "id": "movie-25849049"
  },
  {
    "sourceId": "1302987",
    "title": "珍珠港",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "雷夫（本•阿弗莱特）和丹尼（乔什•哈奈特）是一对自小玩在一起的好兄弟，两人对飞行都有很大兴趣，曾一起学习过驾驶飞机，二战初期，两人又一起加入了美国空军部队。受训期间，雷夫与军中医院里的女护士伊弗琳（凯特•贝金赛尔）坠入爱河。",
    "genres": [
      "Drama",
      "Romance",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 178088,
    "runtime": "183 min",
    "releaseDate": "2001-08-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0213149",
    "id": "movie-1302987"
  },
  {
    "sourceId": "26842702",
    "title": "燃烧",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2018,
    "coverUrl": "",
    "summary": "目标成为作家的青年李钟秀（刘亚仁 饰），平日里靠兼职养活自己。经营畜牧业的父亲不谙人情，官司缠身，迫使钟秀又要为了搭救父亲而四处奔走。这一日，钟秀在某大型卖场重逢了当年的同学申惠美（全钟淑 饰）。惠美计划近期前往非洲旅行，于是拜托钟秀照看爱猫Boil。不久后惠美回国，与之一同下飞机的还有名叫本（史蒂文·元 饰）的男子。本驾驶保时捷，居住在高级公寓内，优哉游哉，不见工作，四处玩乐，和钟秀相比有如天上地下。不知为何，本走入平民钟秀和惠美的生活，更向新朋友讲述了他奇特的癖好。在钟秀家小聚的那个晚上过后，惠美仿佛人间蒸发了一般无影无踪……",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 178064,
    "runtime": "148 min",
    "releaseDate": "2018-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7282468",
    "id": "movie-26842702"
  },
  {
    "sourceId": "25890005",
    "title": "山河故人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "1999年，山西汾阳县城，开朗雀跃的女孩沈涛（赵涛 饰）徘徊在矿工梁子（梁景东 饰）和煤矿老板张晋生（张译 饰）两端。一女二男的三角恋，无法维持长久的平衡。梁子和晋生的友情破裂。涛儿结婚的时节，有人选择远方。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "中国大陆",
      "法国",
      "日本"
    ],
    "rating": 7.9,
    "votes": 175167,
    "runtime": "126 min",
    "releaseDate": "2015-10-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3740778",
    "id": "movie-25890005"
  },
  {
    "sourceId": "1291584",
    "title": "杀死比尔2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "“黑蛇”（乌玛•瑟曼 Uma Thurman 饰）继续上一集未完的复仇之旅。探听得知，前比尔的贴身保镖“响尾蛇”洗手不干后住在得克萨斯州的奥斯汀。当她晚上悄悄溜到“响尾蛇”住的拖车上时，却中了埋伏，被“响尾蛇”用枪击中胸部并被麻醉了。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 171524,
    "runtime": "137 min",
    "releaseDate": "2004-04-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0378194",
    "id": "movie-1291584"
  },
  {
    "sourceId": "1305903",
    "title": "心慌方",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2101092199.jpg",
    "summary": "警司昆廷（莫里斯•迪恩•温特Maurice Dean Wint 饰）、监狱专家兼传感器专家伦尼斯（维尼•罗宾逊 Wayne Robson 饰）、医生霍洛韦（尼基•瓜达尼 Nicky Guadagni  饰）、建筑师沃思（戴维•休利特 David Hewlett）、数学系的大学生利文（尼科勒•德搏尔 Nicole de Boer  饰）和身患孤独症的学者卡赞（安德鲁•米勒 Andrew Miller 饰），六个素不相识的人，一觉醒来后发现一同身处于由一个个形状相同的立方体组成的结构复杂的高度精密迷宫中！",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 7.9,
    "votes": 160634,
    "runtime": "90 min",
    "releaseDate": "1997-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0123755",
    "id": "movie-1305903"
  },
  {
    "sourceId": "1291581",
    "title": "怪物史瑞克",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "史莱克生活在平凡的世界中——他本身是一个其貌不扬的怪物，绿色的身体，古怪的脾气，不爱干净的懒散生活。这天他家里来了几个不速之客，他们告诉史莱克，自己来自一个残暴国王统治下的王国，现在已经无家可归了。而且，那个残暴的国王还掠夺了一个美丽非凡的公主，打算强占为妻。",
    "genres": [
      "Comedy",
      "Animation",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 148353,
    "runtime": "90 min",
    "releaseDate": "2001-05-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0126029",
    "id": "movie-1291581"
  },
  {
    "sourceId": "1303246",
    "title": "狙击电话亭",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1593362214.jpg",
    "summary": "公关人员斯图（柯林•法瑞尔 Colin Farrell 饰）在外面瞒着妻子有一个秘密情人，为了躲避妻子的电话单检查，这天他又偷偷溜到街上公用电话亭准备打电话约会情人。不料，在他进入电话亭的一刹那，电话铃响了。虽然不知是谁打的电话，出于习惯，斯图拿起了听筒。",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "originalGenres": [
      "悬疑",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 145383,
    "runtime": "81 min",
    "releaseDate": "2002-09-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0183649",
    "id": "movie-1303246"
  },
  {
    "sourceId": "3550132",
    "title": "非常主播",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p547516194.jpg",
    "summary": "生活优渥的单身贵族南贤洙（车太贤 饰）曾是一名失败的歌手，年过而立后，他迎来了事业的第二春。贤洙所主持的谈话类节目备受欢迎，尤其是近段时间单身妈妈静南寻找生身父亲的故事更掀起收听率飙升的高潮。",
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
      "韩国"
    ],
    "rating": 7.9,
    "votes": 142507,
    "runtime": "108 min",
    "releaseDate": "2009-10-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1360795",
    "id": "movie-3550132"
  },
  {
    "sourceId": "6844868",
    "title": "狼少年",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2012,
    "coverUrl": "",
    "summary": "因为体弱多病的顺伊（朴宝英 Bo-yeong Park 饰）需要疗养的缘故，顺伊母女三人从首尔搬家到了乡下的一栋别墅生活。而收拾屋子的时候顺伊意外的在仓库发现了神秘的前户主朴博士在这里遗留下了的狼孩（宋仲基 Joong-ki Song 饰）。顺伊妈妈出于善心收留了这个狼性未泯的男孩，并给他起名叫哲秀，就这样四个人开始了同住一个屋檐下的生活。顺伊起初反感这个不会说话，吃饭狼吞虎咽的闯入者，然而朝夕相处让顺伊萌生了照顾训练哲秀的念头。她开始教给他吃饭，读书，认字，还弹奏吉他给狼孩听，而哲秀对顺伊温暖的关怀十分受用，认真的做着顺伊教授给自己的东西。孤独的顺伊因为哲秀渐渐融入到自己的世界中而开心起来，对他产生了别样的爱恋。但是这份美好却被对狼孩虎视眈眈的智泰（刘延锡 Yeon-Seok Yoo 饰）打破，他一门心思的集结挑拨多方势力来捕杀哲秀。顺伊为了保护哲秀，不得不面临着与所爱的人分离的现实。",
    "genres": [
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 137774,
    "runtime": "124 min",
    "releaseDate": "2013-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2315152",
    "id": "movie-6844868"
  },
  {
    "sourceId": "1292212",
    "title": "天使之城",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "",
    "summary": "天使塞斯（尼古拉斯•凯奇 饰）拥有天使应该拥有的一切法力，还能永生。他的使命就是每天游荡在医院里将已去的人们带到另外一个世界，他却爱上了医院的医生梅姬（梅格•瑞恩 饰），为了能够和心爱的人在一起，塞斯放弃了天使的身份，放弃永生，坠入了凡间。然而，他却并不明白，等待他的，除了动人的爱情，还有弄人的命运。",
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
      "美国",
      "德国"
    ],
    "rating": 7.9,
    "votes": 129374,
    "runtime": "114 min",
    "releaseDate": "1998-04-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120632",
    "id": "movie-1292212"
  },
  {
    "sourceId": "26942631",
    "title": "起跑线",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2017,
    "coverUrl": "",
    "summary": "一对印度的中产阶级夫妇:服装店老板拉吉（伊尔凡·可汗 Irrfan Khan 饰）与太太米塔（萨巴·卡玛尔 Saba Qamar 饰）为了让女儿皮娅（蒂希塔·塞加尔 Dishita Sehgal 饰）接受更好的教育想尽了各种办法。而当他们费劲心思终于要将女儿送进名校时,事情却又发生了意想不到的变化……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "印度"
    ],
    "rating": 7.9,
    "votes": 128267,
    "runtime": "132 min",
    "releaseDate": "2018-04-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5764096",
    "id": "movie-26942631"
  },
  {
    "sourceId": "4004731",
    "title": "海洋天堂",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p504314075.jpg",
    "summary": "刚过21岁生日的大福（文章 饰）是个孤独症患者，父亲王心诚（李连杰 饰）在妻子去世后，一个人将大福养大，如今王心诚身患肝癌，自感时日无多，虽然楼下开小卖店的柴姨（朱媛媛 饰）时常给这对父子无私的帮助，但如何安置大福的未来还是王心诚放不下的牵挂，他甚至有了和儿子一同赴死的想法。王心诚试图将大福送回培智学校，但是学校、福利院一连串的拒绝令他倍感失落。而且在大福的世界里，水是他最好的朋友，这个能像海豚一样畅游的孤独症患者也无法离开水族馆，在水族馆，大福结识了善良的杂技女子玲玲（桂纶镁 饰），而王心诚急于教会大福生存的技巧，他的时间已经不多了……",
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
    "rating": 7.9,
    "votes": 112413,
    "runtime": "106 min",
    "releaseDate": "2010-06-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1498858",
    "id": "movie-4004731"
  },
  {
    "sourceId": "1299765",
    "title": "回魂夜",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2210711072.jpg",
    "summary": "一场阴差阳错的谋杀案，牵连了一栋大厦里多个无辜的人。",
    "genres": [
      "Comedy",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 108771,
    "runtime": "82 min",
    "releaseDate": "1995-07-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113356",
    "id": "movie-1299765"
  },
  {
    "sourceId": "10576419",
    "title": "蓝色茉莉",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "Jasmine(凯特·布兰切特 Cate Blanchett 饰）的丈夫Hal因为商业诈骗罪被捕入狱并在狱中结束了自己的生命，一贫如洗的她只能离开纽约来到旧金山投靠她的妹妹Ginger（莎莉·霍金斯 Sally Hawkins 饰）。从挥金如土的生活瞬间回到普通人的世界，Jasmine精神崩溃了，她经常自言自语，并沉浸在对往日的回忆中，和周围的人格格不入。她不喜欢Ginger的前夫Aguie，更不喜欢Ginger现在的男朋友Chill。Jasmine在一个牙医诊所找到了份工作，同时回到学校上课，但她的生活仍旧一团糟。直到在一个派对上，她邂逅了一个公务员，他风趣英俊又有钱，很快就赢得了Jasmine的心。Jasmine的生活似乎回到了正轨，就在他们准备购买结婚戒指的时候，Ginger前夫Augie的出现又让她的世界昏天暗地......",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 106436,
    "runtime": "98 min",
    "releaseDate": "2013-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2334873",
    "id": "movie-10576419"
  },
  {
    "sourceId": "1304641",
    "title": "红磨坊",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2001,
    "coverUrl": "",
    "summary": "红磨坊日日歌舞升平。夜总会，康康舞，这是个男人们花天酒地的享乐国度。然而，这儿的爱情，却无比纯净动人。",
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
      "澳大利亚",
      "美国"
    ],
    "rating": 7.9,
    "votes": 104543,
    "runtime": "127 min",
    "releaseDate": "2001-05-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0203009",
    "id": "movie-1304641"
  },
  {
    "sourceId": "1293825",
    "title": "漂亮女人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1990,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2205839719.jpg",
    "summary": "爱德华•刘易斯（李察•基尔 饰）是一个拥有百万身家的企业家。他潇洒迷人，但总是无法处理好与女人之间关系，他跟女友分手了。他到洛杉矶出差，晚上开着一辆借来的高级轿车进入了红灯区。由于迷失了方向，他向一名年轻漂亮的妓女薇薇安（茱丽娅•罗伯茨 饰）问路，薇薇安的活泼美丽吸引了他，他把薇薇安带到了酒店。爱德华爱上了薇薇安并极力想留下她，但碍于情面只能用钱做掩饰，让她在一周内充当爱德华的交际活动女伴。宴会上，薇薇安的魅力让爱德华醋意大发。此时薇薇安也发现自己爱上了爱德华，可是一周的时间马上要过去了，两个相爱的人又该何去何从？",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 102704,
    "runtime": "119 min",
    "releaseDate": "1990-03-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100405",
    "id": "movie-1293825"
  },
  {
    "sourceId": "1296629",
    "title": "倩女幽魂2：人间道",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2515752449.jpg",
    "summary": "宁采臣（张国荣 饰）与燕赤霞（午马 饰）安葬好小倩的骨灰后，分道扬镳。宁采臣回到世间，正是奸臣当道，朝政混乱，民生困苦的时代。宁偶入一家黑店，险被残杀之际又被捕快误抓入狱，遇到名士诸葛卧龙（谷峰 饰），得其相救。逃出狱后路经一所荒寺，被年青鬼马道士知秋一叶（张学友 饰）缠上，误会不断。山庄中阴森恐布，隐藏着一只巨尸，然巨尸未现，却出现一伙白衣鬼魂。宁偶摘掉其中一女子面具，发现其竟与昔日恋人小倩（王祖贤 饰）一模一样……",
    "genres": [
      "Romance",
      "Fantasy",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "爱情",
      "奇幻",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 97385,
    "runtime": "104 min",
    "releaseDate": "1990-07-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100625",
    "id": "movie-1296629"
  },
  {
    "sourceId": "10432911",
    "title": "流感",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2013,
    "coverUrl": "",
    "summary": "一群东南亚偷渡客历经艰险来到韩国，但是整个集装箱内的偷渡客几乎全部死亡，只有一人拖着羸弱的身体侥幸逃入闹市之中。殊不知此人身上携带致命猪流感病毒，短短一天时间，病毒迅速蔓延城市的各个角落。许多人在不知不觉间被感染，进而将死亡的阴影引向周围所有的人。美丽的女医生金仁海（秀爱 饰）是一位单身妈妈，她不久前遭遇一场车祸，幸被消防队救援人员姜智久（张赫 饰）救出，却因丢失重要论文资料而备受上司苛责。值此期间，韩国蛇头的弟弟因流感送入仁海的医院治疗，经诊断终于发现流感的起因，死尸横陈的集装箱无疑成为查找病源的关键。",
    "genres": [
      "Drama",
      "Thriller",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "灾难"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 96932,
    "runtime": "122 min",
    "releaseDate": "2013-08-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2351310",
    "id": "movie-10432911"
  },
  {
    "sourceId": "1408312",
    "title": "笑林小子",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "香港某高中学生四毛（林志颖 饰）爱上校长的孙女安妮（徐若瑄 饰），此举惹怒安妮男友铁鹰（张震岳 饰），令其开始对四毛百般刁难。在好友珍珠（徐濠萦 饰）和小皮（郝劭文 饰）的帮助下，四毛没有知难而退反是越挫越勇，发誓要与安妮约会，但终没抵过铁鹰。四毛随出差大陆的父亲游玩时，邂逅功夫了得的少林小子（释小龙 饰），并在他的帮助下练成武功。回到香港后，四毛偶知铁鹰的父亲心谋不轨想霸占校产，计划让铁鹰强占安妮以便要挟校长，开始在来港访问的少林小子的帮助下与铁鹰一伙展开恶战。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港",
      "中国台湾"
    ],
    "rating": 7.9,
    "votes": 93981,
    "runtime": "87 min",
    "releaseDate": "1994-04-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111765",
    "id": "movie-1408312"
  },
  {
    "sourceId": "5262338",
    "title": "虞美人盛开的山坡",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "20世纪60年代初，从二战的沉重打击中复苏的日本，正以极快的速度在世人的注视下重新确立自己的地位。位于横滨某个海港小镇，松崎家四姐弟和住客过着平凡的生活。16岁的姐姐海（长泽雅美 配音）照顾所有人的衣食起居，清晨则例行升起祈愿平安航行的信号旗。偶然的机会，海结识了同校新闻部的男孩风间俊（冈田准一 配音），校园生活平添一道靓丽的色彩。与此同时，东京奥运会召开在即，学校内俊和一群好友所栖身的古旧建筑“拉丁区”面临拆毁的命运。为了保护心中的圣地，俊、海以及同好们联合起来。在此过程中，他们心中某种隐秘的情愫悄然滋长，但是意想不到的命运却挡在了彼此的面前……",
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
    "rating": 7.9,
    "votes": 87102,
    "runtime": "91 min",
    "releaseDate": "2011-07-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1798188",
    "id": "movie-5262338"
  },
  {
    "sourceId": "3338851",
    "title": "锅匠，裁缝，士兵，间谍",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2011,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1202175107.jpg",
    "summary": "冷战时，全球两大特工组织——俄罗斯“中心”与英国“圆场”明争暗斗。特工遇害，高层震怒，责成“圆场”挖出“地鼠”。怀疑对象共有5人，即圆场上任“老总”命名的锅匠，裁缝，士兵，穷人，乞丐。其中，金盆洗手的“乞丐”乔治·史迈利(加里·奥德曼 Gary Oldman 饰)本来有重大嫌疑。某日，行动组-剥头皮组头目的彼得·吉勒姆(本尼迪克特·康伯巴奇 Benedict Cumberbatch 饰)与英国内阁办公室谍报总监拉康排除了史迈利的嫌疑，令其重新出山，负责挖出“地鼠”。于是，史迈利开始分别走访故人，调查“圆场”老大阿勒莱恩，裁缝-比尔·海顿(科林·费斯 Colin Firth 饰)，士兵-掌管东欧事务的资深间谍罗埃·布兰德，穷人-后勤部门点路灯组组长托比·伊斯特哈斯。一时间，圆场疑云密布，人人自危，究竟谁才是“地鼠”……",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "英国",
      "法国",
      "德国"
    ],
    "rating": 7.9,
    "votes": 85132,
    "runtime": "127 min",
    "releaseDate": "2011-09-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1340800",
    "id": "movie-3338851"
  },
  {
    "sourceId": "1292704",
    "title": "黄飞鸿之三：狮王争霸",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2047653768.jpg",
    "summary": "晚清末年，大清帝国摇摇欲倒。面对外敌来袭，慈禧太后鼓励民间习武抗敌。李鸿章为了逢迎太后，举办起一年一届的“狮王争霸”大赛。“狮王争霸”其实就是各们各派舞起狮子头，以武力争夺锦标。",
    "genres": [
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 81733,
    "runtime": "109 min",
    "releaseDate": "1992-12-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0108592",
    "id": "movie-1292704"
  },
  {
    "sourceId": "5318669",
    "title": "转山",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "本片改编自同名畅销书。",
    "genres": [
      "Drama",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆",
      "中国台湾"
    ],
    "rating": 7.9,
    "votes": 81712,
    "runtime": "90 min",
    "releaseDate": "2011-11-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2075232",
    "id": "movie-5318669"
  },
  {
    "sourceId": "4935011",
    "title": "白兔糖",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1787832904.jpg",
    "summary": "27岁的上班族河地大吉（松山健一 饰）赶回家乡参加外公的葬礼，意外见到了外公的私生女——美丽而可怜的鹿贺凛（芦田爱菜 饰）。凛自然无法得到鹿贺家族的认可，却引起了大吉的关注与同情。最终，大吉将这个年仅6岁、尚在尿床的小阿姨带回东京独自抚养。凛的到来彻底改变了单身汉大吉的生活，他半天在公司辛苦奔忙，回到家还要照顾凛的衣食起居，随着凛到了进入幼稚园的年龄，奔跑逐渐成为大吉生活的主题。在这一过程中，曾经紧紧封闭内心的凛逐渐向大吉敞开心扉，他们既是奇怪的父女，又是年龄倒错的阿姨和外甥，平淡的生活充满幸福……",
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
    "rating": 7.9,
    "votes": 80830,
    "runtime": "113 min",
    "releaseDate": "2011-08-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1672214",
    "id": "movie-4935011"
  },
  {
    "sourceId": "1306526",
    "title": "触不到的恋人",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p701320928.jpg",
    "summary": "韩星贤（李政宰饰）搬到一个海边小屋，他为房屋取了一个意大利文的名字“Il Mare”，意思是“海”。整理房子时，他在信箱发现了一封内容很奇怪的信，信上写着“我是你搬来前的上一个房客，如果有收到我的信，请寄来”，更奇怪的是这封信寄出的日期是在1999年，也就是两年后——而星贤现在的时间是在1997年。星贤就立刻回信给这莫名其妙的人，询问是怎么回事。",
    "genres": [
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 70986,
    "runtime": "105 min",
    "releaseDate": "2000-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0282599",
    "id": "movie-1306526"
  },
  {
    "sourceId": "3007817",
    "title": "裂缝",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "",
    "summary": "20世纪30年代，英国某女子教会寄宿学校。这里校风极其严格，女孩们被要求墨守成规，不允许有任何堕落和消极的思想。而游泳队的教师G小姐（伊娃·格林 Eva Green 饰）显得如此与众不同，她个性张扬，思想开放，鼓励学生努力追求自身的欲望。在女孩们的眼中，G小姐是如此迷人。不久，来自西班牙的贵族小姐费雅玛·科罗纳（玛利亚·瓦沃德 María Valverde 饰）转学至此，她高雅尊贵的气质和亲切友善的性格令女孩们甚为倾倒，甚至G小姐也喜欢上这个出身豪门却有着独立思想的女孩。然而费雅玛的处事态度渐渐令G小姐感到矛盾与困惑，曾经是中心人物的女孩黛·拉斯菲尔德（朱诺·坦普尔 Juno Temple 饰）也心生嫉妒……",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "英国",
      "爱尔兰",
      "西班牙",
      "法国",
      "瑞士"
    ],
    "rating": 7.9,
    "votes": 67459,
    "runtime": "104 min",
    "releaseDate": "2009-09-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1183665",
    "id": "movie-3007817"
  },
  {
    "sourceId": "1297785",
    "title": "星球大战前传2：克隆人的进攻",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2308393297.jpg",
    "summary": "绝地武士战胜西斯学徒后十年，银河共和国再次面临威胁，前绝地武士杜库伯爵（克里斯托弗•李 Christopher Lee 饰）鼓动数千星系与共和国决裂，并筹建大批机器人军队为政变做准备。纳布星的阿米达拉（娜塔丽·波特曼 Natalie Portman 饰）结束女王任期后以议员身份抵达考路斯坎星，决意为组建共和军队投出关键一票。欧比-旺•肯诺比（伊万•麦克格雷格 Ewan McGregor 饰）携长大了的阿纳金（海登·克里斯滕森 Hayden Christensen 饰）奉命保护阿米达拉的安全。在阿纳金护送阿米达拉返回纳布星避难的途中，二人情愫暗生，决定共同前往塔图因星寻找阿纳金之母。与此同时，欧比-旺追查刺客行迹一路深入吉诺西斯星，发现了杜库伯爵的阴谋，自己却深陷囹圄，危在旦夕……",
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
    "rating": 7.9,
    "votes": 66147,
    "runtime": "142 min",
    "releaseDate": "2002-07-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0121765",
    "id": "movie-1297785"
  },
  {
    "sourceId": "1300108",
    "title": "秋菊打官司",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554073275.jpg",
    "summary": "中国西北某个小山村里，村妇秋菊（巩俐）的丈夫王庆来（刘佩琦）在与村长争执时被对方踢伤下体无法再干农活，只能整日躺在床上，对此村长没表一态。秋菊气不过，找村长理论不得对方理会，为讨一口气，她一纸诉状将村长告到了乡政府。乡政府李公安耐心调解一番后，村长答应赔偿秋菊家的经济损失，却是把钞票直接扔在地上拒不道歉。",
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
    "rating": 7.9,
    "votes": 61581,
    "runtime": "100 min",
    "releaseDate": "1992-08-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105197",
    "id": "movie-1300108"
  },
  {
    "sourceId": "3074408",
    "title": "热血高校2",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p936977410.jpg",
    "summary": "在GPS与芹泽军团的恶战之后，铃兰高中进入短暂的和平期。芹泽多摩雄（山田孝之 饰）让出老大宝座，泷谷源治（小栗旬 饰）则持续向恐怖的林田惠（深水元基 饰）发起冲击。8个月时间转瞬即逝，铃兰与宿敌凤仙学院的风波再起。",
    "genres": [
      "Action"
    ],
    "originalGenres": [
      "动作"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.9,
    "votes": 61273,
    "runtime": "133 min",
    "releaseDate": "2009-04-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1232831",
    "id": "movie-3074408"
  },
  {
    "sourceId": "2361823",
    "title": "我爱你莫里斯",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p669366779.jpg",
    "summary": "史蒂夫•拉塞尔（金•凯瑞 Jim Carrey 饰）是个付费收养来的孩子，他为了查出自己的亲生父母，做了一名警察，然而当他来到母亲的家门前，得到的却是闭门羹……幸好史蒂夫还有一个幸福的家庭，他与妻子育有一女，这对虔诚的夫妻每日祷告……然而这些都只是表象，事实上，史蒂夫是一名同性恋，他用无尽的谎言欺骗了所有人，终于一次车祸后，史蒂夫顿悟以前的生活一文不值，他公开了自己的性取向并远赴佛罗里达寻找幸福，常年欺瞒的日子造就了史蒂夫非凡的诈骗能力，不久东窗事发，史蒂夫入狱，却在狱中遇上了此生挚爱莫里斯（伊万•迈克格雷格 Ewan McGregor 饰 ），史蒂夫向莫里斯献出了自己全部的激情和勇气，这对儿从监狱中走出的恋人，留下了一段传奇故事。",
    "genres": [
      "Comedy",
      "Romance",
      "LGBTQ+",
      "Biography"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "同性",
      "传记"
    ],
    "originalRegions": [
      "法国",
      "美国"
    ],
    "rating": 7.9,
    "votes": 60253,
    "runtime": "102 min",
    "releaseDate": "2009-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1045772",
    "id": "movie-2361823"
  },
  {
    "sourceId": "25697098",
    "title": "裁缝",
    "countryCode": "AU",
    "countryName": "Australia",
    "year": 2015,
    "coverUrl": "",
    "summary": "改编自畅销小说，讲述的是富有魅力的女主人公缇莉唐纳基（凯特·温斯莱特饰），一个受过情感创伤的人，回到她澳大利亚的家乡小镇，向那些曾和自己有过节的人展开复仇的故事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "澳大利亚"
    ],
    "rating": 7.9,
    "votes": 59931,
    "runtime": "118 min",
    "releaseDate": "2015-10-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2910904",
    "id": "movie-25697098"
  },
  {
    "sourceId": "2357699",
    "title": "名侦探柯南：第十四个目标",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1954017381.jpg",
    "summary": "目暮警官、小兰的母亲妃英里、阿笠博士接连遭到不明身份之人的暗算。柯南追踪伤害阿笠博士的凶手，他根据几起案件现场留下的线索发现凶手按照扑克牌的顺序行凶，而且遇害者皆与毛利小五郎有关。目暮提供的线索初步揭开事情的真相，原来毛利当年任职警察的时候曾经逮捕犯下杀人罪的赌徒村上丈，当年也更因这一事件导致毛利离职以及婚姻变故。",
    "genres": [
      "Animation",
      "Mystery"
    ],
    "originalGenres": [
      "动画",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.9,
    "votes": 59822,
    "runtime": "99 min",
    "releaseDate": "1998-04-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0965649",
    "id": "movie-2357699"
  },
  {
    "sourceId": "1296717",
    "title": "夺宝奇兵",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1981,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p735571282.jpg",
    "summary": "二战期间，希特勒在世界各地召集考古学家寻找“失落的约柜”——圣经中引导希伯来人与上帝交流的圣物，希特勒欲借其来护佑纳粹的战争。",
    "genres": [
      "Action",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 59057,
    "runtime": "115 min",
    "releaseDate": "1981-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0082971",
    "id": "movie-1296717"
  },
  {
    "sourceId": "1299769",
    "title": "第六感生死缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "",
    "summary": "也许在爱情的天平上，神与人是平等的。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 58308,
    "runtime": "178 min",
    "releaseDate": "1998-11-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119643",
    "id": "movie-1299769"
  },
  {
    "sourceId": "1827713",
    "title": "卑劣的街头",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p750440773.jpg",
    "summary": "赵炳斗（赵仁成 饰）是一个三流社团的小头目，家中有两个弟妹，母亲身体不好，生活困顿；他在社团里也混得不如意，老大不器重，净派一些当街打架、恐吓收债的小事情，本来应该他接手的游戏厅也被别人抢了功。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 58104,
    "runtime": "141 min",
    "releaseDate": "2006-06-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0821442",
    "id": "movie-1827713"
  },
  {
    "sourceId": "1292067",
    "title": "冰血暴",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1996,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2178583078.jpg",
    "summary": "汽车经理谢利（威廉姆·H·梅西 William H. Macy 饰）有一个完美的兴建停车场的计划，他多次找他的有钱岳父威利借钱，可是一毛不拔的威利始终没答应。无奈之下，谢利只有找到卡奥（史蒂夫·布西密 Steve Buscemi 饰）和基亚（彼得·斯特曼 Peter Stormare 饰），请他们绑架自己的妻子以勒索威利100万，事成后给他两4万酬金。3人一拍即合。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 7.9,
    "votes": 56125,
    "runtime": "98 min",
    "releaseDate": "1996-03-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0116282",
    "id": "movie-1292067"
  },
  {
    "sourceId": "1304898",
    "title": "训练日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "阿洛佐（丹泽尔•华盛顿 Denzel Washington饰）是美国毒品缉查部的黑人警探，经验丰富，查案出色，对毒品案件有着敏锐的嗅觉。人称“魔幻之眼”。这天阿洛佐的部门来了一个新同事杰克（伊桑•霍克 Ethan Hawke 饰），杰克跟随阿洛佐深入到街头的每一个阴暗角落，发现这个城市光怪陆离的同时，也慢慢见识了阿洛佐亦正亦邪的办案手法。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "澳大利亚"
    ],
    "rating": 7.9,
    "votes": 55321,
    "runtime": "122 min",
    "releaseDate": "2001-10-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0139654",
    "id": "movie-1304898"
  },
  {
    "sourceId": "1303590",
    "title": "玻璃之城",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p791235992.jpg",
    "summary": "在1997年的除夕夜，英国伦敦的人们都在准备迎接新年的到来，为新年的到来欢呼庆祝。此时一辆汽车失事撞毁了，港生（黎明 饰）和韵文（舒淇 饰）是车上的一对中年男女，他们在人们的欢呼声中逝去。经调查发现，原来他们是一对偷情的爱侣，由于各自都有家室，家中亲人大怒，只派了他们各 人的儿子及女儿处理后事。刚开始这两个年轻人都认为对方的父母破坏了自己的家庭幸福，各有怨恨。当他们翻查警方交给他们有关父母的资料的时候，才从照片、书信、日记等东西中，看到了他们父母当年美好的爱情故事……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 55279,
    "runtime": "110 min",
    "releaseDate": "1998-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0179110",
    "id": "movie-1303590"
  },
  {
    "sourceId": "1297304",
    "title": "笑傲江湖",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543084320.jpg",
    "summary": "大内库藏武功秘笈《葵花宝典》失窃。东厂主管太监古今福（刘洵 饰）率千户欧阳全（张学友 饰）等，南下调查辞官锦衣卫林镇南，同时收用“五岳盟主”左冷禅（元华 饰）外围策应。华山派大弟子令狐冲（许冠杰 饰）与师妹岳灵珊（叶童 饰）奉师命增援林镇南，无奈两人实力不济，领得林镇南遗嘱后遁走，二人于路先后巧遇顺风堂堂主刘正风（午马 饰）、日月神教长老曲洋（林正英 饰）、华山派风清扬，获传《笑傲江湖》曲谱和独孤九剑。",
    "genres": [
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港",
      "中国台湾"
    ],
    "rating": 7.9,
    "votes": 54392,
    "runtime": "118 min",
    "releaseDate": "1990-04-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100973",
    "id": "movie-1297304"
  },
  {
    "sourceId": "11627068",
    "title": "大明劫",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "明朝崇祯15年，全国内忧外患，大将孙传庭（戴立忍 饰）临危受命带着妻子冯氏（冯波 饰）来到潼关抵抗李自成的军队。与此同时游医吴又可（冯远征 饰）怀着济世救人之心来到潼关拜访师傅——药局提领赵川（钱学格 饰）。大敌当前，孙传庭军中士兵染上怪病，同时还要面对崇祯皇帝（余少群 饰）的催促出兵和潼关豪绅顾清远（马精武 饰）等人的自私敛财。赵川因施救不力以身殉职，吴又可在危难之时挺身而出，靠着不同寻常的治疗方法与孙传庭惺惺相惜。最后瘟疫终于被控制住，但是国家的病症能否被战争治好吴又可和孙传庭都无法预料。",
    "genres": [
      "Drama",
      "History",
      "Costume"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "古装"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 52841,
    "runtime": "109 min",
    "releaseDate": "2013-10-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3336934",
    "id": "movie-11627068"
  },
  {
    "sourceId": "4812830",
    "title": "魁拔之十万火急",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1091122584.jpg",
    "summary": "在偏远的兽国窝窝乡，蛮吉（刘婧荦 配音）和蛮大人（王凯 配音）这两个“独行族妖侠”，整天为了取得象征着成功和光荣的“妖侠纹耀”而刻苦修炼“脉术”，却把他们所生活的“窝窝乡”弄得鸡犬不宁，村民们绞尽脑汁想把他们赶走。一天，消灭魁拔的征兵令突然传到窝窝乡，村民们惊愕之余，村长（李立宏 配音）趁机忽悠蛮大人和蛮吉从军参战。",
    "genres": [
      "Animation",
      "Children",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "儿童",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 50036,
    "runtime": "83 min",
    "releaseDate": "2011-07-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2557868",
    "id": "movie-4812830"
  },
  {
    "sourceId": "25766529",
    "title": "走到尽头",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2014,
    "coverUrl": "",
    "summary": "道貌岸然的水源警局警官高建洙（李善均 饰）正处在人生的危急关头，他的母亲不久前刚刚去世，警局方面因为和同事涉嫌受贿而被检察官调查，回家奔丧的路上速度过快又不慎撞死了人。高左右奔突，疲于奔命，最后以瞒天过海的方式逃过一劫。好不容易渡过危机的高和同事受命追查一个通缉犯，结果却发现对方正是自己撞到的人。雪上加霜的是，偏偏有人目击了车祸过程，并且匿名举报。之后不久，神秘之人（赵镇雄 饰）打来电话，直接道出高建洙撞到通缉犯的隐情。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 49396,
    "runtime": "111 min",
    "releaseDate": "2014-05-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3697626",
    "id": "movie-25766529"
  },
  {
    "sourceId": "1304826",
    "title": "夜半歌声",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p971237356.jpg",
    "summary": "1926年的上海，青年演员宋丹平（张国荣）因主演歌剧迷倒成千上万女性，但对她们他均不动心，单与清纯的富家少女杜云嫣（吴倩莲）坠入爱河。然而因为他的戏子身份，两人恋情曝光后遭到杜云嫣父亲的强行阻止，杜云嫣被禁闭在家，许配给某豪门显贵。与该权贵公子的订婚夜宴上，杜云嫣装病离席私会宋丹平，权贵公子发现后妒火中烧，派人毒打过宋丹平后放火焚烧了剧院，杜云嫣自此成为外人眼中的疯妇，而已成废墟的剧院因为每逢月圆之夜会传来虚无缥渺的歌声，被传是宋丹平的鬼魂作祟。",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "音乐"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆",
      "新加坡"
    ],
    "rating": 7.9,
    "votes": 49353,
    "runtime": "100 min",
    "releaseDate": "1995-07-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0115016",
    "id": "movie-1304826"
  },
  {
    "sourceId": "1306471",
    "title": "八月照相馆",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166541466.jpg",
    "summary": "在汉城郊外，独自一人的青年余永元（韩石圭饰），经营着一家从父亲接过来的小照相馆。他时常带着微笑，坦然面对生活，照相馆里挂着不同的照片。",
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
    "votes": 48889,
    "runtime": "97 min",
    "releaseDate": "1998-01-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0140825",
    "id": "movie-1306471"
  },
  {
    "sourceId": "2275370",
    "title": "战略特勤组",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p498359093.jpg",
    "summary": "前美军特种部队炸弹专家史蒂芬·阿瑟·杨格（麦克·辛 Michael Sheen 饰）正走向一条危险之途，作为穆斯林他不满美国对待阿拉伯国家的政策，于是策划发动恐怖袭击。他宣称在三个城市中分别安放了三颗小型原子弹，美国本土危在旦夕。FBI反恐部门女探员海伦·布洛迪（凯瑞-安·莫斯 Carrie-Anne Moss 饰）负责调查此案，却在紧要关头发现军方以及一个神秘部门介入其中。她的小队连同极度危险的谈判专家亨利·汉弗莱斯（塞缪尔·杰克逊 Samuel L. Jackson 饰）受命审讯史蒂芬。绰号H的亨利手段残忍严酷，加上政府高层的纵容他愈加有恃无恐。海伦反感这样惨无人道的非法手段，她想尽办法争取史蒂芬的信任，终于让他说出其中一颗炸弹的暗访地点。",
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
    "rating": 7.9,
    "votes": 48264,
    "runtime": "97 min",
    "releaseDate": "2011-07-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0914863",
    "id": "movie-2275370"
  },
  {
    "sourceId": "1304026",
    "title": "我要复仇",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p671348030.jpg",
    "summary": "Ryu（申河均饰）是名聋哑青年，自父母去世一直和姐姐相依为命。在特殊学校里，他遇上了装作失聪的女友（裴斗娜饰），二人感情发展不错。可是姐姐却患上了绝症，需要移植肾脏以维持生命。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 46202,
    "runtime": "129 min",
    "releaseDate": "2002-03-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0310775",
    "id": "movie-1304026"
  },
  {
    "sourceId": "2297275",
    "title": "马利和我",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p458579786.jpg",
    "summary": "约翰（欧文·威尔逊 Owen Wilson饰）和珍妮（詹妮弗·安妮斯顿 Jennifer Aniston 饰）是一对正沉浸在幸福中的伉俪，婚后不久，他们前往佛罗里达州的西棕榈海岸的生活，并各自在新闻界找到满意的工作。按照传统的模式，这个已经步入正轨的家庭可以迎接新成员的到来了。不过约翰夫妇似乎对此尚未做好准备，在朋友萨宾斯坦（埃里克·迪恩 Eric Dane 饰）的建议下，约翰决定送给妻子一条黄色的拉布拉多犬，以此作为育儿之前的演练。这条名叫马利的小家伙就这样进入约翰的家中，它调皮捣蛋，不知疲倦，给约翰夫妇惹来不少的麻烦，却也同时成为这个家中不可或缺的一员……",
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
    "rating": 7.9,
    "votes": 44166,
    "runtime": "115 min",
    "releaseDate": "2008-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0822832",
    "id": "movie-2297275"
  },
  {
    "sourceId": "10546747",
    "title": "法官老爹",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "汉克（小罗伯特·唐尼 Robert Downey Jr. 饰）是一名经验丰富的律师，专门帮有钱人收拾他们惹出的烂摊子，在汉克的眼里，没有所谓的正义，有的只是永恒的利益。母亲的意外去世让汉克不得不回到了印第安纳老家，那里是他的故乡，却有着他最不愿意回忆起的往事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 42342,
    "runtime": "141 min",
    "releaseDate": "2014-09-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1872194",
    "id": "movie-10546747"
  },
  {
    "sourceId": "10535562",
    "title": "突袭2：暴徒",
    "countryCode": "ID",
    "countryName": "Indonesia",
    "year": 2014,
    "coverUrl": "",
    "summary": "罪恶横生的雅加达，警察和恶棍沆瀣一气，不分黑白。为了捣毁这根充满恶臭的利益链条，布纳瓦（Cok Simbara 饰）授意刚刚经历了一场血腥恶战的拉玛（伊科·乌艾斯 Iko Uwais 饰）潜入黑帮大佬班坤（Tio Pakusodewo 饰）的巢穴。此时班坤的儿子尤科（Arifin Putra 饰）正在监狱服刑，化名尤达的拉玛“获罪”入狱，并在连翻拼杀中博得尤科的信任。两年后，拉玛出狱加入班坤的组织，此时班坤与日本黑道后藤（远藤宪一 饰）相互勾结，城市另一边又有新崛起的贝乔（Alex Abbad 饰）一派野心勃勃。为了取得霸主地位，暴徒们在城市接连点燃战火，而心高气傲的尤科也试图建立超越父亲的霸业。",
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
      "印度尼西亚",
      "美国"
    ],
    "rating": 7.9,
    "votes": 41261,
    "runtime": "150 min",
    "releaseDate": "2014-01-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2265171",
    "id": "movie-10535562"
  },
  {
    "sourceId": "25757187",
    "title": "我不是王毛",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "少林寺学武归来的狗剩（王大治 饰）暗恋青梅竹马的杏儿（葛晓凤 饰），但穷二代 的他遭到岳丈（罗京民 饰）嫌弃。一没家产继承，二没手艺创业的狗剩只能顶替兄弟从军，以舍身卖命的方式赚取军饷，攒钱提亲。但在从军过程中不仅被同村情敌杨三（郭金杰 饰）设计陷害，还遇到许多离奇波折……",
    "genres": [
      "Comedy",
      "War"
    ],
    "originalGenres": [
      "喜剧",
      "战争"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 39902,
    "runtime": "94 min",
    "releaseDate": "2016-03-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5606614",
    "id": "movie-25757187"
  },
  {
    "sourceId": "2070367",
    "title": "每当变幻时",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p481717329.jpg",
    "summary": "一个草根阶层在街市奋斗的故事。阿妙（杨千嬅）决心解脱，还清父亲欠下的债务后，重新生活。她与另一个“卖鱼佬”（陈奕迅）不打不相识到后来一起为着生活奔波，到后来互生情愫，来来回回，事事变迁过了10年的时间。",
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
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 39404,
    "runtime": "97 min",
    "releaseDate": "2007-06-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1020976",
    "id": "movie-2070367"
  },
  {
    "sourceId": "1578503",
    "title": "美国黑帮",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452255500.jpg",
    "summary": "上世纪70年代，哈莱姆黑人区，弗兰克•卢卡斯（丹泽尔•华盛顿 饰）是黑帮老大约翰逊的司机。约翰逊暴毙后，弗兰克充分利用了这个来之不易的机会，将地下世界的所有权利分配进行了重组，成功上位，接手大佬事业，掌控了毒品交易大权。期间他远赴东南亚金三角走私高纯度海洛因，张罗自己的家族兄弟，集结了一帮为他卖命的手下，一股黑暗势力正在兴起。",
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
    "rating": 7.9,
    "votes": 37228,
    "runtime": "157 min",
    "releaseDate": "2007-11-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0765429",
    "id": "movie-1578503"
  },
  {
    "sourceId": "3819939",
    "title": "极恶非道",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2254632477.jpg",
    "summary": "隶属于关东头号黑帮组织山王会的池元组头目（国村隼 饰）曾在监狱与小组织村濑组头目（石桥莲司 饰）结为兄弟。山王会野心勃勃，时刻觊觎村濑的地盘和毒品生意。在山王会若头加藤（三浦友和 饰）的授意下，池元命令麾下的大友组向村濑组发起挑战。大友（北野武 饰）的猛烈攻击和山王会老大（北村总一郎 饰）的毒辣计谋令村濑节节败退，被迫退休，组内的生意也易作他主。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.9,
    "votes": 36396,
    "runtime": "109 min",
    "releaseDate": "2010-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1462667",
    "id": "movie-3819939"
  },
  {
    "sourceId": "1865561",
    "title": "潜水钟与蝴蝶",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p553666966.jpg",
    "summary": "1995年12月8日，一场突如其来的灾难袭向了家庭事业双得意总编吉恩•多米尼克•鲍比（Mathieu Amalric 饰）。他的脑干突然中风，继而引发极其罕见、概率极低的闭锁症候群。罹患此症的吉恩全身瘫痪，只有左眼尚能自由活动。他形容自己就如同困在潜水钟里一般，身体被紧紧箍住，无法动弹，而心灵却像蝴蝶一样在广阔的天地里自由飞翔。吉恩凭借着左眼和顽强的意志以及语音矫正师的协助，与世界做着无声的交流……",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "法国",
      "美国"
    ],
    "rating": 7.9,
    "votes": 33841,
    "runtime": "112 min",
    "releaseDate": "2007-05-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0401383",
    "id": "movie-1865561"
  },
  {
    "sourceId": "1296769",
    "title": "巴尔扎克与小裁缝",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1119158729.jpg",
    "summary": "七十年代的中国，知青罗明（陈坤 饰）和马剑铃（刘烨 饰）上山下乡来到湘西的一个小山村，接受贫下中农再教育，可是乡下贫乏的生活使他们逐渐感到厌倦。他们与村子里的小裁缝（周迅 饰）相遇，活泼开朗的小裁缝给他们死水般的生活带来了光亮。而他们也发现了一箱所谓的“禁书”，此后，他们生活 中惟一的乐趣便是偷看箱子里的一本本书——巴尔扎克的小说。禁书令少年与小裁缝幻想中的世界豁然开朗，慢慢地两人同时爱上了小裁缝，他们的爱情之火越烧越炽热...",
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
      "中国大陆",
      "法国"
    ],
    "rating": 7.9,
    "votes": 33699,
    "runtime": "110 min",
    "releaseDate": "2002-10-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0291032",
    "id": "movie-1296769"
  },
  {
    "sourceId": "25870236",
    "title": "可爱的你",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "吕慧红（杨千嬅 饰）曾经是名校校长，和丈夫谢永东（古天乐 饰）结婚多年，感情依然恩爱如初，幸福美满的两人即将迎来他们的十周年结婚纪念日。吕慧红早早离开了工作岗位，为了半年之后的环球旅行做起了准备，内心里满怀着期待和盼望。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 33636,
    "runtime": "113 min",
    "releaseDate": "2015-03-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4319698",
    "id": "movie-25870236"
  },
  {
    "sourceId": "2056093",
    "title": "斗士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p839415858.jpg",
    "summary": "迪克•爱克兰德（克里斯蒂安•贝尔 Christian Bale 饰）曾是著名的拳手，却因染上毒瘾，萎靡不振。HBO来拍他的纪录片，忠实地记录了他的生活。迪克把拳击梦寄托在弟弟米奇•沃德（马克•沃尔伯格 Mark Wahlberg 饰）身上，甘心陪练，而母亲爱丽丝（梅丽莎•里奥 Melissa Leo饰）则充当经纪人。米奇曾是金手套选手，但现在只是建筑工人，为了复出而刻苦训练。某天，米奇与莎琳（艾米•亚当斯 Amy Adams 饰）一见钟情。在ESPN的撮合下，米奇与比他重20磅的选手比赛，惨败。在悲愤与无助中，是莎琳劝慰了他，两人开始交往。但家人极为反对。这时，迪克为了给米奇筹钱冒充警察收费被捕入狱，还连累了米奇。从此，兄弟反目，家人支持迪克，莎琳支持弟弟。这个局面一直僵持，直到米奇重新比赛才发生转机……",
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
    "rating": 7.9,
    "votes": 32952,
    "runtime": "115 min",
    "releaseDate": "2010-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0964517",
    "id": "movie-2056093"
  },
  {
    "sourceId": "25834735",
    "title": "神奇队长",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "在太平洋西北部的森林深处，与世隔绝，一位慈爱的父亲全心全意地试图将自己六个年幼的孩子培养成出色的成年人。但当灾难降临，他们被迫离开了自己创建的天堂，开始走向外面的世界。这不仅挑战了他对“家长“这个角色的理解，也让孩子们开始怀疑父亲所教给他们的一切。",
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
      "美国"
    ],
    "rating": 7.9,
    "votes": 31519,
    "runtime": "118 min",
    "releaseDate": "2016-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3553976",
    "id": "movie-25834735"
  },
  {
    "sourceId": "1302054",
    "title": "金枝玉叶2",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p933200616.jpg",
    "summary": "接着上集，林子颖（袁咏仪饰）搬入Sam（张国荣饰）公寓与其同居。可是不过10日，Sam就对这种平淡琐碎的生活产生了厌烦，他希望两人能保持一定的距离。在好友肥婆（曾志伟饰）的建议下，Sam要阿颖以男装重回娱乐圈，本意是要分散她的注意力，不料却获得空前成功，Sam被指为同性恋加吃软饭，感到脸上无光的他开始对阿颖恶声恶气起来。",
    "genres": [
      "Comedy",
      "LGBTQ+"
    ],
    "originalGenres": [
      "喜剧",
      "同性"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 28398,
    "runtime": "107 min",
    "releaseDate": "1996-08-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0116462",
    "id": "movie-1302054"
  },
  {
    "sourceId": "26106958",
    "title": "喊·山",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "封闭的大山里突发了一场意外，腊宏（余皑磊 饰）误踩了韩冲（王紫逸 饰）捕猎设置的炸药不治身亡，留下了哑巴妻子（郎月婷 饰）和一双儿女。众人与韩父（成泰燊 饰）商议决定让韩冲赔钱私了。而哑巴却穿起红衣裳、时哭时笑，完全不在意赔偿的事，大家认为她受刺激疯了，韩冲只能暂时照料母子三人的生活。在相处中，两人的心越走越近，哑巴曲折的身世之谜逐渐揭开。在两人即将开始新生活的时候，腊宏的命案再生波澜，这个紧要的关头，只有哑巴才能说出真相……",
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
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 28069,
    "runtime": "111 min",
    "releaseDate": "2016-08-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4170472",
    "id": "movie-26106958"
  },
  {
    "sourceId": "1418194",
    "title": "雾都孤儿",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p853427696.jpg",
    "summary": "本片根据英国作家狄更斯1838年的名著《雾都孤儿》改编。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "英国",
      "捷克",
      "法国",
      "意大利"
    ],
    "rating": 7.9,
    "votes": 27155,
    "runtime": "130 min",
    "releaseDate": "2005-09-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0380599",
    "id": "movie-1418194"
  },
  {
    "sourceId": "1308750",
    "title": "耶稣受难记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1751985900.jpg",
    "summary": "那是一个遥远而又让人永世难忘的时代，一位圣者将他的名字、他的精神永远镌刻在历史的丰碑之上。备受世人爱戴的上帝之子耶稣（詹姆斯·帕特里克·卡维泽 James Patrick Caviezel 饰）为生活在穷苦和磨难中的人们带去了希望和喜悦，与此同时他的存在也出发了教廷和统治者的利益。他拒绝着魔鬼的引诱，而门徒犹大（卢卡·莱奥内罗 Luca Lionello 饰）则抵抗不出金钱的魅力，他为此出卖了耶稣，其丑态永久留在了“最后的晚餐”之上。在此之后，耶稣被捕，当局者为他戴上荆棘做的王冠，命他背上沉重的十字架，更用带着铁刺的鞭子抽打圣人的肌肤。耶稣痛苦呻吟着，决绝地忍受当下的一切。“仁慈之父，他们什么都不知道。”",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 27105,
    "runtime": "127 min",
    "releaseDate": "2004-03-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0335345",
    "id": "movie-1308750"
  },
  {
    "sourceId": "1293147",
    "title": "辣手神探",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2193604720.jpg",
    "summary": "袁浩云（周润发 饰）是警署侦探，为人正直但行事火爆。他的好友在一次捕匪行动中不幸遇难，令他更加急于报仇。袁正侦探一桩非法军火集团的重案，但为了案件侦破顺利，袁的上司决定让他不再负责此案。此时，袁的女友也离他而去，并对他的敌人产生了感情。这个敌人，正是军火集团里面的头号马仔江浪（梁朝伟 饰）。江郎行事拼命，千方百计博得集团头目信任。袁在追捕中与江相遇，眼看大难临头却发现江放他一马，原来另有内情。",
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
      "中国香港"
    ],
    "rating": 7.9,
    "votes": 25693,
    "runtime": "128 min",
    "releaseDate": "1992-04-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0104684",
    "id": "movie-1293147"
  },
  {
    "sourceId": "3718665",
    "title": "诈欺游戏 电影版",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2243119390.jpg",
    "summary": "大学生神崎直（戸田恵梨香饰）某日不慎被卷入一个名为Liar Game的可怕游戏，游戏方式是对手们相互欺骗来获得巨额奖金。小直信奉着“人性本善论”，游戏过程中，不管遭遇多少谎言和背叛，她都以最诚挚的态度对待每个人。另一参赛者天才诈欺师秋山深一（松田翔太饰）凭借着他的天才智慧脱颖而出，也护佑着小直一次次化险为夷，逃出劫数。",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.9,
    "votes": 25323,
    "runtime": "133 min",
    "releaseDate": "2010-03-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1423953",
    "id": "movie-3718665"
  },
  {
    "sourceId": "1308130",
    "title": "少女小渔",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2454285482.jpg",
    "summary": "为了帮半工半读的男友江伟（庹宗华）分担压力，小渔（刘若英）从中国非法来到纽约做劳工，江伟急于摆脱生活的困境，说服小渔同现居纽约的意大利老头Mario（Daniel J. Travanti）假结婚，以便取得绿卡后自己也能入籍。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.9,
    "votes": 25031,
    "runtime": "104 min",
    "releaseDate": "1995-09-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0114440",
    "id": "movie-1308130"
  },
  {
    "sourceId": "2139766",
    "title": "暖春",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2003,
    "coverUrl": "",
    "summary": "在一个偏远的小山村里，村长的儿子捡来了一个晕倒的女孩，村民们都议论纷纷。宝柱的爹（田成仁 饰）年事已高，他费力的背起这个小女孩回家了。宝柱顿觉没了面子，他认为他的爹不满过门多年的媳妇香草（郝洋 饰）至今都没生下一子半女。女孩叫小花（张妍 饰），受不了家里人的虐待而离家出走。她乞求爷爷能收养她，宝柱的爹疼惜这个女孩，便不管儿子媳妇的不满收留了她。小花的乖巧懂事令爷爷倍感安慰，可是香草却非常眼红，竟然安排骗走小花。小花一直想有个妈妈，她非但没有怨恨叔叔跟婶娘对她的伤害，一次一次用自己的真诚善良感动宝柱跟香草。",
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
    "rating": 7.9,
    "votes": 24414,
    "runtime": "85 min",
    "releaseDate": "2003-03-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1054024",
    "id": "movie-2139766"
  },
  {
    "sourceId": "25794230",
    "title": "吸血鬼生活",
    "countryCode": "NZ",
    "countryName": "New Zealand",
    "year": 2014,
    "coverUrl": "",
    "summary": "讲述三位长生不老的吸血鬼室友应付人类生活的奇葩轶事。Viago，Vladislav以及Daecon三个人是室友 ，作为吸血鬼家族成员，三人都要定期摄取人血，此外还要应付人类社会的繁杂规矩，例如付房租、设法混进夜店、处理室友矛盾等等。惊悚与搞笑并行，极具特点。",
    "genres": [
      "Comedy",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "新西兰",
      "美国"
    ],
    "rating": 7.9,
    "votes": 24088,
    "runtime": "86 min",
    "releaseDate": "2014-02-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3416742",
    "id": "movie-25794230"
  },
  {
    "sourceId": "21348876",
    "title": "偷书贼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "1939年的德国，9岁的小女孩莉赛尔和弟弟被迫送往慕尼黑远郊的寄养家庭。6岁的弟弟不幸死在了路途中。在冷清的葬礼后，莉赛尔意外得到她的第一本书《掘墓人手册》。",
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
      "德国"
    ],
    "rating": 7.9,
    "votes": 24045,
    "runtime": "131 min",
    "releaseDate": "2013-11-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0816442",
    "id": "movie-21348876"
  },
  {
    "sourceId": "1302542",
    "title": "血迷宫",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1984,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2170091759.jpg",
    "summary": "雨夜，雷伊（约翰•盖兹 John Getz 饰）跟艾比（弗兰西斯•麦克多蒙德 Frances McDormand 饰）在酒店偷情。雷伊是酒吧伙计，而艾比则是酒吧老板玛迪（丹•哈达娅 Dan Hedaya 饰）的妻子。玛迪怀疑妻子出轨，因此雇佣侦探维斯调查。知悉真相的玛迪怒不可遏，潜入雷伊家，企图绑走妻子，却在厮打中受伤。玛迪密会维斯，决定花钱做掉二人。维斯潜入雷伊家翻到了艾比的手枪。回来后，维斯给玛迪看了两人被杀的照片，趁玛迪不备，将其击毙。雷伊发现玛迪尸体，误以为艾比所为，因此毁尸灭迹。晚上，雷伊再次回到酒吧，赫然发现了威斯假造的照片。这时，雷伊和艾比都不知道，死亡的威胁正在步步紧逼……",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 23785,
    "runtime": "99 min",
    "releaseDate": "1984-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0086979",
    "id": "movie-1302542"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0318403",
    "id": "movie-1401604"
  },
  {
    "sourceId": "30158971",
    "title": "企鹅公路",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2018,
    "coverUrl": "",
    "summary": "讲述了在一个原本百无聊赖的平凡夏天，一群企鹅凭空出现在远离大海的小镇之上。在目睹了牙医大姐姐所投掷的可乐罐变成企鹅之后，有着强烈好奇心的小少年青山同学决心一探究竟，并展开了一场不可思议而令人难忘的夏季冒险。",
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
    "rating": 7.9,
    "votes": 21203,
    "runtime": "117 min",
    "releaseDate": "2019-05-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8076344",
    "id": "movie-30158971"
  },
  {
    "sourceId": "2381810",
    "title": "伯纳德行动",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p676958835.jpg",
    "summary": "20世纪30年代，二次大战如火如荼。而萨利（Karl Markovics卡尔•马克维斯 饰）凭借一手高超的伪造技巧春风得意，佳肴美女信手拈来，好不自在。但是他的好日子并为持续多久，很快他便因为遭罪被逮捕，随后投入毛特豪森集中营。",
    "genres": [
      "Drama",
      "War",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "战争",
      "犯罪"
    ],
    "originalRegions": [
      "德国",
      "奥地利"
    ],
    "rating": 7.9,
    "votes": 21170,
    "runtime": "98 min",
    "releaseDate": "2009-04-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0813547",
    "id": "movie-2381810"
  },
  {
    "sourceId": "6128922",
    "title": "警戒结束",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "影片以近乎真实的镜头深入犯罪城市最黑暗的角落。",
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
      "美国"
    ],
    "rating": 7.9,
    "votes": 21126,
    "runtime": "109 min",
    "releaseDate": "2012-09-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1855199",
    "id": "movie-6128922"
  },
  {
    "sourceId": "3007825",
    "title": "怎样都行",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1198396862.jpg",
    "summary": "芝加哥大学毕业的物理学家鲍里斯（拉里•戴维 Larry David 饰）自认天才，对世界及人性均极度悲观，在莫名其妙与妻子分手后跳楼自杀未遂，辞去工作搬到纽约曼哈顿城中，靠教小孩象棋为生。某晚在家门口发现了从密西西比州离家出走的天真少女美乐蒂（埃文•雷切尔•伍德 Evan Rachel Wood 饰）。美乐蒂请求鲍里斯收留，极不情愿的鲍里斯只答应让她暂住一晚，却没想到美乐蒂不仅对他的天才极度尊敬，在同龄朋友面前大加赞扬，并对自己渐生爱意。尽管有着四十多岁的年龄差异，二人仍决定结婚。不久美乐蒂的母亲玛丽埃塔（帕特里西娅•克拉克森 Patricia Clarkson 饰）被丈夫抛弃后从密西西比来访，与鲍里斯的朋友凯文（亚当•布鲁克斯  Adam Brooks 饰）一见钟情。凯文帮助玛丽埃塔成为了摄影师，但对鲍里斯不满的玛丽埃塔却想尽办法拆散他与美乐蒂……",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国",
      "法国"
    ],
    "rating": 7.9,
    "votes": 20580,
    "runtime": "92 min",
    "releaseDate": "2009-04-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1178663",
    "id": "movie-3007825"
  },
  {
    "sourceId": "26372545",
    "title": "野马",
    "countryCode": "TR",
    "countryName": "Turkey",
    "year": 2015,
    "coverUrl": "",
    "summary": "初夏，在土耳其北部的一个村庄里，拉蕾和她的四个姐妹走在放学回家的路上，和男孩子们天真烂漫地打闹。然而这种行为却被当成了一桩不检点的丑闻，引发可怕的后果。家庭生活变成监狱，从此告别学校，而是为结婚做准备。五个姐妹都同样向往着自由，她们找到了一种突破这囚牢的方式。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "土耳其",
      "法国",
      "卡塔尔",
      "德国"
    ],
    "rating": 7.9,
    "votes": 19259,
    "runtime": "97 min",
    "releaseDate": "2015-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3966404",
    "id": "movie-26372545"
  },
  {
    "sourceId": "1300930",
    "title": "冰风暴",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p791145802.jpg",
    "summary": "1973年美国康涅狄格州，感恩节快要到来，一场冰风暴也即将到来。平凡乏味的家庭生活使中年夫妻厌倦，丈夫本•胡德（凯文•克莱恩饰）一直在引诱邻居珍妮特•哈珀，而妻子（琼•艾伦饰）对丈夫的谎言也早已不耐烦了。儿子保罗（托比•马奎尔饰）迷恋着学校里最有人缘的那位女生。女儿温迪（克里斯蒂娜•里奇）兴趣于电视里的水门事件听证会。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 18758,
    "runtime": "112 min",
    "releaseDate": "1997-05-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119349",
    "id": "movie-1300930"
  },
  {
    "sourceId": "1397550",
    "title": "我是你爸爸",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2220667165.jpg",
    "summary": "独自抚养儿子长大的马林生（冯小刚 饰）是某机关的工会主席，他装腔作势，自命清高，在家中也趾高气扬，他在儿子马车面前摆足了父亲的谱儿。但是这一切除了让他自我感觉良好外，没有起到任何实质作用。令行禁止的家教无法让儿子臣服，马车始终与之背道而驰。在学校里，他顶撞老师，挤兑同学，三番五次被请家长，马林生因此生头疼不已。在一次失败的暴力家教过后，他想尽办法和儿子搞好关系，然而他也痛苦地认识到：父子之间的鸿沟越来越深……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 18376,
    "runtime": "94 min",
    "releaseDate": "2000-08-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0256630",
    "id": "movie-1397550"
  },
  {
    "sourceId": "1291876",
    "title": "黄土地",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457752524.jpg",
    "summary": "陕北黄土高原上的贫苦女孩翠巧（薛白饰），自小由父亲（谭托饰）作主定下娃娃亲。八路军文工团团员顾青（王学圻饰），为采集民歌来到翠巧家，一段时间后，与翠巧家彼此仿佛自家人般。顾青讲述起延安妇女婚姻自主的情况，翠巧听后，心生向往。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 18350,
    "runtime": "89 min",
    "releaseDate": "1984-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0087433",
    "id": "movie-1291876"
  },
  {
    "sourceId": "1793922",
    "title": "我不在那儿",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p775566271.jpg",
    "summary": "在这部关于鲍勃·迪伦生平的传记电影中，将分别由六位演员扮演鲍勃·迪伦，分别演绎鲍勃在不同时代的生活故事和音乐经历。该片讲述了鲍勃·迪伦早期作为民谣歌手艰苦奋斗的生活，和1960年代初成形的美国民歌界的英雄和知识分子，具有争议的摇滚转型、摩托车意外事故还有后来从公众视线里销声匿迹的隐退，近年来工作重心不放在录制唱片而是举行巡回演唱会上，如名为“永不停止的巡演”（The Never Ending Tour）等等。",
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
      "美国",
      "德国",
      "加拿大"
    ],
    "rating": 7.9,
    "votes": 18303,
    "runtime": "135 min",
    "releaseDate": "2007-11-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0368794",
    "id": "movie-1793922"
  },
  {
    "sourceId": "3194312",
    "title": "情非得已之生存之道",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2198901866.jpg",
    "summary": "本片是一部mocumentary（伪纪录片），受访嘉宾包括台湾立委邱毅，知名艺人蔡康永、小S、Ella等。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.9,
    "votes": 17681,
    "runtime": "96 min",
    "releaseDate": "2008-04-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1239313",
    "id": "movie-3194312"
  },
  {
    "sourceId": "1431960",
    "title": "咕咚来了",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1981,
    "coverUrl": "",
    "summary": "一灰一白一黄三只小兔在湖边捉蝴蝶时，一只木瓜掉进湖里，发出一声“咕咚”，三只小兔子吓了一跳，忙好奇地上前看个究竟，这时，又一声“咕咚”传来，它们立刻吓坏了，边跑边喊：“咕咚来了，快逃呀！”",
    "genres": [
      "Animation",
      "Short",
      "Children"
    ],
    "originalGenres": [
      "动画",
      "短片",
      "儿童"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.9,
    "votes": 16460,
    "runtime": "20 min",
    "releaseDate": "1981-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6851720",
    "id": "movie-1431960"
  },
  {
    "sourceId": "1304490",
    "title": "大毒枭",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1038849611.jpg",
    "summary": "虽然身为建筑工人的儿子，乔治荣格（约翰尼·德普 Johnny Depp 饰）却并不愿被低下的出身所束缚。怀着远大的理想，他来到了加利福尼亚追逐自己的梦想。很快，靠着贩卖大麻，荣格赚到了一笔不义之财，但也因此摊上了牢狱之灾。在狱中，荣格结识了他“同病相怜”的狱友，狱友将他介绍给了大毒枭艾斯科巴（克利夫·柯蒂斯 Cliff Curtis 饰）。",
    "genres": [
      "Drama",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 16443,
    "runtime": "124 min",
    "releaseDate": "2001-03-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0221027",
    "id": "movie-1304490"
  },
  {
    "sourceId": "1304613",
    "title": "吉娅",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1917873110.jpg",
    "summary": "女孩吉亚（安吉丽娜•朱莉 Angelina Jolie 饰）自小就在父母的虐待中长大，不过不幸并没有一直伴随她，在她18岁那年，吉亚时来运转了。18岁那年，吉亚被模特经纪选中，搬到纽约成了一位职业模特。在经纪人的努力运作下，吉亚由一名不见经传的模特，渐渐成长为时装界的代表。吉亚的特殊风格，风靡了世界。然而，成名后的吉亚却感到无比空虚，无处发泄，渐渐的，她开始沉溺于毒品，事业也跟着一落千丈。吉亚最后究竟命运如何？",
    "genres": [
      "Drama",
      "Romance",
      "LGBTQ+",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "同性",
      "传记"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 16024,
    "runtime": "117 min",
    "releaseDate": "1998-01-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0123865",
    "id": "movie-1304613"
  },
  {
    "sourceId": "5250349",
    "title": "冠军",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "",
    "summary": "叱咤马术界的神话级骑手承浩（车太贤 Tae-hyun Cha 饰）曾创下了连赢300场比赛的神话，光环和荣誉围绕的他拥有着光明的未来。然而一次意外的车祸夺去了他心爱妻子的生命，虽然存活下来的他却失去了对生活和骑术的信心，眼睛的视力也渐渐衰退，让他不得不放弃了马术生涯。生活总会发生转折，和女儿艺胜相依为命穷困潦倒的承浩在马场遇上了一匹因为车祸失去幼子并且瘸腿的赛马露娜，相似的经历让承浩重新振作了起来，极力的阻挠下了人们对露娜的捕杀，努力驯服并且着手练习准备比赛。人们对于一个败落的骑手和一匹瘸马取得比赛胜利持有的不屑态度，期间技术上练习的重重困难，都没有打到这一人一马，决心东山再起的承浩更是为了女儿决定放手一搏，全力以赴…",
    "genres": [
      "Drama",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "运动"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.9,
    "votes": 15835,
    "runtime": "122 min",
    "releaseDate": "2011-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2136809",
    "id": "movie-5250349"
  },
  {
    "sourceId": "5387025",
    "title": "厕所女神",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "在一个平凡的小镇，在酒店底层工作的单身妈妈植村洋子（夏川結衣 饰）独自抚养着四个儿女：桃子、光生、美绪和花菜（芦田愛菜 饰）。最小的花菜顽皮可爱，是家中的开心果，不过她也常常觉得自己不受重视，受到委屈后便跑到隔壁的外公（小林稔侍 饰）、外婆（岩下志麻 饰）家里哭鼻子。不久，慈祥的外公去世，外婆的脸上时时挂着落寞的神情。花菜搬到隔壁居住，祖孙俩相依相守，从彼此的身上得到了幸福与快乐。时间倏忽而去，转眼花菜（北乃きい 饰）长大，小小的房子再也无法圈住她的脚步，而外婆则一如既往鼓励着她持续前行……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.9,
    "votes": 15607,
    "runtime": "101 min",
    "releaseDate": "2011-01-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1789089",
    "id": "movie-5387025"
  },
  {
    "sourceId": "25821461",
    "title": "旅行终点",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "影片改编自真人真事，讲述了畅销书《无尽的玩笑》作者大卫·福斯特·华莱士（杰森·席格尔 饰）和《滚石》杂志记者（杰西·艾森伯格 饰）一同踏上新书全国宣传之旅过程中发生的故事。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.9,
    "votes": 13956,
    "runtime": "106 min",
    "releaseDate": "2015-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3416744",
    "id": "movie-25821461"
  },
  {
    "sourceId": "1293603",
    "title": "法国中尉的女人",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1981,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1189962412.jpg",
    "summary": "维多利亚时代的英国小镇莱姆，年轻的绅士查尔斯（杰里米艾恩斯 Jeremy Irons 饰）在海边的悬崖上邂逅了一个神秘黑衣女子（梅丽尔斯特里普 Meryl Streep 饰）。听当地人说，黑衣女子名叫萨拉，因为曾与一名法国中尉有染，所以遭众人非议，被称为“法国中尉的女人”。不过，查尔斯却对这位遗世独立的女人颇感兴趣，尽管他已经有了一个贤淑的未婚妻，并拟定了婚期，但他还是抑制不住萨拉的诱惑。两个人在几次试探后，终于开始幽会。萨拉对查尔斯讲述了她的遭遇和经历，但这一幕却被他人窥视，于是偷偷摸摸的私情面临公诸于众的危机……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.9,
    "votes": 13077,
    "runtime": "124 min",
    "releaseDate": "1981-09-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0082416",
    "id": "movie-1293603"
  },
  {
    "sourceId": "3259973",
    "title": "回来的路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p795122029.jpg",
    "summary": "1939年苏德瓜分波兰后不久，波兰青年维斯切克•乔努斯（吉姆•斯特吉斯 Jim Sturgess ）因其所谓的“反党反斯大林”间谍行为，被送入了西伯利亚的劳动营。其时已是1940年，在严寒的西伯利亚，乔努斯结识了同为政治犯的演员安德烈，后者有一项酝酿多时的逃跑计划，美国老人史密斯（艾德•哈里斯 Ed Harris 饰）、罪犯沃尔卡（柯林•法瑞尔 Colin Farrell 饰）等人陆续加入了他们的小圈子，在一个大雪之夜，乔努斯等七人成功逃出劳动营，他们唯一知道的，是向南前往贝加尔湖，同时躲避无处不在的举报者。一路上有人难耐恶劣的气候死去，在将要抵达贝加尔湖时，一个神秘少女伊莲娜（西尔莎•罗南 Saoirse Ronan 饰）加入了他们，她的加入，令一行人预备穿过蒙古、西藏，翻越喜马拉雅抵达英控印度寻找自由的路程又平添了几许困难……",
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
    "rating": 7.9,
    "votes": 12865,
    "runtime": "133 min",
    "releaseDate": "2010-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1023114",
    "id": "movie-3259973"
  },
  {
    "sourceId": "2133379",
    "title": "42号传奇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1874017507.jpg",
    "summary": "本片改编自著名棒球手Jackie Robinson的事迹。他出生于1919年01月31日，1972年10月24日逝世，是美国职棒大联盟史上第一位黑人球员。1947年04月15日，他穿著42号球衣以先发一垒手的身分於布鲁克林道奇队登场比赛前，黑人球员只允许在自己的黑人联盟（Negro Leagues）打球。虽然当时美国奴隶制度已废除已久，但仍有许多地区依然实行种族隔离政策，无所不在的种族偏见仍强烈左右著社会各个阶层，因此Robinson踏上大联盟舞台的这一天，被公认为美国近代民权运动史上最重要的事件之一。",
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
    "rating": 7.9,
    "votes": 12688,
    "runtime": "128 min",
    "releaseDate": "2013-04-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0453562",
    "id": "movie-2133379"
  },
  {
    "sourceId": "2078906",
    "title": "控制",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503108761.jpg",
    "summary": "18岁的叛逆男孩伊恩（萨姆•赖利 Sam Riley 饰）最喜欢做的事就是把自己关在房间里听着摇滚乐，对着镜子为自己画眼线。在他的眼中，家乡小镇死气沉沉，毫无出路，而喊出人生真谛的摇滚乐才会使得人的青春有着那么点儿乐趣。这日，伊恩前往伦敦观看著名摇滚乐队性枪手的演出。伊恩似乎天生就是为了摇滚活着，他在演出会现场结识了性枪手的三位成员，当时正在寻找主唱的他们认定了伊恩就是最佳人选。于是，男孩伊恩开始了他的摇滚之路。",
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
      "英国",
      "美国",
      "澳大利亚",
      "日本"
    ],
    "rating": 7.9,
    "votes": 12044,
    "runtime": "122 min",
    "releaseDate": "2007-10-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0421082",
    "id": "movie-2078906"
  },
  {
    "sourceId": "4838667",
    "title": "双面劳伦斯",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2012,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1824712403.jpg",
    "summary": "“天空是我们的边界。”弗蕾德（苏珊·克莱门特 Suzanne Clément 饰）这样告诉那些好奇打探她对男友劳伦斯（梅尔维尔·珀波 Melvil Poupaud 饰）变性有什么看法的人。那是1989年，她相信她们这代人已可以接纳变性人了。只是无论弗蕾德还是劳伦 斯，都要用近十年时间发现，真正手足无措的是他们自己。电影以闪回倒叙的手法讲述一个女人同她的变性男友之间跨越世纪的情缘。对劳伦斯来说，变性是生存的前提，是令他在水底闭气30年终于呼吸的第一口氧气。然而劳伦斯只是决定了自己的性别，他没想过变性后的人生，他更没有想过，要用十年来验证和生命中最重要的朋友/恋人——弗蕾德的感情。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "加拿大"
    ],
    "rating": 7.9,
    "votes": 11919,
    "runtime": "168 min",
    "releaseDate": "2012-07-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1650048",
    "id": "movie-4838667"
  },
  {
    "sourceId": "4074744",
    "title": "匿名者",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1627963083.jpg",
    "summary": "在伊丽莎白女王统治英格兰的时代里，政治风云变幻。都铎王朝的成员和一些贵族都在预谋着反叛计划。影片的主角是爱德华·德维尔，他就是著名的牛津伯爵，影片从他的视角展开了叙述。实际上，爱德华·德维尔不仅仅是伊丽莎白女王的乱伦情人，他更是所有莎士比亚作品的执笔人。在影片的讲述中，莎士比亚，不过是一个傀儡而已……",
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
      "英国",
      "德国"
    ],
    "rating": 7.9,
    "votes": 11754,
    "runtime": "130 min",
    "releaseDate": "2011-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1521197",
    "id": "movie-4074744"
  },
  {
    "sourceId": "1308976",
    "title": "水中生活",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1565327013.jpg",
    "summary": "史蒂夫（比尔·默瑞 Bill Murray 饰）是一名海洋纪录片导演，他的作品曾经为许多孩子的童年披上了梦幻的色彩。在一次拍摄中，史蒂夫的老朋友死于美洲虎鲨之口，这让史蒂夫深受打击，他发誓要找到虎鲨，为友报仇，并且将此作为新片的题材。在发布会上，史蒂夫遇见了自称是自己儿子的耐德（欧文·威尔逊 Owen Wilson 饰），他遂邀请这个年轻人加入他的创作团队。史蒂夫要面临的难题很多，资金短缺，和妻子的感情不和，并且，他所拍摄的纪录片已经渐渐的失去了吸引力。",
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
      "美国"
    ],
    "rating": 7.9,
    "votes": 10845,
    "runtime": "119 min",
    "releaseDate": "2004-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0362270",
    "id": "movie-1308976"
  },
  {
    "sourceId": "2973543",
    "title": "合法副本",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p567795093.jpg",
    "summary": "英国作家詹姆斯·米勒（威廉·施梅尔 William Shimell 饰）来到意大利城市托斯卡纳为新作《合法副本》举办讲座。他与读者讨论书中的观点：关于艺术创作真实性的议论是毫无必要的，因为复制品本身即是原作，原作也是由其他作品复制而来。一个做古董买卖的法国女人（朱丽叶· 比诺什 Juliette Binoche 饰）带着11岁的儿子参与了讨论会，想为刚买的书索要签名。中途因为儿子饿了她提前离开，临走时留下了一个电话号码。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "比利时",
      "伊朗"
    ],
    "rating": 7.9,
    "votes": 10607,
    "runtime": "106 min",
    "releaseDate": "2010-05-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1020773",
    "id": "movie-2973543"
  },
  {
    "sourceId": "26421442",
    "title": "滚烫的爱",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "经营公共浴池幸之汤的幸野家被迫歇业，因为男主人一浩（小田切让 饰）在一年前突然下落不明。他的妻子双叶（宫泽理惠 饰）任劳任怨，独自支撑着家里的大小事务，然而渐渐感到力不从心，女儿安澄（杉咲花 饰）在学校内备受欺凌，心情抑郁。经过医生检查，双叶已经到了癌症晚期，上天留给她的时间极其有限。双叶收起泪水，通过私家侦探找回了曾和其他女人同居的丈夫以及一浩的另一个女儿。她鼓励安澄坚强面对学校的磨难，以饱满的精神面对命运加诸于他们身上的一切。双叶接近确立为家人送去最后的温暖……",
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
    "rating": 7.9,
    "votes": 10172,
    "runtime": "125 min",
    "releaseDate": "2016-10-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4778500",
    "id": "movie-26421442"
  },
  {
    "sourceId": "25821673",
    "title": "阿薇尔与虚构世界",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2015,
    "coverUrl": "",
    "summary": "安锡动画节最佳电影，被誉为不会令细路欲求动画公仔，而是令世界更美好的电影。20 世纪中拿破仑五世统治的另一个法国，科学家70 年来不断失踪，飞行、电力甚至电影等伟大发明都成泡影，只有艾菲尔建起了第二座铁塔。煤与蒸气把天空弄得乌烟瘴气，出街要戴防毒面具，大皇宫变大温室。阿菲（玛莉安歌迪雅美丽声演）父母是科学家，也无端失踪，当老猫达尔文病到七彩，阿菲偷偷研制不死药，却因此逃亡历险，牙尖嘴利的达尔文、主意多多的怪爷爷、变节特工祖利亚也一起有难同当。《我在伊朗长大》监制再接再厉，法国漫画家Jacques Tardi 原著，糅合凡尔纳和宫崎骏的灵光，以罕见的怀旧动画风，找回失落的动画年代。",
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
      "法国",
      "比利时",
      "加拿大"
    ],
    "rating": 7.9,
    "votes": 10013,
    "runtime": "105 min",
    "releaseDate": "2015-11-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3422078",
    "id": "movie-25821673"
  },
  {
    "sourceId": "25726614",
    "title": "神奇动物在哪里",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "故事发生在1926年的纽约，彼时，麻鸡们对魔法师的抵制达到了最高峰，由玛丽露（萨曼莎·莫顿 Samantha Morton 饰）所领导的反魔法组织活动频繁。与此同时，街头巷尾之中时时发生的种种灾难意外让魔法世界的存在离暴露仅有一线之隔，整个魔法部陷入了空前紧张的气氛之中。",
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
      "英国",
      "美国"
    ],
    "rating": 7.8,
    "votes": 415491,
    "runtime": "133 min",
    "releaseDate": "2016-11-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3183660",
    "id": "movie-25726614"
  },
  {
    "sourceId": "3005875",
    "title": "2012",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p505238859.jpg",
    "summary": "太阳活动异常，地球内部的能量平衡系统面临崩溃，玛雅人的预言即将实现，人类将遭遇灭顶之灾。各国政府已经联手开始秘密制造方舟，希望能躲过这一浩劫。以写科幻小说谋生的杰克逊（约翰·库萨克 John Cusack 饰）在带孩子们到黄石公园渡周末时发生一连串怪事，而且遇到了神经兮兮的查理（伍迪·哈里森 Woody Harrelson 饰)，查理告诉他世界末日即将来临。伴随着火山爆发，强烈地震以及海啸，杰克逊带领自己的家人驾驶一架临时租来的飞机冲出被死神阴霾瞬间笼罩的城市上空，开始寻找查理口中各国政府正在联合秘密制造的方舟。在生死攸关的时刻，一些伟大的鬼魂将脱颖而出，而一些自私的心灵将无所遁形，当千千万万个生灵通过各种方法来到方舟制造基地之时，方舟有限的容纳数量引发前所未有的恐慌。最终，仅存的人们用互爱和对生命的尊重渡过了难关。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Adventure",
      "Disaster"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "冒险",
      "灾难"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 7.8,
    "votes": 394656,
    "runtime": "158 min",
    "releaseDate": "2009-11-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1190080",
    "id": "movie-3005875"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1343092",
    "id": "movie-3364223"
  },
  {
    "sourceId": "2161696",
    "title": "他其实没那么喜欢你",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477821688.jpg",
    "summary": "GiGi(Ginnifer Goodwin 饰)是个对爱情充满幻想的女孩儿，却在一次次约会中受挫。她的闺蜜Beth（Jennifer Aniston 饰）和Janine（Jennifer Connelly 饰）不断鼓励GiGi在感情中振奋起来，却各自对爱情怀有遗憾。Beth与Neil（Ben Affleck 饰）同居七年，却一直未能等来期待的那枚婚戒。Janine的敏感让她与Ben（Bradley Cooper 饰）的婚姻陷入僵局，而Ben与歌手Anna（Scarlett Johansson 饰）的婚外情更是给他们的婚姻雪上加霜。Anna一边拒绝拥趸Conor（Kevin Connolly 饰）的示好，一边热情似火的期待Ben离开Janine，可是Ben真的能离开Janine来到她的身边么？另一方面Anna的好友Mary（Drew Barrymore 饰）在一个清晨和Conor面对面的不期而遇了。",
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
      "美国",
      "德国",
      "荷兰"
    ],
    "rating": 7.8,
    "votes": 335447,
    "runtime": "129 min",
    "releaseDate": "2009-02-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1001508",
    "id": "movie-2161696"
  },
  {
    "sourceId": "3231742",
    "title": "钢铁侠3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "自纽约事件以来，托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）为前所未有的焦虑症所困扰。他疯狂投入钢铁侠升级版的研发，为此废寝忘食，甚至忽略了女友佩珀·波茨（格温妮斯·帕特洛 Gwyneth Paltrow 饰）的感受。与此同时，臭名昭著的恐怖头目曼达林（本·金斯利 Ben Kingsley 饰）制造了一连串的爆炸袭击事件，托尼当年最忠诚的保镖即在最近的一次袭击中身负重伤。未过多久，托尼、佩珀以及曾与他有过一面之缘的女植物学家玛雅（丽贝卡·豪尔 Rebecca Hall 饰）在家中遭到猛烈的炮火袭击，几乎丧命，而这一切似乎都与22年前那名偶然邂逅的科学家阿尔德里奇·基连（盖·皮尔斯 Guy Pearce 饰）及其终极生物的研究有关。",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "美国",
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 334472,
    "runtime": "134 min",
    "releaseDate": "2013-05-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1300854",
    "id": "movie-3231742"
  },
  {
    "sourceId": "2124724",
    "title": "不能说的秘密",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p917037900.jpg",
    "summary": "叶湘伦（周杰伦 饰）是淡江艺术高中的一名插班生，父亲（黄秋生 饰）是该校的一名教师。这天同学晴依（曾恺玹 饰）带他参观学校，接着他独自来到了学校的旧琴房，本身弹得一首好曲的他被某处传来的一首钢琴曲吸引住了。他来到其中一间旧琴房，遇到了路小雨（桂纶镁 饰），纯纯的爱情故事由此发生了。一直以来，叶湘伦都觉得小雨充满了神秘，却无法进一步了解她。叶湘伦约小雨到琴房见面，叶湘伦以为晴依是小雨，跟晴依接吻时被小雨看到，自此之后叶湘伦就没有再看到小雨。叶湘伦到处寻找小雨，发现了那个小雨所说“不能说的秘密”的全部真相。",
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
      "中国香港",
      "中国台湾"
    ],
    "rating": 7.8,
    "votes": 331663,
    "runtime": "101 min",
    "releaseDate": "2007-07-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1037850",
    "id": "movie-2124724"
  },
  {
    "sourceId": "25798448",
    "title": "解救吾先生",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "春节假期的夜晚，市中心的酒吧一条街繁华喧嚣，香港电影明星吾先生（刘德华 饰）走出酒吧就被冒充警察的张华（王千源 饰）一伙人持枪绑架到一个与世隔绝的郊外小院里。吾先生意外发现绑匪还绑架了另外一个人质小窦（蔡鹭 饰）经过与张华的一番谈判，吾先生将小窦从死亡线拉回。两人开始了争取生机并相依为命的惊险20小时。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 278823,
    "runtime": "106 min",
    "releaseDate": "2015-09-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4819560",
    "id": "movie-25798448"
  },
  {
    "sourceId": "2997076",
    "title": "华尔街之狼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160254162.jpg",
    "summary": "在危机四伏的投资界，掌管史崔顿·奥克蒙公司的乔丹·贝尔福特（莱昂纳多·迪卡普里奥 Leonardo DiCaprio 饰）生活侈靡、实力雄厚。1987年，22岁的乔丹进入罗斯柴尔德公司，从接线员做起，在高级经纪人马克（马修·麦康纳 Matthew McConaughey 饰）指点下，进入了股票经纪人充满毒品和欲望的世界，半年后因“黑色星期一”，乔丹转投靠贩卖“便士股票”的小公司，凭借巧舌如簧获得成功，与邻居唐尼（乔纳·希尔 Jonah Hill 饰）和一班朋友另立门户，游走在灰色地带获利颇丰，获称“华尔街之狼”，然而，FBI已经开始留意他……",
    "genres": [
      "Drama",
      "Comedy",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 213561,
    "runtime": "180 min",
    "releaseDate": "2013-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0993846",
    "id": "movie-2997076"
  },
  {
    "sourceId": "1300300",
    "title": "死神来了",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1332799477.jpg",
    "summary": "剧情惊险恐怖，环环相扣。高中生艾利克斯-伯朗宁（德文•萨瓦 Devon Sawa  饰）与7名同班同学登机前往巴黎。起飞前，他突然预感到恐怖的一幕：飞机将会在空中爆炸。艾利克斯非常惊恐，大喊飞机即将出事，大家要立刻下机，结果混乱中他和其余6名乘客被机组人员赶了出来。但是，被艾利克斯不幸言中，飞机在半空中爆炸，全部人员罹难。",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 7.8,
    "votes": 202398,
    "runtime": "98 min",
    "releaseDate": "2000-03-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0195714",
    "id": "movie-1300300"
  },
  {
    "sourceId": "6537500",
    "title": "速度与激情6",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "俄罗斯莫斯科闹市中央，执行押送任务的军方部队遭到一伙训练有素的匪徒袭击，大战过后的现场惨不忍睹，重要的卫星元件遭到劫持。国际刑警霍布斯（道恩·强森 Dwayne Johnson 饰）查明，包括此案在内的一系列案件均系前特种部队军人欧文·肖（卢克·伊万斯 Luke Evans 饰）所为。为了将这群训练有素、老练凶狠的匪徒绳之于法，他辗转找到隐居世外桃源的多米尼克·托雷多（范·迪塞尔 Vin Diesel 饰）助拳。霍布斯开出的条件令人难以拒绝，他不仅可以将托雷多和布莱恩（保罗·沃克 Paul Walker 饰）一伙从前的犯罪记录一笔勾销，此外欧文一伙中竟然还有本该死去的拉蒂（米歇尔·罗德里格兹 Michelle Rodriguez 饰）。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 200040,
    "runtime": "130 min",
    "releaseDate": "2013-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1905041",
    "id": "movie-6537500"
  },
  {
    "sourceId": "25777636",
    "title": "奇幻森林",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "茂密的原始森林中，生活着人类小孩毛克利（尼尔·塞西 Neel Sethi 饰）。因某种原因他很小就成为了孤儿，黑豹巴希拉（本·金斯利 Ben Kingsley 配音）最先找到了他，并将毛克利托付给狼族的首领阿克拉。从此以后，毛克利以狼的身份在森林里成长起来，和他的兄弟姐妹们学习捕猎和求生技巧。然而并非所有动物都接受毛克利的存在，特别是曾被人类伤害的老虎谢利·可汗（伊德里斯·艾尔巴 Idris Elba 配音），更将男孩视为眼中钉肉中刺。谢利·可汗向狼族发出威胁，众狼们不得不为族群的命运做出考量。毛克利不希望“家人”为难，他选择离开狼群，而唯一陪伴他的巴希拉则希望带着男孩回归人类世界。",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 197940,
    "runtime": "106 min",
    "releaseDate": "2016-04-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3040964",
    "id": "movie-25777636"
  },
  {
    "sourceId": "1302090",
    "title": "逃学威龙",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "",
    "summary": "周星星（周星驰 饰）是飞虎队队长，奉命以卧底的身份到圣育强中学寻找警司于参观时被窃的配枪。周星星就算百般无奈还是接受了任务。他很快适应了学校的生活，功夫高强的他也受到了学校众多学生的拥戴，周星星也顺势调查失枪案件。警队的另一位卧底曹达华（吴孟达 饰）也参与了这个案件，最后也与同学一起合力，帮助周星星破获一踪大型军火贩卖案件。",
    "genres": [
      "Comedy",
      "Action",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 182254,
    "runtime": "100 min",
    "releaseDate": "1991-07-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103045",
    "id": "movie-1302090"
  },
  {
    "sourceId": "1294833",
    "title": "花木兰",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1315561128.jpg",
    "summary": "花木兰是家中的长女，性格爽朗率真，父母极力想帮女儿找到一个好归宿，可是多次努力未果。此时却收到了北方匈奴侵略的消息，朝廷召集各家各户的壮丁。木兰父亲也在名单之内，木兰不忍年迈残疾的父亲征战沙场，决定割掉长发，偷走父亲的盔甲，决定女扮男装代父从军。花家的祖先为了保护木兰，便派出了心地善良的木须从旁帮忙。从军的过程中，木兰凭着坚强意志，通过了一关又一关的艰苦训练，她的精神也感动了所有战友。就在战况告急的时候，她也被发现了女子的身份。她被遗留在雪地中，而最后也是她的及时出现，顺利协助大军击退了匈奴。",
    "genres": [
      "Drama",
      "Animation",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 168193,
    "runtime": "88 min",
    "releaseDate": "1998-06-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120762",
    "id": "movie-1294833"
  },
  {
    "sourceId": "25929151",
    "title": "遇见你之前",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "来自于小镇的年轻女孩小露（艾米莉亚·克拉克 Emilia Clarke 饰）应聘成为了一名看护，她所要照顾的对象，是一位名叫威尔（山姆·克拉弗林 Sam Claflin 饰）的男子。曾经的威尔家境优渥，热爱自由，喜欢到世界各地冒险，然而，一场可怕的车祸粉碎了他的脊椎，使他四肢瘫痪，这也就意味着，威尔漫长的下半生只能在轮椅上度过了。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 166171,
    "runtime": "110 min",
    "releaseDate": "2016-06-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2674426",
    "id": "movie-25929151"
  },
  {
    "sourceId": "1309201",
    "title": "马达加斯加",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "",
    "summary": "在纽约的中央公园里，生活着这样一群无忧无虑的好朋友：狮子亚利克斯、斑马马蒂、长颈鹿麦尔曼以及胖河马格洛丽亚。他们的性格开朗活泼，因此每天的生活都过得丰富多彩。直到有一天，一群流浪的企鹅令斑马马蒂产生了一个大胆的念头，那就是逃出动物园，探寻自己的故乡，寻找新世界。于是，没有通知其他朋友，马蒂悄悄上路了。这下可急坏了朋友们，亚历克斯和其他几个朋友也逃出了中央公园，踏上了寻找马蒂的旅途。",
    "genres": [
      "Comedy",
      "Animation",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 145496,
    "runtime": "86 min",
    "releaseDate": "2005-07-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0351283",
    "id": "movie-1309201"
  },
  {
    "sourceId": "20388223",
    "title": "激战",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "过气香港拳王程辉（张家辉 饰），在拳坛没落后，沉迷赌博，负债累累，为躲避追债人，逃亡澳门。在合租房中，程辉遇到了一对母女，这名母亲（梅婷 饰），患有精神病，小女孩（李馨巧 饰）不但要上学还要照顾妈妈。程辉和小女孩很投缘，两人时常扮成小动物，排演小品，逗小女孩的妈妈开心。",
    "genres": [
      "Drama",
      "Action",
      "Sports"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "运动"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 138998,
    "runtime": "121 min",
    "releaseDate": "2013-08-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3003668",
    "id": "movie-20388223"
  },
  {
    "sourceId": "1304022",
    "title": "大腕",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1276436135.jpg",
    "summary": "尤优（葛优饰）接到个美差，拍一部宣传记录片记录好莱坞大腕导演泰勒（唐纳德•萨瑟兰饰）在中国拍摄影片的工作过程。一开始工作顺利，但随着制片人托尼（保罗•莫索尔斯基饰）的到来，事情起了变化。闲下来的尤优和泰勒、泰勒的助手露茜（关之琳饰）到寺庙游览，三人相处得非常愉快。不料几天后泰勒因心脏病发作，生命垂危，他希望尤优能为自己操办个喜丧葬礼，尤优揽下活儿。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 138008,
    "runtime": "103 min",
    "releaseDate": "2001-12-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0287934",
    "id": "movie-1304022"
  },
  {
    "sourceId": "1306951",
    "title": "鹿鼎记2：神龙教",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "韦小宝（周星驰 饰）要护送建宁公主（邱淑贞 饰）嫁到云南，在途中遇到了独臂神尼的刺杀。小宝被抓走后，借口拜神尼为师，其实是想追求其徒弟阿珂（李嘉欣 饰）。不料韦小宝被神龙教圣女龙儿（林青霞 饰）抓走，想要报了之前在王宫里埋下的仇恨，却没想到遭到了平西王的陷害。韦小宝极力相救，龙儿以身相许更把绝世武功传于韦小宝。韦小宝与公主之间的事情被平西王发现了，平西王更提前造反，小宝将贪图富贵的冯锡范骗到东郊皇陵，没想大那里竟然饰大清龙脉……",
    "genres": [
      "Comedy",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 125752,
    "runtime": "102 min",
    "releaseDate": "1992-09-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0104771",
    "id": "movie-1306951"
  },
  {
    "sourceId": "1309021",
    "title": "康斯坦丁",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p907374250.jpg",
    "summary": "康斯坦丁（奇诺•李维斯 Keanu Reeves 饰）生来就能看出游走在人间的恶魔与天使，这令年幼时的他十分痛苦，曾经自杀想以这种方式结束自己的痛苦。后来获悉了上帝与撒旦之间有过协议，谁也不能直接插足人间，只能间接诱使人们选择天堂与地狱，而自杀者不得上天堂，他便开始利用自己天赋的超能力帮助铲除人间的恶魔，以此祈求获得一张天堂的门票。",
    "genres": [
      "Action",
      "Thriller",
      "Fantasy"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "奇幻"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.8,
    "votes": 122337,
    "runtime": "121 min",
    "releaseDate": "2005-02-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0360486",
    "id": "movie-1309021"
  },
  {
    "sourceId": "1293124",
    "title": "惊情四百年",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455782695.jpg",
    "summary": "这是一部阴森诡异的吸血鬼传说,同时也是一个凄美感伤的爱情故事。",
    "genres": [
      "Romance",
      "Horror"
    ],
    "originalGenres": [
      "爱情",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 115416,
    "runtime": "128 min",
    "releaseDate": "1992-11-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103874",
    "id": "movie-1293124"
  },
  {
    "sourceId": "1307014",
    "title": "不见不散",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2080749733.jpg",
    "summary": "不是冤家不聚头，刘元（葛优 饰）和李清（徐帆 饰）正应了这句话。他们在美国初遇，那时候，李清刚到美国，替一个台湾朋友看屋，就碰上了接待中国剧组的刘元。几番来回，二人有了些粗浅的了解。刘元给了李清一张机票，劝她回国，前途会比这里好。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 112571,
    "runtime": "103 min",
    "releaseDate": "1998-12-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0199354",
    "id": "movie-1307014"
  },
  {
    "sourceId": "1297689",
    "title": "少数派报告",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "随着科技的发展，人类发明了能侦察人的脑电波的“聪明”的机器人――“先知”。“先知”能侦察出人的犯罪企图，所以在罪犯犯罪之前，就已经被犯罪预防组织的警察逮捕并获刑。",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "科幻",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 109790,
    "runtime": "145 min",
    "releaseDate": "2002-06-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0181689",
    "id": "movie-1297689"
  },
  {
    "sourceId": "1421823",
    "title": "娜娜",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2256750022.jpg",
    "summary": "另一个译名是：世上的另一个我。小松奈奈（宫崎葵饰）要去见男朋友，在通往东京的火车上，她遇到了另一个Nana——大崎娜娜（中岛美嘉饰），娜娜希望去东京重组Black Stone乐队。两个nana一见如故，到达了东京有两人再次相遇，并且一同搬进了出租屋707。两人虽然有着同样的名字，却有着迥异的性格，在二人同居的生活期间，她们都受到了感情的创伤，她们在扶持中更加了解彼此，感情也越来越深，一路鼓励对方寻找自己的理想。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 107570,
    "runtime": "113 min",
    "releaseDate": "2005-09-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0471834",
    "id": "movie-1421823"
  },
  {
    "sourceId": "2303163",
    "title": "超级大坏蛋",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p639914227.jpg",
    "summary": "很多年前，银河系另一端的两颗行星被黑洞所吞噬，两个尚在襁褓中的外星孩子乘坐飞行器来到地球。拥有超能力的他们在截然不同的环境中长大，也造就了各自不同的性格和人生走向。长大后，仪表堂堂、正气凌然的成为了保卫城市和平的城市超人（布莱德·彼特 Brad Pitt 配音），而相貌猥琐、蓝皮大头的则化身破坏人民安康的大坏蛋麦克迈（威尔·法瑞尔 Will Ferrell 配音）。他们终日争斗，战争不断。城市超人博物馆开幕当天，麦克迈成功越狱，并劫持了美丽的女主播罗珊（蒂娜·费 Tina Fey 配音）。在天文台的终极决战中，麦克迈成功击败多年的老对手，完全统治了这座城市。",
    "genres": [
      "Comedy",
      "Action",
      "Animation"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "动画"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 102533,
    "runtime": "95 min",
    "releaseDate": "2010-11-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1001526",
    "id": "movie-2303163"
  },
  {
    "sourceId": "22715021",
    "title": "僵尸",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "曾经凭借僵尸片红极一时的动作明星钱小豪（钱小豪 饰）事业和人生跌入谷底，他带着随身家当入住一栋破败老旧的公寓。经保安燕叔（卢海鹏 饰）指引，走进了传说的凶宅2442单元。小豪悬梁自尽，谁知命悬一线之际遭遇猛鬼缠身，多得隐世道长阿友（陈友 饰）出手方捡回一条命。小豪对白发 男孩小白及经常在2442门口窥视并吃祭祀食物的女人杨凤（惠英红 饰）感到好奇，进而从燕叔口中得知了当年曾发生的一起血腥惨案。同大厦的冬叔（吴耀汉 饰）不慎跌死，冬叔的老婆梅姨（鲍起静 饰）求专修邪法的阿九（钟发 饰）帮其还魂，但酿成不可逆转的悲剧。",
    "genres": [
      "Drama",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 94142,
    "runtime": "101 min",
    "releaseDate": "2013-10-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2771800",
    "id": "movie-22715021"
  },
  {
    "sourceId": "3819877",
    "title": "活埋",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2010,
    "coverUrl": "",
    "summary": "在伊拉克的美国承包商保罗（瑞安·雷诺兹 Ryan Reynolds 饰）醒来的时候，发现周围一片黑暗什么都看不见。经过自己的不断摸索，发现手边有一个打火机，一把小刀和一部手机，而自己仿佛是被关在了一口棺材中活埋在了沙漠的某处。他记不清自己如何被关在这里，在这黑暗狭小的环境下，保罗不断尝试与外界联系，想知道自己身上到底发生了什么事情。随着时间的推移，保罗终于知道自己发生了什么。不过，目前最危急的情况是，怎么才能逃出困境。能与外界联系的仅有一部手机，而且电也快耗尽了。如何合理利用这仅有的东西？保罗终于用手机与美军有关部门联系上了，可是自己完全不知道自己所在，怎么办？",
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
      "西班牙",
      "美国",
      "法国"
    ],
    "rating": 7.8,
    "votes": 93867,
    "runtime": "95 min",
    "releaseDate": "2010-10-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1462758",
    "id": "movie-3819877"
  },
  {
    "sourceId": "1945549",
    "title": "超市夜未眠",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2108695419.jpg",
    "summary": "艺术学院学生本（肖恩•比格斯代夫 Sean Biggerstaff 饰 ）在被女友苏芝甩了之后，夜夜无法入睡。在经历了两周的不眠之夜后，本决定到超市去上夜班以打发这额外的8小时。",
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
      "英国"
    ],
    "rating": 7.8,
    "votes": 93463,
    "runtime": "102 min",
    "releaseDate": "2006-09-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0460740",
    "id": "movie-1945549"
  },
  {
    "sourceId": "1291847",
    "title": "十七岁的单车",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "",
    "summary": "十七岁的农村少年阿贵（崔林）在北京找到一份送快递的工作，因为得到许诺，当他赚到六百块时可以拥有公司暂借他用的银色变速越野车，他每日工作都很勤恳，可是就在梦想即将成真时，单车丢了，阿贵陷入绝望。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "中国台湾",
      "法国"
    ],
    "rating": 7.8,
    "votes": 92116,
    "runtime": "113 min",
    "releaseDate": "2001-02-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0276501",
    "id": "movie-1291847"
  },
  {
    "sourceId": "1300069",
    "title": "偷天陷阱",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1670850240.jpg",
    "summary": "一个著名画家在纽约举办了一次画展，不料展出的名画却被盗走，众人怀疑的矛头指向了大盗麦克（肖恩•康纳利 Sean Connery 饰）。因为麦克是一个名贵艺术品的惯偷分子，而这次名画失窃的所有证据，也表明麦克嫌疑最大。",
    "genres": [
      "Action",
      "Romance",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "爱情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "英国",
      "德国"
    ],
    "rating": 7.8,
    "votes": 84099,
    "runtime": "113 min",
    "releaseDate": "1999-04-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0137494",
    "id": "movie-1300069"
  },
  {
    "sourceId": "1293555",
    "title": "电子情书",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p469986867.jpg",
    "summary": "乔（汤姆•汉克斯 Tom Hanks 饰）和凯瑟琳（梅格•瑞安 Meg Ryan 饰）是生意上的竞争对手。凯瑟琳经营着母亲留下来的小书店，那里温馨宜人，已有40年历史，为街坊所熟知。乔却是同街一间大书店的老板，凭着自身优势，一开业就搞低折扣、服务佳的策略。凯瑟琳十分排斥他的入侵，白天二人展开斗法。不料晚上却在互联网的虚拟时间中结为挚友，不知道彼此身份的夜谈，让他们感情迅速升温。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 81038,
    "runtime": "119 min",
    "releaseDate": "1998-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0128853",
    "id": "movie-1293555"
  },
  {
    "sourceId": "1433736",
    "title": "古惑仔之人在江湖",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "",
    "summary": "陈浩南（郑伊健 饰）、山鸡（陈小春 饰）、巢皮等人从少年时代起就是好友。他们无心读书，一心向往江湖生活。终于有江湖人士大佬B收纳为徒，开始闯荡江湖。浩南在一次黑帮仇杀中大展拳脚，杀死了黑道大哥巴闭，因此与另一头目靓坤( 吴镇宇 饰)结下深仇。靓坤设法加害浩南，令浩南兄弟巢皮惨死，而浩南误服药物与山鸡女友发生关系，兄弟间开始积怨。浩南心灰意冷，打算收手，怎料大佬B遭全家灭门，自己经营的店铺被烧毁，靓坤的步步相逼令浩南忍无可忍。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 80439,
    "runtime": "97 min",
    "releaseDate": "1996-01-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0116456",
    "id": "movie-1433736"
  },
  {
    "sourceId": "3036464",
    "title": "闰年",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "城市女孩安娜（艾米·亚当斯 Amy Adams 饰）与男友杰里米（亚当·斯科特 Adam Scott 饰）相恋四年，共同申请购买波士顿顶级豪华社区的高尚住宅。安娜本以为杰里米要向自己求婚，失望后听从父亲建议，飞往爱尔兰首都都柏林，打算依照爱尔兰传统，在闰年的2月29日这天向在都柏林参加医学会议的杰里米求婚。没想到飞机遭遇气流，迫降威尔士加的夫。安娜从加的夫雇船航行至爱尔兰丁格尔半岛，狼狈不堪中投宿当地青年德克兰（马修·古迪 Matthew Goode 饰）的海滨旅店。德克兰同意次日开车带安娜前往都柏林，一路上二人相互看不顺眼，争吵不休。争执中又遭遇车坏、暴雨、误点、假扮夫妻投宿农家等爆笑事件，可这一对冤家却也在不断的摩擦中彼此了解，情愫渐生。2月29日终于到来，安娜的一颗芳心究竟要托与何人呢？",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国",
      "爱尔兰"
    ],
    "rating": 7.8,
    "votes": 78160,
    "runtime": "100 min",
    "releaseDate": "2010-01-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1216492",
    "id": "movie-3036464"
  },
  {
    "sourceId": "2974278",
    "title": "蓝色情人节",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "《蓝色情人节》在分级上经历了一波三折，最终被定为R级。",
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
    "rating": 7.8,
    "votes": 72182,
    "runtime": "112 min",
    "releaseDate": "2010-12-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1120985",
    "id": "movie-2974278"
  },
  {
    "sourceId": "1291573",
    "title": "虫虫危机",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "",
    "summary": "菲力在蚂蚁王国里并不怎么受欢迎，尽管他发明了先进的收割机，然而阴差阳错，他竟然惹了大祸，公主妹妹小不点因此被蝗虫敌人捉去，而且蚂蚁的粮食也受到了蝗虫的威胁。即使菲力救出了小不点，但还是被赶出蚂蚁王国。只有他在外面的世界找到了对付蝗虫的办法，才有可能回到家园。",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 70066,
    "runtime": "95 min",
    "releaseDate": "1998-11-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120623",
    "id": "movie-1291573"
  },
  {
    "sourceId": "3075983",
    "title": "电锯惊魂6",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1080624593.jpg",
    "summary": "“竖锯”约翰•克莱默（Tobin Bell 饰）肉体虽死，但精神长存。这一次，某医疗保险公司的老总威廉•伊斯顿（Peter Outerbridge 饰）成为他狩猎和考验的目标。威廉贪婪狡诈，他发明了一套医保的计算公式，同时凭借爪牙的协助，成功向无数病入膏肓的人们拒保，从中赚取黑心钱财。然而他没有想到，自己有朝一日也要将生命的决定权交与别人手中。他必须按照“竖锯”的游戏规则，小心翼翼寻找逃生之路。",
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
      "美国",
      "加拿大",
      "英国",
      "澳大利亚"
    ],
    "rating": 7.8,
    "votes": 68902,
    "runtime": "90 min",
    "releaseDate": "2009-10-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1233227",
    "id": "movie-3075983"
  },
  {
    "sourceId": "1400868",
    "title": "警察故事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1985,
    "coverUrl": "",
    "summary": "受过特警训练的警察陈家驹（成龙）为人正直办案拼命，时常将女友（张曼玉）忽略。某次围剿行动中陈家驹拘捕了大毒枭朱滔，但因证人（朱滔的秘书）莎莲娜（林青霞）的突然失踪，未能将其绳之于法，陈家驹因此受降职处分。事后含恨在心的朱滔为了报复陈家驹，设计将其诱至囚禁莎莲娜的别墅，并派手下杀死一名警察嫁祸其身，令陈家驹在警方的通辑令下只能四处流亡。",
    "genres": [
      "Comedy",
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 65470,
    "runtime": "101 min",
    "releaseDate": "1985-12-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0089374",
    "id": "movie-1400868"
  },
  {
    "sourceId": "6827727",
    "title": "女性瘾者：第一部",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2013,
    "coverUrl": "",
    "summary": "一个大雪纷飞的寒冷夜晚，学者赛里格曼（斯特兰·斯卡斯加德 Stellan Skarsgård 饰）偶遇了遍体鳞伤躺在雪地里的女子乔伊（夏洛特·甘斯布 Charlotte Gainsbourg 饰），好心的赛里格曼将乔伊接回家里疗养，却没想到，等待着他的，会是一个充满了扭 曲情欲的故事。",
    "genres": [
      "Drama",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "情色"
    ],
    "originalRegions": [
      "丹麦",
      "德国",
      "法国",
      "比利时",
      "英国"
    ],
    "rating": 7.8,
    "votes": 62592,
    "runtime": "118 min",
    "releaseDate": "2013-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1937390",
    "id": "movie-6827727"
  },
  {
    "sourceId": "1300945",
    "title": "云中漫步",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "",
    "summary": "二战结束后，思乡心切的大批美军士兵踏上旧金山港即投进久候的亲人的怀抱，但保罗•萨顿（基努•里维斯）久等仍不见其妻子的踪影，夕阳西沉时，他拖着孤单落寞的身躯走回家中，发现妻子早已改变，她的眼里只剩金钱不再有他。",
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
      "墨西哥"
    ],
    "rating": 7.8,
    "votes": 61725,
    "runtime": "102 min",
    "releaseDate": "1995-08-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0114887",
    "id": "movie-1300945"
  },
  {
    "sourceId": "1294262",
    "title": "的士速递",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529661798.jpg",
    "summary": "丹尼尔（萨米·纳塞利）度过了披萨快递员的最后一天，做起了出租司机。然而在他看来，出租司机并不是他真正的职业，他是名真正的快车手。因为超车被罚，丹尼尔结识了警察艾米（佛瑞德瑞克·迪分索）。艾米考了八次驾照都没通过，工作里捅漏子，情场上没胆量，连烧水都能引起火灾，总之是个把一切都搞砸的笨蛋。",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 7.8,
    "votes": 54267,
    "runtime": "86 min",
    "releaseDate": "1998-04-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0152930",
    "id": "movie-1294262"
  },
  {
    "sourceId": "1292769",
    "title": "世界末日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p686635022.jpg",
    "summary": "发现一颗巨大的陨石正朝地球方向奔来，并将于十八日内撞上地球时，美国太空总署想出阻止该陨石与地球相撞造成人类毁灭的办法：派人登陆陨石的表面，钻洞贯穿至陨石的地心，放入核弹引爆。但这一切必须要在十八日内完成。",
    "genres": [
      "Sci-Fi",
      "Disaster"
    ],
    "originalGenres": [
      "科幻",
      "灾难"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 52942,
    "runtime": "151 min",
    "releaseDate": "1998-07-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120591",
    "id": "movie-1292769"
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
    "runtime": "",
    "releaseDate": "2009-10-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1621642",
    "id": "movie-4022090"
  },
  {
    "sourceId": "1299624",
    "title": "半生缘",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1526661173.jpg",
    "summary": "1930年代的上海，在同一间工厂做工的世钧（黎明）和曼桢（吴倩莲）成为恋人。曼桢早年丧父，姐姐曼璐（梅艳芳）为了养活一家老小，心痛离别恋人去当舞女赚钱，最终嫁给了有妇之夫祝鸿才（葛优）。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 49722,
    "runtime": "126 min",
    "releaseDate": "1997-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0127468",
    "id": "movie-1299624"
  },
  {
    "sourceId": "1301757",
    "title": "狮子王2：辛巴的荣耀",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1838192559.jpg",
    "summary": "辛巴（马修·布罗德里克 Matthew Broderick 配音）的女儿琪拉雅（内芙·坎贝尔 Neve Campbell 配音）调皮好动，喜欢到处奔跑，受辛巴所托看护她的彭彭和丁满实在无计可施。在另一处，刀疤的余党吉娜意图把儿子高孚训练成刀疤的接班人，并蓄谋一场复仇之战， 篡夺荣耀国的统治权。好奇的琪拉雅偷偷去森林外冒险遇到高孚，他们在玩耍时掉进鳄鱼湖。勇敢的琪拉雅救了高孚，两人成为莫逆之交。",
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
      "美国",
      "澳大利亚"
    ],
    "rating": 7.8,
    "votes": 46398,
    "runtime": "81 min",
    "releaseDate": "1998-10-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120131",
    "id": "movie-1301757"
  },
  {
    "sourceId": "1307748",
    "title": "神秘河",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p852967070.jpg",
    "summary": "吉米（西恩•潘 Sean Penn  饰）、戴夫（蒂姆•罗宾斯 Tim Robbins 饰）和西恩（凯文•贝肯 Kevin Bacon 饰）是儿时最要好的玩伴。戴夫10岁那年的一桩事件却改变了单纯美好的童年和友谊。尚且年幼的戴夫被歹徒绑架，对他施以性虐待，这个羞辱的经历从此改变了戴夫的人生。他变得与别人越来越疏离，三人的友谊在慢慢消融。",
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
      "美国",
      "澳大利亚"
    ],
    "rating": 7.8,
    "votes": 46391,
    "runtime": "138 min",
    "releaseDate": "2003-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0327056",
    "id": "movie-1307748"
  },
  {
    "sourceId": "6558801",
    "title": "浪客剑心",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2012,
    "coverUrl": "",
    "summary": "经历了动荡的明治维新，日本迎来新的时代。在明治政府第十个年头，不祥的气息弥漫东京。恶德实业家武田观柳（香川照之 饰）操纵女医师高荷惠（苍井优 饰）研制新型鸦片，公开招揽落魄武夫，大肆收购周边土地，有条不紊地实现他的狼子野心。在此期间，以刽子手拔刀斋之名滥杀无辜的鹈堂刃卫（吉川晃司 饰）引起了前新選组头目斋藤一（江口洋介 饰）的注意，也迫令隐姓埋名多年的拔刀斋本尊绯村剑心（佐藤健 饰）登场。寄居在神谷道场的绯村渐渐融入神谷薫（武井咲 饰）和周边庶民的平和生活之中。然而武田欲壑难平，为了保护善良的人，剑心不得不拔出逆刃刀和相乐佐之助（青木崇高 饰）勇闯虎穴……",
    "genres": [
      "Drama",
      "Action",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 44913,
    "runtime": "134 min",
    "releaseDate": "2012-08-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1979319",
    "id": "movie-6558801"
  },
  {
    "sourceId": "3992381",
    "title": "不可饶恕",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2407347002.jpg",
    "summary": "最近，城市里发生了可怕的杀人事件，一具被切割成6块的女尸的曝光和凶手的逍遥法外引起了社会的恐慌。作为休假的交换条件，搜查科研究员姜民浩（薛景求 饰）接下了这个棘手的案件。行事雷厉风行的他和推理天才闵瑞英（韩惠珍 饰）联手，调查取得了突飞猛进的进展，嫌疑人李圣浩（ 柳承范 饰）的名字渐渐浮出水面。",
    "genres": [
      "Thriller"
    ],
    "originalGenres": [
      "惊悚"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 44496,
    "runtime": "125 min",
    "releaseDate": "2010-01-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1662557",
    "id": "movie-3992381"
  },
  {
    "sourceId": "10792650",
    "title": "女性瘾者：第二部",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2013,
    "coverUrl": "",
    "summary": "故事紧接着上一部，乔伊（夏洛特·甘斯布 Charlotte Gainsbourg 饰）徐徐讲述，从来不知情欲为何物的赛里格曼（斯特兰·斯卡斯加德 Stellan Skarsgård 饰）亦深深着迷。乔伊和杰罗姆（希亚·拉博夫 Shia LaBeouf 饰）有了孩子，但这颗爱情的结晶却并没有让在欲海中越陷越深的乔伊感到快乐，生活的重负让原本相爱的杰罗姆和乔伊渐行渐远。",
    "genres": [
      "Drama",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "情色"
    ],
    "originalRegions": [
      "丹麦",
      "德国",
      "比利时",
      "英国",
      "法国",
      "瑞典"
    ],
    "rating": 7.8,
    "votes": 44046,
    "runtime": "123 min",
    "releaseDate": "2013-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2382009",
    "id": "movie-10792650"
  },
  {
    "sourceId": "1922152",
    "title": "爱情三选一",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2008,
    "coverUrl": "",
    "summary": "威尔（瑞安•雷诺兹 饰）的女儿玛雅（阿比吉尔•布莱斯林 饰）在学校学习了性教育之后，回到家中嚷着要父亲给她讲述关于自己的爱情故事。雅玛更想努力的从故事中找到母亲的形象，虽然她的父母已离婚。",
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
      "英国",
      "美国",
      "法国"
    ],
    "rating": 7.8,
    "votes": 42936,
    "runtime": "112 min",
    "releaseDate": "2008-02-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0832266",
    "id": "movie-1922152"
  },
  {
    "sourceId": "26220717",
    "title": "危机13小时",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "迈克尔·贝导的这部新片根据米切尔·朱可夫（Mitchell Zuckoff）同名小说改编，是一部政治题材的电影。2012年9月11日，在利比亚班加西的美国领事馆前发生一起反美示威事件，入夜后数十名武装分子冲进领事馆，示威演变为暴力冲突，最终导致包括美国大使约翰·克里斯托弗·史蒂文斯（Christopher J. Stevens）在内的四人死亡，这也是33年以来第一个被恐怖分子杀害的美国大使，影片《危机13小时》就是由这一真实事件取材。",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 42775,
    "runtime": "144 min",
    "releaseDate": "2016-01-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4172430",
    "id": "movie-26220717"
  },
  {
    "sourceId": "1299837",
    "title": "虎胆龙威3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1617435860.jpg",
    "summary": "西蒙（杰里米•艾恩斯 饰）是个头脑慎密，心狠手毒的恐怖分子。为了实现一场惊天大阴谋，他先是制造了一起爆炸案。在警方紧张破案之际，他又给警长约翰•麦卡伦（布鲁斯•威利斯 饰）打电话，声称警方必须听从他的一系列指令，否则他将继续在全市搞爆炸活动。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 42690,
    "runtime": "128 min",
    "releaseDate": "1995-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0112864",
    "id": "movie-1299837"
  },
  {
    "sourceId": "26445216",
    "title": "军舰岛",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2017,
    "coverUrl": "",
    "summary": "影片讲述日本殖民时期，400余名朝鲜难民受到强征来到日本军舰岛，试图逃离以免遭到杀害的故事。",
    "genres": [
      "Drama",
      "Action",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "历史"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 42185,
    "runtime": "132 min",
    "releaseDate": "2017-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5969696",
    "id": "movie-26445216"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0107617",
    "id": "movie-1291553"
  },
  {
    "sourceId": "1303010",
    "title": "蒙娜丽莎的微笑",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p701334998.jpg",
    "summary": "1950年代，美国女性的社会地位表面看来有了明显提高，然而在如威斯理般著名的女子大学里，教师们教授学生，仍是一切围绕将来的好姻缘打转，并不鼓励她们主动获取自己感兴趣的知识，也不注重培养她们的心里素质。美丽成熟的凯瑟琳（朱莉娅·罗伯茨 Julia Roberts 饰）大学毕业，怀揣理想和热情来到该学校担 任艺术史教师时，便因想散播自由的种子碰壁连连。",
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
    "rating": 7.8,
    "votes": 41709,
    "runtime": "117 min",
    "releaseDate": "2004-02-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0304415",
    "id": "movie-1303010"
  },
  {
    "sourceId": "2046839",
    "title": "有关时间旅行的热门问题",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1786322276.jpg",
    "summary": "游乐园工作的雷（克里斯•奥多德 Chris O’Dowd 饰）沉迷于时间旅行，在工作中因吓坏小游客而被解雇。朋友皮特（迪恩•里浓斯•凯利 Dean Lennox Kelly 饰）和业余作家托比（马克•伍顿 Marc Wootton 饰）在“恐龙汉堡店”扮恐龙打工，毫无前途。三人晚上来到酒吧打发时光，雷突然遇到一位叫凯西的美女（安娜•法瑞丝 Anna Faris 饰）。凯西自称来自未来，是专门负责寻找时间漏洞的技术员，她来此是拜访名人，因为雷在未来将是“伟大的雷”，并著有《时间旅行手册》。皮特和托比不相信雷遇见了“未来美女”，认为他是异想天开编排电影。皮特去卫生间小解，没曾想竟偶然进入了时间漏洞，出来后发现酒吧全是死人，包括他自己。惊慌四措的皮特将雷和托比也拽入了漏洞，从此开始了一系列前后穿梭的时间旅行冒险。",
    "genres": [
      "Comedy",
      "Sci-Fi"
    ],
    "originalGenres": [
      "喜剧",
      "科幻"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 41589,
    "runtime": "83 min",
    "releaseDate": "2009-04-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0910554",
    "id": "movie-2046839"
  },
  {
    "sourceId": "25862354",
    "title": "局内人",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "电影《局内人》该片是一部犯罪动作片，通过保守派报纸评论员、国会议员、大企业委员、黑社会混混、情报科刑警、纪录片摄影家等人的经历，来揭露韩国社会的腐败和不正之风。李秉宪在片中饰演的安尚久一角原本是作为权利者的“猎狗”干尽坏事，但在自己成为废人之后，为了报仇而成为向着权利者开战的“政治流氓”。曹承佑饰演\"禹长勋检察官\"一角,是个在检察官组织中让踢人就踢人让掩盖罪行就掩盖罪行的腐败政治人的阻击手。白允植饰演的首都日报评论员李强熙。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 41422,
    "runtime": "130 min",
    "releaseDate": "2015-11-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3779028",
    "id": "movie-25862354"
  },
  {
    "sourceId": "1891211",
    "title": "霍顿与无名氏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p890145762.jpg",
    "summary": "在名为欧诺的热带丛林中，小象霍顿（金·凯瑞 Jim Carrey 配音）和朋友们自由自在地生活于此。某天，一粒灰尘闯入霍顿的世界。当灰尘经过他面前时，他仿佛听到微弱的求救声。经过一番手忙脚乱的追逐，霍顿终于在一朵花上找到了那粒灰尘。原来灰尘上有一个“无名镇（呼呼镇）”，当地人民原本生活安泰，无忧无虑，但一枚滑落的果实却将“无名镇”所在的灰尘从苜蓿花蕊上撞向天空。这一变故让即将迎来百年庆典的“无名镇”出现诸多怪事，偶然机缘，小镇镇长麦多多和霍顿间取得了联系。为了让小镇重新回到稳定状态，霍顿决定带着他们回到原有的世界……",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 40150,
    "runtime": "86 min",
    "releaseDate": "2008-03-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0451079",
    "id": "movie-1891211"
  },
  {
    "sourceId": "1302271",
    "title": "的士速递2",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1339506474.jpg",
    "summary": "魔鬼出租车司机达尼埃尔（萨米·纳塞利 Samy Naceri 饰）依旧每天在公路上风驰电掣，这天他因为开车运送临产孕妇而一举夺得赛车冠军，同时也耽搁了和女友莉莉（玛丽昂·歌迪亚 Marion Cotillard 饰）父母见面的约会，但达尼埃尔很快用速度帮助了接见日本防卫部长的未来将军岳父。与此同时，考驾照再次失败的埃米利安（佛瑞德瑞克·迪分索 Frédéric Diefenthal 饰）奉命一同迎接日本部长，与达尼埃尔在机场重逢。警察局长在车队行进途中安排了反恐演习向日本客人展示法国的先进技术和干练部队，而暗处的一股日本黑帮正计划劫持部长。达尼埃尔和埃米利安联手为国家尊严而战……",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 7.8,
    "votes": 37689,
    "runtime": "88 min",
    "releaseDate": "2000-03-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0183869",
    "id": "movie-1302271"
  },
  {
    "sourceId": "5924362",
    "title": "与犯罪的战争：坏家伙的全盛时代",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2012,
    "coverUrl": "",
    "summary": "1990年，韩国总统卢泰愚发起“与犯罪的战争”，在釜山警方的严打中，黑帮幕后人物崔翼贤（崔岷植 饰）因拘禁企业家落网，由此揭开了他游走于黑白两道的传奇故事……1982年，时任监督科公务员的崔翼贤在肥的流油的海关如鱼得水，但上司在遭到举报之际将崔翼贤推出背黑锅。前途晦暗的崔翼贤孤注一掷做起对日的毒品生意，得以结识了同族的黑帮大哥崔炯培（河正宇 饰），以崔氏望族出身自豪的崔翼贤很快与崔炯培结为同盟。二人凭借各自的人脉和暴力，在釜山的黑道世界创出天地。1985年，崔翼贤受企业家所托，入股夜总会与崔炯培里应外合将釜山黑帮头目金坂虎扳倒，崔氏黑帮蒸蒸日上之时，翼贤与炯培的关系，在混乱的时代洪流中出现了裂痕……",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 37259,
    "runtime": "133 min",
    "releaseDate": "2012-02-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2082221",
    "id": "movie-5924362"
  },
  {
    "sourceId": "3059036",
    "title": "亚当",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453719887.jpg",
    "summary": "亚当（休•丹西 Hugh Dancy 饰）是一个声控娃娃的玩具设计师，同时也是一个天文爱好者。由于存在社交恐惧症，他一直独居。某天，公寓里搬来了一个性格开朗的女孩——贝丝（（萝丝•拜恩 Rose Byrne 饰）），她和他在洗衣间相识，并开始了交往。贝丝发现亚当并不谙人情世故。虽然他不懂得约会，却带领她来中央公园看浣熊。慢慢地，两个人产生了感情。贝丝希望亚当进入自己的朋友圈，但是天生对于社交圈的恐惧，让他闹出了不少笑话。与此同时，老板认为亚当的工作效率无法适应竞争的环境，将他解雇。于是，贝丝开始帮助亚当克服心理恐惧，应对面试。两人的感情也随之加温。正在此时，贝丝的父亲突然卷入了一场诉讼案，并面临牢狱之灾，这时亚当却因为贝丝善意的欺骗而大发雷霆。口角时，两人失去了理智，这场恋爱岌岌可危……",
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
    "rating": 7.8,
    "votes": 36235,
    "runtime": "99 min",
    "releaseDate": "2009-08-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1185836",
    "id": "movie-3059036"
  },
  {
    "sourceId": "1296359",
    "title": "我恨你的十件事",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1759336811.jpg",
    "summary": "比安卡（Larisa Oleynik饰）是全校公认的甜心宝贝，可事实上，她甚至未有过一次约会——比安卡的老爸对女儿的管教极尽苛刻，男生们只能对她望而却步。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 35758,
    "runtime": "97 min",
    "releaseDate": "1999-03-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0147800",
    "id": "movie-1296359"
  },
  {
    "sourceId": "1307702",
    "title": "和你在一起",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2394990566.jpg",
    "summary": "普通百姓刘成（刘佩琦）为让从小拉小提琴的儿子刘小春（唐韵）的小提琴技艺有较大提升，带着他从江南来到北京，拜了性格怪异的江老师（王志文）为师，在学习过程中，刘小春逐渐与江老师成为忘年好友。风情万种的莉莉（陈红）与刘成父子俩住得很近，她让刘小春逐渐萌发生出莫名的爱恋。",
    "genres": [
      "Drama",
      "Music"
    ],
    "originalGenres": [
      "剧情",
      "音乐"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 35126,
    "runtime": "116 min",
    "releaseDate": "2002-09-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0332639",
    "id": "movie-1307702"
  },
  {
    "sourceId": "3819871",
    "title": "蒂莫西的奇异生活",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1154087626.jpg",
    "summary": "吉姆·格林（乔尔·埃哲顿 Joel Edgerton 饰）和辛蒂（詹妮弗·加纳 Jennifer Garner 饰）是一对婚后多年的夫妻，他们琴瑟合璧，生活无忧，美中不足的是一直没有小天使降临夫妻之间，虽然尝试各种办法，可最终一无所获，这也成为夫妻俩心中的隐痛。这一晚，格林夫妻将心中的渴望写在纸上，埋在院子里。是夜，狂风暴雨席不期而至。而伴随着大雨来到格林夫妻家中的，竟是一个满身泥泞、乖巧伶俐的十几岁小男孩。男孩自称蒂莫西（卡梅隆·CJ·亚当斯 Cameron 'CJ' Adams 饰），与格林夫妇为孩子预先取的名字一样。",
    "genres": [
      "Drama",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "家庭",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 34976,
    "runtime": "105 min",
    "releaseDate": "2012-08-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1462769",
    "id": "movie-3819871"
  },
  {
    "sourceId": "7051357",
    "title": "魁拔之大战元泱界",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "每隔333年，强大而神秘的生物魁拔诞生天地之间，引起元泱界莫大的灾难。第六代魁拔魁拔蛮吉（刘婧荦 配音）悄然逃过一劫，而今随着蛮小满（王凯 配音）朝着最伟大妖侠的道路上不断前进。他们成功登上开往涡流岛的曲境一号，随着众多神圣联军战士逼近那个危险所在，指望打败魁拔建功立业。与此同时，天界魁拔司主神镜心（刘露 配音）准确测出新一代魁拔的正确方位。为了给这个难缠的对手以致命一击，她不惜使用牺牲地界生物的光势。",
    "genres": [
      "Action",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 34272,
    "runtime": "83 min",
    "releaseDate": "2013-05-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3279464",
    "id": "movie-7051357"
  },
  {
    "sourceId": "1299292",
    "title": "八美图",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p619021003.jpg",
    "summary": "圣诞节前夕，一个富裕人家正在忙着筹备圣诞。窗外白雪皑皑，屋里迎来了女儿大学归来。一家人沉浸在圣诞前团聚的气氛。",
    "genres": [
      "Comedy",
      "Mystery",
      "Musical"
    ],
    "originalGenres": [
      "喜剧",
      "悬疑",
      "歌舞"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 7.8,
    "votes": 34188,
    "runtime": "111 min",
    "releaseDate": "2002-02-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0283832",
    "id": "movie-1299292"
  },
  {
    "sourceId": "1292780",
    "title": "时光倒流七十年",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1980,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1073956789.jpg",
    "summary": "大学生理查德（克里斯托弗·里夫 饰）在毕业典礼上遇到了一个老妇人，老妇人送给他一只金表，并表示等他回来。虽然他感到非常奇怪，但事情也不了了之了。8年后他成为一个著名的剧本作家，他为了寻找灵感来到了一家酒店度假，酒店历史悠久，在历史陈列室内他被一张女明星Elise（简·西摩尔 饰）的照片深深吸引住了，并认得她就是送金表的老妇人。原来老妇人在送于他金表的晚上已经离世了。而他通过梦境，回到时光倒流的70年前，发现自己竟与这名女明星又有一段美丽的爱情故事",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 33701,
    "runtime": "103 min",
    "releaseDate": "1980-10-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0081534",
    "id": "movie-1292780"
  },
  {
    "sourceId": "2996790",
    "title": "林肯律师",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p846769692.jpg",
    "summary": "故事讲述洛杉矶刑事辩护律师米奇·豪勒（马修·麦康纳 Matthew McConaughey 饰），绰号“林肯律师”，经手的都是些处于社会底层的客户。他善恶分明、正直守信，并非贪财小人。然而这一次，豪勒的辩护对像是年轻富有的房地产开发商路易斯-罗莱特（瑞恩·菲利普 Rya n Phillippe 饰）。罗莱特受到的指控是殴打并企图强奸应招女郎瑞琪（玛格丽塔-莱维瓦 Margarita Levieva 饰），但罗莱特声称自己是无辜的，有人栽赃陷害他。罗莱特的母亲愿意不惜重金证明自己心爱儿子的清白。为了解案情的细节，豪勒及其私人调查员对此案进行了调查。他们最初获得的证据证明罗莱特似乎确实无辜，这个案子能够轻而易举地打赢，豪勒也能够轻松地获得一笔高额的律师费。然而，一个偶然的机会使豪勒发现，此案与他曾经接手的另一桩强奸杀人案有诸多相似之处……",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 33588,
    "runtime": "118 min",
    "releaseDate": "2012-08-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1189340",
    "id": "movie-2996790"
  },
  {
    "sourceId": "24845115",
    "title": "浪客剑心：京都大火篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "进入了明治时代，曾经的“刽子手拔刀斋”绯村剑心（佐藤健 饰）已经习惯了神谷道场的安宁生活。谁知就在这一天，倒幕战争时的旧友——号称维新三杰之一的大久保利通（宫泽和史 饰）将其请去。原来继承了剑心刽子手身份的志志雄真实（藤原龙也 饰）当年被新政府背叛，侥幸活下来的志志雄正秘密筹措称霸日本的可怕计划。大久保死后，深感背负不可推卸责任的剑心只身上路，在途中不仅偶遇京都女忍卷町操（土屋太凤 饰），还在新月村和志志雄有了第一次的遭遇。与此同时，相乐左之助（青木崇高 饰）、神谷薫（武井咲 饰）、明神弥彦（大八木凯斗 饰）、斋藤一（江口洋介 饰）也相继赶往京都。阴云密布的时代，酝酿着一场席卷全国的风暴……",
    "genres": [
      "Action",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "古装"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 30573,
    "runtime": "138 min",
    "releaseDate": "2014-08-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3029558",
    "id": "movie-24845115"
  },
  {
    "sourceId": "1394424",
    "title": "弓",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2197627924.jpg",
    "summary": "在一望无际的大海上有两艘渔船，主人是一位年过花甲的老人（全讼挽饰），他依靠两艘船谋生，陆上的人们来这边钓鱼或看风景。老人和一位少女（韩业云饰）一起生活，她是10年前老人在岸上捡到的，此后少女再没有上过陆地。老人等着少女年满17岁时就会与之结婚。",
    "genres": [
      "Drama",
      "Romance",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "情色"
    ],
    "originalRegions": [
      "韩国",
      "日本"
    ],
    "rating": 7.8,
    "votes": 29104,
    "runtime": "90 min",
    "releaseDate": "2005-05-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0456470",
    "id": "movie-1394424"
  },
  {
    "sourceId": "25839662",
    "title": "45周年",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2015,
    "coverUrl": "",
    "summary": "就在凯特（Kate）忙于筹备45周年的结婚纪念日之时，她丈夫杰夫（Geoff）突然接到了一条把他的思绪带回过去的消息，他50年前在瑞士阿尔卑斯山因意外丧生的女友的遗体被找到了。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 28067,
    "runtime": "95 min",
    "releaseDate": "2015-02-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3544082",
    "id": "movie-25839662"
  },
  {
    "sourceId": "1300802",
    "title": "玛戈王后",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2196127498.jpg",
    "summary": "十六世纪后半叶，法国处于“胡格诺战争”时期，天主教和新教残酷战争不断。而宫廷内部也奢华淫靡，腐败不堪。为了平息连年内战，信仰天主教的法国宫廷决定将玛格丽特公主（Isabelle Adjani 伊莎贝尔·阿佳妮 饰）嫁给新教徒的首领纳瓦尔国王亨利（Daniel Auteu il 丹尼尔·奥德耶 饰）。",
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
      "法国",
      "德国",
      "意大利"
    ],
    "rating": 7.8,
    "votes": 27916,
    "runtime": "162 min",
    "releaseDate": "1994-05-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110963",
    "id": "movie-1300802"
  },
  {
    "sourceId": "1438338",
    "title": "慕尼黑",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504312826.jpg",
    "summary": "这是一部关于政治、复仇的真实的电影。1972年在联邦德国举办的第20届奥运会上，巴勒斯坦的极端恐怖组织“黑色九月”闯进了奥运村绑架了11名以色列运动员，以此要挟以色列释放被关押的该组织成员。",
    "genres": [
      "Drama",
      "Thriller",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "历史"
    ],
    "originalRegions": [
      "美国",
      "加拿大",
      "法国"
    ],
    "rating": 7.8,
    "votes": 25545,
    "runtime": "164 min",
    "releaseDate": "2005-12-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0408306",
    "id": "movie-1438338"
  },
  {
    "sourceId": "1783462",
    "title": "奇幻人生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1035864626.jpg",
    "summary": "他——Harold Crick（威尔·法瑞尔 Will Ferrell 饰）是一个国税局的审计员，每天过着极具规律性的单调生活，一把旁白的声音却打破了这一切——他发现耳边常常响起某个人的说话，她能洞悉自己每日的生活规律，甚至能预测他不久将来的死去，他深深惶恐。",
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
    "rating": 7.8,
    "votes": 25425,
    "runtime": "113 min",
    "releaseDate": "2006-11-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0420223",
    "id": "movie-1783462"
  },
  {
    "sourceId": "1588945",
    "title": "93航班",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p455571064.jpg",
    "summary": "用另一个角度，另一段历史，来怀缅9•11，来激励人们继续齐心向前。",
    "genres": [
      "Drama",
      "History",
      "Crime",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "犯罪",
      "灾难"
    ],
    "originalRegions": [
      "法国",
      "英国",
      "美国"
    ],
    "rating": 7.8,
    "votes": 24564,
    "runtime": "111 min",
    "releaseDate": "2006-04-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0475276",
    "id": "movie-1588945"
  },
  {
    "sourceId": "1482090",
    "title": "刑房",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2167803400.jpg",
    "summary": "本片由两部电影组成，分别为昆汀·塔伦蒂诺（Quentin Tarantino）所拍的《死亡证据》，以及罗伯特·罗德里格兹（Robert Rodriguez）所拍的《恐怖星球》。",
    "genres": [
      "Action",
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 24437,
    "runtime": "191 min",
    "releaseDate": "2007-04-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0462322",
    "id": "movie-1482090"
  },
  {
    "sourceId": "4290704",
    "title": "月代头布丁",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p638828049.jpg",
    "summary": "33岁的游佐弘子（友阪理惠 饰）是一名终日奔波忙碌的职场女性，因为向往工作，两年前她和丈夫离婚，独自拉扯着6岁的儿子友也，日夜不得闲暇。某天，母子二人遭遇了一名武士打扮的奇怪男子，他自称中岛安兵卫（錦戸亮 饰），是效力于德川家族的幕臣，不知因何种原因穿越到了现代社会。因无可依靠，安兵卫借住在游佐母子家中。古现代的价值观由此发生激烈碰撞，也闹出不少的笑话。大男子主义的安兵卫渐渐放下武士的高贵身段，担当起家庭妇男的角色，并且和母子的关系日渐融洽，也最终在这个陌生的社会取得了可喜的成就……",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 23439,
    "runtime": "108 min",
    "releaseDate": "2010-07-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1595354",
    "id": "movie-4290704"
  },
  {
    "sourceId": "1307749",
    "title": "怒海争锋",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "",
    "summary": "1805年，拿破仑在欧陆纵横，而海战方面，只有英国舰队可以与之匹敌。英军杰克（Russell Crowe 饰）船长与自己的军舰惊奇号受命拦截法方军舰地狱号进入南太平洋，两舰在巴西北海岸初次相遇，地狱号凭借优势火力与厚甲将惊奇号击败，杰克依靠浓雾天气勉强得脱。虽然初战不利，但曾经跟随纳尔逊将军的杰克对自己的军舰充满信心，拒绝返航并着手研究对手。不久两舰再次相遇，杰克使用诱饵战术扭转了局势，一路追踪到暴风雨肆虐的合恩角，杰克的执着引起好友船医斯蒂芬的反对，但是杰克拥有一支精英的团队，在种种不利之中，船员们将针对性的训练坚持了下来。斯蒂芬意外受伤让杰克停止追逐，暂留小岛休整，此行意外的为杰克提供了战斗灵感，很快地狱号再次出现，两舰终于迎来了宿命般的对决……",
    "genres": [
      "Drama",
      "Action",
      "War",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "战争",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 23102,
    "runtime": "138 min",
    "releaseDate": "2004-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0311113",
    "id": "movie-1307749"
  },
  {
    "sourceId": "1914787",
    "title": "丑闻笔记",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1127807830.jpg",
    "summary": "希芭·哈特(凯特·布兰切特 饰)是学校里新来的美术老师，她年轻美丽，气质高雅。老教师芭芭拉(朱迪·丹奇 饰)悄悄地关注起希芭，并渐渐和希芭结成好友。希芭把芭芭拉当成密友，向她倾诉年迈丈夫的无趣，女儿的叛逆和儿子的低能。两个女人结为看起来温馨又和谐的忘年之交。",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "originalGenres": [
      "剧情",
      "惊悚"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 22734,
    "runtime": "92 min",
    "releaseDate": "2006-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0465551",
    "id": "movie-1914787"
  },
  {
    "sourceId": "1292781",
    "title": "细细的红线",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511261922.jpg",
    "summary": "1942年，第二次世界大战已进入白热化阶段。南太平洋上，日美双方展开激烈角逐，人性的底线在炮火声中被彻底摧毁。隶属美军的“查理步兵连”接到一项艰巨的任务，他们受命登陆瓜达康纳尔岛（Guadalcanal），夺回日军占领的210阵地。日军占尽地利优势，防守固若金汤。然军令 如山，即使刀山火海查理步兵连的将士们也要奋勇向前。这群年轻的小伙子为了所谓的正义投入这个残酷的血肉战场……",
    "genres": [
      "Drama",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 21398,
    "runtime": "170 min",
    "releaseDate": "1998-12-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120863",
    "id": "movie-1292781"
  },
  {
    "sourceId": "26894602",
    "title": "冷战",
    "countryCode": "PL",
    "countryName": "Poland",
    "year": 2018,
    "coverUrl": "",
    "summary": "《冷战》讲述了一对背景、性格截然不同的年轻人之间炽热的爱情故事。1950年代冷战期间，在斯大林统治下的波兰和自由放纵的巴黎，一位追求自由的音乐家和一位满怀激情的年轻女歌手坠入了爱河。两个人毫不般配，却命定纠缠。影片以 50 年代冷战期间的波兰、柏林、南斯拉夫和巴黎为背景，描绘了艰难时代中不可能的爱情故事。",
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
      "波兰",
      "法国",
      "英国"
    ],
    "rating": 7.8,
    "votes": 20649,
    "runtime": "88 min",
    "releaseDate": "2018-05-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6543652",
    "id": "movie-26894602"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0368909",
    "id": "movie-1308713"
  },
  {
    "sourceId": "4117302",
    "title": "倾国之恋",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2011,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1597350768.jpg",
    "summary": "故事取材自辛普生夫人沃利斯生平事迹，是麦当娜继2008年《下流与智慧》之后执导的第二部影片，制片成本几乎都是她一个人自掏腰包，影片的总投入达到了3600万美元。",
    "genres": [
      "Drama",
      "Romance",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 20561,
    "runtime": "119 min",
    "releaseDate": "2011-09-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1536048",
    "id": "movie-4117302"
  },
  {
    "sourceId": "1292541",
    "title": "光猪六壮士",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1495415694.jpg",
    "summary": "下岗恐怕不仅仅是中国工人面对的问题，下岗了怎么办？英国人用他们的幽默给我们上了一课。这天，刚下岗的钢铁工人盖茨（罗伯特•卡莱尔 Robert Carlyle 饰）和戴夫（马克•艾迪 Mark Addy 饰）遇上了一个同病相怜的兄弟――正在自杀的龙珀（史提夫•惠森 Ste ve Huison 饰），二人慌忙救下了他。为了今后的出路，三人绞尽脑汁。最终，他们想出了一个近乎疯狂的主意。",
    "genres": [
      "Comedy",
      "Music"
    ],
    "originalGenres": [
      "喜剧",
      "音乐"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.8,
    "votes": 20102,
    "runtime": "91 min",
    "releaseDate": "1997-08-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119164",
    "id": "movie-1292541"
  },
  {
    "sourceId": "3794489",
    "title": "名侦探柯南OVA9：十年后的陌生人",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2009,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2204332137.jpg",
    "summary": "某天，柯南因感冒在家休息，期间接到了灰原哀的电话。原来灰原做出了APTX-4869的最新解药，虽然只是试制品，但一心恢复工藤新一身份的柯南仍然迫不及待赶往阿笠博士的实验室。服药后，新一终于回到原有状态，不过周遭的一切却似乎有所改变：博士院子里的树长高了，出现许多新的建筑物，体育老师变得苍老，班里的同学全是陌生面孔，甚至元太、光彦和步美也都变成高中生的模样。",
    "genres": [
      "Animation"
    ],
    "originalGenres": [
      "动画"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 19993,
    "runtime": "22 min",
    "releaseDate": "2009-06-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-3794489"
  },
  {
    "sourceId": "1306663",
    "title": "朋友",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1198614808.jpg",
    "summary": "1978年的釜山，东洙（张东健饰）是─贫穷家庭的孩子，俊硕（刘五性饰）则─黑社会团体老大的儿子，特别勤奋的山泰和特别能言善的容贺。山泰常考全校第一，而东洙和俊硕却是到处惹麻烦的问题份子，但四个人却是好朋友。后来升入中学的东洙和俊硕，因为替山泰出头而被学校开除。",
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
      "韩国"
    ],
    "rating": 7.8,
    "votes": 19734,
    "runtime": "113 min",
    "releaseDate": "2001-03-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0281718",
    "id": "movie-1306663"
  },
  {
    "sourceId": "1296370",
    "title": "爱情万岁",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2040684308.jpg",
    "summary": "骨灰盒推销员小康（李康生）结束心力交瘁的一日后，悄悄潜入一幢公寓里的一间房，没想这间房里，还会潜入一个会是其欲望（投射）对象的地摊小贩（陈昭荣）。房子的暂时主人是一个售楼小姐（杨贵媚），她和小康性向虽然有异，却同样是没有爱情（情感）温暖心灵的人。",
    "genres": [
      "Drama",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "同性"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.8,
    "votes": 19702,
    "runtime": "118 min",
    "releaseDate": "1994-09-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0109066",
    "id": "movie-1296370"
  },
  {
    "sourceId": "1296824",
    "title": "简爱",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1943,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1590429120.jpg",
    "summary": "孤儿简·爱从小寄居在舅母家，受尽舅妈极其表弟的折磨，后被送往由布洛克赫斯特先生所开的教会学校。在学校里，简·爱仍遭歧视，但她认识了同学海伦，第一次感受到友情的温暖。海伦却因违抗布洛克赫斯特先生遭受惩罚染病去世。孤独的简·爱（琼·芳登 Joan Fontaine饰）成年后离开学校来到桑菲尔德，给爱德华先生的私生女阿黛勒当家庭教师。一个夜晚，她在郊外巧遇了远行归家的爱德华先生（奥逊·威尔斯 Orson Welles饰）。经过一系列交流后两人的感情迅速升温，陷入了恋爱中。就在他们两人准备成婚之际，一个真相却打断了他们的幸福。远离了爱德华的简·爱回家探望了濒死的舅妈，同时收到了爱德华遭受噩耗的消息，最后这两个彼此深爱的不幸之人能否终成眷属呢？",
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
    "rating": 7.8,
    "votes": 19684,
    "runtime": "97 min",
    "releaseDate": "1943-12-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0036969",
    "id": "movie-1296824"
  },
  {
    "sourceId": "1771061",
    "title": "不再沉默",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p802405794.jpg",
    "summary": "一个派对过后，少女Melinda（克里斯汀·斯图尔特 Kristen Stewart 饰）开始变得沉默寡言。新学期开始，她认识了新同学Heather（Allison Siko 饰），尽管她并不喜欢Heather，但她却只能和Heather一起。她原先的那帮好朋友们都认为她在派对上的报警是对他们的一种背叛而疏远她，尤其是她原来最好的朋友Rachel（Hallee Hirsh 饰）也不再和她有来往，整天和她的新男友Andy（Eric Lively 饰)混在一起。语文课上，老师用她蹩脚的英文念她们的名字；生物课上，她和Dave（迈克尔·安格拉诺 Michael Angarano 饰）分在一组；美术课上，老师让她好好学画一棵树；历史课上，老师是个专横的民族主义者......她的世界因为回忆和现实而变得压抑不堪，她开始尝试画一些奇怪的东西。她终于下定决心把事情的真相说出来，到底在派对上她和Andy之间发生了什么事，到底她为什么要报警......她不再沉默。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.8,
    "votes": 19209,
    "runtime": "92 min",
    "releaseDate": "2005-05-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0378793",
    "id": "movie-1771061"
  },
  {
    "sourceId": "1395231",
    "title": "马粥街残酷史",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160809781.jpg",
    "summary": "本来是一名模范生的铉洙（权相佑 饰）来到一所出了名黑暗的学生，对校内的情况十分不满，校内的教师对学生十分不尊重，出口辱骂之余还对学生拳打脚踢。铉洙是校内唯一一名读书的学生，也没有其他朋友。但他不久后却跟一名不良学生金佑植（李正振 饰）成为了好朋友，两个男生更同时喜欢上一名叫江恩珠（韩佳人 饰）。",
    "genres": [
      "Drama",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "历史"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 19066,
    "runtime": "116 min",
    "releaseDate": "2004-01-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0390205",
    "id": "movie-1395231"
  },
  {
    "sourceId": "3269018",
    "title": "说来有点可笑",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p595865058.jpg",
    "summary": "16岁的男孩Craig克雷格（凯尔·吉克瑞斯特 饰）经常会想象自己的死亡，在尝试多种药物皆没有效果后，自己来到精神病院接受治疗。在那里，他和一个自杀了几次却没能死掉的神神叨叨的Bobby鲍比（扎克·加利费安纳基斯 饰）成了朋友，还认识了一个特别的女孩Noelle，当然还有许许多多的“非正常人”。他们几个在医院的生活中，渐渐寻回了生命的意义，尤其是鲍勃·迪伦的歌词“He Not Busy Being Born Is Busy Dying”给了他们巨大的力量，让他们重新拥有勇气去面对生活的压力。最后，出院的克雷格是否能让他原本阴霾密布的生活重见阳光，他又将通过怎样的方式找回轻松充实的生活？",
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
    "rating": 7.8,
    "votes": 19014,
    "runtime": "101 min",
    "releaseDate": "2010-09-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0804497",
    "id": "movie-3269018"
  },
  {
    "sourceId": "5380919",
    "title": "红酒烩鸡",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2011,
    "coverUrl": "",
    "summary": "怀才不遇的编剧的亨利（蒂尔·施威格 Til Schweiger饰）本来过着放荡不羁的单身生活，可却被一个相貌可爱古灵精怪的八岁女孩儿玛德莲娜（爱玛·施威格 Emma Schweiger饰）打破，还自称是他的女儿。半路杀出的“女儿”原来是八年前一夜情的结晶，毫无经验的亨利只能硬着头皮照料这位天降“女儿”。与此同时，亨利接到一桩改编畅销小说的大案子，跟他共同执笔的竟然是旧情人凯萨琳娜（雅斯明·格拉特 Jasmin Gerat饰）。亨利本想趁此良机追回最爱，可是调皮的玛德莲娜夹在中间，闹出了一连串啼笑皆非却温情满满的小插曲。",
    "genres": [
      "Comedy",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "家庭"
    ],
    "originalRegions": [
      "德国"
    ],
    "rating": 7.8,
    "votes": 18472,
    "runtime": "123 min",
    "releaseDate": "2011-02-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1700258",
    "id": "movie-5380919"
  },
  {
    "sourceId": "6006087",
    "title": "假小子",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2011,
    "coverUrl": "",
    "summary": "男孩子气的女孩劳拉（佐伊·赫兰 Zoé Héran饰）时常被误认为是男生，而且她自己也不认同自己的女孩性别。一天，她跟随家人搬到了新的社区生活。在这里，劳拉干脆彻底把自己打扮成男孩“米克尔”，剪短发、穿男孩子的衣服，更像男孩子一样赤膊踢球、游泳。这很自然的吸引了女孩儿莉 莎（让娜·蒂森 Jeanne Disson饰）的注意力，两个年龄相仿的女孩相互倾慕，逐渐成为“两小无猜”的小情侣。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 7.8,
    "votes": 18296,
    "runtime": "84 min",
    "releaseDate": "2011-04-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1847731",
    "id": "movie-6006087"
  },
  {
    "sourceId": "1293941",
    "title": "奇迹",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204669705.jpg",
    "summary": "青年郭振华（成龙 饰）赴港谋求发展，路见不平之下卷入两派黑帮争斗，却阴差阳错做了帮派大哥，郭振华反思此一段奇遇，发觉是街边卖花的玫瑰夫人（归亚蕾 饰）将好运带给了自己，自此谈判、出门前总要购买玫瑰夫人的玫瑰以求心安。郭振华将帮派所属丽池饭店改为夜总会经营，饭店前任老板之女杨露明（梅艳芳 饰）出于还债在夜总会表演结果大红大紫，郭杨二人更发展出了一段恋情。觊觎夜总会生意多时的福建帮频频向郭振华发难，郭一如既往向玫瑰夫人求运，意外发现玫瑰夫人正身陷更大的麻烦，原来她为使外地的女儿安心读书编造了自己堂皇的身份，而眼下终于面临戳穿，郭出于感激帮助玫瑰夫人圆谎，由此引发了连环笑料……",
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
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 17971,
    "runtime": "139 min",
    "releaseDate": "1989-06-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0098019",
    "id": "movie-1293941"
  },
  {
    "sourceId": "10833919",
    "title": "美姐",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2012,
    "coverUrl": "",
    "summary": "铁蛋的爱情开始得早，八岁就恋上了邻家巧妇美姐（叶兰 饰 成年美姐）。文革禁唱地方戏曲二人台，也驱离了美姐一家人。辗转十多年，铁蛋（冯四 饰）俨然已是条汉子。随着美姐（杜焕荣 饰 中年美姐）与三个女儿返乡，看似忘不掉美姐，铁蛋先与其大女儿（叶兰 饰）私恋未果，却被迫娶了二女儿（葛夏 饰）作为“补偿”。最后决定跟着戏班子流浪，随他出门的却是美姐家的老三（叶兰 饰）……",
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
      "中国大陆"
    ],
    "rating": 7.8,
    "votes": 17887,
    "runtime": "91 min",
    "releaseDate": "2012-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2930988",
    "id": "movie-10833919"
  },
  {
    "sourceId": "1300186",
    "title": "春逝",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1369457641.jpg",
    "summary": "录音师李尚优（刘智泰饰）的妈妈早年去世，跟他相依为命的只有爸爸和患上了老人疑呆的奶奶。一个冬天，尚优认识了刚刚离婚的电台DJ韩恩素（李英爱饰）。",
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
      "日本",
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 17790,
    "runtime": "115 min",
    "releaseDate": "2001-09-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0295192",
    "id": "movie-1300186"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0880477",
    "id": "movie-2004613"
  },
  {
    "sourceId": "3718273",
    "title": "滑稽戏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p612483698.jpg",
    "summary": "酷爱歌舞表演的女服务员艾丽（克里斯蒂娜•阿奎莱拉Christina Aguilera 饰）决定离开生活的小镇，奔赴洛杉矶追寻自己的明星之梦。然而这件事从一开始便并不那么容易，她不仅被人偷走了所有积累，而且只得到在日落大道的一家滑稽戏俱乐部作服务员的工作。因为没有钱付房租，她只好借住在极具创作天份的酒保杰克（凯姆•吉甘戴Cam Gigandet 饰）的家里。俱乐部老板苔丝（雪儿 Cher 饰）是一位面冷心热的女人，此时她正面临巨额债务和俱乐部被收购的窘境，在艾丽的多次请求下，苔丝最终决定给予她上台的机会，杰出的天份很快让艾丽很快在众多女演员中脱颖而出并成为整个俱乐部的头牌舞娘。俱乐部走到了生死存亡的关键时刻，此时小有名气的艾丽开始受到各种诱惑，在情感与名利的漩涡里，艾丽最终会做出何种决择，俱乐部将会面对什么样的命运……",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 16739,
    "runtime": "119 min",
    "releaseDate": "2010-11-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1126591",
    "id": "movie-3718273"
  },
  {
    "sourceId": "1305084",
    "title": "秘密",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1371691835.jpg",
    "summary": "寒假里，直子（岸本加世子饰）和女儿藻奈美（広末涼子饰）去外地探望外公途中，长途客运车发生意外坠入山崖，直子不幸死去，藻奈美奇迹般地得救。醒来的藻奈美对着父亲（小林薰饰）却直呼其名，说自己是直子。",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 16701,
    "runtime": "119 min",
    "releaseDate": "1999-09-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0211413",
    "id": "movie-1305084"
  },
  {
    "sourceId": "1298412",
    "title": "三十九级台阶",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1935,
    "coverUrl": "",
    "summary": "音乐厅中传来枪声，观众们一片惊慌。一位外国女子（露西•曼娜海姆饰）询问理查德•汉内（罗伯特•多纳特饰）是否可以在他家中过夜。次日该女子在被杀之前告诉理查德必须阻止间谍组织“三十九级台阶”将国家机密偷偷送出英国。汉内为了证明自己并不是杀人凶手无奈前往苏格兰高地寻找线索，在火车上他寻求一位叫做帕梅拉（玛德琳•卡罗尔饰）的金发年轻女子帮助，但她却马上向警察告发了他。他找到了“三十九级台阶”的领导人乔丹教授，但随即被陷害入狱。侥幸逃脱后又由于帕梅拉的告发被两位伪装成便衣警察的人带走，并且他们还把帕梅拉和他铐在了一起。于是两人携手逃脱了出来并取得了互相的信任，然后他们再次回到音乐厅，汉内看到了上次就见过的表演。他向号称可以回答任何问题的“记忆先生”（怀特•沃森饰）提问：“什么是三十九级台阶“，于是……",
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
      "英国"
    ],
    "rating": 7.8,
    "votes": 16327,
    "runtime": "86 min",
    "releaseDate": "1935-08-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0026029",
    "id": "movie-1298412"
  },
  {
    "sourceId": "26748688",
    "title": "恋爱谈",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2016,
    "coverUrl": "",
    "summary": "学美术的允珠（李尚熙）在准备毕业展示时遇到了一名经常引起她注意的人。允珠从对方和自己偶然相撞的眼神中感受到了温暖，渐渐地被对方吸引了。一边打零工一般寻找梦想的智书（柳善英）在某个寒冷的冬日里遇到了用温暖的眼神看着自己的某人。不久后，再次邂逅那个人的智书遵从内心向她伸出了手。",
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
      "韩国"
    ],
    "rating": 7.8,
    "votes": 16103,
    "runtime": "99 min",
    "releaseDate": "2016-05-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6129730",
    "id": "movie-26748688"
  },
  {
    "sourceId": "26413269",
    "title": "早死早投胎之地狱摇滚篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "正在修学旅行中的高中生大助（神木隆之介 饰），其班级所乘坐的客车不幸遭遇了车祸，全班仅有两人幸免于难。当大助再度睁开眼，眼前所展开的，是生前只在书中见过的，血与火、疼痛与苦难交织的地狱图景，令大助感到心有不甘的是，他竟然是所有遇难者中唯一一个坠入了地狱的人，不仅如此，他依旧惦念着暗恋的女生广美（森川葵 饰），希望知晓她的安危。",
    "genres": [
      "Comedy",
      "Music",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "音乐",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 15566,
    "runtime": "125 min",
    "releaseDate": "2016-06-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4717204",
    "id": "movie-26413269"
  },
  {
    "sourceId": "26979199",
    "title": "喜欢，轻吻，快跑",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2018,
    "coverUrl": "",
    "summary": "克里斯托弗·奥诺雷([巴黎小情歌])自编自导新作[喜欢，亲吻，快跑]，由皮埃尔·德隆尚、文森特·拉科斯特([希波克拉底])、德尼·波达利德斯(裙角飞扬的日子)加盟出演。故事讲诉未满四十却对生活失去希望的中年作家，和爱笑爱阅读的青年学生相恋的故事。本作已在法国布列塔尼开机。",
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
      "法国"
    ],
    "rating": 7.8,
    "votes": 15538,
    "runtime": "132 min",
    "releaseDate": "2018-05-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7534054",
    "id": "movie-26979199"
  },
  {
    "sourceId": "4914656",
    "title": "猫在巴黎",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p788743927.jpg",
    "summary": "一只名叫蒂诺的小猫，看尽巴黎的白天与黑夜。白天，它是小女孩佐伊（Oriane Zani 配音）宠物，每天早上为她带来小礼物。佐伊的父母都是警察，父亲被城中最大的恶棍维克托·科斯塔（Jean Benguigui 配音）杀害，母亲让娜（Dominique Blanc 配音）发誓将科斯塔绳之于法，渐渐忽略了对佐伊的关怀。小佐伊从此封闭了自己，不发一言。每到夜晚，蒂诺便跳出窗户，寻找它另一个生活在黑夜的朋友尼克（Bruno Salomone 配音）。尼克是一个身手敏捷的大盗，他神出鬼没，手法娴熟，不过蒂诺是他唯一的朋友。蒂诺穿梭往来，成为了两个完全不同的人儿间的奇妙纽带。",
    "genres": [
      "Animation",
      "Family",
      "Crime"
    ],
    "originalGenres": [
      "动画",
      "家庭",
      "犯罪"
    ],
    "originalRegions": [
      "法国",
      "荷兰",
      "瑞士",
      "比利时"
    ],
    "rating": 7.8,
    "votes": 14901,
    "runtime": "62 min",
    "releaseDate": "2010-12-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1673702",
    "id": "movie-4914656"
  },
  {
    "sourceId": "1303482",
    "title": "偷偷爱你",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170507146.jpg",
    "summary": "贫家女东东（邱淑贞 饰）平日四处辛苦打工，以照顾痴呆的外公和不学无术的哥哥。东东患有一种怪病：一旦和心仪的男孩子视线接触，她就会呼吸困难，无法言语，所以一直和爱情无缘。一次偶然的机会，东东遇见了商界菁英阿Wing（梁朝伟 饰），她对阿Wing一见钟情，可是好男人阿Wing对女朋友一往情深，东东只能选择偷偷地暗恋。变故陡生，阿Wing在一次交通事故中意外失明，同父异母的弟弟乘机抢走了公司，女朋友也负心而去，东东得知后，假扮护士来到阿Wing身边对其悉心照顾，两人在相处中情意倍增。手术后，阿Wing恢复了视力，但东东却偷偷地从他身边跑开了……",
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
      "中国香港"
    ],
    "rating": 7.8,
    "votes": 14836,
    "runtime": "99 min",
    "releaseDate": "1996-01-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0117948",
    "id": "movie-1303482"
  },
  {
    "sourceId": "6521506",
    "title": "寒枝雀静",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 2014,
    "coverUrl": "",
    "summary": "本片是导演有关人性的“生活三部曲”的终结篇章。影片没有线性叙事，由39个场景构成。镜头追随萨姆和乔纳森这对推销搞笑玩具的流动商人的足迹，伴随他们一户户上门兜售商品，如同导游带领观众在不同地点不同人群中游走。影片继承了导演一贯的执导风格，诗意，阴郁，黑色幽默又充满哲学思辨。",
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
      "挪威",
      "法国"
    ],
    "rating": 7.8,
    "votes": 14607,
    "runtime": "101 min",
    "releaseDate": "2014-09-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1883180",
    "id": "movie-6521506"
  },
  {
    "sourceId": "26800978",
    "title": "南汉山城",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2017,
    "coverUrl": "",
    "summary": "改编自2007年出版的畅销同名小说，由小说家金薰创作完成。 电影由CJ E&M投资发行，曾执导《我的父亲》、《熔炉》、《奇怪的她》等电影作品的导演黄东赫执导，预计下半年开机拍摄。",
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
      "韩国"
    ],
    "rating": 7.8,
    "votes": 13580,
    "runtime": "139 min",
    "releaseDate": "2017-10-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7160176",
    "id": "movie-26800978"
  },
  {
    "sourceId": "2004482",
    "title": "东京！",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1945830045.jpg",
    "summary": "《室内设计》",
    "genres": [
      "Drama",
      "Comedy",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "奇幻"
    ],
    "originalRegions": [
      "法国",
      "日本",
      "德国",
      "韩国"
    ],
    "rating": 7.8,
    "votes": 13264,
    "runtime": "112 min",
    "releaseDate": "2008-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0976060",
    "id": "movie-2004482"
  },
  {
    "sourceId": "1439205",
    "title": "熊猫家族",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1972,
    "coverUrl": "",
    "summary": "第一话：自幼失去父母的少女米米和奶奶住在密林深处。某天，奶奶回乡赶赴爷爷的忌日，只留下米米一人居住。这时，一对熊猫父子偶然闯进她的家中。米米成为熊猫爸爸的女儿，同时成为小熊猫胖胖的妈妈，这三个天真的小家伙组成了一个奇怪而有趣的家庭。第二天，胖胖随秘密去学校，结果引起一场混乱。当他们回到家不久，动物园的园长随着警察叔叔前来抓捕偶然脱逃的熊猫父子……",
    "genres": [
      "Animation",
      "Short"
    ],
    "originalGenres": [
      "动画",
      "短片"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.8,
    "votes": 12620,
    "runtime": "35 min",
    "releaseDate": "1972-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0069058",
    "id": "movie-1439205"
  },
  {
    "sourceId": "6531219",
    "title": "情动假日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "故事发生在1987年的美国，阿黛尔（凯特·温丝莱特 Kate Winslet 饰）和亨利（加特林·格里菲斯 Gattlin Griffith 饰）是一对相依为命的母子，一次偶然中，两人在购物途中遇见了满身是血的流浪汉弗兰克（乔什·布洛林 Josh Brolin 饰），误打误撞之下，阿黛尔和亨利将弗兰克带回了家，弗兰克亦诚恳地坦白了他灰暗的过往。原来，弗兰克是一名逃犯，他因为发现深爱的儿子并非自己亲生而在愤怒之中失手杀死了女友曼迪（Maika Buckley 饰）。",
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
    "rating": 7.8,
    "votes": 12246,
    "runtime": "111 min",
    "releaseDate": "2013-08-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1967545",
    "id": "movie-6531219"
  },
  {
    "sourceId": "1295006",
    "title": "窈窕奶爸",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1993,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2177818413.jpg",
    "summary": "丹尼尔•希拉德（罗宾•威廉斯 饰）因与同事产生摩擦而辞掉了配音员的工作。家中可爱的孩子给了他十足的快乐，于是丹尼尔在儿子生日的时候，与孩子们疯狂的玩耍起来。当妻子米兰（莎莉•菲尔德 饰）达看到家中一片狼藉后十分生气。面对不争气的丈夫，米兰达决定与之离婚，因为没有工作，丹尼尔也失去了孩子的抚养权。",
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
      "美国"
    ],
    "rating": 7.8,
    "votes": 12110,
    "runtime": "125 min",
    "releaseDate": "1993-11-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0107614",
    "id": "movie-1295006"
  },
  {
    "sourceId": "25919385",
    "title": "长寿商会",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "一个脾气顽固的老头星七（朴根滢饰）在一家位于韩国某老城区的超市工作。老板很年轻，但生意被新区的新超市所威胁，一心盼望重建赔偿让他解困，可惜被老头一人反对从而延误整个老区的重建计划。",
    "genres": [
      "Comedy",
      "Romance",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "家庭"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.8,
    "votes": 10897,
    "runtime": "111 min",
    "releaseDate": "2015-04-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4695462",
    "id": "movie-25919385"
  },
  {
    "sourceId": "5948613",
    "title": "藏獒多吉",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "少年田劲的父母早年为了将西医带入藏地做出了无数的牺牲，由于无法适应高原的生活，田劲的妈妈带着尚在襁褓中的儿子返回内地，爸爸拉格巴则在高原继续着他的事业。数年过后，妈妈病故，无依无靠的田劲来到高原寻找爸爸，然而心中却藏着无数的怨恨。拉格巴终日忙碌行医，任凭儿子自行学习牧羊。某天，田劲遭到狗熊的威胁，幸亏一只金色的藏獒相助，后来更因种种机缘让他与这只名叫多吉的藏獒成为最亲密的朋友。与此同时，草原上出现了专门残害生灵的恶魔，牧民的平静生活被彻底打破……",
    "genres": [
      "Drama",
      "Animation",
      "Mystery",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "悬疑",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆",
      "日本"
    ],
    "rating": 7.8,
    "votes": 10897,
    "runtime": "95 min",
    "releaseDate": "2011-07-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2411128",
    "id": "movie-5948613"
  },
  {
    "sourceId": "3718279",
    "title": "死侍",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "油嘴滑舌的雇佣兵韦德·威尔森（瑞恩·雷诺兹 Ryan Reynolds 饰）与俏皮可爱的瓦内莎（莫蕾娜·巴卡林 Morena Baccarin 饰）邂逅，但在爱情最美满的时刻，他被诊断患有晚期癌症，留在世上的时间所剩无几。极度绝望之际，他接受了弗朗西斯（艾德·斯克林 Ed Skrein 饰）私人组织的邀请，对其基因做了改造，以谋求体能的突变。在忍受了一系列的残酷折磨后，韦德终于治好了癌症，蜕变成拥有不死之身的超级战士，但是代价却是失去了人类的面容。",
    "genres": [
      "Comedy",
      "Action",
      "Sci-Fi",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "科幻",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 7.7,
    "votes": 311807,
    "runtime": "108 min",
    "releaseDate": "2016-02-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1431045",
    "id": "movie-3718279"
  },
  {
    "sourceId": "26942674",
    "title": "神秘巨星",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2017,
    "coverUrl": "",
    "summary": "少女伊西亚（塞伊拉·沃西 Zaira Wasim 饰）拥有着一副天生的好嗓子，对唱歌充满了热爱的她做梦都想成为一名歌星。然而，伊西亚生活在一个不自由的家庭之中，母亲娜吉玛（梅·维贾 Meher Vij 饰）常常遭到性格爆裂独断专横的父亲法鲁克（拉杰·阿晶 Raj Arjun 饰）的拳脚相向，伊西亚知道，想让父亲支持自己的音乐梦想是完全不可能的事情。",
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
    "rating": 7.7,
    "votes": 309356,
    "runtime": "150 min",
    "releaseDate": "2018-01-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6108090",
    "id": "movie-26942674"
  },
  {
    "sourceId": "21324900",
    "title": "降临",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "地球的上空突然出现了十二架贝壳状的不明飞行物，悬浮在十二个不同的国家的上空，外星人向人类发出了讯号，但人类却并不能够解读。美国军方找到了语言学家路易斯（艾米·亚当斯 Amy Adams 饰）和物理学家伊恩（杰瑞米·雷纳 Jeremy Renner 饰），希望两人能够合作破解外星人的语言之谜。",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "originalGenres": [
      "剧情",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 301509,
    "runtime": "116 min",
    "releaseDate": "2017-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2543164",
    "id": "movie-21324900"
  },
  {
    "sourceId": "1306612",
    "title": "蜘蛛侠",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "彼得 帕克（托比•马奎尔 Tobey Maguire 饰）只是美国一个平凡的高中生，当一次他被蜘蛛博物馆偷跑出来的变种蜘蛛咬了一口之后，彼得的生活彻底改变了。他变得和蜘蛛一样，拥有各种蜘蛛特有的超能力：从手指喷出粘力极强的蜘蛛丝、飞檐走壁等等。彼得兴奋异常，开始利用自己的超能力去赚钱。但当他最爱的叔叔被自己放走的罪犯杀死后，彼得发誓要用自己的超能力去打击犯罪。",
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
    "rating": 7.7,
    "votes": 243926,
    "runtime": "121 min",
    "releaseDate": "2002-08-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0145487",
    "id": "movie-1306612"
  },
  {
    "sourceId": "1433330",
    "title": "哈利·波特与混血王子",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1108070214.jpg",
    "summary": "这一集中，食死徒开始肆无忌惮横行于麻瓜和魔法两个世界中，霍格沃茨内忧外患，危机重重。邓不利多（迈克尔·甘本 Michael Gambon 饰）带着哈利（丹尼尔·雷德克里夫 Daniel Radcliffe 饰）辗转找到隐居多年的霍拉斯·斯拉格霍恩，请他出山接替斯内普（艾伦 ·里克曼 Alan Rickman 饰）担任魔药学的老师。霍拉斯曾经教授过无数优秀的学生，而汤姆·里德尔——伏地魔——正是他最出色的一名弟子。邓不利多深信霍拉斯保有伏地魔不死身的秘密，他希望哈利能够说服霍拉斯。",
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
      "英国",
      "美国"
    ],
    "rating": 7.7,
    "votes": 240552,
    "runtime": "153 min",
    "releaseDate": "2009-07-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0417741",
    "id": "movie-1433330"
  },
  {
    "sourceId": "3737102",
    "title": "艋舺",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "",
    "summary": "蚊子（赵又廷 饰）17岁那年搬到艋舺，因为一根鸡腿踏入了黑道，认识了和尚（阮经天 饰）、志龙、阿伯还有白猴四个好兄弟，五人结为太子帮。太子帮秉持只识意气，不问意义的精神，凭借志龙的父亲Geta（马如龙 饰）的黑道地位在学校呼风唤雨。踏入黑道就意味着要经历腥风血雨，然而和尚作为众人的守护神总能帮他们化解危机。艋舺传统的黑道秩序遭受着现代文明的威胁，外省人灰狼（钮承泽 饰）要求和艋舺的老大们合作遭到拒绝。此时，和尚由于得知父辈们之间的事情对Geta心怀不满，加之文谦的怂恿而卷入一场阴谋。艋舺局势暗潮汹涌、杀机四伏，五兄弟在黑道与友情的决择中，演绎了一段关于青春的悲情故事。",
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
      "中国台湾"
    ],
    "rating": 7.7,
    "votes": 229111,
    "runtime": "140 min",
    "releaseDate": "2010-02-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1604900",
    "id": "movie-3737102"
  },
  {
    "sourceId": "11510624",
    "title": "全民目击",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2013,
    "coverUrl": "",
    "summary": "林泰（孙红雷 饰）是当地名噪一方的富豪，近来正筹备自己人生中的另一件大事，与钟爱多年的女友结婚。不料此时传来噩耗，准新娘被人杀死在公寓的地下停车场，林泰闻讯如雷击顶。警方把怀疑的目光瞄向了他的独女林萌萌（邓家佳 饰），检方提起诉讼后，林泰花重金聘请著名律师周莉（余男 饰）为其女辩护，周莉曾为诸多有名的案件做过代理人，对打赢这场官司信心满满，庭审前，做了大量案头工作。公诉方派出的则是大名鼎鼎的检察官童涛（郭富城 饰），他的公诉犀利坚锐、一语中的。庭审开始后，控辩双方剑拔驽张，火药味十足，但随着审理的进一步深入，罪案越发扑朔迷离，似进入一条看不到边际的死穴......",
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
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 208450,
    "runtime": "119 min",
    "releaseDate": "2013-09-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3204696",
    "id": "movie-11510624"
  },
  {
    "sourceId": "1297863",
    "title": "武状元苏乞儿",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2002731301.jpg",
    "summary": "广州提督之子苏灿（周星驰 饰）在考取武状元时，被人设计陷害沦为乞丐。因为丐帮四大长老杀了自己的教主，入主朝廷的天理教太乙真人四处迫害丐帮，加上丐帮帮主阵亡令打狗棒法失传，丐帮一时四分五裂群龙无首。在心仪苏灿的如霜（张敏 饰）的暗中帮助下，传功长老选中苏灿为丐帮接班人，传以打狗律 法要诀。苏灿学艺成功后，成为新任帮主，开始团结各地丐帮会员自强，共同奋力对抗天理教。太乙真人（徐少强  饰）欲拥兵自立，预谋在皇帝狩猎之时下手行刺，不料消息走露传到苏灿耳中。",
    "genres": [
      "Comedy",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 206922,
    "runtime": "96 min",
    "releaseDate": "1992-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0100963",
    "id": "movie-1297863"
  },
  {
    "sourceId": "1885124",
    "title": "时间旅行者的妻子",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480590433.jpg",
    "summary": "一场车祸，母亲丧生，而孩子却奇迹般幸存，他赤裸着身体获救，然而救人者竟然是来自未来的自己。原来，这个名叫亨利（艾瑞克•巴纳 Eric Bana 饰）的图书管理员，患上慢性时间错位症，以至于每次发病都将穿越时空。而且，他每次穿越都赤身裸体，经常闹出笑话。久而久之，亨利习以为常。一个偶然的机会，他爱上了一个名叫克莱尔（瑞秋•麦克亚当斯 Rachel McAdams 饰）的女孩。为了追求克莱尔，他穿越时空对6岁的克莱尔表白，并许诺未来将娶她为妻。因此，当亨利在现实中出现时，两人迅速热恋、结婚，而且还生了一个女孩。但是，亨利的老毛病依旧无法改变，所以克莱尔必须适应这个穿越时空的老公，两人也因此历经磨难……",
    "genres": [
      "Drama",
      "Romance",
      "Mystery",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑",
      "奇幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 197922,
    "runtime": "107 min",
    "releaseDate": "2009-08-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0452694",
    "id": "movie-1885124"
  },
  {
    "sourceId": "3025447",
    "title": "金蝉脱壳",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "孔武冷峻的雷·布雷斯林（西尔维斯特·史泰龙 Sylvester Stallone 饰）经过周密计划，成功从戒备甚严的监狱中逃脱。他隶属于独立的BC安保公司，该公司受联邦监狱局之托测试国家各地监狱的安全性，通过布雷斯林这些越狱高手查找监狱的漏洞，以确保不会有犯人从牢笼中逃 脱。在过去八年里，雷已成功征服14座监狱。这一次，中情局为验证关押了罪大恶极恐怖分子的设施的安全，委托正准备退休的雷进入神秘莫测的国际监禁中心。但此次行动似乎出了什么差错，雷与团队失去联系，冷酷无情的典狱官霍布斯（詹姆斯·卡维泽 Jim Caviezel 饰）也完全无视他的撤离申请，更有凶残的狱卒（维尼·琼斯 Vinnie Jones 饰）热衷草菅人命。",
    "genres": [
      "Action",
      "Thriller"
    ],
    "originalGenres": [
      "动作",
      "惊悚"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 168415,
    "runtime": "116 min",
    "releaseDate": "2013-11-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1211956",
    "id": "movie-3025447"
  },
  {
    "sourceId": "1890784",
    "title": "门徒",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1181944920.jpg",
    "summary": "阿昆（刘德华饰）长年垄断了海洛因市场，虽视追随8年多的阿力（吴彦祖饰）为接班人，但阿昆一向小心行事，从没透露过“货仓“、加工场的位置也未见过其他“同事”。阿昆打算把自己的生意全权交由阿力打理，阿力渐渐知道了更多毒品市场中的秘密。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 167620,
    "runtime": "106 min",
    "releaseDate": "2007-02-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0841150",
    "id": "movie-1890784"
  },
  {
    "sourceId": "27191431",
    "title": "过春天",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "单亲家庭出身的16岁女学生佩佩（黄尧 饰），她的城市既是香港、也是深圳，白天在香港上学，晚上回到深圳跟妈妈（倪虹洁 饰）住在一起，频繁地穿梭于两地。为了和闺蜜Joe（汤加文 饰）一起旅行的约定，为了自己的存在感，为了对Joe男友阿豪（孙阳 饰）懵懂的好感，她内心的冲动被点燃，“水客”成为了她的另一个身份，一段颇有“冒险”感的青春故事就此开始。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 139716,
    "runtime": "99 min",
    "releaseDate": "2019-03-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8875366",
    "id": "movie-27191431"
  },
  {
    "sourceId": "1308755",
    "title": "僵尸肖恩",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1429482773.jpg",
    "summary": "肖恩（西蒙·佩吉 Simon Pegg 饰）事业不如意，爱情也不怎么顺心。认识了一帮同样游手好闲的朋友，整天和他们厮混，包括皮特，和只会打机和讨人厌的艾德。难得肖恩为了女朋友振作一次，却遭到同事嘲笑，女友也不能会意，肖恩只有继续和朋友醉酒纵乐。",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "originalGenres": [
      "喜剧",
      "恐怖"
    ],
    "originalRegions": [
      "英国",
      "法国",
      "美国"
    ],
    "rating": 7.7,
    "votes": 136611,
    "runtime": "99 min",
    "releaseDate": "2004-04-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0365748",
    "id": "movie-1308755"
  },
  {
    "sourceId": "1304899",
    "title": "速度与激情",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "",
    "summary": "洛杉矶的年轻人都热衷于街头赛车，在这里，只要你拥有速度，你就拥有一切。新晋警官布赖恩（保罗•沃克 Paul Walker 饰）为了破获最近屡屡发生的飞车党劫车案而充当卧底，打入这里活跃的飞车党帮派中，搜集证据以期将罪犯乘之于法。布赖恩凭借高超的车技很快赢得了飞车党老大多米尼克（范•迪塞尔 Vin Diesel 饰）的欣赏和信任，并且很快和多米尼克的妹妹米亚（乔丹娜•布鲁斯特 Jordana Brewster 饰）堕入爱河。然而飞车党的第二把手文斯却是对布赖恩充满敌意，原来文斯一直暗恋米亚，而且布赖恩的到来威胁着他二把手的地位。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 127872,
    "runtime": "106 min",
    "releaseDate": "2001-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0232500",
    "id": "movie-1304899"
  },
  {
    "sourceId": "1765009",
    "title": "歌舞青春",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1358940267.jpg",
    "summary": "特洛伊（扎克·埃夫隆 Zac Efron饰）和盖布利拉（瓦妮莎·哈金斯 Vanessa Hudgens饰）本是分属两个世界的年轻人。特洛伊从小就作为篮球种子来培养，而盖布利拉则是个高智商的学习优秀学生。新年晚会两人被推上舞台，合唱了一首美妙的歌，彼此的内心都燃起了火花。",
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
    "rating": 7.7,
    "votes": 126371,
    "runtime": "98 min",
    "releaseDate": "2006-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0475293",
    "id": "movie-1765009"
  },
  {
    "sourceId": "1498831",
    "title": "恋爱假期",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "爱丽斯(凯特•温斯莱特 Kate Winslet饰)住在英国伦敦的乡村，而阿曼达(卡梅隆•迪亚兹 Cameron Diaz饰)则是洛杉矶的美国丽人。她们在天南地北的两端，却遇上了同样的问题：在感情上遭受了挫败，令生活灰暗无光。二人在网上聊天，商议在圣诞节到来之前，到对方的环境去生活，交互双方的住所作为度假场地。于是，一场令人兴奋的旅行开始了。爱丽斯来到美国大都市，阿曼达则乘班机前往极具英伦情调的英国乡村。除了新鲜的生活环境，当地男生的魅力更让她们猝不及防。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 119437,
    "runtime": "138 min",
    "releaseDate": "2006-12-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0457939",
    "id": "movie-1498831"
  },
  {
    "sourceId": "1820145",
    "title": "理发师陶德",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1662825746.jpg",
    "summary": "受法官塔萍（阿伦`瑞克曼）陷害，被迫流放他乡15年的陶德（约翰尼`德普）回到伦敦后，满心的怒火，只想复仇。他的妻子露西（劳拉`凯利）已经不知所踪，而女儿乔安娜（珍妮`怀森纳）则被塔萍作为养女囚禁在深宅大院里。",
    "genres": [
      "Drama",
      "Horror",
      "Musical"
    ],
    "originalGenres": [
      "剧情",
      "恐怖",
      "歌舞"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 7.7,
    "votes": 118629,
    "runtime": "116 min",
    "releaseDate": "2007-12-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0408236",
    "id": "movie-1820145"
  },
  {
    "sourceId": "1304624",
    "title": "旺角卡门",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530885114.jpg",
    "summary": "香港九龙区旺角混混阿杰（刘德华）做事利落重情义，颇有老大风范，为了照顾做事冲动又好面子的小弟乌蝇（张学友），他不停地在各种大小麻烦中周旋，甚至不惜为乌蝇与黑道狠角色（万梓良）结仇。",
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
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 115583,
    "runtime": "102 min",
    "releaseDate": "1988-06-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0096461",
    "id": "movie-1304624"
  },
  {
    "sourceId": "1853176",
    "title": "斯巴达300勇士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443321967.jpg",
    "summary": "这部电影描述了人类史上最残酷的战争之一：温泉关之战。公元前480年，波斯国王薛西斯一世（罗德里格•桑托罗 Rodrigo Santoro 饰）亲率30万大军征战希腊。希腊各个城邦迅速派出军队结成了联军，准备抵御波斯军队的入侵。",
    "genres": [
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 113422,
    "runtime": "117 min",
    "releaseDate": "2006-12-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0416449",
    "id": "movie-1853176"
  },
  {
    "sourceId": "2132930",
    "title": "速度与激情4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "",
    "summary": "在《速度与激情1》中，为了逃避警察的追捕，多米尼克（范·迪塞尔 Vin Diesel 饰）离开洛杉矶一直流亡于多米尼加共和国。而一车价值140万美金的石油装载车让蛰伏多年的多米尼克再次驾车驰骋起来。而这时，却传来红颜知己莉迪（米歇尔·罗德里格兹 Michelle Rodriguez 饰）惨死的消息。为了查明真相，满腔怒火的多米尼克再次孤身赶回美国。原来，莉迪是为了获得赦免多米尼克的机会，而协助警局抓捕大毒枭坎波斯（约翰·奥提兹 John Ortiz 饰）。不过出于习惯，坎波斯将运送毒品后的莉迪杀人灭口。这样，一边是为女友报仇的多米尼克，一边是历练多年的警探布莱恩（保罗·沃克 Paul Walker 饰），两人再次携手，目标直指大毒枭巴尔加。一场急速复仇就此展开……",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 113172,
    "runtime": "107 min",
    "releaseDate": "2009-04-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1013752",
    "id": "movie-2132930"
  },
  {
    "sourceId": "30211551",
    "title": "恶人传",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2019,
    "coverUrl": "",
    "summary": "罪犯头目张东洙（Don Lee）被一名神秘莫测的连环杀手暴力袭击之后幸存，与当地警探郑泰硕（Kim Moo Yul）形成了一种奇妙的搭档关系，联手捕捉被称为“K”的虐待狂杀手”。",
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
      "韩国"
    ],
    "rating": 7.7,
    "votes": 110445,
    "runtime": "109 min",
    "releaseDate": "2019-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt10208198",
    "id": "movie-30211551"
  },
  {
    "sourceId": "25926267",
    "title": "一个勺子",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "农民拉条子（陈建斌 饰）在镇上遇到一个讨饭的傻子（金世佳 饰），傻子跟着他回了家。拉条子贴了寻人启示，不久有人认领了傻子。紧接着又有自称傻子的家人陆续出现，说拉条子把傻子卖了。麻烦接踵而至，拉条子自知上当受骗却有口难言，他想不明白，好事怎么就成了坏事？他开始以一位农民最淳朴的办法想自证清白。而为了寻找傻子，他成了另一个到处缠着别人的傻子……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 110291,
    "runtime": "95 min",
    "releaseDate": "2015-11-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3856504",
    "id": "movie-25926267"
  },
  {
    "sourceId": "3011093",
    "title": "成长教育",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465499294.jpg",
    "summary": "本片根据英国星期日泰晤士报记者琳·巴贝尔（Lynn Barber）的回忆录改编。1961年，16岁的少女珍妮（凯瑞·穆里根 Carey Mulligan 饰）对父母反复督促她学好拉丁文考上牛津的唠叨不厌其烦，而正在追求自己的男孩又不令父亲杰克（阿尔弗雷德·莫里纳 Alf red Molina 饰）满意。一个雨天，珍妮邂逅了成熟男人大卫（彼得·萨斯加德 Peter Sarsgaard 饰），对方的风流倜傥和举手投足的迷人气质深深吸引了珍妮。大卫和朋友不断带珍妮出入高档酒吧、艺术品拍卖行和高级餐厅，甚至说服珍妮的父母带她游览梦寐以求的巴黎。灯红酒绿中珍妮迅速坠入爱河，只可惜事实真相却并非梦想中那样美好……",
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
    "rating": 7.7,
    "votes": 105483,
    "runtime": "100 min",
    "releaseDate": "2009-10-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1174732",
    "id": "movie-3011093"
  },
  {
    "sourceId": "1291836",
    "title": "戴珍珠耳环的少女",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2003,
    "coverUrl": "",
    "summary": "少女葛利叶（斯嘉丽•约翰逊 Scarlett Johansson 饰）家境贫寒，于是来到画家维梅尔（科林•费尔斯 Colin Firth 饰）家做女佣。维梅尔和妻子、岳母一起生活，她们常常摆出颐指气使的神情，妻子对正当青春的葛利叶更是戒心重重。在非常苛刻和压抑的氛围下，葛利叶在维梅尔家过得卑躬屈膝。",
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
      "卢森堡"
    ],
    "rating": 7.7,
    "votes": 101977,
    "runtime": "100 min",
    "releaseDate": "2003-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0335119",
    "id": "movie-1291836"
  },
  {
    "sourceId": "2082013",
    "title": "欲望都市",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "",
    "summary": "凯莉（萨拉•杰西卡•帕克 饰）成为了一个成功的作家，身边依然有3名好友萨曼莎（金•卡特拉尔 饰）、夏洛特（克里斯汀•戴维斯 饰）、米兰达（辛西娅•尼克松 饰）陪伴身边，她们依然时尚美丽。",
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
    "rating": 7.7,
    "votes": 87279,
    "runtime": "145 min",
    "releaseDate": "2008-05-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1000774",
    "id": "movie-2082013"
  },
  {
    "sourceId": "1294561",
    "title": "太极张三丰",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "宦官弄权的明朝末年，苛税与暴政弄得民不聊生。张君宝（李连杰）与董天宝（钱小豪）是一对自幼在少林寺长大的师兄弟，但两人性格迥异，张君宝善良忠厚，董天宝则狡猾阴险，在争夺进入达摩院修行的资格时，两人因与师伯发生争执，被逐出少林。",
    "genres": [
      "Comedy",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 85623,
    "runtime": "96 min",
    "releaseDate": "1993-11-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0108281",
    "id": "movie-1294561"
  },
  {
    "sourceId": "1922273",
    "title": "电锯惊魂4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2196982868.jpg",
    "summary": "SWAT指挥官瑞格（莱瑞克•本特 饰）突然被绑架，卷入了一场致命游戏，他必须在一个半小时之内过关斩将，躲过一个比一个恐怖的陷阱，才能保住性命。经验十足的FBI探员斯琼姆（斯科特•派特森 饰）来到被折磨得筋疲力尽的警察局，协助警探一起研究被竖锯玩死的受害者尸体，试图找出蛛丝马迹。随着调查的深入，竖锯变态的起因以及他邪恶的计划渐渐浮出水面……",
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
      "美国",
      "加拿大"
    ],
    "rating": 7.7,
    "votes": 78737,
    "runtime": "93 min",
    "releaseDate": "2007-10-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0890870",
    "id": "movie-1922273"
  },
  {
    "sourceId": "3805946",
    "title": "比悲伤更悲伤的故事",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2020728553.jpg",
    "summary": "从小被父母遗弃的电台制作人凯伊（权相宇 饰）和因交通事故痛失双亲的作词人洛琳（李宝英 饰），两人似家人、朋友和恋人一样生活在一起，填补了彼此生活里的空席。但一场绝症让凯伊只剩下200多天生命，他不舍得留下洛琳一人决定隐瞒病情为她寻找一个可以托付终身的男人。事业有成、温柔体贴的牙医朱焕（李凡秀 饰）适时的出现，凯伊决定让他成为照顾洛琳的最佳人选。首次见到洛琳的朱焕便对其一见钟情，不可自拔，而洛琳也似乎对他存有好感。一切都在凯伊的计划中，洛琳和朱焕顺利发展着感情，并到了谈婚论嫁的地步。凯伊亲自为洛琳挑选了结婚的礼服，带着留恋和真挚的祝福在教堂牵着她的手一步一步走到朱焕身边。最后没有任何遗憾的凯伊离开了人世，而事实上，故事，远比这里所写更悲伤......",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 78698,
    "runtime": "105 min",
    "releaseDate": "2009-03-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1454545",
    "id": "movie-3805946"
  },
  {
    "sourceId": "1829230",
    "title": "舞出我人生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477592337.jpg",
    "summary": "个性张扬的街头嘻哈与高贵典雅的芭蕾可以在舞台上完美的契合，就像泰勒（钱宁 •塔图姆饰）与诺拉（珍娜•迪温）的结合一样。这是一个奇迹，还是一种宿命。",
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
      "美国"
    ],
    "rating": 7.7,
    "votes": 77886,
    "runtime": "104 min",
    "releaseDate": "2009-03-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0462590",
    "id": "movie-1829230"
  },
  {
    "sourceId": "1296384",
    "title": "心理游戏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2371537316.jpg",
    "summary": "亿万富翁范先生（迈克尔·道格拉斯）在四十八岁生日时收到弟弟（西恩·潘）的一份礼物，CRS俱乐部的游戏卡。游戏的内容为迈克尔量身定做，直指他内心深处的童年阴影和婚姻创伤。",
    "genres": [
      "Action",
      "Mystery",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "悬疑",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 77008,
    "runtime": "129 min",
    "releaseDate": "1997-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119174",
    "id": "movie-1296384"
  },
  {
    "sourceId": "2350904",
    "title": "电锯惊魂5",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p507841435.jpg",
    "summary": "饱受癌症折磨，“竖锯”约翰·克莱默（Tobin Bell 饰）油尽灯灭。然而他所创造的“拼图杀人案”却并未就此停止，反而愈演愈烈。警官马克·霍夫曼（Costas Mandylor 饰）曾假借“竖锯”之名向残害他家人的凶手复仇，但他很快成为约翰的猎物。经过一波三折，霍夫曼成为“拼图杀人案”的接班人，只是约翰警世救人的初衷被彻底抛却，取而代之的无休止的血腥杀戮。一场毫无胜算的五人逃生游戏在霍夫曼德主持下展开。",
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
      "美国",
      "加拿大"
    ],
    "rating": 7.7,
    "votes": 72280,
    "runtime": "92 min",
    "releaseDate": "2008-10-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1132626",
    "id": "movie-2350904"
  },
  {
    "sourceId": "1305053",
    "title": "红龙",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p729552436.jpg",
    "summary": "最近出现了一起凶徒连环杀人案，最令人恶心的是，凶徒每次作案后都将被害者的喉咙割走。FBI探员威尔（爱德华•诺顿 Edward Norton 饰）负责此案的侦察，经过详细调查，威尔分析此人每次都是将被害者的喉咙割走吃掉，然而却没有找到任何凶徒的蛛丝马迹。威尔向患有精神病的犯罪心理学家汉尼拔（安东尼•霍普金斯 Anthony Hopkins 饰）求助，希望汉尼拔能刻画出凶徒的犯罪心理以助破案。",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 72192,
    "runtime": "124 min",
    "releaseDate": "2002-10-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0289765",
    "id": "movie-1305053"
  },
  {
    "sourceId": "27597250",
    "title": "极限职业",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2019,
    "coverUrl": "",
    "summary": "影片故事围绕毒品侦察班而展开，毒品侦察班业绩超差，面临被撤销的危机，但突然有了一个线索，侦察班全体成员决心搏一搏。于是，他们开始潜伏在一家炸鸡店，监视毒贩，然而这炸鸡店业绩也超差，高班长为了保住这个侦察的好地方，盘下了炸鸡店。为了掩护身份，只能老老实实干起了炸鸡的生意，没想到其中一位警官却做出了具有独特口味炸鸡，导致生意做的红红火火。",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 69973,
    "runtime": "111 min",
    "releaseDate": "2019-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt9541602",
    "id": "movie-27597250"
  },
  {
    "sourceId": "26279289",
    "title": "怒",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "炎炎夏日，东京八王子郊外社区，一对夫妇惨遭杀害。事后凶手用血在墙上写下大大的“怒”字，随后逃亡，销声匿迹长达一年之久。而在此期间，三个身份不明的男子和身边的人相遇了。曾自甘堕落的爱子（宫崎葵 饰）被父亲（渡边谦 饰）领回海滨小镇，邂逅了不善言辞的哲也（松山研一 饰）。在东京工作的同性恋优马（妻夫木聪 饰）将柔情似水的直人（绫野刚 饰）带回了家，他不相信对方，却又尝试去相信。随母亲搬到冲绳的小泉（广濑铃 饰）跟着同学辰哉（佐久本宝 饰）登上一座荒岛，在废墟中遇到了背包客田中（森山未来 饰），他们短暂成为朋友，而可怕的命运突然降临泉的头上。不久之后，通缉令遍布全国，三个男子的真实身份引人生疑……",
    "genres": [
      "Drama",
      "Romance",
      "Mystery",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑",
      "同性"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.7,
    "votes": 66180,
    "runtime": "142 min",
    "releaseDate": "2016-09-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4384088",
    "id": "movie-26279289"
  },
  {
    "sourceId": "1308655",
    "title": "新扎师妹",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "",
    "summary": "方丽娟（杨千嬅饰）一直想成为一名警察，几经失败才考近了警校。虽然她在警校中刻苦学习，可是她天生并不是当警察的料，成绩不理想以外还常常笑料百出。毕业后，被调配到失物认领处工作，令她心里很不是滋味。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 65839,
    "runtime": "102 min",
    "releaseDate": "2002-03-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0367104",
    "id": "movie-1308655"
  },
  {
    "sourceId": "20388224",
    "title": "绝密跟踪",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2013,
    "coverUrl": "",
    "summary": "在韩国警察系统中存在着一个特殊的部门——监视班，该班有一群貌不惊人但拥有高超分析能力和跟踪技巧的探员组成。在班长黄尚钟（薛景求 饰）的指挥下，监视班一次次抓获狡猾罪犯，将他们绳之于法。某日，一腔热血的警员河允珠（韩孝珠 饰）以优异的成绩通过黄班长极为苛刻的测试，成为监视班的一员，代号“花猪”。虽然初出茅庐略显青涩，但花猪很快凭借其缜密的分析能力赢得班长的信任。与此同时，以詹姆士（郑雨盛 饰）为首的一组犯罪分子正策划对证券交易所的秘密行动。虽然已经获得罪犯的蛛丝马迹，但詹姆士极其狡猾，拥有超高的反侦查能力。",
    "genres": [
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 65063,
    "runtime": "119 min",
    "releaseDate": "2014-09-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2969656",
    "id": "movie-20388224"
  },
  {
    "sourceId": "1294941",
    "title": "大白鲨",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1975,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189845463.jpg",
    "summary": "艾米蒂岛是一个旅游度假胜地，有大批的游客来这里游泳。然而，大白鲨的出现却改变了这一切。事故从一对情侣开始，他们下海游泳，女的不幸成为了第一个牺牲者，支离破碎的尸体令人惨不忍睹。当地官员却不愿意封场调查，他们怕影响旅游收入，于是请来了生物学家布朗（理查德•德莱福斯 Richard Dreyfuss　饰）。",
    "genres": [
      "Drama",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 63872,
    "runtime": "124 min",
    "releaseDate": "1975-06-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0073195",
    "id": "movie-1294941"
  },
  {
    "sourceId": "27198855",
    "title": "印度合伙人",
    "countryCode": "IN",
    "countryName": "India",
    "year": 2018,
    "coverUrl": "",
    "summary": "电影曾译名《护垫侠》，根据印度草根企业家Muruganantham真实事迹改编。因为卫生巾关税高昂，在2012年印度仍有80%以上的女性在生理期无法使用卫生用品，初中文化程度的主人公拉克希米（阿克谢·库玛尔 饰）为了妻子（拉迪卡·艾普特 饰）的健康，寻找低成本的卫生巾的生产方法，却被全村人视为变态、疯子；最后他远走大城市德里，遇到了生命中最重要的美女合伙人帕里（索娜姆·卡普尔 饰），最终发明了低成本卫生巾生产机器，并开放专利，为印度全国对于女性经期卫生观念带来变革，2018年7月印度取消卫生巾进口关税。“权势之人、强壮之人不会让国家变强，女性强大、母亲强大、姐妹们强大后，国家才会强盛。”",
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
      "印度"
    ],
    "rating": 7.7,
    "votes": 61240,
    "runtime": "140 min",
    "releaseDate": "2018-12-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7218518",
    "id": "movie-27198855"
  },
  {
    "sourceId": "6753166",
    "title": "七个神经病",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2012,
    "coverUrl": "",
    "summary": "Marty（柯林·法瑞尔 Colin Farrell 饰）是一个爱喝酒的电影编剧，他的好友Billy（山姆·洛克威尔 Sam Rockwell 饰）则和Hans（克里斯托弗·沃肯 Christopher Walken饰）靠偷狗然后把狗还回给失主来赚钱。Marty近期在写 一个叫《七个神经病》的剧本，却没有什么灵感，于是Billy给他提供了一些素材。有一个神经病是一个杀手，每次杀完人都会扔下一张J扑克牌，有一个越南的复仇者，有一个自刎的贵格教徒....Billy偷了一条狗，这条狗是一个黑帮老大Charlie（伍迪·哈里森 Woody Harrelson 饰）的爱犬。Charlie丢了他视如生命的狗，到处在寻找。他找到了Hans住院的妻子并杀害了她。Billy知道这件事后，愤怒的将他的情人杀害，而她也是Charlie的情人，随后Billy扔下了一张扑克牌。原来Billy就是那个神经病杀手。他和Marty、Hans来到野外继续写剧本，同时他也让Charlie单枪匹马前来决斗.....",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.7,
    "votes": 61019,
    "runtime": "110 min",
    "releaseDate": "2012-10-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1931533",
    "id": "movie-6753166"
  },
  {
    "sourceId": "1305224",
    "title": "寻枪",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2184558984.jpg",
    "summary": "马山（姜文）是西南地区某边陲小镇的一名普通警察，某晚参加妹妹婚宴时因喝得酩酊大醉被人送回家中，次日早晨醒来时，他发现从不离身的配枪不翼而飞。意识到偷枪人可用枪里的三颗子弹杀人时，马山不禁毛骨悚然，当晚所有参加妹妹婚礼的人都成了他的怀疑对象。",
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
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 60333,
    "runtime": "90 min",
    "releaseDate": "2002-05-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0342778",
    "id": "movie-1305224"
  },
  {
    "sourceId": "1291558",
    "title": "云上的日子",
    "countryCode": "FR",
    "countryName": "France",
    "year": 1995,
    "coverUrl": "",
    "summary": "1，费拿拉小镇，工程师斯瓦诺（Kim Rossi Stuart 饰）邂逅了女教师卡门（Inés Sastre 饰），他们一见钟情，卡门却拒绝了斯瓦诺的吻。当他们三年后再次相遇时，斯瓦诺则在肉欲面前止步；",
    "genres": [
      "Drama",
      "Romance",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "情色"
    ],
    "originalRegions": [
      "法国",
      "意大利",
      "德国"
    ],
    "rating": 7.7,
    "votes": 55519,
    "runtime": "105 min",
    "releaseDate": "1995-10-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0114086",
    "id": "movie-1291558"
  },
  {
    "sourceId": "1293765",
    "title": "白发魔女传",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p958927779.jpg",
    "summary": "明末年间，中原与金国边境战火硝烟四起，姬无双（吴镇宇 饰）的魔教大行肆虐。朝廷与武林联合抗敌。武当派首徒卓一航（张国荣 饰）自幼桀骜不驯，但天资过人，极受掌门紫阳真人看重。卓一航幼年奇遇不断，先后结识了当时还只是武官的吴三桂（高雄 饰）与神秘的狼女（林青霞 饰）。成年后的卓一航为人正直，但浪子本性不改，不愿受礼教束缚，仗义行侠却屡屡受指。大师姐（蓝洁瑛 饰）对其倾心，卓一航却毫不动心。再次偶遇狼女，卓一航心生爱意，狼女亦为之倾心。然后正邪不两立，有情人面对诸般艰难险阻，终是黯然收场……",
    "genres": [
      "Action",
      "Romance",
      "Fantasy",
      "Adventure",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "爱情",
      "奇幻",
      "冒险",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 54728,
    "runtime": "89 min",
    "releaseDate": "1993-08-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0106342",
    "id": "movie-1293765"
  },
  {
    "sourceId": "1441801",
    "title": "局内人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p527999194.jpg",
    "summary": "华尔街一间热闹的信托银行，某日突然闯进了4名劫匪，挟持了包括银行员工在内的50名。这伙匪徒是在他们的首领道尔顿（克里夫•欧文 Clive Owen 饰）的远程指挥下行事的。道尔顿心思紧密、狡猾多疑，他让人质都穿上和匪徒一样的服饰，戴上和匪徒一样的面罩，以此来迷惑警方的狙击手和特种部队。警方一时亦无可奈何。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 53585,
    "runtime": "129 min",
    "releaseDate": "2006-03-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0454848",
    "id": "movie-1441801"
  },
  {
    "sourceId": "1301715",
    "title": "美国精神病人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2460996826.jpg",
    "summary": "本片改编自布莱特·伊斯顿·艾利斯极具争议的同名小说，是一部描述20世纪80年代末期美国都市生活的黑色社会讽刺片。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 49582,
    "runtime": "102 min",
    "releaseDate": "2000-01-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0144084",
    "id": "movie-1301715"
  },
  {
    "sourceId": "1308749",
    "title": "忘不了",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p486529425.jpg",
    "summary": "阿文（古天乐 饰）是一个小巴司机，在一次交通意外中丧生了，他的新婚妻子小慧（张栢芝 饰）强忍伤痛也要继续生活下去，还要照顾阿文与前妻生下的儿子乐乐（原岛大地 饰）。她开着阿文生前用过的小巴开始新的生活，可是行内的人都看不起这个女小巴司机，踌躇满志却处处碰壁。大辉（刘青云 饰）同情她的遭遇，便开始教授她一些在行内需要注意的行规以及竞争的方法。迫于生活的压力，小慧想让乐乐过上好生活，便打算把乐乐交给他的生母抚养，大辉出面阻止，并承诺帮忙抚养乐乐，但其实大辉心中也有不少解不开的结，两个同样心事重重的人，走到了一起。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 48954,
    "runtime": "109 min",
    "releaseDate": "2003-11-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0390272",
    "id": "movie-1308749"
  },
  {
    "sourceId": "1293799",
    "title": "壮志凌云",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1871745733.jpg",
    "summary": "“独行侠”皮特·米切尔（汤姆•克鲁斯 Tom Cruise 饰）的父亲是个战功显赫的老飞行员，他决心也要成为父亲那样的英雄。终于机会来了，他与军官“笨鹅”尼克·布拉德肖（安东尼•爱德华兹 Anthony Edwards 饰）一起被派到了Top Gun训练基地接受最严格的飞行训练。可是，“独行侠”的训练并不像预想中顺利，他的成绩一直不令人满意，一起训练的”冰人”汤姆·卡赞斯基（方·基默 Val Kilmer 饰）也对他也颇有微词。与此同时，“独行侠”遇到了美丽的女教官查莉（凯莉•麦吉利斯 Kelly McGillis 饰），两人对彼此暗生情愫，这令本来有些心灰意冷的“独行侠”重拾信心。在毕业前的一次训练中，“独行侠”搭档“笨鹅”再次同驾一机，但由于马达发生故障，“独行侠”与“笨鹅”被迫跳海，结果“笨鹅”不幸身亡。这次事件给“独行侠”带来了沉重的打击，本来因学业不顺就郁郁寡欢的他更加消沉了，甚至想要彻底放弃成为飞行员的梦想。“独行侠”最终能否克服心障重回蓝天？",
    "genres": [
      "Drama",
      "Action",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 46697,
    "runtime": "110 min",
    "releaseDate": "1986-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0092099",
    "id": "movie-1293799"
  },
  {
    "sourceId": "27073291",
    "title": "太空救援",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2017,
    "coverUrl": "",
    "summary": "位于外太空的“礼炮7号”空间站意外与地球失去联系，工程师维克托·阿约金和退役宇航员弗拉基米尔·费奥多罗夫临危受命，搭乘联盟号T-13寻找“礼炮7号”的踪迹，当经历宇宙空间对接、太空舱寒流、空间站失火、太阳能充电系统失灵等一系列危机准备返航之时，却被告知空间站即将被击落，一场更大的太空灾难正在袭来......",
    "genres": [
      "Action",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "冒险"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 7.7,
    "votes": 46186,
    "runtime": "111 min",
    "releaseDate": "2018-01-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6537238",
    "id": "movie-27073291"
  },
  {
    "sourceId": "3011459",
    "title": "危情时速",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1515352146.jpg",
    "summary": "宾夕法尼亚州南部的布鲁斯特市，资深的火车机师弗兰克·巴恩斯（丹泽尔·华盛顿 Denzel Washington 饰）即将提前退休，作为拥有丰富阅历和经验的老员工，他和伙伴们虽然对公司出于成本雇用相对便宜却没有经验的新员工不满，却也无可奈何。这天早晨，弗兰克迎来了新的搭档，年轻气盛的领航员威尔·科尔森（克里斯·佩恩 Chris Pine 饰），新老交替正式开始。与此同时，位于北部的富勒站出现状况，满载危险化学品的777号列车在无人驾驶的情况下径自开走，如野兽般咆哮着冲向人口密集的城镇。危险随时降临，弗兰克和威尔即将度过难忘的一天……",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "惊悚",
      "灾难"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 45934,
    "runtime": "98 min",
    "releaseDate": "2010-11-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0477080",
    "id": "movie-3011459"
  },
  {
    "sourceId": "1293867",
    "title": "和平饭店",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1863974996.jpg",
    "summary": "江湖杀手阿平（周润发 饰）是和平饭店的老板，传闻他武功了得，曾经一口气杀了二百多个马贼，并且他宣称和平饭店是一个“避难所”，只要进来住宿的人，无论他得罪了什么帮派，都不许前来挑衅生事，但不保证离开后的安全。",
    "genres": [
      "Action",
      "Western"
    ],
    "originalGenres": [
      "动作",
      "西部"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 45677,
    "runtime": "89 min",
    "releaseDate": "1995-04-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113292",
    "id": "movie-1293867"
  },
  {
    "sourceId": "5919538",
    "title": "只有你",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "",
    "summary": "哲民（苏志燮 饰）本是一名优秀的拳击手，现在却依靠白天送水晚上看更来谋生。哲民看更第一晚邂逅了美丽阳光的女生静华（韩孝珠 饰），遗憾的是静华的视力日渐退减再发展下去就是失明。沉默的哲民在静华面前慢慢打开心扉，两人由此相恋。原来哲民是一名孤儿，曾误入歧途做了打手 并因此入狱。如今的哲民决心从头来过，重新走上拳击生涯，一步步实现着他和静华设计的将来。然而，静华的眼疾越来越严重等不及她们去慢慢实现梦想。与之同时，哲民发现那场导致静华眼膜受损的车祸竟和自己当年的行差踏错有关系。强烈地内疚感使得哲民决定铤而走险参加地下拳击比赛，只为最快为静华筹到医疗费。静华能复明吗？哲民能活着和静华重聚吗？",
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
    "rating": 7.7,
    "votes": 43326,
    "runtime": "108 min",
    "releaseDate": "2011-10-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2082180",
    "id": "movie-5919538"
  },
  {
    "sourceId": "1307319",
    "title": "醉拳2",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "本片讲述的是一代宗师黄飞鸿年少时代一段历险。民初年间，年轻的黄飞鸿（成龙 饰）自学了一套威力无穷的拳法——醉拳。但是每次打出这套拳法，都要先喝得酩酊大醉，利用醉态打破一切武学定律，才能发挥出醉拳的威力。因为这样，黄飞鸿父亲黄麒英严禁儿子练这种有伤风雅、而且违背习武强身法则的拳法。",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 40989,
    "runtime": "102 min",
    "releaseDate": "1994-02-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111512",
    "id": "movie-1307319"
  },
  {
    "sourceId": "1305182",
    "title": "红河谷",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "",
    "summary": "一个汉人男子（邵兵饰）救下了被乡民准备供奉给雨神的女子（应真饰），两个人一起流落到了一个藏族部落，开始了他们新的生活。在这里，他们认识了美丽的藏族公主（宁静饰）。后来，英国探险队在雪山遇险，琼斯（尼克饰）和罗克曼（波尔饰）也被藏民救下，留在西藏修养。在这段时间的相处中，他们跨越了民族和肤色，培养除了深厚的感情。不久，伤养好后，英国人也离开了。",
    "genres": [
      "Drama",
      "Romance",
      "History",
      "War"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 40910,
    "runtime": "115 min",
    "releaseDate": "1999-10-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0223998",
    "id": "movie-1305182"
  },
  {
    "sourceId": "1308927",
    "title": "笑林小子2：新乌龙院",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "前一阵子销声匿迹的女魔头天魔再次出山，这次她的目的是印在乌龙院里面壁大师右手掌舵洗髓经。于是，天魔收买了糊涂杀手黄柠檬（张卫健 饰）和红柠檬（叶全真 饰），派两人前往乌龙院砍下面壁大师的右手掌带回来。黄柠檬和红柠檬来到乌龙院后，遇上了寺内三名行踪怪诞的弟子，这三人不时与其师父（李明炀 饰）斗法，红、黄柠檬却认为这三人不简单。这三名弟子行为古怪，不时出现爆笑场面。最后红、黄柠檬能否完成任务？",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "中国香港",
      "中国台湾"
    ],
    "rating": 7.7,
    "votes": 40774,
    "runtime": "90 min",
    "releaseDate": "1994-07-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111766",
    "id": "movie-1308927"
  },
  {
    "sourceId": "10487226",
    "title": "圣殇",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2012,
    "coverUrl": "",
    "summary": "本片荣获第69届威尼斯电影节最高奖金狮奖，是金基德的第18部电影。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 40453,
    "runtime": "104 min",
    "releaseDate": "2012-09-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2299842",
    "id": "movie-10487226"
  },
  {
    "sourceId": "1787277",
    "title": "彩虹女神",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p765911717.jpg",
    "summary": "岸田智也（市原隼人）和佐藤葵（上野树里）在大学结识。二人非常合拍，葵还常常给智也出谋划策如何追女生。葵是独立电影制作小组的成员，她要在毕业前导演一部叫《THE END OF THE WORLD》的电影，于是决定选用智也当男主角。无奈毕业后，路开始分叉。葵引荐智也去了一间影视社工作，重遇那晚葵想说出对智也的情愫，然而终究没有开口。",
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
    "rating": 7.7,
    "votes": 37343,
    "runtime": "118 min",
    "releaseDate": "2006-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0804513",
    "id": "movie-1787277"
  },
  {
    "sourceId": "1293926",
    "title": "看得见风景的房间",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1985,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527171442.jpg",
    "summary": "19世纪的英国，阶级隔阂还十分分明。这天，英国上层出身的露西（海伦娜•邦汉•卡特 Helena Bonham Carter 饰）和表姐夏洛特一起佛罗伦撒度假，不巧，露西住的酒店的房间看不到风景。同时来住店的英国父子两乔治（朱利安•桑兹 Julian Sands 饰）和他父亲见状，热心的父亲要和露西换一间房，因为他的房里能看到风景。露西开始不同意，在好心的店主的劝说下最终她同意了。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.7,
    "votes": 37322,
    "runtime": "117 min",
    "releaseDate": "1985-12-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0091867",
    "id": "movie-1293926"
  },
  {
    "sourceId": "3392569",
    "title": "早间主播",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p689627900.jpg",
    "summary": "电视节目制作人贝琪•弗勒（瑞秋•麦克亚当斯 Rachel McAdams 饰）最近可谓灾星附体，霉运连连，不仅被炒鱿鱼，还和男友分手。但好在柳暗花明又一村，贝琪幸运的获得了《晨间秀》节目组的邀约，这是一档面向全国播出的晨间新闻类脱口秀节目。贝琪看似开始行大运，实则不然。这节目的收视率近来连连下滑，完全是一烫手山芋，被丢在了贝琪手里。",
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
    "rating": 7.7,
    "votes": 36371,
    "runtime": "106 min",
    "releaseDate": "2010-11-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1126618",
    "id": "movie-3392569"
  },
  {
    "sourceId": "1301434",
    "title": "夺宝奇兵2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1709116195.jpg",
    "summary": "中国，印第安纳琼斯博士（Harrison Ford饰）与上海黑帮老大交易，对方在换得努尔哈赤的骨灰后便背信弃义，欲灭琼斯之口。关键时刻，机灵小鬼豆丁（Jonathan Ke Quan饰）救下琼斯博士和无故卷进的一位歌女威莉（Kate Capshaw饰）。",
    "genres": [
      "Action",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 36235,
    "runtime": "118 min",
    "releaseDate": "1984-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0087469",
    "id": "movie-1301434"
  },
  {
    "sourceId": "1292550",
    "title": "埃及艳后",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1963,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2496023539.jpg",
    "summary": "52岁的凯撒（雷克斯•哈里森 Rex Harrison 饰）以罗马执行官的身份驾临埃及，为了解决王室姐弟争位的事端。皇姐克里奥佩特拉（伊丽莎白•泰勒 Elizabeth Taylor 饰）美艳绝伦，凭借自身的魅力和政治手腕，迅速让凯撒拜倒在她的石榴裙下，不但获得了对埃及的统治权，而且还以美貌征服了罗马。",
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
      "英国",
      "美国",
      "瑞士"
    ],
    "rating": 7.7,
    "votes": 32915,
    "runtime": "192 min",
    "releaseDate": "1963-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0056937",
    "id": "movie-1292550"
  },
  {
    "sourceId": "1297248",
    "title": "五亿探长雷洛传1：雷老虎",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1273873245.jpg",
    "summary": "本片用一个香港警察从理想青年变成一代枭雄的过程，反应了香港五六十年代的社会问题。",
    "genres": [
      "Drama",
      "Action",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 32062,
    "runtime": "127 min",
    "releaseDate": "1991-09-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103292",
    "id": "movie-1297248"
  },
  {
    "sourceId": "1478066",
    "title": "父辈的旗帜",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "1945年2月，被喻为“太平洋的绞肉机”的硫磺岛战争结束。在战斗的第五天时，五名美军海军士兵、一名军医、一名随军记者一起“缔造”了一张英雄的照片，一张象征国家胜利的照片：他们将美国国旗插在了硫磺岛的制高点。",
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
    "rating": 7.7,
    "votes": 31535,
    "runtime": "132 min",
    "releaseDate": "2006-10-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0418689",
    "id": "movie-1478066"
  },
  {
    "sourceId": "1292341",
    "title": "性、谎言和录像带",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1989,
    "coverUrl": "",
    "summary": "格雷厄姆（詹姆斯•斯派德 James Spader 饰）有一个特殊的癖好，就是为各种各样的女人录影，这些女人在他的摄像机面前都毫不遮掩地谈论自己的性经验和其中细节。当格雷厄姆回到阔别多年的家乡时，他除了一辆汽车和这些录像带，一无所有。所以他只能暂时借住在同学约翰家。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 29799,
    "runtime": "100 min",
    "releaseDate": "1989-08-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0098724",
    "id": "movie-1292341"
  },
  {
    "sourceId": "1302325",
    "title": "毁灭之路",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "迈克尔(汤姆•汉克斯 Tom Hanks 饰)是美国芝加哥一个黑帮老大鲁尼的养子，他一直是鲁尼得力的左右手――帮派中令人恐惧的杀手“死亡天使”。迈克尔虽然杀人不眨眼，但现实中却是一个温文尔雅，烟酒不沾的好丈夫、好父亲。他的两个儿子一直都不知道父亲的职业，直到大儿子小迈克尔12岁了。一天他偷溜进父亲的汽车决定探知父亲的职业。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 29481,
    "runtime": "117 min",
    "releaseDate": "2002-07-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0257044",
    "id": "movie-1302325"
  },
  {
    "sourceId": "25762566",
    "title": "道熙呀",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2014,
    "coverUrl": "",
    "summary": "不苟言笑的首尔女警官李英男（裴斗娜 饰），因某件事被“流放”到一个偏远闭塞的海港小镇担任为期一年的派出所所长。抵达当地的第一天，英男便遇见了怯懦沉默的小女孩孙道熙（金赛纶 饰）。道熙是当地唯一的青壮年朴龙河收养的孩子，但是朴及其母亲却经常对道熙拳脚相向，女孩在校期间也饱受同学的欺负。某晚，英男从醉酒的朴龙河手中搭救了道熙，自此之后道熙便成为了她的小跟班。之后的一天，朴母死于意外，这让道熙得以暂时躲在英男的家中避难。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 29101,
    "runtime": "119 min",
    "releaseDate": "2014-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3661798",
    "id": "movie-25762566"
  },
  {
    "sourceId": "4180445",
    "title": "双宝斗恶魔",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1225704462.jpg",
    "summary": "风和日丽的一天，杰克和艾丽（Katrina Bowden 饰）等8名大学生驱车来至莫里斯湖的森林度假。这里据说在20年前曾发生一起惨绝人寰的大屠杀，这个传说让这群看惯类似题材恐怖电影的男女们惴惴不安，而途中偶遇的两名当地青年也让他们心有余悸。那两名青年名叫托克（Alan Tudyk 饰）和戴尔（Tyler Labine 饰），是一对从小一起长大的好朋友，虽然面相凶恶，骨子里则实实在在的热心肠。他们相约前往莫里斯湖的山间小屋附近垂钓，夜晚偶然救助了意外落水的艾丽。然而他们的善举却被艾丽的朋友们误解成为杀人的暴行。鲁莽的男女们决心救出朋友，却引发了一连串的血腥惨剧……",
    "genres": [
      "Comedy",
      "Horror"
    ],
    "originalGenres": [
      "喜剧",
      "恐怖"
    ],
    "originalRegions": [
      "美国",
      "加拿大"
    ],
    "rating": 7.7,
    "votes": 28160,
    "runtime": "89 min",
    "releaseDate": "2010-01-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1465522",
    "id": "movie-4180445"
  },
  {
    "sourceId": "26610229",
    "title": "方形",
    "countryCode": "SE",
    "countryName": "Sweden",
    "year": 2017,
    "coverUrl": "",
    "summary": "克里斯蒂安（克拉斯·邦 Claes Bang 饰）和妻子离婚后，带着小女儿（Lilianne Mardon 饰）开始了全新的生活。克里斯蒂安在一间艺术馆里担任策展人的职位，最近，他正在筹划一项名为“方形”的装置展览，希望宣扬一种人人平等互助的积极向上的理念。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "瑞典",
      "德国",
      "法国",
      "丹麦"
    ],
    "rating": 7.7,
    "votes": 27940,
    "runtime": "151 min",
    "releaseDate": "2017-05-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4995790",
    "id": "movie-26610229"
  },
  {
    "sourceId": "1307681",
    "title": "榴莲飘飘",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2000,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p582402863.jpg",
    "summary": "学了九年京剧却在内地没有出路的阿燕（秦海璐）不得已来到旺角理智地化为妓女挣快钱，并给自己定下（做到双程护照到期的）期限，在所住小巷结识同样来自大陆但是非法入境的少女阿芬（麦惠芬）后，她被阿芬在逆境中的乐观与单纯打动，两人在异乡成为朋友。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港",
      "法国"
    ],
    "rating": 7.7,
    "votes": 26538,
    "runtime": "116 min",
    "releaseDate": "2000-11-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0255327",
    "id": "movie-1307681"
  },
  {
    "sourceId": "1296223",
    "title": "伊丽莎白",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p880919713.jpg",
    "summary": "本片荣获最佳影片、最佳导演、最佳女主角、最佳造型化妆奖等各项荣誉。",
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
      "英国"
    ],
    "rating": 7.7,
    "votes": 25061,
    "runtime": "124 min",
    "releaseDate": "1998-10-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0127536",
    "id": "movie-1296223"
  },
  {
    "sourceId": "3149087",
    "title": "爱情的牙齿",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1510158030.jpg",
    "summary": "几十年以来，钱叶红（颜丙燕 饰）从懂得爱、遇上爱、到最后对爱的惘然和麻木，她一直用疼痛去理解爱情的面貌。70年代末，她还是一个十几岁的学生领袖，在那个男女绝不能私下交往的年代，她收到了一封男生的情信。钱叶红公开信件，让男生受尽奚落。男生拿起砖头在她背上重重拍下，给钱叶红留下了终身的疼痛，然而，男孩却在之后不久意外过世。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 24820,
    "runtime": "109 min",
    "releaseDate": "2007-08-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1258623",
    "id": "movie-3149087"
  },
  {
    "sourceId": "1307649",
    "title": "女魔头",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1384540432.jpg",
    "summary": "沃诺斯（查理兹·塞隆 Charlize Theron 饰）童年的不幸把她推向了罪孽深重的人生。她的母亲离她而去，对待她的是无休止的谩骂和虐打。沃诺斯为了满足毒瘾和生计，十来岁就开始了卖淫的生活。她在公路上为司机们提供低级的性服务，无望的生活无穷无尽。然而，年轻女孩西尔比 （克里斯蒂娜·里奇 Christina Ricci 饰）的出现让她心中有了亮光，两人开始了一段恋情，住在一起。",
    "genres": [
      "Drama",
      "LGBTQ+",
      "Biography",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "同性",
      "传记",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 24587,
    "runtime": "109 min",
    "releaseDate": "2003-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0340855",
    "id": "movie-1307649"
  },
  {
    "sourceId": "1301342",
    "title": "风中奇缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1525484625.jpg",
    "summary": "故事发生在新大陆被发现不久后，英国一批勇敢的开拓者在雷利夫总督和上尉庄麦斯的带领下来到了美洲新大陆，遇上了当地美丽的土著公主宝嘉康蒂。庄麦斯被美丽的宝嘉康蒂深深吸引，庄麦斯向她解释了总督是为了黄金才来到这里，但他很乐意帮助当地的土著建设家园；宝嘉康蒂表示这里的人从来没有见过黄金。这时庄麦斯得知雷利夫总督挖不到黄金，已经开始攻打当地的部落意图从他们手中夺取黄金。他决定阻止这一切，化解白人和当地人之间的仇恨。",
    "genres": [
      "Drama",
      "Romance",
      "Animation",
      "Musical",
      "Family",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "动画",
      "歌舞",
      "家庭",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 23101,
    "runtime": "81 min",
    "releaseDate": "1995-06-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0114148",
    "id": "movie-1301342"
  },
  {
    "sourceId": "1929461",
    "title": "只要在一起",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1849794439.jpg",
    "summary": "人生中总是充满意外的相遇。爱画画的孤独女生卡蜜伊（奥黛丽•塔图饰），落寞贵族菲利贝尔(Laurent Stocker饰)以及生活邋遢的帅气厨师弗朗克（吉约姆•卡内饰)，本是巴黎街头的陌生人。一次偶然，却让他们开始了同室而居的生活。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 7.7,
    "votes": 22887,
    "runtime": "97 min",
    "releaseDate": "2007-03-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0792965",
    "id": "movie-1929461"
  },
  {
    "sourceId": "1297036",
    "title": "红玫瑰白玫瑰",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2197949156.jpg",
    "summary": "该片改编自张爱玲同名短篇小说。佟振保（赵文瑄）是有“柳下惠”好名声的男子，然而在遇到老同学风情万种的妻子王娇蕊（陈冲）后，心还是乱了，可是当王娇蕊把一颗真心全给了他时，他却因没勇气承受太多责难临阵脱逃。顺着母亲的意思，振保同他并不欢喜的人如白纸般单薄的孟烟鹂（叶玉卿）结了婚，可是因为欲望的不能满足，他开始在外嫖妓，婚姻生活没令他有任何收获。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆",
      "中国台湾"
    ],
    "rating": 7.7,
    "votes": 21917,
    "runtime": "110 min",
    "releaseDate": "1994-12-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0110053",
    "id": "movie-1297036"
  },
  {
    "sourceId": "1292440",
    "title": "一条叫旺达的鱼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "",
    "summary": "一部令人忍俊不禁的喜剧。四个贼人在策划一桩钻石盗窃案，成员有患有口吃的肯（麦克·帕林 Michael Palin饰）、乔治（汤姆·乔治森Tom Georgeson饰）、乔治的女友旺达（杰米·李·柯蒂斯 Jamie Lee Curtis饰）——碰巧肯把他最爱吃的鱼也称为“旺达”、奥托（凯文·克莱恩 Kevin Kline饰）。尽管盗窃过程发生了小插曲，几人还是得到了价值连城的宝贝，怎料麻烦事却一桩接一桩。",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 7.7,
    "votes": 21846,
    "runtime": "108 min",
    "releaseDate": "1988-07-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0095159",
    "id": "movie-1292440"
  },
  {
    "sourceId": "21350559",
    "title": "盒子怪",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "《盒子怪》根据阿兰·斯诺（Alan Snow）的小说《这里有怪兽》（Here Be Monsters）改编，是一个幽默的寓言故事。“奶酪桥”（Cheesebridge）是维多利亚时期一个光鲜亮丽的城市，这里的居民痴迷于财富、等级，还有臭奶酪！然而在他们别致的鹅卵石道路之下住着一群“可怕”的怪物，他们每天晚上都会从下水道爬出来，偷走居民家中的孩子和奶酪——当然，这只是当地居民的一面之词！事实上“盒子怪”是一群非常可爱害羞的生物，他们躲在可回收的纸板箱里，就像乌龟喜欢缩在自己的壳里一样。盒子怪们收养了一个人类孤儿，给他起名“蛋生”（Eggs），这个小男孩和一个爱冒险的地上世界的女孩温妮（Winnie）成为了好朋友，他们需要在盒子怪与人类之间架起一座桥梁——尤其是当人类政客为了选票而把盒子怪们描绘成一群可怕怪物，进而煽动民众驱逐他们的时候……",
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
      "美国"
    ],
    "rating": 7.7,
    "votes": 21701,
    "runtime": "96 min",
    "releaseDate": "2014-08-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0787474",
    "id": "movie-21350559"
  },
  {
    "sourceId": "1294019",
    "title": "监狱风云2：逃犯",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2221758757.jpg",
    "summary": "《监狱风云》的续作，资深囚犯阿正（周润发 饰）因为与前任科长（张耀扬 饰）的过节而延长刑期，服刑期间母亲病逝，儿子良仔被送到孤儿院甚至对父亲产生怨恨。阿正一心想申请外出看望儿子却遭到预警头子“鬼见愁”（徐锦江 饰）的诸多刁难。“鬼见愁”因收买狱中大陆帮首领大圈龙（陈松勇 饰）不果 ，把其视为眼中钉，并且从中唆使挑拨使得大陆帮与阿正之间产生隔阂。一次陷害使得大圈龙不得不出逃，被误会陷害大圈龙的阿正也被迫逃走，逃跑途中两人相遇并产生了一段“难兄难弟”般的友情。最后阿正被再次抓回狱中，在暴乱中阿正终于得到机会和”鬼见愁“短兵相接。",
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
    "rating": 7.7,
    "votes": 21631,
    "runtime": "113 min",
    "releaseDate": "1991-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103044",
    "id": "movie-1294019"
  },
  {
    "sourceId": "4135443",
    "title": "恶人",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p684630800.jpg",
    "summary": "在一个彷徨空洞的夜晚，青春靓丽却虚华浮躁的保险公司推销员石桥佳乃（満島ひかり 饰）陈尸福冈的三濑岭。她生前曾通过交友网站与土木作业工人清水祐一（妻夫木聡 饰）交往，后为攀援富贵而转投大学生増尾圭吾（岡田将生 饰）的怀抱，这种轻浮行径直接导致了她死亡的悲剧。在此之后，增尾成为主要嫌疑人受到警方盘查。而痛苦的清水则通过网络结识了孤独的服装店营业员马込光代（深津絵里 饰），两个惺惺相惜的疏离之人展开了绝路逃亡……",
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
    "rating": 7.7,
    "votes": 19789,
    "runtime": "139 min",
    "releaseDate": "2010-09-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1542840",
    "id": "movie-4135443"
  },
  {
    "sourceId": "26340305",
    "title": "毕业会考",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2016,
    "coverUrl": "",
    "summary": "罗密欧（阿德里安·蒂蒂耶尼 Adrian Titieni 饰）和妻子玛格达（莉亚·巴格纳 Lia Bugnar 饰）结婚多年，两人共同养育着女儿艾丽莎（玛丽亚·维多利亚·德拉格斯 Maria-Victoria Dragus 饰），漫长的婚姻生活令罗密欧和玛格达都感到疲惫不堪，对妻子早已经没有感情的罗密欧唯一的指望，就是将艾丽莎送出国留学，希望她能够尽早离开这个陈腐不堪的国家。",
    "genres": [
      "Drama",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "家庭"
    ],
    "originalRegions": [
      "罗马尼亚",
      "法国",
      "比利时"
    ],
    "rating": 7.7,
    "votes": 19549,
    "runtime": "128 min",
    "releaseDate": "2016-05-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4936450",
    "id": "movie-26340305"
  },
  {
    "sourceId": "1293868",
    "title": "龙凤配",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1954,
    "coverUrl": "",
    "summary": "萨宾娜（奥黛丽·赫本 Audrey Hepburn 饰）出生在富有的拉若比庄园，但她并非千金贵族，而是该庄园一介小小司机的女儿。可悲的是，萨宾娜看上了庄园里风流成性的公子哥戴维（威廉·霍尔登 William Holden 饰），而后者从来没有将她放在眼里。萨宾娜遵循父亲的旨意前往巴黎学习厨艺，在此期间，逐渐成熟起来的萨宾娜散发出了惊人的魅力。与此同时，为了促进家族企业的发展，戴维与伊丽莎白（玛莎·海尔 Martha Hyer 饰）的婚事正在如火如荼的进行中。就在这个节骨眼上，学有所成的萨宾娜回到了庄园，她的归来立刻吸引了戴维的眼球，两人不顾长辈的反对感情迅速升温。",
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
    "rating": 7.7,
    "votes": 19277,
    "runtime": "113 min",
    "releaseDate": "1954-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0047437",
    "id": "movie-1293868"
  },
  {
    "sourceId": "26367579",
    "title": "火海凌云",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2016,
    "coverUrl": "",
    "summary": "本片翻拍自1980年苏联同名经典影片。极富正义感的飞行员古辛（丹尼拉·科兹洛夫斯基 Danila Kozlovsky 饰），因违抗上级命令而被军队开除，成为民航机组的实习飞行员，并结识了精神导师津琴科（弗拉基米尔·马什科夫 Vladimir Mashkov 饰）和恋人亚历珊德拉（阿格尼·格鲁迪特 Agnė Grudytė 饰）。然而，在一次飞行中，突遇的火山爆发、恶劣的天气状况让机上的一切都失去了控制，机上所有成员命悬一线……",
    "genres": [
      "Drama",
      "Action",
      "Adventure",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "冒险",
      "灾难"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 7.7,
    "votes": 19183,
    "runtime": "138 min",
    "releaseDate": "2016-08-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5653294",
    "id": "movie-26367579"
  },
  {
    "sourceId": "1358421",
    "title": "流氓医生",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1995,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p463651549.jpg",
    "summary": "医生刘文（梁朝伟 饰）表面是个玩世不恭的人，但他实际非常细腻、洞悉世情的人。他厌恶不公的医疗制度，决定到红灯区经营诊所。醉心医学的他医术高强，面对贫苦大众好施医德。在他的病人当中有英勇的警员（刘青云 饰）、风月女子等等。他除了医治病人身体上的伤痛，还乐于倾听这群草根的心声，成为了他们的好友。但他却被昔日的好友陷害，刘文面临被吊销医生执照的危机。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 18800,
    "runtime": "98 min",
    "releaseDate": "1995-02-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0113672",
    "id": "movie-1358421"
  },
  {
    "sourceId": "10756518",
    "title": "大梦想家",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "华特（汤姆·汉克斯 Tom Hanks 饰）是一名制片人，因为女儿莉莉安（丹德里·泰勒 Dendrie Taylor 饰）格外喜爱一本名为《欢乐满人间》的小说，华特答应莉莉安，会将这本小说中的美妙故事搬上屏幕，让更多的人领略其中的快乐与美好。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "美国",
      "英国",
      "澳大利亚"
    ],
    "rating": 7.7,
    "votes": 17766,
    "runtime": "125 min",
    "releaseDate": "2013-12-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2140373",
    "id": "movie-10756518"
  },
  {
    "sourceId": "1443650",
    "title": "天使A",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1755862685.jpg",
    "summary": "巴黎，一个小混混安德烈（加梅勒•杜布兹 Jamel Debbouze 饰）因走投无路准备跳河时，他赫然发现了一位金发美女也正在跳河。安德烈奋不顾身的救起了这位同病相怜的美女――安吉尔（丽•拉丝姆森 Rie Rasmussen饰）。",
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
      "法国"
    ],
    "rating": 7.7,
    "votes": 17575,
    "runtime": "91 min",
    "releaseDate": "2005-12-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0473753",
    "id": "movie-1443650"
  },
  {
    "sourceId": "1295490",
    "title": "捕鼠记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1198261784.jpg",
    "summary": "当父亲去世后，欧尼（内森·连恩 Nathan Lane 饰）和拉尔斯（李·伊万斯 Lee Evans 饰）兄弟二人继承了一家线厂和一间旧房子。拉尔斯因不肯卖掉线厂而被势利的妻子赶出家门，而欧尼经营的餐厅突遭横祸，也被迫流落街头。无可耐克的兄弟俩只能搬去了父亲留下的老房子住。偶然间，兄弟两个得知他们住的旧房子是建筑大师的传世之作，非常具有艺术价值，价值数百万。兄弟俩决定将房子装修一番出售，但发现房子了一只常年居住的老鼠。这只聪明的老鼠对房子已经有了感情，不愿兄弟俩将它变卖，于是围绕着这幢古宅，一场人与鼠的大战即将展开......",
    "genres": [
      "Comedy",
      "Action",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 17351,
    "runtime": "98 min",
    "releaseDate": "1997-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119715",
    "id": "movie-1295490"
  },
  {
    "sourceId": "1483239",
    "title": "夺命枪火",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p734522641.jpg",
    "summary": "表面上看来，乔伊（保罗·沃克 Paul Walker 饰）过着人人羡慕的美满生活，温馨的房子，漂亮的妻子，听话懂事的儿子，乔伊似乎对这一切的一切都信手拈来。但在背地里，乔伊有着自己的苦恼，身为一个黑道中人，他至今仍然做着替人跑腿销赃的“小事”，上位之日遥遥无期。终于有一 天，机会来了，老大带领乔伊参加了一次重要的毒品交易，没想到遭人暗算，老大被射身亡。一如既往的，乔伊被分配了销毁枪支的小任务，心灰意冷的他随手将枪放入了家中的地下室里。",
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
      "美国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 17115,
    "runtime": "122 min",
    "releaseDate": "2006-02-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0404390",
    "id": "movie-1483239"
  },
  {
    "sourceId": "4300640",
    "title": "奶奶强盗团",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p486302575.jpg",
    "summary": "抽烟喝酒的三个另类老奶奶亭子（罗文熙 饰）、英姬（金秀美 饰）和申子（金惠玉 饰）都来自拮据的贫寒家庭，她们家家都有本难念的经。支撑她们活下去的唯一希望就是攒钱去夏威夷旅行。为去夏威夷她们省吃俭用甚至定期去超市盗窃，终于在8年后攒够了837万韩元的旅费。就在她们按照旅行社的要求去银行存钱的时候，被两名银行强盗把钱打劫一空。三人立誓要追回存款，一次偶然的机会她们发现其中一名劫匪俊锡（林昌正 饰）的藏身之处，却被告知钱被另一名劫匪私吞。亭子忍无可忍决定效法俊锡抢劫银行。英姬和申子无奈同意后，她们让俊锡担任她们的教练。每天的体能训练，让她们苦不堪言。三个老奶奶的强盗之路笑料百出、困难重重。她们能否抢劫成功，去夏威夷旅行的夙愿能否实现呢……",
    "genres": [
      "Drama",
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 17014,
    "runtime": "107 min",
    "releaseDate": "2010-03-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1832533",
    "id": "movie-4300640"
  },
  {
    "sourceId": "1295899",
    "title": "二见钟情",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1995,
    "coverUrl": "",
    "summary": "露西（桑德拉·布洛克 Sandra Bullock饰）有着平凡的职业，平凡的长相。每天在车站售票处寂寞的工作着，生活唯一亮色就是天天都盼望着准时在车站出现的英俊的彼特（彼得·盖勒 Peter Gallagher饰）。她默默坚持的感情终于在一个圣诞夜有了进展——她救起昏迷在车站的彼特，送往医院，被闻讯赶来的彼特家人误认为她就是彼特的女友。于是，露西既尴尬又不失幸福地接受了这个误会，悉心照料一直昏迷的彼特。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 16685,
    "runtime": "103 min",
    "releaseDate": "1995-04-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0114924",
    "id": "movie-1295899"
  },
  {
    "sourceId": "1298873",
    "title": "刀马旦",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1986,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520877660.jpg",
    "summary": "民初时代国家动荡不安，军阀割据导致民不聊生。曹云(林青霞饰)是大军阀曹将军的女儿，也是一个爱国者。但是不愿见到父亲帮助袁世凯以国家的名义向外国银行借贷巨款，让国家的财务更雪上加霜，于是偷偷与革命人士联络。但是一边是国家，一边是父亲也让曹云不知如何取舍而陷入内心的挣扎。白妞(叶倩文饰)从小在戏班春和班长大，被戏班主的父亲（午马饰）当作丫环使，痴迷唱戏的她一直希望登台表演，却没有机会；湘红(钟楚红饰)是一位贪财的歌妓，趁某军阀逃跑时偷走其家中一大箱珠宝，却误打误撞让珠宝运进了春和班里。这三位在姻缘巧合下结识，透过这三位主角的生命交错，共同谱出一段爱国传奇......",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 16654,
    "runtime": "104 min",
    "releaseDate": "1986-09-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0090952",
    "id": "movie-1298873"
  },
  {
    "sourceId": "1864990",
    "title": "身为人母",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p461621926.jpg",
    "summary": "一处平静又寻常的社区里，主妇萨拉（凯特•温丝莱特 Kate Winslet 饰）每天的工作就是带孩子，而她的丈夫理查德却整日沉迷于成人网站自慰，夫妻关系濒临有名无实的境地。无聊的日子中，萨拉的注意力被同社区的“律师情人”布拉德（帕特里克•威尔森 Patrick Wilson 饰）所吸引。布拉德的妻子凯西（詹妮弗•康纳利 Jennifer Connelly 饰）是位女强人，平日忙于工作，无暇顾及家庭，夫妻之间越渐陌生。萨拉和布拉德由借带孩子之名越走越近，时常在社区游泳池相会，他们最终跨越了界线……这个夏天的压抑气氛，伴随社区到来了一位恋童者所引发的恐慌达到了顶峰，萨拉在难以忍受与布拉德的地下情之后提出了私奔计划。而在当晚，没有料到的情况发生了。",
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
      "美国"
    ],
    "rating": 7.7,
    "votes": 16149,
    "runtime": "137 min",
    "releaseDate": "2006-11-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0404203",
    "id": "movie-1864990"
  },
  {
    "sourceId": "6123978",
    "title": "庸才",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2011,
    "coverUrl": "",
    "summary": "前所未有的东日本大地震以及随之引发的海啸、核泄漏摧毁了无数人的生活，这其中包括15岁的中学生住田祐一（染谷将太 饰）。灾难过后，他与母亲（渡边真起子 饰）以及夜野（渡边哲 饰）、田村（吹越满 饰）等灾民住在自家的租船场，间或忍受滥赌的父亲（光石研 饰）和讨债的黑社会金子（点点 饰）的骚扰。同班同学中，茶泽景子（二阶堂富美 饰）是唯一欣赏住田的人，她记录住田每一句精彩的语录，自顾自闯入对方的生活。他们心甘情愿做一名毫无成就的普通人，却无法避免残酷的生活对他们无情碾压。在一个血腥的夜晚，住田犯下不可饶恕的罪行，由此展开了自毁的人生……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.7,
    "votes": 16006,
    "runtime": "129 min",
    "releaseDate": "2012-01-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1900893",
    "id": "movie-6123978"
  },
  {
    "sourceId": "1299809",
    "title": "玩偶",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1462821088.jpg",
    "summary": "本片依照季节交叉着串讲了三段凄美爱情故事。",
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
    "rating": 7.7,
    "votes": 14957,
    "runtime": "114 min",
    "releaseDate": "2002-10-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0330229",
    "id": "movie-1299809"
  },
  {
    "sourceId": "1296623",
    "title": "两个只能活一个",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2387721408.jpg",
    "summary": "生活潦倒的穷鬼阿武（金城武）某次因为赌博被人殴打至重伤后，开始把生命看得一文不值，拿命赌命以八万元代价接了一宗杀人买卖。行动前因为获得八十万意外之财，阿武又爱惜起生命来，请了刚从监狱出来的女杀手卡雯（李若彤）代他完成任务。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 14844,
    "runtime": "89 min",
    "releaseDate": "1997-05-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119818",
    "id": "movie-1296623"
  },
  {
    "sourceId": "3073268",
    "title": "传奇的诞生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531286907.jpg",
    "summary": "本片讲述了球王贝利儿时从贫民窟擦鞋童，靠自己的努力克服重重阻碍，逆转绝境成为足球世界最强者的故事。影片揭秘了贝利成名前不为人知的经历，家境贫穷、旁人的冷眼、队友的排挤并没有阻碍贝利的成长，父母的教育一直影响着贝利，从被人贬低到万人瞩目，他一个人的逆袭，燃动了数十亿人的斗志。",
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
    "rating": 7.7,
    "votes": 14596,
    "runtime": "107 min",
    "releaseDate": "2018-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0995868",
    "id": "movie-3073268"
  },
  {
    "sourceId": "1308379",
    "title": "阴阳师2",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2003,
    "coverUrl": "",
    "summary": "平安时代，百鬼夜行，封鬼仪式正在右大臣藤原安麻吕府邸进行。安麻吕之女日美子（深田恭子 饰）戎装登场，一箭命中靶心，引来全场惊叹。这位被喻为“连鬼都不敢接近”的公主，却令源博雅（伊藤英明 饰）暗自倾心。天现异象，京都骚动，魍魉横行。平安京已有四人遇害，民间出现驱鬼术士幻角（中井贵一 饰），日美子亦在异象后开始梦游。博雅为此替右大臣来请安倍晴明（野村万斋 饰）商谈。与此同时，宫廷供奉的出云三神器之一草薙剑也出现了异动。晴明受天皇所托，与博雅开始调查种种异况背后出云与大和的隐秘渊源。",
    "genres": [
      "Action",
      "Fantasy"
    ],
    "originalGenres": [
      "动作",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.7,
    "votes": 14563,
    "runtime": "112 min",
    "releaseDate": "2003-10-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0383543",
    "id": "movie-1308379"
  },
  {
    "sourceId": "1307577",
    "title": "唐山大兄",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1971,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2228023573.jpg",
    "summary": "因家乡年景不好，青年郑潮安（李小龙 饰）跟随三叔远赴泰国，郑在当地华工许剑（田俊 饰）的帮助下，得到了一份冰厂的工作。许剑为人仗义好打抱不平，时常卷入争斗，郑潮安虽也学得一身功夫，但碍于母亲的劝诫不能出手。华工们工作的这家冰厂为牟取利益，在冰中藏匿毒品贩运，不久，两名华工因为偶然拾到了冰中的毒品，被厂长和老板杀害，许剑向老板要人，反被对方派众打手于家中残忍杀害。工友们寻找失踪的华工和许剑无获，于是罢工抗议，厂长和监工们痛打工人，郑潮安仗义出手，厂长畏惧升其为领导，众工人称呼郑为“唐山大兄”。老板方面见笼络郑潮安不成，杀害了所有华工，郑潮安冲到老板家中，欲令其血债血偿……",
    "genres": [
      "Action"
    ],
    "originalGenres": [
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.7,
    "votes": 14243,
    "runtime": "100 min",
    "releaseDate": "1971-10-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0067824",
    "id": "movie-1307577"
  },
  {
    "sourceId": "4291275",
    "title": "到阜阳六百里",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1240205536.jpg",
    "summary": "心高气傲的年轻女子曹俐（秦海璐饰）本想一探外面的世界，一路从深圳打拼到光鲜亮丽的大都市上海。背井离乡的曹俐，努力逃离她失败的婚姻和生意经营的失败。然而她却仍生活在社会的最底层。她与中年妇女谢琴（唐群饰）合租在两平米不到的简陋小房内，每日疲于奔命地打工挣钱。同乡狗哥骗来一辆旧巴士，邀曹俐入伙推销阜阳返乡车票，哄骗二十八个阿姨乘车返乡。虽然离上海老家只有六百里，但她依旧不敢踏上回家的路。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国大陆",
      "中国台湾"
    ],
    "rating": 7.7,
    "votes": 14113,
    "runtime": "89 min",
    "releaseDate": "2011-12-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1733271",
    "id": "movie-4291275"
  },
  {
    "sourceId": "1302176",
    "title": "白头神探",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2136952828.jpg",
    "summary": "黎巴嫩贝鲁特，从天而降的白头神探弗兰克•卓本中尉（莱斯利•尼尔森 Leslie Nielsen 饰）将一群阴谋破坏美国安定团结的阿拉伯极端分子痛揍，但返回洛杉矶的弗兰克并未得到嘉奖，因为新的案件在等待着他：同事诺德伯格因调查贩毒案被重伤，时值伊丽莎白女王访问洛杉矶，受命保卫女王的弗兰克只能挤出时间调查诺德伯格被袭案，在拜访女王接待委员会首脑、商人兼议员文森特（里卡多•蒙特尔班 Ricardo Montalban 饰）时，弗兰克敏锐的嗅到其与贩毒案的关联，文森特方面则暗示美女助理珍•斯班瑟（普瑞希拉•普雷斯利 Priscilla Presley 饰）接近弗兰克，以便取得警方第一手信息。文森特如此心虚，是因为他受人委托刺杀英国女王，而看上去毫不靠谱的弗兰克，此时是文森特眼中的头号大敌……",
    "genres": [
      "Comedy",
      "Action",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 14046,
    "runtime": "85 min",
    "releaseDate": "1988-12-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0095705",
    "id": "movie-1302176"
  },
  {
    "sourceId": "1297317",
    "title": "谁陷害了兔子罗杰",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1988,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2199309048.jpg",
    "summary": "在美国洛杉矶有一个专供卡通人物居住的“图恩城”，卡通明星兔子罗杰（Charles Fleischer 配音）怀疑妻子杰西卡（凯瑟琳·特纳 Kathleen Turner 配音）有外遇，拍戏时常常走神，遭到他的搭档娃娃哈曼的奚落。卡通电影公司老板马隆便雇佣私人侦探埃迪（鲍勃·霍斯金斯 Bob Hoskins 配音）去查明情况，并拍下杰西卡偷情的照片，好让罗杰下定决心，斩断情缘，专心投入卡通系列片的拍摄。埃迪因自己的弟弟特迪不久前被“图恩城”的卡通角色暗害，也急于早日追出凶手，便慨然将此事承诺下来。而随着调查的深入，事情并不像埃迪想的那么简单，其中还另有奸情，慨然将此事承诺下来，就不能轻易放弃，埃迪能否找到案件背后的真相呢……",
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
      "美国"
    ],
    "rating": 7.7,
    "votes": 13783,
    "runtime": "104 min",
    "releaseDate": "1988-06-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0096438",
    "id": "movie-1297317"
  },
  {
    "sourceId": "3726986",
    "title": "十三刺客",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p656541463.jpg",
    "summary": "已是江户时代后期，时有明石藩江户之家老间宫图书（内野聖陽 饰）在幕府老中土井大炊头（平幹二朗 饰）的宅前自杀，此举引起朝野震动。一切皆由明石藩主齐昭（稲垣吾郎 饰）而起。齐昭系现任将军的异母弟弟，其人嗜血如命、暴虐无常，引起朝廷上下诸多人等的不满，然齐昭已内定成为下任老中。为免苍生遭其荼毒，土井授意岛田新作卫门（役所広司 饰）在齐昭回藩途中予以刺杀。新左卫门召集了仓永左平太（松方弘樹 饰）、三桥军次郎（沢村一樹 饰）、平山九十郎（伊原剛志 饰）等13名刺客，在齐昭的必经之地布下层层埋伏……",
    "genres": [
      "Action",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "古装"
    ],
    "originalRegions": [
      "日本",
      "英国"
    ],
    "rating": 7.7,
    "votes": 13446,
    "runtime": "141 min",
    "releaseDate": "2010-09-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1436045",
    "id": "movie-3726986"
  },
  {
    "sourceId": "3077739",
    "title": "预言者",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p776480745.jpg",
    "summary": "青年马利克（Tahar Rahim 饰）因参与犯罪活动被判刑六年，在监狱里，他很快因自己的一半阿拉伯血统被科西嘉帮派领袖卢西亚尼（Niels Arestrup 饰）注意，后者强逼马利克刺杀一名阿拉伯犯人，马利克完成了任务，在监狱生涯中得到卢西亚尼帮派的保护。一年后监狱转移部分科西嘉犯人，卢西亚尼势力大减，视学会了科西嘉语的马利克为眼耳，同时马利克在监狱学校中补习不辍，不久马利克得到白天外出工作的机会，借助监狱中获得的关系，马利克涉足大麻生意，获利颇丰，并逐渐挣脱卢西亚尼的控制自立门户……",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "法国",
      "意大利"
    ],
    "rating": 7.7,
    "votes": 13434,
    "runtime": "155 min",
    "releaseDate": "2009-08-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1235166",
    "id": "movie-3077739"
  },
  {
    "sourceId": "1900121",
    "title": "波特小姐",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2006,
    "coverUrl": "",
    "summary": "比阿特丽克斯·波特女士所写的儿童小说影响了一代又一代的孩子们，他们一直为波特女士作品中的角色和故事情节所痴迷不已。但是，对于她个人的生活，波特女士却一直谨慎地保持着低调，不肯轻易地让外人了解她的私生活。然而，如今，奥斯卡最佳女主角奖获得者蕾妮·齐薇格将要把波特女士生活中的秘密，在影片《波特女士》中展现给观众。该片由克里斯·努安执导，这是他在1995年拍摄了广受好评的《小猪巴比》之后第一次执导电影。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "英国",
      "美国",
      "马恩岛"
    ],
    "rating": 7.7,
    "votes": 13404,
    "runtime": "88 min",
    "releaseDate": "2007-01-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0482546",
    "id": "movie-1900121"
  },
  {
    "sourceId": "3226150",
    "title": "呼啸山庄",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2360457461.jpg",
    "summary": "乡绅恩萧先生外出带回了一名吉普赛小孩回呼啸山庄，取名希斯克利夫（汤姆•哈迪 Tom Hardy 饰）。儿子亨德雷（伯恩•戈曼 Burn Gorman 饰）嫉妒父亲对希斯克利夫的偏爱，对他百般愚弄和讥讽。恩萧先生只得把处处针对养子的亨德雷送往寄宿学校。女儿凯瑟琳（夏洛特•莱李 Charlotte Riley饰）自小与希斯克利夫青梅竹马，两人渐生深厚的情愫。恩萧先生去世后，亨德雷回到呼啸山庄继承父业，把希斯克利夫贬为奴仆，极尽报复。而凯瑟琳也迫于无奈嫁给了画眉田庄的埃德加（安德鲁•林肯 Andrew Lincoln 饰）。万念俱灰的希斯克利夫选择了远走他乡，三年后积累了巨额的财富回来开始了疯狂的报复。他设局夺得了呼啸山庄，间接让亨德雷酒醉而亡，骗取了埃德加的妹妹伊莎贝拉与之私奔让埃德加蒙羞，一切的一切让依旧深爱着他的凯瑟琳痛苦不堪，难产而死。精神错乱的希斯克利夫将这种报复继续延及到下一代，直至他抱着凯瑟琳的尸骨离开人世。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.7,
    "votes": 13092,
    "runtime": "142 min",
    "releaseDate": "2009-08-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1238834",
    "id": "movie-3226150"
  },
  {
    "sourceId": "6875451",
    "title": "神圣车行",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2012,
    "coverUrl": "",
    "summary": "黎明到夜晚，再从夜晚到黎明，奥斯卡先生在自己的生命中总是在不断地变换着角色。他时而是大老板、时而是杀手、时而是女乞丐、时而又是怪物或者是居家男人。就好像是旅途一般，他总是在这些人物中间乐此不疲。",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "奇幻"
    ],
    "originalRegions": [
      "法国",
      "德国"
    ],
    "rating": 7.7,
    "votes": 13086,
    "runtime": "115 min",
    "releaseDate": "2012-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2076220",
    "id": "movie-6875451"
  },
  {
    "sourceId": "1477506",
    "title": "阿基拉和拼字大赛",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2253946472.jpg",
    "summary": "自从五年前父亲去世后，阿基拉·安德森（柯克·帕尔莫 Keke Palmer 饰）慢慢成了“问题女孩”，她逃课，整蛊，总是和母亲坦娅（安吉拉·巴塞特 Angela Bassett 饰）做对，老师也拿她没办法。事实上，已经十一岁的阿基拉所作的一切都来自于她内心的孤独，加之对父亲的怀念，她开始沉溺于拼字游戏，并逐渐发现自己在这种游戏上的天赋。忙于养家、经常忽略阿基拉的母亲对此十分不解，认为她在不务正业、浪费时间，幸而阿基拉得到一位神秘教授（劳伦斯·费斯伯尼 Laurence Fishburne 饰）的支持，并在学校的拼字比赛中一路胜出，还顺利拿到参加全国拼字大赛的机会。天赋加上努力，在一场场拼字比赛中，阿基拉找到了自信和自我，并且遇到一个强劲对手——一个亚裔男孩，两人从互看不顺眼的竞争发展成惺惺相惜……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 12797,
    "runtime": "112 min",
    "releaseDate": "2006-04-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0437800",
    "id": "movie-1477506"
  },
  {
    "sourceId": "23712401",
    "title": "当男人恋爱时",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2014,
    "coverUrl": "",
    "summary": "太逸（黄政民 饰）是一名帮高利贷讨债的小混混，人到中年的他不仅没有份正经的工作，甚至连个住的地方都没有，寄宿在开美发店的哥哥英逸（郭道元 饰）家。太逸有着自己的人生哲学，那就是借出去的钱一定得要回来。大大咧咧的他完全不懂得如何尊重女性，亦和浪漫的爱情故事无缘。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.7,
    "votes": 12779,
    "runtime": "120 min",
    "releaseDate": "2014-01-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3479250",
    "id": "movie-23712401"
  },
  {
    "sourceId": "24321138",
    "title": "世界奇妙物语 2013年春之特别篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "《诅咒Web》在职场饱受上司苛责训斥的OL吉田美咲（佐佐木希 饰）偶然发现一个诅咒网站，抱着玩乐好奇心态她输入上司的名字，谁知诅咒竟然成真。越陷越深的美咲，身心紧紧被贪痴欲望所缠缚；《石油出来了》经济大萧条背景下的日本，无业青年汤元义弘（丸山隆平 饰）的尿竟突然变成石油。逃脱了相关机构的追赶，汤元来到一个僻静的乡下，用自己的石油小便造福当地；《Air医生》憧憬成为外科医生的私立医大学生桐原亨（小栗旬 饰），在他乘坐的飞机上，不得不以医者身份面对患者，以及一群有着不同背景的莫名乘客；《不死身丈夫》厌倦了丈夫副岛圭介（尾美としのり 饰）完美温柔的举止，家庭主妇三惠（檀丽 饰）决意杀死丈夫，谁知圭介一次次死而复生，永无止境；《楼梯的花子》暑假在校值班的小学教师相川英树（徳井义实 饰）接待了此前来校实习的小谷千纱子（大政绚 饰），他们聊起了“楼梯花子”的恐怖传说以及不久前某个女孩死去的真相。",
    "genres": [
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.7,
    "votes": 12236,
    "runtime": "107 min",
    "releaseDate": "2013-05-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2891888",
    "id": "movie-24321138"
  },
  {
    "sourceId": "3072779",
    "title": "监狱生活",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1210689821.jpg",
    "summary": "韦德·波特（斯蒂芬·多尔夫 Stephen Dorff 饰）有一个甜蜜的家庭，温柔贤惠的妻子和天真可爱的儿子。他还幸运地申请到了工商业贷款，准备在来年大干一番。某夜，正当全家熟睡之际，突然房间里进来了盗贼，约翰保护好妻儿后，追击盗贼，在对方准备掏凶器时，他出于自卫挥起大棒，结果盗贼当场毙 命。约翰因此锒铛入狱，由于他未选择抗辩因此被判3年有期徒刑，还获得了减刑。然而，在进入牢狱之后，他才发现铁窗的日子其实跟黑社会差不多。一个通缉犯在押解途中，被捅死，原因是其吞了帮派的毒品。狱警希望约翰可以出面指证，但是约翰怕惹事，并未就范。于是，他跟狱警结下了梁子。跟他同屋的狱友，曾是一个帮派的头领，他教会了约翰应该如何融入这个肮脏的环境。为了能跟妻儿重逢，约翰被迫加入了纳粹帮，从此卷入了一场血腥的争斗……",
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
    "rating": 7.7,
    "votes": 12065,
    "runtime": "104 min",
    "releaseDate": "2008-07-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1117385",
    "id": "movie-3072779"
  },
  {
    "sourceId": "1293202",
    "title": "真心英雄",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2212470157.jpg",
    "summary": "Jack（黎明 饰） 追随皮哥多年，阿豪（刘青云 饰）是追哥的得力助手，两人各为其主，却早已耳闻对方威名。在一次行动中，阿豪放了Jack一马。二人驾车狭路相逢，相互对撞，各自从车内爬出，但手中却拿着各自从家里带来的珍藏红酒，二人因而偕同女友琪（蒙嘉慧 饰）和玲（梁艺龄 饰）一起 去小酒吧痛饮，直称相见恨晚，便相约大战过后再来喝个痛快，但两人心中各知自此一别后再见便是生死相搏之时。阿豪、Jack在泰国两败俱伤，但老大下手，阿豪双腿被打断，Jack被打至完全昏迷。",
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
    "rating": 7.7,
    "votes": 11769,
    "runtime": "97 min",
    "releaseDate": "1998-09-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0176809",
    "id": "movie-1293202"
  },
  {
    "sourceId": "3608742",
    "title": "冲出康普顿",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249238790.jpg",
    "summary": "1980年代中期，加州康普顿的街头因犯罪、毒品、黑帮等问题成为美国最危险的地方之一，五个出身此地的年轻人：爱斯·库柏（小奥谢拉·杰克逊 O'Shea Jackson Jr. 饰）、MC Ren（阿尔迪斯·霍吉 Aldis Hodge 饰）、德瑞博士（科里·霍金斯 Cor ey Hawkins 饰）、DJ耶拉（小尼尔·布朗 Neil Brown Jr. 饰）、Eazy-E（杰森·米切尔 Jason Mitchell 饰）集合起来，组成了说唱组合N.W.A，将他们的成长经历转化成粗鲁直接的音乐，并借此向当局传达他们的反抗心声。",
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
      "美国"
    ],
    "rating": 7.7,
    "votes": 11144,
    "runtime": "147 min",
    "releaseDate": "2015-08-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1398426",
    "id": "movie-3608742"
  },
  {
    "sourceId": "30300277",
    "title": "T-34坦克",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2018,
    "coverUrl": "",
    "summary": "讲述1944年，一群英勇的俄罗斯士兵用一辆半损坏的传奇T-34坦克从德国人手中成功逃脱，那是一个令人难忘的、充满勇敢、激烈的战斗、牢不可破的爱情和不可思议的奇迹的时代。",
    "genres": [
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "俄罗斯"
    ],
    "rating": 7.7,
    "votes": 10848,
    "runtime": "139 min",
    "releaseDate": "2018-12-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt8820590",
    "id": "movie-30300277"
  },
  {
    "sourceId": "26277182",
    "title": "小花的味噌汤",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "千惠（广末凉子 饰）和脸热安武信吾（泷藤贤一 饰）交往多年，正当他们准备携手步入婚姻殿堂之时，千惠却被确诊患上了乳腺癌，然而，信吾依旧选择了向千惠求婚。婚后，千惠开始积极的接受治疗，在化疗的副作用的折磨之下，夫妻两人依然保持着对生活积极而又乐观的态度，一度，千惠的病情得到了控制。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.7,
    "votes": 10796,
    "runtime": "118 min",
    "releaseDate": "2015-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5462892",
    "id": "movie-26277182"
  },
  {
    "sourceId": "2136201",
    "title": "陆小凤传奇之铁鞋传奇",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509843300.jpg",
    "summary": "桃花堡堡主花如令（夏志祥饰）六十寿诞大宴在即，宴请江湖五大掌门人及众位武林人士，齐聚毓秀山庄。寿宴前夕，花如令为儿子花满楼（张智尧饰）安排了一场除去心中魔怔的局。十五年前，花满楼被铁鞋大盗所害，双目失明。即使花如令已联合江湖五大门派将铁鞋大盗铲除，但十几年来花满楼却饱受心理魔怔的折磨。为在有生之年帮儿子驱走魔怔，花如令请来陆小凤（张智霖饰）假扮铁鞋大盗，成全花满楼亲手铲除仇人的心愿。",
    "genres": [
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.7,
    "votes": 10365,
    "runtime": "98 min",
    "releaseDate": "2007-01-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "",
    "id": "movie-2136201"
  },
  {
    "sourceId": "26279353",
    "title": "与外婆同行",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "艾利（莉莉·汤普琳 Lily Tomlin 饰）曾经亦是诗坛之中有头有脸的人物，无奈时代变化如此之快，如今，她早已经成为了一名无人问津的过气诗人。偏偏祸不单行，不久之前，艾利刚刚和交往了四个月的女友分手，事业屡遭挫折，感情又如此不顺，此刻的艾利只想一个人安安静静的躲起来，谁都不想搭理。",
    "genres": [
      "Drama",
      "Comedy",
      "LGBTQ+",
      "Family"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "同性",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.7,
    "votes": 10005,
    "runtime": "79 min",
    "releaseDate": "2015-09-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4270516",
    "id": "movie-26279353"
  },
  {
    "sourceId": "6517421",
    "title": "惊天魔盗团",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "",
    "summary": "不夜赌城拉斯维加斯，豪华的表演大厅内正在进行一场前所未有的魔术表演，由丹尼尔·阿特拉斯（杰西·艾森伯格 Jesse Eisenberg 饰）、亨莉·里维斯（艾拉·菲舍尔 Isla Fisher 饰）、杰克·怀尔德（戴夫·弗兰科 Dave Franco 饰）和梅里特·麦克金尼（伍迪·哈里森 Woody Harrelson 饰）四位魔术师组成的“四骑士”配合天衣无缝，在众目睽睽之下偷来了某法国银行金库内350万欧元纸币，此举在现场至全世界引起轰动。FBI探员罗德（马克·鲁夫洛 Mark Ruffalo 饰）和国际刑警埃尔玛·德雷（梅拉尼·罗兰 Mélanie Laurent 饰）奉命对四人展开调查，却一无所获。无奈之下，他们只得求助于极具名气的揭露魔术师布莱德利（摩根·弗里曼 Morgan Freeman 饰）。",
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
      "法国"
    ],
    "rating": 7.6,
    "votes": 357890,
    "runtime": "115 min",
    "releaseDate": "2013-10-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1670345",
    "id": "movie-6517421"
  },
  {
    "sourceId": "3066739",
    "title": "钢铁侠2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "钢铁侠托尼·斯塔克（小罗伯特·唐尼 Robert Downey Jr. 饰）在国会听证上拒绝交出最新技术。与此同时，他发现胸口的微型电弧反应炉正迅速造成血液的钯金属中毒。沮丧的托尼将斯塔克公司的总裁职务交予了秘书波兹（格温妮丝·帕特罗 Gwyneth Paltrow 饰），由她全权负责正在进行的纽约斯塔克博览会。波兹从法律部门调来助理娜塔莉（斯佳丽·约翰逊 Scarlett Johansson 饰）照顾托尼。托尼在媒体前的高调亮相引起了其父当年同事的儿子，伊凡（米基·洛克 Mickey Rourke 饰）的不满。为了实施报复，他子承父业，研制出了一套可与钢铁战衣相媲美的装备。伊凡的技术引起了托尼的竞争对手，军火商贾斯丁·汉默（山姆·洛克威尔 Sam Rockwell 饰）的注意，他设法将伊凡劫持出狱，秘密研究取代钢铁侠。正当托尼苦于钯金属中毒造成的失意之时，他发现娜塔莉原来身负秘密使命，而自己的任性，也造成了与好友，空军上校罗尼（唐·钱德尔 Don Cheadle 饰）的反目，眼看局势就要失控……",
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
    "rating": 7.6,
    "votes": 310854,
    "runtime": "124 min",
    "releaseDate": "2010-05-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1228705",
    "id": "movie-3066739"
  },
  {
    "sourceId": "3596502",
    "title": "唐山大地震",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p545837150.jpg",
    "summary": "1976年7月27日夜，唐山地区爆发7.8级强烈地震，房屋倒塌，灾民无数。面对即将坍塌的危楼，丈夫方大强（张国强 饰）和妻子李元妮（徐帆 饰）都要去救被困的龙凤胎儿女方登（张子枫 饰）、方达（张家骏 饰）。危急时刻，方大强拦住了妻子，冲进去营救时不幸罹难。李元妮在震后发现，一双儿女被困在一块水泥板两端，若要营救，必然牺牲一方。情急之下，她做出了艰难选择——救弟弟。此事成为方登心中难以磨灭的隐痛。后来，她被军人王德清（陈道明 饰）夫妇收养。高考后，方登（张静初 饰）进入杭州医学院学习，并与研究生师兄杨志（陆毅 饰）产生了感情……方达被救却断了胳膊，李元妮以无私的母爱抚养他成人。成年后的方达（李晨 饰）去杭州闯荡，娶了媳妇小河（王子文 饰），并干出了一番事业。32年后，这家人的命运却因为5·12汶川地震再次发生了交叠……",
    "genres": [
      "Drama",
      "History",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "历史",
      "灾难"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 298346,
    "runtime": "139 min",
    "releaseDate": "2010-07-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1393746",
    "id": "movie-3596502"
  },
  {
    "sourceId": "24743711",
    "title": "催眠大师",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2014,
    "coverUrl": "",
    "summary": "著名的心理治疗师徐瑞宁（徐峥 饰）擅长催眠治疗，深得业界的赞扬。但是心高气傲的他却遭遇了职业生涯中最棘手的案件，那就是恩师方教授（吕中 饰）推荐给他的女病人任小妍（莫文蔚 饰）。一天晚上，女助手Amy（杨凯迪 饰）引见来了任小妍，但是这个女病人似乎一直都不太配合，对待医生态度强硬，而且坚信自己能有超自然的能力，瑞宁觉得她没有说出真相，于是开始了催眠疗法。意想不到的是任小妍反而掌控了局面，而真相居然与瑞宁的妻子（胡静 饰）以及好友洛雨凇（王耀庆 饰）有关，任小妍的身份真正是什么？瑞宁似乎掉进了一个设计好的陷阱里……",
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
      "中国大陆"
    ],
    "rating": 7.6,
    "votes": 285840,
    "runtime": "104 min",
    "releaseDate": "2014-04-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3720058",
    "id": "movie-24743711"
  },
  {
    "sourceId": "3227410",
    "title": "加勒比海盗4：惊涛怪浪",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "迪士尼《加勒比海盗4》豆瓣小站：",
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
    "rating": 7.6,
    "votes": 262253,
    "runtime": "136 min",
    "releaseDate": "2011-05-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1298650",
    "id": "movie-3227410"
  },
  {
    "sourceId": "3041806",
    "title": "叶问",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p458263441.jpg",
    "summary": "1930年代，中国武术之都佛山。",
    "genres": [
      "Drama",
      "Action",
      "Biography",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "传记",
      "历史"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.6,
    "votes": 253253,
    "runtime": "106 min",
    "releaseDate": "2008-12-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1220719",
    "id": "movie-3041806"
  },
  {
    "sourceId": "2998270",
    "title": "大侦探福尔摩斯",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2009,
    "coverUrl": "",
    "summary": "大侦探福尔摩斯（小罗伯特·唐尼 Robert Downer Jr. 饰）即使在置人于死地之时也异常的逻辑清晰，然而办案时有条不紊的他在私底下的生活中简直就是个“怪胎”，至少在他的助手华生医生（裘德·洛 Jude Law饰）眼中他是这样一个人。他们亲手绳之以法的“黑暗巫师”布莱克大人（马克·斯特朗 Mark Strong 饰）在临死前说死亡即是开始，随后艾琳·艾德勒（瑞秋·麦克亚当斯 Rachel McAdams 饰）出现在他的身边要他帮忙找个失踪的人，而她身边有个影子般可怕人物。坊间传说黑暗巫师已经复活，他的墓地遭到破坏，而躺在棺材里的人另有其人。又到了大侦探福尔摩斯出马的时候了，然而调查过程从一开始就险象环生，助手华生医生在调查中更是险些丧命，福尔摩斯也陷入连串的迷团之中。",
    "genres": [
      "Action",
      "Mystery",
      "Thriller",
      "Crime",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "悬疑",
      "惊悚",
      "犯罪",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.6,
    "votes": 235571,
    "runtime": "128 min",
    "releaseDate": "2010-02-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0988045",
    "id": "movie-2998270"
  },
  {
    "sourceId": "7046723",
    "title": "猩球崛起2：黎明之战",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "十年前，人类为自己的愚蠢付出惨痛代价，凶险致命的猿流感病毒蔓延全球，世界毁灭殆尽。而在毗邻旧金山的原始丛林，凯撒（安迪·瑟金斯 Andy Serkis 饰）带领猩猩伙伴们建立起无忧无虑的王国，直到某一天，猩猩的家园的宁静再度被人类打破。在旧城苟延残喘的人类面临能源危机，他们试图利用森林腹地大坝的发电站提供能源。青年科学家马尔科姆（杰森·克拉科 Jason Clarke 饰）试图说服聚集地负责人德里弗斯（加里·奥德曼 Gary Oldman 饰），希望通过和平手段取得猩猩部落的信任和同意。然而凯撒的好盟友科巴（托比·凯贝尔 Toby Kebbell 饰）却无法摒除对人类的憎恨，他尝试着挑战者凯撒的权威。",
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
      "美国"
    ],
    "rating": 7.6,
    "votes": 217342,
    "runtime": "130 min",
    "releaseDate": "2014-08-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2103281",
    "id": "movie-7046723"
  },
  {
    "sourceId": "26972258",
    "title": "江湖儿女",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "故事开始于2001年的山西大同，巧巧（赵涛 饰）和斌斌（廖凡 饰）相恋多年，巧巧一心希望能够和斌斌成家过安稳的生活，但斌斌身为当地的大佬，有着自己更高远的志向。一场意外中，斌斌遭人暗算危在旦夕，巧巧拿着斌斌私藏的手枪挺身而出救了斌斌，自己却因为非法持枪而被判处了五年的监禁。",
    "genres": [
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "中国大陆",
      "法国",
      "日本"
    ],
    "rating": 7.6,
    "votes": 194120,
    "runtime": "137 min",
    "releaseDate": "2018-09-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7298400",
    "id": "movie-26972258"
  },
  {
    "sourceId": "1466007",
    "title": "寂静岭",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2006,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p554634907.jpg",
    "summary": "为了女儿，Rose（拉达•米契尔 饰）与女儿一起来到了一个奇怪的地方。",
    "genres": [
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "加拿大",
      "法国",
      "日本",
      "美国"
    ],
    "rating": 7.6,
    "votes": 186001,
    "runtime": "125 min",
    "releaseDate": "2006-04-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0384537",
    "id": "movie-1466007"
  },
  {
    "sourceId": "21817627",
    "title": "爱宠大机密",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "位于纽约的一栋红色公寓中，狗狗麦克（路易·C·K Louis C.K. 配音）陪伴它的主人凯蒂（艾丽·坎伯尔 Ellie Kemper 配音）过着平凡而幸福的生活。它不明白主人为什么每天早出晚归，总希望凯蒂能时时刻刻陪伴着它。这天傍晚，主人带回了一条身形庞大的狗狗杜老大（艾瑞克·斯通斯崔特 Eric Stonestreet 配音），顿时让麦克感觉如天塌了一般。它想办法撵走杜老大，而对方也用以牙还牙，你争我斗的过程中，两个小家伙遭到抓狗队的围捕。在此期间，它们邂逅了兔子小白（凯文·哈特 Kevin Hart 配音）率领的堕落宠帮，经历了史无前例的大冒险。另一方面，麦克的暗恋者啾啾则号召伙伴们，要将善良可亲的朋友救回来。",
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
    "rating": 7.6,
    "votes": 184819,
    "runtime": "87 min",
    "releaseDate": "2016-08-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2709768",
    "id": "movie-21817627"
  },
  {
    "sourceId": "1418070",
    "title": "如果·爱",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2005,
    "coverUrl": "",
    "summary": "想演戏的孙纳（周迅 饰）与想导戏的林见东（金城武 饰）初遇见时，两人都正处于生活与事业的低谷，在相互鼓励和扶携中，他们渐渐有了共同的可以看见希望的未来，然而孙纳更想把现在的可能抓到手，狠心与林见东分了手，跟了可以给她戏的导演聂文（张学友 饰），成为人人艳羡的大明星。",
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
      "中国大陆",
      "中国香港",
      "马来西亚"
    ],
    "rating": 7.6,
    "votes": 179696,
    "runtime": "108 min",
    "releaseDate": "2005-12-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0454914",
    "id": "movie-1418070"
  },
  {
    "sourceId": "4051753",
    "title": "大侦探福尔摩斯2：诡影游戏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1327387815.jpg",
    "summary": "奥地利皇储突然自杀案件，让沉寂6个月的福尔摩斯（小罗伯特·唐尼 Robert Downey Jr. 饰）再次启动。这次，福尔摩斯有了一个强有力的对手——智力上与福尔摩斯相当的莫里亚蒂教授（杰瑞德·哈里斯 Jared Harris 饰）。为了调查清楚皇储的自杀案件，福尔摩 斯与华生（裘德·洛 Jude Law 饰），在吉普赛占星师西姆（劳米·拉佩斯 Noomi Rapace 饰）的帮助下，和莫里亚蒂展开了在整个欧洲大陆上的较量，从英国到法国、德国……虽然被称为最聪明的人，但是莫里亚蒂教授仿佛能预知福尔摩斯的行踪，都能先一步福尔摩斯逃之夭夭。莫里亚蒂教授死亡名单上的人一个个被抹杀，历史可能就此被改编，面对如此强大的对手，福尔摩斯如何应对？",
    "genres": [
      "Action",
      "Mystery",
      "Thriller",
      "Crime",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "悬疑",
      "惊悚",
      "犯罪",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 173065,
    "runtime": "129 min",
    "releaseDate": "2012-01-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1515091",
    "id": "movie-4051753"
  },
  {
    "sourceId": "1295280",
    "title": "黑衣人2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453515660.jpg",
    "summary": "故事发生在第一部的四年之后，此时特警K（汤姆•李•琼斯 饰）已经退休，成为一名普通的邮局局长，而J（威尔•史密斯 饰）则继续从事MIB的工作。",
    "genres": [
      "Comedy",
      "Action",
      "Sci-Fi"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 159615,
    "runtime": "88 min",
    "releaseDate": "2002-07-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120912",
    "id": "movie-1295280"
  },
  {
    "sourceId": "2028677",
    "title": "雨果",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "小男孩雨果（阿沙·巴特菲尔德 Asa Butterfield 饰）天生机械控。他寄宿巴黎火车站钟楼，偶尔会去玩具店偷些零件，用来修补父亲（裘德·洛 Jude Law 饰）留下的机器人。一次行窃，他被店主乔治•梅里埃（本·金斯利 Ben Kingsley 饰）当场抓获，因 忌惮带猎狗的巡警（萨莎·拜伦·科恩 Sacha Baron Cohen 饰）只得就范。乔治拿走了雨果父亲的遗物——一本机械手册，令他心急如焚，他尾随至乔治家中，结识了养女伊莎贝拉（科洛·莫瑞兹 Chloë Moretz 饰），他恳求她帮自己保住手册。而伊莎贝拉则觉得此事蹊跷，于是两人结伴探秘。修好的机器人作画的落款却显示乔治的名字，让他们疑心顿起。终于他们发现了乔治家中装满画作的神秘柜子，并在图书馆的电影书籍中发现了乔治的身世。一位知情人的显身，让他们的奇幻冒险更添神秘……",
    "genres": [
      "Drama",
      "Children",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "儿童",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 153624,
    "runtime": "127 min",
    "releaseDate": "2012-05-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0970179",
    "id": "movie-2028677"
  },
  {
    "sourceId": "1895120",
    "title": "死寂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1235830609.jpg",
    "summary": "童谣本应该充满欢声笑语，但世界上偏偏有这么一些童谣，让人听了毛骨悚然。小镇拉文斯•法尔就流传着这样一个恐怖的童谣：小心来自玛丽•肖的凝视；她没有孩子，只有玩偶；如果你看到她，不要尖叫；否则她会扯开你的嘴巴撕掉你的舌头。这个小镇一直就在笼罩在这个童谣的诅咒之下，只要有玩偶出现的地方，就有人遇害，死状一样，都是舌头被割下。",
    "genres": [
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 140796,
    "runtime": "89 min",
    "releaseDate": "2007-03-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0455760",
    "id": "movie-1895120"
  },
  {
    "sourceId": "3732780",
    "title": "第36个故事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p918663787.jpg",
    "summary": "台北市的一角，伫立着一间清静雅致的咖啡店。它的主人朵儿（桂纶镁 饰）和蔷儿（林辰唏 饰）是一对美丽的姐妹花，朵儿经营咖啡店的想法由来已久，偶然的机缘下，她得以实现自己的梦想。虽然倾注了大量的心血，但是在开业之初的喧嚣后，咖啡店渐渐归于平寂。正当姐妹俩为此烦恼不已之时，一本朋友庆贺开业送的泰文食谱启发了鬼灵精蔷儿的灵感。她鼓励姐姐在咖啡店内开展以物易物的服务，吸引各色人等云集于此，寻找、交换彼此的心爱之物。咖啡店渐渐热闹起来，拥有36个城市故事的周群青（张翰 饰）的到来，也改变着姐妹的人生……",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.6,
    "votes": 134104,
    "runtime": "82 min",
    "releaseDate": "2010-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1682949",
    "id": "movie-3732780"
  },
  {
    "sourceId": "1305355",
    "title": "审死官",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "宋世杰（周星驰 饰）是一个清朝时期的著名大状，他出色的口才及能力让他敢于批评衙门的大官，也为很多人伸冤。就算他不满当时官场的腐败黑暗，但他还是收了不少贿赂，部分还是昧心钱，都报应在了自己的儿子上，十多个儿子都养不大。妻子（梅艳芳 饰）为了腹中的孩子，断然要求他就此封笔，不可再做大状。虽然宋世杰极其不愿意，还是答应了妻子的要求。妻子遇到了满肚冤情的寡妇（吴嘉丽 饰），处于对女人的同情，她要求丈夫宋世杰为这名寡妇打官司，因此宋世杰又被迫重出江湖。在为寡妇伸冤的过程中，他再次看到了官场的黑暗，还差点抄家、送命……",
    "genres": [
      "Comedy",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 122936,
    "runtime": "102 min",
    "releaseDate": "1992-07-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105385",
    "id": "movie-1305355"
  },
  {
    "sourceId": "1295242",
    "title": "精灵鼠小弟",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1377980123.jpg",
    "summary": "9岁的乔治这天迎来了一个弟弟——小白鼠斯图亚特。这是他爸爸妈妈从孤儿院领回来的可爱精灵，会说话，有智慧，并且很希望有自己的家。然而，乔治却不喜欢斯图亚特，不愿意和他作伴。斯图亚特为此颇为犯愁。更令它处境不妙的是，它成为了肥猫眼中的佳肴，在虎视眈眈下过着冒险的生活。",
    "genres": [
      "Comedy",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.6,
    "votes": 116568,
    "runtime": "84 min",
    "releaseDate": "2000-02-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0164912",
    "id": "movie-1295242"
  },
  {
    "sourceId": "2028669",
    "title": "丁丁历险记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "",
    "summary": "丁丁（杰米·贝尔 Jamie Bell 配音）和白雪的故事可以说是影响了不止一代人。在史蒂文·斯皮尔伯格和彼得·杰克逊的努力下，丁丁的故事终于被搬上了大银幕。这一次，丁丁因为一艘古老的船模，而开始了一次惊险的历险。这艘名为独角兽号的模型船，隐藏着一个海盗和财宝的故事。为了解开这个流传了几个世纪的秘密，丁丁和白雪一起不断寻找线索，找寻真相。在航海家阿道克船长（安迪·瑟金斯 Andy Serkis 饰）、笨手笨脚的侦探搭档杜庞（西蒙·佩吉 Simon Pegg 配音）与杜邦（尼克·弗罗斯特 Nick Frost 配音）以及白雪的帮助下，丁丁游历了半个地球，与恶棍萨卡林（丹尼尔·克雷格 Daniel Craig 配音）斗智斗勇。最终，丁丁终于找到了独角兽号隐藏的秘密，以及那一则古老的诅咒……",
    "genres": [
      "Action",
      "Animation",
      "Mystery",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "动画",
      "悬疑",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "新西兰"
    ],
    "rating": 7.6,
    "votes": 101694,
    "runtime": "107 min",
    "releaseDate": "2011-11-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0983193",
    "id": "movie-2028669"
  },
  {
    "sourceId": "2028585",
    "title": "穿靴子的猫",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p877184561.jpg",
    "summary": "他是一只穿靴子的猫（安东尼奥·班德拉斯 Antonio Banderas 配音），多年来行侠仗义，行走江湖，剑术高明，胆大卖萌，虽是官兵通缉捉拿的要犯，但从来都无所畏惧，泰然自若。在某个极不友好的小酒馆里，靴猫听说杰克（Billy Bob Thornton 配音）和吉尔 （Amy Sedaris 配音）这对雌雄恶棍拿到了传说中的魔豆，魔豆长出的豆荚直通巨人的宫殿，而那里住着令人垂涎可以下金蛋的鹅。靴猫决定铤而走险劫掠魔豆，却遭到神秘的黑猫阻挠。在黑猫引诱下，他来到一处猫儿聚会的场所，结果意外遇到当年孤儿院的好友矮蛋（Zach Galifianakis 配音），黑猫则是性感的小母猫咪·柔爪（萨尔玛·海耶克 Salma Hayek 配音）。",
    "genres": [
      "Comedy",
      "Animation",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 100740,
    "runtime": "90 min",
    "releaseDate": "2011-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0448694",
    "id": "movie-2028585"
  },
  {
    "sourceId": "1294963",
    "title": "一个都不能少",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p907410217.jpg",
    "summary": "水泉小学唯一的老师高老师因为家中有事，不得不暂时请假回家。村长不得不从隔壁的村子找来了一个十三四岁的女孩魏敏芝来代替高老师上课。高老师觉得她年纪小，可是无奈找人不容易，只好嘱咐魏敏之每天给他们抄课文，准确点清人数，一个都不能少。原本30多个学生，因为家里负担不起，所以只剩下了26个。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.6,
    "votes": 100187,
    "runtime": "106 min",
    "releaseDate": "1999-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0209189",
    "id": "movie-1294963"
  },
  {
    "sourceId": "2997052",
    "title": "吾栖之肤",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2011,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1221998208.jpg",
    "summary": "在位于郊外的华丽别墅内，人过中年的整形医生罗伯特·雷德加（安东尼奥·班德拉斯 Antonio Banderas 饰）和忠心老仆人玛丽莉娅（Marisa Paredes 饰）居住于此。在过去的十二年里，他先后失去了妻子盖儿和女儿诺玛（Ana Mena 饰），一桩桩人间惨剧彻底颠覆了罗伯特看似完美的生活，同时也将他的事业与研究推向了完全未知的领域。在别墅的某个神秘房间内，居住着一个美丽且与世隔绝的女子，她叫薇拉（埃琳娜·安纳亚 Elena Anaya 饰），既是罗伯特的病人，又是他的实验对象，二人有着纷繁错乱的渊源。她经罗伯特之手精心塑造出来的容颜，将彼此紧紧缠绕在了一起……",
    "genres": [
      "Thriller"
    ],
    "originalGenres": [
      "惊悚"
    ],
    "originalRegions": [
      "西班牙"
    ],
    "rating": 7.6,
    "votes": 99144,
    "runtime": "117 min",
    "releaseDate": "2011-08-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1189073",
    "id": "movie-2997052"
  },
  {
    "sourceId": "1299059",
    "title": "倚天屠龙记之魔教教主",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "张翠山（吴镇宇 饰）携妻及子张无忌（李连杰 饰）从孤岛出发赶去给其师父贺百岁大寿的途中，被人暗算，张无忌中寒冰掌。在武当山，张翠山和妻子被各大门派逼迫致死，张无忌也不再能练习武功，只能靠张三丰每日所输真气得以残活。张三丰的举动引来宋青书（邹兆龙 饰）的妒忌，他联合了峨眉女弟子周芷若（黎姿 饰）共同对付张无 忌。明教圣女小昭（邱淑贞 饰）令张无忌改变命运，使其先在断崖上遇到高人治好体内寒冰毒、学会九成“九阳神功”，又在明教禁地练得“乾坤大挪移心法”。得知蒙古郡主赵敏（张敏 饰）设计令江湖六大派围攻光明顶想歼灭明教时，张无忌决意为拯救明教赴汤蹈火。",
    "genres": [
      "Action",
      "Fantasy",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "动作",
      "奇幻",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 93850,
    "runtime": "99 min",
    "releaseDate": "1993-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0108624",
    "id": "movie-1299059"
  },
  {
    "sourceId": "1301345",
    "title": "偷天换日",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1693861981.jpg",
    "summary": "查理(马克·沃尔伯格 Mark Wahlberg 饰)本来可以拿着抢劫回来的那箱黄金安度余生，同伙史蒂夫（爱德华·诺顿 Edward Norton饰）的出卖却让他的阵脚大乱。史蒂夫不但独吞了巨款逃亡洛杉矶，还害得查理尝尽牢狱之苦。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 93080,
    "runtime": "111 min",
    "releaseDate": "2003-05-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0317740",
    "id": "movie-1301345"
  },
  {
    "sourceId": "1309203",
    "title": "牛仔裤的夏天",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p885307493.jpg",
    "summary": "写在牛仔裤上的女孩儿的情谊，婉转动听，异常温暖。",
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
    "rating": 7.6,
    "votes": 90935,
    "runtime": "119 min",
    "releaseDate": "2005-06-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0403508",
    "id": "movie-1309203"
  },
  {
    "sourceId": "20514947",
    "title": "龙虾",
    "countryCode": "IE",
    "countryName": "Ireland",
    "year": 2015,
    "coverUrl": "",
    "summary": "故事背景设定在一个虚构的近未来社会，居民的婚恋受到严格控制管理。根据规定，单身者要被集中移送到一个酒店里，他们必须要在45天之内找到一个匹配的伴侣，失败者会被转化为一种自选的动物，并被流放到森林中。为了延长45天的期限，酒店里的单身者们还会到森林里狩猎其他逃亡的单身者。",
    "genres": [
      "Drama",
      "Comedy",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "奇幻"
    ],
    "originalRegions": [
      "爱尔兰",
      "英国",
      "希腊",
      "法国",
      "荷兰"
    ],
    "rating": 7.6,
    "votes": 89659,
    "runtime": "118 min",
    "releaseDate": "2015-05-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3464902",
    "id": "movie-20514947"
  },
  {
    "sourceId": "1309160",
    "title": "机械师",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2004,
    "coverUrl": "",
    "summary": "特拉沃（克里斯汀•贝尔 Christian Bale  饰）是一个机械师，他的工作内容繁忙机械，日复一日，令他日渐消瘦，连睡眠都出现了严重的问题。长达一年里，特拉沃成为了无法睡眠的怪人。怪事也从此陆续发生：他在公寓里面发现了一张神秘纸条；总是感觉有一个共事的工友，在一次意外中工友失去了一只手，所有的同事都把这个意外归咎于特拉沃，令特拉沃众叛亲离，唯有身边当应召女郎的女友一直在支持自己。然而，事实又好像并不是这样，那张纸条，那个工友，似乎都不是现实的事情，特拉沃陷入了巨大的谜团当中。",
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
      "西班牙",
      "美国"
    ],
    "rating": 7.6,
    "votes": 82094,
    "runtime": "101 min",
    "releaseDate": "2004-01-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0361862",
    "id": "movie-1309160"
  },
  {
    "sourceId": "1291582",
    "title": "怪物史瑞克2",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "",
    "summary": "延续了第一部的风格，继续对经典童话进行善意的颠覆。",
    "genres": [
      "Comedy",
      "Animation",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 81549,
    "runtime": "93 min",
    "releaseDate": "2004-08-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0298148",
    "id": "movie-1291582"
  },
  {
    "sourceId": "4817901",
    "title": "潜伏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p919571676.jpg",
    "summary": "在高中担任教师的乔什·莱姆波特（帕特里克·威尔森 Patrick Wilson 饰）和身为自由音乐人的妻子兰娜（罗丝·拜恩 Rose Byrne 饰）拥有一个幸福的五口之家。然而自他们乔迁新居之后，恐慌和不安便尾随而至。尚在襁褓中的女儿凯莉经常莫名大哭，次子福斯特（Andrew Astor 饰）对卧室充满恐惧，而长子达尔顿（Ty Simpkins 饰）更在一次惊吓过后陷入长久的昏迷之中。在此之后，各种奇怪恐怖的事件接连发生。莱姆波特夫妇不胜其扰，精神几近崩溃，他们最终决定搬离这个不祥之地。",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 81097,
    "runtime": "103 min",
    "releaseDate": "2010-09-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1591095",
    "id": "movie-4817901"
  },
  {
    "sourceId": "1294766",
    "title": "泰山",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1315673553.jpg",
    "summary": "猿猴家族收养了一位特殊的孩子，一个自小被遗弃在森林深处的婴儿男孩。在猿猴们的悉心照料下，男孩快快乐乐的长大了，他们给他取名叫泰山。由于自小在猿猴家长大，泰山敏捷得跟猿猴一样，结交很多的森林朋友。直到有一天，深入到森林深处的探险家打破了泰山宁静的生活，这时他才发现自己原来是人类的一员。泰山爱上了探险家的女儿珍妮，但人类的所作所为又令他对回归人类还是继续在森林生活进退两难，泰山最终将如何抉择？",
    "genres": [
      "Drama",
      "Animation",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动画",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 80598,
    "runtime": "88 min",
    "releaseDate": "1999-06-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120855",
    "id": "movie-1294766"
  },
  {
    "sourceId": "3011997",
    "title": "伊甸湖",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2008,
    "coverUrl": "",
    "summary": "热恋中的珍妮（Kelly Reilly 饰）与史帝夫（Michael Fassbender 饰）来到美丽的湖边，计划度过一个浪漫而温馨的周末。但是他们的周末被一群胡作非为、大声喧哗的少年给搅乱。一番口角冲突过后，夫妇俩的食物以及车钥匙不翼而飞。他们只得徒步前往镇上求助，却不知道，这恰恰是恶梦的开始……",
    "genres": [
      "Thriller",
      "Horror"
    ],
    "originalGenres": [
      "惊悚",
      "恐怖"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.6,
    "votes": 79809,
    "runtime": "91 min",
    "releaseDate": "2008-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1020530",
    "id": "movie-3011997"
  },
  {
    "sourceId": "1467044",
    "title": "魔术师",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453713910.jpg",
    "summary": "1900年，科学的发展还未能遮盖魔术的神秘感，维也纳的人们对艾森海姆（爱德华·诺顿 Edward Norto饰）的魔术更是达到了痴迷的状态。这个神奇的魔术师总是能把现实和虚幻的东西混为一体，让人坠入云里雾里，怀疑他是否真的具有超能力。而台下的乌尔侦探，更是想从艾森海姆每一场的表演里看出幕后的真相。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑"
    ],
    "originalRegions": [
      "美国",
      "捷克"
    ],
    "rating": 7.6,
    "votes": 79752,
    "runtime": "110 min",
    "releaseDate": "2006-09-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0443543",
    "id": "movie-1467044"
  },
  {
    "sourceId": "21263666",
    "title": "美国狙击手",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "",
    "summary": "克里斯·凯尔（布莱德利·库珀 Bradley Cooper 饰）原本是一名普通美国牛仔，“911”事件以后他以30岁的高龄参加了海豹突击队，并成为了伊拉克战场上的一名优秀狙击手。参军之后克里斯认识了塔雅（西耶娜·米勒 Sienna Miller 饰），两人很快结婚生子，但是随着克里斯的多次出征伊拉克，两人的家庭发生了很多问题。战场上的克里斯十分优秀，被队友称呼为“传奇”，恐怖分子以高额奖金请职业狙击手猎杀他，但屡次都未得手，可是身边的队友却一个个遭遇不测，虽然妻子三番五次恳求他退伍，但是他抱着为队友复仇的信念最后一次出征……",
    "genres": [
      "Action",
      "Biography",
      "War"
    ],
    "originalGenres": [
      "动作",
      "传记",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 78667,
    "runtime": "132 min",
    "releaseDate": "2014-11-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2179136",
    "id": "movie-21263666"
  },
  {
    "sourceId": "1421809",
    "title": "最好的时光",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2005,
    "coverUrl": "",
    "summary": "该片是侯孝贤对自己电影生涯所作的一次总结。三段故事里男（张震）女（舒淇）主角表达情感的方式及所处时代背景，都能在侯孝贤各个时期的影片里找到对应。《恋爱梦》纯净，似不可抵达的梦的彼岸；《自由梦》感人，却是接近天国的更遥远的梦境；《青春梦》冰冷，却是现实。",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.6,
    "votes": 74818,
    "runtime": "130 min",
    "releaseDate": "2005-10-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0459666",
    "id": "movie-1421809"
  },
  {
    "sourceId": "1853621",
    "title": "落叶归根",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1298673351.jpg",
    "summary": "老赵（赵本山饰）是个五十多岁的农民，他南下深圳打工，因好友老刘死了，不得不走上背对方尸体回家安葬之旅。他先把老刘伪装成醉鬼，混上长途车，却不幸在途中遇上劫匪（郭德纲等饰）。救了一车人钱财的他反而给乘客赶下了车。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 71062,
    "runtime": "110 min",
    "releaseDate": "2007-01-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0783475",
    "id": "movie-1853621"
  },
  {
    "sourceId": "3346464",
    "title": "给朱丽叶的信",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "苏菲·霍尔（阿曼达·塞弗里德 Amanda Seyf 饰）是《纽约客》的调查员。她的未婚夫维克多为开餐馆忙碌着。他们来意大利的维罗纳旅行。不过，维克多却醉心于品尝美食，对她疏于照顾。两人感情因此矛盾丛生。苏菲闲逛到许愿墙下，发现很多人给朱丽叶写信。她很好奇，尾随取信的 妇女，发现有四位女士扮演朱丽叶，回信解答情感问题。苏菲被感动了，决定加入她们的队伍。她读到一封50年前的来信：克莱尔·史密斯（瓦妮莎·雷德格瑞夫 Vanessa Redgrave 饰）讲述了一段留有遗憾的当年情。苏菲用心地回了信。没想到，某天，老人的孙子查理（克里斯·艾根 Chris Egan 饰）找上门来。她这才了解，老人读了她的信，决定重拾真爱。但查理觉得这很荒谬。在争执中，三个人共同踏上了寻爱之旅……",
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
    "rating": 7.6,
    "votes": 69685,
    "runtime": "106 min",
    "releaseDate": "2010-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0892318",
    "id": "movie-3346464"
  },
  {
    "sourceId": "2174535",
    "title": "天龙特攻队",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "",
    "summary": "“汉尼拔”约翰·史密斯（连姆·尼森 Liam Neeson 饰）、坦普莱顿·派克（布莱德利·库珀 Bradley Cooper 饰）、莫多克（沙尔托·科普雷 Sharlto Copley 饰）和“水牛”巴拉克斯（昆顿·杰克逊 Quinton Jackson 饰）曾经是美军游骑兵成员，四人在与墨西哥恶徒交火中相遇，并由此成立靠赏金为生的天龙特工队。在成军8年后，天龙特工队接到新的任务。据说伊拉克战争期间有隶属美国的黑军抢夺伊方印钞机，并用它大量生产伪造美钞。史密斯等人的任务就是在伪钞和设备运回美国之前将其夺回。然而事态却朝着无法预料的方向发展，史密斯的上司更死于离奇的意外。在此之后，天龙特工队被军事法庭判刑。此后不久，史密斯和成员相继越狱，势要将黑军的败类绳之于法……",
    "genres": [
      "Action",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 65306,
    "runtime": "117 min",
    "releaseDate": "2010-06-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0429493",
    "id": "movie-2174535"
  },
  {
    "sourceId": "1296253",
    "title": "没完没了",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2362339572.jpg",
    "summary": "韩冬（葛优 饰）是一个出租车司机，他生性老实，把车常年包给旅行社老板阮大伟（傅彪 饰）做生意。然而阮大伟却是个奸商，长期拖欠韩冬包租费。",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "originalGenres": [
      "剧情",
      "喜剧"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.6,
    "votes": 65210,
    "runtime": "95 min",
    "releaseDate": "1999-12-15",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0276329",
    "id": "movie-1296253"
  },
  {
    "sourceId": "25728010",
    "title": "老手",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "该片主要描述刑警追缉罪犯的故事，黄正民饰演被称为“韩国FBI”的广域调查队刑警徐道哲（音），是一位极具使命感，同时又富有人情味的警察，刘亚仁则饰演“富三代”赵泰晤（音），虽然表面上显得自信十足，但内心里却隐藏着不为人知的自卑。实力派演员刘海镇饰演赵泰晤的帮手崔常务，吴达洙饰演徐道哲的助手吴组长。",
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
    "rating": 7.6,
    "votes": 61808,
    "runtime": "124 min",
    "releaseDate": "2015-08-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4768764",
    "id": "movie-25728010"
  },
  {
    "sourceId": "26235839",
    "title": "内在美",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2015,
    "coverUrl": "",
    "summary": "家具设计师金禹镇有个不为人知的秘密：他每天一觉醒来都会变成年龄、国籍、性别与前一天截然不同的人，时而年轻帅气、时而老态龙钟，每天都要适应新的自己，这样的他该如何恋爱呢？",
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
      "韩国"
    ],
    "rating": 7.6,
    "votes": 60972,
    "runtime": "127 min",
    "releaseDate": "2015-08-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4273886",
    "id": "movie-26235839"
  },
  {
    "sourceId": "1299153",
    "title": "异形4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1101480167.jpg",
    "summary": "静静的宇宙，一艘名叫“贝蒂”的太空船正在飞向“御夫座”星球。船上躺着数十个被麻醉冻僵了的地球人，他们全然不知即将到来的灾难。原来，丧尽天良的军方和商人将这些人诱拐过来，要送到“御夫座”上孵化异形女皇两百年前生下的蛋。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Horror"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 60267,
    "runtime": "109 min",
    "releaseDate": "1997-11-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118583",
    "id": "movie-1299153"
  },
  {
    "sourceId": "2357713",
    "title": "名侦探柯南：水平线上的阴谋",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1954012128.jpg",
    "summary": "日本著名造船公司八代商船设计制造了旗下第一艘豪华邮轮爱芙罗黛谛号，为庆祝该邮轮的处女航，八代商船邀请各界名流参加，上到首相下到富豪悉数前来。铃木园子的父母也接到邀请，因行程安排铃木夫妇无法出席，园子于是邀请、毛利小五郎、小兰、柯南等一众好友同行。蓝天白云，美酒佳肴，众人无不陶醉于这美好的假期之中。",
    "genres": [
      "Animation",
      "Mystery"
    ],
    "originalGenres": [
      "动画",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 59934,
    "runtime": "105 min",
    "releaseDate": "2005-04-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1133936",
    "id": "movie-2357713"
  },
  {
    "sourceId": "1301283",
    "title": "古惑仔3之只手遮天",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2352289974.jpg",
    "summary": "东升社在老大骆驼的重整下声势日盛，而洪兴社在蒋天生（任达华　饰）的管理下亦蒸蒸日上。两个帮派暗中有不少争斗，但表面上两个帮派仍和和气气。",
    "genres": [
      "Drama",
      "Action"
    ],
    "originalGenres": [
      "剧情",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 58344,
    "runtime": "98 min",
    "releaseDate": "1996-06-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0116455",
    "id": "movie-1301283"
  },
  {
    "sourceId": "1295120",
    "title": "风语者",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2002,
    "coverUrl": "",
    "summary": "这是一部以二战中的太平洋战争为背景题材的影片。风中的语言，在战争中，指的是传递着无数秘密的电波。每个风语者都背负着高级军事机密。",
    "genres": [
      "Action",
      "History",
      "War"
    ],
    "originalGenres": [
      "动作",
      "历史",
      "战争"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 56554,
    "runtime": "134 min",
    "releaseDate": "2002-06-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0245562",
    "id": "movie-1295120"
  },
  {
    "sourceId": "3012013",
    "title": "伸冤人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2014,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201052935.jpg",
    "summary": "麦考尔（丹泽尔·华盛顿 Denzel Washington 饰）是一名已经退役的黑色行动突击队队员，常年浸淫在充满了暴力和危险的生活中，麦考尔的内心早已经疲惫不堪，为了脱离组织，他大费周章伪造了自己已经死亡的假象，来到了波士顿，改头换面，隐姓埋名，企图能够过上平静安宁的新生活。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 53626,
    "runtime": "132 min",
    "releaseDate": "2014-09-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0455944",
    "id": "movie-3012013"
  },
  {
    "sourceId": "1295485",
    "title": "方世玉续集",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "方世玉（李连杰 饰）、雷婷婷（李嘉欣 饰）、陈家洛（郑少秋 饰）一行抵达红花会总舵。红花会事业蒸蒸日上之余，帮内争权夺势的斗争亦未停息，堂主于镇海（计春华 饰）因不满父亲传位陈家洛，几次三番找人行刺未果，方世玉出面当众斥责，两人结下仇怨。",
    "genres": [
      "Comedy",
      "Action",
      "Wuxia",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "武侠",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 51115,
    "runtime": "95 min",
    "releaseDate": "1993-07-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0106937",
    "id": "movie-1295485"
  },
  {
    "sourceId": "6771529",
    "title": "突袭",
    "countryCode": "ID",
    "countryName": "Indonesia",
    "year": 2011,
    "coverUrl": "",
    "summary": "《突袭》是由加雷斯·埃文斯执导，由美国和印度尼西亚联合制作，于2012年3月23日在印尼上映。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "印度尼西亚",
      "美国"
    ],
    "rating": 7.6,
    "votes": 50611,
    "runtime": "101 min",
    "releaseDate": "2011-09-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1899353",
    "id": "movie-6771529"
  },
  {
    "sourceId": "1304708",
    "title": "游园惊梦",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1077911865.jpg",
    "summary": "1930年代的苏州，以超凡脱俗的容貌和绝佳的昆曲造诣红极一时的得月楼歌妓翠花（宫泽里惠）嫁入当地豪门荣府，却遭遇荣家上下的冷落。荣兰（王祖贤）是荣家的亲戚，虽为女儿身却有男儿之志，一心想做巾帼英雄报效国家。翠花与荣兰结识后因合演昆曲《牡丹亭》生出情愫，终因越轨之举被荣家驱逐出门，被迫暂借荣兰处所安身。",
    "genres": [
      "Drama",
      "LGBTQ+"
    ],
    "originalGenres": [
      "剧情",
      "同性"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 49254,
    "runtime": "122 min",
    "releaseDate": "2001-04-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0279523",
    "id": "movie-1304708"
  },
  {
    "sourceId": "4832825",
    "title": "海啸奇迹",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2012,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2098048916.jpg",
    "summary": "本片取材于2004年印度洋海啸时发生的一桩真实事件。",
    "genres": [
      "Drama",
      "Family",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "家庭",
      "灾难"
    ],
    "originalRegions": [
      "西班牙",
      "美国"
    ],
    "rating": 7.6,
    "votes": 48115,
    "runtime": "113 min",
    "releaseDate": "2013-08-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1649419",
    "id": "movie-4832825"
  },
  {
    "sourceId": "1293755",
    "title": "驱魔人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1973,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1495239725.jpg",
    "summary": "愁云惨淡的华盛顿市，一幢普通公寓内，单身妈妈克莉丝（艾伦·鲍斯汀 Ellen Burstyn 饰）和女儿芮根生活于此。然而近一段时间，克莉丝却被女儿种种怪异的举止折磨得烦躁不堪。芮根的行为举止怪异，迥异常人。克莉丝带她求医问卜，终无所获，甚至精神科医生也束手无策。万般无 奈之下，几近绝望的母亲求助于莫林神父（马克斯·冯·西多 Max von Sydow 饰），一个有着丰富驱魔经验的老者。恐怖的夜晚，神父与藏身少女体内的恶魔展开连番较量。这是一个注定让无数人永生难忘的恶魔之夜……",
    "genres": [
      "Horror"
    ],
    "originalGenres": [
      "恐怖"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 46212,
    "runtime": "122 min",
    "releaseDate": "1973-12-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0070047",
    "id": "movie-1293755"
  },
  {
    "sourceId": "1302753",
    "title": "飞鹰计划",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1991,
    "coverUrl": "",
    "summary": "历经艰辛刚摆脱非洲土人的追杀，飞鹰Jackie（成龙）就接到伯爵的急电，要其迅速赶到西班牙。二战末期，知道自己来日不多的德国纳粹把在欧洲抢掠所得的数万吨黄金隐藏在了非洲撒哈拉大沙漠一个秘密基地，伯爵急电Jackie，正是要其配合冷艳的考古专家Ada（郑裕玲）再赴非洲寻找这批黄金，途中，藏金副官的外孙女Elsa加入寻宝队伍。",
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
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 46141,
    "runtime": "106 min",
    "releaseDate": "1991-02-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0099558",
    "id": "movie-1302753"
  },
  {
    "sourceId": "6430835",
    "title": "猎杀本·拉登",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "2001年震惊世界的911事件后， 美国发动追捕和猎杀行动，目标是基地组织头号人物——奥萨马·本·拉登。玛雅（杰西卡·查斯坦 Jessica Chastain 饰）是美国中情局一位干练坚韧的女探员，她被派赴美国驻巴基斯坦使馆工作，唯一的任务就是寻找到本·拉登。尽管对当时局内使用酷刑审讯恐怖分子感到不忍，但她坚信获得重要信息的前提高于一切。她将人生的10年锲而不舍的投入到一件事上：从浩如烟海的反恐情报中寻找到一根稻草，然后用它压死一只叫做本·拉登的骆驼。最终她的努力获得回报——2011年5月1日，美国海豹突击队根据她的情报潜入巴基斯坦展开斩首行动，成功击毙奥萨马·本·拉登。而在这一切结束后的玛雅却不知道该何去何从……",
    "genres": [
      "Drama",
      "Thriller",
      "History"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "历史"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 43090,
    "runtime": "157 min",
    "releaseDate": "2012-12-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1790885",
    "id": "movie-6430835"
  },
  {
    "sourceId": "3015835",
    "title": "我的最爱",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1015596190.jpg",
    "summary": "宝（邓丽欣 饰）本来与男友俊（黄嘉乐 饰）一起经营甜品店，生意兴隆，两人也感情稳定。可是宝多年不见的旧同学琪琪（曾恺玹 饰），竟抢走了俊，破坏了宝的幸福生活。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 42087,
    "runtime": "101 min",
    "releaseDate": "2008-03-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1205065",
    "id": "movie-3015835"
  },
  {
    "sourceId": "1306785",
    "title": "极地特快",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1493942019.jpg",
    "summary": "信则灵。小男孩始终坚信圣诞老人的存在，但周围的大人和玩伴都认为这只是他天真的一厢情愿。圣诞前夕，小男孩终于因为他的坚持而得到了回报，睡梦中的他忽然感到屋子颤抖起来了，一列长长的火车停在了他的家门口。当他战战兢兢打开房门时，和蔼的列车长邀请他参加北极的圣诞派对。惴惴不安的克 劳斯踏上了火车，发现很多和他一样的小伙伴们。于是，兴奋不已的小男孩开始了他的北极狂欢之旅。",
    "genres": [
      "Animation",
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "家庭",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 37921,
    "runtime": "100 min",
    "releaseDate": "2005-01-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0338348",
    "id": "movie-1306785"
  },
  {
    "sourceId": "5155038",
    "title": "猎头游戏",
    "countryCode": "NO",
    "countryName": "Norway",
    "year": 2011,
    "coverUrl": "",
    "summary": "表面上，罗杰（阿卡塞尔·亨涅 Aksel Hennie 饰）是一名成功的猎头，但他还有着另一个职业——艺术品大盗。罗杰和娇妻戴安娜（西诺薇·玛考迪·伦德 Synnøve Macody Lund 饰）住在一幢价值不菲的别墅中，戴安娜的画廊为罗杰的第二职业提供了得天独厚的信息网。一天，罗杰通过戴安娜认识了一名叫做柯勒斯（尼可拉·科斯特-瓦尔道 Nikolaj Coster-Waldau 饰）的男子，他得知柯勒斯的家中藏有一张鲁本斯的画作，价值连城，正面临经济危机的罗杰动心了。画作轻松的得手了，可也就在同时，罗杰撞破了柯勒斯和妻子的私情大受打击，这还不是最糟糕的，本以为在现场没有留下丝毫线索的罗杰发现，危险正在渐渐逼近他和他的搭档，有一个人，正处心积虑的想要置他们于死地，一场惊天大逃亡展开了。而究竟是谁泄露了秘密？一时间，包括妻子在内，身边的每一个人都显得可疑起来。",
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
      "挪威",
      "瑞典",
      "丹麦",
      "德国"
    ],
    "rating": 7.6,
    "votes": 36338,
    "runtime": "100 min",
    "releaseDate": "2011-08-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1614989",
    "id": "movie-5155038"
  },
  {
    "sourceId": "1292867",
    "title": "快餐车",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1984,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1417360174.jpg",
    "summary": "无比（洪金宝 饰）是巴塞罗那一间侦探社的打手，这天，他的侦探社接到了一单大生意：客人委托他们14天内找到一名叫歌利亚的女子和她的女儿施维亚。因为侦探社的社长侦探在外躲债，而无比又不想眼白白丢了一单生意，于是，他找来在当地经营快餐车的华人青年托马斯（成龙 饰）与大卫（元彪 饰）一起进行调查。",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 35829,
    "runtime": "108 min",
    "releaseDate": "1984-08-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0087578",
    "id": "movie-1292867"
  },
  {
    "sourceId": "1309192",
    "title": "相见恨早",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p700950347.jpg",
    "summary": "《相见恨早》是阿什顿·库彻由一个喜剧明星开始向浪漫爱情剧男主角转型之作。",
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
    "rating": 7.6,
    "votes": 35003,
    "runtime": "107 min",
    "releaseDate": "2005-04-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0391304",
    "id": "movie-1309192"
  },
  {
    "sourceId": "1293142",
    "title": "新上海滩",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1996,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p779017072.jpg",
    "summary": "年轻军官许文强（张国荣）逃往路上被日本特务伏击堕海，漂浮到外滩岸上时身体不支晕倒，丁力（刘德华）路过欲将其救却遭其下意识的武力，两人一番打斗后结为好友。丁力偶然救下上海大亨冯敬尧（吴兴国）的千金冯程程（宁静）后，许下心愿要娶其为妻，但襄王有梦神女却心另有所属，冯程程只把他当好朋友，爱的恰是某次旅途中在火车上结识的他的好兄弟许文强，而许文强也因她的勇敢善良机智对她产生了好感。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 34731,
    "runtime": "96 min",
    "releaseDate": "1996-07-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0117619",
    "id": "movie-1293142"
  },
  {
    "sourceId": "2080007",
    "title": "金刚不坏",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p948510953.jpg",
    "summary": "迈克（库尔特•拉塞尔饰）是一个经常与死神打交道的特技演员，久经刺激之后，他俨然成为一个变态杀人狂。一天，他穿上行头，照样开着那印有骷髅图案的汽车上路寻找猎物。在午夜酒吧，他接近了一些年轻女人（罗莎里奥•道森、范妮莎•费丽托、乔丹•莱德、罗丝•麦高恩等饰）。在喋喋不休的她们离开酒吧后，迈克展开了行动，那辆诡异的汽车，便是他的致命凶器。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 34411,
    "runtime": "114 min",
    "releaseDate": "2007-07-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1028528",
    "id": "movie-2080007"
  },
  {
    "sourceId": "25767747",
    "title": "故事的故事",
    "countryCode": "IT",
    "countryName": "Italy",
    "year": 2015,
    "coverUrl": "",
    "summary": "影片由“女王”（The Queen）、“两个老妇人”（The Two Old Women）及“跳蚤”（The Flea）多个单元组成。改编自17世纪由吉姆巴地斯达·巴西耳创作出版的那不勒斯语童话故事集《五日谈》（Pentamerone）。",
    "genres": [
      "Drama",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "剧情",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "意大利",
      "法国",
      "英国"
    ],
    "rating": 7.6,
    "votes": 34327,
    "runtime": "133 min",
    "releaseDate": "2015-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3278330",
    "id": "movie-25767747"
  },
  {
    "sourceId": "25706773",
    "title": "硬核亨利",
    "countryCode": "RU",
    "countryName": "Russia",
    "year": 2015,
    "coverUrl": "",
    "summary": "本片根据导演上一部拍摄的短片《Bad Motherfucker》改编而成，全程镜头以第一人称视角展现，给人以经典射击游戏《絕對武力》的即视感。",
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
      "俄罗斯",
      "美国"
    ],
    "rating": 7.6,
    "votes": 33550,
    "runtime": "96 min",
    "releaseDate": "2015-09-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3072482",
    "id": "movie-25706773"
  },
  {
    "sourceId": "26707472",
    "title": "明日的我与昨日的你约会",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2016,
    "coverUrl": "",
    "summary": "美术大学学生南山高寿与福寿爱美电车相遇，他鼓起勇气向女孩表白。在一起后，高寿慢慢发现两人原是旧识，而女孩身上，也隐藏着诸多秘密。",
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
      "日本"
    ],
    "rating": 7.6,
    "votes": 33475,
    "runtime": "111 min",
    "releaseDate": "2016-12-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5338222",
    "id": "movie-26707472"
  },
  {
    "sourceId": "3077680",
    "title": "傻瓜",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2097943861.jpg",
    "summary": "李承龙（车太贤 Tae-hyun Cha 饰）因为童年一场意外让他的智商只停留在了儿童时期，无论快乐还是悲伤都有着傻瓜一样的笑容。父母离世后靠着三明治店的收入来养活照顾妹妹智仁（崔雪莉 Sulli 饰），每晚唱着《小星星》想着妈妈，盼望着童年暗恋的对象芝浩（河智苑 Ji-won Ha 饰）归来。某天承龙在路上一眼认出了留学十年刚刚回国的芝浩。随着两人相处日子的增多，芝浩对承龙儿时的记忆被渐渐被唤起，在承龙的鼓励下对钢琴的信心也渐渐恢复。就在芝浩，妹妹智仁和玩伴相洙（李己雨 Ki-woo Lee 饰）这三个承龙最爱的人都陪伴在自己身边的时候，妹妹的意外病倒让幸福的故事开始发生了转折…",
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
    "rating": 7.6,
    "votes": 33001,
    "runtime": "104 min",
    "releaseDate": "2008-02-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1233461",
    "id": "movie-3077680"
  },
  {
    "sourceId": "1294791",
    "title": "机器战警",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1987,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1445879319.jpg",
    "summary": "底特律是世界闻名的汽车城，这里的机械工业已经到了出神入化的地步。墨菲（彼得•威勒 Peter Weller 饰）是底特律的一个普通警察，既没有非凡身手、也没有高超技术。一次，他执行任务时被一伙暴徒暴打致死，从此他的人生轨迹改变了。",
    "genres": [
      "Drama",
      "Action",
      "Sci-Fi",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "科幻",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 31248,
    "runtime": "102 min",
    "releaseDate": "1987-07-17",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093870",
    "id": "movie-1294791"
  },
  {
    "sourceId": "26140405",
    "title": "爱的成人式",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "A面：在某次联谊会上，身体肥胖且其貌不扬的大学生铃木夕树邂逅了美丽女孩茧子（前田敦子 饰）。他帮对方解围，对方似乎也对他有了好感。在此后的日子里，两人见面的次数增多，在茧子的鼓励和建议下，铃木尝试着改变自己的造型，力争成为女孩心目中理想的男性。那一年的圣诞节，他们的爱情走向顶点。B面：大学毕业后，铃木进入职场，并按照公司的安排前往东京进行深造，因此不得不和茧子经历远距离的恋爱。起初一切还好，但随着时间的流逝，两人之间逐渐出现隔阂，而远在东京的铃木又邂逅了美丽的女同事美弥子（木村文乃 饰），爱情的天平进一步倾斜……",
    "genres": [
      "Drama",
      "Romance",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 30070,
    "runtime": "110 min",
    "releaseDate": "2015-05-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4119590",
    "id": "movie-26140405"
  },
  {
    "sourceId": "1394825",
    "title": "11:14",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2003,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1104365481.jpg",
    "summary": "杰克（亨利•托马斯 Henry Thomas 饰）夜间酒后驾驶，并用手机打电话聊天，却没曾想在穿过立交天桥时，一具尸体从天而降。便利店员达菲（萧恩•哈特西 Shawn Hatosy 饰）因女友雪莉（瑞切尔•蕾•库克 Rachel Leigh Cook 饰）怀孕打胎一事向同事步兹（希拉里•斯万克 Hillary Swank 饰）借钱，假扮便利店被劫。而此前，一群少年从便利店买了过期的甜甜圈，夜晚飙车并向他人投掷甜甜圈取乐。已打算和达菲分手的雪莉不顾父亲弗兰克（帕特里克•斯韦兹 Patrick Swayze 饰）的劝阻，擅自出门与新男友艾伦（布雷克• 海仑Blake Heron 饰）偷欢。所有一切的松散事件，都在11：14分相互交织，互为因果，让结局出人意料，不可思议。",
    "genres": [
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "加拿大",
      "美国"
    ],
    "rating": 7.6,
    "votes": 29823,
    "runtime": "85 min",
    "releaseDate": "2003-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0331811",
    "id": "movie-1394825"
  },
  {
    "sourceId": "3078514",
    "title": "特别响，非常近",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1353738074.jpg",
    "summary": "九岁男孩奥斯卡·史埃尔（托马斯·豪恩 Thomas Horn饰）的父亲（汤姆·汉克斯 Tom Hanks饰）在911事故中丧生，在他幼小的内心中留下了阴影。无意间奥斯卡发现了一封写着“布莱克”的信封和一把钥匙。奥斯卡认为这是父亲给他留下的寻找线索，钥匙背后一定隐藏着什么 秘密。奥斯卡把这一秘密告诉了不会说话的老爷爷（马克斯·冯·西多 Max von Sydow饰）。此后的每个周末，奥斯卡开始在五个城区里寻找姓“布莱克”的人。父亲生前跟奥斯卡一起规划了寻找第六城区的“侦查探险”游戏，告诉奥斯卡：不要停止寻找。",
    "genres": [
      "Drama",
      "Mystery",
      "Family",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "家庭",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 27085,
    "runtime": "129 min",
    "releaseDate": "2011-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0477302",
    "id": "movie-3078514"
  },
  {
    "sourceId": "1949321",
    "title": "布鲁克斯先生",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2255762675.jpg",
    "summary": "探讨人性的双面性，展示残忍、阴暗的另一个自己。布鲁克斯先生（凯文•科斯特纳Kevin Costner 饰）是个成功的上流社会人士，热衷慈善，德高望重，家庭美满。这样一个满分男人，人格里却有着另人不为所知的一面：另一个他自称马歇尔，不断诱使布鲁克斯以杀人为乐。他陶醉于连环杀人的乐趣中，就如染上毒瘾，却不料在杀害一名夫妇的时候，被一名摄影师拍下全过程。摄影师以此来要挟布鲁克斯，怎料却被布鲁克斯反攻一着。因为事情蹊跷，引来了女警探特蕾西的怀疑。于是布鲁克斯先生开始了他下一步的计划。",
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
      "美国"
    ],
    "rating": 7.6,
    "votes": 26070,
    "runtime": "120 min",
    "releaseDate": "2007-06-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0780571",
    "id": "movie-1949321"
  },
  {
    "sourceId": "3000078",
    "title": "舞出我人生3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p620259526.jpg",
    "summary": "和前几集不同，这次影片采用了3D立体电影形式，可以让观众有身临其境的感觉。",
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
      "美国"
    ],
    "rating": 7.6,
    "votes": 25735,
    "runtime": "107 min",
    "releaseDate": "2010-08-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1193631",
    "id": "movie-3000078"
  },
  {
    "sourceId": "1298976",
    "title": "铁血战士",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2101543383.jpg",
    "summary": "美军一名飞行员在南美洲的原始森林失踪了，那里盘踞着不怎么友好的当地游击队。美军特种兵少教达奇（阿诺•施瓦辛格 Arnold Schwarzenegger）率领部下亲自前往搜救。他们在森林里很快就发现了失踪的飞行员的尸体，死状恐怖。大家都认为那是当地的游击队干的，愤怒的队员开始寻找当地游击队的基地，要为同伴报仇。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 25535,
    "runtime": "107 min",
    "releaseDate": "1987-06-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093773",
    "id": "movie-1298976"
  },
  {
    "sourceId": "2054932",
    "title": "虐童疑云",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2460435206.jpg",
    "summary": "1964年，美国纽约布朗克斯区，圣尼古拉斯天主学校。修女阿洛伊修斯•贝维尔（Meryl Streep 梅丽尔•斯特里普 饰）令行禁止，教条严明，为学生们所畏惧；而新来的布伦丹•弗林的神父（Philip Seymour Hoffman 菲利普•塞默•霍夫曼 饰）则态度和蔼，处事开明，受到学生们的喜爱。",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 24455,
    "runtime": "104 min",
    "releaseDate": "2008-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0918927",
    "id": "movie-2054932"
  },
  {
    "sourceId": "6755346",
    "title": "妙笔生花",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "本片是《创：战纪》两位编剧布莱恩·克鲁格曼和李·斯特恩斯奥的导演处女作。",
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
    "rating": 7.6,
    "votes": 23424,
    "runtime": "104 min",
    "releaseDate": "2012-01-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1840417",
    "id": "movie-6755346"
  },
  {
    "sourceId": "1297598",
    "title": "露西亚的情人",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2163031990.jpg",
    "summary": "风流倜傥的小说家洛伦佐（Tristán Ulloa 饰）在遭遇创作瓶颈之际邂逅了自己的崇拜者露西亚（Paz Vega 帕兹•维嘉 饰）——一名在咖啡馆工作的女招待。她点燃了洛伦佐沉寂已久的激情，两人开始一段愉快刺激的同居生活。偶然机会，洛伦佐得知自己拥有一个女儿，那是他一年前在海边夜晚的所留下的艳遇结晶。自此他的心情重归浮躁，他私下寻找女儿，却将小说中的情节和现实混为一谈。",
    "genres": [
      "Drama",
      "Romance",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "情色"
    ],
    "originalRegions": [
      "西班牙",
      "法国"
    ],
    "rating": 7.6,
    "votes": 22773,
    "runtime": "128 min",
    "releaseDate": "2001-08-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0254455",
    "id": "movie-1297598"
  },
  {
    "sourceId": "4830236",
    "title": "冰冷热带鱼",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p931311610.jpg",
    "summary": "富士见市某经营热带鱼的商店，居住着社本一家三口。户主信介（吹越满 饰）在妻子去世后不久便娶了美丽的妙子，此举令女儿美津子大为不满，因此家中的气氛总是压抑凝重，妙子更是小心翼翼，生怕因自己惹出事端。某晚，美津子因在行窃被超市所扣留，社本夫妇匆忙前往，多亏热情的陌生男子村田幸雄出面方得以脱身。村田也是一家热带鱼商店的老板，他诚恳地邀请社见一家到他的店中做客，并愿意聘用美津子为职员。社本夫妇虽有些无所适从，却不自觉地被村田牵着鼻子走。不久后，村田邀请信介为合作人，结果竟在信介的面前杀死了一个质疑自己的男人。一向唯唯诺诺的信介，被迫成为了疯狂的村田毁尸灭迹的帮凶……",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 22570,
    "runtime": "146 min",
    "releaseDate": "2010-09-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1632547",
    "id": "movie-4830236"
  },
  {
    "sourceId": "1303447",
    "title": "火星任务",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2000,
    "coverUrl": "",
    "summary": "公元2020年，云集了无数顶尖科学家的世界空间站（World Space Station）正在进行一项载人飞船火星登陆计划。由卢克·格莱姆（Don Cheadle 饰）率领的4人小组成功抵达这颗无人星球，他们在此发现一些奇怪景象，随后小组成员也接连毙命。为了调查这起悲剧 的原因并寻找可能的生还者，空间站派出伍迪·布雷克（蒂姆·罗宾斯 Tim Robbins 饰）率领的救援小组前往火星。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 21767,
    "runtime": "114 min",
    "releaseDate": "2000-03-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0183523",
    "id": "movie-1303447"
  },
  {
    "sourceId": "1440283",
    "title": "霹雳贝贝",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1988,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2374042335.jpg",
    "summary": "一个夜晚，一名孕妇正在妇产科的手术室里生产，忽然，天空中出现了一个放着奇异光辉的不明飞行物。飞行物一闪而过，手术室里的灯暗了一下，一个可爱的小生灵咕咕坠地了，那就是贝贝（张京 饰）。贝贝生来就和常人不一样，因为他的双手竟然带电和能随意操控电器！为了怕发生意外，贝贝的双手总是戴着手套，总是被大人关在家里。贝贝慢慢长大了，终于到了上学的年龄。学校里、生活中，贝贝带电的双手和他的超能力既带给了他很多欢乐，亦为他带来了不少烦恼……",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Children"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "儿童"
    ],
    "originalRegions": [
      "中国大陆"
    ],
    "rating": 7.6,
    "votes": 21445,
    "runtime": "90 min",
    "releaseDate": "1988-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7392160",
    "id": "movie-1440283"
  },
  {
    "sourceId": "7015714",
    "title": "南国野兽",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "在一个叫巴斯特普的河口地区，6岁的小姑娘“小玉米饼”（奎文赞妮·瓦利斯 Quvenzhané Wallis 饰）和她的爸爸温克（德怀特·亨利 Dwight Henry 饰）生活在此地。一座大坝将巴斯特普与外面的世界隔绝起来，人们在这里过着相对原始的生活。命不久矣的温克对女儿很严厉，一心希望她早日学会自己生存。一次可怕的飓风席卷了这个小村庄，他们的家园被野兽般的洪水吞噬。大灾难过后，幸存的人都团结在一起，开始重建家园。然而事情并非如此简单，洪水一直没有退去，小村庄的一切都开始衰败，动物尸体随处可见。而另一方面，外面世界已经将此地划为强制撤离区域，相关人员进入村庄，强制把他们带去避难所。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 20737,
    "runtime": "93 min",
    "releaseDate": "2012-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2125435",
    "id": "movie-7015714"
  },
  {
    "sourceId": "25717896",
    "title": "韩公主",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2013,
    "coverUrl": "",
    "summary": "韩恭珠（千禹熙 饰）是一位十七岁的平凡少女，她热爱音乐，希望有朝一日能够成为一名歌唱家。然而，本该处在一生中最快乐和无忧无虑的年华的她，却因为一场意外的发生而彻底失去了笑容，亦就此放弃了唱歌的梦想。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.6,
    "votes": 20439,
    "runtime": "112 min",
    "releaseDate": "2013-10-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3265462",
    "id": "movie-25717896"
  },
  {
    "sourceId": "5910040",
    "title": "舞出我人生4",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "影片讲述一个富商的女儿艾米莉（凯瑟琳·麦考米克 饰）前往迈阿密想要成为一名专业的舞者，她结识了一个顶尖舞蹈团的领队西恩（瑞安·古兹曼 饰），并很快坠入爱河。为了舞团的生存，他们必须拿下一个很重要的赞助项目。但是这时艾米莉的父亲横插一脚，企图改变和拆散舞团，艾米莉、西恩和舞团的其他成员必须团结起来，捍卫并且实现他们的梦想。",
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
      "美国"
    ],
    "rating": 7.6,
    "votes": 20369,
    "runtime": "99 min",
    "releaseDate": "2012-07-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1800741",
    "id": "movie-5910040"
  },
  {
    "sourceId": "27615398",
    "title": "罪人",
    "countryCode": "DK",
    "countryName": "Denmark",
    "year": 2018,
    "coverUrl": "",
    "summary": "前警官Asger Holm接到一通电话，来自一个被绑架的女人，当电话突然挂断后，搜寻那位女性的行动正式展开。这通电话是惟一的线索，警官需要与时间赛跑，拯救她于危难之中，然而他逐渐意识到他所处理的案件远比自己想象的要复杂很多。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "丹麦"
    ],
    "rating": 7.6,
    "votes": 19267,
    "runtime": "85 min",
    "releaseDate": "2018-01-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6742252",
    "id": "movie-27615398"
  },
  {
    "sourceId": "1307755",
    "title": "恋爱写真",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2003,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1397862677.jpg",
    "summary": "诚人（松田龙平 饰）是一名在边缘挣扎的摄影师，有一天，他收到前女友静流（广末凉子 饰）的来信，信中说自己要在纽约开摄影展了。",
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
    "rating": 7.6,
    "votes": 18787,
    "runtime": "111 min",
    "releaseDate": "2003-05-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0370425",
    "id": "movie-1307755"
  },
  {
    "sourceId": "25780578",
    "title": "好朋友们",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2014,
    "coverUrl": "",
    "summary": "17年前，三个好朋友相约上山，不料遭遇意外，被困雪山，幸好最终成功获救。自此三人成为生死之交，多年来感情深厚。泰贤（池晟 饰）是个兢兢业业具有正义感的消防员，与妻女过着清贫而和美的生活；仁哲（朱智勋 饰）就职于保险公司，为人聪明机灵，常常投机取巧；民洙（李光洙 饰）是三人中混得最不济的，经营着自己的小生意，平日很依赖这两位好朋友。",
    "genres": [
      "Drama",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.6,
    "votes": 18508,
    "runtime": "114 min",
    "releaseDate": "2014-07-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3957986",
    "id": "movie-25780578"
  },
  {
    "sourceId": "26791452",
    "title": "塔利",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2018,
    "coverUrl": "",
    "summary": "查理兹·塞隆饰演一位因照顾孩子而辛勤劳作的母亲，两位熊孩子加上一个嗷嗷待哺的婴儿，似乎要把她压垮，她的世界因为一位名叫塔利的保姆(麦肯兹·戴维斯饰)出现，发生了天翻地覆的改变。",
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
    "rating": 7.6,
    "votes": 18446,
    "runtime": "95 min",
    "releaseDate": "2018-01-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5610554",
    "id": "movie-26791452"
  },
  {
    "sourceId": "24872189",
    "title": "托尼·厄德曼",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2016,
    "coverUrl": "",
    "summary": "Inès在一家位于布加勒斯特的德国大型企业工作。她的生活一直井然有序，直到她的父亲Winfried突然造访，并向她提出了这个问题：“你幸福吗？”面对这个根本无法回答的问题，她的生活开始出现一系列翻天覆地的变化。她并不喜欢自己的父亲，甚至有点以他为耻，但他却通过捏造一个名叫Toni Erdmann的诙谐人物，试图为她的生活找到一个方向。",
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
      "奥地利"
    ],
    "rating": 7.6,
    "votes": 18095,
    "runtime": "162 min",
    "releaseDate": "2016-05-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4048272",
    "id": "movie-24872189"
  },
  {
    "sourceId": "3217128",
    "title": "哈里·布朗",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2009,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1333504472.jpg",
    "summary": "70多岁的哈里·布朗（迈克尔·凯恩 Michael Caine 饰）是一名退役的皇家海军军官，妻子去世后，靠退休金生活的哈里独自住在贫民窟附近的小公寓。附近的人行隧道是小混混们街头斗殴、毒品交易和肉体买卖的场所，跟布朗下象棋的好朋友，老头子莱昂纳德（大卫·布莱德利 David Bradley 饰）就常被这帮混混骚扰，甚至终被残忍杀害。女警官弗兰普顿（艾米莉·莫迪默 Emily Mortimer 饰）与下属负责调查案件，却因证据不足而不得不释放杀害莱昂纳德的凶手。一把年纪的布朗忍无可忍，决定亲自上阵，铲除混混，为莱昂纳德报仇。",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.6,
    "votes": 17734,
    "runtime": "103 min",
    "releaseDate": "2009-11-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1289406",
    "id": "movie-3217128"
  },
  {
    "sourceId": "1309050",
    "title": "最长的一码",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p858828132.jpg",
    "summary": "曾经风光无限的美式橄榄球四分位选手保罗·克洛伊（亚当·桑德勒 Adam Sandler 饰）的人生跌入谷底，他先是因假球事件饱受争议，随后又因酒驾拘捕而被送入监狱。监狱长沃顿·海森（詹姆斯·克伦威尔 James Cromwell 饰）喜爱橄榄球却残忍冷酷的家伙。他欣赏保罗的才能，于是要求他和其他囚犯组建一支球队，与狱警球队展开对抗。在保罗和同样身陷囹圄的金牌教练奈特·斯卡布罗（伯特·雷诺兹 Burt Reynolds 饰）的调教下，一支奇怪的球队在监狱中诞生了……",
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
    "rating": 7.6,
    "votes": 17633,
    "runtime": "113 min",
    "releaseDate": "2005-05-27",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0398165",
    "id": "movie-1309050"
  },
  {
    "sourceId": "20470369",
    "title": "有钱男与贫穷女：纽约篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2013,
    "coverUrl": "",
    "summary": "经历了一番波折，拥有天才一般头脑的日向彻（小栗旬 饰）终于带着新创公司（Next Innovation）进入全新的发展时期，而他和夏井真琴（石原里美 饰）也开始了一段日本-美国的跨洋之恋。日向再接再厉，决定退出“橱柜”新企划，结果招致属下一直反对，更因试图召回不久前出狱的旧友朝比奈恒介（井浦新 饰）而令公司股票大跌。与此同时，真琴返回日本，她和日向终于开始在同一屋檐下生活，无奈这名完美男友似乎习惯了一个人的日子，两人的相处渐入瓶颈。前进道路上最大的挑战，日向、真琴以及朝比奈这群充满活力的年轻人，能否勇敢迈过？",
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
    "rating": 7.6,
    "votes": 17588,
    "runtime": "121 min",
    "releaseDate": "2013-04-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2605312",
    "id": "movie-20470369"
  },
  {
    "sourceId": "3218596",
    "title": "伽利略特别篇",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2152380996.jpg",
    "summary": "本集SP为《神探伽利略》系列的第0章，以TV版汤川学与内海熏相遇前三年的一起案件为主线。三年前的一天深夜，某海岛小屋发生了一起密室杀人案。被害人在反锁的屋内被锐物刺穿胸背，所在小屋亦被烧毁。已为警察的草薙俊平（北村一辉 饰）回到母校帝都大学，邀请12年不见的老同学汤川学 （福山雅治 饰）协助破案。汤川一行来到案发现场附近，一边享受海滩风光一边寻找案件线索。随着杀人案侦破工作的推进，只为还原案件物理原理的汤川逐步逼近着案件的真相，只是此时的他尚未意识到，人心亦是一门科学……",
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
    "rating": 7.6,
    "votes": 17522,
    "runtime": "108 min",
    "releaseDate": "2008-10-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1659849",
    "id": "movie-3218596"
  },
  {
    "sourceId": "1472783",
    "title": "一眉道人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1989,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2546400181.jpg",
    "summary": "一眉道人（林正英 饰）修为高强，擅长茅山道术，和徒弟阿豪（钱小豪 饰）住在一个小镇上；他养了一只清朝的小僵尸，小僵尸经常帮他和阿豪办事。一天，一眉道人被邻镇的人邀请去捉鬼，因为邻镇瘟疫蔓延，不时有僵尸出没。一眉道人带上阿豪和小僵尸出发了。",
    "genres": [
      "Comedy",
      "Action",
      "Horror",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "恐怖",
      "奇幻"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 16537,
    "runtime": "86 min",
    "releaseDate": "1989-07-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0098690",
    "id": "movie-1472783"
  },
  {
    "sourceId": "3005387",
    "title": "怪兽在巴黎",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2011,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p820534127.jpg",
    "summary": "1910年，法国巴黎。电影院放映员埃米尔（Sébastien Desjours 配音）和他的朋友罗尔（Gad Elmaleh 配音）来到某科学家的实验室送货，科学家恰好不在，两个人胡乱动实验室的药品，结果引发大混乱，更令一只小跳蚤巨大化，变成恐怖的大怪物。怪物跳蚤逃出实验室，在巴黎引来了一阵骚乱和恐慌。而事实上，这只跳蚤温柔无辜，有着一颗纯洁的心。它偶然结识了美丽的酒吧驻唱歌手露西（Vanessa Paradis 配音），由此得名弗兰卡。弗兰卡具有令人惊叹的音乐天赋，它和露西的演出得到人们的欢迎。",
    "genres": [
      "Comedy",
      "Animation",
      "Music",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "喜剧",
      "动画",
      "音乐",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "法国"
    ],
    "rating": 7.6,
    "votes": 16152,
    "runtime": "90 min",
    "releaseDate": "2011-10-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0961097",
    "id": "movie-3005387"
  },
  {
    "sourceId": "1304837",
    "title": "爆裂刑警",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1226739925.jpg",
    "summary": "刑警Mike（吴镇宇 饰）和阿仁（古天乐 饰）是一对拍档兼好兄弟，两人一个性格孤僻、沉默寡言，一个玩世不恭、愤世嫉俗，均不得上司赏识。为了缉捕劫匪“毒龙”一伙，两人在独居老人四婆（罗兰 饰）家中布置了监控装置。期间，孤儿院长大的Mike结识了被男友遗弃的孕妇Jennifer（林美贞 饰），表示愿做孩子的父亲，而阿仁也结识靓妹阿Yen（郑雪儿 饰）。",
    "genres": [
      "Action",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 15352,
    "runtime": "92 min",
    "releaseDate": "1999-08-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0214555",
    "id": "movie-1304837"
  },
  {
    "sourceId": "2042219",
    "title": "天然子结构",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p635063912.jpg",
    "summary": "右田素夜（夏帆 饰）在木村长大，那里简朴的生活环境十分舒适。素夜就读的中学是一所中小学的混合学校，虽然只有6个学生，年龄各异的孩子们相处融洽。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 15133,
    "runtime": "121 min",
    "releaseDate": "2007-07-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0997184",
    "id": "movie-2042219"
  },
  {
    "sourceId": "27102505",
    "title": "去年冬天与你分手",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2018,
    "coverUrl": "",
    "summary": "知名摄影师木原坂雄大（斋藤工 饰）之前因一起火灾而陷入诉讼。火灾中，他所聘请的盲眼模特不幸身亡，木原坂本人也深受重伤。事后，他因涉嫌诱拐、监禁和谋杀而被起诉，但在律师的帮助下最终逃脱了制裁。此后，自由撰稿人耶云恭介（岩田刚典 饰）找到某周刊编辑主任小林良树（北村一辉 饰）。希望该周刊能够支持他对木原坂黑暗的一面展开调查。在获得周刊的同意后，耶云拜访了木原坂，得以近距离观察这位神秘摄影师的工作状态，了解其内心所想，并走访与他生命中息息相关的人，却没有料到自己正步步走入对方的陷阱……",
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
    "rating": 7.6,
    "votes": 15115,
    "runtime": "119 min",
    "releaseDate": "2018-03-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt7210252",
    "id": "movie-27102505"
  },
  {
    "sourceId": "30181130",
    "title": "阿拉姜色",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2018,
    "coverUrl": "",
    "summary": "一日梦中惊醒，俄玛在重病之际，执意踏上前往拉萨的漫长之旅。现任丈夫和儿子相继追随加入陪伴，这个家庭也在艰辛旅程中逐渐消除隔阂，达成和解。在途中，俄玛向丈夫道出深扰她多年的秘密；病逝后，俄玛未达成的夙愿，又终将如何？",
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
    "rating": 7.6,
    "votes": 14824,
    "runtime": "109 min",
    "releaseDate": "2018-10-26",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt9159816",
    "id": "movie-30181130"
  },
  {
    "sourceId": "2330733",
    "title": "东京少女",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p816897412.jpg",
    "summary": "《东京少年》的姊妹篇，同样以“无法有结果的恋情”为主题。",
    "genres": [
      "Romance",
      "Fantasy"
    ],
    "originalGenres": [
      "爱情",
      "奇幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 14608,
    "runtime": "98 min",
    "releaseDate": "2008-02-23",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1139641",
    "id": "movie-2330733"
  },
  {
    "sourceId": "1302369",
    "title": "活色生香",
    "countryCode": "ES",
    "countryName": "Spain",
    "year": 1997,
    "coverUrl": "",
    "summary": "1970年，平安夜。妓女伊莎贝尔（佩内洛普•克鲁兹 Penélope Cruz 饰）临盆在即，情急之下，老鸨舍命拦车，结果她在车上产下一子，取名维克多。20年后，维克多爱上了跟他有染的女孩艾莲娜，但约会却被放鸽子。气愤的维克多登门造访，被犯毒瘾的艾莲娜以枪相逼。两人僵持时，警察桑丘和大卫（贾维尔•巴登 Javier Bardem 饰）刚好经过。此前，醉酒驾车的桑丘正在跟同事倾诉老婆偷情之事。在对抗中，大卫被维克多射伤导致下肢瘫痪，后者因此锒铛入狱。6年后，入狱期满的维克多在电视中看到了残疾运动员大卫，后者代表西班牙队参加92年巴塞罗那残奥会，并赢得了篮球金牌。维克多要找大卫复仇，却跟大卫妻子成了同事，这阴错阳差的背后竟隐藏着惊人的秘密……",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Erotic"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "惊悚",
      "情色"
    ],
    "originalRegions": [
      "西班牙",
      "法国"
    ],
    "rating": 7.6,
    "votes": 14333,
    "runtime": "103 min",
    "releaseDate": "1997-10-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118819",
    "id": "movie-1302369"
  },
  {
    "sourceId": "5279593",
    "title": "幸福的面包",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2012,
    "coverUrl": "",
    "summary": "厌倦了大都会的奔波忙碌和机械化枯燥无味的生活，自有充满幻想的理绘（原田知世 饰）与温柔体贴的丈夫逃离东京，定居在北海道月浦一个毗邻湖泊的小山丘上。水缟夫妇在此经营一家名叫Máni的面包咖啡店，二人分工做出美味的食品，宴请来往驻足的人们。那一年，伤心的齐藤香织（森カンナ 饰）与始终困在北海道的青年山下时生（平冈佑太 饰）结识，纯纯的情愫悄然而生；沉默的小女孩未久（八木优希 饰）与父亲（光石研 饰）抱持着对母亲的思念，在Máni找到了慰籍；病入膏肓的老妇人和先生来访于此，品味着人生最后的时刻。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 14161,
    "runtime": "114 min",
    "releaseDate": "2012-01-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1726749",
    "id": "movie-5279593"
  },
  {
    "sourceId": "6601382",
    "title": "活在当下",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2012,
    "coverUrl": "",
    "summary": "四年前，Tessa Scott被（达科塔·范宁 Dakota Fanning 饰）查出得了白血病，医生承认这是不治之症，于是她放弃了治疗。四年后的今天，她的父母已经分居，她和弟弟、父亲（帕迪·康斯戴恩 Paddy Considine 饰）住在一起，有一个好朋友Zoey（卡雅·斯考达里奥 Kaya Scodelario 饰）。她为自己列了一张临死前要做的清单。第一件就是进行她的第一次性行为，还有比如出名，嗑药，偷东西等等。Zoey的男朋友为她介绍了一个男生，然而在床上她却临阵逃脱了。接着她又认识了新搬来的邻居Adam（杰瑞米·艾文 Jeremy Irvine 饰），两人对彼此都有好感。Adam带着她去参加派对，开着摩托车载着她在马路上狂奔，在深夜的海里游泳，终于，他们成了情侣。然而这段感情一开始却遭到了Tessa父亲的反对。另一方面，Zoey意外怀孕，思虑再三她决定把孩子留下来。Tessa的病情正在逐渐恶化，她最后的心愿就是，能否在她离开人世之前见到Zoey的孩子？",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.6,
    "votes": 13747,
    "runtime": "103 min",
    "releaseDate": "2012-09-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1937264",
    "id": "movie-6601382"
  },
  {
    "sourceId": "4728076",
    "title": "幻想之爱",
    "countryCode": "CA",
    "countryName": "Canada",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p699224369.jpg",
    "summary": "本片曾参加了2010年戛纳电影节的“国际影评人周”单元，并获得不“青年致敬奖”。",
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
      "加拿大"
    ],
    "rating": 7.6,
    "votes": 13605,
    "runtime": "101 min",
    "releaseDate": "2010-06-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1600524",
    "id": "movie-4728076"
  },
  {
    "sourceId": "26252157",
    "title": "龙三和他的七人党",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "年过七十的高桥龙三（藤龙也 饰）曾是名噪一时的黑帮头目，而今他风光不再，委身寄居在儿子龙平（胜村政信 饰）的家中，还得忍受孩子们各种指摘与批评。许是对曾经热血岁月的回忆，让龙三相继和当年的哥们儿阿胜（近藤正臣 饰）、暴恐茂吉（中尾彬 饰）、快枪手马克（品川彻 饰）、拐杖市三（樋浦勉 饰）、五寸钉阿秀（伊藤幸纯 饰）和剃刀阿鹰（吉泽健 饰）等人碰头，老爷爷们把酒言欢，一拍大腿决定干脆再成立个黑帮组织——一龙会。与此同时，以西（安田显 饰）为首的新时代犯罪团伙京滨联合正展开不择手段的敛财行动，而一向看不惯他们的恶行的龙三一伙自然要与之发生冲突。",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 13194,
    "runtime": "111 min",
    "releaseDate": "2015-04-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4176776",
    "id": "movie-26252157"
  },
  {
    "sourceId": "1918208",
    "title": "割腕者的天堂",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p504615714.jpg",
    "summary": "故事设定在一个死后的奇异时空，所有自杀后的人都会被聚集到这里。在这个异次元的世界里，除了每个人都拥有神奇力量外，一切看似跟现实世界毫无分别。男主人公齐亚（派屈克·福吉特 Patrick Fugit饰）为情割腕自杀后，本以为能就此一了百了，却阴差阳错的坠入这个自杀者的天堂。在路上，齐亚先后遇见了因各种原因自杀的路人，后与另外两位自杀者结伴同行，一起踏上了神奇旅程。",
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
      "美国",
      "克罗地亚",
      "英国"
    ],
    "rating": 7.6,
    "votes": 12531,
    "runtime": "88 min",
    "releaseDate": "2007-11-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0477139",
    "id": "movie-1918208"
  },
  {
    "sourceId": "1297260",
    "title": "笨贼妙探",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1898841633.jpg",
    "summary": "盗贼麦尔斯（马丁·劳伦斯 Martin Lawrence 饰）与三名同伙合作盗窃钻石，岂料其中一人德克背叛了他们，警方被惊动，麦尔斯走投无路，只得逃跑中将钻石藏在一栋未完工的大楼通风管道里，之后束手就擒。两年后，麦尔斯刑满释放，但外面的一切似乎都已改变，女友不再需要他，而当年他藏钻石的那栋楼居然变成了——警察局！为了取回钻石，麦尔斯偷到ID卡，又凭借伪造的档案乔装成警察混入警局，由于警方缺人手，假警察麦尔斯很快得到任命，和菜鸟探员卡森（卢克·威尔逊 Luke Wilson 饰）结成搭档。麦尔斯凭借自己的盗窃经验很快表现出位，在警局得到重用，而管道中的钻石经过冲洗后下落不明，麦尔斯只得坚持假装下去。不久，德克为了得到麦尔斯的钻石再次出现……",
    "genres": [
      "Comedy",
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.6,
    "votes": 12489,
    "runtime": "93 min",
    "releaseDate": "1999-11-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0181316",
    "id": "movie-1297260"
  },
  {
    "sourceId": "4253448",
    "title": "第四张画",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p635775687.jpg",
    "summary": "男童朱云翔（毕晓海 饰）的父亲过世，生活无人照顾，来自大陆的老校工张先生（金世杰 饰）外冷内热，在朱云翔生母吴春兰（郝蕾 饰）到来前照顾了小翔一段时间。吴春兰十几年前由大陆赴台，短暂的迷梦破灭后又经历了牢狱之灾，如今栖身于风尘场所。靠摆摊维持生活的继父（戴立忍 饰）被恨意所填充，对小翔的到来颇多怨气。幸好小翔结识了当地的小混混手枪仔（纳豆 饰），手枪仔用偷来的轻骑带小翔兜风，配合手枪仔盗窃和强抢小学生之类虽然很不正当，可也给小翔枯燥的生活增添了几许刺激。如非必要，小翔很少画画，可也给父亲和手枪仔分别画了一幅，第三幅画，是关于小翔梦中的哥哥，而失踪三年的哥哥实际为继父所害。小翔的第四张画，会画下什么内容？",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "中国台湾"
    ],
    "rating": 7.6,
    "votes": 12281,
    "runtime": "105 min",
    "releaseDate": "2010-10-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1703914",
    "id": "movie-4253448"
  },
  {
    "sourceId": "1389971",
    "title": "恋爱进行时",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2003,
    "coverUrl": "",
    "summary": "生长在单亲家庭的敏雅（林秀晶 饰）是个酷爱摇滚音乐的高中生，她并不是“不良少女”但却会吸烟喝酒。她是个浪漫主义的人，希望自己的爱情能够一帆风顺。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.6,
    "votes": 12171,
    "runtime": "104 min",
    "releaseDate": "2003-11-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0381838",
    "id": "movie-1389971"
  },
  {
    "sourceId": "26809007",
    "title": "奇迹，那天如此重要",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2017,
    "coverUrl": "",
    "summary": "仁（松坂桃李 饰）和秀（菅田将晖 饰）出生于医生世家，他们的父亲是一位德高望重的医生，希望两个儿子长大后能够继承自己的事业。然而，叛逆桀骜的仁却并没有那份医者的仁心，热爱音乐的他组建了一支乐队，并且在演出中被音乐经纪人相中，他决定正式出道成为一名歌手。",
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
      "日本"
    ],
    "rating": 7.6,
    "votes": 11940,
    "runtime": "111 min",
    "releaseDate": "2017-01-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5778092",
    "id": "movie-26809007"
  },
  {
    "sourceId": "25798854",
    "title": "真幌站前狂想曲",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "真幌站前的多田便利屋，一对落魄的好友多田启介（（瑛太 饰）和行天春彦（松田龙平 饰）穷困潦倒度过了第三个年头。最近几天里，多田背着行天鬼鬼祟祟，似有隐瞒，原来行天此前有过一个妻子，二人通过人工受孕生下一个女儿小春（岩崎未来 饰）。而今前妻即将前往美国，所以打算将小春暂时放在多田这里一段时间。偏偏行天因过去的一些事件，极度讨厌小孩，这令多田倍感为难。与此同时，街上出现了专门出售有机蔬菜的可疑团体，其负责人小林（永濑正敏 饰）恰恰是某已解散的新型宗教的成员。黑道干部星良一（高良健吾 饰）找到便利屋二人组，要他们查明该组织所称的蔬菜的真相。不久后，行天和小春又意外卷入了巴士劫持事件……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 11759,
    "runtime": "124 min",
    "releaseDate": "2014-10-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3422606",
    "id": "movie-25798854"
  },
  {
    "sourceId": "1297683",
    "title": "野兽刑警",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2028302298.jpg",
    "summary": "飞虎队督察Mike（王敏德）被下放到环境复杂的红番区后，成为一群散漫的生番警察的领导，这群人中尤其烂鬼东（黄秋生）最让他头痛，此人曾殉私让其杀了人的黑帮好友Roy（张耀扬）潜逃，初来乍到时，Mike吃尽他带头搞的苦头。Roy的心腹图钉华（谭耀文）借大佬潜逃坐上第一把交椅，接收了包括女人YoYo（周海媚）在内的Roy的一切“财产”，成为Mike等人眼中的头号敌手。",
    "genres": [
      "Drama",
      "Action",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 11722,
    "runtime": "110 min",
    "releaseDate": "1998-04-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0157366",
    "id": "movie-1297683"
  },
  {
    "sourceId": "26974993",
    "title": "不留痕迹",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2018,
    "coverUrl": "",
    "summary": "电影根据同名小说改编，讲述一对父女生活在一个城市森林公园中，而他们犯的一个小错误使他们被人发现，生活发生了天翻地覆的变化。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 11583,
    "runtime": "109 min",
    "releaseDate": "2018-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3892172",
    "id": "movie-26974993"
  },
  {
    "sourceId": "1300089",
    "title": "星际旅行1：无限太空",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1979,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209380289.jpg",
    "summary": "寇克将军，欢迎您重返企业号！",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "科幻",
      "悬疑",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 11062,
    "runtime": "132 min",
    "releaseDate": "1979-12-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0079945",
    "id": "movie-1300089"
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
    "doubanTop250Rank": null,
    "imdbId": "tt0112767",
    "id": "movie-1294434"
  },
  {
    "sourceId": "1433417",
    "title": "向日葵",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2005,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2362346765.jpg",
    "summary": "本片延续了张扬在《洗澡》、《昨天》等影片中所呈现的中国式父子冲突与和解，以1976、1987和1999三年作横截面，勾勒出了北京一对普通父（孙海英）子（张凡、高歌、王海地）一路紧张但偶有温情的关系，母亲（陈冲）一直扮演中间调停人的角色。",
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
      "中国香港",
      "中国大陆",
      "荷兰"
    ],
    "rating": 7.6,
    "votes": 10961,
    "runtime": "129 min",
    "releaseDate": "2005-09-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0401808",
    "id": "movie-1433417"
  },
  {
    "sourceId": "26527937",
    "title": "被掩盖的时间",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2016,
    "coverUrl": "",
    "summary": "《格斗青春》严泰华导演 商业电影出道",
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
      "韩国"
    ],
    "rating": 7.6,
    "votes": 10919,
    "runtime": "130 min",
    "releaseDate": "2016-11-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt6273736",
    "id": "movie-26527937"
  },
  {
    "sourceId": "1309121",
    "title": "威尼斯商人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p851339077.jpg",
    "summary": "年轻人巴萨尼奥（约瑟夫·费因斯 Joseph Fiennes饰）一心要向富商千金鲍西娅小姐（琳恩·柯林斯 Lynn Collins饰）求婚，为了这个愿望，他必须付出三千达克特，无奈中他只好向热心肠的商人安东尼奥（杰里米·艾恩斯 Jeremy Irons饰）借钱。碰巧的是，安东尼奥因为生意周转的问题，只能问犹太人夏洛克（阿尔·帕西诺 Al Pacino饰）借来这笔钱。",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "美国",
      "意大利",
      "卢森堡",
      "英国"
    ],
    "rating": 7.6,
    "votes": 10804,
    "runtime": "138 min",
    "releaseDate": "2004-12-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0379889",
    "id": "movie-1309121"
  },
  {
    "sourceId": "1305249",
    "title": "完美盗贼",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529769312.jpg",
    "summary": "洛杉矶警察将正在打劫银行的乔（Bruce Willis 饰）与泰瑞（Billy Bob Thornton 饰）团团包围，断无脱身机会之时，两人昔日的经历一幕幕回放出现：崇尚行动的乔与喋喋不休的泰瑞服刑时临时起意越狱居然获得成功，两人为生计找来乔伊表弟哈维打算抢劫银行，他们打劫俄勒冈银行的奇特手法经媒体渲染后一时竟成为著名“过夜劫匪”，三人得手后分道扬镳。不久，被丈夫冷落而出走的红发女郎凯特（Cate Blanchett 饰）结识泰瑞，不知不觉融入乔一伙并与乔陷入热恋，泰瑞对凯特也颇有好感，经过笨拙的努力终于拉近了两人的距离。乔与泰瑞面临摊牌，但凯特表示他们两人在一起才是自己所爱，惬意的时光总嫌短暂，在不断打劫银行的行动中，乔和泰瑞走到了犯罪生涯的终点……",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "爱情",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 10793,
    "runtime": "123 min",
    "releaseDate": "2001-10-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0219965",
    "id": "movie-1305249"
  },
  {
    "sourceId": "25922902",
    "title": "唇上之歌",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2015,
    "coverUrl": "",
    "summary": "坐落于五岛列岛福江岛上的五岛中学，由于合唱团指导老师松原晴子（木村文乃 饰）待产休假，她便委托好友柏木由里（新垣结衣 饰）代课一学期。柏木美艳冷漠，学生们对她既好奇又忌惮，虽然听说她曾是某交响乐团的钢琴家，可是却因某种原因而辞职回家，并且决然不愿指导学生们练习。女神般的老师从天而降，吸引一帮原来对何尝没有任何兴趣的男孩加入这个清一色的女生团体中来。而女孩子们与男孩争吵不断，她们也对柏木老师的不闻不问颇有微词。一年一度的NHK全国学校音乐比赛即将召开，合唱团积极练习指定曲目《信～敬启　致十五岁的你～》。在此期间，柏木老师深藏心底的秘密逐渐浮出水面，而孩子们也在音乐的熏陶中找到人生的方向……",
    "genres": [
      "Drama"
    ],
    "originalGenres": [
      "剧情"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.6,
    "votes": 10571,
    "runtime": "132 min",
    "releaseDate": "2015-02-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3855730",
    "id": "movie-25922902"
  },
  {
    "sourceId": "1299667",
    "title": "驱魔警察",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1990,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2162764447.jpg",
    "summary": "重案组警察在追踪一起贩毒案时遭遇奇怪事件，运毒女子表情呆板、蛮力过人，七八个警察也不能阻止她的前进，最终一辆失控的卡车将该女子撞倒。经调查，警方发现该女子是东平洲三婆的女儿，因此要求三婆前来录口供。为了照顾三婆年迈的身体，在东平洲当警察的丰叔（林正英 饰）前来配合警方调查。丰叔是一名法术高强的警察，他在看过尸体后发现其中有所古怪，进而怀疑有人利用行尸运毒。丰叔的老搭档（午马 饰）情知案件严重，因此拜托丰叔调查。与丰叔配合的是两个不着调的小警察（林俊贤、苗侨伟 饰），他们看中丰叔的侄女（王美华 饰），因此与古板的丰叔闹出不少笑话。随着调查的深入，隐藏在幕后的邪教贩毒组织渐渐浮出水面……",
    "genres": [
      "Comedy",
      "Action",
      "Fantasy"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "奇幻"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 10570,
    "runtime": "87 min",
    "releaseDate": "1990-11-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0098150",
    "id": "movie-1299667"
  },
  {
    "sourceId": "1299658",
    "title": "龙虎风云",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1987,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166041332.jpg",
    "summary": "本片是周润发早期英雄片的代表作之一。一夜，一名警官在搜查红灯区时，却意外遭枪击身亡，警局高层意识到了这里潜藏着一班不寻常的匪徒。刘帮办联系上了警局一直部署在江湖的卧底，也是他的外甥――高秋(周润发 饰)，要他尽快打入这帮匪徒的内部，获知他们的犯罪计划。",
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
      "中国香港"
    ],
    "rating": 7.6,
    "votes": 10529,
    "runtime": "101 min",
    "releaseDate": "1987-02-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0093435",
    "id": "movie-1299658"
  },
  {
    "sourceId": "1298084",
    "title": "硅谷传奇",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1949178259.jpg",
    "summary": "本剧是部描述苹果公司与微软的，非官方授权的传记式电影。",
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
    "rating": 7.6,
    "votes": 10396,
    "runtime": "97 min",
    "releaseDate": "1999-06-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0168122",
    "id": "movie-1298084"
  },
  {
    "sourceId": "6875402",
    "title": "机器人与弗兰克",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2012,
    "coverUrl": "",
    "summary": "刚刚步入老年的弗兰克（弗兰克·兰格拉 Frank Langella饰）开始有轻微老年痴呆的症状，时常神智混乱，无法与人们进行正常的交流。他的一对儿女亨特（詹姆斯·麦斯登 James Marsden饰）、麦迪森（丽芙·泰勒 Liv Tyler饰）为父亲提供了一个机器人（彼得·萨斯加德 Peter Sarsgaard配音）来照料他的日常生活。弗兰克一开始无法接受这个冷冰冰的机器人，在经历了初期的磨合后，弗兰克发现眼前这个全能机器人不仅细心照料着自己的起居，更会静静地陪在身边，温柔地倾听自己的内心。弗兰克和机器人慢慢变成了好朋友。为了赢得图书管理员詹妮弗（苏珊·萨兰登 Susan Sarandon 饰）的好感，机器人跟着弗兰克为爱上演了一出惊天奇案。",
    "genres": [
      "Drama",
      "Comedy",
      "Sci-Fi"
    ],
    "originalGenres": [
      "剧情",
      "喜剧",
      "科幻"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.6,
    "votes": 10176,
    "runtime": "89 min",
    "releaseDate": "2012-08-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1990314",
    "id": "movie-6875402"
  },
  {
    "sourceId": "1302165",
    "title": "加油站袭击事件",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 1999,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1837011657.jpg",
    "summary": "夜色中，前棒球手（李成宰 饰）、纯情流氓（刘五性 饰）、前主唱（姜成珍 饰）、绘画爱好者（刘智泰 饰）四名好友出于好玩冲入一家加油站行劫，岂料老板颇有被劫经验，一早令家人将钱款取走，四人收获甚微，遂决定取代老板经营权，乔装加油站服务生坐地收钱。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.6,
    "votes": 10019,
    "runtime": "111 min",
    "releaseDate": "1999-10-02",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0262246",
    "id": "movie-1302165"
  },
  {
    "sourceId": "3077412",
    "title": "寻龙诀",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2284620292.jpg",
    "summary": "上世纪80年代末，胡八一（陈坤 饰）、王凯旋（黄渤 饰）与Shirley杨（舒淇 饰）在美国打算金盆洗手，本来叱咤风云的摸金校尉沦为街头小贩被移民局追得满街跑。就在此时，意外发现20年前死在草原上的初恋对象丁思甜（杨颖 饰）可能还活着，胡八一、王凯旋、Shirley杨决定再入草原千年古墓……",
    "genres": [
      "Drama",
      "Action",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 451667,
    "runtime": "125 min",
    "releaseDate": "2015-12-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4276752",
    "id": "movie-3077412"
  },
  {
    "sourceId": "1305065",
    "title": "公主日记",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2169009638.jpg",
    "summary": "15岁的高中生米亚（安妮•海瑟薇 饰）与母亲生活在美国，但她十分不自信，也常常遭到同学的嘲笑。就在她16岁生日那天，她与祖母（茱莉•安德鲁 饰）见面后发现这个优雅的女士是欧洲小国吉诺维亚的女王，米亚正是这个国度的公主。刚开始米亚十分不愿，在母亲的调解下米亚的态度才有所缓和。",
    "genres": [
      "Comedy",
      "Romance",
      "Family"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "家庭"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 218682,
    "runtime": "115 min",
    "releaseDate": "2001-08-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0247638",
    "id": "movie-1305065"
  },
  {
    "sourceId": "3412882",
    "title": "窃听风云",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2009,
    "coverUrl": "",
    "summary": "情报科窃听小组三兄弟情同手足，梁俊义（刘青云 饰）正直而又懦弱，在个人感情问题上托泥带水；杨真（古天乐 饰）家境窘困，不仅要应付身患白血病儿子的随时可能出现的突发情况，而且自己也病入膏肓，命不久矣；林一祥（吴彦祖 饰）年轻有为，满怀雄心，如今又“嫁入豪门”，前途不可限量。",
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
      "中国香港",
      "中国大陆",
      "新加坡"
    ],
    "rating": 7.5,
    "votes": 211151,
    "runtime": "100 min",
    "releaseDate": "2009-07-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1349853",
    "id": "movie-3412882"
  },
  {
    "sourceId": "1306160",
    "title": "新警察故事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2004,
    "coverUrl": "",
    "summary": "陈国荣（成龙 饰）的所在那一组警察是警队精英，破案无数。阿祖（吴彦祖 饰）是总警师的儿子，却勾结了几个高官子弟( 蒋怡丶尹子维丶安志杰丶叶山豪)挑战警方。他们到银行抢劫，警钟敲响警察赶到时，就把阿荣及队员带进了一个早已设计好的空旷仓库里。警员都陷进了匪徒早已设计好的游戏程序里，残忍的被杀害，连阿荣女朋友可颐 （杨采妮 饰）的弟弟也被无法幸免。阿荣就此被停职，出于内疚也跟可颐分手了。 终日喝得烂醉的阿荣在酒吧遇到了阿锋（谢霆锋 饰），阿锋为了使阿荣振作起来，决定假扮警察告诉阿荣自己是上司派来要求得到阿荣协助翻案的新警员。 阿荣又遇到那群狠狠打击他的罪犯，与他们斗志斗勇，在警花莎莎（蔡卓妍 饰）的协助下知道匪徒当年的事件被编成了一部游戏，同时也知道了当年为何情报被泄漏的原因。",
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
      "中国大陆",
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 194470,
    "runtime": "123 min",
    "releaseDate": "2004-09-24",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0386005",
    "id": "movie-1306160"
  },
  {
    "sourceId": "5422105",
    "title": "窃听风云2",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2011,
    "coverUrl": "",
    "summary": "香港证券商人罗敏生（刘青云 饰）驱车上班途中遭遇车祸，这起看似平平常常的车祸却引来反恐队的关注。原来警方在罗的车内发现军用窃听器，反恐队长何智强（古天乐 饰）怀疑有人正在策划恐怖袭击。随着何的调查，始终藏在暗处监视窃听的退伍军人司马念祖（吴彦祖 饰）也渐渐浮出水面。与此同时，罗将被窃听的消息告诉了“地主会”的元老们，这是一群自70年代起便操纵香港金融的业界精英，如今更成为只手遮天的抢钱大亨。地主会遭人窃听，无疑预示着他们的各种黑幕将大白于天下。",
    "genres": [
      "Drama",
      "Action",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "动作",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "中国香港",
      "中国大陆"
    ],
    "rating": 7.5,
    "votes": 189324,
    "runtime": "117 min",
    "releaseDate": "2011-08-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1852904",
    "id": "movie-5422105"
  },
  {
    "sourceId": "3148748",
    "title": "海扁王",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166633101.jpg",
    "summary": "戴夫·莱泽斯基（亚伦·约翰逊 Aaron Johnson 饰）和所有普通的男孩一样，梦想有一天可以成为超级英雄，只不过他把自己的这一梦想带入了现实。在网上购买到一套廉价的绿色连体衣之后，戴夫便开始了只身打击犯罪的行动。虽然第一次行动便让戴夫身负重伤，不过戴夫可不是一个轻言放弃的人，伤愈之后的戴夫在一次阻止斗殴时，被热心的群众发现并拍摄，之后关于超级英雄“海扁王”的事迹便传遍整个城市。成为传说中超级英雄的戴夫在一次行动中结识超级英雄父女“大老爸”（尼古拉斯·凯奇 Nicolas Cage饰）和“超杀女”（科洛·莫瑞兹 Chloe Moretz 饰），之后戴夫遭毒枭集团老大弗兰克·阿米克（马克·斯特朗 Mark Strong 饰）之子伪装成的英雄“红旋风”（克里斯托夫·梅兹-普莱瑟 Christopher Mintz-Plasse 饰）的利用，让“大老爸”和自己身陷囹圄。危难之时，“超杀女”及时出现救出戴夫，但“大老爸” 却不幸身亡。“超杀女”决定完成其父遗志，彻底消灭毒枭集团……",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "英国"
    ],
    "rating": 7.5,
    "votes": 187722,
    "runtime": "117 min",
    "releaseDate": "2010-04-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1250777",
    "id": "movie-3148748"
  },
  {
    "sourceId": "11624706",
    "title": "小黄人大眼萌",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "从地球诞生之初，一种奇怪的生物便出现在这颗蓝色的星球上。他们不断进化、蜕变，终于成为我们所熟悉的小黄人的模样。小黄人们毕生寻找邪恶的老大，以成为他的部属为荣，但是千百万年来的努力最终化成一场空。经历了一段长久的沉寂，名叫凯文的小黄人决定再度上路，他带着热爱音乐的斯图尔特、成事不足败事有余的鲍勃，漂洋过海来到了1968年的美国。三个小家伙偶然听说奥兰多即将召开“恶人大会”，于是忙不迭地赶了过去，并且阴差阳错成为女魔头斯嘉丽·杀人狂（桑德拉·布洛克 Sandra Bullock 配音）的随从。很快斯嘉丽交给他们一个任务，那就是窃取英国女王的王冠。",
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
    "rating": 7.5,
    "votes": 185214,
    "runtime": "91 min",
    "releaseDate": "2015-09-13",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2293640",
    "id": "movie-11624706"
  },
  {
    "sourceId": "1484091",
    "title": "水果硬糖",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2005,
    "coverUrl": "",
    "summary": "天真甜美的十四岁少女海莉（艾伦·佩姬 Ellen Page 饰）在网络上认识了三十二岁的摄影师杰夫（帕特里克·威尔森 Patrick Wilson 饰），二人相约在咖啡馆见面，相谈甚欢。海莉主动要求去杰夫家，让他为自己拍摄艺术照片，杰夫欣然从命。聊天喝酒之后，杰夫突然眩晕倒地，醒来发现自己竟被五花大绑。原来海莉是有备而来，就是要惩罚在网络上勾引未成年少女的恋童癖。海莉在屋中搜寻杰夫进行不法行为的证据，并为他实施了阉割手术。中途邻居太太（吴珊卓 Sandra Oh 饰）来访，也被海莉成功蒙混过关。随着海莉惩罚计划的一步步展开，杰夫的真面目也逐渐浮出水面……",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 171702,
    "runtime": "104 min",
    "releaseDate": "2005-01-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0424136",
    "id": "movie-1484091"
  },
  {
    "sourceId": "1304585",
    "title": "BJ单身日记",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2001,
    "coverUrl": "",
    "summary": "布里奇特•琼斯（蕾妮•齐维格 饰）是一个32岁的单身女子。她的工作及生活都是平淡无奇的，她唯一想得到一份真挚的爱情，就算有一众好友在身边及时安慰，布里奇特还是没有好过点。新的一年里，她要过一种新的生活。她选择用日记把自己生活里的点点滴滴都记录下来，她开始变得喜悦起来。",
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
      "英国",
      "法国",
      "美国",
      "爱尔兰"
    ],
    "rating": 7.5,
    "votes": 157527,
    "runtime": "97 min",
    "releaseDate": "2001-04-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0243155",
    "id": "movie-1304585"
  },
  {
    "sourceId": "6829652",
    "title": "女朋友○男朋友",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2012,
    "coverUrl": "",
    "summary": "1985年高雄的夏天，充满着玉兰花的香味，也洋溢着青春的躁动。尚未开放的台湾校园，教官一人独大。没有民主与自由可言的学校，压制不住王心仁（凤小岳 饰）逆反的心，写藏头诗，策划集体抗议舞会。和他一起无法无天的还有陈忠良（张孝全 饰）和林美宝（桂纶镁 饰）。经常腻在一起的三人，爱情也在悄无声息地滋长。木讷的忠良读不懂美宝的暗示；心仁则积极地追求美宝；而最早交女友的忠良却困惑了。",
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
      "中国台湾"
    ],
    "rating": 7.5,
    "votes": 139483,
    "runtime": "106 min",
    "releaseDate": "2012-08-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2319760",
    "id": "movie-6829652"
  },
  {
    "sourceId": "1978369",
    "title": "我的机器人女友",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2008,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p637412789.jpg",
    "summary": "生日没有任何人祝福，这样过着寂寞生活的大学生次郎（小出惠介饰）在20岁生日那天突然遇到了生命中的那个“她”（绫瀨遥饰）。二人共渡了一个美好的夜晚。是夜，“她”从次郎的眼前消失了。一年后的生日，本以为还将回归寂寞生活的次郎再次遇到了“她”。这一次，“她”讲出了惊天的故事：“我是未来次郎你创造的机器人，回到过去来保护你免受灾难。”就这样，“她”住进了次郎家中，开始了与次郎的同居生活。灾难似乎没有离开次郎的意思，但次郎与她的感情已在其中萌发。爱与时间的感人故事，守护未来的约定，开始今天的生活。",
    "genres": [
      "Comedy",
      "Action",
      "Romance",
      "Sci-Fi"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情",
      "科幻"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.5,
    "votes": 134774,
    "runtime": "115 min",
    "releaseDate": "2009-07-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0929860",
    "id": "movie-1978369"
  },
  {
    "sourceId": "1401533",
    "title": "碟中谍3",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "伊森（汤姆·克鲁斯 Tom Cruise 饰）曾是任职于特殊部门的秘密特工，自从一位名叫茱莉亚（米歇尔·莫娜汉 Michelle Monaghan 饰）的美丽女子出现在他的生命里后，伊森决定金盆洗手，卸甲归田。遗憾的是，好景不长，幸福的生活还没过多久，伊森便接到了徒弟林德赛（凯丽·拉塞尔 Keri Russell 饰）被死对头戴维恩（菲利普·塞默·霍夫曼 Philip Seymour Hoffman 饰）掳走的消息。戴维恩冷酷又凶残，林德赛落入他的手中可谓是凶多吉少。",
    "genres": [
      "Action",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国",
      "德国"
    ],
    "rating": 7.5,
    "votes": 133406,
    "runtime": "126 min",
    "releaseDate": "2006-07-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0317919",
    "id": "movie-1401533"
  },
  {
    "sourceId": "25966085",
    "title": "踏血寻梅",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2015,
    "coverUrl": "",
    "summary": "2009年，十六岁的湖南女孩王佳梅（春夏 饰）追随改嫁的妈妈和姐姐的脚步来到了香港，全新而陌生的环境，她感觉到格格不入，与家人的关系也逐渐紧张起来。志愿成为模特的佳梅以助理身份入行，尝尽了圈内的苦辣酸甜，最终为了赚更多的钱而出卖肉体。直到某天，她认识了拥有悲惨童年经历的肥仔丁子聪（白只 饰），两人的命运同时朝着悲剧的方向转变。繁忙的警署内，肥仔前来自首，负责此案的臧SIR（郭富城 饰）针对相关人士展开调查，在此过程中，佳梅和丁子聪个人的故事交替展开。有如两条悲伤的河流，最终汇成混杂着血污与泪的黄泉之水……",
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
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 128326,
    "runtime": "120 min",
    "releaseDate": "2015-12-03",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt4417522",
    "id": "movie-25966085"
  },
  {
    "sourceId": "1418190",
    "title": "007：大战皇家赌场",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "",
    "summary": "英国军情六处特工詹姆斯•邦德（丹尼尔•克雷格饰）这一次的任务是在赌场上赢取俄罗斯间谍手中的巨额财富，让其背后的恐怖组织势力无法达成阴谋并且击垮恐怖组织。这次，邦德有了一个漂亮的得力女助手琳德（伊娃•格林饰）。邦德经过了赌场上的种种训练，最终来到了皇家赌场。随着赌注越来越大，这场赌局也愈来愈显示出背后交错的阴谋。邦德甚至险些死于非命。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "英国",
      "德国",
      "捷克 Czech Republic",
      "巴哈马 Bahamas"
    ],
    "rating": 7.5,
    "votes": 115720,
    "runtime": "144 min",
    "releaseDate": "2007-01-30",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0381061",
    "id": "movie-1418190"
  },
  {
    "sourceId": "25752261",
    "title": "女间谍",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2015,
    "coverUrl": "",
    "summary": "苏珊（梅丽莎·麦卡西 Melissa McCarthy 饰）是中情局专门协助处理危险任务却不为人知的后勤人员，她的搭档布莱德利（裘德·洛 Jude Law 饰）在一次行动中突然失踪，也波及另一位顶尖中情局特工瑞克（杰森·斯坦森 Jason Statham 饰 ）的安危。为了找出搭档的下落，拯救这个岌岌可危的世界，苏珊自愿充当卧底，混进史上最危险的军火商集团，试图查出事情的真相，并与蛇蝎美女头目（萝丝·拜恩 Rose Byrne 饰）斗智斗勇。然而在英勇救难的惊险过程中，苏珊发现事情远没有她想象的那么简单……",
    "genres": [
      "Comedy",
      "Action",
      "Crime"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "犯罪"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 111623,
    "runtime": "120 min",
    "releaseDate": "2015-05-21",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3079380",
    "id": "movie-25752261"
  },
  {
    "sourceId": "1296201",
    "title": "逃学威龙2",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1992,
    "coverUrl": "",
    "summary": "周星星（周星驰 饰）圆满完成了校园任务后，以为可以升职，偏偏被调为交通警察。跟他一样立功的曹达华（吴孟达 饰）则继续以卧底的身份在学校内调查国际恐怖组织的案件。他的事业跌倒的低估，就连准备婚礼的钱都是女友阿敏（张敏 饰）的私己钱，令阿星十分无奈。为了证明自己的能力，他决定以个人的身份到学校协助曹达华，恐怖分子如期行动，双方开始奋战。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 109160,
    "runtime": "97 min",
    "releaseDate": "1992-04-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0105534",
    "id": "movie-1296201"
  },
  {
    "sourceId": "25793398",
    "title": "海洋奇缘",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2016,
    "coverUrl": "",
    "summary": "故事最早始于住在风和海的半神毛伊（道恩·强森 Dwayne Johnson 配音），他偷走了女神的特菲堤之心，导致岩浆魔鬼厄卡陷入疯狂的状态，南太平洋各小岛也面临着毁灭的威胁。一千多年后，某座小岛上的酋长女儿莫阿娜（奥丽依·卡拉瓦霍 Auli'i Cravalho 配音）在父母的呵护下渐渐长大，童年时她曾偶然捡到特菲堤之心，亦曾受到大海的召唤，然而父亲却严厉禁止莫阿娜出海，即使小岛正遭受着死亡的威胁。从奶奶那里，莫阿娜知晓了他们这一族人的历史，于是为了拯救小岛，她依然出海去寻找被困在某地的毛伊，好让他归还特菲堤之心。历经千辛万苦，莫阿娜终于见到了这个传说中的高傲自大的半神。而毛伊则担心特菲堤之心带来霉运拒绝前往。",
    "genres": [
      "Animation",
      "Musical",
      "Fantasy",
      "Adventure"
    ],
    "originalGenres": [
      "动画",
      "歌舞",
      "奇幻",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 108171,
    "runtime": "107 min",
    "releaseDate": "2016-11-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3521164",
    "id": "movie-25793398"
  },
  {
    "sourceId": "5360033",
    "title": "想爱就爱",
    "countryCode": "TH",
    "countryName": "Thailand",
    "year": 2010,
    "coverUrl": "",
    "summary": "女孩Pim（奥密兹•苏查拉特 Aomiz Suchar 饰）因与前男友分手要求换宿舍，于是她和新来的学妹Kim（蒂娜·吉塔勒拉 Tina Jittaleela 饰）成了同居舍友。起初，Pim以为Kim是走错屋的小正太，直到对方袒露胸襟，她才赫然发现 其实是同类。第 一印象如此之差，让Pim怀疑其拉拉倾向严重，索性在宿舍中画定了三八线。尽管Kim百般讨好，但是Pim还是觉得她弹吉他、玩电玩很烦人。倒是Pim的闺蜜对Kim仰慕已久，大献殷勤。直到Pim随Kim回了家，夜晚听她弹吉他，两人才慢慢地敞开了心扉。Pim喜欢上了Kim做的菜。慢慢地，两人形影不离的关系，引起了Pim朋友们的嫉妒。甚至连熟识的哥哥也以男友自居，让她很受伤。在经历了多次波折之后，Pim赫然发现，原来当彼此的心心相印时，并不存在不能逾越的界限……",
    "genres": [
      "Comedy",
      "Romance",
      "LGBTQ+"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "同性"
    ],
    "originalRegions": [
      "泰国"
    ],
    "rating": 7.5,
    "votes": 105925,
    "runtime": "102 min",
    "releaseDate": "2010-12-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1906518",
    "id": "movie-5360033"
  },
  {
    "sourceId": "1298586",
    "title": "木乃伊归来",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p847064824.jpg",
    "summary": "公元前3067年，魔蝎大帝（“岩石”洛克Dwayne Johnson 饰）率领大军企图征服世界，但他的野心在长达七年的战役中遭到挫败，他的残兵败部进入神圣的阿姆谢沙漠，严酷的环境使得曾经骁勇的战士们接连倒毙，濒临死亡的魔蝎大帝向死神阿努比斯献出灵魂，以求打败他的敌人。在此之后，魔蝎大帝及来自地狱的死神军团所向披靡，大获全胜的死神军团也重新沉睡地下。",
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
    "rating": 7.5,
    "votes": 98833,
    "runtime": "130 min",
    "releaseDate": "2001-05-04",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0209163",
    "id": "movie-1298586"
  },
  {
    "sourceId": "1293702",
    "title": "侏罗纪公园2：失落的世界",
    "countryCode": "US",
    "countryName": "United States",
    "year": 1997,
    "coverUrl": "",
    "summary": "当年在努布拉岛营建侏罗纪公园时，约翰•哈蒙德（理查德•阿滕伯勒 Richard Attenborough 饰）曾把附近的索纳岛作为恐龙的制造工场。侏罗纪公园沦陷后，索纳岛上的恐龙在完全隔绝且缺少必要合成元素的情况下生存了4年时间。哈蒙德对此颇感好奇，他重新找到马科姆博士（杰夫•高布伦 Jeff Goldblum 饰），邀请他前往小岛考察。4年前经历让马科姆心有余悸，他断然拒绝哈蒙德的提议，但当得知女友莎拉（朱丽安•摩尔 Julianne Moore 饰）已前往小岛之时，只得跟随探险队整装出发。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller",
      "Adventure"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "惊悚",
      "冒险"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 98000,
    "runtime": "129 min",
    "releaseDate": "1997-08-07",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0119567",
    "id": "movie-1293702"
  },
  {
    "sourceId": "6900092",
    "title": "建筑学概论",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2012,
    "coverUrl": "",
    "summary": "胜民（严泰雄 饰）在一家建筑公司担任建筑设计师，某日接到一份新的房屋设计工程，委托人竟是自己学生时代的梦中情人瑞英（韩佳人 饰）。两人相识于多年前大学的建筑学概论课堂上，20岁的胜民（李济勋 饰）对这个来旁听的音乐系的女生瑞英（裴秀智 饰）一见钟情。两人在每日的相处间日渐亲密起来。只是当时年轻的胜民害羞生涩，始终无法合适的表达出自己的爱意，最终使这段美好的初恋无疾而终。",
    "genres": [
      "Romance"
    ],
    "originalGenres": [
      "爱情"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.5,
    "votes": 91547,
    "runtime": "116 min",
    "releaseDate": "2012-03-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2337981",
    "id": "movie-6900092"
  },
  {
    "sourceId": "1307696",
    "title": "午夜凶铃",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 1998,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533404074.jpg",
    "summary": "女高中生友子和同学共同看了一盘来历不明的录像带，七天后，她和她的同学相继死去，这引起了女记者浅川（松岛菜菜子 饰）的关注，她决定调查这个事件的真相。",
    "genres": [
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.5,
    "votes": 89884,
    "runtime": "96 min",
    "releaseDate": "1998-01-31",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0178868",
    "id": "movie-1307696"
  },
  {
    "sourceId": "1292973",
    "title": "小鸡快跑",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2000,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1925042778.jpg",
    "summary": "英格兰一个叫特维迪的养鸡场里，一出奴隶们的悲剧正在上演。养鸡场的主人特维迪太太贪得无厌，一心只想着让母鸡们多下蛋，而特维迪先生则带着两条狼狗在整天监视母鸡们的一举一动。要是哪知母鸡下的蛋少了，那她随时就会召来末顶之灾。母鸡们整天生活得提心吊胆，生怕哪天厄运就会降临到自己的头上。母鸡金婕聪明而且有胆识，她绝不屈服于这种奴隶般的生活，于是，她决心带领大家一起逃出养鸡场！",
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
      "英国",
      "美国"
    ],
    "rating": 7.5,
    "votes": 80328,
    "runtime": "84 min",
    "releaseDate": "2001-02-01",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0120630",
    "id": "movie-1292973"
  },
  {
    "sourceId": "5153254",
    "title": "爱你，罗茜",
    "countryCode": "DE",
    "countryName": "Germany",
    "year": 2014,
    "coverUrl": "",
    "summary": "《親愛的，原來是你》(Love, Rosie)改編自全球破億經典愛情電影《留給最愛的情書》(PS, I Love You)原著小說作家Cecelia Ahern另一幽默感人作品《Where Rainbows End》。由基斯頓迪他(Christian Ditter)執導，《魔鏡•魔鏡:白雪公主決戰黑心皇后》莉莉歌蓮絲(Lily Collins)及《飢餓遊戲》系列森加芬(Sam Claflin)主演。故事講述青梅竹馬的二人，一同成長面對大世界，一直處於「友達以上，戀人未滿」的狀態，卻各自遇到戀愛上的酸甜苦辣，直到最後發現，最愛的原來就是對方。二人首次合作即默契十足，火花閃耀大銀幕。為今個聖誕，帶來最觸動人心、最浪漫感人的愛情喜劇。",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "爱情"
    ],
    "originalRegions": [
      "德国",
      "英国"
    ],
    "rating": 7.5,
    "votes": 80141,
    "runtime": "102 min",
    "releaseDate": "2014-10-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1638002",
    "id": "movie-5153254"
  },
  {
    "sourceId": "1937401",
    "title": "K歌情人",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2007,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p477610353.jpg",
    "summary": "阿莱克斯(休•格兰特 饰)是一个八十年代过气流行乐歌手，近年好不容易逐渐获得更多的演出机会，更得到流行天后Cora邀请他写歌并合唱该曲。但此刻阿莱克斯碰到了创作瓶颈，多年没有作曲之余，而且从来没有过作词的经验，现在却要在几天内作出一首畅销的流行曲。",
    "genres": [
      "Comedy",
      "Romance",
      "Music"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "音乐"
    ],
    "originalRegions": [
      "美国"
    ],
    "rating": 7.5,
    "votes": 76789,
    "runtime": "96 min",
    "releaseDate": "2007-02-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0758766",
    "id": "movie-1937401"
  },
  {
    "sourceId": "1306317",
    "title": "美少年之恋",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1998,
    "coverUrl": "",
    "summary": "MB Jet（冯德伦）倚仗年轻和出众外形，十分自负与玩世不恭，认为同不同男人之间的性交易不过是场游戏，但偶遇神秘男子Sam（吴彦祖）与女子Kana（舒淇）后，他被Sam的独特气质吸引，幻想能同Sam有真正的爱情，遭到同行阿青的警告。Jet又遇Sam，得到对方礼待，虽对两人纯洁的朋友关系疑惑，他却十分享用过程，想着有机会将两人关系升级。",
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
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 75060,
    "runtime": "101 min",
    "releaseDate": "1998-08-14",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0168496",
    "id": "movie-1306317"
  },
  {
    "sourceId": "26809592",
    "title": "魅影缝匠",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2017,
    "coverUrl": "",
    "summary": "故事发生在二十世纪五十年代的伦敦，雷诺兹（丹尼尔·戴-刘易斯 Daniel Day Lewis 饰）和妹妹西丽奥（莱丝利·曼维尔 Lesley Manville 饰）一起经营着名为“伍德科克之家”的制衣所，在伦敦当时的上流社会之中，能够穿上雷诺兹亲手缝制的礼服是每一个王公显贵和明星名流的愿望。",
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
      "英国"
    ],
    "rating": 7.5,
    "votes": 69471,
    "runtime": "130 min",
    "releaseDate": "2017-12-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt5776858",
    "id": "movie-26809592"
  },
  {
    "sourceId": "26339213",
    "title": "无名女尸",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "奥斯丁（埃米尔·赫斯基 Emile Hirsch 饰）和父亲汤米（布莱恩·考克斯 Brian Cox 饰）同为镇上的验尸官，某天晚上，刑警谢尔顿（迈克尔·麦克埃尔哈顿 Michael McElhatton 饰）送来了一具无名女尸，希望汤米和奥斯丁能够在天亮之前弄清楚她身上的秘密。",
    "genres": [
      "Horror"
    ],
    "originalGenres": [
      "恐怖"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 7.5,
    "votes": 65731,
    "runtime": "86 min",
    "releaseDate": "2016-09-09",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3289956",
    "id": "movie-26339213"
  },
  {
    "sourceId": "1305197",
    "title": "97家有喜事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1997,
    "coverUrl": "",
    "summary": "老先生（乔宏 饰）有三个儿子。老大老良（黄百鸣 饰）整天忙于工作而忽略了老婆贤淑（伍咏薇 饰），贤淑每天在家中打点，却遭到老公误会她红杏出墙。次子老非利用读书逃避到投身社会，个性单纯，向往爱情却遭到伤害，之到后来认识了从北方来的小莲（吴倩莲 饰）。适逢老三老恭生日，平日老恭作恶多端，生性风流，两个哥哥以买彩票为名作为礼物送给老恭，其实那本来是一张过期的中奖彩票，他信以为真，因此欠下了巨债。祸不单行的他撞车脑震荡，变得疯疯癫癫……",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 65191,
    "runtime": "90 min",
    "releaseDate": "1997-02-06",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0118591",
    "id": "movie-1305197"
  },
  {
    "sourceId": "1297068",
    "title": "中南海保镖",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1994,
    "coverUrl": "",
    "summary": "香港地区一起杀人案的唯一目击证人Michelle（钟丽缇 饰）正被杀手追杀，因为其未婚夫是与大陆高层关系密切的富商，身手不凡的中国特警许正阳（李连杰 饰）便被中央委派去香港保护Michelle。",
    "genres": [
      "Drama",
      "Action"
    ],
    "originalGenres": [
      "剧情",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 60688,
    "runtime": "89 min",
    "releaseDate": "1994-07-28",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0111835",
    "id": "movie-1297068"
  },
  {
    "sourceId": "1295064",
    "title": "城市猎人",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "私家侦探孟波（成龙）与死去搭档的妹妹惠香（王祖贤）刚同报业大王今村商讨完寻找其失踪女儿清子（后藤久美子）下落的办法，就见清子与若干滑板少年在街道上左穿右插，一番穷追后，清子消失。惠香本想到孟波家后为孟波举办生日舞会，不想推门发现早已有七个美女正望穿秋水，一怒之下，惠香扬言会与表哥大脚板（单立文）在赌船“富贵号”上预支蜜月。",
    "genres": [
      "Comedy",
      "Action",
      "Romance"
    ],
    "originalGenres": [
      "喜剧",
      "动作",
      "爱情"
    ],
    "originalRegions": [
      "中国香港",
      "日本"
    ],
    "rating": 7.5,
    "votes": 58715,
    "runtime": "105 min",
    "releaseDate": "1993-01-16",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0103950",
    "id": "movie-1295064"
  },
  {
    "sourceId": "1305046",
    "title": "双瞳",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2002,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2185662998.jpg",
    "summary": "由于两年前揭发同僚贪污，台北警官黄火土（梁家辉）被上级报复调入冷门的外事组工作，利益也曾连带受损的新同事对他怒言相向，加上妻子清芳（刘若英）受不了他长期不回家要求离婚，黄火土感觉他的世界正在逐渐四分五裂。",
    "genres": [
      "Drama",
      "Mystery",
      "Horror"
    ],
    "originalGenres": [
      "剧情",
      "悬疑",
      "恐怖"
    ],
    "originalRegions": [
      "中国香港",
      "中国台湾"
    ],
    "rating": 7.5,
    "votes": 58456,
    "runtime": "113 min",
    "releaseDate": "2002-10-25",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0284066",
    "id": "movie-1305046"
  },
  {
    "sourceId": "4896894",
    "title": "斯托克",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2013,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1854982383.jpg",
    "summary": "恬静娴淑的女孩印蒂雅·斯托克（米娅·华希科沃斯卡 Mia Wasikowska 饰）18岁生日之际，惊闻父亲理查德（德蒙特·莫罗尼 Dermot Mulroney 饰）死于意外的噩耗。相对于和丈夫一向不睦的母亲伊芙琳（妮可·基德曼 Nicole Kidman 饰），从小 和父亲一起打猎的印蒂雅自然承受难以排遣的哀伤与痛苦。葬礼当天，一名有着和善笑容却周身散发阴冷气息的男子毫无征兆出现在斯托克母女身边。他是理查德的弟弟查理（马修·古迪 Matthew Goode 饰），自称刚刚结束环球旅行赶来。伊芙琳对查理表现出不加掩饰的热情和好感，并主动留查理在家中居住。而印蒂雅对这个突然到来的叔叔怀有深深的抗拒与戒备之心。",
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
      "美国",
      "英国"
    ],
    "rating": 7.5,
    "votes": 54942,
    "runtime": "99 min",
    "releaseDate": "2013-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1682180",
    "id": "movie-4896894"
  },
  {
    "sourceId": "2346881",
    "title": "破事儿",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2007,
    "coverUrl": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p486597029.jpg",
    "summary": "彭浩翔用试图他的“破事儿”去解释现代人生活中的困惑或出路。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 54243,
    "runtime": "91 min",
    "releaseDate": "2007-12-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1149603",
    "id": "movie-2346881"
  },
  {
    "sourceId": "1304608",
    "title": "剑鱼行动",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2001,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p847809863.jpg",
    "summary": "间谍加布利尔（约翰•特拉沃塔 John Travolta）在多年特工生涯中，获知政府多年非法收敛了一笔公款。而加布利尔若想实现自己心中的梦想，钱是最关键的因素。正因如此，机智狡猾的加布利尔决定向这笔赃款下手。",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "originalGenres": [
      "动作",
      "惊悚",
      "犯罪"
    ],
    "originalRegions": [
      "美国",
      "澳大利亚"
    ],
    "rating": 7.5,
    "votes": 53525,
    "runtime": "99 min",
    "releaseDate": "2001-06-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0244244",
    "id": "movie-1304608"
  },
  {
    "sourceId": "3120852",
    "title": "影子写手",
    "countryCode": "FR",
    "countryName": "France",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p574855756.jpg",
    "summary": "他（伊万·麦格雷戈 Ewan Gordon McGregor 饰）是一个影子写手，一如其代号“Ghost（鬼魂）”一般，他深深躲在幕后，为各行各业的名流捉刀撰写回忆录。一日，鬼魂接到一项新的任务，即帮助前英国首相亚当·朗（皮尔斯·布鲁斯南 Pierce Brosnan 饰）的回忆录作润饰工作。此前，该书由亚当·朗在任期间的助手迈克·麦卡拉负责，然而麦卡拉却神秘自杀。看在丰厚报酬的份上，鬼魂接受了这项工作。在写书过程中，亚当受到战争罪的指控，政治风暴近在咫尺。而鬼魂也开始有意探知亚当不为人知的过去以及麦卡拉死亡的原因，却不知此举将他引入险途……",
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
      "法国",
      "德国",
      "英国"
    ],
    "rating": 7.5,
    "votes": 53146,
    "runtime": "128 min",
    "releaseDate": "2010-02-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1139328",
    "id": "movie-3120852"
  },
  {
    "sourceId": "3073073",
    "title": "简爱",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2011,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1590555816.jpg",
    "summary": "从小失去父母的简·爱（米娅·华希科沃斯卡 Mia Wasikowska 饰）寄居在舅妈家，自幼受尽表兄（克雷格·罗伯兹 Craig Roberts 饰）欺辱和舅妈（莎莉·霍金斯 Sally Hawkins 饰）冷眼，稍大些后即被送入管教严格的教会女子学校。在冷漠、刻板环境中长大的简·爱并没有成为心理扭曲的女孩，而是自立自强，还 积累了不凡的学识修养，成年后她成为桑菲尔德贵族庄园的家庭教师。男主人罗切斯特先生（迈克尔·法斯宾德 Michael Fassbender 饰）第一次露面时，与简·爱相识于一场堕马事故，随着二人慢慢熟悉，罗切斯特先生体会到简·爱的与众不同，并渐渐爱上她，简·爱亦受到罗切斯特先生的强烈吸引，但是大宅夜晚总会发生一些怪事，二人的爱情似乎蒙着一层阴影……",
    "genres": [
      "Drama",
      "Romance"
    ],
    "originalGenres": [
      "剧情",
      "爱情"
    ],
    "originalRegions": [
      "英国"
    ],
    "rating": 7.5,
    "votes": 52346,
    "runtime": "120 min",
    "releaseDate": "2011-03-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1229822",
    "id": "movie-3073073"
  },
  {
    "sourceId": "1478064",
    "title": "人类之子",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2006,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1971393744.jpg",
    "summary": "20年后的人类社会，正面临着前所未有的灭顶之险——所有的人类都丧失了生育能力，而东欧和非洲国家已经四分五裂，人口向英国等富裕国家大量迁移。",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Adventure",
      "Disaster"
    ],
    "originalGenres": [
      "剧情",
      "科幻",
      "冒险",
      "灾难"
    ],
    "originalRegions": [
      "美国",
      "英国",
      "日本"
    ],
    "rating": 7.5,
    "votes": 51054,
    "runtime": "109 min",
    "releaseDate": "2006-09-22",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0206634",
    "id": "movie-1478064"
  },
  {
    "sourceId": "4312232",
    "title": "人间喜剧",
    "countryCode": "CN",
    "countryName": "China",
    "year": 2010,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p516135005.jpg",
    "summary": "年轻杀手司徒春运（杜汶泽 饰）和老前辈夕阳（许绍雄 饰）受雇从内地来至香港，由于消息走漏，二人中途分别，并相约在某大厦露台会面。身无分文的春运没有等到夕阳，却等来寒流与重感冒，最终昏倒在地。住在大厦内的小编剧诸葛头揪（王祖蓝 饰）发现春运，这个心地善良却又有点儿婆婆妈妈的小男人将其带回自己家中悉心照料。苏醒后的春运几度想杀头揪灭口，对方则一根筋地爱心泛滥，甚至大谈与野蛮女友徐天爱（薛凯琪 饰）浪漫又悲惨的恋爱史，全然不知危险所在。",
    "genres": [
      "Comedy"
    ],
    "originalGenres": [
      "喜剧"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 50397,
    "runtime": "100 min",
    "releaseDate": "2010-07-08",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1612142",
    "id": "movie-4312232"
  },
  {
    "sourceId": "24858414",
    "title": "白雪公主杀人事件",
    "countryCode": "JP",
    "countryName": "Japan",
    "year": 2014,
    "coverUrl": "",
    "summary": "某国家森林公园，一位美艳的OL被人残忍杀害。她身中十数刀后死亡，之后更被凶手泄愤般地纵火烧成焦炭。此案在日本国内引起轰动，由于死者三木典子（菜菜绪 饰）就职的公司生产了一款名为白雪的香皂，因此该案被网友称之为“白雪公主杀人事件”。供职于电视台的赤星雄治（绫野刚 饰）偶然接到前女友狩野里沙子（莲佛美沙子 饰）的电话，得知典子正是里沙子的职场前辈，死者生前不仅美丽光鲜，而且心地善良，乐于助人，宛如童话故事中的公主。赤星进而获悉，与典子同期入社的城野美姬（井上真央 饰）有着最大的嫌疑，而此人现已宣告失踪。为了获知真相，赤星单枪匹马对典子和美姬周围的人展开问询。看似接近真相的同时，双眼所及之处却愈加扑朔迷离……",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "originalGenres": [
      "剧情",
      "悬疑"
    ],
    "originalRegions": [
      "日本"
    ],
    "rating": 7.5,
    "votes": 48980,
    "runtime": "126 min",
    "releaseDate": "2014-03-29",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3096712",
    "id": "movie-24858414"
  },
  {
    "sourceId": "1416728",
    "title": "花田喜事",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1993,
    "coverUrl": "",
    "summary": "富家子弟周通（许冠杰 饰）武功高强，到处仗势凌人，其妹妹周吉（吴君如 饰）也十分无理取闹。他们的母亲太君（许冠英 饰）一直想他们定性并能够成家立室。可是在周吉的新婚之夜，夫君林嘉声（黄百鸣 饰）忍受不了周吉而逃走了。自此，太君便茶饭不思，周通于是为母亲办寿筵冲喜，更想请 著名魔术师大围高栢飞（张国荣 饰）助兴。与此同时白雪仙（关之琳 饰）乔装出来逛花市，与高栢飞一见钟情。白父（吴孟达 饰）得知事情后以为女儿已怀孕，便找到高柏飞提亲，却误以为周通就是高栢飞。当周通见过白雪仙之后，便誓要得到美人。母夜叉（毛舜筠 饰）从逃难的高栢飞与雪仙口中得知了他们的遭遇后，便假扮新娘教训周通。周吉的丈夫林嘉声成为了状元，周吉想与夫君和好，却遭到了林嘉声拒绝……",
    "genres": [
      "Comedy",
      "Romance",
      "Costume"
    ],
    "originalGenres": [
      "喜剧",
      "爱情",
      "古装"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 48853,
    "runtime": "85 min",
    "releaseDate": "1993-01-20",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0107159",
    "id": "movie-1416728"
  },
  {
    "sourceId": "1309088",
    "title": "活死人黎明",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2004,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2182916020.jpg",
    "summary": "看似平凡的一天，护士安娜（莎拉·波利 Sarah Polley 饰）正准备和丈夫路易斯（Justin Louis 饰）共享快乐的周末，却不知一场恐怖、致命的瘟疫正在大肆蔓延。被瘟疫感染的丧失人性，转而变成嗜血如命、残暴无情的活死人。安娜的丈夫和女儿薇薇安（Hannah Lochner 饰）无一幸免，她侥幸从家中逃生，却发现整个城市都已变成活死人的天下，幸存者所剩无几，眼前的世界宛如人间地狱。是时瘟疫蔓延全球，各国都已陷入瘫痪状态之中。",
    "genres": [
      "Action",
      "Sci-Fi",
      "Horror"
    ],
    "originalGenres": [
      "动作",
      "科幻",
      "恐怖"
    ],
    "originalRegions": [
      "美国",
      "加拿大",
      "日本",
      "法国"
    ],
    "rating": 7.5,
    "votes": 48367,
    "runtime": "101 min",
    "releaseDate": "2004-03-19",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0363547",
    "id": "movie-1309088"
  },
  {
    "sourceId": "25907029",
    "title": "宝贝老板",
    "countryCode": "US",
    "countryName": "United States",
    "year": 2017,
    "coverUrl": "",
    "summary": "孩子到底是从哪里来的呢？不同于人们以往的认知，小Baby们竟然是批量生产的？！《娃娃老板》的主角小男孩Timothy本来是爸爸妈妈心中唯一的宝贝，可在一个穿着西装提着公文包的小婴儿的突然出现之后，他一下子就失宠了，爸爸妈妈的心思全都在弟弟身上，让他很是不爽。",
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
    "rating": 7.5,
    "votes": 45182,
    "runtime": "97 min",
    "releaseDate": "2017-03-12",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt3874544",
    "id": "movie-25907029"
  },
  {
    "sourceId": "1296693",
    "title": "醉拳",
    "countryCode": "CN",
    "countryName": "China",
    "year": 1978,
    "coverUrl": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1387691770.jpg",
    "summary": "广东武术界名人黄麒英自儿子黄飞鸿（成龙）小时候起就严格训练其习武，可惜黄飞鸿少年时代年轻气盛，经常用三脚猫功夫在外惹事生非，武学上一直无大的长进。直到某次较量中被人打得落花流水且受到侮辱，黄飞鸿才发誓要拜苏乞儿（袁小田）为师好好习武。",
    "genres": [
      "Comedy",
      "Action"
    ],
    "originalGenres": [
      "喜剧",
      "动作"
    ],
    "originalRegions": [
      "中国香港"
    ],
    "rating": 7.5,
    "votes": 42674,
    "runtime": "111 min",
    "releaseDate": "1978-10-05",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt0080179",
    "id": "movie-1296693"
  },
  {
    "sourceId": "5353344",
    "title": "盲证",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2011,
    "coverUrl": "",
    "summary": "一场严重的车祸，让见习警察闵秀儿（金荷娜 饰）身负重伤，双目失明。她不仅因此失去做警察的机会，也与最亲的弟弟阴阳两隔。许是视觉器官的失灵刺激了其他器官的活跃，加上缜密的思维和判断力，秀儿能够觉察多许多正常人忽视的细节。在一次暴雨夜归途中，她自认为打上一辆模范出租车。谁知司机欲行不轨，两相推搡之时更发生车祸撞到一个路人。秀儿最终逃脱，并向警方报案，最终只有其貌不扬的赵警官相信她的判断力，于是和她一同调查肇事者。另一方面，时尚青年基夔（俞承浩 饰）声称曾目击车祸过程，但是他的陈述与秀儿多有不同，自然不被赵警官采信。",
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
      "韩国"
    ],
    "rating": 7.5,
    "votes": 38115,
    "runtime": "111 min",
    "releaseDate": "2011-08-11",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2025506",
    "id": "movie-5353344"
  },
  {
    "sourceId": "5262339",
    "title": "天才捕手",
    "countryCode": "GB",
    "countryName": "United Kingdom",
    "year": 2016,
    "coverUrl": "",
    "summary": "上世纪20年代末，默默无闻的托马斯·沃尔夫（裘德·洛 Jude Law 饰）怀揣文学梦来到纽约，而他冗长的自传体小说被曾一手发掘过菲兹杰拉德、海明威等作家的文学编辑麦克斯·珀金斯（科林·费尔斯 Colin Firth 饰）看中。珀金斯大刀阔斧地为沃尔夫删减文章篇幅，最后该书出版时大获成功，沃尔夫也成为了文学界新星，而这本书正是他流传后世的著名小说《天使，望故乡》。",
    "genres": [
      "Drama",
      "Biography"
    ],
    "originalGenres": [
      "剧情",
      "传记"
    ],
    "originalRegions": [
      "英国",
      "美国"
    ],
    "rating": 7.5,
    "votes": 37321,
    "runtime": "104 min",
    "releaseDate": "2017-03-10",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt1703957",
    "id": "movie-5262339"
  },
  {
    "sourceId": "6869412",
    "title": "嫌疑人X的献身",
    "countryCode": "KR",
    "countryName": "South Korea",
    "year": 2012,
    "coverUrl": "",
    "summary": "影片改编自日本推理作家东野圭吾的代表作《嫌疑人X的献身》，原名《完美的爱情》，后仍改为和原著接近的《嫌疑人X》。",
    "genres": [
      "Drama",
      "Romance",
      "Mystery",
      "Crime"
    ],
    "originalGenres": [
      "剧情",
      "爱情",
      "悬疑",
      "犯罪"
    ],
    "originalRegions": [
      "韩国"
    ],
    "rating": 7.5,
    "votes": 37026,
    "runtime": "110 min",
    "releaseDate": "2012-10-18",
    "ratingRank": null,
    "doubanTop250Rank": null,
    "imdbId": "tt2411024",
    "id": "movie-6869412"
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
    "doubanTop250Rank": null,
    "imdbId": "tt1208717",
    "id": "movie-3041753"
  }
];

export const movies: Movie[] = rawMovies.map((movie) => ({
  ...movie,
  genres: movie.originalGenres.map((genre) => GENRE_TRANSLATIONS[genre]).filter((genre): genre is string => Boolean(genre)),
  posterUrl: (posterManifest as Record<string, string>)[movie.id] ?? movie.coverUrl
}));

export const movieRegionCountryMap = REGION_TO_COUNTRY_CODE;
export const movieGenreMap = GENRE_TRANSLATIONS;
