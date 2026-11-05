/* ============================================================
   ВСЕ ДАННЫЕ САЙТА В ОДНОМ МЕСТЕ
   Меняйте только этот файл, вёрстку трогать не нужно.

   Английская версия: у каждой карточки есть блок en с переводом.
   Если en не заполнен, на английской версии покажется русский текст.
   ============================================================ */

// 1. Контакты. Работают и в шапке, и в блоке «Контакты».
const CONTACTS = {
  telegram: "https://t.me/your_username",
  email: "your@email.com",
  github: "https://github.com/your-username",
  // Резюме: положите PDF в assets и впишите путь, например "assets/resume.pdf".
  // Пока пусто, кнопка «Резюме» скрыта.
  resume: ""
};

// 2. Мероприятия: где я был и в чём участвовал.
// photo - необязательное поле, путь к картинке, например "assets/forum.jpg".
const events = [
  {
    title: "Название мероприятия (заглушка, замените)",
    date: "Октябрь 2026",
    place: "Санкт-Петербург",
    description: "Что это было и что я оттуда вынес. Замените этот текст на свой.",
    photo: "",
    en: {
      title: "Event name (placeholder)",
      date: "October 2026",
      place: "St. Petersburg",
      description: "What it was and what I took away from it."
    }
  },
  {
    title: "Ещё одно мероприятие (заглушка, замените)",
    date: "Сентябрь 2026",
    place: "Город или онлайн",
    description: "Одна-две строки: тема, с кем общался, что понравилось.",
    photo: "",
    en: {
      title: "Another event (placeholder)",
      date: "September 2026",
      place: "City or online",
      description: "A line or two: the topic, who I met, what I liked."
    }
  },
  {
    title: "Третье мероприятие (заглушка, замените)",
    date: "Ноябрь 2026",
    place: "Город или онлайн",
    description: "Форум, лекция, встреча или хакатон. Допишите детали.",
    photo: "",
    en: {
      title: "Third event (placeholder)",
      date: "November 2026",
      place: "City or online",
      description: "A forum, lecture, meetup or hackathon."
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
    link: "https://github.com/your-username",
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
