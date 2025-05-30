class MiHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <header>
            <nav class="navbar navbar-expand-lg" style="background-color: #B22222;">
                <div class="container">
                    <!-- Logo o Nombre del Sitio -->
                    <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                        <a href="index.html">
                            <img src="../Imagenes/logoTaller.jpg" style="height: 50px;" />
                        </a>
                        <a class="navbar-brand fw-bold text-white" href="index.html">Taller Motos Pilo</a>
                    </div>

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
                                    <img src="Imagenes/hogar1.png" alt="Inicio" class="icono-navbar"> Inicio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="servicios.html">
                                    <img src="Imagenes/servicio1.png" alt="Servicios" class="icono-navbar"> Servicios
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="horarios.html">
                                    <img src="Imagenes/calendario1.png" alt="Horarios" class="icono-navbar"> Horarios
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="blog.html">
                                    <img src="Imagenes/blog1.png" alt="Blog" class="icono-navbar"> Blog
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="nosotros.html">
                                    <img src="Imagenes/sobrenosotros1.png" alt="Sobre Nosotros" class="icono-navbar"> Sobre Nosotros
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="contacto.html">
                                    <img src="Imagenes/contactos1.png" alt="Contacto" class="icono-navbar"> Contacto
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
