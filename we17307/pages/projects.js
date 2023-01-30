import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";
const ProjectsPage = () => {
    return `
        ${Header()}
        <h1>Projects Page</h1>
        <div class="projects">
            <aside>Lọc theo: </aside>
            ${ProjectList({ projects })}
        </div>
    `;
};
export default ProjectsPage;
