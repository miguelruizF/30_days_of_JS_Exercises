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


//------------ LEVEL 2 ----------------
//Ejercicio 1: 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is greater than 20");

//Ejercicio 2: Write a warning message using console.warn()
console.warn("This is a message in a console warn");

//Ejercicio 3: Write an error message using console.error()
console.error('This is a message in a console error');


//------------ LEVEL 3 ----------------
//Ejercicio 1: Check the speed difference among the following loops: while, for, for of, forEach
console.time('Loop with while');
let i;
while(i < 10 ){
    // console.log(i)
    i++
}
console.timeEnd('Loop with while');

console.time('Loop with for');
for (let index = 0; index < 10; index++) {
    // console.log(index)
}
console.timeEnd('Loop with for');

console.time('Loop with for of');
let arr = [ 1,2,3,4,5,6,7,8,9,10]
for (const i of arr) {
    
}
console.timeEnd('Loop with for of');

console.time('loop with foreach');
arr.forEach(i => {
    
});
console.timeEnd('loop with foreach');