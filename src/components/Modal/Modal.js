
class Modal {
    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add('modal');

        // Header
        this.header = document.createElement('h2');
        this.header.innerHTML = "Add A New Task";

        // Form

        this.form = document.createElement('form');

        // Task Name
        this.taskNameDiv = document.createElement('div');
        this.taskNameDiv.classList.add('form-item');
        this.taskNameLabel = document.createElement('label');
        this.taskNameLabel.setAttribute('for', 'input-task');
        this.taskNameLabel.innerHTML = "Task:";
        this.taskNameInput = document.createElement('input');
        this.taskNameInput.setAttribute('required');
        this.taskNameInput.setAttribute('type', 'textarea');
        this.taskNameInput.setAttribute('name', 'task');
        this.taskNameInput.setAttribute('id', 'input-task');

        this.taskNameDiv.appendChild(this.taskNameLabel);
        this.taskNameDiv.appendChild(this.taskNameInput);

        // Task Due

        this.dueDiv = document.createElement('div');
        this.dueDiv.classList.add('form-item');
        this.dueDiv
    }
}

{/* <dialog class="modal" id="modal">
<h2>add a new task</h1>
<form>
    <div class="form-item">
        <label for="input-task">Task</label>
        <input required type="textarea" name="task" id="input-task">
    </div>
    <div class="form-item">
        <label for="input-due">Due Date</label>
        <input required type="date" name="due" id="input-due">
    </div>
    <div class="form-item">
        <label for="input-project">Project</label>
        <select name="projects" id="select-project"></select>
    </div>
    <div class="buttons" id="btn-container">
        <button class="btn" id="new-task-add">Add</button>
        <button class="btn" id="new-task-cancel">Cancel</button>
    </div>
</form>
</dialog> */}