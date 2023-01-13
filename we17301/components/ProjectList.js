const ProjectList = ({ data }) => {
    return `
    ${data
        .map((project) => {
            return `<div>${project.name}</div>`;
        })
        .join("")}
    
    `;
};
export default ProjectList;
