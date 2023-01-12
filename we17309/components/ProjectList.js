import { projectsFake } from "../data";

const ProjectList = () => {
    return `
        ${projectsFake
            .map((project) => {
                return `<div>${project.name}</div>`;
            })
            .join("")}
    `;
};
export default ProjectList;
