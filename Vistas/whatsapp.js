class MiWhatsapp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            <a href="https://api.whatsapp.com/send?phone=50683665889&text=Bienvenidos%20a%20Taller%20Motos%20Pilo" class="btn-wsp" target="_blank">
                <i class="fa fa-whatsapp my-float " style="margin-top:16px;"></i>
            </a>
            `;
  }
}
customElements.define("mi-whatsapp", MiWhatsapp);
