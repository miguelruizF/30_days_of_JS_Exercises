const url = 'http://localhost:3000/planetas';

const obtainPlanets = async() => {
    try {
        const result = await fetch(url);
        const planet = await result.json();
        console.log(planet)
    } catch (error) {
        console.log(error);
    }
}


/* (function(){
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('submit', showPlanet);
    });

    async function showPlanet(e){
        e.preventDefault();
        const planets = await obtainPlanets();

        console.log(planets)
        planets.forEach(planet => {
            console.log(planet)
        });
    }


})();
 */