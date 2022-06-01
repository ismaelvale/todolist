import { v4 as uuidv4 } from 'uuid';

export default class Task {
    content; 
    date;
    category; 
    done;
    createdAt;
    id;
    constructor(content, date, category, done, createdAt) {
        this.content = content;
        this.date = date;
        this.category = category;
        this.done = done;
        this.createdAt = createdAt;
        this.id = uuidv4();
    }
    static fromObject(obj) {
        return Object.assign(new Task, obj);
      }
}

/*function addTask() {
    const task = {
        title,
        description,
        dueDate,
        priority
    }
    const taskList = document.getElementById('tasklist');
    taskList.addEventListener('click', (e) => {
        const newTask = prompt('What is your task?');
        const listItem = document.createElement('li');
        listItem.innerText = newTask;
        listItem.classList.add('tasks');
        taskList.appendChild(listItem);
    });
}*/
