//console.log("hallo");
let btn = document.getElementById("dark-btn");
let btnsun = document.getElementById("sun");
let btnmoon = document.getElementById("moon");
let nav = document.getElementById("nav");
let resume = document.getElementById("btn-resume");
let git = document.getElementById("btn-git");
let aresume = document.getElementById("a-resume");
let agit = document.getElementById("a-git");

let btn1 = document.getElementById("mobile-btn");
let ul = document.getElementById("ul");
let Home = document.getElementById("Home");
let name = document.getElementById("name");
let Skill = document.getElementById("Tach-Skill");
let Projects = document.getElementById("Projects");
let About = document.getElementById("About");
let Contact = document.getElementById("Contact-Me");
let x = document.getElementById("x");
let m = document.getElementById("m");

let btn2 = document.querySelector(".visit");
let btn3 = document.querySelector(".visit1");
let btn4 = document.querySelector(".visit2");
let btn5 = document.querySelector(".visit3");
let btn6 = document.querySelector(".visit4");

btn.addEventListener("click", () => {
  document.body.classList.toggle("day");
  resume.classList.toggle("button-light");
  aresume.classList.toggle("a1");
  git.classList.toggle("button-light");
  agit.classList.toggle("a1");
  nav.classList.toggle("bg-day");
  ul.classList.toggle("bg-day");
  btnsun.classList.toggle("display-none");
  btnmoon.classList.toggle("display-none");
});

btn1.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn2.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn3.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn4.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn5.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn6.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  Skill.classList.toggle("hidden");
  Projects.classList.toggle("hidden");
  About.classList.toggle("hidden");
  Contact.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

//CDN
var typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});

//CDN
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
