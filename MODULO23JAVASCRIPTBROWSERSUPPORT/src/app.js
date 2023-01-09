//import 'core-js'; -------> IMPORTA __TUDO___ do core-js. Não é recomendado, deixa nossas webpages gordas e lentas.
//import 'core-js/features/promise' ///////FORMA RECOMENDADA DE IMPORTAR FEATURES ESPECÍFICAS DE ALGUMA THIRD PARTY LIBRARY (no caso, de 'core-js'). ----------> MAS AINDA NÃO É A MELHOR FORMA. A MELHOR FORMA É USAR 'BABEL'...


//import 'core-js/stable';
//import 'regenerator-runtime/runtime'; ////////USADO COM "useBuiltIn: entry"   no preset de babel em webpack.config.js PARA QUE O BABEL PROCURE AUTOMATICAMENTE POR POLYFILLS QUE FAÇAM MAIS SENTIDO NO SEU CÓDIGO/PROJETO, e que substituam esses dois (core-js e regenerator-runtime) 



const button = document.querySelector('button');


const textParagraph = document.querySelector('p');


const promise = new Promise();

console.log(promise);



/*
button.addEventListener('click', () => {
const text = textParagraph.textContent;
navigator.clipboard.
writeText(text).
then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});
});
*/






button.addEventListener('click', () => {
    const text = textParagraph.textContent;
    if (navigator.clipboard) {  ///esse código desse if block só será executado SE ESSA FEATURE FOR SUPORTADA NESSE  determinado BROWSER...
        navigator.clipboard.
        writeText(text).
        then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
    } else {
        alert('Your browser is shit and does not support this feature'); ///Isso é usado para BROWSERS QUE NÃO FUNCIONAM, ESSE ELSE BLOCK. ISSO FAZ COM QUE NOSSO CÓDIGO NÃO __QUEBRE___/CRASHE. É o código de fallback.
    }
    
    });




console.log('It works');

console.log(' live reloading is working');






//////O IF CHECK NOS MOSTRA COMO FAZER FEATURE DETECTION NO NOSSO CÓDIGO, E COMO EXECUTAR VERSÕES DE NOSSO CÓDIGO DE ACORDO COM A PRESENÇA/AUSÊNCIA DE FEATURES NOS BROWSERS.