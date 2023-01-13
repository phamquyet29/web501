import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectFake } from "../data";

const ProjectsPage = () => {
    return `
    ${Header()}
    <div>
        ${ProjectList({ data: projectFake})}
    </div>
    `;
};
export default ProjectsPage;
// <div>Dự án mẫu</div><div>Dự án tốt nghiệp</div>
