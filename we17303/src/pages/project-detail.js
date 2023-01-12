import Header from "../components/Header";
import { projectsFake } from "../data";

const ProjectDetailPage = ({ data: { id } }) => {
    // project/:id
    const currentProject = projectsFake.find((project) => project.id == id);
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
