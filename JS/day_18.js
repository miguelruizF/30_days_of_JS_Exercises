//----------- PROMISES ---------------
//------------ LEVEL 1 ----------------

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//Ejercicio 1:  Read the countries API using fetch and print the name of country, capital, languages, population and area.
const readCountriesAPI = fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const {name, capital, languages, population, area} = element;
            // console.log(`Country: ${name}, Capital: ${capital}, Languages: ${languages.map(language => language.name)}, Population: ${population}, Area: ${area}`);
        });
    })
    .catch(error => console.log(error));


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
        // console.log(data.name)        
    } catch (error) {
        console.log(error);
    }
    console.log(catNames);
}
readCatsAPI();


//------------ LEVEL 3 ----------------
//Ejercicio 1: Read the cats api and find the average weight of cat in metric unit.