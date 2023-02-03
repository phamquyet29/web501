// import { projects } from "../../data";
import { router, useEffect } from "../../lib";

const AdminAddProjectsPage = () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newObject = {
                id: projects.length + 1,
                name: projectName.value,
                img: "https://picsum.photos/400/400",
            };
            // thêm vào mảng projects
            projects.push(newObject);
            // lưu vào localStorage dưới dạng chuỗi
            localStorage.setItem("projects", JSON.stringify(projects));
            // chuyển hướng về trang quản lý dự án
            router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminAddProjectsPage;
