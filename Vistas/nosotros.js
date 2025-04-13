document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Se muestra al entrar en la vista
        } else {
          entry.target.classList.remove("visible"); // Se oculta al salir de la vista
        }
      });
    },
    { threshold: 0.15 }
  ); // Se activa cuando el 20% del elemento es visible

  elements.forEach((element) => observer.observe(element));
});
