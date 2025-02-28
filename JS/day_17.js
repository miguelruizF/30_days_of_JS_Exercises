//----------- WEB STORAGES ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Store you first name, last name, age, country, city in your browser localStorage.
const myPersonalDates = {
    firstName: "Miguel",
    lastName: "Ruiz",
    age: 30,
    country: "México",
    city: "Puebla"
}
const userStringify = JSON.stringify(myPersonalDates, undefined, 4);
localStorage.setItem('user', userStringify);


//------------ LEVEL 2 ----------------
//Ejercicio 1: Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: "Arturo",
    lastName: "Perez",
    age: 15,
    skills: ["React", "Angular", "SQL"],
    country: "USA",
    enrolled: true
}
const studentStringify = JSON.stringify(student, undefined, 4);
localStorage.setItem("student", studentStringify);