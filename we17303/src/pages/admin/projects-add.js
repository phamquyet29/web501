import { projects } from "../../data";
import { useEffect, router } from "../../lib";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Tạo proejct mới
            const project = {
                id: projects.length + 1,
                name: projectName.value,
                author: projectAuthor.value,
            };
            // thêm dự án vào mảng projects
            projects.push(project);

            // chuyển trang về trang quản lý dự án
            router.navigate("/admin/projects");
        });
    });
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Ten Dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class="form-control" id="project-author" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;
