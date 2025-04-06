export { task };

class task {
    constructor({name, dueDate}) {
        this.name = name;
        this.dueDate = new Date(dueDate.split('T')[0]);
        this.id = crypto.randomUUID();
        this.completed = false;
    }

    changeName(newName) {
        this.name = newName;
    };
    
     changeDescription ( newDesc) {
        this.description = newDesc;
    };
    
     changeDueDate ( newDueDate) {
        this.dueDate = newDueDate;
    };
    
     changeCompleted() {
        this.completed = !this.completed;
    };
};

