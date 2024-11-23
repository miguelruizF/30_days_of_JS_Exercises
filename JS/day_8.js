// import {users} from "./objects/objects.js";
import {countries} from "./objects/countries.js";
import { users } from "./objects/usersObj.js";
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
   /*  //2.1: Find the person who has many skills in the users object.
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
 */
//------------ LEVEL 3 ----------------
    //3.1: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
    const personAccount = {
        firstName: "John",  // Example first name
        lastName: "Doe",    // Example last name
        incomes: [
            { description: "Salary", amount: 5000 },
            { description: "Freelance", amount: 1500 }
        ],
        expenses: [
            { description: "Rent", amount: 1200 },
            { description: "Groceries", amount: 300 },
            { description: "Utilities", amount: 150 }
        ],
    
        // Method to calculate total income
        totalIncome: function() {
            return this.incomes.reduce((total, income) => total + income.amount, 0);
        },
    
        // Method to calculate total expenses
        totalExpense: function() {
            return this.expenses.reduce((total, expense) => total + expense.amount, 0);
        },
    
        // Method to return account info (name + totals)
        accountInfo: function() {
            return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
        },
    
        // Method to add an income
        addIncome: function(description, amount) {
            this.incomes.push({ description, amount });
        },
    
        // Method to add an expense
        addExpense: function(description, amount) {
            this.expenses.push({ description, amount });
        },
    
        // Method to calculate account balance (income - expenses)
        accountBalance: function() {
            return this.totalIncome() - this.totalExpense();
        }
    };
    
    //3.2: a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
        // b. Create a function called signIn which allows user to sign in to the application
    const objUsers = [...users];
    function signUp(username, email, password) {
        const userExist = objUsers.some(user => user.email === email);
        if(!userExist){
            const newUser = {
                _id: userID(),
                username,
                email,
                password,
                createdAt: new Date().toLocaleString(),
                isLoggedIn: false
            }
            objUsers.push(newUser);
            console.log('Sign up successful! Welcome, ' + username);
        }else{
            console.log('the user has already an account');
        }
    }
    function userID() {
        let newArray = [];
        for (let i = 1; i <= 6; i++) {
            let abecedario = "0123456789abcdefghijklmnopqrstuvwxyz";
            let indexRandom = Math.floor(Math.random() * abecedario.length);
            newArray.push(abecedario[indexRandom]);
        }
        return newArray.join('');
    }
    
    signUp('John Doe', 'john.doe@example.com', 'password123');
    console.log(objUsers);
    // signUp('John Doe', 'john.doe@example.com', 'anotherPassword123'); 
    // console.log(users);

    function signIn(email, password) {
        const userExist = objUsers.some(user => user.email === email);
        const passwordExist = objUsers.some(user => user.password === password);

        if(userExist && passwordExist){
            console.log('Welcome')
        }else{
            console.log('Username or password are incorrect!!!')
        }
    }
    signIn('john.doe@example.com', 'password123');