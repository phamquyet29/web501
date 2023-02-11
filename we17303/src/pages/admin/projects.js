import { deleteProject, getProjects } from "@/api/project";
import { useEffect, useState } from "@/lib";
import axios from "axios";

const AdminProjectsPage = () => {
    // localStorage
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setProjects(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async () => {
                try {
                    const id = this.dataset.id;

                    deleteProject(id).then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });

    return `<div class="container pt-5">
            <h1>Quản lý dự án</h1>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${projects
                            .map((project, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-name="Dat" data-id="${
                                            project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/project/${project.id}/edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                            })
                            .join("")} 
                        
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;

// Bước 1: npm i -g json-server
// Bước 2: truy cập vào project
//         json-server --watch db.json
// Bạn nào lỗi
// angular.io/guide/setup-local
// copy và paste vào terminal
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
// Chạy lại json-server --watch db.json
