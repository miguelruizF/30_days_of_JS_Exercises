//----------- LOOPS ---------------
//Ejercicio 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
/* for (let i = 0; i <= 10; i++) {
    console.log(i);
} */

/* let i= 0; 
while (i <= 10) {
    console.log(i);
    i++;
} */

/* let i = 0;
do {
    console.log(i);
    i++
} while (i <= 10)
 */

//Ejercicio 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
// let i = 10;
/* for (let i = 10; i >= 0; i--) {
    console.log(i);
} */

/* while (i >= 0) {
    console.log(i);
    i--;
} */

/* do {
    console.log(i);
    i--;
} while (i >= 0); */

//Ejercicio 3: Iterate 0 to n using for loop
/* let n = Number(prompt("Ingrese un numero mayor a cero"));
for (let i = 0; i <= n; i++) {
    console.log(i);
} */

//Ejercicio 4: Write a loop that makes the following pattern using console.log():
/*  #
    ##
    ###
    ####
    #####
    ######
    ####### */
/* let character = "";
for (let i = 0; i <= 6; i++) {
    console.log(character+="#");
} */

//Ejercicio 5: Use loop to print the following pattern:
/*  0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100 */
/* for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i*i}`)
} */

//Ejercicio 6: Using loop print the following pattern
/*  i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000 */
/* for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i*i}  ${i*i*i}`);   
} */

//Ejercicio 7: Use for loop to iterate from 0 to 100 and print only even numbers
/* for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0){
        console.log(i);
    }
} */

//Ejercicio 8: Use for loop to iterate from 0 to 100 and print only odd numbers
/* for (let i = 0; i <= 100; i++) {
    if(i % 2 != 0){
        console.log(i);
    }
} */

//Ejercicio 9: Use for loop to iterate from 0 to 100 and print only prime numbers
/* let primos = [];
for (let i = 2; i <= 100; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
        if(i % j === 0){
            primo = false;
            break;
        }
    }
    if(primo) primos.push(i)
}
console.log(primos) */

//Ejercicio 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/* let suma = 0;
for (let i = 0; i <= 100; i++) {
    suma += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${suma}`); */

//Ejercicio 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/* let even = 0;
let odds = 0;
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? even += i : odds += i;
}
console.log(`The sum of all evens from 0 to 100 is ${even}`);
console.log(`The sum of all odds from 0 to 100 is ${odds}`); */

//Ejercicio 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/* let even = 0;
let odds = 0;
let arr = [];
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? even += i : odds += i;
}
arr = [even, odds];
console.log(arr); */

//Ejercicio 13: Develop a small script which generate array of 5 random numbers
/* let newArray = [];
for (let i = 1; i <= 5; i++) {
    let numRandom = Math.floor(Math.random() * 100)
    newArray.push(numRandom);
}
console.log(newArray); */

//Ejercicio 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
/* let newArray2 = [];
for (let i = 1; i <= 5; i++) {
    let numRandom = Math.floor(Math.random() * 100)
    newArray2.push(numRandom);
}
console.log(newArray2); */

//Ejercicio 15: Develop a small script which generate a six characters random id: 5j2khz
/* let newArray = [];
for (let i = 0; i <= 5; i++) {
    let abecedario = "0123456789abcdefghijklmnopqrstuvwxyz";
    let arrAb = abecedario.split("");
    let indexRandom = Math.floor(Math.random() * abecedario.length);
    // let arrNum = [0,1,2,3,4,5,6,7,8,9];
    // console.log(indexRandom)
    
} */


//--------------- Level 2 --------------------
//Ejercicio 1: Develop a small script which generate any number of characters random id:   fe3jo1gl124g || xkqci4utda1lmbelpkm03rba
/* let numRandom = Number(prompt("Ingresa un numero"));
if(numRandom <= 1) {
    alert("Debes ingresar un numero mayor a 1");
} else {
    let newArray = [];
    for (let i = 0; i < numRandom; i++) {
        let abecedario = "0123456789abcdefghijklmnopqrstuvwxyz";
        let indexRandom = Math.floor(Math.random() * abecedario.length);
        newArray.push(abecedario[indexRandom]);
    }
    alert(`Tu nuevo id es ${newArray.join("")}`);
} */

//Ejercicio 2: Write a script which generates a random hexadecimal number.
/* let newArr = [];
let limite = 6;
let hexadecimal = "0123456789ABCDEF";
for (let i = 1; i <= limite; i++) {
    let numRandom = Math.floor(Math.random() * hexadecimal.length);
    newArr.push( hexadecimal[numRandom])
;}
console.log(`#${newArr.join("")}`); */

//Ejercicio 3: Write a script which generates a random rgb color number: rgb(240,180,80)
//rgb maximo = rgb(255,255,255)
//rgb minimo = rgb(0,0,0)
/* let i = 0;
let newArr = [];
while (i < 3 ) {
    let numRandom = Math.floor(Math.random() * 256)
    newArr.push(numRandom);
    i++;
}
console.log(`rgb(${newArr.join(",")})`); */

//Ejercicio 4: Using the above countries array, create the following new array.
import * as world from "./Arrays/countries.js";
import * as prog_Tech from "./Arrays/web_techs.js";
import * as mern from './Arrays/mern.js';

/* const newArr = []
for(const country of world.countries){
    newArr.push(country.toUpperCase())
}
console.log(newArr); */

//Ejercicio 5: Using the above countries array, create an array for countries length'.
/* const newArr = []
for(const country of world.countries){
    newArr.push(country.length)
}
console.log(newArr); */

//Ejercicio 6: Use the countries array to create the following array of arrays:
/* [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
] */
/* const newArr = []
for(const country of world.countries){
    let newArr2 = [];
    newArr2.push(country, country.slice(0,3).toUpperCase(),country.length)
    newArr.push(newArr2);
}
console.log(newArr);  *

//Ejercicio 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
/* const newArr = []
for(const country of world.countries){
    if(country.includes("land")){
        newArr.push(country);
    }
}
if(newArr.length === 0){
    console.log("All these countries are without land");
}else{
    console.log(newArr); 
} */

//Ejercicio 8: In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
/* const newArr = []
for(const country of world.countries){
    if(country.endsWith("ia")){
        newArr.push(country);
    }
}
if(newArr.length === 0){
    console.log("These are countries ends without ia");
}else{
    console.log(newArr); 
}  */

//Ejercicio 9: Using the above countries array, find the country containing the biggest number of characters.
/* const newArr = []
for(const country of world.countries){
    newArr.push(country.length)
}

for (let i = 0; i < world.countries.length; i++) {
    if(world.countries[i].length == Math.max(...newArr)){
        console.log(world.countries[i]);
    }
} */

//Ejercicio 10: Using the above countries array, find the country containing only 5 characters.
/* const newArr = [];
const newArr2 = [];
for(const country of world.countries){
    newArr.push(country.length)
}

for (let i = 0; i < world.countries.length; i++) {
    if(world.countries[i].length == 5){
        newArr2.push(world.countries[i]);
    }
} 
console.log(newArr2); */

//Ejercicio 11: Find the longest word in the webTechs array 
/* const newArr = [];
for (const webTech of prog_Tech.webTechs) {
    newArr.push(webTech.length);
    console.log(webTech, webTech.length);
}
for (let i = 0; i < prog_Tech.webTechs.length; i++) {
    if(prog_Tech.webTechs[i].length == Math.max(...newArr)){
        console.log(prog_Tech.webTechs[i]);
    }
} */

//Ejercicio 12: Use the webTechs array to create the following array of arrays:
/* [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]   
const newArr = [];
for (let i = 0; i < prog_Tech.webTechs.length; i++) {
    let arr = [];
    arr.push(prog_Tech.webTechs[i],prog_Tech.webTechs[i].length);
    newArr.push(arr);
}
console.log(newArr); */

//Ejercicio 13: An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
/* const newArr = [];
for (const mernAcro of mern.mernStack) {
    newArr.push(mernAcro.slice(0,1));
}
console.log(newArr.join("")); */

//Ejercicio 14: Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
/* for (let i = 0; i < prog_Tech.webTechs.length; i++) {
    console.log(prog_Tech.webTechs[i]);
} */

//Ejercicio 15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
/* const newArr = [];
const fruits = ['banana', 'orange', 'mango', 'lemon']
for (let i = 0; i < fruits.length; i++) {
    newArr.unshift(fruits[i])
}
console.log(newArr);
 */
//Ejercicio 16: Print all the elements of array as shown below.
/* HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB */
/* const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const newArr = fullStack[0].concat(fullStack[1]);
for (const tech of newArr) {
    console.log(tech);
} */


//--------------- Level 3 --------------------
//Ejercicio 1: Copy countries array(Avoid mutation)
const newCountries = [...world.countries];
console.log(newCountries);

//Ejercicio 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
let sortedCountries = [...newCountries].sort();
console.log(sortedCountries);

//Ejercicio 3: Sort the webTechs array and mernStack array
let sortedWebTechs = [...prog_Tech.webTechs].sort();
let sortedMernStack = [...mern.mernStack].sort();
console.log(sortedWebTechs);
console.log(sortedMernStack);

//Ejercicio 4: Extract all the countries contain the word 'land' from the countries array and print it as array
const newArrCountries = []
for(const country of sortedCountries){
    if(country.includes("land")){
        newArrCountries.push(country);
    }
}
console.log(newArrCountries);

//Ejercicio 5: Find the country containing the hightest number of characters in the countries array
const arrCountriesLength = [];
for (const country of sortedCountries) {
    arrCountriesLength.push(country.length);
    // console.log(webTech, webTech.length);
}
for (let i = 0; i < sortedCountries.length; i++) {
    if(sortedCountries[i].length == Math.max(...arrCountriesLength)){
        console.log(sortedCountries[i]);
    }
} 

//Ejercicio 6: Extract all the countries contain the word 'land' from the countries array and print it as array
const newArrCountries2 = []
for(const country of sortedCountries){
    if(country.includes("land")){
        newArrCountries2.push(country);
    }
}
console.log(newArrCountries2);

//Ejercicio 7: Extract all the countries containing only four characters from the countries array and print it as array
const arrCountriesFourChar = []
for(const country of sortedCountries){
    if(country.length === 4){
        arrCountriesFourChar.push(country);
    }
}
console.log(arrCountriesFourChar);

//Ejercicio 8: Extract all the countries containing two or more words from the countries array and print it as array
const arrCountriesMoreChar = []
for(const country of sortedCountries){
    if(country.split(" ").length > 1){
        arrCountriesMoreChar.push(country);
    }
}
console.log(arrCountriesMoreChar);

//Ejercicio 9: Reverse the countries array and capitalize each country and stored it as an array
let newArrReverse = sortedCountries.reverse();
newArrReverse.forEach(country => {
    console.log(capitalizar(country));
})
// console.log(newArrReverse);

function capitalizar(texto){
    let capitalizarArr = [];
    for (const palabra of texto.split(" ")) {
        capitalizarArr.push(palabra[0].toUpperCase() + palabra.substring(1))
    }
    return capitalizarArr.join(" ");
}