const url = 'http://localhost:3000/planetas';

export const obtainPlanetsByID = async id => {
    try {
        const result = await fetch(`${url}/${id}`);
        const planets = await result.json();
        return planets;
    } catch (error) {
        console.log(error);
    }
}
/* 
export const obtainPlanetsByID = async()=> {
    try {
        const result = await fetch(url);
        const planets = await result.json();
        return planets;
    } catch (error) {
        console.log(error);
    }
} */