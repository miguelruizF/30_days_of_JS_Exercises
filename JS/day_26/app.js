import { countries } from "./data/countries.js";
let cards_container = document.querySelector('#cards');
let btn_order = document.querySelector('#order');
let btn_startWord = document.querySelector('#start');
let contenedor_texto = document.querySelector('#text_info');
let btn_anyWord = document.querySelector('#anyWord');

let ascending = true;
let isSelected = false;
let isAnySelected = false;
let searchString = "";

document.addEventListener('DOMContentLoaded', () => {
    showCountries();
    orderCountries();
    btn_startWord.addEventListener('click', searchOfWord);
    btn_anyWord.addEventListener('click', anyWordHandler);
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
    if(isAnySelected) return;
    isSelected = !isSelected;
    if(isSelected){
        btn_startWord.style.backgroundColor = '#5d09e4';
        btn_startWord.classList.add('active');
        searchString = "";
        document.addEventListener('keydown', searchingCountry);
    }else{
        btn_startWord.style.backgroundColor = '';
        btn_startWord.classList.remove('active');
        document.removeEventListener('keydown', searchingCountry);
    }
}

function anyWordHandler(e){
    e.preventDefault();
    if(isSelected) return;

    isAnySelected = !isAnySelected;
    if(isAnySelected){
        btn_anyWord.style.backgroundColor = '#5d09e4';
        btn_anyWord.classList.add('active');
        searchString = "";
        document.addEventListener('keydown', searchingAnyCountry);
    }else{
        btn_anyWord.style.backgroundColor = '';
        btn_anyWord.classList.remove('active');
        document.removeEventListener('keydown', searchingAnyCountry);
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
    contenedor_texto.innerHTML = '';
    filtered.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = country;
        cards_container.appendChild(card);
    });

    if(searchString.length > 0){
        const paragraph = document.createElement('p');
        paragraph.classList.add('text_style');
        paragraph.innerHTML = `Countries start with ${searchString} are ${filtered.length}`;
        contenedor_texto.appendChild(paragraph);
    }else{
        contenedor_texto.innerHTML = ""
    }
}

function searchingAnyCountry(e){
    if(e.key.length === 1){
        searchString += e.key;
    }else if(e.key === 'Backspace'){
        searchString = searchString.slice(0, -1);
    }else{
        return;
    }
    
    cards_container.innerHTML = '';
    const filtered = countries.filter(country => country.toLowerCase().includes(searchString.toLowerCase()));

    cards_container.innerHTML = '';
    contenedor_texto.innerHTML = '';
    filtered.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = country;
        cards_container.appendChild(card);
    });

    if(searchString.length > 0){
        const paragraph = document.createElement('p');
        paragraph.classList.add('text_style');
        paragraph.innerHTML = `Countries containing ${searchString} are ${filtered.length}`;
        contenedor_texto.appendChild(paragraph);
    }else{
        contenedor_texto.innerHTML = ""
    }
}