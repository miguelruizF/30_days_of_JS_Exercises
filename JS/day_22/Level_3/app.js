import { asabenehChallenges2020 } from "./data/data.js";
let d = document;
const coloresDegradado = ["#a4c739","#afce52","#bbd56b","#c6dc83","#d1e39c","#ddeab5","#e8f1ce","#f4f8e6","#81c739","#5dc739","#3ac739","#39c75c","#39c77f"];
let header = d.querySelector("header");
let clockDiv = d.createElement("div");
clockDiv.classList.add('clockClass');
let clockClass = d.querySelector('.clockClass')
let pContenedor = d.createElement('p');

document.addEventListener("DOMContentLoaded", () => {
    let title = d.createElement("h1");
    let subtitle = d.createElement("h2");
    
    // Add a title to the header
    title.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span class='year'>${asabenehChallenges2020.challengeYear}</span>`;
    title.classList.add('title');
    header.appendChild(title);
    let year = d.querySelector('.year');
    year.style.fontSize = '4rem'

    // Add a subtitle to the header
    subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
    subtitle.classList.add("subtitle");
    subtitle.style.textDecoration = "underline";
    subtitle.style.fontWeight = "lighter";
    header.appendChild(subtitle);

    setInterval(() => {
        // changeDate();
        changeColor(year, 'color');
        changeColor(clockClass, 'backgroundColor');
        /* if (date) {
            date.style.backgroundColor = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
        } */
    }, 1000);
});

const changeDate = () => {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>"; 
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    let clock = hr + ":" + min + ":" + sec + " " + ap;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    let dateComplete = date + " " + clock; 
    pContenedor.innerHTML = dateComplete;
    // clockDiv.innerHTML = dateComplete;
    clockDiv.appendChild(pContenedor);
    header.appendChild(clockDiv);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function changeColor(elemento, attribute){
    elemento.style[attribute] = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
}