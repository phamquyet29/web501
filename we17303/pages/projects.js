const ProjectsPage = () => {
    const projects = [
        { id: 1, name: "Dự án 1" },
        { id: 2, name: "Dự án mẫu" },
    ];
    return `<h1>Projects Page</h1>
        ${projects
            .map((item) => {
                return `<div><a href="/project/${item.id}">${item.name}</div>`;
            })
            .join("")}
    `;
};
export default ProjectsPage;
