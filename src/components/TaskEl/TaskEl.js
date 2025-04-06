export { TaskEl };
import './TaskEl.css';
import { Button } from '../Button/Button';
import { removeTaskFromProject } from '../../logic/projectManager';

class TaskEl {
    constructor(task) {
        // build element
        this.el = document.createElement('div');
        this.el.classList.add('task');

        this.checkBox = document.createElement('input');
        this.checkBox.setAttribute('type', 'checkbox');
        this.checkBox.setAttribute('id', 'mark-completed');
        this.checkBox.setAttribute('name', 'mark-completed');

        this.taskText = document.createElement('h3');
        this.taskText.classList.add('task-name');
        this.taskText.innerHTML = task.name; 

        this.dueDate = document.createElement('input');
        this.dueDate.classList.add('task-due');
        this.dueDate.setAttribute('type', 'date');
        // this.dueDate.value = task.dueDate.toISOString().split('T')[0];
        this.dueDate.value = new Date(task.dueDate).toISOString().split('T')[0]

        
        this.el.appendChild(this.checkBox);
        this.el.appendChild(this.taskText);
        this.el.appendChild(this.dueDate);
        
        new Button({
            text: 'X',
            onClick: () => {
                removeTaskFromProject(task.id);
            }
        }).render(this.el);

        // setup eventListeners

        this.checkBox.addEventListener('click', () => {
            task.changeCompleted();
        })

        this.dueDate.addEventListener('change', () => {
            task.changeDueDate( new Date(this.dueDate.value));
        })

        this.taskText.addEventListener('dblclick', () => {
            this.newText = prompt('Change task:');

            if (this.newText === null) {
                console.log('cancelled');
            } else if (this.newText.trim() === '') {
                this.newText = prompt('Change task:');
            } else {
                this.taskText.innerHTML = this.newText;
                task.changeName(this.newText);   
            }
        })

    }

    render(parent = document.body) {
        parent.appendChild(this.el);
    }
}