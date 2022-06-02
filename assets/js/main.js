const navToggle = document.querySelector(".nav-toggle");
const topHeader = document.querySelector(".top-header");
const body = document.querySelector("body");
const navToggleBar = document.querySelector(".nav-toggle-bar");

navToggle.addEventListener("click", () => {
  topHeader.classList.toggle("side-nav");
});

body.addEventListener("click", (e) => {
  if (e.target !== navToggleBar) {
    topHeader.classList.remove("side-nav");
  }
});
