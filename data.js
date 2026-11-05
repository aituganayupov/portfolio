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
  resume: ""
};

// 2. Мероприятия: где я был и в чём участвовал.
// photos - необязательное поле, список картинок, например ["assets/events/forum.jpg"].
// Если фото несколько, в карточке появится листалка.
const events = [
  {
    title: "Открытая лекция Дмитрия Кузнецова (Mozi J)",
    date: "8 октября 2026",
    place: "ВШЭ x Бизнес-клуб, Санкт-Петербург",
    description: "Дмитрий - основатель ювелирного бренда Mozi Jewelry, его украшения носят Тимати, OG Buda, Егор Крид, Слава Мэрлоу, kizaru, OBLADAET и другие рэп-исполнители. Он рассказал, как прошёл путь от 50 тысяч рублей до сильного бренда с крупными клиентами, как выстраивает отношения с артистами от первого контакта до коллабораций и как устроен бизнес изнутри: производство, ценообразование, работа с медийными клиентами.",
    photos: ["assets/events/mozi-1.jpg", "assets/events/mozi-2.jpg"],
    en: {
      title: "Open lecture by Dmitry Kuznetsov (Mozi J)",
      date: "October 8, 2026",
      place: "HSE x Business Club, St. Petersburg",
      description: "Dmitry is the founder of the jewelry brand Mozi Jewelry, worn by Timati, OG Buda, Egor Kreed, Slava Marlow, kizaru, OBLADAET and other Russian rap artists. He shared how he grew the business from 50,000 rubles into a strong brand with major clients, how he builds relationships with artists from the first contact to collaborations, and how the business works from the inside: production, pricing and working with media clients."
    }
  },
  {
    title: "GIS DAYS 2026",
    date: "1 октября 2026",
    place: "МТС Live Холл, Санкт-Петербург",
    description: "Ежегодный форум по информационной безопасности, который уже 9 лет собирает экспертов, регуляторов, бизнес, интеграторов и разработчиков. Это три дня открытого диалога о современных киберугрозах и о том, как защищать бизнес, государство и ИТ-инфраструктуру. На форуме был специальный трек для студентов и начинающих специалистов и бизнес-трек о стратегии и управлении ИБ. Я пообщался с профессионалами, узнал о карьерных возможностях в сфере ИБ и послушал экспертные дискуссии о будущем отрасли. Отдельно впечатлил масштаб: на сцене выступал популярный рэпер Toxi$, и это хорошо показывает уровень организации.",
    photos: [
      "assets/events/gisdays-1.jpg",
      "assets/events/gisdays-2.jpg",
      "assets/events/gisdays-3.jpg",
      "assets/events/gisdays-4.jpg",
      "assets/events/gisdays-5.jpg"
    ],
    en: {
      title: "GIS DAYS 2026",
      date: "October 1, 2026",
      place: "MTS Live Hall, St. Petersburg",
      description: "An annual information security forum that has been bringing together experts, regulators, businesses, integrators and developers for 9 years. Three days of open dialogue about modern cyber threats and how to protect businesses, the state and IT infrastructure. The forum had a special track for students and early-career specialists and a business track on security strategy and management. I talked to professionals, learned about career opportunities in information security and listened to expert discussions about the future of the industry. The scale was impressive too: the popular rapper Toxi$ performed on stage, which shows the level of the organization."
    }
  }
];

// 3. Проекты и кейс-чемпионаты.
// type: "Проект" или "Кейс-чемпионат" (от этого работает фильтр, на английский тип переводится сам).
// link - необязательное поле, ссылка на результат.
const projects = [
  {
    title: "Название проекта (заглушка, замените)",
    type: "Проект",
    role: "Моя роль",
    status: "В процессе",
    description: "Коротко: что за проект, какие инструменты использовал.",
    link: "",
    en: {
      title: "Project name (placeholder)",
      role: "My role",
      status: "In progress",
      description: "In short: what the project is and which tools I used."
    }
  },
  {
    title: "Название кейс-чемпионата (заглушка, замените)",
    type: "Кейс-чемпионат",
    role: "Участник команды",
    status: "Результат или место",
    description: "Какую задачу решали и что предложили.",
    link: "",
    en: {
      title: "Case competition name (placeholder)",
      role: "Team member",
      status: "Result or place",
      description: "What problem we solved and what we proposed."
    }
  },
  {
    title: "Ещё один проект (заглушка, замените)",
    type: "Проект",
    role: "Автор",
    status: "Завершён",
    description: "Что сделал и чему научился.",
    link: "",
    en: {
      title: "Another project (placeholder)",
      role: "Author",
      status: "Completed",
      description: "What I built and what I learned."
    }
  }
];

// 4. Достижения: спортивные и учебные.
// photo - необязательное поле, фото грамоты или медали.
const achievements = [
  {
    year: "20XX",
    title: "Призёр первенства России",
    description: "Тхэквондо. Допишите возрастную группу, весовую категорию и место.",
    photo: "",
    en: {
      title: "Medalist of the Russian Championship",
      description: "Taekwondo, in my age group."
    }
  },
  {
    year: "20XX",
    title: "Звание КМС",
    description: "Кандидат в мастера спорта по тхэквондо.",
    photo: "",
    en: {
      title: "Candidate Master of Sports",
      description: "National sports title in taekwondo."
    }
  },
  {
    year: "20XX",
    title: "Чёрный пояс",
    description: "Сдал экзамен на чёрный пояс по тхэквондо.",
    photo: "",
    en: {
      title: "Black belt",
      description: "Passed the taekwondo black belt exam."
    }
  },
  {
    year: "2026",
    title: "Поступил в НИУ ВШЭ",
    description: "Санкт-Петербургская школа экономики и менеджмента, «Аналитика в экономике».",
    photo: "",
    en: {
      title: "Admitted to HSE University",
      description: "St. Petersburg School of Economics and Management, Analytics in Economics."
    }
  }
];
