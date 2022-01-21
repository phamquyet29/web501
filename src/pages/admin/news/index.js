import { getAll, remove } from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";

const AdminNewsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý bài viết
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/news/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <!-- Heroicon name: solid/check -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <table>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tiêu đề</th>
                        <th></th>
                    </tr>
                    <tbody>
                        ${data.map((post, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td><img src="${post.img}" width="50"/></td>
                                <td>${post.title}</td>
                                <td>
                                    <a href="/admin/news/${post.id}/edit">Edit</a>
                                    <button data-id=${post.id} class="btn btn-remove">Remove</button>
                                </td>
                            </tr>
                        `).join("")}
                        
                    </tbody>
                    </thead>
                </table>
                </div>
            </main>
        </div>
        `;
    },
    afterRender(){
        // lấy toàn bộ danh sách button có class là .btn
        const buttons = document.querySelectorAll('.btn');
        // tạo vòng lặp để lấy ra từng button
        buttons.forEach(button => {
            // sử dụng dataset để lấy id từ data-*
            const id = button.dataset.id;
            // click vào button thì xóa phần tử trong mảng
            // dựa vào ID vừa lấy được
            button.addEventListener('click', () => {
                const confirm = window.confirm("Mày có chắc chắn muốn xóa không?");
                if(confirm){
                    remove(id).then(() => console.log("Mày đã xóa thành công"));
                }
            })
        });
    }
};
export default AdminNewsPage;