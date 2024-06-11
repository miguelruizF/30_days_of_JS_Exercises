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

//Ejercicio 11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

//Ejercicio 12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let challengeChange = challenge.replace("JavaScript", "Python");
console.log(challengeChange);

//Ejercicio 13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//Ejercicio 14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"));

//Ejercicio 15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//Ejercicio 16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

//Ejercicio 17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let stringEj = 'You cannot end a sentence with because because because is a conjunction';
console.log(stringEj.indexOf("because"));

//Ejercicio 18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(stringEj.lastIndexOf("because"));

//Ejercicio 19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 
console.log(stringEj.search('because'));

//Ejercicio 20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let stringEj2 = ' 30 Days Of JavaScript ';
console.log(stringEj2.trim());

//Ejercicio 21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"));

//Ejercicio 22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("ipt"));

//Ejercicio 23: Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi));

//Ejercicio 24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let days = '30 Days of',
    js = ' JavaScript';
console.log(days.concat(js));

//Ejercicio 25: Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));