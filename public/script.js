const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#menu");
const year = document.querySelector("[data-year]");

if (year) year.textContent = String(new Date().getFullYear());

function setMenu(open) {
  if (!toggle) return;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.querySelector(".sr-only").textContent = open ? "Fechar menu" : "Abrir menu";
  document.body.classList.toggle("nav-open", open);
}

toggle?.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

function onScroll() {
  header?.classList.toggle("is-stuck", window.scrollY > 8);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
