import Header from "../components/Header";
import { projectsFake } from "../data";

const ProjectDetailPage = (id) => {
    const currentProject = projectsFake.find((project) => project.id == id);
    if (!currentProject) return "";

    return `
        ${Header()}
            <h1>${currentProject.name}</h1>
        `;
};
export default ProjectDetailPage;
