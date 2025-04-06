export { NewTaskInput };
import './NewTaskInput.css';
import { Button } from "../Button/Button";
import { projectList } from '../../logic/projectManager';

class NewTaskInput {
    constructor({addFunction, cancelFunction}) {
        this.el = document.createElement('div');
        this.el.classList.add('new-task');
        this.el.setAttribute('id', 'new-task-input');

        this.text = document.createElement('input');
        this.text.setAttribute('type', 'text');
        this.text.setAttribute('name', 'text');
        this.text.setAttribute('id', 'new-task-text');

        this.due = document.createElement('input');
        this.due.setAttribute('type', 'date');
        this.due.setAttribute('name', 'due');
        this.due.setAttribute('id', 'new-task-due');

        this.project = document.createElement('select');
        this.project.setAttribute('id', 'new-task-prj');
        projectList.forEach(project => {
            this.opt = document.createElement('option');
            this.opt.innerHTML = project.name;
            this.project.appendChild(this.opt);
        })
        
        this.el.appendChild(this.text);
        this.el.appendChild(this.due);
        this.el.appendChild(this.project);

                new Button({
                    text: 'Add',
                    onClick: addFunction
                }).render(this.el);
                
                new Button({
                    text: 'cancel',
                    onClick: cancelFunction
                }).render(this.el);
    }

    returnElement() {
        return this.el
    }
}


{/* <div class="new-task">
<input type="text" name="text" id="new-task-text">
<input type="date" name="due" id="new-task-due">
<button>Add</button>
<button>Cancel</button>
</div> */}