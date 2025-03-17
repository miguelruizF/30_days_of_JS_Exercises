import { countries } from "./data/countries.js";
let d = document;

d.addEventListener('DOMContentLoaded', () => {
    let countries_content = d.querySelector('.countries-wrapper');
    let total_countries = d.querySelector('#total-countries');
    let countries_list = d.createElement('ul');
    countries_content.appendChild(countries_list);
    countries.forEach(country => {
        let country_name = d.createElement('li');
        country_name.textContent = country;
        countries_list.appendChild(country_name);
    });

    total_countries.textContent = countries.length;
});