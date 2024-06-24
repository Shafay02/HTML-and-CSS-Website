const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const navIcon = document.querySelector(".nav__icon-wrapper");
const nav = document.querySelector(".nav");
navIcon.addEventListener("click", function () {
  nav.classList.toggle("nav--expanded");
});
