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