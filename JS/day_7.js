//----------- FUNCTIONS ---------------
//------------ lEVEL 1 ----------------

//Ejercicio 1: Declare a function fullName and it print out your full name.
function printFullName(name) {
    console.log(name);
}
printFullName('Miguel Angel Ruiz');

//Ejercicio 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return(`${firstName} ${lastName}`);
}
console.log(fullName('Miguel Angel', 'Ruiz'));

//Ejercicio 3: Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(one, two) {
    return one + two;
}
console.log(addNumbers(5,20));

//Ejercicio 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(15, 20));

//Ejercicio 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2*(length+width);
}
console.log(perimeterOfRectangle(10, 10));

//Ejercicio 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(5,5,5));

//Ejercicio 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radio) {
    let PI = Math.PI;
    return PI * ( radio * radio );
}
console.log(areaOfCircle(5));

//Ejercicio 8: Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radio) {
    let PI = Math.PI;
    return (2 * PI) * radio;
}
console.log(circumOfCircle(5));

//Ejercicio 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume;
}
console.log(density(555.265, 45456.2));

//Ejercicio 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    return `${distance/time} m/s`;
}
console.log(speed(5,10));