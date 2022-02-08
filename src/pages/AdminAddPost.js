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
                > 
                <br />
                <input type="file"
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
        const imgPost = document.querySelector('#img-post');

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        formAdd.addEventListener('submit', (e) => {
            e.preventDefault();

            const file = imgPost.files[0];

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET)
            
            
            // call api cloudinary
            axios.post(CLOUDINARY_API,formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            })


            // const dataFake = {
            //     "title": "Bai viet moi vua them 01",
            //     "img": "https://picsum.photos/200/200",
            //     "desc": "Mo ta san pham"
            // }

            // // call api thêm sản phẩm
            // axios.post('http://localhost:3001/posts', dataFake)
        })
    }
};
export default AddPost;