
function add(num1, num2) {
    return num1 + num2;
}


//console.log(add(1, 5));
//console.log(add(12, 15));






function addRandom(num1) {
    return num1 + Math.random();
}


//console.log(addRandom(5));









const hobbies = ['Sports', 'Cooking'];



function printHobbies(h) {


    h.push('NEW HOBBY');
    //console.log(h);
}


printHobbies(hobbies);


let multiplier = 1.1;



function createTaxCalculator(tax, multiplier) {
    console.log(multiplier);
    function calculateTax(amount) {
        console.log(multiplier);
         return amount * tax * multiplier;
}
return calculateTax;
}






const calculateVatAmount = createTaxCalculator(0.19, 2); /////// é aqui, nessa linha de código, em que a função interna é efetivamente criada/chamada....
const CalculateIncomeTaxAmount = createTaxCalculator(0.25); ////// mesma coisa aqui...

multiplier = 1.2;  /////////////MUDANÇA DO VALOR DO MULTIPLIER.

console.log(calculateVatAmount(100));
console.log(CalculateIncomeTaxAmount(200));










let userName = 'Max';




function greetUser() {
    let nome = 'Anna';
    let name = userName;
    console.log('Hi ' + userName);
    console.log(name);
    console.log(nome);  ///////vai nos mostrar 'anna', o valor dessa variável NO AMBIENTE INTERNO DESSA FUNÇÃO, E NÃO O VALOR QUE ESTÁ ARMAZENADO NA VARIÁVEL DE MESMO NOME, MAS NO CONTEXTO GLOBAL...
}


nome = 'Maximillian';

userName = 'Manuel';


greetUser();






function greetUser2() {
    console.log(namae);
}




//greetUser2();      //-------> SE EU CHAMAR essa função aqui, ELA NÃO FUNCIONARÁ. Não funcionará pq estarei chamando a função QUE USA A VARIÁVEL 'namae' ANTES DE TÊ-LA DEFINIDO. Receberei o erro 'Uncaught ReferenceError: Cannot access 'namae' before initialization
                                //at greetUser2 (app.js:107)
                                //at app.js:113


let namae = 'Jonas';  




//greetUser2();   ///SE EU CHAMAR ESSA FUNÇÃO AQUI, ela funcionará, POIS JÁ TEREI DECLARADO A variável global 'namae' ('let namae = 'Jonas';') LOGO ACIMA....






















//multiplier = 1.2;  /////////////MUDANÇA DO VALOR DO MULTIPLIER. ------------------> SE COLOCÁSSEMOS A ALTERAÇÃO/REDEFINIÇÃO DE MULTIPLIER AQUI, o output seria composto de '1.1' '1.1' '1.1 , pois A ORDEM DE EXECUÇÃO IMPORTA, NO CONTEXTO GLOBAL...





// function powerOf(x, n) {    ////forma 'SIMPLES' de escrever essa função; NÃO UTILIZA 'INCURSION' (que é chamar A PRÓPRIA FUNÇÃO POR MEIO DE ELA MESMA...).


//     let result = 1;
    


//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }






function powerOf(x, n) {    //VERSÃO DA FUNÇÃO 'POTENCIA' QUE UTILIZA O RECURSO 'INCURSION'... É UM RECURSO QUE DEIXA O CÓDIGO MAIS CURTO E LEVE....

    
    
if (n === 1) {
    return x;
}

    return x * powerOf(x, n - 1); //ESTAMOS CHAMANDO ESSA PRÓPRIA FUNÇÃO POR MEIO DE ELA MESMA...
}






// function powerOf(x, n) {   

    
    
// return n === 1 ? x : x * powerOf(x, n -1);        /////VERSÃO DE 'INCURSION' MAIS LEVE AINDA, QUE UTILIZA TERNARY EXPRESSION. USA O RETURN DE UMA TERNARY EXPRESSION PARA NOS RENDER O VALOR DA POTENCIAÇÃO dessa função...RESUMO: 
                                                    /*'apenas retorne 'x' se 

                                                        'N' FOR IGUAL A 1......


                                                        CASO CONTRÁRIO, REALIZE ESSA OPERAÇÃO (a operação 'x * powerOf(x, n - 1);')' */


//}











console.log(powerOf(2, 3)); 










console.log(powerOf(2, 3)); 













const myself = {

    name: 'Max',

    friends: [
        {
            name: 'Manuel',
        friends: [
            {
                name: 'Chris'}

        ]},

        {
            name:'Julia'
            },

            {
                name: 'Hari'
            }, 
    
            {
                name: 'Amilia'
                }
       
    ]
};




/*function printFriendNames(person) {   VERSÃO DESSE CÓDIGO QUE ___ NÃO USA INCURSION___. DEVE-SE USAR O CÓDIGO QUE ESTÁ LOGO ABAIXO, QUE UTILIZA RECURSION PARA FAZER PRINT DE TODOS OS AMIGOS 'NESTED' DENTRO DO OBJETO/CONST 'myself' ( faz print até dos 'friends' dos 'friends'...).
    const collectedNames = [];


    for(const friend of person.friends) {
            collectedNames.push(friend.name);}


            return collectedNames;

}  */       




function getFriendNames(person) { 
    const collectedNames = [];


    if (!person.friends) {
        return [];
    }

    for(const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));         //////EIS AQUI O RECURSION. ESSA VERSÃO DO CÓDIGO USA RECURSION, E POR ISSO É SUPERIOR; USA RECURSION PARA FAZER PRINT DE TODOS 'FRIEND' NESTEADOS DENTRO DE OUTROS 'FRIENDS'...

    }

        return collectedNames;

    

}



console.log(getFriendNames(myself));







console.log(getFriendNames(myself));  









/*
function powerOf(2, 3) {

}

function powerOf(2, 2) {

}


function powerOf(2, 1) {

}




Resumo da função, do resultado dela, ficaria assim:


      2
return x *  powerOf (
    powerOf( retorna 4, pq 'x' * ' VALOR DE X RETORNADO' dá 4...;)
) ----------------------------> ISSO DARIA 8...






Resumindo: */

//X vezes 'x' VEZES VALOR DE 'return x' (OU SEJA, do valor de x, que é 2, retornado pela última function call...)