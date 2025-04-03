class MiChatBot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
            
        <div id="chat-bubble" onclick="toggleChat()">
            <i class="bi bi-chat-dots"></i>
            💬
        </div>

        <div id="chat-container" class="card shadow" >
            <div class="card-header bg-primary text-white d-flex justify-content-between" style="background-color: red;">
                <span >Motos Pilo </span>
                <button class="btn btn-sm btn-light" onclick="toggleChat()">✖</button>
            </div>
            <div id="chat-box" style="max-height: 300px; overflow-auto; padding: 10px;"></div>
        <div id="options" style="padding: 10px; display: flex; flex-wrap: wrap; gap: 5px;">
            <button class="chat-option" onclick="selectOption('horario')">Horario</button>
            <button class="chat-option" onclick="selectOption('ubicacion')">Ubicación</button>
            <button class="chat-option" onclick="selectOption('servicios')">Servicios</button>
            <button class="chat-option" onclick="selectOption('necesito una cita')">Cita</button>
        </div>
        </div>


            `;
  }
}
customElements.define("mi-chatbot", MiChatBot);

function toggleChat() {
  let chat = document.getElementById("chat-container");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}


function selectOption(option) {
  let chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div style='text-align: right; background: #d1ecf1; padding: 5px; border-radius: 5px; margin: 5px 0;'><b>Tú:</b> ${option}</div>`;
  setTimeout(() => {
      chatBox.innerHTML += `<div style='text-align: left; background: #f8d7da; padding: 5px; border-radius: 5px; margin: 5px 0;'><b>Bot:</b> ${getResponse(option)}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}


function getResponse(input) {
  const responses = {
    horario: "Nuestro horario es de lunes a sábado de 8:00 AM a 6:00 PM.",
    ubicacion: "Estamos en Alajuela, Atenas, Mercedes, Barrio Fátima.",
    servicios:"Ofrecemos mantenimiento, cambio de aceite, reparación de frenos y más.",
    "necesito una cita": "Puedes agendar una cita llamándonos al 83665889.",
    default: "No entiendo la pregunta, intenta otra opción.",
  };
  return responses[input.toLowerCase()] || responses["default"];
}


