interface NewsItem {
  title: string;
  content: string;
  contentSummary: string;
  image: string;
  link: string;
}
// NewsItem[]

export const newsContent: { key: string; value: NewsItem }[] = [
  {
    key: "1",
    value: {
      title: "معاون برنامه ریزی وزیر ارتباطات منصوب شد",
      content: `
    وزیر ارتباطات و فناوری اطلاعات، سیروس موثقی را به سمت معاون برنامه ریزی و نظارت راهبردی این وزارتخانه منصوب کرد.

به گزارش خبرگزاری مهر، با حکم محمدجواد آذری جهرمی، سیروس موثقی جایگزین برات قنبری در وزارت ارتباطات ومعاون برنامه ریزی و نظارت راهبردی این وزارتخانه شد.

همچنین در حکم وزیر ارتباطات و فناوری اطلاعات،‌ برات قنبری به عنوان مشاور اقتصادی وزیر ارتباطات و فناوری اطلاعات، منصوب شد و از خدمات وی در دوران تصدی معاونت برنامه ریزی و نظارت راهبردی تقدیر شد.

وزارت ارتباطات، انتخاب سیروس موثقی را به عنوان وزیر ارتباطات در راستای رویکرد آذری جهرمی در انتخاب مدیران از مجموعه کارکنان وزارت ارتباطات و فناوری اطلاعات و استفاده از نیروهای جوان، با انگیزه و متخصص در هر زمینه، اعلام کرده است
    `,
      contentSummary: `
        وزیر ارتباطات و فناوری اطلاعات، سیروس موثقی را به سمت معاون برنامه ریزی و نظارت راهبردی این وزارتخانه منصوب کرد.
به گزارش خبرگزاری مهر، با حکم محمدجواد آذری جهرمی، سیروس موثقی 

    `,
      image: "/pics/01.jpg",
      link: "/news/1",
    },
  },
  {
    key: "2",
    value: {
      title: "وزیر ارتباطات: درباره کاهش هزینه‌ اینترنت وحدت نظر وجود دارد",
      content: `
    وزیر ارتباطات و فناوری اطلاعات توضیحاتی درباره وضعیت بسته‌های اینترنتی ارائه کرد و گفت که وحدت نظری در رابطه با کاهش هزینه‌ها و خارج شدن از حالت حجمی وجود دارد.

به گزارش ایتنا از ایسنا، محمدجواد آذری جهرمی در حاشیه جلسه هیئت دولت در جمع خبرنگاران در رابطه با تغییر بسته‌های اینترنتی گفت: این موضوع و تعرفه‌های اینترنت یکی از موضوعات ثابتی بوده که ما از روز اولی که مشغول به کار شدیم تاکید داشتیم به آن بپردازیم.

وی ادامه داد: طبق وعده‌ای که دادیم قرار بود این بسته نهایی و در صد روز اول اجرایی شود که مباحث کارشناسی آن همچنان با اپراتورها و کمیسیون تنظیم و مقررات مرجع تصویب تعرفه‌ها است مورد بررسی قرار می‌گیرد، فکر می‌کنم در جلسه بعدی کمیسیون ما برای تصمیم نهایی وارد شور شویم.

وزیر ارتباطات و فناوری اطلاعات تاکید کرد: با توجه به اختلاف نظراتی که وجود دارد، جزئیات آن پس از تصویب نهایی اعلام خواهد شد. اما اصل بحث این است که وحدت نظری در رابطه با کاهش هزینه‌ها و خارج شدن از حالت حجمی وجود دارد.
`,
      contentSummary: `
    وزیر ارتباطات و فناوری اطلاعات توضیحاتی درباره وضعیت بسته‌های اینترنتی ارائه کرد و گفت که وحدت نظری در رابطه با کاهش هزینه‌ها و خارج شدن از حالت حجمی وجود دارد.
    گزارش ایتنا از 
    `,
      image: "/pics/02.jpg",
      link: "/news/2",
    },
  },
];
