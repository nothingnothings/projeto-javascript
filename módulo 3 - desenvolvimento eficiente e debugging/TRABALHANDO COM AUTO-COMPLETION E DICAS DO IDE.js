/*TRABALHANDO COM AUTO-COMPLETION E HINTS DO IDE.*/

/*Nenhum shortcut consegue fazer com que você pare de escrever código ruim. O IDE pode tentar te ajudar,
ele tem muitas funções de autocomplete.*/

/*vamos ver um exemplo:*/

function getUserNumberInput() {
  return parseInt(usrInput.value);
}




function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {

}




/*quando vocÊ vai escrevendo coisas por aqui, você percebe que o IDE te sugere várias coisas que você poderia usar ali, 
sugestoes de funções, variáveis, etc, todas que contém palavras importantes para aquele código. Exemplo disso é create, se você digitar create logo abaixo agora, você vai ver que já será auto-sugerida a função createAndWriteOutput.*/



/*nem precisa ser uma única palavra; todas os carácteres que eu digitei antes serão mostrados nas
sugestões, que podem ser funções e propriedades enormes, por isso que esse auto-suggest economiza tanto tempo*/


/*você só precisa apertar ENTER ou TAB para inputtar aquele código.*/

/*além de te dar excelentes sugestões, o IDE também te dá uma pequena descrição do que aquela coisa faz, por meio de uma mensagem na direita*/


/*com createAndWriteOutput, enxergamos os parâmetros que a função aceita, e aí podemos decidir se queremos
usá-la aqui ou não*/


/*algumas funções e propriedades, especialmente aquelas incorporadas ao browser/javascript até mesmo dispoem 
de pequenas descrições anexadas a elas, que você também pode ler no painel da direita.*/


/*você também vê algo similar quando você coloca um . (ponto) depois de um objeto ou um array (que na verdade, é um object especial, como vimos antes)*/

/*com o . , vemos uma lista de todas as propriedades e funções que você pode acessar em um objeto como esse, ex: a push function, que nos possibilita "empurrar" uma nova entry/entrada em um array.
Aí você vÊ o painel na direita, que te diz a sintaxe, os argumentos que ela aceita, etc.*/

/*você verá que, no caso do array, ele tem muito mais funções/métodos anexados à sua existência, que podem ser utilizados*/

/*veremos todos eles no módulo dedicado aos arrays.*/




//OUTRO ATALHO ÚTIL/IMPORTANTE:



/*Ctrl + space = abre a aba de sugestões de funções/propriedades/nomes para um determinado item.
é outra feature recomendada pelo professor.*/


/*você pode passar o mouse por cima das coisas também, e o ide te dirá o que aquela coisa é e o que ela faz.
ex: te diz que é um method, e diz o que ele faz*/


/*e quando você chama uma função, como, digamos, createAndWriteOutput e então inputta (), por default você já recebe uma ajuda de parâmetros na direita,
onde você vê todos os parâmetros e o valor que você precisa adicionar no primeiro parâmetro até mesmo é sublinhado pelo IDE, para que você saiba
que, qualquer coisa que você escreva agora, ela será recebida nesse tal primeiro parâmetro de nome X (no caso, seria o parâmetro de nome "operator".
Assim que você termina o primeiro parâmetro, já o segundo parâmetro é sublinhado na caixa de diálogo, para que fique bem claro qual espaço, qual parâmetro
vocÊ está assignando a esse termo.*/

createAndWriteOutput()



/* Ctrl + shift + space = abre caixa de diálogo de triggerParameters (caso de cima).*/
/*bem conveniente*/




/*view - extensions -> você pode ver as extensões que estão instaladas no seu IDE.

algumas extensões úteis são de Dart e Flutter.  */



/*não instale mais extensões do que o necessário, porque o IDE pode até ficar lento, e pode até acontecer conflitos
entre extensões*/



/*extensões podem ser configuradas e personalizadas*/



/*ex: tab-width: espaço entre indentações. Prettier automaticamente define ele para 2. O visual studio na verdade usa 4, mas esse 4 é então sobreescrito pelo 2*/




/*SE VOCÊ DEFINIR ALGO ESPECIFICAMENTE PARA UM PROJETO/USAR A OPÇÃO WORKSHOP DO VISUAL STUDIO, 
SUAS SETTINGS ESPECÍFICAS FICARÃO GRAVADAS NUM DOCUMENTO CHAMADO "settings.json", que ficará numa pasta chamada
.vscode, dentro do seu projeto. Essas settings específicas são opostas àquelas ordinárias do visual studio, que são aplicadas em todos os projetos
(e ficam em %appdata%). */


/*agora a última coisa, mas não menos importante: IDE views.

view-> explorer ---> é o que utilizamos. Nos mostra os arquivos dos nossos projetos na esquerda, para fácil acesso.


view-> search ---> Também pode ser muito útil. Procura em todos os seus arquivos, e vocÊ pode personalizar a forma como ele procura, se a busca é case-sensitive ou não.*/


/*exemplo: teste a busca com WriteToLog*/


/*atalhos para view-> explorer e view-> search:


explorer: Ctrl + shift + E


search: Ctrl + shift + F




(source control mode)
SCM: 

Ctrl + shift + G


*/




/*Em view você também tem a opção SCM:


essa opção te ajuda com SOURCE CONTROL-->

aí, quando você está trabalhando com GIT, você vê o que vocÊ mudou
desde o seu último commit*/ 

/*você pode então inspecionar o que você mudou e fazer commit nisso, e assim por diante...*/


/*Concluindo: se você quer ter uma GUI para source control, você pode usar esse SCM.*/




/*Por fim, temos a opção DEBUG CONSOLE (Ctrl + shift + Y), 
que é um modo que veremos mais à frente nesse módulo. Nos ajuda a entender nosso código e como ele é executado, e 
nos ajudar a encontrar e consertar erros*/



/*onde procuraremos ajuda?  NO MDN.*/