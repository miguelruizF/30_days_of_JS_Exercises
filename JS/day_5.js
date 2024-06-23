//----------- ARRAYS ---------------

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
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
let company = prompt("Enter a company:");
const companies = [...itCompanies];

if(itCompanies.includes(company)){
    alert(`${company} exist in arrar of itCompanies`);
} else {
    alert("Company is not found");
}