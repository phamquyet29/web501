import { projects } from "../../data";
import { useState, useEffect } from "../../lib";

const AdminProjectsPage = () => {
    const [data, setData] = useState(projects);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                setData(data.filter((project) => project.id != id));
            });
        }
    });
    return `<div class="container pt-5">
                <h1>Quản lý dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data
                            .map(function (project, index) {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-id="${
                                            project.id
                                        }" data-abc="ahihi" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a href="">Sửa</a>
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
