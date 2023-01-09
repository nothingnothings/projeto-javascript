function getName() {
    return prompt('Your Name: ', '');
}




function greet() {
    const userName = getName();
    console.log('Hello '+ userName);
}



//crio uma função, greet, que serve para usar o nome colocado no input field (por meio da função getName, que trabalha por meio 
// da função built-in "prompt" e return, que retorna o valor que o usuário digitou.)

// na constante userName definimos seu valor como "getName", porque queremos dar greet Àquela pessoa, aquele nome que foi inputtado no input field.

// por fim, chamamos greet ali embaixo (porque ali em cima apenas declaramos essa função; ainda não a chamamos.)


//Se você só registra as funções e tal, você está utilizando o HEAP, e não o stack. Nosso código define 
// as estruturas, e então javascript as registra. Aqui o HEAP é utilizado porque essas funções tem vida-longa, elas continuam existindo da maneira como foram definidas até o momento em que você faz alguma coisa no seu aplicativo.


// com "greet();", mais abaixo, chamamos a tal da função registrada.


greet();



// Se fizermos isso, digitarmos algo no input field, clicarmos ok e então lermos o console, 
// veremos "Hello Max".



// Mas o que isso tem a ver com o heap/stack?



// Como mencionado, as funções em si SÃO ARMAZENADAS EM 
// "HEAP", que é onde o browser armazena essas funções e o código que deve ser 
// executado quando elas são executadas;

// Quando o script roda, o STACK FICA ATIVO, ou para ser mais preciso, O BROWSER, NO FINAL DAS CONTAS, É QUE EMPURRA AS COISAS 
// PARA O NOSSO STACK, QUE É A NOSSA "SHORT-TERM MEMORY".



// Nesse stack, tudo começa com uma execução de código ANÔNIMO, que basicamente é 
// o arquivo do script em si, ele não tem um nome (é claro que o arquivo que você tem, o .Js em si, tem um nome,
// mas aqui estamos falando de uma função grande/gigante que vocÊ não definiu o nome. )

// Portanto, o código que está diretamente no arquivo é UMA FUNÇÃO SEM NOME, vocÊ poderia dizer, e é por isso que nós 
// temos essa EXECUÇÃO ANÔNIMA no nosso stack (É A EXECUÇÃO DEFAULT DO NOSSO ARQUIVO).


// É o script "overall" (o script em seu todo) sendo executado.


// É claro que essa execução de nosso script só ocorre DEPOIS DO JAVASCRIPT AVALIAR
// O SCRIPT INTEIRO. Somente depois que ele, por exemplo, examinou todas as definições das funções.


// Então a execução de scripts começou; estamos executando o SCRIPT INTEIRO, e isso basicamente significa que 
// ESSA LINHA DO FINAL, A LINHA "greet", está sendo executada.

// Javascript, então, MOVE ESSA GREET FUNCTION PARA DENTRO DO STACK, ONDE ELE A COLOCA 
// ____POR CIMA____ DO CÓDIGO ANÔNIMO QUE FOI EXECUTADO ANTES.

//  Esquema === 



/*     




        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------





*/



// O javascript move essa função para cima do stack. O stack, no final de contas, é 
// uma ESTRUTURA DE DADOS, uma ESTRUTURA DE DADOS COM VIDA CURTA, VOCÊ PODERIA DIZER, ONDE 
// SUAS EXECUÇÕES DE FUNÇÕES SÃO ARMAZENADAS, por assim dizer. É onde o browser/javascript engine 
// mantém o controle daquilo que está acontecendo e daquilo que aconteceu.


// O stack é populado/preenchido por meio dos EMPURRÕES (pushing) de novas call de funções
// uma por cima da outra, NOVOS DADOS DE CURTO TERMO, que são executados imediatamente e que então são 
// desabilitados assim que uma nova função ocorre/assim que sua diretriz acaba/quando não é mais necessária.



// Nós começamos com a execução geral de script (anonymous), e então passamos para a
// execução do greet, que se torna O ITEM MAIS DE CIMA DO STACK. O item no topo 
// do stack sempre é a coisa que está acontecendo no presente.



// agora, se dermos uma olhada na GREET function, o que acontece lá é a criação de uma variável, userName, que 
// é criada por meio da chamada de ainda outra função, a função "getName".


// Então, agora, a engine do javascript EMPURRA a execução dessa função "getName" 
// para cima do stack.





/*     





         ----------------
        |    getName();  |
        -----------------

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------





*/


// Como o browser empurrou essa função getName para cima do stack, agora
// a engine SABE que essa função getName é a coisa que está sendo executada no presente.
// anonymous --> startou a função greet ---> função greet startou a função getName();


// É assim, por meio do STACK, que o javascript "keeps track" das relações 
// entre esses chamados de funções, assim que ele entende "o que chamou o que".

// getName está rodando, portanto... mas o que acontece agora?


// Em getName, nós retornamos o valor de "PROMPT". Tecnicamente também chamamos uma outra função,
// a função prompt.

// Mas a função prompt também é um function call, e por isso ela é empurrada para o topo do stack.



/*     





        ----------------
        |    prompt();  |
        -----------------


         ----------------
        |    getName();  |
        -----------------

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------





*/





// O stack continua assim: quanto mais funções você chama, mais coisas são empurradas para 
// o topo do stack.


// Mas o que acontece depois disso?


// ---> PROMPT ABRE AQUELA CAIXA DE DIÁLOGO, E UMA VEZ QUE INPUTTAMOS 
// ALGO ALI E ENTÃO CLICAMOS "OK" (ou cancel, há essa opção, também), 
// PROMPT na verdade retorna ESSE VALOR INPUTTADO ALI PARA A FUNÇÃO GETNAME (função getName recebe esse valor inputtado retornado).
// Quando uma função retorna/termina de executar, ela é "popped off" pra fora do stack, 
//  É EJETADA PARA FORA DO STACK. É REMOVIDA. REMOVIDA DA SHORT TERM MEMORY, PORQUE ESTÁ ACABADA.
// IMPORTANTE= estar acabada NÃO SIGNIFICA QUE A DEFINIÇÃO DA FUNÇÃO É REMOVIDA DO HEAP, 
// QUE A DEFINIÇÃO DA FUNÇÃO É REMOVIDA DA LONG TERM MEMORY. 



// representação visual:








/*     





        ----------------
        |    prompt();  |
        -----------------


         ----------------
        |    getName();  |
        -----------------

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------


        ------> VIRA:






        (prompt(); foi ejetada)


         ----------------
        |    getName();  |
        -----------------

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------

















*/




























// Ou seja, apenas a execução atual é removida do stack (isso também envolve os RECURSOS 
// QUE PRECISAM SER ALOCADOS PARA RODAR E DADOS QUE PRECISAM SER GERENCIADOS PARA RODAR/EXECUTAR 
// ESSA FUNÇÃO. TODOS ESSES RECURSOS SÃO LIBERADOS.).



// apenas esses dados de curto-termo, esse contexto de execução, é removido do stack.





// CONTINUANDO:


// Bem, em "getName" nós retornamos o resultado daquela call da função integrada do javascript, a função prompt.
// e o que fazemos com esse valor retornado? Nós retornamos o valor para a função greet (const userName = getName();)

// Como resultado direto disso, "getName" TAMBÉM É REMOVIDO/POPPED OFF do STACK:





/*     





       (prompt(); que havia sido ejetada)


         ----------------
        |    getName();  |
        -----------------

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------



            ---->>>VIRA






(prompt(); que havia sido ejetada)


        (getName(); que foi ejetado)

        ----------------
        |    greet();   |
        -----------------

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------














*/








// Sempre que uma função retorna um valor OU ACABOU TODOS OS SEUS PASSOS/está acabada, 
// ela é removida do stack. A engine do javascript faz isso para nós.



// Depois de getName ter sido "popped off", greet continua rodando... NÓS NÃO TEMOS UM 
// RETURN STATEMENT LÁ DENTRO, MAS UMA VEZ QUE A FUNÇÃO TERMINOU DE EXECUTAR SUA ÚLTIMA LINHA, ELA ACABA.
// ***SEMPRE QUE UMA FUNÇÃO EXECUTA SUA ÚLTIMA LINHA, ELA IMPLICITAMENTE RETORNA. A função implicitamente retorna, retorna automaticamente.


// Por isso que quando greet termina de executar sua última linha ela é EJETADA DO STACK.







/*



        (prompt(); que havia sido ejetada)


        (getName(); que foi ejetado)


       (greet(); que foi ejetado)

        ----------------
        | (anonymous)   |
        -----------------

        ----------------
        |  Stack        |
        -----------------














*/













// A única coisa que nos resta no stack, depois de tudo aquilo ter rodado, é o SCRIPT EM SI.


// VocÊ pode imaginar o script em si como um script ENROLADO EM UMA GIGANTE FUNÇÃO ANÔNIMA.

// E agora, nesse script, assim que terminamos com greet, fica aparente que não há nenhuma etapa adicional,
// fica evidente que estamos acabados com essa execução "Overall" de script.
 
// Por isso, a "gigante função", a tal de função anônima, é EJETADA TAMBÉM.



/*
 (prompt(); que havia sido ejetada)


        (getName(); que foi ejetado)

        
       (greet(); que foi ejetado)

       (anonymous, que foi ejetado).

        ----------------
        |  Stack        |
        -----------------

        */



// Isso significa que acabamos com tudo que precisa ser executado no presente.


// É possível ver isso no browser.


// É claro que vemos o resultado no console (nos mostra apenas "Hello Max" e nada mais), 
// mas se você ir nos "sources" e abrir o arquivo do seu script... você pode 
// colocar um breakpoint, colocar um breakpoint dentro de "getName".


// Se você recarregar a página, ela agora vai PARAR A EXECUÇÃO nesse exato momento, no instante 
// em que getName é executada. Aí, se você expandir o call stack no dev tools, você VERÁ 
// BEM DETALHADO O STACK DE FUNÇÕES QUE FORAM EXECUTADAS/ESTÃO SENDO EXECUTADAS.
// Você pode ver o call stack ali; não é o FULL STACK, porque a memória stack em si não 
// faz apenas o gerenciamento de function calls, mas também a administração de 
// valores de vida curta armazenados nas variáveis, mas mesmo assim essa função das dev tools 
// NOS MOSTRA A ____ORDEM____ EM QUE AS FUNÇÕES FORAM EXECUTADAS, E COMO ELAS FORAM GERENCIADAS 
// COMO UM STACK.


// Esse é o stack ao qual o professor estava se referindo.


// aqui vemos "getName" antes de greet e antes de anonymous... isso é porque "getName" está 
// prestes a chamar "prompt"... podemos ver isso por meio do "step into the next function call" do chrome, 
// que então abre o código do prompt... Então, se eu digitar 'Max' e então colocar ok, 
// voltamos ao getName. Infelizmente no devtools nunca é mostrado o prompt sendo chamado,
// mas o prompt seria empurrado para o topo do stack, também.

// E agora, se continuarmos e "stepparmos" para fora da function call atual, por exemplo,
// voltaremos para greet, e portanto getName será EJETADO DO CALL STACK, assim como aprendemos.
// Se pularmos para fora do greet, ele também será ejetado para fora do call stack, e voltaremos a "anonymous".
// se eu pular para fora de novo, deixarei o call stack vazio.



// Esse é o modus operandi  do javascript, a forma como ele gerencia os dados e 
// O CONTEXTO DE EXECUÇÃO (a ordem de execução), e o jeito que as coisas funcionam por debaixo do capô.



// Você pode se lembrar daquilo que o professor disse na primeira seção do curso, em que ele mencionou 
// que o javascript é uma linguagem "SINGLE-THREADED". 

// SINGLE-THREADED === "AS COISAS ACONTECEM UMA POR VEZ". "One thing happens at a time".


// Observamos isso nesse exemplo prático: O javascript chamou uma função por vez, e as outras funções apenas 
// esperaram a resposta daquela função, como vimos no STACK.


// O stack e a ideia de GERENCIAR OS FUNCTION CALLS e o FLOW DO SCRIPT DENTRO DE UM STACK asseguram 
// que a mecanica do single-thread FUNCIONE, QUE A ORDEM DE EXECUÇÃO SEJA RESPEITADA.




// HÁ MAIS UM CONCEITO IMPORTANTE, MAS É UM CONCEITO QUE NÃO FAZ PARTE DO JAVASCRIPT, E SIM DOS BROWSERS ATUAIS/MODERNOS (como o chrome).
// O NOME DO CONCEITO É "EVENT LOOP". O event loop vai nos ajudar com CÓDIGOS ASSÍNCRONOS ( asynchronous code, coisa que ainda não aprendemos muito sobre, ainda).

// o async code nos ajuda com coisas como EVENT LISTENERS (como click listeners, que adicionamos a botões.)


// Esse esquema atual que temos aqui ("How code gets executed"), em que temos esse "STACK" que faz coisas e que eventualmente fica vazio BASICAMENTE 
// DEIXA IMPLÍCITO QUE UM SCRIPT SEMPRE TEM UM MOMENTO FINAL, UM MOMENTO EM QUE ELE "ACABOU COM TUDO", ACABARAM AS SUAS FUNÇÕES.


// podemos ver isso no script do greet();. O script do greet acaba após a execução do "greet();"... mas isso não é regra para 
// TODOS OS TIPOS DE SCRIPTS, há alguns scripts que não seguem essa regra.


// Ex: SCRIPT que não segue essa regra está na pasta "QUARTO PROJETO", próxima a este documento em que estamos escrevendo.



// Esse documento app.js tem um pouco mais de conteúdo do que nosso terceiro projeto, já que ele tem 2 botões.



// Voltaremos para esse quarto projeto mais tarde no curso, porque ele tem um PROBLEMA, que deve ser resolvido.


// Mas a coisa principal para nós, agora, é que nele estamos ADICIONANDO EVENTLISTENERS DE VERDADE. Estamos adicionando 
// event listeners para 2 botões.


// Se executarmos esse código E ADICIONARMOS UM BREAKPOINT NESSE CÓDIGO, NO FINAL, QUANDO ESTAMOS SETTANDO 
// O EVENTLISTENER DO "addListenerBtn".... O professor recarrega a página, e aí A EXECUÇÃO PAUSA, E ENTÃO TEMOS 
// O NOSSO CALL STACK COM SEU CONTEÚDO VAZIO (com exceção de anonymous, a função que faz wrap). Professor explica que 
// ele não está PAUSANDO DENTRO DE UMA FUNÇÃO, POR ISSO É QUE 
// a execução da função "anonymous" é a única que está descrita no call stack.

// Se o professor resumir a execução da função, o call stack vai ficar realmente vazio, sem nada dentro.


// Isso deixaria implícito que ESTE SCRIPT É INCAPAZ DE FAZER QUALQUER COISA DEPOIS DISSO, "CANT RUN ANYTHING EVER AGAIN".


// MAS ISSO É UMA MENTIRA ----> SE NÓS, DEPOIS DISSO, DIGITARMOS ALGO NAQUELE CAMPO (COMO 'Max') e AÍ 
// APERTARMOS "ADD A LISTENER TO THE OTHER BUTTON" E depois "CLICK ME", VEREMOS 
// QUE ESSES BOTÕES AINDA FAZEM COISAS, QUE ELES ADICIONAM COISAS NO CONSOLE. Por isso aquele 
// pensamento, o pensamento de que o script é incapaz de fazer qualquer coisa quando
// sua execução chega a um fim (quando o JS terminou de ler todo o código) é UMA MENTIRA.

// Se examinarmos ainda mais a função, veremos que o output daquela mensagem vem do nosso script que deveria ter "acabado", vem especificamente 
// da LINHA DE "CONSOLE.LOG(VALUE || 'Clicked me!')"


// Ou seja, o script ainda está vivo, mesmo com o call stack estando vazio.


// BEM, ISSO É ____EXATAMENTE___ O QUE O ___EVENT____LOOP____ FAZ.

// VEREMOS O EVENT LOOP EM DETALHES MAIS TARDE, ASSIM QUE APRENDERMOS MAIS 
// SOBRE ASYNCHRONOUS CODE EM JAVASCRIPT (o que é, e o que é o oposto dele...). 
// Mas por enquanto devemos ter em mente que há algo a mais no browser (e não na engine, a engine é apenas aquilo do HEAP/STACK que vimos antes)
// que se COMUNICA COM A ENGINE, e que é o tal do event loop.


// no final das contas, você PODE IMAGINAR ESSES EVENTLISTENERS COMO 
// INFORMAÇÃO SENDO PASSADA AO BROWSER (ou seja, o javascript NÃO SE IMPORTA 
// COM ESSES "ONGOING LISTENERS", LISTENERS QUE ESTÃO RODANDO,PORQUE É O 
// BROWSER QUE OS ADMINISTRA), E O BROWSER BASICAMENTE "PINGS" (manda uma mensagem) À ENGINE DO JAVASCRIPT, você poderia dizer, 
// SEMPRE QUANDO ELE TEM UM NOVO EVENTO SENDO ACIONADO PELOS LISTENERS ESTABELECIDOS PELO CÓDIGO javascript.


// É o browser, portanto, que administra esses listeners... e sempre quando um desses listeners é ativado, 
// sempre quando um botão é clicado (o que, é claro, faz parte da web page renderizada pelo browser, por isso o browser SABE QUANDO ISSO ACONTECE), 
// sempre quando isso acontece, essa informação de que o clique/gatilho aconteceu é 
// empurrado na direção do seu código javascript. E esse empurrão ocorre COM A AJUDA 
// DAQUELE TAL DE EVENT LOOP, que está lá para ASSEGURAR QUE ESSE EVENTO DE EMPURRÃO ("push event") NÃO
// INTERROMPA SEU SCRIPT QUE ESTÁ NO MEIO DA EXECUÇÃO (porque ele ainda pode estar sendo executado), 
// para que, em vez disso, esse empurrão seja executado em ordem (na ordem correta), uma vez que o seu 
// call stack esteja vazio.


// veremos mais sobre o event loop em um módulo posterior, assim que dermos uma olhada na questão do código assíncrono.



// Mas a engine javascript em si é apenas aquele negócio HEAP/STACK.






















/*SOBRE BROWSER APIS:












In the last lectures, we covered the JavaScript engine and what it does inside of the browser. You also learned that there is a difference between the JS code execution and Browser APIs you might tap into during that execution.

Essentially, you can split the code you write into these two pieces:

1) The JavaScript Language
Understands core syntax (let, const etc) but does NOT know anything about the DOM for example

2) Browser APIs
Not responsible for understanding your code (that's what 1) does) but instead responsible for exposing APIs like the DOM API which you can use from inside your script code.



The JavaScript language (1) is advanced by the Ecma International Technical Committee 39 (TC39), which is a group that's part of the Ecma organization. It's responsible for adding new features to the JavaScript language itself. For example, in the past, it was responsible for adding let and const.

You can learn more about TC39 here: https://tc39.es/

And you can explore the current proposals that are being discussed by that group - features that potentially make it into the core JavaScript language in the future: https://github.com/tc39/proposals

IMPORTANT: Just because a feature becomes part of the language does NOT mean that all JavaScript engines immediately support that feature. Of course the people developing the engines are doing their best to provide support as soon as possible but that process simply also takes time.

On the other hand, engine vendors also sometimes start supporting certain features BEFORE TC39 made a feature an official part of JavaScript. Because in the end, it's of course totally up to the people working on the engines to decide which syntax their JS engine understands.



Browser APIs also are standardized because the different browser vendors (Google for Chrome, Microsoft for Edge etc.) of course want to (roughly) provide feature parity and similar APIs. It wouldn't be a great developer experience if you had different functions which you need to call to make your scripts work in different browsers. Although, in the past, this was pretty normal.

Nowadays, thankfully, this is getting way better because there also is a working group that works on browser APIs - so that different features and APIs in different browsers are avoided as good as possible.

That working group has the name WHATWG and you can learn more about it here: https://whatwg.org/

If you're interested in learning more about the APIs that were/ are "managed" by this group, you can check this site: https://spec.whatwg.org/

This working group is not related to TC39!






*/