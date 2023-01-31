import Header from "../components/Header";
import { projects } from "../data";

const ProjectDetailPage = ({ id }) => {
    // project/:id
    const currentProject = projects.find((project) => project.id == id);
    if (!currentProject) return `Loading...`;
    return `
        ${Header()}
            <h1>${currentProject.name}</h1>
            ${
                currentProject.teams
                    ? `
                         <ul>
                            ${currentProject.teams
                                .map((member) => {
                                    return `<li>${member.name}</li>`;
                                })
                                .join("")}
                        </ul>
                        `
                    : ""
            }
            
        `;
};
export default ProjectDetailPage;
