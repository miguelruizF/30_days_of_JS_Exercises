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