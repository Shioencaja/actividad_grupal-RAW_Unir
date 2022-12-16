const form = document.getElementById("form");
const slide = document.getElementsByClassName("slide");

function onSubmit(e) {
  e.preventDefault();
  console.log("enviando");
}

var observer = new IntersectionObserver(
  function (entries) {
    entries[0].isIntersecting
      ? console.log("Elemento visible")
      : console.log("Elemento no visible");
  },
  { threshold: [1] }
);

observer.observe(document.querySelector("#primer_slide"));

form.addEventListener("submit", onSubmit);

var navButton = document.querySelector(".menu");
var navBar = document.getElementById("nav");

navButton.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);

  let mostrar = navBar.getAttribute("mostrar") === "true" || false;
  navBar.setAttribute("mostrar", !mostrar);

  !mostrar ? (navBar.style.display = "flex") : (navBar.style.display = "none");
});
