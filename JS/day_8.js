import {users} from "./objects/objects.js";
import {countries} from "./objects/countries.js";
//----------- OBJECTS ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: 
    //1.1: Create an empty object called dog
    const dog = {};

    //1.2: Print the the dog object on the console
    console.log(dog);
    
    //1.3: Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    dog.name = 'Doffy';
    dog.legs = 4;
    dog.color = 'brown';
    dog.age = 8;
    dog.bark = function(){
        return('woof woof');
    }
    // console.log(dog);

    //1.4: Get name, legs, color, age and bark value from the dog object
    console.group(dog.name, dog.legs, dog.color, dog.age, dog.bark());
    
    //1.5: Set new properties the dog object: breed, getDogInfo
    dog.breed = 'Pitbull';
    dog.getDogInfo = function(){
        return('The name is ' + dog.name + ' it has ' + dog.legs + ' it is color ' + dog.color + ' has ' + dog.age + ' years ' + ' and its sound is ' + dog.bark());
    }
    console.log(dog.getDogInfo());

//------------ LEVEL 2 ----------------
    //2.1: Find the person who has many skills in the users object.
    const usersSkills = {...users}
    const numMax = [];
    for(let clave in usersSkills){
        numMax.push(usersSkills[clave].skills.length)
    }
    let maximo = Math.max(...numMax);
    let userMaxSkill;

    Object.entries(usersSkills).forEach(user => {
        if(user[1].skills.length === maximo){
            userMaxSkill = user
        }
    })
    console.log(userMaxSkill)
    
    //2.2: Count logged in users, count users having greater than equal to 50 points from the following object.
    const usersAreLogged = [];
    Object.entries(usersSkills).forEach(user => {
        if(user[1].isLoggedIn === true && user[1].points >= 50){
            usersAreLogged.push(user);
        }
    })
    console.log(usersAreLogged);

    //2.3: Find people who are MERN stack developer from the users object
    const usersAreMernDeveloper = []
    Object.entries(usersSkills).forEach(user => {
        if(user[1].skills.includes("MongoDB")){
            usersAreMernDeveloper.push(user);
        }
    })
    console.log(usersAreMernDeveloper);

    //2.4: Set your name in the users object without modifying the original users object
    usersSkills.Miguel = {};
    console.log(usersSkills);

    //2.5: Get all keys or properties of users object
    console.log(Object.keys(usersSkills));
    
    //2.6: Get all the values of users object
    console.log(Object.values(usersSkills));

    //2.7: Use the countries object to print a country name, capital, populations and languages.
    for(let city in countries){
        console.log(`City: ${countries[city].name} \nCapital: ${countries[city].capital} \nPopulations: ${countries[city].population} \nLanguages: ${countries[city].languages}`)
    }