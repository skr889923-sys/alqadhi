/* ==========================================================================
   Product Catalog & Real Products from diwan-alward.com: القاضي
   ========================================================================== */

import { addToCart } from './cart.js';

export const productsData = [
  {
    "id": "p781045737",
    "slug": "عطر-ورد-طائفي-القاضي",
    "title": "عطر ورد طائفي القاضي",
    "price": 510.0,
    "image": "/products/real/p781045737.webp",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ورد-طائفي-القاضي/p781045737",
    "badge": "تاج الفخامة",
    "badgeClass": "gold"
  },
  {
    "id": "p965362523",
    "slug": "مجموعة-عطور-القاضي",
    "title": "مجموعة عطور القاضي",
    "price": 300.0,
    "image": "/products/real/p965362523.webp",
    "category": "gifts",
    "categoryName": "مجموعات الإهداء",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/مجموعة-عطور-القاضي/p965362523",
    "badge": "إهداء ملكي",
    "badgeClass": "gold"
  },
  {
    "id": "p471689423",
    "slug": "مجموعة-عطر-القاضي-توباكو-ورد-ياسمين-ورد",
    "title": "مجموعة عطر القاضي توباكو ورد, ياسمين ورد",
    "price": 200.0,
    "image": "/products/real/p471689423.webp",
    "category": "gifts",
    "categoryName": "مجموعات الإهداء",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/مجموعة-عطر-القاضي-توباكو-ورد-ياسمين-ورد/p471689423",
    "badge": "إصدار فاخر",
    "badgeClass": "gold"
  },
  {
    "id": "p1897719084",
    "slug": "عود-ورد-القاضي",
    "title": "عود ورد القاضي",
    "price": 110.0,
    "image": "/products/real/p1897719084.webp",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عود-ورد-القاضي/p1897719084",
    "badge": "إصدار فاخر",
    "badgeClass": "gold"
  },
  {
    "id": "p1150881236",
    "slug": "هيل-ورد-القاضي",
    "title": "هيل ورد القاضي",
    "price": 110.0,
    "image": "/products/real/p1150881236.webp",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/هيل-ورد-القاضي/p1150881236",
    "badge": "إصدار فاخر",
    "badgeClass": "gold"
  },
  {
    "id": "p319156863",
    "slug": "عنبر-ورد-القاضي",
    "title": "عنبر ورد القاضي",
    "price": 110.0,
    "image": "/products/real/p319156863.webp",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عنبر-ورد-القاضي/p319156863",
    "badge": "إصدار فاخر",
    "badgeClass": "gold"
  },
  {
    "id": "p705634831",
    "slug": "فانيلا-ورد-القاضي",
    "title": "فانيلا ورد القاضي",
    "price": 110.0,
    "image": "/products/real/p705634831.webp",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/فانيلا-ورد-القاضي/p705634831",
    "badge": "إصدار فاخر",
    "badgeClass": "gold"
  },
  {
    "id": "p179147640",
    "slug": "ماء-عروس-الورد-القاضي",
    "title": "ماء عروس الورد(القاضي)",
    "price": 50.0,
    "image": "/products/real/p179147640.webp",
    "category": "water",
    "categoryName": "ماء الورد والعروس",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/ماء-عروس-الورد-القاضي/p179147640",
    "badge": "ماء العروس النخب الأول",
    "badgeClass": "gold"
  },
  {
    "id": "p1576253037",
    "slug": "زيت-الورد",
    "title": "زيت الورد",
    "price": 50.0,
    "image": "/products/real/p1576253037.webp",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/زيت-الورد/p1576253037",
    "badge": "ورد طائفي بيور",
    "badgeClass": "gold"
  },
  {
    "id": "p516241893",
    "slug": "بخور-الورد-الطائفي",
    "title": "بخور الورد الطائفي",
    "price": 30.0,
    "image": "/products/real/p516241893.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-الورد-الطائفي/p516241893",
    "badge": "الأكثر طلباً",
    "badgeClass": "gold"
  },
  {
    "id": "p1210005577",
    "slug": "معمول-عود-كلاكاسي",
    "title": "معمول عود كلاكاسي",
    "price": 30.0,
    "image": "/products/real/p1210005577.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معمول-عود-كلاكاسي/p1210005577",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1252442049",
    "slug": "بخور-العود-الاسود",
    "title": "بخور العود الاسود",
    "price": 30.0,
    "image": "/products/real/p1252442049.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-العود-الاسود/p1252442049",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p853838875",
    "slug": "عطر-ديوان-الورد",
    "title": "عطر ديوان الورد",
    "price": 20.0,
    "image": "/products/real/p853838875.webp",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ديوان-الورد/p853838875",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p463635230",
    "slug": "عطر-كوبان-توباكو",
    "title": "عطر(كوبان توباكو)",
    "price": 50.0,
    "image": "/products/real/p463635230.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-كوبان-توباكو/p463635230",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p859503796",
    "slug": "عطر-بلو-مون",
    "title": "عطر(بلو مون)",
    "price": 50.0,
    "image": "/products/real/p859503796.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-بلو-مون/p859503796",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p120156002",
    "slug": "معطر-مسك-القاضي",
    "title": "معطر مسك القاضي",
    "price": 50.0,
    "image": "/products/real/p120156002.webp",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-مسك-القاضي/p120156002",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p650314048",
    "slug": "معطر-ورد-القاضي",
    "title": "معطر ورد القاضي",
    "price": 50.0,
    "image": "/products/real/p650314048.webp",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-ورد-القاضي/p650314048",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1120693133",
    "slug": "معطر-زهور-القاضي",
    "title": "معطر زهور القاضي",
    "price": 50.0,
    "image": "/products/real/p1120693133.webp",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-زهور-القاضي/p1120693133",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p185109425",
    "slug": "البخور-الذكي-ورد-طائفي",
    "title": "البخور الذكي(ورد طائفي)",
    "price": 45.0,
    "image": "/products/real/p185109425.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/البخور-الذكي-ورد-طائفي/p185109425",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1251142704",
    "slug": "البخور-الذكي-امبريال-سافرون",
    "title": "البخور الذكي(امبريال سافرون)",
    "price": 45.0,
    "image": "/products/real/p1251142704.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/البخور-الذكي-امبريال-سافرون/p1251142704",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p2030889586",
    "slug": "البخور-الذكي-دهن-عود-مروكي",
    "title": "البخور الذكي(دهن عود مروكي)",
    "price": 45.0,
    "image": "/products/real/p2030889586.jpg",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/البخور-الذكي-دهن-عود-مروكي/p2030889586",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1085764281",
    "slug": "البخور-الذكي-مسك-ملكي",
    "title": "البخور الذكي(مسك ملكي)",
    "price": 45.0,
    "image": "/products/real/p1085764281.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/البخور-الذكي-مسك-ملكي/p1085764281",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p562510012",
    "slug": "عطر-ماي-استون",
    "title": "عطر(ماي استون)",
    "price": 40.0,
    "image": "/products/real/p562510012.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ماي-استون/p562510012",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1624407280",
    "slug": "عطر-عود-اميري",
    "title": "عطر(عود اميري)",
    "price": 40.0,
    "image": "/products/real/p1624407280.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-عود-اميري/p1624407280",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p464874273",
    "slug": "عطر-تركواز-استون",
    "title": "عطر(تركواز استون)",
    "price": 40.0,
    "image": "/products/real/p464874273.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-تركواز-استون/p464874273",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1137136138",
    "slug": "عطر-توباكو-ورد",
    "title": "عطر(توباكو ورد)",
    "price": 40.0,
    "image": "/products/real/p1137136138.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-توباكو-ورد/p1137136138",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1916992624",
    "slug": "عطر-ريد-توباكو",
    "title": "عطر(ريد توباكو)",
    "price": 40.0,
    "image": "/products/real/p1916992624.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ريد-توباكو/p1916992624",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1296862789",
    "slug": "عطر-رويال-مسك",
    "title": "عطر(رويال مسك)",
    "price": 40.0,
    "image": "/products/real/p1296862789.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-رويال-مسك/p1296862789",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1129001035",
    "slug": "عطر-تراب-الذهب",
    "title": "عطر(تراب الذهب)",
    "price": 40.0,
    "image": "/products/real/p1129001035.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-تراب-الذهب/p1129001035",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p877833127",
    "slug": "عطر-رويال-ايريش",
    "title": "عطر(رويال ايريش)",
    "price": 40.0,
    "image": "/products/real/p877833127.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-رويال-ايريش/p877833127",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1690625939",
    "slug": "عطر-جزيرة-العود",
    "title": "عطر(جزيرة العود)",
    "price": 40.0,
    "image": "/products/real/p1690625939.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-جزيرة-العود/p1690625939",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p2080716014",
    "slug": "عطر-ماربيت-مان",
    "title": "عطر(ماربيت مان)",
    "price": 40.0,
    "image": "/products/real/p2080716014.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ماربيت-مان/p2080716014",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p856281083",
    "slug": "عطر-بلاك-كريستال",
    "title": "عطر(بلاك كريستال)",
    "price": 40.0,
    "image": "/products/real/p856281083.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-بلاك-كريستال/p856281083",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1927957637",
    "slug": "عطر-فيزون-روز-جولد",
    "title": "عطر(فيزون روز جولد)",
    "price": 40.0,
    "image": "/products/real/p1927957637.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-فيزون-روز-جولد/p1927957637",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1006940299",
    "slug": "عطر-ليجند-اسود-او-دى",
    "title": "عطر ليجند اسود-او دى",
    "price": 40.0,
    "image": "/products/real/p1006940299.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ليجند-اسود-او-دى/p1006940299",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p298648280",
    "slug": "عطر-ليجند-ابيض-او-دى",
    "title": "عطر ليجند ابيض-او دى",
    "price": 40.0,
    "image": "/products/real/p298648280.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-ليجند-ابيض-او-دى/p298648280",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p946241721",
    "slug": "عطر-كلوب-دي-نويت",
    "title": "عطر(كلوب دي نويت)",
    "price": 40.0,
    "image": "/products/real/p946241721.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-كلوب-دي-نويت/p946241721",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p197017545",
    "slug": "عطر-رمان-توت-احمر",
    "title": "عطر(رمان توت احمر)",
    "price": 40.0,
    "image": "/products/real/p197017545.png",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-رمان-توت-احمر/p197017545",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p736500405",
    "slug": "عطر-بليونير",
    "title": "عطر(بليونير)",
    "price": 40.0,
    "image": "/products/real/p736500405.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-بليونير/p736500405",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1474782706",
    "slug": "عطر-اليزا",
    "title": "عطر(اليزا)",
    "price": 40.0,
    "image": "/products/real/p1474782706.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-اليزا/p1474782706",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1134164206",
    "slug": "عطر-بلاك-افنتس",
    "title": "عطر(بلاك افنتس)",
    "price": 40.0,
    "image": "/products/real/p1134164206.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-بلاك-افنتس/p1134164206",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p2060186650",
    "slug": "عطر-الهيل",
    "title": "عطر(الهيل)",
    "price": 40.0,
    "image": "/products/real/p2060186650.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عطر-الهيل/p2060186650",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1377499332",
    "slug": "معطر-فواح-ورد-الطائفي",
    "title": "معطر فواح ورد الطائفي",
    "price": 30.0,
    "image": "/products/real/p1377499332.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-فواح-ورد-الطائفي/p1377499332",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1526757205",
    "slug": "معطر-فواح-بدهن-العود-والورد-الطائفي",
    "title": "معطر فواح بدهن العود والورد الطائفي",
    "price": 30.0,
    "image": "/products/real/p1526757205.jpg",
    "category": "oil",
    "categoryName": "دهن وزيت الورد",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-فواح-بدهن-العود-والورد-الطائفي/p1526757205",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1092982316",
    "slug": "معطر-جسم-فواكه-فرنسيه",
    "title": "معطر جسم (فواكه فرنسيه)",
    "price": 30.0,
    "image": "/products/real/p1092982316.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جسم-فواكه-فرنسيه/p1092982316",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p334437366",
    "slug": "معطر-جسم-احساس",
    "title": "معطر جسم (احساس)",
    "price": 30.0,
    "image": "/products/real/p334437366.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جسم-احساس/p334437366",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1954347575",
    "slug": "معطر-جسم-ورد-ومسك",
    "title": "معطر جسم (ورد ومسك)",
    "price": 30.0,
    "image": "/products/real/p1954347575.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جسم-ورد-ومسك/p1954347575",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1224857968",
    "slug": "معطر-جسم-كفاني",
    "title": "معطر جسم(كفاني)",
    "price": 30.0,
    "image": "/products/real/p1224857968.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جسم-كفاني/p1224857968",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1540191770",
    "slug": "معمول-عود-كلمنتان",
    "title": "معمول عود كلمنتان",
    "price": 30.0,
    "image": "/products/real/p1540191770.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معمول-عود-كلمنتان/p1540191770",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p815388154",
    "slug": "بخور-عود-الشرقيه",
    "title": "بخور عود الشرقيه",
    "price": 30.0,
    "image": "/products/real/p815388154.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-عود-الشرقيه/p815388154",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1136261645",
    "slug": "بخور-عود-السلمان",
    "title": "بخور عود السلمان",
    "price": 30.0,
    "image": "/products/real/p1136261645.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-عود-السلمان/p1136261645",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p2137625371",
    "slug": "بخور-عود-نيش",
    "title": "بخور عود نيش",
    "price": 30.0,
    "image": "/products/real/p2137625371.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-عود-نيش/p2137625371",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p346996938",
    "slug": "بخور-شغف",
    "title": "بخور شغف",
    "price": 30.0,
    "image": "/products/real/p346996938.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-شغف/p346996938",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1472723744",
    "slug": "بخور-قصر-العود",
    "title": "بخور(قصر العود)",
    "price": 30.0,
    "image": "/products/real/p1472723744.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-قصر-العود/p1472723744",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p317638028",
    "slug": "بخور-شيخ-العود",
    "title": "بخور(شيخ العود)",
    "price": 30.0,
    "image": "/products/real/p317638028.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-شيخ-العود/p317638028",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1762897396",
    "slug": "بخور-سيد-العود",
    "title": "بخور(سيد العود)",
    "price": 30.0,
    "image": "/products/real/p1762897396.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-سيد-العود/p1762897396",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1337514535",
    "slug": "بخور-سلطان-العود",
    "title": "بخور(سلطان العود)",
    "price": 30.0,
    "image": "/products/real/p1337514535.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/بخور-سلطان-العود/p1337514535",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p207987801",
    "slug": "عود-اسود-عطر-الجسم-والشعر",
    "title": "عود اسود(عطر الجسم والشعر)",
    "price": 25.0,
    "image": "/products/real/p207987801.jpg",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/عود-اسود-عطر-الجسم-والشعر/p207987801",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1105575797",
    "slug": "كولونيا-ورد-القاضي",
    "title": "كولونيا ورد القاضي",
    "price": 25.0,
    "image": "/products/real/p1105575797.webp",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/كولونيا-ورد-القاضي/p1105575797",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1403347711",
    "slug": "فازلين-الورد",
    "title": "فازلين الورد",
    "price": 25.0,
    "image": "/products/real/p1403347711.webp",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/فازلين-الورد/p1403347711",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1527218814",
    "slug": "معطر-جو-ومفارش-مسك-وردي",
    "title": "معطر جو ومفارش(مسك وردي)",
    "price": 20.0,
    "image": "/products/real/p1527218814.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-مسك-وردي/p1527218814",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1593239122",
    "slug": "معطر-جو-ومفارش-تركواز-استون",
    "title": "معطر جو ومفارش(تركواز استون)",
    "price": 20.0,
    "image": "/products/real/p1593239122.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-تركواز-استون/p1593239122",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p183344923",
    "slug": "معمول-عود-مروكي",
    "title": "معمول عود مروكي",
    "price": 20.0,
    "image": "/products/real/p183344923.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معمول-عود-مروكي/p183344923",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1830945647",
    "slug": "معمول-عود-ماليزي",
    "title": "معمول عود ماليزي",
    "price": 20.0,
    "image": "/products/real/p1830945647.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معمول-عود-ماليزي/p1830945647",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1339612230",
    "slug": "معمول-عود-سيوفي",
    "title": "معمول عود سيوفي",
    "price": 20.0,
    "image": "/products/real/p1339612230.jpg",
    "category": "incense",
    "categoryName": "البخور والمعمول",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معمول-عود-سيوفي/p1339612230",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1976661181",
    "slug": "معطر-عود-لاوسي",
    "title": "معطر عود لاوسي",
    "price": 20.0,
    "image": "/products/real/p1976661181.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-عود-لاوسي/p1976661181",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p917361198",
    "slug": "معطر-جو-ومفارش-الورد-الطائفي",
    "title": "معطر جو ومفارش( الورد الطائفي)",
    "price": 15.0,
    "image": "/products/real/p917361198.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-الورد-الطائفي/p917361198",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1926508956",
    "slug": "معطر-جو-ومفارش-عود-اميري",
    "title": "معطر جو ومفارش(عود اميري)",
    "price": 15.0,
    "image": "/products/real/p1926508956.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-عود-اميري/p1926508956",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p276202944",
    "slug": "معطر-جو-ومفارش-رويال-عود",
    "title": "معطر جو ومفارش(رويال عود)",
    "price": 15.0,
    "image": "/products/real/p276202944.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-رويال-عود/p276202944",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1467551965",
    "slug": "معطر-جو-ومفارش-توباكو-ورد",
    "title": "معطر جو ومفارش(توباكو ورد)",
    "price": 15.0,
    "image": "/products/real/p1467551965.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-توباكو-ورد/p1467551965",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1607558432",
    "slug": "معطر-جو-ومفارش-مسك-بودر",
    "title": "معطر جو ومفارش(مسك بودر)",
    "price": 15.0,
    "image": "/products/real/p1607558432.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-مسك-بودر/p1607558432",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1655357708",
    "slug": "معطر-جو-ومفارش-رد-روج",
    "title": "معطر جو ومفارش(رد روج)",
    "price": 15.0,
    "image": "/products/real/p1655357708.jpg",
    "category": "care",
    "categoryName": "معطرات وعناية",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/معطر-جو-ومفارش-رد-روج/p1655357708",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p412707630",
    "slug": "ماء-الورد-الطائفي-القاضي",
    "title": "ماء الورد الطائفي(القاضي)",
    "price": 15.0,
    "image": "/products/real/p412707630.webp",
    "category": "water",
    "categoryName": "ماء الورد والعروس",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/ماء-الورد-الطائفي-القاضي/p412707630",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1249566442",
    "slug": "ورد-طائفي-مجفف",
    "title": "ورد طائفي مجفف",
    "price": 15.0,
    "image": "/products/real/p1249566442.webp",
    "category": "perfume",
    "categoryName": "العطور الخاصة",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/ورد-طائفي-مجفف/p1249566442",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1953624032",
    "slug": "ماء-الزهر-القاضي",
    "title": "ماء الزهر(القاضي)",
    "price": 5.0,
    "image": "/products/real/p1953624032.webp",
    "category": "water",
    "categoryName": "ماء الورد والعروس",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/ماء-الزهر-القاضي/p1953624032",
    "badge": "أصلي 100%",
    "badgeClass": ""
  },
  {
    "id": "p1643159751",
    "slug": "ماء-الكادي-القاضي",
    "title": "ماء الكادي(القاضي)",
    "price": 5.0,
    "image": "/products/real/p1643159751.webp",
    "category": "water",
    "categoryName": "ماء الورد والعروس",
    "notes": "منتج أصيل من منتجات ورد الطائف الفاخرة لدى القاضي.",
    "url": "https://diwan-alward.com/ماء-الكادي-القاضي/p1643159751",
    "badge": "أصلي 100%",
    "badgeClass": ""
  }
];

export function initProducts() {
  const grid = document.querySelector('.products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalClose = document.querySelector('.modal-close-btn');
  const searchInput = document.getElementById('product-search-input');

  if (!grid) return;

  let currentCategory = 'all';
  let searchQuery = '';

  renderProducts();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  function renderProducts() {
    grid.innerHTML = '';
    let filtered = productsData;

    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery) ||
        p.categoryName.toLowerCase().includes(searchQuery)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">لم يتم العثور على منتجات مطابقة للبحث.</p>
          <small>جرب البحث بكلمة أخرى مثل: ورد، بخور، عود، معطر، كولونيا</small>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-card-visual">
          <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='/products/taif-rose-water.jpg'" />
          <div class="card-badge-container">
            <span class="card-badge ${p.badgeClass}">${p.badge}</span>
          </div>
          <div class="card-action-overlay">
            <button class="btn-card-action btn-quick-view" data-id="${p.id}">
              <i data-lucide="eye" style="width:16px;height:16px;"></i>
              <span>نظرة سريعة</span>
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-card-category">${p.categoryName}</span>
          <h3 class="product-card-title">${p.title}</h3>
          <p class="product-card-notes">منتج أصيل موثق من متجر ديوان الورد (القاضي لمنتجات الورد الطائفي)، مقطر ومصنوع بمقاييس الجودة السعودية.</p>
          <div class="product-card-footer">
            <div class="product-price-group">
              <span class="price-label">السعر يشمل الضريبة</span>
              <span class="price-value">${p.price.toLocaleString('ar-SA')} <span class="price-currency">ر.س</span></span>
            </div>
            <button class="btn-add-cart" data-id="${p.id}" title="إضافة للحقيبة">
              <i data-lucide="shopping-bag" style="width:18px;height:18px;"></i>
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }

    attachCardEvents();
  }

  function attachCardEvents() {
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        openQuickView(id);
      });
    });

    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const prod = productsData.find(p => p.id === id);
        if (prod) {
          addToCart(prod, 1);
        }
      });
    });
  }

  function openQuickView(id) {
    const p = productsData.find(prod => prod.id === id);
    if (!p || !modalBackdrop) return;

    modalBackdrop.querySelector('.modal-gallery').innerHTML = `
      <img src="${p.image}" alt="${p.title}" onerror="this.src='/products/taif-rose-water.jpg'" />
    `;
    modalBackdrop.querySelector('.modal-category').textContent = p.categoryName;
    modalBackdrop.querySelector('.modal-title').textContent = p.title;
    modalBackdrop.querySelector('.modal-price-tag').innerHTML = `
      ${p.price.toLocaleString('ar-SA')} <span>ر.س</span>
    `;
    modalBackdrop.querySelector('.modal-description').textContent = 
      'منتج أصيل موثق من مزارع ومعامل القاضي لورد الطائف (ديوان الورد)، مستخلص من خيرات جبال الهدا والشفا ومقطر بنقاء عالي.';

    const specs = {
      'اسم المنتج': p.title,
      'التصنيف': p.categoryName,
      'السعر الرسمي': `${p.price} ريال سعودي`,
      'الضمان': 'منتج أصلي ومضمون 100%',
      'المنشأ': 'الطائف - المملكة العربية السعودية'
    };

    let specsHtml = '';
    for (const [key, val] of Object.entries(specs)) {
      specsHtml += `
        <div class="spec-row">
          <span class="spec-name">${key}:</span>
          <span class="spec-val">${val}</span>
        </div>
      `;
    }
    modalBackdrop.querySelector('.modal-specs-list').innerHTML = specsHtml;

    const qtyInput = modalBackdrop.querySelector('.qty-input');
    qtyInput.value = '1';

    const modalAddBtn = modalBackdrop.querySelector('.btn-modal-add');
    modalAddBtn.onclick = () => {
      const qty = parseInt(qtyInput.value, 10) || 1;
      addToCart(p, qty);
      closeQuickView();
    };

    modalBackdrop.classList.add('open');
  }

  function closeQuickView() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeQuickView);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  const plusBtn = document.querySelector('.qty-btn.plus');
  const minusBtn = document.querySelector('.qty-btn.minus');
  const qtyInput = document.querySelector('.qty-input');
  if (plusBtn && minusBtn && qtyInput) {
    plusBtn.addEventListener('click', () => {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
    minusBtn.addEventListener('click', () => {
      const cur = parseInt(qtyInput.value, 10) || 1;
      if (cur > 1) qtyInput.value = cur - 1;
    });
  }
}
