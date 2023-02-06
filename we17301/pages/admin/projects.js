import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
    const [data, setData] = useState([]);
    // chạy sau khi render

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then((response) => response.json())
            .then(({ data }) => {
                setData(data);
            });
        // lấy dữ liệu từ localStorage
        // const projects = JSON.parse(localStorage.getItem("projects")) || [];
        // setData(projects);
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            // btn là 1 phần tử trong mảng?
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((project) => project.id != id);
                // thiết lập lại dữ liệu ở localStorage
                localStorage.setItem("projects", JSON.stringify(newData));
                setData(newData); // set lại data
            });
        }
    });

    return /*html*/ `<div class="container mt-5"> 
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
                                    <td>${project.first_name}</td>
                                    <td width="150">
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
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
