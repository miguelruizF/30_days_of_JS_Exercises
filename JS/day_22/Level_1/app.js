d = document;

let ul_container = d.querySelector('ul');
let li;

d.addEventListener('DOMContentLoaded', () => {
    createNumbers(1, 101)
}); 

function createNumbers(start, final){
    if(start >= final){
        console.log('start debe ser menor que final')
        return;
    } 
    for (let index = start; index < final; index++) {
        li = d.createElement('li');
        li.textContent = index;
        ul_container.appendChild(li);
        if( index % 2 == 0){
            li.style.backgroundColor = '#69fb6b'
        }else if( index % 2 !== 0){
            li.style.backgroundColor = '#fdf910'
        }
        if( isPrimeNumber(index) ){
            li.style.backgroundColor = '#ff5757'
        }
    }
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