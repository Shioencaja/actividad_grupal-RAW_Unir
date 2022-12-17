/* Inicio del controlador del formulario */

const form = document.getElementById("form");

function onSubmit(e) {
  e.preventDefault();
  console.log("enviando");
}

form.addEventListener("submit", onSubmit);
/*Fin de controlador del formulario*/

/**Inicio del controlador del botón menú */

let navButton = document.querySelector(".menu");
let navBar = document.getElementById("nav");

//Un event listener para saber cuándo se hace click al botón menú, luego agregará o quitará
//un atributo que activará las propiedades CSS para la animación

navButton.addEventListener("click", function () {
  let expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);

  let mostrar = navBar.getAttribute("mostrar") === "true" || false;
  navBar.setAttribute("mostrar", !mostrar);

  !mostrar ? (navBar.style.display = "flex") : (navBar.style.display = "none");
});

/*Fin del controlador del botón menú */

/*Inicio del loader que usa un Sprite SVG */
const Loader = document.getElementById("loader");

function loadSite() {
  Loader.style.display = "none";
}
//una event listerner para que al terminar de cargar la página agregue un display none al loader
window.addEventListener(
  "load",
  () => {
    setTimeout(loadSite, 2500); //setTimeout para que aún si la velocidad de carga de la página es rápida, se pueda apreciar el loader
  },
  false
);
/*Fin del loader que usa un Sprite SVG */
