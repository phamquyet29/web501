import Header from "../components/Header";
import { projectsFake } from "../data";

const ProjectDetailPage = () => {
    const currentProject = projectsFake.find((project) => project.id == 2);
    if (!currentProject) return `Loading...`;
    return `
        ${Header()}
        <h1>${currentProject.name}</h1>
        
        `;
};
export default ProjectDetailPage;
