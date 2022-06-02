import { result } from "lodash";
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
    categories(){
        const categoryArray = Object.values(this.tasks.reduce((tasks, {category, ...props}) => {
            if(!tasks[category]) {
                tasks[category] = Object.assign({}, {category,data : [props]});
            } else {
                tasks[category].data.push(props);
            }
            return tasks;
        },{} ));
        console.log(categoryArray);
    }
}