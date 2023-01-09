/* Arquivo de script usado para mostrar as diferenças entre var e let/const.
Aqui queremos ver a diferença entre FUNCTION & GLOBAL SCOPE  E "BLOCK SCOPE", que é usado 
pelo let e const*/


/*OBS: LEMBRA-SE? O PROFESSOR DISSE QUE QUALQUER VARIÁVEL/CONSTANTE QUE VOCÊ CRIAR 
FORA DE UMA FUNÇÃO TEM SEU CARÁTER COMO GLOBAL, E QUE QUALQUER 
VARIÁVEL/CONSTANTE QUE VOCÊ CRIAR EM UMA FUNÇÃO TERÁ UM CARÁTER "LOCAL"; será uma 
variável/const que funcionará dentro daquela função e em mais nenhum outro lugar, não poderá ser utilizada fora dali.


Isso seria falso?



NÃO.




A BOA NOTÍCIA É QUE TUDO ISSO É VERDADEIRO... Mas há um pouco mais acerca dessa matéria.
Há algumas coisinhas sobre let e const que ainda não aprendemos.
Mas deixamos para explicar agora, pois agora temos tudo de que precisamos para entender 
suas peculiaridades, agora sabemos sobre if statements e loops.
*/



/*começamos de forma simples: criamos uma variável, com let, a qual definimos 
uma string/valor de uma string 'Max'; */

// depois disso, criamos uma função de nome "greet();"

// colocamos na function body a função "console.log" do valor de name, que é max.

// Depois disso, chamamos a função no código, logo abaixo.



let name = 'Max';

if (name === 'Max') {
    var hobbies = ['Sports', 'Cooking']; //IF CHECK usado para demonstrar a diferença principal entre VAR e LET.
    console.log(hobbies);
}


function greet() {
    //let age = 30;
    var age = 30;
    var name = 'Manuel';
    console.log(name, age);

}


console.log(name, hobbies);

greet();


//se recarregarmos a página, veremos a string Max apresentada no console.



//isso é algo que aprendemos anteriormente. Outra coisa que aprendemos é que você 
//pode entrar DENTRO da função e criar uma variável la dentro, por exemplo, a variável "age".
//Utilizamos a variável age, então, para outputtar seu valor naquele mesmo log.
//ex: "console.log(name, age)".



// ATÉ AÍ, TUDO BEM. PORÉM, SE VOCÊ TENTAR CONSOLE.LOGGAR ALGO FORA DAQUELA FUNÇÃO, 
// EM UM LUGAR SOLTO DO CÓDIGO E COM AQUELA MESMA VARIÁVEL "AGE" (QUE FOI CRIADA DENTRO DE UMA FUNÇÃO; LEMBRE-SE DAQUILO QUE 
//FALAMOS SOBRE VARIÁVEIS/CONSTANTES LOCAIS, ELAS NÃO PODEM SER UTILIZADAS DO LADO DE FORA DAS FUNÇÕES).
// Nesse caso, a variável name seria apresentada no log do console do devtools, pois é uma variável global, MAS AGE, QUE É LOCAL, NÃO SERÁ APRESENTADA.

// O erro que aparece é "Uncaught ReferenceError: age is not defined". Isso crasha o código. Se o professor deletar age e deixar apenas name, a função é executada normalmente.


//Aprendemos, também, que você pode "shadow" uma variável, redeclará-la dentro 
// de uma função, definir outro valor para ela naquela função.
//ex: 

/*function greet() {
    let age = 30;
    let name = 'Manuel'; //exemplo de shadowing da variável name, que fora definida globalmente no início do código. Isso (a redefinição do valor de uma variável/const global definida por let/const) é algo que somente podemos fazer dentro das funções do código, não podemos simplesmente colocar FORA DE UMA FUNÇÃO outro comando para definir uma variável( ex: "let name = 'Max';
                                                                                                                                                                                                                                                                                                                                                                        let name = 'Anna'")  ---> ISSO RESULTARÁ EM UM ERRO. o que vocÊ pode fazer é : ex: "let name = 'Max';
                                                                                                                                                                                                                                                                                                                                                                                                                                                            name = 'Anna'".     ----------------> OBS: O erro que aparece aqui é "Uncaught Syntax error: Identifier 'name' has already been declared.""
    console.log(name, age);

}

*/


//Com shadowing, o javascript faz overwrite do valor da variável/const definida globalmente pelo valor definido localmente em uma função, MAS APENAS PARA AQUELA FUNÇÃO. Ele essencialmente ignora a variável global e utiliza a local.




// Isso tudo você ja sabe, mas o que vocÊ NÃO SABE?


//LET E CONST ---> block scope.



// VAR = GLOBAL SCOPE.



// o que isso significa é que, até agora, você poderia substituir todas as variáveis com "let" por "var", E VOCÊ RECEBERIA EXATAMENTE O MESMO COMPORTAMENTO.S



//VAR = GLOBAL SCOPE....



// MAS... AGORA QUEREMOS VER DIFERENÇAS: 


// DIFERENÇA = imagine a mesma situação de antes, 2 linhas de código declarando os 
// valores de uma variável chamada "name". Mas, em vez de colocarmos "let name = xxx", 
// Usamos a keyword VAR.


// EX:


// let name = 'Max';
// let name = 'Anna';  

//   <<<---->>>> ESSE CÓDIGO RESULTAVA EM UM ERRO; VOCÊ NÃO PODE DEFINIR UMA MESMA VARIÁVEL 2X GLOBALMENTE POR MEIO DE LET.


//----> Mas  e se eu usar "VAR"?



// var name = 'Max';
// var name = 'Anna';


// RE-DECLARAÇÕES DE VARIÁVEIS COM VAR, PORTANTO, NÃO NOS ATIRAM ERROS NA NOSSA CARA. ESSa é a primeira pequena diferença, MAS HÁ DIFERENÇAS MUITO MAIORES.



// Mas ainda assim, o professor diz que o uso de let aqui é melhor, pois nós QUEREMOS 
// RECEBER UM ERRO NESSES CASOS, porque redeclarar uma variável que vocÊ já declarou naquele 
// não é algo que você quer normalmente, VOCÊ TIPICAMENTE QUER, NA MAIOR PARTE DOS CASOS, APENAS 
// REASSIGNAR UM VALOR àQUELA VARIÁVEL, E NÃO REDECLARÁ-LA/recriá-la POR INTEIRO.


// Mas tudo isso é sobre uma pequena diferença, e não a diferença principal, que é a SCOPE.


// Bem, aqui nós temos essa função, a função "greet();", 






/*  var name = 'Max';


function greet() {
    var age = 30;
    var name = 'Manuel';
    console.log(name, age);

}

console.log(name, age);


greet();


*/



//-----------> Agora, o professor vai querer fazer o output de uma variável criada localmente, a variável "age", LÁ EMBAIXO, NA FUNCTION CALL 
// DO CONSOLE.LOG  ( "console.log(name, age);").


// O professor recarrega a página e nos mostra que recebemos O MESMO ERRO DE ANTES, o erro de que 
// estamos utilizando uma variável criada localmente (a variável "age") em uma função global/nível root do javascript.
// Na verdade não é o mesmo erro... esse erro fala sobre age "não estar definidO", e não "não estar declarado", como 
// nos era mostrado o erro com o uso de LET.


// ENTRETANTO, PODEREMOS VER UMA DIFERENÇA SE O PROFESSOR MUDAR UM NEGÓCIO:


// Se colocarmos um if check depois da definição da variável de 'Max'... 
// "Se name for 'Max'... (o que ele é, é claro), quero que você crie uma nova variável, 
// a variável hobbies, que segurará um array com sports, cooking, etc. Assim que fizer isso,
// faça também o console.log do valor dessa variável."
// 


// fórmula: 

//  if (name === 'Max') {
    // var hobbies = ['Sports', 'Cooking'];
    // console.log(hobbies)
// }




// Feitas todas essas alterações, vou querer também LOGAR A VARIÁVEL HOBBIES LÁ EMBAIXO, NAQUELE CONSOLE.LOG LÁ.
// console.log(name, hobbies);




/* Continuando: 

Bem, aquilo ali não é uma função, certo? É um if statement, correto? 
É um IF STATEMENT, E EU ESTOU USANDO "VAR". Agora se eu salvar tudo isso e der reload, 
veremos que no console não verei erro algum. No console vai ser printado aquele array lá, do hobbies, 
normalmente. Mas é por isso que o negócio está bizarro: Por que uma 
variável criada dentro de um if statement com var pode ser utilizada no 
lado de fora por uma outra função, globalmente?

Você espera que isso não vai funcionar, porque uma variável ESTÁ SENDO CRIADA 
DENTRO DE UM IF STATEMENT. Mas o que isso tudo significa? 


Bem, como a variável criada não está dentro de uma função (o if statement não é uma função), 
isso simplesmente significa que as variáveis criadas por var dentro de if statements são TRATADAS COMO 
VARIÁVEIS GLOBAIS. É COMO SE FOSSE UMA VARIÁVEL GLOBAL NORMAL, DEFINIDA LÁ EM CIMA, NO INÍCIO DA FUNÇÃO.
Essencialmente, podemos usar "hobbies" agora em qualquer lugar do código, como se fosse uma variável global. Podemos até mesmo 
usá-lo naquela outra função de console.log que está dentro de greet, e nenhum erro nos será apresentado.


AGORA, PARA MOSTRAR AINDA MAIS AS DIFERENÇAS ENTRE LET E VAR, O PROFESSOR TROCA 
A KEYWORD VAR DE HOBBIES PARA A KEYWORD LET.
"let hobbies".



Com essa mudança salvada e a página recarregada, percebemos que 
RECEBEMOS UM ERRO. NÓS AINDA RECEBEMOS AQUELE LOG DE DENTRO DO IF STATEMENT ("console.log(hobbies);"),
O QUE ESPERÁVAMOS QUE IA ACONTECER, PORQUE NÓS HAVÍAMOS CRIADO A VARIÁVEL HOBBIES DENTRO DAQUELE IF STATEMENT, ENTÃO ELE SER MOSTRADO POR UMA FUNÇÃO QUE EXISTE ALI DENTRO, LOCALMENTE, 
NÃO É TÃO GRANDE SURPRESA. MAS DEPOIS DESSE CONSOLE.LOG NÓS RECEBEMOS UM ERRO, 
QUE É DERIVADO DA LINHA EM QUE ESTÁ ESCRITO O "console.log(name, hobbies)".

ESSA É A DIFERENÇA: 

VAR SÓ CONHECE ____GLOBAL SCOPE___   E  ______FUNCTION SCOPE______, 
por isso uma variável criada em uma função não pode ser utilizada fora dela, 
e uma variável criada globalmente pode ser usada em qualquer lugar. 


Para let e const, isso também ocorre de forma igual, variáveis e constantes locais só podem ser
usadas localmente, variáveis e constantes globais podem ser usadas em qualquer lugar...
MAS, NA VERDADE, LET E CONST NÃO SE IMPORTAM COM FUNÇÕES (FUNCTION SCOPE), ELAS SOMENTE 
SE IMPORTAM COM OS CURLY BRACES. SÃO OS CURLY BRACES QUE DELIMITAM AS FUNÇÕES, QUE SEPARAM 
UMA CONSTANTE GLOBAL DE UMA LOCAL. MAS OS CURLY BRACES TAMBÉM DELIMITAM IF STATEMENTS, LOOPS, try-catch blocks.
Essa nóia dos curly braces serem importantes para variáveis/constantes globais e locais só não se aplica 
à objetos (objeto = {};), porque a sintaxe do objeto é sempre baseada em key-data pairs; você não pode 
criar uma variável/constante dentro de um objeto, essa sintaxe é INVÁLIDA.


Todos esses curly braces que você tem em seu código, se você criar variáveis com let/const dentro 
dessas curly braces, as variáveis ficarão, então, "SCOPADAS" naquele bloco. As curly braces marcam um 
bloco, no final. Por isso as variáveis são apenas disponíveis naquele bloco, porque as curly braces as delimitam. As variáveis não conseguem
"vazar" para fora daquele lugar específico. Essa é a diferença delas para VAR.




Isso é muito bom, porque nos confere mais controle sobre onde nossos dados estarão disponíveis.
Quer usar hobbies em todo o lugar? Simplesmente o declare no início, com "let", 
e depois defina-o ao longo do código, sem usar a keyword let.


ex:


let hobbies = 'exemplo';



if (name === 'Max') {
    hobbies = currentHobbiesExample;
}



Isso funciona, porque você sempre pode acessar constantes/variáveis definidas em um nível superior, em um bloco 
acima daquele bloco específico. MAS VOCÊ NÃO PODE ACESSAR VARIÁVEIS DEFINIDAS EM UM "BLOCK FILHO" NO NÍVEL SUPERIOR.



Você tem mais controle com esse controle de blocos, e vocÊ pode também evitar questões nojentas e 
comportamentos não desejados que você tinha com var no passado.



É por isso que com javascript moderno, você SÓ USA LET E CONST. Ele te força 
a escrever código mais limpo e conciso, porque você RECEBE UM ERRO SE VOCÊ TENTAR 
CONSOLE.LOGGAR A VARIÁVEL HOBBIES LÁ EMBAIXO QUANDO VOCÊ APENAS DEFINIU-A LOCALMENTE, 
DENTRO DE UM IF STATEMENT, POR EXEMPLO. Isso é bom, porque isso que você tenta fazer é código 
incorreto, e esse erro te força a procurar uma nova solução, que nesse caso específico é 
você definir a variável globalmente lá no início, para então poder alterar depois.
Let e Const te forçam a escrever código mais limpo e claro sobre suas intenções.

Olhe só a confusão com var, por exemplo:

Imagine alguém lendo seu código, ele veria uma variável definida com var DENTRO DE UM IF STATEMENT, que é algo condicional, 
e que INFLUENCIARIA TODO O CÓDIGO GLOBALMENTE (sempre), mesmo sendo submetido a uma condição. Influenciaria 
a função console.log lá embaixo, UMA FUNÇÃO CHAMADA EM NÍVEL GLOBAL, mesmo essa variável tendo um caráter de 
nível LOCAL (afinal, hobbies foi definido dentro de um if statement, por isso é local, block scoped).*/





/*OUTRA COISA:
SE VOCê DEFINE UMA VARIÁVEL EM UM LOOP/IF STATEMENT, OUTROS DESENVOLVEDORES ESPERAM QUE VOCÊ APENAS UTILIZE-A NAQUELE LOOP/ IF STATEMENT, 
E NÃO EM OUTROS LUGARES DO CÓDIGO. É POR ESSA RAZÃO QUE LET/CONST SÃO ÚTEIS E MELHORES DO QUE VAR, ELES LIMITAM 
A GAMA DE OPÇÕES DAS VARIÁVEIS, E COM ISSO DEIXAM SEU CÓDIGO MAIS LIMPO, LEGÍVEL E COESO. 


Se você realmente quisesse aquele variável/const como algo global, você a definiria no lado de fora da função/if statement/loop, e não dentro dele (se você quisesse mudar o seu valor dentro 
da função/if statement/loop, você poderia fazer isso depois, com o uso do operador =).
*/






// Em consequência desses fatos, nós hoje em dia não usamos VAR. Não há casos úteis para o var. 



// Por que o var ainda está na linguagem, então?



// POR CAUSA DO BROWSER SUPPORT. VOCÊ NÃO PODE SIMPLESMENTE REMOVÊ-LO, POIS ISSO QUEBRARIA 
// O SUPORTE DE MUITOS BROWSERS ANTIGOS.MUITOS SCRIPTS ANTIGOS PARARIAM DE FUNCIONAR, POR ISSO 
// A ENGINE DE BROWSERS ATUAIS AINDA SUPORTAM O VAR.



/*Outra curiosidade: 



sobre o block scope, ele é criado pelo curly braces. Você poderia criar um curly braces 
vazio (e isso não seria lido pelo javascript como um objeto, pois a sintaxe é diversa de "variável = {};"), 
e colocar uma variável lá dentro.

Ex:



{
    let test = 5;
    console.log(test);
}


VARIÁVEIS CRIADAS DENTRO DESSES CURLY BRACES EXISTIRÃO SOMENTE DENTRO DOS MESMOS. Essa é uma sintaxe que você 
não vê muito por aí, porque vocÊ raramente tem casos em que você quer do nada criar uma variável 
aleatoriamente no código em um bloco... geralmente você quer variáveis específicas/locais apenas 
em loops, if statements, try-catch blocks, etc etc. Mas tecnicamente isso ainda constitui um block, 
e se nós colocarmos isso no código, salvarmos e recarregarmos a página, veremos no console o valor 5 logado, 
em decorrência daquela variável lá, que foi console.loggada. Let e const criadas dentro de um bloco, portanto, como aprendemos nessa lição, apenas podem 
ser utilizadas dentro de um bloco (curly braces).

*/