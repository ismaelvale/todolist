import { v4 as uuidv4 } from 'uuid';
export default class Projects {
    projects = [];
    constructor(title) {
        this.title = title;
        this.tasks = {};
        this.id = uuidv4();
    }

    add(project){
        this.projects.push(project);
    }
    
    delete(id){
        this.projects = this.projects.filter(project => project.id != id)
    }
}


/*function addProject() {
    const projectList = document.getElementById('projectlist');
    projectList.addEventListener('click', (e) => {
        const newProject = prompt('What is your project name?');
        const listItem = document.createElement('li');
        listItem.innerText = newProject;
        listItem.classList.add('projects');
        projectList.appendChild(listItem);
    });
}

export default addProject();*/