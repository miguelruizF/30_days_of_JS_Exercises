//----------- JSON ---------------
import { skills, age, isMarried, student, txt } from "./JSON/day_16.js";
//------------ LEVEL 1 ----------------

//Ejercicio 1: Change skills array to JSON using JSON.stringify()
const skillsChanged = JSON.stringify(skills, undefined, 2);
console.log(skillsChanged);

//Ejercicio 2: Stringify the age variable
const ageChanged = JSON.stringify(age, undefined, 2);
console.log(ageChanged);

//Ejercicio 3: Stringify the isMarried variable
const isMarriedChanged = JSON.stringify(isMarried, undefined, 2);
console.log(isMarriedChanged);

//Ejercicio 4: Stringify the student object
const studentChanged = JSON.stringify(student, undefined, 2);
console.log(studentChanged);


//------------ LEVEL 2 ----------------
//Ejercicio 1: Stringify the students object with only firstName, lastName and skills properties
const studentFiltered = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);
console.log(studentFiltered);


//------------ LEVEL 3 ----------------
//Ejercicio 1: Parse the txt JSON to object.
const txtParseToObject = JSON.parse(txt);
console.log(txtParseToObject);

//Ejercicio 2: Find the user who has many skills from the variable stored in txt.
let newArr = [];
Object.entries(txtParseToObject).forEach(([key, value]) => {
    let {email, skills,age, isLoggedIn, points} = value;
    newArr.push(skills.length);
});
let numMax = Math.max(...newArr);
const findUser = Object.entries(txtParseToObject).forEach(([key, value]) => {
    let {email, skills,age, isLoggedIn, points} = value;
    if(skills.length === numMax){
        console.log(`The user who has many skills is: ${key}`)
    }
});

// console.log(findUser)