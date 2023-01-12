const ProjectList = () => {
    const projects = [
        { id: 1, name: "Dự án 1" },
        { id: 2, name: "Dự án mẫu" },
    ];
    return `
    ${projects
        .map((item) => {
            return `<div><a href="/project/${item.id}">${item.name}</div>`;
        })
        .join("")}
    
    `;
};
export default ProjectList;
