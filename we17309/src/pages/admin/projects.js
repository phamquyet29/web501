import { projects } from "../../data";

const ProjectsPage = () => {
    return `<div>
        <h1>Quản lý dự án</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            ${projects
                .map(
                    (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>
                        <button class="btn btn-danger">Remove</button>
                    </td>
                </tr>
            `
                )
                .join("")}
            
        </tbody>
    </div>`;
};

export default ProjectsPage;
