//aqui escreveremos toda a lógica dos botões.

//Veremos como os if checks funcionam nessa página.

//A página no início perguntará quanto de vida o player e o monstro terão.
//antes de mais nada, definimos quanta vida inicial o player e o monstro terão.
//esse valor, por enquanto, será hardcoded, mas mais tarde deixaremos o próprio usuário definir esses valores no momento em que ele entra na página.
//o attackValue é uma constante, porque esse valor não irá mudar ao longo do código/lifecycle do programa.
//JÁ a vida é uma variável, porque seu valor vai mudar ao longo do código.

//professor gosta de ter as constantes sempre no início, pelo fato de que elas nunca mudam ao longo do código.
//definimos o ataque como 10, isso é quão forte bateremos no monstro por turno.
//professor diz que isso do ataque está correto, mas ele admite que em VENDOR.JS temos um pouco de lógica de randomização
//incorporada no código, para que o valor do ataque que ele settou aqui será tratado como O VALOR MÁXIMO das possibilidades,
//já que a função de vendor.js gerará um valor aleatório entre 0 e o valor definido aqui (10).
//Isso é para que haja um pouco de aleatoriedade no jogo.
//Há uma outra pequena coisa que o professor quer mudar aqui:
//attackValue é uma constante, nunca mudará ao longo do programa, e é uma constante GLOBAL, por isso ela é de suma importância.
//Devido a esse fato, o professor afirma que devemos nomeá-la com ÊNFASE, para dar ideia da sua importância, para ressaltar
//que essa constante é uma constante de um valor FIXO (10) que foi HARDCODED no código, e que não deverá mudar.
//Professor diz que, para casos como esse, é comum usar uppercase characters e separar palavras com um UNDERSCORE para realmente
//dar a ideia de que esse é um valor global que você acabou de fazer hardcode.
//Não é obrigatório, mas é uma convenção que é muito usada.

//---MAS POR QUE chosenMaxLife não é um desses tais de "global values"? Bem, porque nós mais tarde DEIXAREMOS O USUÁRIO DA WEBPAGE DEFINIR ESSE
//VALOR.

//A segunda coisa que podemos fazer é CHAMAR uma função que já foi exposta por vendor.js, e colocar no seu parâmetro a variável que definimos
//logo mais acima. (código da função seria de adjustHealthBars (maxLife), e inserimos o chosenMaxLife nesse slot do MaxLife.)
//se fizermos isso e recarregarmos a página, não veremos uma diferença de pronto, mas se inspecionarmos com dev tools, veremos que o elemento monster-health e o player-health estão com 100 de valor; se mudarmos esse valor no nosso código para 50 e recarregarmos de novo, veremos que o valor no documento HTML mudará para 50 em ambos espaços.
//agora queremos conectar esse botão "attack" à uma attack function, que executamos e que então abaixa esse valor de MaxLife.
//para isso, pegamos uma das constantes que estão em vendor.js, o attackBtn, que usaremos agora.
//BTW, essas constantes dos outros valores NÃO ESTÃO ESCRITAS EM ALL CAPS PORQUE NÃO SEGURAM valores HARDCODED STRINGS ou números, e sim
// referências a partes do nosso código HTML, e essas partes não são TÃO HARDCODED como o MaxLife, porque são um pouco mais dinâmicos, apesar do fato de que não mudarão enquanto o aplicativo está rodando.
//professor cria uma função a ser executada quando o elemento attackBtn é clicado (eventlistener ('click', )), a função attackHandler.

//O nome que o professor usa para attackHandler vem de uma convenção, ele primeiro coloca a descrição daquela coisa a qual a função
//está relacionada, e depois "HANDLER" no final. Isso não é obrigatório (há uma variante que pessoas usam, "onClick", "onAttack"...)
//o importante aqui é descrever quais funções estão atribuídas a esse eventListener, e quais não estão.

//dentro dessa função, o professor quer dirigir um ataque até o monstro.
//para dirigir esse ataque, pegamos a função já estabelecida em vendor.js, a função de "dealMonsterDamage(damage)".
//o que essa função faz é o cálculo de uma quantia ALEATÓRIA DE DANO, baseada no damage que alimentamos como parâmetro,
//Ela então ajusta o valor da monsterHealthBar(monsterHealthBar.value) de acordo com o dano que recebeu de dealtDamage(que é math.random() * damage;)
//Por fim, ela retorna o dano dado, a constante ( constante dealtDamage;), para que possamos usá-la/usá-lo (o dano) em nosso documento app.js.

//Então, eu quero chamar dealMonsterDamage dentro de attackHandler, e usar de parâmetro a constante que criamos anteriormente, a ATTACK_VALUE.
// essa função retornará o dano que foi dado (lembre-se, a última função inserida dentro da função dealMonsterDamage, que está em vendor.js, é a função RETURN, que retorna o valor da const/ a const  damageDealt.)

//o professor então dá store desse dano que foi retornado DENTRO DA CONST DAMAGE. Ele armazena em uma constante porque esse valor NÃO MUDARÁ DURANTE ESSA FUNCTION EXECUTION.
//damage é uma constante local, que só existirá dentro dessa função.

//agora, podemos usar essa constante "damage" para ajustar nosso monsterHealth.

//Para isso, o professor adicionará uma nova variável lá em cima, a variável currentMonsterHealth, que o professor definirá como igual à chosenMaxLife.
//É claro que essa afirmativa currentMonsterHealth = chosenMaxLife    torna a variável chosenMaxLife um pouco redundante, mas essa variável chosenMaxlife vai ficar mais importante mais tarde, quando deixarmos o próprio usuário settar seu valor.
//Mas, por enquanto, essa chosenMaxLife é apenas uma espécie de dummy data container (porque poderíamos deixar currentMonsterHealth = 100, e daria o mesmo resultado.)
//Para acabar a função attackHandler, o professor coloca currentMonsterHealth -= damage -------->
//isso é o equivalente à expressão currentMonsterHealth = currentMonsterHealth - damage. ---->
//agora, a UI é atualizada pela função dealMonsterDamage, e com isso somos capazes de atacar o monstro com um ataque normal.
//recarregamos a página e agora vemos que a barra do monstro realmente diminui de maneira aleatória, conforme vamos apertando o botão.

//porém, percebemos que ainda não temos win condition alguma.
//vamos adicionar isso.
//para a win condition, vamos precisar de um if statement.

//é hora, então, de adicionar nosso primeiro if statement.
//nos queremos determinar se, após um ataque, nós ganhamos ou não.
//então, depois do calculo da vida do monstro menos o dano,
//poderíamos inserir um IF statement. Coloco <= 0, porque o monstro estará morto também nas hipóteses em que a barra de vida fica MENOR que 0 (números negativos.)
// if (currentMonsterHealth <= 0) {
//    alert('You won!');
//}

//Perceba que mensagem "You won!" aparece no alerta ANTES da vida do monstro ser atualizada na barra de vida, isso é devido a forma como o javascript funciona. Ele bloqueia a atualização/update da UI até que nós fechamos essa caixa de diálogo/alerta. Entretanto, a lógica geral ainda funciona, e a barra de vida vai abaixar assim que fecharmos essa janela.

//agora faremos a parte contrária, a parte do monstro atacar.
//Para fazer isso, nós adicionamos uma linha de código logo após "O hit do herói", o qual, por sua vez, é expresso pela linha currentMonsterHealth -= damage;
// Para isso, temos em vendor.js uma função "dealPlayerDamage", que funciona quase da mesma forma que o dealMonsterDamage:
//ele usa o resultado da função damage e então calcula um dano aleatório que é então reduzido da barra de vida do player na UI e então é retornado como dealtDamage.
//em app.js, posso ,me aproveitar disso, para tal, nós apenas precisamos definir qual o dano máximo do monstro
//o professor coloca como valor máximo 14, esse é o valor máximo que pode ser extraído daquela função que randomiza o dano.
//O que isso significa, o professor explica, é que agora precisaremos de muita sorte para vencer, porque esses danos máximos são dispares.
//o professor diz que fez dessa forma o jogo porque ele vai evoluir ao longo do módulo, e nós vamos fazer o resto dos botões funcionarem também.

//professor cria uma nova const dentro da função attackHandler, a const playerDamage, que é o dano inflingido no jogador, resultado do ataque do monstro.

//colocamos outro IF statement, agora para a situação inversa, para quando o player perder. Agora, quando a vida do jogador atingir 0 ou inferior, ele recebe a mensagem "You lose!"
//Professor usa lógica alternativa, usa else if. O programa primeiro checará se a vida do monstro está zerada, e depois a vida do player.
//a lógica aqui é essa: imagine que o monstro nos dá um ataque muito forte, e esse ataque vai nos matar. Mas o programa sempre checa nossos ataques antes, nós BATEMOS ANTES do monstro. Por isso faz sentido que a condição de vitória 1 (if monsterhealth= 0) é analisada antes,
//afinal, é irrelevante o monstro soltar um ataque alto se ele morrer antes (se sua vida ser reduzida a zero antes disso).
//Você pode argumentar que talvez você queira checar se o jogador ganhou mais cedo no código, logo depois da linha currentMonsterHealth -= damage,
//isso impediria o monstro de nos inflingir danos nas situações onde ganhamos o jogo (não abaixaria nossa barra de vida nesses casos de vitória.)

//Caso nenhum dos dois seja verdadeiro, nem o caso do monsterHealth chegar a 0, nem o caso do playerHealth chegar a 0, esse código do if statement não faz nada. Não roda.
//Mas isso é bom, porque esse é o caso durante a maior parte do jogo; atacamos e atacamos, as barras vão baixando, e essa mensagem ainda não aparece. SÓ VÃO APARECER ESSAS MENSAGENS QUANDO FOREM SATISFEITAS AS CONDIÇÕES.

//Está funcionando a função.
//Para fazer o finetune dessa função attackHandler, podemos alterar um pouco o código no sentido de, no caso de
//ambos os valores de HP chegarem a 0 no mesmo turno, ser declarada uma mensagem de EMPATE.
//para isso, professor adiciona && (and) dentro da condição de if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) ---> agora, só podemos vencer se a vida do monstro está igual ou menor a 0 E, ALÉM DISSO, SE TIVERMOS NOSSA PRÓPRIA VIDA COMO MAIOR QUE 0.
//Aqui, portanto, criamos uma condição combinada. Duas condições para resultar em true, o currentMonsterHealth <= 0 e o currentPlayerHealth > 0.
//o mesmo para o monstro: o monstro só ganha se a vida do herói ficar igual ou menor a 0 e se ele tiver sua própria vida como maior de 0.

//Por fim, adicionamos a última condição, última hipótese, que será outro else if. Será executado no caso de nenhuma outra
//hipótese ocorrer. Usar else aqui seria errado, pois o alerta de draw seria apresentado toda vez que apertássemos no botão ataque (else sempre roda em casos onde o restante das condições não é satisfeita/resto das funções não são executadas.)
// o correto é usar else if aqui, junto de <= 0    nos dois casos, pois o empate na verdade é a hipótese dos dois perderem simultaneamente.

//agora temos lógica que funciona corretamente, com o uso de lógica de if e and.

//agora que temos nosso attackHandler, vamos codificar um strong attack.
//em vendor.js, temos a constante strong attack, que nos dá acesso àquele botão de strong attack.
//Assignamos a ele um eventListener de click, como fizemos com attackBtn, mas a função que ele executará será diferente daquela "attackHandler".
// Uma função diferente, que dará mais dano no monstro.
//função strongAttackHandler() {}

//Dentro dessa função, vou querer seguir os mesmos princípios do attackHandler normal, por isso copio a sua function body.
//PORÉM, COMO VOCÊ JÁ SABE, QUANDO COPIAMOS CÓDIGO, NA MAIOR PARTE DAS VEZES VOCÊ PODE EVITAR ISSO E ESCREVER CÓDIGO MAIS ELEGANTE.
// copiaremos o código pelo momento, mas esse não será o código final de strongAttackHandler.
//Em vez de escrever esse código dessa maneira simples e crua, eventualmente o escreveremos de uma maneira mais reutilizável, especialmente
// porque estamos trabalhando com if statements, os quais se beneficiam muito desse padrão de escrita.

// depois de criar a função strongAttackHandler, vamos lá em cima e adicionamos um novo valor para o strong attack.
// fazemos isso para ter um valor que podemos alterar em um lugar central e que afetará o resto dos lugares no código em que é mencionado.
//a constante strong_attack_value é o valor máximo de dano forte que pode ser dado ao monstro, e será de 17.
// substituímos a constante ATTACK_VALUE dentro de dealmonsterDamage em strongAttackHandler pela constante diferente, e de valor maior, "STRONG_ATTACK_VALUE".
// apesar disso, o dano que o monstro nos dá continua o mesmo.
//a win condition também continua a mesma.
//testamos a função de novo, e percebemos que o strongAttack está funcionando.
//Porém, agora percebemos um problema do aplicativo: quando ganhamos o duelo com o monstro, podemos simplesmente continuar
//apertando os botões, e a mensagem de vitória continuará aparecendo toda santa vez que o pressionamos.
//isso é indesejado, mas o professor diz que iremos consertar isso depois.
//também não estamos fazendo uso de nossa vida extra, que seria utilizada nos casos em que estamos perdendo.
// cuidaremos disso mais tarde.

//O strongAttackHandler está fazendo seu trabalho, aqui, mas há muita duplicação de código entre funções, e isso nunca é um
// bom sinal.
// como podemos minimizar isso? como podemos reutilizar código?
//para que reutilizemos código, basta analizar quais códigos são iguais.
// bem, aqui isso é muito fácil: todo o código nos 2 é igual, a única coisa que realmente muda é o valor máximo de dano
// que estamos passando, por meio de STRONG_ATTACK_VALUE, para inflingir monster damage.
// Essa função extra é bem redundante, por assim dizer.
// para reduzir a duplicação de código, adicionamos uma função nova em folha,
// Damos a ela o nome de attackMonster, porque é isso que nós vamos fazer com essas funções.
// O PROFESSOR NÃO COLOCA "HANDLER" NO FINAL DESSA FUNÇÃO PORQUE ELA NÃO VAI ESTAR CONECTADA DIRETAMENTE A QUAISQUER EVENT HANDLERS(ex: "addeventlistener")
// em vez disso, attackMonster deve ser uma função que eu vou querer chamar diretamente de dentro de attackHandler e de dentro de strongAttackHandler.
// vou querer, também, muito importante, passar um parâmetro a essa função attackMonster para identificar/alterar o modo de ataque, de normal para forte (ATTACK_VALUE e STRONG_ATTACK_VALUE)
// chamamos esse parâmetro de MODE.
// você pode chamar ele do que quiser, mas mode é bom.
// Aí, dentro do body da função attackMonster definimos um if statement de if (mode === 'ATTACK'); se o modo for attack, vou querer

// settamos uma condition para se o mode for uma string. Poderíamos alternativamente utilizar números para definir essa condição, e dizer que 0 é o attack normal, e 1 é o attack forte, aqui, como a string é mais fácil de ler, o professor usa uma string.
//se o modo é ATTACK, o que eu quero fazer é rodar a função do ATTACK_VALUE, do ataque normal.
// o que eu quero fazer aqui é criar uma variável, a qual chamarei de maxDamage, que inicialmente ficará vazia.

// depois disso, assignarei a essa variável maxDamage declarada mais cedo um valor de ATTACK_VALUE, vinculado a um if statement
// de o modo ser a string 'ATTACK'.
// Coloco um else logo após essa primeira hipótese, que fará com que todo ataque que não tem 'ATTACK' como mode saia forte (strong_attack_value).
// ele usa else porque ele vai chamar a função attackMonster lá embaixo, daquelas 2 funções específicas, e então ele passa
// ou mode, que é uma string de 'ATTACK', ou então ele passa "noMode" ou uma outra string, que resultará em else e na versão alternativa do ataque governada por else,  a STRONG_ATTACK_VALUE.
// o fato de não haver 'ATTACK' como parâmetro no lugar daquele mode ali automaticamente faz o negócio ser tratado como um ataque forte.

// É CLARO, há um caminho alternativo, que seria colocar "else if" em vez de else, e declarar a condição mode === 'STRONG_ATTACK'.
// modelo -->   else if(mode === 'STRONG_ATTACK') {}  -------> isso também funcionaria; você só teria que colocar o parâmetro de STRONG_ATTACK lá embaixo, em strongAttackHandler. O que o código
// faria, nessa situação, a sua lógica, seria de checar o primeiro IF, e depois o else if pelo strong attack. Na eventualidade de não encontrar nenhum dos dois,
// o javascript não rodaria nenhuma parte desse código.  É uma opção tão viável quanto àquela que estamos utilizando agora.
//  Ambas funcionam, apenas o comportamento deles em relação a passar um mode inválido é diferente.
// você pode escolher entre o comportamento de "sempre realizar um strong attack em caso de comandos/strings inválidas"  ou "APENAS USAR STRONG_ATTACK quando explicitamente apresentado no parâmetro do mode."

// Mas por que o professor fez isso, por que ele criou uma variável maxDamage que é então definida a diferentes valores ali embaixo na função?

// Ele fez isso para que nós pudessemos agarrar o código do attackHandler e MOVÊ-LO para baixo desse if e else if statements,
// para que depois pudéssemos simplesmente passar maxDamage para dentro do parâmetro da função dealMonsterDamage, porque agora o maxDamage é dinâmico e dinâmicamente
// atribuído aqui baseado no modo que recebemos como parâmetro ali na função attackMonster(mode), da hipótese que recebemos pelo set da string ali no parâmetro modo.
// todo o restante do código fica a mesma coisa, o que faz sentido.
// rever essa parte do final.
// comentamos para fora do documento o código original das funções attackHandler e StrongAttackHandler, cujas linhas já havíamos copiado para dentro da função originária attackMonster.
// agora, para terminar, só temos que chamar attackMonster de dentro de attackHandler... como attackHandler é relacionado aos ataques NORMAIS do player, usamos como parâmetro na função attackMonster em seu interior a string 'ATTACK'.
// já em strongAttackHandler, passamos NENHUM PARÂMETRO para a função attackMonster, porque quaisquer outros parâmetros que não são a string 'ATTACK' ensejarão a hipótese 2 da função attackMonster, o "if else...", que será o strong attack.

// Professor lança a pergunta: por que não estamos diretamente assignando attackMonster no eventListener lá embaixo, para minimizar o uso de
// outras funções (no caso as funções attackHandler e strongAttackHandler, que atuam como intermediárias entre monsterAttack e os eventListeners)?
// modelo atual --->       função attackMonster ---> chamada em attackHandler/strongAttackHandler, que segura tal função. ----->  funções attackHandler/strongAttackHandler são disparadas mediante os eventListeners dos botões attackBtn. e strongAttackBtn.
//                                   X  --------->    XY ---------> XYZ  (é quase como um foguete, múltiplos módulos.)
// modelo que parece mais perfeitinho, mas que não pode ser usado --->
//                                                 attackMonster(Parâmetro/tipo do ataque) -------->   função attackMonster disparada em ambos os eventListeners...
//      ex de como ficaria:    attackBtn.addEventListener('click', attackMonster('ATTACK'));

//  Deixaríamos apenas 2 etapas, 2 funções, em vez de 3...    MAS ISSO ESTÁ ERRADO.
// O PROFESSOR EXPLICA QUE NÃO É POSSÍVEL PASSAR PARÂMETROS PARA FUNÇÕES QUE ESTÃO DENTRO DE EVENTLISTENERS (o attackMonster ficaria cru, sem a opção de colocar a string 'ATTACK' para caracterizar ataques normais.), E ESSA É A RAZÃO PELA QUAL ESSE TIPO DE ORGANIZAÇÃO DO CÓDIGO NÃO FUNCIONA.
// (Bem, ele explica que há uma maneira de colocar um parâmetro dentro de eventListeners, mas que só veremos isso mais tarde no curso.)

// professor diz que agora as handler functions estão bem magrinhas, que executam a mesma função, mas com diferentes dados passados no seu interior, e nessa função
// nós então pegamos esses dados dinâmicos/diferentes e  os usamos em um if statement e acabamos mudando o  único tipo de lógica que de fato difere para ambos os botões (o valor do ataque, definido por ATTACK_VALUE e STRONG_ATTACK_VALUE.)

// agora, se recarregarmos a página, veremos que tudo está funcionando de forma bonita e elegante, tudo com a ajuda dos if statements.

"use strict";  // EXEMPLO DE USO DE STRICT MODE. É O MODO "HARD" DO JAVASCRIPT, DESABILITA O COMPORTAMENTO MISERICORDIOSO DO JAVASCRIPT E FAZ COM QUE NOSSO CÓDIGO FIQUE MELHOR, POR CONSEQUÊNCIA. PARA MAIS INFORMAÇÕES, VER DOCUMENTO SOBRE STRICT MODE.



const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';

const enteredValue = prompt('Maximum life for you and the monster:', '100'); //função intrínseca do javascript. Funciona de forma similar a "alert();"

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'; //constant identifiers usados para a função writeToLog, relativa a função log/botão log do jogo.
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


let lastLoggedEntry; // variável utilizada para logar eventos um de cada vez por meio do botão "show log". Interage com breaks e os for/for of/for in loops.

let chosenMaxLife = parseInt(enteredValue); //constante enteredValue (cujo valor é o prompt em que usuário deve digitar o valor de vida que quer) é forwardada aqui.
//let chosenMaxLife = 100;  //versão antiga do jogo, que não admitia o input do usuário quanto à vida que monstro e jogador devem ter.

let battleLog = [];  //definimos essa variável como portadora desse ARRAY.

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  //conditional check usado para casos em que o usuário quer ser engraçadinho e tenta colocar letras em vez de números no input field. A função integrada ao JS isNaN resulta em um boolean de true ou false de acordo com o fato da constante ser ou não "not a number". Caso o usuário coloque uma letra, a constante enteredValue, afetada pela função parseInt, resultará em um NaN, que será pegado pela função isNaN e considerado como TRUE.
  chosenMaxLife = 100; //caso o usuário tenha tentado ser engraçadinho, colocamos o valor da vida como o default, o valor de 100.
  alert('Invalid input, resetting Max Life to 100');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; //é a vida bônus, tentativa extra do jogo, ativada quando nossa vida atual chega a ser igual ou menor que 0, e ...     Isto aqui é uma variável que só segura um boolean value. Não é um valor truthy ou falsy, é realmente só um valor verdadeiro ou falso, usado para ativar a condição da vida extra em endRound();
//Obs: variáveis booleans GERALMENTE SÃO NOMEADAS ASSIM---> "hasXXXXX" "possessXXX". Elas geralmente indicam aquilo que você está tentando controlar. Outro ex: "isLoggedIn". São geralmente estados de fato do usuário.

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife); //função definida em vendor.js que REINICIA AS BARRAS DE VIDA REFERENCIADAS LÁ.
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    //o que essa função faz é registrar em um log esses valores aí, do tipo de ataque que foi (ataque do monstro), o valor do dano ao player (playerDamage), a vida atual do monstro (currentMonsterHealth) e a vida atual do jogador (currentPlayerHealth).
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    //hasBonusLife é variável que segura um boolean, definida logo acima. Aqui vemos a aplicação dos falsy/truthy values----> o professor explica que aqui você poderia colocar hasBonusLife == true, ou hasBonusLife === true, mas que isso não é necessário, pois ainda que há casos em que os valores das variáveis e tals são convertidas pelo javascript para uso como booleans (truthy ou falsy), nesse caso nada é convertido, pois a variável hasBonusLife segura um boolean verdadeiro, que nem mesmo precisa ser convertido, por isso podemos largá-lo solto nessa condição.
    hasBonusLife = false; //o que escrevi aqui? "caso currentPlayerHealth chegue a 0 ou menos que 0, e na hipótese do sujeito ter uma vida extra, O JAVASCRIPT DEVE (por meio do que está escrito nesse function body) REDUZIR O hasBonusLife para ZERO (porque o cara não mais terá uma vida extra) e "removeBonusLife", função fornecida por vendor.js.
    removeBonusLife(); //a única coisa que essa função faz é atualizar a UI para refletir a perda da vida bônus/tentativa extra.
    //além disso, agora o professor quer se assegurar de que nossa currentPlayerHealth não está abaixo de zero, por isso o professor adiciona um "lock-in" no início da função endRound, que trava a vida do jogador anteriormente ao monstro acertá-lo.
    //Se fizermos isso, veremos que... ao longo do código a currentPlayerHealth diminuiu em decorrência do dano do monstro, mas essa constante initialPlayerHealth "copia" a vida do cara antes dele receber o dano do monstro. Essa vida copiada é utilizada no if statement que vem logo a seguir, que se utiliza de removeBonusLife para retornar ao estado anterior ao hit do monstro.
    currentPlayerHealth = initialPlayerHealth; //revertemos a vida do cara ao estado anterior a ele ter levado o dano do monstro.

    setPlayerHealth(initialPlayerHealth); //função utilizada para atualizar o elemento visual da barra de vida da página. O parâmetro serve para você colocar ali o valor que o cara deverá ter ao final da execução dessa linha de código. Colocamos initialPlayerHealth porque queremos que o cara retorne para o estado anterior a ter tomado o hit e morrido.
    alert('You would be dead, but the bonus life saved you!');
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      LOG_EVENT_GAME_OVER, //alteramos aqui "LOG_EVENT_MONSTER_ATTACK" para "LOG_EVENT_GAME_OVER".
      'PLAYER WON!', //alteramos aqui a mostrada/valor dinâmico de playerDamage, colocamos um valor hardcoded, a string hardcoded 'PLAYER WON!'.
      currentMonsterHealth,
      currentPlayerHealth
    );
    //reset(); //reinicia o jogo. É função definida lá em cima, nesse documento app.js.
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');
    writeToLog(
      LOG_EVENT_GAME_OVER, //alteramos aqui "LOG_EVENT_MONSTER_ATTACK" para "LOG_EVENT_GAME_OVER".
      'PLAYER LOST!', //alteramos aqui a mostrada/valor dinâmico de playerDamage, colocamos um valor hardcoded, a string hardcoded 'PLAYER WON!'.
      currentMonsterHealth,
      currentPlayerHealth
    );
    //reset(); //também reinicia o jogo. Essas 3 expressões reset(); são substituídas pela expressão mais simples abaixo de if(currentPlayerHealth <= 0 || currentMonsterHealth <= 0 {reset();}, que é mais simples e curta, e coomprende os 3 casos, de win, draw e loss.
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("It's a draw!");
    writeToLog(
      LOG_EVENT_GAME_OVER, //alteramos aqui "LOG_EVENT_MONSTER_ATTACK" para "LOG_EVENT_GAME_OVER".
      'A DRAW!', //alteramos aqui a mostrada/valor dinâmico de playerDamage, colocamos um valor hardcoded, a string hardcoded 'PLAYER WON!'.
      currentMonsterHealth,
      currentPlayerHealth
    );
    //reset(); //também reinicia o jogo.
  }

  /*MODELO ALTERNATIVO, sem tanta repetição do código reset();:



if(
currentMonsterHealth <= 0 && currentPlayerHealth > 0 ||
currentPlayerHealth <= 0 && currentMonsterHealth > 0 ||
currentPlayerHealth <= 0 && currentMonsterHealth <= 0;
) {
    reset();
}



|| (OR) faz toda a mágica aqui.


com ||, se uma condição só é verdadeira, todas são verdadeiras. */

  //tal expressão é simplificada nessa expressão seguinte, que condensa tudo em 2 statements simples e mediados pelo operador OR (||)

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
  //função utilizada para loggar os valores de cada movimento do jogo. Porém, não basta apenas uma função que logge essas coisas, precisamos de uma função que faça o OUTPUT DO LOG, TAMBÉM. Por isso que devemos adicionar um eventListener ao botão do log e outra função para printar esses comandos.
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {      -------------------------------> BLOCO DE IF/ELSE IF STATEMENTS SUBSTITUÍDOS PELA FUNÇÃO/KEYWORD DOS SWITCH CASE STATEMENTS, QUE PERMITEM UM CÓDIGO MAIS CURTO, EMBORA NEM SEMPRE TÃO FÁCIL DE SER LIDO (VER ANOTAÇÕES).
  //   logEntry = {
  //     //aqui é criado um novo objeto, que é assignado à variável logEntry, criada dentro dessa função e disponível somente em seu interior.
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  switch(ev) {
    case LOG_EVENT_PLAYER_ATTACK:
    logEntry.target = 'MONSTER';
    break; // ------------------> aqui é inserido o primeiro break, separa esses 2 casos um do outro.
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry = {
        event: ev,
        value: val,
        target: 'MONSTER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    break;
    case LOG_EVENT_MONSTER_ATTACK:
    logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
     break;
     case LOG_EVENT_PLAYER_HEAL:
     logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
     };
     break;
     case LOG_EVENT_GAME_OVER:
     logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
};
break;     
default:
  logEntry = {};
}
  battleLog.push(logEntry);
}

function printLogHandler() {
  for (let i = 0; i < 3; i++) {     //NOSSA PRIMEIRA UTILIZAÇÃO DE UM FOR LOOP.
    console.log('-------------');     //e se quisessemos o mesmo comportamento desse for loop, mas com um 
    //while loop? -----> ficaria assim: function printLogHanlder () {
  //                                        let j = 0;
  //                                        while (j < 3) {
  //                                        console.log('---------');
  //                                         j++;
  //                                    };
  //                                    }

  }
  /* for(let i = 0; i < battleLog.length; i++) { -----------> versão for loop do código for of loop inserido logo abaixo. Essa versão do for loop daquele código é uma versão que TE MOSTRA O INDEX DA ITERAÇÃO, MAS NÃO TE MOSTRA O ELEMENTO QUE FOI SELECIONADO.
    console.log(battleLog[i]);             
  }
*/
  let i = 0;  //variável criada no lado de fora do for of loop, utilizada para contabilizar o número do index de cada iteração, algo que não é possível de ver apenas pelo funcionamento simples de um for of loop. O for of loop só te permite ver qual elemento foi printado/selecionado, e não o index do elemento que foi rodado/selecionado.
  // for (const logEntry of battleLog){        //exemplo de for of loop. Utiliza a keyword of antes do array que você quer selecionar para ser penetrado.
    // console.log(logEntry);
    // console.log(i); //função que outputta o log daquela variável definida 3 linhas acima; essa variável serve como index da iteração do loop, algo que o for of loop não nos dá por si só.
    // i++; //comando que faz o incremento do número de i por 1 unidade, serve para fazer o número variar e continuar o loop.   
  for(const logEntry of battleLog) {   //----> ver anotações do for of loop.
    if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < i) {
      console.log(`#${i}`); //aqui estamos nos referindo àquela mesma variável i definida logo ali em cima, que mostrará o número do ciclo/iteração. Isso não é mostrado normalmente pela função for loop, por isso que colocamos ela nesse exemplo.
    for (const key in logEntry) {    // for in loop dentro de um for of loop. Ver anotações sobre loops dentro de loops, inner loops e outer loops, relação entre os dois.
      console.log(key);
      console.log(logEntry[key]);
    }
    lastLoggedEntry = i; //usado para atualizar o valor de lastLoggedEntry de acordo com o console.
    break;//uso de break no código para controlar as paradas dos loops manualmente.}
  }
    i++;  //usado para mudar o contador de iterações, para mostrar em qual turno estamos no console.
    
  } 
  
  //console.log(battleLog);
}

function attackMonster(mode) {
  //let maxDamage;   ---> trocamos essa variável meramente declarada para uma versão ALTERNATIVA E MELHOR, A CONST MAXDAMAGE, que é definida (e alterada) por meio do ternary operator. (que é const pq o professor diz que ela não irá variar ao longo do código)
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;  //exemplo clássico de um ternary operator em ação.
                //o logEvent também é alterado, trocada seu status de variável para um status de CONSTANTE.
  //let logEvent;   //adicionamos uma nova variável para que consigamos diferenciar o tipo de ataque que é logado no writeToLog. Essa variável alterará seu valor segurado entre LOG_EVENT_PLAYER_ATTACK E LOG_EVENT_PLAYER_STRONG_ATTACK.
  const logEvent = mode === MODE_ATTACK
   ? LOG_EVENT_PLAYER_ATTACK            //A propósito (btw), também podemos estruturar ternary operators dessa forma aqui, o javascript entende a estrutura normalmente, ele identifica as coisas corretamente por meio da ajuda do ";".
   : LOG_EVENT_PLAYER_STRONG_ATTACK;   //o professor também adiciona um valor à logEvent concordante com aquilo que foi definido ali em cima, no ternary operator.
  //if (mode === MODE_ATTACK) {        --------------> esse bloco inteiro de código é substituído pelo uso do ternary operator (?:), que  inicializa nossa variável já na sua primeira linha (define o valor ATTACK_VALUE, que está condicionado à ocorrência do parâmetro "mode === MODE_ATTACK".
  //  maxDamage = ATTACK_VALUE;
  //  logEvent = LOG_EVENT_PLAYER_ATTACK //aqui nessa hipótese, logEvent será playerAttack.
 // } else {
 //   maxDamage = STRONG_ATTACK_VALUE;
//    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK //Aqui nessa hipótese, LogEvent será log_event_player_strong_Attack.
 // }
//-------------------------------------------------------------->
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage; //AGORA, ESSA FUNÇÃO FOI RESUMIDA LÁ EM CIMA: PODEMOS SIMPLESMENTE COPIÁ-LA ONDE QUEREMOS NO CÓDIGO POR MEIO DO CHAMAMENTO DA FUNÇÃO endRound().
  /*
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');}
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("It's a draw!");
    }*/
    
    
    writeToLog(
      logEvent,   //aqui adicionamos a variável, que alterna entre aqueles valores ali, dependendo da força do ataque, fraco ou strong.
      damage, // aqui mostra o dano dado.
      currentMonsterHealth,
      currentPlayerHealth)
    endRound();
} 

function attackHandler() {
  /*const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');}
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
      */ /*alert("It's a draw!");*/
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  /* const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');}
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("It's a draw!");
    } */
  attackMonster();
}

function healPlayerHandler() {
  let healValue;
  //increasePlayerHealth(HEAL_VALUE); //colocamos a função que chama a cura aqui, mas não deixamos de inputtar a função de tomar dano do ataque do monstro logo embaixo, porque ainda que estejamos nos curando, ainda levamos o dano do turno do cara.
  //currentPlayerHealth += HEAL_VALUE;  //linhas de código substituídas por aquelas lá embaixo, que tratam do valor dinâmico da variável healValue.

  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You cant't heal to more than your max initial health");
    healValue = chosenMaxLife - currentPlayerHealth; //essa linha de código compreende aquelas situações em que o sujeito não tem própriamente 100 de vida, mas sim quase 100, como 90. ex:  healValue = 100 (chosenMaxLife) - 90 (currentPlayerHealth). Isso daria 10, que é aquilo que 90 necessita para virar 100.
  } else {
    //else aqui regula todas as outras situações que não se encaixam na primeira, todas as situações em que o cara não cura para além da vida máxima, todos os casos em que a cura realmente será de 20.
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue); //Aqui professor trocou a constante fixa de 20, HEAL_VALUE, pelo valor dinâmico da variável healValue, definida mais acima nessa mesma função.
  currentPlayerHealth += healValue; //USADO PARA REALMENTE AUMENTAR A VIDA DO PLAYER, E NÃO APENAS AUMENTAR O PROGRESS BAR DO ELEMENTO HTML. MEXE NO VERDADEIRO VALOR DE SEU HP, INSERIDO NA CONSTANTE chosenMaxHealth.
  /*const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage; 
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');}
    else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("It's a draw!");   
    }*/
  //CÓDIGO SIMPLIFICADO PELO CHAMAMENTO DA FUNÇÃO endRound();, que já possui essas linhas de código. Deixamos assim o código mais rápido e referenciável, e evitamos a prática indesejada de copiar e colar código diretamente.
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth)
  endRound();
}

attackBtn.addEventListener('click', attackHandler);

strongAttackBtn.addEventListener('click', strongAttackHandler);

healBtn.addEventListener('click', healPlayerHandler);

logBtn.addEventListener('click', printLogHandler);







 /*for in loop*/
/*//Objeto 
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"*/