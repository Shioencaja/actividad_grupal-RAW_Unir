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
