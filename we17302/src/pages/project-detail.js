import projectsFake from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
    // find
    const currentProject = projectsFake.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    // project/:id
    // new URL().searchParams.get('id')
    return `<h1>Project Detail Page</h1>
        ${currentProject.name}
    `;
};

export default ProjectDetailPage;
