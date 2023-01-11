import Header from "../components/Header";
import { projects } from "../data";

const ProjectsPage = () => {
    return `
    ${Header()}
    <h1>Projects Page</h1>
    <div class="projects">
        ${projects
            .map((project) => {
                return `<div class="project-item">
                        <a href="/project/${project.id}">${project.name}</a></div>`;
            })
            .join("")}
    </div>
    
    `;
};
export default ProjectsPage;
