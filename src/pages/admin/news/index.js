import AdminNav from "../../../components/AdminNav";
import data from "../../../data";

const AdminNewsPage = {
    render() {
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Quản lý bài viết
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                                                    <th scope="col" class="relative px-6 py-3"></th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                ${data.map((post, index) => `
                                                        <tr>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${index + 1}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${post.title}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <button data-id=${post.id} class="btn btn-remove inline-block px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                                                            </td>
                                                        </tr>
                                                
                                                `).join("")}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                    </div>

                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                // remove
                console.log(id);
            });
        });
    },
};
export default AdminNewsPage;