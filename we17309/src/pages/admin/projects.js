import { projects } from "@/data";
import { useEffect, useState } from "@/lib";
const ProjectsPage = () => {
    /**
     *
     * Bước 1: Khởi tạo state
     * Bước 2: render HTML
     * Bước 3: Chạy vào hàm useEffect
     *    - Lấy ra các nút remove
     *    - Thêm sự kiện click cho các nút remove
     */
    const [data, setData] = useState(projects); //

    useEffect(() => {
        // 3
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                removeItem(id);
            });
        }
    });

    const removeItem = (id) => {
        setData(data.filter((project) => project.id != id));
    };
    // 2
    return `<div>
        <h1>Quản lý dự án</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên dự án</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            ${data
                .map(
                    (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>
                        <button data-id="${
                            project.id
                        }" class="btn btn-remove btn-danger">Remove</button>
                    </td>
                </tr>
            `
                )
                .join("")}
            
        </tbody>
    </div>`;
};

export default ProjectsPage;
