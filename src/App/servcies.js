import axios from 'axios';
const BASE_URL = "https://s3-ap-southeast-1.amazonaws.com";

const instanceAxios = axios.create({
    baseURL: BASE_URL,
    crossdomain: true,
    headers: {
        'Content-Type': "application/json",
        withCredentials: true
    }
});
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

class Servcies {
    async getData(){
        const dataRes = await instanceAxios.get(`${BASE_URL}/ysetter/media/video-search.json`,config);
        return dataRes;
    };

    getDataByMock(){
        return {
            "kind": "youtube#searchListResponse",
            "etag": "g7k5f8kvn67Bsl8L-Bum53neIr4/xPADoxW84ueP_rKE3yrdpLnk8cg",
            "nextPageToken": "CBkQAA",
            "regionCode": "TH",
            "pageInfo": {
              "totalResults": 59832,
              "resultsPerPage": 25
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/bmxz-Q9ibVnKIsrbsl0hOUal608\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "mfqJyKm20Z4"
                },
                "snippet": {
                  "publishedAt": "2017-11-18T11:11:15.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "【MV Full】Koisuru Fortune Cookie คุกกี้เสี่ยงทาย / BNK48",
                  "description": "『Koisuru Fortune Cookie –คุกกี้เสี่ยงทาย–』 Lyrics: Yasushi Akimoto Music: Shintaro Ito Arrangement: Seiji Muto Thai Lyrics Arrangement: Tanupop Notayanont...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/mfqJyKm20Z4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/mfqJyKm20Z4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/mfqJyKm20Z4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/7VrBfrH8g2AYJe1jP2GqC_HOBbA\"",
                "id": {
                  "kind": "youtube#channel",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw"
                },
                "snippet": {
                  "publishedAt": "2016-03-16T09:09:28.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "BNK48",
                  "description": "BNK48 Official YouTube Channel.",
                  "thumbnails": {
                    "default": {
                      "url": "https://yt3.ggpht.com/-HblKqTeCZ_Y/AAAAAAAAAAI/AAAAAAAAAAA/MYq1Zq8R8hY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    "medium": {
                      "url": "https://yt3.ggpht.com/-HblKqTeCZ_Y/AAAAAAAAAAI/AAAAAAAAAAA/MYq1Zq8R8hY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    },
                    "high": {
                      "url": "https://yt3.ggpht.com/-HblKqTeCZ_Y/AAAAAAAAAAI/AAAAAAAAAAA/MYq1Zq8R8hY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "upcoming"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/TuQDwBb4eFW1BwDxXoRDpfWglkY\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "zdgemowocu8"
                },
                "snippet": {
                  "publishedAt": "2017-11-29T07:12:16.000Z",
                  "channelId": "UC_rENyV7n1gtp6pPKpvuXGg",
                  "title": "MV Aitakatta (อยากจะได้พบเธอ) BNK48 Ost. \"Shoot! I Love You ปิ้ว! ยิงปิ๊งเธอ\"",
                  "description": "Aitakatta –อยากจะได้พบเธอ– Lyrics: Yasushi Akimoto Music: BOUNCEBACK Arrangement: Tomonari Taguchi, Haruo Inatome Thai Lyrics Arrangement: Nattapon Srijomkwan,...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/zdgemowocu8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/zdgemowocu8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/zdgemowocu8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "GDH",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/aZTDcPuaGvZZP0_7-BqAATaj8wQ\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "eFPauBydNeU"
                },
                "snippet": {
                  "publishedAt": "2018-01-15T03:09:13.000Z",
                  "channelId": "UC3ZkCd7XtUREnjjt3cyY_gg",
                  "title": "ซูเปอร์หม่ำ | เท่ง เถิดเทิง | BNK 48 | วง SDF | 14 ม.ค. 61 Full HD",
                  "description": "รายการ Super Mum ทุกวัน อาทิตย์ 12.30 น. ช่อง เวิร์คพอยท์ หมายเลข 23 ติดตามข่าวสารไ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/eFPauBydNeU/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/eFPauBydNeU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/eFPauBydNeU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "WorkpointOfficial",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/TOIhONLuatOb69UZ1fmPAUlI_is\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "VUNlNMYzsU4"
                },
                "snippet": {
                  "publishedAt": "2017-12-25T04:58:01.000Z",
                  "channelId": "UCuTTT_6JxuAtRdvF3BvVjdg",
                  "title": "BNK48 Tonight's the night คืนสำคัญ 23-12-2017",
                  "description": "ชมย้อนหลังความน่ารัก สดใส ของเหล่าสาวๆ BNK48 ที่ละลายใจเหล่าโอตะทุกคน...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/VUNlNMYzsU4/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/VUNlNMYzsU4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/VUNlNMYzsU4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "NANAKE555",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/cEhAdnLeu-dW-BzYG9wemv9tuj0\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "559-AsZCm8E"
                },
                "snippet": {
                  "publishedAt": "2018-01-08T13:07:50.000Z",
                  "channelId": "UCQ2ABjf4gcrF0-zfDLQhWFQ",
                  "title": "BNK48 Interview Workpoint News ep. 1 | เฌอ อร ปัญ \"1  ปีกับการเป็นไอดอล\"",
                  "description": "\"อยากให้พูดถึงข้อดีของแต่ละคน เพราะโดยธรรมชาติของมนุษย์ ไม่มีใครพูด...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/559-AsZCm8E/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/559-AsZCm8E/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/559-AsZCm8E/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Workpoint News ข่าวเวิร์คพอยท์",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/-sny7zhkYmCJ2AvCNbY19_JrXzE\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "gCddCvR2aNc"
                },
                "snippet": {
                  "publishedAt": "2018-01-19T09:00:01.000Z",
                  "channelId": "UCjadGsibffELN44emJ-ECbQ",
                  "title": "งานจับมือ BNK48 | เสียตังค์ 350 บาท เพื่อจับมือ 8 วินาที?  ▲ GZR Gozziira",
                  "description": "ไปงานจับมือ BNK48 ด้วยแหละ!! แจก 2 รางวัล CD BNK48 2nd Single Koisuru Fortune Cookie คุกกี้เสี่ยงทาย ข้า...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/gCddCvR2aNc/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/gCddCvR2aNc/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/gCddCvR2aNc/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "GZR Gozziira",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/LfIwbK6JRzkjrrQDanv6wLIoIW0\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "4HdXfXEQ1GE"
                },
                "snippet": {
                  "publishedAt": "2017-12-28T16:25:38.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "「Koisuru Fortune Cookie –คุกกี้เสี่ยงทาย–」from BNK48 We Wish You! A Merry Christmas / BNK48",
                  "description": "2017.12.24 BNK48 We Wish You! A Merry Christmas –Fan Meet– @ K-Bank Siam Pic-Ganesha 『Koisuru Fortune Cookie –คุกกี้เสี่ยงทาย–』 Lyrics: Yasushi Akimoto...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/4HdXfXEQ1GE/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/4HdXfXEQ1GE/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/4HdXfXEQ1GE/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/YLQdCectsOjmNqQZ9CY06lt7XEQ\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "aw098MkvpUU"
                },
                "snippet": {
                  "publishedAt": "2017-12-05T05:00:01.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "BNK48 SHOW EP13 (Director's Cut) Break01",
                  "description": "BNK48 Official Facebook : www.facebook.com/bnk48official BNK48 Official Twitter : www.twitter.com/bnk48official BNK48 Official Instagram : www.instagram.com/bnk48 BNK48 Official Website...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/aw098MkvpUU/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/aw098MkvpUU/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/aw098MkvpUU/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/ubnRHcnPGJLqGNBQO4VX09ZUges\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "SirzzHlYVPA"
                },
                "snippet": {
                  "publishedAt": "2017-09-23T06:02:24.000Z",
                  "channelId": "UCSLZDU_K1gbzXh9DabKyQ-A",
                  "title": "[SD][Mirror]BNK48 คุกกี้เสี่ยงทาย ยูนิต Punisher (ปัญ, เจนนิษฐ์, เฌอปราง)",
                  "description": "ตัวชัดกว่านี้ครับ https://youtu.be/IQ9XBEBo5a4 [SD][Mirror]BNK48 คุกกี้เสี่ยงทาย ยูนิต Punisher (ปัญ,...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/SirzzHlYVPA/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/SirzzHlYVPA/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/SirzzHlYVPA/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48 Sharing",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/hN9RLQBUC7m0WXhvgicA4vrnh0A\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "KNXoetZORY8"
                },
                "snippet": {
                  "publishedAt": "2018-01-20T08:27:40.000Z",
                  "channelId": "UC8f7MkX4MFOOJ2SerXLInCA",
                  "title": "เจ๋อกันวันเสาร์ | EP.11 (2/4) | 20 ม.ค. 61 | one31",
                  "description": "เจ๋อกันวันเสาร์... วง “BNK48” บุกรายการ “เจ๋อกันวันเสาร์” รับชม #ช่องone31...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/KNXoetZORY8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/KNXoetZORY8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/KNXoetZORY8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "one31",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/ZS9Qc0gXJyAhdPb927Xkeu-2Dto\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "y30b1DkNvgM"
                },
                "snippet": {
                  "publishedAt": "2018-01-21T15:10:49.000Z",
                  "channelId": "UC515NDo22eDKwca-YStxSbw",
                  "title": "[เฌอปราง x มิวสิค BNK48] เฌอสิค - ทะเลาะอะไรกัน",
                  "description": "ดีใจที่กลับมานะ เรือหลวงของเรา ^^ รวมโมเม้นต์น่ารักๆของสองสาวสมาชิกวง...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/y30b1DkNvgM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/y30b1DkNvgM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/y30b1DkNvgM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Chercrew Fanclub",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/4LDCL-pZrNFmfIp5Q79oG4gr1Bs\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "puzvi6-0KNY"
                },
                "snippet": {
                  "publishedAt": "2017-12-27T10:34:39.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "「BNK48 3rd Single Announcement」from BNK48 We Wish You! A Merry Christmas –Fan Meet– / BNK48",
                  "description": "2017.12.24 BNK48 We Wish You! A Merry Christmas –Fan Meet– @ BNK4K-Bank Siam Pic-Ganesha BNK48 3rd Single Announcement BNK48 Official Facebook : www.facebook.com/bnk48official BNK48...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/puzvi6-0KNY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/puzvi6-0KNY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/puzvi6-0KNY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/5zfUuWiVH17oD4ZsvNZgSmFWO3g\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "_AHwMsOcIdI"
                },
                "snippet": {
                  "publishedAt": "2018-01-19T14:45:09.000Z",
                  "channelId": "UC1hIrWz3ktQy4frnIFYDWTg",
                  "title": "BNK48 feat.โย่ง อาร์มแชร์ | Digital Live Studio 19/01/18",
                  "description": "BNK48 feat.โย่ง อาร์มแชร์ Digital Live Studio 19 January 2018.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/_AHwMsOcIdI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/_AHwMsOcIdI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/_AHwMsOcIdI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Katsura",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/jZkwFKxZxemkbhPNgQmPhEy3gyY\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "xDQc99nXobk"
                },
                "snippet": {
                  "publishedAt": "2018-01-16T10:57:52.000Z",
                  "channelId": "UCLENv1BKdMYaQJJPWxlH61A",
                  "title": "มองดราม่า \"เมษา BNK48\" กับกฏการเป็นไอดอล",
                  "description": "มองดราม่า \"เมษา BNK48\" กับกฏการเป็นไอดอล . กลายเป็นเรื่องติด 1 ในหัวข้อท็อปบ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/xDQc99nXobk/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/xDQc99nXobk/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/xDQc99nXobk/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Thaibunterng ThaiPBS",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/qs2HZoYRGeRnGSRFRzBur8mh7hI\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "O0HYB9QuRAg"
                },
                "snippet": {
                  "publishedAt": "2018-01-18T14:36:11.000Z",
                  "channelId": "UCO2EohRMvT_bAnbSD0d_3LQ",
                  "title": "BNK48 Mini concert TAT @สวนลุมพินี",
                  "description": "",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/O0HYB9QuRAg/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/O0HYB9QuRAg/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/O0HYB9QuRAg/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ICE Wachi Wachi",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/RtRMvisLl7WFE1eslX3mBXEMZ2Y\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "L6HgZqp-ew8"
                },
                "snippet": {
                  "publishedAt": "2017-03-01T14:54:03.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "BNK48 Senpai ep.01 (Part 1)",
                  "description": "BNK48 Official Facebook : www.facebook.com/bnk48official BNK48 Official Instagram : www.instagram.com/bnk48 BNK48 Official Website : www.bnk48.com.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/L6HgZqp-ew8/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/L6HgZqp-ew8/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/L6HgZqp-ew8/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/LpoFbHGjGFr5bQUUxHoXAzAuDbs\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "71wN6cInRJI"
                },
                "snippet": {
                  "publishedAt": "2018-01-19T15:20:50.000Z",
                  "channelId": "UC8rk7aJwnehMBRQ8IX6bv3w",
                  "title": "BNK48 - คุกกี้เสี่ยงทาย Koisuru Fortune Cookie Cover By : อ๊อฟ - ป๊อบ - ว่าน - โอ๊ต",
                  "description": "Koisuru Fortune Cookie คุกกี้เสี่ยงทาย : อ๊อฟ - ป๊อบ - ว่าน - โอ๊ต #สามแยกปากหวาน 3+1.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/71wN6cInRJI/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/71wN6cInRJI/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/71wN6cInRJI/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "MCINE MUSIC LIVE  OFFICIAL",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/MBLTFpDjAHPU0LcIPVc0QMWyHfI\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "sP3NZ7euHQY"
                },
                "snippet": {
                  "publishedAt": "2017-09-02T05:08:16.000Z",
                  "channelId": "UCIVX9-5dciABk4mi8GgjONQ",
                  "title": "👉เพลงชาติ #BNK48 Mixรวมกัน มันก็จะมันส์ๆหน่อย😝  พร้อมเนื้อเพลง",
                  "description": "ขอบคุณทุกๆfancamในvdoนี้ด้วยนะครับ.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/sP3NZ7euHQY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/sP3NZ7euHQY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/sP3NZ7euHQY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48 Fanart",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/TZ6wpfIqVte3j_m_xOr0khJIWHc\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "RDs0gorVZlo"
                },
                "snippet": {
                  "publishedAt": "2018-01-10T16:13:58.000Z",
                  "channelId": "UCnFHwPqJ8LmXbIWTkkgZvxQ",
                  "title": "เรื่องใหญ่ ไฟกะพริบ 100161 - BNK48 ไอดอลกรุ๊ปมาแรงแห่งปี",
                  "description": "[GUEST] BNK48 ไอดอลกรุ๊ปมาแรงแห่งปี -------------------------------------------------------------------------------------------- รายการ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/RDs0gorVZlo/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/RDs0gorVZlo/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/RDs0gorVZlo/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "เรื่องใหญ่ ไฟกะพริบ",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/DqHF4wpS0-cOsEHzq8G3Njq-lEk\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "LihjdxLCuEc"
                },
                "snippet": {
                  "publishedAt": "2018-01-21T10:48:02.000Z",
                  "channelId": "UCO2EohRMvT_bAnbSD0d_3LQ",
                  "title": "BNK48 Mini live SHELL make the future@the emquartier",
                  "description": "BNK48 Pun#Music#Mobile#Cherpang#Jennis#Kaimook Mini live concert SHELL make the future@the emquartier.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/LihjdxLCuEc/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/LihjdxLCuEc/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/LihjdxLCuEc/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ICE Wachi Wachi",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/eIsZgGKk9tXHTRyaWbBUBwJIYpw\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Ty8XY7yJOws"
                },
                "snippet": {
                  "publishedAt": "2017-09-08T13:00:04.000Z",
                  "channelId": "UCXHu32-CE6QuVklxkoPIT0w",
                  "title": "BNK48​ x WORLD ORDER​ : คุกกี้เสี่ยงทาย (Koisuru Fortune Cookie) | JAPAN EXPO IN THAILAND 2017",
                  "description": "ตามไปดูน้องๆ #BNK48 ใน MINI CONCERT ครบทุกเพลงที่นี่! https://www.youtube.com/watch?v=sVGa6Otlxj4 ::::::::::::::::::::::::::::::::::::::...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Ty8XY7yJOws/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Ty8XY7yJOws/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Ty8XY7yJOws/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "JAPAN EXPO IN THAILAND",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/seUKhUm7WP3j6J-iTj46DpMLqxQ\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "rDafMh_ivmY"
                },
                "snippet": {
                  "publishedAt": "2017-12-24T13:47:37.000Z",
                  "channelId": "UCSLZDU_K1gbzXh9DabKyQ-A",
                  "title": "น้าเน็กคน DD สาธิตการจับมือน้องๆ BNK48 อย่างถูกวิธี",
                  "description": "น้าเน็กคน DD สาธิตการจับมือน้องๆ BNK48 อย่างถูกวิธี.",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/rDafMh_ivmY/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/rDafMh_ivmY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/rDafMh_ivmY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48 Sharing",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/aAlv5XH_INE24SPg-wqxhLqx7Ps\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "GqtYATEnXHM"
                },
                "snippet": {
                  "publishedAt": "2018-01-21T11:32:46.000Z",
                  "channelId": "UCyHg0kasdk6O_QgvF23WfqA",
                  "title": "คุกกี้เสี่ยงทาย - BNK48 (Rapake Cover Teaser)",
                  "description": "เตรียมพบกับแร็ปเอก Cover เพลงสุดฮิต คุกกี้เสี่ยงทาย ของวงสาวๆ สวยๆ BNK48 เร็...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/GqtYATEnXHM/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/GqtYATEnXHM/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/GqtYATEnXHM/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "RapAke Channel",
                  "liveBroadcastContent": "none"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "\"g7k5f8kvn67Bsl8L-Bum53neIr4/rJfk_FrjBZy-rNSW020mdrWJVxA\"",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "eeuTtGoTTeo"
                },
                "snippet": {
                  "publishedAt": "2018-01-13T09:53:19.000Z",
                  "channelId": "UClIsaGq7vBEW00ASqwQyzPw",
                  "title": "「BNK48 3rd Single Coupling Song Announcement」from BNK48 2nd Single Handshake Event / BNK48",
                  "description": "2018.1.13 BNK48 2nd Single Koisuru Fortune Cookie คุกกี้เสี่ยงทาย Handshake Event @ MCC Hall, The Mall Ngamwongwan 「BNK48 3rd Single Coupling Song Announcement」...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/eeuTtGoTTeo/default.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/eeuTtGoTTeo/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/eeuTtGoTTeo/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "BNK48",
                  "liveBroadcastContent": "none"
                }
              }
            ]
          }
    };
}

export default new Servcies();