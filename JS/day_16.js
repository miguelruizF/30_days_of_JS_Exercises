import { skills, age, isMarried, student } from "./JSON/day_16.js";
//----------- JSON ---------------
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