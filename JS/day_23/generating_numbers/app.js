d = document;
// let ul_container = d.querySelector('ul');
let li;
let wrapper = d.querySelector('.wrapper');
let form_container = d.querySelector('.form_container');
let formulario = d.querySelector("#formulario");
let input_Value = d.querySelector("#input_numbers");

d.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validacionFormulario);
    
}); 

function validacionFormulario(e){
    e.preventDefault();
    // Verificar si el valor ingresado es un número válido
    if (isNaN(input_Value.value) || input_Value.value.trim() === "") {
        mostrarAlerta('Por favor, ingresa un número válido.');
        return;
    }

    // Verificar si el número es mayor a 0
    if (Number(input_Value.value) <= 0) {
        mostrarAlerta('Por favor, ingresa un número mayor a 0.');
        return;
    }

let ul = d.querySelector('.ul_container');
if(ul){
    wrapper.removeChild(ul);
}
createNumbers(0, obtainValues());
}

function createNumbers(start, final){
    if(start >= final){
        // console.log('start debe ser menor que final')
        return;
    } 
    let ul_container = d.createElement('ul');
    ul_container.classList.add('ul_container');
    for (let index = start; index < final; index++) {
        li = d.createElement('li');
        li.textContent = index;
        ul_container.appendChild(li);
        if( index % 2 == 0){
            li.style.backgroundColor = 'rgb(67, 175, 109)'
        }else if( index % 2 !== 0){
            li.style.backgroundColor = '#fdf910'
        }
        if( isPrimeNumber(index) ){
            li.style.backgroundColor = '#ff5757'
        }
    }
    wrapper.appendChild(ul_container);
}

function isPrimeNumber(no) {
    if (no < 2) {
        return false;
    }
    for (let i = 2; i < no; i++) {
        if (no % i == 0) {
        return false;
        }
    }
    return true;
}

function obtainValues() {
    // e.preventDefault();
    let input = Number(d.querySelector("#input_numbers").value);
    return input;
}

function mostrarAlerta(mensaje){
    const alerta = d.querySelector('.alerta');
    if(!alerta){
        const alerta = d.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('alerta');
        // Insertar la alerta antes del input
        form_container.insertBefore(alerta, formulario);
        setTimeout(() => {
            alerta.remove();
        }, 2000);
    }
}