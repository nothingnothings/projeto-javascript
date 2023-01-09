class Component {

    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }






    
    attach() {
        //console.log('The tooltip...');


       
        //document.body.append(tooltipElement);
       // document.body.append(this.element); ////CÓDIGO MENOS FLEXÍVEL do que a versão inferior (que nos permite inserir tooltips/elementos em qualquer lugar do código...)


       this.hostElement.insertAdjacentElement(  ////////MÉTODO 'insertAdjacentElement' EXIGE 2 PARâMETROS: 1) posição em que será inserido o elemento... (que, nesse caso, é transmitida por uma ternary expression...). 2) ELEMENTO QUE SERÁ INSERIDO NAQUELE LOCAL....
           this.insertBefore ? 'beforebegin' : 'beforeend', 
           //this.insertBefore ? 'afterbegin' : 'beforeend',
       this.element);


    }


    




    detach() {   /////FIELD METHODS SYNTHAX. Faz com que um método seja adicionado por meio de uma arrow function. Vantagem: O COMPORTAMENTO DE 'this' é exatamente como queremos, ele se refere ao 'Tooltip', pois as arrow functions nem ao menos conhecem 'this', portanto os definem como sendo o rootElement... DESVANTAGEM: maior gasto de memória/pior performance --> o método 'dettach' é recriado cada vez que criamos um novo tooltip.
        

    //this.element.remove(); //versão que não funciona em browsers mais antigos

    this.element.parentElement.removeChild(this.element);////versão que funciona em browsers mais antigos.
    }




}












class Tooltip extends Component {




    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId);
        //super('active-projects, true); EXEMPLO DA FLEXIBILIDADE DA CLASSE GENÉRICA 'component' ----> por flexibilidade, queremos expressar o caráter de reutilização dessa classe, que pode ser utilizada para posicionar elementos diversos em distintas partes da página (dentro-em cima de um container, embaixo-fora, etc etc, tudo por meio da ternary expression e do parâmetro passado ao super/constructor da classe base 'Component'...)
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();

    }

    closeTooltip = () => {      ////DE NOVO, QUEREMOS O COMPORTAMENTO LEGAL DE 'this' dessa 'method fields synthax', proporcionada pelo efeito das arrow functions.
        this.detach();
        this.closeNotifier();
    }


    

    create() {

        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        const tooltipTemplate = document.getElementById('tooltip');
        //tooltipElement.textContent = 'DUMMY!';/// Código antigo, com o DUMMY. Foi substituído pela versão que utiliza 'EXTRA-DATA-INFO' (datasets, estudo dos datasets...), e com 'text', que é o parâmetro repassado ao constructor da classe Tooltip...
        tooltipElement.textContent = this.text;
        console.log(this.hostElement.getBoundingClientRect());

        /*tooltipElement.innerHTML = `
        <h2>More Info</h2>
        <p>${this.text}</p>
        `;*/



        const hostElPosLeft = this.hostElement.offsetLeft;
        const hostElPosTop = this.hostElement.offsetTop;
        const hostElHeight = this.hostElement.clientHeight;  //NÃO LEVA EM CONTA OS SCROLLBARS E BORDERS...
        const parentElementScrolling = this.hostElement.parentElement.scrollTop;


        const x = hostElPosLeft + 20;

        const y = hostElPosTop + hostElHeight - parentElementScrolling - 10; 

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = x + 'px'; ////// "+ 'px'" REALMENTE É NECESSÁRIO.... SEM ELE, ESSA ALTERAÇÃO DE ESTILO CSS NÃO FUNCIONA.
        tooltipElement.style.top = y +'px';
        //tooltipElement.addEventListener('click', this.dettach);
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;  


}




}



class DOMHelper {
    
    
    
    
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
    
    
    
    
    static moveElement(elementId, newDestinationSelector) {


        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
        element.scrollIntoView({behavior: 'smooth'});
    }
}










class ProjectItem {




    hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type) {
       
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
        this.connectDrag();
    }


   


    showMoreInfoHandler() { 
        if (this.hasActiveTooltip) {
            return;
        }
        const projectElement = document.getElementById(this.id); ///EIS O CÓDIGO EM QUESTÃO.
        console.log(projectElement.dataset);
        const tooltipText = projectElement.dataset.extraInfo;
        const tooltip = new Tooltip(() => {  //Rápida anonymous function que será usada como parâmetro do constructor de 'Tooltip'... 
            this.hasActiveTooltip = false;
        }, tooltipText,
        this.id   
        ); 
        tooltip.attach();
        this.hasActiveTooltip = true;
    }




    connectDrag() {
        const item = document.getElementById(this.id);
        item.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', this.id);
            event.dataTransfer.effectAllowed = 'move';
        })
        item.addEventListener('dragend', event => {
            console.log(event);
        })
    }

 

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
    }







    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }


update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);  //////CHAMARÁ a função 'connectSwitchButton' dnv, mas dessa vez COM UMA PROPRIEDADE/FUNÇÃO updateProjectListsHandler DIFERENTE SENDO PASSADA COMO PARÂMETRO...(pois alteramos essa propriedade por meio da linha de código logo acima, 'this.updateProjectListsHandler = updateProjectListsFn'.)
}
}


class ProjectList {


    projects = [];
    
    constructor(type) {




        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
        }
        //console.log(projectItems);
        console.log(this.projects);
        this.connectDroppable();
    }



    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    connectDroppable() {
        const list = document.querySelector(`#${this.type}-projects ul`);

        list.addEventListener('dragenter', event => {  ///////O EVENTO 'DRAGENTER' é opcional...
        if(event.dataTransfer.types[0] === 'text/plain') {
            list.parentElement.classList.add('droppable');
            event.preventDefault(); ////PREVENTDEFAULT AQUI É OPCIONAL, ao contrário do 'preventDefault' em DRAGOVER, que ___não é opcional___. AINDA ASSIM, colocamos ele aqui, só para garantir.
        }
        
        });
    






        list.addEventListener('dragover', event => {     ////////O EVENTO 'DRAGOVER', PARA A DEFINIÇÃO DE 'DROPZONES' DE INTERAÇÕES DRAG AND CLICK, ___NÃO É OPCIONAL___; NÃO É OPCIONAL COMO O 'dragenter'...
        if(event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
    }
        });

        list.addEventListener('dragleave', event => {
            if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
            list.parentElement.classList.remove('droppable');
            }}
        );


        list.addEventListener('drop', event => {
            const prjId = event.dataTransfer.getData('text/plain'); 
            if(this.projects.find(p => p.id === prjId)) { ///////HIPÓTESE EM QUE O USUÁRIO SOLTA O PROJECTITEM na mesma lista de onde o tirou...
                list.parentElement.classList.remove('droppable');
                return;
            }
            document.getElementById(prjId)
                .querySelector('button:last-of-type')
                .click(); //////ESSE CÓDIGO DE 'CLICK()' VAI FAZER COM QUE A LÓGICA DE TRANSPORTE DE PROJECTITEMS POR ENTRE AS LISTAS SEJA ___rEUTILIZADO___ (pq é como se tivéssemos simulado um 'click' no botão switch/activate do projectItem selecionado com esse seletor....).
            list.parentElement.classList.remove('droppable');
            event.preventDefault(); //optional, not really required.
        })
        
        }




    addProject(project) {
        //console.log(this);


        this.projects.push(project); //////faz com que o projeto '''verdadeiro''', oculto e nos bastidores, seja adicionado à essa outra lista...
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`); ////////faz com que o DOM NODE, o elemento '''aparente e falso'''', reflita as mudanças que ocorreram nos bastidores do javascript...
        project.update(this.switchProject.bind(this), this.type); ///////FUNÇÃO ''IRMÃ'' DA VERSÃO VISTA NA PARTE QUE CRIA O PROJECTITEM, ou seja, naquele for of loop que contém o 'switchHandler' de 'this.switchProject.bind(this))'...
    }           


    switchProject(projectId) {
    //const projectIndex = this.projects.findIndex(p => p.id === projectId);
    this.switchHandler(this.projects.find(p => p.id === projectId));   ///EXEMPLO DE CALLBACK FUNCTION.
    this.projects = this.projects.filter(p => p.id !== projectId);
    //this.projects.splice(projectIndex, 1);
    }

}




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