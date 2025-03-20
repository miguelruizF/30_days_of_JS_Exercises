import { asabenehChallenges2020 } from "./data/data.js";
let d = document;
const coloresDegradado = ["#a4c739","#afce52","#bbd56b","#c6dc83","#d1e39c","#ddeab5","#e8f1ce","#f4f8e6","#81c739","#5dc739","#3ac739","#39c75c","#39c77f"];
let header = d.querySelector("header");
let wrapper = d.querySelector(".wrapper");
let clockDiv = d.createElement("div");

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

    /* setInterval(() => {
        changeDate();
        changeColor('.year', 'color');
        changeColor('.clock', 'backgroundColor');
    }, 1000); */
    function update(){
        changeDate();
        changeColor('.year', 'color');
        changeColor('.clock', 'backgroundColor');
        requestAnimationFrame(update);
    }
    update();
    // Call the listChallenge function
    listChallenge();
    infoUser();
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
    clockDiv.classList.add('clock');
    header.appendChild(clockDiv);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function changeColor(selector, attribute){
    let elemento = d.querySelector(selector);
    if(!elemento) return;
    elemento.style[attribute] = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
}

function listChallenge(){
    // Create a div element with a class name of challenge-container
    let challenge_container = d.createElement('div');
    challenge_container.classList.add('challenge-container');
    // Create a ul element with a class name of challenge-list and append it to the challenge-container
    let ul_challenge = d.createElement('ul');
    ul_challenge.classList.add('challenge-list');
    challenge_container.appendChild(ul_challenge);
    // Iterate through the challenges and create a li element for each challenge
    asabenehChallenges2020.challenges.forEach(challenge => {
        // console.log(challenge);
        // Destructure the challenge object
        const { name, topics, days, status, questions, projects, interviewQns, githubUrl } = challenge;
        // Create a li element with a class name of challenge
        let li_challenge = d.createElement('li');
        li_challenge.classList.add('challenge');
        // Create a p element
        let p_title = d.createElement('p');
        p_title.textContent = name;

        let details = d.createElement('details');
        let summary = d.createElement('summary');
        summary.textContent = topics[0];
        for(let topic of topics){
            let p_summary = d.createElement('p');
            p_summary.textContent = topic;
            details.appendChild(p_summary);
        }
        details.appendChild(summary);

        let p_status = d.createElement('p');
        p_status.textContent = status;
        // Append the p element to the div element and the next container
        li_challenge.appendChild(p_title);
        li_challenge.appendChild(details);
        li_challenge.appendChild(p_status);
        ul_challenge.appendChild(li_challenge);
    });
    // Append the challenge container to the wrapper
    wrapper.appendChild(challenge_container);
}

function infoUser(){
    let {firstName, lastName, titles, qualifications, socialLinks, skills, bio} = asabenehChallenges2020.author;
    //creating div for information
    let divInfo = d.createElement('div');
    divInfo.classList.add('div_information');
    //Add name
    let paragraphName = d.createElement('h3');
    paragraphName.classList.add('p_name');
    paragraphName.textContent = `${firstName} ${lastName}`;

    //Adding url for social medias
    let ul_social = d.createElement('ul');
    ul_social.classList.add('ul_social');
    socialLinks.forEach(social => {
        let li_social = d.createElement('li');
        li_social.classList.add('li_social');
        li_social.innerHTML = `<a class="link" href="${social.url}">${social.fontawesomeIcon}</a>`;
        ul_social.appendChild(li_social);
    });

    //Adding paragraph with personal information
    let paragraphInfo = d.createElement('p');
    paragraphInfo.classList.add('information');
    paragraphInfo.textContent = bio;

    //Adding titles, skills and qualifications
    let div_skills = d.createElement('div');
    div_skills.classList.add('div_skills');

    //Insert name into div
    divInfo.appendChild(paragraphName);
    divInfo.appendChild(ul_social);
    divInfo.appendChild(paragraphInfo);
    divInfo.appendChild(div_skills);

    //Inser information div into wrapper
    wrapper.appendChild(divInfo);
};