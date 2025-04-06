export { updateData, storedProjectList };
import { projectList } from "./projectManager";
import { project } from "./project";


function updateData() {
    let projectList_JSON = JSON.stringify(projectList);
    localStorage.setItem('projectList', projectList_JSON);
}

    let rawData = JSON.parse(localStorage.getItem('projectList'));
    let storedProjectList = rawData.map(prj => new project(prj));


