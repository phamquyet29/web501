import { addProject } from "@/api/project";
import { useEffect, router, useState } from "../../lib";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AdminProjectsAddPage = () => {
    let description;
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    author: projectAuthor.value,
                    description: description.getData(),
                };
                console.log(formData);
                // await addProject(formData);
                // router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    useEffect(() => {
        ClassicEditor.create(document.querySelector("#project-description"))
            .then((editor) => {
                description = editor;
                // window.editor = editor;
            })
            .catch((error) => {
                console.error("There was a problem initializing the editor.", error);
            });
    }, []);
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
            <div class="form-group">
                <label for="" class="form-label">Mô tả dự án</label>
                <textarea class="form-control" id="project-description"></textarea>
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;

// npm i -g <package>: cài đặt package ở ổ hệ thống
// npm i --save-dev <package> hoặc npm i -D <package>
// Vẫn là cài đặt package nhưng nó chỉ chạy ở môi trường development
// npm run build

// npm i --save <package> hoặc npm i <package>:
// cài đặt project, chạy trong quá trình buildtime
