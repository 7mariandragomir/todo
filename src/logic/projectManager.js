export { projectList, addNewProject, removeProject, removeTaskFromProject };
import { project } from "./project";
import { nav } from '../components/nav/nav';
import { updateData } from "./localStorage";

let projectList = [];

if (localStorage.getItem('projectList') !== null) {
    projectList = JSON.parse(localStorage.getItem('projectList'));

    projectList = projectList.map(prj => new project(prj));
    console.log(projectList);
}


function addNewProject() {
    let projectName = prompt('What should the project be called?');
    if ( projectName.trim() === '' || projectName === undefined) {
        projectName = prompt('Project name cannot be empty, please try again:');
    } else if(projectName.length > 14) {
        projectName = prompt('Project name should be shorter, please try again:');
    } else {
        projectList.push(new project({name: projectName}));
        nav.render();
        updateData();
    }
};

function removeProject(projectId) {
        projectList = projectList.filter(project => project.id !== projectId);
        nav.render();
        updateData();
};  

function removeTaskFromProject(taskId) {
    for (const prj of projectList) {
        const taskIndex = prj.taskList.findIndex(task => task.id === taskId)

        if (taskIndex !== -1) {
            console.log(`removed ${prj.taskList[taskIndex].name} from ${prj.name}`);
            prj.taskList.splice(taskIndex, 1);
            break;
        }
    }
}