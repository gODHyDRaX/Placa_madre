import { dataInfoPlaca } from "./Data_info_placa.js";

let root = document.querySelector(".root");

function crearVentanaModal(data) {
    let ventana_modal = document.createElement("div");
    ventana_modal.classList.add("ventana_modal");
    ventana_modal.innerHTML = `
    <h2>${data.titulo}</h2>
    <span class="material-symbols-outlined download">download</span>
    <span class="material-symbols-outlined cerrar">close</span>
    <div class="descripcion">${data.descripcion}</div>
    <h3>Características</h3>
    <div class="caracteristicas"></div>
    <h4>Ejemplos</h4>
    <div class="ejemplos"></div>
    `;

    data.caracteristicas.forEach(elemento => {
        let span_caracteristica = document.createElement("div");
        span_caracteristica.textContent = elemento;
        ventana_modal.querySelector(".caracteristicas").appendChild(span_caracteristica);
    });

    let imgPromises = data.ejemplos.map(imgUrl => {
        return new Promise((resolve, reject) => {
            let img_ejemplo = document.createElement("img");
            img_ejemplo.src = imgUrl;
            img_ejemplo.alt = "Ejemplo de " + data.titulo;
            img_ejemplo.onload = () => resolve();
            img_ejemplo.onerror = () => reject(new Error(`Error al cargar la imagen: ${imgUrl}`));
            ventana_modal.querySelector(".ejemplos").appendChild(img_ejemplo);
        });
    });

    ventana_modal.querySelector(".cerrar").addEventListener("click", () => {
        ventana_modal.remove();
    });

    ventana_modal.querySelector(".download").addEventListener("click", () => {
        ventana_modal.querySelector(".download").style.display = 'none';
        ventana_modal.querySelector(".cerrar").style.display = 'none';

        Promise.all(imgPromises).then(() => {
            html2canvas(ventana_modal).then(function (canvas) {
                var link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = `${data.titulo}.png`;
                link.click();

                ventana_modal.querySelector(".download").style.display = '';
                ventana_modal.querySelector(".cerrar").style.display = '';
            }).catch(err => {
                console.error("Error al capturar la imagen:", err);
                ventana_modal.querySelector(".download").style.display = '';
                ventana_modal.querySelector(".cerrar").style.display = '';
            });
        }).catch(err => {
            console.error("Error al cargar las imágenes:", err);
            ventana_modal.querySelector(".download").style.display = '';
            ventana_modal.querySelector(".cerrar").style.display = '';
        });
    });

    return ventana_modal;
}

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
