//----------- FUNCTIONS ---------------
//------------ lEVEL 1 ----------------

//Ejercicio 1: Declare a function fullName and it print out your full name.
function printFullName(name) {
    console.log(name);
}
printFullName('Miguel Angel Ruiz');

//Ejercicio 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return(`${firstName} ${lastName}`);
}
console.log(fullName('Miguel Angel', 'Ruiz'));

//Ejercicio 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(one, two) {
    return one + two;
}
console.log(addNumbers(5,20));

//Ejercicio 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(15, 20));

//Ejercicio 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2*(length+width);
}
console.log(perimeterOfRectangle(10, 10));

//Ejercicio 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(5,5,5));

//Ejercicio 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radio) {
    let PI = Math.PI;
    return PI * ( radio * radio );
}
console.log(areaOfCircle(5));

//Ejercicio 8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radio) {
    let PI = Math.PI;
    return (2 * PI) * radio;
}
console.log(circumOfCircle(5));

//Ejercicio 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume;
}
console.log(density(555.265, 45456.2));

//Ejercicio 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return `${distance/time} m/s`;
}
console.log(speed(5,10));

//Ejercicio 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. 
function weight(mass, gravity) {
    return mass * gravity;
}
console.log(weight(550.456, 323.645));

//Ejercicio 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    let conversion = (celsius * (9/5)) +32;
    return `El resultado de la conversion es: ${conversion} °F`;
}
console.log(convertCelsiusToFahrenheit(15));

//Ejercicio 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/* The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function bmiCalculate(weight, height) {
    let result = weight / (height * height);
    switch (true) {
        case result < 18.5:
            console.log('Underweight');
            break;
        case result >= 18.5 && result <= 24.9 :
            console.log('Normal');
            break;  
        case result >= 25 && result <= 29.9 :
            console.log('Overweight');
            break;  
        case result > 30 :
            console.log('Obese');
            break;  
        default:
            console.log('You try again');
            break;
    }
    // console.log(result);
}
bmiCalculate(70, 1.56);

//Ejercicio 14: Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
/* function checkSeason() {
    let season = prompt("Enter a season");
    switch (season) {
        case "September":
        case "October":
        case "November":
            console.log("The season is Autumm");
            break;
        case "December":
        case "January":
        case "February":
            console.log("The season is Winter");
            break;
        case "March":
        case "April":
        case "May":
            console.log("The season is Spring");
            break;
        case "June":
        case "July":
        case "August":
            console.log("The season is Summer");
        default:
            console.log("Not exist, You try again!");
            break;
    }
}
checkSeason(); */

//Ejercicio 15: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax() {
    let numbers = [...arguments];
    const numMax = numbers.sort( (a, b) => a - b)
    //console.log(numbers);
    console.log(`El numero mayor es: ${numMax[2]}`);
}
findMax(88600,6366,890);

//--------------- Level 2 --------------------
//Ejercicio 1: Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    if(Array.isArray(arr)){
        // console.log('Es un array');
        arr.forEach(valor => {
            console.log(valor);
        })
    }
}
printArray([1,8,'oh']);

//Ejercicio 2: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const today = new Date;
    console.log(today.toLocaleString('en-US', { hour12: false }));
    
}
showDateTime();

//Ejercicio 3: Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
reverseArray([1,2,3,4,5,6]);
reverseArray(['A', 'B', 'C']);

//Ejercicio 4: Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    const newArr = [];
    arr.map(string => {
        let newString = string.charAt(0).toUpperCase() + string.slice(1);
        // console.log(newString);
        newArr.push(newString)
    });
    console.log(newArr);
}
capitalizeArray(["hola", "mundo", "aqui", "de", "nuevo"]);

//Ejercicio 5: Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(parameters) {
    const newArr = [];
    newArr.push(parameters);
    console.log(newArr);
}
addItem('hola');

//Ejercicio 6: Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr, index) {
    const indexArr = arr.indexOf(index);
    if(indexArr > -1){
        arr.splice(indexArr, 1);
    }
    console.log(arr);
    
}
removeItem([1,2,3,4,5,6], 2);

//Ejercicio 7: Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let suma = 0;
    for (let index = 1; index <= number; index++) {
        // console.log(index);
        suma += index;
    }
    console.log(suma);
}
sumOfNumbers(100);

//Ejercicio 8: Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
    let suma = 0;
    for( let i = 0; i <= num; i++ ){
        if( i % 2 !== 0){
            suma += i;
        }
    }
    console.log(suma);
}
sumOfOdds(50);

//Ejercicio 9: Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
    let suma = 0;
    for( let i = 0; i <= num; i++ ){
        if( i % 2 == 0){
            suma += i;
        }
    }
    console.log(suma);
}
sumOfEven(50);

//Ejercicio 10: Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
    let odds = [];
    let evens = [];
    if(num > 0){
        for( let i = 0; i <= num; i++ ){
            i % 2 == 0 ? evens.push( i ) : odds.push( i );
        }
    }
    console.log(`The length in odd numbers is: ${odds.length} and the length in even numbers is: ${evens.length}`);
}
evensAndOdds(100);

//Ejercicio 11: Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments() {
    let sum = 0;
    // const args = Array.from(arguments);
    for( let i = 0; i < arguments.length; i++ ){
        sum += arguments[i];
    }
    console.log(sum);
}
sumOfArguments(5,8,6,10,5);

//Ejercicio 15: Write a function which generates a randomUserIp.
//Example: 255.255.255.255
function randomUserIp() {
    let arrIP = [];
    for (let i = 1; i <= 4; i++) {
        let numRandom = Math.floor(Math.random() * 256);
        arrIP.push(numRandom);
    }

    console.log(`The IP number is ${arrIP.join(".")}`);
}
randomUserIp();

//Ejercicio 16: Write a function which generates a randomMacAddress
//Example: xx:xx:xx:xx:xx:xx
//0-9 and AF
function randomMacAddress() {
    let arrMac = [];
    let j = 1;
    while (j <= 6) {
        let arrPar = [];
        for (let i = 1; i <= 2; i++) {
            let hexadecimal = '0123456789ABCDEF';
            let parRandom = Math.floor(Math.random() * hexadecimal.length);
            arrPar.push(hexadecimal[parRandom]);
        }
        arrMac.push(arrPar.join(''))
        j++
    }
    console.log(`Your MAC Address is : ${arrMac.join(':')}`);
}
randomMacAddress();

//Ejercicio 17: Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/* console.log(randomHexaNumberGenerator());
'#ee33df' */
function randomHexaNumberGenerator() {
    let newArr = [];
    let hexadecimal = "0123456789ABCDEF";
    for (let i = 1; i <= 6; i++) {
        let numRandom = Math.floor(Math.random() * hexadecimal.length);
        newArr.push( hexadecimal[numRandom]);
    ;}
    return `#${newArr.join("").toLowerCase()}`;
}
console.log(randomHexaNumberGenerator());

//Ejercicio 18: Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/* console.log(userIdGenerator());
41XTDbE */
function userIdGenerator() {
    let newArray = [];
    for (let i = 1; i <= 6; i++) {
        let abecedario = "0123456789abcdefghijklmnopqrstuvwxyz";
        let indexRandom = Math.floor(Math.random() * abecedario.length);
        newArray.push(abecedario[indexRandom]);
    }
    return newArray.join('');
}
console.log(userIdGenerator());


//--------------- Level 3 --------------------

//Ejercicio 1: Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/* userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
' */
/* function userIdGeneratedByUser() {
    let numberOfCharacters = Number(prompt('Enter a number: '));
    let numberOfIds = Number(prompt('Enter another number: '));
    let arrIDS = [];
    let j = 1;
    while ( j <= numberOfIds) {
        let arrId = [];
        for (let i = 1; i <= numberOfCharacters; i++) {
            let abecedario = "0123456789abcdefghijklmnopqrstuvwxyz";
            let indexRandom = Math.floor(Math.random() * abecedario.length);
            arrId.push(abecedario[indexRandom]);
        }
        arrIDS.push(arrId.join(''));
        j++;
    }
    arrIDS.forEach(id =>console.log(`Your id is: ${id}`));
}
userIdGeneratedByUser(); */

//Ejercicio 2: Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    let i = 0;
    let newArr = [];
    while (i < 3 ) {
        let numRandom = Math.floor(Math.random() * 256)
        newArr.push(numRandom);
        i++;
    }
    console.log(`rgb(${newArr.join(",")})`);
}
rgbColorGenerator();

//Ejercicio 3: Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors() {
    let newArr = [];
    let hexadecimal = "0123456789ABCDEF";
    for (let i = 1; i <= 6; i++) {
        let numRandom = Math.floor(Math.random() * hexadecimal.length);
        newArr.push( hexadecimal[numRandom]);   
    }
    return `#${newArr.join("")}`;
}
console.log(arrayOfHexaColors());

//Ejercicio 4: Write a function arrayOfRgbColors which return any number of RGB colors in an array.
/* function arrayOfRgbColors() {
    let numbersOfColors = Number(prompt('Enter a number: '));
    let arrTotal = [];
    let unique = 1;
    while (unique <= numbersOfColors) {
        let i = 0;
        let newArr = [];
        while (i < 3 ) {
            let numRandom = Math.floor(Math.random() * 256)
            // newArr.join(',');
            newArr.push(numRandom);
            i++;
        }
        arrTotal.push(`rgb(${newArr})`);
        unique++;   
    }
    return arrTotal;
}
console.log(arrayOfRgbColors()); */

//Ejercicio 5: Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hexa) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexa);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}
console.log(convertHexaToRgb("#aabbcc"));

//Ejercicio 6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa() {
    let arrHex = [];
    let hex = 0;
    for (let i = 0; i < arguments.length; i++) {
        hex = arguments[i].toString(16);
        if(hex.length == 1){
            hex = "0" + hex
        }else{
            hex;
        }
        arrHex.push(hex)
    }
    console.log(`#${arrHex.join("")}`);
}
convertRgbToHexa(9,20,30);

//Ejercicio 7: Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(typeOfColor, numberOfColor) {
    if(typeOfColor === "rgb"){
        let arrTotal = [];
        let unique = 1;
        while (unique <= numberOfColor) {
            let i = 0;
            let newArr = [];
            while (i < 3 ) {
                let numRandom = Math.floor(Math.random() * 256);
                newArr.push(numRandom);
                i++;
            }
            arrTotal.push(`rgb(${newArr})`);
            unique++;   
        }
        console.log(arrTotal);
    }else if(typeOfColor === "hexa"){
        let arrTotal = [];
        let init = 1;
        while(init <= numberOfColor){
            let newArr = [];
            let hexadecimal = "0123456789ABCDEF";
            for (let i = 1; i <= 6; i++) {
                let numRandom = Math.floor(Math.random() * hexadecimal.length);
                newArr.push( hexadecimal[numRandom]);   
            }
            arrTotal.push(`#${newArr.join("")}`);
            init++;
        }
        console.log(arrTotal);
    }else{
        console.log('You must enter only hexa or rgb')
    }
}
generateColors('rgb', 5);

//Ejercicio 8: Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arrOfNumbers) {
    let total = 0;
    let isNumber = (currentValue) => typeof(currentValue) === 'number';
    if(arrOfNumbers.every(isNumber)){
        arrOfNumbers.forEach(number => total+=number);
        console.log(total);
    }else{
        console.log('an element is not a number');
    }
}
sumOfArrayItems([1,8,3,4,5]);

//Ejercicio 9: Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let totalAverage = 0;
    let average = arr.length;

    let isNumber = (currentValue) => typeof(currentValue) === 'number';
    if(arr.every(isNumber)){
        arr.forEach(number => console.log((totalAverage+=number)/average));
    }else{
        console.log('an element is not a number');
    }
}
average([1,2,"d",4,5]);

//Ejercicio 10: Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
    if(arr.length < 5){
        console.log('Item not found');
    }else{
        for (let i = 1; i < arr.length; i++) {
            const element = arr[4].toUpperCase();
            arr[4] = element;
        }
        console.log(arr);
    }
}
modifyArray(["as","cd","ernes","Alonso","oser"]);

//Ejercicio 11: Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
    console.log(num % 2 === 0 ? 'is Prime' : 'is not Prime');
}
isPrime(10);
isPrime(5);

//Ejercicio 12: Write a functions which checks if all items are unique in the array.
function noRepite(arr) {
    const uniques = new Set(arr).size !== arr.length; //Set allows you to store unique values
    uniques === false ? console.log('All items are uniques') : console.log('The array contains numbers that are not unique');
}
noRepite([1,2,5,5,3]);
noRepite([1,4,5,2,3]);

//Ejercicio 13: Write a function which checks if all the items of the array are the same data type.
function sameType(arr) {
    const allEqual = arr.every(val => typeof(val) === typeof(arr[0]));
    allEqual === true ? console.log("All items are of the same type") : console.log('Some items are not of the same type');
}
sameType([1, 2, 2, 3]);
sameType([1, "2", 2, 3]);

//Ejercicio 14: JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
    variable.includes("$") || variable.includes("_") ? console.log("The variable is not valid") : console.log('The variable is valid');
}
isValidVariable("asfdc");
isValidVariable("asfdc_");

//Ejercicio 15: Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumbers() {
    let arr = [];
    for (let index = 1; arr.length <= 7; index++) {
        let random = Math.floor(Math.random() * 10);
        arr.push(random);
    }
    const newArr = new Set(arr);
    console.log(newArr)
}
randomNumbers();

//Ejercicio 16: Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
import * as world from "./Arrays/countries.js";
function reverseArrayCountries() {
    const newArrOfCountries = [...world.countries];
    newArrOfCountries.reverse();
    console.log(newArrOfCountries);
}
reverseArrayCountries();