const form = document.getElementById("form");
const slide = document.getElementsByClassName("slide");

function onSubmit(e) {
  e.preventDefault();
  console.log("enviando");
}

let observer = new IntersectionObserver(
  function (entries) {
    entries[0].isIntersecting
      ? console.log("Elemento visible")
      : console.log("Elemento no visible");
  },
  { threshold: [1] }
);

observer.observe(document.querySelector("#primer_slide"));

form.addEventListener("submit", onSubmit);

let navButton = document.querySelector(".menu");
let navBar = document.getElementById("nav");

navButton.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);

  let mostrar = navBar.getAttribute("mostrar") === "true" || false;
  navBar.setAttribute("mostrar", !mostrar);

  !mostrar ? (navBar.style.display = "flex") : (navBar.style.display = "none");
});

const Loader = document.getElementById("loader");

function loaderSite() {
  Loader.style.display = "none";
}
window.addEventListener(
  "load",
  () => {
    setTimeout(loaderSite, 2500);
  },
  false
);
