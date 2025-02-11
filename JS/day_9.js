import { countries } from "./Arrays/arraysDay9.js";
import { names } from "./Arrays/arraysDay9.js";
import { numbers } from "./Arrays/arraysDay9.js";
import { products } from "./Arrays/arraysDay9.js";
import { data_countries } from "./Arrays/countries_data.js";

//----------- Higher Order Functions ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Explain the difference between forEach, map, filter, and reduce.
/* ForEach: Itera un array sin modificar el array
map: Itera el array y crea uno nuevo
filter: Itera un array y solo regresa el valor o los valores que cumplan con la o las condiciones
reduce: Retorna solo un valor, pero toma un valor acumulador, un valor actual y un valor inicial */

//Ejercicio 2: Define a callback function before you use it in forEach, map, filter or reduce.

//Ejercicio 3: Use forEach to console.log each country in the countries array.
countries.forEach(country => console.log(country));

//Ejercicio 4: Use forEach to console.log each name in the names array.
names.forEach(name => console.log(name));

//Ejercicio 5: Use forEach to console.log each number in the numbers array.
numbers.forEach(number => console.log(number));

//Ejercicio 6: Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUppercase = countries.map(country => country.toUpperCase());
console.log(countriesUppercase);

//Ejercicio 7: Use map to create an array of countries length from countries array.
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

//Ejercicio 8: Use map to create a new array by changing each number to square in the numbers array
const numberToSquare = numbers.map(number => Math.pow(number, 2));
console.log(numberToSquare);

//Ejercicio 9: Use map to change to each name to uppercase in the names array
const nameToUppercase = names.map(name => name.toUpperCase());
console.log(nameToUppercase);

//Ejercicio 10: Use map to map the products array to its corresponding prices.
const productsToMap = products.map(product => `${product.product} = $${product.price}`);
console.log(productsToMap);

//Ejercicio 11: Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

//Ejercicio 12: Use filter to filter out countries having six character.
const countriesSixLength = countries.filter(country => country.length == 6);
console.log(countriesSixLength);

//Ejercicio 13: Use filter to filter out countries containing six letters and more in the country array.
const countriesMoreLength = countries.filter(country => country.length >= 6);
console.log(countriesMoreLength);

//Ejercicio 14: Use filter to filter out country start with 'E';
const countriesWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesWithE);

//Ejercicio 15: Use filter to filter out only prices with values.
const onlyPrices = products.filter(product => product.price > 0);
console.log(onlyPrices);

//Ejercicio 16: Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const newArr = arr.filter(item => typeof(item) === 'string')
    return newArr;
}
console.log(getStringLists(['Asabeneh', 'Mathias', 8, 'Brook']));

//Ejercicio 17: Use reduce to sum all the numbers in the numbers array.
const sumWithReduce = numbers.reduce((acc, curr) => acc + curr)
console.log(sumWithReduce);

//Ejercicio 18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenateCountries = countries.reduce((acc, country) => {
    return acc += `, ${country}`
});
console.log(concatenateCountries, "are north European countries");

//Ejercicio 19: Explain the difference between some and every
/* Some: Este metodo retorna true si al menos un item cumple con la condicion.
Every: Este metodo devuelve true si todos los items cumplen con la condicion, si uno no la cumple, retornara false. */

//Ejercicio 20: Use some to check if some names' length greater than seven in names array
const checkLength = names.some(name => name.length > 7);
console.log(checkLength);

//Ejercicio 21: Use every to check if all the countries contain the word land
const containAll = countries.every(country => country.includes('land'));
console.log(containAll);

//Ejercicio 22: Explain the difference between find and findIndex.
/* find: retorna el primer elemento que cumpla con la condicion
findIndex: retorna la primer posicion del primer elemento que cumpla con la condicion */

//Ejercicio 23: Use find to find the first country containing only six letters in the countries array
const findCountry = countries.find(country => country.length === 6);
console.log(findCountry);

//Ejercicio 24: Use findIndex to find the position of the first country containing only six letters in the countries array
const findIndexCountry = countries.findIndex(country => country.length === 6);
console.log(findIndexCountry);

//Ejercicio 25: Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex(country => country === 'Norway');
console.log(findNorway);

//Ejercicio 26: Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex(country => country === 'Russia');
console.log(findRussia);


//------------ LEVEL 2 ----------------

//Ejercicio 1: Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map(product => typeof(product.price) !== 'number' ? 0 : product.price).reduce((acc, curr) => acc + curr);
console.log(totalPrice);

//Ejercicio 2: Find the sum of price of products using only reduce reduce(callback))
const sumOfPrice = products.reduce((acc, curr) => {
    return acc += typeof(curr.price) !== 'number' ? 0 : curr.price;
},0)
console.log(sumOfPrice);

//Ejercicio 3: Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = countries.filter(country => country.includes('land'));
console.log(categorizeCountries);

//Ejercicio 4: Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const letterCount = countries.map(country => {
    const letter = country[0].toLowerCase();
    const count = country.toLowerCase().split('').filter(c => c === letter).length;
    return {letter, count};
});
console.log(letterCount);

//Ejercicio 5: Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = countries.map(country => country).slice(0, 10);
console.log(getFirstTenCountries);

//Ejercicio 6: Declare a getLastTenCountries function which returns the last ten countries in the countries array.
const getLastTenCountries = countries.map(country => country).slice(-10);
console.log(getLastTenCountries);

//Ejercicio 7: Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const mostUsedLetter = countries.map(country => country[0].toLowerCase()).reduce((acc, curr) => {
    if(acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});
console.log(mostUsedLetter);


//------------ LEVEL 3 ----------------

//Ejercicio 1: Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortByName = data_countries.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
console.log(sortByName);

const sortByCapital = data_countries.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (a.capital > b.capital) return 1
    return 0
})
console.log(sortByCapital);

const sortByPopulation = data_countries.sort((a, b) => {
    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
})
console.log(sortByPopulation);

//Ejercicio 2: Find the 10 most spoken languages:
/* // Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]``` */
// PRIMERA OPCION
const mostSpokenLanguages = data_countries.map(country => country.languages).flat().reduce((acc, curr) => {
    if(acc[curr]) {
        acc[curr]++;
    } else {
        acc[curr] = 1;
    }
    return acc;
}, {});
const ocurrencesArray = Object.entries(mostSpokenLanguages).map(([country, count]) => ({country, count}));
console.log(ocurrencesArray.sort((a, b) => b.count - a.count).slice(0, 10));

// SEGUNDA OPCION
/* const mostSpokenLanguages = Object.entries(
    data_countries.map(country => country.languages).flat().reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
        }, {})
    )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([language, count]) => ({ language, count }));

console.log(mostSpokenLanguages); */

//Ejercicio 3: Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = data_countries.map(country => {
    return {country: country.name, population: country.population}
}).sort((a, b) => b.population - a.population).slice(0, 10);
console.log(mostPopulatedCountries);

//Ejercicio 4: Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = {
    count: function() {
        return ages.length;
    },
    sum: function() {
        return ages.reduce((acc, curr) => acc + curr);
    },
    min: function() {
        return Math.min(...ages);
    },
    max: function() {
        return Math.max(...ages);
    },
    range: function() {
        return this.max() - this.min();
    },
    mean: function() {
        return this.sum() / this.count();
    },
    median: function() {
        ages.sort((a, b) => a - b);
        const mid = Math.floor(ages.length / 2);
        return ages.length % 2 !== 0 ? ages[mid] : (ages[mid - 1] + ages[mid]) / 2;
    },
    mode: function() {
        const mode = ages.reduce((acc, curr) => {
            if(acc[curr]) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc;
        }, {});
        const max = Math.max(...Object.values(mode));
        return Object.entries(mode).filter(([key, value]) => value === max).map(([key, value]) => key);
    },
    variance: function() {
        const mean = this.mean();
        return ages.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0) / this.count();
    },
    standardDeviation: function() {
        return Math.sqrt(this.variance());
    },
    percentile: function(percentile) {
        const index = Math.floor((percentile / 100) * ages.length);
        ages.sort((a, b) => a - b);
        return ages[index];
    },
    frequencyDistribution: function() {
        return ages.reduce((acc, curr) => {
            if(acc[curr]) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc; 
        }, {});
    },
    describe: function() {
        return {
            count: this.count(),
            sum: this.sum(),
            min: this.min(),
            max: this.max(),
            range: this.range(),
            mean: this.mean(),
            median: this.median(),
            mode: this.mode(),
            variance: this.variance(),
            standardDeviation: this.standardDeviation(),
            percentile: this.percentile(90),
            frequencyDistribution: this.frequencyDistribution()
        }
    }
}
console.log(statistics.describe());