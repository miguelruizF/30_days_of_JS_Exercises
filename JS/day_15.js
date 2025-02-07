//----------- Classes ---------------
//------------ LEVEL 1 ----------------

//Ejercicio 1: Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    informacion(){
        const info = `Hola mi nombre es  ${this.name}, tengo ${this.age} años, soy de color ${this.color} y tengo ${this.legs} patas`
        return info
    }
    typeOfAnimal(tipo){
        if(tipo === 'mamifero'){
            return 'Soy un mamifero'
        }else{
            return 'No soy mamifero'
        }
    }
}
console.log(Animal)

//Ejercicio 2: Create a Dog and Cat child class from the Animal Class
const perro = new Animal('Poppy', 15, 'negro', 4);
console.log(perro);
console.log(perro.informacion());
console.log(perro.typeOfAnimal('mamifero'));

const gato = new Animal('Michi', 5, 'blanco', 4);
console.log(gato);
console.log(gato.informacion());
console.log(gato.typeOfAnimal('mamifero'));


//------------ LEVEL 2 ----------------

//Ejercicio 1: Override the method you create in Animal class
class Perro extends Animal{
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs)
        this.breed = breed
    }
    moreInfo(){
        console.log(`y soy ${this.breed}`)
    }
}
const chihuahua = new Perro('Otso', 5, 'cafe', 4, 'pequeña');
console.log(chihuahua);
console.log(chihuahua.informacion());
chihuahua.moreInfo();


//------------ LEVEL 3 ----------------

//Ejercicio 1: Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
    constructor(arr){
        this.arr = arr
    }
    
    get describe(){
        return {
            Count: this.count(),
            Sum: this.sum()
        }
    }

    count(){
        const count = this.arr
        return count.length
    }
    sum(){
        let sum = 0;
        this.arr.forEach(num => {
            sum += num;
        });
        return sum;
    }
}
const descripcion = new Statistics(ages);
console.log(descripcion.describe)