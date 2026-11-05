/* Логика сайта. Данные лежат в data.js, английские тексты в i18n.js */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Язык: сохраняется в браузере, по умолчанию русский
let lang = "ru";
try { if (localStorage.getItem("lang") === "en") lang = "en"; } catch (e) {}

// Поле карточки на текущем языке (если перевода нет, берём русский)
const tr = (item, field) => (lang === "en" && item.en && item.en[field]) || item[field];
const ui = key => UI[lang][key];

// Контакты
document.querySelectorAll("[data-contact]").forEach(a => {
  const key = a.dataset.contact;
  const value = CONTACTS[key];
  if (!value) { a.hidden = true; return; }
  a.href = key === "email" ? "mailto:" + value : value;
  if (a.hasAttribute("data-show-text") && key === "email") a.textContent = value;
});

// Отрисовка списка; если массив пустой, показываем короткую подпись
const fill = (id, items, empty, tpl) => {
  document.getElementById(id).innerHTML = items.length
    ? items.map(tpl).join("")
    : `<p class="empty reveal">${empty}</p>`;
};

const projectFilters = document.getElementById("projectFilters");
const projectCards = document.getElementById("projectCards");
let currentFilter = "Все";

const applyFilter = () => {
  projectFilters.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter === currentFilter));
  projectCards.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hide", currentFilter !== "Все" && c.dataset.type !== currentFilter));
};

// Фото в карточке: одно или листалка из нескольких
const slider = (photos, alt) => {
  if (!photos.length) return "";
  const imgs = photos.map((src, i) =>
    `<img class="${i === 0 ? "on" : ""}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`).join("");
  if (photos.length === 1) return `<div class="card__photo">${imgs}</div>`;
  const dots = photos.map((_, i) => `<span class="${i === 0 ? "on" : ""}"></span>`).join("");
  return `<div class="card__photo slider" data-i="0">${imgs}
    <button class="slider__btn prev" aria-label="←">‹</button>
    <button class="slider__btn next" aria-label="→">›</button>
    <div class="slider__dots">${dots}</div></div>`;
};

const slide = (s, step) => {
  const imgs = s.querySelectorAll("img"), dots = s.querySelectorAll(".slider__dots span");
  const i = (+s.dataset.i + step + imgs.length) % imgs.length;
  s.dataset.i = i;
  imgs.forEach((im, k) => im.classList.toggle("on", k === i));
  dots.forEach((d, k) => d.classList.toggle("on", k === i));
};

// Просмотр фото на весь экран
const lb = document.createElement("div");
lb.className = "lightbox";
lb.innerHTML = `<img alt=""><button class="lb__close" aria-label="×">×</button>
  <button class="lb__btn prev" aria-label="←">‹</button><button class="lb__btn next" aria-label="→">›</button>
  <div class="lb__count"></div>`;
document.body.appendChild(lb);
const lbImg = lb.querySelector("img");
let lbList = [], lbIndex = 0;

const lbShow = () => {
  lbImg.src = lbList[lbIndex];
  const many = lbList.length > 1;
  lb.querySelectorAll(".lb__btn").forEach(b => b.hidden = !many);
  lb.querySelector(".lb__count").textContent = many ? `${lbIndex + 1} / ${lbList.length}` : "";
};
const lbOpen = (list, i) => {
  lbList = list; lbIndex = i; lbShow();
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
};
const lbClose = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
const lbStep = step => { lbIndex = (lbIndex + step + lbList.length) % lbList.length; lbShow(); };

addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lbClose();
  if (e.key === "ArrowRight") lbStep(1);
  if (e.key === "ArrowLeft") lbStep(-1);
});

document.addEventListener("click", e => {
  const btn = e.target.closest(".slider__btn");
  if (btn) return slide(btn.closest(".slider"), btn.classList.contains("next") ? 1 : -1);

  const lbBtn = e.target.closest(".lb__btn");
  if (lbBtn) return lbStep(lbBtn.classList.contains("next") ? 1 : -1);
  if (lb.classList.contains("open") && e.target !== lbImg) return lbClose();

  // Клик по фото в карточке или в достижениях
  const box = e.target.tagName === "IMG" && e.target.closest(".card__photo, .ach__photo");
  if (box) {
    const imgs = [...box.querySelectorAll("img")];
    lbOpen(imgs.map(im => im.getAttribute("src")), imgs.indexOf(e.target));
  }
});

// Свайп на телефоне: в листалке карточки и в просмотре на весь экран
let touchX = null;
document.addEventListener("touchstart", e => { if (e.target.closest(".slider, .lightbox")) touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener("touchend", e => {
  const s = e.target.closest(".slider, .lightbox");
  if (!s || touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) < 40) return;
  if (s === lb) lbStep(dx < 0 ? 1 : -1);
  else slide(s, dx < 0 ? 1 : -1);
});

function renderData() {
  // Мероприятия
  fill("eventCards", events, ui("empty_events"), e => {
    const photos = e.photos || (e.photo ? [e.photo] : []);
    return `
    <article class="card reveal${photos.length ? " card--media" : ""}">
      ${slider(photos, tr(e, "title"))}
      <div class="card__body">
        <div class="card__top"><span class="card__date">${esc(tr(e, "date"))}</span><span class="card__place">${esc(tr(e, "place"))}</span></div>
        <h3>${esc(tr(e, "title"))}</h3>
        <p>${esc(tr(e, "description"))}</p>
        ${e.link ? `<a class="card__link" href="${esc(e.link)}"${e.link.startsWith("#") ? "" : ' target="_blank" rel="noopener"'}>${esc(tr(e, "linkText") || ui("open"))} →</a>` : ""}
      </div>
    </article>`;
  });

  // Проекты и кейс-чемпионаты
  fill("projectCards", projects, ui("empty_projects"), p => `
    <article class="card reveal" data-type="${esc(p.type)}">
      ${slider(p.photos || [], tr(p, "title"))}
      <div class="card__top"><span class="tag">${esc(ui(p.type) || p.type)}</span><span class="card__date">${esc(tr(p, "status"))}</span></div>
      <h3>${esc(tr(p, "title"))}</h3>
      <p class="card__role">${esc(tr(p, "role"))}</p>
      <p>${esc(tr(p, "description"))}</p>
      ${p.link ? `<a class="card__link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(tr(p, "linkText") || ui("open"))} →</a>` : ""}
    </article>`);
  applyFilter();

  // Достижения
  fill("achTimeline", achievements, ui("empty_ach"), a => `
    <article class="ach reveal${a.photo ? " has-photo" : ""}">
      <div>
        <div class="ach__year">${esc(a.year)}</div>
        <h3>${esc(tr(a, "title"))}</h3>
        <p>${esc(tr(a, "description"))}</p>
      </div>
      ${a.photo ? `<div class="ach__photo"><img src="${esc(a.photo)}" alt="${esc(tr(a, "title"))}" loading="lazy"></div>` : ""}
    </article>`);
}

projectFilters.addEventListener("click", ev => {
  const btn = ev.target.closest(".chip");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  applyFilter();
});

// Переключение языка
const RU = {};
document.querySelectorAll("[data-i18n]").forEach(el => { RU[el.dataset.i18n] = el.innerHTML; });
const langToggle = document.getElementById("langToggle");
const navToggleBtn = document.getElementById("navToggle");
const metaDesc = document.querySelector('meta[name="description"]');

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === "en" ? (EN[key] || RU[key]) : RU[key];
  });
  document.title = ui("title");
  metaDesc.setAttribute("content", ui("description"));
  langToggle.textContent = ui("lang_btn");
  langToggle.setAttribute("aria-label", ui("lang_label"));
  navToggleBtn.setAttribute("aria-label", ui("menu"));
  document.getElementById("toTop").setAttribute("aria-label", ui("to_top"));
  renderData();
  observeReveal();
  restartRotation();
}

langToggle.addEventListener("click", () => {
  lang = lang === "ru" ? "en" : "ru";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyLang();
});

document.getElementById("year").textContent = new Date().getFullYear();

// Меню
const nav = document.getElementById("nav");
const links = document.getElementById("navLinks");
const navAnchors = [...links.querySelectorAll("a")];
const toTop = document.getElementById("toTop");

const progress = document.getElementById("progress");

addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 10);
  toTop.classList.toggle("show", scrollY > 600);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}, { passive: true });
navToggleBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  navToggleBtn.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); navToggleBtn.setAttribute("aria-expanded", false); }
});

// Подсветка текущего раздела
const setActive = id => navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
const sections = [...document.querySelectorAll("section[id], footer[id]")];
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) setActive(en.target.id); });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));
// Контакты внизу страницы могут не дойти до середины экрана
addEventListener("scroll", () => {
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) setActive("contacts");
}, { passive: true });

// Появление блоков: каждый раз, когда блок заходит на экран.
// Когда блок полностью ушёл с экрана, он снова прячется и в следующий раз появится заново.
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.intersectionRatio >= 0.1) en.target.classList.add("visible");
    else if (!en.isIntersecting) en.target.classList.remove("visible");
  });
}, { threshold: [0, 0.1] });

function observeReveal() {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 80 + "ms";
    io.observe(el);
  });
}

// Слова в шапке сменяют друг друга
const rotWord = document.getElementById("rotWord");
let rotTimer, rotIndex = 0;
function restartRotation() {
  clearInterval(rotTimer);
  rotIndex = 0;
  rotWord.textContent = ui("rot")[0];
  rotTimer = setInterval(() => {
    rotWord.classList.add("out");
    setTimeout(() => {
      const words = ui("rot");
      rotIndex = (rotIndex + 1) % words.length;
      rotWord.textContent = words[rotIndex];
      rotWord.classList.remove("out");
    }, 350);
  }, 2400);
}

// Подсветка карточек за курсором
document.addEventListener("pointermove", e => {
  const el = e.target.closest(".card, .fact, .ach");
  if (!el) return;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", e.clientX - r.left + "px");
  el.style.setProperty("--my", e.clientY - r.top + "px");
}, { passive: true });

applyLang();
