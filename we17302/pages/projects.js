const ProjectsPage = () => {
    const projectList = [
        { id: 1, name: "Dự án 1" },
        { id: 2, name: "Dự án 2" },
    ];

    return `<h1>Projects Page</h1>
        ${projectList
            .map((item) => {
                return `<div><a href="/project/${item.id}">${item.name}</a></div>`;
            })
            .join("")}
    
    `;
};

export default ProjectsPage;
