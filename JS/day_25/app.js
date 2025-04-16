import { countries_data } from "./data/countries_data.js";

const chart = document.getElementById('myChart');

// document.addEventListener('DOMContentLoaded', showCanvas);

const countries = countries_data.map(country => {
    const { name, languages, population } = country;
    return {name: name, population: population};
}).sort((a,b) => b.population - a.population).slice(0,10);

new Chart(chart, {
    type: 'bar',
    data: {
        labels: countries.map(row => row.name),
        datasets: [{
        label: '# of Votes',
        data: countries.map(row => row.population),
        borderWidth: 1
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
