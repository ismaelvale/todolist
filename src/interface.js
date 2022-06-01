import Task from "./tasks";
import TaskList from "./tasklist";
import Projects from "./projects";

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
                e.target.elements.date.value,
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
        const personalList = document.createElement('div');
        const businessList = document.createElement('div');
        const otherList = document.createElement('div');
        personalList.classList.add('personal-list');
        businessList.classList.add('business-list');
        otherList.classList.add('other-list');
        personalList.innerHTML = '<h3>Personal Tasks</h3>';
        businessList.innerHTML = '<h3>Business Tasks</h3>';
        otherList.innerHTML = '<h3>Other Tasks</h3>';
 
        taskList.tasks.forEach(task => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            const label = document.createElement('label');
            const input = document.createElement('input');
            const span = document.createElement('span');
            const content = document.createElement('div');
            content.classList.add('todo-content');
            const date = document.createElement('span');
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

            content.innerHTML = `<input type="text" value= '${task.content}' readonly/>`
            date.textContent = task.date;
            editBtn.innerHTML = 'Edit';
            deleteBtn.innerHTML = 'Delete';

            label.appendChild(input);
            label.appendChild(span);
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);

            todoItem.appendChild(label);
            todoItem.appendChild(content);
            todoItem.appendChild(actions);

            todoList.appendChild(personalList);
            todoList.appendChild(businessList);
            todoList.appendChild(otherList);
            content.appendChild(date);

            if(task.category == 'personal') {
                personalList.appendChild(todoItem);
            } else if(task.category == 'business') {
                businessList.appendChild(todoItem);
            } else {
                otherList.appendChild(todoItem);
            };

            if (task.done) {
                todoItem.classList.add('done');
            };

            input.addEventListener('click', e => {
                task.done = e.target.checked;
                localStorage.setItem('taskList',JSON.stringify(taskList));

                if (task.done) {
                    todoItem.classList.add('done');
                } else {
                    todoItem.classList.remove('done');
                };
                displayTodos();
            });

            editBtn.addEventListener('click', e => {
                const input = content.querySelector('input');
                input.removeAttribute('readonly');
                input.focus();
                input.addEventListener('blur', e => {
                    input.setAttribute('readonly', 'true');
                    task.content = e.target.value;
                    localStorage.setItem('taskList',JSON.stringify(taskList));
                    displayTodos();
                })
            });

            deleteBtn.addEventListener('click', e => {
                taskList.delete(task.id);
                localStorage.setItem('taskList',JSON.stringify(taskList));
                displayTodos();
            });
        });
    }
};

export default functionality();
    