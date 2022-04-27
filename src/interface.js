const body = document.querySelector('body');


function title() {
    const top = document.createElement('h1');
    top.classList.add('title');
    top.innerText = 'Do It All: Your To Do List';
    return top;
    };

function projects() {
    const projectArea = document.createElement('div');
    projectArea.setAttribute('id', 'projectarea');
    projectArea.innerText = 'Projects';
    const projects = document.createElement('div');
    projects.setAttribute('projectlist', 'id');
    projectArea.appendChild(projects);
    return projectArea;
};

function tasklist() {
    const taskArea = document.createElement('div');
    taskArea.setAttribute('id', 'taskarea');
    taskArea.innerText = 'Your Tasks';
    const tasks = document.createElement('ul');
    tasks.classList.add('tasks');
    tasks.innerHTML = '<li> Click here to add your task</li>'
    taskArea.appendChild(tasks);
    return taskArea;
};

body.appendChild(title());

const div = document.createElement('div');
div.setAttribute('id', 'main');
body.appendChild(div);
div.appendChild(projects());
div.appendChild(tasklist());

    export default title();