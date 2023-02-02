import { projects } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
    // projects  = 3
    const [data, setData] = useState(projects);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                setData(data.filter((project) => project.id != id));
            });
        }
    });

    return `<div class="container mt-5">
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
                            .map((project, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td width="150">
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">Xóa</button>
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
