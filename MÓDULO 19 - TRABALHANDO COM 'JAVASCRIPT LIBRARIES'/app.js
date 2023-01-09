










const customers = ['Max', 'Manuel', 'Anna'];



const activeCustomers = ['Max', 'Manuel'];


//const inactiveCustomers = customers - activeCustomers; //////////ISSO NÃO FUNCIONARÁ; VOCÊ DEVE USAR A FUNÇÃO/FUNCIONALIDADE '_.difference' NA THIRD PARTY LIBRARY 'Lodash' QUE FOI ADICIONADA A ESSE PROJETO... (ver index.html, lá há o import desse script.)

const inactiveCustomers = _.difference(customers, activeCustomers);




console.log(inactiveCustomers);




















console.log(inactiveCustomers);