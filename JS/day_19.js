//----------- CLOSURES ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Create a closure which has one inner function
function outerFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
const myFunction = outerFunction();
myFunction();


//------------ LEVEL 2 ----------------
//Ejericio 1: Create a closure which has three inner functions
function threeFunction() {
    let outerVariable = 'I am outside!';
    function innerFunction1() {
        console.log(outerVariable);
    }
    function innerFunction2() {
        console.log(outerVariable);
    }
    function innerFunction3() {
        console.log(outerVariable);
    }
    return {innerFunction1, innerFunction2, innerFunction3};
}
const myFunction2 = threeFunction();
myFunction2.innerFunction1();
myFunction2.innerFunction2();
myFunction2.innerFunction3();
console.log(myFunction2);


//------------ LEVEL 3 ----------------
//Ejercicio 1: Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
    let firstName = 'John';
    let lastName = 'Doe';
    let incomes = [];
    let expenses = [];
    let totalIncome = 0;
    let totalExpense = 0;
    let accountInfo = () => {
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Total Income: ${totalIncome}, Total Expense: ${totalExpense}`);
    }
    let addIncome = (description, amount) => {
        incomes.push({description, amount});
        totalIncome += amount;
    }
    let addExpense = (description, amount) => {
        expenses.push({description, amount});
        totalExpense += amount;
    }
    let accountBalance = () => {
        let balance = totalIncome - totalExpense;
        console.log(`Account Balance: ${balance}`);
    }
    return {accountInfo, addIncome, addExpense, accountBalance};
}
const myAccount = personAccount();
myAccount.accountInfo();
myAccount.addIncome('Salary', 1000);
myAccount.addIncome('Freelance', 500);
myAccount.addExpense('Rent', 500);
myAccount.addExpense('Food', 200);
myAccount.accountInfo();
myAccount.accountBalance();
console.log(myAccount);
