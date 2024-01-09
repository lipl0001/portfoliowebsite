// Menu lavet af Mikkel og chat gbt //
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    burger.classList.remove("active");
    nav.classList.remove("active");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
