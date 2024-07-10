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
    let indexRandom = Math.floor(Math.random() * abecedario.length);
    // let arrNum = [0,1,2,3,4,5,6,7,8,9];
    // console.log(indexRandom)
    newArray.push(abecedario[indexRandom]);
}
console.log(newArray.join(""));
 */

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
console.log(newArr);  */

//Ejercicio 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.