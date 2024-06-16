//Ejercicio 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Miguel', 
    lastName = "Ruiz", 
    country = "México", 
    city = "Puebla", 
    age = 29, 
    isMarried = false, 
    year = 2024;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(isMarried));
console.log(typeof(year));

//Ejercicio 2: Check if type of '10' is equal to 10
console.log(typeof('10')== 10);

//Ejercicio 3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')==10);

//Ejercicio 4: Boolean value is either true or false.
/* Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value. */
console.log(10 === 10);
console.log(10 >= 10);
console.log(true == 1);
console.log(true == "hola");
console.log(16 <= 1);
console.log(typeof('HOLA') != typeof('MUNDO'));

//Ejercicio 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
/* 4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' false
4 == '4'  true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement. */
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//Ejercicio 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
/* 4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
There is no 'on' in both dragon and python  false*/
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log('dragon'.includes('on'));
console.log('python'.includes('on'));

//Ejercicio 7: Use the Date object to do the following activities
/* What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */
let date_info = new Date();
console.log(date_info.getFullYear());
console.log(date_info.getMonth());
console.log(Date());
console.log(date_info.getDay());
console.log(date_info.getHours());
console.log(date_info.getMinutes());
console.log(date_info.getTime());

//--------------- Level 2 --------------------
//Ejercicio 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h)
/* let base = prompt('Enter base: ');
let altura = prompt('Enter altura: ');
alert(`The area of the triangle is ${(base*altura)/2}`) */

//Ejercicio 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/* let lado_a = Number(prompt('Enter side a: '));
let lado_b = Number(prompt('Enter side b: '));
let lado_c = Number(prompt('Enter side c: '));
alert(`The perimeter of the triangle is ${lado_a+lado_b+lado_c}`); */

//Ejercicio 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/* let largo = Number(prompt('Enter length: '));
let ancho = Number(prompt('Enter width: '));
alert(`The area of the rectangle is ${largo*ancho}`); 
alert(`The perimeter of the rectangle is ${2*(largo+ancho)}`);  */

//Ejercicio 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* const pi = Math.PI;
let radio = Number(prompt('Enter length: '));
alert(`The area of a circle is ${pi*(radio*radio)}`); 
alert(`The circumference of a circle is ${2*(pi*radio)}`);  */ 

//Ejercicio 5: Calculate the slope, x-intercept and y-intercept of y = 2x -2

//Ejercicio 6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

//Ejercicio 7: Compare the slope of above two questions.

//Ejercicio 8: Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
/* let y;
let x = prompt("Enter the value of x");
y = (x*2) + (6*x) + 9
alert(`Result: ${y}`); */

//Ejercicio 9: Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* let horas = Number(prompt("Enter hours: "));
let tarifa = Number(prompt("Enter rate: "));
alert(`Your weekly earning is: ${horas*tarifa}`); */

//Ejercicio 10: If the length of your name is greater than 7 say, your name is long else say your name is short.
let nombre = "Miguel Angel";
console.log(nombre.length > 7 ? "Your name is long" : "Your name is short");

//Ejercicio 11: Compare your first name length and your family name length and you should get this output.
let nombre2 = "Miguel Angel";
let apellido = "Ruiz";
console.log(nombre2.length > apellido.length ? "Your name is longer than family name" : "Your family name is longer than your name");

//Ejercicio 12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let miEdad = 220;
let tuEdad  = 29;

//Ejercicio 13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.