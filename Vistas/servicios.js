// Capturamos todas las tarjetas
const tarjetas = document.querySelectorAll(".custom-card");

// Iteramos cada tarjeta para agregar el evento de click
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", function () {
    const titulo = tarjeta.getAttribute("data-servicio");
    const descripcion = tarjeta.getAttribute("data-descripcion");

    // Llenamos el modal con la información dinámica
    document.getElementById("modalTitulo").textContent = titulo;
    document.getElementById("modalDescripcion").textContent = descripcion;

    // Mostramos el modal
    const modal = new bootstrap.Modal(document.getElementById("servicioModal"));
    modal.show();
  });
});
