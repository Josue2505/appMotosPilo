class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            <footer class="text-white text-center py-3" style="background-color: #B22222;>
                <div class="container">
                    &copy; <span id="year"></span> - Motos Pilo |  
                    <a href="#" class="text-white text-decoration-none">Política de Privacidad</a>
                </div>
            </footer>
            `;
  }
}
customElements.define("mi-footer", MiFooter);
