class MiChatBot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            
        <div id="chat-bubble" onclick="toggleChat()">
            <i class="bi bi-chat-dots"></i>
            💬
        </div>

        <div id="chat-container" class="card shadow">
            <div class="card-header bg-primary text-white d-flex justify-content-between">
                <span>Motos Pilo</span>
                <button class="btn btn-sm btn-light" onclick="toggleChat()">✖</button>
            </div>
            <div id="chat-box" class="card-body overflow-auto"></div>
            <div class="card-footer d-flex">
                <input type="text" id="chat-input" class="form-control me-2" placeholder="Escribe aquí..."
                    onkeypress="handleKeyPress(event)">
                <button class="btn btn-primary" onclick="sendMessage()">Enviar</button>
            </div>
        </div>


            `;
  }
}
customElements.define("mi-chatbot", MiChatBot);
