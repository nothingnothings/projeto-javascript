/*//Library Land
const uid = Symbol('uid');



const user = {
    [uid]: 'p1',
    name: 'Max',
    age: 30
}


user.id = 'p2';


console.log(user);




console.log(Symbol('uid') === Symbol('uid'));



*/

const uid = Symbol('uid');







const user = {
    [uid]: 'p1',
    name: 'Max',
    age:30,
    [Symbol.toStringTag]: 'caganeira'
};





console.log(user.toString());








/*




const company = {
    curEmployee: 0,
    employees: ['Max', 'Manuel', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true }
        }

       const returnValue = { 
           value: this.employees[this.curEmployee],
            done: false 
            };
       this.curEmployee++;
       return returnValue;
    }
}




console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());

*/



/*

const company = {
    curEmployee: 0,
    employees: ['Max', 'Manuel', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true }
        }

       const returnValue = { 
           value: this.employees[this.curEmployee],
            done: false 
            };
       this.curEmployee++;
       return returnValue;
    }
}




let employee = company.next();



console.log(employee);
console.log(employee);
console.log(employee);


while(!employee.done) {
    console.log(employee.value);
    employee = company.next();
}


*/





/*

const company = {
    //curEmployee: 0, /////FAZ PARTE DO CÓDIGO DE 'next()', que é desnecessário para o funcionamento de nossa página, em razão da existência das GENERATOR FUNCTIONS e dos ITERABLE OBJECTS (objetos que já têm o método 'next()' em seu interior 'out of the box') CRIADOS A PARTIR DELA
    employees: ['Max', 'Manuel', 'Anna'],
    /*next() {  /////////////////////////////////-------> código de método (método usado em loops) totalmente desnecessário, pois o USO DE GENERATORS FAZ A MESMA COISA QUE ELE, MAS DE FORMA MAIS PRÁTICA E SEM vários calls de 'next()' (PORQUE GENERATOR FUNCTIONS JÁ CRIAM 'ITERABLE OBJECTS', OU SEJA, OBJETOS QUE JÁ POSSUEM O MÉTODO 'next()' em seu interior, de forma 'builtin'...)
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true }
        }

       const returnValue = { 
           value: this.employees[this.curEmployee],
            done: false 
            };
       this.curEmployee++;
       return returnValue;
    }, */  //

    /*
     getEmployee: function* employeeGenerator() {
                    let currentEmployee = 0;
                    while(currentEmployee < this.employees.length) {
                        
                        yield this.employees[currentEmployee];
                        currentEmployee++;
                    }
                }


}



const it = company.getEmployee();



console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/


/* 




const company = {
    curEmployee: 0,
    employees: ['Max', 'Manuel', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true }
        }

       const returnValue = { 
           value: this.employees[this.curEmployee],
            done: false 
            };
       this.curEmployee++;
       return returnValue;
    },
     [Symbol.iterator]: function* employeeGenerator() {
                    let currentEmployee = 0;
                    while(currentEmployee < this.employees.length) {
                        yield this.employees[currentEmployee];
                        currentEmployee++;
                    }
                }


}



for(const employee of company) {
    console.log(employee);
}

*/







const company = {
    
    employees: ['Max', 'Manuel', 'Anna'],

     [Symbol.iterator]: function* employeeGenerator() {
                    let currentEmployee = 0;
                    while(currentEmployee < this.employees.length) {
                        yield this.employees[currentEmployee];
                        currentEmployee++;
                    }
                }


}



for(const employee of company) {
    console.log(employee);
}








//////////////////////////////////////////////////////////////////// REFLECT API





const course = {
    title: 'Javascript - the complete guide'
};



// Reflect.setPrototypeOf(course, {toString() {
//     return this.title;
// }})

/*
console.log(course);
console.log(course.toString());
*/



//////////////////////////////////////////////// PROXY API....



const courseHandler = {
    get(obj, propertyName) {
        console.log(propertyName);
        if(propertyName === 'length') {
            return 0;
        }
        return obj[propertyName] || 'NOT FOUND';
    }
}



const pCourse = new Proxy(course, courseHandler);

console.log(pCourse.title, pCourse.length, pCourse.rating); ///EXEMPLO


console.log(pCourse.title);