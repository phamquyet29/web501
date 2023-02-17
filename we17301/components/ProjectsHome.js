const ProjectsHome = ({ projects }) => {
    return `<div>
        ${projects
            .map(
                (item) => `
            <div>${item.name}</div>
        `
            )
            .join("")}
    </div>`;
};

export default ProjectsHome;
