//----------- PROMISES ---------------
//------------ LEVEL 1 ----------------

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//Ejercicio 1:  Read the countries API using fetch and print the name of country, capital, languages, population and area.
const readCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

//Primera forma
async function readCountriesAPI (){
    const countriesShow = await readCountries();
    countriesShow.forEach(element => {
        const {name, capital, languages, population, area} = element;
        console.log(`Country: ${name}, Capital: ${capital}, Languages: ${languages.map(language => language.name)}, Population: ${population}, Area: ${area}`);
    });
}
// readCountriesAPI();

//Segunda forma
/* const readCountriesAPI = fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const {name, capital, languages, population, area} = element;
            console.log(`Country: ${name}, Capital: ${capital}, Languages: ${languages.map(language => language.name)}, Population: ${population}, Area: ${area}`);
        });
    })
    .catch(error => console.log(error)); */


//------------ LEVEL 2 ----------------
//Ejercicio 1: Print out all the cat names in to catNames variable.
const readCatsAPI = async () => {
    let catNames = [];
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
            data.forEach( cat => {
            const { name } = cat;
            catNames.push(name)
        } )
        // return data;
        // console.log(data.name)        
    } catch (error) {
        console.log(error);
    }
    console.log(catNames);
}
// readCatsAPI();


//------------ LEVEL 3 ----------------
//Ejercicio 1: Read the cats api and find the average weight of cat in metric unit.
const averageCats = async () => {
    // let catNames = [];
    let regExp = /\D/gi;
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        data.forEach( cat => {
            const { weight } = cat;
            let metrics = weight.metric.replace(regExp, "").split("");
            metrics.sort((a,b) => (a - b));
            const median = Math.floor(metrics.length / 2);
            console.log("the median is: ", metrics.length % 2 !== 0 ? metrics[median] : (metrics[median - 1] + metrics[median]) / 2);
        } )
    } catch (error) {
        console.log(error);
    }
    // console.log(catNames);
}
// averageCats();

//Ejercicio 2: Read the countries api and find out the 10 largest countries
async function countriesLargest(){
    const countriesFind = await readCountries();
    console.log(countriesFind.map( country => {
        const { name, population } = country;
        return {name: name, population: population}
    }).sort((a,b) => b.population - a.population).slice(0, 10))
}
countriesLargest();

//Ejercicio 3: Read the countries api and count total number of languages in the world used as officials.

async function languagesWorld(){
    let langs = [];
    const languages = await readCountries();
    languages.map(language => {
        const { languages } = language
        languages.forEach(lang => langs.push(lang.name))
    })
    const newLangs =  new Set(langs);
    console.log(`Official Languages are: ${newLangs.size}`)
    // console.log(newLangs.size)
}
languagesWorld();