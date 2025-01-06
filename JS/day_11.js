import { constants } from "./Arrays/dataDay10.js";
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