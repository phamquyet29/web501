import { projectsFake } from "../data";

const ProjectList = () => {
    return `
    ${projectsFake
        .map((item) => {
            return `<div><a href="/project/${item.id}">${item.name}</div>`;
        })
        .join("")}
    
    `;
};
export default ProjectList;
