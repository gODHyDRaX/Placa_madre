import { dataInfoPlaca } from "./Data_info_placa.js";

let root = document.querySelector(".root");

function crearVentanaModal(data) {
    let ventana_modal = document.createElement("div");
    ventana_modal.classList.add("ventana_modal");
    ventana_modal.innerHTML = `
    <h2>${data.titulo}</h2>
    <span class="material-symbols-outlined">
        download
    </span>
    <span class="material-symbols-outlined cerrar">
        close
    </span>
    <div class="descripcion">${data.descripcion}</div>
    <h3>Características</h3>
    <div class="caracteristicas"></div>
    <h4>Ejemplos</h4>
    <div class="ejemplos"></div>
  `;

    // Añadir características
    data.caracteristicas.forEach(elemento => {
        let span_caracteristica = document.createElement("div");
        span_caracteristica.textContent = elemento;
        ventana_modal.querySelector(".caracteristicas").appendChild(span_caracteristica);
    });

    // Añadir imágenes de ejemplos
    data.ejemplos.forEach(imgUrl => {
        let img_ejemplo = document.createElement("img");
        img_ejemplo.src = imgUrl;
        img_ejemplo.alt = "Ejemplo de " + data.titulo;
        ventana_modal.querySelector(".ejemplos").appendChild(img_ejemplo);
    });

    // Añadir funcionalidad de cierre
    ventana_modal.querySelector(".cerrar").addEventListener("click", () => {
        ventana_modal.remove();
    });

    return ventana_modal;
}

// Asignar eventos a los botones
let btn_pc = document.querySelector(".btn_pc");
btn_pc.addEventListener("click", () => {
    root.appendChild(crearVentanaModal(dataInfoPlaca.PC));
});

let btn_gpu = document.querySelector(".btn_gpu");
btn_gpu.addEventListener("click", () => {
    root.appendChild(crearVentanaModal(dataInfoPlaca.GPU));
});

let btn_cpu = document.querySelector(".btn_cpu");
btn_cpu.addEventListener("click", () => {
    root.appendChild(crearVentanaModal(dataInfoPlaca.CPU));
});

let btn_fuente = document.querySelector(".btn_fuente");
btn_fuente.addEventListener("click", () => {
    root.appendChild(crearVentanaModal(dataInfoPlaca.fuentePoder));
});

let btn_placa = document.querySelector(".btn_placa");
btn_placa.addEventListener("click", () => {
    root.appendChild(crearVentanaModal(dataInfoPlaca.placaMadre));
});
