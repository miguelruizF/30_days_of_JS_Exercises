import { countries } from "./data/countries.js";
let cards_container = document.querySelector('#cards');
let btn_order = document.querySelector('#order');
let ascending = true;

document.addEventListener('DOMContentLoaded', () => {
    showCountries();
    orderCountries();
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