//----------- ARRAYS ---------------
//Ejercicio 1: Declare an empty array;
const newArray = [];

//Ejercicio 2: Declare an array with more than 5 number of elements
const arr_elements = [1,2,3,4,5];

//Ejercicio 3: Find the length of your array
console.log(arr_elements.length);

//Ejercicio 4: Get the first item, the middle item and the last item of the array
console.log(arr_elements[0]);
console.log(arr_elements[2]);
console.log(arr_elements[arr_elements.length - 1]);

//Ejercicio 5:Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "Hola", true, [1,2,3], {key:1, nombre:"Miguel"}, 23.5];
console.log(mixedDataTypes.length);

//Ejercicio 6: Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//Ejercicio 7: Print the array using console.log()
console.log(itCompanies);

//Ejercicio 8: Print the number of companies in the array
console.log(itCompanies.length);

//Ejercicio 9: Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);

//Ejercicio 10: Print out each company
/* const printCompanies = itCompanies.map((company)=>{
    console.log(company);
}); */

//Ejercicio 11: Change each company name to uppercase one by one and print them out
const printCompanies = itCompanies.map((company)=>{
    console.log(company.toUpperCase());
});

//Ejercicio 12: Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());

//Ejercicio 13: Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
/* let company = prompt("Enter a company:").toLowerCase();
let newArrayCompanies = [];
const companies = itCompanies.map((company)=>{
    newArrayCompanies.push(company.toLowerCase());
})
if(newArrayCompanies.includes(company)){
    alert(`${company} exist in arrar of itCompanies`);
} else {
    alert("Company is not found");
} */

//Ejercicio 14: Filter out companies which have more than one 'o' without the filter method
let regExp =/(o).*\1/;
let newArrayComp = [];
const companies = itCompanies.map((company)=>{
    let companyFilter = regExp.test(company);
    if(companyFilter === true){
        console.log(company)
    }
});

//Ejercicio 15: Sort the array using sort() method
// console.log(itCompanies.sort());

//Ejercicio 16: Reverse the array using reverse() method
// console.log(itCompanies.reverse());

//Ejercicio 17: Slice out the first 3 companies from the array
console.log(itCompanies[0].slice(1,3));
console.log(itCompanies[1].slice(1));
console.log(itCompanies[2].slice(2,5));


//Ejercicio 18: Slice out the last 3 companies from the array
console.log(itCompanies[itCompanies.length - 1].slice(1,7));
console.log(itCompanies[itCompanies.length - 2].slice(1,5));
console.log(itCompanies[itCompanies.length - 3].slice(1));

//Ejercicio 19: Slice out the middle IT company or companies from the array
console.log(itCompanies[3].slice(2));

//Ejercicio 20: Remove the first IT company from the array
let arrCompanies = [...itCompanies];
// console.log(arrCompanies.shift())
// console.log(arrCompanies);

//Ejercicio 21: Remove the middle IT company or companies from the array
// console.log(arrCompanies.splice(3, 1));
// console.log(arrCompanies);

//Ejercicio 22: Remove the last IT company from the array
// console.log(arrCompanies.pop());
// console.log(arrCompanies);

//Ejercicio 23: Remove all IT companies
console.log(arrCompanies.splice(0, arrCompanies[arrCompanies.length - 1]));



//--------------- Level 2 --------------------
//Ejercicio 1: Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// import { countries }  from "./Arrays/countries";
// const countries = require("./Arrays/countries.mjs")
// import { webTechs } from "./Arrays/web_techs";
// const webTechs = require("./Arrays/web_techs")

//Ejercicio 2: First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people I teach HTML CSS JS React Python';
let words = text.split(" ");
console.log(words)
console.log(words.length)