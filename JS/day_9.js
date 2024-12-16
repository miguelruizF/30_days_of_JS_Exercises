import { countries } from "./Arrays/arraysDay9.js";
import { names } from "./Arrays/arraysDay9.js";
import { numbers } from "./Arrays/arraysDay9.js";
import { products } from "./Arrays/arraysDay9.js";

//----------- Higher Order Functions ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Explain the difference between forEach, map, filter, and reduce.
/* ForEach: Itera un array sin modificar el array
map: Itera el array y crea uno nuevo
filter: Itera un array y solo regresa el valor o los valores que cumplan con la o las condiciones
reduce: Retorna solo un valor, pero toma un valor acumulador, un valor actual y un valor inicial */

//Ejercicio 2: Define a callback function before you use it in forEach, map, filter or reduce.

//Ejercicio 3: Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

//Ejercicio 4: Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name));

//Ejercicio 5: Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number));

//Ejercicio 6: Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUppercase = countries.map(country => country.toUpperCase());
console.log(countriesUppercase);

//Ejercicio 7: Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

//Ejercicio 8: Use map to create a new array by changing each number to square in the numbers array
const numberToSquare = numbers.map(number => Math.pow(number, 2));
console.log(numberToSquare);

//Ejercicio 9: Use map to change to each name to uppercase in the names array
const nameToUppercase = names.map(name => name.toUpperCase());
console.log(nameToUppercase);

//Ejercicio 10: Use map to map the products array to its corresponding prices.
const productsToMap = products.map(product => `${product.product} = $${product.price}`);
console.log(productsToMap);

//Ejercicio 11: Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

//Ejercicio 12: Use filter to filter out countries having six character.
const countriesSixLength = countries.filter(country => country.length == 6);
console.log(countriesSixLength);

//Ejercicio 13: Use filter to filter out countries containing six letters and more in the country array.
const countriesMoreLength = countries.filter(country => country.length >= 6);
console.log(countriesMoreLength);

//Ejercicio 14: Use filter to filter out country start with 'E';
const countriesWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesWithE);

//Ejercicio 15: Use filter to filter out only prices with values.
const onlyPrices = products.filter(product => product.price > 0);
console.log(onlyPrices);

//Ejercicio 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const newArr = arr.filter(item => typeof(item) === 'string')
    return newArr;
}
console.log(getStringLists(['Asabeneh', 'Mathias', 8, 'Brook']));

//Ejercicio 17: Use reduce to sum all the numbers in the numbers array.
const sumWithReduce = numbers.reduce((acc, curr) => acc + curr)
console.log(sumWithReduce);
