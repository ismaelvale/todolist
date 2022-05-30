import Task from "./tasks";

export default class TaskList {
    tasks = []
    static fromObject(obj) {
        const taskList = Object.assign(new TaskList, obj);
        taskList.tasks = taskList.tasks.map(Task.fromObject);
        return taskList;
      }
    constructor(){}
    add(task){
        this.tasks.push(task);
    }
    delete(id){
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}