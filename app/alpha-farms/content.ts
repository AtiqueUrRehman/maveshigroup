// Bilingual (English / Urdu) copy for the Alpha Farms page.
// NOTE: The Urdu strings are a first draft — have a native speaker review
// the farming/pricing terms before treating them as final.

export type Lang = "en" | "ur";

export interface StepItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingCopy {
  eyebrow: string;
  heading: string;
  totalByEid: string;
  replay: string;
  goatPrice: string;
  monthsOfCare: string;
  monthsUnit: string; // e.g. "months" → "{n} months"
  weightMarker: string; // "weight > 70 kg"
  perMo: string; // "/ mo"
  reserve: string;
  payOnce: string; // "Pay {price} once" — {price} injected
  eidDelivered: string;
  atYourDoor: string;
  goatWord: string; // "goat" in "{price} goat"
  overThreshold: string; // "(≥ 70 kg)"
  totalWord: string; // "total" in "{total} total"
  cards: {
    goatPriceLabel: string;
    goatPriceValue: string;
    goatPriceDesc: string;
    monthlyLabel: string;
    monthlyValue: string;
    under70: string;
    over70: string;
    light: string; // "Rs 11,000 / mo"
    heavy: string; // "Rs 14,000 / mo"
    monthlyDesc: string;
    deliveryLabel: string;
    deliveryValue: string;
    deliveryDesc: string;
  };
}

export interface AlphaContent {
  dir: "ltr" | "rtl";
  toggleLabel: string; // label of the OTHER language, shown on the switch
  nav: { howItWorks: string; pricing: string; faq: string; back: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    subtitle: string;
    imgAlt: string;
  };
  steps: { eyebrow: string; heading: string; subtitle: string; items: StepItem[] };
  faq: { eyebrow: string; heading: string; subtitle: string; items: FaqItem[] };
  cta: { heading: string; subtitle: string; button: string; waHref: string };
  footer: { tagline: string; copyright: string };
  pricing: PricingCopy;
}

const WA = "https://wa.me/923130794980";

export const content: Record<Lang, AlphaContent> = {
  en: {
    dir: "ltr",
    toggleLabel: "اردو",
    nav: { howItWorks: "How It Works", pricing: "Pricing", faq: "FAQ", back: "← Maveshi Farms Story" },
    hero: {
      eyebrow: "ALPHA FARMS · QURBANI",
      titleLead: "Reserve your goat. We raise it. We deliver it for ",
      titleHighlight: "Eid.",
      titleTail: "",
      subtitle:
        "Choose your Qurbani goat, we handle everything — feed, care, medication, monthly updates, and Eid delivery.",
      imgAlt: "A healthy Qurbani goat at Alpha Farms",
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      heading: "Four steps to Eid",
      subtitle: "Simple, transparent, and handled end-to-end by our team.",
      items: [
        {
          title: "Pick from our catalog, or send yours",
          description:
            "Browse our herd via short video clips. Choose the goat you connect with — size, breed, and look. Nothing seems interesting? Let us know your preference and we'll arrange. Want to arrange yourself? Sure!",
        },
        {
          title: "We raise & care",
          description:
            "Your reserved goat stays at our farm, fed a healthy diet and monitored by our team daily.",
        },
        {
          title: "Monthly updates",
          description:
            "Receive photo and video updates every month so you watch your goat grow in real time.",
        },
        {
          title: "Delivered before Eid",
          description:
            "We arrange doorstep delivery in the final week before Eid — fresh, healthy, on time.",
        },
      ],
    },
    faq: {
      eyebrow: "COMMON QUESTIONS",
      heading: "Good to know",
      subtitle: "Everything you'd want to ask before reserving — answered.",
      items: [
        {
          question: "What does the monthly care fee cover?",
          answer:
            "The monthly care fee (Rs 11,000–14,000) covers full feed, veterinary check-ups, grooming, and housing at our farm. You receive monthly photo and video updates of your goat so you can follow its progress.",
        },
        {
          question: "What happens if the goat gets sick or passes away?",
          answer:
            "In the rare event of illness, we cover all veterinary costs at no extra charge. If a goat passes away due to illness, we issue a 50% refund of the total amount paid to date. Full terms available in our reservation agreement.",
        },
        {
          question: "Can I visit the farm to see my goat?",
          answer:
            "Yes — farm visits are welcome by appointment. We'll confirm a time that works with our farm schedule and ensure your goat is ready for you.",
        },
        {
          question: "How is delivery handled before Eid?",
          answer:
            "We arrange delivery to your doorstep or nearest convenient location for a flat fee of Rs 5,000 or less, depending on your area. Delivery is scheduled in the final week before Eid so your goat arrives fresh and on time.",
        },
        {
          question: "What if my goat dies?",
          answer:
            "We have qualified veterinary doctors on our team to handle any medical cases, backed by blood and fecal laboratory support. In the rare event the animal is still lost, we share 50% of the loss with you.",
        },
        {
          question: "Which breeds do you have?",
          answer:
            "We usually have Makhi Cheena and Rajanpoori breeds, but can arrange others on request.",
        },
        {
          question: "How do I book?",
          answer:
            "Reach out on WhatsApp, choose the animal you like (or send us your own), and that's it — palai starts!",
        },
      ],
    },
    cta: {
      heading: "Ready to reserve your Qurbani goat?",
      subtitle: "Browse available goats by video and lock in your reservation before spots fill up.",
      button: "Chat on WhatsApp",
      waHref: `${WA}?text=Hey%2C%20I%20saw%20your%20website%20and%20I%20am%20interested%20in%20Palai.`,
    },
    footer: {
      tagline: "Qurbani aap ki, zimedari hamari.",
      copyright: "© 2026 Alpha Farms · A Maveshi Farms company",
    },
    pricing: {
      eyebrow: "HOW IT ADDS UP",
      heading: "Buy once, care monthly, collect on Eid.",
      totalByEid: "TOTAL BY EID",
      replay: "Replay",
      goatPrice: "Goat Price",
      monthsOfCare: "Months of Care",
      monthsUnit: "months",
      weightMarker: "weight > 70 kg",
      perMo: "/ mo",
      reserve: "RESERVE",
      payOnce: "Pay {price} once",
      eidDelivered: "EID · DELIVERED",
      atYourDoor: "Healthy, at your door",
      goatWord: "goat",
      overThreshold: "(≥ 70 kg)",
      totalWord: "total",
      cards: {
        goatPriceLabel: "GOAT PRICE",
        goatPriceValue: "From Rs 55,000",
        goatPriceDesc:
          "One-time, set when you reserve. Varies by breed, weight and age — shown on each goat.",
        monthlyLabel: "MONTHLY CARE",
        monthlyValue: "Rs 11,000–14,000 / mo",
        under70: "Under 70 kg",
        over70: "Over 70 kg",
        light: "Rs 11,000 / mo",
        heavy: "Rs 14,000 / mo",
        monthlyDesc:
          "Per goat, billed monthly until Eid. Covers feed, water, shelter, vaccinations and vet care.",
        deliveryLabel: "DELIVERY",
        deliveryValue: "Rs 5,000 or less",
        deliveryDesc:
          "Major cities delivered 3–5 days before Eid. Other cities at actual transport cost.",
      },
    },
  },

  ur: {
    dir: "rtl",
    toggleLabel: "English",
    nav: { howItWorks: "طریقہ کار", pricing: "قیمت", faq: "عام سوالات", back: "ماویشی فارمز کی کہانی →" },
    hero: {
      eyebrow: "الفا فارمز · قربانی",
      titleLead: "اپنا بکرا منتخب کریں۔ ہم اسے پالیں گے، اور ",
      titleHighlight: "عید",
      titleTail: " پر آپ تک پہنچائیں گے۔",
      subtitle:
        "اپنی قربانی کا بکرا منتخب کریں، باقی سب کچھ ہم سنبھالیں گے — خوراک، دیکھ بھال، ادویات، ماہانہ اپڈیٹس اور عید پر ڈیلیوری۔",
      imgAlt: "الفا فارمز کا ایک صحت مند قربانی کا بکرا",
    },
    steps: {
      eyebrow: "یہ کیسے کام کرتا ہے",
      heading: "عید تک چار آسان مراحل",
      subtitle: "آسان، شفاف، اور شروع سے آخر تک ہماری ٹیم کے ذمے۔",
      items: [
        {
          title: "ہماری فہرست سے منتخب کریں، یا اپنا بکرا بھیجیں",
          description:
            "مختصر ویڈیو کلپس میں ہمارے ریوڑ کو دیکھیں۔ جو بکرا آپ کو پسند آئے اسے منتخب کریں — سائز، نسل اور شکل۔ کچھ پسند نہیں آیا؟ ہمیں اپنی پسند بتائیں، ہم بندوبست کر دیں گے۔ اپنا بکرا رکھوانا چاہتے ہیں؟ بالکل!",
        },
        {
          title: "ہم پالتے اور دیکھ بھال کرتے ہیں",
          description:
            "آپ کا بُک شدہ بکرا ہمارے فارم پر رہتا ہے، جہاں اسے صحت بخش خوراک دی جاتی ہے اور ہماری ٹیم روزانہ اس کی نگرانی کرتی ہے۔",
        },
        {
          title: "ماہانہ اپڈیٹس",
          description:
            "ہر ماہ تصاویر اور ویڈیو اپڈیٹس حاصل کریں تاکہ آپ اپنے بکرے کو بڑھتا ہوا خود دیکھ سکیں۔",
        },
        {
          title: "عید سے پہلے ڈیلیوری",
          description:
            "عید سے پہلے آخری ہفتے میں ہم آپ کی دہلیز تک ڈیلیوری کا بندوبست کرتے ہیں — تازہ، صحت مند اور بروقت۔",
        },
      ],
    },
    faq: {
      eyebrow: "عام سوالات",
      heading: "اہم سوالات",
      subtitle: "بُکنگ سے پہلے آپ جو کچھ پوچھنا چاہیں — سب کے جواب یہاں ہیں۔",
      items: [
        {
          question: "ماہانہ دیکھ بھال کی فیس میں کیا کچھ شامل ہے؟",
          answer:
            "ماہانہ دیکھ بھال کی فیس (Rs 11,000–14,000) میں مکمل خوراک، ویٹرنری معائنہ، صفائی ستھرائی اور ہمارے فارم پر رہائش شامل ہے۔ آپ کو اپنے بکرے کی ماہانہ تصاویر اور ویڈیو اپڈیٹس ملتی ہیں تاکہ آپ اس کی پیش رفت دیکھ سکیں۔",
        },
        {
          question: "اگر بکرا بیمار ہو جائے یا مر جائے تو کیا ہوگا؟",
          answer:
            "بیماری کی صورت میں (جو شاذ و نادر ہوتی ہے) ہم تمام ویٹرنری اخراجات بغیر کسی اضافی معاوضے کے برداشت کرتے ہیں۔ اگر بکرا بیماری کے باعث فوت ہو جائے تو اب تک ادا کی گئی کل رقم کا 50% واپس کر دیا جاتا ہے۔ مکمل شرائط ہمارے بُکنگ معاہدے میں موجود ہیں۔",
        },
        {
          question: "کیا میں اپنے بکرے کو دیکھنے کے لیے فارم آ سکتا ہوں؟",
          answer:
            "جی ہاں — اپائنٹمنٹ کے ساتھ فارم کا دورہ خوش آئند ہے۔ ہم فارم کے شیڈول کے مطابق وقت طے کریں گے اور آپ کے بکرے کو آپ کے لیے تیار رکھیں گے۔",
        },
        {
          question: "عید سے پہلے ڈیلیوری کیسے ہوتی ہے؟",
          answer:
            "ہم آپ کے علاقے کے مطابق Rs 5,000 یا اس سے کم کی مقررہ فیس پر آپ کی دہلیز یا قریب ترین آسان مقام تک ڈیلیوری کا بندوبست کرتے ہیں۔ ڈیلیوری عید سے پہلے آخری ہفتے میں طے کی جاتی ہے تاکہ آپ کا بکرا تازہ اور بروقت پہنچے۔",
        },
        {
          question: "اگر میرا بکرا مر جائے تو؟",
          answer:
            "ہماری ٹیم میں تجربہ کار ویٹرنری ڈاکٹرز موجود ہیں جو ہر طبی مسئلے کو سنبھالتے ہیں، اور ساتھ ہی خون اور فضلے کی لیبارٹری سہولت بھی دستیاب ہے۔ اس کے باوجود اگر (شاذ و نادر) جانور ضائع ہو جائے تو ہم نقصان کا 50% آپ کے ساتھ بانٹتے ہیں۔",
        },
        {
          question: "آپ کے پاس کون سی نسلیں ہیں؟",
          answer:
            "ہمارے پاس عام طور پر مکھی چینا اور راجن پوری نسلیں ہوتی ہیں، لیکن درخواست پر دیگر نسلوں کا بندوبست بھی کیا جا سکتا ہے۔",
        },
        {
          question: "بُکنگ کیسے کروں؟",
          answer:
            "واٹس ایپ پر ہم سے رابطہ کریں، اپنی پسند کا جانور منتخب کریں (یا اپنا جانور بھیجیں)، اور بس — پالائی شروع!",
        },
      ],
    },
    cta: {
      heading: "اپنا قربانی کا بکرا بُک کروانے کے لیے تیار ہیں؟",
      subtitle: "ویڈیو کے ذریعے دستیاب بکرے دیکھیں اور جگہیں ختم ہونے سے پہلے اپنی بُکنگ پکی کریں۔",
      button: "واٹس ایپ پر رابطہ کریں",
      waHref: `${WA}?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%D8%8C%20%D9%85%DB%8C%DA%BA%20%D9%86%DB%92%20%D8%A2%D9%BE%20%DA%A9%DB%8C%20%D9%88%DB%8C%D8%A8%20%D8%B3%D8%A7%D8%A6%D9%B9%20%D8%AF%DB%8C%DA%A9%DA%BE%DB%8C%20%D8%A7%D9%88%D8%B1%20%D9%85%D8%AC%DA%BE%DB%92%20%D9%BE%D8%A7%D9%84%D8%A7%D8%A6%DB%8C%20%D9%85%DB%8C%DA%BA%20%D8%AF%D9%84%DA%86%D8%B3%D9%BE%DB%8C%20%DB%81%DB%92%DB%94`,
    },
    footer: {
      tagline: "قربانی آپ کی، ذمہ داری ہماری۔",
      copyright: "© 2026 Alpha Farms · A Maveshi Farms company",
    },
    pricing: {
      eyebrow: "خرچ کیسے بنتا ہے",
      heading: "ایک بار خریدیں، ماہانہ دیکھ بھال، اور عید پر وصول کریں۔",
      totalByEid: "عید تک کل خرچ",
      replay: "دوبارہ چلائیں",
      goatPrice: "بکرے کی قیمت",
      monthsOfCare: "دیکھ بھال کے مہینے",
      monthsUnit: "مہینے",
      weightMarker: "وزن > 70 کلو",
      perMo: "/ ماہ",
      reserve: "بُکنگ",
      payOnce: "ایک بار {price} ادا کریں",
      eidDelivered: "عید · ڈیلیور",
      atYourDoor: "صحت مند، آپ کے دروازے پر",
      goatWord: "بکرا",
      overThreshold: "(≥ 70 کلو)",
      totalWord: "کل",
      cards: {
        goatPriceLabel: "بکرے کی قیمت",
        goatPriceValue: "Rs 55,000 سے شروع",
        goatPriceDesc:
          "ایک بار، بُکنگ کے وقت طے ہوتی ہے۔ نسل، وزن اور عمر کے مطابق مختلف — ہر بکرے پر درج ہوتی ہے۔",
        monthlyLabel: "ماہانہ دیکھ بھال",
        monthlyValue: "Rs 11,000–14,000 / ماہ",
        under70: "70 کلو سے کم",
        over70: "70 کلو سے زیادہ",
        light: "Rs 11,000 / ماہ",
        heavy: "Rs 14,000 / ماہ",
        monthlyDesc:
          "فی بکرا، عید تک ماہانہ بل۔ اس میں خوراک، پانی، رہائش، ویکسینیشن اور ویٹرنری علاج شامل ہیں۔",
        deliveryLabel: "ڈیلیوری",
        deliveryValue: "Rs 5,000 یا اس سے کم",
        deliveryDesc:
          "بڑے شہروں میں عید سے 3–5 دن پہلے ڈیلیوری۔ دیگر شہروں میں اصل ٹرانسپورٹ لاگت پر۔",
      },
    },
  },
};
