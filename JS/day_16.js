import { skills } from "./JSON/day_16.js";
//----------- JSON ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Change skills array to JSON using JSON.stringify()
const skillsChanged = JSON.stringify(skills, undefined, 2);
console.log(skillsChanged);

//Ejercicio 2: Stringify the age variable
//const ageChanged =_