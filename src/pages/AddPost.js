import axios from "axios";
import Banner from "../components/banner";

const AddPost = {
    async render() {

        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
            <form action="" id="form-add-post">
                <input type="text"
                id="title-post"
                class="border border-black"
                placeholder="Title post"
                > <br />
                <input type="text"
                id="img-post"
                class="border border-black"
                placeholder="Imager post"
                > <br />
                <textarea name="" 
                id="desc-post" 
                class="border border-black"
                cols="30" 
                rows="10"></textarea>
                <button class="bg-blue-500 p-4 inline-block text-white">Thêm bài viết</button>
            </form>
            </div>
        `;
    },
    afterRender(){
        const formAdd = document.querySelector('#form-add-post');
        formAdd.addEventListener('submit', (e) => {
            e.preventDefault();

            const dataFake = {
                "title": "Bai viet moi vua them 01",
                "img": "https://picsum.photos/200/200",
                "desc": "Mo ta san pham"
            }

            // call api thêm sản phẩm
            axios.post('http://localhost:3001/posts', dataFake)
        })
    }
};
export default AddPost;