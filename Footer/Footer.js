class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            <section class="sectionFooter">
              <footer class="custom-footer top">
                <img src="../Imagenes/logoTaller.jpg" />
                <div class="links">
                  <div class="links-column">
                    <h2>Get Started</h2>
                    <a>Introduction</a>
                    <a>Documentation</a>
                    <a>Usage</a>
                    <a>Globals</a>
                    <a>Elements</a>
                  </div>
                  <div class="links-column">
                    <h2>Resources</h2>
                    <a>API</a>
                    <a>Visibility</a>
                    <a>Accessibility</a>
                    <a>Community</a>
                    <a>Marketplace</a>
                  </div>
                  <div class="links-column socials-column">
                    <h2>Social Media</h2>
                    <p>
                      Follow us on social media to find out the latest updates on our
                      progress.
                    </p>
                    <div class="socials">
                      <a class="fa fa-facebook"></a>
                      <a class="fa fa-instagram"></a>
                      <a class="fa fa-linkedin"></a>
                    </div>
                  </div>
                </div>
              </footer>

              <!-- ------------- -->
              
              <footer class="text-white text-center py-3" style="background-color: #b22222">
                <div class="container">
                  &copy; <span id="year"></span> - Motos Pilo |
                  <a href="#" class="text-white text-decoration-none"
                    >Política de Privacidad</a
                  >
                </div>
              </footer>
            </section>
            `;
  }
}
customElements.define("mi-footer", MiFooter);
