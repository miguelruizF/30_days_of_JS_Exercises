//Ejercicio 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

//Ejercicio 2: Print the string on the browser console using console.log()
console.log(challenge);

//Ejercicio 3: Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Ejercicio 4: Change all the string characters to capital letters using toUpperCase() method
let challengeUpper = challenge.toUpperCase();
console.log(challengeUpper)

//Ejercicio 5: Change all the string characters to lowercase letters using toLowerCase() method
let challengeLower = challenge.toLowerCase();
console.log(challengeLower)

//Ejercicio 6: Cut (slice) out the first word of the string using substr() or substring() method
let challengeSubstr = challenge.substring(0, 3);
console.log(challengeSubstr);

//Ejercicio 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let challengeSlice = challenge.slice(3);
console.log(challengeSlice);

//Ejercicio 8: Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

//Ejercicio 9: Split the string into an array using split() method
console.log(challenge.split());

//Ejercicio 10: Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));