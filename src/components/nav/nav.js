export { nav };
import './nav.css';
import { Button } from "../Button/Button";
import { NavItem } from "./NavItem/NavItem";
import { projectList, addNewProject, removeProject } from "../../logic/projectManager";
import { render } from '../../logic/render';

let navElement = document.getElementById('nav');

class nav {
    static render() {
        navElement.innerHTML = '';
        new NavItem({
            text: 'Home',
            borderOn: true
        }).render(navElement);

        new Button({
            text: 'All tasks',
            onClick: () => {render.allTasks()}
        }).render(navElement);

        new Button({
            text: 'today',
            onClick: () => {render.today()}
        }).render(navElement);

        new NavItem({
            text: 'projects',
            borderOn: true,
            iconOn: true,
            icon: '+',
            iconOnClick: () => {addNewProject()}
        }).render(navElement);


        projectList.forEach((project) => {
            new NavItem({
                text: project.name,
                borderOn: false,
                iconOn: true,
                icon: 'X',
                onClick: () => {render.project(project.id)},
                iconOnClick: (e) => {
                    e.stopPropagation();
                    removeProject(project.id); }
            }).render(navElement);
        });
    }
}