const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;



let gameIsRunning = false;


const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';




const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();             //IMPORTANTE ----> SE NÓS DEIXARMOS ASSIM, AS ÚNICAS STRINGS QUE ESSA FUNÇÃO ACEITARÁ SERÃO STRINGS SEM MAIÚSCULAS, EXATAMENTE DESSA FORMA QUE AS DEFINIMOS. MAS HÁ UMA FORMA DE CONVERTER AS STRINGS PARA LOWERCASE/UPPERCASE. Para fazer isso, UTILIZAMOS A FUNÇÃO ".toUpperCase()". Chamamos essa função NO RETURN VALUE DE PROMPT. O return value de prompt É UMA STRING, COMO VOCÊ APRENDEU... E COMO VOCÊ APRENDEU, OBJETOS PODEM, SIM, TER MÉTODOS (funções).
    if(                                                                                             //Você também aprendeu que strings são VALORES PRIMITIVOS, e que não são objetos, MAS NESSE MESMO VÍDEO, O PROFESSOR MOSTROU QUE VOCÊ AINDA PODE ACESSAR CERTAS PROPRIEDADES E FUNÇÕES ____DENTRO DESSES PRIMITIVE VALUES_____, AINDA QUE ELES NÃO SEJAM PROPRIAMENTE OBJETOS. QUANDO FAZEMOS ISSO, QUANDO USAMOS PROPRIEDADES DENTRO DE PRIMITIVE VALUES, OS UTILIZAMOS TEMPORARIAMENTE COMO OBJETOS (+ OU - ISSO). O assunto é mais complexo, mas essa é basicamente a ideia.
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        //return DEFAULT_USER_CHOICE;
        return;
    }
    return selection;
};







const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}








                                                //Aqui também há um exemplo de "ARGUMENTO DEFAULT" --->  é "xxx = DEFAULT_USER_CHOICE". O operador = é que viabiliza essa definição de argumentos/parâmetros default.
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>     // EXEMPLO DE ARROW FUNCTIONS EM AÇÃO. SÃO FORMAS ESPECIAIS DE FUNCTION EXPRESSIONS, QUE POSSUEM O BENEFÍCIO DE SEREM MELHORES DE TRABALHAR COM OBJETOS. TAMBÉM DISPENSAM O USO DE "{}" e "return" (dentro das funções... porque elas sempre retornam os valores que estão escritos na sua sintaxe). Ver arquivo sobre arrow functions.
                            cChoice === pChoice
                            ? RESULT_DRAW
                            : (cChoice === ROCK && pChoice === PAPER ||
                            cChoice === PAPER && pChoice === SCISSORS ||
                            cChoice === SCISSORS && pChoice === ROCK)
                            ? RESULT_PLAYER_WINS
                            : RESULT_COMPUTER_WINS;











/*const getWinner =*/ /*function(cChoice, pChoice) {              // FORMATO PADRÃO DE UMA FUNÇÃO ANÔNIMA/  FUNÇÃO EM FORMATO DE EXPRESSÃO/ EM AÇÃO.

    if(cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER ||
               cChoice === PAPER && pChoice === SCISSORS ||
               cChoice === SCISSORS && pChoice === ROCK) {
                return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}
*/ 














startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
   // const winner = getWinner(computerChoice, playerChoice);
   let winner;
   if(playerChoice) {
       winner = getWinner(computerChoice, playerChoice);
   } else {
       winner = getWinner(computerChoice, playerChoice);
   }
    console.log(`Computer played ${computerChoice}`)
    console.log(winner);                          /*ex de parâmetro default*/
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, the machine has picked ${computerChoice}, therefore you `; //VARIÁVEL CRIADA PARA SER A MENSAGEM.
    if (winner === RESULT_DRAW) {  //if block criado para outputtar espécie específica de mensagem, no caso de empate.
            message += 'had a DRAW.'; }
            else if (winner === RESULT_PLAYER_WINS) {
                message += 'WON.'; }
                    else {
                        message += 'LOST.';
            }
            alert(message);
            gameIsRunning = false; //variável "gameIsRunning" é aqui definida como false para QUE SEJA POSSÍVEL JOGAR DE NOVO SEM RECARREGAR A PÁGINA. O nome aqui faz sentido, pois realmente o jogo não está mais rodando.
});




//deu, tudo pronto.

//あささ



















































































/*function startGame() {
    console.log('Game is starting...');
}
*/


/*const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
};


person.greet();


*/




//startGame();  // ----> exemplo de execução direta de função, mencionada pelo professor no início do módulo.



//startGameBtn.addEventListener('click', startGame); //-----> EXEMPLO DE EXECUÇÃO INDIRETA DE FUNÇÃO (a função startGame, sem o ().)









/*














FUNÇÕES VS MÉTODOS.




Trabalharemos com um programa simples.



O programa tem apenas um botão. Pedra, papel e tesoura.


A maior parte da interação do aplicativo acontecerá com a ajuda de ALERTS E PROMPTS e o 
console.


Mas nós temos aquele botão para começar o jogo.... no arquivo app.js que está sendo importado aqui, 
nós temos BASICAMENTE UM ARQUIVO VAZIO, a única coisa que o professor colocou para nós foi 
um acesso ao botão, por meio da linha de código


"const startGameBtn = document.getElementById('start-game-btn');"


Esse acesso ao botão nos permite adicionar um event listener.


Falando de eventListeners, nós podemos, é claro, adicionar uma função, talvez chamada de 
"startGame". Function keyword, aí parênteses, e aí o function body. No function body colocamos uma 
simples mensagem de "o jogo está começando".




Depois podemos chamar a função lá embaixo, com "startGame();".



Depois de salvar tudo isso, abrimos a página e recarregamos.


No console a mensagem "Game is starting" agora nos é mostrada.



Clicar no botão, no entanto, não produz resultados, porque nós ainda não conectamos a função 
startGame(); ao botão, nós apenas a executamos (a função startGame) "solta" no código.
ISSO SERIA AQUILO QUE O PROFESSOR CHAMOU DE "EXECUÇÃO DIRETA" de função.



AÍ ADICIONAMOS UM CHAMADO DE EXECUÇÃO INDIRETA DA FUNÇÃO "STARTGAME":


startGameBtn.AddEventListener('click', startGame);



Não devemos adicionar parênteses aqui, isso resultaria num erro de sintaxe. Execuções indiretas não levam parênteses/parâmetros.



O javascript, por trás das cenas, realiza a execução indireta da função, por isso que dispensamos o uso de () em casos 
de execução indireta.


Se salvarmos nossas alterações e recarregarmos a página, veremos agora que a mensagem de que o jogo está começando 
só aparecerá quando nós clicarmos no botão.



A primeira coisa que o professor quer esclarecer aqui, que quer aprofundar mais, é ESSA 
FUNÇÃO "ADDEVENTLISTENER".


addEventListener, diz ele, NÃO É UMA FUNÇÃO DEFINIDA POR NÓS.

É UMA FUNÇÃO PROVIDENCIADA PELO BROWSER... mas nós não a chamamos assim:

addEventListener('click', startGame); , 

mas sim, assim:


startGameBtn.addEventListener('click', startGame);  



----------> OU SEJA, CHAMAMOS A FUNÇÃO NESSE/DENTRO DESSE STARTGAMEBTN, QUE PARECE SER UM OBJETO, 
JÁ QUE NÓS UTILIZAMOS A DOT (.) NOTATION. Nós aprendemos que objetos podem ter propriedades... você 
pode ter algo como:



const person = {name: 'Max'};

(UM OBJETO PESSOA, COM UMA PROPRIEDADE NOME, QUE TEM UM VALOR 'Max', DESSA FORMA... )



E vimos, também, que você sempre pode acessar as propriedades dentro de um objeto por meio de 

.xxxx -------->     ex: console.log(person.name);



Essas são sintaxes que aprendemos, são coisas que já sabemos.





COM STARTGAMEBTN TAMBÉM UTILIZAMOS A DOT (.) NOTATION.... MAS O QUE NÓS FIZEMOS NESSE CASO NÃO FOI 
ACESSAR A PROPRIEDADE DE UM OBJETO, Não estamos a logando, ou fazendo algum cálculo com ela.... em vez disso, 
estamos EXECUTANDO-A COMO UMA FUNÇÃO, e  ___DE FATO____, FUNÇÕES PODEM SER 
ARMAZENADAS DENTRO DE OBJETOS, TAMBÉM.


Para mostrar isso--> se nós criarmos uma constante "person" e então adicionarmos uma 
propriedade "greet:", como uma propriedade comum, como qualquer outra....



ex:


const person = {
    greet:
}



Até agora, nada de especial... MAS EM VEZ DE TER UM VALOR ALI NA DIREITA, NO SLOT 
DO VALUE PAIR, ALGO COMO 'Max', ou um número, OU ATÉ MESMO OUTRO OBJETO, vocÊ 
 TAMBÉM PODE COLOCAR UMA FUNÇÃO NESSE SLOT. Por exemplo, a função "greet".




 ex:


const person = {
    greet: function greet() {

    }
}


Para a execução de código/function body do greet, poderíamos colocar uma função basica, como 
console.log.


ex:


const person = {
    greet: function greet() {
        console.log('Hello There!')
    }
}



ESSE SERIA UM EXEMPLO DE UMA FUNÇÃO BÁSICA ARMAZENADA NO INTERIOR DE UM OBJETO.
A única coisa especial aqui, de verdade, é apenas o que está na direita, onde 
colocamos uma função EM VEZ DE UM VALOR...

É claro que esse é um uso DIFERENTE DAS FUNÇÕES, PORQUE ATÉ AGORA NÓS SEMPRE CRIAMOS 
FUNÇÕES DE FORMA STANDALONE... nunca havíamos armazenado as funções em lugar algum, só as declarávamos 
no nível global do código. Caso padrão, em que escrevemos a função e o javascript já registra ela 
automaticamente, e após a realização desse ato, podemos chamá-la por seu nome...

aqui, o professor também faz isso, mas há a peculiaridade da função parecer estar ARMAZENADA DENTRO DO OBJETO.



E, de fato, se nós agora executarmos "person.greet();" , algumas linhas abaixo da definição de person, 
PODEMOS EXECUTAR GREET COMO UMA FUNÇÃO NORMAL.



ex:


const startGameBtn = document.getElementById('start-game-btn');





function startGame() {
    console.log('Game is starting...');
}



const person = {
    greet: function greet() {
        console.log('Hello there!');
    }
};



person.greet();  // ---------> A EXECUÇÃO DAQUELA FUNÇÃO/PROPRIEDADE no interior do objeto,  EM QUESTÃO.







startGameBtn.addEventListener('click', startGame);





SE RECARREGARMOS A PÁGINA, VEREMOS A mensagem

"Hello there!" já outputtada no console.


Portanto, de fato, podemos armazenar uma função em um objeto...

A FUNÇÃO PASSA A SER CHAMADA DE ____"MÉTODO"_____, E NÃO MAIS "FUNÇÃO".


"Method" É só um termo para as funções que ficam dentro de objetos... é apenas um nome.
É similar a "property", que é apenas uma variável definida dentro de um objeto... são todos nomes bonitos para 
diferenciar coisas parecidas. 

BASICAMENTE, SE VOCÊ ARMAZENAR UMA FUNÇÃO EM UMA PROPRIEDADE DE UM OBJETO, VOCÊ DEVE 
CHAMÁ-LA DE "mETHOD".

Mas um method não é nada mais do que uma função EM UM OBJETO.



ADDEVENTLISTENER, PORTANTO, ___É UM MÉTODO_____(FUNÇÃO DENTRO DE OBJETo) DENTRO 
DESSE OBJETO "startGameBtn". (sim, startGameBtn é um objeto...)



startGameBtn é um objeto GERADO PARA NÓS POR MEIO DO JAVASCRIPT, POR MEIO 
DE OUTRO MÉTODO, O MÉTODO "getElementById", que existe nessa "coisa" chamada "document".

getElementById ---> gera o objeto start-game-btn.(que é um elemento da página html), que é então armazenado na constante startGameBtn.




essa "coisa" chamada "document" É, NO FINAL DAS CONTAS, UMA VARIÁVEL DISPONÍVEL GLOBALMENTE, QUE 
NOS DÁ ACESSO AO NOSSO DOCUMENTO HTML.


Veremos mais sobre "document" mais tarde... no módulo que mostra como 
as formas pelas quais podemos interagir com o código HTML.


Enfim, getElementById ___É, TAMBÉM, UM MÉTODO...., que no final das contas 
GERA/NOS DÁ esse objeto (o objeto start-game-btn), o qual nós então armazenamos na 
constante startGameBtn, lá no início do código.



startGameBtn, que segura um objeto, por sua vez tem a ele adicionado o método "ADDEVENTLISTENER",
que nós então chamamos/podemos chamar para registrar esse eventListener.



ARMAZENAR FUNÇÕES EM OBJETOS, PORTANTO, É POSSÍVEL; SÃO CHAMADAS DE MÉTODOS. 



--> Os "getElementById" SÃO MÉTODOS QUE CRIAM OBJETOS/GERAM OBJETOS a partir de elementos da página html.



ADDEVENTLISTENER ---> é um método utilizado em objetos variados no código javascript.



métodos são chamados assim:




EX:

objeto = {
método: função método () {
        console.log('Merda');
    }
}




objeto.método();



ESSE É A PRIMEIRA COISA IMPORTANTE SOBRE MÉTODOS.

*/