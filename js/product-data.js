// ==========================================
// پایگاه داده محصولات - Product Database
// ==========================================

const products = [
  // === مراقبت پوست - Skincare ===

  // کرم‌های مرطوب‌کننده - Moisturizers
  {
    id: 1,
    name: 'کرم مرطوب‌کننده سرامیک',
    category: 'مراقبت پوست',
    subcategory: 'کرم مرطوب‌کننده',
    brand: 'سراوی',
    price: 450000,
    oldPrice: 550000,
    rating: 4.5,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'تخفیف',
    description: 'کرم مرطوب‌کننده غنی شده با سرامید برای پوست خشک و حساس'
  },
  {
    id: 2,
    name: 'کرم آبرسان هیالورونیک',
    category: 'مراقبت پوست',
    subcategory: 'کرم مرطوب‌کننده',
    brand: 'نیتروژینا',
    price: 380000,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'فرمول سبک با اسید هیالورونیک برای آبرسانی عمیق'
  },
  {
    id: 3,
    name: 'کرم مرطوب‌کننده آلوئه ورا',
    category: 'مراقبت پوست',
    subcategory: 'کرم مرطوب‌کننده',
    brand: 'نیچر ریپابلیک',
    price: 320000,
    rating: 4.3,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1594411133999-119391060953?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کرم آرامش‌بخش با عصاره آلوئه ورا طبیعی'
  },

  // سرم‌های صورت - Serums
  {
    id: 4,
    name: 'سرم ویتامین C روشن‌کننده',
    category: 'مراقبت پوست',
    subcategory: 'سرم',
    brand: 'اوردینری',
    price: 580000,
    oldPrice: 680000,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'سرم قدرتمند ویتامین C برای روشن‌سازی و یکنواختی پوست'
  },
  {
    id: 5,
    name: 'سرم نیاسینامید ضد لک',
    category: 'مراقبت پوست',
    subcategory: 'سرم',
    brand: 'اوردینری',
    price: 420000,
    rating: 4.6,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1620916566354-946618774780?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'سرم نیاسینامید 10% برای کاهش منافذ و لک‌های تیره'
  },
  {
    id: 6,
    name: 'سرم رتینول ضد پیری',
    category: 'مراقبت پوست',
    subcategory: 'سرم',
    brand: 'لاروش پوزای',
    price: 890000,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1612817288479-7a544866f07d?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'جدید',
    description: 'سرم پیشرفته رتینول برای کاهش چین و چروک'
  },

  // کرم‌های ضد چروک - Anti-aging
  {
    id: 7,
    name: 'کرم ضد چروک کلاژن',
    category: 'مراقبت پوست',
    subcategory: 'ضد چروک',
    brand: 'اولی',
    price: 720000,
    rating: 4.4,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1598440499026-6e2764b88b22?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کرم غنی شده با کلاژن برای کاهش علائم پیری'
  },
  {
    id: 8,
    name: 'کرم شب احیاکننده',
    category: 'مراقبت پوست',
    subcategory: 'ضد چروک',
    brand: 'استی لادر',
    price: 1250000,
    oldPrice: 1450000,
    rating: 4.7,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'تخفیف',
    description: 'کرم شب لوکس با فناوری ترمیم سلولی'
  },

  // پاک‌کننده‌ها - Cleansers
  {
    id: 9,
    name: 'ژل شستشوی صورت سالیسیلیک',
    category: 'مراقبت پوست',
    subcategory: 'پاک‌کننده',
    brand: 'سراوی',
    price: 290000,
    rating: 4.5,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ژل پاک‌کننده با اسید سالیسیلیک برای پوست چرب'
  },
  {
    id: 10,
    name: 'فوم شستشوی ملایم',
    category: 'مراقبت پوست',
    subcategory: 'پاک‌کننده',
    brand: 'سترافیل',
    price: 340000,
    rating: 4.8,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'فوم شستشوی بدون صابون و ملایم برای تمام انواع پوست'
  },

  // تونر و میسلار - Toners
  {
    id: 11,
    name: 'تونر گلاب طبیعی',
    category: 'مراقبت پوست',
    subcategory: 'تونر',
    brand: 'گلستان',
    price: 180000,
    rating: 4.2,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1629732047847-50bad7558259?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'تونر طبیعی گلاب برای تازه‌کردن و آرامش پوست'
  },
  {
    id: 12,
    name: 'آب میسلار پاک‌کننده',
    category: 'مراقبت پوست',
    subcategory: 'میسلار',
    brand: 'گارنیر',
    price: 260000,
    rating: 4.6,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1556229167-da33dd638e41?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'آب میسلار 3 در 1 برای پاکسازی، تونیک و آرایش‌پاککن'
  },

  // ماسک‌های صورت - Face Masks
  {
    id: 13,
    name: 'ماسک ورقه‌ای هیالورونیک',
    category: 'مراقبت پوست',
    subcategory: 'ماسک صورت',
    brand: 'مدیهیل',
    price: 85000,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1512496011931-d2b4ba517e45?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ماسک ورقه‌ای با اسید هیالورونیک برای آبرسانی فوری'
  },
  {
    id: 14,
    name: 'ماسک خاک رس سبز',
    category: 'مراقبت پوست',
    subcategory: 'ماسک صورت',
    brand: 'لوریال',
    price: 310000,
    rating: 4.4,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ماسک خاک رس برای پاکسازی عمیق و کنترل چربی'
  },

  // کرم ضد آفتاب - Sunscreen
  {
    id: 15,
    name: 'کرم ضد آفتاب SPF 50',
    category: 'مراقبت پوست',
    subcategory: 'ضد آفتاب',
    brand: 'لاروش پوزای',
    price: 520000,
    oldPrice: 600000,
    rating: 4.9,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1598440499031-54620057d733?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'پرفروش',
    description: 'کرم ضد آفتاب فاقد چربی با محافظت بسیار بالا'
  },
  {
    id: 16,
    name: 'اسپری ضد آفتاب شفاف',
    category: 'مراقبت پوست',
    subcategory: 'ضد آفتاب',
    brand: 'نیوا',
    price: 380000,
    rating: 4.3,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1629732047847-50bad7558259?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'اسپری ضد آفتاب سبک و شفاف برای استفاده آسان'
  },

  // === آرایش - Makeup ===

  // رژ لب - Lipsticks
  {
    id: 17,
    name: 'رژ لب مات مخملی',
    category: 'آرایش',
    subcategory: 'رژ لب',
    brand: 'مک',
    price: 680000,
    rating: 4.8,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'رژ لب مات با پوشش کامل و ماندگاری بالا - شماره 05'
  },
  {
    id: 18,
    name: 'رژ لب براق آبدار',
    category: 'آرایش',
    subcategory: 'رژ لب',
    brand: 'میبلین',
    price: 290000,
    rating: 4.5,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'رژ لب براق با فرمول مرطوب‌کننده - رنگ گلبهی'
  },
  {
    id: 19,
    name: 'مداد لب ضدآب',
    category: 'آرایش',
    subcategory: 'مداد لب',
    brand: 'NYX',
    price: 180000,
    rating: 4.6,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'مداد لب ضدآب با ماندگاری 24 ساعته'
  },

  // رژگونه - Blush
  {
    id: 20,
    name: 'رژگونه پودری',
    category: 'آرایش',
    subcategory: 'رژگونه',
    brand: 'نارس',
    price: 590000,
    rating: 4.7,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc431b15?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'رژگونه پودری با رنگ‌دهی طبیعی و حرفه‌ای'
  },
  {
    id: 21,
    name: 'رژگونه کرمی',
    category: 'آرایش',
    subcategory: 'رژگونه',
    brand: 'فنتی بیوتی',
    price: 720000,
    oldPrice: 850000,
    rating: 4.9,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1527633593644-34cabe057bf0?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'جدید',
    description: 'رژگونه کرمی با فینیش طبیعی و قابل ترکیب'
  },

  // سایه چشم - Eyeshadow
  {
    id: 22,
    name: 'پالت سایه 12 رنگ نود',
    category: 'آرایش',
    subcategory: 'سایه چشم',
    brand: 'هدی بیوتی',
    price: 1580000,
    rating: 4.9,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1512496011931-d2b4ba517e45?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'پرفروش',
    description: 'پالت سایه لوکس با 12 رنگ مات و شیمری'
  },
  {
    id: 23,
    name: 'سایه تک رنگ براق',
    category: 'آرایش',
    subcategory: 'سایه چشم',
    brand: 'استی لادر',
    price: 420000,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1503236823255-94605f597e70?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'سایه تک رنگ با درخشش فوق‌العاده'
  },

  // ریمل - Mascara
  {
    id: 24,
    name: 'ریمل حجم‌دهنده',
    category: 'آرایش',
    subcategory: 'ریمل',
    brand: 'میبلین',
    price: 320000,
    rating: 4.7,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ریمل با فرمول حجم‌دهنده و بلندکننده مژه'
  },
  {
    id: 25,
    name: 'ریمل ضدآب',
    category: 'آرایش',
    subcategory: 'ریمل',
    brand: 'لورآل',
    price: 380000,
    rating: 4.5,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1621333100607-441586b82444?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'ریمل ضدآب با ماندگاری 24 ساعته'
  },

  // خط چشم - Eyeliner
  {
    id: 26,
    name: 'خط چشم مایع مشکی',
    category: 'آرایش',
    subcategory: 'خط چشم',
    brand: 'استی لادر',
    price: 480000,
    rating: 4.8,
    reviews: 398,
    image: 'https://images.unsplash.com/photo-1512496011931-d2b4ba517e45?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'خط چشم مایع با نوک فوق باریک و دقیق'
  },
  {
    id: 27,
    name: 'مداد چشم مشکی',
    category: 'آرایش',
    subcategory: 'مداد چشم',
    brand: 'مک',
    price: 290000,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1512496011931-d2b4ba517e45?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'مداد چشم کرمی با اپلیکاتور'
  },

  // کرم پودر و پنکیک - Foundation
  {
    id: 28,
    name: 'کرم پودر مایع HD',
    category: 'آرایش',
    subcategory: 'کرم پودر',
    brand: 'فنتی بیوتی',
    price: 890000,
    oldPrice: 1050000,
    rating: 4.9,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'پرفروش',
    description: 'کرم پودر مایع با پوشش کامل و فینیش طبیعی - 50 رنگ'
  },
  {
    id: 29,
    name: 'پنکیک فشرده مات',
    category: 'آرایش',
    subcategory: 'پنکیک',
    brand: 'مک',
    price: 620000,
    rating: 4.7,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'پنکیک فشرده با پوشش متوسط تا کامل'
  },
  {
    id: 30,
    name: 'کوشن BB کره‌ای',
    category: 'آرایش',
    subcategory: 'کوشن',
    brand: 'میشا',
    price: 450000,
    rating: 4.6,
    reviews: 534,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کوشن BB با SPF50 و پوشش طبیعی'
  },

  // کانسیلر - Concealer
  {
    id: 31,
    name: 'کانسیلر مایع روشن‌کننده',
    category: 'آرایش',
    subcategory: 'کانسیلر',
    brand: 'تارت',
    price: 580000,
    rating: 4.8,
    reviews: 789,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'کانسیلر با پوشش کامل برای پوشش دادن تیرگی دور چشم'
  },
  {
    id: 32,
    name: 'کانسیلر استیک',
    category: 'آرایش',
    subcategory: 'کانسیلر',
    brand: 'میبلین',
    price: 280000,
    rating: 4.5,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کانسیلر استیکی برای پوشش سریع لکه‌ها'
  },

  // پودر - Powder
  {
    id: 33,
    name: 'پودر تثبیت‌کننده شفاف',
    category: 'آرایش',
    subcategory: 'پودر',
    brand: 'لورامرسیه',
    price: 720000,
    rating: 4.9,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'جدید',
    description: 'پودر تثبیت‌کننده شفاف برای آرایش بادوام'
  },
  {
    id: 34,
    name: 'پودر فشرده مات',
    category: 'آرایش',
    subcategory: 'پودر',
    brand: 'رویال',
    price: 240000,
    rating: 4.4,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'پودر فشرده برای کنترل چربی و مات کردن'
  },

  // === مراقبت مو - Hair Care ===

  // شامپو - Shampoo
  {
    id: 35,
    name: 'شامپو ترمیم‌کننده مو',
    category: 'مراقبت مو',
    subcategory: 'شامپو',
    brand: 'پنتن',
    price: 180000,
    rating: 4.5,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'شامپو تقویت‌کننده با پروتئین برای موهای آسیب‌دیده'
  },
  {
    id: 36,
    name: 'شامپو ضد ریزش',
    category: 'مراقبت مو',
    subcategory: 'شامپو',
    brand: 'داو',
    price: 220000,
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'شامپو تقویت‌کننده ریشه مو و ضد ریزش'
  },
  {
    id: 37,
    name: 'شامپو ضد شوره',
    category: 'مراقبت مو',
    subcategory: 'شامپو',
    brand: 'هد اند شولدرز',
    price: 190000,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'شامپو درمانی برای از بین بردن شوره سر'
  },

  // نرم‌کننده - Conditioner
  {
    id: 38,
    name: 'نرم‌کننده مو آرگان',
    category: 'مراقبت مو',
    subcategory: 'نرم‌کننده',
    brand: 'مراکن اویل',
    price: 340000,
    rating: 4.8,
    reviews: 389,
    image: 'https://images.unsplash.com/photo-1559599141-945781a96752?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'نرم‌کننده غنی شده با روغن آرگان'
  },
  {
    id: 39,
    name: 'نرم‌کننده حجم‌دهنده',
    category: 'مراقبت مو',
    subcategory: 'نرم‌کننده',
    brand: 'پنتن',
    price: 195000,
    rating: 4.4,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1559599141-945781a96752?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'نرم‌کننده سبک برای حجم و طراوت مو'
  },

  // ماسک مو - Hair Mask
  {
    id: 40,
    name: 'ماسک کراتین موی آسیب‌دیده',
    category: 'مراقبت مو',
    subcategory: 'ماسک مو',
    brand: 'لورآل',
    price: 420000,
    oldPrice: 520000,
    rating: 4.9,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1527799822394-46a440938f32?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'تخفیف',
    description: 'ماسک ترمیم عمیق با کراتین'
  },
  {
    id: 41,
    name: 'ماسک مغذی با روغن نارگیل',
    category: 'مراقبت مو',
    subcategory: 'ماسک مو',
    brand: 'گارنیر',
    price: 280000,
    rating: 4.6,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ماسک مغذی برای موهای خشک و وز'
  },

  // سرم مو - Hair Serum
  {
    id: 42,
    name: 'سرم ترمیم‌کننده سر مو',
    category: 'مراقبت مو',
    subcategory: 'سرم مو',
    brand: 'مراکن اویل',
    price: 380000,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'سرم روغنی برای موهای خشک و آسیب‌دیده'
  },
  {
    id: 43,
    name: 'سرم ضد وز مو',
    category: 'مراقبت مو',
    subcategory: 'سرم مو',
    brand: 'L\'Oréal',
    price: 450000,
    rating: 4.8,
    reviews: 321,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'سرم کنترل‌کننده وز و براق‌کننده'
  },

  // === بهداشت شخصی - Personal Care ===

  // عطر و ادکلن - Perfume
  {
    id: 44,
    name: 'ادوپرفیوم زنانه گلی',
    category: 'بهداشت شخصی',
    subcategory: 'عطر',
    brand: 'شانل',
    price: 3500000,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1557170334-a7c3d40a02a4?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'لوکس',
    description: 'عطر زنانه با نُت‌های گلی و شیرین'
  },
  {
    id: 45,
    name: 'ادوتویلت مردانه اسپرت',
    category: 'بهداشت شخصی',
    subcategory: 'ادکلن',
    brand: 'کالوین کلاین',
    price: 1800000,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1557170334-a7c3d40a02a4?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ادکلن مردانه با رایحه تازه و اسپرت'
  },
  {
    id: 46,
    name: 'میست معطر بدن',
    category: 'بهداشت شخصی',
    subcategory: 'بادی میست',
    brand: 'ویکتوریا سکرت',
    price: 680000,
    oldPrice: 850000,
    rating: 4.6,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1557170334-a7c3d40a02a4?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'تخفیف',
    description: 'اسپری معطر بدن با رایحه میوه‌ای'
  },

  // دئودورانت - Deodorant
  {
    id: 47,
    name: 'دئودورانت رول‌ آن 48 ساعته',
    category: 'بهداشت شخصی',
    subcategory: 'دئودورانت',
    brand: 'نیوا',
    price: 145000,
    rating: 4.5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'دئودورانت بدون الکل با محافظت 48 ساعته'
  },
  {
    id: 48,
    name: 'اسپری دئودورانت',
    category: 'بهداشت شخصی',
    subcategory: 'دئودورانت',
    brand: 'ریکسونا',
    price: 125000,
    rating: 4.4,
    reviews: 534,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'اسپری دئودورانت با رایحه ملایم'
  },

  // کرم دست - Hand Cream
  {
    id: 49,
    name: 'کرم مرطوب‌کننده دست',
    category: 'بهداشت شخصی',
    subcategory: 'کرم دست',
    brand: 'نیوا',
    price: 98000,
    rating: 4.6,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کرم نرم‌کننده و مرطوب‌کننده دست'
  },
  {
    id: 50,
    name: 'کرم دست با عصاره شی باتر',
    category: 'بهداشت شخصی',
    subcategory: 'کرم دست',
    brand: 'لوکستین',
    price: 280000,
    rating: 4.8,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'کرم دست لوکس با رایحه دلپذیر'
  },

  // لوسیون بدن - Body Lotion
  {
    id: 51,
    name: 'لوسیون مرطوب‌کننده بدن',
    category: 'بهداشت شخصی',
    subcategory: 'لوسیون بدن',
    brand: 'واسلین',
    price: 185000,
    rating: 4.5,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'لوسیون آبرسان با جذب سریع'
  },
  {
    id: 52,
    name: 'لوسیون بدن روشن‌کننده',
    category: 'بهداشت شخصی',
    subcategory: 'لوسیون بدن',
    brand: 'نیوا',
    price: 220000,
    oldPrice: 280000,
    rating: 4.6,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'تخفیف',
    description: 'لوسیون بدن با ویتامین C روشن‌کننده'
  },

  // صابون - Soap
  {
    id: 53,
    name: 'صابون گلیسیرینه طبیعی',
    category: 'بهداشت شخصی',
    subcategory: 'صابون',
    brand: 'پیرز',
    price: 42000,
    rating: 4.4,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'صابون شفاف با گلیسیرین طبیعی'
  },
  {
    id: 54,
    name: 'صابون کرمی مرطوب‌کننده',
    category: 'بهداشت شخصی',
    subcategory: 'صابون',
    brand: 'داو',
    price: 55000,
    rating: 4.7,
    reviews: 534,
    image: 'https://images.unsplash.com/photo-1556228720-da1e8e82b130?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'محبوب',
    description: 'صابون کرمی با 1/4 کرم مرطوب‌کننده'
  },
  // === اکسسوری آرایشی - Makeup Accessories ===
  {
    id: 55,
    name: 'ست برس آرایشی 12 تکه',
    category: 'آرایش',
    subcategory: 'اکسسوری',
    brand: 'سیگما',
    price: 1250000,
    rating: 4.9,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1522338223622-02e2b2c80fc2?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ست حرفه‌ای برس‌های آرایشی با موی طبیعی'
  },
  {
    id: 56,
    name: 'اسفنج آرایشی تخم‌مرغی',
    category: 'آرایش',
    subcategory: 'اکسسوری',
    brand: 'بیوتی بلندر',
    price: 320000,
    rating: 4.8,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1590812543446-23958ad7724b?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'پرفروش',
    description: 'اسفنج نرم برای فید کردن کرم پودر و کانسیلر'
  },
  {
    id: 57,
    name: 'فر مژه حرفه‌ای',
    category: 'آرایش',
    subcategory: 'اکسسوری',
    brand: 'شو اومورا',
    price: 450000,
    rating: 4.7,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1590439471364-192367183d7c?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'فر مژه استیل با پد سیلیکونی برای حالت‌دهی عالی'
  },
  // === محصولات مو - More Hair Care ===
  {
    id: 58,
    name: 'روغن آرگان خالص مراکشی',
    category: 'مراقبت مو',
    subcategory: 'سرم مو',
    brand: 'او جی ایکس',
    price: 480000,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'ویژه',
    description: 'روغن آرگان خالص برای درخشش و ترمیم مو'
  },
  {
    id: 59,
    name: 'اسپری دوفاز محافظ حرارتی',
    category: 'مراقبت مو',
    subcategory: 'سرم مو',
    brand: 'گلیس',
    price: 290000,
    rating: 4.5,
    reviews: 231,
    image: 'https://images.unsplash.com/photo-1519735891363-f0a9bc490059?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'اسپری محافظ مو در برابر حرارت سشوار و اتو'
  },
  // === مراقبت بدن - More Body Care ===
  {
    id: 60,
    name: 'ژل حمام با عصاره اسطوخودوس',
    category: 'بهداشت شخصی',
    subcategory: 'صابون',
    brand: 'ایوروشه',
    price: 260000,
    rating: 4.6,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1559599101-f09736c302a6?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'ژل شستشوی بدن آرامش‌بخش با رایحه لاوندر'
  },
  {
    id: 61,
    name: 'اسکراب بدن شنی قهوه',
    category: 'بهداشت شخصی',
    subcategory: 'لوسیون بدن',
    brand: 'بادیشاپ',
    price: 420000,
    rating: 4.8,
    reviews: 321,
    image: 'https://images.unsplash.com/photo-1571407920138-b769ea8ba08b?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'جدید',
    description: 'لایه‌بردار بدن برای رفع تیرگی و نرمی پوست'
  },
  {
    id: 62,
    name: 'کرم ضد آفتاب رنگی SPF 50',
    category: 'مراقبت پوست',
    subcategory: 'ضد آفتاب',
    brand: 'بایودرما',
    price: 650000,
    rating: 4.8,
    reviews: 213,
    image: 'https://images.unsplash.com/photo-1590439471364-192367183d7c?auto=format&fit=crop&w=400&q=80',
    stock: true,
    badge: 'پرفروش',
    description: 'ضد آفتاب با پوشش کرم پودری و محافظت بالا'
  },
  {
    id: 63,
    name: 'شوینده کرمی صورت اپتیمالز',
    category: 'مراقبت پوست',
    subcategory: 'پاک‌کننده',
    brand: 'اوریفلیم',
    price: 340000,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'شوینده ملایم برای پوست‌های خشک و حساس'
  },
  {
    id: 64,
    name: 'پچ زیر چشم طلایی',
    category: 'مراقبت پوست',
    subcategory: 'ماسک صورت',
    brand: 'پتیت‌فی',
    price: 280000,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1512496011931-d2b4ba517e45?auto=format&fit=crop&w=400&q=80',
    stock: true,
    description: 'پچ هیدروژل برای رفع تیرگی و چروک دور چشم'
  }


];

// دسته‌بندی‌ها - Categories
const categories = [
  {
    id: 'skincare',
    name: 'مراقبت پوست',
    icon: '🧴',
    subcategories: ['کرم مرطوب‌کننده', 'سرم', 'ضد چروک', 'پاک‌کننده', 'تونر', 'میسلار', 'ماسک صورت', 'ضد آفتاب']
  },
  {
    id: 'makeup',
    name: 'آرایش',
    icon: '💄',
    subcategories: ['رژ لب', 'مداد لب', 'رژگونه', 'سایه چشم', 'ریمل', 'خط چشم', 'مداد چشم', 'کرم پودر', 'پنکیک', 'کوشن', 'کانسیلر', 'پودر']
  },
  {
    id: 'haircare',
    name: 'مراقبت مو',
    icon: '💇',
    subcategories: ['شامپو', 'نرم‌کننده', 'ماسک مو', 'سرم مو']
  },
  {
    id: 'personalcare',
    name: 'بهداشت شخصی',
    icon: '✨',
    subcategories: ['عطر', 'ادکلن', 'بادی میست', 'دئودورانت', 'کرم دست', 'لوسیون بدن', 'صابون']
  }
];

// برندها - Brands
const brands = [
  'سراوی', 'نیتروژینا', 'نیچر ریپابلیک', 'اوردینری', 'لاروش پوزای',
  'اولی', 'استی لادر', 'سترافیل', 'گلستان', 'گارنیر', 'مدیهیل',
  'لوریال', 'نیوا', 'مک', 'میبلین', 'NYX', 'نارس', 'فنتی بیوتی',
  'هدی بیوتی', 'تارت', 'لورامرسیه', 'رویال', 'پنتن', 'داو',
  'هد اند شولدرز', 'مراکن اویل', 'شانل', 'کالوین کلاین',
  'ویکتوریا سکرت', 'ریکسونا', 'لوکستین', 'واسلین', 'پیرز'
];

// محدوده قیمت - Price Ranges
const priceRanges = [
  { id: 1, label: 'زیر 100 هزار تومان', min: 0, max: 100000 },
  { id: 2, label: '100 تا 300 هزار تومان', min: 100000, max: 300000 },
  { id: 3, label: '300 تا 500 هزار تومان', min: 300000, max: 500000 },
  { id: 4, label: '500 هزار تا 1 میلیون تومان', min: 500000, max: 1000000 },
  { id: 5, label: 'بالای 1 میلیون تومان', min: 1000000, max: Infinity }
];
