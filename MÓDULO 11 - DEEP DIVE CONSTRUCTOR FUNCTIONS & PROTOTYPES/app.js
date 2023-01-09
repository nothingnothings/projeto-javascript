

// class Person {
//     name = 'Max';



// constructor() {
//     this.age = 30;
// }


// greet() {
//     console.log(
//         'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');

// }

// }




// const person = new Person(); 


// person.greet();





function Person () {
    this.age = 30;
    this.name = 'Max';
    this.greet = function() { 
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }

}
 

Person.prototype.printAge = function() {  /////////USAR ESSA FORMA DE edição de 'prototype', e não a forma PURA (pois a forma PURA faz overwrite do prototype antigo e o substitui por um objeto '__proto__', prototype, novo...)
    console.log(this.age);
}






Person.describe = function() {
    console.log('Creating persons...'); 
}
















console.dir(Person);

const p = new Person();

p.greet();


console.log(p);
console.log(p.__proto__);

const p2 = new p.__proto__.constructor();




console.log(p2);



console.log(p.toString())




console.log(p.length); 