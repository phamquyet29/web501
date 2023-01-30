import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";

const ProjectsPage = () => {
    return `
    ${Header()}
    <div>
        ${ProjectList({ projects })}
    </div>
    `;
};
export default ProjectsPage;
// <div>Dự án mẫu</div><div>Dự án tốt nghiệp</div>
