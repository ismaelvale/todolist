import Task from "./tasks";
import TaskList from "./tasklist";

function functionality() {
    window.addEventListener('load', () => {
        window.taskList = TaskList.fromObject(JSON.parse(localStorage.getItem('taskList'))) || new TaskList();

        const nameInput = document.getElementById('name');
        const newTodoForm = document.querySelector('#new-todo-form');

        const username = localStorage.getItem('username') || '';

        nameInput.value = username;

        nameInput.addEventListener('change', e => {
            localStorage.setItem('username', e.target.value);
        })

        newTodoForm.addEventListener('submit', e => {
            e.preventDefault();
            const task = new Task(
                e.target.elements.content.value,
                e.target.elements.category.value,
                false,
                new Date().getTime()
            )

            taskList.add(task);
            localStorage.setItem('taskList',JSON.stringify(taskList));
            e.target.reset();
            displayTodos();
        })

        displayTodos();
    });
    
    function displayTodos() {
        const todoList = document.querySelector('.todo-list');
        todoList.innerHTML = '';
 
        taskList.tasks.forEach(task => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const label = document.createElement('label');
            const input = document.createElement('input');
            const span = document.createElement('span');
            const content = document.createElement('div');
            content.classList.add('todo-content');
            const actions = document.createElement('div');
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            input.type = 'checkbox';
            input.checked = task.done;
            span.classList.add('bubble');

            if(task.category == 'personal') {
                span.classList.add('personal')
            } else {
                span.classList.add('business')
            };

            content.classList.add('todo-content');  
            actions.classList.add('actions');
            editBtn.classList.add('edit');
            deleteBtn.classList.add('delete');

            content.innerHTML = `<input type="text" value= ${task.content} readonly/>`
            editBtn.innerHTML = 'Edit';
            deleteBtn.innerHTML = 'Delete';

            label.appendChild(input);
            label.appendChild(span);
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);

            todoItem.appendChild(label);
            todoItem.appendChild(content);
            todoItem.appendChild(actions);

            todoList.appendChild(todoItem);
        });
    }
};

export default functionality();
    