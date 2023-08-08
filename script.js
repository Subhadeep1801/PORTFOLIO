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
let x = document.getElementById("x");
let m = document.getElementById("m");

let btn2 = document.querySelector(".visit");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  resume.classList.toggle("button-dark");
  aresume.classList.toggle("a2");
  git.classList.toggle("button-dark");
  agit.classList.toggle("a2");
  nav.classList.toggle("bg-dark");
  ul.classList.toggle("bg-dark");
  btnsun.classList.toggle("display-none");
  btnmoon.classList.toggle("display-none");
});

btn1.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
  x.classList.toggle("display-none");
  m.classList.toggle("display-none");
  btn.classList.toggle("display-none");
});

btn2.addEventListener("click", () => {
  ul.classList.toggle("visible");
  Home.classList.toggle("hidden");
  nav.classList.toggle("hidden");
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
