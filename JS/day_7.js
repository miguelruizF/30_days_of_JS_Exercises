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

//Ejercicio 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. 
function weight(mass, gravity) {
    return mass * gravity;
}
console.log(weight(550.456, 323.645));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    let conversion = (celsius * (9/5)) +32;
    return `El resultado de la conversion es: ${conversion} °F`;
}
console.log(convertCelsiusToFahrenheit(15));

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

/* The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */