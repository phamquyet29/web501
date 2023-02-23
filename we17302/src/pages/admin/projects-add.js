import { addProject } from "@/api/project";
import { useEffect, router } from "@/lib";
import axios from "axios";
import { object, string } from "yup";

const projectSchema = object({
    name: string().required(),
    author: string().required(),
});

const AdminProjectAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault(); // disable reload
            try {
                const formData = {
                    name: projectName.value,
                    author: projectAuthor.value,
                };

                projectSchema
                    .validate(formData, { abortEarly: false })
                    .then(() => {
                        console.log("thành công");
                        addProject(formData);
                    })
                    .catch((error) => {
                        console.log(error.errors);
                    });
                //
                // router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <h1>Thêm dự án</h1>
        <form id="form-add">
            <input type="text" id="project-name" class="border"/>
            <input type="text" id="project-author" class="border"/>
            <button>Thêm</button>
        </form>
    </div>`;
};

export default AdminProjectAddPage;
