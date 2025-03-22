// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8ADGLwp4orKeZTX1ZaqQHb3629PMDKyc",
    authDomain: "tallermotos-pilo.firebaseapp.com",
    projectId: "tallermotos-pilo",
    storageBucket: "tallermotos-pilo.firebasestorage.app",
    messagingSenderId: "515851337202",
    appId: "1:515851337202:web:e51fbfd8edaffff62e3f6b"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

