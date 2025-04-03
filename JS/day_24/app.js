import { obtainPlanetsByID } from "./API.js";

let formulario = document.querySelector('#formulario');
let input_mass = document.querySelector('#mass');
let select_planet = document.querySelector('#select_planet');
let info_content = document.querySelector('#info_content');


let text_content = document.createElement('p');
text_content.classList.add('text_content');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e){
    e.preventDefault();

    //Si existe un elemento hijo previo, lo elimina
    while(info_content.firstChild){
        info_content.removeChild(info_content.firstChild);
    }

    if(isNaN(input_mass.value) || input_mass.value.trim() === ""){
        // if(text_alert.classList.contains('hide')){
        //     text_alert.classList.remove('hide');
        // }
        // text_alert.textContent = 'Ingresa un valor';
        text_content.textContent = 'Ingresa un valor';
        info_content.appendChild(text_content);
        return;
    }
    if(Number(input_mass.value <= 0)){
        text_content.textContent = 'Ingresa un valor mayor a cero';
        info_content.appendChild(text_content);
        return;
    }

    if(select_planet.selectedIndex === 0 || select_planet.value === ""){
        text_content.textContent = 'Selecciona un planeta';
        info_content.appendChild(text_content);
        return;
    }
    obtenerPlaneta(select_planet.value);
}


async function obtenerPlaneta(id_planet) {
    const planet = await obtainPlanetsByID(id_planet);

    const { nombre, gravedad, img, id } = planet;
    console.log(nombre,gravedad, img, id);

    const contenedor_info = document.createElement('div');
    contenedor_info.classList.add('contenedor_planeta');
    
    const img_planet = document.createElement('img');
    img_planet.src = img;
    img_planet.id = 'img_planet'

    contenedor_info.appendChild(img_planet);
    info_content.appendChild(contenedor_info);
}