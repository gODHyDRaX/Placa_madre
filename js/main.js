import { componentes_header } from "./header.js";
import { componentes_section } from "./section.js";
import { partes, partes_flex } from "./Data_partes_placa.js";
import { componentes_placa as contenido_placa } from "./placa.js";

let root = document.querySelector(".root");

root.innerHTML = `
    <header class="header"></header>
    <section class="section"></section>
    <div class="placa"></div>
    <!-- Modal HTML -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    </div>
`;

let header = document.querySelector(".header");
header.innerHTML = componentes_header;

let section = document.querySelector(".section");
section.innerHTML = componentes_section;

let placa = document.querySelector(".placa");
placa.innerHTML = contenido_placa;

let activeDatabase = partes;

function updateDatabase() {
    const mediaQuery = window.matchMedia('(max-width: 375px)');
    if (mediaQuery.matches) {
        activeDatabase = partes_flex;
    } else {
        activeDatabase = partes;
    }
    actualizarPlaca();
}

function actualizarPlaca() {
    const check_categorias = [];
    if (document.getElementById('checkbox_ranuras').checked) {
        check_categorias.push('ranuras');
    }
    if (document.getElementById('checkbox_puertos').checked) {
        check_categorias.push('puertos');
    }
    if (document.getElementById('checkbox_alimentacion').checked) {
        check_categorias.push('alimentacion');
    }
    if (document.getElementById('checkbox_disipadores').checked) {
        check_categorias.push('disipadores');
    }
    if (document.getElementById('checkbox_chips').checked) {
        check_categorias.push('chips');
    }

    let html = '';

    check_categorias.forEach(categoria => {
        activeDatabase[categoria].forEach(item => {
            html += `
                <div class="componente" style="grid-column: ${item.ubicacion.gridColumn}; grid-row: ${item.ubicacion.gridRow};" data-nombre="${item.nombre}" data-descripcion="${item.descripcion}">
                    ${item.nombre}
                </div>
            `;
        });
    });

    placa.innerHTML = contenido_placa + html;
    addComponentClickEvent();
}

function handleResize() {
    updateDatabase();
}

window.addEventListener('resize', handleResize);
handleResize();

document.querySelectorAll('.section input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', actualizarPlaca);
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

function addComponentClickEvent() {
    document.querySelectorAll('.componente').forEach(component => {
        component.addEventListener('click', () => {
            const nombre = component.getAttribute('data-nombre');
            const descripcion = component.getAttribute('data-descripcion');

            modalTitle.textContent = nombre;
            modalDescription.textContent = descripcion;

            modal.style.display = 'block';
        });
    });
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
