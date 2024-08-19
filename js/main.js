 import { componentes_header } from "./header.js"
 import { componentes_section } from "./section.js"
 import { partes } from "./Data_partes_placa.js"
 import { componentes_placa as contenido_placa} from "./placa.js"
 let root = document.querySelector(".root")

 root.innerHTML = `
    <header class="header"></header>
   <section class="section"></section>
   <div class="placa"></div>
 `
 let header = document.querySelector(".header")
 header.innerHTML = componentes_header

 let section = document.querySelector(".section")
 section.innerHTML = componentes_section

 let placa = document.querySelector(".placa")
 placa.innerHTML = contenido_placa


function actualizarPlaca(){
     const check_categorias = []
     if(document.getElementById('checkbox_ranuras').checked){
        check_categorias.push('ranuras')
     }
    if (document.getElementById('checkbox_puertos').checked) {
        check_categorias.push('puertos')
    }
    if (document.getElementById('checkbox_alimentacion').checked) {
        check_categorias.push('alimentacion')
    }
    if (document.getElementById('checkbox_disipadores').checked) {
        check_categorias.push('disipadores')
    }
    if (document.getElementById('checkbox_chips').checked) {
        check_categorias.push('chips')
    }
    
    let html = ''

    check_categorias.forEach(categoria =>{
        partes[categoria].forEach(item =>{
            html += `
                  <div class="componente" style="grid-column: ${item.ubicacion.gridColumn}; grid-row: ${item.ubicacion.gridRow};">
                    ${item.nombre}
                </div>
                `
        })
    })
   
    placa.innerHTML = contenido_placa +  html

}

document.querySelectorAll('.section input[type="checkbox"]').forEach(checked =>{
    checked.addEventListener('change',actualizarPlaca)
})
actualizarPlaca()
