import { addProject } from "../../api/project";
import { router, useEffect, useState } from "../../lib";
import { object, string } from "yup";

const projectSchema = object({
    name: string().required("Tên không được để trống"),
    description: string().required(),
});

const AdminAddProjectsPage = () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectDesc = document.getElementById("project-desc");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const formData = {
                name: projectName.value,
                description: projectDesc.value,
                img: "https://picsum.photos/400/400",
            };
            projectSchema
                .validate(formData, { abortEarly: false })
                .then(() => {
                    // addProject(formData).then(() => router.navigate("/admin/projects"));
                })
                .catch((error) => {
                    const formErrorEl = document.querySelectorAll(".form-error");
                    formErrorEl.forEach((element, index) => {
                        element.innerHTML = error.errors[index];
                    });
                });
            // call api va tham phan tu
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" />
                <div class="form-error"></div>
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Mô tả dự án</label>
                <textarea  class="form-control" id="project-desc"></textarea>
                <div class="form-error"></div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminAddProjectsPage;
