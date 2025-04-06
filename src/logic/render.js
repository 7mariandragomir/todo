export { render };
import { projectList } from "./projectManager";
import { TaskEl } from "../components/TaskEl/TaskEl";
import { Button } from "../components/Button/Button";
import { NewTaskInput } from "../components/NewTaskInput/NewTaskInput";
import { task } from "./task";
import { addTaskToProject } from "./project";
import { updateData } from "./localStorage";

const content = document.getElementById('task-list');
let currentContentOnDisplay = 'all';

class render {
    static project(targetID) {

        clearContent();

        // Render tasks for Project
        this.targetProject = projectList.find(prj => prj.id === targetID);
        currentContentOnDisplay = this.targetProject.name;

        this.targetProject.taskList.forEach(task => {
            new TaskEl(task).render(content);
        });
    }

    static today() {
        clearContent(); 
        // projectList = projectList.filter(project => project.id !== projectId);
        this.masterTaskList = [];

        projectList.forEach(project => {
            project.taskList.forEach(task => {
                this.masterTaskList.push(task);
            })
        })
        
        console.log('mastertasklist', this.masterTaskList);
        this.targetList = this.masterTaskList.filter(task => task.dueDate.getDay() === new Date().getDay());
        console.log('target list', this.targetList)

        this.targetList.forEach(task => {
            new TaskEl(task).render(content);
        })
    }

    static allTasks() {
        clearContent();

        this.masterTaskList = [];

        projectList.forEach(project => {
            project.taskList.forEach(task => {
                this.masterTaskList.push(task);
            })
        })

        this.masterTaskList.forEach(task => {
            new TaskEl(task).render(content);
        })

        currentContentOnDisplay = 'all';
    }

    static reRender(targetPrj) {
        if (targetPrj.name === currentContentOnDisplay) {
            this.project(targetPrj.id);
        } else if (currentContentOnDisplay = 'all') {
            this.allTasks();
        } else console.log('something went wrong.');
    }
}

function clearContent() {
        // Clear the content section
        content.innerHTML = "";

        // Add new task button
        new Button({text: 'Add new task...', onClick: (e) => {
            let btn = e.target;
            
            let NewTask = new NewTaskInput({
                addFunction: () => {
                    let el = document.getElementById('new-task-input');
                    let textVal = el.querySelector('#new-task-text').value;
                    let dueVal = el.querySelector('#new-task-due').value;
                    let projectVal = el.querySelector('#new-task-prj').value;

                    console.log(dueVal);

                    if (textVal.trim() !== ''  && dueVal !== '') {
                        let targetProject = projectList.find(prj => prj.name === projectVal);
                        let createdTask = new task({
                            name: textVal,
                            dueDate: dueVal,
                        })
                        console.log(targetProject);
                        addTaskToProject(targetProject, createdTask);
                        updateData();
                        render.reRender(targetProject);
                    } else {
                        alert('please enter valid values')
                    };
                },
                cancelFunction: () => {
                    btn.style.display = 'block';
                    document.getElementById('new-task-input').remove();
                }
            });
                        
            content.insertBefore(NewTask.returnElement(), btn)
            btn.style.display = 'none';

        }}).render(content);
}