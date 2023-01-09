



import {ProjectList} from '../App/ProjectList.js';



















class App {
    static init() {
         const activeProjectsList = new ProjectList('active');
         const finishedProjectsList = new ProjectList('finished');
         activeProjectsList.setSwitchHandlerFunction(
             finishedProjectsList.addProject.bind(finishedProjectsList)
         ); 
         finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(
             activeProjectsList)
             ); 
             /*const someScript = document.createElement('script');
             someScript.textContent = 'alert("Hi there!")';
             document.head.append(someScript);*/ //----> ISSO NOS MOSTRA COMO CRIAR/EXECUTAR OUTRO ARQUIVO DE JAVASCRIPT DE DENTRO DE UM ARQUIVO .JS ......
 
             //this.startAnalytics();
             //document.getElementById('start-analytics-btn').addEventListener('click', this.startAnalytics);  /////EXEMPLO DE CARREGAMENTO DINAMICO DE SCRIPTS (outros scripts, distinto do 'primário', como analytics...) POR MEIO DE CÓDIGO JAVASCRIPT....
 
             //setTimeout(this.startAnalytics, 3000); /////FUNÇÃO QUE DEFINE UM TIMER. AQUI, É UM TIMER DE 3 SEGUNDOS, ASSIM QUE 3 SEGUNDOS TENHAM TRANSCORRIDO, A FUNÇÃO ELENCADA NO PRIMEIRO PARÂMETRO É EXECUTADA.
                                                     //ex: setTimeout(this.startAnalytics, 3000, [arg1, arg2, arg3]);  //3º argumento, array de argumentos para a função do primeiro argumento, É OPCIONAL.
 
                                                     
             /*const timerId = setTimeout(this.startAnalytics, 3000); ///-----> ARMAZENAMOS O TIMER EM UM ID, AQUI, PARA QUE POSSA SER UTILIZADO NO BOTÃO QUE SERÁ DEFINIDO LOGO ABAIXO, BOTÃO QUE INTERROMPE O TIMER que adiciona o 'analytics.js' automaticamente ao nosso código....
 
 
             document.getElementById('stop-analytics-btn').addEventListener('click', () => {
                 clearTimeout(timerId); //////IMPORTANTE ====== SEGUNDO PARÂMETRO do eventListener REALMENTE DEVE SER UMA FUNÇÃO ANÔNIMA COM O código do método de parar o timer, se não o TIMER NEM MESMO FUNCIONA, quanto menos o botão de pará-lo....
             });  */
 
     }
 
     /*static startAnalytics() { /////EXEMPLO DE COMO CRIAR E ADICIONAR/EXECUTAR OUTRO ARQUIVO JAVASCRIPT/SCRIPT DE DENTRO DE UM CÓDIGO JAVASCRIPT...
 
 
         const analyticsScript = document.createElement('script'); 
         analyticsScript.src = 'assets/scripts/analytics.js';
         analyticsScript.defer = true;
         document.head.append(analyticsScript);
     }
 
 */
 
 
 }
 
 
 
 
 App.init();
 
 
 
 
 
 
 /*A callback is a function passed as an argument to another function.
 
 Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:
 
 Example
 function myDisplayer(some) {
   document.getElementById("demo").innerHTML = some;
 }
 
 function myCalculator(num1, num2, myCallback) {
   let sum = num1 + num2;
   myCallback(sum);
 }
 
 myCalculator(5, 5, myDisplayer);
 
 */
 
 
 
 
 
 /* When to Use a Callback?
 The examples above are not very exciting.
 
 They are simplified to teach you the callback syntax.
 
 Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
 
 Asynchronous functions are covered in the next chapter.
 
 */