// Comecemos com mensagens de erro que você pode evitar. Simples erros de sintaxe. EX: esquecemos de fechar um curly brace ou square bracket.


// OBS, Ctrl + ;----> muito útil, atalho para comments.

// Nisso, o IDE já nos ajuda.



// O visual studio code marca na direita, com um quadrado vermelho, a parte errada do código.





//outro indicador de erro é essa linha vermelha embaixo do código, que aparece se ele estiver incorreto.




 você pode ver isso já aqui, nessa linha normal.


// se você colocar o mouse sobre o termo que está como errado/com problemas, o IDE te dá uma descrição da possível questão/problema.

let logEntries = [;

// erro que está ali: "expression or comma expected." ---> professor diz que essa não é a melhor mensagem de erro de todas, sinceramente. Ela
// não descreve completamente o problema, o problema de uma square bracket estar faltando para fechar a inicialização/definição daquela variável, 
// mas ainda assim, você percebe rapidamente que há algo errado por aqui. 

// Entretanto, esses erros de sintaxe são os mais fáceis de corrigir, você apenas percebe e os corrige rapidamente.

// Ainda assim, essa ajuda do IDE não pode ser subestimada, todos nós cometemos erros às vezes.



// Porém, às vezes temos erros que não aparecem no IDE, e cuja existência devemos sempre considerar.

// ex: return parse(usrInput.value);

return parse(usrInput.value);

// Essa função não é incorporada/built-in no javascript (como parseInt o é), mas o browser ainda assim não considera
// isso como um erro, porque ainda é uma função válida, apesar desse detalhe dela ter sido definida pelo usuário, e não pelo browser/javascript.


// imagine que é exatamente isso que acontece, o sujeito deixa parse em vez de parseInt, e aí nada na calculadora funciona. Como descobrir o problema
// e resolvê-lo? Usamos OS DEVELOPER TOOLS do chrome.


// obs: sempre usar DEV tools no modo incognito do chrome, para não sofrer alterações no código por parte de terceiros.


// Sempre quando você abrir o DEV TOOLS, vá diretamente para o console, porque é lá que estarão, potencialmente, as mensagens de erro.


// Caso leiamos as mensagens de erro no DEVTOOLS, veremos que o browser reclama um monte. Não devemos entrar em pânico, devemos ler as mensagens 
// atentamente. 

// ERRO = parse is not defined. Vemos até mesmo a linha em que essa função foi chamada. "at..."


// podemos, além disso, clicar no app.js:7 (ou qualquer linha que o seja). Isso fará com que o browser nos mostre exatamente a linha de código que está dando problema.


// E, como esse código que deu erro foi executado pelo browser durante o runtime, o browser sabe que, de fato, a função parse não está definida. O IDE não consegue saber disso porque ele não
// sabe de qual script estamos carregando aquela função, de outro servidor, etc... MAS O BROWSER SABE EXATAMENTE O QUE ESTÁ DISPONÍVEL DURANTE ESSE RUNTIME, que não há mais nada de código
//disponível para essa função, tanto código escrito por mim ou por outra pessoa, E POR ISSO JÁ
// APONTA, DE PRONTO, O ERRO, o erro de que parse NÃO EXISTE/não foi definido.

// assim que percebemos o erro de não ter uma função parse/não termos digitado parseInt corretamente, já podemos proceder e então consertar o pequeno erro.







// ----------------------------------------------------------------------------------------
// Vimos que existem erros simples de sintaxe, consertados com o IDE; erros no runtime, que podem ser consertados com a ajuda de mensagens de erro. Agora veremos
// os erros de LÓGICA, que são mais difíceis de identificar.


// 2o tópico:



//  COMO CONSERTAR ERROS DE LÓGICA com console.log();: 




// Na nossa aplicação, na função add, a primeira coisa que a função faz é 
// pegar o user number input por meio da função getUserNumberInput();, que é então definido como valor da 
// constante enteredNumber. getUserNumberInput é, de fato, outra função,
// que foi escrita bem mais acima.


// Até aí tudo bem. Mas digamos que não estamos fazendo isso direito, digamos 
// que não estamos usando parseInt nessa função getUserNumberInput();.


// modelo original =  function getUserNumberInput(){
 //                                   return parseInt(usrInput.value);
//         }



//modelo alterado = function getUserNumberInput() {return usrInput.value;}



// Nesse exemplo, nós nos esquecemos, hipoteticamente, de adicionar parseInt antes do posicionamento da constante.
// Isso resultaria em um típico erro de lógica.

// Tudo funcionará normalmente, mas o aplicativo não irá se comportar do jeito que você quer,
// porque teremos um erro de lógica no nosso código.


// Se recarregarmos o console, veremos que se eu colocar um 5 no campo do usuário e apertar, então, o botão de adicionar, 
// o resultado que me será dado será o mesmo lááá do início das aulas, 05, o aglutinamento de 
// string e números.

// é um caso onde o texto é + ou - concatenado em vez de ser calculado como um número.


// Não temos nenhuma mensagem de erro, o que pode ser complicado em várias situações.


// O que podemos fazer nesse caso?


// bem, podemos começar com um bom e velho debugging por meio de console.log.



// Sabemos que o comportamento não é o correto quando eu aperto o botão de +.

// Podemos, então, ir até essa função de + (add), que é a função sendo ativada (triggerada) quando
// apertamos o botão de adicionar. Por isso colocamos um console.log dentro da função add, logo depois da definição da constante enteredNumber como getUserNumberInput();
// loggamos, então as constantes enteredNumber e currentResult, para ver seus valores no developer tools (sempre é possível fazer o console.log de multiplas valores)

// você também pode combinar o console log com texto/strings. ex: console.log('INPUT', enteredNumber, currentResult);----> se você fizer isso, a máquina simplesmente printará aquele texto junto desses valores enteredNumber e currentResult. A função disso, quando estamos usando console.log de verdade, é para as ocasiões onde você tem múltiplos log statements; uma breve busca Ctrl + F te mostrará exatamente onde você colocou essa string, é bom para organizar seu código na hora do debugging. 
// 




// recarregamos a página, aí digitamos 5 e apertamos o botão de adicionar. No console do developer tools,
// enxergamos "INPUT 5 0".

// Essa informação não deixa super óbvio pela maneira como está printada, mas podemos ver que
// 5 e 0 parecem DIFERENTES, não?

// Ainda que sejam números, o 0 (zero) está AZUL, e o 5 (cinco) está com a cor PRETA, assim como o texto 'INPUT'.

// Se você pensar um pouco, você já perceberá o problema: o 5 está sendo considerado como texto/string,
// e o 0 está sendo considerado como um número, e, conforme você aprendeu nas lições anteriores,
// o 5 será concatenado a uma string inteira de texto, em vez de combinada/adicionada como um número.


// Mas ainda é meio díficil de enxergar aqui, mas você PODE chegar lá com console.log debugging.

// VocÊ pode também ter múltiplos console.log statements no seu código para entender melhor o FLOW do seu código.
// faça isso quando vocÊ não tem certeza de que algo está sendo executado na ordem correta.

// você poderia também jogar dentro do código múltiplos dummy console log statements pra ver se eles são executados na ordem correta.



// Como o professor disse antes, nós podemos consertar esse erro aqui com console.log, mas é possível que nós não
// consigamos ainda enxergar o problema, no presente momento.
// Em casos como esses, vocÊ pode usar o chrome dev tools:

// vá para a aba source, onde você encontrará todos os arquivos que o chrome carregou para fazer o display desta página.
// vocÊ vê todas as pastas, scripts e etc ali.

// você vê os 2 scripts na pasta scripts, vendor.js e app.js 


// abra o app.js nessa aba source do chrome, e aí lá você poderá fazer algo legal:


//  COLOCAR BREAKPOINTS.


// ver próximo arquivo de texto para entender como usar BREAKPOINTS.





