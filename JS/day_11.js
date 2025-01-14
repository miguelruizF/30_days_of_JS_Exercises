import { constants, users } from "./Arrays/dataDay10.js";
import { countries } from "./Arrays/dataDay10.js";
import { rectangle } from "./Arrays/dataDay10.js";


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
