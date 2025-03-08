class MiHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <header>
          <nav class="navbar navbar-expand-lg" style="background-color: #D4A017;">
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
                              <a class="nav-link text-white" href="Home.html">Inicio</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white" href="servicios.html">Servicios</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white" href="nosotros.html">Nosotros</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link text-white" href="contacto.html">Contacto</a>
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
