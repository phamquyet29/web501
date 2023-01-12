import projectsFake from "../data";

const ProjectList = () => {
    return `<div>
    
    ${projectsFake
        .map((item) => {
            return `<div><a href="/project/${item.id}">${item.name}</a></div>`;
        })
        .join("")}
    </div>`;
};

export default ProjectList;
// cài đặt extension reactjs/es7
// rafce
