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




    constructor(closeNotifierFunction) {
        super();
        //super('active-projects, true); EXEMPLO DA FLEXIBILIDADE DA CLASSE GENÉRICA 'component' ----> por flexibilidade, queremos expressar o caráter de reutilização dessa classe, que pode ser utilizada para posicionar elementos diversos em distintas partes da página (dentro-em cima de um container, embaixo-fora, etc etc, tudo por meio da ternary expression e do parâmetro passado ao super/constructor da classe base 'Component'...)
        this.closeNotifier = closeNotifierFunction;
        this.create();

    }

    closeTooltip = () => {      ////DE NOVO, QUEREMOS O COMPORTAMENTO LEGAL DE 'this' dessa 'method fields synthax', proporcionada pelo efeito das arrow functions.
        this.detach();
        this.closeNotifier();
    }


    

    create() {

        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY!';
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
    }
}










class ProjectItem {




    hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }


   


    showMoreInfoHandler() { 
        if (this.hasActiveTooltip) {
            return;
        }

        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        }); //Rápida anonymous function que será usada como parâmetro do constructor de 'Tooltip'... 
        tooltip.attach();
        this.hasActiveTooltip = true;
    }









    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
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
    }



    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
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
    }
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