/* Логика сайта. Данные лежат в data.js */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Контакты
document.querySelectorAll("[data-contact]").forEach(a => {
  const key = a.dataset.contact;
  const value = CONTACTS[key];
  if (!value) return;
  a.href = key === "email" ? "mailto:" + value : value;
  if (a.hasAttribute("data-show-text") && key === "email") a.textContent = value;
});

// Мероприятия
document.getElementById("eventCards").innerHTML = events.map(e => `
  <article class="card reveal">
    ${e.photo ? `<img class="card__photo" src="${esc(e.photo)}" alt="${esc(e.title)}" loading="lazy">` : ""}
    <div class="card__top"><span class="card__date">${esc(e.date)}</span><span class="card__place">${esc(e.place)}</span></div>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.description)}</p>
  </article>`).join("");

// Проекты и кейс-чемпионаты
const projectFilters = document.getElementById("projectFilters");
const projectCards = document.getElementById("projectCards");

projectCards.innerHTML = projects.map(p => `
  <article class="card reveal" data-type="${esc(p.type)}">
    <div class="card__top"><span class="tag">${esc(p.type)}</span><span class="card__date">${esc(p.status)}</span></div>
    <h3>${esc(p.title)}</h3>
    <p class="card__role">${esc(p.role)}</p>
    <p>${esc(p.description)}</p>
    ${p.link ? `<a class="card__link" href="${esc(p.link)}" target="_blank" rel="noopener">Открыть</a>` : ""}
  </article>`).join("");

projectFilters.addEventListener("click", ev => {
  const btn = ev.target.closest(".chip");
  if (!btn) return;
  projectFilters.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === btn));
  const f = btn.dataset.filter;
  projectCards.querySelectorAll(".card").forEach(c =>
    c.classList.toggle("hide", f !== "Все" && c.dataset.type !== f));
});

// Достижения
document.getElementById("achTimeline").innerHTML = achievements.map(a => `
  <article class="ach reveal${a.photo ? " has-photo" : ""}">
    <div>
      <div class="ach__year">${esc(a.year)}</div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.description)}</p>
    </div>
    ${a.photo ? `<div class="ach__photo"><img src="${esc(a.photo)}" alt="${esc(a.title)}" loading="lazy"></div>` : ""}
  </article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// Меню
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const navAnchors = [...links.querySelectorAll("a")];

addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
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

// Появление блоков
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 3) * 80 + "ms";
  io.observe(el);
});
