import projectsFake from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
    // find
    const currentProject = projectsFake.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    return `<h1>Project Detail Page</h1>
        ${currentProject.name}
        <hr />
        <h2>Teams</h2>
        ${
            currentProject.teams
                ? `
                    <ul>
                        ${currentProject.teams
                            .map((member) => {
                                return `<li>${member.name}</li>`;
                            })
                            .join("")}
                        
                    <ul>
                    `
                : "Không có"
        }
        
    `;
};

export default ProjectDetailPage;
