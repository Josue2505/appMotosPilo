// class MiChatBot extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `    
            
//         <div id="chat-bubble" onclick="toggleChat()">
//             <i class="bi bi-chat-dots"></i>
//             💬
//         </div>

//         <div id="chat-container" class="card shadow" >
//             <div class="card-header bg-primary text-white d-flex justify-content-between" style="background-color: red;">
//                 <span >Motos Pilo </span>
//                 <button class="btn btn-sm btn-light" onclick="toggleChat()">✖</button>
//             </div>
//             <div id="chat-box" style="max-height: 300px; overflow-auto; padding: 10px;"></div>
//         <div id="options" style="padding: 10px; display: flex; flex-wrap: wrap; gap: 5px;">
//             <button class="chat-option" onclick="selectOption('horario')">Horario</button>
//             <button class="chat-option" onclick="selectOption('ubicacion')">Ubicación</button>
//             <button class="chat-option" onclick="selectOption('servicios')">Servicios</button>
//             <button class="chat-option" onclick="selectOption('necesito una cita')">Cita</button>
//         </div>
//         </div>


//             `;
//   }
// }
// customElements.define("mi-chatbot", MiChatBot);

// function toggleChat() {
//   let chat = document.getElementById("chat-container");
//   chat.style.display = chat.style.display === "block" ? "none" : "block";
// }


// function selectOption(option) {
//   let chatBox = document.getElementById("chat-box");
//   chatBox.innerHTML += `<div style='text-align: right; background: #d1ecf1; padding: 5px; border-radius: 5px; margin: 5px 0;'><b>Tú:</b> ${option}</div>`;
//   setTimeout(() => {
//       chatBox.innerHTML += `<div style='text-align: left; background: #f8d7da; padding: 5px; border-radius: 5px; margin: 5px 0;'><b>Bot:</b> ${getResponse(option)}</div>`;
//       chatBox.scrollTop = chatBox.scrollHeight;
//   }, 500);
// }


// function getResponse(input) {
//   const responses = {
//     horario: "Nuestro horario es de lunes a sábado de 8:00 AM a 5:00 PM.",
//     ubicacion: "Estamos en Alajuela, Atenas, Mercedes, Barrio Fátima.",
//     servicios:
//       "Ofrecemos mantenimiento, cambio de aceite, reparación de frenos y más.",
//     "necesito una cita":
//       "Puedes agendar una cita por medio de Whatsapp al número 83665889 o por medio del correo stevepilo@hotmail.com",
//     default: "No entiendo la pregunta, intenta otra opción.",
//   };
//   return responses[input.toLowerCase()] || responses["default"];
// }





class ChatBot {
  constructor() {
    this.initChat();
  }

  initChat() {
    const chatHTML = `
            <div id="chat-bubble">💬</div>
            <div id="chat-container">
                <div class="chat-header">
                    <span>Habla con nosotros</span>
                    <button id="close-chat" style="background: transparent; border: none; color: white;">✖</button>
                </div>
                <div class="chat-body" id="chat-box"></div>
                <div class="chat-options" id="chat-options">
                    <button class="chat-option" data-option="horario">📅 Horario</button>
                    <button class="chat-option" data-option="ubicacion">📍 Ubicación</button>
                    <button class="chat-option" data-option="servicios">🔧 Servicios</button>
                    <button class="chat-option" data-option="cita">📆 Cita</button>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", chatHTML);
    document
      .getElementById("chat-bubble")
      .addEventListener("click", this.toggleChat.bind(this));
    document
      .getElementById("close-chat")
      .addEventListener("click", this.closeChat.bind(this));
    this.attachEventListeners();
  }

  attachEventListeners() {
    document.querySelectorAll(".chat-option").forEach((button) => {
      button.addEventListener("click", (e) =>
        this.selectOption(e.target.dataset.option)
      );
    });
  }

  toggleChat() {
    let chat = document.getElementById("chat-container");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
  }

  closeChat() {
    let chat = document.getElementById("chat-container");
    chat.style.display = "none";
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";
    this.resetOptions();
  }

  resetOptions() {
    let chatOptions = document.getElementById("chat-options");
    chatOptions.innerHTML = `
        <button class="chat-option" data-option="horario">📅 Horario</button>
        <button class="chat-option" data-option="ubicacion">📍 Ubicación</button>
        <button class="chat-option" data-option="servicios">🔧 Servicios</button>
        <button class="chat-option" data-option="cita">📆 Cita</button>
    `;
    this.attachEventListeners();
  }

  selectOption(option, displayText = null) {
    let chatBox = document.getElementById("chat-box");
    let chatOptions = document.getElementById("chat-options");
    let selectedText =
      displayText ||
      document.querySelector(`[data-option="${option}"]`)?.textContent ||
      option;
    chatBox.innerHTML += `<div class="user-message"><b>Tú:</b> ${selectedText}</div>`;
    let response = this.getResponse(option);
    setTimeout(() => {
      chatBox.innerHTML += `<div class="bot-message"><b>Pilo:</b> ${response.text}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
    if (response.suboptions) {
      setTimeout(() => {
        chatOptions.innerHTML = `<button class="chat-option back-button">🔙 Volver</button>`;
        response.suboptions.forEach((sub) => {
          let button = document.createElement("button");
          button.classList.add("chat-option");
          button.textContent = sub.text;
          button.dataset.option = sub.value;
          button.addEventListener("click", (e) =>
            this.selectOption(e.target.dataset.option, sub.text)
          );
          chatOptions.appendChild(button);
        });
        document
          .querySelector(".back-button")
          .addEventListener("click", () => this.resetOptions());
      }, 1000);
    }
  }

  getResponse(input) {
    const responses = {
      horario: {
        text: "¿Quieres saber nuestro horario en qué día?",
        suboptions: [
          { text: "📆 Lunes a Viernes", value: "horario_semana" },
          { text: "🗓️ Sábados", value: "horario_sabado" },
        ],
      },
      horario_semana: { text: "Lunes a Viernes: 8:00 AM - 5:00 PM" },
      horario_sabado: { text: "Sábados: 9:00 AM - 2:00 PM" },
      ubicacion: {
        text: "¿Buscas nuestra dirección o un mapa?",
        suboptions: [
          { text: "📍 Dirección", value: "direccion" },
          { text: "🗺️ Mapa", value: "mapa" },
        ],
      },
      direccion: {
        text: "Nuestra dirección es Alajuela, Atenas, Barrio Fátima.",
      },
      mapa: { text: "Puedes vernos en Google Maps aquí: [Enlace]" },
      servicios: {
        text: "Tenemos varios servicios, ¿cuál te interesa?",
        suboptions: [
          { text: "🛠️ Mantenimiento", value: "mantenimiento" },
          { text: "🛢️ Cambio de aceite", value: "cambio_aceite" },
        ],
      },
      mantenimiento: { text: "Ofrecemos mantenimiento completo por ₡25,000." },
      cambio_aceite: {
        text: "Cambio de aceite por ₡10,000 con filtro incluido.",
      },
      cita: { text: "Puedes agendar una cita al WhatsApp 83665889." },
      default: { text: "No entiendo la pregunta, intenta otra opción." },
    };
    return responses[input] || responses["default"];
  }
}

window.addEventListener("DOMContentLoaded", () => new ChatBot());
