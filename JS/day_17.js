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