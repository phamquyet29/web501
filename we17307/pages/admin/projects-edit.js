import { useEffect, router } from "../../lib";
// import { projects } from "../../data";

const AdminEditProjectPage = ({ id }) => {
    // Lấy dữ liệu từ localStorage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // Tìm project theo id
    const currentProject = projects.find((project) => project.id == id);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Tạo ra project mới
            const formData = {
                id: currentProject.id,
                name: projectName.value,
            };
            // Tạo ra mảng newProjects mới
            const newProjects = projects.map((project) => {
                // nếu project.id == formData.id thì trả về mảng đã cập nhật phần tử mới
                // ngược lại trả về mảng không cập nhật gì
                return project.id == formdata.id ? formData : project;
            });

            // lưu vào localStorage
            localStorage.setItem("projects", JSON.stringify(newProjects));

            // chuyển hướng về trang admin/projects
            router.navigate("/admin/projects");
        });
    });

    return `<div class="container">
            <h1>Thêm sản phẩm</h1>
                <form action="" id="form-add">
                    <div class="form-group">
                        <label for="" class="form-label">Tên dự án</label>
                        <input type="text" class="form-control" id="project-name" value="${currentProject.name}" />
                    </div>
                    <button class="btn btn-primary">Cập nhật</button>
                </form>
    </div>`;
};

export default AdminEditProjectPage;
