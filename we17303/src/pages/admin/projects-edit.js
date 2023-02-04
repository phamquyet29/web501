import { useEffect, router } from "@/lib";

const AdminProjectEditPage = ({ id }) => {
    const projects = JSON.parse(localStorage.getItem("projects") || []);

    const currentProject = projects.find((project) => project.id == id);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name");
        const projectAuthor = document.getElementById("project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const newProject = {
                id: currentProject.id,
                name: projectName.value,
                author: projectAuthor.value,
            };
            /**
             * [{id: 1, name: A}]
             *
             * {id: 1, name: A update}
             *
             * [{id: 1, name: A update}}]
             */

            const newProjects = projects.map((project) => {
                return project.id == newProject.id ? newProject : project;
            });

            localStorage.setItem("projects", JSON.stringify(newProjects));

            router.navigate("/admin/projects");
        });
    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Ten Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Tác giả</label>
                    <input type="text" class="form-control" id="project-author" value="${currentProject.author}" />
                </div>
                <button class="btn btn-primary">Thêm dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;
