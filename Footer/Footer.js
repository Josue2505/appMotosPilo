class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            <section class="sectionFooter">
              <footer class="custom-footer top">
                <img src="../Imagenes/logoTaller.jpg" />
                <div class="links">
                  <div class="links-column">
                    <h2>Secciones Principales</h2>
                    <a href="#" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Inicio</a>                    
                    <a href="servicios.html" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Servicios</a>
                    <a href="horarios.html" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Horarios</a>
                    
                  </div>
                  <div class="links-column">
                    <h2>Información y Consejos</h2>
                    <a href="blog.html" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Blog</a>
                    
                    <a href="nosotros.html" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Sobre Nosotros</a>
                    <a href="contacto.html" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'">Contacto</a>
                  </div>
                  <div class="links-column links-colores socials-column">
                    <h2>Redes Sociales</h2>
                    <p>
                      Síguenos en redes sociales para ver 
                      nuestros trabajos, consejos y promociones del taller.
                    </p>

                    <div class="socials">
                      <a href="https://www.facebook.com/profile.php?id=100063569380028" class="fa fa-facebook" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'"></a>
                      <a href="#" class="fa fa-instagram" style="color: white; text-decoration: none;transition: color 0.3s ease;" onmouseover="this.style.color='#000000'" onmouseout="this.style.color='white'"></a>
                    </div>
                  </div>
                </div>
              </footer>

              <!-- ------------- -->
              
              <footer class="text-white text-center py-3" style="background-color: #b22222">
                <div class="container">
                  &copy; <span id="year">2025</span> - Motos Pilo |
                  <a href="Politicas.html" class="text-white text-decoration-none">
                  Política de Privacidad
                  </a>
                </div>
              </footer>

             
            </section>
            `;
  }
}
customElements.define("mi-footer", MiFooter);
