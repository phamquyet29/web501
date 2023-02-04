// import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const AdminProjectsPage = () => {
    // localStorage
    const [data, setData] = useState([]);

    useEffect(() => {
        // OR
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        setData(projects);
    }, []);
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const newProjects = data.filter((project) => project.id != id);

                localStorage.setItem("projects", JSON.stringify(newProjects));

                setData(newProjects);
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
                        ${data
                            .map((project, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-name="Dat" data-id="${
                                            project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/project/:id/:action">Edit</a>
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
