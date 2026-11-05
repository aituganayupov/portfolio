/* ============================================================
   ДАННЫЕ — редактируйте только эти массивы, вёрстку трогать не нужно
   ============================================================ */

// Мероприятия, кейсы и проекты.
// tag — любой текст; фильтры строятся автоматически из тегов.
const events = [
  {
    title: "Название кейс-чемпионата",
    date: "Октябрь 2026",
    tag: "Кейс-чемпионат",
    description: "Короткое описание: задача, роль в команде, результат."
  },
  {
    title: "Название волонтёрского мероприятия",
    date: "Сентябрь 2026",
    tag: "Волонтёрство",
    description: "Чем занимался, сколько часов, чему научился."
  },
  {
    title: "Название проекта",
    date: "Ноябрь 2026",
    tag: "Проект",
    description: "Что сделал, какие инструменты использовал, ссылка на результат."
  }
];

// Достижения. photo — путь к картинке, например "assets/kms.jpg" (пусто = заглушка).
const achievements = [
  {
    year: "20XX",
    title: "Звание КМС по тхэквондо",
    description: "Кандидат в мастера спорта.",
    photo: ""
  },
  {
    year: "20XX",
    title: "Чёрный пояс по тхэквондо",
    description: "Сдан экзамен на чёрный пояс.",
    photo: ""
  },
  {
    year: "20XX",
    title: "Призёр первенства России",
    description: "Укажите возрастную группу, весовую категорию и место.",
    photo: ""
  },
  {
    year: "20XX",
    title: "Сборная России",
    description: "Укажите, в каком качестве и в какие годы (уточните формулировку).",
    photo: ""
  },
  {
    year: "2026",
    title: "264 часа волонтёрства",
    description: "Верифицированные волонтёрские часы.",
    photo: ""
  },
  {
    year: "2026",
    title: "Поступление в НИУ ВШЭ",
    description: "Санкт-Петербургская школа экономики и менеджмента, «Аналитика в экономике».",
    photo: ""
  }
];

// Фото для блока «Спорт» (пустой массив = 3 заглушки).
const sportPhotos = [
  // "assets/sport1.jpg",
  // "assets/sport2.jpg",
  // "assets/sport3.jpg"
];

/* ============================================================
   ЛОГИКА
   ============================================================ */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// --- Мероприятия + фильтры ---
const filtersEl = document.getElementById("eventFilters");
const cardsEl = document.getElementById("eventCards");

cardsEl.innerHTML = events.map(e => `
  <article class="card reveal" data-tag="${esc(e.tag)}">
    <div class="card__top"><span class="card__date">${esc(e.date)}</span><span class="tag">${esc(e.tag)}</span></div>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.description)}</p>
  </article>`).join("");

const tags = ["Все", ...new Set(events.map(e => e.tag))];
filtersEl.innerHTML = tags.map((t, i) =>
  `<button class="chip${i === 0 ? " active" : ""}" data-filter="${esc(t)}">${esc(t)}</button>`).join("");

filtersEl.addEventListener("click", ev => {
  const btn = ev.target.closest(".chip");
  if (!btn) return;
  filtersEl.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === btn));
  const f = btn.dataset.filter;
  cardsEl.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hide", f !== "Все" && c.dataset.tag !== f));
});

// --- Достижения ---
document.getElementById("achTimeline").innerHTML = achievements.map(a => `
  <article class="ach reveal">
    <div>
      <div class="ach__year">${esc(a.year)}</div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.description)}</p>
    </div>
    <div class="ach__photo">${a.photo ? `<img src="${esc(a.photo)}" alt="${esc(a.title)}" loading="lazy">` : "Фото грамоты / медали"}</div>
  </article>`).join("");

// --- Галерея спорта ---
const gallery = document.getElementById("sportGallery");
const slots = sportPhotos.length ? sportPhotos : [null, null, null];
gallery.innerHTML = slots.map(p =>
  `<div class="gallery__item">${p ? `<img src="${esc(p)}" alt="Тхэквондо" loading="lazy">` : "Фото"}</div>`).join("");

// --- Прочее ---
document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
});

// Подсветка текущего раздела в меню
const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...links.querySelectorAll("a")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting)
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// Плавное появление блоков
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 80 + "ms";
  io.observe(el);
});
