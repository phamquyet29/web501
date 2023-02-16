import instance from "./config";

const getProjects = () => {
    return instance.get("/projects");
};
const getProject = (id) => {
    return instance.get(`/projects/${id}`);
};
const addProject = (project) => {
    return instance.post("/projects", project);
};
const deleteProject = (id) => {
    return instance.delete(`/projects/${id}`);
};
const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`, project);
};

const getAllCategories = () => {
    return instance.get("/categoryProjects");
};
const getCategory = (id) => {
    return instance.get(`/categoryProjects/${id}?_embed=projects`);
};

export {
    getProjects,
    getProject,
    addProject,
    deleteProject,
    updateProject,
    getAllCategories,
    getCategory,
};
