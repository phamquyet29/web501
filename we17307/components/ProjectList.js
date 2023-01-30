const ProjectList = ({ projects }) => {
    return `
    ${projects
        .map(
            (project) => `<div class="project-item">
                    <a href="/project/${project.id}">${project.name}</a></div>`
        )
        .join("")}
    `;
};
export default ProjectList;
