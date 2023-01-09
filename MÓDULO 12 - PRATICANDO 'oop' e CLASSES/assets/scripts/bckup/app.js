class Tooltip {

}





class ProjectItem {

    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }


    connectMoreInfoButton() {

    }


    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
    }
}





class ProjectList {


    projects = [];
    
    constructor(type) {





        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of projectItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        //console.log(projectItems);
        console.log(this.projects);
    }



    addProject() {

    }           


    switchProject(projectId) {
    const projectIndex = this.projects.findIndex(p => p.id === projectId);
    this.projects.splice(projectIndex, 1);
    }
}





class App {
   static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}




App.init();