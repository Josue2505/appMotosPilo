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


function toggleChat() {
  let chat = document.getElementById("chat-container");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  let input = document.getElementById("chat-input").value.trim();
  if (input === "") return;

  let chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<div class="chat-message chat-user align-self-end"><b>Tú:</b> ${input}</div>`;

  let response = getResponse(input);
  setTimeout(() => {
    chatBox.innerHTML += `<div class="chat-message chat-bot"><b>Bot:</b> ${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  document.getElementById("chat-input").value = "";
}

function getResponse(input) {
  const responses = {
    hola: "¡Hola! Bienvenido a nuestro taller de motos. ¿En qué podemos ayudarte?",
    horario:
      "Nuestro horario de atención es de lunes a sabados de 8:00 AM a 6:00 PM.",
    ubicacion:
      "Estamos ubicados en Alajuela , Atenas, Mercedes, Barrio Fátima. ¡Visítanos cuando gustes!",
    servicios:
      "Ofrecemos mantenimiento preventivo, cambio de aceite, reparación de frenos, ajuste de cadena y mucho más.",
    "cambio de aceite":
      "El cambio de aceite es esencial para el buen funcionamiento de tu moto. Podemos hacerlo en menos de 30 minutos.",
    "mantenimiento preventivo":
      "Revisamos frenos, neumáticos, luces y ajustamos piezas para que tu moto esté en perfecto estado.",
    "revisión general":
      "La revisión incluye chequeo de frenos, motor, luces y sistema eléctrico. ¡Pregunta por nuestras promociones!",
    "necesito una cita":
      "Puedes agendar una cita llamándonos al 83665889 o visitándonos en nuestro taller.",
    "aceptan tarjetas":
      "Sí, aceptamos pagos en efectivo, tarjetas de débito y crédito.",
    "reparación de frenos":
      "Podemos revisar y reparar los frenos de tu moto. Te recomendamos hacer una revisión cada 6 meses.",
    afinación:
      "Una afinación completa mejora el rendimiento de tu moto. Incluye cambio de bujías, filtros y ajuste del motor.",
    adiós:
      "¡Gracias por visitarnos! Si necesitas más información, estamos aquí para ayudarte.",
    default:
      "No entiendo la pregunta, intenta con otra palabra clave como 'servicios' o 'cambio de aceite'.",
  };
  return responses[input.toLowerCase()] || responses["default"];
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}
