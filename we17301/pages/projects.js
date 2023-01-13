import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectFake } from "../data";

// projectFake = [{}]
const ProjectsPage = () => {
    return `
    ${Header()}
    <div>
       ${ProjectList({ data: projectFake })}
    </div>
    `;
};
export default ProjectsPage;
