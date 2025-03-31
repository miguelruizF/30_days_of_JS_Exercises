import { obtainPlanetsByID } from "./API.js";

let formulario = document.querySelector('#formulario');
let input_mass = document.querySelector('#mass');
let select_planet = document.querySelector('#select_planet');
let info_content = document.querySelector('#info_content');
let text_alert = document.querySelector('#text_alert');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e){
    e.preventDefault();
    if(isNaN(input_mass.value) || input_mass.value.trim() === ""){
        if(text_alert.classList.contains('hide')){
            text_alert.classList.remove('hide');
        }
        text_alert.textContent = 'Ingresa un valor';
        return;
    }
    if(Number(input_mass.value <= 0)){
        if(text_alert.classList.contains('hide')){
            text_alert.classList.remove('hide');
        }
        text_alert.textContent = 'Ingresa un valor mayor a cero';
        return;
    }

    if(select_planet.selectedIndex === 0 || select_planet.value === ""){
        if(text_alert.classList.contains('hide')){
            text_alert.classList.remove('hide');
        }
        text_alert.textContent = 'Selecciona un planeta';
        return;
    }
    obtenerPlaneta(select_planet.value);
}

async function obtenerPlaneta(id_planet) {
    const planet = await obtainPlanetsByID(id_planet);
    /* planetas.forEach(planeta => {
        const { nombre, gravedad, img, id } = planeta;
        console.log(nombre,gravedad, img,id)
        }); */
    const { nombre, gravedad, img, id } = planet;
    console.log(nombre,gravedad, img, id)
    text_alert.classList.add('hide')
}