import { router, useEffect } from "../../lib";

const AdminEditProjectsPage = ({ id }) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const currentProject = projects.find((project) => project.id == id);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newObject = {
                id: currentProject.id,
                name: projectName.value,
                img: "https://picsum.photos/400/400",
            };
            // cập nhật vào mảng projects
            const newProjects = projects.map((project) => {
                return project.id == newObject.id ? newObject : project;
            });

            // lưu vào localStorage dưới dạng chuỗi
            localStorage.setItem("projects", JSON.stringify(newProjects));
            // chuyển hướng về trang quản lý dự án
            router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${currentProject.name}" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminEditProjectsPage;
