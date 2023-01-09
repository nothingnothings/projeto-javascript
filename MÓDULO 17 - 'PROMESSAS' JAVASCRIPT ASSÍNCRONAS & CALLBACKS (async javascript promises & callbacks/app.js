const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  });
  return promise;
};



const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {

       navigator.geolocation.getCurrentPosition(success => {
           resolve(success);
       }, 
  error => {
    reject(error);
  }, options);  

  }); 
return promise;  
};






//function trackUserHandler() {
  //console.log('Clicked');

 // let positionData;


 // getPosition()
//  .then
 //   (posData => {
 //     positionData = posData;
//      return setTimer(2000);
      //console.log(posData);
//    }
//  )
//    .catch(error => {
 //     console.log(error);
 //     return 'on we go...';
 //   })

  
  //  .then(data => {
 //     console.log(data, positionData);
 //   })
    //(posData) => {  ///ESSE É UM CÓDIGO DE 'getCurrentPosition()', e não de 'getPosition', o qual é NA VERDADE UMA 'PROMISIFIED VERSION' DE getCurrentPosition, uma versão que usa '.then()' calls para então reduzir a sintaxe de difícil leitura das callback functions...
        /*
        setTimeout(() => {
        console.log(posData);
      }, 2000);
        */

       /* setTimer(2000).then(data => {
            console.log(data, posData);
        });
   
   
    },
    (error) => {
      console.log(error);
    } */

  
   
  
  
  
  
  
  
    

  /*setTimeout(() => {
    console.log('Timer done!');
  }, 0);
  console.log('Getting position...');*/
  /*setTimer(1000).then(() => {
    console.log('Timer done!');

  })

  console.log('Getting position...');
*/

//}






async function trackUserHandler() {  ///VERSÃO OPTIMIZADA DE UMA FUNÇÃO ASYNC QUE UTILIZA AS 'promises' ao máximo...
                                      ///ainda podemos ter o error handling, por meio da sintaxe 'try-catch' (em vez de 'catch', como fazíamos com then blocks 'normais'.).
                                    //ENTRETANTO, ESSAS FUNÇÕES 'ASYNC/AWAIT' TÊM BASTANTE DESVANTAGENS, COMO O FATO DE QUE VOCÊ NÃO PODE EXECUTAR CÓDIGOS SIMULTANEAMNETE DE MANEIRA ÓPTIMA (não é como os '.then blocks' normais e os promise chains comuns, que deixam vocÊ fazer  isso.) ------> isso significa que OS CÓDIGOS QUE ESTÃO LÁ EMBAIXO, DE 'setTimer' e  console.log de 'getting position' e 'timer Done!' SÓ SERÃO EXECUTADOS ______APÓS TODO ____ O CÓDIGO 'async/await' dentro do try-catch block TER SIDO EXECUTADO..... (step-by-step)... OU SEJA, NÃO HÁ COMO RODAR CÓDIGOS SIMULTANEAMENTE. Professor explica na aula 'async await vs raw promises' algumas das maneiras de contornar esse problema, mas AINDA ASSIM É MELHOR UTILIZAR a promise chain comum com os '.then() blocks' EM SITUAÇÕES COMO ESSAS... (em que você precisa executar múltiplas coisas ao mesmo tempo.)
                                    ////OBS::: 'AWAIT' só funciona, essa keyword só funciona EM FUNÇÕES, EM FUNÇÕES QUE TENHAM 'async' COLOCADO EM SEU NOME... (como nesse presente exemplo).
  
  try {
    const posData = await getPosition(); 
    const timerData = await setTimer(2000); 
  } catch (error) {
    console.log(error);
  }


    console.log(timerData, posData); 




















}

















button.addEventListener('click', trackUserHandler);

/*
let result = 0;


for (let i = 0; i < 1000000000; i++) {
    result += i;
}


console.log(result); */









/*
(async function() {
await setTimer(1000);  ---------------------> EXEMPLO DE 'IIFE' ----> 
})();
*/  


// O QUE SÃO IIFEs?   



// IIFE ==== IIFE (Immediately Invoked Function Expression) ----> é uma função 
// em JavaScript que é executada assim que definida.



// IIFES SÃO UTILIZADAS, POR EXEMPLO, EM CASOS EM QUE 

// VOCÊ QUER COLOCAR CÓDIGOS 'AWAIT' NO CONTEXTO 

// GLOBAL DE UM CÓDIGO JAVASCRIPT (normalmente não poderíamos 
//   fazê-lo, por causa da ausência de 'async' na funçãõ, mas se embalarmos o negócio em uma IIFE, É POSSÍVEL 
//   SIM fazê-lo.)

