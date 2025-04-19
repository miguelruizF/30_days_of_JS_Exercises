import { countries_data } from "./data/countries_data.js";

const btnPopulation = document.getElementById('population');
const btnLanguages = document.getElementById('languages');
const container = document.getElementById('container');
const subtitulo = document.getElementById('text_btn');

document.addEventListener('DOMContentLoaded', () => {
    btnPopulation.addEventListener('click', createPopulation);
    btnLanguages.addEventListener('click', createLanguages);
});

const createPopulation = () => {
    //Si existe un elemento hijo previo, lo elimina
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    //Creacion del canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'myChart';
    container.appendChild(canvas);

    //obtencion de datos
    const countries = countries_data.map(country => {
        const { name, languages, population } = country;
        return {name: name, population: population};
    }).sort((a,b) => b.population - a.population).slice(0,10);

    //Creacion de la grafica con chart js
    const chart = document.getElementById('myChart');
    new Chart(chart, {
        type: 'bar',
        data: {
            labels: countries.map(row => row.name),
            datasets: [{
                label: '# of Population',
                data: countries.map(row => row.population),
                borderWidth: 1,
                backgroundColor: '#feaa3f'
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        crossAlign: 'far'
                    }
                }
            }
        }
    });
    
    subtitulo.textContent = '10 Most Populated Countries in the world';
}

const createLanguages = () => {
    //Si existe un elemento hijo previo, lo elimina
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    //Creacion del canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'myChart';
    container.appendChild(canvas);

    //obtencion de datos
    let langs = [];
    countries_data.map(country => {
        const { languages } = country;
        languages.forEach(lang => langs.push(lang))
    });

    const langsCount = langs.reduce((acc, curr) => {
        acc[curr]= (acc[curr] || 0) + 1;
        return acc;
    },{});

    const mode = Object.entries(langsCount)
        .sort((a,b) => b[1] - a[1])
        .slice(0,10);

    //Creacion de la grafica con chart js
    const chart = document.getElementById('myChart');
    new Chart(chart, {
        type: 'bar',
        data: {
            labels: mode.map(row => row[0]),
            datasets: [{
                label: '# of Languages',
                data: mode.map(row => row[1]),
                borderWidth: 1,
                backgroundColor: '#feaa3f'
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    ticks: {
                        crossAlign: 'far'
                    }
                }
            }
        }
    });

    subtitulo.textContent = '10 Most Spoken languages in the world';
}