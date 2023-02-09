import { useEffect, router, useState } from "@/lib";
const AdminProjectEditPage = ({ projectId }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${projectId}`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // disable reload

            const formData = {
                name: projectName.value,
                author: projectAuthor.value,
            };
            // setTimeout
            fetch(`http://localhost:3000/projects/${projectId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/admin/projects"))
                .catch((error) => console.log(error));
        });
    });
    return `<div>
        <h1>Edit dự án</h1>
        <form id="form-edit">
            <input type="text" id="project-name" class="border" value="${project.name}"/>
            <input type="text" id="project-author" class="border" value="${project.author}"/>
            <button>Sửa</button>
        </form>
    </div>`;
};

export default AdminProjectEditPage;
