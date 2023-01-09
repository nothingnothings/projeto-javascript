//alert('This works!');
//problema --> esse alerta bloqueia o rendering da página até o script acabar, e no caso do alert é apenas acabado quando o usuário confirma o alerta, quando ele fecha o alerta. Para garantir que a página carregue anteriormente ao script, devemos sempre colocá-lo no final da página.
//outro problema com o chrome --> o rendering da página não está acontecendo antes do script (???)
//outro problema --> fontes não carregam desde o início, carregam apenas após o script rodar (problema curioso, que será explicado depois).

//nosso objetivo: calculadora básica --> colocamos um número e ele é adicionado ao último número que colocamos antes.
//para isso, precisaremos de um punhado de pedaços que serão usados na maior parte dos programas javascript.

//VARIÁVEIS E CONSTANTES. Definimos variáveis com let e constantes com const.
//criamos primeiro a variável do resultado.
//  let (nome)  -----> ver convenções de denominação em "básico do javascript".
//let currentResult ---> a variável está agora declarada, o programa javascript está agora consciente da sua existência, mas ela não tem nenhum valor definido por você ainda. às vezes, isso é suficiente, mas no nosso caso não é.
//let currentResult = 0 ----> = faz a variável ter um valor definido. Definimos 0, um número, pois usaremos esse valor em cálculos no futuro, e adicionar números, subtrair números, e ter um número aqui é ótimo, pois podemos fazer operações matemáticas com ele.
// ;;;; em javascript, geralmente é opcional. Semicolon é opcional. Em alguns casos nicho, não é opcional. **VOCÊ NÃO PODE OMITIR ;; QUANDO VOCÊ TEM DUAS EXPRESSÕES EM UMA ÚNICA LINHA, POR EXEMPLO: ''LET CONST A = 1; LET CONST B = 2''.
//o professor usa ;, porque em outras linguagens de programação a semicolon não é opcional.

//vamos criar a operação matemática simples que outputará o resultado final na parte dos results da tela.
// sinal de + ---> é um OPERADOR. operadores são SYNTAX FEATURES que nos permitem a manipular valores. +, -, * e /. fazem aquilo que você pensa.
//há também o modulus operator, a porcentagem %, que divide dois números mas retorna a parte LIMPA que resta, não considera decimais e partes quebradas.
//por fim, há o EXPONENTATION operator, que é **. Te permite usar exponências no javascript em cálculos. O outro operator FUNDAMENTAL é o ASSIGN OPERATOR, QUE É O =. o igual é o operator mais importante.

const defaultResult = 0; //constante criada mais tarde no curso, utilizada para definir a variável ali embaixo (sim, isso é permitido, definir uma variável com outra variável/constante).

// let currentResult = 0;  //versão antiga da variável currentResult, substituímos pela versão da constante para que os resultados sejam corretos.

let currentResult = defaultResult;

let logEntries = []; //nova variável, criada para fornecer o log interno da calculadora para o usuário.

//currentResult = (currentResult + 10) * 3 / 2 - 1;     --->trocamos para currentResult = additionResult;

//currentResult = additionResult   ----> mas então percebemos que essa linha de código é redundante, então cortamos-na e resumimos todas as constantes com a expressão currentResult = add(1, 2);

//currentResult = add(1, 2);  //agora, currentResult é o resultado deste cálculo, do cálculo de 1 + 2.
//  |
//  |
//  |--> Substituído pelo código do addBtn.

//valor da direita é sempre executado ANTES do que o dá esquerda, então currentResult + 10; é executado antes.
//aqui nesse caso da calculadora, o valor inicial de currentResult, que é 0, é sobrescrito por currentResult + 10. O valor passa a ser 10, pois o valor inicial de currentResult era 0. Depois de executar essa segunda linha, o valor do currentResult será de 10. Você não está limitado a 2 operadores por linhas, você pode usar mais, como multiplicadores, aqui também.
//os parênteses são usados para ordenar os cálculos. Javascript sempre executará primeiro a equação dentro do parênteses, cujo resultado será então usado para o restante dos cálculos.
//ex: (currentResult + 10) * 3 / 2 -1;
//o professor usou um número como valor nesse exemplo, mas podemos usar outros valores além de números, e isso não é só do javascript, múltiplas linguagens aceitam isso.

//let calculationDescription = '(0 + 10) * 3 / 2 - 1'; // equação considerada inteira como texto, e por isso não é executado matematicamente.
//porém, aqui encontramos um problema. Não conseguimos inserir variáveis dentro de '', porque o conjunto todo é considerado como texto. Se tentarmos inserir "currentResult" dentro da equação, Javascript simplesmente irá apresentar isso na página completa como se fosse um texto, sem fazer as equações e substituições com essa variável. Nem mesmo a tratará como uma variável.
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;                                   //para que ela seja considerada uma variável dentro dessa equação, devemos fazer uma coisa chamada "string concatenation". No caso do let calculationDescription, devemos colocar entre '' o parênteses, pois ele sim será lido como texto, e depois o resto da equação, que também será lida como texto.
//    |                                               //com isso, currentResult é lido como uma variável de verdade, e apenas o resto é lido como texto a ser mostrado no resultado final.
//    |                                               //o operador + que está fora de '', nesse caso, não é lido como uma função matemática, e sim como um elemento que "une" partes de texto separadas no código javascript. Aqui, ele une o texto (, o valor currentResult e o resto da expressão/texto, + 10) * 3 / 2 - 1.
//    |
//    |----> substituído pelo novo addBtn, como o currentResult = add(1, 2);, visto logo acima.

// parseFloat-->




function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if(operation === 'ADD') {
    operator = '+';
    currentResult += enteredNumber;
  } else if (operation === 'SUBTRACT') {
    operator = '-';
    currentResult -= enteredNumber;
  } else if (operation === 'MULTIPLY') {
    operator = 'X';
    currentResult *= enteredNumber;
  } else {
    operator = '/';
    currentResult /= enteredNumber;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult); 
}






function getUserNumberInput() {
  return parseInt(usrInput.value);
} //código adicionado mais tarde nas aulas, para que o input do usuário seja obtido como número.
//dentro dela, quero retornar o valor parseInt(usrInput.value), para que láaáááá embaixo, em function "add",  a constante enteredNumber possa chamar essa função.

//EX:

//function add() {const enteredNumber = getUserNumberInput();       --------------> queremos dar retrieve/pegar o valor por meio dessa função getUserNumberInput que criamos agora, nós a chamamos manualmente em vez de chamá-la por meio de um eventListener. Sempre que a função add é rodada, vou querer rodar essa função getUserNumberInput também, função que agora é utilizada para dar outsource nessa lógica do add.
//                  const calcDescription = `${currentResult} + ${enteredNumber}`;
//                        currentResult = currentResult + enteredNumber;
//                    outputResult(currentResult, calcDescription);
//                                                              }
//

//outputResult(currentResult, '');  ----> é substituído pela versão com o log da calculadora, a versão outputResult(currentResult, calculationDescription);

//depois de um tempo, substituímos o currentResult (variável, muda.) por defaultResult, que é uma constante para o número 0, e que nunca mudará, ao contrário de currentResult (que no momento está valendo 14, em decorrência da segunda linha do código).

//Professor quer mudar a estrutura da linha de código

//let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 -1; -----> construímos uma string aqui composta de 2 pedaços de string com uma variável/valor/consante no meio.

//AQUI NESSES CASOS, VOCÊ PODE USAR BACK-TAKES (````) EM VEZ DE QUOTES:

//                                                                               livre-se de todos outros quotes que você usou, e substitua o último quote por um backtick, que fecha a string.

// resultado:      `(defaultResult + 10) * 3 / 2 - 1`;

// O PROFESSOR FEZ ISSO PORQUE BACKTICKS TE DÃO ACESSO À UMA SINTAXE ESPECIAL:
// VOCÊ PODE AGORA USAR UM DOLLAR SIGN ANTES DO DEFAULTRESULT E UMA CURLYBRACE DEPOIS DELE, ONDE PODEMOS COLOCAR NOSSA VARIÁVEL OU QUALQUER OUTRA EXPRESSÃO QUE PODE SER OUTPUTTADA COMO TEXTO.
// (poderiámos colocar ${1 + 1}, por exemplo.)
//O que isso faz é mandar javascript a outputtar o valor que está nesta constante neste lugar (o espaço entre os curlybraces) do seu texto. No caso, será 0.
// função = ${valordavariável/valoraleatório}
// essa função só funciona com backticks, single e doublequotes não permitem, mostram a fórmula como texto e não usam o negócio de demonstrar o valor.
// A função ${} é ótima se você quer/precisa embed ou injetar valores dinâmicos (resultado de algum cálculo ou o valor que
// está armazenado em uma variável)   em um texto qualquer.
// É útil porque economiza tempo e código, você não precisa manualmente selecionar os elementos que quer que sejam apresentados como texto com '' e "".
// evita o manual string concatenation com "", '' e +.

//o nome desse CONSTRUCT, desse pedaço de sintaxe, que usamos aqui é chamado "template literal", no google há mais exemplos disso.
// essa é a forma mais básica e útil de utilizá-lo, pois é muito comum que você tenha que injetar esses valores dinâmicos em textos estáticos.

//uma coisa muito conveniente dos TEMPLATE LIBERALS é que você pode facilmente escrever strings de múltiplas linhas dentro deles. Elas ajudam visualmente, pois não fica tudo em uma mesma linha embolada.
// exemplo visual:
//
//
//              let calculationDescription = "(defaultResult + 10)

//                      (continua embaixo)
//                      * 3 / 2 - 1;"      ---------------------------------> NÃO É PERMITIDO. USO DE '' OU "" E LINE BREAKS NÃO SÃO COMPATÍVEIS (TUDO TÊM DE SER NA MESMA LINHA).
//
//
//
//             let calculationDescription = `(${defaultResult} + 10)

//                      (continua embaixo)
//                      * 3 / 2 - 1`; --------------------------------------------> PERMITIDO. COM BACK TICKS, PODEMOS TER LINE BRAKES NO MEIO DA AFIRMATIVA QUE INPUTTAMOS NO JAVASCRIPT. O ESPAÇO EM BRANCO APARECE, SIM, NO RESULTADO DO DOCUMENTO HTML FINAL. É O BROWSER QUE RETIRA ESSE ESPAÇO BRANCO EXCESSIVO; PORÉM, HÁ CASOS DE ESTILIZAÇÃO EM QUE O ESPAÇO BRANCO IRÁ APARECER.
//                                                                                                                                                                                                                                                                                         (ex: propriedade de CSS white-space: pre; faz aparecer o pedação em branco, porque esse comando faz os espaços em branco transparecerem.)
//                      SEMPRE TENHA EM MENTE QUE ESSA COISA DE ESCREVER O CÓDIGO EM MÚLTIPLAS LINHAS NÃO É APENAS "VISUAL", ELA TEM EFEITOS NO CÓDIGO TAMBÉM, PRINCIPALMENTE QUANDO MEXEMOS COM ESTILOS DE CSS.
//                       APENAS USE LINE BREAK OU EXTRA WHITESPACE FEATURE SE VOCÊ QUISER REALMENTE QUER QUE TENHA ESSE ESPAÇO EM BRANCO, NÃO O FAÇA APENAS PARA MELHORAR A READABILITY.

//realmente não precisamos de mensagens de erro nesse site-calculadora, mas colocamos uma aqui mesmo assim apenas para demonstrar como trabalhamos com strings normais, e não strings TEMPLATE LITERAL.
//se você quiser que a mensagem seja mostrada em múltiplas linhas (2), você tem duas opções: ou separar as duas partes com '' e então uní-las com o operador + e com um espaço logo depois para dar o espaço. (essa opção não os divide de verdade, apenas os divide no código, no display final da página, as duas partes continuam juntas, e não há espaço branco entre elas. );
//---> ex:
//                  let errorMessage = 'An error' +
//                                    'has occurred';
//
//
// Isso é código javascript válido; você pode fazer span de expressões que usam operadores ao longo de múltiplas linhas. Isso é possível aqui tanto para operações matemáticas, quanto para concatenated strings com o + operator.

//SEGUNDA OPÇÃO, a opção que realmente adiciona um espaço em branco entre os valores/mensagens e as separa; isso é possível com um carácter/combinação de carácteres especial:
//   é a combinação   \n -----> o display final da página não irá tratar essa combinação \n como \n, mas sim como um line break. Depois adicionamos o operador + para unir as 2 strings de texto.
//então, com esse "backslash n" você pode adicionar um linebreak no meio de uma string não importando se você está usando quote ou double quotes. IMPORTANTE: VOCê TAMBÉM PRECISA DO ESTILO "WHITE-SPACE: PRE;" NO ELEMENTO DO CSS PARA DEIXAR EVIDENTES OS ESPAÇOS EM BRANCO NO DISPLAY FINAL.
//   \n também é suportado no template liberal, mas lá naquele modelo ele não é necessário, porque você pode simplesmente criar um simples linebreak comum no meio do código.

let errorMessage = 'An error \n' + 'has occurred!';

//além disso, usar backslash (\) em uma linha tem um significado especial: ele escapa o carácter que vem depois do backslash; isso significa que o carácter que vem depois do backslash não é tratado como um carácter normal, ele ganha um significado especial. Nesse caso, \n significa line break. há outras combinações, como \' (backslash single quote.), que é usado quando você quer dar output de um quote só em seu string, especialmente se sua string está enclosed por outras quotes:
//outro detalhe: se vocÊ quiser inputtar um backslash no display, vocÊ também precisa fazê-lo escapar, porque um backslash sozinho sempre dirá ao javascript que apenas o carácter que vem depois é que deve escapar, então se você quer dar output em um \, você coloca um \ na frente dele. Fica \\.
//           "An error \\" +
//            "has occurred1";   ---> vira         An error \
//                                                 has occurred!       no display final.                                                                                                                                                                                                                                                                                                            //ex: 'An error\'' +          (faz aparecer An error'
//                                      has occurred!  no código final.   )
//has occurred!'

//sem esse \', o exemplo prático não funcionaria, pois o código trataria a aparição do ' como uma redundância, um quote que nunca foi fechado, e então ficaria todo quebrado.
// essa é a tal função do \ (backslash) usado com os quotes, ele "ESCAPA" ao significado natural dos quotes, que é delimitar strings, e então faz o quote ser inputtado como simples texto.

//add(1, 2);             //estamos executando essa linha de código como uma "expression".

//esta função, para funcionar corretamente, precisa de dois PARAMETERS, também chamados de ARGUMENTS. Aqui, você não repete os nomes das variáveis internas que você definiu automaticamente dentro do body anteriormente. NÃO, aqui você precisa definir os VALORES CONCRETOS que a função deve usar para rodar. ex: colocar 1 e 2  ---->   add(1,2);
//Importante: uma function pode ter quantos parametros você quiser, você não está limitado a 2.                                                                                                                                                                                                                                                                                              //num1 seria definido como 1, e num2 como 2, e ambos seriam adicionados.

//Você pode rodar a função múltiplas vezes, por meio da sua execução repetida. Como por exemplo, fazê-la de novo, mas dessa vez com 5 e 5.

//add(5, 5);

//quando salvamos e recarregamos a página, vemos 2 alertas diferentes, um dizendo que o resultado é 3, e outro que o resultado é 10. Ambas as linhas foram executadas em ordem.

//AS FUNÇÕES TEM OUTRA HABILIDADE FUNDAMENTAL, QUE NÃO ESTAMOS USANDO AQUI: ELAS PODEM RETORNAR ALGUMA COISA.

//nova função formulada para criar e dar output no log da calculadora/cálculos.
//essa função vai precisar de TRÊS PARÂMETROS/ARGUMENTOS para funcionar da maneira que queremos. O professor usa de nome o termo "operator", porque ele vai referenciar os
//operadores utilizados nas funções (+, -, ., /). você pode colocar o nome que você quiser, mas é conveniente usar algo que faça sentido. Entretanto, você deve lembrar que você NÃO pode passar um operador (sinais) como um argumento, mas você pode passar um TEXTO que contém um argumento (ex: '+'.) .
//operator = operador que foi usado.     resultBeforeCalc= resultado antes do cálculo.     calcNumber= O número que foi usado no cálculo. Então, podemos agarrar a constante calcDescription que temos na função "add" e colocá-la dentro do corpo da função CreateAndWriteOutput.

//agora o operador TAMBÉM É DINÂMICO, por isso vamos embed o valor dinâmico "operator" no seu lugar (o que iremos substituir é o sinal de + naquela constante logo abaixo.)

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //---> esses são os três pedaços que são combinados em um longo texto. Não é uma equação matemática que é executada por javascript, é apenas texto, só um output text que está sendo gerado com a combinação destes elementos.
  outputResult(currentResult, calcDescription);
} //----->o professor também, depois disso, recorta a função outputResult, contida em add, e cola-a (chama ela) aqui, dentro do function body.
//ele pode referir-se ao currentResult aqui porque É UMA VARIÁVEL GLOBAL, E NÃO ESPECÍFICA DE UMA FUNÇÃO, e a calcDescription já existe, é a constante que está logo acima escrita.
//agora a ideia é que podemos chamar essa função createAndWriteOutput em OUTROS LUGARES DO CÓDIGO, E ECONOMIZAR CÓDIGO DESSA FORMA.
//a primeira coisa que o professor faz é CHAMÁ-LA EM ADD, onde ele substituí o modelo de parâmetros que temos aqui nessa função pelos parâmetros de verdade (encaixa eles ali.)
//o negócio fica:

//function add(){const enteredNumber = getUserNumberInput();
//      currentResult = currentResult + enteredNumber;
//           createAndWriteOutput('+', )                               }
//       (primeiro campo é o do operador que será usado, segundo é o currentResult, que é o resultBeforeCalc basicamente, mas com outro nome, e o terceiro campo é o do enteredNumber, que é uma constante equivalente ao calcNumber definido nessa função createAndWriteOutput.).

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

//mais recentes desenvolvimentos do professor: ele trocou o function body da função add (que usava a função clássica de "alerta" do javascript) por
//um function body com a função "RETURN".

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' || 
    !enteredNumber    //! = logical NOT operator. O que isso significa? Imagine que vocÊ tem uma constante cu. Essa constante ela por si só é tratada como verdadeira pelo Javascript. Porém, se essa constante segurar um valor de 0 (ZERO), ela é considerada FALSA pelo javascript, porque 0 é tratado como um valor boolean falso. !enteredNumber significa "NÃO o ENTEREDNUMBER". Em javascript, "NÃO O enteredNumber" pode ser traduzido como uma declaração de FALSE... como false é 0, false é a mesma coisa que a constante segurar 0, esse !enteredNumber substitui a expressão enteredNumber === 0. O que queremos dizer, nessa linha de código, portanto, é: se o usuário tentar ser espertinho e rodar algo diferente daquelas 4 opções OUUUU tentar inputtar um valor que NÃO SEJA TRUE (false, representado pela constante afetada pelo !, enteredNumber.), rodamos aquela função return. Raciocínio = cara coloca 0. Javascript inverte o valor de 0, o que era falsy agora é considerado true, e como é considerado true, o JS executa a função de return.
  ) {
    return; //serve para parar a função/não rodar o resto dela (não rodar createAndWriteOutput e writeToLog, e não rodar mais nada) no caso de nenhum daqueles 4 valores (add, subtract, multiply, divide) ser chamado. !== significa diferente... ou seja, se o call(calculationType) for diferente de add, diferente de subtract, diferente de multiply e diferente de divide (se for diferente DOS 4 COMBINADOS, se o call fosse igual a qualquer um deles, a função continuaria..., mas caso não seja igual a nenhum desses 4 valores, a função para.)
    //isso significa que, para essa condição toda (os 4 elementos) dar true --- if (x: true) {return;} ------> para ela dar true, as 4 condições deverão ser satisfeitas, se o valor não for igual a ADD, Subtract, multiply e divide, a função parará por causa do "then" statement, que vem na forma da função "return".
    //se x é verdadeiro,por favor retorne...
  }
  //const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = 'X';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
} //no terceiro parâmetro, introduzimos a constante enteredNumber, visto que a constante calcDescription não existe mais. //}

//velha fórmula add.
//function add() {const enteredNumber = getUserNumberInput(); //função que usamos para direcionar o valor de parseInt(usrInput.value); podemos encontrar essa função que retorna esse valor logo acima.
//const calcDescription = `${currentResult} + ${enteredNumber}`;  //---------------->ver anotações na linha 577+ (e na linha 237.)
//console.log('Input', enteredNumber, currentResult);
//const initialResult = currentResult;
//currentResult += enteredNumber;           //antes constante RESULT era num1 + num2, ver anotações bem mais abaixo, na linha 314, que falam sobre essas constantes definidas em vendor.js. CONSTANTE RESULT TAMBÉM É SUBSTITUÍDA POR UMA NOVA DEFINIÇÃO DE "currentResult". Professor fez isso porque removeu "return result"; , comando que fica logo abaixo.
//operador novo: +=; serve para elipsar currentResult na parte direita; currentResult ainda está lá, mas não precisamos escrevê-lo explicitamente na parte esquerda da linha. Usamos isso nas outras funções, também.
//createAndWriteOutput('+', initialResult, enteredNumber); //---> colocamos aqui os três parâmetros que serão rodados na função createAndWriteOutput, os três parâmetros que serão aglutinados em uma longa string de texto.
//writeToLog('ADD', initialResult, enteredNumber, currentResult);                                               //entretanto, temos que mudar algumas coisas para fazer o novo log funcionar. O segundo parâmetro é o resultado ANTES de rodar currentResult = currentResult + enteredNumber, portanto somos obrigados a criar uma nova constante, definida e rodada antes do da nova definição do currentResult:  é a constante const initialResult = currentResult; Essa constante substituí o currentResult no segundo parâmetro, já que se colocamos currentResult naquele segundo parâmetro, equação fica toda zoada e mostra 3 números sendo adicionados, em vez de 2.      //no terceiro parâmetro, introduzimos a constante enteredNumber, visto que a constante calcDescription não existe mais.
/*A função writeToLog é criada para escrever o log da calculadora de forma mais eficiente, sem repetir tanto código. Usa como parâmetros 4 identificadores, operationIdentifier, prevResult, operationNumber e currentResult. Esses seriam os parâmetros default do negócio, porém temos que colocar as constantes que temos nessa função específica add nele para que funcione de forma correta. Por isso usamos 'ADD', initialResult, enteredNumber e currentResult, todos separados por vírgulas.                                                 */ //copiamos e colamos essa função outputResult lá na função createAndWriteOutput.     ------->   //outputResult(currentResult, calcDescription); //ALTERAÇÃO QUE FIZEMOS POR MEIO DA ADIÇÃO DA FUNÇÃO OUTPUTRESULT DENTRO DESSA FUNÇÃO ADD. AS DUAS RODAM SIMULTANEAMENTE, QUE É AQUILO QUE DESEJAMOS.
// return result;                      //comando que faz a função toda retornar o resultado da soma num1 + num2.
//alert('Hi there!')    //esse código é apenas um exemplo das propriedades de return. Se eu defini return, não posso colocar mais nada depois da função return, pois ele impede códigos futuros na função(no caso, a função "add") de serem executados. O programa de edição de texto nos mostra isso; a cor do código do alert fica um pouco mais cinza no editor de texto, isso signifca que não será executado.

//logEntries = [enteredNumber]; -------------> Não faremos isso de definir apenas um único elemento da lista/array aqui, nós utilizaremos a função push para "EMPURRAR" o elemento enteredNumber para dentro do array da variável logEntries, definido lá no início do documento. Fazemos isso com a função ".push" ----> logEntries.push(enteredNumber);

//nova função add.

/*function add() {
  calculateResult('ADD');
} */ //apertar control em cima da função calculateResult para ver seus detalhes de if e else.

function WriteToLog( //função usada para escrever log mais eficientemente em cada tipo de operador/operação (add, multiply,  subtract, etc.)
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    //indentamos o código aqui para ele ficar mais legível.
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: currentResult,
  };
  logEntries.push(logEntry); //Substituímos enteredNumber pela constante logEntry, que definimos logo acima dentro da nossa função. Colocamos essa constante dentro do array por meio da função push. Fazemos isso para que o nosso log da calculadora fique mais robusto e nos informe se estamos adicionando ou subtraindo, multiplicando, etc.
  //console.log(logEntry.operation); //criamos essa função console.log específica apenas para mostrar como selecionar um data piece que está dentro do objeto, por meio do "." e aí a data piece/identificador que você deseja selecionar. Como resultado disso, quando apertamos o botão +, a informação 'ADD' aparece no console.
  console.log(logEntries);
} //Posteriormente, tiramos [1] do comando console.log(logEntries[1]), porque queremos selecionar o array inteiro, e não apenas seu primeiro número.
//a função console.log nesse caso outputtará o PRIMEIRO ELEMENTO da variável logEntries, porque os arrays são Zero-based, ou seja, consideram 0 como origem, e não 1/ 1º.

// usado para mostrar o resultado do código no console, dentro das developer tools. Aqui usamos-na para ver se aparece o log das logEntries, que é a variável que definimos láááá em cima acrescida de enteredNumber, que foi acrescentado ao array por meio da função "PUSH".   }
//entretanto, se você for nos developer tools, você verá que não foi propriamente um erro que aconteceu, porque o aplicativo não crashou. O que aconteceu aqui foi que o return statement simplesmente acabou a função, essa é uma de suas particularidades; ele acaba a função.
//aqui, temos um return statement que retorna uma constante, mas HÁ CASOS ONDE O RETURN STATEMENT RETORNA LITERALMENTE NADA (return... e só return, sem nenhum código depois). Isso é usado com a ferramenta "if", para terminar com a execução de códigos.

//OBS: também removemos daqui os parâmetros (num1, num2) que estavam inseridos ao lado de function add. (function add(num1, num2)). Colocamos aqui uma "função surda", portanto (que não diferencia entre os parâmetros ao ser chamada).
// PARA MAIS INFORMAÇÕES SOBRE parseFloat, A FUNÇÃO, VER ANOTAÇÕES MAIS ABAIXO E DOCUMENTO "SOBRE A EXECUÇÃO INDIRETA DE FUNÇÕES".
//+userInput.value é a versão resumida de "parseInt(userInput.value);"", converte a string em um número.

//antes havia '' (empty string) no lugar de calcDescription. Mudamos para calcDescription, que é uma função que mostra aquilo que o usuário está inputtando.
//podemos ver o resultado final na página web.
//Agora estamos construindo a descrição do cálculo ANTES de REALIZAR O CÁLCULO/executar o cálculo.
//não vemos na calculadora o log completo ainda, já que isso seria bem mais complicado de construir com o que temos agora.

//Entretanto, há mais uma coias que podemos mudar em relação à essa função, porque o que nós temos aqui é um pouco de repetição de código( dois "userInput.value"). No geral, sendo um programador, você quer evitar repetição de código ao máximo possível, porque se você repete código, você escreve demais, e isso toma tempo, tempo que você quer salvar. Além disso,
//se você quiser por acaso trocar alguma coisa sobre aquele pedaço de código e aquela lógica que vocÊ escreveu, é bem provável que você terá que mudá-lo em múltiplos lugares. Portanto, você quer evitar se repetir, para que não tenha que mudar uma coisa em 10 lugares diferentes.

//Aqui, por exemplo, vemos isso quando extraímos o userInput.value.
//digamos que renomeamos a constante userInput para usrInput: se eu fizesse isso, teria que mudar essa constante em dois lugares diferentes  do código, escrevê-la dnv.
//Melhor do que ter que fazer esse processo irritante, é criar NOVAS constantes, já que eu planejo nunca mais reassignar seus valores.

//Poderia nomeá-la "enterNumber"; e a constante poderia ser aquele code snippet "parseInt(userInput.value);"

// ex: const enteredNumber = parseInt(usrInput.value)

//Então eu pego o usrInput e parso/analiso ele como uma integral. E agora, podemos usar "enteredNumber" no lugar de "${usrInput.value}", porque aquela interpolação de strings, ou sintaxe de embedding ali não se importa se o negócio é uma string ou um número, ela vai sempre converter o negócio para uma string de qualquer forma (Normalmente, a constante enteredNumber, cujo valor é de parseInt(usrInput.value), apresentaria seu valor no código como um número integral, devido ao tal ParseInt, mas a ocorrência dos backticks nessa linha faz com que tudo que seja inserido ali seja considerado parte de uma string, por isso a função partInt é ignorada completamnente.)
//resultado=       const calcDescription = `${currentResult} + ${enteredNumber};

//Podemos usar a constante também em currentResult, na linha seguinte, já que o parseInt(usrInput.value) ali escrito é o mesmo da constante.:

//ex:

//currentResult = currentResult + enteredNumber;

//A vantagem de tudo isso, dessas trocas malucas, é que sempre que alguma coisa muda aqui na primeira linha da função, como o código de usrInput.value, nós precisaremos mudar apenas o usrInput.value, e não todas as aparições subsequentes da constante enteredNumber,
//que estão todas ligadas ao parseInt(usrInput.value), que fora definido no início da função. Isso economiza muito código e escrita. (aí precisaríamos mudar só a primeira linha, não teríamos que nos incomodar com os outros 2 lugares, mudar o seu código de forma desnecessária.)

//fizemos algo bom, na verdade, porque agora somos mais flexíveis e não nos repetimos com o código parseInt(userInput.value).
//é claro que repetimos o nome daquela constante, mas isso é algo que não podemos mudar.
//Nós nos asseguramos, no entanto, de que não temos que repetir toda aquela lógica aqui, ainda que não exista tanta lógica aqui, mas você poderia ter um cálculo mais complexo e então salvaria ainda mais repetição.
//Você ainda poderia ir um passo além, e adicionar uma nova função, como "getUserInput()", por exemplo.

//ex:

//function getUserInput() {}

//O professor explica, de novo, que nomeou essa função assim porque quer descrever o que a função faz, e essa é uma função que deve na verdade dar o user input como um número, então seria até mesmo melhor renomeá-la para getUserNumberInput. Você quer dar uma ideia clara do que essa função faz.

//const additionResult = add(1, 2);

//O professor então cria uma nova constante, a constante "additionResult", que mais tarde é deletada.

//const additionResult = add(1, 2);
//add(5, 5);

//O professor diz que usa uma constante aqui, assim como definiu dentro do function body, porque ele nunca mais irá assignar ou adicionar um novo
//valor a essa constante nesse documento, por isso também usa o operador "=", porque tem ciência desse fato. E se você nunca mais assignar um
//novo valor com o "=", então essa variável additionResult é, efetivamente e validamente, uma constante, e você deve marcar bem no código que
//ela nunca irá mudar. Fazemos isso para os outros developers lerem melhor.

//então, agora o resultado da function call add(1,2); e add(5,5); está armazenada em additionResult, e nós podemos utilizá-lo (esse resultado/constante)
//em qualquer lugar do nosso código.
//por exemplo, podemos agora usar additionResult para definir nosso currentResult como equivalente à ela (a constante additionResult). Tipo assim:

//ex:
//currentResult = additionResult;

//o professor diz que é claro que isso é meio redundante, pois armazenamos o resultado dessa function call em uma nova constante

//ver anotações próximas à let currentResult.

//agora, se recarregarmos a página, veremos "3" lá embaixo na página. O resultado 3 é armazenado na constante currentResult, que então
//é passada para a função outputResult definida em vendor.js, que no final irá fazer o output do resultado do cálculo neste campo inferior do html document.
//é claro que a parte (0 + 10) * 3/ 2 -1 está incorreta, não é a correta descrição da operação matemática que realizamos com o script.

//eis a forma como podemos definir funções, COM ou SEM parâmetros; e COM ou SEM return, e como podemos CHAMÁ-LAS (pelo nome).
//é claro que nós ainda estamos chamando essa função imediatamente quando o código roda, por isso o objetivo final será de conseguirmos nos conectar ao botão, o que faremos em um segundo, mas não antes de entender a ordem pela qual vocÊ pode definir as coisas aqui.

//,além da implicação existente quando você define uma variável ou constante dentro de uma função (geralmente não devemos fazer isso), ao contrário de quando a definimos do lado de fora da função.

//eis o novo addBtn, substituto das linhas de código "currentResult = add(1, 2); e let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1;
//o professor deletou a declaração E DEFINIÇÃO do "calculationDescription", mas nós ainda nos referimos a ele em outputresult(). Consertaremos isso depois.

//addBtn.addEventListener('click', add);

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));

//NOVA FERRAMENTA, QUE NÃO TINHAMOS VISTO ANTES; UMA FUNCTION INCORPORADA AO BROWSER, QUE AGORA ESTÁ UNIDA A ESTE BOTÃO. Um ponto sempre deve ser colocado entre a função e o nome da constante/variável. Veremos o que esse ponto significa no futuro.
//essa é uma função que toma dois parâmetros ou argumentos e o primeiro parâmetro é sempre uma STRING, que identifica o EVENTO pelo qual nós queremos escutar/ que queremos escutar.
//há um monte de events disponíveis, e o professor nos mostrará todos, e onde encontrá-los, no módulo dedicado.
//por agora, podemos adicionar 'click' aqui. Click deve ficar entre ', " ou `, apesar de que
//`` não fazem muito sentido aqui porque não precisamos embed nada de valores dinâmicos aqui.
//o SEGUNDO PARÂMETRO, e atenção: isso não é algo estranho at all, deveria ser uma FUNÇÃO.
//estamos definindo, portanto, uma função dentro de outra função.

//não é algo tão estranho se você pensar sobre isso, já que funções são "code on demand"; você quer ter certeza que você está dizendo ao browser e ao javascript qual função deverá ser executada se esse botão é clicado.
//lógica simples = quando o cara função-aperta (click) o botão, qual função-reação devo executar?

//Bem, o que fazemos aqui, então?
//bem, você poderia executar sua função "add", aqui. isso, NA VERDADE, seria a opção ERRADA.
//E essa é uma das coisas mais difíceis de entender em JavaScript e em programação no geral: nós queremos dizer ao browser O QUE EXECUTAR quando um CLIQUE OCORRE. Agora, se nós executarmos "add" dessa forma, não importando se colocamos argumentos ou não dentro dos parênteses (o que nós deveríamos, é claro, fazer, teoricamente...), o que acontece é que
//o código todo é analizado pelo browser quando ele encontra o nosso Script e, no final, depois de registrar todas as nossas funções, ele vai ir em frente e ADICIONARÁ esse eventListener, mas AÍ, essa função add(1, 2) diz ao browser "CHAME ESSA FUNÇÃO!", porque nós temos parênteses com argumentos aqui. Mas o que nós queremos dizer ao Javascript e ao browser é:
//"NÃO EXECUTE ESSE CÓDIGO DIRETO, DE IMEDIATO; EM VEZ DISSO, TENHA "EM MENTE" QUE VOCÊ DEVE EXECUTAR A FUNÇÃO SOMENTE QUANDO ESTE BOTÃO É CLICADO."
//A solução, portanto, é NÃO PASSAR A FUNÇÃO AQUI COM PARÊNTESES, e sim APENAS O NOME DA FUNÇÃO, SEM OS ARGUMENTOS.
//Ao fazer isso, você está falando a engine do javascript: "quando este botão é clicado, dê uma olhada na função com ESTE NOME e EXECUTE-A PARA MIM."

//Então, antes, nós manualmente chamávamos a função no nosso código, porque nós, os desenvolvedores,
// somos aqueles executando a função, nós eramos o "carrasco".

//ex: função add "solta" no meio do código:

//add();

//subtractBtn.addEventListener('click', subtract);

subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));


//multiplyBtn.addEventListener('click', multiply);


multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));

divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));


//divideBtn.addEventListener('click', divide); //não precisamos mais dessas linhas de código, pois podemos chamar a função/fazer outsource desse código por meio da função criada "writeToLog", que está láááá em cima. //                          }

//Agora queremos ter CERTEZA que o BROWSER consegue executar a função quando o click ocorre, e nós NÃO SABEMOS QUANDO ISSO ACONTECERÁ, QUANDO O FATO SE APRESENTARÁ.

//Por isso queremos dar ao javascript O NOME da função que ele deverá chamar para nós

//Queremos deixar o browser chamar essa função POR nós.

//analogia da vida real:

//você vive em uma casa e vocÊ tem um endereço pelo qual você recebe a correspondência. Claro que você pode ir até a porta e tocar a campainha; você pode fazer isso porque sabe exatamente onde ela fica, e que botão apertar. Mas você quer ter certeza que o pessoal do correio, as pessoas entregando as cartas, saibam onde apertar para soar a campainha.
//Então, você lhes dá o seu endereço, para que lhe entreguem coisas. O seu endereço, nesse caso, seria o NOME DA FUNÇÃO.

//endereço de casa = function name, ONDE ELES DEVEM APERTAR PARA SOAR A CAMPAINHA.
// É A MESMA COISA QUE ESTAMOS FAZENDO AQUI: ESTAMOS DANDO AO BROWSER O ENDEREÇO/NOME DA FUNÇÃO QUE ELE DEVERÁ CHAMAR QUANDO O BOTÃO É CLICADO.

//ENTÃO, ESSA FUNÇÃO ADD SERÁ EXECUTADA TODA VEZ QUE O USUÁRIO APERTAR NESSE addBtn (add button).

//A questão agora é: e quanto àqueles argumentos ("num1, num2") que queremos pegar lá na função, nós
//NÓS NÃO SABEMOS O QUE ADICIONAR AQUI NESSES CAMPOS.
//Bem, no final, o que deveria ser adicionado aqui é o currentResult (num1) e qualquer valor que o usuário inputtou (num2).

//Precisamos, então, de dois pedaços adicionais de informação: 1)precisamos descobrir
//o que o usuário inputtou

// e 2) precisamos pegar o nosso currentResult.

//Para isso, podemos reestruturar a nossa função um pouco

//function add()

//, e em vez de usar argumentos na definição da função add, podemos tirar vantagem de uma COISA QUE O PROFESSOR MENCIONOU ANTES: AQUELA NÓIA
// DE UMA FUNÇÃO PODER _____ LER AS VARIÁVEIS DEFINIDAS GLOBALMENTE____.

//Então sabemos o currentResult, é claro. então usamos ele dentro do function body:

//function add() {
//   const result = currentResult + num2;
//               return result;}

//em vez de aceitar argumentos aqui dentro de function add(), podemos tirar vantagem
//de algo que o professor mencionou anteriormente, do que ele disse sobre funções, que elas podem ler variáveis definidas global e localmente.
//Então usamos currentResult, de uma forma "read-only", estamos apenas lendo o conteúdo dela. E agora queremos pegar o valor que o usuário inputta no campo da calculadora.
//Para isso, o documento vendor.js tem a nossa resposta:

//ela está na constante "const userInput = document.getElementById('input-number');"

//essa constante userInput, que está adicionada globalmente no html/código javascript, que no final
//aponta para ESTE INPUT FIELD da calculadora. Ela, portanto, já está definida.
//então, colocamos-na dentro da função, onde substituímos num2 pelo seu nome.

//function add() {const result = currentResult + UserInput.value;      -----> PORÉM, isso (Userinput solto, sem mais nada) é apenas um pointer na direção do input field. De novo, sem mencionar muitos detalhes aqui, podemos adicionar valores pontuados aqui, para que então nos seja dado realmente o valor que o usuário inputtou.
//                       return result;}

//Agora então temos esses dois pedaços de informação das nossas variáveis e constantes definidas globalmente.
//Assim que trocamos os resultados, então derivamos o resultado e o retornamos, e isso é claro que isso é OUTRO problema.
//Nós retornamos o resultado, MAS NÓS NÃO NOS IMPORTAMOS, NA VERDADE, COM O VALOR DE RETORNAR ESCRITO AQUI.

//Nós queremos dizer ao browser que quando o botão é clicado, ele deve "CLICAR" a função add. O browser, entretanto, ____não se importa____
//com o nosso resultado aqui. Ele apenas sabe "em um clique, devo executar essa função". Ele não se importa se você retorna alguma coisa, e se você o fizesse, o que isso seria.
//podemos, portanto, remover esse comando return.
//Devemos, também, nos assegurar de imediatamente mudar o currentResult e deletar a nova constante "result".

//resultado:
//function add() {currentResult = currentResult + userInput.value};  ------------->PORÉM, antes o professor alegou que não é a melhor ideia mudar uma variável/constante definida globalmente anteriormente por meio de uma definição no interior de uma função, BEM, SE É UMA FUNÇÃO COMO ESTA ADD, que é bem CLARA SOBRE ISSO, QUE NÃO FAZ MISTUREBA COM VARIÁVEIS/CONSTANTES INTERNAS E VALORES GLOBAIS EXTERNOS, MAS QUE CLARAMENTE APENAS FUNCIONA COM VALORES GLOBAIS QUE NÓS APENAS USAMOS COMO EVENTLISTENERS, AÍ É + ou - PERMITIDO, NÃO É ALGO "PERIGOSO" para o código.
//esse "kind of fine" pode parecer totalmente arbitrário, mas vocÊ vai pegar o jeito durante o curso.

//você sempre quer escrever funções CLARAS, que podem até funcionar com constantes globais como variáveis, mas que então não devem misturar as coisas tanto com dados armazenados internamente e depois com return values, mesmo que eles também estejam manipulando alguns valores globais, por que essa é uma regra geral, é uma lei-maior.

//REGRA GERAL = você pode ter uma função que manipula valores globais, mas então essa função talvez também NÃO deveria RETORNAR ALGUMA COISA, porque se uma função retorna alguma coisa, ela + ou - sinaliza que "hey, eu faço uma coisa e então te dou o resultado dessa coisa, e não faço mais coisa nenhuma". Quando uma função simples dessas, a função return, começa a mudar outros valores também, AÍ QUE AS COISAS FICAM CONFUSAS E RUINS.

//se você tem uma função sem um return statement, como nós temos aqui, essa função não nos dá a "ILUSÃO" de que nos retornaria o seu resultado, que deixaria de mexer com constantes definidas globalmente.
//já no caso da nossa função, que não tem return statement, sabemos que ela mexe com constantes/variáveis definidas globalmente, sabemos que é safada e que provavelmente começará a editar as variáveis globais na primeira chance que consegue, o que ELA REALMENTE FAZ, E POR ISSO SEU COMPORTAMENTO É MUITO MAIS CLARO E PREVISÍVEL a nós desenvolvedores.

//agora, temos um setup em que somos capazes de alterar o resultado atual quando aquele botão + é pressionado. Então, se salvarmos tudo e recarregarmos a página, veremos que quando digitamos 5 e depois apertamos +....
//Nada acontece. Nada muda. Mas por que isso? Bem, estamos quase lá, mas tenha em mente que ainda estamos chamando outputResult no FINAL DO CÓDIGO. E como falamos há mt tempo, o script roda de cima a baixo. O que isso significa é que depois disso, de rodar uma vez de cima a baixo, ele está ACABADO, ele não roda de novo. A única coisa que roda de novo É ESSA FUNÇÃO ADD, TODA VEZ QUE PRESSIONAMOS AQUELE BOTÃO, PORQUE NÓS, QUANDO O SCRIPT FOI EXECUTADO, DIZEMOS AO BROWSER PARA ELE FICAR FICAR CIENTE DAQUELE CLICK LISTENER, E ELE ENTÃO REGISTRA AQUELE CLICK LISTENER E VAI, ATÉ MESMO DEPOIS DO SCRIPT SER COMPLETADO, SEMPRE EXECUTAR ESSA FUNÇÃO, PORQUE ELE ARMAZENOU ISSO E TODA A MEMÓRIA NECESSÁRIA PARA ISSO FUNCIONAR, NA SUA MEMÓRIA, SEMPRE QUE O BOTÃO FOR CLICADO.
//outputResult, POR OUTRO LADO, NÃO É EXECUTADO QUANDO O BOTÃO + É CLICADO, MAS SIM QUANDO O SCRIPT É INICIADO PELA PRIMEIRA VEZ. (opa, encontramos o problema: um desarranjo entre tempos de execução--> outputResult, a função que nos dá o resultado, sempre é executada já no início da página, o que é inútil, pois sempre nos dará 0. Já a função add é rodada toda vez que clicamos o botão +, mas isso é inútil para nós, já que a função outputResult não rodará depois, rodou uma vez no início e ja parou.)

//Então, o que fazemos aqui, a SOLUÇÃO(!!!), é PEGAR O PEDAÇO DE CÓDIGO DE outputResult(currentResult, calculationDescription); e COLOCÁ-LO DENTRO DA FUNÇÃO ADD, PARA QUE SEJA EXECUTADA AO MESMO TEMPO DO OUTRO COMANDO "currentResult".
//o professor diz que logo poderemos colocar um código de calculationDescription verdadeiro, mas que por enquanto ele apenas usará uma empty string ('') no seu lugar.

//a parte mais importante, porém, é que o código javascript agora usa esse currentResult(soma de currentResult e userInput.value) e outputta isso na nossa webpage sempre que a função add roda.

//ENTRETANTO, SE VOCÊ APERTAR O BOTÃO 5 E +, VOCÊ VERÁ 05. E SE APERTAR +10 LOGO DEPOIS, VERÁ 0510. COMO PODE VER, ESSA NÃO É UMA CALCULADORA VÁLIDA, AINDA.

//boas notícias = o campo da página html está recebendo o output do código javascript ali

//mas notícias = a calculadora ainda não funciona da forma correta.

//Resumo: as funções estão funcionando, mas estamos claramente errando alguns cálculos matemáticos aqui.

//Nosso problema, na verdade, é o TIPO DE VALOR que estamos usando em "userInput.value". currentResult, no final das contas, é um NÚMERO, certo?
//começamos com 0 láááá no início, não é mesmo?
//agora, aquilo que você adiciona à currentResult dentro da função add (currentResult = currentResult + userInput.value) É (algo que você deve saber, por isso que
//o professor está te dizendo...) UMA STRING. O userInput.value é uma string, porque nós estamos pegando-o do userInput, e mesmo que eu digite um número no campo, e mesmo que
//o campo userInput, o elemento html userInput, use o "type=number" no código html... qualquer coisa que você pega do usuário, de um html input no seu código Javascript, ele SEMPRE SERÁ DO TIPO STRING. MESMO SE VOCÊ TENTAR COLOCAR "TYPE=NUMBER", O INPUT DO CARA SERÁ DO TIPO STRING NO CÓDIGO JAVASCRIPT.
//É algo que você deve memorizar.

//Um elemento input, se você LER O SEU VALOR no código javascript, ele SEMPRE TE DARÁ UMA STRING. É assim que o JavaScript no browser funciona.
//ele não tenta ser "esperto" e checar se aquilo é um número ou não, ele não faz nenhum pré-julgamento, nenhuma presunção.
//ELE SÓ TE DÁ UMA STRING, TEXTO. Portanto, o que temos aqui é que temos um número e temos um texto, e agora
//JavaScript está com um problema, porque nós estamos tentando combinar uma string e um número, e como diabos ele iria fazer isso?

//Bem, nós vimos como ele faz isso anteriormente, quando criamos a tal de constante calculationDescription. Lá, nós combinamos texto com um número porque o defaultResult que usamos lá era somente um número e Javascript concatenou aquilo tudo em uma grande/enorme/longa string.
//É a mesma coisa aqui: temos um número na string... ENTRETANTO, EM VEZ DE CONVERTER OS DOIS VALORES PARA NÚMEROS E ENTÃO FAZER UM CÁLCULO, O JAVASCRIPT FAZ A COISA MAIS SEGURA, PORQUE ELE NÃO SABE SE AQUILO QUE VOCÊ INSERIU AQUI PODE SER TRATADO COMO UM NÚMERO OU NÃO. Portanto, ele simplesmente o converte em uma string e o concatena a uma string, e é isso que vemos aqui.
//Nós iniciamos com um valor inicial de 0  (0 no campo) e então depois concatenamos um 5----> por isso ficamos com 05 (é o 0 numeral sucedido do 5 como texto). Se depois adicionamos 10, vemos que ele é adicionado inteiro dentro do campo (0510); isso é porque, de novo, o valor adicionado é considerado como uma string (5 e 10 seriam considerados textos/strings dentro dessa string).
//De novo, o javascript fez isso porque não sabe se o que você colocou ali de constante pode ser usado como número ou não (por ter sido extraído de um campo input do html), SE
//é um caracter texto, que não pode ser usado como número. Portanto o default é que ele constrói uma string aqui.

//Nós queremos, entretanto, construir um número aqui. Então sabemos que o que o usuário vai inputtar aqui vai ser um número, afinal ele terá que ser usado em equações matemáticas.
//agora, como podemos converter esse valor (userInput.value) textual em um número, para então dizermos ao javascript que temos um número e que ele deverá então fazer um cálculo matemático em vez de string concatenation(adição de "frases").

//para converter esse valor, VOCÊ TEM UMA FUNÇÃO INCORPORADA AO BROWSER/CONSTRUÍDA NO JAVASCRIPT, E SUA FÓRMULA É UM POUCO PARECIDA COM A DE ALERT:
//o nome dela é "PARSEINT".

//modelos:

// parseInt();      e parseFloat();

//ex da calculadora =

//parseInt(userInput.value);      ------------->INT = INTEGRAL

//a diferença entre as duas é que parseInt tentará parsear/analizar certo texto (string) como se fosse UM NÚMERO, mas SEM as
//CASAS DECIMAIS.

//JÁ PARSEFLOAT FARÁ A MESMA COISA, MAS LEVARÁ EM CONSIDERAÇÃO AS CASAS DECIMAIS.

//ex: se eu colocar 10.3 como valor no campo input com a função parseInt, ele não irá considerar a existência do 0.3.
//Já o Float considerará esse valor "flutuante" de 0.3.

//são funções que vão, no final, pegar uma string como parâmetro e então converterão essa string/texto em um número.
//É CLARO QUE ISSO PODE FALHAR: SE COLOCÁSSEMOS UM TEXTO ALI NO INPUT FIELD, parseInt NÃO SERIA CAPAZ DE CONVERTÊ-LO EM UM NÚMERO.
//Em vez disso, ele convertê-lo-ia EM UM VALOR ESPECIAL, QUE O PROFESSOR NOS MOSTRARÁ DEPOIS.
//Até o momento, sabemos que conseguimos números válidos e, portanto, seremos capazes de parseá-lo.
//o professor apenas trabalha aqui com números não-decimais, então apenas com integrais, como são chamadas.

//Agora a calculadora FUNCIONA.

//OBS: em vez de parseInt(), você pode usar um + no seu lugar, o operador na frente da constante age comoum "resumo" parseInt();.
//é a forma mais curta da função. Porém, às vezes o + pode passar despercebido em seu código, por ser tão pequeno para os olhos.

//além disso, parseInt é melhor para assegurar que você vai querer um número integral, e parseFloat é a única opção para quando você quer números decimais.

//HÁ TAMBÉM UM MÉTODO INVERSO, PARA CONVERTER VALORES EM STRINGS. PARA FAZER ISSO, UTILIZE A FUNÇÃO "".toString()"".

//ex: currentResult.toString();

//é outra função incoporada ao javascript/browser, e sempre é conectada ao número, que é então convertido a uma string.

//essa função, entretanto, é usada em bem menos casos, porque geralmente você precisa converter uma string em números, e não o contrário.

//Você geralmente precisa converter strings para números para que eles sejam usados em cálculos, e não o caminho inverso.

//Isso é porque, como vimos antes, o default do Javascript era aquela coisa de concatenar 2 strings, é por isso que o número é tratado como uma string
//nesse caso, e por isso que precisamos usar o parseInt e o + na variável que queremos converter.
// nesse caso, trocamos outputResult e `${currentResult} + ${}                 -fazemos isso de backticks para que os valores sejam os verdadeiros, sem mentira.

//outputResult(currentResult, calculationDescription);   //é movido para dentro da função add, para que seja executada QUANDO O BOTÃO + é CLICADO, E NÃO SEMPRE NO INÍCIO DA PÁGINA, O QUE SERIA INÚTIL, POIS RODARIA UMA VEZ E DARIA O RESULTADO 0, E NUNCA MAIS APARECERIA.

//essa função antes NÃO EXISTIA. ela foi definida em VENDOR.JS, o arquivo javascript que foi carregado antes deste aqui. Quando digitamos outputResult aqui, estamos fazendo referência à function outputResult(result, text) {
//                                                                                                                                                                                                                                        currentResultOutput.textContent = result;
//                                                                                                                                                                                                                                        currentCalculationOutput.textContent = text;
//                                                                                                                                                                                                                                                }
// como pode ver, substituimos (result, text) por (currentResult, calculationDescription), que são, respectivamente, um número e um texto (string).

//o que essa função outputResult faz é, na verdade, pegar aquilo que foi inputtado logo acima e coloca-o no campo results da página.
// o que ela realmente faz é chamado "call a function", ela dá trigger em um código que o professor definiu em vendor.js, código que ele basicamente referenciou à ela.
//o que essa combinação de códigos faz é dar overwrite no código hardcoded no html, aquelas linhas de código dos ids "current-calculation" e "current-result"; subsitui os zeros por data definida dinamicamente em vendor.js e app.js. Substitui o valor
// pelo "currentResult" e por uma string "vazia" (''). '' é um valor, sim.
// ('') = empty string.
//function outputResult: essa função é responsável por escrever em 2 lugares diferentes na webpage. Mas como estamos apenas interessados em outputtar o número do resultado e nada mais, colocamos ('') (empty string) para
//o outro lugar. Agora, como queremos ter um log para o outro lugar, podemos fazer isso por meio da criação de uma nova variável, como let calculationDescription = xxxx. Como queremos uma descrição daquilo que acabamos de calcular nas outras linhas de código na segunda parte dessa linha, colocamos = '(0 + 10) * 3 / 2 - 1'. O detalhe importante aqui é que, por meio da adição dos '' no início e no final, essa equação matemática deixa de ser considerada uma equação/números pelo javascript, e passa a ser considerado um texto/string.

//precisamos de uma nova feature da linguagem, que seria a figura da FUNÇÃO.

//function add(num1, num2) {                       //exemplo de função que necessita de parâmetro "()" . Porém, nem todas funções precisam de parâmetros/inputs. EX disso: funções que leem código da página HTML. Não precisa de input

//você pode dar a esses parâmetros qualquer nome que você quiser. Uma vez definidos, os dois parâmetros passam a fazer parte do tal de function body, que é o último pedaço da função.

//const result = num1 + num2;         // ---> num1 e num 2 são como variáveis, apesar de nunca terem sido definidas com o comando let ou const no início do documento. Porém, as duas variáveis só existem dentro desse function body, e nunca fora. Se eu tentar digitar códigos usando num1 e num2 em um lugar mais à frente, fora do function body, o código não irá funcionar, porque elas NÃO EXISTEM fora dali.
//o professor usou num1 e num2 aqui para juntá-los, porque espera que eles sejam chamados assim (num1 e num2, add), e que sempre oq ele produzir aqui serão números, e por isso a adição funcionará.
//agora essa constante segurará o resultado de num1 e num2 unidos em um só.

//alert('The result is ' + result);                                               //O que fazemos agora com esse resultado? Bem, podemos, por exemplo, outputtar ele com a alert function. A alert function é uma função providenciada pelo javascript/browser, que te permite mandar uma mini mensagem. Como é providenciada por eles, não precisamos definí-la previamente para podermos chamá-la. É uma função que sempre pede uma mensagem, você pode ver isso quando coloca o mouse em cima dela. Os parâmetros são: (mensagem e... any?)  ----> (se você colocar o mouse em cima de uma função dentro do visual studio code, ele te mostra os parâmetros e características daquela função. Aqui, no caso, ele mostra o fato de ser "opcional" o input de uma mensagem para o usuário, por meio do sinal "?" no final. (o professor alega que isso é uma mentira, pois uma alerta sem mensagem é inútil)).
//primeiro campo é uma string, segundo campo é uma constante.
//"result" é a constante que definimos logo acima, composta de num1 + num2.
//você também poderia usar os backtakes aqui com a dollar notation e curly braces, mas isso é opcional, é uma forma de escrita alternativa à string concatenation.
//ex: "${defaultResult}"
//se salvarmos o código e dermos reload na página, veremos que nada acontece, a função não é carregada. Isso acontece devido ao fato de que NÃO ESTAMOS CHAMANDO A FUNÇÃO AINDA, APENAS A DEFINIMOS.
// COMO CHAMAMOS UMA FUNÇÃO???

//}      //----> {} é o function body. Lembre-se, você nunca pode colocar ; depois de uma {}.  EX:  function cu(bla1, bla2) {códigobody};  ===== errado, você colocou ";" no final, e isso só é permitido em códigos "single line", que serão EXECUTADOS, e não REGISTRADOS, como estamos fazendo aqui.

//agora, o professor quer calcular um resultado que ele apenas usa dentro da função, e portanto podemos declarar e definir essa variável/constante dentro dessa função.
//quando formatar o seu código, lembre-se de ser consistente e usar ou 2 ou 4 espaços brancos nas indentações.

//COMO CHAMAR A FUNÇÃO??
//ora, pelo seu nome.
//é parecido um pouco como quando você a definiu lá em cima, mas sem a "function" keyword e sem o body
// modelo =   add();  -------> adicionamos semicolon no final porque aqui não usamos curly braces {}, ao contrário do que ocorre quando estamos definindo a função, e não agora, que estamos a executando. Quando executamos um código, podemos colocar ; no final. Quando estamos o registrando, não podemos.

//a função add está funcionando, mas nós ainda podemos melhorar o código um pouco; melhorar o código em geral e melhorar a função output que está
//dando-nos o resultado.

//+ é o único operador aritmético de javascript que suporta strings e números ao mesmo tempo, e por isso que sua atuação no nosso código criou alguns problemas (valores numéricos sendo considerados strings.), porque o seu default é o valor ser considerado texto.

//ex: 3 * '3' = 9; ele não vai considerar o '3' como número.

//então vamos trabalhar com o outputResult, com o log do calculationDescriton, dentro de function add adicionamos o último cálculo que
//fizemos. Criamos O professor então substitui a empyty string em result por

//agora, vamos trabalhar sobre o output, o output do LOG da calculadora que nós fizemos, por assim dizer.

//eis o código, e a parte que deve ser mudada.
//function add() {currentResult = currentResult + parseInt(userInput.value);
//outputResult(currentResult, '');}

//--------------------------->  (..., '') -----> essa é a parte a ser mudada, a "empty string", o log/relato do cálculo que nós fizemos.

//aqui, no final (''), eu quero outputtar o último cálculo que fizemos.
//Para isso, eu quero outputtar uma string aqui, e eu vou criá-la com backticks (``),
//para que eu possa injetar valores dinâmicos com a sintaxe do dollar sign e curly braces. Isso
//porque o que eu quero outputtar é o currentResult + o novo resultado. ----> modelo= outputResult(currentResult, `${currentResult} + ${novoResultado?}`)
//O problema que nós temos, é claro, é que depois da linha "currentResult = currentResult + parseInt(userInput.value);  ,  nosso valor do currentResult já mudou, já não é o mesmo.

// a solução encontrada pelo professor é criar uma nova constante dentro da função, a constante da descrição do cálculo ("calcDescription").
//depois disso, ele pega o template literalmente, e move-o para cima, para a definição da constante CalcDescription.

//ex:
//const calcDescription = `${currentResult} + ${...}`;  -----------> então, aqui ele se refere a currentResult ANTES DE NÓS O MUDARMOS, porque executamos
//esta linha antes da outra linha, antes de currentResult = currentResult + parseInt(userInput.value);
//e ele quer engatar o número que vai ser adicionado dentro do segundo valor do calcDescription, por isso o negócio fica:

//const calcDescription = `${currentResult} + ${parseInt(userInput.value)};

//(resultado atual da calculadora,
//do resultado passado,
//aparece para o usuário)                            (valor que user inputta no presente vai aparecer aqui tbm, para
// o usuário ter ciência do número que está inputtando
// quando estiver usando a calculadora.)

//E, é claro, nós não precisaremos analizar/parsear o segundo valor (${parseInt(userInput.value)}) como uma integral, porque nós iremos precisar dele como texto de qualquer forma. Por isso podemos tirar o parseInt.

//sidenote: Quando estamos usando esta sintaxe de embedding aqui, de inserção de valores dinâmicos em uma template literal (em uma string/texto que usa valores dinâmicos/variáveis, constantes.), quaisquer valores que você passar aqui, mesmo que sejam números, serão convertidos em uma string
//de qualquer forma. Então, se usamos ``, estamos implicitamente chamando a função "toString();" , mas de uma forma diferente, apesar dos efeitos serem os mesmos.

//ou seja, const calcDescription = `${currentResult} + ${userInput.value}`           É A MESMA COISA QUE:     const calcDescription = ${currentResult.toString()} + ${userInput.value.toString()}

//agora, nós construímos nossa string dentro do espaço outputResult(currentResult, '');        ----------->   outputResult(currentResult, calcDescription);

//AINDA SOBRE AS NÓIAS DE EVITAR REPETIÇÃO DE CÓDIGO:

//function getUserNumberInput() {return parseInt(usrInput.value)}                   //código adicionado mais tarde nas aulas (mas que fica lá em cima), para que o input do usuário seja obtido como número.
//dentro dela, quero retornar o valor parseInt(usrInput.value), para que láaáááá embaixo, em function "add",  a constante enteredNumber possa chamar essa função.

//EX:

//function add() {const enteredNumber = getUserNumberInput();       --------------> mudamos o código e lógica do parseInt(usrInput.value), já que desejamos eliminar repetições desnecessárias de código igual. Aqui queremos dar retrieve/pegar o valor de parseInt(usrInput.value) por meio dessa função getUserNumberInput que criamos agora, nós a chamamos manualmente em vez de chamá-la por meio de um eventListener. Sempre que a função add é rodada, vou querer rodar essa função getUserNumberInput também, função que agora é utilizada para dar outsource nessa lógica do add/parseInt(usrInput.value).
//                  const calcDescription = `${currentResult} + ${enteredNumber}`;
//                        currentResult = currentResult + enteredNumber;
//                    outputResult(currentResult, calcDescription);
//                                                              }
//

//essa gambiarra é especialmente útil, é claro, se você tem mais código aqui; múltiplas linhas de lógica, por exemplo, que você quer COMPARTILHAR. VocÊ pode então colocar tudo em uma função e então chamar essa função em qualquer lugar do código que você quiser executá-la.
//até o momento, isso é apenas em um lugar, mas isso logo vai mudar, PORQUE TEMOS MAIS DE UM BOTÃO AQUI. Passemos a trabalhar com os outros botões, então.

//os próximos botões, então---> devemos criar novas funções.

//depois de criadas, adicionaremos lógica dentro de seus function bodies.

//a lógica será + ou - a mesma da função add, por isso a copiamos.

//velha função subtract.
//function subtract() {const enteredNumber = getUserNumberInput();       //--->lembrando: essa constante, ou qualquer outra constante/variável que você define em uma função, é sempre SEPARADA das outras constantes, mesmo aquelas com o mesmo nome desse negócio. EX: valor de enteredNumber não PRECISA SER O MESMO QUE O DOS OUTROS, PODE SER ALGO DIFERENTE, APESAR DE AQUI OS VALORES SEREM OS MESMOS (devido ao return que obtivemos chamando a função getUserNumberInput).
//ou seja, você pode usar o mesmo nome de constante/variável dentro de múltiplas funções. Isso acontece porque os nomes não são reutilizáveis, eles não podem ser usados fora da função de qualquer forma, esse é um dos efeitos das funções.
//const calcDescription = `${currentResult} - ${enteredNumber}`; //--> texto diferente, -.
// const initialResult = currentResult;
// currentResult -= enteredNumber;  //operador diferente, -.
//currentResult -= enteredNumber é resumo de currentResult = currentResult - enteredNumber.
//createAndWriteOutput('-', initialResult, enteredNumber);
//WriteToLog('SUBTRACT', initialResult, enteredNumber, currentResult);

/*const logEntry = {          //indentamos o código aqui para ele ficar mais legível.
        operation: 'SUBTRACT', 
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    
    }                 
        logEntries.push(logEntry);     
        console.log(logEntry.operation); 
console.log(logEntries); */ //nova função subtract

/* function subtract() {
  calculateResult('SUBTRACT');
} */

//usamos subtract como parâmetro aqui para ativar a função else de calculateResult, e ignorar a condição IF que faria a função de adição ser utilizada.

//outputResult(currentResult, calcDescription);

//você pode perceber que ainda há um pouco de repetição de código, um pouco de código que temos que copiar e colar, como a parte em que conseguimos acesso ao getUserNumberInput(). Não conseguimos evitar isso, é algo do javascript mesmo.
//nós não necessariamente precisamos dar store do getUserNumberInput em uma constante como enteredNumber, nós poderíamos usá-lo diretamente em lugares que precisamos desse número diretamente inserido, como em "const calcDescription = `${currentResult} + ${getUserNumberInput()}`", mas o professor prefere usar o negócio quando ele está inserido em uma nova constante, que no caso é a constante enteredNumber.
//entretanto, para gerar esse texto do log da calculadora (calcDescription) e dar output nele, é algo que podemos colocar em uma função específica (para compartilhar e reutilizar o código, em vez de simplesmente copiá-lo).

//por isso adicionamos uma nova função lá em cima (padrão do professor, que gosta de definir as funções antes de utilizá-las), a função  "createAndWritelog(){}".

//velho modelo da função multiply.
/*function multiply() {const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;   //operador *= resulta na mesma coisa que currentResult = currentResult * enteredNumber. 
    createAndWriteOutput('X', initialResult, enteredNumber);
WriteToLog('MULTIPLY', initialResult, enteredNumber, currentResult);   }   */

//novo modelo da função multiply:

/*function multiply() {
  calculateResult('MULTIPLY');
} */

//velho modelo da função divide
/*
function divide() {const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; //operador /= resulta na mesma coisa que currentResult = currentResult / enteredNumber.
    createAndWriteOutput('/', initialResult, enteredNumber); 
    WriteToLog('DIVIDE', initialResult, enteredNumber, currentResult);} */

/* function divide() {
  calculateResult('DIVIDE');
} */

//afinal, a lógica de construir a string de texto e dar output desse texto na página HTML é outsorceada em uma nova função,
//a função createAndWriteOutput, que ficou beeem acima. Tentamos, assim, escrever o código de uma forma mais elegante.

//Essa forma de fazer as coisas é totalmente opcional, mas deixa o código muito mais fácil de ler. É algo
//que é bom de se ter quando você trabalha com javascript. Códigos elegantes, cujo uso possibilita que você não precise se
//repetir tanto, além de conseguir dividir/separar a sua lógica em diferentes snippets.

//raramente há um único jeito certo ou errado de fazer as coisas, mas começar e pensar sobre isso sempre é uma coisa que
//você deve fazer.

//copiamos o código da função add no multiply e no divide.

//assignamos os botões de multiplicar e dividir às funções respectivas, e aprendemos como funciona a reutilização de código, e que é uma arte que você deve dominar.

//você não precisa se preocupar muito em dividir o código agora, mas mais tarde é bom aprender. Ao longo do curso você aprende.

//professor ensina a usar comentários. Ha.

//PORÉM, HÁ OUTRA MANEIRA DE ADICIONAR COMENTÁRIOS: COM A ESTRELA. Usamos a estrela quando sabemos que vamos escrever um BLOCÃO
//                                                                                                                       DE TEXTO, e que vamos utilizar múltiplas linhas.

/* ESTE É UM COMENTÁRIO

ESTE TAMBÉM É UM COMENTÁRIO

*/

//devemos sempre fechar os comentários com estrela com OUTRA estrela.

//sempre no código não devemos comentar aquilo que é óbvio. Você deve escrever comentários concisos, também, para que os desenvolvedores não percam tempo lendo tudo.

//o ideal é escrever comentários que adicionam contexto ou entendimento às particularidades do código que não são óbvios a alguém que está olhando o código por cima.

//ex de comentário ruim:

//This is a function that extracts the user input from the input field

//function getUserNumberInput() {return parseInt(usrInput.value);  --------------> já é óbvio o que essa função faz, não precisa explicar.
//                                          }

//ex de comentário bom:

//Gets input from input field

//function getUserNumberInput() {return parseInt(usrInput.value);
//                                          }

//-------> por que é bom? Porque adiciona contexto, adiciona a informação de que esse input vem do input field, porque isso pode não estar totalmente claro quando olhamos a constante "usrInput.value". Economiza tempo para o desenvolvedor
//que olhará o código e não terá que descobrir manualmente a qual  tipo de elemento/constante o negócio (a função) está se referenciando.

//Em createAndWriteOutput, por exemplo, poderíamos colocar:

/*Generates and writes calculation log --------------> Professor até comenta que esse comentário talvez nem mesmo seja necessário, pois é bem facinho de perceber o que isso faz só de olhar para a função. Mas, se você dá apenas uma primeira olhada para isso, pode parecer assustadora a função. O comentário serve para acalmar, também, aqui ela serve para indicar que essa função se trata apenas de uma helper function, que ela
gera e faz o output de uma string de texto/informação em um campo do html.*/

/*function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;   
    outputResult(currentResult, calcDescription);}  //Function extracted from vendor.js file.



    //outra coisa que você pode fazer é colocar um comentário depois de uma linha de código, uma comment line. Há um exemplo nessa função createAndWriteOutput, onde dizemos de onde tiramos essa útil função, e que tiramos a função de um lugar externo a este arquivo, e não do seu interior.














/*
    Aqui veremos mais operadores, que serão então usados com JavaScript.




Uma feature especial do javascript, se você pode chamar disso, é um conjunto especial de operadores que vocÊ pode usar. 


revisando:



=  ----> assign operator


+ -----> plus operator



- -----> minus operator



* -----> mult operator



/ -----> divide operator





Agora, veremos uns "OPERADORES ATALHOS", assim chamados.


Primeiramente, o operador utilizado para resumir a presença de uma constante/elemento do javascript em algum pedaço do código.




ex:



function add(){const enteredNumber = getUserNameInput();
const initalResult = currentResult;
currentResult = currentResult + enteredNumber;    ---------------------------------> esta linha tem algo que podemos resumir com um operador shortcut.
createAndWriteOutput('+', initialResult, enteredNumber);}


O operador de que falamos é o +=.


currentResult = currentResult + enteredNumber  é  A MESMA COISA que       currentResult += enteredNumber.


+= é utilizado para "elipsar" a presença de uma constante que é repetida, que aparece tanto no lado esquerdo como direito.

os efeitos no código são os mesmos, mas assim economizamos tempo, pois apenas precisamos digitar += para "copiar" aquele primeiro valor no segundo campo, no campo direito.

Pode parecer banal, mas em Javascript é muito comum ver essas repetições de código idiotas.  */

/*usar comments para remover adicionar código.*/

/*NOVOS CORE DATATYPES A SEREM UTILIZADOS NO PROJETO DA CALCULADORA: ARRAYS e OBJECTS.*/

/*ARRAYS SÃO ADICIONADOS POR MEIO DO USO DE [SQUARE BRACKETS]*/

/*ARRAYS SÃO ESPÉCIES DE LISTAS, E ENUMERAM ELEMENTOS VARIADOS EM SEU INTERIOR. PODEM SER NÚMEROS, STRINGS, QUALQUER COISA*/

/*OBJECTS SÃO FORMAS DE AGRUPAR E ORGANIZAR CONTEÚDO. SÃO CRIADOS POR MEIO DO USO DE CURLY BRACES {}, E PRECEDIDOS POR UM NOME.*/

/*como colocaremos arrays e objetos no nosso projeto?*/

/*Podemos querer disponibilizar o log da nossa calculadora para o usuário, mostrar para eles a lista de cálculos que eles efetuaram dentro da calculadora, queremos
mostrar tudo, queremos armazenar tudo em um log, um log interno que poderíamos teoricamente mandar para um servidor, ou qualquer coisa assim, em node.js, escrever a um arquivo, etc.
aqui não podemos dar store no filesystem por causa de razões de segurança, mas em node.js poderíamos.

Mas é bom levar em consideração isso, porque queremos armazenar esse log no nosso próprio analytical server.*/

//acompanhar
/*queremos keep track de uma LISTA de OPERAÇÕES, porque não estamos interessados em apenas UM CLICK apenas, o primeiro click, mas sim TODOS OS CLIQUES EM QUAISQUER BOTÕES.


//Precisamos de uma lista de dados que ficará maior e maior ao longo do tempo.


//Para isso, podemos adicionar uma nova variável aqui, láaááa em cima, no início, como aprendemos, chamada logEntries. Professor criou um nome no plural porque ele sabe que o negócio terá
//múltiplos elementos no seu interior, já que será um ARRAY, como ele mencionou anteriormente.




/* Professor cria um array assim:
                                                                                                                                //(tipo de dados)
let logEntries = [1, 2, 3, 4];             ---------> Ou seja, essa é uma VARIÁVEL cujo valor é um ARRAY (uma lista), cujo valor é de um DATATYPE ARRAY.



Arrays podem ser escritos assim: [1,2,3,4], mas isso é ruim, pois prejudica a leitura do negócio. Sempre é melhor inserir um espaço entre cada elemento e a vírgula.
*/

/*Entretanto, o professor vai querer um array VAZIO, porque inicialmente nós NÃO TEMOS NENHUMA LOG ENTRY, então não podemos apenas criá-la dessa forma.*/

//let logEntry = [];

//Agora, se queremos criar uma logEntry quando clicamos em um botão, digamos no botão de adicionar, vamos lá para baixo e copiamos o logEntries dentro
//da função add. Nos referimos à variável logEntries dentro da função add.

//Anteriormente, sempre havíamos assignado um novo valor dentro das funções, com ajuda do operador (=). Agora, definimos a variável a um novo valor,
//a um novo array, porque o professor quer sobreescrever o array preexistente que está LÁÁÁÁ em cima nas primeiras linhas.

//Professor deleta definição da variável logEntry lá em cima, deixa ela somente
// let logEntry;      ------------> remove o = []; ------------------------>>>> diz que fazer isso é deixar a variável "unitialized", não inicializada.

//Agora professor coloca nova definição de logEntry dentro da função add, a definição do valor [enteredNumber]; , que é uma referência a uma constante que fora definida anteriormente na função.

//Então, agora definimos a variável a um novo array com um único elemento, e esse único elemento é o "enteredNumber" que colocamos.

//Essa é um dos caminhos de editar um array, dando overwrite num array que já existia numa variável anteriormente. Às vezes é bem isso que você precisa, mas há um outro jeito.

//O outro jeito, que às vezes você vai querer usar, é editar um array que já existe. Para isso, vamos até a variável logEntries e reinicializamos ela com um novo valor, [];.

//digamos que queremos adicionar um NOVO ELEMENTO à esse Array que já existe. Para isso, nós podemos alcançar esse array e não propriamente assignar um novo valor com o sinal de = e chamando a variável,
//mas em vez disso usando a função especial, uma função especial que pertence ao array.--------> é a função push.

//Arrays na verdade tem muito mais do que apenas essa função push, e temos um módulo inteiro dedicado aos arrays, mas por agora focaremos nas funções.

//a PUSH FUNCTION faz o que o nome dela sugere, ela EMPURRA nesse array, ela ADICIONA UM NOVO ELEMENTO à lista. Aqui, podemos dizer que esse elemento será o "enteredNumber".

//logEntries.push();

//logEntries.push(enteredNumber);

//seria legal se pudessemos VER esse array.

//por agora podemos fazer algo que você fará muito durante o desenvolvimento de códigos javascript:

//é o comando "console.log".

//console.log é uma função incorporada ao Javascript/browser.

//É UMA FUNÇÃO QUE TE PERMITE OUTPUTTAR ALGUMA COISA NO CONSOLE/TERMINAL DE DESENVOLVIMENTO, QUE VOCÊ PODE VER NAS DEVELOPER TOOLS.

//adicionamos console.log na função add, a título de exemplo.

//aqui não outputtaremos um erro, mas sim uma mensagem de informação de log. Podemos aqui, por exemplo, console.log as logEntries, para que os valores que estão atualmente na variável (que devem ser apenas aquele array e aquele elemento extra "enteredNumber.") sejam apresentados no console.

//a primeira vez que rodamos todo o código, console.log só mostrará UM ÚNICO VALOR, já que o enteredNumber não foi ainda acionado. Quando inputtamos um
//número, enteredNumber entra em jogo e influi no valor da array e no resultado obtido por meio do console.log de LogEntries*

//Se recarregarmos o browser e checarmos o console nas developer tools, veremos que o console agora relata o valor que foi inputtado(a constante enteredNumber, que roda a função getUserNumberInput).

//cada valor no developers tools ali é um array.

//caso continuemos a adicionar números, o array vai ficar cada vez maior, com mais números no seu interior:

//ex:
//[21] -> [21, 21] -> [21, 21, 21];

//... não é correto chamar os outros resultados de NOVOS ARRAYS; são, na verdade, o mesmo array, mas com um(uns) novo(s) elemento(s), para ser preciso.

//essa é uma excelente forma de acompanhar múltiplos items, múltiplos pedaços de dados que + ou - devem ficar juntos e que devem ser manipulados/administrados como uma  LISTA de dados.

//agora, se você quiser LER o Array, no sentido de não fazer log dele inteiro, e sim extrair algum elemento, digamos o primeiro elemento:

//você pode fazer isso, acessar um elemento específico do array, por meio do uso de [SQUARE BRACKETS] logo após do nome da variável (se você está acessando uma variável, é claro) que você está acessando, com o número da posição(o index number) que você quer dentro dela.

//OBSERVAÇÃO IMPORTANTE: ARRAYS SÃO ZERO-BASED. O QUE ISSO SIGNIFICA? SIGNIFICA QUE A POSIÇÃO DO PRIMEIRO ELEMENTO É DEFINIDA PELO NÚMERO 0, E NÃO PELO NÚMERO 1, COMO VOCÊ PENSARIA NORMALMENTE. ISSO É PORQUE 0, EM LINGUAGEM DE PROGRAMAÇÃO, GERALMENTE SIGNIFICA ORIGEM.

//ex:

//console.log(logEntries[0]);   -------> SELECIONA O PRIMEIRO ELEMENTO DO ARRAY.

//Se fizermos isso, veremos que apenas o primeiro elemento do array vai ser mostrado no console, o resto nem aparece.

//0 é o primeiro número, 1 é o segundo, etc etc.

//logamos, então, o primeiro elemento do array com array[0]. Fazemos retrieve no primeiro número do negocio,
//A primeira entrada específica do array.

//caso tentássemos logar o segundo número, [1], veríamos um erro no nosso código (apareceria como undefined no console do developer tools).

//Não é um erro própriamente dito, mas também não é o valor que nós esperávamos (o número inputtado), a razão é muito clara:

//É PORQUE SÓ TEMOS UM (1) ÚNICO ELEMENTO DENTRO DO ARRAY, QUE FOI INSERIDO COM O USO DA FUNÇÃO PUSH, DENTRO DA FUNÇÃO ADD.
//COMO SÓ TEMOS UM ELEMENTO, NÃO TEMOS COMO DAR LOG NO SEGUNDO ELEMENTO DESSE ARRAY, dá undefined, PORQUE ELE NÃO EXISTE (único elemento que existe, o elemento de index 0, foi introduzido por meio da expressão logEntries.push(enteredNumber).).

//APENAS CONSEGUIREMOS LOGAR O SEGUNDO ELEMENTO (OU SEJA, "[1]") SE APERTARMOS MAIS UMA VEZ O BOTÃO DE ADICIONAR. ISSO É PORQUE NOSSOS NÚMEROS ESTÃO SENDO INTRODUZIDOS DENTRO DO ARRAY PARA SEREM ADICIONADOS, E PENSE ASSIM:

//antes de digitarmos um número e apertarmos um botão ----->   []     (array não tem nada).

//digitamos 11 e clicamos no botão + -----------> [11]  (array tem apenas um único elemento, que é o elemento de index 0).

//clicamos no botão + mais uma vez, adicionando assim mais 11 unidades ----------> [11, 11]  (ARRAY AGORA TEM DOIS NÚMEROS, UM 11 DE INDEX 0, E OUTRO DE INDEX 1. O 11 DE INDEX SERÁ RETRIEVADO PELA FUNÇÃO console.log, já que é o segundo elemento, o elemento de index [1] da função.)

//Isso, então, são ARRAYS, podemos GERENCIAR LISTAS DE DADOS com elas.

//Porém, há muito mais que podemos fazer com elas além de fazer push e acessar elementos singulares dentro da lista. Vamos aprender isso ao longo do curso.

