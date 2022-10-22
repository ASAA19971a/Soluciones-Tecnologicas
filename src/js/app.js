// Preloader finalizado
window.addEventListener("load", () => {
  const contenedorLoader = document.querySelector(".contenedor-loader");
  contenedorLoader.style.opacity = 0;
  contenedorLoader.style.visibility = "hidden";
  // console.log("preloader finalizado");
});

const btnmovil = document.querySelector(".btnMovil");
const menu = document.querySelector(".menu");

btnmovil.addEventListener("click", () => {
  menu.classList.toggle("menuMovil");
});
