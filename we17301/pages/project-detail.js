import Header from "../components/Header";
import { router } from '../lib';
import { projectFake } from "../data";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";

const ProjectDetailPage = ({ data: { id }}) => {
    // find
    const currentProject = projectFake.find(project => project.id == id)
    console.log(currentProject);
    if(!currentProject) return router.navigate('/projects');

    return `
    ${Header()}
    <main>
        ${ProjectGallery({project: currentProject})}
        <div>
            ${ProjectInfo({project: currentProject})}
        </div>
    </main>
    `;
};
export default ProjectDetailPage;
