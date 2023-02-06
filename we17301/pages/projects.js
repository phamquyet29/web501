import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { useState } from "../lib";
// import { projects } from "../data";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    return `
    ${Header()}
    <div>
        ${ProjectList({ projects })}
    </div>
    `;
};
export default ProjectsPage;
// <div>Dự án mẫu</div><div>Dự án tốt nghiệp</div>
