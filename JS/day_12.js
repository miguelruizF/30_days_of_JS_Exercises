//----------- Regular Expressions ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
const regExp = /\d+/g;
const amounts = text.match(regExp);
let salaryPerMonth = parseInt(amounts[0]) * 12;
let bonus = parseInt(amounts[1]);
let courses = parseInt(amounts[2] * 12);
console.log(`The total anual income is $${salaryPerMonth + bonus + courses}`);

//Ejercicio 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const textExtract = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const regExp2 = /-?\d+/g;
const resultOfExtract = textExtract.match(regExp2);
let max = Math.max(...resultOfExtract);
let min = Math.min(...resultOfExtract);
let distance = max - min;
console.log(`The distance between the two furthest particles is ${distance}`);

//Ejercicio 3: Write a pattern which identify if a string is a valid JavaScript variable
const regExp3 = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const variable = 'first_name';
console.log(regExp3.test(variable));