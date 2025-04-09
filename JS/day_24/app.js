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
        text_content.textContent = 'Ingresa un valor';
        text_content.classList.add('text_alert');
        info_content.appendChild(text_content);
        return;
    }
    if(Number(input_mass.value <= 0)){
        text_content.textContent = 'Ingresa un valor mayor a cero';
        text_content.classList.add('text_alert');
        info_content.appendChild(text_content);
        return;
    }

    if(select_planet.selectedIndex === 0 || select_planet.value === ""){
        text_content.textContent = 'Selecciona un planeta';
        text_content.classList.add('text_alert');
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
    
    //Imagen del planeta
    const img_planet = document.createElement('img');
    img_planet.src = img;
    img_planet.id = 'img_planet';

    //Informacion del peso
    let peso = Number(input_mass.value) * gravedad;

    const div_info = document.createElement('div');
    div_info.classList.add('div_info');

    const texto_planeta = document.createElement('p');
    texto_planeta.classList.add('texto_planeta');
    texto_planeta.innerHTML = `The weight of the object on <span class="nombre_planeta">${nombre}</span>`

    const masa_planeta = document.createElement('p');
    masa_planeta.classList.add('masa_planeta');
    masa_planeta.textContent = `${Number(peso.toFixed(2))} N`;

    div_info.appendChild(texto_planeta);
    div_info.appendChild(masa_planeta);

    //Agregar elementos al contenedor principal 
    contenedor_info.appendChild(img_planet);
    contenedor_info.appendChild(div_info);
    info_content.appendChild(contenedor_info);
}