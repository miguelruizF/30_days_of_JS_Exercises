//----------- Regular Expressions ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
const regExp = /\d+/g;
const amounts = text.match(regExp);
let salaryPerMonth = parseInt(amounts[0]) * 12;
let bonus = parseInt(amounts[1]);
let courses = parseInt(amounts[2] * 12);
console.log(`The total anual income is $${salaryPerMonth + bonus + courses}`);

//Ejercicio 2: The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const textExtract = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const regExp2 = /-?\d+/g;
const resultOfExtract = textExtract.match(regExp2);
let max = Math.max(...resultOfExtract);
let min = Math.min(...resultOfExtract);
let distance = max - min;
console.log(`The distance between the two furthest particles is ${distance}`);

//Ejercicio 3: Write a pattern which identify if a string is a valid JavaScript variable
const regExp3 = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
const variable = 'first_name';
console.log(regExp3.test(variable));


//------------ LEVEL 2 ----------------

//Ejercicio 1: Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords = (parameter) => {
    const expRegForWords = /\w+/gi; //definir expresion regular
    const resultOfExtract = parameter.match(expRegForWords); //extraer palabras
    const ocurrencesArray = []; //Definir un array vacio donde se guardaran las palabras y su cantidad de ocurrencias
    resultOfExtract.forEach(word => { //recorrer el array de palabras
        let wordCount = 0; //inicializar contador de ocurrencias
        ocurrencesArray.push({ word, wordCount }); //agregar palabra y contador al array
        resultOfExtract.forEach(word2 => { //recorrer nuevamente el array de palabras
            if (word === word2) { //si la palabra es igual a la palabra recorrida
                wordCount++; //incrementar contador
                ocurrencesArray.find(item => item.word === word).wordCount = wordCount; //actualizar contador en el array
            }
        });
    });
    ocurrencesArray.sort((a, b) => b.wordCount - a.wordCount); //ordenar array de mayor a menor
    console.log(ocurrencesArray.slice(0, 10)); //mostrar las 10 primeras palabras
}
tenMostFrequentWords(paragraph);