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
