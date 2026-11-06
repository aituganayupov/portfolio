/* ============================================================
   ВСЕ ДАННЫЕ САЙТА В ОДНОМ МЕСТЕ
   Меняйте только этот файл, вёрстку трогать не нужно.

   Английская версия: у каждой карточки есть блок en с переводом.
   Если en не заполнен, на английской версии покажется русский текст.
   ============================================================ */

// 1. Контакты. Работают и в шапке, и в блоке «Контакты».
const CONTACTS = {
  telegram: "https://t.me/a3a9t",
  email: "ataiupov@edu.hse.ru",
  github: "", // пусто = кнопка GitHub скрыта
  // Резюме: положите PDF в assets и впишите путь, например "assets/resume.pdf".
  // Пока пусто, кнопка «Резюме» скрыта.
  resume: "assets/resume.pdf"
};

// Навыки: скромный блок в разделе «О себе»
const SKILLS = {
  hard: ["Excel", "PowerPoint", "Python", "Figma"],
  soft: {
    ru: ["Структурирование задач", "Презентация решений", "Работа в команде", "Дисциплина"],
    en: ["Problem structuring", "Presenting solutions", "Teamwork", "Discipline"]
  }
};

// 2. Мероприятия: где я был и в чём участвовал.
// photos - необязательное поле, список картинок, например ["assets/events/forum.webp"].
// Если фото несколько, в карточке появится листалка.
// link и linkText - необязательная ссылка под описанием (например "#projects" на раздел сайта).
// takeaway - необязательная выделенная строка «Что я вынес».
const events = [
  {
    title: "Case Study Autumn'26",
    date: "Октябрь 2026",
    place: "Санкт-Петербург",
    description: "В октябре я прошёл отбор на Case Study Autumn'26 - интенсив, который учит решать бизнес-задачи. Здесь учат думать как аналитик и стратег и защищать свои идеи, разбирают реальные кейсы крупных компаний и готовят к главным кейс-чемпионатам страны. Обучение очень помогло, а ещё я нашёл здесь много друзей. С частью из них мы собрали команду и вместе выступили на кейс-чемпионате. Отдельное уважение организаторам: это профессионалы, которые отлично знают своё дело.",
    link: "#projects",
    linkText: "Наш кейс-чемпионат в разделе «Проекты и кейсы»",
    takeaway: "Любую бизнес-задачу можно разложить на дерево причин, а сильное решение держится на структуре и цифрах, а не на красивых словах.",
    photos: [
      "assets/events/casestudy-1.webp",
      "assets/events/casestudy-2.webp",
      "assets/events/casestudy-3.webp",
      "assets/events/casestudy-4.webp",
      "assets/events/casestudy-5.webp",
      "assets/events/casestudy-6.webp",
      "assets/events/casestudy-7.webp",
      "assets/events/casestudy-8.webp",
      "assets/events/casestudy-9.webp",
      "assets/events/casestudy-10.webp"
    ],
    en: {
      date: "October 2026",
      place: "St. Petersburg",
      description: "In October I got selected for Case Study Autumn'26, an intensive program on solving business problems. It teaches you to think like an analyst and strategist and to defend your ideas, with real cases from major companies and preparation for the country's top case competitions. The program helped me a lot, and I also made many friends there. Some of them became my team, and together we took part in a case competition. Huge respect to the organizers: true professionals who really know what they are doing.",
      linkText: "Our case competition in Projects & cases",
      takeaway: "Any business problem can be broken down into an issue tree, and a strong solution rests on structure and numbers, not on nice words."
    }
  },
  {
    title: "Открытая лекция Дмитрия Кузнецова (Mozi J)",
    date: "8 октября 2026",
    place: "ВШЭ x Бизнес-клуб, Санкт-Петербург",
    description: "Дмитрий - основатель ювелирного бренда Mozi Jewelry, его украшения носят Тимати, OG Buda, Егор Крид, Слава Мэрлоу, kizaru, OBLADAET и другие рэп-исполнители. Он рассказал, как прошёл путь от 50 тысяч рублей до сильного бренда с крупными клиентами, как выстраивает отношения с артистами от первого контакта до коллабораций и как устроен бизнес изнутри: производство, ценообразование, работа с медийными клиентами.",
    takeaway: "Большой бизнес можно начать с небольших денег. Решают упорство, репутация и умение выстраивать отношения с людьми.",
    photos: ["assets/events/mozi-1.webp", "assets/events/mozi-2.webp"],
    en: {
      title: "Open lecture by Dmitry Kuznetsov (Mozi J)",
      date: "October 8, 2026",
      place: "HSE x Business Club, St. Petersburg",
      takeaway: "A big business can start with little money. What matters is persistence, reputation and the ability to build relationships with people.",
      description: "Dmitry is the founder of the jewelry brand Mozi Jewelry, worn by Timati, OG Buda, Egor Kreed, Slava Marlow, kizaru, OBLADAET and other Russian rap artists. He shared how he grew the business from 50,000 rubles into a strong brand with major clients, how he builds relationships with artists from the first contact to collaborations, and how the business works from the inside: production, pricing and working with media clients."
    }
  },
  {
    title: "GIS DAYS 2026",
    date: "1 октября 2026",
    place: "МТС Live Холл, Санкт-Петербург",
    description: "Ежегодный форум по информационной безопасности, который уже 9 лет собирает экспертов, регуляторов, бизнес, интеграторов и разработчиков. Это три дня открытого диалога о современных киберугрозах и о том, как защищать бизнес, государство и ИТ-инфраструктуру. На форуме был специальный трек для студентов и начинающих специалистов и бизнес-трек о стратегии и управлении ИБ. Я пообщался с профессионалами, узнал о карьерных возможностях в сфере ИБ и послушал экспертные дискуссии о будущем отрасли. Отдельно впечатлил масштаб: на сцене выступал популярный рэпер Toxi$, и это хорошо показывает уровень организации.",
    takeaway: "Информационная безопасность - это не только технологии, но и бизнес-решения, и аналитикам в этой сфере тоже есть где себя проявить.",
    photos: [
      "assets/events/gisdays-1.webp",
      "assets/events/gisdays-2.webp",
      "assets/events/gisdays-3.webp",
      "assets/events/gisdays-4.webp",
      "assets/events/gisdays-5.webp"
    ],
    en: {
      title: "GIS DAYS 2026",
      date: "October 1, 2026",
      place: "MTS Live Hall, St. Petersburg",
      takeaway: "Information security is not only about technology but also about business decisions, and there is room for analysts in this field too.",
      description: "An annual information security forum that has been bringing together experts, regulators, businesses, integrators and developers for 9 years. Three days of open dialogue about modern cyber threats and how to protect businesses, the state and IT infrastructure. The forum had a special track for students and early-career specialists and a business track on security strategy and management. I talked to professionals, learned about career opportunities in information security and listened to expert discussions about the future of the industry. The scale was impressive too: the popular rapper Toxi$ performed on stage, which shows the level of the organization."
    }
  }
];

// 3. Проекты и кейс-чемпионаты.
// type: "Проект" или "Кейс-чемпионат" (от этого работает фильтр, на английский тип переводится сам).
// link и linkText - необязательная ссылка и её подпись. photos - необязательный список фото.
const projects = [
  {
    title: "Инкубатор КОЛЛАБ 2к26 от ВкусВилл: мармелад с креатином",
    type: "Проект",
    role: "Аналитик, команда НИУ ВШЭ x ИТМО",
    status: "Топ-5, продукт в разработке",
    description: "Это как стартап-инкубатор, только для еды: полный путь создания инновационного продукта питания от идеи до прототипа. Мы делаем жевательный мармелад с креатином в разовых пакетиках. Берёшь, ешь и всё: без шейкера, без порошка и без противного вкуса. В отбор прошли только 5 команд со всей страны и СНГ, и наша команда в их числе. Сейчас мы на этапе производства, продукт в разработке, так что ждите новостей.",
    link: "https://t.me/logos_marmelad_creatin_hseitmo",
    linkText: "Наш Telegram-канал о проекте",
    featured: true, // широкая карточка: фото слева, текст справа
    photos: ["assets/projects/vkusvill-2.webp", "assets/projects/vkusvill-1.webp"],
    en: {
      title: "VkusVill COLLAB 2k26 Incubator: creatine gummies",
      role: "Analyst, HSE x ITMO team",
      status: "Top 5, in development",
      description: "It's like a startup incubator, but for food: the full journey of creating an innovative food product from idea to prototype. We're making chewable creatine gummies in single-serve packs. Just grab and eat: no shaker, no powder and no nasty taste. Only 5 teams from across Russia and the CIS were selected, and our team is one of them. We're now at the production stage and the product is in development, so stay tuned.",
      linkText: "Our Telegram channel about the project"
    }
  },
  {
    title: "CUP MOSCOW: кейс ВТБ «Система противодействия мошенничеству»",
    type: "Кейс-чемпионат",
    role: "Аналитик, финансист, команда Case Cracken",
    status: "Ждём результатов",
    description: "Вместе с командой Case Cracken мы приняли участие в CUP MOSCOW, одном из самых популярных кейс-чемпионатов страны. Решали кейс от банка ВТБ: как построить систему противодействия мошенничеству, чтобы деньги клиентов были под защитой. Сейчас ждём результатов, но на этом участие в кейс-чемпионатах не заканчивается. Это только начало.",
    link: "",
    photos: ["assets/projects/cupmoscow-1.webp", "assets/projects/cupmoscow-2.webp"],
    en: {
      title: "CUP MOSCOW: VTB case \"Anti-fraud system\"",
      role: "Analyst, finance, team Case Cracken",
      status: "Awaiting results",
      description: "Together with my team Case Cracken I took part in CUP MOSCOW, one of the most popular case competitions in Russia. We worked on a case from VTB Bank: how to build an anti-fraud system that keeps customers' money safe. We're waiting for the results now, but this is not the end of my case competition journey. It's only the beginning."
    }
  },
];

// 4. Достижения: спортивные и учебные.
// year - год или короткая подпись (например «Тхэквондо»).
// photo - необязательное поле, фото грамоты или медали.
const achievements = [
  {
    year: "Тхэквондо",
    title: "Призёр первенства России по тхэквондо",
    description: "Первенство России среди юношей и девушек 12-14 лет, Белгород Арена.",
    photo: "assets/achievements/sport-russia.webp",
    photoTall: true,
    en: {
      year: "Taekwondo",
      title: "Medalist of the Russian Taekwondo Championship",
      description: "Russian Championship for boys and girls aged 12-14, Belgorod Arena."
    }
  },
  {
    year: "Тхэквондо",
    title: "Многократный чемпион Республики Башкортостан",
    description: "Чемпион и призёр всероссийских и международных соревнований, многократный стипендиат Министерства спорта. За 13 лет в тхэквондо представлял свой регион на многих крупных стартах.",
    photo: "assets/achievements/sport-medals.webp",
    photoTall: true, // вертикальное фото показываем целиком
    en: {
      year: "Taekwondo",
      title: "Multiple champion of the Republic of Bashkortostan",
      description: "Champion and medalist of national and international competitions, multiple-time scholarship holder of the Ministry of Sport. Over 13 years in taekwondo I've represented my region at many major tournaments."
    }
  },
  {
    year: "Тхэквондо",
    title: "КМС и чёрный пояс",
    description: "Занимаюсь тхэквондо уже 13 лет. Кандидат в мастера спорта и обладатель чёрного пояса.",
    photo: "",
    en: {
      year: "Taekwondo",
      title: "Candidate Master of Sports and black belt",
      description: "13 years in taekwondo. Candidate Master of Sports and black belt holder."
    }
  },
  {
    year: "2026",
    title: "Диплом BASIC: Кейс-обучение Осень'26",
    description: "Диплом Кейс-клуба Питерской Вышки, выдан 1 ноября 2026. Прослушал курс лекций, прошёл воркшопы и подготовку к кейс-чемпионатам, получил навыки анализа данных, структурирования информации и дизайна от победителей кейс-чемпионатов и опытных менторов.",
    photo: "assets/achievements/casestudy-diploma.webp",
    en: {
      title: "BASIC diploma: Case Study Autumn'26",
      description: "Diploma from the HSE St. Petersburg Case Club, issued November 1, 2026. Completed a lecture course, workshops and case competition training, gaining skills in data analysis, structuring information and design from case competition winners and experienced mentors."
    }
  },
  {
    year: "2026",
    title: "Прошёл отбор в инкубатор КОЛЛАБ 2К26 от ВкусВилл",
    description: "Сертификат участника. Вместе с командой НИУ ВШЭ x ИТМО прошли отбор с проектом мармелада с креатином: в инкубатор взяли только 5 команд со всей страны и СНГ.",
    photo: "assets/achievements/vkusvill-cert.webp",
    en: {
      title: "Selected for the VkusVill COLLAB 2K26 incubator",
      description: "Participant certificate. Together with the HSE x ITMO team we got selected with our creatine gummies project: only 5 teams from across Russia and the CIS made it into the incubator."
    }
  },
  {
    year: "Учёба",
    title: "Поступил в НИУ ВШЭ без вступительных испытаний",
    description: "Окончил школу с медалью «За особые успехи в учении» II степени. За успехи в учёбе награждался премией Главы Республики Башкортостан и Министерства просвещения. Победитель и призёр олимпиад по обществознанию, истории и математике.",
    photo: "",
    en: {
      year: "Studies",
      title: "Admitted to HSE University without entrance exams",
      description: "Graduated from school with a silver medal for academic excellence. Received awards from the Head of the Republic of Bashkortostan and the Ministry of Education for academic achievements. Winner and medalist of olympiads in social studies, history and mathematics."
    }
  }
];
