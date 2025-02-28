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


//------------ LEVEL 3 ----------------
//Ejercicio 1: Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstName: "Marcos",
    lastName: "Hernandez",
    incomes: [
        {
            description: 'sueldo',
            income: 15000
        }, 
        {
            description: 'venta',
            income: 10000
        },
        {
            description: 'prestamo',
            income: 1000
        }
    ],
    expenses: [
        {
            description: 'despensa',
            expense: 5000
        },
        {
            description: 'transporte',
            expense: 500
        },
        {
            description: 'comida',
            expense: 2000
        }
    ],
    totalIncome: function(){
        let arrIncomes = [];
        const incomeDetail = this.incomes.map(income => {
            arrIncomes.push(income.income);
        })
        return {"Total Incomes": arrIncomes.reduce((acc, curr) => acc + curr)};
    },
    totalExpense: function(){
        let arrExpenses = [];
        const expenseDetail = this.expenses.map(expense => {
            arrExpenses.push(expense.expense);
        })
        return {"Total Expenses": arrExpenses.reduce((acc, curr) => acc + curr)};
    },
    accountInfo: function(){
        return { total: this.totalIncome()["Total Incomes"] - this.totalExpense()["Total Expenses"]}
    },
    addIncome: function(income){
        /* const newIncomes = [...this.incomes];
        newIncomes.push(income); */
        return this.incomes.push(income)
    },
    addExpense: function(expense){
        return this.expenses.push(expense)
    },
    accountBalance: function(){
        return { total: this.totalIncome()["Total Incomes"] - this.totalExpense()["Total Expenses"]}
    }
}
console.log(personAccount.accountInfo());
personAccount.addIncome({description:"otros", income: 5000})
personAccount.addExpense({description:"medico", expense: 1000})
console.log(personAccount.accountBalance());

const personAccountJson = JSON.stringify(personAccount, undefined, 2);
localStorage.setItem('person1', personAccountJson);