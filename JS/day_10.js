import { data_countries } from './Arrays/countries_data.js';
//----------- SET and Map ---------------
//------------ LEVEL 1 ----------------

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//Ejercicio 1: create an empty set
const emptySet = new Set();
console.log(emptySet);

//Ejercicio 2: Create a set containing 0 to 10 using loop
const setZeroToTen = new Set();
for (let i = 0; i <= 10; i++) {
    setZeroToTen.add(i);
}
console.log(setZeroToTen);

//Ejercicio 3: Remove an element from a set
const removeElement = setZeroToTen.delete(5);
console.log(setZeroToTen);

//Ejercicio 4: Clear a set
const clearSet = setZeroToTen.clear();
console.log(setZeroToTen);

//Ejercicio 5: Create a set of 5 string elements from array
const cities = ['Helsinki', 'Seinäjoki', 'Tampere', 'Turku', 'Oulu'];
// const setCities = new Set();
//Primera forma
// cities.forEach(city => setCities.add(city));
//Segunda forma
const setCities = new Set(cities);
console.log(setCities);

//Ejercicio 6: Create a map of countries and number of characters of a country
const mapCountries = new Map();
// cities.forEach(country => mapCountries.set(country, country.length));
countries.forEach(country => mapCountries.set(country, country.length));
console.log(mapCountries);


//------------ LEVEL 2 ----------------
//Ejercicio 1: Find a union b
const unionSet = new Set([...a, ...b]);
console.log(unionSet);

//Ejercicio 2: Find a intersection b
const intersectionSet = new Set(a.filter(num => b.includes(num)));
console.log(intersectionSet);

//Ejercicio 3: Find a with b
const differenceSet = new Set(a.filter(num => !b.includes(num)));   
console.log(differenceSet);


//------------ LEVEL 3 ----------------
//Ejercicio 1: How many languages are there in the countries object file.
const languages = new Set();
data_countries.forEach(country => country.languages.forEach(language => languages.add(language)));
console.log(languages.size);
// console.log(languages);

//Ejercicio 2: Use the countries data to find the 10 most spoken languages
const languagesArray = Array.from(languages);
const languagesCount = new Map();
languagesArray.forEach(language => {
    let count = 0;
    data_countries.forEach(country => {
        if (country.languages.includes(language)) {
            count++;
        }
    });
    languagesCount.set(language, count);
});
const sortedLanguages = new Map([...languagesCount.entries()].sort((a, b) => b[1] - a[1]));
console.log(sortedLanguages);
// console.log(languagesArray);