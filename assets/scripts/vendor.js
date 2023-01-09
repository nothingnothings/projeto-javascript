const usrInput = document.getElementById ('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');         //propriedade que faz trocar o negócio na parte do campo de results; o outro é o da parte do texto/string.
const currentCalculationOutput = document.getElementById('current-calculation');   // corrente de código =        1) esses códigos (document.getElementbyId) são lidos e "armazenados" pelo javascript,
                                                                                    // 2) esses códigos são usados logo abaixo, naquela função outputResult. o primeiro código substituí o campo result; o segundo, o campo text.
                                                                                    //3) o código executado pela função, com a ajuda das constantes definidas anteriormente, interage com a página html e substitui os campos.
function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}


//vendor.js é também importado no html, antes de app.js.
//function outputResult: essa função é responsável por escrever em 2 lugares diferentes na webpage. Mas como estamos apenas interessados em outputtar o número do resultado e nada mais, colocamos ('') (empty string) para
//o outro lugar.










