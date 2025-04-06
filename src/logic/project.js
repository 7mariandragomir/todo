export { project, addTaskToProject };
import { task } from "./task";

class project {
    constructor({name, taskList = [], id = crypto.randomUUID()}) {
        this.name = name;
        this.taskList = taskList.map(taskData => new task(taskData));
        this.id = id;
    }

    removeTask(taskId) {
        this.taskList = this.taskList.filter(task => task.id !== taskId);
    }
}

function addTaskToProject(project, task) {
    project.taskList.push(task);
}