const Project = ({ projects }) => {
    return `<div>
        ${projects.map((project) => `<div>${project.name}</div>`).join("")}
    </div>`;
};

export default Project;
