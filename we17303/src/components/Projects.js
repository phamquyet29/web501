const Projects = ({ projects }) => {
    return `<div>
        ${projects.map(({ name }) => `<div>${name}</div>`).join("")}
    </div>`;
};

export default Projects;
