//Ejercicio 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/* let edad = Number(prompt("Enter your age: "));
if(edad >= 18) {
    alert('You are old enough to drive');
    }else{
        alert(`You are left with ${18 - edad} years to drive.`)
} */

//Ejercicio 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/* let edad = Number(prompt("Enter your age: "));
let yourEdad = 30;
if(edad < yourEdad){
    alert(`You are ${yourEdad - edad} years younger than me`);
}else if(edad == yourEdad){
    alert(`We have the same years`);
    }else{
        alert(`You are ${edad - yourEdad} years older than me`);
} */

//Ejercicio 3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/* using if else
ternary operator. */
let a = 3
let b = 4
if(a > b) {
    console.log('a is greater than b');
}else{
    console.log('a is less than b');
}

a > b ? console.log('a is greater than b') : console.log('a is less than b');

//Ejercicio 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/* let numero = Number(prompt("Enter a number: "));
if((numero % 2 ) ===  0){
    console.log(`${numero} is an even number`);
}else{
    console.log(`${numero} is an odd number`);
} */



//--------------- Level 2 --------------------
//Ejercicio 1: Write a code which can give grades to students according to theirs scores:
/* 80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
/* let score = Number(prompt("Enter your score: "));
switch (true) {
    case score <= 49:
        console.log("your grade is F");
        break;
    case score <=59:
        console.log("your grade is D");
        break;
    case score <= 69:
        console.log("your grade is C");
        break;
    case score <= 79:
        console.log("your grade is B");
        break;
    case score <= 100:
        console.log("your grade is A");
        break;
    default:
        console.log("It isn't correct, you try again");
        break;
} */