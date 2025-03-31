import { obtainPlanetsByID } from "./API.js";
// obtainPlanets()
let formulario = document.querySelector('#formulario');
let input_mass = document.querySelector('#mass');
let select_planet = document.querySelector('#select_planet');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e){
    e.preventDefault();
    if(isNaN(input_mass.value) || input_mass.value.trim() === ""){
        alert('Ingresa un valor')
        return;
    }
    if(Number(input_mass.value <= 0)){
        alert('Ingresa un valor mayor a cero')
        return;
    }
    // console.log(input_mass.value) 
    obtenerPlaneta(select_planet.value);
    // console.log(select_planet.value)
}

async function obtenerPlaneta(id_planet) {
    const planet = await obtainPlanetsByID(id_planet);
    /* planetas.forEach(planeta => {
        const { nombre, gravedad, img, id } = planeta;
        console.log(nombre,gravedad, img,id)
        }); */
    const { nombre, gravedad, img, id } = planet;
    console.log(nombre,gravedad, img,id)
}