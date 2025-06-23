import { countries } from "./data/countries.js";
let cards_container = document.querySelector('#cards');
let btn_order = document.querySelector('#order');
let formulario = document.querySelector('#formulario');
let btn_startWord = document.querySelector('#start');

let ascending = true;
let isSelected = false;
let searchString = "";

document.addEventListener('DOMContentLoaded', () => {
    showCountries();
    orderCountries();
    btn_startWord.addEventListener('click', searchOfWord);
});

function showCountries(){
    cards_container.innerHTML = "";
    countries.map(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = country;

        cards_container.appendChild(card);
    });
}

function orderCountries(){
    btn_order.addEventListener('click', () => {
        countries.sort((a, b) => ascending ? a.localeCompare(b) : b.localeCompare(a)); //El localCompare se usa para comparar los string
        ascending = !ascending; //Alterna el orden en el siguiente clic
        showCountries();
    });
}

function searchOfWord(e){
    e.preventDefault();
    isSelected = !isSelected;
    if(isSelected){
        btn_startWord.style.backgroundColor = '#5d09e4';
        searchString = "";
        document.addEventListener('keydown', searchingCountry);
    }else{
        btn_startWord.style.backgroundColor = '';
        document.removeEventListener('keydown', searchingCountry);
    }
}

function searchingCountry(e){
    if(e.key.length === 1){
        searchString += e.key;
    }else if(e.key === 'Backspace'){
        searchString = searchString.slice(0, -1);
    }else{
        return;
    }
    
    cards_container.innerHTML = '';
    const filtered = countries.filter(country => country.toLowerCase().startsWith(searchString.toLowerCase()));

    cards_container.innerHTML = '';
    filtered.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = country;
        cards_container.appendChild(card);
    });
}