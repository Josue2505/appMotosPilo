class MiHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <header>
            <nav class="navbar navbar-expand-lg" style="background-color: #B22222;">
              <div class="container">
                  <!-- Logo o Nombre del Sitio -->
                  <a class="navbar-brand fw-bold text-white" href="Home.html">Motos Pilo</a>

                  <!-- Botón de Menú para Dispositivos Pequeños -->
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <!-- Menú de Navegación -->
                  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link text-white" href="index.html">
                <img src="Imagenes/hogar.png" alt="Inicio" class="icono-navbar"> Inicio
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="Vistas/servicios.html">
                <img src="Imagenes/servicio.png" alt="Servicios" class="icono-navbar"> Servicios
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="Vistas/horarios.html">
                <img src="Imagenes/calendario.png" alt="Horarios" class="icono-navbar"> Horarios
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="Vistas/blog.html">
                <img src="Imagenes/blog.png" alt="Blog" class="icono-navbar"> Blog
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="Vistas/nosotros.html">
                <img src="Imagenes/sobrenosotros.png" alt="Sobre Nosotros" class="icono-navbar"> Sobre Nosotros
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="Vistas/contacto.html">
                <img src="Imagenes/contactos.png" alt="Contacto" class="icono-navbar"> Contacto
            </a>
        </li>
    </ul>
</div>

              </div>
          </nav>
        </header>
    `;
  }
}
customElements.define("mi-header", MiHeader);
