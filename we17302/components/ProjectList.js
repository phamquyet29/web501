import projectsFake from "../data";

const ProjectList = () => {
    return `<div>
    
    ${projectsFake
        .map((project) => {
            return `<div><a href="/project/${project.id}">${project.name}</a></div>`;
        })
        .join("")}
    </div>`;
};

export default ProjectList;
// cài đặt extension reactjs/es7
// rafce
