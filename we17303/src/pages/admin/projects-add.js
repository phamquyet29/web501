import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect } from "../../lib";
import { object, string } from "yup";

const projectSchema = object({
    name: string().required(),
    author: string().required(),
    description: string(),
});

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

                await projectSchema.validate(formData, { abortEarly: false });

                // await addProject(formData);
                // router.navigate("/admin/projects");
            } catch (error) {
                error.inner.forEach((error) => {
                    console.log(error.path);
                    // switch
                });
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
