// import { projects } from "../../data";
import { useState, useEffect } from "../../lib";

const AdminProjectsPage = () => {
    // Bước 1: Khởi tạo biến data và hàm setData, giá trị là 1 mảng rỗng
    const [projects, setProjects] = useState([]);

    // Bước 3: Lấy dữ liệu từ localStorage và gán vào biến data
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));

        // const projects = JSON.parse(localStorage.getItem("projects")) || [];
        // setData(projects);
    }, []);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            // Viết sự kiện cho từng button remove
            btn.addEventListener("click", function () {
                // Lấy id từ data-id của button
                const id = btn.dataset.id;
                // Lọc ra các phần tử có id khác với id của button
                const newProjects = data.filter((project) => project.id != id);

                // Lưu vào localStorage
                localStorage.setItem("projects", JSON.stringify(newProjects));

                // Gán lại giá trị cho biến data
                setData(newProjects);
            });
        }
    });
    // Bước 2: Hiển thị ra ngoài màn hình
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
                        ${projects
                            .map(function (project, index) {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
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
// Bước 2: truy cập thư mục dự án, bật terminal
// json-server --watch db.json
// nếu lỗi:
// truy cập : https://angular.io/guide/setup-local
// chay dong lenh: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

// endpoint

// GET /projects -> lấy danh sách
// GET /projects/:id -> lấy 1 phần tử
// POST /projects -> thêm phần tử ( có 1 object gửi lên cùng)
// PUT /projects/:id -> Cập nhật
// DELETE /projects/:id -> xóa phần tử
