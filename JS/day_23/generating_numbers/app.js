d = document;
// let ul_container = d.querySelector('ul');
let li;
let wrapper = d.querySelector('.wrapper');
let formulario = d.querySelector("#formulario");
let input_Value = d.querySelector("#input_numbers");

d.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validacionFormulario);
    
}); 

function validacionFormulario(e){
    e.preventDefault();
    if(Number(input_Value.value) <= 0 || input_Value.value.trim === "" || typeof(input_Value.value) == 'string'){
        alert('ingresa un valor o caracter valido');
        return;
    }

    let ul = d.querySelector('.ul_container');
        if(ul){
            wrapper.removeChild(ul);
            createNumbers(0, obtainValues());
        }
        console.log(typeof(input_Value.value))
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
