import { constants, users, countries, rectangle } from "./Arrays/dataDay10.js";
import { countries_of_world } from "./Arrays/data/countries_data_day11.js";

//----------- Destructuring and Spreating ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [ e, pi, gravity, humanBodyTemp, waterBoilingTemp ] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//Ejercicio 2: Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [ fin, est, sw, den, nor ] = countries;
console.log(fin, est, sw, den, nor);

//Ejercicio 3: Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);


//------------ LEVEL 2 ----------------
//Ejercicio 1: Iterate through the users array and get all the keys of the object using destructuring
for(const { name, scores, skills, age } of users){
    console.log(name, scores, skills, age);
}

//Ejercicio 2: Find the persons who have less than two skills
for(const [key, value] of Object.entries(users)){
    if(value.skills.length < 2){
        console.log(value);
    }
}


//------------ LEVEL 3 ----------------
//Ejercicio 1: Destructure the countries object print name, capital, population and languages of all countries
for (const {name, capital, population, languages} of countries_of_world){
    console.log(`name: ${name} - capital: ${capital} - population: ${population} - languages: ${languages}`);
}

//Ejercicio 2: A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, score, jsScore = score[2], reactScore = score[3]] = student;
console.log(name, skills, jsScore, reactScore);

//Ejercicio 3: Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(arr){
    const arrOfStudents = []
    arr.forEach(student => {
        const [name, skills, scores] = student;
        const objStudent = {
            name: name,
            skills: skills,
            scores: scores
        }
        arrOfStudents.push(objStudent);
    });
    console.log(arrOfStudents);
}
convertArrayToObject(students);

//Ejercicio 4: Copy the student object to newStudent without mutating the original object. In the new object add the following ?
/* Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets */