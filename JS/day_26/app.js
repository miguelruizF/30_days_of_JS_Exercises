import { countries } from "./data/countries.js";
let cards_container = document.querySelector('#cards');

document.addEventListener('DOMContentLoaded', () => {
    showCountries();
});

function showCountries(){
    const countries_map = countries.map(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = country;

        cards_container.appendChild(card);
    });
}
