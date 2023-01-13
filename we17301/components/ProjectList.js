
import ProjectItem from "./ProjectItem";
const ProjectList = ({ data }) => {
    return `
    ${data
        .map((project) => `${ProjectItem({ project })}` )
        .join("")}
    `;
};
export default ProjectList;
