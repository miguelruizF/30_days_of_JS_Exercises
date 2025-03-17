import { asabenehChallenges2020 } from "./data/data.js";
let d = document;
let header = d.querySelector("header");
let clockDiv = d.createElement("div");

document.addEventListener("DOMContentLoaded", () => {
    let title = d.createElement("h1");
    let subtitle = d.createElement("h2");

    // Add a title to the header
    title.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span class='year'>2020</span>`;
    header.appendChild(title);

    // Add a subtitle to the header
    subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
    subtitle.classList.add("subtitle");
    subtitle.style.textDecoration = "underline";
    subtitle.style.fontWeight = "lighter";
    header.appendChild(subtitle);

    // Add a clock to the header
    setInterval(() => {
        /* year.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)]; */
        changeDate();
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
    clockDiv.innerHTML = dateComplete;
    header.appendChild(clockDiv);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}