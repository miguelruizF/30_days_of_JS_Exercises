import { countries } from './Arrays/day13/countries_array.js'
//----------- Console Object Methods ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Display the countries array as a table
console.table(countries);

//Ejercicio 2: Display the countries object as a table
console.table(countries[1]);

//Ejercicio 3: Use console.group() to group logs
console.group('Name')
console.log(countries)
console.groupEnd()