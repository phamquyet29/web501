import Header from "../components/Header";
import { projects } from "../data";

const ProjectsPage = () => {
    return `
    ${Header()}
    <h1>Projects Page</h1>
    <div class="projects">
        ${projects.map((project) => {
            return `<div class="project-item">${project.name}</div>`;
        })}
        <div>item 1</div>
        <div>item 2</div>
    </div>
    
    `;
};
export default ProjectsPage;
