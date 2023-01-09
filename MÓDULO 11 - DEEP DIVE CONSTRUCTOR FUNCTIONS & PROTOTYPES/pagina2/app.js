class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}





// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.describe = function() {
//   console.log('Creating persons...');
// }

// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   }
// // };

// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.length);
console.log(p.toString());
//const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__);

console.log(p);







const p2 = new Person();


console.log(p.__proto__ === p2.__proto__);  /////RECEBEMOS 'TRUE', pois O PROTOTYPE DOS OBJETOS CRIADOS A PARTIR DA MESMA SUBCLASSE E COMPARTILHADO (e sempre o objeto do prototype/classe base).














const course = {

  title: 'Javascript - The Complete Guide',
  rating: 5
}


Object.setPrototypeOf(course, {
  
  
  ...Object.getPrototypeOf(course),   //////////////////EIS O CODIGO EM QUESTAO. Esse codigo realmente funciona, fara com que as propriedades do objeto prototype de seu objeto SEJAM COPIADAS E MANTIDAS NESSE NOVO PROTOTYPE QUE VOCE ESTARA DEFININDO.
  printRating: function() {
  console.log(`${this.rating}/5`);
}})



course.printRating();











const student = Object.create({
  printProgress: function() {
      console.log(this.progress)
  }
  
  }, {

    name: {writable: true,   //////////DEU, RESOLVIDO. E ASSIM QUE ADICIONAMOS VALORES AS PROPRIEDADES QUE NOS CRIAMOS/ADICIONAMOS COM ESSA MANEIRA ALTERNATIVA.
    configurable: true,
    value: 'Max',
    enumerable: true} 


} )


console.log(student);









Object.defineProperty(student, 'progress', {
  configurable: true,
  value: 0.8,
  enumerable: true,
  writable: false
  
  }
  )














//console.log(Object.getPrototypeOf(course));