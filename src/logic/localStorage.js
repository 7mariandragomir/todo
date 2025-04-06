export { updateData };
import { projectList } from "./projectManager";

function updateData() {
    let projectList_JSON = JSON.stringify(projectList);
    localStorage.setItem('projectList', projectList_JSON);
}