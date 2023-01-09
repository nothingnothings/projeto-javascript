const listItemElements = document.querySelectorAll('li');
//const listItemElements = document.getElementsByTagName('li');


for(const listItemEl of listItemElements) {
    console.dir(listItemEl);
}

//botões (o addEventlistener possui uma anonymous function, do tipo arrow function):

const button = document.querySelector('button');





//

const h1 = document.getElementById('main-title');

const section = document.querySelector('section');

//section.style.backgroundColor = "blue"; //exemplo de mudança de estilos DE FORMA INLINE. TEM MAIOR PRIORIDADE SOBRE OUTRAS MANEIRAS DE MUDAR ESTILOS (TANTO POR MEIO DE CSS PURO, COMO POR MEIO DE JAVASCRIPT).


//section.className = '';  ----> medida utilizada para REINICIAR O ESTILO DE ALGUM ELEMENTO. Ao definir a classe como uma empty string, todos os estilos daquele negócio são resettados.

//section.className = 'red-bg' //Aqui, definimos o fundo como a cor vermelha, por meio desse seletor que está especificado dentro da tag <style> no documento html. OBS: essa definição de estilos por meio do className só funciona SE VOCÊ NÃO TIVER UM ESTILO DEFINIDO PELO MODO INLINE, OU SEJA, POR MEIO DO MÉTODO DE MAIOR PRIORIDADE ".style.xxx".


h1.textContent = 'Some new title!';
h1.style.color= 'white';
h1.style.backgroundColor = 'black';


const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + '(Changed!)';


section.className = 'red-bg visible';



/*button.addEventListener('click', () => {
    if (section.className === 'red-bg visible') {
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';  //o professor define um EventListener que vai fazer com que o estilo do elemento section mude para a cor vermelha de .red-bg e para a propriedade display:block; de visible.
    }
    
}); */


button.addEventListener('click', () => {    // VERSÃO MAIS SIMPLIFICADA DO CÓDIGO ACIMA, COM USO DO MÉTODO "toggle" que fica dentro do outro método/propriedade "classList".  
   // if(section.className === 'red-bg invisible') {
       // section.classList.toggle('visible');  ----> o toggle de "visible" também é irrelevante, pois quem realmente muda o display do negócio (e que deve ser alvo do toggle on/off) é a classe .invisible. Só ela já basta para o que queremos fazer.
   // } else { // COMO VOCÊ PODE VER, A ADIÇÃO DE IF/ELSE BLOCKS PARA CÓDIGOS COM "toggle" é completamente irrelevante e redundante.
        section.classList.toggle('invisible');
   // }
    
});








/*
Uma diferença pequena, que o professor já mencionou anteriormente, é que 
O SEGUNDO MÉTODO TE DÁ UMA _____LISTA____VIVA_____, que reflete as mudanças 
nos elementos selecionados. JÁ O PRIMEIRO MÉTODO, MÉTODO DO QUERYSELECTORALL, TE DÁ 
UMA ___lISTA_____MORTA____, QUE REFLETE APENAS O ESTADO INICIAL DESSES ELEMENTOS, E NÃO O ATUAL.
*/



/*Os objetos DOM 
em si mesmos, devido ao fato de serem reference values, VÃO REFLETIR MUDANÇAS 
FEITAS A ELES. ----------------------> ISSO É IMPORTANTE DE SE SABER!!!!*/


