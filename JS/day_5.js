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