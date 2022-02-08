import Banner from "../../components/banner";
import axios from "axios";

const AdminPosts = {
    async render(){
        const response = await axios.get('https://5e79b4b817314d00161333da.mockapi.io/posts');
        return `
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                ${Banner.render()}
                </div>
                <div class="news">
                    <table>
                        <thead>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tiêu đề</th>
                            <th></th>
                        </thead>
                        <tbody>
                            ${response.data.map((post, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>
                                        <img src="${post.img}" alt="" width="50"/>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                                    </td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        `
    }
};
export default AdminPosts;